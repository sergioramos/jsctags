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
    "id": "fff54cd0-7aee-11e6-90e8-29f6f6258427",
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
    "id": "fff59af1-7aee-11e6-90e8-29f6f6258427",
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "lineno": 8,
    "parent": "fff59af0-7aee-11e6-90e8-29f6f6258427",
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
