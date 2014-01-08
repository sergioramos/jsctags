```js
var foo = 10;

(function() {
  this.foo; //: number
})();
```
```json
[
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1
  }
]
```
```ctags
foo		/foo/;"	v	lineno:1	type:number
```
