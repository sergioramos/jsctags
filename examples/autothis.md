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
    "id": "4b1fab20-909d-11e5-bc7b-316753990570",
    "name": "Bar",
    "addr": "Bar",
    "kind": "f",
    "type": "void function()",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-12[0:12]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "4b1fab22-909d-11e5-bc7b-316753990570",
    "name": "hallo",
    "addr": "hallo",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "parent": "4b1fab21-909d-11e5-bc7b-316753990570",
    "origin": {
      "!span": "49[1:14]-54[1:19]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "4b1f8411-909d-11e5-bc7b-316753990570",
    "name": "fn2",
    "addr": "fn2",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "parent": "4b1f8410-909d-11e5-bc7b-316753990570",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "4b204760-909d-11e5-bc7b-316753990570",
    "name": "fn2",
    "addr": "fn2",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Bar.prototype",
    "parent": "4b1fab21-909d-11e5-bc7b-316753990570",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/autothis.js"
  }
]
```
```ctags
Bar	__DIR__/autothis.js	Bar;"	f	lineno:1	type:void function()
hallo	__DIR__/autothis.js	hallo;"	f	lineno:2	namespace:Bar.prototype	type:void function()
fn2	__DIR__/autothis.js	fn2;"	f	lineno:11	namespace:Date.prototype	type:void function()
fn2	__DIR__/autothis.js	fn2;"	f	lineno:11	namespace:Bar.prototype	type:void function()
```
