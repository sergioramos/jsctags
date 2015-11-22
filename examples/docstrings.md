```js
Date; //doc: Creates JavaScript Date instances which let you work with dates and times.
new Date; //doc: Creates JavaScript Date instances which let you work with dates and times.

var myalias = Date;

myalias; //doc: Creates JavaScript Date instances which let you work with dates and times.

// This is variable foo.
var foo = 10;

foo; //doc: This is variable foo.

// This function returns a monkey.
function makeMonkey() { return "monkey"; }

makeMonkey; //doc: This function returns a monkey.

var monkeyAlias = makeMonkey;

monkeyAlias; //doc: This function returns a monkey.

// This is an irrelevant comment.


// This describes abc.
var abc = 20;

abc; //doc: This describes abc.

// Quux is a thing.
// Two lines.
function Quux() {}

Quux; //doc+: Quux is a thing.
Two lines.

/*
 *  Extra bogus 
 *  whitespace is also stripped.
 */
var baz = "hi";

baz; //doc: Extra bogus whitespace is also stripped.

/* starry format
 * with first line text
 */
var oy = 1;

oy; //doc: starry format with first line text

// Block of text
// With some
//  * indented
//  * pieces
//
// And a blank line
var arr = 6;

arr; //doc+: Block of text
With some
 * indented
 * pieces

And a blank line

// Split off sentences after the first 100 characters. If our pattern
// happens to match. Here we are at about 90 so this one goes over and
// would be removed.
var aha = "";

aha; //doc: Split off sentences after the first 100 characters. If our pattern happens to match.

// Also ignore JSDoc-y stuff
// @type {zoink}
var xyzzy = false;

xyzzy; //doc: Also ignore JSDoc-y stuff

var o = {
  // Get the name.
  getName: function() { return this.name; },
  // The name
  name: "Harold",
  // A computed property
  [1 + 1]: "OK",
  // A string property
  'bar': 4
};

// The string "foo".
o.foo = "foo";

o.getName; //doc: Get the name.
o.name; //doc: The name
o.foo; //doc: The string "foo".
o.bar //doc: A string property

class C {
  // The method
  method() { return 10 },
  // The something
  get something() { return 20 }
}

var c = new C

c.method //doc: The method
c.something //doc: The something
```
```json
[
  {
    "id": "284d3ee3-90cb-11e5-894c-e146c9914924",
    "name": "myalias",
    "addr": "/myalias/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 4,
    "parent": "284d3ee1-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "185[3:4]-192[3:11]",
      "!type": "fn(ms: number)",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cc9b0-90cb-11e5-894c-e146c9914924",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "origin": {
      "!span": "323[8:4]-326[8:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d3ee4-90cb-11e5-894c-e146c9914924",
    "name": "monkeyAlias",
    "addr": "/makeMonkey/",
    "kind": "f",
    "type": "string function()",
    "lineno": 14,
    "origin": {
      "!span": "413[13:9]-423[13:19]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c0-90cb-11e5-894c-e146c9914924",
    "name": "makeMonkey",
    "addr": "/makeMonkey/",
    "kind": "f",
    "type": "string function()",
    "lineno": 14,
    "origin": {
      "!span": "413[13:9]-423[13:19]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d3ee2-90cb-11e5-894c-e146c9914924",
    "name": "monkeyAlias",
    "addr": "/monkeyAlias/",
    "kind": "f",
    "type": "string function()",
    "lineno": 18,
    "parent": "284d3ee1-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "504[17:4]-515[17:15]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c1-90cb-11e5-894c-e146c9914924",
    "name": "abc",
    "addr": "/abc/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "647[25:4]-650[25:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c2-90cb-11e5-894c-e146c9914924",
    "name": "Quux",
    "addr": "/Quux/",
    "kind": "f",
    "type": "void function()",
    "lineno": 32,
    "origin": {
      "!span": "734[31:9]-738[31:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c3-90cb-11e5-894c-e146c9914924",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "origin": {
      "!span": "850[39:4]-853[39:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c4-90cb-11e5-894c-e146c9914924",
    "name": "oy",
    "addr": "/oy/",
    "kind": "v",
    "type": "number",
    "lineno": 47,
    "origin": {
      "!span": "966[46:4]-968[46:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284cf0c5-90cb-11e5-894c-e146c9914924",
    "name": "arr",
    "addr": "/arr/",
    "kind": "v",
    "type": "number",
    "lineno": 57,
    "origin": {
      "!span": "1107[56:4]-1110[56:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d0-90cb-11e5-894c-e146c9914924",
    "name": "aha",
    "addr": "/aha/",
    "kind": "v",
    "type": "string",
    "lineno": 64,
    "origin": {
      "!span": "1366[63:4]-1369[63:7]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d1-90cb-11e5-894c-e146c9914924",
    "name": "xyzzy",
    "addr": "/xyzzy/",
    "kind": "v",
    "type": "boolean",
    "lineno": 70,
    "origin": {
      "!span": "1525[69:4]-1530[69:9]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d2-90cb-11e5-894c-e146c9914924",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 74,
    "origin": {
      "!span": "1586[73:4]-1587[73:5]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d3-90cb-11e5-894c-e146c9914924",
    "name": "getName",
    "addr": "/getName/",
    "kind": "f",
    "type": "!this.name function()",
    "lineno": 76,
    "namespace": "o",
    "parent": "284d17d2-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1613[75:2]-1620[75:9]",
      "!type": "fn() -> !this.name",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d4-90cb-11e5-894c-e146c9914924",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 78,
    "namespace": "o",
    "parent": "284d17d2-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1672[77:2]-1676[77:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d5-90cb-11e5-894c-e146c9914924",
    "name": "bar",
    "addr": "/'bar'/",
    "kind": "v",
    "type": "number",
    "lineno": 82,
    "namespace": "o",
    "parent": "284d17d2-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1755[81:2]-1760[81:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d6-90cb-11e5-894c-e146c9914924",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 86,
    "namespace": "o",
    "parent": "284d17d2-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1791[85:2]-1794[85:5]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d8-90cb-11e5-894c-e146c9914924",
    "name": "prototype",
    "addr": "/class C \{/",
    "kind": "v",
    "lineno": 93,
    "namespace": "C",
    "parent": "284d17d7-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1925[92:0]-2029[97:1]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d7-90cb-11e5-894c-e146c9914924",
    "name": "C",
    "addr": "/C/",
    "kind": "f",
    "type": "void function()",
    "lineno": 93,
    "origin": {
      "!span": "1931[92:6]-1932[92:7]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17d9-90cb-11e5-894c-e146c9914924",
    "name": "method",
    "addr": "/method/",
    "kind": "f",
    "type": "number function()",
    "lineno": 95,
    "namespace": "C.prototype",
    "parent": "284d17d8-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "1953[94:2]-1959[94:8]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d17da-90cb-11e5-894c-e146c9914924",
    "name": "something",
    "addr": "/something/",
    "kind": "v",
    "type": "number",
    "lineno": 97,
    "namespace": "C.prototype",
    "parent": "284d17d8-90cb-11e5-894c-e146c9914924",
    "origin": {
      "!span": "2002[96:6]-2011[96:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "id": "284d3ee0-90cb-11e5-894c-e146c9914924",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "C",
    "lineno": 100,
    "origin": {
      "!span": "2035[99:4]-2036[99:5]",
      "!type": "+C",
      "!data": {
        "isConstructor": false,
        "type": "C.prototype"
      }
    },
    "tagfile": "__DIR__/docstrings.js"
  }
]
```
```ctags
myalias	__DIR__/docstrings.js	/myalias/;"	f	lineno:4	type:void function(number)
foo	__DIR__/docstrings.js	/foo/;"	v	lineno:9	type:number
monkeyAlias	__DIR__/docstrings.js	/makeMonkey/;"	f	lineno:14	type:string function()
makeMonkey	__DIR__/docstrings.js	/makeMonkey/;"	f	lineno:14	type:string function()
monkeyAlias	__DIR__/docstrings.js	/monkeyAlias/;"	f	lineno:18	type:string function()
abc	__DIR__/docstrings.js	/abc/;"	v	lineno:26	type:number
Quux	__DIR__/docstrings.js	/Quux/;"	f	lineno:32	type:void function()
baz	__DIR__/docstrings.js	/baz/;"	v	lineno:40	type:string
oy	__DIR__/docstrings.js	/oy/;"	v	lineno:47	type:number
arr	__DIR__/docstrings.js	/arr/;"	v	lineno:57	type:number
aha	__DIR__/docstrings.js	/aha/;"	v	lineno:64	type:string
xyzzy	__DIR__/docstrings.js	/xyzzy/;"	v	lineno:70	type:boolean
o	__DIR__/docstrings.js	/o/;"	v	lineno:74
getName	__DIR__/docstrings.js	/getName/;"	f	lineno:76	namespace:o	type:!this.name function()
name	__DIR__/docstrings.js	/name/;"	v	lineno:78	namespace:o	type:string
bar	__DIR__/docstrings.js	/'bar'/;"	v	lineno:82	namespace:o	type:number
foo	__DIR__/docstrings.js	/foo/;"	v	lineno:86	namespace:o	type:string
prototype	__DIR__/docstrings.js	/class C \{/;"	v	lineno:93	namespace:C
C	__DIR__/docstrings.js	/C/;"	f	lineno:93	type:void function()
method	__DIR__/docstrings.js	/method/;"	f	lineno:95	namespace:C.prototype	type:number function()
something	__DIR__/docstrings.js	/something/;"	v	lineno:97	namespace:C.prototype	type:number
c	__DIR__/docstrings.js	/c/;"	v	lineno:100	type:C
```
