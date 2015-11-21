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
    "id": "63b70610-9084-11e5-af45-01beb5f87d2d",
    "name": "Class",
    "addr": "/Class/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "63b75430-9084-11e5-af45-01beb5f87d2d",
    "name": "hello",
    "addr": "/hello/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "Class.prototype",
    "parent": "63b72d20-9084-11e5-af45-01beb5f87d2d",
    "origin": {
      "!span": "36[1:16]-41[1:21]",
      "!type": "string"
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "63b75431-9084-11e5-af45-01beb5f87d2d",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "Class",
    "lineno": 4,
    "origin": {
      "!span": "59[3:4]-60[3:5]",
      "!type": "+Class"
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  }
]
```
```ctags
Class	__DIR__/empty_overridden_prop.js	/Class/;"	f	lineno:1	type:void function()
hello	__DIR__/empty_overridden_prop.js	/hello/;"	v	lineno:2	namespace:Class.prototype	type:string
c	__DIR__/empty_overridden_prop.js	/c/;"	v	lineno:4	type:Class
```
