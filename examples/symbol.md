```js
var mySym = Symbol("my sym")

var obj = {
  [mySym]: 22
}
obj[mySym] //: number

obj[Symbol.iterator] = "hello"
obj[Symbol.iterator] //: string
```
```json
[
  {
    "id": "b75f4140-90bd-11e5-820c-a3cfe8a8d216",
    "name": "mySym",
    "addr": "/mySym/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-9[0:9]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "b75f4141-90bd-11e5-820c-a3cfe8a8d216",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "34[2:4]-37[2:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "b75f6850-90bd-11e5-820c-a3cfe8a8d216",
    "name": ":my_sym",
    "addr": "/mySym/",
    "kind": "v",
    "type": "number",
    "lineno": 4,
    "namespace": "obj",
    "parent": "b75f4141-90bd-11e5-820c-a3cfe8a8d216",
    "origin": {
      "!span": "45[3:3]-50[3:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "b75f6852-90bd-11e5-820c-a3cfe8a8d216",
    "name": "iterator",
    "addr": "/Symbol\.iterator/",
    "kind": "v",
    "type": "string",
    "lineno": 8,
    "namespace": "obj.:Symbol",
    "parent": "b75f6851-90bd-11e5-820c-a3cfe8a8d216",
    "origin": {
      "!span": "85[7:4]-100[7:19]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/symbol.js"
  }
]
```
```ctags
mySym	__DIR__/symbol.js	/mySym/;"	v	lineno:1
obj	__DIR__/symbol.js	/obj/;"	v	lineno:3
:my_sym	__DIR__/symbol.js	/mySym/;"	v	lineno:4	namespace:obj	type:number
iterator	__DIR__/symbol.js	/Symbol\.iterator/;"	v	lineno:8	namespace:obj.:Symbol	type:string
```
