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
    "id": "65fe0fe0-9084-11e5-b52e-e309e998d25c",
    "name": "myIter",
    "addr": "/myIter/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-10[0:10]"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e00-9084-11e5-b52e-e309e998d25c",
    "name": "iterator",
    "addr": "/Symbol\.iterator/",
    "kind": "f",
    "type": "myIter.:Symbol.iterator.!ret function()",
    "lineno": 2,
    "namespace": "myIter.:Symbol",
    "parent": "65fe36f0-9084-11e5-b52e-e309e998d25c",
    "origin": {
      "!span": "18[1:3]-33[1:18]",
      "!type": "fn() -> myIter.:Symbol.iterator.!ret"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e02-9084-11e5-b52e-e309e998d25c",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "hello",
    "parent": "65fe5e01-9084-11e5-b52e-e309e998d25c",
    "origin": {
      "!span": "91[4:24]-92[4:25]",
      "!type": "number"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e03-9084-11e5-b52e-e309e998d25c",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 5,
    "namespace": "hello",
    "parent": "65fe5e01-9084-11e5-b52e-e309e998d25c",
    "origin": {
      "!span": "97[4:30]-98[4:31]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e01-9084-11e5-b52e-e309e998d25c",
    "name": "hello",
    "addr": "/hello/",
    "kind": "v",
    "lineno": 11,
    "origin": {
      "!span": "150[10:9]-155[10:14]"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e04-9084-11e5-b52e-e309e998d25c",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 15,
    "origin": {
      "!span": "216[14:10]-217[14:11]",
      "!type": "number"
    },
    "tagfile": "__DIR__/for_of.js"
  },
  {
    "id": "65fe5e05-9084-11e5-b52e-e309e998d25c",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 15,
    "origin": {
      "!span": "219[14:13]-220[14:14]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/for_of.js"
  }
]
```
```ctags
myIter	__DIR__/for_of.js	/myIter/;"	v	lineno:1
iterator	__DIR__/for_of.js	/Symbol\.iterator/;"	f	lineno:2	namespace:myIter.:Symbol	type:myIter.:Symbol.iterator.!ret function()
a	__DIR__/for_of.js	/a/;"	v	lineno:5	namespace:hello	type:number
b	__DIR__/for_of.js	/b/;"	v	lineno:5	namespace:hello	type:boolean
hello	__DIR__/for_of.js	/hello/;"	v	lineno:11
a	__DIR__/for_of.js	/a/;"	v	lineno:15	type:number
b	__DIR__/for_of.js	/b/;"	v	lineno:15	type:boolean
```
