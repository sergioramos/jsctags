```js
var foo = (function() {
  return 42;
})();
foo; //: number

var x = {
  baz: {
    haz: 2,
    laz: 4
  }
};

function init(v) {
  v.foo = 10;
  v.bar = 1 + 1;
  var a = function() {
    var t = function() {
      var g = function() {
        var y = 2;
      };

      var m = function() {
        var w = 3;
      };
    };
  };
}
init; //:: fn(v: {bar: number, foo: number})

init(x);
x; //:: {bar: number, foo: number}
```
```json
[
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "lineno": 6,
    "origin": {
      "!span": "64[5:4]-65[5:5]"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "lineno": 7,
    "namespace": "x",
    "origin": {
      "!span": "72[6:2]-75[6:5]"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "haz",
    "addr": "/haz/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "x.baz",
    "origin": {
      "!span": "83[7:4]-86[7:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "laz",
    "addr": "/laz/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "x.baz",
    "origin": {
      "!span": "95[8:4]-98[8:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "init",
    "addr": "/init/",
    "kind": "f",
    "type": "void function(x)",
    "lineno": 13,
    "origin": {
      "!span": "119[12:9]-123[12:13]",
      "!type": "fn(v: x)"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 14,
    "namespace": "x",
    "origin": {
      "!span": "133[13:4]-136[13:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 15,
    "namespace": "x",
    "origin": {
      "!span": "147[14:4]-150[14:7]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "f",
    "type": "void function()",
    "lineno": 16,
    "namespace": "init",
    "origin": {
      "!span": "166[15:6]-167[15:7]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "t",
    "addr": "/t/",
    "kind": "f",
    "type": "void function()",
    "lineno": 17,
    "namespace": "init.a",
    "origin": {
      "!span": "191[16:8]-192[16:9]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "g",
    "addr": "/g/",
    "kind": "f",
    "type": "void function()",
    "lineno": 18,
    "namespace": "init.a.t",
    "origin": {
      "!span": "218[17:10]-219[17:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "init.a.t.g",
    "origin": {
      "!span": "247[18:12]-248[18:13]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "m",
    "addr": "/m/",
    "kind": "f",
    "type": "void function()",
    "lineno": 22,
    "namespace": "init.a.t",
    "origin": {
      "!span": "274[21:10]-275[21:11]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/simple.js"
  },
  {
    "name": "w",
    "addr": "/w/",
    "kind": "v",
    "type": "number",
    "lineno": 23,
    "namespace": "init.a.t.m",
    "origin": {
      "!span": "303[22:12]-304[22:13]",
      "!type": "number"
    },
    "tagfile": "__DIR__/simple.js"
  }
]
```
```ctags
foo	__DIR__/simple.js	/foo/;"	v	lineno:1	type:number
x	__DIR__/simple.js	/x/;"	v	lineno:6
baz	__DIR__/simple.js	/baz/;"	v	lineno:7	namespace:x
haz	__DIR__/simple.js	/haz/;"	v	lineno:8	namespace:x.baz	type:number
laz	__DIR__/simple.js	/laz/;"	v	lineno:9	namespace:x.baz	type:number
init	__DIR__/simple.js	/init/;"	f	lineno:13	type:void function(x)
foo	__DIR__/simple.js	/foo/;"	v	lineno:14	namespace:x	type:number
bar	__DIR__/simple.js	/bar/;"	v	lineno:15	namespace:x	type:number
a	__DIR__/simple.js	/a/;"	f	lineno:16	namespace:init	type:void function()
t	__DIR__/simple.js	/t/;"	f	lineno:17	namespace:init.a	type:void function()
g	__DIR__/simple.js	/g/;"	f	lineno:18	namespace:init.a.t	type:void function()
y	__DIR__/simple.js	/y/;"	v	lineno:19	namespace:init.a.t.g	type:number
m	__DIR__/simple.js	/m/;"	f	lineno:22	namespace:init.a.t	type:void function()
w	__DIR__/simple.js	/w/;"	v	lineno:23	namespace:init.a.t.m	type:number
```
