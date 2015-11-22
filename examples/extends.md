```js
// Follows the pattern CoffeeScript uses to define classes.

var __extends = function(child, parent) {
  for (var key in parent) { child[key] = parent[key]; }
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
};

var Top = (function() {
  function Top() {}
  Top.prototype.topMethod = function() {return "hey";};
  Top.topStatic = 20;
  return Top;
})();

var SubOne = (function(_super) {
  function SubOne(arg) { this.argOne = arg; }
  __extends(SubOne, _super);
  SubOne.prototype.methodOne = function() {return 11;};
  return SubOne;
})(Top);

var SubTwo = (function(_super) {
  function SubTwo(arg) { this.argTwo = arg; }
  __extends(SubTwo, _super);
  SubTwo.prototype.methodTwo = function() {return null;};
  return SubTwo;
})(Top);

var SubEleven = (function(_super) {
  function SubEleven(arg) { SubOne.call(this, arg); }
  __extends(SubEleven, SubOne);
  SubEleven.prototype.methodEleven = function() {return "blah";};
  return SubEleven;
})(SubOne);

var top = new Top, one = new SubOne(true), two = new SubTwo(false), elf = new SubEleven(true);

one.topMethod; //: fn() -> string

one.methodOne; //: fn() -> number

one.argOne; //: bool

one.argTwo; //: ?

two.argTwo; //: bool

one.methodTwo; //: ?

one.methodEleven; //: ?

SubEleven.topStatic; //: number

elf.methodOne; //: fn() -> number

elf.methodEleven(); //: string

two.methodEleven; //: ?
```
```json
[
  {
    "id": "29cf4b00-90cb-11e5-906b-b1bd9e3c318f",
    "name": "__extends",
    "addr": "/__extends/",
    "kind": "f",
    "type": "void function(fn(arg: bool)",
    "lineno": 3,
    "origin": {
      "!span": "65[2:4]-74[2:13]",
      "!type": "fn(child: fn(arg: bool)|fn(arg: bool), parent: fn()|fn(arg: bool))",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf7213-90cb-11e5-906b-b1bd9e3c318f",
    "name": "parent",
    "addr": "/parent/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 3,
    "namespace": "__extends",
    "parent": "29cf4b00-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "93[2:32]-99[2:38]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf7210-90cb-11e5-906b-b1bd9e3c318f",
    "name": "child",
    "addr": "/child/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 3,
    "namespace": "__extends",
    "parent": "29cf4b00-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "86[2:25]-91[2:30]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf7212-90cb-11e5-906b-b1bd9e3c318f",
    "name": "key",
    "addr": "/key/",
    "kind": "v",
    "lineno": 4,
    "namespace": "__extends",
    "parent": "29cf4b00-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "114[3:11]-117[3:14]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf7211-90cb-11e5-906b-b1bd9e3c318f",
    "name": "ctor",
    "addr": "/ctor/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5,
    "namespace": "__extends",
    "parent": "29cf4b00-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "170[4:11]-174[4:15]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08381-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubTwo.prototype.constructor",
    "parent": "29d08380-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0838a-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubEleven",
    "parent": "29d08389-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c77-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubTwo",
    "parent": "29d05c76-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf9924-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubOne",
    "parent": "29cf9923-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0aa91-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubEleven.prototype.constructor",
    "parent": "29d0aa90-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d03561-90cb-11e5-906b-b1bd9e3c318f",
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubOne.prototype.constructor",
    "parent": "29d03560-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "252[6:8]-261[6:17]",
      "!data": {
        "isConstructor": false,
        "type": "Top.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf7214-90cb-11e5-906b-b1bd9e3c318f",
    "name": "Top",
    "addr": "/Top/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "origin": {
      "!span": "284[9:4]-287[9:7]",
      "!type": "fn()",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf9921-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topMethod",
    "addr": "/topMethod/",
    "kind": "f",
    "type": "string function()",
    "lineno": 12,
    "namespace": "Top.prototype",
    "parent": "29cf9920-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "340[11:16]-349[11:25]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf9922-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "addr": "/topStatic/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "Top",
    "parent": "29cf7214-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "386[12:6]-395[12:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf9923-90cb-11e5-906b-b1bd9e3c318f",
    "name": "SubOne",
    "addr": "/SubOne/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 17,
    "origin": {
      "!span": "427[16:4]-433[16:10]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d03560-90cb-11e5-906b-b1bd9e3c318f",
    "name": "constructor",
    "addr": "/SubOne/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 17,
    "namespace": "SubOne.prototype",
    "parent": "29cf9924-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "427[16:4]-433[16:10]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c75-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne",
    "parent": "29cf9923-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "474[17:18]-477[17:21]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a4-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven",
    "parent": "29d08389-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c74-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne",
    "parent": "29cf9923-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c72-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne.prototype.constructor",
    "parent": "29d03560-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "474[17:18]-477[17:21]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a1-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven.prototype.constructor",
    "parent": "29d0aa90-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c71-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne.prototype.constructor",
    "parent": "29d03560-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29cf9925-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodOne",
    "addr": "/methodOne/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype",
    "parent": "29cf9924-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "550[19:19]-559[19:28]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d03562-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodOne",
    "addr": "/methodOne/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype.constructor.prototype",
    "parent": "29d03561-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "550[19:19]-559[19:28]",
      "!type": "fn() -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c76-90cb-11e5-906b-b1bd9e3c318f",
    "name": "SubTwo",
    "addr": "/SubTwo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 24,
    "origin": {
      "!span": "618[23:4]-624[23:10]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a3-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubEleven",
    "parent": "29d08389-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08383-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubTwo.prototype.constructor",
    "parent": "29d08380-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c73-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubOne",
    "parent": "29cf9923-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a0-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubEleven.prototype.constructor",
    "parent": "29d0aa90-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08386-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubTwo",
    "parent": "29d05c76-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08380-90cb-11e5-906b-b1bd9e3c318f",
    "name": "constructor",
    "addr": "/SubTwo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 24,
    "namespace": "SubTwo.prototype",
    "parent": "29d05c77-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "618[23:4]-624[23:10]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c70-90cb-11e5-906b-b1bd9e3c318f",
    "name": "topStatic",
    "kind": "v",
    "type": "number",
    "namespace": "SubOne.prototype.constructor",
    "parent": "29d03560-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08384-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo.prototype.constructor",
    "parent": "29d08380-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "677[24:30]-683[24:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08387-90cb-11e5-906b-b1bd9e3c318f",
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo",
    "parent": "29d05c76-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "677[24:30]-683[24:36]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08385-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo.prototype.constructor",
    "parent": "29d08380-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "665[24:18]-668[24:21]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08388-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo",
    "parent": "29d05c76-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "665[24:18]-668[24:21]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d05c78-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodTwo",
    "addr": "/methodTwo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype",
    "parent": "29d05c77-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "741[26:19]-750[26:28]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08382-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodTwo",
    "addr": "/methodTwo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype.constructor.prototype",
    "parent": "29d08381-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "741[26:19]-750[26:28]",
      "!type": "fn()",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d08389-90cb-11e5-906b-b1bd9e3c318f",
    "name": "SubEleven",
    "addr": "/SubEleven/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 31,
    "origin": {
      "!span": "811[30:4]-820[30:13]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0aa90-90cb-11e5-906b-b1bd9e3c318f",
    "name": "constructor",
    "addr": "/SubEleven/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 31,
    "namespace": "SubEleven.prototype",
    "parent": "29d0838a-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "811[30:4]-820[30:13]",
      "!type": "fn(arg: bool)",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a2-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "namespace": "SubEleven.prototype.constructor",
    "parent": "29d0aa90-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "864[31:21]-867[31:24]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a5-90cb-11e5-906b-b1bd9e3c318f",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "namespace": "SubEleven",
    "parent": "29d08389-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "864[31:21]-867[31:24]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0aa92-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodEleven",
    "addr": "/methodEleven/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype.constructor.prototype",
    "parent": "29d0aa91-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "951[33:22]-963[33:34]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0838b-90cb-11e5-906b-b1bd9e3c318f",
    "name": "methodEleven",
    "addr": "/methodEleven/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype",
    "parent": "29d0838a-90cb-11e5-906b-b1bd9e3c318f",
    "origin": {
      "!span": "951[33:22]-963[33:34]",
      "!type": "fn() -> string",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a6-90cb-11e5-906b-b1bd9e3c318f",
    "name": "one",
    "addr": "/one/",
    "kind": "v",
    "type": "SubOne",
    "lineno": 38,
    "origin": {
      "!span": "1047[37:19]-1050[37:22]",
      "!type": "+SubOne",
      "!data": {
        "isConstructor": false,
        "type": "Top"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a7-90cb-11e5-906b-b1bd9e3c318f",
    "name": "two",
    "addr": "/two/",
    "kind": "v",
    "type": "SubTwo",
    "lineno": 38,
    "origin": {
      "!span": "1071[37:43]-1074[37:46]",
      "!type": "+SubTwo",
      "!data": {
        "isConstructor": false,
        "type": "Top"
      }
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "id": "29d0d1a8-90cb-11e5-906b-b1bd9e3c318f",
    "name": "elf",
    "addr": "/elf/",
    "kind": "v",
    "type": "SubEleven",
    "lineno": 38,
    "origin": {
      "!span": "1096[37:68]-1099[37:71]",
      "!type": "+SubEleven",
      "!data": {
        "isConstructor": false
      }
    },
    "tagfile": "__DIR__/extends.js"
  }
]
```
```ctags
__extends	__DIR__/extends.js	/__extends/;"	f	lineno:3	type:void function(fn(arg: bool)
parent	__DIR__/extends.js	/parent/;"	f	lineno:3	namespace:__extends	type:void function(bool)
child	__DIR__/extends.js	/child/;"	f	lineno:3	namespace:__extends	type:void function(bool)
key	__DIR__/extends.js	/key/;"	v	lineno:4	namespace:__extends
ctor	__DIR__/extends.js	/ctor/;"	f	lineno:5	namespace:__extends	type:void function()
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubTwo.prototype.constructor
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubEleven
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubTwo
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubOne
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubEleven.prototype.constructor
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubOne.prototype.constructor
Top	__DIR__/extends.js	/Top/;"	f	lineno:10	type:void function()
topMethod	__DIR__/extends.js	/topMethod/;"	f	lineno:12	namespace:Top.prototype	type:string function()
topStatic	__DIR__/extends.js	/topStatic/;"	v	lineno:13	namespace:Top	type:number
SubOne	__DIR__/extends.js	/SubOne/;"	f	lineno:17	type:void function(bool)
constructor	__DIR__/extends.js	/SubOne/;"	f	lineno:17	namespace:SubOne.prototype	type:void function(bool)
arg	__DIR__/extends.js	/arg/;"	v	lineno:18	namespace:SubOne	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubEleven	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubOne	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:18	namespace:SubOne.prototype.constructor	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubEleven.prototype.constructor	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubOne.prototype.constructor	type:boolean
methodOne	__DIR__/extends.js	/methodOne/;"	f	lineno:20	namespace:SubOne.prototype	type:number function()
methodOne	__DIR__/extends.js	/methodOne/;"	f	lineno:20	namespace:SubOne.prototype.constructor.prototype	type:number function()
SubTwo	__DIR__/extends.js	/SubTwo/;"	f	lineno:24	type:void function(bool)
topStatic	__DIR__/extends.js	//;"	v	namespace:SubEleven	type:number
topStatic	__DIR__/extends.js	//;"	v	namespace:SubTwo.prototype.constructor	type:number
topStatic	__DIR__/extends.js	//;"	v	namespace:SubOne	type:number
topStatic	__DIR__/extends.js	//;"	v	namespace:SubEleven.prototype.constructor	type:number
topStatic	__DIR__/extends.js	//;"	v	namespace:SubTwo	type:number
constructor	__DIR__/extends.js	/SubTwo/;"	f	lineno:24	namespace:SubTwo.prototype	type:void function(bool)
topStatic	__DIR__/extends.js	//;"	v	namespace:SubOne.prototype.constructor	type:number
argTwo	__DIR__/extends.js	/argTwo/;"	v	lineno:25	namespace:SubTwo.prototype.constructor	type:boolean
argTwo	__DIR__/extends.js	/argTwo/;"	v	lineno:25	namespace:SubTwo	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:25	namespace:SubTwo.prototype.constructor	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:25	namespace:SubTwo	type:boolean
methodTwo	__DIR__/extends.js	/methodTwo/;"	f	lineno:27	namespace:SubTwo.prototype	type:void function()
methodTwo	__DIR__/extends.js	/methodTwo/;"	f	lineno:27	namespace:SubTwo.prototype.constructor.prototype	type:void function()
SubEleven	__DIR__/extends.js	/SubEleven/;"	f	lineno:31	type:void function(bool)
constructor	__DIR__/extends.js	/SubEleven/;"	f	lineno:31	namespace:SubEleven.prototype	type:void function(bool)
arg	__DIR__/extends.js	/arg/;"	v	lineno:32	namespace:SubEleven.prototype.constructor	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:32	namespace:SubEleven	type:boolean
methodEleven	__DIR__/extends.js	/methodEleven/;"	f	lineno:34	namespace:SubEleven.prototype.constructor.prototype	type:string function()
methodEleven	__DIR__/extends.js	/methodEleven/;"	f	lineno:34	namespace:SubEleven.prototype	type:string function()
one	__DIR__/extends.js	/one/;"	v	lineno:38	type:SubOne
two	__DIR__/extends.js	/two/;"	v	lineno:38	type:SubTwo
elf	__DIR__/extends.js	/elf/;"	v	lineno:38	type:SubEleven
```
