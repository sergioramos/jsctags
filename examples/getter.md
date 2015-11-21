```js
var obj = {
  // This is foo
  get foo() { return "hi"; },
  set foo(x) { return 55; }
};

obj.foo; //: string

obj.foo; //doc: This is foo
```
```json
[
  {
    "id": "bea598e0-9082-11e5-8f79-073e33ffb63f",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]"
    },
    "tagfile": "__DIR__/getter.js"
  },
  {
    "id": "bea5bff0-9082-11e5-8f79-073e33ffb63f",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "obj",
    "parent": "bea598e0-9082-11e5-8f79-073e33ffb63f",
    "origin": {
      "!span": "35[2:6]-38[2:9]",
      "!type": "string"
    },
    "tagfile": "__DIR__/getter.js"
  }
]
```
```ctags
obj	__DIR__/getter.js	/obj/;"	v	lineno:1
foo	__DIR__/getter.js	/foo/;"	v	lineno:3	namespace:obj	type:string
```
