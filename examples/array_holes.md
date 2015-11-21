```js
var x = [,, "foo", "bar"]

var [,, y, z] = x

y //: string
z //: string
```
```json
[
  {
    "id": "b3432b20-9082-11e5-bc46-157dd76cc7ff",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "[string]",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "[string]"
    },
    "tagfile": "__DIR__/array_holes.js"
  },
  {
    "id": "b3432b21-9082-11e5-bc46-157dd76cc7ff",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "origin": {
      "!span": "35[2:8]-36[2:9]",
      "!type": "string"
    },
    "tagfile": "__DIR__/array_holes.js"
  },
  {
    "id": "b3432b22-9082-11e5-bc46-157dd76cc7ff",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "origin": {
      "!span": "38[2:11]-39[2:12]",
      "!type": "string"
    },
    "tagfile": "__DIR__/array_holes.js"
  }
]
```
```ctags
x	__DIR__/array_holes.js	/x/;"	v	lineno:1	type:[string]
y	__DIR__/array_holes.js	/y/;"	v	lineno:3	type:string
z	__DIR__/array_holes.js	/z/;"	v	lineno:3	type:string
```
