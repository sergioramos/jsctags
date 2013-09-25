```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "name": "Type",
    "addr": "/function Type\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype"
  }
]
```
```ctags
Type		/function Type\(\) \{\}/;'	f	lineno:5	type:void function()

foo		/foo/;'	v	lineno:6	namespace:Type.prototype	type:string
```
