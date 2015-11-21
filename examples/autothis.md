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
    "id": "5c4867c1-9084-11e5-8ba3-93b66d8960c5",
    "name": "Bar",
    "addr": "/Bar/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "5c4867c3-9084-11e5-8ba3-93b66d8960c5",
    "name": "hallo",
    "addr": "/hallo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "parent": "5c4867c2-9084-11e5-8ba3-93b66d8960c5",
    "origin": {
      "!span": "49[1:14]-54[1:19]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "5c4867c0-9084-11e5-8ba3-93b66d8960c5",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "parent": "5c4840b1-9084-11e5-8ba3-93b66d8960c5",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "5c490400-9084-11e5-8ba3-93b66d8960c5",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Bar.prototype",
    "parent": "5c4867c2-9084-11e5-8ba3-93b66d8960c5",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/autothis.js"
  }
]
```
```ctags
Bar	__DIR__/autothis.js	/Bar/;"	f	lineno:1	type:void function()
hallo	__DIR__/autothis.js	/hallo/;"	f	lineno:2	namespace:Bar.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:11	namespace:Date.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:11	namespace:Bar.prototype	type:void function()
```
