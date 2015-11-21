```js
var bar

var foo = {
  [bar = 100]: 44,
  __proto__: baz,
  a: true,
  method() { return "ok" }
}

var baz = {
  __proto__: null,
  b: "hi"
}

foo.a //: bool
foo.method() //: string
foo.b //: string
foo.toString //: ?
```
```json
[
  {
    "id": "6e1e4af0-9084-11e5-9416-7d53f43b7a2a",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "6e1e4af1-9084-11e5-9416-7d53f43b7a2a",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "13[2:4]-16[2:7]"
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "6e1e7200-9084-11e5-9416-7d53f43b7a2a",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "boolean",
    "lineno": 6,
    "namespace": "foo",
    "parent": "6e1e4af1-9084-11e5-9416-7d53f43b7a2a",
    "origin": {
      "!span": "60[5:2]-61[5:3]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "6e1e7201-9084-11e5-9416-7d53f43b7a2a",
    "name": "method",
    "addr": "/method/",
    "kind": "f",
    "type": "string function()",
    "lineno": 7,
    "namespace": "foo",
    "parent": "6e1e4af1-9084-11e5-9416-7d53f43b7a2a",
    "origin": {
      "!span": "71[6:2]-77[6:8]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "6e1e7202-9084-11e5-9416-7d53f43b7a2a",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "lineno": 10,
    "origin": {
      "!span": "103[9:4]-106[9:7]"
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "6e1e7203-9084-11e5-9416-7d53f43b7a2a",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 12,
    "namespace": "baz",
    "parent": "6e1e7202-9084-11e5-9416-7d53f43b7a2a",
    "origin": {
      "!span": "132[11:2]-133[11:3]",
      "!type": "string"
    },
    "tagfile": "__DIR__/objectlit.js"
  }
]
```
```ctags
bar	__DIR__/objectlit.js	/bar/;"	v	lineno:1	type:number
foo	__DIR__/objectlit.js	/foo/;"	v	lineno:3
a	__DIR__/objectlit.js	/a/;"	v	lineno:6	namespace:foo	type:boolean
method	__DIR__/objectlit.js	/method/;"	f	lineno:7	namespace:foo	type:string function()
baz	__DIR__/objectlit.js	/baz/;"	v	lineno:10
b	__DIR__/objectlit.js	/b/;"	v	lineno:12	namespace:baz	type:string
```
