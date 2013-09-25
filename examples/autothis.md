```js
function Bar() { this.prop = 10; }
Bar.prototype.hallo = function() {
  this; //: Bar
  this.prop; //: number
};

Bar.prototype.fn2 = function() {
  this; //: Date
};

Date.prototype.fn2 = Bar.prototype.fn2;
new Date().fn2();
```
```json
[
  {
    "name": "Bar",
    "addr": "/function Bar\(\) \{ this\.prop = 10; \}/",
    "kind": "f",
    "type": "void function()",
    "lineno": 1
  },
  {
    "name": "hallo",
    "addr": "/function\(\) \{/",
    "kind": "f",
    "type": "void function()",
    "lineno": 2,
    "namespace": "Bar.prototype"
  },
  {
    "name": "fn2",
    "addr": "/function\(\) \{/",
    "kind": "f",
    "type": "void function()",
    "lineno": 7,
    "namespace": "Date.prototype"
  }
]
```
```ctags
Bar		/function Bar\(\) \{ this\.prop = 10; \}/;'	f	lineno:1	type:void function()

hallo		/function\(\) \{/;'	f	lineno:2	namespace:Bar.prototype	type:void function()

fn2		/function\(\) \{/;'	f	lineno:7	namespace:Date.prototype	type:void function()
```
