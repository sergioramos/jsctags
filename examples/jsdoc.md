```js
/** @type {Date} */
var a = getSomething();
a; //: Date

a.getTime; //: fn() -> number

/** @type {{x: Integer, y: [String]}} */
var c = somethingElse();
c; //:: {x: number, y: [string]}

/**
 * This is a function
 * @return {[Number]}
 * @param {Number} a
 * @param {String} b
 */
function foo(a, b) { return hohoho(); }
foo; //: fn(a: number, b: string) -> [number]

/** @this Date */
var abc = function() {
  this; //: Date
};

/** @this Abc */
var Abc = function() {
  this; //: Abc
};

/** @class */
var AbcCls = function() {
  this; //: AbcCls
};

/** @constructor */
var AbcCtor = function() {
  this; //: AbcCtor
};

/**
 * This is also a function
 * @returns {string}
 * @arg {Number} a
 */
var bar = function(a, b) { return goop(); };
bar(gulp(), 10);
bar; //: fn(a: number, b: number) -> string

var o = {
  /** @type {String} */
  prop1: mystery(),

  /** @returns {Number} */
  prop2: function() { return anything(); }
};

/** @returns {String} */
o.prop3 = function() { return something(); };

o.prop1; //: string
o.prop2; //: fn() -> number
o.prop3; //: fn() -> string

/** @type {Array.<string>} */
var closureArray = anotherThing();
closureArray[1]; //: string

/** @type {Object.<number,boolean>} */
var closureMap = yetAnotherThing();
closureMap[1]; //: bool

/** @param {Number=} a */
function takesOpt(a) { console.log(a || 20); }

takesOpt; //: fn(a?: number)

/** @typedef {Array.<boolean>} Bitset */

/**
 * @typedef {Object} MyType
 * @property {boolean} one - Property one
 * @property {integer} two - And two
 */

someNonDeclarationStatement();

/** @type {Bitset} */
var myBitset = getABitset();

myBitset; //: [bool]

/** @type {MyType} */
var myObj;

myObj.one //: bool
myObj.two //: number
({}).one //: ?

function NonAscïį() { this.length = "hi"; }

/** @type {NonAscïį} */
var inst;

inst.length; //: string

/** @type {bogus.Type} */
var bogus = abcdef();

bogus; //: bogus.Type

/** @type {bogus.Overridden} */
var again = 10;

again; //: number

/**
 * @return {bogus.Retval}
 * @param {bogus.Arg} a
 */
function functionBogus(a) { return hohoho(); }

functionBogus; //: fn(a: bogus.Arg) -> bogus.Retval

/** @type {string|number} */
var stringOrNumber;

stringOrNumber; //: string|number

/**
 * @param {string|null} a
 * @return {Array.<Foo|number>}
 */
function unionFunction(a) { return argh(); }

unionFunction; //: fn(a: string) -> [Foo|number]

/**
 * @returns {string}
 */
function ui() {}

ui(); //: string
```
```json
[
  {
    "id": "06c11b70-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "Date",
    "lineno": 2,
    "origin": {
      "!span": "24[1:4]-25[1:5]",
      "!type": "+Date",
      "!data": {
        "isConstructor": false,
        "type": "Date.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c1dec0-7aef-11e6-a6d5-71028cd371ec",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "133[7:4]-134[7:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c22ce0-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "namespace": "foo",
    "parent": "06c205d2-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "295[16:13]-296[16:14]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c205d2-7aef-11e6-a6d5-71028cd371ec",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "[number] function(number, string)",
    "lineno": 17,
    "origin": {
      "!span": "291[16:9]-294[16:12]",
      "!type": "fn(a: number, b: string) -> [number]",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c22ce1-7aef-11e6-a6d5-71028cd371ec",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "foo",
    "parent": "06c205d2-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "298[16:16]-299[16:17]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c253f0-7aef-11e6-a6d5-71028cd371ec",
    "name": "abc",
    "addr": "/abc/",
    "kind": "f",
    "type": "void function()",
    "lineno": 21,
    "origin": {
      "!span": "391[20:4]-394[20:7]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a210-7aef-11e6-a6d5-71028cd371ec",
    "name": "Abc",
    "addr": "/Abc/",
    "kind": "f",
    "type": "void function()",
    "lineno": 26,
    "origin": {
      "!span": "452[25:4]-455[25:7]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a211-7aef-11e6-a6d5-71028cd371ec",
    "name": "AbcCls",
    "addr": "/AbcCls/",
    "kind": "f",
    "type": "void function()",
    "lineno": 31,
    "origin": {
      "!span": "509[30:4]-515[30:10]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a212-7aef-11e6-a6d5-71028cd371ec",
    "name": "AbcCtor",
    "addr": "/AbcCtor/",
    "kind": "f",
    "type": "void function()",
    "lineno": 36,
    "origin": {
      "!span": "578[35:4]-585[35:11]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a213-7aef-11e6-a6d5-71028cd371ec",
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "string function(number, number)",
    "lineno": 45,
    "origin": {
      "!span": "704[44:4]-707[44:7]",
      "!type": "fn(a: number, b: number) -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a215-7aef-11e6-a6d5-71028cd371ec",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 45,
    "namespace": "bar",
    "parent": "06c2a213-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "722[44:22]-723[44:23]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a214-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 45,
    "namespace": "bar",
    "parent": "06c2a213-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "719[44:19]-720[44:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2a216-7aef-11e6-a6d5-71028cd371ec",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 49,
    "origin": {
      "!span": "811[48:4]-812[48:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c920-7aef-11e6-a6d5-71028cd371ec",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 51,
    "namespace": "o",
    "parent": "06c2a216-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "843[50:2]-848[50:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c921-7aef-11e6-a6d5-71028cd371ec",
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "f",
    "type": "number function()",
    "lineno": 54,
    "namespace": "o",
    "parent": "06c2a216-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "891[53:2]-896[53:7]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c922-7aef-11e6-a6d5-71028cd371ec",
    "name": "prop3",
    "addr": "/prop3/",
    "kind": "f",
    "type": "string function()",
    "lineno": 58,
    "namespace": "o",
    "parent": "06c2a216-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "963[57:2]-968[57:7]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c923-7aef-11e6-a6d5-71028cd371ec",
    "name": "closureArray",
    "addr": "/closureArray/",
    "kind": "v",
    "type": "[string]",
    "lineno": 65,
    "origin": {
      "!span": "1119[64:4]-1131[64:16]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c205d0-7aef-11e6-a6d5-71028cd371ec",
    "name": "x",
    "kind": "v",
    "type": "number",
    "namespace": "c",
    "parent": "06c1dec0-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c205d1-7aef-11e6-a6d5-71028cd371ec",
    "name": "y",
    "kind": "v",
    "type": "[string]",
    "namespace": "c",
    "parent": "06c1dec0-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c92b-7aef-11e6-a6d5-71028cd371ec",
    "name": "two",
    "kind": "v",
    "type": "number",
    "namespace": "myObj",
    "parent": "06c2c929-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c925-7aef-11e6-a6d5-71028cd371ec",
    "name": "<i>",
    "kind": "v",
    "type": "boolean",
    "namespace": "closureMap",
    "parent": "06c2c924-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c92a-7aef-11e6-a6d5-71028cd371ec",
    "name": "one",
    "kind": "v",
    "type": "boolean",
    "namespace": "myObj",
    "parent": "06c2c929-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c924-7aef-11e6-a6d5-71028cd371ec",
    "name": "closureMap",
    "addr": "/closureMap/",
    "kind": "v",
    "lineno": 69,
    "origin": {
      "!span": "1222[68:4]-1232[68:14]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c927-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 73,
    "namespace": "takesOpt",
    "parent": "06c2c926-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "1323[72:18]-1324[72:19]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c926-7aef-11e6-a6d5-71028cd371ec",
    "name": "takesOpt",
    "addr": "/takesOpt/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 73,
    "origin": {
      "!span": "1314[72:9]-1322[72:17]",
      "!type": "fn(a?: number)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c928-7aef-11e6-a6d5-71028cd371ec",
    "name": "myBitset",
    "addr": "/myBitset/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 88,
    "origin": {
      "!span": "1599[87:4]-1607[87:12]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c929-7aef-11e6-a6d5-71028cd371ec",
    "name": "myObj",
    "addr": "/myObj/",
    "kind": "v",
    "lineno": 93,
    "origin": {
      "!span": "1673[92:4]-1678[92:9]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2c92c-7aef-11e6-a6d5-71028cd371ec",
    "name": "NonAscïį",
    "addr": "/NonAscïį/",
    "kind": "f",
    "type": "void function()",
    "lineno": 99,
    "origin": {
      "!span": "1746[98:9]-1754[98:17]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2f030-7aef-11e6-a6d5-71028cd371ec",
    "name": "length",
    "addr": "/length/",
    "kind": "v",
    "type": "string",
    "lineno": 99,
    "namespace": "NonAscïį",
    "parent": "06c2c92c-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "1764[98:27]-1770[98:33]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c2f031-7aef-11e6-a6d5-71028cd371ec",
    "name": "inst",
    "addr": "/inst/",
    "kind": "v",
    "type": "NonAscïį",
    "lineno": 102,
    "origin": {
      "!span": "1810[101:4]-1814[101:8]",
      "!type": "+NonAscïį",
      "!data": {
        "isConstructor": false,
        "type": "NonAscïį.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31747-7aef-11e6-a6d5-71028cd371ec",
    "name": "bogus",
    "addr": "/bogus/",
    "kind": "v",
    "lineno": 107,
    "parent": "06c31746-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "1872[106:4]-1877[106:9]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31740-7aef-11e6-a6d5-71028cd371ec",
    "name": "again",
    "addr": "/again/",
    "kind": "v",
    "type": "number",
    "lineno": 112,
    "origin": {
      "!span": "1950[111:4]-1955[111:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31741-7aef-11e6-a6d5-71028cd371ec",
    "name": "functionBogus",
    "addr": "/functionBogus/",
    "kind": "f",
    "type": "? function(?)",
    "lineno": 120,
    "origin": {
      "!span": "2049[119:9]-2062[119:22]",
      "!type": "fn(a: ?) -> ?",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31742-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 120,
    "namespace": "functionBogus",
    "parent": "06c31741-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "2063[119:23]-2064[119:24]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31743-7aef-11e6-a6d5-71028cd371ec",
    "name": "unionFunction",
    "addr": "/unionFunction/",
    "kind": "f",
    "type": "[?|number] function(string)",
    "lineno": 133,
    "origin": {
      "!span": "2301[132:9]-2314[132:22]",
      "!type": "fn(a: string) -> [?|number]",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31744-7aef-11e6-a6d5-71028cd371ec",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "string",
    "lineno": 133,
    "namespace": "unionFunction",
    "parent": "06c31743-7aef-11e6-a6d5-71028cd371ec",
    "origin": {
      "!span": "2315[132:23]-2316[132:24]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "06c31745-7aef-11e6-a6d5-71028cd371ec",
    "name": "ui",
    "addr": "/ui/",
    "kind": "f",
    "type": "string function()",
    "lineno": 140,
    "origin": {
      "!span": "2426[139:9]-2428[139:11]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  }
]
```
```ctags
a	__DIR__/jsdoc.js	/a/;"	v	lineno:2	type:Date
c	__DIR__/jsdoc.js	/c/;"	v	lineno:8
a	__DIR__/jsdoc.js	/a/;"	v	lineno:17	namespace:foo	type:number
foo	__DIR__/jsdoc.js	/foo/;"	f	lineno:17	type:[number] function(number, string)
b	__DIR__/jsdoc.js	/b/;"	v	lineno:17	namespace:foo	type:string
abc	__DIR__/jsdoc.js	/abc/;"	f	lineno:21	type:void function()
Abc	__DIR__/jsdoc.js	/Abc/;"	f	lineno:26	type:void function()
AbcCls	__DIR__/jsdoc.js	/AbcCls/;"	f	lineno:31	type:void function()
AbcCtor	__DIR__/jsdoc.js	/AbcCtor/;"	f	lineno:36	type:void function()
bar	__DIR__/jsdoc.js	/bar/;"	f	lineno:45	type:string function(number, number)
b	__DIR__/jsdoc.js	/b/;"	v	lineno:45	namespace:bar	type:number
a	__DIR__/jsdoc.js	/a/;"	v	lineno:45	namespace:bar	type:number
o	__DIR__/jsdoc.js	/o/;"	v	lineno:49
prop1	__DIR__/jsdoc.js	/prop1/;"	v	lineno:51	namespace:o	type:string
prop2	__DIR__/jsdoc.js	/prop2/;"	f	lineno:54	namespace:o	type:number function()
prop3	__DIR__/jsdoc.js	/prop3/;"	f	lineno:58	namespace:o	type:string function()
closureArray	__DIR__/jsdoc.js	/closureArray/;"	v	lineno:65	type:[string]
x	__DIR__/jsdoc.js	//;"	v	namespace:c	type:number
y	__DIR__/jsdoc.js	//;"	v	namespace:c	type:[string]
two	__DIR__/jsdoc.js	//;"	v	namespace:myObj	type:number
<i>	__DIR__/jsdoc.js	//;"	v	namespace:closureMap	type:boolean
one	__DIR__/jsdoc.js	//;"	v	namespace:myObj	type:boolean
closureMap	__DIR__/jsdoc.js	/closureMap/;"	v	lineno:69
a	__DIR__/jsdoc.js	/a/;"	v	lineno:73	namespace:takesOpt	type:number
takesOpt	__DIR__/jsdoc.js	/takesOpt/;"	f	lineno:73	type:void function(number)
myBitset	__DIR__/jsdoc.js	/myBitset/;"	v	lineno:88	type:[bool]
myObj	__DIR__/jsdoc.js	/myObj/;"	v	lineno:93
NonAscïį	__DIR__/jsdoc.js	/NonAscïį/;"	f	lineno:99	type:void function()
length	__DIR__/jsdoc.js	/length/;"	v	lineno:99	namespace:NonAscïį	type:string
inst	__DIR__/jsdoc.js	/inst/;"	v	lineno:102	type:NonAscïį
bogus	__DIR__/jsdoc.js	/bogus/;"	v	lineno:107
again	__DIR__/jsdoc.js	/again/;"	v	lineno:112	type:number
functionBogus	__DIR__/jsdoc.js	/functionBogus/;"	f	lineno:120	type:? function(?)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:120	namespace:functionBogus
unionFunction	__DIR__/jsdoc.js	/unionFunction/;"	f	lineno:133	type:[?|number] function(string)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:133	namespace:unionFunction	type:string
ui	__DIR__/jsdoc.js	/ui/;"	f	lineno:140	type:string function()
```
