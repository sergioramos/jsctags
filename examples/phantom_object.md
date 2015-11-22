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
    "id": "b3da1220-90bd-11e5-9092-c9ea14b7cc2b",
    "name": "mod",
    "addr": "/mod/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "b3da3930-90bd-11e5-9092-c9ea14b7cc2b",
    "name": "func",
    "addr": "/func/",
    "kind": "f",
    "type": "number function()",
    "lineno": 3,
    "namespace": "mod",
    "parent": "b3da1220-90bd-11e5-9092-c9ea14b7cc2b",
    "origin": {
      "!span": "31[2:4]-35[2:8]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "b3da3931-90bd-11e5-9092-c9ea14b7cc2b",
    "name": "otherMod",
    "addr": "/otherMod/",
    "kind": "v",
    "lineno": 7,
    "origin": {
      "!span": "97[6:4]-105[6:12]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/phantom_object.js"
  },
  {
    "id": "b3da3932-90bd-11e5-9092-c9ea14b7cc2b",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "otherMod",
    "parent": "b3da3931-90bd-11e5-9092-c9ea14b7cc2b",
    "origin": {
      "!span": "148[8:9]-149[8:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
