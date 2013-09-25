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
    "addr": "/function\(child, parent\) \{/",
    "kind": "f",
    "type": "void function(SubEleven, SubOne)",
    "lineno": 3
  },
  {
    "name": "Top",
    "addr": "/function Top\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 11
  },
  {
    "name": "topMethod",
    "addr": "/function\(\) \{return \"hey\";\}/",
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
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubEleven.prototype"
  },
  {
    "name": "argOne",
    "addr": "/argOne/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "namespace": "SubOne.prototype"
  },
  {
    "name": "SubOne",
    "addr": "/function SubOne\(arg\) \{ this\.argOne = arg; \}/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 18
  },
  {
    "name": "methodOne",
    "addr": "/function\(\) \{return 11;\}/",
    "kind": "f",
    "type": "number function()",
    "lineno": 20,
    "namespace": "SubOne.prototype"
  },
  {
    "name": "argTwo",
    "addr": "/argTwo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "namespace": "SubTwo.prototype"
  },
  {
    "name": "SubTwo",
    "addr": "/function SubTwo\(arg\) \{ this\.argTwo = arg; \}/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 25
  },
  {
    "name": "methodTwo",
    "addr": "/function\(\) \{return null;\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 27,
    "namespace": "SubTwo.prototype"
  },
  {
    "name": "SubEleven",
    "addr": "/function SubEleven\(arg\) \{ SubOne\.call\(this, arg\); \}/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 32
  },
  {
    "name": "methodEleven",
    "addr": "/function\(\) \{return \"blah\";\}/",
    "kind": "f",
    "type": "string function()",
    "lineno": 34,
    "namespace": "SubEleven.prototype"
  }
]
```
```ctags
__extends		/function\(child, parent\) \{/;'	f	lineno:3	type:void function(SubEleven, SubOne)

Top		/function Top\(\) \{\}/;'	f	lineno:11	type:void function()

topMethod		/function\(\) \{return "hey";\}/;'	f	lineno:12	namespace:Top.prototype	type:string function()

topStatic		/topStatic/;'	v	lineno:13	namespace:Top	type:number

argOne		/argOne/;'	v	lineno:18	namespace:SubEleven.prototype	type:boolean

argOne		/argOne/;'	v	lineno:18	namespace:SubOne.prototype	type:boolean

SubOne		/function SubOne\(arg\) \{ this\.argOne = arg; \}/;'	f	lineno:18	type:void function(bool)

methodOne		/function\(\) \{return 11;\}/;'	f	lineno:20	namespace:SubOne.prototype	type:number function()

argTwo		/argTwo/;'	v	lineno:25	namespace:SubTwo.prototype	type:boolean

SubTwo		/function SubTwo\(arg\) \{ this\.argTwo = arg; \}/;'	f	lineno:25	type:void function(bool)

methodTwo		/function\(\) \{return null;\}/;'	f	lineno:27	namespace:SubTwo.prototype	type:void function()

SubEleven		/function SubEleven\(arg\) \{ SubOne\.call\(this, arg\); \}/;'	f	lineno:32	type:void function(bool)

methodEleven		/function\(\) \{return "blah";\}/;'	f	lineno:34	namespace:SubEleven.prototype	type:string function()
```
