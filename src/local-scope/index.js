// Based on tern-local-scope-condense-plugin (https://github.com/sourcegraph/tern-local-scope-condense-plugin)

var tern = require('tern');
var includes = require('lodash.includes');
var walk = require('acorn/dist/walk');
var format = require('util').format;

var defnode = require('./defnode');
var walkall = require('./walkall');

function joinPaths (a, b) {
  if (a) {
    return a + '.' + b;
  }

  return b;
}

tern.registerPlugin('local-scope', function (server, options) {
  var getId = function (n) {
    return format('%d-%d', n.start, n.end);
  };

  function visitScope (state, scope, path) {
    // detect cycles
    if (scope._localScopeCondenseSeen) {
      return;
    }

    scope._localScopeCondenseSeen = true;

    Object.keys(scope.props).sort().forEach(function (prop) {
      visitAVal(state, scope.props[prop], joinPaths(path, prop));
    });
  }

  function visitNode (state, node, path) {
    walk.recursive(node, {
      path: path,
      ids: []
    }, walkall.makeVisitors(function (node, st, walk) {
      if (includes(st.ids, getId(node))) {
        return;
      }

      st.ids.push(getId(node));

      if (!node.scope) {
        return;
      }

      visitScope(state, node.scope, st.path);

      walk(node, {
        ids: st.ids,
        path: st.path
      });
    }));
  }

  function visitAVal (state, av, path) {
    if (av._localScopeCondenseSeen) {
      return;
    }

    av._localScopeCondenseSeen = true;

    if (!state.isTarget(av.origin)) {
      return;
    }

    if (av.fnArgs) {
      return;
    }

    var span = state.getSpan(av);

    if (seenSpans[span]) {
      return;
    }

    state.types[path] = {
      type: av,
      span: span,
      doc: av.doc,
      data: av.metaData
    };

    if (!av.originNode) {
      return;
    }

    var node = av.originNode;
    var ast = node.sourceFile.ast;
    var defNode;

    try {
      defNode = defnode.findDefinitionNode(ast, node.start, node.end);
    } catch (err) {
      console.error('warning: findDefinitionNode failed:', err, 'at', node.type, 'in', node.sourceFile.name, node.start + '-' + node.end, 'for path', path);
    }

    if (defNode) {
      visitNode(state, defNode, path);
    }
  }

  var seenSpans = {};

  return {
    passes: {
      postCondenseReach: function (state) {
        // Traverse accessible types first so we name things with reachable path
        // prefixes if possible.
        Object.keys(state.types).sort().forEach(function (path) {
          var data = state.types[path];
          seenSpans[data.span] = true;
          if (data.type.originNode) {
            visitNode(state, data.type.originNode, path);
          }
        });

        // Assume that file scope is not reachable.
        state.cx.parent.files.forEach(function (file) {
          var path = file.name.replace(/\./g, '`');
          visitScope(state, file.scope, path);
          if (state.isTarget(file.name)) {
            visitNode(state, file.ast, path);
          }
        });
      }
    }
  };
});
