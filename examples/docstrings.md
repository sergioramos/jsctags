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

// Quux is a thing. And here are a bunch more sentences that would
// make the docstring too long, and are thus wisely stripped by Tern's
// brain-dead heuristics. Ayay.
function Quux() {}

Quux; //doc: Quux is a thing.

/*  Extra bogus 
 *  	whitespace is also stripped.
 */
var baz = "hi";

baz; //doc: Extra bogus whitespace is also stripped.

var o = {
  // Get the name.
  getName: function() { return this.name; },
  // The name
  name: "Harold"
};

// The string "foo".
o.foo = "foo";

o.getName; //doc: Get the name.
o.name; //doc: The name
o.foo; //doc: The string "foo".
```
```json
[
  {
    "name": "myalias",
    "addr": "/myalias/",
    "kind": "f",
    "type": "void function(number)",
    "lineno": 4,
    "origin": {
      "!span": "185[3:4]-192[3:11]",
      "!type": "fn(ms: number)"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "origin": {
      "!span": "323[8:4]-326[8:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "monkeyAlias",
    "addr": "/makeMonkey/",
    "kind": "f",
    "type": "string function()",
    "lineno": 14,
    "origin": {
      "!span": "413[13:9]-423[13:19]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "makeMonkey",
    "addr": "/makeMonkey/",
    "kind": "f",
    "type": "string function()",
    "lineno": 14,
    "origin": {
      "!span": "413[13:9]-423[13:19]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "monkeyAlias",
    "addr": "/monkeyAlias/",
    "kind": "f",
    "type": "string function()",
    "lineno": 18,
    "origin": {
      "!span": "504[17:4]-515[17:15]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "abc",
    "addr": "/abc/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "647[25:4]-650[25:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "Quux",
    "addr": "/Quux/",
    "kind": "f",
    "type": "void function()",
    "lineno": 33,
    "origin": {
      "!span": "870[32:9]-874[32:13]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "origin": {
      "!span": "971[39:4]-974[39:7]",
      "!type": "string"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 44,
    "origin": {
      "!span": "1042[43:4]-1043[43:5]"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "getName",
    "addr": "/getName/",
    "kind": "f",
    "type": "!this.name function()",
    "lineno": 46,
    "namespace": "o",
    "origin": {
      "!span": "1069[45:2]-1076[45:9]",
      "!type": "fn() -> !this.name"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 48,
    "namespace": "o",
    "origin": {
      "!span": "1128[47:2]-1132[47:6]",
      "!type": "string"
    },
    "tagfile": "__DIR__/docstrings.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "string",
    "lineno": 52,
    "namespace": "o",
    "origin": {
      "!span": "1170[51:2]-1173[51:5]",
      "!type": "string"
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
Quux	__DIR__/docstrings.js	/Quux/;"	f	lineno:33	type:void function()
baz	__DIR__/docstrings.js	/baz/;"	v	lineno:40	type:string
o	__DIR__/docstrings.js	/o/;"	v	lineno:44
getName	__DIR__/docstrings.js	/getName/;"	f	lineno:46	namespace:o	type:!this.name function()
name	__DIR__/docstrings.js	/name/;"	v	lineno:48	namespace:o	type:string
foo	__DIR__/docstrings.js	/foo/;"	v	lineno:52	namespace:o	type:string
```
