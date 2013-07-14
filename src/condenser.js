var interpolate = require('util').format,
    cp = require('child_process'),
    merge = require('deepmerge'),
    tryor = require('tryor'),
    path = require('path')

var condense = path.join(__dirname, '..', 'node_modules/tern/bin/condense')
var present = {
  libs: ['browser', 'ecma5'],
  loadEagerly: false,
  plugins: {
    doc_comment: true
  }
}

var config = function (dir) {
  var config = tryor(function() {
      return fs.readFileSync(path.join(dir, '.tern-project'), 'utf8')
  }, "{}")
  
  var merged = merge(JSON.parse(config), present)
  
  merged.libs = unique(merged.libs)
  
  if(Array.isArray(config.libs) && config.libs.indexOf('browser') < 0)
    merged.libs.splice(merged.libs.indexOf('browser'), 1)
  
  return merged
}

var unique = function (ar) {
  var values = {}
  
  ar.forEach(function (el) {
    values[el] = true
  })
  
  return Object.keys(values)
}


var condenser = module.exports = function (file, dir, callback) {
  var cfg = config(dir)

  var cmd = interpolate('node %s --name %s', condense, file)
  cmd += ' ' + condenser.defs(cfg)
  cmd += ' ' + condenser.plugins(cfg)
  cmd += ' ' + file
  
  cp.exec(cmd, function (e, stdout, stderr) {
    if(e) return callback(e)
    if(stderr.length) return callback(new Error(stderr))
    callback(e, JSON.parse(stdout))
  })
}

condenser.defs = function (config) {
  return config.libs.map(function (def) {
    return interpolate('--def %s', def)
  }).join(' ')
}

condenser.plugins = function (config) {
  return Object.keys(config.plugins).map(function (plugin) {
    return interpolate('--plugin %s=%s', plugin, JSON.stringify(config.plugins[plugin]))
  }).join(' ')
}