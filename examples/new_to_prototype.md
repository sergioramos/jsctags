```js
function A() {}
A.prototype.prop_A = 1;
function B() {}
B.prototype = new A;
B.prototype.prop_B = 2;
function C() {}
C.prototype = new A;
C.prototype.prop_C = 3;

(new A).prop_ //+ prop_A
;
(new B).prop_ //+ prop_A, prop_B
;
(new C).prop_ //+ prop_A, prop_C
```
```json
[
  {
    "name": "A",
    "addr": "/A/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "prop_A",
    "addr": "/prop_A/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "A.prototype",
    "origin": {
      "!span": "28[1:12]-34[1:18]",
      "!type": "number"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "B",
    "addr": "/B/",
    "kind": "f",
    "type": "void function()",
    "lineno": 3,
    "origin": {
      "!span": "49[2:9]-50[2:10]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 4,
    "namespace": "B",
    "origin": {
      "!span": "58[3:2]-67[3:11]"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "prop_B",
    "addr": "/prop_B/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "B.prototype",
    "origin": {
      "!span": "89[4:12]-95[4:18]",
      "!type": "number"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "C",
    "addr": "/C/",
    "kind": "f",
    "type": "void function()",
    "lineno": 6,
    "origin": {
      "!span": "110[5:9]-111[5:10]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "C",
    "origin": {
      "!span": "119[6:2]-128[6:11]"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "name": "prop_C",
    "addr": "/prop_C/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "C.prototype",
    "origin": {
      "!span": "150[7:12]-156[7:18]",
      "!type": "number"
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  }
]
```
```ctags
A	__DIR__/new_to_prototype.js	/A/;"	f	lineno:1	type:void function()
prop_A	__DIR__/new_to_prototype.js	/prop_A/;"	v	lineno:2	namespace:A.prototype	type:number
B	__DIR__/new_to_prototype.js	/B/;"	f	lineno:3	type:void function()
prototype	__DIR__/new_to_prototype.js	/prototype/;"	v	lineno:4	namespace:B
prop_B	__DIR__/new_to_prototype.js	/prop_B/;"	v	lineno:5	namespace:B.prototype	type:number
C	__DIR__/new_to_prototype.js	/C/;"	f	lineno:6	type:void function()
prototype	__DIR__/new_to_prototype.js	/prototype/;"	v	lineno:7	namespace:C
prop_C	__DIR__/new_to_prototype.js	/prop_C/;"	v	lineno:8	namespace:C.prototype	type:number
```
