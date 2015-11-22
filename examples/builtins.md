```js
var x = Math.PI; //: number
Math.cos(x); //: number

var a = [1, 2, 3]; //: [number]
a.slice(2); //: [number]
a.pop(); //: number

["x"].concat(["hi"]); //: [string]

[true, false, true].filter(function(x){return x;}); //: [bool]

[].map(function() {return "x";}); //: [string]

[].reduce(function(a, b) { return a - 2; }, 0); //: number

Math.cos.call(null, 10); //: number

(10).toFixed; //: fn(digits: number) -> string

"foo bar baz".split(" "); //: [string]

toString; //: fn() -> string

new Date; //: Date

var num = new Number(1);
num; //: Number

"foo".toString(); //: string

Array.prototype.slice.call([1, 2, 3], 1); //: [number]

Array.prototype.slice.apply([1, 2, 3], [1]); //: [number]

String.prototype.indexOf.bind("abcde", "a"); //: fn(from?: number) -> number
```
```json
[
  {
    "id": "32da3860-90c4-11e5-8e08-ed0239d93a5b",
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
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "id": "32da5f70-90c4-11e5-8e08-ed0239d93a5b",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "[number]",
    "lineno": 4,
    "origin": {
      "!span": "57[3:4]-58[3:5]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "id": "32da5f71-90c4-11e5-8e08-ed0239d93a5b",
    "name": "num",
    "addr": "/num/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "518[25:4]-521[25:7]",
      "!type": "+Number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/builtins.js"
  }
]
```
```ctags
x	__DIR__/builtins.js	/x/;"	v	lineno:1	type:number
a	__DIR__/builtins.js	/a/;"	v	lineno:4	type:[number]
num	__DIR__/builtins.js	/num/;"	v	lineno:26	type:number
```
