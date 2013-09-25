```js
// Issue #16

var f = function(n) {
  n.prototype = {}; // Make this count as a type construction function
  f(n()); // Push an IsCallee constraint from the body
};
f(f);

// Create a self-referential type
var x = [x];

// Force analysis
x[0]; //: [?]

function goop(n) {
  n.prototype = {};
  return function(f){f(1);};
};
goop(1)(goop);
```
```json
[
  {
    "name": "f",
    "addr": "/function\(n\) \{/",
    "kind": "f",
    "type": "void function(f)",
    "lineno": 3
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "[[?]]",
    "lineno": 10
  },
  {
    "name": "goop",
    "addr": "/function goop\(n\) \{/",
    "kind": "f",
    "type": "goop.!ret function(number)",
    "lineno": 15
  }
]
```
```ctags
f		/function\(n\) \{/;'	f	lineno:3	type:void function(f)

x		/x/;'	v	lineno:10	type:[[?]]

goop		/function goop\(n\) \{/;'	f	lineno:15	type:goop.!ret function(number)
```
