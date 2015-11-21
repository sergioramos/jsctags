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
    "id": "c27f77b0-9082-11e5-b111-2533c6be0d4c",
    "name": "sum",
    "addr": "/sum/",
    "kind": "f",
    "type": "number function(?)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn(a: ?) -> number"
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "c27fc5d0-9082-11e5-b111-2533c6be0d4c",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "sum",
    "parent": "c27f77b0-9082-11e5-b111-2533c6be0d4c",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "c27fc5d1-9082-11e5-b111-2533c6be0d4c",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "sum.a",
    "parent": "c27fc5d0-9082-11e5-b111-2533c6be0d4c",
    "origin": {
      "!span": "66[5:5]-67[5:6]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/merge.js"
  },
  {
    "id": "c27fc5d2-9082-11e5-b111-2533c6be0d4c",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "sum.a",
    "parent": "c27fc5d0-9082-11e5-b111-2533c6be0d4c",
    "origin": {
      "!span": "73[5:12]-74[5:13]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
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
