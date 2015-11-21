```js
// environment=underscore

var cloneObjOrig = {a: 1}, cloneObjCopy = _.clone(cloneObjOrig);
cloneObjOrig.a; //: number
cloneObjCopy.a; //: number

var extendObj = {a: 1, b: true};
_.extend(extendObj, {c: ''}, {d: 2});
extendObj; //:: {a: number, b: bool, c: string, d: number}

var defaulted = {x: 10};
_.defaults(defaulted, {y: ""});
defaulted.x; //: number
defaulted.y; //: string

_.has({}, "foo"); //: bool
_.isNaN(NaN); //: bool

var tapped;
_.tap(11, function(a) { tapped = a; });
tapped; //: number

_.reduce(["foo", "bar"], function(sum, s) { return sum + s.length; }, 0); //: number
_.map([1, 2, 3], toString); //: [string]
_.each([true, false], function(val, i) {
  val; //: bool
  i; //: number
  this.aa; //: number
}, {aa: 4});
```
```json
[
  {
    "id": "4a97b380-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "cloneObjOrig",
    "addr": "/cloneObjOrig/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "31[2:4]-43[2:16]"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a97da90-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "cloneObjOrig",
    "parent": "4a97b380-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "47[2:20]-48[2:21]",
      "!type": "number"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a9801a4-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "cloneObjCopy",
    "addr": "/cloneObjCopy/",
    "kind": "v",
    "lineno": 3,
    "parent": "4a9801a3-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "54[2:27]-66[2:39]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a97da91-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "extendObj",
    "addr": "/extendObj/",
    "kind": "v",
    "lineno": 7,
    "origin": {
      "!span": "151[6:4]-160[6:13]"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a97da92-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "extendObj",
    "parent": "4a97da91-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "164[6:17]-165[6:18]",
      "!type": "number"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a9801a0-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "boolean",
    "lineno": 7,
    "namespace": "extendObj",
    "parent": "4a97da91-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "170[6:23]-171[6:24]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a9801a1-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "defaulted",
    "addr": "/defaulted/",
    "kind": "v",
    "lineno": 11,
    "origin": {
      "!span": "282[10:4]-291[10:13]"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a9801a2-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 11,
    "namespace": "defaulted",
    "parent": "4a9801a1-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "295[10:17]-296[10:18]",
      "!type": "number"
    },
    "tagfile": "__DIR__/underscore.js"
  },
  {
    "id": "4a9801a5-8ffa-11e5-8b17-d94fcd2f01e1",
    "name": "tapped",
    "addr": "/tapped/",
    "kind": "v",
    "lineno": 19,
    "parent": "4a9801a3-8ffa-11e5-8b17-d94fcd2f01e1",
    "origin": {
      "!span": "439[18:4]-445[18:10]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/underscore.js"
  }
]
```
```ctags
cloneObjOrig	__DIR__/underscore.js	/cloneObjOrig/;"	v	lineno:3
a	__DIR__/underscore.js	/a/;"	v	lineno:3	namespace:cloneObjOrig	type:number
cloneObjCopy	__DIR__/underscore.js	/cloneObjCopy/;"	v	lineno:3
extendObj	__DIR__/underscore.js	/extendObj/;"	v	lineno:7
a	__DIR__/underscore.js	/a/;"	v	lineno:7	namespace:extendObj	type:number
b	__DIR__/underscore.js	/b/;"	v	lineno:7	namespace:extendObj	type:boolean
defaulted	__DIR__/underscore.js	/defaulted/;"	v	lineno:11
x	__DIR__/underscore.js	/x/;"	v	lineno:11	namespace:defaulted	type:number
tapped	__DIR__/underscore.js	/tapped/;"	v	lineno:19
```
