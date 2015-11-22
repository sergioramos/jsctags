```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "id": "b59b9840-90bd-11e5-96c4-95a46f059b4d",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "b59bbf50-90bd-11e5-96c4-95a46f059b4d",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/replace_bogus_prop.js"
  },
  {
    "id": "b59bbf52-90bd-11e5-96c4-95a46f059b4d",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "parent": "b59bbf51-90bd-11e5-96c4-95a46f059b4d",
    "origin": {
      "!span": "74[5:15]-77[5:18]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
