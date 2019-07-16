const { declare } = require("@babel/helper-plugin-utils");
const { types } = require("@babel/core");

module.exports = declare((api, options = {}) => {
  api.assertVersion(7);
  const { template } = require("@babel/core");
  const generate = require("@babel/generator").default;
  const codeWrapper = template(`window.__args = JSON.parse('VALUE');`);
  return {
    name: "transform-xx1",
    visitor: {
      Program(path, state) {
        const ast = codeWrapper({
          VALUE: JSON.stringify(options),
          JSON: "JSON"
        });
        path.unshiftContainer("body", ast);
      }
    }
  };
});
