```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "id": "2aeec4c0-90cb-11e5-b0bc-23423aa3cc1c",
    "name": "abc",
    "addr": "/abc/",
    "kind": "f",
    "type": "number function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/fn_arguments.js"
  },
  {
    "id": "2aeeebd0-90cb-11e5-b0bc-23423aa3cc1c",
    "name": "arguments",
    "addr": "/function abc\(\) \{/",
    "kind": "v",
    "type": "[number]",
    "lineno": 1,
    "namespace": "abc",
    "parent": "2aeec4c0-90cb-11e5-b0bc-23423aa3cc1c",
    "origin": {
      "!span": "0[0:0]-41[2:1]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/fn_arguments.js"
  }
]
```
```ctags
abc	__DIR__/fn_arguments.js	/abc/;"	f	lineno:1	type:number function()
arguments	__DIR__/fn_arguments.js	/function abc\(\) \{/;"	v	lineno:1	namespace:abc	type:[number]
```
