```js
function blah() {}

var jaja = 40;

var obj = {
  prop1: 10,
  prop2: function(foo) {}
};

obj.prop3 = "hi";

blah; //loc: 1, 9
jaja; //loc: 3, 4
obj; //loc: 5, 4
obj.prop1; //loc: 6, 2
obj.prop2; //loc: 7, 2
obj.prop3; //loc: 10, 4

function hide() { return obj.prop2; }

hide(); //loc: 7, 9

function another(arg) {
  var local = 1;
  arg; // 23, 17
  local; //loc: 24, 6
}

class foo {
  bar //<loc: 30,2
  () {}
}

var fooObj = new foo();
fooObj.bar; //loc: 30, 2
```
```json
[
  {
    "id": "f5a93110-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "blah",
    "addr": "/blah/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-13[0:13]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a97f30-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "jaja",
    "addr": "/jaja/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "origin": {
      "!span": "24[2:4]-28[2:8]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a640-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "obj",
    "addr": "/obj/",
    "kind": "v",
    "lineno": 5,
    "origin": {
      "!span": "40[4:4]-43[4:7]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a641-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "prop1",
    "addr": "/prop1/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "obj",
    "parent": "f5a9a640-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "50[5:2]-55[5:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a642-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "prop2",
    "addr": "/prop2/",
    "kind": "f",
    "type": "void function(?)",
    "lineno": 7,
    "namespace": "obj",
    "parent": "f5a9a640-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "63[6:2]-68[6:7]",
      "!type": "fn(foo: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a643-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "lineno": 7,
    "namespace": "obj.prop2",
    "parent": "f5a9a642-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "79[6:18]-82[6:21]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a644-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "prop3",
    "addr": "/prop3/",
    "kind": "v",
    "type": "string",
    "lineno": 10,
    "namespace": "obj",
    "parent": "f5a9a640-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "95[9:4]-100[9:9]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a645-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "hide",
    "addr": "/hide/",
    "kind": "f",
    "type": "void function(?) function()",
    "lineno": 19,
    "origin": {
      "!span": "243[18:9]-247[18:13]",
      "!type": "fn() -> fn(foo: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a646-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "another",
    "addr": "/another/",
    "kind": "f",
    "type": "void function(?)",
    "lineno": 23,
    "origin": {
      "!span": "303[22:9]-310[22:16]",
      "!type": "fn(arg: ?)",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a647-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "lineno": 23,
    "namespace": "another",
    "parent": "f5a9a646-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "311[22:17]-314[22:20]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": false
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a648-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "local",
    "addr": "/local/",
    "kind": "v",
    "type": "number",
    "lineno": 24,
    "namespace": "another",
    "parent": "f5a9a646-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "324[23:6]-329[23:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a649-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "foo",
    "addr": "/foo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 29,
    "origin": {
      "!span": "383[28:6]-386[28:9]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9a64a-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "prototype",
    "addr": "/class foo \{/",
    "kind": "v",
    "lineno": 29,
    "namespace": "foo",
    "parent": "f5a9a649-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "377[28:0]-417[31:1]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9cd50-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "bar",
    "addr": "/bar/",
    "kind": "f",
    "type": "void function()",
    "lineno": 30,
    "namespace": "foo.prototype",
    "parent": "f5a9a64a-7aee-11e6-b4c6-f7ea9a08a4cd",
    "origin": {
      "!span": "391[29:2]-394[29:5]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  },
  {
    "id": "f5a9cd51-7aee-11e6-b4c6-f7ea9a08a4cd",
    "name": "fooObj",
    "addr": "/fooObj/",
    "kind": "v",
    "type": "foo",
    "lineno": 34,
    "origin": {
      "!span": "423[33:4]-429[33:10]",
      "!type": "+foo",
      "!data": {
        "isConstructor": false,
        "type": "foo.prototype"
      }
    },
    "tagfile": "__DIR__/finddef.js"
  }
]
```
```ctags
blah	__DIR__/finddef.js	/blah/;"	f	lineno:1	type:void function()
jaja	__DIR__/finddef.js	/jaja/;"	v	lineno:3	type:number
obj	__DIR__/finddef.js	/obj/;"	v	lineno:5
prop1	__DIR__/finddef.js	/prop1/;"	v	lineno:6	namespace:obj	type:number
prop2	__DIR__/finddef.js	/prop2/;"	f	lineno:7	namespace:obj	type:void function(?)
foo	__DIR__/finddef.js	/foo/;"	v	lineno:7	namespace:obj.prop2
prop3	__DIR__/finddef.js	/prop3/;"	v	lineno:10	namespace:obj	type:string
hide	__DIR__/finddef.js	/hide/;"	f	lineno:19	type:void function(?) function()
another	__DIR__/finddef.js	/another/;"	f	lineno:23	type:void function(?)
arg	__DIR__/finddef.js	/arg/;"	v	lineno:23	namespace:another
local	__DIR__/finddef.js	/local/;"	v	lineno:24	namespace:another	type:number
foo	__DIR__/finddef.js	/foo/;"	f	lineno:29	type:void function()
prototype	__DIR__/finddef.js	/class foo \{/;"	v	lineno:29	namespace:foo
bar	__DIR__/finddef.js	/bar/;"	f	lineno:30	namespace:foo.prototype	type:void function()
fooObj	__DIR__/finddef.js	/fooObj/;"	v	lineno:34	type:foo
```
