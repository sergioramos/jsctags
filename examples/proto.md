```js
function Foo(x) {
  this.x = x;
  this.y = [1];
}
Foo; //: fn(x: bool)

Foo.prototype = {
  makeString: function() { return "hi"; },
  bar: 13
};

var z = new Foo(true); //:: {x: bool, y: [number]}

z.toString; //: fn() -> string

z.bar; //: number
```
```json
[
  {
    "name": "Foo",
    "addr": "/Foo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn(x: bool)"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "namespace": "Foo",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "[number]",
    "lineno": 3,
    "namespace": "Foo",
    "origin": {
      "!span": "39[2:7]-40[2:8]",
      "!type": "[number]"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "Foo",
    "origin": {
      "!span": "76[6:4]-85[6:13]"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "makeString",
    "addr": "/makeString/",
    "kind": "f",
    "type": "string function()",
    "lineno": 8,
    "namespace": "Foo.prototype",
    "origin": {
      "!span": "92[7:2]-102[7:12]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "Foo.prototype",
    "origin": {
      "!span": "135[8:2]-138[8:5]",
      "!type": "number"
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "Foo",
    "lineno": 12,
    "origin": {
      "!span": "151[11:4]-152[11:5]",
      "!type": "+Foo"
    },
    "tagfile": "__DIR__/proto.js"
  }
]
```
```ctags
Foo	__DIR__/proto.js	/Foo/;"	f	lineno:1	type:void function(bool)
x	__DIR__/proto.js	/x/;"	v	lineno:1	namespace:Foo	type:boolean
y	__DIR__/proto.js	/y/;"	v	lineno:3	namespace:Foo	type:[number]
prototype	__DIR__/proto.js	/prototype/;"	v	lineno:7	namespace:Foo
makeString	__DIR__/proto.js	/makeString/;"	f	lineno:8	namespace:Foo.prototype	type:string function()
bar	__DIR__/proto.js	/bar/;"	v	lineno:9	namespace:Foo.prototype	type:number
z	__DIR__/proto.js	/z/;"	v	lineno:12	type:Foo
```
