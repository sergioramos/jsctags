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
    "id": "b6922f10-9082-11e5-a068-b5b8a272b527",
    "name": "grabbag",
    "addr": "/grabbag/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-11[0:11]"
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "b6925620-9082-11e5-a068-b5b8a272b527",
    "name": "inner",
    "addr": "/inner/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "origin": {
      "!span": "101[4:4]-106[4:9]",
      "!type": "number"
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "b6925621-9082-11e5-a068-b5b8a272b527",
    "name": "simple",
    "addr": "/simple/",
    "kind": "v",
    "lineno": 8,
    "origin": {
      "!span": "155[7:4]-161[7:10]"
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  },
  {
    "id": "b6925622-9082-11e5-a068-b5b8a272b527",
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "type": "string",
    "lineno": 9,
    "namespace": "simple",
    "parent": "b6925621-9082-11e5-a068-b5b8a272b527",
    "origin": {
      "!span": "175[8:7]-180[8:12]",
      "!type": "string"
    },
    "tagfile": "__DIR__/cautiouspropagation.js"
  }
]
```
```ctags
grabbag	__DIR__/cautiouspropagation.js	/grabbag/;"	v	lineno:1
inner	__DIR__/cautiouspropagation.js	/inner/;"	v	lineno:5	type:number
simple	__DIR__/cautiouspropagation.js	/simple/;"	v	lineno:8
<i>	__DIR__/cautiouspropagation.js	/foo\(\)/;"	v	lineno:9	namespace:simple	type:string
```
