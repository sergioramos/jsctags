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
    "id": "2909d820-90cb-11e5-9af3-db2828a275ea",
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
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "2909ff31-90cb-11e5-9af3-db2828a275ea",
    "name": "hello",
    "addr": "/hello/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "Class.prototype",
    "parent": "2909ff30-90cb-11e5-9af3-db2828a275ea",
    "origin": {
      "!span": "36[1:16]-41[1:21]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "290a2640-90cb-11e5-9af3-db2828a275ea",
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
        "type": "Class.prototype"
      }
    },
    "tagfile": "__DIR__/empty_overridden_prop.js"
  },
  {
    "id": "290a2641-90cb-11e5-9af3-db2828a275ea",
    "name": "hello",
    "addr": "/hello/",
    "kind": "v",
    "lineno": 5,
    "namespace": "c",
    "parent": "290a2640-90cb-11e5-9af3-db2828a275ea",
    "origin": {
      "!span": "76[4:2]-81[4:7]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
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
hello	__DIR__/empty_overridden_prop.js	/hello/;"	v	lineno:5	namespace:c
```
