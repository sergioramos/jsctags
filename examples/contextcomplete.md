```js
function whoAmI(a, i) {
  a.splice(i, 1);
  a.c //+? concat, copyWithin
}
```
```json
[
  {
    "id": "60a2c130-9084-11e5-8fc2-dd5632120a85",
    "name": "whoAmI",
    "addr": "/whoAmI/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-15[0:15]",
      "!type": "fn(a: ?, i: ?)"
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "60a2e840-9084-11e5-8fc2-dd5632120a85",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "60a2c130-9084-11e5-8fc2-dd5632120a85",
    "origin": {
      "!span": "16[0:16]-17[0:17]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/contextcomplete.js"
  },
  {
    "id": "60a2e841-9084-11e5-8fc2-dd5632120a85",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "lineno": 1,
    "namespace": "whoAmI",
    "parent": "60a2c130-9084-11e5-8fc2-dd5632120a85",
    "origin": {
      "!span": "19[0:19]-20[0:20]",
      "!data": {
        "scoped": true,
        "isArg": true
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
