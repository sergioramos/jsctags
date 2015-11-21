```js
var Ext = Ext || {};
Ext.extend = function(subclass, superclass) {
  superclass = subclass;
  subclass = function() { superclass.apply(this, arguments); };

  var F = function() {};
  F.prototype = superclass.prototype;
  subclass.prototype = new F();

  subclass.extend = function(o) { return Ext.extend(subclass, o); };
};

var Ext = Ext || {};
Ext.extend = function(subclass, superclass) {
  superclass = subclass;
  subclass = function() { superclass.apply(this, arguments); };

  var F = function() {};
  F.prototype = superclass.prototype;
  subclass.prototype = new F();

  subclass.extend = function(o) { return Ext.extend(subclass, o); };
};
```
```json
[
  {
    "id": "5d748bb0-9084-11e5-be5a-5d46f03ce58f",
    "name": "Ext",
    "addr": "/Ext/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]"
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74b2c0-9084-11e5-be5a-5d46f03ce58f",
    "name": "extend",
    "addr": "/extend/",
    "kind": "f",
    "type": "void function(fn()",
    "lineno": 2,
    "namespace": "Ext",
    "parent": "5d748bb0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "25[1:4]-31[1:10]",
      "!type": "fn(subclass: fn(), superclass: ?)"
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74d9d3-9084-11e5-be5a-5d46f03ce58f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 8,
    "namespace": "Ext.extend.subclass",
    "parent": "5d74d9d0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "231[7:11]-240[7:20]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74d9d1-9084-11e5-be5a-5d46f03ce58f",
    "name": "extend",
    "addr": "/extend/",
    "kind": "f",
    "type": "void function(?)",
    "lineno": 10,
    "namespace": "Ext.extend.subclass",
    "parent": "5d74d9d0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "264[9:11]-270[9:17]",
      "!type": "fn(o: ?)",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74d9d2-9084-11e5-be5a-5d46f03ce58f",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 10,
    "namespace": "Ext.extend.subclass.extend",
    "parent": "5d74d9d1-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "282[9:29]-283[9:30]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74d9d0-9084-11e5-be5a-5d46f03ce58f",
    "name": "subclass",
    "addr": "/subclass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Ext.extend",
    "parent": "5d74b2c0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "369[13:22]-377[13:30]",
      "!type": "fn()",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74d9d4-9084-11e5-be5a-5d46f03ce58f",
    "name": "superclass",
    "addr": "/superclass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Ext.extend",
    "parent": "5d74b2c0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "379[13:32]-389[13:42]",
      "!type": "fn()",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74b2c1-9084-11e5-be5a-5d46f03ce58f",
    "name": "F",
    "addr": "/F/",
    "kind": "f",
    "type": "void function()",
    "lineno": 18,
    "namespace": "Ext.extend",
    "parent": "5d74b2c0-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "489[17:6]-490[17:7]",
      "!type": "fn()",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "5d74b2c2-9084-11e5-be5a-5d46f03ce58f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 19,
    "namespace": "Ext.extend.F",
    "parent": "5d74b2c1-9084-11e5-be5a-5d46f03ce58f",
    "origin": {
      "!span": "512[18:4]-521[18:13]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  }
]
```
```ctags
Ext	__DIR__/blowup.js	/Ext/;"	v	lineno:1
extend	__DIR__/blowup.js	/extend/;"	f	lineno:2	namespace:Ext	type:void function(fn()
prototype	__DIR__/blowup.js	/prototype/;"	v	lineno:8	namespace:Ext.extend.subclass
extend	__DIR__/blowup.js	/extend/;"	f	lineno:10	namespace:Ext.extend.subclass	type:void function(?)
o	__DIR__/blowup.js	/o/;"	v	lineno:10	namespace:Ext.extend.subclass.extend
subclass	__DIR__/blowup.js	/subclass/;"	f	lineno:14	namespace:Ext.extend	type:void function()
superclass	__DIR__/blowup.js	/superclass/;"	f	lineno:14	namespace:Ext.extend	type:void function()
F	__DIR__/blowup.js	/F/;"	f	lineno:18	namespace:Ext.extend	type:void function()
prototype	__DIR__/blowup.js	/prototype/;"	v	lineno:19	namespace:Ext.extend.F
```
