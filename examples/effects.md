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
    "lineno": 3
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[?]",
    "lineno": 7
  },
  {
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "number",
    "lineno": 12
  },
  {
    "name": "setD",
    "addr": "/function setD\(a\) \{ d = a; \}/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 13
  }
]
```
```ctags
b		/b/;'	v	lineno:3	type:[bool]

c		/c/;'	v	lineno:7	type:[?]

d		/d/;'	v	lineno:12	type:number

setD		/function setD\(a\) \{ d = a; \}/;'	f	lineno:13	type:void function(number)
```
