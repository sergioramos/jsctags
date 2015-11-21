```js
function abc() {
  return arguments[1];
}

abc(1, 2, 3); //: number
```
```json
[
  {
    "id": "5358ec70-909d-11e5-a904-a159386a8b51",
    "name": "abc",
    "addr": "abc",
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
    "id": "53591380-909d-11e5-a904-a159386a8b51",
    "name": "arguments",
    "addr": "function abc() {",
    "kind": "v",
    "type": "[number]",
    "lineno": 1,
    "namespace": "abc",
    "parent": "5358ec70-909d-11e5-a904-a159386a8b51",
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
abc	__DIR__/fn_arguments.js	abc;"	f	lineno:1	type:number function()
arguments	__DIR__/fn_arguments.js	function abc() {;"	v	lineno:1	namespace:abc	type:[number]
```
