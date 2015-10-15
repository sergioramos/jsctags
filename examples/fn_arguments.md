```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "name": "abc",
    "addr": "/abc/",
    "kind": "f",
    "type": "number function()",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/fn_arguments.js"
  }
]
```
```ctags
abc	/usr/local/lib/node_modules/jsctags/test/cases/fn_arguments.js	/abc/;"	f	lineno:1	type:number function()
```
