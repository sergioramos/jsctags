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
    "id": "0ce2a050-7aef-11e6-a5b4-018038993860",
    "name": "A",
    "addr": "/A/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce47510-7aef-11e6-a5b4-018038993860",
    "name": "prop_A",
    "addr": "/prop_A/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "A.prototype",
    "parent": "0ce3ffe0-7aef-11e6-a5b4-018038993860",
    "origin": {
      "!span": "28[1:12]-34[1:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce49c20-7aef-11e6-a5b4-018038993860",
    "name": "B",
    "addr": "/B/",
    "kind": "f",
    "type": "void function()",
    "lineno": 3,
    "origin": {
      "!span": "49[2:9]-50[2:10]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce4c330-7aef-11e6-a5b4-018038993860",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 4,
    "namespace": "B",
    "parent": "0ce49c20-7aef-11e6-a5b4-018038993860",
    "origin": {
      "!span": "58[3:2]-67[3:11]",
      "!data": {
        "isConstructor": false,
        "type": "A.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce4c331-7aef-11e6-a5b4-018038993860",
    "name": "prop_B",
    "addr": "/prop_B/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "B.prototype",
    "parent": "0ce4c330-7aef-11e6-a5b4-018038993860",
    "origin": {
      "!span": "89[4:12]-95[4:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce4c332-7aef-11e6-a5b4-018038993860",
    "name": "C",
    "addr": "/C/",
    "kind": "f",
    "type": "void function()",
    "lineno": 6,
    "origin": {
      "!span": "110[5:9]-111[5:10]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce4ea40-7aef-11e6-a5b4-018038993860",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "C",
    "parent": "0ce4c332-7aef-11e6-a5b4-018038993860",
    "origin": {
      "!span": "119[6:2]-128[6:11]",
      "!data": {
        "isConstructor": false,
        "type": "A.prototype"
      }
    },
    "tagfile": "__DIR__/new_to_prototype.js"
  },
  {
    "id": "0ce4ea41-7aef-11e6-a5b4-018038993860",
    "name": "prop_C",
    "addr": "/prop_C/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "C.prototype",
    "parent": "0ce4ea40-7aef-11e6-a5b4-018038993860",
    "origin": {
      "!span": "150[7:12]-156[7:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
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
