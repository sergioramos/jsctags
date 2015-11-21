```js
function* foo() {
  var index = 0, out
  while (index <= 2)
    out = yield index++
  out //: string
}

var it = foo()
it.next("hi") //:: {done: bool, value: number}

function* g1() { yield true }
function* g2() { yield* g1() }

g2().next().value //: bool
```
```json
[
  {
    "id": "665e3140-9084-11e5-a6ee-f11ef60aae1c",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "number function()",
    "lineno": 1,
    "origin": {
      "!span": "10[0:10]-13[0:13]",
      "!type": "fn*() -> number"
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "665e5850-9084-11e5-a6ee-f11ef60aae1c",
    "name": "index",
    "addr": "/index/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "foo",
    "parent": "665e3140-9084-11e5-a6ee-f11ef60aae1c",
    "origin": {
      "!span": "24[1:6]-29[1:11]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "665e5851-9084-11e5-a6ee-f11ef60aae1c",
    "name": "out",
    "addr": "/out/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "foo",
    "parent": "665e3140-9084-11e5-a6ee-f11ef60aae1c",
    "origin": {
      "!span": "35[1:17]-38[1:20]",
      "!type": "string",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "665e5852-9084-11e5-a6ee-f11ef60aae1c",
    "name": "it",
    "addr": "/it/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "108[7:4]-110[7:6]"
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "665ef490-9084-11e5-a6ee-f11ef60aae1c",
    "name": "g1",
    "addr": "/g1/",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 11,
    "origin": {
      "!span": "177[10:10]-179[10:12]",
      "!type": "fn*() -> bool"
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "665ef491-9084-11e5-a6ee-f11ef60aae1c",
    "name": "g2",
    "addr": "/g2/",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 12,
    "origin": {
      "!span": "207[11:10]-209[11:12]",
      "!type": "fn*() -> bool"
    },
    "tagfile": "__DIR__/generator.js"
  }
]
```
```ctags
foo	__DIR__/generator.js	/foo/;"	f	lineno:1	type:number function()
index	__DIR__/generator.js	/index/;"	v	lineno:2	namespace:foo	type:number
out	__DIR__/generator.js	/out/;"	v	lineno:2	namespace:foo	type:string
it	__DIR__/generator.js	/it/;"	v	lineno:8
g1	__DIR__/generator.js	/g1/;"	f	lineno:11	type:boolean function()
g2	__DIR__/generator.js	/g2/;"	f	lineno:12	type:boolean function()
```
