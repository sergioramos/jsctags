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
    "name": "buildCopy",
    "addr": "/buildCopy/",
    "kind": "f",
    "type": "? function(buildCopy.!0)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-18[0:18]",
      "!type": "fn(o: buildCopy.!0) -> ?"
    },
    "tagfile": "__DIR__/copyprops.js"
  },
  {
    "name": "oo",
    "addr": "/oo/",
    "kind": "v",
    "lineno": 2,
    "namespace": "buildCopy",
    "origin": {
      "!span": "30[1:6]-32[1:8]"
    },
    "tagfile": "__DIR__/copyprops.js"
  },
  {
    "name": "prop",
    "addr": "/prop/",
    "kind": "v",
    "lineno": 3,
    "namespace": "buildCopy",
    "origin": {
      "!span": "50[2:11]-54[2:15]"
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
