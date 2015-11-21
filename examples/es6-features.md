```js
class Foo {
  constructor(a = 10, ...b) {
    this.a = a
    this.b = b
  }

  method() { return this.a + this.b }

  get x() { return `template${this.a}` }
}

let x = 1

const y = {
  func() { return 10 },
  get b() { return false },
  ["foo" + "bar"]: 800
}

let it = function*(n) {
  for (let i = 0; i < n; i++) yield n
}

console.log([for (a of [1, 2, ...it(10)]) a * 2])

let [a, b] = [1, 2];

let x = ([a], {b}) => a + b

let [e1,,e3] = ["5", false, 6]
```
```json
[
  {
    "id": "6417c3b0-9084-11e5-86cb-170de875353c",
    "name": "Foo",
    "addr": "/Foo/",
    "kind": "f",
    "type": "void function(?, ?)",
    "lineno": 1,
    "origin": {
      "!span": "6[0:6]-9[0:9]",
      "!type": "fn(a: ?, ...b: ?)",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac0-9084-11e5-86cb-170de875353c",
    "name": "prototype",
    "addr": "/class Foo \{/",
    "kind": "v",
    "lineno": 1,
    "namespace": "Foo",
    "parent": "6417c3b0-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "0[0:0]-158[9:1]"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac1-9084-11e5-86cb-170de875353c",
    "name": "method",
    "addr": "/method/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "namespace": "Foo.prototype",
    "parent": "6417eac0-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "79[6:2]-85[6:8]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac2-9084-11e5-86cb-170de875353c",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "string",
    "lineno": 9,
    "namespace": "Foo.prototype",
    "parent": "6417eac0-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "122[8:6]-123[8:7]",
      "!type": "string"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac3-9084-11e5-86cb-170de875353c",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "lineno": 14,
    "origin": {
      "!span": "177[13:6]-178[13:7]"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac4-9084-11e5-86cb-170de875353c",
    "name": "func",
    "addr": "/func/",
    "kind": "f",
    "type": "number function()",
    "lineno": 15,
    "namespace": "y",
    "parent": "6417eac3-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "185[14:2]-189[14:6]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "6417eac5-9084-11e5-86cb-170de875353c",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 16,
    "namespace": "y",
    "parent": "6417eac3-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "213[15:6]-214[15:7]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d0-9084-11e5-86cb-170de875353c",
    "name": "it",
    "addr": "/it/",
    "kind": "f",
    "type": "!0 function(?)",
    "lineno": 20,
    "origin": {
      "!span": "265[19:4]-267[19:6]",
      "!type": "fn*(n: ?) -> !0"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d1-9084-11e5-86cb-170de875353c",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "lineno": 20,
    "namespace": "it",
    "parent": "641811d0-9084-11e5-86cb-170de875353c",
    "origin": {
      "!span": "280[19:19]-281[19:20]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d2-9084-11e5-86cb-170de875353c",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "382[25:5]-383[25:6]",
      "!type": "number"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d3-9084-11e5-86cb-170de875353c",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 26,
    "origin": {
      "!span": "385[25:8]-386[25:9]",
      "!type": "number"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d4-9084-11e5-86cb-170de875353c",
    "name": "e1",
    "addr": "/e1/",
    "kind": "v",
    "type": "string",
    "lineno": 30,
    "origin": {
      "!span": "433[29:5]-435[29:7]",
      "!type": "string"
    },
    "tagfile": "__DIR__/es6-features.js"
  },
  {
    "id": "641811d5-9084-11e5-86cb-170de875353c",
    "name": "e3",
    "addr": "/e3/",
    "kind": "v",
    "type": "number",
    "lineno": 30,
    "origin": {
      "!span": "437[29:9]-439[29:11]",
      "!type": "number"
    },
    "tagfile": "__DIR__/es6-features.js"
  }
]
```
```ctags
Foo	__DIR__/es6-features.js	/Foo/;"	f	lineno:1	type:void function(?, ?)
prototype	__DIR__/es6-features.js	/class Foo \{/;"	v	lineno:1	namespace:Foo
method	__DIR__/es6-features.js	/method/;"	f	lineno:7	namespace:Foo.prototype	type:void function()
x	__DIR__/es6-features.js	/x/;"	v	lineno:9	namespace:Foo.prototype	type:string
y	__DIR__/es6-features.js	/y/;"	v	lineno:14
func	__DIR__/es6-features.js	/func/;"	f	lineno:15	namespace:y	type:number function()
b	__DIR__/es6-features.js	/b/;"	v	lineno:16	namespace:y	type:boolean
it	__DIR__/es6-features.js	/it/;"	f	lineno:20	type:!0 function(?)
n	__DIR__/es6-features.js	/n/;"	v	lineno:20	namespace:it
a	__DIR__/es6-features.js	/a/;"	v	lineno:26	type:number
b	__DIR__/es6-features.js	/b/;"	v	lineno:26	type:number
e1	__DIR__/es6-features.js	/e1/;"	v	lineno:30	type:string
e3	__DIR__/es6-features.js	/e3/;"	v	lineno:30	type:number
```
