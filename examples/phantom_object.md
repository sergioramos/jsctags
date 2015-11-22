```js
var mod = window.mymodule

mod.func = function() { return 10 }

mod.func //: fn() -> number

var otherMod = window.yourmodule.theirmodule

otherMod.c = 10

otherMod.c //: number
```
```json
[
  {
    "id": "336a1820-90cb-11e5-aca8-0d780aea4eab",
    "name": "mod",
    "addr": "/mod/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "336a3f30-90cb-11e5-aca8-0d780aea4eab",
    "name": "func",
    "addr": "/func/",
    "kind": "f",
    "type": "number function()",
    "lineno": 3,
    "namespace": "mod",
    "parent": "336a1820-90cb-11e5-aca8-0d780aea4eab",
    "origin": {
      "!span": "31[2:4]-35[2:8]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "336a6640-90cb-11e5-aca8-0d780aea4eab",
    "name": "otherMod",
    "addr": "/otherMod/",
    "kind": "v",
    "lineno": 7,
    "origin": {
      "!span": "97[6:4]-105[6:12]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "336a6641-90cb-11e5-aca8-0d780aea4eab",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "otherMod",
    "parent": "336a6640-90cb-11e5-aca8-0d780aea4eab",
    "origin": {
      "!span": "148[8:9]-149[8:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  }
]
```
```ctags
mod	__DIR__/phantom_object.js	/mod/;"	v	lineno:1
func	__DIR__/phantom_object.js	/func/;"	f	lineno:3	namespace:mod	type:number function()
otherMod	__DIR__/phantom_object.js	/otherMod/;"	v	lineno:7
c	__DIR__/phantom_object.js	/c/;"	v	lineno:9	namespace:otherMod	type:number
```
