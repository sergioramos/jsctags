var interpolate = require('util').format,
    cp = require('child_process'),
    path = require('path')

var file = path.resolve(__dirname, './cases/extends.js')
var cmd = path.resolve(__dirname, '../bin/jsctags')
var dir = path.resolve(__dirname, '..')

//jsctags --dir=/something file
//jsctags file
//cat | jsctags --dir --file
//cat | jsctags --dir
//cat | jsctags
//cat | jsctags --file
var start = Date.now()
cp.exec(interpolate('%s %s', cmd, file), function (e, stdout, stderr) {
  console.log(stdout)
})