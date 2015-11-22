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
    "id": "a6d7b000-90bd-11e5-a4f7-df31f7336326",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d710-90bd-11e5-a4f7-df31f7336326",
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "lineno": 2,
    "namespace": "x",
    "parent": "a6d7b000-90bd-11e5-a4f7-df31f7336326",
    "origin": {
      "!span": "14[1:2]-19[1:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d711-90bd-11e5-a4f7-df31f7336326",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "x.<i>",
    "parent": "a6d7d710-90bd-11e5-a4f7-df31f7336326",
    "origin": {
      "!span": "24[1:12]-25[1:13]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d712-90bd-11e5-a4f7-df31f7336326",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "x.<i>",
    "parent": "a6d7d710-90bd-11e5-a4f7-df31f7336326",
    "origin": {
      "!span": "31[1:19]-32[1:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d713-90bd-11e5-a4f7-df31f7336326",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 6,
    "origin": {
      "!span": "81[5:4]-84[5:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d714-90bd-11e5-a4f7-df31f7336326",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "obj",
    "parent": "a6d7d713-90bd-11e5-a4f7-df31f7336326",
    "origin": {
      "!span": "88[5:11]-89[5:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/computedprop.js"
  },
  {
    "id": "a6d7d715-90bd-11e5-a4f7-df31f7336326",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "obj",
    "parent": "a6d7d713-90bd-11e5-a4f7-df31f7336326",
    "origin": {
      "!span": "98[5:21]-99[5:22]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
