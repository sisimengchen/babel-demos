const fse = require("fs-extra");
const template = require("@babel/template").default;
const generate = require("@babel/generator").default;

const codeWrapper = template.program(
  `define("NAME",function(){return(function(d){var e=0;var f;var c;var a;function b(){if(e++>0){return}if(!f){f=document.head||document.getElementsByTagName("head")[0]}if(!c){var k=f.getElementsByTagName("link");for(var j=0,h=k.length;j<h;++j){if(k[j].rel==="stylesheet"){c=k[j];break}}}if(!a){a=document.createElement("style");c?f.insertBefore(a,c):f.appendChild(a);a.setAttribute("type","text/css");if(a.styleSheet){a.styleSheet.cssText=d}else{a.appendChild(document.createTextNode(d))}}else{c?f.insertBefore(a,c):f.appendChild(a)}}function g(){if(e===0){return}if(--e===0){f.removeChild(a)}}return{use:b,unuse:g}})("VALUE")});`
);

module.exports = function() {
  console.log("demo02");
  const ast = codeWrapper({
    NAME: "CSSSAMD",
    VALUE: "margin:0,0,0,0;"
  });
  const code = generate(ast).code;
  console.log(ast);
  fse.outputFileSync("./src/demo02/_to.js", code);
};
