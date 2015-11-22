```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "id": "fbb55a60-90a8-11e5-804a-ebf81727e94d",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/fn_arguments.js"
  },
  {
    "id": "fbb58170-90a8-11e5-804a-ebf81727e94d",
    "name": "arguments",
    "addr": "/function abc\(\) \{/",
    "kind": "v",
    "type": "[number]",
    "lineno": 1,
    "namespace": "abc",
    "parent": "fbb55a60-90a8-11e5-804a-ebf81727e94d",
    "origin": {
      "!span": "0[0:0]-41[2:1]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
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
