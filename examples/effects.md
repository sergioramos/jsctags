```js
["foo", "bar"].map(function(s) { return s.charCodeAt(0); }); //: [number]

var b = [];
b.push(true);
b; //: [bool]

var c = [];
c.push("hi");
c.push(10);
c; //: [string|number]

var d;
function setD(a) { d = a; }
setD.call(null, 55);
d; //: number
```
```json
[
  {
    "id": "635b2a70-9084-11e5-840e-0d01e8c3255b",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 3,
    "origin": {
      "!span": "79[2:4]-80[2:5]",
      "!type": "[bool]"
    },
    "tagfile": "__DIR__/effects.js"
  },
  {
    "id": "635b5180-9084-11e5-840e-0d01e8c3255b",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[string|number]",
    "lineno": 7,
    "origin": {
      "!span": "120[6:4]-121[6:5]",
      "!type": "[string|number]"
    },
    "tagfile": "__DIR__/effects.js"
  },
  {
    "id": "635b7890-9084-11e5-840e-0d01e8c3255b",
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "number",
    "lineno": 12,
    "origin": {
      "!span": "182[11:4]-183[11:5]",
      "!type": "number"
    },
    "tagfile": "__DIR__/effects.js"
  },
  {
    "id": "635b7891-9084-11e5-840e-0d01e8c3255b",
    "name": "setD",
    "addr": "/setD/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 13,
    "origin": {
      "!span": "194[12:9]-198[12:13]",
      "!type": "fn(a: number)"
    },
    "tagfile": "__DIR__/effects.js"
  },
  {
    "id": "635b7892-9084-11e5-840e-0d01e8c3255b",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "setD",
    "parent": "635b7891-9084-11e5-840e-0d01e8c3255b",
    "origin": {
      "!span": "199[12:14]-200[12:15]",
      "!type": "number",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/effects.js"
  }
]
```
```ctags
b	__DIR__/effects.js	/b/;"	v	lineno:3	type:[bool]
c	__DIR__/effects.js	/c/;"	v	lineno:7	type:[string|number]
d	__DIR__/effects.js	/d/;"	v	lineno:12	type:number
setD	__DIR__/effects.js	/setD/;"	f	lineno:13	type:void function(number)
a	__DIR__/effects.js	/a/;"	v	lineno:13	namespace:setD	type:number
```
