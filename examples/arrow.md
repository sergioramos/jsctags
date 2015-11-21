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
    "id": "4ac248e0-909d-11e5-8ad0-d14b531a2466",
    "name": "f",
    "addr": "f",
    "kind": "f",
    "type": "f.!ret function(number, Array[bool])",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "fn(a: number, [b]: [bool]) -> f.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "4ac29700-909d-11e5-8ad0-d14b531a2466",
    "name": "a",
    "addr": "a",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "4ac248e0-909d-11e5-8ad0-d14b531a2466",
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "4ac29701-909d-11e5-8ad0-d14b531a2466",
    "name": "b",
    "addr": "b",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "namespace": "f",
    "parent": "4ac248e0-909d-11e5-8ad0-d14b531a2466",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "4ac29702-909d-11e5-8ad0-d14b531a2466",
    "name": "wrap",
    "addr": "wrap",
    "kind": "f",
    "type": "wrap.!ret.!ret function() function()",
    "lineno": 5,
    "origin": {
      "!span": "79[4:9]-83[4:13]",
      "!type": "fn() -> fn() -> wrap.!ret.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "4ac29703-909d-11e5-8ad0-d14b531a2466",
    "name": "Obj",
    "addr": "Obj",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "origin": {
      "!span": "172[9:9]-175[9:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  },
  {
    "id": "4ac29705-909d-11e5-8ad0-d14b531a2466",
    "name": "map",
    "addr": "map",
    "kind": "f",
    "type": "[!this.x] function()",
    "lineno": 13,
    "namespace": "Obj.prototype",
    "parent": "4ac29704-909d-11e5-8ad0-d14b531a2466",
    "origin": {
      "!span": "212[12:14]-215[12:17]",
      "!type": "fn() -> [!this.x]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/arrow.js"
  }
]
```
```ctags
f	__DIR__/arrow.js	f;"	f	lineno:1	type:f.!ret function(number, Array[bool])
a	__DIR__/arrow.js	a;"	v	lineno:1	namespace:f	type:number
b	__DIR__/arrow.js	b;"	v	lineno:1	namespace:f	type:boolean
wrap	__DIR__/arrow.js	wrap;"	f	lineno:5	type:wrap.!ret.!ret function() function()
Obj	__DIR__/arrow.js	Obj;"	f	lineno:10	type:void function()
map	__DIR__/arrow.js	map;"	f	lineno:13	namespace:Obj.prototype	type:[!this.x] function()
```
