```js
`foo` //: string
var x
`foo${x = 10}bar` //: string
x //: number

function build(strs, a, b) {
  strs //: [string]
  a //: number
  b //: string
  return true
}

build`foo${10}bar${'hi'}` //: bool
```
```json
[
  {
    "id": "277bb550-7aef-11e6-af52-f35cb1b2606e",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "origin": {
      "!span": "21[1:4]-22[1:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/template.js"
  },
  {
    "id": "277c78a0-7aef-11e6-af52-f35cb1b2606e",
    "name": "build",
    "addr": "/build/",
    "kind": "f",
    "type": "boolean function(Array[string], number, string)",
    "lineno": 6,
    "origin": {
      "!span": "75[5:9]-80[5:14]",
      "!type": "fn(strs: [string], a: number, b: string) -> bool",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/template.js"
  },
  {
    "id": "277d8a10-7aef-11e6-af52-f35cb1b2606e",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "build",
    "parent": "277c78a0-7aef-11e6-af52-f35cb1b2606e",
    "origin": {
      "!span": "87[5:21]-88[5:22]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/template.js"
  },
  {
    "id": "277db120-7aef-11e6-af52-f35cb1b2606e",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "build",
    "parent": "277c78a0-7aef-11e6-af52-f35cb1b2606e",
    "origin": {
      "!span": "90[5:24]-91[5:25]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/template.js"
  },
  {
    "id": "277dd830-7aef-11e6-af52-f35cb1b2606e",
    "name": "strs",
    "addr": "/strs/",
    "kind": "v",
    "type": "[string]",
    "lineno": 6,
    "namespace": "build",
    "parent": "277c78a0-7aef-11e6-af52-f35cb1b2606e",
    "origin": {
      "!span": "81[5:15]-85[5:19]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/template.js"
  }
]
```
```ctags
x	__DIR__/template.js	/x/;"	v	lineno:2	type:number
build	__DIR__/template.js	/build/;"	f	lineno:6	type:boolean function(Array[string], number, string)
a	__DIR__/template.js	/a/;"	v	lineno:6	namespace:build	type:number
b	__DIR__/template.js	/b/;"	v	lineno:6	namespace:build	type:string
strs	__DIR__/template.js	/strs/;"	v	lineno:6	namespace:build	type:[string]
```
