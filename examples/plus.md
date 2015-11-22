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
    "id": "42329870-90c4-11e5-9fa7-2937dfd8dd91",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/plus.js"
  },
  {
    "id": "4232bf80-90c4-11e5-9fa7-2937dfd8dd91",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "origin": {
      "!span": "16[1:4]-17[1:5]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/plus.js"
  }
]
```
```ctags
x	__DIR__/plus.js	/x/;"	v	lineno:1	type:number
y	__DIR__/plus.js	/y/;"	v	lineno:2	type:string
```
