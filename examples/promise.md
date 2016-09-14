```js
var p = new Promise(function(accept, reject) {
  reject; //: fn(reason: ?)
  accept({x: 20});
});

p.then(function(value) {
  value; //:: {x: number}
}).then(function(value) {
  value; //:: {x: number}
});

var p2 = new Promise(function(acc) { acc("hi"); });

Promise.all([p2]).then(function(value) {
  value; //: [string]
  return Promise.resolve(33);
}).then(function(value) {
  value; //: number
});

var p3 = Promise.resolve(10);

p3.then(function(value) {
  value; //: number
  return true;
}).then(function(value) {
  value; //: bool
});

var p4 = Promise.resolve(Promise.resolve(10));
p4.then(function(value) {
  value; //: number
});

var arg5 = 1 < 2 ? Promise.resolve(10) : 20;
var p5 = Promise.resolve(arg5);
p5.then(function(value) {
  value; //: number
});

var p6 = Promise.resolve('t').then(function() {
  return 1 < 2 ? Promise.resolve(10) : 20;
}).then(function(value) {
  value; //: number
});

var p7 = Promise.resolve().then(function() {
  return 20;
}).then(function(value) {
  value; //: number
});

var p8 = Promise.resolve();
p8 //: Promise

function myResolve1(arg) {
  return Promise.resolve(arg);
}

myResolve1('s') //:: {:t: string}

function myResolve2(arg) {
  return Promise.resolve(arg);
}

myResolve2('s') //:: {:t: string|number}
myResolve2(4) //:: {:t: string|number}

myResolve2('s').then(function(value) {
  value; //: string|number
})

function myResolve3(arg7) {
  return Promise.resolve(arg7);
}

myResolve3(Promise.resolve(4)).then(function(value) {
  value; //: number
});

myResolve3(Promise.resolve(4)) //:: {:t: number}

myResolve3(4).then(function(value) {
  value; //: number
});
```
```json
[
  {
    "id": "16783d50-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p",
    "addr": "/p/",
    "kind": "v",
    "type": "Promise",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-5[0:5]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "167975d3-7aef-11e6-a0bf-750d5670e0d1",
    "name": "x",
    "addr": "/x/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "Promise.:t",
    "parent": "167975d2-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "85[2:10]-86[2:11]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b280-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/function\(acc\) \{ acc\(\"hi\"\); \}/",
    "kind": "v",
    "type": "string",
    "lineno": 12,
    "namespace": "p2",
    "parent": "16788b70-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "228[11:21]-256[11:49]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "16788b70-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p2",
    "addr": "/p2/",
    "kind": "v",
    "type": "Promise",
    "lineno": 12,
    "origin": {
      "!span": "211[11:4]-213[11:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b281-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p3",
    "addr": "/p3/",
    "kind": "v",
    "type": "Promise",
    "lineno": 21,
    "origin": {
      "!span": "408[20:4]-410[20:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b282-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/10/",
    "kind": "v",
    "type": "number",
    "lineno": 21,
    "namespace": "p3",
    "parent": "1678b281-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "429[20:25]-431[20:27]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b283-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p4",
    "addr": "/p4/",
    "kind": "v",
    "type": "Promise",
    "lineno": 30,
    "origin": {
      "!span": "549[29:4]-551[29:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b284-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/Promise\.resolve\(10\)/",
    "kind": "v",
    "type": "number",
    "lineno": 30,
    "namespace": "p4",
    "parent": "1678b283-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "570[29:25]-589[29:44]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "167975d6-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/10/",
    "kind": "v",
    "type": "number",
    "lineno": 35,
    "namespace": "arg5",
    "parent": "167975d5-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "678[34:35]-680[34:37]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "167975d5-7aef-11e6-a0bf-750d5670e0d1",
    "name": "arg5",
    "addr": "/arg5/",
    "kind": "v",
    "type": "?|number",
    "lineno": 35,
    "parent": "167975d4-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "647[34:4]-651[34:8]",
      "!type": "?|number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b285-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p5",
    "addr": "/p5/",
    "kind": "v",
    "type": "Promise",
    "lineno": 36,
    "origin": {
      "!span": "692[35:4]-694[35:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b286-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/arg5/",
    "kind": "v",
    "type": "number",
    "lineno": 36,
    "namespace": "p5",
    "parent": "1678b285-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "713[35:25]-717[35:29]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b287-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p6",
    "addr": "/p6/",
    "kind": "v",
    "type": "Promise",
    "lineno": 41,
    "origin": {
      "!span": "775[40:4]-777[40:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b288-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/function\(value\) \{/",
    "kind": "v",
    "type": "number",
    "lineno": 43,
    "namespace": "p6",
    "parent": "1678b287-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "870[42:8]-909[44:1]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b289-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p7",
    "addr": "/p7/",
    "kind": "v",
    "type": "Promise",
    "lineno": 47,
    "origin": {
      "!span": "917[46:4]-919[46:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b28a-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/function\(value\) \{/",
    "kind": "v",
    "type": "number",
    "lineno": 49,
    "namespace": "p7",
    "parent": "1678b289-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "979[48:8]-1018[50:1]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b28b-7aef-11e6-a0bf-750d5670e0d1",
    "name": "p8",
    "addr": "/p8/",
    "kind": "v",
    "type": "Promise",
    "lineno": 53,
    "origin": {
      "!span": "1026[52:4]-1028[52:6]",
      "!type": "+Promise",
      "!data": {
        "isConstructor": false,
        "type": "Promise.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678d990-7aef-11e6-a0bf-750d5670e0d1",
    "name": "arg",
    "addr": "/arg/",
    "kind": "v",
    "type": "string",
    "lineno": 56,
    "namespace": "myResolve1",
    "parent": "1678b28c-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "1086[55:20]-1089[55:23]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678b28c-7aef-11e6-a0bf-750d5670e0d1",
    "name": "myResolve1",
    "addr": "/myResolve1/",
    "kind": "f",
    "type": "Promise function(string)",
    "lineno": 56,
    "origin": {
      "!span": "1075[55:9]-1085[55:19]",
      "!type": "fn(arg: string) -> +Promise",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678d991-7aef-11e6-a0bf-750d5670e0d1",
    "name": "myResolve2",
    "addr": "/myResolve2/",
    "kind": "f",
    "type": "Promise function(string|number)",
    "lineno": 62,
    "origin": {
      "!span": "1171[61:9]-1181[61:19]",
      "!type": "fn(arg: string|number) -> +Promise",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678d993-7aef-11e6-a0bf-750d5670e0d1",
    "name": "arg7",
    "addr": "/arg7/",
    "kind": "v",
    "type": "?|number",
    "lineno": 73,
    "namespace": "myResolve3",
    "parent": "1678d992-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "1394[72:20]-1398[72:24]",
      "!type": "?|number",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "1678d992-7aef-11e6-a0bf-750d5670e0d1",
    "name": "myResolve3",
    "addr": "/myResolve3/",
    "kind": "f",
    "type": "Promise function(?|number)",
    "lineno": 73,
    "origin": {
      "!span": "1383[72:9]-1393[72:19]",
      "!type": "fn(arg7: ?|number) -> +Promise",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "167975d2-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/arg7/",
    "kind": "v",
    "type": "number",
    "lineno": 74,
    "namespace": "Promise",
    "parent": "167975d1-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "1427[73:25]-1431[73:29]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  },
  {
    "id": "167975d0-7aef-11e6-a0bf-750d5670e0d1",
    "name": ":t",
    "addr": "/4/",
    "kind": "v",
    "type": "number",
    "lineno": 81,
    "namespace": "myResolve3.arg7",
    "parent": "1678d993-7aef-11e6-a0bf-750d5670e0d1",
    "origin": {
      "!span": "1543[80:27]-1544[80:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/promise.js"
  }
]
```
```ctags
p	__DIR__/promise.js	/p/;"	v	lineno:1	type:Promise
x	__DIR__/promise.js	/x/;"	v	lineno:3	namespace:Promise.:t	type:number
:t	__DIR__/promise.js	/function\(acc\) \{ acc\("hi"\); \}/;"	v	lineno:12	namespace:p2	type:string
p2	__DIR__/promise.js	/p2/;"	v	lineno:12	type:Promise
p3	__DIR__/promise.js	/p3/;"	v	lineno:21	type:Promise
:t	__DIR__/promise.js	/10/;"	v	lineno:21	namespace:p3	type:number
p4	__DIR__/promise.js	/p4/;"	v	lineno:30	type:Promise
:t	__DIR__/promise.js	/Promise\.resolve\(10\)/;"	v	lineno:30	namespace:p4	type:number
:t	__DIR__/promise.js	/10/;"	v	lineno:35	namespace:arg5	type:number
arg5	__DIR__/promise.js	/arg5/;"	v	lineno:35	type:?|number
p5	__DIR__/promise.js	/p5/;"	v	lineno:36	type:Promise
:t	__DIR__/promise.js	/arg5/;"	v	lineno:36	namespace:p5	type:number
p6	__DIR__/promise.js	/p6/;"	v	lineno:41	type:Promise
:t	__DIR__/promise.js	/function\(value\) \{/;"	v	lineno:43	namespace:p6	type:number
p7	__DIR__/promise.js	/p7/;"	v	lineno:47	type:Promise
:t	__DIR__/promise.js	/function\(value\) \{/;"	v	lineno:49	namespace:p7	type:number
p8	__DIR__/promise.js	/p8/;"	v	lineno:53	type:Promise
arg	__DIR__/promise.js	/arg/;"	v	lineno:56	namespace:myResolve1	type:string
myResolve1	__DIR__/promise.js	/myResolve1/;"	f	lineno:56	type:Promise function(string)
myResolve2	__DIR__/promise.js	/myResolve2/;"	f	lineno:62	type:Promise function(string|number)
arg7	__DIR__/promise.js	/arg7/;"	v	lineno:73	namespace:myResolve3	type:?|number
myResolve3	__DIR__/promise.js	/myResolve3/;"	f	lineno:73	type:Promise function(?|number)
:t	__DIR__/promise.js	/arg7/;"	v	lineno:74	namespace:Promise	type:number
:t	__DIR__/promise.js	/4/;"	v	lineno:81	namespace:myResolve3.arg7	type:number
```
