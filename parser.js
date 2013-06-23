var condense = require('./condenser'),
    path = require('path'),
    fs = require('fs')

module.exports = function (file, dir, callback) {
  condense(file, dir, function (e, condense) {
    if(e) throw e
    var content = fs.readFileSync(file, 'utf8')
    var types = {}
    var tags = []
    
    parse(content, condense, tags, types)
    tags = tags.sort(function (tag1, tag2) { return tag1.lineno - tag2.lineno })
    callback(null, tags)
  })
}


var parse = function (file, condense, tags, types) {
  Object.keys(condense).forEach(function (name) {
    tagger(file, condense[name], tags, types, [])(name)
  })
}

var kind = function (type) {
  if(type.match(/^fn/)) return 'f'
}

var type = function (type) {
  //"fn(child: SubEleven, parent: SubOne)",
  //"void function(<SubOne function(boolean) | SubTwo function(boolean) | SubEleven function(boolean)>, <Top function() | SubOne function(boolean)>)",
}

var addr = function (span, file) {
  var pos = span.match(/^(\d*?)\[\d*?\:\d*?\]-(\d*?)\[\d*?\:\d*?\]$/)
  var end = pos.pop()
  var start = pos.pop()
  
  var blob = file.slice(start, end)
  return new RegExp(blob.split(/\n/).shift().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&'))
}

var lineno = function (span) {
  return Number(span.match(/^\d*?\[(\d*?)\:\d*?\]-\d*?\[\d*?\:\d*?\]$/).pop()) + 1
}

var tagger = function (file, condense, tags, types, parent) {
  return function (name) {
    if(typeof condense !== 'object' || name.match(/^\!/)) return 0
    var type = condense['!type']
    var span = condense['!span']

    Object.keys(condense).forEach(function (key) {
      if(key.match(/^\!/)) return 0
      var p = parent.slice()
      p.push(name)
      tagger(file, condense[key], tags, types, p)(key)
    })

    if(!span || !type) return 0
    
    var tag = {
      name: name,
      addr: addr(span, file),
      kind: kind(type),
      type: '',
      lineno: lineno(span),
    }
    
    if(parent.length) tag.parent = parent.join('.')
    
    return tags.push(tag)
  }
}