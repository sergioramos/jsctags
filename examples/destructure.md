```js
let [a] = [1, 2]
a //: number

let {c, d} = {c: "hello", d: true}
c //: string
d //: bool

function foo([e], {f=1}, {g}, ...h) {
  e //: bool
  f //: number
  g //: string
  h //: [number]
}
// Check for argument leakage
e //: ?
g //: ?

foo([false], blah(), {g: "hello"}, 20)

let i, j
;({i, j, k: [l, ...m]} = {i: 1, j: false, k: ["a", "b"]})

i //: number
j //: bool
l //: string
m //: [string]

var out = {}
;[out.prop, out.prop2] = [55, true]
out //:: {prop2: bool, prop: number}

var [n, o] = ["a", false]
n //: string
o //: bool
```
```json
[
  {
    "id": "35f2c300-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "5[0:5]-6[0:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f2ea11-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "boolean",
    "lineno": 4,
    "origin": {
      "!span": "39[3:8]-40[3:9]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f2ea10-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "string",
    "lineno": 4,
    "origin": {
      "!span": "36[3:5]-37[3:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f2ea12-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "void function(Array[bool], ?, foo.!2, number)",
    "lineno": 8,
    "origin": {
      "!span": "100[7:9]-103[7:12]",
      "!type": "fn([e]: [bool], {f}: ?, {g}: foo.!2, ...h: number)",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31120-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "e",
    "addr": "/e/",
    "kind": "v",
    "type": "boolean",
    "lineno": 8,
    "namespace": "foo",
    "parent": "35f2ea12-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "105[7:14]-106[7:15]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31121-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "f",
    "addr": "/f/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "foo",
    "parent": "35f2ea12-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "110[7:19]-111[7:20]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31122-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "g",
    "addr": "/g/",
    "kind": "v",
    "type": "string",
    "lineno": 8,
    "namespace": "foo",
    "parent": "35f2ea12-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "117[7:26]-118[7:27]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31123-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "h",
    "addr": "/h/",
    "kind": "v",
    "type": "[number]",
    "lineno": 8,
    "namespace": "foo",
    "parent": "35f2ea12-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "124[7:33]-125[7:34]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31124-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "type": "number",
    "lineno": 20,
    "origin": {
      "!span": "282[19:4]-283[19:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31125-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "j",
    "addr": "/j/",
    "kind": "v",
    "type": "boolean",
    "lineno": 20,
    "origin": {
      "!span": "285[19:7]-286[19:8]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f3112b-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "l",
    "addr": "/l/",
    "kind": "v",
    "type": "string",
    "lineno": 21,
    "origin": {
      "!span": "300[20:13]-301[20:14]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f3112c-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "type": "[string]",
    "lineno": 21,
    "origin": {
      "!span": "306[20:19]-307[20:20]",
      "!type": "[string]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31126-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "out",
    "addr": "/out/",
    "kind": "v",
    "lineno": 28,
    "origin": {
      "!span": "403[27:4]-406[27:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31127-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "prop",
    "addr": "/prop/",
    "kind": "v",
    "type": "number",
    "lineno": 29,
    "namespace": "out",
    "parent": "35f31126-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "418[28:6]-422[28:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31128-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "v",
    "type": "boolean",
    "lineno": 29,
    "namespace": "out",
    "parent": "35f31126-90c4-11e5-9c4d-c3a143ce1f9c",
    "origin": {
      "!span": "428[28:16]-433[28:21]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f31129-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "string",
    "lineno": 32,
    "origin": {
      "!span": "491[31:5]-492[31:6]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "35f3112a-90c4-11e5-9c4d-c3a143ce1f9c",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "origin": {
      "!span": "494[31:8]-495[31:9]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  }
]
```
```ctags
a	__DIR__/destructure.js	/a/;"	v	lineno:1	type:number
d	__DIR__/destructure.js	/d/;"	v	lineno:4	type:boolean
c	__DIR__/destructure.js	/c/;"	v	lineno:4	type:string
foo	__DIR__/destructure.js	/foo/;"	f	lineno:8	type:void function(Array[bool], ?, foo.!2, number)
e	__DIR__/destructure.js	/e/;"	v	lineno:8	namespace:foo	type:boolean
f	__DIR__/destructure.js	/f/;"	v	lineno:8	namespace:foo	type:number
g	__DIR__/destructure.js	/g/;"	v	lineno:8	namespace:foo	type:string
h	__DIR__/destructure.js	/h/;"	v	lineno:8	namespace:foo	type:[number]
i	__DIR__/destructure.js	/i/;"	v	lineno:20	type:number
j	__DIR__/destructure.js	/j/;"	v	lineno:20	type:boolean
l	__DIR__/destructure.js	/l/;"	v	lineno:21	type:string
m	__DIR__/destructure.js	/m/;"	v	lineno:21	type:[string]
out	__DIR__/destructure.js	/out/;"	v	lineno:28
prop	__DIR__/destructure.js	/prop/;"	v	lineno:29	namespace:out	type:number
prop2	__DIR__/destructure.js	/prop2/;"	v	lineno:29	namespace:out	type:boolean
n	__DIR__/destructure.js	/n/;"	v	lineno:32	type:string
o	__DIR__/destructure.js	/o/;"	v	lineno:32	type:boolean
```
