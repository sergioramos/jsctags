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
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/copyprops.js"
  }
]
```
```ctags
buildCopy	/usr/local/lib/node_modules/jsctags/test/cases/copyprops.js	/buildCopy/;"	f	lineno:1	type:? function(buildCopy.!0)
```
