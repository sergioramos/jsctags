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
    "lineno": 3
  },
  {
    "name": "Top",
    "addr": "/Top/",
    "kind": "f",
    "type": "void function()",
    "lineno": 10
  },
  {
    "name": "topMethod",
    "addr": "/topMethod/",
    "kind": "f",
    "type": "string function()",
    "lineno": 12,
    "namespace": "Top.prototype"
  },
  {
    "name": "topStatic",
    "addr": "/topStatic/",
    "kind": "v",
    "type": "number",
    "lineno": 13,
    "namespace": "Top"
  },
  {
    "name": "SubOne",
    "addr": "/SubOne/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 17
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven"
  },
  {
    "name": "methodOne",
    "addr": "/methodOne/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype"
  },
  {
    "name": "SubTwo",
    "addr": "/SubTwo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 24
  },
  {
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo"
  },
  {
    "name": "methodTwo",
    "addr": "/methodTwo/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype"
  },
  {
    "name": "SubEleven",
    "addr": "/SubEleven/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 31
  },
  {
    "name": "methodEleven",
    "addr": "/methodEleven/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype"
  },
  {
    "name": "one",
    "addr": "/one/",
    "kind": "v",
    "type": "+SubOne",
    "lineno": 38
  },
  {
    "name": "two",
    "addr": "/two/",
    "kind": "v",
    "type": "+SubTwo",
    "lineno": 38
  },
  {
    "name": "elf",
    "addr": "/elf/",
    "kind": "v",
    "type": "+SubEleven",
    "lineno": 38
  }
]
```
```ctags
__extends		/__extends/;"	f	lineno:3	type:void function(fn(arg: bool)

Top		/Top/;"	f	lineno:10	type:void function()

topMethod		/topMethod/;"	f	lineno:12	namespace:Top.prototype	type:string function()

topStatic		/topStatic/;"	v	lineno:13	namespace:Top	type:number

SubOne		/SubOne/;"	f	lineno:17	type:void function(bool)

argOne		/argOne/;"	v	lineno:18	namespace:SubOne	type:boolean

argOne		/argOne/;"	v	lineno:18	namespace:SubEleven	type:boolean

methodOne		/methodOne/;"	f	lineno:20	namespace:SubOne.prototype	type:number function()

SubTwo		/SubTwo/;"	f	lineno:24	type:void function(bool)

argTwo		/argTwo/;"	v	lineno:25	namespace:SubTwo	type:boolean

methodTwo		/methodTwo/;"	f	lineno:27	namespace:SubTwo.prototype	type:void function()

SubEleven		/SubEleven/;"	f	lineno:31	type:void function(bool)

methodEleven		/methodEleven/;"	f	lineno:34	namespace:SubEleven.prototype	type:string function()

one		/one/;"	v	lineno:38	type:+SubOne

two		/two/;"	v	lineno:38	type:+SubTwo

elf		/elf/;"	v	lineno:38	type:+SubEleven
```
