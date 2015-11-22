```js
var foo = 10;

(function() {
  this.foo; //: number
})();
```
```json
[
  {
    "id": "ad9d8b30-90bd-11e5-9471-a9f05c6b0cab",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/global_this.js"
  }
]
```
```ctags
foo	__DIR__/global_this.js	/foo/;"	v	lineno:1	type:number
```
