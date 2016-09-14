```js
// Underscore's each function (roughly)
var each = function(obj, iterator, context) {
  if (obj == null) return;
  if (Array.prototype.forEach && obj.forEach === Array.prototype.forEach) {
    obj.forEach(iterator, context);
  } else if (obj.length === +obj.length) {
    for (var i = 0, l = obj.length; i < l; i++)
      iterator.call(context, obj[i], i, obj);
  }
};

each([1, 2, 3, 4], function(n) {
  n; //: number
  this; //: Date
}, new Date);

each([{x: 10}], function(o) {
  o; //: {x}
  this; //: String
}, new String("x"));
```
```json
[
  {
    "id": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "name": "each",
    "addr": "/each/",
    "kind": "f",
    "type": "void function(Array[number]|[each.!0.<i>], fn(n: number)",
    "lineno": 2,
    "origin": {
      "!span": "44[1:4]-48[1:8]",
      "!type": "fn(obj: [number]|[each.!0.<i>], iterator: fn(n: number)|fn(o: each.!0.<i>), context: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  },
  {
    "id": "fb2b41a0-7aee-11e6-bceb-e9d1aa0addee",
    "name": "context",
    "addr": "/context/",
    "kind": "v",
    "type": "string",
    "lineno": 2,
    "namespace": "each",
    "parent": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "origin": {
      "!span": "75[1:35]-82[1:42]",
      "!type": "+String",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  },
  {
    "id": "fb2b68b1-7aee-11e6-bceb-e9d1aa0addee",
    "name": "iterator",
    "addr": "/iterator/",
    "kind": "f",
    "type": "void function(each.!0.<i>)",
    "lineno": 2,
    "namespace": "each",
    "parent": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "origin": {
      "!span": "65[1:25]-73[1:33]",
      "!type": "fn(o: each.!0.<i>)",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  },
  {
    "id": "fb2bb6d1-7aee-11e6-bceb-e9d1aa0addee",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "type": "[each.!0.<i>]",
    "lineno": 2,
    "namespace": "each",
    "parent": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "origin": {
      "!span": "60[1:20]-63[1:23]",
      "!type": "[each.!0.<i>]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  },
  {
    "id": "fb2b68b0-7aee-11e6-bceb-e9d1aa0addee",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "each",
    "parent": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "origin": {
      "!span": "281[6:13]-282[6:14]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  },
  {
    "id": "fb2bb6d0-7aee-11e6-bceb-e9d1aa0addee",
    "name": "l",
    "addr": "/l/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "each",
    "parent": "fb2acc70-7aee-11e6-bceb-e9d1aa0addee",
    "origin": {
      "!span": "288[6:20]-289[6:21]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/generic_each.js"
  }
]
```
```ctags
each	__DIR__/generic_each.js	/each/;"	f	lineno:2	type:void function(Array[number]|[each.!0.<i>], fn(n: number)
context	__DIR__/generic_each.js	/context/;"	v	lineno:2	namespace:each	type:string
iterator	__DIR__/generic_each.js	/iterator/;"	f	lineno:2	namespace:each	type:void function(each.!0.<i>)
obj	__DIR__/generic_each.js	/obj/;"	v	lineno:2	namespace:each	type:[each.!0.<i>]
i	__DIR__/generic_each.js	/i/;"	v	lineno:7	namespace:each	type:number
l	__DIR__/generic_each.js	/l/;"	v	lineno:7	namespace:each	type:number
```
