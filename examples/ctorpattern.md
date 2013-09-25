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
    "addr": "/function Ctor\(\) \{/",
    "kind": "f",
    "type": "+Ctor function()",
    "lineno": 4
  },
  {
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 6,
    "namespace": "Ctor.prototype"
  }
]
```
```ctags
Ctor		/function Ctor\(\) \{/;'	f	lineno:4	type:+Ctor function()

foo		/foo/;'	v	lineno:6	namespace:Ctor.prototype	type:number
```
