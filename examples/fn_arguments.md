```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "id": "bd339250-9082-11e5-93e6-c7f5cd730841",
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
    "id": "bd33b960-9082-11e5-93e6-c7f5cd730841",
    "name": "arguments",
    "addr": "/function abc\(\) \{/",
    "kind": "v",
    "type": "[number]",
    "lineno": 1,
    "namespace": "abc",
    "parent": "bd339250-9082-11e5-93e6-c7f5cd730841",
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
