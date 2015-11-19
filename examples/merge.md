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
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "sum",
    "origin": {
      "!span": "13[0:13]-14[0:14]"
    },
    "tagfile": "__DIR__/merge.js"
  }
]
```
```ctags
sum	__DIR__/merge.js	/sum/;"	f	lineno:1	type:number function(?)
a	__DIR__/merge.js	/a/;"	v	lineno:1	namespace:sum
```
