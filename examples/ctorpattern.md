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
    "id": "eafe0560-7aee-11e6-91f0-8ffe2684566e",
    "name": "Ctor",
    "addr": "/Ctor/",
    "kind": "f",
    "type": "Ctor function()",
    "lineno": 4,
    "origin": {
      "!span": "112[3:9]-116[3:13]",
      "!type": "fn() -> +Ctor",
      "!data": {
        "isConstructor": true,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/ctorpattern.js"
  },
  {
    "id": "eafe7a90-7aee-11e6-91f0-8ffe2684566e",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "Ctor",
    "parent": "eafe0560-7aee-11e6-91f0-8ffe2684566e",
    "origin": {
      "!span": "178[5:7]-181[5:10]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/ctorpattern.js"
  }
]
```
```ctags
Ctor	__DIR__/ctorpattern.js	/Ctor/;"	f	lineno:4	type:Ctor function()
foo	__DIR__/ctorpattern.js	/foo/;"	v	lineno:6	namespace:Ctor	type:number
```
