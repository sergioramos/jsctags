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
    "name": "Ctor",
    "addr": "/Ctor/",
    "kind": "f",
    "type": "Ctor function()",
    "lineno": 4,
    "origin": {
      "!span": "112[3:9]-116[3:13]",
      "!type": "fn() -> +Ctor"
    },
    "tagfile": "__DIR__/ctorpattern.js"
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "Ctor",
    "origin": {
      "!span": "178[5:7]-181[5:10]",
      "!type": "number"
    },
    "tagfile": "__DIR__/ctorpattern.js"
  }
]
```
```ctags
Ctor	__DIR__/ctorpattern.js	/Ctor/;"	f	lineno:4	type:Ctor function()
foo	__DIR__/ctorpattern.js	/foo/;"	v	lineno:6	namespace:Ctor	type:number
```
