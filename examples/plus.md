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
    "id": "14a61560-7aef-11e6-9596-537319a3b4c0",
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
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/plus.js"
  },
  {
    "id": "14a66380-7aef-11e6-9596-537319a3b4c0",
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
        "type": "String.prototype"
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
