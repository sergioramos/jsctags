```js
var poison = {focus: 1, blah: 2, nothing: 3};

var person = {name: "harry", born: 1980};

function age(person) { return 2014 - person.age; }
function ages(persons) return persons.map(age); }

age(person);
ages([person, person]);

age({n //+ name

ages([{b //+ born

var example = {
  // The foo
  foo: 10,
  // The food
  food: 20,
  // The bar
  bar: true
};

function takes(example) { return example; }
takes(example);

takes({
  fo //+ foo, food
});

takes({
  _1: "long long long long long long long long long long long long long long long long long long string",
  noise: 10,
  food //<doc: The food
  bar: false,
  _2: "long long long long long long long long long long long long long long long long long long string"
});

takes({
  _1: "long long long long long long long long long long long long long long long long long long string",
  noise: 10,
  b //+ bar
  _2: "long long long long long long long long long long long long long long long long long long string"
});

takes({
  bar //<: bool
```
```json
[
  {
    "id": "2d3f1d60-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "poison",
    "addr": "/poison/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-10[0:10]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4470-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "focus",
    "addr": "/focus/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "2d3f1d60-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "14[0:14]-19[0:19]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4472-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "nothing",
    "addr": "/nothing/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "2d3f1d60-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "33[0:33]-40[0:40]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4471-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "blah",
    "addr": "/blah/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "2d3f1d60-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "24[0:24]-28[0:28]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4474-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "person",
    "parent": "2d3f4473-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "61[2:14]-65[2:18]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4473-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "51[2:4]-57[2:10]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4478-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "born",
    "addr": "/born/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "age.person",
    "parent": "2d3f4477-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "76[2:29]-80[2:33]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b80-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "age.person",
    "parent": "2d3f4477-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "61[2:14]-65[2:18]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4475-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "born",
    "addr": "/born/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "person",
    "parent": "2d3f4473-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "76[2:29]-80[2:33]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4476-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "age",
    "addr": "/age/",
    "kind": "f",
    "type": "number function(?)",
    "lineno": 5,
    "origin": {
      "!span": "99[4:9]-102[4:12]",
      "!type": "fn(person: ?) -> number",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f4477-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "lineno": 5,
    "namespace": "age",
    "parent": "2d3f4476-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "103[4:13]-109[4:19]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b84-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "persons",
    "addr": "/persons/",
    "kind": "v",
    "type": "[person, person]|[ages.!0.<i>]",
    "lineno": 6,
    "namespace": "ages",
    "parent": "2d3f6b83-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "155[5:14]-162[5:21]",
      "!type": "[person, person]|[ages.!0.<i>]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Array.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b83-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "ages",
    "addr": "/ages/",
    "kind": "f",
    "type": "[number] function(Array[person)",
    "lineno": 6,
    "origin": {
      "!span": "150[5:9]-154[5:13]",
      "!type": "fn(persons: [person, person]|[ages.!0.<i>]) -> [number]",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b81-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "lineno": 11,
    "namespace": "age.person",
    "parent": "2d3f4477-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "235[10:5]-236[10:6]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b82-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 13,
    "namespace": "age.person",
    "parent": "2d3f4477-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "254[12:7]-255[12:8]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b85-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "example",
    "addr": "/example/",
    "kind": "v",
    "lineno": 15,
    "origin": {
      "!span": "270[14:4]-277[14:11]",
      "!data": {
        "isConstructor": false,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b86-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "namespace": "example",
    "parent": "2d3f6b85-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "297[16:2]-300[16:5]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b87-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "food",
    "addr": "/food/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "example",
    "parent": "2d3f6b85-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "322[18:2]-326[18:6]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b88-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "boolean",
    "lineno": 21,
    "namespace": "example",
    "parent": "2d3f6b85-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "347[20:2]-350[20:5]",
      "!type": "bool",
      "!data": {
        "isConstructor": false,
        "type": "Boolean.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b89-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "takes",
    "addr": "/takes/",
    "kind": "f",
    "type": "!0 function(?)",
    "lineno": 24,
    "origin": {
      "!span": "370[23:9]-375[23:14]",
      "!type": "fn(example: ?) -> !0",
      "!data": {
        "isConstructor": false,
        "type": "Function.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "example",
    "addr": "/example/",
    "kind": "v",
    "lineno": 24,
    "namespace": "takes",
    "parent": "2d3f6b89-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "376[23:15]-383[23:22]",
      "!data": {
        "isConstructor": false,
        "scoped": true,
        "isArg": true,
        "type": "Object.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8b-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "fo",
    "addr": "/fo/",
    "kind": "v",
    "lineno": 28,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "432[27:2]-434[27:4]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8f-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "food",
    "addr": "/food/",
    "kind": "v",
    "lineno": 34,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "583[33:2]-587[33:6]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8c-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "_1",
    "addr": "/_1/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "739[39:2]-741[39:4]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b90-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "noise",
    "addr": "/noise/",
    "kind": "v",
    "type": "number",
    "lineno": 41,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "845[40:2]-850[40:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "Number.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b91-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 42,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "858[41:2]-859[41:3]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8d-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "_2",
    "addr": "/_2/",
    "kind": "v",
    "type": "string",
    "lineno": 43,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "870[42:2]-872[42:4]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": "String.prototype"
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "2d3f6b8e-90cb-11e5-9e87-ab0ed1c67a1b",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "lineno": 47,
    "namespace": "takes.example",
    "parent": "2d3f6b8a-90cb-11e5-9e87-ab0ed1c67a1b",
    "origin": {
      "!span": "988[46:2]-991[46:5]",
      "!data": {
        "isConstructor": false,
        "scoped": false,
        "isArg": false,
        "type": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  }
]
```
```ctags
poison	__DIR__/hint-objlit.js	/poison/;"	v	lineno:1
focus	__DIR__/hint-objlit.js	/focus/;"	v	lineno:1	namespace:poison	type:number
nothing	__DIR__/hint-objlit.js	/nothing/;"	v	lineno:1	namespace:poison	type:number
blah	__DIR__/hint-objlit.js	/blah/;"	v	lineno:1	namespace:poison	type:number
name	__DIR__/hint-objlit.js	/name/;"	v	lineno:3	namespace:person	type:string
person	__DIR__/hint-objlit.js	/person/;"	v	lineno:3
born	__DIR__/hint-objlit.js	/born/;"	v	lineno:3	namespace:age.person	type:number
name	__DIR__/hint-objlit.js	/name/;"	v	lineno:3	namespace:age.person	type:string
born	__DIR__/hint-objlit.js	/born/;"	v	lineno:3	namespace:person	type:number
age	__DIR__/hint-objlit.js	/age/;"	f	lineno:5	type:number function(?)
person	__DIR__/hint-objlit.js	/person/;"	v	lineno:5	namespace:age
persons	__DIR__/hint-objlit.js	/persons/;"	v	lineno:6	namespace:ages	type:[person, person]|[ages.!0.<i>]
ages	__DIR__/hint-objlit.js	/ages/;"	f	lineno:6	type:[number] function(Array[person)
n	__DIR__/hint-objlit.js	/n/;"	v	lineno:11	namespace:age.person
b	__DIR__/hint-objlit.js	/b/;"	v	lineno:13	namespace:age.person
example	__DIR__/hint-objlit.js	/example/;"	v	lineno:15
foo	__DIR__/hint-objlit.js	/foo/;"	v	lineno:17	namespace:example	type:number
food	__DIR__/hint-objlit.js	/food/;"	v	lineno:19	namespace:example	type:number
bar	__DIR__/hint-objlit.js	/bar/;"	v	lineno:21	namespace:example	type:boolean
takes	__DIR__/hint-objlit.js	/takes/;"	f	lineno:24	type:!0 function(?)
example	__DIR__/hint-objlit.js	/example/;"	v	lineno:24	namespace:takes
fo	__DIR__/hint-objlit.js	/fo/;"	v	lineno:28	namespace:takes.example
food	__DIR__/hint-objlit.js	/food/;"	v	lineno:34	namespace:takes.example
_1	__DIR__/hint-objlit.js	/_1/;"	v	lineno:40	namespace:takes.example	type:string
noise	__DIR__/hint-objlit.js	/noise/;"	v	lineno:41	namespace:takes.example	type:number
b	__DIR__/hint-objlit.js	/b/;"	v	lineno:42	namespace:takes.example
_2	__DIR__/hint-objlit.js	/_2/;"	v	lineno:43	namespace:takes.example	type:string
bar	__DIR__/hint-objlit.js	/bar/;"	v	lineno:47	namespace:takes.example
```
