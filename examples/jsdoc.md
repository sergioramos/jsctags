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
    "id": "2fa56f00-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59610-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59615-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "foo",
    "parent": "2fa59613-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59614-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "namespace": "foo",
    "parent": "2fa59613-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59613-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59616-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa5bd20-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "string function(number, number)",
    "lineno": 30,
    "origin": {
      "!span": "510[29:4]-513[29:7]",
      "!type": "fn(a: number, b: number) -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd21-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 30,
    "namespace": "bar",
    "parent": "2fa5bd20-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "525[29:19]-526[29:20]",
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
    "id": "2fa5bd22-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 30,
    "namespace": "bar",
    "parent": "2fa5bd20-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "528[29:22]-529[29:23]",
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
    "id": "2fa5bd23-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 34,
    "origin": {
      "!span": "617[33:4]-618[33:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd24-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 36,
    "namespace": "o",
    "parent": "2fa5bd23-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "649[35:2]-654[35:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd25-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "f",
    "type": "number function()",
    "lineno": 39,
    "namespace": "o",
    "parent": "2fa5bd23-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "697[38:2]-702[38:7]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd26-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "prop3",
    "addr": "/prop3/",
    "kind": "f",
    "type": "string function()",
    "lineno": 43,
    "namespace": "o",
    "parent": "2fa5bd23-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "769[42:2]-774[42:7]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd27-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "closureArray",
    "addr": "/closureArray/",
    "kind": "v",
    "type": "[string]",
    "lineno": 50,
    "origin": {
      "!span": "925[49:4]-937[49:16]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd28-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "closureMap",
    "addr": "/closureMap/",
    "kind": "v",
    "lineno": 54,
    "origin": {
      "!span": "1028[53:4]-1038[53:14]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd2a-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "takesOpt",
    "addr": "/takesOpt/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 58,
    "origin": {
      "!span": "1120[57:9]-1128[57:17]",
      "!type": "fn(a?: number)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd2b-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 58,
    "namespace": "takesOpt",
    "parent": "2fa5bd2a-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "1129[57:18]-1130[57:19]",
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
    "id": "2fa5bd2c-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "myBitset",
    "addr": "/myBitset/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 73,
    "origin": {
      "!span": "1405[72:4]-1413[72:12]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd2d-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "myObj",
    "addr": "/myObj/",
    "kind": "v",
    "lineno": 78,
    "origin": {
      "!span": "1479[77:4]-1484[77:9]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd30-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "NonAscïį",
    "addr": "/NonAscïį/",
    "kind": "f",
    "type": "void function()",
    "lineno": 84,
    "origin": {
      "!span": "1552[83:9]-1560[83:17]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd31-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "length",
    "addr": "/length/",
    "kind": "v",
    "type": "string",
    "lineno": 84,
    "namespace": "NonAscïį",
    "parent": "2fa5bd30-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "1570[83:27]-1576[83:33]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5e430-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "inst",
    "addr": "/inst/",
    "kind": "v",
    "type": "NonAscïį",
    "lineno": 87,
    "origin": {
      "!span": "1616[86:4]-1620[86:8]",
      "!type": "+NonAscïį",
      "!data": {
        "isConstructor": false,
        "type": "NonAscïį.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd2e-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "one",
    "kind": "v",
    "type": "boolean",
    "namespace": "myObj",
    "parent": "2fa5bd2d-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa5bd2f-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "two",
    "kind": "v",
    "type": "number",
    "namespace": "myObj",
    "parent": "2fa5bd2d-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa5e438-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "bogus",
    "addr": "/bogus/",
    "kind": "v",
    "lineno": 92,
    "parent": "2fa5e437-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "1678[91:4]-1683[91:9]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa59611-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "x",
    "kind": "v",
    "type": "number",
    "namespace": "c",
    "parent": "2fa59610-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa59612-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "y",
    "kind": "v",
    "type": "[string]",
    "namespace": "c",
    "parent": "2fa59610-90cb-11e5-a9bf-1fd6e9bd6744",
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
    "id": "2fa5e431-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "again",
    "addr": "/again/",
    "kind": "v",
    "type": "number",
    "lineno": 97,
    "origin": {
      "!span": "1756[96:4]-1761[96:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5e432-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "functionBogus",
    "addr": "/functionBogus/",
    "kind": "f",
    "type": "? function(?)",
    "lineno": 105,
    "origin": {
      "!span": "1855[104:9]-1868[104:22]",
      "!type": "fn(a: ?) -> ?",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5e433-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "lineno": 105,
    "namespace": "functionBogus",
    "parent": "2fa5e432-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "1869[104:23]-1870[104:24]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5e434-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "unionFunction",
    "addr": "/unionFunction/",
    "kind": "f",
    "type": "[?|number] function(string)",
    "lineno": 118,
    "origin": {
      "!span": "2107[117:9]-2120[117:22]",
      "!type": "fn(a: string) -> [?|number]",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5e435-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "string",
    "lineno": 118,
    "namespace": "unionFunction",
    "parent": "2fa5e434-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!span": "2121[117:23]-2122[117:24]",
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
    "id": "2fa5e436-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "ui",
    "addr": "/ui/",
    "kind": "f",
    "type": "string function()",
    "lineno": 125,
    "origin": {
      "!span": "2232[124:9]-2234[124:11]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "id": "2fa5bd29-90cb-11e5-a9bf-1fd6e9bd6744",
    "name": "<i>",
    "kind": "v",
    "type": "boolean",
    "namespace": "closureMap",
    "parent": "2fa5bd28-90cb-11e5-a9bf-1fd6e9bd6744",
    "origin": {
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/jsdoc.js"
  }
]
```
```ctags
a	__DIR__/jsdoc.js	/a/;"	v	lineno:2	type:Date
c	__DIR__/jsdoc.js	/c/;"	v	lineno:8
b	__DIR__/jsdoc.js	/b/;"	v	lineno:17	namespace:foo	type:string
a	__DIR__/jsdoc.js	/a/;"	v	lineno:17	namespace:foo	type:number
foo	__DIR__/jsdoc.js	/foo/;"	f	lineno:17	type:[number] function(number, string)
abc	__DIR__/jsdoc.js	/abc/;"	f	lineno:21	type:void function()
bar	__DIR__/jsdoc.js	/bar/;"	f	lineno:30	type:string function(number, number)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:30	namespace:bar	type:number
b	__DIR__/jsdoc.js	/b/;"	v	lineno:30	namespace:bar	type:number
o	__DIR__/jsdoc.js	/o/;"	v	lineno:34
prop1	__DIR__/jsdoc.js	/prop1/;"	v	lineno:36	namespace:o	type:string
prop2	__DIR__/jsdoc.js	/prop2/;"	f	lineno:39	namespace:o	type:number function()
prop3	__DIR__/jsdoc.js	/prop3/;"	f	lineno:43	namespace:o	type:string function()
closureArray	__DIR__/jsdoc.js	/closureArray/;"	v	lineno:50	type:[string]
closureMap	__DIR__/jsdoc.js	/closureMap/;"	v	lineno:54
takesOpt	__DIR__/jsdoc.js	/takesOpt/;"	f	lineno:58	type:void function(number)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:58	namespace:takesOpt	type:number
myBitset	__DIR__/jsdoc.js	/myBitset/;"	v	lineno:73	type:[bool]
myObj	__DIR__/jsdoc.js	/myObj/;"	v	lineno:78
NonAscïį	__DIR__/jsdoc.js	/NonAscïį/;"	f	lineno:84	type:void function()
length	__DIR__/jsdoc.js	/length/;"	v	lineno:84	namespace:NonAscïį	type:string
inst	__DIR__/jsdoc.js	/inst/;"	v	lineno:87	type:NonAscïį
one	__DIR__/jsdoc.js	//;"	v	namespace:myObj	type:boolean
two	__DIR__/jsdoc.js	//;"	v	namespace:myObj	type:number
bogus	__DIR__/jsdoc.js	/bogus/;"	v	lineno:92
x	__DIR__/jsdoc.js	//;"	v	namespace:c	type:number
y	__DIR__/jsdoc.js	//;"	v	namespace:c	type:[string]
again	__DIR__/jsdoc.js	/again/;"	v	lineno:97	type:number
functionBogus	__DIR__/jsdoc.js	/functionBogus/;"	f	lineno:105	type:? function(?)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:105	namespace:functionBogus
unionFunction	__DIR__/jsdoc.js	/unionFunction/;"	f	lineno:118	type:[?|number] function(string)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:118	namespace:unionFunction	type:string
ui	__DIR__/jsdoc.js	/ui/;"	f	lineno:125	type:string function()
<i>	__DIR__/jsdoc.js	//;"	v	namespace:closureMap	type:boolean
```
