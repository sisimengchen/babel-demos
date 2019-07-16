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
      require("@babel/preset-env").default,
      {
        debug: true,
        useBuiltIns: "usage", // "usage" | "entry" | false
        // targets: { browsers: ["Android >= 4.0", "ios >= 8", "ie >=9"] },
        // modules: "amd",
        corejs: {
          version: 3
        }
      }
    ]
  ].filter(Boolean),
  plugins: [
    [
      require("@babel/plugin-transform-runtime").default,
      {
        corejs: false,
        regenerator: false,
        useESModules: false
      }
    ]
  ].filter(Boolean)
};

module.exports = options;
