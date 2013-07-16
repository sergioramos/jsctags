# jsctags

jsctags generator using [tern](https://github.com/marijnh/tern)

## install

```sh
npm install [-g] [--save/--save-dev] git://git@github.com:ramitos/jsctags.git
```

## usage

```sh
$ jsctags [--dir=/path/to] /path/to/file.js
```

```sh
$ cat /path/to/file.js | jsctags [--dir=/path/to] [--file=/path/to/file.js]
```

```js
var jsctags = require('jsctags'),
    fs = require('fs')

jsctags('/path/to/file.js', '/path/to/', fs.readFileSync('/path/to/file.js', 'utf8'), function (e, tags) {
  console.log(tags)
})
```

## examples

 * [arguments](examples/arguments.json)
 * [autothis](examples/autothis.json)
 * [browser](examples/browser.json)
 * [builtins](examples/builtins.json)
 * [cautiouspropagation](examples/cautiouspropagation.json)
 * [copyprops](examples/copyprops.json)
 * [ctorpattern](examples/ctorpattern.json)
 * [docstrings](examples/docstrings.json)
 * [effects](examples/effects.json)
 * [extends](examples/extends.json)
 * [finddef](examples/finddef.json)
 * [fn_arguments](examples/fn_arguments.json)
 * [generic_each](examples/generic_each.json)
 * [global_this](examples/global_this.json)
 * [infinite-expansion](examples/infinite-expansion.json)
 * [jsdoc](examples/jsdoc.json)
 * [merge](examples/merge.json)
 * [new_array](examples/new_array.json)
 * [new_to_prototype](examples/new_to_prototype.json)
 * [object_create](examples/object_create.json)
 * [objnames](examples/objnames.json)
 * [plus](examples/plus.json)
 * [proto](examples/proto.json)
 * [protoname](examples/protoname.json)
 * [replace_bogus_prop](examples/replace_bogus_prop.json)
 * [simple_generic](examples/simple_generic.json)
 * [simple](examples/simple.json)


## license

MIT