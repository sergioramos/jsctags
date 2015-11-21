```js
function Class() {}
Class.prototype.hello = "string";

var c = new Class;
c.hello = nobodyKnows();

c.hello; //: string
```
```json
[
  {
    "id": "5177a950-909d-11e5-9b3d-23ccbcf6171d",
    "name": "Class",
    "addr": "Class",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "5177f770-909d-11e5-9b3d-23ccbcf6171d",
    "name": "hello",
    "addr": "hello",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "Class.prototype",
    "parent": "5177d060-909d-11e5-9b3d-23ccbcf6171d",
    "origin": {
      "!span": "36[1:16]-41[1:21]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "5177f771-909d-11e5-9b3d-23ccbcf6171d",
    "name": "c",
    "addr": "c",
    "kind": "v",
    "type": "Class",
    "lineno": 4,
    "origin": {
      "!span": "59[3:4]-60[3:5]",
      "!type": "+Class",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  }
]
```
```ctags
Class	__DIR__/empty_overridden_prop.js	Class;"	f	lineno:1	type:void function()
hello	__DIR__/empty_overridden_prop.js	hello;"	v	lineno:2	namespace:Class.prototype	type:string
c	__DIR__/empty_overridden_prop.js	c;"	v	lineno:4	type:Class
```
