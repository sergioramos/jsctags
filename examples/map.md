```js
let map = new Map

map.set(55, "hello")
map.get(55) //: string

for (let val of map.values())
  val //: string

for (let key of map.keys())
  key //: number

for (let [key, value] of map) {
  key //: number
  value //: string
}
for (let pair of map) {
  pair //: [number, string]
  ;[key, value] = pair
  key //: number
  value //: string
}

map.forEach(function(val, key) {
  val //: string
  key //: number
})
```
```json
[
  {
    "id": "58bd3bd0-909d-11e5-b8fd-9bef60ba7229",
    "name": "map",
    "addr": "map",
    "kind": "v",
    "type": "Map",
    "lineno": 1,
    "origin": {
      "!span": "4[0:4]-7[0:7]",
      "!type": "+Map",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/map.js"
  },
  {
    "id": "58bd89f0-909d-11e5-b8fd-9bef60ba7229",
    "name": "key",
    "addr": "key",
    "kind": "v",
    "type": "number",
    "lineno": 18,
    "origin": {
      "!span": "284[17:4]-287[17:7]",
      "!type": "number",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/map.js"
  },
  {
    "id": "58bdb100-909d-11e5-b8fd-9bef60ba7229",
    "name": "value",
    "addr": "value",
    "kind": "v",
    "type": "string",
    "lineno": 18,
    "origin": {
      "!span": "289[17:9]-294[17:14]",
      "!type": "string",
      "!data": {
        "isConstructor": false,
        "isPlainObject": false
      }
    },
    "tagfile": "__DIR__/map.js"
  }
]
```
```ctags
map	__DIR__/map.js	map;"	v	lineno:1	type:Map
key	__DIR__/map.js	key;"	v	lineno:18	type:number
value	__DIR__/map.js	value;"	v	lineno:18	type:string
```
