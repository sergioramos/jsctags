```js
// environment=browser

window.document.body; //: Element

var newElt = document.createElement("div"); //: Element

newElt.style.border; //: string

var e_which;
window.addEventListener("mousemove", function(e) { e_which = e.which; });
e_which; //: number
```
```json
[
  {
    "name": "newElt",
    "addr": "/newElt/",
    "kind": "v",
    "type": "Element",
    "lineno": 5,
    "origin": {
      "!span": "63[4:4]-69[4:10]",
      "!type": "+Element"
    },
    "tagfile": "__DIR__/browser.js"
  },
  {
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "origin": {
      "!span": "153[8:4]-160[8:11]",
      "!type": "number"
    },
    "tagfile": "__DIR__/browser.js"
  }
]
```
```ctags
newElt	__DIR__/browser.js	/newElt/;"	v	lineno:5	type:Element
e_which	__DIR__/browser.js	/e_which/;"	v	lineno:9	type:number
```
