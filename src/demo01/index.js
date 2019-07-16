var fse = require("fs-extra");
var babel = require("@babel/core");
var options = require("./options");

module.exports = function() {
  console.log("demo01");
  babel.transformFile("./src/demo01/_from.js", options, (err, result) => {
    if (err) {
      throw err;
    }
    const { code, map, ast } = result;
    fse.outputFileSync("./src/demo01/_to.js", code);
    // fse.outputFileSync("./src/demo01/_to.js.map", JSON.stringify(map));
    // console.log(map)
  });
};
