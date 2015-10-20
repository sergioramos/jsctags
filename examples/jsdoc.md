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
```
```json
[
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "Date",
    "lineno": 2,
    "origin": {
      "!span": "24[1:4]-25[1:5]",
      "!type": "+Date"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "133[7:4]-134[7:5]"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "[number] function(number, string)",
    "lineno": 17,
    "origin": {
      "!span": "291[16:9]-294[16:12]",
      "!type": "fn(a: number, b: string) -> [number]"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "namespace": "foo",
    "origin": {
      "!span": "295[16:13]-296[16:14]",
      "!type": "number"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "string",
    "lineno": 17,
    "namespace": "foo",
    "origin": {
      "!span": "298[16:16]-299[16:17]",
      "!type": "string"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "string function(number, number)",
    "lineno": 25,
    "origin": {
      "!span": "448[24:4]-451[24:7]",
      "!type": "fn(a: number, b: number) -> string"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 25,
    "namespace": "bar",
    "origin": {
      "!span": "463[24:19]-464[24:20]",
      "!type": "number"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 25,
    "namespace": "bar",
    "origin": {
      "!span": "466[24:22]-467[24:23]",
      "!type": "number"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 29,
    "origin": {
      "!span": "555[28:4]-556[28:5]"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 31,
    "namespace": "o",
    "origin": {
      "!span": "587[30:2]-592[30:7]",
      "!type": "string"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "f",
    "type": "number function()",
    "lineno": 34,
    "namespace": "o",
    "origin": {
      "!span": "635[33:2]-640[33:7]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/jsdoc.js"
  },
  {
    "name": "prop3",
    "addr": "/prop3/",
    "kind": "f",
    "type": "string function()",
    "lineno": 38,
    "namespace": "o",
    "origin": {
      "!span": "707[37:2]-712[37:7]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/jsdoc.js"
  }
]
```
```ctags
a	__DIR__/jsdoc.js	/a/;"	v	lineno:2	type:Date
c	__DIR__/jsdoc.js	/c/;"	v	lineno:8
foo	__DIR__/jsdoc.js	/foo/;"	f	lineno:17	type:[number] function(number, string)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:17	namespace:foo	type:number
b	__DIR__/jsdoc.js	/b/;"	v	lineno:17	namespace:foo	type:string
bar	__DIR__/jsdoc.js	/bar/;"	f	lineno:25	type:string function(number, number)
a	__DIR__/jsdoc.js	/a/;"	v	lineno:25	namespace:bar	type:number
b	__DIR__/jsdoc.js	/b/;"	v	lineno:25	namespace:bar	type:number
o	__DIR__/jsdoc.js	/o/;"	v	lineno:29
prop1	__DIR__/jsdoc.js	/prop1/;"	v	lineno:31	namespace:o	type:string
prop2	__DIR__/jsdoc.js	/prop2/;"	f	lineno:34	namespace:o	type:number function()
prop3	__DIR__/jsdoc.js	/prop3/;"	f	lineno:38	namespace:o	type:string function()
```
