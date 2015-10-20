require('longjohn');
var format = require('util').format;
var cp = require('child_process');
var fs = require('fs');
var path = require('path');
var async = require('async');
var assert = require('assert');

var casesDir = path.resolve(__dirname, 'cases');
var files = fs.readdirSync(casesDir).filter(function (file) {
  return path.extname(file) === '.js';
}).map(function (file) {
  return path.resolve(__dirname, 'cases', file);
});
var cmd = path.resolve(__dirname, '../bin/jsctags');

var start = Date.now();

async.series([
  function (callback) {
    console.log('\nTesting individual cases:\n');
    async.eachSeries(files, function (file, callback) {
      var expectedJsonFile = replaceFileExtension(file, '.json');
      var expectedCtagsFile = replaceFileExtension(file, '.tags');
      var expectedJson = fs.readFileSync(expectedJsonFile, 'utf8');
      var expectedCtags = fs.readFileSync(expectedCtagsFile, 'utf8');
      runTestCase({
        input: file,
        dir: casesDir,
        label: path.basename(file),
        expected: {
          json: expectedJson,
          ctags: expectedCtags
        }
      }, callback);
    }, callback);
  },
  function (callback) {
    console.log('\nTesting file sets:\n');
    var input = files.join(' ');
    var expectedJsonFile = path.resolve(__dirname, 'cases/_.json');
    var expectedCtagsFile = path.resolve(__dirname, 'cases/_.tags');
    var expectedJson = fs.readFileSync(expectedJsonFile, 'utf8');
    var expectedCtags = fs.readFileSync(expectedCtagsFile, 'utf8');
    runTestCase({
      input: input,
      dir: casesDir,
      label: format('%s files', files.length),
      expected: {
        json: expectedJson,
        ctags: expectedCtags
      }
    }, callback);
  }
], function (e) {
  if (e) throw e;
  var elapsed = Date.now() - start;
  console.log(successText(format('\nTests passed in %ss', elapsed / 1000)));
});

function replaceFileExtension (file, extension) {
  return path.resolve(path.dirname(file), path.basename(file, path.extname(file)) + extension);
}

function runTestCase (options, callback) {
  var file = options.input;
  var label = options.label;
  var dir = options.dir;
  var expectedJson = options.expected.json.replace(/__DIR__/g, dir);
  var expectedCtags = options.expected.ctags.replace(/__DIR__/g, dir);
  var tests = [
    function (callback) {
      testCommandOutput({
        input: {
          file: file,
          stdin: null
        },
        args: null,
        label: label,
        expected: expectedJson
      }, callback);
    },
    function (callback) {
      testCommandOutput({
        input: {
          file: file,
          stdin: null
        },
        args: ['-f'],
        label: label,
        expected: expectedCtags
      }, callback);
    }
  ];
  if (file.split(' ').length === 1) {
    tests.push(
      function (callback) {
        var content = fs.readFileSync(file, 'utf8');
        testCommandOutput({
          input: {
            file: null,
            stdin: content
          },
          args: ['--file', file],
          label: label,
          expected: expectedJson
        }, callback);
      },
      function (callback) {
        var content = fs.readFileSync(file, 'utf8');
        testCommandOutput({
          input: {
            file: null,
            stdin: content
          },
          args: ['-f', '--file', file],
          label: label,
          expected: expectedCtags
        }, callback);
      }
    );
  }
  async.series(tests, callback);
}

function testCommandOutput (options, callback) {
  var file = options.input.file;
  var stdin = options.input.stdin;
  var label = options.label;
  var args = options.args || [];
  var expected = options.expected;
  process.stdout.write(format('%s%s%s...', label, file ? '' : ' (STDIN)', args.indexOf('-f') !== -1 ? ' (-f)' : ''));
  var command = file ? format('%s %s %s', cmd, file, args.join(' ')) : format('%s %s', cmd, args.join(' '));
  var child = cp.exec(command, function (e, stdout, stderr) {
    if (e) return callback(e);

    try {
      if (args.indexOf('-f') === -1) {
        assert.deepEqual(JSON.parse(stdout), JSON.parse(expected));
      } else {
        assert.equal(stdout, expected);
      }
      showTestPassed();
    } catch (e) {
      showTestFailed(stdout, expected);
      throw e;
    }
    callback(null);
  });
  if (!file) {
    child.stdin.write(stdin);
    child.stdin.end();
  }
}

function showTestPassed () {
  console.log(successText('OK'));
}

function showTestFailed (actual, expected) {
  console.log(errorText('FAIL'));
  console.log('\nExpected:\n\n' + expected);
  console.log('\nActual:\n\n' + actual);
}

function successText (string) {
  return '\u001b[32m' + string + '\u001b[39m';
}

function errorText (string) {
  return '\u001b[31m' + string + '\u001b[39m';
}
