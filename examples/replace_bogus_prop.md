```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "id": "c7a92f10-9082-11e5-ab62-ffcce41c1821",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "Type",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "+Type"
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "c7a95620-9082-11e5-ab62-ffcce41c1821",
    "name": "Type",
    "addr": "/Type/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5,
    "origin": {
      "!span": "49[4:9]-53[4:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "c7a95622-9082-11e5-ab62-ffcce41c1821",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "parent": "c7a95621-9082-11e5-ab62-ffcce41c1821",
    "origin": {
      "!span": "74[5:15]-77[5:18]",
      "!type": "string"
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  }
]
```
```ctags
x	__DIR__/replace_bogus_prop.js	/x/;"	v	lineno:1	type:Type
Type	__DIR__/replace_bogus_prop.js	/Type/;"	f	lineno:5	type:void function()
foo	__DIR__/replace_bogus_prop.js	/foo/;"	v	lineno:6	namespace:Type.prototype	type:string
```
