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
    "id": "324d5d80-90cb-11e5-89b8-1906a24fe8ba",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "324d8490-90cb-11e5-89b8-1906a24fe8ba",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "13[2:4]-16[2:7]",
      "!data": {
        "isConstructor": false,
        "type": "baz"
      }
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "324d8491-90cb-11e5-89b8-1906a24fe8ba",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "boolean",
    "lineno": 6,
    "namespace": "foo",
    "parent": "324d8490-90cb-11e5-89b8-1906a24fe8ba",
    "origin": {
      "!span": "60[5:2]-61[5:3]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "324d8492-90cb-11e5-89b8-1906a24fe8ba",
    "name": "method",
    "addr": "/method/",
    "kind": "f",
    "type": "string function()",
    "lineno": 7,
    "namespace": "foo",
    "parent": "324d8490-90cb-11e5-89b8-1906a24fe8ba",
    "origin": {
      "!span": "71[6:2]-77[6:8]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "324daba0-90cb-11e5-89b8-1906a24fe8ba",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "lineno": 10,
    "origin": {
      "!span": "103[9:4]-106[9:7]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/objectlit.js"
  },
  {
    "id": "324daba1-90cb-11e5-89b8-1906a24fe8ba",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 12,
    "namespace": "baz",
    "parent": "324daba0-90cb-11e5-89b8-1906a24fe8ba",
    "origin": {
      "!span": "132[11:2]-133[11:3]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
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
