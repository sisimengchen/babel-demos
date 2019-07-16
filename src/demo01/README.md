
# babel配置示例

## @babel/preset-env

### 启用corejs2（默认）

1、需要安装 @babel/polyfill 这个包会自动引入 core-js@2 + regenerator-runtime (需要在浏览器端运行)
2、配置useBuiltIns = "usage" 源码里不需要引入多余依赖
3、配置useBuiltIns = "entry" 代码头部增加 import "@babel/polyfill";
4、不配置useBuiltIns，默认为fasle，自己想办法加polyfill，比如https://github.com/inexorabletash/polyfill或者吧@babel/polyfill构建出来

### 启用corejs3（需要配置）

1、需要安装 core-js@3 + regenerator-runtime (需要在浏览器端运行)
2、配置useBuiltIns = "usage" && corejs = { version:3 } 源码里不需要引入多余依赖
3、配置useBuiltIns = "entry" 代码头部增加 import "regenerator-runtime/runtime"; import "core-js/stable";
4、不配置useBuiltIns，默认为fasle，自己想办法加polyfill，比如https://github.com/inexorabletash/polyfill或者吧@babel/polyfill构建出来

## @babel/plugin-transform-runtime

在转换 ES6 语法为 ES5 的语法时，babel 会需要一些辅助函数，例如 _extend。babel 默认会将这些辅助函数内联到每一个 js 文件里，这样文件多的时候，项目就会很大。

所以 babel 提供了 transform-runtime 来将这些辅助函数“搬”到一个单独的模块 babel-runtime 中，这样做能减小项目文件的大小。

因此@babel/plugin-transform-runtime可以选择不用，如果使用建议作为第一个plugin使用

1、如果配置corejs = { version:3 } 建议跟，需要安装@babel/runtime-corejs3 但是@babel/runtime-corejs3里看源码缺少必要目录,响应源码在@babel/runtime中，貌似是个bug
2、如果配置regenerator = true 需要安装@babel/runtime
3、不清楚为啥这个依赖关系处理的不太好，需要我们额外安装。