const { declare } = require("@babel/helper-plugin-utils");
const types = require("@babel/types");
const resolve = require("resolve");

module.exports = declare((api, options = {}) => {
  api.assertVersion(7);
  const { template } = require("@babel/core");
  const generate = require("@babel/generator").default;
  const codeWrapper = template(`window.__args = JSON.parse('VALUE');`);
  return {
    name: "transform-xx2",
    visitor: {
      Program(path, state) {
        path.unshiftContainer("body", types.directiveLiteral('use strict'));
      },
      ImportDeclaration(path) {
        const { node } = path;
        const { specifiers, source } = node;
        source.value = resolve.sync(source.value, { basedir: __dirname });
      },
      CallExpression(path) {
        const { node } = path;
        if (node.callee.name === "require") {
          node.arguments[0].value = resolve.sync(node.arguments[0].value, {
            basedir: __dirname
          });
        }
      },
    }
  };
});
