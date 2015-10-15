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
    "name": "inner",
    "addr": "/inner/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/cautiouspropagation.js"
  },
  {
    "name": "<i>",
    "addr": "/foo\(\)/",
    "kind": "v",
    "type": "string",
    "lineno": 9,
    "namespace": "simple",
    "tagfile": "/usr/local/lib/node_modules/jsctags/test/cases/cautiouspropagation.js"
  }
]
```
```ctags
<i>	/usr/local/lib/node_modules/jsctags/test/cases/cautiouspropagation.js	/foo\(\)/;"	v	lineno:9	namespace:simple	type:string
inner	/usr/local/lib/node_modules/jsctags/test/cases/cautiouspropagation.js	/inner/;"	v	lineno:5	type:number
```
