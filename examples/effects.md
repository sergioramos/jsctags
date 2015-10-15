```js
["foo", "bar"].map(function(s) { return s.charCodeAt(0); }); //: [number]

var b = [];
b.push(true);
b; //: [bool]

var c = [];
c.push("hi");
c.push(10);
c; //: [?]

var d;
function setD(a) { d = a; }
setD.call(null, 55);
d; //: number
```
```json
[
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 3,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/effects.js"
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[string|number]",
    "lineno": 7,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/effects.js"
  },
  {
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "number",
    "lineno": 12,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/effects.js"
  },
  {
    "name": "setD",
    "addr": "/setD/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 13,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/effects.js"
  }
]
```
```ctags
b	/usr/local/lib/node_modules/jsctags/test/cases/effects.js	/b/;"	v	lineno:3	type:[bool]
c	/usr/local/lib/node_modules/jsctags/test/cases/effects.js	/c/;"	v	lineno:7	type:[string|number]
d	/usr/local/lib/node_modules/jsctags/test/cases/effects.js	/d/;"	v	lineno:12	type:number
setD	/usr/local/lib/node_modules/jsctags/test/cases/effects.js	/setD/;"	f	lineno:13	type:void function(number)
```
