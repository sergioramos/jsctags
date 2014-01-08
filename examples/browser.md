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
    "type": "+Element",
    "lineno": 5
  },
  {
    "name": "e_which",
    "addr": "/e_which/",
    "kind": "v",
    "type": "number",
    "lineno": 9
  }
]
```
```ctags
newElt		/newElt/;"	v	lineno:5	type:+Element

e_which		/e_which/;"	v	lineno:9	type:number
```
