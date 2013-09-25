var interpolate = require('util').format,
    condense = require('./condenser'),
    path = require('path'),
    fs = require('fs')

module.exports = function (file, dir, content, callback) {
  condense(dir, file, content, function (e, condense) {
    if(e) throw e
    var types = {}
    var tags = []
    
    parse(content, condense, tags, types)
    tags = tags.sort(function (tag1, tag2) { return tag1.lineno - tag2.lineno })
    callback(null, tags)
  })
}

module.exports.ctags = require('./ctags')


var parse = function (file, condense, tags, types) {
  Object.keys(condense).forEach(function (name) {
    tagger(file, condense[name], tags, types, [], condense)(name)
  })
}

var kind = function (type) {
  if(type.match(/^fn/)) return 'f'
  return 'v'
}

var returns = function (type) {
  var returns = type.match(/-> (.*?)$/)
  
  if(returns) returns = returns.pop()
  else return 'void'
  
  if(returns && returns.match(/^\[/)) return 'Array'
  return returns
}

var typeFn = function (type, define) {
  var args = type.match(/^fn\((.*?)\)/)
  if(args) args = args.pop().split(',').map(function (arg) {
    var type = arg.match(/^.*?\: (.*?)$/)
    if(type) type = type.pop()

    if(define[type] && define[type]['!type'])
      return typeFn(define[type]['!type'], define)
      
    if(type && type.match(/^\[/))
      return 'Array'.concat(type)

    else return type
  }).filter(function (type) {
    return !!type
  })

  return interpolate('%s function(%s)', returns(type), args ? args.join(', ') : '')
}

var type = function (type, define) {
  if(type.match(/^bool/)) return 'boolean'
  if(type.match(/^number/)) return 'number'
  if(type.match(/^fn/)) return typeFn(type, define)
  return type
}

var addr = function (span, file) {
  var pos = span.match(/^(\d*?)\[\d*?\:\d*?\]-(\d*?)\[\d*?\:\d*?\]$/)
  var end = pos.pop()
  var start = pos.pop()
  
  var blob = file.slice(start, end)
  return new RegExp(blob.split(/\n/).shift().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'))
}

var lineno = function (span) {
  return Number(span.match(/^\d*?\[(\d*?)\:\d*?\]-\d*?\[\d*?\:\d*?\]$/).pop()) + 1
}

var tagger = function (file, condense, tags, types, parent, root) {
  var define = root['!define'] || {}

  return function (name) {
    if(typeof condense !== 'object' || name.match(/^\!/)) return 0
    var _type = condense['!type']
    var _span = condense['!span']

    Object.keys(condense).forEach(function (key) {
      if(key.match(/^\!/)) return 0
      var p = parent.slice()
      p.push(name)
      tagger(file, condense[key], tags, types, p, root)(key)
    })

    if(!_span || !_type) return 0

    var tag = {
      name: name,
      addr: addr(_span, file).toString(),
      kind: kind(_type),
      type: type(_type, define),
      lineno: lineno(_span),
    }
    
    if(parent.length) tag.namespace = parent.join('.')
    
    return tags.push(tag)
  }
}