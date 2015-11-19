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
    "name": "__extends",
    "addr": "/__extends/",
    "kind": "f",
    "type": "void function(fn(arg: bool)",
    "lineno": 3,
    "origin": {
      "!span": "65[2:4]-74[2:13]",
      "!type": "fn(child: fn(arg: bool)|fn(arg: bool), parent: fn()|fn(arg: bool))"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "parent",
    "addr": "/parent/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 3,
    "namespace": "__extends",
    "origin": {
      "!span": "93[2:32]-99[2:38]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "child",
    "addr": "/child/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 3,
    "namespace": "__extends",
    "origin": {
      "!span": "86[2:25]-91[2:30]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "key",
    "addr": "/key/",
    "kind": "v",
    "lineno": 4,
    "namespace": "__extends",
    "origin": {
      "!span": "114[3:11]-117[3:14]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "ctor",
    "addr": "/ctor/",
    "kind": "f",
    "type": "void function()",
    "lineno": 5,
    "namespace": "__extends",
    "origin": {
      "!span": "170[4:11]-174[4:15]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubTwo.prototype.constructor",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubEleven.prototype.constructor",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubTwo",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubOne",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubEleven",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "prototype",
    "addr": "/prototype/",
    "kind": "v",
    "lineno": 7,
    "namespace": "SubOne.prototype.constructor",
    "origin": {
      "!span": "252[6:8]-261[6:17]"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "Top",
    "addr": "/Top/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10,
    "origin": {
      "!span": "284[9:4]-287[9:7]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "topMethod",
    "addr": "/topMethod/",
    "kind": "f",
    "type": "string function()",
    "lineno": 12,
    "namespace": "Top.prototype",
    "origin": {
      "!span": "340[11:16]-349[11:25]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "topStatic",
    "addr": "/topStatic/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "Top",
    "origin": {
      "!span": "386[12:6]-395[12:15]",
      "!type": "number"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "constructor",
    "addr": "/SubOne/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 17,
    "namespace": "SubOne.prototype",
    "origin": {
      "!span": "427[16:4]-433[16:10]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "SubOne",
    "addr": "/SubOne/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 17,
    "origin": {
      "!span": "427[16:4]-433[16:10]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne",
    "origin": {
      "!span": "474[17:18]-477[17:21]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne.prototype.constructor",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne.prototype.constructor",
    "origin": {
      "!span": "474[17:18]-477[17:21]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven.prototype.constructor",
    "origin": {
      "!span": "486[17:30]-492[17:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodOne",
    "addr": "/methodOne/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype.constructor.prototype",
    "origin": {
      "!span": "550[19:19]-559[19:28]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodOne",
    "addr": "/methodOne/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype",
    "origin": {
      "!span": "550[19:19]-559[19:28]",
      "!type": "fn() -> number"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "SubTwo",
    "addr": "/SubTwo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 24,
    "origin": {
      "!span": "618[23:4]-624[23:10]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "constructor",
    "addr": "/SubTwo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 24,
    "namespace": "SubTwo.prototype",
    "origin": {
      "!span": "618[23:4]-624[23:10]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo.prototype.constructor",
    "origin": {
      "!span": "677[24:30]-683[24:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo.prototype.constructor",
    "origin": {
      "!span": "665[24:18]-668[24:21]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo",
    "origin": {
      "!span": "677[24:30]-683[24:36]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo",
    "origin": {
      "!span": "665[24:18]-668[24:21]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodTwo",
    "addr": "/methodTwo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype",
    "origin": {
      "!span": "741[26:19]-750[26:28]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodTwo",
    "addr": "/methodTwo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype.constructor.prototype",
    "origin": {
      "!span": "741[26:19]-750[26:28]",
      "!type": "fn()"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "constructor",
    "addr": "/SubEleven/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 31,
    "namespace": "SubEleven.prototype",
    "origin": {
      "!span": "811[30:4]-820[30:13]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "SubEleven",
    "addr": "/SubEleven/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 31,
    "origin": {
      "!span": "811[30:4]-820[30:13]",
      "!type": "fn(arg: bool)"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "namespace": "SubEleven.prototype.constructor",
    "origin": {
      "!span": "864[31:21]-867[31:24]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "boolean",
    "lineno": 32,
    "namespace": "SubEleven",
    "origin": {
      "!span": "864[31:21]-867[31:24]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodEleven",
    "addr": "/methodEleven/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype.constructor.prototype",
    "origin": {
      "!span": "951[33:22]-963[33:34]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "methodEleven",
    "addr": "/methodEleven/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype",
    "origin": {
      "!span": "951[33:22]-963[33:34]",
      "!type": "fn() -> string"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "one",
    "addr": "/one/",
    "kind": "v",
    "type": "SubOne",
    "lineno": 38,
    "origin": {
      "!span": "1047[37:19]-1050[37:22]",
      "!type": "+SubOne"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "two",
    "addr": "/two/",
    "kind": "v",
    "type": "SubTwo",
    "lineno": 38,
    "origin": {
      "!span": "1071[37:43]-1074[37:46]",
      "!type": "+SubTwo"
    },
    "tagfile": "__DIR__/extends.js"
  },
  {
    "name": "elf",
    "addr": "/elf/",
    "kind": "v",
    "type": "SubEleven",
    "lineno": 38,
    "origin": {
      "!span": "1096[37:68]-1099[37:71]",
      "!type": "+SubEleven"
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
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubEleven.prototype.constructor
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubTwo
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubOne
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubEleven
prototype	__DIR__/extends.js	/prototype/;"	v	lineno:7	namespace:SubOne.prototype.constructor
Top	__DIR__/extends.js	/Top/;"	f	lineno:10	type:void function()
topMethod	__DIR__/extends.js	/topMethod/;"	f	lineno:12	namespace:Top.prototype	type:string function()
topStatic	__DIR__/extends.js	/topStatic/;"	v	lineno:13	namespace:Top	type:number
constructor	__DIR__/extends.js	/SubOne/;"	f	lineno:17	namespace:SubOne.prototype	type:void function(bool)
SubOne	__DIR__/extends.js	/SubOne/;"	f	lineno:17	type:void function(bool)
arg	__DIR__/extends.js	/arg/;"	v	lineno:18	namespace:SubOne	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubOne	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubOne.prototype.constructor	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:18	namespace:SubOne.prototype.constructor	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubEleven	type:boolean
argOne	__DIR__/extends.js	/argOne/;"	v	lineno:18	namespace:SubEleven.prototype.constructor	type:boolean
methodOne	__DIR__/extends.js	/methodOne/;"	f	lineno:20	namespace:SubOne.prototype.constructor.prototype	type:number function()
methodOne	__DIR__/extends.js	/methodOne/;"	f	lineno:20	namespace:SubOne.prototype	type:number function()
SubTwo	__DIR__/extends.js	/SubTwo/;"	f	lineno:24	type:void function(bool)
constructor	__DIR__/extends.js	/SubTwo/;"	f	lineno:24	namespace:SubTwo.prototype	type:void function(bool)
argTwo	__DIR__/extends.js	/argTwo/;"	v	lineno:25	namespace:SubTwo.prototype.constructor	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:25	namespace:SubTwo.prototype.constructor	type:boolean
argTwo	__DIR__/extends.js	/argTwo/;"	v	lineno:25	namespace:SubTwo	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:25	namespace:SubTwo	type:boolean
methodTwo	__DIR__/extends.js	/methodTwo/;"	f	lineno:27	namespace:SubTwo.prototype	type:void function()
methodTwo	__DIR__/extends.js	/methodTwo/;"	f	lineno:27	namespace:SubTwo.prototype.constructor.prototype	type:void function()
constructor	__DIR__/extends.js	/SubEleven/;"	f	lineno:31	namespace:SubEleven.prototype	type:void function(bool)
SubEleven	__DIR__/extends.js	/SubEleven/;"	f	lineno:31	type:void function(bool)
arg	__DIR__/extends.js	/arg/;"	v	lineno:32	namespace:SubEleven.prototype.constructor	type:boolean
arg	__DIR__/extends.js	/arg/;"	v	lineno:32	namespace:SubEleven	type:boolean
methodEleven	__DIR__/extends.js	/methodEleven/;"	f	lineno:34	namespace:SubEleven.prototype.constructor.prototype	type:string function()
methodEleven	__DIR__/extends.js	/methodEleven/;"	f	lineno:34	namespace:SubEleven.prototype	type:string function()
one	__DIR__/extends.js	/one/;"	v	lineno:38	type:SubOne
two	__DIR__/extends.js	/two/;"	v	lineno:38	type:SubTwo
elf	__DIR__/extends.js	/elf/;"	v	lineno:38	type:SubEleven
```
