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
    "id": "35b45640-90cb-11e5-9192-195a60bfcd82",
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
        "type": "Set.prototype"
      }
    },
    "tagfile": "__DIR__/set.js"
  },
  {
    "id": "35b47d50-90cb-11e5-9192-195a60bfcd82",
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
        "type": "Boolean.prototype"
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
