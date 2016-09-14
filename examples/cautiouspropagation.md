```js
var grabbag = {};
grabbag[foo()] = "hi";
grabbag[bar()] = {abc: 10};
grabbag[baz()] = [1, 2, 3];
var inner = 55 || grabbag[quux()];
inner; //: number

var simple = {};
simple[foo()] = "a";
simple[bar()] = "b";
simple[baz()] = "c";
simple[quux()]; //: string
```
```json
[
  {
    "id": "e3068800-7aee-11e6-b130-a38c6991788f",
    "name": "grabbag",
    "addr": "/grabbag/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-11[0:11]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "e306fd30-7aee-11e6-b130-a38c6991788f",
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "lineno": 2,
    "namespace": "grabbag",
    "parent": "e3068800-7aee-11e6-b130-a38c6991788f",
    "origin": {
      "!span": "26[1:8]-31[1:13]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "e30eec70-7aee-11e6-b130-a38c6991788f",
    "name": "abc",
    "addr": "/abc/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "grabbag.<i>",
    "parent": "e306fd30-7aee-11e6-b130-a38c6991788f",
    "origin": {
      "!span": "59[2:18]-62[2:21]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "e30eec71-7aee-11e6-b130-a38c6991788f",
    "name": "inner",
    "addr": "/inner/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "origin": {
      "!span": "101[4:4]-106[4:9]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "e30eec72-7aee-11e6-b130-a38c6991788f",
    "name": "simple",
    "addr": "/simple/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "155[7:4]-161[7:10]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "e30eec73-7aee-11e6-b130-a38c6991788f",
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "type": "string",
    "lineno": 9,
    "namespace": "simple",
    "parent": "e30eec72-7aee-11e6-b130-a38c6991788f",
    "origin": {
      "!span": "175[8:7]-180[8:12]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  }
]
```
```ctags
grabbag	__DIR__/cautiouspropagation.js	/grabbag/;"	v	lineno:1
<i>	__DIR__/cautiouspropagation.js	/foo\(\)/;"	v	lineno:2	namespace:grabbag
abc	__DIR__/cautiouspropagation.js	/abc/;"	v	lineno:3	namespace:grabbag.<i>	type:number
inner	__DIR__/cautiouspropagation.js	/inner/;"	v	lineno:5	type:number
simple	__DIR__/cautiouspropagation.js	/simple/;"	v	lineno:8
<i>	__DIR__/cautiouspropagation.js	/foo\(\)/;"	v	lineno:9	namespace:simple	type:string
```
