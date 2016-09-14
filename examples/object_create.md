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
    "id": "0e16da90-7aef-11e6-a00b-d96533535713",
    "name": "base",
    "addr": "/base/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-8[0:8]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186130-7aef-11e6-a00b-d96533535713",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "parent": "0e16da90-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "21[0:21]-24[0:24]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e183a20-7aef-11e6-a00b-d96533535713",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "parent": "0e16da90-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "12[0:12]-15[0:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186132-7aef-11e6-a00b-d96533535713",
    "name": "gen1",
    "addr": "/gen1/",
    "kind": "v",
    "lineno": 2,
    "origin": {
      "!span": "35[1:4]-39[1:8]",
      "!data": {
        "isConstructor": false,
        "type": "base"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186134-7aef-11e6-a00b-d96533535713",
    "name": "gen2",
    "addr": "/gen2/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "67[2:4]-71[2:8]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e188841-7aef-11e6-a00b-d96533535713",
    "name": "prop1",
    "kind": "v",
    "type": "string",
    "namespace": "extend",
    "parent": "0e188840-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186131-7aef-11e6-a00b-d96533535713",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "base",
    "parent": "0e16da90-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "101[4:5]-104[4:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186133-7aef-11e6-a00b-d96533535713",
    "name": "quux",
    "addr": "/quux/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "gen1",
    "parent": "0e186132-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "116[5:5]-120[5:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e186135-7aef-11e6-a00b-d96533535713",
    "name": "kaka",
    "addr": "/kaka/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "gen2",
    "parent": "0e186134-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "132[6:5]-136[6:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e188840-7aef-11e6-a00b-d96533535713",
    "name": "extend",
    "addr": "/extend/",
    "kind": "v",
    "lineno": 23,
    "origin": {
      "!span": "300[22:4]-306[22:10]",
      "!data": {
        "isConstructor": false,
        "type": "base"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e188842-7aef-11e6-a00b-d96533535713",
    "name": "empty",
    "addr": "/empty/",
    "kind": "v",
    "lineno": 29,
    "origin": {
      "!span": "420[28:4]-425[28:9]",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "0e188843-7aef-11e6-a00b-d96533535713",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 30,
    "namespace": "empty",
    "parent": "0e188842-7aef-11e6-a00b-d96533535713",
    "origin": {
      "!span": "455[29:6]-460[29:11]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/object_create.js"
  }
]
```
```ctags
base	__DIR__/object_create.js	/base/;"	v	lineno:1
bar	__DIR__/object_create.js	/bar/;"	v	lineno:1	namespace:base	type:number
foo	__DIR__/object_create.js	/foo/;"	v	lineno:1	namespace:base	type:number
gen1	__DIR__/object_create.js	/gen1/;"	v	lineno:2
gen2	__DIR__/object_create.js	/gen2/;"	v	lineno:3
prop1	__DIR__/object_create.js	//;"	v	namespace:extend	type:string
baz	__DIR__/object_create.js	/baz/;"	v	lineno:5	namespace:base	type:number
quux	__DIR__/object_create.js	/quux/;"	v	lineno:6	namespace:gen1	type:number
kaka	__DIR__/object_create.js	/kaka/;"	v	lineno:7	namespace:gen2	type:number
extend	__DIR__/object_create.js	/extend/;"	v	lineno:23
empty	__DIR__/object_create.js	/empty/;"	v	lineno:29
prop1	__DIR__/object_create.js	/prop1/;"	v	lineno:30	namespace:empty	type:string
```
