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
    "id": "5e9d9900-909d-11e5-941c-27d21912ee35",
    "name": "foo",
    "addr": "foo",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "id": "5e9d9901-909d-11e5-941c-27d21912ee35",
    "name": "x",
    "addr": "x",
    "kind": "v",
    "lineno": 6,
    "origin": {
      "!span": "64[5:4]-65[5:5]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "id": "5e9dc012-909d-11e5-941c-27d21912ee35",
    "name": "init",
    "addr": "init",
    "kind": "f",
    "type": "void function(x)",
    "lineno": 8,
    "origin": {
      "!span": "82[7:9]-86[7:13]",
      "!type": "fn(v: x)",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "id": "5e9dc010-909d-11e5-941c-27d21912ee35",
    "name": "foo",
    "addr": "foo",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "x",
    "parent": "5e9d9901-909d-11e5-941c-27d21912ee35",
    "origin": {
      "!span": "96[8:4]-99[8:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "id": "5e9dc011-909d-11e5-941c-27d21912ee35",
    "name": "bar",
    "addr": "bar",
    "kind": "v",
    "type": "number",
    "lineno": 10,
    "namespace": "x",
    "parent": "5e9d9901-909d-11e5-941c-27d21912ee35",
    "origin": {
      "!span": "110[9:4]-113[9:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple.js"
  }
]
```
```ctags
foo	__DIR__/simple.js	foo;"	v	lineno:1	type:number
x	__DIR__/simple.js	x;"	v	lineno:6
init	__DIR__/simple.js	init;"	f	lineno:8	type:void function(x)
foo	__DIR__/simple.js	foo;"	v	lineno:9	namespace:x	type:number
bar	__DIR__/simple.js	bar;"	v	lineno:10	namespace:x	type:number
```
