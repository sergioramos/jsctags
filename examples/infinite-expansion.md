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
    "origin": {
      "!span": "18[2:4]-19[2:5]",
      "!type": "fn(n: f)"
    },
    "tagfile": "__DIR__/infinite-expansion.js"
  },
  {
    "name": "n",
    "addr": "/n/",
    "kind": "f",
    "type": "void function(f)",
    "lineno": 3,
    "namespace": "f",
    "origin": {
      "!span": "31[2:17]-32[2:18]",
      "!type": "fn(n: f)"
    },
    "tagfile": "__DIR__/infinite-expansion.js"
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "[x]",
    "lineno": 10,
    "origin": {
      "!span": "210[9:4]-211[9:5]",
      "!type": "[x]"
    },
    "tagfile": "__DIR__/infinite-expansion.js"
  },
  {
    "name": "goop",
    "addr": "/goop/",
    "kind": "f",
    "type": "void function(?) function(number)",
    "lineno": 15,
    "origin": {
      "!span": "262[14:9]-266[14:13]",
      "!type": "fn(n: number) -> fn(f: ?)"
    },
    "tagfile": "__DIR__/infinite-expansion.js"
  },
  {
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "number",
    "lineno": 15,
    "namespace": "goop",
    "origin": {
      "!span": "267[14:14]-268[14:15]",
      "!type": "number"
    },
    "tagfile": "__DIR__/infinite-expansion.js"
  }
]
```
```ctags
f	__DIR__/infinite-expansion.js	/f/;"	f	lineno:3	type:void function(f)
n	__DIR__/infinite-expansion.js	/n/;"	f	lineno:3	namespace:f	type:void function(f)
x	__DIR__/infinite-expansion.js	/x/;"	v	lineno:10	type:[x]
goop	__DIR__/infinite-expansion.js	/goop/;"	f	lineno:15	type:void function(?) function(number)
n	__DIR__/infinite-expansion.js	/n/;"	v	lineno:15	namespace:goop	type:number
```
