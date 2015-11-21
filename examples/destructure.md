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
    "id": "ba2233a0-9082-11e5-880e-774936e20f8e",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "5[0:5]-6[0:6]",
      "!type": "number"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c0-9082-11e5-880e-774936e20f8e",
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "boolean",
    "lineno": 4,
    "origin": {
      "!span": "39[3:8]-40[3:9]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba225ab0-9082-11e5-880e-774936e20f8e",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "string",
    "lineno": 4,
    "origin": {
      "!span": "36[3:5]-37[3:6]",
      "!type": "string"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c1-9082-11e5-880e-774936e20f8e",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "void function(Array[bool], ?, foo.!2, number)",
    "lineno": 8,
    "origin": {
      "!span": "100[7:9]-103[7:12]",
      "!type": "fn([e]: [bool], {f}: ?, {g}: foo.!2, ...h: number)"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c2-9082-11e5-880e-774936e20f8e",
    "name": "e",
    "addr": "/e/",
    "kind": "v",
    "type": "boolean",
    "lineno": 8,
    "namespace": "foo",
    "parent": "ba2281c1-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "105[7:14]-106[7:15]",
      "!type": "bool",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c3-9082-11e5-880e-774936e20f8e",
    "name": "f",
    "addr": "/f/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "foo",
    "parent": "ba2281c1-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "110[7:19]-111[7:20]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c4-9082-11e5-880e-774936e20f8e",
    "name": "g",
    "addr": "/g/",
    "kind": "v",
    "type": "string",
    "lineno": 8,
    "namespace": "foo",
    "parent": "ba2281c1-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "117[7:26]-118[7:27]",
      "!type": "string",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c5-9082-11e5-880e-774936e20f8e",
    "name": "h",
    "addr": "/h/",
    "kind": "v",
    "type": "[number]",
    "lineno": 8,
    "namespace": "foo",
    "parent": "ba2281c1-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "124[7:33]-125[7:34]",
      "!type": "[number]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c6-9082-11e5-880e-774936e20f8e",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "type": "number",
    "lineno": 20,
    "origin": {
      "!span": "282[19:4]-283[19:5]",
      "!type": "number"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c7-9082-11e5-880e-774936e20f8e",
    "name": "j",
    "addr": "/j/",
    "kind": "v",
    "type": "boolean",
    "lineno": 20,
    "origin": {
      "!span": "285[19:7]-286[19:8]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba22a8d3-9082-11e5-880e-774936e20f8e",
    "name": "l",
    "addr": "/l/",
    "kind": "v",
    "type": "string",
    "lineno": 21,
    "origin": {
      "!span": "300[20:13]-301[20:14]",
      "!type": "string"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba22a8d4-9082-11e5-880e-774936e20f8e",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "type": "[string]",
    "lineno": 21,
    "origin": {
      "!span": "306[20:19]-307[20:20]",
      "!type": "[string]"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c8-9082-11e5-880e-774936e20f8e",
    "name": "out",
    "addr": "/out/",
    "kind": "v",
    "lineno": 28,
    "origin": {
      "!span": "403[27:4]-406[27:7]"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba2281c9-9082-11e5-880e-774936e20f8e",
    "name": "prop",
    "addr": "/prop/",
    "kind": "v",
    "type": "number",
    "lineno": 29,
    "namespace": "out",
    "parent": "ba2281c8-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "418[28:6]-422[28:10]",
      "!type": "number"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba22a8d0-9082-11e5-880e-774936e20f8e",
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "v",
    "type": "boolean",
    "lineno": 29,
    "namespace": "out",
    "parent": "ba2281c8-9082-11e5-880e-774936e20f8e",
    "origin": {
      "!span": "428[28:16]-433[28:21]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba22a8d1-9082-11e5-880e-774936e20f8e",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "string",
    "lineno": 32,
    "origin": {
      "!span": "491[31:5]-492[31:6]",
      "!type": "string"
    },
    "tagfile": "__DIR__/destructure.js"
  },
  {
    "id": "ba22a8d2-9082-11e5-880e-774936e20f8e",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "origin": {
      "!span": "494[31:8]-495[31:9]",
      "!type": "bool"
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
