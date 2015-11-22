```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "id": "355916e0-90cb-11e5-89a4-4baf2e21db4d",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "Type",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "+Type",
      "!data": {
        "isConstructor": false,
        "type": "Type.prototype"
      }
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "35593df0-90cb-11e5-89a4-4baf2e21db4d",
    "name": "Type",
    "addr": "/Type/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5,
    "origin": {
      "!span": "49[4:9]-53[4:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "35593df2-90cb-11e5-89a4-4baf2e21db4d",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "parent": "35593df1-90cb-11e5-89a4-4baf2e21db4d",
    "origin": {
      "!span": "74[5:15]-77[5:18]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
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
