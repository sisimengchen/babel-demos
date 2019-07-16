const traverse = require("@babel/traverse").default;
const parser = require("@babel/parser");
// const types = require("@babel/types");
// console.log(parser)
const code = `
  import React, { Component } from 'react';
  import {
    Button,
    Select,
    Input,
    Modal,
    AutoComplete,
    message,
    Table
  } from 'antd';
  import aaa from 'aaa';
  import './index.less'
  export default class Polling {
    constructor(pollingOptions) {
      this.pic = require("./index.png");
    }
  }
`;

module.exports = function() {
  console.log("demo03");
  const dep = [];
  const ast = parser.parse(code, {
    // parse in strict mode and allow module declarations
    sourceType: "module"
  });
  // console.log(ast)
  // console.log(types.VISITOR_KEYS);
  traverse(ast, {
    enter(path) {
      // 所有节点的进入
    },
    exit(path) {
      // 所有节点的退出
    },
    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers, source } = node;
      dep.push(source.value);
    },
    CallExpression(path) {
      const { node } = path;
      if (node.callee.name === "require") {
        dep.push(node.arguments[0].value);
      }
    },
    Program(path) {}
  });
  console.log(dep);
};
