```js
var p = new Promise(function(accept, reject) {
  reject; //: fn(reason: ?)
  accept({x: 20});
});

p.then(function(value) {
  value; //:: {x: number}
}).then(function(value) {
  value; //:: {x: number}
});

var p2 = new Promise(function(acc) { acc("hi"); });

Promise.all([p2]).then(function(value) {
  value; //: [string]
  return Promise.resolve(33);
}).then(function(value) {
  value; //: number
});

var p3 = Promise.resolve(10);

p3.then(function(value) {
  value; //: number
  return true;
}).then(function(value) {
  value; //: bool
});
```
```json
[
  {
    "id": "b48ac480-90bd-11e5-81eb-b36164255f92",
    "name": "p",
    "addr": "/p/",
    "kind": "v",
    "type": "Promise",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "b48ac481-90bd-11e5-81eb-b36164255f92",
    "name": "p2",
    "addr": "/p2/",
    "kind": "v",
    "type": "Promise",
    "lineno": 12,
    "origin": {
      "!span": "211[11:4]-213[11:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "b48aeb90-90bd-11e5-81eb-b36164255f92",
    "name": "p3",
    "addr": "/p3/",
    "kind": "v",
    "type": "Promise",
    "lineno": 21,
    "origin": {
      "!span": "408[20:4]-410[20:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "b48aeb92-90bd-11e5-81eb-b36164255f92",
    "name": ":t",
    "kind": "v",
    "type": "number",
    "namespace": "Promise",
    "parent": "b48aeb91-90bd-11e5-81eb-b36164255f92",
    "origin": {
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "b48aeb93-90bd-11e5-81eb-b36164255f92",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "Promise.:t",
    "parent": "b48aeb92-90bd-11e5-81eb-b36164255f92",
    "origin": {
      "!span": "85[2:10]-86[2:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  }
]
```
```ctags
p	__DIR__/promise.js	/p/;"	v	lineno:1	type:Promise
p2	__DIR__/promise.js	/p2/;"	v	lineno:12	type:Promise
p3	__DIR__/promise.js	/p3/;"	v	lineno:21	type:Promise
:t	__DIR__/promise.js	//;"	v	namespace:Promise	type:number
x	__DIR__/promise.js	/x/;"	v	lineno:3	namespace:Promise.:t	type:number
```
