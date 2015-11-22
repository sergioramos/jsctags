```js
// environment=browser
window. //+ document, close, closed, ...
window.document. //+ appendChild, close, createAttribute, ...
document.createElement("test"). //+ addEventListener, appendChild, ...
var newElt = document.createElement("div");
newElt.style.bo; //+ border, borderColor, ... @16

var e_which;
window.addEventListener("mousemove", function(e) { e.which. }); //+ toExponential, toFixed, toString, toFixed @60
```
```json
[
  {
    "id": "2da53230-90cb-11e5-97ca-8b26808fac9c",
    "name": "newElt",
    "addr": "/newElt/",
    "kind": "v",
    "type": "Element",
    "lineno": 5,
    "origin": {
      "!span": "201[4:4]-207[4:10]",
      "!type": "+Element",
      "!data": {
        "isConstructor": false,
        "type": "Element.prototype"
      }
    },
    "tagfile": "__DIR__/hint_browser.js"
  },
  {
    "id": "2da58050-90cb-11e5-97ca-8b26808fac9c",
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "lineno": 8,
    "parent": "2da55940-90cb-11e5-97ca-8b26808fac9c",
    "origin": {
      "!span": "296[7:4]-303[7:11]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint_browser.js"
  }
]
```
```ctags
newElt	__DIR__/hint_browser.js	/newElt/;"	v	lineno:5	type:Element
e_which	__DIR__/hint_browser.js	/e_which/;"	v	lineno:8
```
