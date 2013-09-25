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
    "addr": "/function sum\(a\) \{/",
    "kind": "f",
    "type": "number function(sum.!0)",
    "lineno": 1
  }
]
```
```ctags
sum		/function sum\(a\) \{/;'	f	lineno:1	type:number function(sum.!0)
```
