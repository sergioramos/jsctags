```js
var myIter = {
  [Symbol.iterator]() {
    return {
      next() {
        return {value: {a: 1, b: true}, done: false}
      }
    }
  }
}

for (var hello of myIter) {
  hello //:: {a: number, b: bool}
}

for (var {a, b} of myIter) {
  a //: number
  b //: bool
}

for (let elt of [1, 2, 3])
  elt //: number
```
```json
[
  {
    "id": "53c47f80-909d-11e5-bb53-39fccbdb3102",
    "name": "myIter",
    "addr": "myIter",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-10[0:10]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a690-909d-11e5-bb53-39fccbdb3102",
    "name": "iterator",
    "addr": "Symbol.iterator",
    "kind": "f",
    "type": "myIter.:Symbol.iterator.!ret function()",
    "lineno": 2,
    "namespace": "myIter.:Symbol",
    "parent": "53c47f81-909d-11e5-bb53-39fccbdb3102",
    "origin": {
      "!span": "18[1:3]-33[1:18]",
      "!type": "fn() -> myIter.:Symbol.iterator.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a692-909d-11e5-bb53-39fccbdb3102",
    "name": "a",
    "addr": "a",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "hello",
    "parent": "53c4a691-909d-11e5-bb53-39fccbdb3102",
    "origin": {
      "!span": "91[4:24]-92[4:25]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a693-909d-11e5-bb53-39fccbdb3102",
    "name": "b",
    "addr": "b",
    "kind": "v",
    "type": "boolean",
    "lineno": 5,
    "namespace": "hello",
    "parent": "53c4a691-909d-11e5-bb53-39fccbdb3102",
    "origin": {
      "!span": "97[4:30]-98[4:31]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a691-909d-11e5-bb53-39fccbdb3102",
    "name": "hello",
    "addr": "hello",
    "kind": "v",
    "lineno": 11,
    "origin": {
      "!span": "150[10:9]-155[10:14]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a694-909d-11e5-bb53-39fccbdb3102",
    "name": "a",
    "addr": "a",
    "kind": "v",
    "type": "number",
    "lineno": 15,
    "origin": {
      "!span": "216[14:10]-217[14:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "53c4a695-909d-11e5-bb53-39fccbdb3102",
    "name": "b",
    "addr": "b",
    "kind": "v",
    "type": "boolean",
    "lineno": 15,
    "origin": {
      "!span": "219[14:13]-220[14:14]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/for_of.js"
  }
]
```
```ctags
myIter	__DIR__/for_of.js	myIter;"	v	lineno:1
iterator	__DIR__/for_of.js	Symbol.iterator;"	f	lineno:2	namespace:myIter.:Symbol	type:myIter.:Symbol.iterator.!ret function()
a	__DIR__/for_of.js	a;"	v	lineno:5	namespace:hello	type:number
b	__DIR__/for_of.js	b;"	v	lineno:5	namespace:hello	type:boolean
hello	__DIR__/for_of.js	hello;"	v	lineno:11
a	__DIR__/for_of.js	a;"	v	lineno:15	type:number
b	__DIR__/for_of.js	b;"	v	lineno:15	type:boolean
```
