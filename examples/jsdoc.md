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
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 17
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "void function(?, number)",
    "lineno": 25
  },
  {
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 34,
    "namespace": "o"
  },
  {
    "name": "prop3",
    "addr": "/prop3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 38,
    "namespace": "o"
  }
]
```
```ctags
foo		/foo/;"	f	lineno:17	type:void function(?, ?)

bar		/bar/;"	f	lineno:25	type:void function(?, number)

prop2		/prop2/;"	f	lineno:34	namespace:o	type:void function()

prop3		/prop3/;"	f	lineno:38	namespace:o	type:void function()
```
