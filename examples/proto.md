```js
function Foo(x) {
  this.x = x;
  this.y = [1];
}
Foo; //: fn(x: bool)

Foo.prototype = {
  makeString: function() { return "hi"; },
  bar: 13
};

var z = new Foo(true); //:: {x: bool, y: [number]}

z.toString; //: fn() -> string

z.bar; //: number
```
```json
[
  {
    "name": "Foo",
    "addr": "/Foo/",
    "kind": "f",
    "type": "void function(bool)",
    "lineno": 1
  },
  {
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 2,
    "namespace": "Foo"
  },
  {
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "[number]",
    "lineno": 3,
    "namespace": "Foo"
  },
  {
    "name": "makeString",
    "addr": "/makeString/",
    "kind": "f",
    "type": "string function()",
    "lineno": 8,
    "namespace": "Foo.prototype"
  },
  {
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "namespace": "Foo.prototype"
  },
  {
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "+Foo",
    "lineno": 12
  }
]
```
```ctags
Foo		/Foo/;"	f	lineno:1	type:void function(bool)

x		/x/;"	v	lineno:2	namespace:Foo	type:boolean

y		/y/;"	v	lineno:3	namespace:Foo	type:[number]

makeString		/makeString/;"	f	lineno:8	namespace:Foo.prototype	type:string function()

bar		/bar/;"	v	lineno:9	namespace:Foo.prototype	type:number

z		/z/;"	v	lineno:12	type:+Foo
```
