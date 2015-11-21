```js
var sup = {
  foo: function() { return 1; }
};

function makeClass(methods) {
  function Ctor() {}
  Ctor.prototype = Object.create(sup);
  for (var m in methods) Ctor.prototype[m] = methods[m];
}

var Mine = makeClass({
  a: function() { return "hi"; },
  b: function() {
    this.a; //: fn() -> string
    this.foo; //: fn() -> number
  }
});
```
```json
[
  {
    "id": "69cfff70-9084-11e5-8e69-b99d63a0a713",
    "name": "sup",
    "addr": "/sup/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]"
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d02680-9084-11e5-8e69-b99d63a0a713",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "number function()",
    "lineno": 2,
    "namespace": "sup",
    "parent": "69cfff70-9084-11e5-8e69-b99d63a0a713",
    "origin": {
      "!span": "14[1:2]-17[1:5]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d04d90-9084-11e5-8e69-b99d63a0a713",
    "name": "makeClass",
    "addr": "/makeClass/",
    "kind": "f",
    "type": "void function(makeClass.!0)",
    "lineno": 5,
    "origin": {
      "!span": "57[4:9]-66[4:18]",
      "!type": "fn(methods: makeClass.!0)"
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d04d91-9084-11e5-8e69-b99d63a0a713",
    "name": "Ctor",
    "addr": "/Ctor/",
    "kind": "f",
    "type": "void function()",
    "lineno": 6,
    "namespace": "makeClass",
    "parent": "69d04d90-9084-11e5-8e69-b99d63a0a713",
    "origin": {
      "!span": "89[5:11]-93[5:15]",
      "!type": "fn()",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d04d92-9084-11e5-8e69-b99d63a0a713",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "makeClass.Ctor",
    "parent": "69d04d91-9084-11e5-8e69-b99d63a0a713",
    "origin": {
      "!span": "106[6:7]-115[6:16]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d04d93-9084-11e5-8e69-b99d63a0a713",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "lineno": 8,
    "namespace": "makeClass",
    "parent": "69d04d90-9084-11e5-8e69-b99d63a0a713",
    "origin": {
      "!span": "149[7:11]-150[7:12]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "69d04d95-9084-11e5-8e69-b99d63a0a713",
    "name": "Mine",
    "addr": "/Mine/",
    "kind": "v",
    "lineno": 11,
    "parent": "69d04d94-9084-11e5-8e69-b99d63a0a713",
    "origin": {
      "!span": "202[10:4]-206[10:8]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  }
]
```
```ctags
sup	__DIR__/indirect_class.js	/sup/;"	v	lineno:1
foo	__DIR__/indirect_class.js	/foo/;"	f	lineno:2	namespace:sup	type:number function()
makeClass	__DIR__/indirect_class.js	/makeClass/;"	f	lineno:5	type:void function(makeClass.!0)
Ctor	__DIR__/indirect_class.js	/Ctor/;"	f	lineno:6	namespace:makeClass	type:void function()
prototype	__DIR__/indirect_class.js	/prototype/;"	v	lineno:7	namespace:makeClass.Ctor
m	__DIR__/indirect_class.js	/m/;"	v	lineno:8	namespace:makeClass
Mine	__DIR__/indirect_class.js	/Mine/;"	v	lineno:11
```
