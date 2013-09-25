```js
function A() {}
A.prototype.prop_A = 1;
function B() {}
B.prototype = new A;
B.prototype.prop_B = 2;
function C() {}
C.prototype = new A;
C.prototype.prop_C = 3;

(new A).prop_ //+ prop_A
;
(new B).prop_ //+ prop_A, prop_B
;
(new C).prop_ //+ prop_A, prop_C
```
```json
[
  {
    "name": "A",
    "addr": "/function A\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1
  },
  {
    "name": "prop_A",
    "addr": "/prop_A/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "A.prototype"
  },
  {
    "name": "B",
    "addr": "/function B\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 3
  },
  {
    "name": "prop_B",
    "addr": "/prop_B/",
    "kind": "v",
    "type": "number",
    "lineno": 5,
    "namespace": "B.prototype"
  },
  {
    "name": "C",
    "addr": "/function C\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 6
  },
  {
    "name": "prop_C",
    "addr": "/prop_C/",
    "kind": "v",
    "type": "number",
    "lineno": 8,
    "namespace": "C.prototype"
  }
]
```
```ctags
A		/function A\(\) \{\}/;'	f	lineno:1	type:void function()

prop_A		/prop_A/;'	v	lineno:2	namespace:A.prototype	type:number

B		/function B\(\) \{\}/;'	f	lineno:3	type:void function()

prop_B		/prop_B/;'	v	lineno:5	namespace:B.prototype	type:number

C		/function C\(\) \{\}/;'	f	lineno:6	type:void function()

prop_C		/prop_C/;'	v	lineno:8	namespace:C.prototype	type:number
```
