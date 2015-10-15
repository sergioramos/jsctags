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
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js"
  },
  {
    "name": "Type",
    "addr": "/Type/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js"
  }
]
```
```ctags
Type	/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js	/Type/;"	f	lineno:5	type:void function()
foo	/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js	/foo/;"	v	lineno:6	namespace:Type.prototype	type:string
x	/usr/local/lib/node_modules/jsctags/test/cases/replace_bogus_prop.js	/x/;"	v	lineno:1	type:+Type
```
