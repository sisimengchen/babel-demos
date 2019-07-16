const options = {
  sourceType: "unambiguous", // "script" | "module" | "unambiguous"
  configFile: false,
  babelrc: false,
  retainLines: false,
  compact: "auto",
  minified: false,
  comments: true,
  ast: true,
  sourceMaps: true,
  // sourceFileName:
  // sourceRoot: "http://www.lmlc.com/",
  presets: [
    [
      require("./babel-preset-xxx"),
      {
        arg: {
          env: "???",
          buildTimestamp: +new Date()
        }
      }
    ]
  ].filter(Boolean),
  plugins: [
    [
      require("./babel-plugin-transform-xx1"),
      {
        env: "???",
        buildTimestamp: +new Date()
      }
    ],
    [require("./babel-plugin-transform-xx2"), { x: 1 }]
  ].filter(Boolean)
};

module.exports = options;
