```js
function Base() {}
Base.prototype = {};

Base.prototype; //: Base.prototype
new Base; //: Base

function Sub1() {}
Sub1.prototype = new Base();
new Sub1(); //: Sub1

function Sub2() {}
Sub2.prototype = Object.create(Base.prototype);
new Sub2(); //: Sub2

function Base2() {}

function Sub3() {}
Sub3.prototype = new Base2();

new Sub3(); //: Sub3
```
```json
[
  {
    "name": "Base",
    "addr": "/Base/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-13[0:13]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "name": "Sub1",
    "addr": "/Sub1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "origin": {
      "!span": "105[6:9]-109[6:13]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "name": "Sub2",
    "addr": "/Sub2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "origin": {
      "!span": "175[10:9]-179[10:13]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "name": "Base2",
    "addr": "/Base2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 15,
    "origin": {
      "!span": "264[14:9]-269[14:14]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "name": "Sub3",
    "addr": "/Sub3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 17,
    "origin": {
      "!span": "285[16:9]-289[16:13]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/protoname.js"
  }
]
```
```ctags
Base	__DIR__/protoname.js	/Base/;"	f	lineno:1	type:void function()
Sub1	__DIR__/protoname.js	/Sub1/;"	f	lineno:7	type:void function()
Sub2	__DIR__/protoname.js	/Sub2/;"	f	lineno:11	type:void function()
Base2	__DIR__/protoname.js	/Base2/;"	f	lineno:15	type:void function()
Sub3	__DIR__/protoname.js	/Sub3/;"	f	lineno:17	type:void function()
```
