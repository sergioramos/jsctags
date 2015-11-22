```js
class Point2 {
  constructor(x, y) { this.x = x; this.y = y }
  plus(pt) {
    this //: Point2
    pt //: Point2
    return new Point2(this.x + pt.x, this.y + pt.y)
  }
  get xx() { return this.x }
  quux() { return 1 }
  static origin() { return new Point2(0, 0) }
}

class Point4 extends Point3 {
  constructor(x, y, z, u) { super(x, y, z); this.u = u }
  argh() { return 2 }
}

var Point3 = class extends Point2 {
  constructor(x, y, z) { super(x, y); this.z = z }
  foobar() { return true }
}

var p1 = new Point2(1, 2)
p1.x //: number
p1 //: Point2
var p2 = Point2.origin()
p2 //: Point2
p1.plus(p2) //: Point2
p1.foobar() //: ?
p1.xx //: number

var p3 = new Point3(0, 0, 5)
p3 //: Point3
p3.quux() //: number
p3.foobar() //: bool

var p4 = new Point4(1, 2, 3, 4)
p4 //: Point4
p4.argh() //: number
p4.foobar() //: bool
p4.quux() //: number
```
```json
[
  {
    "id": "3398a660-90c4-11e5-82db-d70c3af30d0a",
    "name": "Point2",
    "addr": "/Point2/",
    "kind": "f",
    "type": "void function(number, number)",
    "lineno": 1,
    "origin": {
      "!span": "6[0:6]-12[0:12]",
      "!type": "fn(x: number, y: number)",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398cd70-90c4-11e5-82db-d70c3af30d0a",
    "name": "prototype",
    "addr": "/class Point2 \{/",
    "kind": "v",
    "lineno": 1,
    "namespace": "Point2",
    "parent": "3398a660-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "0[0:0]-267[10:1]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48a-90c4-11e5-82db-d70c3af30d0a",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point4",
    "parent": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "42[1:27]-43[1:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398cd73-90c4-11e5-82db-d70c3af30d0a",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point2.prototype.plus.pt",
    "parent": "3398cd72-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "42[1:27]-43[1:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398cd74-90c4-11e5-82db-d70c3af30d0a",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point2.prototype.plus.pt",
    "parent": "3398cd72-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "54[1:39]-55[1:40]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48b-90c4-11e5-82db-d70c3af30d0a",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point4",
    "parent": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "54[1:39]-55[1:40]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f484-90c4-11e5-82db-d70c3af30d0a",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point2",
    "parent": "3398a660-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "54[1:39]-55[1:40]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f483-90c4-11e5-82db-d70c3af30d0a",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Point2",
    "parent": "3398a660-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "42[1:27]-43[1:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398cd71-90c4-11e5-82db-d70c3af30d0a",
    "name": "plus",
    "addr": "/plus/",
    "kind": "f",
    "type": "Point2 function(+Point2)",
    "lineno": 3,
    "namespace": "Point2.prototype",
    "parent": "3398cd70-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "64[2:2]-68[2:6]",
      "!type": "fn(pt: +Point2) -> +Point2",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398cd72-90c4-11e5-82db-d70c3af30d0a",
    "name": "pt",
    "addr": "/pt/",
    "kind": "v",
    "type": "Point2",
    "lineno": 3,
    "namespace": "Point2.prototype.plus",
    "parent": "3398cd71-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "69[2:7]-71[2:9]",
      "!type": "+Point2",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f480-90c4-11e5-82db-d70c3af30d0a",
    "name": "xx",
    "addr": "/xx/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "Point2.prototype",
    "parent": "3398cd70-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "175[7:6]-177[7:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f481-90c4-11e5-82db-d70c3af30d0a",
    "name": "quux",
    "addr": "/quux/",
    "kind": "f",
    "type": "number function()",
    "lineno": 9,
    "namespace": "Point2.prototype",
    "parent": "3398cd70-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "200[8:2]-204[8:6]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f482-90c4-11e5-82db-d70c3af30d0a",
    "name": "origin",
    "addr": "/origin/",
    "kind": "f",
    "type": "Point2 function()",
    "lineno": 10,
    "namespace": "Point2",
    "parent": "3398a660-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "229[9:9]-235[9:15]",
      "!type": "fn() -> +Point2",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "name": "Point4",
    "addr": "/Point4/",
    "kind": "f",
    "type": "void function(number, number, number, number)",
    "lineno": 13,
    "origin": {
      "!span": "275[12:6]-281[12:12]",
      "!type": "fn(x: number, y: number, z: number, u: number)",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f486-90c4-11e5-82db-d70c3af30d0a",
    "name": "prototype",
    "addr": "/class Point4 extends Point3 \{/",
    "kind": "v",
    "lineno": 13,
    "namespace": "Point4",
    "parent": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "269[12:0]-379[15:1]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f488-90c4-11e5-82db-d70c3af30d0a",
    "name": "u",
    "addr": "/u/",
    "kind": "v",
    "type": "number",
    "lineno": 14,
    "namespace": "Point4",
    "parent": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "348[13:49]-349[13:50]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f487-90c4-11e5-82db-d70c3af30d0a",
    "name": "argh",
    "addr": "/argh/",
    "kind": "f",
    "type": "number function()",
    "lineno": 15,
    "namespace": "Point4.prototype",
    "parent": "3398f486-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "358[14:2]-362[14:6]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48c-90c4-11e5-82db-d70c3af30d0a",
    "name": "Point3",
    "addr": "/Point3/",
    "kind": "f",
    "type": "void function(number, number, number)",
    "lineno": 18,
    "origin": {
      "!span": "385[17:4]-391[17:10]",
      "!type": "fn(x: number, y: number, z: number)",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48d-90c4-11e5-82db-d70c3af30d0a",
    "name": "prototype",
    "addr": "/class extends Point2 \{/",
    "kind": "v",
    "lineno": 18,
    "namespace": "Point3",
    "parent": "3398f48c-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "394[17:13]-496[20:1]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b90-90c4-11e5-82db-d70c3af30d0a",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "Point3",
    "parent": "3398f48c-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "431[18:14]-432[18:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b91-90c4-11e5-82db-d70c3af30d0a",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "Point3",
    "parent": "3398f48c-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "434[18:17]-435[18:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48f-90c4-11e5-82db-d70c3af30d0a",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "Point3",
    "parent": "3398f48c-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "437[18:20]-438[18:21]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f489-90c4-11e5-82db-d70c3af30d0a",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "Point4",
    "parent": "3398f485-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "460[18:43]-461[18:44]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "3398f48e-90c4-11e5-82db-d70c3af30d0a",
    "name": "foobar",
    "addr": "/foobar/",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 20,
    "namespace": "Point3.prototype",
    "parent": "3398f48d-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "470[19:2]-476[19:8]",
      "!type": "fn() -> bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b92-90c4-11e5-82db-d70c3af30d0a",
    "name": "p1",
    "addr": "/p1/",
    "kind": "v",
    "type": "Point2",
    "lineno": 23,
    "origin": {
      "!span": "502[22:4]-504[22:6]",
      "!type": "+Point2",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b96-90c4-11e5-82db-d70c3af30d0a",
    "name": "p2",
    "addr": "/p2/",
    "kind": "v",
    "type": "Point2",
    "lineno": 26,
    "parent": "33991b95-90c4-11e5-82db-d70c3af30d0a",
    "origin": {
      "!span": "558[25:4]-560[25:6]",
      "!type": "+Point2",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b93-90c4-11e5-82db-d70c3af30d0a",
    "name": "p3",
    "addr": "/p3/",
    "kind": "v",
    "type": "Point3",
    "lineno": 32,
    "origin": {
      "!span": "656[31:4]-658[31:6]",
      "!type": "+Point3",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  },
  {
    "id": "33991b94-90c4-11e5-82db-d70c3af30d0a",
    "name": "p4",
    "addr": "/p4/",
    "kind": "v",
    "type": "Point4",
    "lineno": 37,
    "origin": {
      "!span": "742[36:4]-744[36:6]",
      "!type": "+Point4",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/class.js"
  }
]
```
```ctags
Point2	__DIR__/class.js	/Point2/;"	f	lineno:1	type:void function(number, number)
prototype	__DIR__/class.js	/class Point2 \{/;"	v	lineno:1	namespace:Point2
x	__DIR__/class.js	/x/;"	v	lineno:2	namespace:Point4	type:number
x	__DIR__/class.js	/x/;"	v	lineno:2	namespace:Point2.prototype.plus.pt	type:number
y	__DIR__/class.js	/y/;"	v	lineno:2	namespace:Point2.prototype.plus.pt	type:number
y	__DIR__/class.js	/y/;"	v	lineno:2	namespace:Point4	type:number
y	__DIR__/class.js	/y/;"	v	lineno:2	namespace:Point2	type:number
x	__DIR__/class.js	/x/;"	v	lineno:2	namespace:Point2	type:number
plus	__DIR__/class.js	/plus/;"	f	lineno:3	namespace:Point2.prototype	type:Point2 function(+Point2)
pt	__DIR__/class.js	/pt/;"	v	lineno:3	namespace:Point2.prototype.plus	type:Point2
xx	__DIR__/class.js	/xx/;"	v	lineno:8	namespace:Point2.prototype	type:number
quux	__DIR__/class.js	/quux/;"	f	lineno:9	namespace:Point2.prototype	type:number function()
origin	__DIR__/class.js	/origin/;"	f	lineno:10	namespace:Point2	type:Point2 function()
Point4	__DIR__/class.js	/Point4/;"	f	lineno:13	type:void function(number, number, number, number)
prototype	__DIR__/class.js	/class Point4 extends Point3 \{/;"	v	lineno:13	namespace:Point4
u	__DIR__/class.js	/u/;"	v	lineno:14	namespace:Point4	type:number
argh	__DIR__/class.js	/argh/;"	f	lineno:15	namespace:Point4.prototype	type:number function()
Point3	__DIR__/class.js	/Point3/;"	f	lineno:18	type:void function(number, number, number)
prototype	__DIR__/class.js	/class extends Point2 \{/;"	v	lineno:18	namespace:Point3
x	__DIR__/class.js	/x/;"	v	lineno:19	namespace:Point3	type:number
y	__DIR__/class.js	/y/;"	v	lineno:19	namespace:Point3	type:number
z	__DIR__/class.js	/z/;"	v	lineno:19	namespace:Point3	type:number
z	__DIR__/class.js	/z/;"	v	lineno:19	namespace:Point4	type:number
foobar	__DIR__/class.js	/foobar/;"	f	lineno:20	namespace:Point3.prototype	type:boolean function()
p1	__DIR__/class.js	/p1/;"	v	lineno:23	type:Point2
p2	__DIR__/class.js	/p2/;"	v	lineno:26	type:Point2
p3	__DIR__/class.js	/p3/;"	v	lineno:32	type:Point3
p4	__DIR__/class.js	/p4/;"	v	lineno:37	type:Point4
```
