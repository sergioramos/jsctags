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
    "addr": "/last/",
    "kind": "f",
    "type": "!0.<i> function(Array[string])",
    "lineno": 1
  },
  {
    "name": "map",
    "addr": "/map/",
    "kind": "f",
    "type": "bool) -> [?] function(Array[number], fn()",
    "lineno": 6
  }
]
```
```ctags
last		/last/;"	f	lineno:1	type:!0.<i> function(Array[string])

map		/map/;"	f	lineno:6	type:bool) -> [?] function(Array[number], fn()
```
