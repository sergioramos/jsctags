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
    "id": "04233f10-7aef-11e6-9dbc-77d545e03b05",
    "name": "sup",
    "addr": "/sup/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "04245080-7aef-11e6-9dbc-77d545e03b05",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "number function()",
    "lineno": 2,
    "namespace": "sup",
    "parent": "04233f10-7aef-11e6-9dbc-77d545e03b05",
    "origin": {
      "!span": "14[1:2]-17[1:5]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "04249ea0-7aef-11e6-9dbc-77d545e03b05",
    "name": "makeClass",
    "addr": "/makeClass/",
    "kind": "f",
    "type": "void function(makeClass.!0)",
    "lineno": 5,
    "origin": {
      "!span": "57[4:9]-66[4:18]",
      "!type": "fn(methods: makeClass.!0)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "04249ea1-7aef-11e6-9dbc-77d545e03b05",
    "name": "Ctor",
    "addr": "/Ctor/",
    "kind": "f",
    "type": "void function()",
    "lineno": 6,
    "namespace": "makeClass",
    "parent": "04249ea0-7aef-11e6-9dbc-77d545e03b05",
    "origin": {
      "!span": "89[5:11]-93[5:15]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "04249ea2-7aef-11e6-9dbc-77d545e03b05",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "makeClass.Ctor",
    "parent": "04249ea1-7aef-11e6-9dbc-77d545e03b05",
    "origin": {
      "!span": "106[6:7]-115[6:16]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "sup"
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "04249ea3-7aef-11e6-9dbc-77d545e03b05",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "lineno": 8,
    "namespace": "makeClass",
    "parent": "04249ea0-7aef-11e6-9dbc-77d545e03b05",
    "origin": {
      "!span": "149[7:11]-150[7:12]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/indirect_class.js"
  },
  {
    "id": "0424c5b0-7aef-11e6-9dbc-77d545e03b05",
    "name": "Mine",
    "addr": "/Mine/",
    "kind": "v",
    "lineno": 11,
    "parent": "04249ea4-7aef-11e6-9dbc-77d545e03b05",
    "origin": {
      "!span": "202[10:4]-206[10:8]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
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
