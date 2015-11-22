```js
function whoAmI(a, i) {
  a.splice(i, 1);
  a.c //+? concat, copyWithin
}
```
```json
[
  {
    "id": "a7400ec0-90bd-11e5-85e8-23b8ef172e44",
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
    "id": "a74035d0-90bd-11e5-85e8-23b8ef172e44",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "a7400ec0-90bd-11e5-85e8-23b8ef172e44",
    "origin": {
      "!span": "16[0:16]-17[0:17]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "a74035d1-90bd-11e5-85e8-23b8ef172e44",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "a7400ec0-90bd-11e5-85e8-23b8ef172e44",
    "origin": {
      "!span": "19[0:19]-20[0:20]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
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
