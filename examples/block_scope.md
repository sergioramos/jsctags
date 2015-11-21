```js
function x(a) {
  {
    let a = 4
    let b = 10
    var c = true
    a; //: number
    b; //: number
    c; //: bool
  }
  a; //: string
  b; //: ?
  c; //: bool
}

x("hello")
```
```json
[
  {
    "id": "5d110ef0-9084-11e5-9370-73f15c43484b",
    "name": "x",
    "addr": "/x/",
    "kind": "f",
    "type": "void function(string)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "fn(a: string)"
    },
    "tagfile": "__DIR__/block_scope.js"
  },
  {
    "id": "5d113600-9084-11e5-9370-73f15c43484b",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "string",
    "lineno": 1,
    "namespace": "x",
    "parent": "5d110ef0-9084-11e5-9370-73f15c43484b",
    "origin": {
      "!span": "11[0:11]-12[0:12]",
      "!type": "string",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/block_scope.js"
  },
  {
    "id": "5d113601-9084-11e5-9370-73f15c43484b",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "boolean",
    "lineno": 5,
    "namespace": "x",
    "parent": "5d110ef0-9084-11e5-9370-73f15c43484b",
    "origin": {
      "!span": "57[4:8]-58[4:9]",
      "!type": "bool",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/block_scope.js"
  }
]
```
```ctags
x	__DIR__/block_scope.js	/x/;"	f	lineno:1	type:void function(string)
a	__DIR__/block_scope.js	/a/;"	v	lineno:1	namespace:x	type:string
c	__DIR__/block_scope.js	/c/;"	v	lineno:5	namespace:x	type:boolean
```
