```js
var x = 10;
var y = "foo";

x + 20; //: number
x + y; //: string
"foo" + y; //: string
"foo" + x; //: string
```
```json
[
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/plus.js"
  },
  {
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/plus.js"
  }
]
```
```ctags
x	/usr/local/lib/node_modules/jsctags/test/cases/plus.js	/x/;"	v	lineno:1	type:number
y	/usr/local/lib/node_modules/jsctags/test/cases/plus.js	/y/;"	v	lineno:2	type:string
```
