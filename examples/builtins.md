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

var regexp = new RegExp();
var obj = Object.create({});
var arr = new Array();
var str = new String();
var fn = new Function();
var sym = new Symbol();
var num2 = Number('2');
var str2 = String(2);
var gen = function *(a) {
  return a * 2;
};

var obj2 = {
  a: {
    b: {
      c: 3
    }
  }
}
```
```json
[
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "number"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "[number]",
    "lineno": 4,
    "origin": {
      "!span": "57[3:4]-58[3:5]",
      "!type": "[number]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "num",
    "addr": "/num/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "518[25:4]-521[25:7]",
      "!type": "+Number"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "regexp",
    "addr": "/regexp/",
    "kind": "v",
    "type": "regexp",
    "lineno": 37,
    "origin": {
      "!span": "783[36:4]-789[36:10]",
      "!type": "+RegExp"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 38,
    "origin": {
      "!span": "810[37:4]-813[37:7]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "arr",
    "addr": "/arr/",
    "kind": "v",
    "type": "[?]",
    "lineno": 39,
    "origin": {
      "!span": "839[38:4]-842[38:7]",
      "!type": "[?]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "str",
    "addr": "/str/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "origin": {
      "!span": "862[39:4]-865[39:7]",
      "!type": "+String"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "fn",
    "addr": "/fn/",
    "kind": "f",
    "type": "void function()",
    "lineno": 41,
    "origin": {
      "!span": "886[40:4]-888[40:6]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "sym",
    "addr": "/sym/",
    "kind": "v",
    "lineno": 42,
    "origin": {
      "!span": "911[41:4]-914[41:7]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "num2",
    "addr": "/num2/",
    "kind": "v",
    "type": "number",
    "lineno": 43,
    "origin": {
      "!span": "935[42:4]-939[42:8]",
      "!type": "number"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "str2",
    "addr": "/str2/",
    "kind": "v",
    "type": "string",
    "lineno": 44,
    "origin": {
      "!span": "959[43:4]-963[43:8]",
      "!type": "string"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "gen",
    "addr": "/gen/",
    "kind": "f",
    "type": "number function(?)",
    "lineno": 45,
    "origin": {
      "!span": "981[44:4]-984[44:7]",
      "!type": "fn*(a: ?) -> number"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 45,
    "namespace": "gen",
    "origin": {
      "!span": "998[44:21]-999[44:22]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "obj2",
    "addr": "/obj2/",
    "kind": "v",
    "lineno": 49,
    "origin": {
      "!span": "1027[48:4]-1031[48:8]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 50,
    "namespace": "obj2",
    "origin": {
      "!span": "1038[49:2]-1039[49:3]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 51,
    "namespace": "obj2.a",
    "origin": {
      "!span": "1047[50:4]-1048[50:5]"
    },
    "tagfile": "__DIR__/builtins.js"
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "number",
    "lineno": 52,
    "namespace": "obj2.a.b",
    "origin": {
      "!span": "1058[51:6]-1059[51:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/builtins.js"
  }
]
```
```ctags
x	__DIR__/builtins.js	/x/;"	v	lineno:1	type:number
a	__DIR__/builtins.js	/a/;"	v	lineno:4	type:[number]
num	__DIR__/builtins.js	/num/;"	v	lineno:26	type:number
regexp	__DIR__/builtins.js	/regexp/;"	v	lineno:37	type:regexp
obj	__DIR__/builtins.js	/obj/;"	v	lineno:38
arr	__DIR__/builtins.js	/arr/;"	v	lineno:39	type:[?]
str	__DIR__/builtins.js	/str/;"	v	lineno:40	type:string
fn	__DIR__/builtins.js	/fn/;"	f	lineno:41	type:void function()
sym	__DIR__/builtins.js	/sym/;"	v	lineno:42
num2	__DIR__/builtins.js	/num2/;"	v	lineno:43	type:number
str2	__DIR__/builtins.js	/str2/;"	v	lineno:44	type:string
gen	__DIR__/builtins.js	/gen/;"	f	lineno:45	type:number function(?)
a	__DIR__/builtins.js	/a/;"	v	lineno:45	namespace:gen
obj2	__DIR__/builtins.js	/obj2/;"	v	lineno:49
a	__DIR__/builtins.js	/a/;"	v	lineno:50	namespace:obj2
b	__DIR__/builtins.js	/b/;"	v	lineno:51	namespace:obj2.a
c	__DIR__/builtins.js	/c/;"	v	lineno:52	namespace:obj2.a.b	type:number
```
