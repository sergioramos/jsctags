```js
var foo = 10;

(function() {
  this.foo; //: number
})();
```
```json
[
  {
    "id": "678aca60-9084-11e5-a04c-2f5e92465d73",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/global_this.js"
  }
]
```
```ctags
foo	__DIR__/global_this.js	/foo/;"	v	lineno:1	type:number
```
