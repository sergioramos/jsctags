```js
function whoAmI(a, i) {
  a.splice(i, 1);
  a.c //+? concat, copyWithin
}
```
```json
[
  {
    "id": "f6b4aed0-90a8-11e5-8780-b3f75cc92246",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "f6b4fcf0-90a8-11e5-8780-b3f75cc92246",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "f6b4aed0-90a8-11e5-8780-b3f75cc92246",
    "origin": {
      "!span": "16[0:16]-17[0:17]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "f6b4fcf1-90a8-11e5-8780-b3f75cc92246",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "f6b4aed0-90a8-11e5-8780-b3f75cc92246",
    "origin": {
      "!span": "19[0:19]-20[0:20]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": true
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
