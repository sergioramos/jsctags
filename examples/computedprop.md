```js
var x = {};
x[foo()] = {a: 10, b: 20};
x.bar.a; //: number
x.bar. //+? a, b

var obj = {a: "bar", b: "baz"};
obj[foo()]; //:? string
```
```json
[
  {
    "id": "25f12670-90cb-11e5-8a72-91519013901d",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d80-90cb-11e5-8a72-91519013901d",
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "lineno": 2,
    "namespace": "x",
    "parent": "25f12670-90cb-11e5-8a72-91519013901d",
    "origin": {
      "!span": "14[1:2]-19[1:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d81-90cb-11e5-8a72-91519013901d",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "x.<i>",
    "parent": "25f14d80-90cb-11e5-8a72-91519013901d",
    "origin": {
      "!span": "24[1:12]-25[1:13]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d82-90cb-11e5-8a72-91519013901d",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "x.<i>",
    "parent": "25f14d80-90cb-11e5-8a72-91519013901d",
    "origin": {
      "!span": "31[1:19]-32[1:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d83-90cb-11e5-8a72-91519013901d",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 6,
    "origin": {
      "!span": "81[5:4]-84[5:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d84-90cb-11e5-8a72-91519013901d",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "obj",
    "parent": "25f14d83-90cb-11e5-8a72-91519013901d",
    "origin": {
      "!span": "88[5:11]-89[5:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "25f14d85-90cb-11e5-8a72-91519013901d",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "obj",
    "parent": "25f14d83-90cb-11e5-8a72-91519013901d",
    "origin": {
      "!span": "98[5:21]-99[5:22]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  }
]
```
```ctags
x	__DIR__/computedprop.js	/x/;"	v	lineno:1
<i>	__DIR__/computedprop.js	/foo\(\)/;"	v	lineno:2	namespace:x
a	__DIR__/computedprop.js	/a/;"	v	lineno:2	namespace:x.<i>	type:number
b	__DIR__/computedprop.js	/b/;"	v	lineno:2	namespace:x.<i>	type:number
obj	__DIR__/computedprop.js	/obj/;"	v	lineno:6
a	__DIR__/computedprop.js	/a/;"	v	lineno:6	namespace:obj	type:string
b	__DIR__/computedprop.js	/b/;"	v	lineno:6	namespace:obj	type:string
```
