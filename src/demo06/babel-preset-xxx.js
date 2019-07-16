const { declare } = require("@babel/helper-plugin-utils");

module.exports = declare((api, options = {}) => {
  api.assertVersion(7);
  const { arg = {} } = options;
  return {
    plugins: [
      [require("./babel-plugin-transform-xx1"), arg],
      [require("./babel-plugin-transform-xx2"), { x: 1 }]
    ].filter(Boolean)
  };
});
