```js
function buildCopy(o) {
  var oo = {};
  for (var prop in o) oo[prop] = o[prop];
  return oo;
}

buildCopy({xx: 10, yy: 20}); //:: {xx: number, yy: number}
```
```json
[
  {
    "id": "f71aeab0-90a8-11e5-bb31-63599539c9be",
    "name": "buildCopy",
    "addr": "/buildCopy/",
    "kind": "f",
    "type": "? function(buildCopy.!0)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-18[0:18]",
      "!type": "fn(o: buildCopy.!0) -> ?",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/copyprops.js"
  },
  {
    "id": "f71b11c0-90a8-11e5-bb31-63599539c9be",
    "name": "oo",
    "addr": "/oo/",
    "kind": "v",
    "lineno": 2,
    "namespace": "buildCopy",
    "parent": "f71aeab0-90a8-11e5-bb31-63599539c9be",
    "origin": {
      "!span": "30[1:6]-32[1:8]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/copyprops.js"
  },
  {
    "id": "f71b11c1-90a8-11e5-bb31-63599539c9be",
    "name": "prop",
    "addr": "/prop/",
    "kind": "v",
    "lineno": 3,
    "namespace": "buildCopy",
    "parent": "f71aeab0-90a8-11e5-bb31-63599539c9be",
    "origin": {
      "!span": "50[2:11]-54[2:15]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/copyprops.js"
  }
]
```
```ctags
buildCopy	__DIR__/copyprops.js	/buildCopy/;"	f	lineno:1	type:? function(buildCopy.!0)
oo	__DIR__/copyprops.js	/oo/;"	v	lineno:2	namespace:buildCopy
prop	__DIR__/copyprops.js	/prop/;"	v	lineno:3	namespace:buildCopy
```
