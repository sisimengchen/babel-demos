define("CSSSAMD", function () {
  return function (d) {
    var e = 0;
    var f;
    var c;
    var a;

    function b() {
      if (e++ > 0) {
        return;
      }

      if (!f) {
        f = document.head || document.getElementsByTagName("head")[0];
      }

      if (!c) {
        var k = f.getElementsByTagName("link");

        for (var j = 0, h = k.length; j < h; ++j) {
          if (k[j].rel === "stylesheet") {
            c = k[j];
            break;
          }
        }
      }

      if (!a) {
        a = document.createElement("style");
        c ? f.insertBefore(a, c) : f.appendChild(a);
        a.setAttribute("type", "text/css");

        if (a.styleSheet) {
          a.styleSheet.cssText = d;
        } else {
          a.appendChild(document.createTextNode(d));
        }
      } else {
        c ? f.insertBefore(a, c) : f.appendChild(a);
      }
    }

    function g() {
      if (e === 0) {
        return;
      }

      if (--e === 0) {
        f.removeChild(a);
      }
    }

    return {
      use: b,
      unuse: g
    };
  }("margin:0,0,0,0;");
});