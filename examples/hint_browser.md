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
    "id": "3bd62d70-90c4-11e5-8f63-1104abb036fb",
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
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/hint_browser.js"
  },
  {
    "id": "3bd65481-90c4-11e5-8f63-1104abb036fb",
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "lineno": 8,
    "parent": "3bd65480-90c4-11e5-8f63-1104abb036fb",
    "origin": {
      "!span": "296[7:4]-303[7:11]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "isPlainObject": false
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
