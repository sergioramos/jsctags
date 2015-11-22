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
    "id": "25321c30-90cb-11e5-86c1-0dc5affd2859",
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
        "type": "Error.prototype"
      }
    },
    "tagfile": "__DIR__/catch_error.js"
  }
]
```
```ctags
e	__DIR__/catch_error.js	/e/;"	v	lineno:3	type:Error
```
