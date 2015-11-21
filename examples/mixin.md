```js
function Class() {}
Class.prototype = mixin({
  // M3
  m3: function() {}
})

function mixin(obj) {
  obj.m1 = m1
  obj.m2 = m2
  return obj
}

// M1
function m1() {}
// M2
function m2() {}

function OtherClass() {}
OtherClass.prototype = mixin({
  // M4
  m4: function() {}
})

let c = new Class

c.m1 //doc: M1
c.m2 //doc: M2
c.m3 //doc: M3
c.m4 //: ?

let oc = new OtherClass

oc.m1 //doc: M1
oc.m3 //: ?
oc.m4 //doc: M4

mixin(new Date) //: Date
mixin("foo") //: string
```
```json
[
  {
    "id": "c2da68f0-9082-11e5-a5e4-bfb92466497f",
    "name": "Class",
    "addr": "/Class/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-14[0:14]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2da9000-9082-11e5-a5e4-bfb92466497f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 2,
    "namespace": "Class",
    "parent": "c2da68f0-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "26[1:6]-35[1:15]"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2da9001-9082-11e5-a5e4-bfb92466497f",
    "name": "m3",
    "addr": "/m3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 4,
    "namespace": "Class.prototype",
    "parent": "c2da9000-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "56[3:2]-58[3:4]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5351-9082-11e5-a5e4-bfb92466497f",
    "name": "mixin",
    "addr": "/mixin/",
    "kind": "f",
    "type": "!0 function(Class.prototype|string)",
    "lineno": 7,
    "origin": {
      "!span": "87[6:9]-92[6:14]",
      "!type": "fn(obj: Class.prototype|string) -> !0"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db2c40-9082-11e5-a5e4-bfb92466497f",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Class.prototype",
    "parent": "c2da9000-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5352-9082-11e5-a5e4-bfb92466497f",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db7a60-9082-11e5-a5e4-bfb92466497f",
    "name": "m1",
    "addr": "/m1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "OtherClass.prototype",
    "parent": "c2db5355-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "159[13:9]-161[13:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5353-9082-11e5-a5e4-bfb92466497f",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2dbef90-9082-11e5-a5e4-bfb92466497f",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "namespace": "OtherClass.prototype",
    "parent": "c2db5355-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5350-9082-11e5-a5e4-bfb92466497f",
    "name": "m2",
    "addr": "/m2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "namespace": "Class.prototype",
    "parent": "c2da9000-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "182[15:9]-184[15:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5354-9082-11e5-a5e4-bfb92466497f",
    "name": "OtherClass",
    "addr": "/OtherClass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 18,
    "origin": {
      "!span": "200[17:9]-210[17:19]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5355-9082-11e5-a5e4-bfb92466497f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 19,
    "namespace": "OtherClass",
    "parent": "c2db5354-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "227[18:11]-236[18:20]"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2db5356-9082-11e5-a5e4-bfb92466497f",
    "name": "m4",
    "addr": "/m4/",
    "kind": "f",
    "type": "void function()",
    "lineno": 21,
    "namespace": "OtherClass.prototype",
    "parent": "c2db5355-9082-11e5-a5e4-bfb92466497f",
    "origin": {
      "!span": "257[20:2]-259[20:4]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2dbef91-9082-11e5-a5e4-bfb92466497f",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "Class",
    "lineno": 24,
    "origin": {
      "!span": "283[23:4]-284[23:5]",
      "!type": "+Class"
    },
    "tagfile": "__DIR__/mixin.js"
  },
  {
    "id": "c2dbef92-9082-11e5-a5e4-bfb92466497f",
    "name": "oc",
    "addr": "/oc/",
    "kind": "v",
    "type": "OtherClass",
    "lineno": 31,
    "origin": {
      "!span": "359[30:4]-361[30:6]",
      "!type": "+OtherClass"
    },
    "tagfile": "__DIR__/mixin.js"
  }
]
```
```ctags
Class	__DIR__/mixin.js	/Class/;"	f	lineno:1	type:void function()
prototype	__DIR__/mixin.js	/prototype/;"	v	lineno:2	namespace:Class
m3	__DIR__/mixin.js	/m3/;"	f	lineno:4	namespace:Class.prototype	type:void function()
mixin	__DIR__/mixin.js	/mixin/;"	f	lineno:7	type:!0 function(Class.prototype|string)
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	namespace:Class.prototype	type:void function()
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	type:void function()
m1	__DIR__/mixin.js	/m1/;"	f	lineno:14	namespace:OtherClass.prototype	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	namespace:OtherClass.prototype	type:void function()
m2	__DIR__/mixin.js	/m2/;"	f	lineno:16	namespace:Class.prototype	type:void function()
OtherClass	__DIR__/mixin.js	/OtherClass/;"	f	lineno:18	type:void function()
prototype	__DIR__/mixin.js	/prototype/;"	v	lineno:19	namespace:OtherClass
m4	__DIR__/mixin.js	/m4/;"	f	lineno:21	namespace:OtherClass.prototype	type:void function()
c	__DIR__/mixin.js	/c/;"	v	lineno:24	type:Class
oc	__DIR__/mixin.js	/oc/;"	v	lineno:31	type:OtherClass
```
