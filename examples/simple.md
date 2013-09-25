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
    "lineno": 1
  },
  {
    "name": "init",
    "addr": "/function init\(v\) \{/",
    "kind": "f",
    "type": "void function(x)",
    "lineno": 8
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "x"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 10,
    "namespace": "x"
  }
]
```
```ctags
foo		/foo/;'	v	lineno:1	type:number

init		/function init\(v\) \{/;'	f	lineno:8	type:void function(x)

foo		/foo/;'	v	lineno:9	namespace:x	type:number

bar		/bar/;'	v	lineno:10	namespace:x	type:number
```
