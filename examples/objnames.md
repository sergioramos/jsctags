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
