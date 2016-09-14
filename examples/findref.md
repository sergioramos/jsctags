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

class foo {

  methodA //<refs: 24,2 41,2 44,2
  (){}
  
  methodB //<refs: 27,2 42,2
  () {} 
}

class bar extends foo {

  methodB //<refs: 33,2 45,2
  () {}

}

var a = new foo();
var b = new bar();

a.methodA; //refs: 24,2 41,2 44,2
a.methodB; //refs: 27,2 42,2

b.methodA; //refs: 24,2 41,2 44,2
b.methodB; //refs: 33,2 45,2
```
```json
[
  {
    "id": "f6a4f630-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d41-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "f6a4f630-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d40-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "hello",
    "parent": "f6a4f630-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d42-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "lineno": 2,
    "namespace": "hello",
    "parent": "f6a4f630-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d43-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d44-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 11,
    "namespace": "obj",
    "parent": "f6a51d43-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d45-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "obj",
    "parent": "f6a51d43-7aee-11e6-b15d-7d1d8ff8fdda",
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
    "id": "f6a51d46-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "obj",
    "parent": "f6a51d43-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "220[16:4]-221[16:5]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a51d47-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 22,
    "origin": {
      "!span": "270[21:6]-273[21:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54450-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "prototype",
    "addr": "/class foo \{/",
    "kind": "v",
    "lineno": 22,
    "namespace": "foo",
    "parent": "f6a51d47-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "264[21:0]-360[28:1]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54451-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "methodA",
    "addr": "/methodA/",
    "kind": "f",
    "type": "void function()",
    "lineno": 24,
    "namespace": "foo.prototype",
    "parent": "f6a54450-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "279[23:2]-286[23:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54452-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "methodB",
    "addr": "/methodB/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "foo.prototype",
    "parent": "f6a54450-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "323[26:2]-330[26:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54453-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "void function()",
    "lineno": 31,
    "origin": {
      "!span": "368[30:6]-371[30:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54454-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "prototype",
    "addr": "/class bar extends foo \{/",
    "kind": "v",
    "lineno": 31,
    "namespace": "bar",
    "parent": "f6a54453-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "362[30:0]-426[35:1]",
      "!data": {
        "isConstructor": false,
        "type": "foo.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54455-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "methodB",
    "addr": "/methodB/",
    "kind": "f",
    "type": "void function()",
    "lineno": 33,
    "namespace": "bar.prototype",
    "parent": "f6a54454-7aee-11e6-b15d-7d1d8ff8fdda",
    "origin": {
      "!span": "389[32:2]-396[32:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54456-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "foo",
    "lineno": 38,
    "origin": {
      "!span": "432[37:4]-433[37:5]",
      "!type": "+foo",
      "!data": {
        "isConstructor": false,
        "type": "foo.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  },
  {
    "id": "f6a54457-7aee-11e6-b15d-7d1d8ff8fdda",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "bar",
    "lineno": 39,
    "origin": {
      "!span": "451[38:4]-452[38:5]",
      "!type": "+bar",
      "!data": {
        "isConstructor": false,
        "type": "bar.prototype"
      }
    },
    "tagfile": "__DIR__/findref.js"
  }
]
```
```ctags
hello	__DIR__/findref.js	/hello/;"	f	lineno:1	type:void function(?, ?)
b	__DIR__/findref.js	/b/;"	v	lineno:1	namespace:hello
a	__DIR__/findref.js	/a/;"	v	lineno:1	namespace:hello
c	__DIR__/findref.js	/c/;"	v	lineno:2	namespace:hello
obj	__DIR__/findref.js	/obj/;"	v	lineno:10
x	__DIR__/findref.js	/x/;"	v	lineno:11	namespace:obj	type:number
y	__DIR__/findref.js	/y/;"	v	lineno:13	namespace:obj	type:number
z	__DIR__/findref.js	/z/;"	v	lineno:17	namespace:obj	type:string
foo	__DIR__/findref.js	/foo/;"	f	lineno:22	type:void function()
prototype	__DIR__/findref.js	/class foo \{/;"	v	lineno:22	namespace:foo
methodA	__DIR__/findref.js	/methodA/;"	f	lineno:24	namespace:foo.prototype	type:void function()
methodB	__DIR__/findref.js	/methodB/;"	f	lineno:27	namespace:foo.prototype	type:void function()
bar	__DIR__/findref.js	/bar/;"	f	lineno:31	type:void function()
prototype	__DIR__/findref.js	/class bar extends foo \{/;"	v	lineno:31	namespace:bar
methodB	__DIR__/findref.js	/methodB/;"	f	lineno:33	namespace:bar.prototype	type:void function()
a	__DIR__/findref.js	/a/;"	v	lineno:38	type:foo
b	__DIR__/findref.js	/b/;"	v	lineno:39	type:bar
```
