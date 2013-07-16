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
    "name": "last",
    "addr": "/function last\(arr\) \{ return arr\[arr\.length \- 1\]; \}/",
    "kind": "f",
    "type": "!0.<i> function(Array[string])",
    "lineno": 1
  },
  {
    "name": "map",
    "addr": "/function map\(arr, f\) \{/",
    "kind": "f",
    "type": "Array function(Array[number], bool function())",
    "lineno": 6
  }
]
```
