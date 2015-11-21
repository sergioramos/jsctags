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
    "id": "b632d100-9082-11e5-be16-55117af5e233",
    "name": "e",
    "addr": "/e/",
    "kind": "v",
    "type": "Error",
    "lineno": 3,
    "origin": {
      "!span": "23[2:8]-24[2:9]",
      "!type": "+Error"
    },
    "tagfile": "__DIR__/catch_error.js"
  }
]
```
```ctags
e	__DIR__/catch_error.js	/e/;"	v	lineno:3	type:Error
```
