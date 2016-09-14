```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "id": "1beb32b0-7aef-11e6-b872-ed8c7912c5f2",
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
    "id": "1beb59c0-7aef-11e6-b872-ed8c7912c5f2",
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
    "id": "1beba7e1-7aef-11e6-b872-ed8c7912c5f2",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "parent": "1beba7e0-7aef-11e6-b872-ed8c7912c5f2",
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
