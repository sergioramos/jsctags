```js
var x = new Type();

x.foo; //: string

function Type() {}
Type.prototype.foo = "hi";
```
```json
[
  {
    "id": "5df01af0-909d-11e5-b457-2505b757d2e6",
    "name": "x",
    "addr": "x",
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
    "id": "5df01af1-909d-11e5-b457-2505b757d2e6",
    "name": "Type",
    "addr": "Type",
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
    "id": "5df04201-909d-11e5-b457-2505b757d2e6",
    "name": "foo",
    "addr": "foo",
    "kind": "v",
    "type": "string",
    "lineno": 6,
    "namespace": "Type.prototype",
    "parent": "5df04200-909d-11e5-b457-2505b757d2e6",
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
x	__DIR__/replace_bogus_prop.js	x;"	v	lineno:1	type:Type
Type	__DIR__/replace_bogus_prop.js	Type;"	f	lineno:5	type:void function()
foo	__DIR__/replace_bogus_prop.js	foo;"	v	lineno:6	namespace:Type.prototype	type:string
```
