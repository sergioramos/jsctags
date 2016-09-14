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
    "id": "0bc26340-7aef-11e6-bba4-efb3eb172070",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "[string]",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/new_array.js"
  },
  {
    "id": "0bc2b160-7aef-11e6-bba4-efb3eb172070",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 5,
    "origin": {
      "!span": "57[4:4]-58[4:5]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/new_array.js"
  },
  {
    "id": "0bc2b161-7aef-11e6-bba4-efb3eb172070",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "[?]",
    "lineno": 8,
    "origin": {
      "!span": "111[7:4]-112[7:5]",
      "!type": "[?]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/new_array.js"
  },
  {
    "id": "0bc2d870-7aef-11e6-bba4-efb3eb172070",
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "[string]",
    "lineno": 11,
    "origin": {
      "!span": "146[10:4]-147[10:5]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/new_array.js"
  }
]
```
```ctags
a	__DIR__/new_array.js	/a/;"	v	lineno:1	type:[string]
b	__DIR__/new_array.js	/b/;"	v	lineno:5	type:[bool]
c	__DIR__/new_array.js	/c/;"	v	lineno:8	type:[?]
d	__DIR__/new_array.js	/d/;"	v	lineno:11	type:[string]
```
