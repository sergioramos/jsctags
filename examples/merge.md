```js
function sum(a) {
  return a.x + 20;
}

sum({x: 10, y: 20});
sum({x: 10, y: 20});

sum; //:: fn(a: {x: number, y: number}) -> number
```
```json
[
  {
    "id": "0183dd40-90a9-11e5-b9a9-818e7329c7fb",
    "name": "sum",
    "addr": "/sum/",
    "kind": "f",
    "type": "number function(?)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn(a: ?) -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "01842b60-90a9-11e5-b9a9-818e7329c7fb",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "sum",
    "parent": "0183dd40-90a9-11e5-b9a9-818e7329c7fb",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "01842b61-90a9-11e5-b9a9-818e7329c7fb",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "sum.a",
    "parent": "01842b60-90a9-11e5-b9a9-818e7329c7fb",
    "origin": {
      "!span": "66[5:5]-67[5:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "01842b62-90a9-11e5-b9a9-818e7329c7fb",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "sum.a",
    "parent": "01842b60-90a9-11e5-b9a9-818e7329c7fb",
    "origin": {
      "!span": "73[5:12]-74[5:13]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/merge.js"
  }
]
```
```ctags
sum	__DIR__/merge.js	/sum/;"	f	lineno:1	type:number function(?)
a	__DIR__/merge.js	/a/;"	v	lineno:1	namespace:sum
x	__DIR__/merge.js	/x/;"	v	lineno:6	namespace:sum.a	type:number
y	__DIR__/merge.js	/y/;"	v	lineno:6	namespace:sum.a	type:number
```
