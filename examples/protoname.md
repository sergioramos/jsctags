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
    "id": "34f68480-90cb-11e5-9b40-15653ef12fda",
    "name": "Base",
    "addr": "/Base/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-13[0:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6ab90-90cb-11e5-9b40-15653ef12fda",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 2,
    "namespace": "Base",
    "parent": "34f68480-90cb-11e5-9b40-15653ef12fda",
    "origin": {
      "!span": "24[1:5]-33[1:14]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a0-90cb-11e5-9b40-15653ef12fda",
    "name": "Sub1",
    "addr": "/Sub1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "origin": {
      "!span": "105[6:9]-109[6:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a1-90cb-11e5-9b40-15653ef12fda",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 8,
    "namespace": "Sub1",
    "parent": "34f6d2a0-90cb-11e5-9b40-15653ef12fda",
    "origin": {
      "!span": "120[7:5]-129[7:14]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Base.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a2-90cb-11e5-9b40-15653ef12fda",
    "name": "Sub2",
    "addr": "/Sub2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "origin": {
      "!span": "175[10:9]-179[10:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a3-90cb-11e5-9b40-15653ef12fda",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 12,
    "namespace": "Sub2",
    "parent": "34f6d2a2-90cb-11e5-9b40-15653ef12fda",
    "origin": {
      "!span": "190[11:5]-199[11:14]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Base.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a4-90cb-11e5-9b40-15653ef12fda",
    "name": "Base2",
    "addr": "/Base2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 15,
    "origin": {
      "!span": "264[14:9]-269[14:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a5-90cb-11e5-9b40-15653ef12fda",
    "name": "Sub3",
    "addr": "/Sub3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 17,
    "origin": {
      "!span": "285[16:9]-289[16:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  },
  {
    "id": "34f6d2a6-90cb-11e5-9b40-15653ef12fda",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 18,
    "namespace": "Sub3",
    "parent": "34f6d2a5-90cb-11e5-9b40-15653ef12fda",
    "origin": {
      "!span": "300[17:5]-309[17:14]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Base2.prototype"
      }
    },
    "tagfile": "__DIR__/protoname.js"
  }
]
```
```ctags
Base	__DIR__/protoname.js	/Base/;"	f	lineno:1	type:void function()
prototype	__DIR__/protoname.js	/prototype/;"	v	lineno:2	namespace:Base
Sub1	__DIR__/protoname.js	/Sub1/;"	f	lineno:7	type:void function()
prototype	__DIR__/protoname.js	/prototype/;"	v	lineno:8	namespace:Sub1
Sub2	__DIR__/protoname.js	/Sub2/;"	f	lineno:11	type:void function()
prototype	__DIR__/protoname.js	/prototype/;"	v	lineno:12	namespace:Sub2
Base2	__DIR__/protoname.js	/Base2/;"	f	lineno:15	type:void function()
Sub3	__DIR__/protoname.js	/Sub3/;"	f	lineno:17	type:void function()
prototype	__DIR__/protoname.js	/prototype/;"	v	lineno:18	namespace:Sub3
```
