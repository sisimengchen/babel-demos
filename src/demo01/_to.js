require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/web.timers");

require("regenerator-runtime/runtime");

var _asyncToGenerator = require("@babel/runtime/helpers/asyncToGenerator");

var _objectSpread = require("@babel/runtime/helpers/objectSpread");

// import "regenerator-runtime/runtime";
// import "core-js/stable";
// import "@babel/polyfill";
function timeout(ms) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, ms, 'done');
  });
}

function foo() {
  var _this = this;

  setTimeout(function () {
    console.log('id:', _this.id);
  }, 100);
}

var greeting = "`Yo` World!";
var a = 1,
    b = 2,
    c = 3;
var d = Object.assign({}, {
  x: 2
});

var e = _objectSpread({
  b: 2
}, d);

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(1);
          _context.next = 3;
          return setTimeout(function () {
            console.log(1);
          }, 1000);

        case 3:
          console.log(1);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}))();

_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          console.log(2);
          _context2.next = 3;
          return setTimeout(function () {
            console.log(2);
          }, 1000);

        case 3:
          console.log(2);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}))();