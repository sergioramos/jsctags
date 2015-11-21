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
    "id": "b40828d0-9082-11e5-8c0a-e76440358de3",
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
    "id": "b40828d2-9082-11e5-8c0a-e76440358de3",
    "name": "hallo",
    "addr": "/hallo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "parent": "b40828d1-9082-11e5-8c0a-e76440358de3",
    "origin": {
      "!span": "49[1:14]-54[1:19]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "b40801c1-9082-11e5-8c0a-e76440358de3",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "parent": "b40801c0-9082-11e5-8c0a-e76440358de3",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "b408c510-9082-11e5-8c0a-e76440358de3",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Bar.prototype",
    "parent": "b40828d1-9082-11e5-8c0a-e76440358de3",
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
