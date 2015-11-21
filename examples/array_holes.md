```js
var x = [,, "foo", "bar"]

var [,, y, z] = x

y //: string
z //: string
```
```json
[
  {
    "id": "4a6757a0-909d-11e5-afcb-0917b05a2a58",
    "name": "x",
    "addr": "x",
    "kind": "v",
    "type": "[string]",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/array_holes.js"
  },
  {
    "id": "4a677eb0-909d-11e5-afcb-0917b05a2a58",
    "name": "y",
    "addr": "y",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "origin": {
      "!span": "35[2:8]-36[2:9]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/array_holes.js"
  },
  {
    "id": "4a67a5c0-909d-11e5-afcb-0917b05a2a58",
    "name": "z",
    "addr": "z",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "origin": {
      "!span": "38[2:11]-39[2:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/array_holes.js"
  }
]
```
```ctags
x	__DIR__/array_holes.js	x;"	v	lineno:1	type:[string]
y	__DIR__/array_holes.js	y;"	v	lineno:3	type:string
z	__DIR__/array_holes.js	z;"	v	lineno:3	type:string
```
