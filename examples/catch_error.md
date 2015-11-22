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
    "id": "f5652460-90a8-11e5-bfbe-ab09c16e5d96",
    "name": "e",
    "addr": "/e/",
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
e	__DIR__/catch_error.js	/e/;"	v	lineno:3	type:Error
```
