```js
function Ctor1() { this.x = 10; }
Ctor1.prototype = {a: 1};

function Ctor2() {}

var singleton = {a: 10, b: 20}; //: singleton

new Ctor1(); //: Ctor1
new Ctor2(); //: Ctor2
```
```json
[
  {
    "name": "Ctor1",
    "addr": "/Ctor1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/objnames.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Ctor1.prototype",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/objnames.js"
  },
  {
    "name": "Ctor2",
    "addr": "/Ctor2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 4,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/objnames.js"
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/objnames.js"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/objnames.js"
  }
]
```
```ctags
Ctor1	/usr/local/lib/node_modules/jsctags/test/cases/objnames.js	/Ctor1/;"	f	lineno:1	type:void function()
Ctor2	/usr/local/lib/node_modules/jsctags/test/cases/objnames.js	/Ctor2/;"	f	lineno:4	type:void function()
a	/usr/local/lib/node_modules/jsctags/test/cases/objnames.js	/a/;"	v	lineno:2	namespace:Ctor1.prototype	type:number
a	/usr/local/lib/node_modules/jsctags/test/cases/objnames.js	/a/;"	v	lineno:6	namespace:singleton	type:number
b	/usr/local/lib/node_modules/jsctags/test/cases/objnames.js	/b/;"	v	lineno:6	namespace:singleton	type:number
```
