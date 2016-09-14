```js
let f = (a, [b]) => ({a, b})

f(1, [true]) //:: {a: number, b: bool}

function wrap() {
  return () => (this //:: {a: number}
               )
}
wrap.call({a: 10}).call({b: true}) //:: {a: number}

function Obj() {
  this.x = true
}
Obj.prototype.map = function() {
  return [1, 2, 3].map(e => this.x)
}

;(new Obj).map() //: [bool]
```
```json
[
  {
    "id": "d9bf8030-7aee-11e6-b309-39f9bdaa5c77",
    "name": "f",
    "addr": "/f/",
    "kind": "f",
    "type": "f.!ret function(number, Array[bool])",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "fn(a: number, [b]: [bool]) -> f.!ret",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "d9c106d0-7aee-11e6-b309-39f9bdaa5c77",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "d9bf8030-7aee-11e6-b309-39f9bdaa5c77",
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "d9c12de0-7aee-11e6-b309-39f9bdaa5c77",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "namespace": "f",
    "parent": "d9bf8030-7aee-11e6-b309-39f9bdaa5c77",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "d9c154f0-7aee-11e6-b309-39f9bdaa5c77",
    "name": "wrap",
    "addr": "/wrap/",
    "kind": "f",
    "type": "wrap.!ret.!ret function() function()",
    "lineno": 5,
    "origin": {
      "!span": "79[4:9]-83[4:13]",
      "!type": "fn() -> fn() -> wrap.!ret.!ret",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "d9c1a310-7aee-11e6-b309-39f9bdaa5c77",
    "name": "Obj",
    "addr": "/Obj/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "origin": {
      "!span": "207[10:9]-210[10:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "d9c1ca21-7aee-11e6-b309-39f9bdaa5c77",
    "name": "map",
    "addr": "/map/",
    "kind": "f",
    "type": "[!this.x] function()",
    "lineno": 14,
    "namespace": "Obj.prototype",
    "parent": "d9c1ca20-7aee-11e6-b309-39f9bdaa5c77",
    "origin": {
      "!span": "247[13:14]-250[13:17]",
      "!type": "fn() -> [!this.x]",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/arrow.js"
  }
]
```
```ctags
f	__DIR__/arrow.js	/f/;"	f	lineno:1	type:f.!ret function(number, Array[bool])
a	__DIR__/arrow.js	/a/;"	v	lineno:1	namespace:f	type:number
b	__DIR__/arrow.js	/b/;"	v	lineno:1	namespace:f	type:boolean
wrap	__DIR__/arrow.js	/wrap/;"	f	lineno:5	type:wrap.!ret.!ret function() function()
Obj	__DIR__/arrow.js	/Obj/;"	f	lineno:11	type:void function()
map	__DIR__/arrow.js	/map/;"	f	lineno:14	namespace:Obj.prototype	type:[!this.x] function()
```
