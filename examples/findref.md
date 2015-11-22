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
    "id": "fb522bc0-90a8-11e5-aa95-1f943dc9abb2",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e0-90a8-11e5-aa95-1f943dc9abb2",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "fb522bc0-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "15[0:15]-16[0:16]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e1-90a8-11e5-aa95-1f943dc9abb2",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "fb522bc0-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "18[0:18]-19[0:19]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e2-90a8-11e5-aa95-1f943dc9abb2",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "lineno": 2,
    "namespace": "hello",
    "parent": "fb522bc0-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "29[1:6]-30[1:7]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e3-90a8-11e5-aa95-1f943dc9abb2",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 10,
    "origin": {
      "!span": "148[9:4]-151[9:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e4-90a8-11e5-aa95-1f943dc9abb2",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 11,
    "namespace": "obj",
    "parent": "fb5279e3-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "158[10:2]-159[10:3]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e5-90a8-11e5-aa95-1f943dc9abb2",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "obj",
    "parent": "fb5279e3-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "194[12:2]-195[12:3]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "fb5279e6-90a8-11e5-aa95-1f943dc9abb2",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "obj",
    "parent": "fb5279e3-90a8-11e5-aa95-1f943dc9abb2",
    "origin": {
      "!span": "220[16:4]-221[16:5]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
