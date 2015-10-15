var interpolate = require('util').format,
    cp = require('child_process'),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    assert = require('assert')

var casesDir = path.resolve(__dirname, 'cases')
var files = fs.readdirSync(casesDir).filter(function (file) {
  return path.extname(file) === '.js';
}).map(function (file) {
  return path.resolve(__dirname, 'cases', file)
})
var cmd = path.resolve(__dirname, '../bin/jsctags')

var start = Date.now()

async.series([
  function (callback) {
    console.log('\nTesting individual cases:\n');
    async.eachSeries(files, function (file, callback) {
      var expectedJsonFile = replaceFileExtension(file, '.json')
      var expectedCtagsFile = replaceFileExtension(file, '.tags')
      var expectedJson = fs.readFileSync(expectedJsonFile, 'utf8')
      var expectedCtags = fs.readFileSync(expectedCtagsFile, 'utf8')
      runTestCase({
        input: file,
        dir: casesDir,
        expected: {
          json: expectedJson,
          ctags: expectedCtags
        }
      }, callback)
    }, callback)
  },
  function (callback) {
    console.log('\nTesting file sets:\n');
    var input = files.join(' ')
    var expectedJsonFile = path.resolve(__dirname, 'cases/_.json')
    var expectedCtagsFile = path.resolve(__dirname, 'cases/_.tags')
    var expectedJson = fs.readFileSync(expectedJsonFile, 'utf8')
    var expectedCtags = fs.readFileSync(expectedCtagsFile, 'utf8')
    runTestCase({
      input: input,
      dir: casesDir,
      expected: {
        json: expectedJson,
        ctags: expectedCtags
      }
    }, callback)
  }
], function (e) {
  if(e) throw e
  var elapsed = Date.now() - start
  console.log(successText(interpolate('\nTests %s in %ss', e ? 'failed' : 'passed', elapsed / 1000)))
})

function replaceFileExtension(file, extension) {
  return path.resolve(path.dirname(file), path.basename(file, path.extname(file)) + extension)
}

function runTestCase(options, callback) {
  var file = options.input
  var filename = file.split(' ').map(path.basename).join(' ')
  var dir = options.dir
  var expectedJson = options.expected.json.replace(/__DIR__/g, dir)
  var expectedCtags = options.expected.ctags.replace(/__DIR__/g, dir)
  var tests = [
    function (callback) {
      testCommandOutput({
        input: {
          file: file,
          stdin: null
        },
        filename: filename,
        args: null,
        expected: expectedJson
      }, callback)
    },
    function (callback) {
      testCommandOutput({
        input: {
          file: file,
          stdin: null
        },
        filename: filename,
        args: ['-f'],
        expected: expectedCtags
      }, callback)
    }
  ]
  if(file.split(' ').length === 1) {
    tests.push(
      function (callback) {
        var content = fs.readFileSync(file, 'utf8')
        testCommandOutput({
          input: {
            file: null,
            stdin: content
          },
          filename: filename,
          args: ['--file', file],
          expected: expectedJson
        }, callback)
      },  
      function (callback) {
        var content = fs.readFileSync(file, 'utf8')
        testCommandOutput({
          input: {
            file: null,
            stdin: content
          },
          filename: filename,
          args: ['-f', '--file', file],
          expected: expectedCtags
        }, callback)
      }
    )
  }
  async.series(tests, callback)
}

function testCommandOutput(options, callback) {
  var file = options.input.file
  var stdin = options.input.stdin
  var filename = options.filename
  var args = options.args || []
  var expected = options.expected
  process.stdout.write(interpolate('%s%s%s...', filename, file ? '' : ' (STDIN)', args.indexOf('-f') !== -1 ? ' (-f)' : ''))
  var command = file ? interpolate('%s %s %s', cmd, file, args.join(' ')) : interpolate('%s %s', cmd, args.join(' '))
  var child = cp.exec(command, function (e, stdout, stderr) {
    if(e) return callback(e)
    try {
      if(args.indexOf('-f') === -1) {
        assert.deepEqual(JSON.parse(stdout), JSON.parse(expected))
      } else {
        assert.equal(stdout, expected)
      }
      showTestPassed()
    } catch(e) {
      showTestFailed(stdout, expected)
      throw e
    }
    callback(null)
  })
  if(!file) {
    child.stdin.write(stdin)
    child.stdin.end()
  }
}

function showTestPassed() {
  console.log(successText('OK'))
}

function showTestFailed(actual, expected) {
  console.log(errorText('FAIL'))
  console.log('\nExpected:\n\n' + expected)
  console.log('\nActual:\n\n' + actual)
}

function successText(string) {
  return '\u001b[32m' + string + '\u001b[39m'
}

function errorText(string) {
  return '\u001b[31m' + string + '\u001b[39m'
}
