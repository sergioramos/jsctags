```js
foo.bar.baz.bug({
  prop: function() {
    this.a; //: bool
  }
});

var foo = {};

var baz = {bug: function(o) {
  function x() { this.a = true; }
  x.prototype = o;
  return new x;
}};

foo.bar = {baz: baz};
```
```json
[
  {
    "id": "1200e600-7aef-11e6-b143-85b63d498278",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "lineno": 7,
    "origin": {
      "!span": "73[6:4]-76[6:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "1201a950-7aef-11e6-b143-85b63d498278",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "lineno": 9,
    "origin": {
      "!span": "88[8:4]-91[8:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "1201d060-7aef-11e6-b143-85b63d498278",
    "name": "bug",
    "addr": "/bug/",
    "kind": "f",
    "type": "void function(baz.bug.!0)",
    "lineno": 9,
    "namespace": "baz",
    "parent": "1201a950-7aef-11e6-b143-85b63d498278",
    "origin": {
      "!span": "95[8:11]-98[8:14]",
      "!type": "fn(o: baz.bug.!0)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "1201f770-7aef-11e6-b143-85b63d498278",
    "name": "x",
    "addr": "/x/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "namespace": "baz.bug",
    "parent": "1201d060-7aef-11e6-b143-85b63d498278",
    "origin": {
      "!span": "125[9:11]-126[9:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "12018240-7aef-11e6-b143-85b63d498278",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "lineno": 15,
    "namespace": "foo",
    "parent": "1200e600-7aef-11e6-b143-85b63d498278",
    "origin": {
      "!span": "192[14:4]-195[14:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  }
]
```
```ctags
foo	__DIR__/order_of_definition.js	/foo/;"	v	lineno:7
baz	__DIR__/order_of_definition.js	/baz/;"	v	lineno:9
bug	__DIR__/order_of_definition.js	/bug/;"	f	lineno:9	namespace:baz	type:void function(baz.bug.!0)
x	__DIR__/order_of_definition.js	/x/;"	f	lineno:10	namespace:baz.bug	type:void function()
bar	__DIR__/order_of_definition.js	/bar/;"	v	lineno:15	namespace:foo
```
