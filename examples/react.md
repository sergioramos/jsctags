```js
var a = <a/>;
var b = <n:a n:v />;
var c = <a n:foo="bar"> {value} <b><c /></b></a>;
var d = <a b={" "} c=" " d="&amp;" e="&ampr;" />;
var e = <a
/>;
var f = <日本語></日本語>;
var g = <AbC-def
  test="&#x0026;&#38;">
bar
baz
</AbC-def>;
var h = <a b={x ? <c /> : <d />} />;
var i = <a>{}</a>;
var j = <a>{/* this is a comment */}</a>;
var k = <div>@test content</div>;
var l = <div><br />7x invalid-js-identifier</div>;
var m = <LeftRight left=<a /> right=<b>monkeys /> gorillas</b> />;
var n = <a.b></a.b>;
var o = <a.b.c></a.b.c>;
var p = (<div />) < x;;
var q = <div {...props} />;
var r = <div {...props} post="attribute" />;
var s = <div pre="leading" pre2="attribute" {...props}></div>;
var t = <A aa={aa.bb.cc} bb={bb.cc.dd}><div>{aa.b}</div></A>;
var u = <p>foo <a href="test"> bar</a> baz</p> ;;
var v = <div>{<div {...test} />}</div>;
var x = <div>{ {a} }</div>;
var w = <div>/text</div>;
var y = <div>{a}{b}</div>;
var z = <div pre="leading" {...props} />;
var ç = <path d="M230 80
		A 45 45, 0, 1, 0, 275 125 
    L 275 80 Z"/>;

var arr = [1, 2, 3].map(function(n) {
  return <a>{n}</a>;
});

var f = function() {
  return <a></a>;
};
```
```json
[
  {
    "id": "4665bad0-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "a",
    "addr": "/a/",
    "kind": "v",
    "type": "boolean",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e21-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "boolean",
    "lineno": 3,
    "origin": {
      "!span": "48[2:13]-51[2:16]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e0-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "e",
    "addr": "/e/",
    "kind": "v",
    "type": "boolean",
    "lineno": 5,
    "origin": {
      "!span": "139[4:4]-140[4:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e22-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "test",
    "addr": "/test/",
    "kind": "v",
    "type": "boolean",
    "lineno": 7,
    "origin": {
      "!span": "192[6:20]-196[6:24]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e1-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "g",
    "addr": "/g/",
    "kind": "v",
    "type": "boolean",
    "lineno": 7,
    "origin": {
      "!span": "176[6:4]-177[6:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e2-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "h",
    "addr": "/h/",
    "kind": "v",
    "type": "boolean",
    "lineno": 8,
    "origin": {
      "!span": "241[7:4]-242[7:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e3-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "i",
    "addr": "/i/",
    "kind": "v",
    "type": "boolean",
    "lineno": 9,
    "origin": {
      "!span": "278[8:4]-279[8:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e4-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "j",
    "addr": "/j/",
    "kind": "v",
    "type": "boolean",
    "lineno": 10,
    "origin": {
      "!span": "297[9:4]-298[9:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e5-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "k",
    "addr": "/k/",
    "kind": "v",
    "type": "boolean",
    "lineno": 11,
    "origin": {
      "!span": "339[10:4]-340[10:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e6-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "l",
    "addr": "/l/",
    "kind": "v",
    "type": "boolean",
    "lineno": 12,
    "origin": {
      "!span": "373[11:4]-374[11:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e7-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "m",
    "addr": "/m/",
    "kind": "v",
    "type": "boolean",
    "lineno": 13,
    "origin": {
      "!span": "424[12:4]-425[12:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e23-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "left",
    "addr": "/left/",
    "kind": "v",
    "type": "boolean",
    "lineno": 13,
    "origin": {
      "!span": "439[12:19]-443[12:23]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e8-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "type": "boolean",
    "lineno": 14,
    "origin": {
      "!span": "491[13:4]-492[13:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1e9-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "o",
    "addr": "/o/",
    "kind": "v",
    "type": "boolean",
    "lineno": 15,
    "origin": {
      "!span": "512[14:4]-513[14:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1ea-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "p",
    "addr": "/p/",
    "kind": "v",
    "type": "boolean",
    "lineno": 16,
    "origin": {
      "!span": "537[15:4]-538[15:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1eb-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "q",
    "addr": "/q/",
    "kind": "v",
    "type": "boolean",
    "lineno": 17,
    "origin": {
      "!span": "561[16:4]-562[16:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1ec-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "r",
    "addr": "/r/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "origin": {
      "!span": "589[17:4]-590[17:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e24-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "post",
    "addr": "/post/",
    "kind": "v",
    "type": "boolean",
    "lineno": 18,
    "origin": {
      "!span": "609[17:24]-613[17:28]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4666a530-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "pre2",
    "addr": "/pre2/",
    "kind": "v",
    "type": "string",
    "lineno": 19,
    "origin": {
      "!span": "657[18:27]-661[18:31]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e25-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "pre",
    "addr": "/pre/",
    "kind": "v",
    "type": "string",
    "lineno": 19,
    "origin": {
      "!span": "643[18:13]-646[18:16]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1ed-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "s",
    "addr": "/s/",
    "kind": "v",
    "type": "boolean",
    "lineno": 19,
    "origin": {
      "!span": "634[18:4]-635[18:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4666a531-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "aa",
    "addr": "/aa/",
    "kind": "v",
    "lineno": 20,
    "origin": {
      "!span": "704[19:11]-706[19:13]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": true
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4666a532-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "bb",
    "addr": "/bb/",
    "kind": "v",
    "type": "boolean",
    "lineno": 20,
    "origin": {
      "!span": "718[19:25]-720[19:27]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4665e1ee-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "t",
    "addr": "/t/",
    "kind": "v",
    "type": "boolean",
    "lineno": 20,
    "origin": {
      "!span": "697[19:4]-698[19:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "4666a533-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "href",
    "addr": "/href/",
    "kind": "v",
    "type": "boolean",
    "lineno": 21,
    "origin": {
      "!span": "773[20:18]-777[20:22]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f0-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "u",
    "addr": "/u/",
    "kind": "v",
    "type": "boolean",
    "lineno": 21,
    "origin": {
      "!span": "759[20:4]-760[20:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f1-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "v",
    "addr": "/v/",
    "kind": "v",
    "type": "boolean",
    "lineno": 22,
    "origin": {
      "!span": "809[21:4]-810[21:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f2-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "boolean",
    "lineno": 23,
    "origin": {
      "!span": "849[22:4]-850[22:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f3-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "w",
    "addr": "/w/",
    "kind": "v",
    "type": "boolean",
    "lineno": 24,
    "origin": {
      "!span": "877[23:4]-878[23:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f4-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "y",
    "addr": "/y/",
    "kind": "v",
    "type": "boolean",
    "lineno": 25,
    "origin": {
      "!span": "903[24:4]-904[24:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f5-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "z",
    "addr": "/z/",
    "kind": "v",
    "type": "boolean",
    "lineno": 26,
    "origin": {
      "!span": "930[25:4]-931[25:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "466608f6-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "ç",
    "addr": "/ç/",
    "kind": "v",
    "type": "boolean",
    "lineno": 27,
    "origin": {
      "!span": "972[26:4]-973[26:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  },
  {
    "id": "46667e20-90c4-11e5-ba37-cd84dd8ceb39",
    "name": "arr",
    "addr": "/arr/",
    "kind": "v",
    "type": "[bool]",
    "lineno": 29,
    "origin": {
      "!span": "1052[28:4]-1055[28:7]",
      "!type": "[bool]",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/react.jsx"
  }
]
```
```ctags
a	__DIR__/react.jsx	/a/;"	v	lineno:1	type:boolean
foo	__DIR__/react.jsx	/foo/;"	v	lineno:3	type:boolean
e	__DIR__/react.jsx	/e/;"	v	lineno:5	type:boolean
test	__DIR__/react.jsx	/test/;"	v	lineno:7	type:boolean
g	__DIR__/react.jsx	/g/;"	v	lineno:7	type:boolean
h	__DIR__/react.jsx	/h/;"	v	lineno:8	type:boolean
i	__DIR__/react.jsx	/i/;"	v	lineno:9	type:boolean
j	__DIR__/react.jsx	/j/;"	v	lineno:10	type:boolean
k	__DIR__/react.jsx	/k/;"	v	lineno:11	type:boolean
l	__DIR__/react.jsx	/l/;"	v	lineno:12	type:boolean
m	__DIR__/react.jsx	/m/;"	v	lineno:13	type:boolean
left	__DIR__/react.jsx	/left/;"	v	lineno:13	type:boolean
n	__DIR__/react.jsx	/n/;"	v	lineno:14	type:boolean
o	__DIR__/react.jsx	/o/;"	v	lineno:15	type:boolean
p	__DIR__/react.jsx	/p/;"	v	lineno:16	type:boolean
q	__DIR__/react.jsx	/q/;"	v	lineno:17	type:boolean
r	__DIR__/react.jsx	/r/;"	v	lineno:18	type:boolean
post	__DIR__/react.jsx	/post/;"	v	lineno:18	type:boolean
pre2	__DIR__/react.jsx	/pre2/;"	v	lineno:19	type:string
pre	__DIR__/react.jsx	/pre/;"	v	lineno:19	type:string
s	__DIR__/react.jsx	/s/;"	v	lineno:19	type:boolean
aa	__DIR__/react.jsx	/aa/;"	v	lineno:20
bb	__DIR__/react.jsx	/bb/;"	v	lineno:20	type:boolean
t	__DIR__/react.jsx	/t/;"	v	lineno:20	type:boolean
href	__DIR__/react.jsx	/href/;"	v	lineno:21	type:boolean
u	__DIR__/react.jsx	/u/;"	v	lineno:21	type:boolean
v	__DIR__/react.jsx	/v/;"	v	lineno:22	type:boolean
x	__DIR__/react.jsx	/x/;"	v	lineno:23	type:boolean
w	__DIR__/react.jsx	/w/;"	v	lineno:24	type:boolean
y	__DIR__/react.jsx	/y/;"	v	lineno:25	type:boolean
z	__DIR__/react.jsx	/z/;"	v	lineno:26	type:boolean
ç	__DIR__/react.jsx	/ç/;"	v	lineno:27	type:boolean
arr	__DIR__/react.jsx	/arr/;"	v	lineno:29	type:[bool]
```
