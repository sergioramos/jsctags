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
    "id": "f9967200-90a8-11e5-b6a7-4d3e781bd14b",
    "name": "Class",
    "addr": "/Class/",
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
    "id": "f996c020-90a8-11e5-b6a7-4d3e781bd14b",
    "name": "hello",
    "addr": "/hello/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "Class.prototype",
    "parent": "f9969910-90a8-11e5-b6a7-4d3e781bd14b",
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
    "id": "f996c021-90a8-11e5-b6a7-4d3e781bd14b",
    "name": "c",
    "addr": "/c/",
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
Class	__DIR__/empty_overridden_prop.js	/Class/;"	f	lineno:1	type:void function()
hello	__DIR__/empty_overridden_prop.js	/hello/;"	v	lineno:2	namespace:Class.prototype	type:string
c	__DIR__/empty_overridden_prop.js	/c/;"	v	lineno:4	type:Class
```
