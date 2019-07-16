const fse = require("fs-extra");
const fs = require("fs");
const traverse = require("@babel/traverse").default;
const parser = require("@babel/parser");
const generate = require("@babel/generator").default;
const resolve = require("resolve");
const nodePath = require("path");
const template = require("@babel/template").default;
const types = require("@babel/types");
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
  import './index.css'
  import './index.png'
  export default class Polling {
    constructor(pollingOptions) {
      this.pic = require("./index.png");
    }
  }
`;

const cssTemplate = template(`
  var doca = document.createElement("style");
  doca.setAttribute("type","text/css");
  var css = document.createTextNode("CSSCONTENT");
  doca.appendChild(css);
  document.body.append(doca);
`);

const imgTemplate = template(`
  "IMGCONTENT"
`);

module.exports = function() {
  console.log("demo04");
  const ast = parser.parse(code, {
    // parse in strict mode and allow module declarations
    sourceType: "module"
  });
  traverse(ast, {
    ImportDeclaration(path) {
      const { node } = path;
      const { specifiers, source } = node;
      source.value = resolve.sync(source.value, { basedir: __dirname });
      if (nodePath.extname(source.value) == ".css") {
        const content = fs.readFileSync(source.value, "utf8");
        path.replaceWithMultiple(
          cssTemplate({
            CSSCONTENT: content
          })
        );
      }
    },
    CallExpression(path) {
      const { node } = path;
      if (node.callee.name === "require") {
        node.arguments[0].value = resolve.sync(node.arguments[0].value, {
          basedir: __dirname
        });
        if (nodePath.extname(node.arguments[0].value) == ".png") {
          const content = fs
            .readFileSync(node.arguments[0].value)
            .toString("base64");
          console.log(content);
          path.replaceWithMultiple(
            imgTemplate({
              IMGCONTENT: `data:image/png;base64,${content}`
            })
          );
        }
      }
    },
    Program(path) {}
  });
  const newcode = generate(ast).code;
  // console.log(ast);
  fse.outputFileSync("./src/demo04/_to.js", newcode);
};
