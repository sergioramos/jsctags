var foo = (function() {
  return 42;
})();
foo; //: number

var x = {
  baz: {
    haz: 2,
    laz: 4
  }
};

function init(v) {
  v.foo = 10;
  v.bar = 1 + 1;
  var a = function() {
    var t = function() {
      var g = function() {
        var y = 2;
      };

      var m = function() {
        var w = 3;
      };
    };
  };
}
init; //:: fn(v: {bar: number, foo: number})

init(x);
x; //:: {bar: number, foo: number}
