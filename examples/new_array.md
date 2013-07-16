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
    "lineno": 1
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 5
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[?]",
    "lineno": 8
  },
  {
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "[string]",
    "lineno": 11
  }
]
```
