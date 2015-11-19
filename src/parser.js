var format = require('util').format;
var isString = require('is-string');
var includes = require('lodash.includes');
var isUndefined = require('lodash.isundefined');
var isObject = require('lodash.isplainobject');
var get = require('lodash.get');
var objectHash = require('object-hash');
var clone = require('lodash.clonedeep');

var condense = require('./condenser');

const MATCHES = {
  pos: /^(\d*?)\[\d*?\:\d*?\]-(\d*?)\[\d*?\:\d*?\]$/,
  addr: /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
  fn: /^fn\*?\(/,
  args: /^fn\*?\((.*?)\)/,
  arg: /^.*?\: (.*?)$/,
  arrArg: /^\[/,
  ret: /-> (.*?)$/,
  lineno: /^\d*?\[(\d*?)\:\d*?\]-\d*?\[\d*?\:\d*?\]$/,
  namespace: /\//
};

const DEFAULT_TYPES = [
  /^\?/,
  MATCHES.fn,
  /^\</,
  /^\{/,
  /^\[/,
  /^\+/,
  'number',
  'bool',
  'string'
];

const TYPE_MAPPING = {
  'Number': 'number',
  'bool': 'boolean',
  'String': 'string',
  'RegExp': 'regexp'
};

var hashNode = function (n) {
  var node = clone(n);
  node.namespace = undefined;
  return objectHash(node);
};

var isDefaultType = function (type) {
  // nested object
  if (isUndefined(type)) {
    return true;
  }

  return DEFAULT_TYPES.some(function (dt) {
    if (isString(dt)) {
      return type === dt;
    }

    return dt.test(type);
  });
};

var Parser = function (ctx) {
  if (!(this instanceof Parser)) {
    return new Parser(ctx);
  }

  this.ctx = ctx;
  this.condense = ctx.condense || {};
  this.tags = [];
  this.define = {};
  this.walked = [];
};

Parser.prototype.parse = function (fn) {
  var self = this;

  if (Object.keys(self.condense).length) {
    return self.hasCondense(fn);
  }

  condense(self.ctx, function (err, condense) {
    if (err) {
      return fn(err);
    }

    self.condense = condense;
    self.hasCondense(fn);
  });
};

Parser.prototype.hasCondense = function (fn) {
  if (this.condense['!define']) {
    this.define = this.condense['!define'];
  }

  this.fromTree(this.condense);

  this.tags = this.tags.sort(function (a, b) {
    return a.lineno - b.lineno;
  });

  fn(null, this.tags);
};

Parser.prototype.fromTree = function (tree, parent) {
  if (!isObject(tree)) {
    return;
  }

  return Object.keys(tree).filter(function (key) {
    return !(/^!/.test(key));
  }).map(function (name) {
    return this.onNode(name, tree[name], parent);
  }, this);
};

Parser.prototype.namespace = function (node, parent) {
  if (!parent) {
    return;
  }

  if (parent.namespace) {
    return format('%s.%s', parent.namespace, parent.name);
  }

  if (MATCHES.namespace.test(parent.name)) {
    return;
  }

  return parent.name;
};

Parser.prototype.lineno = function (node) {
  if (!isString(node['!span'])) {
    return;
  }

  return Number(node['!span'].match(MATCHES.lineno).pop()) + 1;
};

Parser.prototype.returns = function (node) {
  if (!isString(node['!type'])) {
    return;
  }

  var ret = node['!type'].match(MATCHES.ret);

  if (!ret || !Array.isArray(ret)) {
    return 'void';
  }

  return this.type({
    '!type': ret[1]
  });
};

Parser.prototype.isFn = function (node) {
  if (!isString(node['!type'])) {
    return false;
  }

  return MATCHES.fn.test(node['!type']);
};

Parser.prototype.fnArgs = function (node) {
  if (!isString(node['!type'])) {
    return [];
  }

  var args = node['!type'].match(MATCHES.args);

  if (!Array.isArray(args) || !args.length) {
    return '';
  }

  return args.pop().split(',').map(function (arg) {
    var t = arg.match(MATCHES.arg);

    if (!Array.isArray(t) || !t.length) {
      return;
    }

    var type = t.pop();

    if (this.define[type] && this.define[type]['!type']) {
      return this.typeFn(this.define[type]['!type']);
    }

    if (type && MATCHES.arrArg.test(type)) {
      return 'Array'.concat(type);
    }

    return type;
  }, this).filter(function (type) {
    return !!type;
  });
};

Parser.prototype.typeFn = function (node) {
  var args = this.fnArgs(node);
  var ret = this.returns(node);

  return format('%s function(%s)', ret, args ? args.join(', ') : '');
};

Parser.prototype.type = function (node) {
  if (!isString(node['!type'])) {
    return;
  }

  if (this.isFn(node)) {
    return this.typeFn(node);
  }

  var type = node['!type'].replace(/^\+/, '');

  if (TYPE_MAPPING[type]) {
    return TYPE_MAPPING[type];
  }

  return type;
};

Parser.prototype.kind = function (node) {
  return this.isFn(node) ? 'f' : 'v';
};

Parser.prototype.addr = function (node) {
  if (!isString(node['!span'])) {
    return;
  }

  var pos = node['!span'].match(MATCHES.pos);

  var end = pos.pop();
  var start = pos.pop();

  var blob = this.ctx.content.slice(start, end);
  var regexp = blob.split(/\n/).shift().replace(MATCHES.addr, '\\$&');
  return new RegExp(regexp).toString();
};

Parser.prototype.walk = function (node, parent) {
  var hash = parent ? hashNode(parent) : undefined;
  var id = format('%s-%s', node, hash);

  if (hash && includes(this.walked, id)) {
    return;
  }

  if (parent) {
    this.walked.push(id);
  }

  return get(this.condense, node, node);
};

Parser.prototype.onNode = function (name, node, parent) {
  if (!node) {
    return false;
  }

  if (isString(node)) {
    node = this.walk(node, parent);
  }

  if (!isObject(node)) {
    return;
  }

  if (!isDefaultType(node['!type'])) {
    return;
  }

  var tag = {
    name: name,
    addr: this.addr(node),
    kind: this.kind(node),
    type: this.type(node),
    lineno: this.lineno(node),
    namespace: this.namespace(node, parent),
    origin: {
      '!span': node['!span'],
      '!type': node['!type']
    }
  };

  if (node['!type'] || node['!span']) {
    this.tags.push(tag);
  }

  this.fromTree(node, tag);
};

module.exports = function (ctx, fn) {
  return (new Parser(ctx)).parse(fn);
};

module.exports.ctags = require('./ctags');
