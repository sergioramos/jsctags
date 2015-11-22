```js
function hello(a, b) {
  var c = a + b;
  hello(a, c);
  a; //refs: 1,15 2,10 3,8, 4,2
  c; //refs: 2,6 3,11 5,2
}

hello; //refs: 1,9 3,2 8,0

var obj = {
  x //<refs: 11,2 16,4 19,4
  : 10,
  y: 20
};

obj.x = 30;
obj.z = "hi";

obj.x;
obj.z; //refs: 17,4 20,4
```
```json
[
  {
    "id": "2a91d7b0-90cb-11e5-bbec-7d8b603cb91a",
    "name": "hello",
    "addr": "/hello/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn(a: ?, b: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a91fec0-90cb-11e5-bbec-7d8b603cb91a",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "2a91d7b0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "15[0:15]-16[0:16]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a91fec1-90cb-11e5-bbec-7d8b603cb91a",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "2a91d7b0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "18[0:18]-19[0:19]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a91fec2-90cb-11e5-bbec-7d8b603cb91a",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "lineno": 2,
    "namespace": "hello",
    "parent": "2a91d7b0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "29[1:6]-30[1:7]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a9225d0-90cb-11e5-bbec-7d8b603cb91a",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 10,
    "origin": {
      "!span": "148[9:4]-151[9:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a9225d1-90cb-11e5-bbec-7d8b603cb91a",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 11,
    "namespace": "obj",
    "parent": "2a9225d0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "158[10:2]-159[10:3]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a9225d2-90cb-11e5-bbec-7d8b603cb91a",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "obj",
    "parent": "2a9225d0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "194[12:2]-195[12:3]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "2a9225d3-90cb-11e5-bbec-7d8b603cb91a",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "obj",
    "parent": "2a9225d0-90cb-11e5-bbec-7d8b603cb91a",
    "origin": {
      "!span": "220[16:4]-221[16:5]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  }
]
```
```ctags
hello	__DIR__/findref.js	/hello/;"	f	lineno:1	type:void function(?, ?)
a	__DIR__/findref.js	/a/;"	v	lineno:1	namespace:hello
b	__DIR__/findref.js	/b/;"	v	lineno:1	namespace:hello
c	__DIR__/findref.js	/c/;"	v	lineno:2	namespace:hello
obj	__DIR__/findref.js	/obj/;"	v	lineno:10
x	__DIR__/findref.js	/x/;"	v	lineno:11	namespace:obj	type:number
y	__DIR__/findref.js	/y/;"	v	lineno:13	namespace:obj	type:number
z	__DIR__/findref.js	/z/;"	v	lineno:17	namespace:obj	type:string
```
