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
    "id": "a5056100-90bd-11e5-8ca4-7baaf793ba28",
    "name": "Ext",
    "addr": "/Ext/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5056101-90bd-11e5-8ca4-7baaf793ba28",
    "name": "extend",
    "addr": "/extend/",
    "kind": "f",
    "type": "void function(fn()",
    "lineno": 2,
    "namespace": "Ext",
    "parent": "a5056100-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "25[1:4]-31[1:10]",
      "!type": "fn(subclass: fn(), superclass: ?)",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058815-90bd-11e5-8ca4-7baaf793ba28",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 8,
    "namespace": "Ext.extend.subclass",
    "parent": "a5058812-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "231[7:11]-240[7:20]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058813-90bd-11e5-8ca4-7baaf793ba28",
    "name": "extend",
    "addr": "/extend/",
    "kind": "f",
    "type": "void function(?)",
    "lineno": 10,
    "namespace": "Ext.extend.subclass",
    "parent": "a5058812-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "264[9:11]-270[9:17]",
      "!type": "fn(o: ?)",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058814-90bd-11e5-8ca4-7baaf793ba28",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 10,
    "namespace": "Ext.extend.subclass.extend",
    "parent": "a5058813-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "282[9:29]-283[9:30]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058812-90bd-11e5-8ca4-7baaf793ba28",
    "name": "subclass",
    "addr": "/subclass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Ext.extend",
    "parent": "a5056101-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "369[13:22]-377[13:30]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058816-90bd-11e5-8ca4-7baaf793ba28",
    "name": "superclass",
    "addr": "/superclass/",
    "kind": "f",
    "type": "void function()",
    "lineno": 14,
    "namespace": "Ext.extend",
    "parent": "a5056101-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "379[13:32]-389[13:42]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058810-90bd-11e5-8ca4-7baaf793ba28",
    "name": "F",
    "addr": "/F/",
    "kind": "f",
    "type": "void function()",
    "lineno": 18,
    "namespace": "Ext.extend",
    "parent": "a5056101-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "489[17:6]-490[17:7]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/blowup.js"
  },
  {
    "id": "a5058811-90bd-11e5-8ca4-7baaf793ba28",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 19,
    "namespace": "Ext.extend.F",
    "parent": "a5058810-90bd-11e5-8ca4-7baaf793ba28",
    "origin": {
      "!span": "512[18:4]-521[18:13]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
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
