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
    "id": "3aa1cc20-90c4-11e5-931a-6b7e58056126",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/getter.js"
  },
  {
    "id": "3aa1f330-90c4-11e5-931a-6b7e58056126",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "obj",
    "parent": "3aa1cc20-90c4-11e5-931a-6b7e58056126",
    "origin": {
      "!span": "35[2:6]-38[2:9]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
