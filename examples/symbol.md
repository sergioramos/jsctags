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
    "id": "7304ded0-9084-11e5-9c6f-3b99f30d99f9",
    "name": "mySym",
    "addr": "/mySym/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-9[0:9]"
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "7304ded1-9084-11e5-9c6f-3b99f30d99f9",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "34[2:4]-37[2:7]"
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "730505e0-9084-11e5-9c6f-3b99f30d99f9",
    "name": ":my_sym",
    "addr": "/mySym/",
    "kind": "v",
    "type": "number",
    "lineno": 4,
    "namespace": "obj",
    "parent": "7304ded1-9084-11e5-9c6f-3b99f30d99f9",
    "origin": {
      "!span": "45[3:3]-50[3:8]",
      "!type": "number"
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "730505e2-9084-11e5-9c6f-3b99f30d99f9",
    "name": "iterator",
    "addr": "/Symbol\.iterator/",
    "kind": "v",
    "type": "string",
    "lineno": 8,
    "namespace": "obj.:Symbol",
    "parent": "730505e1-9084-11e5-9c6f-3b99f30d99f9",
    "origin": {
      "!span": "85[7:4]-100[7:19]",
      "!type": "string"
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
