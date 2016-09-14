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
    "id": "dacd6dc0-7aee-11e6-8bb9-cd50670fde3a",
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
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "dacde2f1-7aee-11e6-8bb9-cd50670fde3a",
    "name": "hallo",
    "addr": "/hallo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype",
    "parent": "dacde2f0-7aee-11e6-8bb9-cd50670fde3a",
    "origin": {
      "!span": "49[1:14]-54[1:19]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "dacde2f2-7aee-11e6-8bb9-cd50670fde3a",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "namespace": "Bar.prototype",
    "parent": "dacde2f0-7aee-11e6-8bb9-cd50670fde3a",
    "origin": {
      "!span": "128[6:14]-131[6:17]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/autothis.js"
  },
  {
    "id": "dac57e80-7aee-11e6-8bb9-cd50670fde3a",
    "name": "fn2",
    "addr": "/fn2/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11,
    "namespace": "Date.prototype",
    "parent": "dac55770-7aee-11e6-8bb9-cd50670fde3a",
    "origin": {
      "!span": "183[10:15]-186[10:18]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/autothis.js"
  }
]
```
```ctags
Bar	__DIR__/autothis.js	/Bar/;"	f	lineno:1	type:void function()
hallo	__DIR__/autothis.js	/hallo/;"	f	lineno:2	namespace:Bar.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:7	namespace:Bar.prototype	type:void function()
fn2	__DIR__/autothis.js	/fn2/;"	f	lineno:11	namespace:Date.prototype	type:void function()
```
