```js
// Verify that the binding of `this` to the top scope is overridden by
// the binding to an instance.

function Ctor() {
  if (!(this instanceof Ctor)) return new Ctor();
  this.foo = 20;
}

Ctor().foo; //: number
foo; //: ?
```
```json
[
  {
    "id": "4f7e7160-909d-11e5-be58-21c95a0f3632",
    "name": "Ctor",
    "addr": "Ctor",
    "kind": "f",
    "type": "Ctor function()",
    "lineno": 4,
    "origin": {
      "!span": "112[3:9]-116[3:13]",
      "!type": "fn() -> +Ctor",
      "!data": {
        "isConstructor": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/ctorpattern.js"
  },
  {
    "id": "4f7e9870-909d-11e5-be58-21c95a0f3632",
    "name": "foo",
    "addr": "foo",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "Ctor",
    "parent": "4f7e7160-909d-11e5-be58-21c95a0f3632",
    "origin": {
      "!span": "178[5:7]-181[5:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/ctorpattern.js"
  }
]
```
```ctags
Ctor	__DIR__/ctorpattern.js	Ctor;"	f	lineno:4	type:Ctor function()
foo	__DIR__/ctorpattern.js	foo;"	v	lineno:6	namespace:Ctor	type:number
```
