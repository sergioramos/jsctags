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
    "id": "a3dfa5b2-90bd-11e5-a6d6-97ec9c1dd3c4",
    "name": "Bar",
    "addr": "/Bar/",
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
    "id": "a3dfccc1-90bd-11e5-a6d6-97ec9c1dd3c4",
    "name": "hallo",
    "addr": "/hallo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "parent": "a3dfccc0-90bd-11e5-a6d6-97ec9c1dd3c4",
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
    "id": "a3dfa5b1-90bd-11e5-a6d6-97ec9c1dd3c4",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "parent": "a3dfa5b0-90bd-11e5-a6d6-97ec9c1dd3c4",
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
    "id": "a3e041f0-90bd-11e5-a6d6-97ec9c1dd3c4",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Bar.prototype",
    "parent": "a3dfccc0-90bd-11e5-a6d6-97ec9c1dd3c4",
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
Bar	__DIR__/autothis.js	/Bar/;"	f	lineno:1	type:void function()
hallo	__DIR__/autothis.js	/hallo/;"	f	lineno:2	namespace:Bar.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:11	namespace:Date.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:11	namespace:Bar.prototype	type:void function()
```
