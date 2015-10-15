```js
function Bar() { this.prop = 10; }
Bar.prototype.hallo = function() {
  this; //: Bar
  this.prop; //: number
};

Bar.prototype.fn2 = function() {
  this; //: Date
};

Date.prototype.fn2 = Bar.prototype.fn2;
new Date().fn2();
```
```json
[
  {
    "name": "Bar",
    "addr": "/Bar/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/autothis.js"
  },
  {
    "name": "hallo",
    "addr": "/hallo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/autothis.js"
  },
  {
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/autothis.js"
  }
]
```
```ctags
Bar	/usr/local/lib/node_modules/jsctags/test/cases/autothis.js	/Bar/;"	f	lineno:1	type:void function()
fn2	/usr/local/lib/node_modules/jsctags/test/cases/autothis.js	/fn2/;"	f	lineno:11	namespace:Date.prototype	type:void function()
hallo	/usr/local/lib/node_modules/jsctags/test/cases/autothis.js	/hallo/;"	f	lineno:2	namespace:Bar.prototype	type:void function()
```
