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
    "id": "67e96520-9084-11e5-aad8-1da704a74548",
    "name": "poison",
    "addr": "/poison/",
    "kind": "v",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-10[0:10]"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e98c30-9084-11e5-aad8-1da704a74548",
    "name": "focus",
    "addr": "/focus/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "67e96520-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "14[0:14]-19[0:19]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b341-9084-11e5-aad8-1da704a74548",
    "name": "nothing",
    "addr": "/nothing/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "67e96520-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "33[0:33]-40[0:40]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b340-9084-11e5-aad8-1da704a74548",
    "name": "blah",
    "addr": "/blah/",
    "kind": "v",
    "type": "number",
    "lineno": 1,
    "namespace": "poison",
    "parent": "67e96520-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "24[0:24]-28[0:28]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b343-9084-11e5-aad8-1da704a74548",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "person",
    "parent": "67e9b342-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "61[2:14]-65[2:18]",
      "!type": "string"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b342-9084-11e5-aad8-1da704a74548",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "lineno": 3,
    "origin": {
      "!span": "51[2:4]-57[2:10]"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9da51-9084-11e5-aad8-1da704a74548",
    "name": "born",
    "addr": "/born/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "age.person",
    "parent": "67e9da50-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "76[2:29]-80[2:33]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9da52-9084-11e5-aad8-1da704a74548",
    "name": "name",
    "addr": "/name/",
    "kind": "v",
    "type": "string",
    "lineno": 3,
    "namespace": "age.person",
    "parent": "67e9da50-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "61[2:14]-65[2:18]",
      "!type": "string",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b344-9084-11e5-aad8-1da704a74548",
    "name": "born",
    "addr": "/born/",
    "kind": "v",
    "type": "number",
    "lineno": 3,
    "namespace": "person",
    "parent": "67e9b342-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "76[2:29]-80[2:33]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9b345-9084-11e5-aad8-1da704a74548",
    "name": "age",
    "addr": "/age/",
    "kind": "f",
    "type": "number function(?)",
    "lineno": 5,
    "origin": {
      "!span": "99[4:9]-102[4:12]",
      "!type": "fn(person: ?) -> number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67e9da50-9084-11e5-aad8-1da704a74548",
    "name": "person",
    "addr": "/person/",
    "kind": "v",
    "lineno": 5,
    "namespace": "age",
    "parent": "67e9b345-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "103[4:13]-109[4:19]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f83-9084-11e5-aad8-1da704a74548",
    "name": "persons",
    "addr": "/persons/",
    "kind": "v",
    "type": "[person, person]|[ages.!0.<i>]",
    "lineno": 6,
    "namespace": "ages",
    "parent": "67ea4f82-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "155[5:14]-162[5:21]",
      "!type": "[person, person]|[ages.!0.<i>]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f82-9084-11e5-aad8-1da704a74548",
    "name": "ages",
    "addr": "/ages/",
    "kind": "f",
    "type": "[number] function(Array[person)",
    "lineno": 6,
    "origin": {
      "!span": "150[5:9]-154[5:13]",
      "!type": "fn(persons: [person, person]|[ages.!0.<i>]) -> [number]"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f80-9084-11e5-aad8-1da704a74548",
    "name": "n",
    "addr": "/n/",
    "kind": "v",
    "lineno": 11,
    "namespace": "age.person",
    "parent": "67e9da50-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "235[10:5]-236[10:6]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f81-9084-11e5-aad8-1da704a74548",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 13,
    "namespace": "age.person",
    "parent": "67e9da50-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "254[12:7]-255[12:8]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f84-9084-11e5-aad8-1da704a74548",
    "name": "example",
    "addr": "/example/",
    "kind": "v",
    "lineno": 15,
    "origin": {
      "!span": "270[14:4]-277[14:11]"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f85-9084-11e5-aad8-1da704a74548",
    "name": "foo",
    "addr": "/foo/",
    "kind": "v",
    "type": "number",
    "lineno": 17,
    "namespace": "example",
    "parent": "67ea4f84-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "297[16:2]-300[16:5]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f86-9084-11e5-aad8-1da704a74548",
    "name": "food",
    "addr": "/food/",
    "kind": "v",
    "type": "number",
    "lineno": 19,
    "namespace": "example",
    "parent": "67ea4f84-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "322[18:2]-326[18:6]",
      "!type": "number"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f87-9084-11e5-aad8-1da704a74548",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "type": "boolean",
    "lineno": 21,
    "namespace": "example",
    "parent": "67ea4f84-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "347[20:2]-350[20:5]",
      "!type": "bool"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea4f88-9084-11e5-aad8-1da704a74548",
    "name": "takes",
    "addr": "/takes/",
    "kind": "f",
    "type": "!0 function(?)",
    "lineno": 24,
    "origin": {
      "!span": "370[23:9]-375[23:14]",
      "!type": "fn(example: ?) -> !0"
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7690-9084-11e5-aad8-1da704a74548",
    "name": "example",
    "addr": "/example/",
    "kind": "v",
    "lineno": 24,
    "namespace": "takes",
    "parent": "67ea4f88-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "376[23:15]-383[23:22]",
      "!data": {
        "scoped": true,
        "isArg": true
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7691-9084-11e5-aad8-1da704a74548",
    "name": "fo",
    "addr": "/fo/",
    "kind": "v",
    "lineno": 28,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "432[27:2]-434[27:4]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7695-9084-11e5-aad8-1da704a74548",
    "name": "food",
    "addr": "/food/",
    "kind": "v",
    "lineno": 34,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "583[33:2]-587[33:6]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7692-9084-11e5-aad8-1da704a74548",
    "name": "_1",
    "addr": "/_1/",
    "kind": "v",
    "type": "string",
    "lineno": 40,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "739[39:2]-741[39:4]",
      "!type": "string",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7696-9084-11e5-aad8-1da704a74548",
    "name": "noise",
    "addr": "/noise/",
    "kind": "v",
    "type": "number",
    "lineno": 41,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "845[40:2]-850[40:7]",
      "!type": "number",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7697-9084-11e5-aad8-1da704a74548",
    "name": "b",
    "addr": "/b/",
    "kind": "v",
    "lineno": 42,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "858[41:2]-859[41:3]",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7693-9084-11e5-aad8-1da704a74548",
    "name": "_2",
    "addr": "/_2/",
    "kind": "v",
    "type": "string",
    "lineno": 43,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "870[42:2]-872[42:4]",
      "!type": "string",
      "!data": {
        "scoped": false,
        "isArg": false
      }
    },
    "tagfile": "__DIR__/hint-objlit.js"
  },
  {
    "id": "67ea7694-9084-11e5-aad8-1da704a74548",
    "name": "bar",
    "addr": "/bar/",
    "kind": "v",
    "lineno": 47,
    "namespace": "takes.example",
    "parent": "67ea7690-9084-11e5-aad8-1da704a74548",
    "origin": {
      "!span": "988[46:2]-991[46:5]",
      "!data": {
        "scoped": false,
        "isArg": false
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
