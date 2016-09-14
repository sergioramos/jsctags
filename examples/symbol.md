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
    "id": "25dde3d0-7aef-11e6-9cdb-1fd0e7c1a532",
    "name": "mySym",
    "addr": "/mySym/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-9[0:9]",
      "!data": {
        "isConstructor": false,
        "type": "Symbol.prototype"
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "25de31f0-7aef-11e6-9cdb-1fd0e7c1a532",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "34[2:4]-37[2:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "25de5900-7aef-11e6-9cdb-1fd0e7c1a532",
    "name": ":my_sym",
    "addr": "/mySym/",
    "kind": "v",
    "type": "number",
    "lineno": 4,
    "namespace": "obj",
    "parent": "25de31f0-7aef-11e6-9cdb-1fd0e7c1a532",
    "origin": {
      "!span": "45[3:3]-50[3:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/symbol.js"
  },
  {
    "id": "25de5902-7aef-11e6-9cdb-1fd0e7c1a532",
    "name": "iterator",
    "addr": "/Symbol\.iterator/",
    "kind": "v",
    "type": "string",
    "lineno": 8,
    "namespace": "obj.:Symbol",
    "parent": "25de5901-7aef-11e6-9cdb-1fd0e7c1a532",
    "origin": {
      "!span": "85[7:4]-100[7:19]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
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
