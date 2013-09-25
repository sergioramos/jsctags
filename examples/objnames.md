```js
function Ctor1() { this.x = 10; }
Ctor1.prototype = {a: 1};

function Ctor2() {}

var singleton = {a: 10, b: 20}; //: singleton

new Ctor1(); //: Ctor1
new Ctor2(); //: Ctor2
```
```json
[
  {
    "name": "Ctor1",
    "addr": "/function Ctor1\(\) \{ this\.x = 10; \}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 2,
    "namespace": "Ctor1.prototype"
  },
  {
    "name": "Ctor2",
    "addr": "/function Ctor2\(\) \{\}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 4
  },
  {
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton"
  },
  {
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "singleton"
  }
]
```
```ctags
Ctor1		/function Ctor1\(\) \{ this\.x = 10; \}/;'	f	lineno:1	type:void function()

a		/a/;'	v	lineno:2	namespace:Ctor1.prototype	type:number

Ctor2		/function Ctor2\(\) \{\}/;'	f	lineno:4	type:void function()

a		/a/;'	v	lineno:6	namespace:singleton	type:number

b		/b/;'	v	lineno:6	namespace:singleton	type:number
```
