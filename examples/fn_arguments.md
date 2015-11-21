```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "id": "65a28260-9084-11e5-9aaf-d78d6f4122f6",
    "name": "abc",
    "addr": "/abc/",
    "kind": "f",
    "type": "number function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/fn_arguments.js"
  },
  {
    "id": "65a2a970-9084-11e5-9aaf-d78d6f4122f6",
    "name": "arguments",
    "addr": "/function abc\(\) \{/",
    "kind": "v",
    "type": "[number]",
    "lineno": 1,
    "namespace": "abc",
    "parent": "65a28260-9084-11e5-9aaf-d78d6f4122f6",
    "origin": {
      "!span": "0[0:0]-41[2:1]",
      "!type": "[number]",
      "!data": {
        "scoped": false,
        "isArg": false
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
