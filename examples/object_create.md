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
    "namespace": "base"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base"
  },
  {
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "base"
  },
  {
    "name": "quux",
    "addr": "/quux/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "gen1"
  },
  {
    "name": "kaka",
    "addr": "/kaka/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "gen2"
  },
  {
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 30,
    "namespace": "empty"
  }
]
```
```ctags
foo		/foo/;"	v	lineno:1	namespace:base	type:number

bar		/bar/;"	v	lineno:1	namespace:base	type:number

baz		/baz/;"	v	lineno:5	namespace:base	type:number

quux		/quux/;"	v	lineno:6	namespace:gen1	type:number

kaka		/kaka/;"	v	lineno:7	namespace:gen2	type:number

prop1		/prop1/;"	v	lineno:30	namespace:empty	type:string
```
