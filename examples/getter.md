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
    "id": "fc57b3b0-7aee-11e6-8e55-cfcf77e95777",
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
    "id": "fc5c4790-7aee-11e6-8e55-cfcf77e95777",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "obj",
    "parent": "fc57b3b0-7aee-11e6-8e55-cfcf77e95777",
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
