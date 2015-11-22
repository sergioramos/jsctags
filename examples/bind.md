```js
function f(a, b, c, d) { return a + b + c + d; }
var g = f.bind(null, 1, 2);

g(2, 3); //: number
g; //: fn(c: number, d: number) -> number

function h(a) { return {a: a, th: this}; }
var i = h.bind({str: "foo"}, 2);

i.call({x: 1}); //:: {a: number, th: {str: string}}

var o = {i: i};
o.i(); //:: {a: number, th: {str: string}}

function j() { return this; }
var k = j.bind({a: true});

k.call({b: false});
k(); //:: {a: bool}
```
```json
[
  {
    "id": "a43e8e90-90bd-11e5-89f9-995a0a79efef",
    "name": "f",
    "addr": "/f/",
    "kind": "f",
    "type": "number function(number, number, number, number)",
    "lineno": 1,
    "origin": {
      "!span": "9[0:9]-10[0:10]",
      "!type": "fn(a: number, b: number, c: number, d: number) -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43eb5a1-90bd-11e5-89f9-995a0a79efef",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "a43e8e90-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "14[0:14]-15[0:15]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb0-90bd-11e5-89f9-995a0a79efef",
    "name": "c",
    "addr": "/c/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "a43e8e90-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "17[0:17]-18[0:18]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb1-90bd-11e5-89f9-995a0a79efef",
    "name": "d",
    "addr": "/d/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "a43e8e90-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "20[0:20]-21[0:21]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43eb5a0-90bd-11e5-89f9-995a0a79efef",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "f",
    "parent": "a43e8e90-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "11[0:11]-12[0:12]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb2-90bd-11e5-89f9-995a0a79efef",
    "name": "g",
    "addr": "/g/",
    "kind": "f",
    "type": "number function(number, number)",
    "lineno": 2,
    "origin": {
      "!span": "53[1:4]-54[1:5]",
      "!type": "fn(c: number, d: number) -> number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb3-90bd-11e5-89f9-995a0a79efef",
    "name": "h",
    "addr": "/h/",
    "kind": "f",
    "type": "h.!ret function(number)",
    "lineno": 7,
    "origin": {
      "!span": "150[6:9]-151[6:10]",
      "!type": "fn(a: number) -> h.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb4-90bd-11e5-89f9-995a0a79efef",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "number",
    "lineno": 7,
    "namespace": "h",
    "parent": "a43edcb3-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "152[6:11]-153[6:12]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb5-90bd-11e5-89f9-995a0a79efef",
    "name": "i",
    "addr": "/i/",
    "kind": "f",
    "type": "h.!ret function()",
    "lineno": 8,
    "origin": {
      "!span": "188[7:4]-189[7:5]",
      "!type": "fn() -> h.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43f51e0-90bd-11e5-89f9-995a0a79efef",
    "name": "i",
    "addr": "/i/",
    "kind": "f",
    "type": "h.!ret function()",
    "lineno": 8,
    "namespace": "o",
    "parent": "a43edcb6-90bd-11e5-89f9-995a0a79efef",
    "origin": {
      "!span": "188[7:4]-189[7:5]",
      "!type": "fn() -> h.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43edcb6-90bd-11e5-89f9-995a0a79efef",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "lineno": 12,
    "origin": {
      "!span": "275[11:4]-276[11:5]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43f51e1-90bd-11e5-89f9-995a0a79efef",
    "name": "j",
    "addr": "/j/",
    "kind": "f",
    "type": "!this function()",
    "lineno": 15,
    "origin": {
      "!span": "340[14:9]-341[14:10]",
      "!type": "fn() -> !this",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  },
  {
    "id": "a43f78f0-90bd-11e5-89f9-995a0a79efef",
    "name": "k",
    "addr": "/k/",
    "kind": "f",
    "type": "j.!ret function()",
    "lineno": 16,
    "origin": {
      "!span": "365[15:4]-366[15:5]",
      "!type": "fn() -> j.!ret",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/bind.js"
  }
]
```
```ctags
f	__DIR__/bind.js	/f/;"	f	lineno:1	type:number function(number, number, number, number)
b	__DIR__/bind.js	/b/;"	v	lineno:1	namespace:f	type:number
c	__DIR__/bind.js	/c/;"	v	lineno:1	namespace:f	type:number
d	__DIR__/bind.js	/d/;"	v	lineno:1	namespace:f	type:number
a	__DIR__/bind.js	/a/;"	v	lineno:1	namespace:f	type:number
g	__DIR__/bind.js	/g/;"	f	lineno:2	type:number function(number, number)
h	__DIR__/bind.js	/h/;"	f	lineno:7	type:h.!ret function(number)
a	__DIR__/bind.js	/a/;"	v	lineno:7	namespace:h	type:number
i	__DIR__/bind.js	/i/;"	f	lineno:8	type:h.!ret function()
i	__DIR__/bind.js	/i/;"	f	lineno:8	namespace:o	type:h.!ret function()
o	__DIR__/bind.js	/o/;"	v	lineno:12
j	__DIR__/bind.js	/j/;"	f	lineno:15	type:!this function()
k	__DIR__/bind.js	/k/;"	f	lineno:16	type:j.!ret function()
```
