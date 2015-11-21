var glob = require('glob');
var fs = require('fs');
var path = require('path');

var cases = path.join(__dirname, 'cases');
var examples = path.join(__dirname, '../examples/*.md');

glob.sync(path.join(cases, '*.json')).forEach(function(file) {
  var json = fs.readFileSync(file, 'utf-8');

  json = json.replace(/\n\s+"id"\:\s+".+",\n/g, '\n');
  json = json.replace(/\n\s+"parent"\:\s+".+",\n/g, '\n');
  json = json.split(/\n/).map(function(line) {
    return line.replace(cases, '__DIR__');
  }).join('\n');

  fs.writeFileSync(file, json, 'utf-8');
});

glob.sync(examples).forEach(function(file) {
  var md = fs.readFileSync(file, 'utf-8');
  md = md.split(/\n/).map(function(line) {
    return line.replace(cases, '__DIR__');
  }).join('\n');
  fs.writeFileSync(file, md, 'utf-8');
});
