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
    "id": "a565a970-90bd-11e5-b579-734e720d55f0",
    "name": "newElt",
    "addr": "/newElt/",
    "kind": "v",
    "type": "Element",
    "lineno": 5,
    "origin": {
      "!span": "63[4:4]-69[4:10]",
      "!type": "+Element",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/browser.js"
  },
  {
    "id": "a565d080-90bd-11e5-b579-734e720d55f0",
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "type": "number",
    "lineno": 9,
    "origin": {
      "!span": "153[8:4]-160[8:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/browser.js"
  }
]
```
```ctags
newElt	__DIR__/browser.js	/newElt/;"	v	lineno:5	type:Element
e_which	__DIR__/browser.js	/e_which/;"	v	lineno:9	type:number
```
