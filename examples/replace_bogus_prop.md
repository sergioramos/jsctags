```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "+Type",
    "lineno": 1
  },
  {
    "name": "Type",
    "addr": "/Type/",
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
x		/x/;"	v	lineno:1	type:+Type

Type		/Type/;"	f	lineno:5	type:void function()

foo		/foo/;"	v	lineno:6	namespace:Type.prototype	type:string
```
