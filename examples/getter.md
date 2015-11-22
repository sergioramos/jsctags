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
    "id": "2c747a60-90cb-11e5-982f-7fd820c60e5e",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/getter.js"
  },
  {
    "id": "2c74a170-90cb-11e5-982f-7fd820c60e5e",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "obj",
    "parent": "2c747a60-90cb-11e5-982f-7fd820c60e5e",
    "origin": {
      "!span": "35[2:6]-38[2:9]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/getter.js"
  }
]
```
```ctags
obj	__DIR__/getter.js	/obj/;"	v	lineno:1
foo	__DIR__/getter.js	/foo/;"	v	lineno:3	namespace:obj	type:string
```
