```js
let f = (a, [b]) => ({a, b})

f(1, [true]) //:: {a: number, b: bool}

function wrap() {
  return () => this
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
    "id": "b3a7e060-9082-11e5-b63c-477ae541ea92",
    "name": "f",
    "addr": "/f/",
    "kind": "f",
    "type": "f.!ret function(number, Array[bool])",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "fn(a: number, [b]: [bool]) -> f.!ret"
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "b3a80770-9082-11e5-b63c-477ae541ea92",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "b3a7e060-9082-11e5-b63c-477ae541ea92",
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "number",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "b3a82e80-9082-11e5-b63c-477ae541ea92",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "namespace": "f",
    "parent": "b3a7e060-9082-11e5-b63c-477ae541ea92",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!type": "bool",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "b3a82e81-9082-11e5-b63c-477ae541ea92",
    "name": "wrap",
    "addr": "/wrap/",
    "kind": "f",
    "type": "wrap.!ret.!ret function() function()",
    "lineno": 5,
    "origin": {
      "!span": "79[4:9]-83[4:13]",
      "!type": "fn() -> fn() -> wrap.!ret.!ret"
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "b3a82e82-9082-11e5-b63c-477ae541ea92",
    "name": "Obj",
    "addr": "/Obj/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "origin": {
      "!span": "172[9:9]-175[9:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "b3a82e84-9082-11e5-b63c-477ae541ea92",
    "name": "map",
    "addr": "/map/",
    "kind": "f",
    "type": "[!this.x] function()",
    "lineno": 13,
    "namespace": "Obj.prototype",
    "parent": "b3a82e83-9082-11e5-b63c-477ae541ea92",
    "origin": {
      "!span": "212[12:14]-215[12:17]",
      "!type": "fn() -> [!this.x]"
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
Obj	__DIR__/arrow.js	/Obj/;"	f	lineno:10	type:void function()
map	__DIR__/arrow.js	/map/;"	f	lineno:13	namespace:Obj.prototype	type:[!this.x] function()
```
