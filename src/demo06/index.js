var fse = require("fs-extra");
var babel = require("@babel/core");
var options = require("./options");

module.exports = function() {
  console.log("demo06");
  babel.transformFile("./src/demo06/_from.js", options, (err, result) => {
    if (err) {
      throw err;
    }
    const { code, map, ast } = result;
    fse.outputFileSync("./src/demo06/_to.js", code);
  });
};
