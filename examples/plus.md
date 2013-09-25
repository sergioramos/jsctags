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
    "lineno": 1
  },
  {
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "string",
    "lineno": 2
  }
]
```
```ctags
x		/x/;'	v	lineno:1	type:number

y		/y/;'	v	lineno:2	type:string
```
