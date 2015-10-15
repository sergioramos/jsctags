```js
function Base() {}
Base.prototype = {};

Base.prototype; //: Base.prototype
new Base; //: Base

function Sub1() {}
Sub1.prototype = new Base();
new Sub1(); //: Sub1

function Sub2() {}
Sub2.prototype = Object.create(Base.prototype);
new Sub2(); //: Sub2

function Base2() {}

function Sub3() {}
Sub3.prototype = new Base2();

new Sub3(); //: Sub3
```
```json
[
  {
    "name": "Base",
    "addr": "/Base/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/protoname.js"
  },
  {
    "name": "Sub1",
    "addr": "/Sub1/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/protoname.js"
  },
  {
    "name": "Sub2",
    "addr": "/Sub2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/protoname.js"
  },
  {
    "name": "Base2",
    "addr": "/Base2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 15,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/protoname.js"
  },
  {
    "name": "Sub3",
    "addr": "/Sub3/",
    "kind": "f",
    "type": "void function()",
    "lineno": 17,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/protoname.js"
  }
]
```
```ctags
Base	/usr/local/lib/node_modules/jsctags/test/cases/protoname.js	/Base/;"	f	lineno:1	type:void function()
Base2	/usr/local/lib/node_modules/jsctags/test/cases/protoname.js	/Base2/;"	f	lineno:15	type:void function()
Sub1	/usr/local/lib/node_modules/jsctags/test/cases/protoname.js	/Sub1/;"	f	lineno:7	type:void function()
Sub2	/usr/local/lib/node_modules/jsctags/test/cases/protoname.js	/Sub2/;"	f	lineno:11	type:void function()
Sub3	/usr/local/lib/node_modules/jsctags/test/cases/protoname.js	/Sub3/;"	f	lineno:17	type:void function()
```
