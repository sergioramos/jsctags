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
    "id": "fc761250-90a8-11e5-b368-41f3e49ed876",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "number function()",
    "lineno": 1,
    "origin": {
      "!span": "10[0:10]-13[0:13]",
      "!type": "fn*() -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763960-90a8-11e5-b368-41f3e49ed876",
    "name": "index",
    "addr": "/index/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "foo",
    "parent": "fc761250-90a8-11e5-b368-41f3e49ed876",
    "origin": {
      "!span": "24[1:6]-29[1:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763961-90a8-11e5-b368-41f3e49ed876",
    "name": "out",
    "addr": "/out/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "foo",
    "parent": "fc761250-90a8-11e5-b368-41f3e49ed876",
    "origin": {
      "!span": "35[1:17]-38[1:20]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763962-90a8-11e5-b368-41f3e49ed876",
    "name": "it",
    "addr": "/it/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "108[7:4]-110[7:6]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763963-90a8-11e5-b368-41f3e49ed876",
    "name": "next",
    "kind": "f",
    "type": "it.next.!ret function()",
    "namespace": "it",
    "parent": "fc763962-90a8-11e5-b368-41f3e49ed876",
    "origin": {
      "!type": "fn(string) -> it.next.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763964-90a8-11e5-b368-41f3e49ed876",
    "name": "g1",
    "addr": "/g1/",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 11,
    "origin": {
      "!span": "177[10:10]-179[10:12]",
      "!type": "fn*() -> bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/generator.js"
  },
  {
    "id": "fc763965-90a8-11e5-b368-41f3e49ed876",
    "name": "g2",
    "addr": "/g2/",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 12,
    "origin": {
      "!span": "207[11:10]-209[11:12]",
      "!type": "fn*() -> bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
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
next	__DIR__/generator.js	//;"	f	namespace:it	type:it.next.!ret function()
g1	__DIR__/generator.js	/g1/;"	f	lineno:11	type:boolean function()
g2	__DIR__/generator.js	/g2/;"	f	lineno:12	type:boolean function()
```
