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
    "addr": "/function buildCopy\(o\) \{/",
    "kind": "f",
    "type": "buildCopy.!ret function(buildCopy.!0)",
    "lineno": 1
  }
]
```
