import React, { Component } from "/Users/mengchen/ke/babel-demos/node_modules/react/index.js";
import { Button, Select, Input, Modal, AutoComplete, message, Table } from "/Users/mengchen/ke/babel-demos/node_modules/antd/lib/index.js";
var doca = document.createElement("style");
doca.setAttribute("type", "text/css");
var css = document.createTextNode("body {\n    background-color: aqua;\n}");
doca.appendChild(css);
document.body.append(doca);
import "/Users/mengchen/ke/babel-demos/src/demo04/index.png";
export default class Polling {
  constructor(pollingOptions) {
    this.pic = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAuZJREFUSA29Vr1rVEEQn9l7d5KUChamEg8jFpEoAS0kiKhFmoDGImltLO1ShBQSwc5/wDYp/IA0KUTwgxQKQYNXiIHzo0mCxbUJXu7eOL+9e8t7e/sul5xm4O7tztfvzey8nWHqgerlC6N7FE+y8FUSGiKWU9ZMeIuYNoVltUhmuVT9sr6fO+6msFMeuUMxLQjJcDe9RMbEG2RobrBaeZHw/GcQcHd45LQ0aElELvsGveyZ+SNHND2wUfnp63cA7pZHx2NpvNTUnfCVD7RnqhmObg9U19+n7TKAABNpvtbIimmlw6410j3mwo00qANEGuOGrPUdmf92iDTisSS9JpHjzDJgzBTN3KXSo3kyY5cStdwndKALG1JbR3o01nebYSWoRonluVPShQV7OGdZ0mxS/cEsNVdepVXcujBxi0pPHhMXCpZXn1+gxuIzJ8eCDU+helsRaulnpLox5885FhzBIRz75INBnrZ1+m0Mg4869J01llcIkSUUAg2BwQa2PgEDWIXZ4yfv69mNdyhsbZP8+EWFm9c1Ha1E4Ik9+OZsOZNG2Cepj9+t+u7sPmb5zTtnRt7oZ3AtqKHMvCign5wZ1glY3jlbfea3kUY3hE0ewUFdhemiSAPBrhcw61+xjLuILSf8Z0G1SuHYp57BYKiXvvsOfUf/aS+G0GL2odA5Jiah6k1kHU/hbU0pbXYIUowQGNKYTm/PoIpl0DxT/jPLPDDcOvgdFBRYbLt5HH/OIOkGd+OxxaddSz/vhf7M3KN47ZPvkorGXDQYC2yn9sTR5ERXMKiHqhfpha1PwABWq0p1LPAV4q/fHKtb6YdA07bOSRvD9RG9cT5kRgq0p+kpexHjbgylyDnTBY4AkQGssaSNR8SJMXIMfq9cAcMBHnkDRkfGDIKxwL1anwv4snNNapjK3DSYPTCDaNy1PrGQu5o/z8BnBhAMgGIGQd6xPwzB1s4x3sQGX+4MQ46PbBD2wf/lqP8XLa2D7zc1RGIAAAAASUVORK5CYII=";
  }

}