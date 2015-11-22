```js
let set = new Set

set.add(true)
set.size //: number
set.has(true) //: bool

for (var elt of set.values())
  elt //: bool

set.forEach(function(val) {
  val //: bool
})
```
```json
[
  {
    "id": "44149ee0-90c4-11e5-984d-9b499d77b264",
    "name": "set",
    "addr": "/set/",
    "kind": "v",
    "type": "Set",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "+Set",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/set.js"
  },
  {
    "id": "4414c5f0-90c4-11e5-984d-9b499d77b264",
    "name": "elt",
    "addr": "/elt/",
    "kind": "v",
    "type": "boolean",
    "lineno": 7,
    "origin": {
      "!span": "86[6:9]-89[6:12]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/set.js"
  }
]
```
```ctags
set	__DIR__/set.js	/set/;"	v	lineno:1	type:Set
elt	__DIR__/set.js	/elt/;"	v	lineno:7	type:boolean
```
