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
    "id": "b269b940-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "base",
    "addr": "/base/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-8[0:8]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e051-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "parent": "b269b940-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "21[0:21]-24[0:24]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e050-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "base",
    "parent": "b269b940-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "12[0:12]-15[0:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e053-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "gen1",
    "addr": "/gen1/",
    "kind": "v",
    "lineno": 2,
    "origin": {
      "!span": "35[1:4]-39[1:8]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e055-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "gen2",
    "addr": "/gen2/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "67[2:4]-71[2:8]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e058-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "prop1",
    "kind": "v",
    "type": "string",
    "namespace": "extend",
    "parent": "b269e057-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e052-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "base",
    "parent": "b269b940-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "101[4:5]-104[4:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e054-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "quux",
    "addr": "/quux/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "gen1",
    "parent": "b269e053-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "116[5:5]-120[5:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e056-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "kaka",
    "addr": "/kaka/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "gen2",
    "parent": "b269e055-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "132[6:5]-136[6:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e057-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "extend",
    "addr": "/extend/",
    "kind": "v",
    "lineno": 23,
    "origin": {
      "!span": "300[22:4]-306[22:10]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e059-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "empty",
    "addr": "/empty/",
    "kind": "v",
    "lineno": 29,
    "origin": {
      "!span": "420[28:4]-425[28:9]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/object_create.js"
  },
  {
    "id": "b269e05a-90bd-11e5-8ed9-791cc53e4f2c",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "string",
    "lineno": 30,
    "namespace": "empty",
    "parent": "b269e059-90bd-11e5-8ed9-791cc53e4f2c",
    "origin": {
      "!span": "455[29:6]-460[29:11]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
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
