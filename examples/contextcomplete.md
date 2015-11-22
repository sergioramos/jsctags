```js
function whoAmI(a, i) {
  a.splice(i, 1);
  a.c //+? concat, copyWithin
}
```
```json
[
  {
    "id": "26558d90-90cb-11e5-bba9-c50e82e2ead3",
    "name": "whoAmI",
    "addr": "/whoAmI/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-15[0:15]",
      "!type": "fn(a: ?, i: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "2655b4a0-90cb-11e5-bba9-c50e82e2ead3",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "26558d90-90cb-11e5-bba9-c50e82e2ead3",
    "origin": {
      "!span": "16[0:16]-17[0:17]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "2655b4a1-90cb-11e5-bba9-c50e82e2ead3",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "26558d90-90cb-11e5-bba9-c50e82e2ead3",
    "origin": {
      "!span": "19[0:19]-20[0:20]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  }
]
```
```ctags
whoAmI	__DIR__/contextcomplete.js	/whoAmI/;"	f	lineno:1	type:void function(?, ?)
a	__DIR__/contextcomplete.js	/a/;"	v	lineno:1	namespace:whoAmI
i	__DIR__/contextcomplete.js	/i/;"	v	lineno:1	namespace:whoAmI
```
