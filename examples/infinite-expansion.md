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
    "addr": "/f/",
    "kind": "f",
    "type": "void function(f)",
    "lineno": 3,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js"
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "[x]",
    "lineno": 10,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js"
  },
  {
    "name": "goop",
    "addr": "/goop/",
    "kind": "f",
    "type": "fn(f: ?) function(number)",
    "lineno": 15,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js"
  }
]
```
```ctags
f	/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js	/f/;"	f	lineno:3	type:void function(f)
goop	/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js	/goop/;"	f	lineno:15	type:fn(f: ?) function(number)
x	/usr/local/lib/node_modules/jsctags/test/cases/infinite-expansion.js	/x/;"	v	lineno:10	type:[x]
```
