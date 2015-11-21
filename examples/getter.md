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
    "id": "672ec7b0-9084-11e5-9295-ab915df84a45",
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
    "id": "672eeec0-9084-11e5-9295-ab915df84a45",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "obj",
    "parent": "672ec7b0-9084-11e5-9295-ab915df84a45",
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
