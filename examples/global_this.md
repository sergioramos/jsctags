```js
var foo = 10;

(function() {
  this.foo; //: number
})();
```
```json
[
  {
    "id": "fd7558b0-7aee-11e6-992c-1bd4afccfca9",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/global_this.js"
  }
]
```
```ctags
foo	__DIR__/global_this.js	/foo/;"	v	lineno:1	type:number
```
