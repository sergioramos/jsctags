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
    "id": "c59717f0-9082-11e5-b96f-993d41938ea9",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "lineno": 7,
    "origin": {
      "!span": "73[6:4]-76[6:7]"
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "c5973f01-9082-11e5-b96f-993d41938ea9",
    "name": "baz",
    "addr": "/baz/",
    "kind": "v",
    "lineno": 9,
    "origin": {
      "!span": "88[8:4]-91[8:7]"
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "c5973f02-9082-11e5-b96f-993d41938ea9",
    "name": "bug",
    "addr": "/bug/",
    "kind": "f",
    "type": "void function(baz.bug.!0)",
    "lineno": 9,
    "namespace": "baz",
    "parent": "c5973f01-9082-11e5-b96f-993d41938ea9",
    "origin": {
      "!span": "95[8:11]-98[8:14]",
      "!type": "fn(o: baz.bug.!0)"
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "c5973f03-9082-11e5-b96f-993d41938ea9",
    "name": "x",
    "addr": "/x/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "namespace": "baz.bug",
    "parent": "c5973f02-9082-11e5-b96f-993d41938ea9",
    "origin": {
      "!span": "125[9:11]-126[9:12]",
      "!type": "fn()",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/order_of_definition.js"
  },
  {
    "id": "c59717f1-9082-11e5-b96f-993d41938ea9",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "lineno": 15,
    "namespace": "foo",
    "parent": "c59717f0-9082-11e5-b96f-993d41938ea9",
    "origin": {
      "!span": "192[14:4]-195[14:7]"
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
