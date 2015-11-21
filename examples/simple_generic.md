```js
function last(arr) { return arr[arr.length - 1]; }

last([1, 2, 3]); //: number
last(["a", "b", "c"]); //: string

function map(arr, f) {
  var res = [];
  for (var i = 0; i < arr.length; ++i) res.push(f(arr[i]));
  return res;
}

map([1, 2, 3], function() { return "X"; }); //: [string]
map([1, 2, 3], function() { return true; }); //: [bool]
```
```json
[
  {
    "id": "5ef8b150-909d-11e5-a887-c10cc3d4bcc3",
    "name": "last",
    "addr": "last",
    "kind": "f",
    "type": "!0.<i> function(Array[number]|[string])",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-13[0:13]",
      "!type": "fn(arr: [number]|[string]) -> !0.<i>",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8d860-909d-11e5-a887-c10cc3d4bcc3",
    "name": "arr",
    "addr": "arr",
    "kind": "v",
    "type": "[number]|[string]",
    "lineno": 1,
    "namespace": "last",
    "parent": "5ef8b150-909d-11e5-a887-c10cc3d4bcc3",
    "origin": {
      "!span": "14[0:14]-17[0:17]",
      "!type": "[number]|[string]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8ff70-909d-11e5-a887-c10cc3d4bcc3",
    "name": "map",
    "addr": "map",
    "kind": "f",
    "type": "string|fn() -> bool) -> [?] function(Array[number], fn()",
    "lineno": 6,
    "origin": {
      "!span": "124[5:9]-127[5:12]",
      "!type": "fn(arr: [number], f: fn() -> string|fn() -> bool) -> [?]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8ff71-909d-11e5-a887-c10cc3d4bcc3",
    "name": "arr",
    "addr": "arr",
    "kind": "v",
    "type": "[number]",
    "lineno": 6,
    "namespace": "map",
    "parent": "5ef8ff70-909d-11e5-a887-c10cc3d4bcc3",
    "origin": {
      "!span": "128[5:13]-131[5:16]",
      "!type": "[number]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8ff72-909d-11e5-a887-c10cc3d4bcc3",
    "name": "f",
    "addr": "f",
    "kind": "f",
    "type": "boolean function()",
    "lineno": 6,
    "namespace": "map",
    "parent": "5ef8ff70-909d-11e5-a887-c10cc3d4bcc3",
    "origin": {
      "!span": "133[5:18]-134[5:19]",
      "!type": "fn() -> bool",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8ff74-909d-11e5-a887-c10cc3d4bcc3",
    "name": "res",
    "addr": "res",
    "kind": "v",
    "type": "[bool]",
    "lineno": 7,
    "namespace": "map",
    "parent": "5ef8ff70-909d-11e5-a887-c10cc3d4bcc3",
    "origin": {
      "!span": "144[6:6]-147[6:9]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  },
  {
    "id": "5ef8ff73-909d-11e5-a887-c10cc3d4bcc3",
    "name": "i",
    "addr": "i",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "map",
    "parent": "5ef8ff70-909d-11e5-a887-c10cc3d4bcc3",
    "origin": {
      "!span": "165[7:11]-166[7:12]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/simple_generic.js"
  }
]
```
```ctags
last	__DIR__/simple_generic.js	last;"	f	lineno:1	type:!0.<i> function(Array[number]|[string])
arr	__DIR__/simple_generic.js	arr;"	v	lineno:1	namespace:last	type:[number]|[string]
map	__DIR__/simple_generic.js	map;"	f	lineno:6	type:string|fn() -> bool) -> [?] function(Array[number], fn()
arr	__DIR__/simple_generic.js	arr;"	v	lineno:6	namespace:map	type:[number]
f	__DIR__/simple_generic.js	f;"	f	lineno:6	namespace:map	type:boolean function()
res	__DIR__/simple_generic.js	res;"	v	lineno:7	namespace:map	type:[bool]
i	__DIR__/simple_generic.js	i;"	v	lineno:8	namespace:map	type:number
```
