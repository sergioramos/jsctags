```js
try {
  foo();
} catch(e) {
  e.message; //doc: A human-readable description of the error.
}
```
```json
[
  {
    "id": "4d52b7c0-909d-11e5-80d5-bf6f7b7718ef",
    "name": "e",
    "addr": "e",
    "kind": "v",
    "type": "Error",
    "lineno": 3,
    "origin": {
      "!span": "23[2:8]-24[2:9]",
      "!type": "+Error",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/catch_error.js"
  }
]
```
```ctags
e	__DIR__/catch_error.js	e;"	v	lineno:3	type:Error
```
