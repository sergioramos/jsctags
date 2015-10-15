```js
var foo = (function() {
  return 42;
})();
foo; //: number

var x = {};

function init(v) {
  v.foo = 10;
  v.bar = 1 + 1;
}
init; //:: fn(v: {bar: number, foo: number})

init(x);
x; //:: {bar: number, foo: number}
```
```json
[
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple.js"
  },
  {
    "name": "init",
    "addr": "/init/",
    "kind": "f",
    "type": "void function(x)",
    "lineno": 8,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "x",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple.js"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 10,
    "namespace": "x",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/simple.js"
  }
]
```
```ctags
bar	/usr/local/lib/node_modules/jsctags/test/cases/simple.js	/bar/;"	v	lineno:10	namespace:x	type:number
foo	/usr/local/lib/node_modules/jsctags/test/cases/simple.js	/foo/;"	v	lineno:1	type:number
foo	/usr/local/lib/node_modules/jsctags/test/cases/simple.js	/foo/;"	v	lineno:9	namespace:x	type:number
init	/usr/local/lib/node_modules/jsctags/test/cases/simple.js	/init/;"	f	lineno:8	type:void function(x)
```
