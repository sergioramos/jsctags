```js
function Ctor1() { this.x = 10; }
Ctor1.prototype = {a: 1};

function Ctor2() {}

var singleton = {a: 10, b: 20}; //: singleton

new Ctor1(); //: Ctor1
new Ctor2(); //: Ctor2
```
```json
[
  {
    "id": "32aa71a0-90cb-11e5-959f-95e1074d3b8f",
    "name": "Ctor1",
    "addr": "/Ctor1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b0-90cb-11e5-959f-95e1074d3b8f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 2,
    "namespace": "Ctor1",
    "parent": "32aa71a0-90cb-11e5-959f-95e1074d3b8f",
    "origin": {
      "!span": "40[1:6]-49[1:15]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b1-90cb-11e5-959f-95e1074d3b8f",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Ctor1.prototype",
    "parent": "32aa98b0-90cb-11e5-959f-95e1074d3b8f",
    "origin": {
      "!span": "53[1:19]-54[1:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b2-90cb-11e5-959f-95e1074d3b8f",
    "name": "Ctor2",
    "addr": "/Ctor2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 4,
    "origin": {
      "!span": "70[3:9]-75[3:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b3-90cb-11e5-959f-95e1074d3b8f",
    "name": "singleton",
    "addr": "/singleton/",
    "kind": "v",
    "lineno": 6,
    "origin": {
      "!span": "86[5:4]-95[5:13]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b4-90cb-11e5-959f-95e1074d3b8f",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton",
    "parent": "32aa98b3-90cb-11e5-959f-95e1074d3b8f",
    "origin": {
      "!span": "99[5:17]-100[5:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  },
  {
    "id": "32aa98b5-90cb-11e5-959f-95e1074d3b8f",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton",
    "parent": "32aa98b3-90cb-11e5-959f-95e1074d3b8f",
    "origin": {
      "!span": "106[5:24]-107[5:25]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/objnames.js"
  }
]
```
```ctags
Ctor1	__DIR__/objnames.js	/Ctor1/;"	f	lineno:1	type:void function()
prototype	__DIR__/objnames.js	/prototype/;"	v	lineno:2	namespace:Ctor1
a	__DIR__/objnames.js	/a/;"	v	lineno:2	namespace:Ctor1.prototype	type:number
Ctor2	__DIR__/objnames.js	/Ctor2/;"	f	lineno:4	type:void function()
singleton	__DIR__/objnames.js	/singleton/;"	v	lineno:6
a	__DIR__/objnames.js	/a/;"	v	lineno:6	namespace:singleton	type:number
b	__DIR__/objnames.js	/b/;"	v	lineno:6	namespace:singleton	type:number
```
