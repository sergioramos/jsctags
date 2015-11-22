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
    "id": "34915a10-90cb-11e5-9345-79cf0bf52fd1",
    "name": "Foo",
    "addr": "/Foo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn(x: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a832-90cb-11e5-9345-79cf0bf52fd1",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "namespace": "Foo",
    "parent": "34915a10-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "13[0:13]-14[0:14]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype",
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a835-90cb-11e5-9345-79cf0bf52fd1",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 2,
    "namespace": "z",
    "parent": "3491a834-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "25[1:7]-26[1:8]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a833-90cb-11e5-9345-79cf0bf52fd1",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "[number]",
    "lineno": 3,
    "namespace": "Foo",
    "parent": "34915a10-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "39[2:7]-40[2:8]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "34918120-90cb-11e5-9345-79cf0bf52fd1",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "Foo",
    "parent": "34915a10-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "76[6:4]-85[6:13]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a830-90cb-11e5-9345-79cf0bf52fd1",
    "name": "makeString",
    "addr": "/makeString/",
    "kind": "f",
    "type": "string function()",
    "lineno": 8,
    "namespace": "Foo.prototype",
    "parent": "34918120-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "92[7:2]-102[7:12]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a831-90cb-11e5-9345-79cf0bf52fd1",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "Foo.prototype",
    "parent": "34918120-90cb-11e5-9345-79cf0bf52fd1",
    "origin": {
      "!span": "135[8:2]-138[8:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  },
  {
    "id": "3491a834-90cb-11e5-9345-79cf0bf52fd1",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "Foo",
    "lineno": 12,
    "origin": {
      "!span": "151[11:4]-152[11:5]",
      "!type": "+Foo",
      "!data": {
        "isConstructor": false,
        "type": "Foo.prototype"
      }
    },
    "tagfile": "__DIR__/proto.js"
  }
]
```
```ctags
Foo	__DIR__/proto.js	/Foo/;"	f	lineno:1	type:void function(bool)
x	__DIR__/proto.js	/x/;"	v	lineno:1	namespace:Foo	type:boolean
x	__DIR__/proto.js	/x/;"	v	lineno:2	namespace:z	type:boolean
y	__DIR__/proto.js	/y/;"	v	lineno:3	namespace:Foo	type:[number]
prototype	__DIR__/proto.js	/prototype/;"	v	lineno:7	namespace:Foo
makeString	__DIR__/proto.js	/makeString/;"	f	lineno:8	namespace:Foo.prototype	type:string function()
bar	__DIR__/proto.js	/bar/;"	v	lineno:9	namespace:Foo.prototype	type:number
z	__DIR__/proto.js	/z/;"	v	lineno:12	type:Foo
```
