```js
var a = new Array();
a.push("hi");
a[0]; //: string

var b = new Array(true, false, true);
b[0]; //: bool

var c = new Array(1);
c[0]; //: ?

var d = new Array("one");
d[0]; //: string
```
```json
[
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "[string]",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/new_array.js"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 5,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/new_array.js"
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[?]",
    "lineno": 8,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/new_array.js"
  },
  {
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "[string]",
    "lineno": 11,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/new_array.js"
  }
]
```
```ctags
a	/usr/local/lib/node_modules/jsctags/test/cases/new_array.js	/a/;"	v	lineno:1	type:[string]
b	/usr/local/lib/node_modules/jsctags/test/cases/new_array.js	/b/;"	v	lineno:5	type:[bool]
c	/usr/local/lib/node_modules/jsctags/test/cases/new_array.js	/c/;"	v	lineno:8	type:[?]
d	/usr/local/lib/node_modules/jsctags/test/cases/new_array.js	/d/;"	v	lineno:11	type:[string]
```
