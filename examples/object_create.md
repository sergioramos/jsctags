```js
var base = {foo: 10, bar: 20};
var gen1 = Object.create(base);
var gen2 = Object.create(gen1);

base.baz = 30;
gen1.quux = 50;
gen2.kaka = 10;

gen1.foo; //: number

gen2.foo; //: number

gen1.baz; //: number

gen2.baz; //: number

gen1.quux; //: number

gen2.quux; //: number

gen1.kaka; //: ?

var extend = Object.create(base, {prop1: {value: "hi"}, prop2: {}});

extend.prop1; //: string

extend.bar; //: number

var empty = Object.create(null);
empty.prop1 = "hi";

empty.hasOwnProperty; //: ?
empty.prop1; //: string
```
```json
[
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  },
  {
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "base",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  },
  {
    "name": "quux",
    "addr": "/quux/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "gen1",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  },
  {
    "name": "kaka",
    "addr": "/kaka/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "gen2",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  },
  {
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 30,
    "namespace": "empty",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/object_create.js"
  }
]
```
```ctags
bar	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/bar/;"	v	lineno:1	namespace:base	type:number
baz	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/baz/;"	v	lineno:5	namespace:base	type:number
foo	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/foo/;"	v	lineno:1	namespace:base	type:number
kaka	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/kaka/;"	v	lineno:7	namespace:gen2	type:number
prop1	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/prop1/;"	v	lineno:30	namespace:empty	type:string
quux	/usr/local/lib/node_modules/jsctags/test/cases/object_create.js	/quux/;"	v	lineno:6	namespace:gen1	type:number
```
