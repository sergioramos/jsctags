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
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/merge.js"
  }
]
```
```ctags
sum	/usr/local/lib/node_modules/jsctags/test/cases/merge.js	/sum/;"	f	lineno:1	type:number function(?)
```
