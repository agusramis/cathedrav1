(function () {
  var a = "' of type ",
    l = "SCRIPT",
    p = "Uneven number of arguments",
    q = "array",
    t = "function",
    aa = "google.charts.load",
    ba = "hasOwnProperty",
    u = "number",
    v = "object",
    x = "pre-45",
    ca = "propertyIsEnumerable",
    y = "string",
    da = "text/javascript",
    ea = "toLocaleString";
  function A() {
    return function (b) {
      return b;
    };
  }
  function B() {
    return function () {};
  }
  function D(b) {
    return function () {
      return this[b];
    };
  }
  function E(b) {
    return function () {
      return b;
    };
  }
  var F,
    G = G || {};
  G.scope = {};
  G.Tk = function (b) {
    var c = 0;
    return function () {
      return c < b.length ? { done: !1, value: b[c++] } : { done: !0 };
    };
  };
  G.Sk = function (b) {
    return { next: G.Tk(b) };
  };
  G.Dd = function (b) {
    var c =
      "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
    return c ? c.call(b) : G.Sk(b);
  };
  G.Rk = function (b) {
    for (var c, d = []; !(c = b.next()).done; ) d.push(c.value);
    return d;
  };
  G.ve = function (b) {
    return b instanceof Array ? b : G.Rk(G.Dd(b));
  };
  G.$t = function (b, c, d) {
    b instanceof String && (b = String(b));
    for (var e = b.length, f = 0; f < e; f++) {
      var g = b[f];
      if (c.call(d, g, f, b)) return { Bm: f, Oo: g };
    }
    return { Bm: -1, Oo: void 0 };
  };
  G.Aj = !1;
  G.hp = !1;
  G.ip = !1;
  G.Nr = !1;
  G.defineProperty =
    G.Aj || typeof Object.defineProperties == t
      ? Object.defineProperty
      : function (b, c, d) {
          b != Array.prototype && b != Object.prototype && (b[c] = d.value);
        };
  G.fm = function (b) {
    return "undefined" != typeof window && window === b
      ? b
      : "undefined" != typeof global && null != global
      ? global
      : b;
  };
  G.global = G.fm(this);
  G.Pc = function (b, c) {
    if (c) {
      var d = G.global;
      b = b.split(".");
      for (var e = 0; e < b.length - 1; e++) {
        var f = b[e];
        f in d || (d[f] = {});
        d = d[f];
      }
      b = b[b.length - 1];
      e = d[b];
      c = c(e);
      c != e &&
        null != c &&
        G.defineProperty(d, b, { configurable: !0, writable: !0, value: c });
    }
  };
  G.Rg = function (b, c, d) {
    if (null == b)
      throw new TypeError(
        "The 'this' value for String.prototype." +
          d +
          " must not be null or undefined"
      );
    if (c instanceof RegExp)
      throw new TypeError(
        "First argument to String.prototype." +
          d +
          " must not be a regular expression"
      );
    return b + "";
  };
  G.Pc("String.prototype.repeat", function (b) {
    return b
      ? b
      : function (c) {
          var d = G.Rg(this, null, "repeat");
          if (0 > c || 1342177279 < c)
            throw new RangeError("Invalid count value");
          c |= 0;
          for (var e = ""; c; ) if ((c & 1 && (e += d), (c >>>= 1))) d += d;
          return e;
        };
  });
  G.$j = !1;
  G.Pc("Promise", function (b) {
    function c(k) {
      this.qa = g.$a;
      this.Ia = void 0;
      this.ic = [];
      var m = this.De();
      try {
        k(m.resolve, m.reject);
      } catch (n) {
        m.reject(n);
      }
    }
    function d() {
      this.pb = null;
    }
    function e(k) {
      return k instanceof c
        ? k
        : new c(function (m) {
            m(k);
          });
    }
    if (b && !G.$j) return b;
    d.prototype.Ig = function (k) {
      if (null == this.pb) {
        this.pb = [];
        var m = this;
        this.Jg(function () {
          m.Ol();
        });
      }
      this.pb.push(k);
    };
    var f = G.global.setTimeout;
    d.prototype.Jg = function (k) {
      f(k, 0);
    };
    d.prototype.Ol = function () {
      for (; this.pb && this.pb.length; ) {
        var k = this.pb;
        this.pb = [];
        for (var m = 0; m < k.length; ++m) {
          var n = k[m];
          k[m] = null;
          try {
            n();
          } catch (r) {
            this.el(r);
          }
        }
      }
      this.pb = null;
    };
    d.prototype.el = function (k) {
      this.Jg(function () {
        throw k;
      });
    };
    var g = { $a: 0, nb: 1, Ja: 2 };
    c.prototype.De = function () {
      function k(r) {
        return function (w) {
          n || ((n = !0), r.call(m, w));
        };
      }
      var m = this,
        n = !1;
      return { resolve: k(this.Qn), reject: k(this.sf) };
    };
    c.prototype.Qn = function (k) {
      if (k === this)
        this.sf(new TypeError("A Promise cannot resolve to itself"));
      else if (k instanceof c) this.no(k);
      else {
        a: switch (typeof k) {
          case v:
            var m = null != k;
            break a;
          case t:
            m = !0;
            break a;
          default:
            m = !1;
        }
        m ? this.Pn(k) : this.qh(k);
      }
    };
    c.prototype.Pn = function (k) {
      var m = void 0;
      try {
        m = k.then;
      } catch (n) {
        this.sf(n);
        return;
      }
      typeof m == t ? this.oo(m, k) : this.qh(k);
    };
    c.prototype.sf = function (k) {
      this.aj(g.Ja, k);
    };
    c.prototype.qh = function (k) {
      this.aj(g.nb, k);
    };
    c.prototype.aj = function (k, m) {
      if (this.qa != g.$a)
        throw Error(
          "Cannot settle(" +
            k +
            ", " +
            m +
            "): Promise already settled in state" +
            this.qa
        );
      this.qa = k;
      this.Ia = m;
      this.Ql();
    };
    c.prototype.Ql = function () {
      if (null != this.ic) {
        for (var k = 0; k < this.ic.length; ++k) h.Ig(this.ic[k]);
        this.ic = null;
      }
    };
    var h = new d();
    c.prototype.no = function (k) {
      var m = this.De();
      k.dd(m.resolve, m.reject);
    };
    c.prototype.oo = function (k, m) {
      var n = this.De();
      try {
        k.call(m, n.resolve, n.reject);
      } catch (r) {
        n.reject(r);
      }
    };
    c.prototype.then = function (k, m) {
      function n(z, C) {
        return typeof z == t
          ? function (U) {
              try {
                r(z(U));
              } catch (V) {
                w(V);
              }
            }
          : C;
      }
      var r,
        w,
        W = new c(function (z, C) {
          r = z;
          w = C;
        });
      this.dd(n(k, r), n(m, w));
      return W;
    };
    c.prototype["catch"] = function (k) {
      return this.then(void 0, k);
    };
    c.prototype.dd = function (k, m) {
      function n() {
        switch (r.qa) {
          case g.nb:
            k(r.Ia);
            break;
          case g.Ja:
            m(r.Ia);
            break;
          default:
            throw Error("Unexpected state: " + r.qa);
        }
      }
      var r = this;
      null == this.ic ? h.Ig(n) : this.ic.push(n);
    };
    c.resolve = e;
    c.reject = function (k) {
      return new c(function (m, n) {
        n(k);
      });
    };
    c.race = function (k) {
      return new c(function (m, n) {
        for (var r = G.Dd(k), w = r.next(); !w.done; w = r.next())
          e(w.value).dd(m, n);
      });
    };
    c.all = function (k) {
      var m = G.Dd(k),
        n = m.next();
      return n.done
        ? e([])
        : new c(function (r, w) {
            function W(U) {
              return function (V) {
                z[U] = V;
                C--;
                0 == C && r(z);
              };
            }
            var z = [],
              C = 0;
            do
              z.push(void 0),
                C++,
                e(n.value).dd(W(z.length - 1), w),
                (n = m.next());
            while (!n.done);
          });
    };
    return c;
  });
  G.Pc("Object.is", function (b) {
    return b
      ? b
      : function (c, d) {
          return c === d ? 0 !== c || 1 / c === 1 / d : c !== c && d !== d;
        };
  });
  G.Pc("Array.prototype.includes", function (b) {
    return b
      ? b
      : function (c, d) {
          var e = this;
          e instanceof String && (e = String(e));
          var f = e.length;
          d = d || 0;
          for (0 > d && (d = Math.max(d + f, 0)); d < f; d++) {
            var g = e[d];
            if (g === c || Object.is(g, c)) return !0;
          }
          return !1;
        };
  });
  G.Pc("String.prototype.includes", function (b) {
    return b
      ? b
      : function (c, d) {
          return -1 !== G.Rg(this, c, "includes").indexOf(c, d || 0);
        };
  });
  var H = H || {};
  H.global = this || self;
  H.ca = function (b) {
    return void 0 !== b;
  };
  H.L = function (b) {
    return typeof b == y;
  };
  H.Em = function (b) {
    return "boolean" == typeof b;
  };
  H.Bb = function (b) {
    return typeof b == u;
  };
  H.ih = function (b, c, d) {
    b = b.split(".");
    d = d || H.global;
    b[0] in d ||
      "undefined" == typeof d.execScript ||
      d.execScript("var " + b[0]);
    for (var e; b.length && (e = b.shift()); )
      !b.length && H.ca(c)
        ? (d[e] = c)
        : (d = d[e] && d[e] !== Object.prototype[e] ? d[e] : (d[e] = {}));
  };
  H.define = function (b, c) {
    return c;
  };
  H.eq = 2012;
  H.sa = !0;
  H.S = "en";
  H.pe = !0;
  H.Ck = !1;
  H.Vj = !H.sa;
  H.Yp = !1;
  H.kw = function (b) {
    if (H.mi()) throw Error("goog.provide cannot be used within a module.");
    H.Wg(b);
  };
  H.Wg = function (b, c) {
    H.ih(b, c);
  };
  H.Sh = function () {
    null === H.Ee && (H.Ee = H.km());
    return H.Ee;
  };
  H.kk = /^[\w+/_-]+[=]{0,2}$/;
  H.Ee = null;
  H.km = function () {
    var b = H.global.document;
    return (b = b.querySelector && b.querySelector("script[nonce]")) &&
      (b = b.nonce || b.getAttribute("nonce")) &&
      H.kk.test(b)
      ? b
      : "";
  };
  H.Jk = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
  H.pf = function (b) {
    if (!H.L(b) || !b || -1 == b.search(H.Jk))
      throw Error("Invalid module identifier");
    if (!H.li())
      throw Error(
        "Module " +
          b +
          " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide."
      );
    if (H.Fa.Mc) throw Error("goog.module may only be called once per module.");
    H.Fa.Mc = b;
  };
  H.pf.get = E(null);
  H.pf.Au = E(null);
  H.rc = { bg: "es6", je: "goog" };
  H.Fa = null;
  H.mi = function () {
    return H.li() || H.Lm();
  };
  H.li = function () {
    return !!H.Fa && H.Fa.type == H.rc.je;
  };
  H.Lm = function () {
    if (H.Fa && H.Fa.type == H.rc.bg) return !0;
    var b = H.global.$jscomp;
    return b ? (typeof b.Ne != t ? !1 : !!b.Ne()) : !1;
  };
  H.pf.Fe = function () {
    H.Fa.Fe = !0;
  };
  H.Jt = function (b) {
    if (H.Fa) H.Fa.Mc = b;
    else {
      var c = H.global.$jscomp;
      if (!c || typeof c.Ne != t)
        throw Error(
          'Module with namespace "' + b + '" has been loaded incorrectly.'
        );
      c = c.Nn(c.Ne());
      H.Ei[b] = { Sl: c, type: H.rc.bg, un: b };
    }
  };
  H.dx = function (b) {
    if (H.Vj)
      throw (
        ((b = b || ""),
        Error(
          "Importing test-only code into non-debug environment" +
            (b ? ": " + b : ".")
        ))
      );
  };
  H.fu = B();
  H.wb = function (b) {
    b = b.split(".");
    for (var c = H.global, d = 0; d < b.length; d++)
      if (((c = c[b[d]]), !H.zb(c))) return null;
    return c;
  };
  H.Qu = function (b, c) {
    c = c || H.global;
    for (var d in b) c[d] = b[d];
  };
  H.As = B();
  H.Gx = !1;
  H.Zp = !0;
  H.Fi = function (b) {
    H.global.console && H.global.console.error(b);
  };
  H.Nn = B();
  H.vw = function () {
    return {};
  };
  H.hl = "";
  H.Rb = B();
  H.ys = function () {
    throw Error("unimplemented abstract method");
  };
  H.Bs = B();
  H.bv = [];
  H.Wq = !0;
  H.yk = H.sa;
  H.Ei = {};
  H.Kp = !1;
  H.ls = "detect";
  H.gp = !1;
  H.ms = "";
  H.Ek = "transpile.js";
  H.$e = null;
  H.Mo = function () {
    if (null == H.$e) {
      try {
        var b = !eval(
          '"use strict";let x = 1; function f() { return typeof x; };f() == "number";'
        );
      } catch (c) {
        b = !1;
      }
      H.$e = b;
    }
    return H.$e;
  };
  H.Ro = function (b) {
    return "(function(){" + b + "\n;})();\n";
  };
  H.Pv = function (b) {
    var c = H.Fa;
    try {
      H.Fa = { Mc: "", Fe: !1, type: H.rc.je };
      if (H.Wa(b)) var d = b.call(void 0, {});
      else if (H.L(b)) H.Mo() && (b = H.Ro(b)), (d = H.gn.call(void 0, b));
      else throw Error("Invalid module definition");
      var e = H.Fa.Mc;
      if (H.L(e) && e)
        H.Fa.Fe
          ? H.Wg(e, d)
          : H.yk && Object.seal && typeof d == v && null != d && Object.seal(d),
          (H.Ei[e] = { Sl: d, type: H.rc.je, un: H.Fa.Mc });
      else throw Error('Invalid module name "' + e + '"');
    } finally {
      H.Fa = c;
    }
  };
  H.gn = function (b) {
    eval(b);
    return {};
  };
  H.$v = function (b) {
    b = b.split("/");
    for (var c = 0; c < b.length; )
      "." == b[c]
        ? b.splice(c, 1)
        : c && ".." == b[c] && b[c - 1] && ".." != b[c - 1]
        ? b.splice(--c, 2)
        : c++;
    return b.join("/");
  };
  H.cn = function (b) {
    if (H.global.Oj) return H.global.Oj(b);
    try {
      var c = new H.global.XMLHttpRequest();
      c.open("get", b, !1);
      c.send();
      return 0 == c.status || 200 == c.status ? c.responseText : null;
    } catch (d) {
      return null;
    }
  };
  H.Ax = function (b, c, d) {
    var e = H.global.$jscomp;
    e || (H.global.$jscomp = e = {});
    var f = e.Gf;
    if (!f) {
      var g = H.hl + H.Ek,
        h = H.cn(g);
      if (h) {
        (function () {
          (0, eval)(h + "\n//# sourceURL=" + g);
        }).call(H.global);
        if (
          H.global.$gwtExport &&
          H.global.$gwtExport.$jscomp &&
          !H.global.$gwtExport.$jscomp.transpile
        )
          throw Error(
            'The transpiler did not properly export the "transpile" method. $gwtExport: ' +
              JSON.stringify(H.global.$gwtExport)
          );
        H.global.$jscomp.Gf = H.global.$gwtExport.$jscomp.transpile;
        e = H.global.$jscomp;
        f = e.Gf;
      }
    }
    if (!f) {
      var k = " requires transpilation but no transpiler was found.";
      k +=
        ' Please add "//javascript/closure:transpiler" as a data dependency to ensure it is included.';
      f = e.Gf = function (m, n) {
        H.Fi(n + k);
        return m;
      };
    }
    return f(b, c, d);
  };
  H.ra = function (b) {
    var c = typeof b;
    if (c == v)
      if (b) {
        if (b instanceof Array) return q;
        if (b instanceof Object) return c;
        var d = Object.prototype.toString.call(b);
        if ("[object Window]" == d) return v;
        if (
          "[object Array]" == d ||
          (typeof b.length == u &&
            "undefined" != typeof b.splice &&
            "undefined" != typeof b.propertyIsEnumerable &&
            !b.propertyIsEnumerable("splice"))
        )
          return q;
        if (
          "[object Function]" == d ||
          ("undefined" != typeof b.call &&
            "undefined" != typeof b.propertyIsEnumerable &&
            !b.propertyIsEnumerable("call"))
        )
          return t;
      } else return "null";
    else if (c == t && "undefined" == typeof b.call) return v;
    return c;
  };
  H.zv = function (b) {
    return null === b;
  };
  H.zb = function (b) {
    return null != b;
  };
  H.isArray = function (b) {
    return H.ra(b) == q;
  };
  H.ma = function (b) {
    var c = H.ra(b);
    return c == q || (c == v && typeof b.length == u);
  };
  H.kv = function (b) {
    return H.Da(b) && typeof b.getFullYear == t;
  };
  H.Wa = function (b) {
    return H.ra(b) == t;
  };
  H.Da = function (b) {
    var c = typeof b;
    return (c == v && null != b) || c == t;
  };
  H.Uh = function (b) {
    return b[H.Gb] || (b[H.Gb] = ++H.Eo);
  };
  H.Vu = function (b) {
    return !!b[H.Gb];
  };
  H.Mn = function (b) {
    null !== b && "removeAttribute" in b && b.removeAttribute(H.Gb);
    try {
      delete b[H.Gb];
    } catch (c) {}
  };
  H.Gb = "closure_uid_" + ((1e9 * Math.random()) >>> 0);
  H.Eo = 0;
  H.yu = H.Uh;
  H.qw = H.Mn;
  H.ul = function (b) {
    var c = H.ra(b);
    if (c == v || c == q) {
      if (typeof b.clone === t) return b.clone();
      c = c == q ? [] : {};
      for (var d in b) c[d] = H.ul(b[d]);
      return c;
    }
    return b;
  };
  H.jl = function (b, c, d) {
    return b.call.apply(b.bind, arguments);
  };
  H.il = function (b, c, d) {
    if (!b) throw Error();
    if (2 < arguments.length) {
      var e = Array.prototype.slice.call(arguments, 2);
      return function () {
        var f = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(f, e);
        return b.apply(c, f);
      };
    }
    return function () {
      return b.apply(c, arguments);
    };
  };
  H.bind = function (b, c, d) {
    H.bind =
      Function.prototype.bind &&
      -1 != Function.prototype.bind.toString().indexOf("native code")
        ? H.jl
        : H.il;
    return H.bind.apply(null, arguments);
  };
  H.Sb = function (b, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var e = d.slice();
      e.push.apply(e, arguments);
      return b.apply(this, e);
    };
  };
  H.Vv = function (b, c) {
    for (var d in c) b[d] = c[d];
  };
  H.now =
    (H.pe && Date.now) ||
    function () {
      return +new Date();
    };
  H.Pu = function (b) {
    if (H.global.execScript) H.global.execScript(b, "JavaScript");
    else if (H.global.eval) {
      if (null == H.nd) {
        try {
          H.global.eval("var _evalTest_ = 1;");
        } catch (e) {}
        if ("undefined" != typeof H.global._evalTest_) {
          try {
            delete H.global._evalTest_;
          } catch (e) {}
          H.nd = !0;
        } else H.nd = !1;
      }
      if (H.nd) H.global.eval(b);
      else {
        var c = H.global.document,
          d = c.createElement(l);
        d.type = da;
        d.defer = !1;
        d.appendChild(c.createTextNode(b));
        c.head.appendChild(d);
        c.head.removeChild(d);
      }
    } else throw Error("goog.globalEval not available");
  };
  H.nd = null;
  H.vu = function (b, c) {
    function d(g) {
      g = g.split("-");
      for (var h = [], k = 0; k < g.length; k++) h.push(e(g[k]));
      return h.join("-");
    }
    function e(g) {
      return H.ah[g] || g;
    }
    if ("." == String(b).charAt(0))
      throw Error(
        'className passed in goog.getCssName must not start with ".". You passed: ' +
          b
      );
    var f = H.ah ? ("BY_WHOLE" == H.Bl ? e : d) : A();
    b = c ? b + "-" + f(c) : f(b);
    return H.global.Nj ? H.global.Nj(b) : b;
  };
  H.Lw = function (b, c) {
    H.ah = b;
    H.Bl = c;
  };
  H.Bu = function (b, c, d) {
    d && d.b && (b = b.replace(/</g, "&lt;"));
    c &&
      (b = b.replace(/\{\$([^}]+)}/g, function (e, f) {
        return null != c && f in c ? c[f] : e;
      }));
    return b;
  };
  H.Cu = A();
  H.Dc = function (b, c) {
    H.ih(b, c, void 0);
  };
  H.Wt = function (b, c, d) {
    b[c] = d;
  };
  H.yb = function (b, c) {
    function d() {}
    d.prototype = c.prototype;
    b.gj = c.prototype;
    b.prototype = new d();
    b.prototype.constructor = b;
    b.gl = function (e, f, g) {
      for (
        var h = Array(arguments.length - 2), k = 2;
        k < arguments.length;
        k++
      )
        h[k - 2] = arguments[k];
      return c.prototype[f].apply(e, h);
    };
  };
  H.gl = function (b, c, d) {
    var e = arguments.callee.caller;
    if (H.Ck || (H.sa && !e))
      throw Error(
        "arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C"
      );
    if ("undefined" !== typeof e.gj) {
      for (
        var f = Array(arguments.length - 1), g = 1;
        g < arguments.length;
        g++
      )
        f[g - 1] = arguments[g];
      return e.gj.constructor.apply(b, f);
    }
    if (typeof c != y && "symbol" != typeof c)
      throw Error(
        "method names provided to goog.base must be a string or a symbol"
      );
    f = Array(arguments.length - 2);
    for (g = 2; g < arguments.length; g++) f[g - 2] = arguments[g];
    g = !1;
    for (var h = b.constructor.prototype; h; h = Object.getPrototypeOf(h))
      if (h[c] === e) g = !0;
      else if (g) return h[c].apply(b, f);
    if (b[c] === e) return b.constructor.prototype[c].apply(b, f);
    throw Error(
      "goog.base called from a method of one name to a method of a different name"
    );
  };
  H.scope = function (b) {
    if (H.mi()) throw Error("goog.scope is not supported within a module.");
    b.call(H.global);
  };
  H.La = function (b, c) {
    var d = c.constructor,
      e = c.to;
    (d && d != Object.prototype.constructor) ||
      (d = function () {
        throw Error(
          "cannot instantiate an interface (no constructor defined)."
        );
      });
    d = H.La.xl(d, b);
    b && H.yb(d, b);
    delete c.constructor;
    delete c.to;
    H.La.Fg(d.prototype, c);
    null != e && (e instanceof Function ? e(d) : H.La.Fg(d, e));
    return d;
  };
  H.La.xk = H.sa;
  H.La.xl = function (b, c) {
    function d() {
      var f = b.apply(this, arguments) || this;
      f[H.Gb] = f[H.Gb];
      this.constructor === d &&
        e &&
        Object.seal instanceof Function &&
        Object.seal(f);
      return f;
    }
    if (!H.La.xk) return b;
    var e = !H.La.Wm(c);
    return d;
  };
  H.La.Wm = function (b) {
    return b && b.prototype && b.prototype[H.Gk];
  };
  H.La.ng = ["constructor", ba, "isPrototypeOf", ca, ea, "toString", "valueOf"];
  H.La.Fg = function (b, c) {
    for (var d in c)
      Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
    for (var e = 0; e < H.La.ng.length; e++)
      (d = H.La.ng[e]),
        Object.prototype.hasOwnProperty.call(c, d) && (b[d] = c[d]);
  };
  H.tx = B();
  H.Gk = "goog_defineClass_legacy_unsealable";
  H.ad = "";
  H.Ad = A();
  H.$g = function (b) {
    var c = null;
    if ("undefined" === typeof TrustedTypes || !TrustedTypes.createPolicy)
      return c;
    try {
      c = TrustedTypes.createPolicy(b, {
        createHTML: H.Ad,
        createScript: H.Ad,
        createScriptURL: H.Ad,
        createURL: H.Ad,
      });
    } catch (d) {
      H.Fi(d.message);
    }
    return c;
  };
  H.os = H.ad ? H.$g(H.ad + "#base") : null;
  H.debug = {};
  H.debug.Error = function (b) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, H.debug.Error);
    else {
      var c = Error().stack;
      c && (this.stack = c);
    }
    b && (this.message = String(b));
  };
  H.yb(H.debug.Error, Error);
  H.debug.Error.prototype.name = "CustomError";
  H.a = {};
  H.a.ua = {
    mb: 1,
    jp: 2,
    $c: 3,
    yp: 4,
    aq: 5,
    $p: 6,
    zr: 7,
    Fp: 8,
    Uc: 9,
    Sp: 10,
    Wj: 11,
    lr: 12,
  };
  H.m = {};
  H.m.za = H.sa;
  H.m.oc = function (b, c) {
    H.debug.Error.call(this, H.m.vo(b, c));
  };
  H.yb(H.m.oc, H.debug.Error);
  H.m.oc.prototype.name = "AssertionError";
  H.m.Sj = function (b) {
    throw b;
  };
  H.m.Ge = H.m.Sj;
  H.m.vo = function (b, c) {
    b = b.split("%s");
    for (var d = "", e = b.length - 1, f = 0; f < e; f++)
      d += b[f] + (f < c.length ? c[f] : "%s");
    return d + b[e];
  };
  H.m.Ta = function (b, c, d, e) {
    var f = "Assertion failed";
    if (d) {
      f += ": " + d;
      var g = e;
    } else b && ((f += ": " + b), (g = c));
    b = new H.m.oc("" + f, g || []);
    H.m.Ge(b);
  };
  H.m.Pw = function (b) {
    H.m.za && (H.m.Ge = b);
  };
  H.m.assert = function (b, c, d) {
    H.m.za &&
      !b &&
      H.m.Ta("", null, c, Array.prototype.slice.call(arguments, 2));
    return b;
  };
  H.m.Ms = function (b, c, d) {
    H.m.za &&
      null == b &&
      H.m.Ta(
        "Expected to exist: %s.",
        [b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.xa = function (b, c) {
    H.m.za &&
      H.m.Ge(
        new H.m.oc(
          "Failure" + (b ? ": " + b : ""),
          Array.prototype.slice.call(arguments, 1)
        )
      );
  };
  H.m.Us = function (b, c, d) {
    H.m.za &&
      !H.Bb(b) &&
      H.m.Ta(
        "Expected number but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Xs = function (b, c, d) {
    H.m.za &&
      !H.L(b) &&
      H.m.Ta(
        "Expected string but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Os = function (b, c, d) {
    H.m.za &&
      !H.Wa(b) &&
      H.m.Ta(
        "Expected function but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Vs = function (b, c, d) {
    H.m.za &&
      !H.Da(b) &&
      H.m.Ta(
        "Expected object but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Js = function (b, c, d) {
    H.m.za &&
      !H.isArray(b) &&
      H.m.Ta(
        "Expected array but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Ks = function (b, c, d) {
    H.m.za &&
      !H.Em(b) &&
      H.m.Ta(
        "Expected boolean but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Ls = function (b, c, d) {
    !H.m.za ||
      (H.Da(b) && b.nodeType == H.a.ua.mb) ||
      H.m.Ta(
        "Expected Element but got %s: %s.",
        [H.ra(b), b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Ps = function (b, c, d, e) {
    !H.m.za ||
      b instanceof c ||
      H.m.Ta(
        "Expected instanceof %s but got %s.",
        [H.m.Th(c), H.m.Th(b)],
        d,
        Array.prototype.slice.call(arguments, 3)
      );
    return b;
  };
  H.m.Ns = function (b, c, d) {
    !H.m.za ||
      (typeof b == u && isFinite(b)) ||
      H.m.Ta(
        "Expected %s to be a finite number but it is not.",
        [b],
        c,
        Array.prototype.slice.call(arguments, 2)
      );
    return b;
  };
  H.m.Ws = function () {
    for (var b in Object.prototype)
      H.m.xa(b + " should not be enumerable in Object.prototype.");
  };
  H.m.Th = function (b) {
    return b instanceof Function
      ? b.displayName || b.name || "unknown type name"
      : b instanceof Object
      ? b.constructor.displayName ||
        b.constructor.name ||
        Object.prototype.toString.call(b)
      : null === b
      ? "null"
      : typeof b;
  };
  H.g = {};
  H.fb = H.pe;
  H.g.cb = !1;
  H.g.zn = function (b) {
    return b[b.length - 1];
  };
  H.g.Lv = H.g.zn;
  H.g.indexOf =
    H.fb && (H.g.cb || Array.prototype.indexOf)
      ? function (b, c, d) {
          return Array.prototype.indexOf.call(b, c, d);
        }
      : function (b, c, d) {
          d = null == d ? 0 : 0 > d ? Math.max(0, b.length + d) : d;
          if (H.L(b)) return H.L(c) && 1 == c.length ? b.indexOf(c, d) : -1;
          for (; d < b.length; d++) if (d in b && b[d] === c) return d;
          return -1;
        };
  H.g.lastIndexOf =
    H.fb && (H.g.cb || Array.prototype.lastIndexOf)
      ? function (b, c, d) {
          return Array.prototype.lastIndexOf.call(
            b,
            c,
            null == d ? b.length - 1 : d
          );
        }
      : function (b, c, d) {
          d = null == d ? b.length - 1 : d;
          0 > d && (d = Math.max(0, b.length + d));
          if (H.L(b)) return H.L(c) && 1 == c.length ? b.lastIndexOf(c, d) : -1;
          for (; 0 <= d; d--) if (d in b && b[d] === c) return d;
          return -1;
        };
  H.g.forEach =
    H.fb && (H.g.cb || Array.prototype.forEach)
      ? function (b, c, d) {
          Array.prototype.forEach.call(b, c, d);
        }
      : function (b, c, d) {
          for (
            var e = b.length, f = H.L(b) ? b.split("") : b, g = 0;
            g < e;
            g++
          )
            g in f && c.call(d, f[g], g, b);
        };
  H.g.ph = function (b, c) {
    var d = b.length,
      e = H.L(b) ? b.split("") : b;
    for (--d; 0 <= d; --d) d in e && c.call(void 0, e[d], d, b);
  };
  H.g.filter =
    H.fb && (H.g.cb || Array.prototype.filter)
      ? function (b, c, d) {
          return Array.prototype.filter.call(b, c, d);
        }
      : function (b, c, d) {
          for (
            var e = b.length,
              f = [],
              g = 0,
              h = H.L(b) ? b.split("") : b,
              k = 0;
            k < e;
            k++
          )
            if (k in h) {
              var m = h[k];
              c.call(d, m, k, b) && (f[g++] = m);
            }
          return f;
        };
  H.g.map =
    H.fb && (H.g.cb || Array.prototype.map)
      ? function (b, c, d) {
          return Array.prototype.map.call(b, c, d);
        }
      : function (b, c, d) {
          for (
            var e = b.length, f = Array(e), g = H.L(b) ? b.split("") : b, h = 0;
            h < e;
            h++
          )
            h in g && (f[h] = c.call(d, g[h], h, b));
          return f;
        };
  H.g.reduce =
    H.fb && (H.g.cb || Array.prototype.reduce)
      ? function (b, c, d, e) {
          e && (c = H.bind(c, e));
          return Array.prototype.reduce.call(b, c, d);
        }
      : function (b, c, d, e) {
          var f = d;
          H.g.forEach(b, function (g, h) {
            f = c.call(e, f, g, h, b);
          });
          return f;
        };
  H.g.reduceRight =
    H.fb && (H.g.cb || Array.prototype.reduceRight)
      ? function (b, c, d, e) {
          e && (c = H.bind(c, e));
          return Array.prototype.reduceRight.call(b, c, d);
        }
      : function (b, c, d, e) {
          var f = d;
          H.g.ph(b, function (g, h) {
            f = c.call(e, f, g, h, b);
          });
          return f;
        };
  H.g.some =
    H.fb && (H.g.cb || Array.prototype.some)
      ? function (b, c, d) {
          return Array.prototype.some.call(b, c, d);
        }
      : function (b, c, d) {
          for (
            var e = b.length, f = H.L(b) ? b.split("") : b, g = 0;
            g < e;
            g++
          )
            if (g in f && c.call(d, f[g], g, b)) return !0;
          return !1;
        };
  H.g.every =
    H.fb && (H.g.cb || Array.prototype.every)
      ? function (b, c, d) {
          return Array.prototype.every.call(b, c, d);
        }
      : function (b, c, d) {
          for (
            var e = b.length, f = H.L(b) ? b.split("") : b, g = 0;
            g < e;
            g++
          )
            if (g in f && !c.call(d, f[g], g, b)) return !1;
          return !0;
        };
  H.g.count = function (b, c, d) {
    var e = 0;
    H.g.forEach(
      b,
      function (f, g, h) {
        c.call(d, f, g, h) && ++e;
      },
      d
    );
    return e;
  };
  H.g.find = function (b, c, d) {
    c = H.g.findIndex(b, c, d);
    return 0 > c ? null : H.L(b) ? b.charAt(c) : b[c];
  };
  H.g.findIndex = function (b, c, d) {
    for (var e = b.length, f = H.L(b) ? b.split("") : b, g = 0; g < e; g++)
      if (g in f && c.call(d, f[g], g, b)) return g;
    return -1;
  };
  H.g.au = function (b, c, d) {
    c = H.g.Tl(b, c, d);
    return 0 > c ? null : H.L(b) ? b.charAt(c) : b[c];
  };
  H.g.Tl = function (b, c, d) {
    var e = b.length,
      f = H.L(b) ? b.split("") : b;
    for (--e; 0 <= e; e--) if (e in f && c.call(d, f[e], e, b)) return e;
    return -1;
  };
  H.g.contains = function (b, c) {
    return 0 <= H.g.indexOf(b, c);
  };
  H.g.Ca = function (b) {
    return 0 == b.length;
  };
  H.g.clear = function (b) {
    if (!H.isArray(b)) for (var c = b.length - 1; 0 <= c; c--) delete b[c];
    b.length = 0;
  };
  H.g.Zu = function (b, c) {
    H.g.contains(b, c) || b.push(c);
  };
  H.g.bi = function (b, c, d) {
    H.g.splice(b, d, 0, c);
  };
  H.g.av = function (b, c, d) {
    H.Sb(H.g.splice, b, d, 0).apply(null, c);
  };
  H.g.insertBefore = function (b, c, d) {
    var e;
    2 == arguments.length || 0 > (e = H.g.indexOf(b, d))
      ? b.push(c)
      : H.g.bi(b, c, e);
  };
  H.g.remove = function (b, c) {
    c = H.g.indexOf(b, c);
    var d;
    (d = 0 <= c) && H.g.kc(b, c);
    return d;
  };
  H.g.sw = function (b, c) {
    c = H.g.lastIndexOf(b, c);
    return 0 <= c ? (H.g.kc(b, c), !0) : !1;
  };
  H.g.kc = function (b, c) {
    return 1 == Array.prototype.splice.call(b, c, 1).length;
  };
  H.g.rw = function (b, c, d) {
    c = H.g.findIndex(b, c, d);
    return 0 <= c ? (H.g.kc(b, c), !0) : !1;
  };
  H.g.pw = function (b, c, d) {
    var e = 0;
    H.g.ph(b, function (f, g) {
      c.call(d, f, g, b) && H.g.kc(b, g) && e++;
    });
    return e;
  };
  H.g.concat = function (b) {
    return Array.prototype.concat.apply([], arguments);
  };
  H.g.join = function (b) {
    return Array.prototype.concat.apply([], arguments);
  };
  H.g.jb = function (b) {
    var c = b.length;
    if (0 < c) {
      for (var d = Array(c), e = 0; e < c; e++) d[e] = b[e];
      return d;
    }
    return [];
  };
  H.g.clone = H.g.jb;
  H.g.extend = function (b, c) {
    for (var d = 1; d < arguments.length; d++) {
      var e = arguments[d];
      if (H.ma(e)) {
        var f = b.length || 0,
          g = e.length || 0;
        b.length = f + g;
        for (var h = 0; h < g; h++) b[f + h] = e[h];
      } else b.push(e);
    }
  };
  H.g.splice = function (b, c, d, e) {
    return Array.prototype.splice.apply(b, H.g.slice(arguments, 1));
  };
  H.g.slice = function (b, c, d) {
    return 2 >= arguments.length
      ? Array.prototype.slice.call(b, c)
      : Array.prototype.slice.call(b, c, d);
  };
  H.g.Jn = function (b, c) {
    c = c || b;
    for (var d = {}, e = 0, f = 0; f < b.length; ) {
      var g = b[f++];
      var h = g;
      h = H.Da(h) ? "o" + H.Uh(h) : (typeof h).charAt(0) + h;
      Object.prototype.hasOwnProperty.call(d, h) || ((d[h] = !0), (c[e++] = g));
    }
    c.length = e;
  };
  H.g.Kg = function (b, c, d) {
    return H.g.Lg(b, d || H.g.sb, !1, c);
  };
  H.g.at = function (b, c, d) {
    return H.g.Lg(b, c, !0, void 0, d);
  };
  H.g.Lg = function (b, c, d, e, f) {
    for (var g = 0, h = b.length, k; g < h; ) {
      var m = (g + h) >> 1;
      var n = d ? c.call(f, b[m], m, b) : c(e, b[m]);
      0 < n ? (g = m + 1) : ((h = m), (k = !n));
    }
    return k ? g : ~g;
  };
  H.g.sort = function (b, c) {
    b.sort(c || H.g.sb);
  };
  H.g.mx = function (b, c) {
    for (var d = Array(b.length), e = 0; e < b.length; e++)
      d[e] = { index: e, value: b[e] };
    var f = c || H.g.sb;
    H.g.sort(d, function (g, h) {
      return f(g.value, h.value) || g.index - h.index;
    });
    for (e = 0; e < b.length; e++) b[e] = d[e].value;
  };
  H.g.qo = function (b, c, d) {
    var e = d || H.g.sb;
    H.g.sort(b, function (f, g) {
      return e(c(f), c(g));
    });
  };
  H.g.jx = function (b, c, d) {
    H.g.qo(
      b,
      function (e) {
        return e[c];
      },
      d
    );
  };
  H.g.wi = function (b) {
    for (var c = H.g.sb, d = 1; d < b.length; d++)
      if (0 < c(b[d - 1], b[d])) return !1;
    return !0;
  };
  H.g.Ob = function (b, c) {
    if (!H.ma(b) || !H.ma(c) || b.length != c.length) return !1;
    for (var d = b.length, e = H.g.eh, f = 0; f < d; f++)
      if (!e(b[f], c[f])) return !1;
    return !0;
  };
  H.g.nt = function (b, c, d) {
    d = d || H.g.sb;
    for (var e = Math.min(b.length, c.length), f = 0; f < e; f++) {
      var g = d(b[f], c[f]);
      if (0 != g) return g;
    }
    return H.g.sb(b.length, c.length);
  };
  H.g.sb = function (b, c) {
    return b > c ? 1 : b < c ? -1 : 0;
  };
  H.g.dv = function (b, c) {
    return -H.g.sb(b, c);
  };
  H.g.eh = function (b, c) {
    return b === c;
  };
  H.g.Zs = function (b, c, d) {
    d = H.g.Kg(b, c, d);
    return 0 > d ? (H.g.bi(b, c, -(d + 1)), !0) : !1;
  };
  H.g.$s = function (b, c, d) {
    c = H.g.Kg(b, c, d);
    return 0 <= c ? H.g.kc(b, c) : !1;
  };
  H.g.ct = function (b, c, d) {
    for (var e = {}, f = 0; f < b.length; f++) {
      var g = b[f],
        h = c.call(d, g, f, b);
      H.ca(h) && (e[h] || (e[h] = [])).push(g);
    }
    return e;
  };
  H.g.Ao = function (b, c, d) {
    var e = {};
    H.g.forEach(b, function (f, g) {
      e[c.call(d, f, g, b)] = f;
    });
    return e;
  };
  H.g.Qd = function (b, c, d) {
    var e = [],
      f = 0,
      g = b;
    d = d || 1;
    void 0 !== c && ((f = b), (g = c));
    if (0 > d * (g - f)) return [];
    if (0 < d) for (b = f; b < g; b += d) e.push(b);
    else for (b = f; b > g; b += d) e.push(b);
    return e;
  };
  H.g.repeat = function (b, c) {
    for (var d = [], e = 0; e < c; e++) d[e] = b;
    return d;
  };
  H.g.flatten = function (b) {
    for (var c = [], d = 0; d < arguments.length; d++) {
      var e = arguments[d];
      if (H.isArray(e))
        for (var f = 0; f < e.length; f += 8192) {
          var g = H.g.slice(e, f, f + 8192);
          g = H.g.flatten.apply(null, g);
          for (var h = 0; h < g.length; h++) c.push(g[h]);
        }
      else c.push(e);
    }
    return c;
  };
  H.g.rotate = function (b, c) {
    b.length &&
      ((c %= b.length),
      0 < c
        ? Array.prototype.unshift.apply(b, b.splice(-c, c))
        : 0 > c && Array.prototype.push.apply(b, b.splice(0, -c)));
    return b;
  };
  H.g.Xv = function (b, c, d) {
    c = Array.prototype.splice.call(b, c, 1);
    Array.prototype.splice.call(b, d, 0, c[0]);
  };
  H.g.uj = function (b) {
    if (!arguments.length) return [];
    for (var c = [], d = arguments[0].length, e = 1; e < arguments.length; e++)
      arguments[e].length < d && (d = arguments[e].length);
    for (e = 0; e < d; e++) {
      for (var f = [], g = 0; g < arguments.length; g++)
        f.push(arguments[g][e]);
      c.push(f);
    }
    return c;
  };
  H.g.ix = function (b, c) {
    c = c || Math.random;
    for (var d = b.length - 1; 0 < d; d--) {
      var e = Math.floor(c() * (d + 1)),
        f = b[d];
      b[d] = b[e];
      b[e] = f;
    }
  };
  H.g.tt = function (b, c) {
    var d = [];
    H.g.forEach(c, function (e) {
      d.push(b[e]);
    });
    return d;
  };
  H.g.qt = function (b, c, d) {
    return H.g.concat.apply([], H.g.map(b, c, d));
  };
  H.async = {};
  H.async.Wc = function (b, c, d) {
    this.bn = d;
    this.Al = b;
    this.On = c;
    this.Fd = 0;
    this.zd = null;
  };
  H.async.Wc.prototype.get = function () {
    if (0 < this.Fd) {
      this.Fd--;
      var b = this.zd;
      this.zd = b.next;
      b.next = null;
    } else b = this.Al();
    return b;
  };
  H.async.Wc.prototype.put = function (b) {
    this.On(b);
    this.Fd < this.bn && (this.Fd++, (b.next = this.zd), (this.zd = b));
  };
  H.debug.pa = {};
  H.debug.bq = B();
  H.debug.pa.jc = [];
  H.debug.pa.qf = [];
  H.debug.pa.Mi = !1;
  H.debug.pa.register = function (b) {
    H.debug.pa.jc[H.debug.pa.jc.length] = b;
    if (H.debug.pa.Mi)
      for (var c = H.debug.pa.qf, d = 0; d < c.length; d++)
        b(H.bind(c[d].So, c[d]));
  };
  H.debug.pa.Wv = function (b) {
    H.debug.pa.Mi = !0;
    for (var c = H.bind(b.So, b), d = 0; d < H.debug.pa.jc.length; d++)
      H.debug.pa.jc[d](c);
    H.debug.pa.qf.push(b);
  };
  H.debug.pa.Fx = function (b) {
    var c = H.debug.pa.qf;
    b = H.bind(b.K, b);
    for (var d = 0; d < H.debug.pa.jc.length; d++) H.debug.pa.jc[d](b);
    c.length--;
  };
  H.a.m = {};
  H.a.m.we = function (b) {
    if (H.m.za) {
      var c = H.a.m.ec(b);
      c &&
        (!b || (!(b instanceof c.Location) && b instanceof c.Element)) &&
        H.m.xa(
          "Argument is not a Location (or a non-Element mock); got: %s",
          H.a.m.dh(b)
        );
    }
  };
  H.a.m.Aa = function (b, c) {
    if (H.m.za) {
      var d = H.a.m.ec(b);
      d &&
        "undefined" != typeof d[c] &&
        ((b &&
          (b instanceof d[c] ||
            !(b instanceof d.Location || b instanceof d.Element))) ||
          H.m.xa(
            "Argument is not a %s (or a non-Element, non-Location mock); got: %s",
            c,
            H.a.m.dh(b)
          ));
    }
    return b;
  };
  H.a.m.Uk = function (b) {
    H.a.m.Aa(b, "HTMLAnchorElement");
  };
  H.a.m.Wk = function (b) {
    return H.a.m.Aa(b, "HTMLButtonElement");
  };
  H.a.m.bl = function (b) {
    H.a.m.Aa(b, "HTMLLinkElement");
  };
  H.a.m.$k = function (b) {
    H.a.m.Aa(b, "HTMLImageElement");
  };
  H.a.m.Vk = function (b) {
    H.a.m.Aa(b, "HTMLAudioElement");
  };
  H.a.m.dl = function (b) {
    H.a.m.Aa(b, "HTMLVideoElement");
  };
  H.a.m.al = function (b) {
    return H.a.m.Aa(b, "HTMLInputElement");
  };
  H.a.m.Rs = function (b) {
    return H.a.m.Aa(b, "HTMLTextAreaElement");
  };
  H.a.m.Qs = function (b) {
    return H.a.m.Aa(b, "HTMLCanvasElement");
  };
  H.a.m.Xk = function (b) {
    H.a.m.Aa(b, "HTMLEmbedElement");
  };
  H.a.m.Yk = function (b) {
    return H.a.m.Aa(b, "HTMLFormElement");
  };
  H.a.m.Zk = function (b) {
    H.a.m.Aa(b, "HTMLFrameElement");
  };
  H.a.m.Gg = function (b) {
    H.a.m.Aa(b, "HTMLIFrameElement");
  };
  H.a.m.cl = function (b) {
    H.a.m.Aa(b, "HTMLObjectElement");
  };
  H.a.m.Hg = function (b) {
    H.a.m.Aa(b, "HTMLScriptElement");
  };
  H.a.m.dh = function (b) {
    if (H.Da(b))
      try {
        return (
          b.constructor.displayName ||
          b.constructor.name ||
          Object.prototype.toString.call(b)
        );
      } catch (c) {
        return "<object could not be stringified>";
      }
    else return void 0 === b ? "undefined" : null === b ? "null" : typeof b;
  };
  H.a.m.ec = function (b) {
    try {
      var c = b && b.ownerDocument,
        d = c && (c.defaultView || c.parentWindow);
      d = d || H.global;
      if (d.Element && d.Location) return d;
    } catch (e) {}
    return null;
  };
  H.V = {};
  H.V.Vg = function (b) {
    return function () {
      return b;
    };
  };
  H.V.cq = E(!1);
  H.V.ns = E(!0);
  H.V.mr = E(null);
  H.V.ai = A();
  H.V.error = function (b) {
    return function () {
      throw Error(b);
    };
  };
  H.V.xa = function (b) {
    return function () {
      throw b;
    };
  };
  H.V.lock = function (b, c) {
    c = c || 0;
    return function () {
      return b.apply(this, Array.prototype.slice.call(arguments, 0, c));
    };
  };
  H.V.cw = function (b) {
    return function () {
      return arguments[b];
    };
  };
  H.V.iw = function (b, c) {
    var d = Array.prototype.slice.call(arguments, 1);
    return function () {
      var e = Array.prototype.slice.call(arguments);
      e.push.apply(e, d);
      return b.apply(this, e);
    };
  };
  H.V.Jx = function (b, c) {
    return H.V.fo(b, H.V.Vg(c));
  };
  H.V.Ut = function (b, c) {
    return function (d) {
      return c ? b == d : b === d;
    };
  };
  H.V.ot = function (b, c) {
    var d = arguments,
      e = d.length;
    return function () {
      var f;
      e && (f = d[e - 1].apply(this, arguments));
      for (var g = e - 2; 0 <= g; g--) f = d[g].call(this, f);
      return f;
    };
  };
  H.V.fo = function (b) {
    var c = arguments,
      d = c.length;
    return function () {
      for (var e, f = 0; f < d; f++) e = c[f].apply(this, arguments);
      return e;
    };
  };
  H.V.and = function (b) {
    var c = arguments,
      d = c.length;
    return function () {
      for (var e = 0; e < d; e++) if (!c[e].apply(this, arguments)) return !1;
      return !0;
    };
  };
  H.V.or = function (b) {
    var c = arguments,
      d = c.length;
    return function () {
      for (var e = 0; e < d; e++) if (c[e].apply(this, arguments)) return !0;
      return !1;
    };
  };
  H.V.xn = function (b) {
    return function () {
      return !b.apply(this, arguments);
    };
  };
  H.V.create = function (b, c) {
    function d() {}
    d.prototype = b.prototype;
    var e = new d();
    b.apply(e, Array.prototype.slice.call(arguments, 1));
    return e;
  };
  H.V.Jj = !0;
  H.V.ol = function (b) {
    var c = !1,
      d;
    return function () {
      if (!H.V.Jj) return b();
      c || ((d = b()), (c = !0));
      return d;
    };
  };
  H.V.once = function (b) {
    var c = b;
    return function () {
      if (c) {
        var d = c;
        c = null;
        d();
      }
    };
  };
  H.V.It = function (b, c, d) {
    var e = 0;
    return function (f) {
      H.global.clearTimeout(e);
      var g = arguments;
      e = H.global.setTimeout(function () {
        b.apply(d, g);
      }, c);
    };
  };
  H.V.vx = function (b, c, d) {
    function e() {
      g = H.global.setTimeout(f, c);
      b.apply(d, k);
    }
    function f() {
      g = 0;
      h && ((h = !1), e());
    }
    var g = 0,
      h = !1,
      k = [];
    return function (m) {
      k = arguments;
      g ? (h = !0) : e();
    };
  };
  H.V.mw = function (b, c, d) {
    function e() {
      f = 0;
    }
    var f = 0;
    return function (g) {
      f || ((f = H.global.setTimeout(e, c)), b.apply(d, arguments));
    };
  };
  H.a.zq = B();
  H.a.f = function (b) {
    this.wo = b;
  };
  H.a.f.prototype.toString = D("wo");
  H.a.f.Uo = new H.a.f("A");
  H.a.f.Vo = new H.a.f("ABBR");
  H.a.f.Xo = new H.a.f("ACRONYM");
  H.a.f.Yo = new H.a.f("ADDRESS");
  H.a.f.bp = new H.a.f("APPLET");
  H.a.f.cp = new H.a.f("AREA");
  H.a.f.ep = new H.a.f("ARTICLE");
  H.a.f.fp = new H.a.f("ASIDE");
  H.a.f.kp = new H.a.f("AUDIO");
  H.a.f.lp = new H.a.f("B");
  H.a.f.mp = new H.a.f("BASE");
  H.a.f.np = new H.a.f("BASEFONT");
  H.a.f.op = new H.a.f("BDI");
  H.a.f.pp = new H.a.f("BDO");
  H.a.f.sp = new H.a.f("BIG");
  H.a.f.tp = new H.a.f("BLOCKQUOTE");
  H.a.f.up = new H.a.f("BODY");
  H.a.f.Xf = new H.a.f("BR");
  H.a.f.vp = new H.a.f("BUTTON");
  H.a.f.wp = new H.a.f("CANVAS");
  H.a.f.xp = new H.a.f("CAPTION");
  H.a.f.zp = new H.a.f("CENTER");
  H.a.f.Ap = new H.a.f("CITE");
  H.a.f.Bp = new H.a.f("CODE");
  H.a.f.Cp = new H.a.f("COL");
  H.a.f.Dp = new H.a.f("COLGROUP");
  H.a.f.Ep = new H.a.f("COMMAND");
  H.a.f.Gp = new H.a.f("DATA");
  H.a.f.Hp = new H.a.f("DATALIST");
  H.a.f.Ip = new H.a.f("DD");
  H.a.f.Jp = new H.a.f("DEL");
  H.a.f.Lp = new H.a.f("DETAILS");
  H.a.f.Mp = new H.a.f("DFN");
  H.a.f.Np = new H.a.f("DIALOG");
  H.a.f.Op = new H.a.f("DIR");
  H.a.f.Pp = new H.a.f("DIV");
  H.a.f.Qp = new H.a.f("DL");
  H.a.f.Tp = new H.a.f("DT");
  H.a.f.Wp = new H.a.f("EM");
  H.a.f.Xp = new H.a.f("EMBED");
  H.a.f.fq = new H.a.f("FIELDSET");
  H.a.f.gq = new H.a.f("FIGCAPTION");
  H.a.f.hq = new H.a.f("FIGURE");
  H.a.f.iq = new H.a.f("FONT");
  H.a.f.jq = new H.a.f("FOOTER");
  H.a.f.kq = new H.a.f("FORM");
  H.a.f.lq = new H.a.f("FRAME");
  H.a.f.mq = new H.a.f("FRAMESET");
  H.a.f.oq = new H.a.f("H1");
  H.a.f.pq = new H.a.f("H2");
  H.a.f.qq = new H.a.f("H3");
  H.a.f.rq = new H.a.f("H4");
  H.a.f.sq = new H.a.f("H5");
  H.a.f.tq = new H.a.f("H6");
  H.a.f.uq = new H.a.f("HEAD");
  H.a.f.vq = new H.a.f("HEADER");
  H.a.f.wq = new H.a.f("HGROUP");
  H.a.f.xq = new H.a.f("HR");
  H.a.f.yq = new H.a.f("HTML");
  H.a.f.Aq = new H.a.f("I");
  H.a.f.Dq = new H.a.f("IFRAME");
  H.a.f.Eq = new H.a.f("IMG");
  H.a.f.Fq = new H.a.f("INPUT");
  H.a.f.Gq = new H.a.f("INS");
  H.a.f.Lq = new H.a.f("ISINDEX");
  H.a.f.Oq = new H.a.f("KBD");
  H.a.f.Pq = new H.a.f("KEYGEN");
  H.a.f.Qq = new H.a.f("LABEL");
  H.a.f.Sq = new H.a.f("LEGEND");
  H.a.f.Tq = new H.a.f("LI");
  H.a.f.Uq = new H.a.f("LINK");
  H.a.f.Yq = new H.a.f("MAIN");
  H.a.f.Zq = new H.a.f("MAP");
  H.a.f.$q = new H.a.f("MARK");
  H.a.f.ar = new H.a.f("MATH");
  H.a.f.cr = new H.a.f("MENU");
  H.a.f.dr = new H.a.f("MENUITEM");
  H.a.f.er = new H.a.f("META");
  H.a.f.fr = new H.a.f("METER");
  H.a.f.ir = new H.a.f("NAV");
  H.a.f.jr = new H.a.f("NOFRAMES");
  H.a.f.kr = new H.a.f("NOSCRIPT");
  H.a.f.nr = new H.a.f("OBJECT");
  H.a.f.qr = new H.a.f("OL");
  H.a.f.rr = new H.a.f("OPTGROUP");
  H.a.f.sr = new H.a.f("OPTION");
  H.a.f.tr = new H.a.f("OUTPUT");
  H.a.f.ur = new H.a.f("P");
  H.a.f.vr = new H.a.f("PARAM");
  H.a.f.wr = new H.a.f("PICTURE");
  H.a.f.yr = new H.a.f("PRE");
  H.a.f.Ar = new H.a.f("PROGRESS");
  H.a.f.Q = new H.a.f("Q");
  H.a.f.Br = new H.a.f("RP");
  H.a.f.Cr = new H.a.f("RT");
  H.a.f.Dr = new H.a.f("RTC");
  H.a.f.Er = new H.a.f("RUBY");
  H.a.f.Gr = new H.a.f("S");
  H.a.f.Jr = new H.a.f("SAMP");
  H.a.f.Kr = new H.a.f(l);
  H.a.f.Lr = new H.a.f("SECTION");
  H.a.f.Mr = new H.a.f("SELECT");
  H.a.f.Or = new H.a.f("SMALL");
  H.a.f.Pr = new H.a.f("SOURCE");
  H.a.f.Qr = new H.a.f("SPAN");
  H.a.f.Rr = new H.a.f("STRIKE");
  H.a.f.Sr = new H.a.f("STRONG");
  H.a.f.Tr = new H.a.f("STYLE");
  H.a.f.Ur = new H.a.f("SUB");
  H.a.f.Vr = new H.a.f("SUMMARY");
  H.a.f.Wr = new H.a.f("SUP");
  H.a.f.Xr = new H.a.f("SVG");
  H.a.f.Yr = new H.a.f("TABLE");
  H.a.f.Zr = new H.a.f("TBODY");
  H.a.f.$r = new H.a.f("TD");
  H.a.f.bs = new H.a.f("TEMPLATE");
  H.a.f.cs = new H.a.f("TEXTAREA");
  H.a.f.ds = new H.a.f("TFOOT");
  H.a.f.es = new H.a.f("TH");
  H.a.f.fs = new H.a.f("THEAD");
  H.a.f.gs = new H.a.f("TIME");
  H.a.f.hs = new H.a.f("TITLE");
  H.a.f.js = new H.a.f("TR");
  H.a.f.ks = new H.a.f("TRACK");
  H.a.f.ps = new H.a.f("TT");
  H.a.f.rs = new H.a.f("U");
  H.a.f.ss = new H.a.f("UL");
  H.a.f.ts = new H.a.f("VAR");
  H.a.f.us = new H.a.f("VIDEO");
  H.a.f.vs = new H.a.f("WBR");
  H.object = {};
  H.object.is = function (b, c) {
    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
  };
  H.object.forEach = function (b, c, d) {
    for (var e in b) c.call(d, b[e], e, b);
  };
  H.object.filter = function (b, c, d) {
    var e = {},
      f;
    for (f in b) c.call(d, b[f], f, b) && (e[f] = b[f]);
    return e;
  };
  H.object.map = function (b, c, d) {
    var e = {},
      f;
    for (f in b) e[f] = c.call(d, b[f], f, b);
    return e;
  };
  H.object.some = function (b, c, d) {
    for (var e in b) if (c.call(d, b[e], e, b)) return !0;
    return !1;
  };
  H.object.every = function (b, c, d) {
    for (var e in b) if (!c.call(d, b[e], e, b)) return !1;
    return !0;
  };
  H.object.ub = function (b) {
    var c = 0,
      d;
    for (d in b) c++;
    return c;
  };
  H.object.tu = function (b) {
    for (var c in b) return c;
  };
  H.object.uu = function (b) {
    for (var c in b) return b[c];
  };
  H.object.contains = function (b, c) {
    return H.object.Mb(b, c);
  };
  H.object.ga = function (b) {
    var c = [],
      d = 0,
      e;
    for (e in b) c[d++] = b[e];
    return c;
  };
  H.object.la = function (b) {
    var c = [],
      d = 0,
      e;
    for (e in b) c[d++] = e;
    return c;
  };
  H.object.Ou = function (b, c) {
    var d = H.ma(c),
      e = d ? c : arguments;
    for (d = d ? 0 : 1; d < e.length; d++) {
      if (null == b) return;
      b = b[e[d]];
    }
    return b;
  };
  H.object.Lb = function (b, c) {
    return null !== b && c in b;
  };
  H.object.Mb = function (b, c) {
    for (var d in b) if (b[d] == c) return !0;
    return !1;
  };
  H.object.Ul = function (b, c, d) {
    for (var e in b) if (c.call(d, b[e], e, b)) return e;
  };
  H.object.bu = function (b, c, d) {
    return (c = H.object.Ul(b, c, d)) && b[c];
  };
  H.object.Ca = function (b) {
    for (var c in b) return !1;
    return !0;
  };
  H.object.clear = function (b) {
    for (var c in b) delete b[c];
  };
  H.object.remove = function (b, c) {
    var d;
    (d = c in b) && delete b[c];
    return d;
  };
  H.object.add = function (b, c, d) {
    if (null !== b && c in b)
      throw Error('The object already contains the key "' + c + '"');
    H.object.set(b, c, d);
  };
  H.object.get = function (b, c, d) {
    return null !== b && c in b ? b[c] : d;
  };
  H.object.set = function (b, c, d) {
    b[c] = d;
  };
  H.object.Tw = function (b, c, d) {
    return c in b ? b[c] : (b[c] = d);
  };
  H.object.hx = function (b, c, d) {
    if (c in b) return b[c];
    d = d();
    return (b[c] = d);
  };
  H.object.Ob = function (b, c) {
    for (var d in b) if (!(d in c) || b[d] !== c[d]) return !1;
    for (var e in c) if (!(e in b)) return !1;
    return !0;
  };
  H.object.clone = function (b) {
    var c = {},
      d;
    for (d in b) c[d] = b[d];
    return c;
  };
  H.object.Jo = function (b) {
    var c = H.ra(b);
    if (c == v || c == q) {
      if (H.Wa(b.clone)) return b.clone();
      c = c == q ? [] : {};
      for (var d in b) c[d] = H.object.Jo(b[d]);
      return c;
    }
    return b;
  };
  H.object.Co = function (b) {
    var c = {},
      d;
    for (d in b) c[b[d]] = d;
    return c;
  };
  H.object.qg = [
    "constructor",
    ba,
    "isPrototypeOf",
    ca,
    ea,
    "toString",
    "valueOf",
  ];
  H.object.extend = function (b, c) {
    for (var d, e, f = 1; f < arguments.length; f++) {
      e = arguments[f];
      for (d in e) b[d] = e[d];
      for (var g = 0; g < H.object.qg.length; g++)
        (d = H.object.qg[g]),
          Object.prototype.hasOwnProperty.call(e, d) && (b[d] = e[d]);
    }
  };
  H.object.create = function (b) {
    var c = arguments.length;
    if (1 == c && H.isArray(arguments[0]))
      return H.object.create.apply(null, arguments[0]);
    if (c % 2) throw Error(p);
    for (var d = {}, e = 0; e < c; e += 2) d[arguments[e]] = arguments[e + 1];
    return d;
  };
  H.object.yl = function (b) {
    var c = arguments.length;
    if (1 == c && H.isArray(arguments[0]))
      return H.object.yl.apply(null, arguments[0]);
    for (var d = {}, e = 0; e < c; e++) d[arguments[e]] = !0;
    return d;
  };
  H.object.zt = function (b) {
    var c = b;
    Object.isFrozen &&
      !Object.isFrozen(b) &&
      ((c = Object.create(b)), Object.freeze(c));
    return c;
  };
  H.object.pv = function (b) {
    return !!Object.isFrozen && Object.isFrozen(b);
  };
  H.object.su = function (b, c, d) {
    if (!b) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf)
      return H.object.la(b);
    for (
      var e = {};
      b && (b !== Object.prototype || c) && (b !== Function.prototype || d);

    ) {
      for (var f = Object.getOwnPropertyNames(b), g = 0; g < f.length; g++)
        e[f[g]] = !0;
      b = Object.getPrototypeOf(b);
    }
    return H.object.la(e);
  };
  H.object.Nu = function (b) {
    return (b = Object.getPrototypeOf(b.prototype)) && b.constructor;
  };
  H.a.tags = {};
  H.a.tags.Nk = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  };
  H.a.tags.Ym = function (b) {
    return !0 === H.a.tags.Nk[b];
  };
  H.b = {};
  H.b.Ya = {};
  H.b.Ya.ab = H.ad ? H.$g(H.ad + "#html") : null;
  H.c = {};
  H.c.qs = B();
  H.c.M = function (b, c) {
    this.Ef = (b === H.c.M.fg && c) || "";
    this.Dk = H.c.M.wg;
  };
  H.c.M.prototype.Va = !0;
  H.c.M.prototype.Ga = D("Ef");
  H.c.M.prototype.toString = function () {
    return "Const{" + this.Ef + "}";
  };
  H.c.M.K = function (b) {
    if (b instanceof H.c.M && b.constructor === H.c.M && b.Dk === H.c.M.wg)
      return b.Ef;
    H.m.xa("expected object of type Const, got '" + b + "'");
    return "type_error:Const";
  };
  H.c.M.from = function (b) {
    return new H.c.M(H.c.M.fg, b);
  };
  H.c.M.wg = {};
  H.c.M.fg = {};
  H.c.M.EMPTY = H.c.M.from("");
  H.b.W = function () {
    this.Jd = "";
    this.tk = H.b.W.wa;
  };
  H.b.W.prototype.Va = !0;
  H.b.W.wa = {};
  H.b.W.Fc = function (b) {
    b = H.c.M.K(b);
    return 0 === b.length ? H.b.W.EMPTY : H.b.W.uc(b);
  };
  H.b.W.hu = function (b, c) {
    for (var d = [], e = 1; e < arguments.length; e++)
      d.push(H.b.W.ej(arguments[e]));
    return H.b.W.uc("(" + H.c.M.K(b) + ")(" + d.join(", ") + ");");
  };
  H.b.W.ku = function (b) {
    return H.b.W.uc(H.b.W.ej(b));
  };
  H.b.W.prototype.Ga = function () {
    return this.Jd.toString();
  };
  H.sa &&
    (H.b.W.prototype.toString = function () {
      return "SafeScript{" + this.Jd + "}";
    });
  H.b.W.K = function (b) {
    return H.b.W.pj(b).toString();
  };
  H.b.W.pj = function (b) {
    if (b instanceof H.b.W && b.constructor === H.b.W && b.tk === H.b.W.wa)
      return b.Jd;
    H.m.xa("expected object of type SafeScript, got '" + b + a + H.ra(b));
    return "type_error:SafeScript";
  };
  H.b.W.ej = function (b) {
    return JSON.stringify(b).replace(/</g, "\\x3c");
  };
  H.b.W.uc = function (b) {
    return new H.b.W().Qb(b);
  };
  H.b.W.prototype.Qb = function (b) {
    this.Jd = H.b.Ya.ab ? H.b.Ya.ab.createScript(b) : b;
    return this;
  };
  H.b.W.EMPTY = H.b.W.uc("");
  H.Ua = {};
  H.Ua.url = {};
  H.Ua.url.wl = function (b) {
    return H.Ua.url.Vh().createObjectURL(b);
  };
  H.Ua.url.yw = function (b) {
    H.Ua.url.Vh().revokeObjectURL(b);
  };
  H.Ua.url.Vh = function () {
    var b = H.Ua.url.nh();
    if (null != b) return b;
    throw Error("This browser doesn't seem to support blob URLs");
  };
  H.Ua.url.nh = function () {
    return H.ca(H.global.URL) && H.ca(H.global.URL.createObjectURL)
      ? H.global.URL
      : H.ca(H.global.webkitURL) && H.ca(H.global.webkitURL.createObjectURL)
      ? H.global.webkitURL
      : H.ca(H.global.createObjectURL)
      ? H.global
      : null;
  };
  H.Ua.url.bt = function () {
    return null != H.Ua.url.nh();
  };
  H.i = {};
  H.i.j = {};
  H.i.j.ak = !1;
  H.i.j.jg =
    H.i.j.ak ||
    (("ar" == H.S.substring(0, 2).toLowerCase() ||
      "fa" == H.S.substring(0, 2).toLowerCase() ||
      "he" == H.S.substring(0, 2).toLowerCase() ||
      "iw" == H.S.substring(0, 2).toLowerCase() ||
      "ps" == H.S.substring(0, 2).toLowerCase() ||
      "sd" == H.S.substring(0, 2).toLowerCase() ||
      "ug" == H.S.substring(0, 2).toLowerCase() ||
      "ur" == H.S.substring(0, 2).toLowerCase() ||
      "yi" == H.S.substring(0, 2).toLowerCase()) &&
      (2 == H.S.length ||
        "-" == H.S.substring(2, 3) ||
        "_" == H.S.substring(2, 3))) ||
    (3 <= H.S.length &&
      "ckb" == H.S.substring(0, 3).toLowerCase() &&
      (3 == H.S.length ||
        "-" == H.S.substring(3, 4) ||
        "_" == H.S.substring(3, 4))) ||
    (7 <= H.S.length &&
      ("-" == H.S.substring(2, 3) || "_" == H.S.substring(2, 3)) &&
      ("adlm" == H.S.substring(3, 7).toLowerCase() ||
        "arab" == H.S.substring(3, 7).toLowerCase() ||
        "hebr" == H.S.substring(3, 7).toLowerCase() ||
        "nkoo" == H.S.substring(3, 7).toLowerCase() ||
        "rohg" == H.S.substring(3, 7).toLowerCase() ||
        "thaa" == H.S.substring(3, 7).toLowerCase())) ||
    (8 <= H.S.length &&
      ("-" == H.S.substring(3, 4) || "_" == H.S.substring(3, 4)) &&
      ("adlm" == H.S.substring(4, 8).toLowerCase() ||
        "arab" == H.S.substring(4, 8).toLowerCase() ||
        "hebr" == H.S.substring(4, 8).toLowerCase() ||
        "nkoo" == H.S.substring(4, 8).toLowerCase() ||
        "rohg" == H.S.substring(4, 8).toLowerCase() ||
        "thaa" == H.S.substring(4, 8).toLowerCase()));
  H.i.j.Wb = {
    gk: "\u202a",
    pk: "\u202b",
    pg: "\u202c",
    hk: "\u200e",
    qk: "\u200f",
  };
  H.i.j.aa = { Eb: 1, Fb: -1, Za: 0 };
  H.i.j.Zc = "right";
  H.i.j.Xc = "left";
  H.i.j.Cq = H.i.j.jg ? H.i.j.Xc : H.i.j.Zc;
  H.i.j.Bq = H.i.j.jg ? H.i.j.Zc : H.i.j.Xc;
  H.i.j.zo = function (b) {
    return typeof b == u
      ? 0 < b
        ? H.i.j.aa.Eb
        : 0 > b
        ? H.i.j.aa.Fb
        : H.i.j.aa.Za
      : null == b
      ? null
      : b
      ? H.i.j.aa.Fb
      : H.i.j.aa.Eb;
  };
  H.i.j.gc =
    "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
  H.i.j.lc =
    "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
  H.i.j.Am = /<[^>]*>|&[^;]+;/g;
  H.i.j.Cb = function (b, c) {
    return c ? b.replace(H.i.j.Am, "") : b;
  };
  H.i.j.Tn = new RegExp("[" + H.i.j.lc + "]");
  H.i.j.kn = new RegExp("[" + H.i.j.gc + "]");
  H.i.j.Ze = function (b, c) {
    return H.i.j.Tn.test(H.i.j.Cb(b, c));
  };
  H.i.j.Uu = H.i.j.Ze;
  H.i.j.Zh = function (b) {
    return H.i.j.kn.test(H.i.j.Cb(b, void 0));
  };
  H.i.j.nn = new RegExp("^[" + H.i.j.gc + "]");
  H.i.j.Yn = new RegExp("^[" + H.i.j.lc + "]");
  H.i.j.Tm = function (b) {
    return H.i.j.Yn.test(b);
  };
  H.i.j.Pm = function (b) {
    return H.i.j.nn.test(b);
  };
  H.i.j.xv = function (b) {
    return !H.i.j.Pm(b) && !H.i.j.Tm(b);
  };
  H.i.j.ln = new RegExp("^[^" + H.i.j.lc + "]*[" + H.i.j.gc + "]");
  H.i.j.Vn = new RegExp("^[^" + H.i.j.gc + "]*[" + H.i.j.lc + "]");
  H.i.j.cj = function (b, c) {
    return H.i.j.Vn.test(H.i.j.Cb(b, c));
  };
  H.i.j.Ev = H.i.j.cj;
  H.i.j.so = function (b, c) {
    return H.i.j.ln.test(H.i.j.Cb(b, c));
  };
  H.i.j.vv = H.i.j.so;
  H.i.j.ui = /^http:\/\/.*/;
  H.i.j.yv = function (b, c) {
    b = H.i.j.Cb(b, c);
    return H.i.j.ui.test(b) || (!H.i.j.Zh(b) && !H.i.j.Ze(b));
  };
  H.i.j.mn = new RegExp("[" + H.i.j.gc + "][^" + H.i.j.lc + "]*$");
  H.i.j.Wn = new RegExp("[" + H.i.j.lc + "][^" + H.i.j.gc + "]*$");
  H.i.j.Ll = function (b, c) {
    return H.i.j.mn.test(H.i.j.Cb(b, c));
  };
  H.i.j.uv = H.i.j.Ll;
  H.i.j.Ml = function (b, c) {
    return H.i.j.Wn.test(H.i.j.Cb(b, c));
  };
  H.i.j.Cv = H.i.j.Ml;
  H.i.j.Xn =
    /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
  H.i.j.Dv = function (b) {
    return H.i.j.Xn.test(b);
  };
  H.i.j.ll = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
  H.i.j.Su = function (b, c) {
    c = (void 0 === c ? H.i.j.Ze(b) : c) ? H.i.j.Wb.qk : H.i.j.Wb.hk;
    return b.replace(H.i.j.ll, c + "$&" + c);
  };
  H.i.j.Rt = function (b) {
    return "<" == b.charAt(0)
      ? b.replace(/<\w+/, "$& dir=rtl")
      : "\n<span dir=rtl>" + b + "</span>";
  };
  H.i.j.St = function (b) {
    return H.i.j.Wb.pk + b + H.i.j.Wb.pg;
  };
  H.i.j.Pt = function (b) {
    return "<" == b.charAt(0)
      ? b.replace(/<\w+/, "$& dir=ltr")
      : "\n<span dir=ltr>" + b + "</span>";
  };
  H.i.j.Qt = function (b) {
    return H.i.j.Wb.gk + b + H.i.j.Wb.pg;
  };
  H.i.j.Hl =
    /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
  H.i.j.$m = /left/gi;
  H.i.j.Sn = /right/gi;
  H.i.j.xo = /%%%%/g;
  H.i.j.Uv = function (b) {
    return b
      .replace(H.i.j.Hl, ":$1 $4 $3 $2")
      .replace(H.i.j.$m, "%%%%")
      .replace(H.i.j.Sn, H.i.j.Xc)
      .replace(H.i.j.xo, H.i.j.Zc);
  };
  H.i.j.Jl = /([\u0591-\u05f2])"/g;
  H.i.j.po = /([\u0591-\u05f2])'/g;
  H.i.j.Zv = function (b) {
    return b.replace(H.i.j.Jl, "$1\u05f4").replace(H.i.j.po, "$1\u05f3");
  };
  H.i.j.Qo = /\s+/;
  H.i.j.ym = /[\d\u06f0-\u06f9]/;
  H.i.j.Un = 0.4;
  H.i.j.hh = function (b, c) {
    var d = 0,
      e = 0,
      f = !1;
    b = H.i.j.Cb(b, c).split(H.i.j.Qo);
    for (c = 0; c < b.length; c++) {
      var g = b[c];
      H.i.j.cj(g)
        ? (d++, e++)
        : H.i.j.ui.test(g)
        ? (f = !0)
        : H.i.j.Zh(g)
        ? e++
        : H.i.j.ym.test(g) && (f = !0);
    }
    return 0 == e
      ? f
        ? H.i.j.aa.Eb
        : H.i.j.aa.Za
      : d / e > H.i.j.Un
      ? H.i.j.aa.Fb
      : H.i.j.aa.Eb;
  };
  H.i.j.Kt = function (b, c) {
    return H.i.j.hh(b, c) == H.i.j.aa.Fb;
  };
  H.i.j.Mw = function (b, c) {
    b &&
      (c = H.i.j.zo(c)) &&
      ((b.style.textAlign = c == H.i.j.aa.Fb ? H.i.j.Zc : H.i.j.Xc),
      (b.dir = c == H.i.j.aa.Fb ? "rtl" : "ltr"));
  };
  H.i.j.Nw = function (b, c) {
    switch (H.i.j.hh(c)) {
      case H.i.j.aa.Eb:
        b.dir = "ltr";
        break;
      case H.i.j.aa.Fb:
        b.dir = "rtl";
        break;
      default:
        b.removeAttribute("dir");
    }
  };
  H.i.j.Up = B();
  H.b.H = function () {
    this.Nd = "";
    this.Hf = null;
    this.Fk = H.b.H.wa;
  };
  H.b.H.prototype.Va = !0;
  H.b.H.prototype.Ga = function () {
    return this.Nd.toString();
  };
  H.b.H.prototype.af = !0;
  H.b.H.prototype.vb = function () {
    return H.i.j.aa.Eb;
  };
  H.sa &&
    (H.b.H.prototype.toString = function () {
      return "TrustedResourceUrl{" + this.Nd + "}";
    });
  H.b.H.K = function (b) {
    return H.b.H.Zd(b).toString();
  };
  H.b.H.Zd = function (b) {
    if (b instanceof H.b.H && b.constructor === H.b.H && b.Fk === H.b.H.wa)
      return b.Nd;
    H.m.xa(
      "expected object of type TrustedResourceUrl, got '" + b + a + H.ra(b)
    );
    return "type_error:TrustedResourceUrl";
  };
  H.b.H.na = function (b) {
    return b.Hf ? b.Hf : H.b.H.K(b);
  };
  H.b.H.format = function (b, c) {
    var d = H.c.M.K(b);
    if (!H.b.H.Hj.test(d))
      throw Error("Invalid TrustedResourceUrl format: " + d);
    b = d.replace(H.b.H.bk, function (e, f) {
      if (!Object.prototype.hasOwnProperty.call(c, f))
        throw Error(
          'Found marker, "' +
            f +
            '", in format string, "' +
            d +
            '", but no valid label mapping found in args: ' +
            JSON.stringify(c)
        );
      e = c[f];
      return e instanceof H.c.M ? H.c.M.K(e) : encodeURIComponent(String(e));
    });
    return H.b.H.xc(b);
  };
  H.b.H.bk = /%{(\w+)}/g;
  H.b.H.Hj =
    /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
  H.b.H.Ik = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
  H.b.H.eu = function (b, c, d, e) {
    b = H.b.H.format(b, c);
    b = H.b.H.K(b);
    b = H.b.H.Ik.exec(b);
    c = b[3] || "";
    return H.b.H.xc(b[1] + H.b.H.dj("?", b[2] || "", d) + H.b.H.dj("#", c, e));
  };
  H.b.H.Fc = function (b) {
    return H.b.H.xc(H.c.M.K(b));
  };
  H.b.H.iu = function (b) {
    for (var c = "", d = 0; d < b.length; d++) c += H.c.M.K(b[d]);
    return H.b.H.xc(c);
  };
  H.b.H.wa = {};
  H.b.H.xc = function (b) {
    var c = new H.b.H();
    c.Nd = H.b.Ya.ab ? H.b.Ya.ab.createScriptURL(b) : b;
    H.b.Ya.ab && (c.Hf = H.b.Ya.ab.createURL(b));
    return c;
  };
  H.b.H.dj = function (b, c, d) {
    if (null == d) return c;
    if (H.L(d)) return d ? b + encodeURIComponent(d) : "";
    for (var e in d) {
      var f = d[e];
      f = H.isArray(f) ? f : [f];
      for (var g = 0; g < f.length; g++) {
        var h = f[g];
        null != h &&
          (c || (c = b),
          (c +=
            (c.length > b.length ? "&" : "") +
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(String(h))));
      }
    }
    return c;
  };
  H.c.A = {};
  H.c.A.startsWith = function (b, c) {
    return 0 == b.lastIndexOf(c, 0);
  };
  H.c.A.endsWith = function (b, c) {
    var d = b.length - c.length;
    return 0 <= d && b.indexOf(c, d) == d;
  };
  H.c.A.Ib = function (b, c) {
    return 0 == H.c.A.ed(c, b.substr(0, c.length));
  };
  H.c.A.Og = function (b, c) {
    return 0 == H.c.A.ed(c, b.substr(b.length - c.length, c.length));
  };
  H.c.A.Pg = function (b, c) {
    return b.toLowerCase() == c.toLowerCase();
  };
  H.c.A.Lc = function (b) {
    return /^[\s\xa0]*$/.test(b);
  };
  H.c.A.trim =
    H.pe && String.prototype.trim
      ? function (b) {
          return b.trim();
        }
      : function (b) {
          return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(b)[1];
        };
  H.c.A.ed = function (b, c) {
    b = String(b).toLowerCase();
    c = String(c).toLowerCase();
    return b < c ? -1 : b == c ? 0 : 1;
  };
  H.c.A.Nc = function (b, c) {
    return b.replace(/(\r\n|\r|\n)/g, c ? "<br />" : "<br>");
  };
  H.c.A.Ha = function (b, c) {
    if (c)
      b = b
        .replace(H.c.A.Lf, "&amp;")
        .replace(H.c.A.kg, "&lt;")
        .replace(H.c.A.gg, "&gt;")
        .replace(H.c.A.rg, "&quot;")
        .replace(H.c.A.tg, "&#39;")
        .replace(H.c.A.mg, "&#0;");
    else {
      if (!H.c.A.yj.test(b)) return b;
      -1 != b.indexOf("&") && (b = b.replace(H.c.A.Lf, "&amp;"));
      -1 != b.indexOf("<") && (b = b.replace(H.c.A.kg, "&lt;"));
      -1 != b.indexOf(">") && (b = b.replace(H.c.A.gg, "&gt;"));
      -1 != b.indexOf('"') && (b = b.replace(H.c.A.rg, "&quot;"));
      -1 != b.indexOf("'") && (b = b.replace(H.c.A.tg, "&#39;"));
      -1 != b.indexOf("\x00") && (b = b.replace(H.c.A.mg, "&#0;"));
    }
    return b;
  };
  H.c.A.Lf = /&/g;
  H.c.A.kg = /</g;
  H.c.A.gg = />/g;
  H.c.A.rg = /"/g;
  H.c.A.tg = /'/g;
  H.c.A.mg = /\x00/g;
  H.c.A.yj = /[\x00&<>"']/;
  H.c.A.sj = function (b) {
    return H.c.A.Nc(b.replace(/  /g, " &#160;"), void 0);
  };
  H.c.A.contains = function (b, c) {
    return -1 != b.indexOf(c);
  };
  H.c.A.fd = function (b, c) {
    return H.c.A.contains(b.toLowerCase(), c.toLowerCase());
  };
  H.c.A.Kb = function (b, c) {
    var d = 0;
    b = H.c.A.trim(String(b)).split(".");
    c = H.c.A.trim(String(c)).split(".");
    for (var e = Math.max(b.length, c.length), f = 0; 0 == d && f < e; f++) {
      var g = b[f] || "",
        h = c[f] || "";
      do {
        g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
        h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
        if (0 == g[0].length && 0 == h[0].length) break;
        d =
          H.c.A.Ae(
            0 == g[1].length ? 0 : parseInt(g[1], 10),
            0 == h[1].length ? 0 : parseInt(h[1], 10)
          ) ||
          H.c.A.Ae(0 == g[2].length, 0 == h[2].length) ||
          H.c.A.Ae(g[2], h[2]);
        g = g[3];
        h = h[3];
      } while (0 == d);
    }
    return d;
  };
  H.c.A.Ae = function (b, c) {
    return b < c ? -1 : b > c ? 1 : 0;
  };
  H.b.s = function () {
    this.Md = "";
    this.wk = H.b.s.wa;
  };
  H.b.s.ta = "about:invalid#zClosurez";
  H.b.s.prototype.Va = !0;
  H.b.s.prototype.Ga = function () {
    return this.Md.toString();
  };
  H.b.s.prototype.af = !0;
  H.b.s.prototype.vb = function () {
    return H.i.j.aa.Eb;
  };
  H.sa &&
    (H.b.s.prototype.toString = function () {
      return "SafeUrl{" + this.Md + "}";
    });
  H.b.s.K = function (b) {
    return H.b.s.na(b).toString();
  };
  H.b.s.na = function (b) {
    if (b instanceof H.b.s && b.constructor === H.b.s && b.wk === H.b.s.wa)
      return b.Md;
    H.m.xa("expected object of type SafeUrl, got '" + b + a + H.ra(b));
    return "type_error:SafeUrl";
  };
  H.b.s.Fc = function (b) {
    return H.b.s.Ba(H.c.M.K(b));
  };
  H.b.ne =
    /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
  H.b.s.Gv = function (b) {
    return H.b.ne.test(b);
  };
  H.b.s.gu = function (b) {
    b = H.b.ne.test(b.type) ? H.Ua.url.wl(b) : H.b.s.ta;
    return H.b.s.Ba(b);
  };
  H.b.Rj = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
  H.b.s.Wl = function (b) {
    b = b.replace(/(%0A|%0D)/g, "");
    var c = b.match(H.b.Rj);
    c = c && H.b.ne.test(c[1]);
    return H.b.s.Ba(c ? b : H.b.s.ta);
  };
  H.b.s.pu = function (b) {
    H.c.A.Ib(b, "tel:") || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.Ak =
    /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
  H.b.s.mu = function (b) {
    H.b.Ak.test(decodeURIComponent(b)) || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.ju = function (b) {
    H.c.A.Ib(b, "fb-messenger://share") || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.ru = function (b) {
    H.c.A.Ib(b, "whatsapp://send") || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.nu = function (b) {
    (H.c.A.Ib(b, "sms:") && H.b.s.Um(b)) || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.Um = function (b) {
    var c = b.indexOf("#");
    0 < c && (b = b.substring(0, c));
    c = b.match(/[?&]body=/gi);
    if (!c) return !0;
    if (1 < c.length) return !1;
    b = b.match(/[?&]body=([^&]*)/)[1];
    if (!b) return !0;
    try {
      decodeURIComponent(b);
    } catch (d) {
      return !1;
    }
    return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(b);
  };
  H.b.s.ou = function (b) {
    H.c.A.Ib(b, "ssh://") || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.Fw = function (b, c) {
    return H.b.s.uf(/^chrome-extension:\/\/([^\/]+)\//, b, c);
  };
  H.b.s.Hw = function (b, c) {
    return H.b.s.uf(/^moz-extension:\/\/([^\/]+)\//, b, c);
  };
  H.b.s.Gw = function (b, c) {
    return H.b.s.uf(/^ms-browser-extension:\/\/([^\/]+)\//, b, c);
  };
  H.b.s.uf = function (b, c, d) {
    (b = b.exec(c))
      ? ((b = b[1]),
        -1 ==
          (d instanceof H.c.M
            ? [H.c.M.K(d)]
            : d.map(function (e) {
                return H.c.M.K(e);
              })
          ).indexOf(b) && (c = H.b.s.ta))
      : (c = H.b.s.ta);
    return H.b.s.Ba(c);
  };
  H.b.s.qu = function (b) {
    return H.b.s.Ba(H.b.H.K(b));
  };
  H.b.oe = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
  H.b.s.Ir = H.b.oe;
  H.b.s.Td = function (b) {
    if (b instanceof H.b.s) return b;
    b = typeof b == v && b.Va ? b.Ga() : String(b);
    H.b.oe.test(b) || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.Pa = function (b, c) {
    if (b instanceof H.b.s) return b;
    b = typeof b == v && b.Va ? b.Ga() : String(b);
    if (c && /^data:/i.test(b) && ((c = H.b.s.Wl(b)), c.Ga() == b)) return c;
    H.b.oe.test(b) || (b = H.b.s.ta);
    return H.b.s.Ba(b);
  };
  H.b.s.wa = {};
  H.b.s.Ba = function (b) {
    var c = new H.b.s();
    c.Md = H.b.Ya.ab ? H.b.Ya.ab.createURL(b) : b;
    return c;
  };
  H.b.s.Wo = H.b.s.Ba("about:blank");
  H.b.D = function () {
    this.Ld = "";
    this.vk = H.b.D.wa;
  };
  H.b.D.prototype.Va = !0;
  H.b.D.wa = {};
  H.b.D.Fc = function (b) {
    b = H.c.M.K(b);
    return 0 === b.length ? H.b.D.EMPTY : H.b.D.vc(b);
  };
  H.b.D.prototype.Ga = D("Ld");
  H.sa &&
    (H.b.D.prototype.toString = function () {
      return "SafeStyle{" + this.Ld + "}";
    });
  H.b.D.K = function (b) {
    if (b instanceof H.b.D && b.constructor === H.b.D && b.vk === H.b.D.wa)
      return b.Ld;
    H.m.xa("expected object of type SafeStyle, got '" + b + a + H.ra(b));
    return "type_error:SafeStyle";
  };
  H.b.D.vc = function (b) {
    return new H.b.D().Qb(b);
  };
  H.b.D.prototype.Qb = function (b) {
    this.Ld = b;
    return this;
  };
  H.b.D.EMPTY = H.b.D.vc("");
  H.b.D.ta = "zClosurez";
  H.b.D.create = function (b) {
    var c = "",
      d;
    for (d in b) {
      if (!/^[-_a-zA-Z0-9]+$/.test(d))
        throw Error("Name allows only [-_a-zA-Z0-9], got: " + d);
      var e = b[d];
      null != e &&
        ((e = H.isArray(e) ? H.g.map(e, H.b.D.Vi).join(" ") : H.b.D.Vi(e)),
        (c += d + ":" + e + ";"));
    }
    return c ? H.b.D.vc(c) : H.b.D.EMPTY;
  };
  H.b.D.Vi = function (b) {
    if (b instanceof H.b.s)
      return (
        'url("' +
        H.b.s.K(b).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") +
        '")'
      );
    b = b instanceof H.c.M ? H.c.M.K(b) : H.b.D.bo(String(b));
    if (/[{;}]/.test(b))
      throw new H.m.oc("Value does not allow [{;}], got: %s.", [b]);
    return b;
  };
  H.b.D.bo = function (b) {
    var c = b
      .replace(H.b.D.eg, "$1")
      .replace(H.b.D.eg, "$1")
      .replace(H.b.D.xg, "url");
    if (H.b.D.Kk.test(c)) {
      if (H.b.D.Pj.test(b))
        return H.m.xa("String value disallows comments, got: " + b), H.b.D.ta;
      if (!H.b.D.um(b))
        return (
          H.m.xa("String value requires balanced quotes, got: " + b), H.b.D.ta
        );
      if (!H.b.D.vm(b))
        return (
          H.m.xa(
            "String value requires balanced square brackets and one identifier per pair of brackets, got: " +
              b
          ),
          H.b.D.ta
        );
    } else
      return (
        H.m.xa(
          "String value allows only " +
            H.b.D.Ag +
            " and simple functions, got: " +
            b
        ),
        H.b.D.ta
      );
    return H.b.D.co(b);
  };
  H.b.D.um = function (b) {
    for (var c = !0, d = !0, e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      "'" == f && d ? (c = !c) : '"' == f && c && (d = !d);
    }
    return c && d;
  };
  H.b.D.vm = function (b) {
    for (var c = !0, d = /^[-_a-zA-Z0-9]$/, e = 0; e < b.length; e++) {
      var f = b.charAt(e);
      if ("]" == f) {
        if (c) return !1;
        c = !0;
      } else if ("[" == f) {
        if (!c) return !1;
        c = !1;
      } else if (!c && !d.test(f)) return !1;
    }
    return c;
  };
  H.b.D.Ag = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
  H.b.D.Kk = new RegExp("^" + H.b.D.Ag + "+$");
  H.b.D.xg =
    /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
  H.b.D.eg =
    /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
  H.b.D.Pj = /\/\*/;
  H.b.D.co = function (b) {
    return b.replace(H.b.D.xg, function (c, d, e, f) {
      var g = "";
      e = e.replace(/^(['"])(.*)\1$/, function (h, k, m) {
        g = k;
        return m;
      });
      c = H.b.s.Td(e).Ga();
      return d + g + c + g + f;
    });
  };
  H.b.D.concat = function (b) {
    function c(e) {
      H.isArray(e) ? H.g.forEach(e, c) : (d += H.b.D.K(e));
    }
    var d = "";
    H.g.forEach(arguments, c);
    return d ? H.b.D.vc(d) : H.b.D.EMPTY;
  };
  H.b.Y = function () {
    this.Kd = "";
    this.uk = H.b.Y.wa;
  };
  H.b.Y.prototype.Va = !0;
  H.b.Y.wa = {};
  H.b.Y.Bt = function (b, c) {
    if (H.c.A.contains(b, "<"))
      throw Error("Selector does not allow '<', got: " + b);
    var d = b.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(d))
      throw Error(
        "Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " +
          b
      );
    if (!H.b.Y.tm(d))
      throw Error("() and [] in selector must be balanced, got: " + b);
    c instanceof H.b.D || (c = H.b.D.create(c));
    b = b + "{" + H.b.D.K(c).replace(/</g, "\\3C ") + "}";
    return H.b.Y.wc(b);
  };
  H.b.Y.tm = function (b) {
    for (var c = { "(": ")", "[": "]" }, d = [], e = 0; e < b.length; e++) {
      var f = b[e];
      if (c[f]) d.push(c[f]);
      else if (H.object.contains(c, f) && d.pop() != f) return !1;
    }
    return 0 == d.length;
  };
  H.b.Y.concat = function (b) {
    function c(e) {
      H.isArray(e) ? H.g.forEach(e, c) : (d += H.b.Y.K(e));
    }
    var d = "";
    H.g.forEach(arguments, c);
    return H.b.Y.wc(d);
  };
  H.b.Y.Fc = function (b) {
    b = H.c.M.K(b);
    return 0 === b.length ? H.b.Y.EMPTY : H.b.Y.wc(b);
  };
  H.b.Y.prototype.Ga = D("Kd");
  H.sa &&
    (H.b.Y.prototype.toString = function () {
      return "SafeStyleSheet{" + this.Kd + "}";
    });
  H.b.Y.K = function (b) {
    if (b instanceof H.b.Y && b.constructor === H.b.Y && b.uk === H.b.Y.wa)
      return b.Kd;
    H.m.xa("expected object of type SafeStyleSheet, got '" + b + a + H.ra(b));
    return "type_error:SafeStyleSheet";
  };
  H.b.Y.wc = function (b) {
    return new H.b.Y().Qb(b);
  };
  H.b.Y.prototype.Qb = function (b) {
    this.Kd = b;
    return this;
  };
  H.b.Y.EMPTY = H.b.Y.wc("");
  H.h = {};
  H.h.userAgent = {};
  H.h.userAgent.F = {};
  H.h.userAgent.F.Fh = function () {
    var b = H.h.userAgent.F.hm();
    return b && (b = b.userAgent) ? b : "";
  };
  H.h.userAgent.F.hm = function () {
    return H.global.navigator;
  };
  H.h.userAgent.F.qj = H.h.userAgent.F.Fh();
  H.h.userAgent.F.fx = function (b) {
    H.h.userAgent.F.qj = b || H.h.userAgent.F.Fh();
  };
  H.h.userAgent.F.cc = function () {
    return H.h.userAgent.F.qj;
  };
  H.h.userAgent.F.T = function (b) {
    return H.c.A.contains(H.h.userAgent.F.cc(), b);
  };
  H.h.userAgent.F.nf = function (b) {
    return H.c.A.fd(H.h.userAgent.F.cc(), b);
  };
  H.h.userAgent.F.jh = function (b) {
    for (
      var c = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, d = [], e;
      (e = c.exec(b));

    )
      d.push([e[1], e[2], e[3] || void 0]);
    return d;
  };
  H.h.userAgent.B = {};
  H.h.userAgent.B.Ii = function () {
    return H.h.userAgent.F.T("Opera");
  };
  H.h.userAgent.B.sn = function () {
    return H.h.userAgent.F.T("Trident") || H.h.userAgent.F.T("MSIE");
  };
  H.h.userAgent.B.lf = function () {
    return H.h.userAgent.F.T("Edge");
  };
  H.h.userAgent.B.Gi = function () {
    return H.h.userAgent.F.T("Edg/");
  };
  H.h.userAgent.B.Hi = function () {
    return H.h.userAgent.F.T("OPR");
  };
  H.h.userAgent.B.mf = function () {
    return H.h.userAgent.F.T("Firefox") || H.h.userAgent.F.T("FxiOS");
  };
  H.h.userAgent.B.Ji = function () {
    return (
      H.h.userAgent.F.T("Safari") &&
      !(
        H.h.userAgent.B.jf() ||
        H.h.userAgent.B.kf() ||
        H.h.userAgent.B.Ii() ||
        H.h.userAgent.B.lf() ||
        H.h.userAgent.B.Gi() ||
        H.h.userAgent.B.Hi() ||
        H.h.userAgent.B.mf() ||
        H.h.userAgent.B.vi() ||
        H.h.userAgent.F.T("Android")
      )
    );
  };
  H.h.userAgent.B.kf = function () {
    return H.h.userAgent.F.T("Coast");
  };
  H.h.userAgent.B.tn = function () {
    return (
      (H.h.userAgent.F.T("iPad") || H.h.userAgent.F.T("iPhone")) &&
      !H.h.userAgent.B.Ji() &&
      !H.h.userAgent.B.jf() &&
      !H.h.userAgent.B.kf() &&
      !H.h.userAgent.B.mf() &&
      H.h.userAgent.F.T("AppleWebKit")
    );
  };
  H.h.userAgent.B.jf = function () {
    return (
      (H.h.userAgent.F.T("Chrome") || H.h.userAgent.F.T("CriOS")) &&
      !H.h.userAgent.B.lf()
    );
  };
  H.h.userAgent.B.rn = function () {
    return (
      H.h.userAgent.F.T("Android") &&
      !(
        H.h.userAgent.B.hi() ||
        H.h.userAgent.B.Im() ||
        H.h.userAgent.B.ff() ||
        H.h.userAgent.B.vi()
      )
    );
  };
  H.h.userAgent.B.ff = H.h.userAgent.B.Ii;
  H.h.userAgent.B.Bd = H.h.userAgent.B.sn;
  H.h.userAgent.B.Ab = H.h.userAgent.B.lf;
  H.h.userAgent.B.Gm = H.h.userAgent.B.Gi;
  H.h.userAgent.B.Bv = H.h.userAgent.B.Hi;
  H.h.userAgent.B.Im = H.h.userAgent.B.mf;
  H.h.userAgent.B.Fv = H.h.userAgent.B.Ji;
  H.h.userAgent.B.jv = H.h.userAgent.B.kf;
  H.h.userAgent.B.sv = H.h.userAgent.B.tn;
  H.h.userAgent.B.hi = H.h.userAgent.B.jf;
  H.h.userAgent.B.gv = H.h.userAgent.B.rn;
  H.h.userAgent.B.vi = function () {
    return H.h.userAgent.F.T("Silk");
  };
  H.h.userAgent.B.Hc = function () {
    function b(f) {
      f = H.g.find(f, e);
      return d[f] || "";
    }
    var c = H.h.userAgent.F.cc();
    if (H.h.userAgent.B.Bd()) return H.h.userAgent.B.gm(c);
    c = H.h.userAgent.F.jh(c);
    var d = {};
    H.g.forEach(c, function (f) {
      d[f[0]] = f[1];
    });
    var e = H.Sb(H.object.Lb, d);
    return H.h.userAgent.B.ff()
      ? b(["Version", "Opera"])
      : H.h.userAgent.B.Ab()
      ? b(["Edge"])
      : H.h.userAgent.B.Gm()
      ? b(["Edg"])
      : H.h.userAgent.B.hi()
      ? b(["Chrome", "CriOS"])
      : ((c = c[2]) && c[1]) || "";
  };
  H.h.userAgent.B.Xa = function (b) {
    return 0 <= H.c.A.Kb(H.h.userAgent.B.Hc(), b);
  };
  H.h.userAgent.B.gm = function (b) {
    var c = /rv: *([\d\.]*)/.exec(b);
    if (c && c[1]) return c[1];
    c = "";
    var d = /MSIE +([\d\.]+)/.exec(b);
    if (d && d[1])
      if (((b = /Trident\/(\d.\d)/.exec(b)), "7.0" == d[1]))
        if (b && b[1])
          switch (b[1]) {
            case "4.0":
              c = "8.0";
              break;
            case "5.0":
              c = "9.0";
              break;
            case "6.0":
              c = "10.0";
              break;
            case "7.0":
              c = "11.0";
          }
        else c = "7.0";
      else c = d[1];
    return c;
  };
  H.b.u = function () {
    this.Id = "";
    this.sk = H.b.u.wa;
    this.md = null;
  };
  H.b.u.prototype.af = !0;
  H.b.u.prototype.vb = D("md");
  H.b.u.prototype.Va = !0;
  H.b.u.prototype.Ga = function () {
    return this.Id.toString();
  };
  H.sa &&
    (H.b.u.prototype.toString = function () {
      return "SafeHtml{" + this.Id + "}";
    });
  H.b.u.K = function (b) {
    return H.b.u.Db(b).toString();
  };
  H.b.u.Db = function (b) {
    if (b instanceof H.b.u && b.constructor === H.b.u && b.sk === H.b.u.wa)
      return b.Id;
    H.m.xa("expected object of type SafeHtml, got '" + b + a + H.ra(b));
    return "type_error:SafeHtml";
  };
  H.b.u.Ha = function (b) {
    if (b instanceof H.b.u) return b;
    var c = typeof b == v,
      d = null;
    c && b.af && (d = b.vb());
    return H.b.u.Sa(H.c.A.Ha(c && b.Va ? b.Ga() : String(b)), d);
  };
  H.b.u.Xu = function (b) {
    if (b instanceof H.b.u) return b;
    b = H.b.u.Ha(b);
    return H.b.u.Sa(H.c.A.Nc(H.b.u.K(b)), b.vb());
  };
  H.b.u.Yu = function (b) {
    if (b instanceof H.b.u) return b;
    b = H.b.u.Ha(b);
    return H.b.u.Sa(H.c.A.sj(H.b.u.K(b)), b.vb());
  };
  H.b.u.from = H.b.u.Ha;
  H.b.u.zg = /^[a-zA-Z0-9-]+$/;
  H.b.u.Hk = {
    action: !0,
    cite: !0,
    data: !0,
    formaction: !0,
    href: !0,
    manifest: !0,
    poster: !0,
    src: !0,
  };
  H.b.u.lk = {
    APPLET: !0,
    BASE: !0,
    EMBED: !0,
    IFRAME: !0,
    LINK: !0,
    MATH: !0,
    META: !0,
    OBJECT: !0,
    SCRIPT: !0,
    STYLE: !0,
    SVG: !0,
    TEMPLATE: !0,
  };
  H.b.u.create = function (b, c, d) {
    H.b.u.Po(String(b));
    return H.b.u.Nb(String(b), c, d);
  };
  H.b.u.Po = function (b) {
    if (!H.b.u.zg.test(b)) throw Error("Invalid tag name <" + b + ">.");
    if (b.toUpperCase() in H.b.u.lk)
      throw Error("Tag name <" + b + "> is not allowed for SafeHtml.");
  };
  H.b.u.xt = function (b, c, d, e) {
    b && H.b.H.K(b);
    var f = {};
    f.src = b || null;
    f.srcdoc = c && H.b.u.K(c);
    b = H.b.u.hd(f, { sandbox: "" }, d);
    return H.b.u.Nb("iframe", b, e);
  };
  H.b.u.Ct = function (b, c, d, e) {
    if (!H.b.u.pl())
      throw Error("The browser does not support sandboxed iframes.");
    var f = {};
    f.src = b ? H.b.s.K(H.b.s.Td(b)) : null;
    f.srcdoc = c || null;
    f.sandbox = "";
    b = H.b.u.hd(f, {}, d);
    return H.b.u.Nb("iframe", b, e);
  };
  H.b.u.pl = function () {
    return (
      H.global.HTMLIFrameElement &&
      "sandbox" in H.global.HTMLIFrameElement.prototype
    );
  };
  H.b.u.Dt = function (b, c) {
    H.b.H.K(b);
    b = H.b.u.hd({ src: b }, {}, c);
    return H.b.u.Nb("script", b);
  };
  H.b.u.createScript = function (b, c) {
    for (var d in c) {
      var e = d.toLowerCase();
      if ("language" == e || "src" == e || "text" == e || "type" == e)
        throw Error('Cannot set "' + e + '" attribute');
    }
    d = "";
    b = H.g.concat(b);
    for (e = 0; e < b.length; e++) d += H.b.W.K(b[e]);
    b = H.b.u.Sa(d, H.i.j.aa.Za);
    return H.b.u.Nb("script", c, b);
  };
  H.b.u.Et = function (b, c) {
    c = H.b.u.hd({ type: "text/css" }, {}, c);
    var d = "";
    b = H.g.concat(b);
    for (var e = 0; e < b.length; e++) d += H.b.Y.K(b[e]);
    b = H.b.u.Sa(d, H.i.j.aa.Za);
    return H.b.u.Nb("style", c, b);
  };
  H.b.u.At = function (b, c) {
    b = H.b.s.K(H.b.s.Td(b));
    (H.h.userAgent.B.Bd() || H.h.userAgent.B.Ab()) &&
      H.c.A.contains(b, ";") &&
      (b = "'" + b.replace(/'/g, "%27") + "'");
    return H.b.u.Nb("meta", {
      "http-equiv": "refresh",
      content: (c || 0) + "; url=" + b,
    });
  };
  H.b.u.Yl = function (b, c, d) {
    if (d instanceof H.c.M) d = H.c.M.K(d);
    else if ("style" == c.toLowerCase()) d = H.b.u.nm(d);
    else {
      if (/^on/i.test(c))
        throw Error(
          'Attribute "' +
            c +
            '" requires goog.string.Const value, "' +
            d +
            '" given.'
        );
      if (c.toLowerCase() in H.b.u.Hk)
        if (d instanceof H.b.H) d = H.b.H.K(d);
        else if (d instanceof H.b.s) d = H.b.s.K(d);
        else if (H.L(d)) d = H.b.s.Td(d).Ga();
        else
          throw Error(
            'Attribute "' +
              c +
              '" on tag "' +
              b +
              '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' +
              d +
              '" given.'
          );
    }
    d.Va && (d = d.Ga());
    return c + '="' + H.c.A.Ha(String(d)) + '"';
  };
  H.b.u.nm = function (b) {
    if (!H.Da(b))
      throw Error(
        'The "style" attribute requires goog.html.SafeStyle or map of style properties, ' +
          typeof b +
          " given: " +
          b
      );
    b instanceof H.b.D || (b = H.b.D.create(b));
    return H.b.D.K(b);
  };
  H.b.u.Gt = function (b, c, d, e) {
    c = H.b.u.create(c, d, e);
    c.md = b;
    return c;
  };
  H.b.u.join = function (b, c) {
    function d(g) {
      H.isArray(g)
        ? H.g.forEach(g, d)
        : ((g = H.b.u.Ha(g)),
          f.push(H.b.u.K(g)),
          (g = g.vb()),
          e == H.i.j.aa.Za
            ? (e = g)
            : g != H.i.j.aa.Za && e != g && (e = null));
    }
    b = H.b.u.Ha(b);
    var e = b.vb(),
      f = [];
    H.g.forEach(c, d);
    return H.b.u.Sa(f.join(H.b.u.K(b)), e);
  };
  H.b.u.concat = function (b) {
    return H.b.u.join(H.b.u.EMPTY, Array.prototype.slice.call(arguments));
  };
  H.b.u.rt = function (b, c) {
    var d = H.b.u.concat(H.g.slice(arguments, 1));
    d.md = b;
    return d;
  };
  H.b.u.wa = {};
  H.b.u.Sa = function (b, c) {
    return new H.b.u().Qb(b, c);
  };
  H.b.u.prototype.Qb = function (b, c) {
    this.Id = H.b.Ya.ab ? H.b.Ya.ab.createHTML(b) : b;
    this.md = c;
    return this;
  };
  H.b.u.Nb = function (b, c, d) {
    var e = null;
    var f = "<" + b + H.b.u.uo(b, c);
    H.zb(d) ? H.isArray(d) || (d = [d]) : (d = []);
    H.a.tags.Ym(b.toLowerCase())
      ? (f += ">")
      : ((e = H.b.u.concat(d)),
        (f += ">" + H.b.u.K(e) + "</" + b + ">"),
        (e = e.vb()));
    (b = c && c.dir) && (e = /^(ltr|rtl|auto)$/i.test(b) ? H.i.j.aa.Za : null);
    return H.b.u.Sa(f, e);
  };
  H.b.u.uo = function (b, c) {
    var d = "";
    if (c)
      for (var e in c) {
        if (!H.b.u.zg.test(e))
          throw Error('Invalid attribute name "' + e + '".');
        var f = c[e];
        H.zb(f) && (d += " " + H.b.u.Yl(b, e, f));
      }
    return d;
  };
  H.b.u.hd = function (b, c, d) {
    var e = {},
      f;
    for (f in b) e[f] = b[f];
    for (f in c) e[f] = c[f];
    for (f in d) {
      var g = f.toLowerCase();
      if (g in b)
        throw Error(
          'Cannot override "' +
            g +
            '" attribute, got "' +
            f +
            '" with value "' +
            d[f] +
            '"'
        );
      g in c && delete e[g];
      e[f] = d[f];
    }
    return e;
  };
  H.b.u.Rp = H.b.u.Sa("<!DOCTYPE html>", H.i.j.aa.Za);
  H.b.u.EMPTY = H.b.u.Sa("", H.i.j.aa.Za);
  H.b.u.Xf = H.b.u.Sa("<br>", H.i.j.aa.Za);
  H.b.kb = {};
  H.b.kb.Si = function (b, c) {
    return H.b.u.Sa(c, null);
  };
  H.b.kb.Cw = function (b, c) {
    return H.b.W.uc(c);
  };
  H.b.kb.Dw = function (b, c) {
    return H.b.D.vc(c);
  };
  H.b.kb.Ew = function (b, c) {
    return H.b.Y.wc(c);
  };
  H.b.kb.$n = function (b, c) {
    return H.b.s.Ba(c);
  };
  H.b.kb.Cx = function (b, c) {
    return H.b.H.xc(c);
  };
  H.a.O = {};
  H.a.O.Mq = {
    Zo: "afterbegin",
    $o: "afterend",
    qp: "beforebegin",
    rp: "beforeend",
  };
  H.a.O.$u = function (b, c, d) {
    b.insertAdjacentHTML(c, H.b.u.Db(d));
  };
  H.a.O.zk = { MATH: !0, SCRIPT: !0, STYLE: !0, SVG: !0, TEMPLATE: !0 };
  H.a.O.Mm = H.V.ol(function () {
    if (H.sa && "undefined" === typeof document) return !1;
    var b = document.createElement("div"),
      c = document.createElement("div");
    c.appendChild(document.createElement("div"));
    b.appendChild(c);
    if (H.sa && !b.firstChild) return !1;
    c = b.firstChild.firstChild;
    b.innerHTML = H.b.u.Db(H.b.u.EMPTY);
    return !c.parentElement;
  });
  H.a.O.Ko = function (b, c) {
    if (H.a.O.Mm()) for (; b.lastChild; ) b.removeChild(b.lastChild);
    b.innerHTML = H.b.u.Db(c);
  };
  H.a.O.xf = function (b, c) {
    if (H.m.za && H.a.O.zk[b.tagName.toUpperCase()])
      throw Error(
        "goog.dom.safe.setInnerHtml cannot be used to set content of " +
          b.tagName +
          "."
      );
    H.a.O.Ko(b, c);
  };
  H.a.O.Zw = function (b, c) {
    b.outerHTML = H.b.u.Db(c);
  };
  H.a.O.Qw = function (b, c) {
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    H.a.m.Yk(b).action = H.b.s.na(c);
  };
  H.a.O.Kw = function (b, c) {
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    H.a.m.Wk(b).formAction = H.b.s.na(c);
  };
  H.a.O.Vw = function (b, c) {
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    H.a.m.al(b).formAction = H.b.s.na(c);
  };
  H.a.O.cx = function (b, c) {
    b.style.cssText = H.b.D.K(c);
  };
  H.a.O.Il = function (b) {
    b.write(H.b.u.Db(H.b.u.EMPTY));
  };
  H.a.O.Iw = function (b, c) {
    H.a.m.Uk(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    b.href = H.b.s.na(c);
  };
  H.a.O.io = function (b, c) {
    H.a.m.$k(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c, /^data:image\//i.test(c));
    b.src = H.b.s.na(c);
  };
  H.a.O.Jw = function (b, c) {
    H.a.m.Vk(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c, /^data:audio\//i.test(c));
    b.src = H.b.s.na(c);
  };
  H.a.O.gx = function (b, c) {
    H.a.m.dl(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c, /^data:video\//i.test(c));
    b.src = H.b.s.na(c);
  };
  H.a.O.Ow = function (b, c) {
    H.a.m.Xk(b);
    b.src = H.b.H.Zd(c);
  };
  H.a.O.Sw = function (b, c) {
    H.a.m.Zk(b);
    b.src = H.b.H.na(c);
  };
  H.a.O.ho = function (b) {
    var c = H.b.H.Fc(H.c.M.EMPTY);
    H.a.m.Gg(b);
    b.src = H.b.H.na(c);
  };
  H.a.O.Uw = function (b, c) {
    H.a.m.Gg(b);
    b.srcdoc = H.b.u.Db(c);
  };
  H.a.O.Ww = function (b, c, d) {
    H.a.m.bl(b);
    b.rel = d;
    H.c.A.fd(d, "stylesheet")
      ? (b.href = H.b.H.na(c))
      : (b.href =
          c instanceof H.b.H
            ? H.b.H.na(c)
            : c instanceof H.b.s
            ? H.b.s.na(c)
            : H.b.s.na(H.b.s.Pa(c)));
  };
  H.a.O.Yw = function (b, c) {
    H.a.m.cl(b);
    b.data = H.b.H.Zd(c);
  };
  H.a.O.mo = function (b, c) {
    H.a.m.Hg(b);
    b.src = H.b.H.Zd(c);
    (c = H.Sh()) && b.setAttribute("nonce", c);
  };
  H.a.O.bx = function (b, c) {
    H.a.m.Hg(b);
    b.text = H.b.W.pj(c);
    (c = H.Sh()) && b.setAttribute("nonce", c);
  };
  H.a.O.Xw = function (b, c) {
    H.a.m.we(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    b.href = H.b.s.na(c);
  };
  H.a.O.Ys = function (b, c) {
    H.a.m.we(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    b.assign(H.b.s.na(c));
  };
  H.a.O.uw = function (b, c) {
    H.a.m.we(b);
    c = c instanceof H.b.s ? c : H.b.s.Pa(c);
    b.replace(H.b.s.na(c));
  };
  H.a.O.fw = function (b, c, d, e, f) {
    b = b instanceof H.b.s ? b : H.b.s.Pa(b);
    return (c || H.global).open(H.b.s.na(b), d ? H.c.M.K(d) : "", e, f);
  };
  H.a.O.hw = function (b, c) {
    return H.a.O.parseFromString(b, c, "text/html");
  };
  H.a.O.parseFromString = function (b, c, d) {
    return b.parseFromString(H.b.u.Db(c), d);
  };
  H.a.O.yt = function (b) {
    if (!/^image\/.*/g.test(b.type))
      throw Error(
        "goog.dom.safe.createImageFromBlob only accepts MIME type image/.*."
      );
    var c = H.global.URL.createObjectURL(b);
    b = new H.global.Image();
    b.onload = function () {
      H.global.URL.revokeObjectURL(c);
    };
    H.a.O.io(b, H.b.kb.$n(H.c.M.from("Image blob URL."), c));
    return b;
  };
  H.c.Uj = !1;
  H.c.Zj = !1;
  H.c.yg = { lg: "\u00a0" };
  H.c.startsWith = H.c.A.startsWith;
  H.c.endsWith = H.c.A.endsWith;
  H.c.Ib = H.c.A.Ib;
  H.c.Og = H.c.A.Og;
  H.c.Pg = H.c.A.Pg;
  H.c.sx = function (b, c) {
    for (
      var d = b.split("%s"),
        e = "",
        f = Array.prototype.slice.call(arguments, 1);
      f.length && 1 < d.length;

    )
      e += d.shift() + f.shift();
    return e + d.join("%s");
  };
  H.c.kt = function (b) {
    return b.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
  };
  H.c.Lc = H.c.A.Lc;
  H.c.nv = function (b) {
    return 0 == b.length;
  };
  H.c.Ca = H.c.Lc;
  H.c.Hm = function (b) {
    return H.c.Lc(H.c.on(b));
  };
  H.c.mv = H.c.Hm;
  H.c.hv = function (b) {
    return !/[^\t\n\r ]/.test(b);
  };
  H.c.ev = function (b) {
    return !/[^a-zA-Z]/.test(b);
  };
  H.c.Av = function (b) {
    return !/[^0-9]/.test(b);
  };
  H.c.fv = function (b) {
    return !/[^a-zA-Z0-9]/.test(b);
  };
  H.c.Hv = function (b) {
    return " " == b;
  };
  H.c.Iv = function (b) {
    return (
      (1 == b.length && " " <= b && "~" >= b) ||
      ("\u0080" <= b && "\ufffd" >= b)
    );
  };
  H.c.qx = function (b) {
    return b.replace(/(\r\n|\r|\n)+/g, " ");
  };
  H.c.rl = function (b) {
    return b.replace(/(\r\n|\r|\n)/g, "\n");
  };
  H.c.bw = function (b) {
    return b.replace(/\xa0|\s/g, " ");
  };
  H.c.aw = function (b) {
    return b.replace(/\xa0|[ \t]+/g, " ");
  };
  H.c.jt = function (b) {
    return b
      .replace(/[\t\r\n ]+/g, " ")
      .replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
  };
  H.c.trim = H.c.A.trim;
  H.c.trimLeft = function (b) {
    return b.replace(/^[\s\xa0]+/, "");
  };
  H.c.trimRight = function (b) {
    return b.replace(/[\s\xa0]+$/, "");
  };
  H.c.ed = H.c.A.ed;
  H.c.Ni = function (b, c, d) {
    if (b == c) return 0;
    if (!b) return -1;
    if (!c) return 1;
    for (
      var e = b.toLowerCase().match(d),
        f = c.toLowerCase().match(d),
        g = Math.min(e.length, f.length),
        h = 0;
      h < g;
      h++
    ) {
      d = e[h];
      var k = f[h];
      if (d != k)
        return (
          (b = parseInt(d, 10)),
          !isNaN(b) && ((c = parseInt(k, 10)), !isNaN(c) && b - c)
            ? b - c
            : d < k
            ? -1
            : 1
        );
    }
    return e.length != f.length ? e.length - f.length : b < c ? -1 : 1;
  };
  H.c.cv = function (b, c) {
    return H.c.Ni(b, c, /\d+|\D+/g);
  };
  H.c.Vl = function (b, c) {
    return H.c.Ni(b, c, /\d+|\.\d+|\D+/g);
  };
  H.c.dw = H.c.Vl;
  H.c.Rc = function (b) {
    return encodeURIComponent(String(b));
  };
  H.c.$d = function (b) {
    return decodeURIComponent(b.replace(/\+/g, " "));
  };
  H.c.Nc = H.c.A.Nc;
  H.c.Ha = function (b, c) {
    b = H.c.A.Ha(b, c);
    H.c.Uj && (b = b.replace(H.c.Yj, "&#101;"));
    return b;
  };
  H.c.Yj = /e/g;
  H.c.nj = function (b) {
    return H.c.contains(b, "&")
      ? !H.c.Zj && "document" in H.global
        ? H.c.oj(b)
        : H.c.Ho(b)
      : b;
  };
  H.c.Dx = function (b, c) {
    return H.c.contains(b, "&") ? H.c.oj(b, c) : b;
  };
  H.c.oj = function (b, c) {
    var d = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"' };
    var e = c ? c.createElement("div") : H.global.document.createElement("div");
    return b.replace(H.c.dk, function (f, g) {
      var h = d[f];
      if (h) return h;
      "#" == g.charAt(0) &&
        ((g = Number("0" + g.substr(1))),
        isNaN(g) || (h = String.fromCharCode(g)));
      h ||
        (H.a.O.xf(e, H.b.kb.Si(H.c.M.from("Single HTML entity."), f + " ")),
        (h = e.firstChild.nodeValue.slice(0, -1)));
      return (d[f] = h);
    });
  };
  H.c.Ho = function (b) {
    return b.replace(/&([^;]+);/g, function (c, d) {
      switch (d) {
        case "amp":
          return "&";
        case "lt":
          return "<";
        case "gt":
          return ">";
        case "quot":
          return '"';
        default:
          return "#" != d.charAt(0) ||
            ((d = Number("0" + d.substr(1))), isNaN(d))
            ? c
            : String.fromCharCode(d);
      }
    });
  };
  H.c.dk = /&([^;\s<&]+);?/g;
  H.c.sj = function (b) {
    return H.c.Nc(b.replace(/  /g, " &#160;"), void 0);
  };
  H.c.jw = function (b) {
    return b.replace(/(^|[\n ]) /g, "$1" + H.c.yg.lg);
  };
  H.c.rx = function (b, c) {
    for (var d = c.length, e = 0; e < d; e++) {
      var f = 1 == d ? c : c.charAt(e);
      if (b.charAt(0) == f && b.charAt(b.length - 1) == f)
        return b.substring(1, b.length - 1);
    }
    return b;
  };
  H.c.truncate = function (b, c, d) {
    d && (b = H.c.nj(b));
    b.length > c && (b = b.substring(0, c - 3) + "...");
    d && (b = H.c.Ha(b));
    return b;
  };
  H.c.Bx = function (b, c, d, e) {
    d && (b = H.c.nj(b));
    e && b.length > c
      ? (e > c && (e = c),
        (b = b.substring(0, c - e) + "..." + b.substring(b.length - e)))
      : b.length > c &&
        ((e = Math.floor(c / 2)),
        (b = b.substring(0, e + (c % 2)) + "..." + b.substring(b.length - e)));
    d && (b = H.c.Ha(b));
    return b;
  };
  H.c.Bf = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C",
  };
  H.c.Cd = { "'": "\\'" };
  H.c.quote = function (b) {
    b = String(b);
    for (var c = ['"'], d = 0; d < b.length; d++) {
      var e = b.charAt(d),
        f = e.charCodeAt(0);
      c[d + 1] = H.c.Bf[e] || (31 < f && 127 > f ? e : H.c.gh(e));
    }
    c.push('"');
    return c.join("");
  };
  H.c.Vt = function (b) {
    for (var c = [], d = 0; d < b.length; d++) c[d] = H.c.gh(b.charAt(d));
    return c.join("");
  };
  H.c.gh = function (b) {
    if (b in H.c.Cd) return H.c.Cd[b];
    if (b in H.c.Bf) return (H.c.Cd[b] = H.c.Bf[b]);
    var c = b.charCodeAt(0);
    if (31 < c && 127 > c) var d = b;
    else {
      if (256 > c) {
        if (((d = "\\x"), 16 > c || 256 < c)) d += "0";
      } else (d = "\\u"), 4096 > c && (d += "0");
      d += c.toString(16).toUpperCase();
    }
    return (H.c.Cd[b] = d);
  };
  H.c.contains = H.c.A.contains;
  H.c.fd = H.c.A.fd;
  H.c.ut = function (b, c) {
    return b && c ? b.split(c).length - 1 : 0;
  };
  H.c.kc = A();
  H.c.remove = function (b, c) {
    return b.replace(c, "");
  };
  H.c.ow = function (b, c) {
    c = new RegExp(H.c.rf(c), "g");
    return b.replace(c, "");
  };
  H.c.tw = function (b, c, d) {
    c = new RegExp(H.c.rf(c), "g");
    return b.replace(c, d.replace(/\$/g, "$$$$"));
  };
  H.c.rf = function (b) {
    return String(b)
      .replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1")
      .replace(/\x08/g, "\\x08");
  };
  H.c.repeat = String.prototype.repeat
    ? function (b, c) {
        return b.repeat(c);
      }
    : function (b, c) {
        return Array(c + 1).join(b);
      };
  H.c.gw = function (b, c, d) {
    b = H.ca(d) ? b.toFixed(d) : String(b);
    d = b.indexOf(".");
    -1 == d && (d = b.length);
    return H.c.repeat("0", Math.max(0, c - d)) + b;
  };
  H.c.on = function (b) {
    return null == b ? "" : String(b);
  };
  H.c.nl = function (b) {
    return Array.prototype.join.call(arguments, "");
  };
  H.c.Ph = function () {
    return (
      Math.floor(2147483648 * Math.random()).toString(36) +
      Math.abs(Math.floor(2147483648 * Math.random()) ^ H.now()).toString(36)
    );
  };
  H.c.Kb = H.c.A.Kb;
  H.c.Wu = function (b) {
    for (var c = 0, d = 0; d < b.length; ++d)
      c = (31 * c + b.charCodeAt(d)) >>> 0;
    return c;
  };
  H.c.Io = (2147483648 * Math.random()) | 0;
  H.c.Ft = function () {
    return "goog_" + H.c.Io++;
  };
  H.c.xx = function (b) {
    var c = Number(b);
    return 0 == c && H.c.Lc(b) ? NaN : c;
  };
  H.c.tv = function (b) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(b);
  };
  H.c.Jv = function (b) {
    return /^([A-Z][a-z]*)+$/.test(b);
  };
  H.c.wx = function (b) {
    return String(b).replace(/\-([a-z])/g, function (c, d) {
      return d.toUpperCase();
    });
  };
  H.c.yx = function (b) {
    return String(b)
      .replace(/([A-Z])/g, "-$1")
      .toLowerCase();
  };
  H.c.zx = function (b, c) {
    c = H.L(c) ? H.c.rf(c) : "\\s";
    return b.replace(
      new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"),
      function (d, e, f) {
        return e + f.toUpperCase();
      }
    );
  };
  H.c.ft = function (b) {
    return (
      String(b.charAt(0)).toUpperCase() + String(b.substr(1)).toLowerCase()
    );
  };
  H.c.parseInt = function (b) {
    isFinite(b) && (b = String(b));
    return H.L(b)
      ? /^\s*-?0x/i.test(b)
        ? parseInt(b, 16)
        : parseInt(b, 10)
      : NaN;
  };
  H.c.kx = function (b, c, d) {
    b = b.split(c);
    for (var e = []; 0 < d && b.length; ) e.push(b.shift()), d--;
    b.length && e.push(b.join(c));
    return e;
  };
  H.c.Mv = function (b, c) {
    if (c) typeof c == y && (c = [c]);
    else return b;
    for (var d = -1, e = 0; e < c.length; e++)
      if ("" != c[e]) {
        var f = b.lastIndexOf(c[e]);
        f > d && (d = f);
      }
    return -1 == d ? b : b.slice(d + 1);
  };
  H.c.Ot = function (b, c) {
    var d = [],
      e = [];
    if (b == c) return 0;
    if (!b.length || !c.length) return Math.max(b.length, c.length);
    for (var f = 0; f < c.length + 1; f++) d[f] = f;
    for (f = 0; f < b.length; f++) {
      e[0] = f + 1;
      for (var g = 0; g < c.length; g++)
        e[g + 1] = Math.min(
          e[g] + 1,
          d[g + 1] + 1,
          d[g] + Number(b[f] != c[g])
        );
      for (g = 0; g < d.length; g++) d[g] = e[g];
    }
    return e[c.length];
  };
  H.h.userAgent.ea = {};
  H.h.userAgent.ea.Rm = function () {
    return H.h.userAgent.F.T("Presto");
  };
  H.h.userAgent.ea.Vm = function () {
    return H.h.userAgent.F.T("Trident") || H.h.userAgent.F.T("MSIE");
  };
  H.h.userAgent.ea.Ab = function () {
    return H.h.userAgent.F.T("Edge");
  };
  H.h.userAgent.ea.yi = function () {
    return H.h.userAgent.F.nf("WebKit") && !H.h.userAgent.ea.Ab();
  };
  H.h.userAgent.ea.Jm = function () {
    return (
      H.h.userAgent.F.T("Gecko") &&
      !H.h.userAgent.ea.yi() &&
      !H.h.userAgent.ea.Vm() &&
      !H.h.userAgent.ea.Ab()
    );
  };
  H.h.userAgent.ea.Hc = function () {
    var b = H.h.userAgent.F.cc();
    if (b) {
      b = H.h.userAgent.F.jh(b);
      var c = H.h.userAgent.ea.dm(b);
      if (c) return "Gecko" == c[0] ? H.h.userAgent.ea.rm(b) : c[1];
      b = b[0];
      var d;
      if (b && (d = b[2]) && (d = /Trident\/([^\s;]+)/.exec(d))) return d[1];
    }
    return "";
  };
  H.h.userAgent.ea.dm = function (b) {
    if (!H.h.userAgent.ea.Ab()) return b[1];
    for (var c = 0; c < b.length; c++) {
      var d = b[c];
      if ("Edge" == d[0]) return d;
    }
  };
  H.h.userAgent.ea.Xa = function (b) {
    return 0 <= H.c.Kb(H.h.userAgent.ea.Hc(), b);
  };
  H.h.userAgent.ea.rm = function (b) {
    return (
      ((b = H.g.find(b, function (c) {
        return "Firefox" == c[0];
      })) &&
        b[1]) ||
      ""
    );
  };
  H.async.jj = function (b) {
    H.global.setTimeout(function () {
      throw b;
    }, 0);
  };
  H.async.Na = function (b, c, d) {
    var e = b;
    c && (e = H.bind(b, c));
    e = H.async.Na.tj(e);
    H.Wa(H.global.setImmediate) && (d || H.async.Na.No())
      ? H.global.setImmediate(e)
      : (H.async.Na.Zi || (H.async.Na.Zi = H.async.Na.mm()), H.async.Na.Zi(e));
  };
  H.async.Na.No = function () {
    return H.global.Window &&
      H.global.Window.prototype &&
      !H.h.userAgent.B.Ab() &&
      H.global.Window.prototype.setImmediate == H.global.setImmediate
      ? !1
      : !0;
  };
  H.async.Na.mm = function () {
    var b = H.global.MessageChannel;
    "undefined" === typeof b &&
      "undefined" !== typeof window &&
      window.postMessage &&
      window.addEventListener &&
      !H.h.userAgent.ea.Rm() &&
      (b = function () {
        var f = document.createElement("IFRAME");
        f.style.display = "none";
        H.a.O.ho(f);
        document.documentElement.appendChild(f);
        var g = f.contentWindow;
        f = g.document;
        f.open();
        H.a.O.Il(f);
        f.close();
        var h = "callImmediate" + Math.random(),
          k =
            "file:" == g.location.protocol
              ? "*"
              : g.location.protocol + "//" + g.location.host;
        f = H.bind(function (m) {
          if (("*" == k || m.origin == k) && m.data == h)
            this.port1.onmessage();
        }, this);
        g.addEventListener("message", f, !1);
        this.port1 = {};
        this.port2 = {
          postMessage: function () {
            g.postMessage(h, k);
          },
        };
      });
    if ("undefined" !== typeof b && !H.h.userAgent.B.Bd()) {
      var c = new b(),
        d = {},
        e = d;
      c.port1.onmessage = function () {
        if (H.ca(d.next)) {
          d = d.next;
          var f = d.Qg;
          d.Qg = null;
          f();
        }
      };
      return function (f) {
        e.next = { Qg: f };
        e = e.next;
        c.port2.postMessage(0);
      };
    }
    return "undefined" !== typeof document &&
      "onreadystatechange" in document.createElement(l)
      ? function (f) {
          var g = document.createElement(l);
          g.onreadystatechange = function () {
            g.onreadystatechange = null;
            g.parentNode.removeChild(g);
            g = null;
            f();
            f = null;
          };
          document.documentElement.appendChild(g);
        }
      : function (f) {
          H.global.setTimeout(f, 0);
        };
  };
  H.async.Na.tj = H.V.ai;
  H.debug.pa.register(function (b) {
    H.async.Na.tj = b;
  });
  H.async.gb = function () {
    this.be = this.nc = null;
  };
  H.async.gb.ge = 100;
  H.async.gb.Ec = new H.async.Wc(
    function () {
      return new H.async.re();
    },
    function (b) {
      b.reset();
    },
    H.async.gb.ge
  );
  H.async.gb.prototype.add = function (b, c) {
    var d = H.async.gb.Ec.get();
    d.set(b, c);
    this.be ? (this.be.next = d) : (this.nc = d);
    this.be = d;
  };
  H.async.gb.prototype.remove = function () {
    var b = null;
    this.nc &&
      ((b = this.nc),
      (this.nc = this.nc.next),
      this.nc || (this.be = null),
      (b.next = null));
    return b;
  };
  H.async.re = function () {
    this.next = this.scope = this.Je = null;
  };
  H.async.re.prototype.set = function (b, c) {
    this.Je = b;
    this.scope = c;
    this.next = null;
  };
  H.async.re.prototype.reset = function () {
    this.next = this.scope = this.Je = null;
  };
  H.Dj = !1;
  H.async.X = function (b, c) {
    H.async.X.Ud || H.async.X.Dm();
    H.async.X.ae || (H.async.X.Ud(), (H.async.X.ae = !0));
    H.async.X.Jf.add(b, c);
  };
  H.async.X.Dm = function () {
    if (H.Dj || (H.global.Promise && H.global.Promise.resolve)) {
      var b = H.global.Promise.resolve(void 0);
      H.async.X.Ud = function () {
        b.then(H.async.X.Od);
      };
    } else
      H.async.X.Ud = function () {
        H.async.Na(H.async.X.Od);
      };
  };
  H.async.X.du = function (b) {
    H.async.X.Ud = function () {
      H.async.Na(H.async.X.Od);
      b && b(H.async.X.Od);
    };
  };
  H.async.X.ae = !1;
  H.async.X.Jf = new H.async.gb();
  H.sa &&
    (H.async.X.xw = function () {
      H.async.X.ae = !1;
      H.async.X.Jf = new H.async.gb();
    });
  H.async.X.Od = function () {
    for (var b; (b = H.async.X.Jf.remove()); ) {
      try {
        b.Je.call(b.scope);
      } catch (c) {
        H.async.jj(c);
      }
      H.async.gb.Ec.put(b);
    }
    H.async.X.ae = !1;
  };
  H.h.userAgent.platform = {};
  H.h.userAgent.platform.gi = function () {
    return H.h.userAgent.F.T("Android");
  };
  H.h.userAgent.platform.ri = function () {
    return H.h.userAgent.F.T("iPod");
  };
  H.h.userAgent.platform.pi = function () {
    return (
      H.h.userAgent.F.T("iPhone") &&
      !H.h.userAgent.F.T("iPod") &&
      !H.h.userAgent.F.T("iPad")
    );
  };
  H.h.userAgent.platform.oi = function () {
    return H.h.userAgent.F.T("iPad");
  };
  H.h.userAgent.platform.ni = function () {
    return (
      H.h.userAgent.platform.pi() ||
      H.h.userAgent.platform.oi() ||
      H.h.userAgent.platform.ri()
    );
  };
  H.h.userAgent.platform.ti = function () {
    return H.h.userAgent.F.T("Macintosh");
  };
  H.h.userAgent.platform.Om = function () {
    return H.h.userAgent.F.T("Linux");
  };
  H.h.userAgent.platform.Bi = function () {
    return H.h.userAgent.F.T("Windows");
  };
  H.h.userAgent.platform.ii = function () {
    return H.h.userAgent.F.T("CrOS");
  };
  H.h.userAgent.platform.iv = function () {
    return H.h.userAgent.F.T("CrKey");
  };
  H.h.userAgent.platform.si = function () {
    return H.h.userAgent.F.nf("KaiOS");
  };
  H.h.userAgent.platform.Km = function () {
    return H.h.userAgent.F.nf("GAFP");
  };
  H.h.userAgent.platform.Hc = function () {
    var b = H.h.userAgent.F.cc(),
      c = "";
    H.h.userAgent.platform.Bi()
      ? ((c = /Windows (?:NT|Phone) ([0-9.]+)/),
        (c = (b = c.exec(b)) ? b[1] : "0.0"))
      : H.h.userAgent.platform.ni()
      ? ((c = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/),
        (c = (b = c.exec(b)) && b[1].replace(/_/g, ".")))
      : H.h.userAgent.platform.ti()
      ? ((c = /Mac OS X ([0-9_.]+)/),
        (c = (b = c.exec(b)) ? b[1].replace(/_/g, ".") : "10"))
      : H.h.userAgent.platform.si()
      ? ((c = /(?:KaiOS)\/(\S+)/i), (c = (b = c.exec(b)) && b[1]))
      : H.h.userAgent.platform.gi()
      ? ((c = /Android\s+([^\);]+)(\)|;)/), (c = (b = c.exec(b)) && b[1]))
      : H.h.userAgent.platform.ii() &&
        ((c = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/),
        (c = (b = c.exec(b)) && b[1]));
    return c || "";
  };
  H.h.userAgent.platform.Xa = function (b) {
    return 0 <= H.c.Kb(H.h.userAgent.platform.Hc(), b);
  };
  H.ib = {};
  H.ib.object = function (b, c) {
    return c;
  };
  H.ib.Af = function (b) {
    H.ib.Af[" "](b);
    return b;
  };
  H.ib.Af[" "] = H.Rb;
  H.ib.dt = function (b, c) {
    try {
      return H.ib.Af(b[c]), !0;
    } catch (d) {}
    return !1;
  };
  H.ib.cache = function (b, c, d, e) {
    e = e ? e(c) : c;
    return Object.prototype.hasOwnProperty.call(b, e) ? b[e] : (b[e] = d(c));
  };
  H.userAgent = {};
  H.userAgent.Pf = !1;
  H.userAgent.Nf = !1;
  H.userAgent.Of = !1;
  H.userAgent.Uf = !1;
  H.userAgent.fe = !1;
  H.userAgent.Sf = !1;
  H.userAgent.zj = !1;
  H.userAgent.pc =
    H.userAgent.Pf ||
    H.userAgent.Nf ||
    H.userAgent.Of ||
    H.userAgent.fe ||
    H.userAgent.Uf ||
    H.userAgent.Sf;
  H.userAgent.pm = function () {
    return H.h.userAgent.F.cc();
  };
  H.userAgent.We = function () {
    return H.global.navigator || null;
  };
  H.userAgent.Du = function () {
    return H.userAgent.We();
  };
  H.userAgent.og = H.userAgent.pc ? H.userAgent.Sf : H.h.userAgent.B.ff();
  H.userAgent.oa = H.userAgent.pc ? H.userAgent.Pf : H.h.userAgent.B.Bd();
  H.userAgent.ag = H.userAgent.pc ? H.userAgent.Nf : H.h.userAgent.ea.Ab();
  H.userAgent.Vp = H.userAgent.ag || H.userAgent.oa;
  H.userAgent.he = H.userAgent.pc ? H.userAgent.Of : H.h.userAgent.ea.Jm();
  H.userAgent.sc = H.userAgent.pc
    ? H.userAgent.Uf || H.userAgent.fe
    : H.h.userAgent.ea.yi();
  H.userAgent.Qm = function () {
    return H.userAgent.sc && H.h.userAgent.F.T("Mobile");
  };
  H.userAgent.gr = H.userAgent.fe || H.userAgent.Qm();
  H.userAgent.Hr = H.userAgent.sc;
  H.userAgent.Fl = function () {
    var b = H.userAgent.We();
    return (b && b.platform) || "";
  };
  H.userAgent.xr = H.userAgent.Fl();
  H.userAgent.Rf = !1;
  H.userAgent.Vf = !1;
  H.userAgent.Qf = !1;
  H.userAgent.Wf = !1;
  H.userAgent.Mf = !1;
  H.userAgent.de = !1;
  H.userAgent.ce = !1;
  H.userAgent.ee = !1;
  H.userAgent.Cj = !1;
  H.userAgent.Bj = !1;
  H.userAgent.Ra =
    H.userAgent.Rf ||
    H.userAgent.Vf ||
    H.userAgent.Qf ||
    H.userAgent.Wf ||
    H.userAgent.Mf ||
    H.userAgent.de ||
    H.userAgent.ce ||
    H.userAgent.ee;
  H.userAgent.Xq = H.userAgent.Ra
    ? H.userAgent.Rf
    : H.h.userAgent.platform.ti();
  H.userAgent.ws = H.userAgent.Ra
    ? H.userAgent.Vf
    : H.h.userAgent.platform.Bi();
  H.userAgent.Nm = function () {
    return H.h.userAgent.platform.Om() || H.h.userAgent.platform.ii();
  };
  H.userAgent.Vq = H.userAgent.Ra ? H.userAgent.Qf : H.userAgent.Nm();
  H.userAgent.Zm = function () {
    var b = H.userAgent.We();
    return !!b && H.c.contains(b.appVersion || "", "X11");
  };
  H.userAgent.xs = H.userAgent.Ra ? H.userAgent.Wf : H.userAgent.Zm();
  H.userAgent.ap = H.userAgent.Ra
    ? H.userAgent.Mf
    : H.h.userAgent.platform.gi();
  H.userAgent.Jq = H.userAgent.Ra
    ? H.userAgent.de
    : H.h.userAgent.platform.pi();
  H.userAgent.Iq = H.userAgent.Ra
    ? H.userAgent.ce
    : H.h.userAgent.platform.oi();
  H.userAgent.Kq = H.userAgent.Ra
    ? H.userAgent.ee
    : H.h.userAgent.platform.ri();
  H.userAgent.Hq = H.userAgent.Ra
    ? H.userAgent.de || H.userAgent.ce || H.userAgent.ee
    : H.h.userAgent.platform.ni();
  H.userAgent.Nq = H.userAgent.Ra
    ? H.userAgent.Cj
    : H.h.userAgent.platform.si();
  H.userAgent.nq = H.userAgent.Ra
    ? H.userAgent.Bj
    : H.h.userAgent.platform.Km();
  H.userAgent.Gl = function () {
    var b = "",
      c = H.userAgent.sm();
    c && (b = c ? c[1] : "");
    return H.userAgent.oa &&
      ((c = H.userAgent.xh()), null != c && c > parseFloat(b))
      ? String(c)
      : b;
  };
  H.userAgent.sm = function () {
    var b = H.userAgent.pm();
    if (H.userAgent.he) return /rv:([^\);]+)(\)|;)/.exec(b);
    if (H.userAgent.ag) return /Edge\/([\d\.]+)/.exec(b);
    if (H.userAgent.oa) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(b);
    if (H.userAgent.sc) return /WebKit\/(\S+)/.exec(b);
    if (H.userAgent.og) return /(?:Version)[ \/]?(\S+)/.exec(b);
  };
  H.userAgent.xh = function () {
    var b = H.global.document;
    return b ? b.documentMode : void 0;
  };
  H.userAgent.VERSION = H.userAgent.Gl();
  H.userAgent.compare = function (b, c) {
    return H.c.Kb(b, c);
  };
  H.userAgent.Xm = {};
  H.userAgent.Xa = function (b) {
    return (
      H.userAgent.zj ||
      H.ib.cache(H.userAgent.Xm, b, function () {
        return 0 <= H.c.Kb(H.userAgent.VERSION, b);
      })
    );
  };
  H.userAgent.Kv = H.userAgent.Xa;
  H.userAgent.Kc = function (b) {
    return Number(H.userAgent.Xj) >= b;
  };
  H.userAgent.lv = H.userAgent.Kc;
  var fa;
  fa = H.global.document && H.userAgent.oa ? H.userAgent.xh() : void 0;
  H.userAgent.Xj = fa;
  H.a.ha = {};
  H.a.ha.Ej = !1;
  H.a.ha.Fj = !1;
  H.a.ha.El = function () {
    try {
      return !!new self.OffscreenCanvas(0, 0).getContext("2d");
    } catch (b) {}
    return !1;
  };
  H.a.ha.pr = !H.a.ha.Ej && (H.a.ha.Fj || H.a.ha.El());
  H.a.ha.Kj = !H.userAgent.oa || H.userAgent.Kc(9);
  H.a.ha.Lj =
    (!H.userAgent.he && !H.userAgent.oa) ||
    (H.userAgent.oa && H.userAgent.Kc(9)) ||
    (H.userAgent.he && H.userAgent.Xa("1.9.1"));
  H.a.ha.Yf = H.userAgent.oa && !H.userAgent.Xa("9");
  H.a.ha.Mj = H.userAgent.oa || H.userAgent.og || H.userAgent.sc;
  H.a.ha.ek = H.userAgent.oa;
  H.a.ha.Rq = H.userAgent.oa && !H.userAgent.Kc(9);
  H.C = {};
  H.C.lw = function (b) {
    return Math.floor(Math.random() * b);
  };
  H.C.Ex = function (b, c) {
    return b + Math.random() * (c - b);
  };
  H.C.ht = function (b, c, d) {
    return Math.min(Math.max(b, c), d);
  };
  H.C.Li = function (b, c) {
    b %= c;
    return 0 > b * c ? b + c : b;
  };
  H.C.Nv = function (b, c, d) {
    return b + d * (c - b);
  };
  H.C.Yv = function (b, c, d) {
    return Math.abs(b - c) <= (d || 1e-6);
  };
  H.C.Df = function (b) {
    return H.C.Li(b, 360);
  };
  H.C.nx = function (b) {
    return H.C.Li(b, 2 * Math.PI);
  };
  H.C.mj = function (b) {
    return (b * Math.PI) / 180;
  };
  H.C.yo = function (b) {
    return (180 * b) / Math.PI;
  };
  H.C.Es = function (b, c) {
    return c * Math.cos(H.C.mj(b));
  };
  H.C.Fs = function (b, c) {
    return c * Math.sin(H.C.mj(b));
  };
  H.C.angle = function (b, c, d, e) {
    return H.C.Df(H.C.yo(Math.atan2(e - c, d - b)));
  };
  H.C.Ds = function (b, c) {
    b = H.C.Df(c) - H.C.Df(b);
    180 < b ? (b -= 360) : -180 >= b && (b = 360 + b);
    return b;
  };
  H.C.sign = function (b) {
    return 0 < b ? 1 : 0 > b ? -1 : b;
  };
  H.C.Rv = function (b, c, d, e) {
    d =
      d ||
      function (r, w) {
        return r == w;
      };
    e =
      e ||
      function (r) {
        return b[r];
      };
    for (var f = b.length, g = c.length, h = [], k = 0; k < f + 1; k++)
      (h[k] = []), (h[k][0] = 0);
    for (var m = 0; m < g + 1; m++) h[0][m] = 0;
    for (k = 1; k <= f; k++)
      for (m = 1; m <= g; m++)
        d(b[k - 1], c[m - 1])
          ? (h[k][m] = h[k - 1][m - 1] + 1)
          : (h[k][m] = Math.max(h[k - 1][m], h[k][m - 1]));
    var n = [];
    k = f;
    for (m = g; 0 < k && 0 < m; )
      d(b[k - 1], c[m - 1])
        ? (n.unshift(e(k - 1, m - 1)), k--, m--)
        : h[k - 1][m] > h[k][m - 1]
        ? k--
        : m--;
    return n;
  };
  H.C.Ff = function (b) {
    return H.g.reduce(
      arguments,
      function (c, d) {
        return c + d;
      },
      0
    );
  };
  H.C.fl = function (b) {
    return H.C.Ff.apply(null, arguments) / arguments.length;
  };
  H.C.ao = function (b) {
    var c = arguments.length;
    if (2 > c) return 0;
    var d = H.C.fl.apply(null, arguments);
    return (
      H.C.Ff.apply(
        null,
        H.g.map(arguments, function (e) {
          return Math.pow(e - d, 2);
        })
      ) /
      (c - 1)
    );
  };
  H.C.ox = function (b) {
    return Math.sqrt(H.C.ao.apply(null, arguments));
  };
  H.C.rv = function (b) {
    return isFinite(b) && 0 == b % 1;
  };
  H.C.ov = function (b) {
    return isFinite(b);
  };
  H.C.wv = function (b) {
    return 0 == b && 0 > 1 / b;
  };
  H.C.Qv = function (b) {
    if (0 < b) {
      var c = Math.round(Math.log(b) * Math.LOG10E);
      return c - (parseFloat("1e" + c) > b ? 1 : 0);
    }
    return 0 == b ? -Infinity : NaN;
  };
  H.C.Aw = function (b, c) {
    return Math.floor(b + (c || 2e-15));
  };
  H.C.zw = function (b, c) {
    return Math.ceil(b - (c || 2e-15));
  };
  H.C.ia = function (b, c) {
    this.x = H.ca(b) ? b : 0;
    this.y = H.ca(c) ? c : 0;
  };
  H.C.ia.prototype.clone = function () {
    return new H.C.ia(this.x, this.y);
  };
  H.sa &&
    (H.C.ia.prototype.toString = function () {
      return "(" + this.x + ", " + this.y + ")";
    });
  H.C.ia.prototype.Ob = function (b) {
    return b instanceof H.C.ia && H.C.ia.Ob(this, b);
  };
  H.C.ia.Ob = function (b, c) {
    return b == c ? !0 : b && c ? b.x == c.x && b.y == c.y : !1;
  };
  H.C.ia.Mt = function (b, c) {
    var d = b.x - c.x;
    b = b.y - c.y;
    return Math.sqrt(d * d + b * b);
  };
  H.C.ia.Sv = function (b) {
    return Math.sqrt(b.x * b.x + b.y * b.y);
  };
  H.C.ia.azimuth = function (b) {
    return H.C.angle(0, 0, b.x, b.y);
  };
  H.C.ia.lx = function (b, c) {
    var d = b.x - c.x;
    b = b.y - c.y;
    return d * d + b * b;
  };
  H.C.ia.Lt = function (b, c) {
    return new H.C.ia(b.x - c.x, b.y - c.y);
  };
  H.C.ia.Ff = function (b, c) {
    return new H.C.ia(b.x + c.x, b.y + c.y);
  };
  F = H.C.ia.prototype;
  F.ceil = function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  };
  F.floor = function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  };
  F.round = function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  };
  F.translate = function (b, c) {
    b instanceof H.C.ia
      ? ((this.x += b.x), (this.y += b.y))
      : ((this.x += Number(b)), H.Bb(c) && (this.y += c));
    return this;
  };
  F.scale = function (b, c) {
    c = H.Bb(c) ? c : b;
    this.x *= b;
    this.y *= c;
    return this;
  };
  H.C.Yb = function (b, c) {
    this.width = b;
    this.height = c;
  };
  H.C.Yb.Ob = function (b, c) {
    return b == c
      ? !0
      : b && c
      ? b.width == c.width && b.height == c.height
      : !1;
  };
  H.C.Yb.prototype.clone = function () {
    return new H.C.Yb(this.width, this.height);
  };
  H.sa &&
    (H.C.Yb.prototype.toString = function () {
      return "(" + this.width + " x " + this.height + ")";
    });
  F = H.C.Yb.prototype;
  F.aspectRatio = function () {
    return this.width / this.height;
  };
  F.Ca = function () {
    return !(this.width * this.height);
  };
  F.ceil = function () {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this;
  };
  F.floor = function () {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this;
  };
  F.round = function () {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this;
  };
  F.scale = function (b, c) {
    c = H.Bb(c) ? c : b;
    this.width *= b;
    this.height *= c;
    return this;
  };
  H.a.Gj = !1;
  H.a.Tf = !1;
  H.a.Qj = H.a.Gj || H.a.Tf;
  H.a.Qe = function (b) {
    return b ? new H.a.Vb(H.a.xb(b)) : H.a.Cl || (H.a.Cl = new H.a.Vb());
  };
  H.a.Zl = function () {
    return document;
  };
  H.a.Re = function (b) {
    return H.a.Ue(document, b);
  };
  H.a.Ue = function (b, c) {
    return H.L(c) ? b.getElementById(c) : c;
  };
  H.a.jm = function (b) {
    return H.a.Rh(document, b);
  };
  H.a.Rh = function (b, c) {
    return H.a.Ue(b, c);
  };
  H.a.vj = H.a.Re;
  H.a.getElementsByTagName = function (b, c) {
    return (c || document).getElementsByTagName(String(b));
  };
  H.a.Ve = function (b, c, d) {
    return H.a.qd(document, b, c, d);
  };
  H.a.cm = function (b, c, d) {
    return H.a.Te(document, b, c, d);
  };
  H.a.Ah = function (b, c) {
    var d = c || document;
    return H.a.ze(d)
      ? d.querySelectorAll("." + b)
      : H.a.qd(document, "*", b, c);
  };
  H.a.Se = function (b, c) {
    var d = c || document;
    return (
      (d.getElementsByClassName
        ? d.getElementsByClassName(b)[0]
        : H.a.Te(document, "*", b, c)) || null
    );
  };
  H.a.Qh = function (b, c) {
    return H.a.Se(b, c);
  };
  H.a.ze = function (b) {
    return !(!b.querySelectorAll || !b.querySelector);
  };
  H.a.qd = function (b, c, d, e) {
    b = e || b;
    c = c && "*" != c ? String(c).toUpperCase() : "";
    if (H.a.ze(b) && (c || d))
      return b.querySelectorAll(c + (d ? "." + d : ""));
    if (d && b.getElementsByClassName) {
      b = b.getElementsByClassName(d);
      if (c) {
        e = {};
        for (var f = 0, g = 0, h; (h = b[g]); g++)
          c == h.nodeName && (e[f++] = h);
        e.length = f;
        return e;
      }
      return b;
    }
    b = b.getElementsByTagName(c || "*");
    if (d) {
      e = {};
      for (g = f = 0; (h = b[g]); g++)
        (c = h.className),
          typeof c.split == t &&
            H.g.contains(c.split(/\s+/), d) &&
            (e[f++] = h);
      e.length = f;
      return e;
    }
    return b;
  };
  H.a.Te = function (b, c, d, e) {
    var f = e || b,
      g = c && "*" != c ? String(c).toUpperCase() : "";
    return H.a.ze(f) && (g || d)
      ? f.querySelector(g + (d ? "." + d : ""))
      : H.a.qd(b, c, d, e)[0] || null;
  };
  H.a.wj = H.a.Ve;
  H.a.Wd = function (b, c) {
    H.object.forEach(c, function (d, e) {
      d && typeof d == v && d.Va && (d = d.Ga());
      "style" == e
        ? (b.style.cssText = d)
        : "class" == e
        ? (b.className = d)
        : "for" == e
        ? (b.htmlFor = d)
        : H.a.$f.hasOwnProperty(e)
        ? b.setAttribute(H.a.$f[e], d)
        : H.c.startsWith(e, "aria-") || H.c.startsWith(e, "data-")
        ? b.setAttribute(e, d)
        : (b[e] = d);
    });
  };
  H.a.$f = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width",
  };
  H.a.Wh = function (b) {
    return H.a.Xh(b || window);
  };
  H.a.Xh = function (b) {
    b = b.document;
    b = H.a.Jc(b) ? b.documentElement : b.body;
    return new H.C.Yb(b.clientWidth, b.clientHeight);
  };
  H.a.$l = function () {
    return H.a.Oe(window);
  };
  H.a.wu = function (b) {
    return H.a.Oe(b);
  };
  H.a.Oe = function (b) {
    var c = b.document,
      d = 0;
    if (c) {
      d = c.body;
      var e = c.documentElement;
      if (!e || !d) return 0;
      b = H.a.Xh(b).height;
      if (H.a.Jc(c) && e.scrollHeight)
        d = e.scrollHeight != b ? e.scrollHeight : e.offsetHeight;
      else {
        c = e.scrollHeight;
        var f = e.offsetHeight;
        e.clientHeight != f && ((c = d.scrollHeight), (f = d.offsetHeight));
        d = c > b ? (c > f ? c : f) : c < f ? c : f;
      }
    }
    return d;
  };
  H.a.Fu = function (b) {
    return H.a.Qe((b || H.global || window).document).yh();
  };
  H.a.yh = function () {
    return H.a.zh(document);
  };
  H.a.zh = function (b) {
    var c = H.a.Pe(b);
    b = H.a.ec(b);
    return H.userAgent.oa &&
      H.userAgent.Xa("10") &&
      b.pageYOffset != c.scrollTop
      ? new H.C.ia(c.scrollLeft, c.scrollTop)
      : new H.C.ia(b.pageXOffset || c.scrollLeft, b.pageYOffset || c.scrollTop);
  };
  H.a.am = function () {
    return H.a.Pe(document);
  };
  H.a.Pe = function (b) {
    return b.scrollingElement
      ? b.scrollingElement
      : !H.userAgent.sc && H.a.Jc(b)
      ? b.documentElement
      : b.body || b.documentElement;
  };
  H.a.dc = function (b) {
    return b ? H.a.ec(b) : window;
  };
  H.a.ec = function (b) {
    return b.parentWindow || b.defaultView;
  };
  H.a.Ce = function (b, c, d) {
    return H.a.Yg(document, arguments);
  };
  H.a.Yg = function (b, c) {
    var d = String(c[0]),
      e = c[1];
    if (!H.a.ha.Kj && e && (e.name || e.type)) {
      d = ["<", d];
      e.name && d.push(' name="', H.c.Ha(e.name), '"');
      if (e.type) {
        d.push(' type="', H.c.Ha(e.type), '"');
        var f = {};
        H.object.extend(f, e);
        delete f.type;
        e = f;
      }
      d.push(">");
      d = d.join("");
    }
    d = b.createElement(d);
    e &&
      (H.L(e)
        ? (d.className = e)
        : H.isArray(e)
        ? (d.className = e.join(" "))
        : H.a.Wd(d, e));
    2 < c.length && H.a.Eg(b, d, c, 2);
    return d;
  };
  H.a.Eg = function (b, c, d, e) {
    function f(h) {
      h && c.appendChild(H.L(h) ? b.createTextNode(h) : h);
    }
    for (; e < d.length; e++) {
      var g = d[e];
      H.ma(g) && !H.a.df(g) ? H.g.forEach(H.a.ef(g) ? H.g.jb(g) : g, f) : f(g);
    }
  };
  H.a.xj = H.a.Ce;
  H.a.createElement = function (b) {
    return H.a.rb(document, b);
  };
  H.a.rb = function (b, c) {
    return b.createElement(String(c));
  };
  H.a.createTextNode = function (b) {
    return document.createTextNode(String(b));
  };
  H.a.zl = function (b, c, d) {
    return H.a.Zg(document, b, c, !!d);
  };
  H.a.Zg = function (b, c, d, e) {
    for (
      var f = H.a.rb(b, "TABLE"), g = f.appendChild(H.a.rb(b, "TBODY")), h = 0;
      h < c;
      h++
    ) {
      for (var k = H.a.rb(b, "TR"), m = 0; m < d; m++) {
        var n = H.a.rb(b, "TD");
        e && H.a.yf(n, H.c.yg.lg);
        k.appendChild(n);
      }
      g.appendChild(k);
    }
    return f;
  };
  H.a.st = function (b) {
    var c = H.g.map(arguments, H.c.M.K);
    c = H.b.kb.Si(
      H.c.M.from(
        "Constant HTML string, that gets turned into a Node later, so it will be automatically balanced."
      ),
      c.join("")
    );
    return H.a.Ti(c);
  };
  H.a.Ti = function (b) {
    return H.a.Ui(document, b);
  };
  H.a.Ui = function (b, c) {
    var d = H.a.rb(b, "DIV");
    H.a.ha.ek
      ? (H.a.O.xf(d, H.b.u.concat(H.b.u.Xf, c)), d.removeChild(d.firstChild))
      : H.a.O.xf(d, c);
    return H.a.tl(b, d);
  };
  H.a.tl = function (b, c) {
    if (1 == c.childNodes.length) return c.removeChild(c.firstChild);
    for (b = b.createDocumentFragment(); c.firstChild; )
      b.appendChild(c.firstChild);
    return b;
  };
  H.a.Fm = function () {
    return H.a.Jc(document);
  };
  H.a.Jc = function (b) {
    return H.a.Qj ? H.a.Tf : "CSS1Compat" == b.compatMode;
  };
  H.a.canHaveChildren = function (b) {
    if (b.nodeType != H.a.ua.mb) return !1;
    switch (b.tagName) {
      case "APPLET":
      case "AREA":
      case "BASE":
      case "BR":
      case "COL":
      case "COMMAND":
      case "EMBED":
      case "FRAME":
      case "HR":
      case "IMG":
      case "INPUT":
      case "IFRAME":
      case "ISINDEX":
      case "KEYGEN":
      case "LINK":
      case "NOFRAMES":
      case "NOSCRIPT":
      case "META":
      case "OBJECT":
      case "PARAM":
      case l:
      case "SOURCE":
      case "STYLE":
      case "TRACK":
      case "WBR":
        return !1;
    }
    return !0;
  };
  H.a.appendChild = function (b, c) {
    b.appendChild(c);
  };
  H.a.append = function (b, c) {
    H.a.Eg(H.a.xb(b), b, arguments, 1);
  };
  H.a.tf = function (b) {
    for (var c; (c = b.firstChild); ) b.removeChild(c);
  };
  H.a.ei = function (b, c) {
    c.parentNode && c.parentNode.insertBefore(b, c);
  };
  H.a.di = function (b, c) {
    c.parentNode && c.parentNode.insertBefore(b, c.nextSibling);
  };
  H.a.ci = function (b, c, d) {
    b.insertBefore(c, b.childNodes[d] || null);
  };
  H.a.removeNode = function (b) {
    return b && b.parentNode ? b.parentNode.removeChild(b) : null;
  };
  H.a.Ri = function (b, c) {
    var d = c.parentNode;
    d && d.replaceChild(b, c);
  };
  H.a.oh = function (b) {
    var c,
      d = b.parentNode;
    if (d && d.nodeType != H.a.ua.Wj) {
      if (b.removeNode) return b.removeNode(!1);
      for (; (c = b.firstChild); ) d.insertBefore(c, b);
      return H.a.removeNode(b);
    }
  };
  H.a.vh = function (b) {
    return H.a.ha.Lj && void 0 != b.children
      ? b.children
      : H.g.filter(b.childNodes, function (c) {
          return c.nodeType == H.a.ua.mb;
        });
  };
  H.a.Bh = function (b) {
    return H.ca(b.firstElementChild)
      ? b.firstElementChild
      : H.a.sd(b.firstChild, !0);
  };
  H.a.Eh = function (b) {
    return H.ca(b.lastElementChild)
      ? b.lastElementChild
      : H.a.sd(b.lastChild, !1);
  };
  H.a.Gh = function (b) {
    return H.ca(b.nextElementSibling)
      ? b.nextElementSibling
      : H.a.sd(b.nextSibling, !0);
  };
  H.a.Nh = function (b) {
    return H.ca(b.previousElementSibling)
      ? b.previousElementSibling
      : H.a.sd(b.previousSibling, !1);
  };
  H.a.sd = function (b, c) {
    for (; b && b.nodeType != H.a.ua.mb; )
      b = c ? b.nextSibling : b.previousSibling;
    return b;
  };
  H.a.Hh = function (b) {
    if (!b) return null;
    if (b.firstChild) return b.firstChild;
    for (; b && !b.nextSibling; ) b = b.parentNode;
    return b ? b.nextSibling : null;
  };
  H.a.Oh = function (b) {
    if (!b) return null;
    if (!b.previousSibling) return b.parentNode;
    for (b = b.previousSibling; b && b.lastChild; ) b = b.lastChild;
    return b;
  };
  H.a.df = function (b) {
    return H.Da(b) && 0 < b.nodeType;
  };
  H.a.bf = function (b) {
    return H.Da(b) && b.nodeType == H.a.ua.mb;
  };
  H.a.zi = function (b) {
    return H.Da(b) && b.window == b;
  };
  H.a.Mh = function (b) {
    var c;
    if (
      H.a.ha.Mj &&
      !(
        H.userAgent.oa &&
        H.userAgent.Xa("9") &&
        !H.userAgent.Xa("10") &&
        H.global.SVGElement &&
        b instanceof H.global.SVGElement
      ) &&
      (c = b.parentElement)
    )
      return c;
    c = b.parentNode;
    return H.a.bf(c) ? c : null;
  };
  H.a.contains = function (b, c) {
    if (!b || !c) return !1;
    if (b.contains && c.nodeType == H.a.ua.mb) return b == c || b.contains(c);
    if ("undefined" != typeof b.compareDocumentPosition)
      return b == c || !!(b.compareDocumentPosition(c) & 16);
    for (; c && b != c; ) c = c.parentNode;
    return c == b;
  };
  H.a.Sg = function (b, c) {
    if (b == c) return 0;
    if (b.compareDocumentPosition)
      return b.compareDocumentPosition(c) & 2 ? 1 : -1;
    if (H.userAgent.oa && !H.userAgent.Kc(9)) {
      if (b.nodeType == H.a.ua.Uc) return -1;
      if (c.nodeType == H.a.ua.Uc) return 1;
    }
    if ("sourceIndex" in b || (b.parentNode && "sourceIndex" in b.parentNode)) {
      var d = b.nodeType == H.a.ua.mb,
        e = c.nodeType == H.a.ua.mb;
      if (d && e) return b.sourceIndex - c.sourceIndex;
      var f = b.parentNode,
        g = c.parentNode;
      return f == g
        ? H.a.Ug(b, c)
        : !d && H.a.contains(f, c)
        ? -1 * H.a.Tg(b, c)
        : !e && H.a.contains(g, b)
        ? H.a.Tg(c, b)
        : (d ? b.sourceIndex : f.sourceIndex) -
          (e ? c.sourceIndex : g.sourceIndex);
    }
    e = H.a.xb(b);
    d = e.createRange();
    d.selectNode(b);
    d.collapse(!0);
    b = e.createRange();
    b.selectNode(c);
    b.collapse(!0);
    return d.compareBoundaryPoints(H.global.Range.START_TO_END, b);
  };
  H.a.Tg = function (b, c) {
    var d = b.parentNode;
    if (d == c) return -1;
    for (; c.parentNode != d; ) c = c.parentNode;
    return H.a.Ug(c, b);
  };
  H.a.Ug = function (b, c) {
    for (; (c = c.previousSibling); ) if (c == b) return -1;
    return 1;
  };
  H.a.kh = function (b) {
    var c,
      d = arguments.length;
    if (!d) return null;
    if (1 == d) return arguments[0];
    var e = [],
      f = Infinity;
    for (c = 0; c < d; c++) {
      for (var g = [], h = arguments[c]; h; ) g.unshift(h), (h = h.parentNode);
      e.push(g);
      f = Math.min(f, g.length);
    }
    g = null;
    for (c = 0; c < f; c++) {
      h = e[0][c];
      for (var k = 1; k < d; k++) if (h != e[k][c]) return g;
      g = h;
    }
    return g;
  };
  H.a.qv = function (b) {
    return 16 == (b.ownerDocument.compareDocumentPosition(b) & 16);
  };
  H.a.xb = function (b) {
    return b.nodeType == H.a.ua.Uc ? b : b.ownerDocument || b.document;
  };
  H.a.Ch = function (b) {
    return b.contentDocument || b.contentWindow.document;
  };
  H.a.Dh = function (b) {
    try {
      return (
        b.contentWindow ||
        (b.contentDocument ? H.a.dc(b.contentDocument) : null)
      );
    } catch (c) {}
    return null;
  };
  H.a.yf = function (b, c) {
    if ("textContent" in b) b.textContent = c;
    else if (b.nodeType == H.a.ua.$c) b.data = String(c);
    else if (b.firstChild && b.firstChild.nodeType == H.a.ua.$c) {
      for (; b.lastChild != b.firstChild; ) b.removeChild(b.lastChild);
      b.firstChild.data = String(c);
    } else H.a.tf(b), b.appendChild(H.a.xb(b).createTextNode(String(c)));
  };
  H.a.Lh = function (b) {
    if ("outerHTML" in b) return b.outerHTML;
    var c = H.a.rb(H.a.xb(b), "DIV");
    c.appendChild(b.cloneNode(!0));
    return c.innerHTML;
  };
  H.a.lh = function (b, c) {
    var d = [];
    return H.a.Ie(b, c, d, !0) ? d[0] : void 0;
  };
  H.a.mh = function (b, c) {
    var d = [];
    H.a.Ie(b, c, d, !1);
    return d;
  };
  H.a.Ie = function (b, c, d, e) {
    if (null != b)
      for (b = b.firstChild; b; ) {
        if ((c(b) && (d.push(b), e)) || H.a.Ie(b, c, d, e)) return !0;
        b = b.nextSibling;
      }
    return !1;
  };
  H.a.Yt = function (b, c) {
    for (b = H.a.wh(b); 0 < b.length; ) {
      var d = b.pop();
      if (c(d)) return d;
      for (d = d.lastElementChild; d; d = d.previousElementSibling) b.push(d);
    }
    return null;
  };
  H.a.Zt = function (b, c) {
    var d = [];
    for (b = H.a.wh(b); 0 < b.length; ) {
      var e = b.pop();
      c(e) && d.push(e);
      for (e = e.lastElementChild; e; e = e.previousElementSibling) b.push(e);
    }
    return d;
  };
  H.a.wh = function (b) {
    if (b.nodeType == H.a.ua.Uc) return [b.documentElement];
    var c = [];
    for (b = b.lastElementChild; b; b = b.previousElementSibling) c.push(b);
    return c;
  };
  H.a.vg = { SCRIPT: 1, STYLE: 1, HEAD: 1, IFRAME: 1, OBJECT: 1 };
  H.a.Yc = { IMG: " ", BR: "\n" };
  H.a.cf = function (b) {
    return H.a.$h(b) && H.a.xi(b);
  };
  H.a.Yi = function (b, c) {
    c ? (b.tabIndex = 0) : ((b.tabIndex = -1), b.removeAttribute("tabIndex"));
  };
  H.a.ji = function (b) {
    var c;
    return (c = H.a.vn(b)
      ? !b.disabled && (!H.a.$h(b) || H.a.xi(b))
      : H.a.cf(b)) && H.userAgent.oa
      ? H.a.xm(b)
      : c;
  };
  H.a.$h = function (b) {
    return H.userAgent.oa && !H.userAgent.Xa("9")
      ? ((b = b.getAttributeNode("tabindex")), H.zb(b) && b.specified)
      : b.hasAttribute("tabindex");
  };
  H.a.xi = function (b) {
    b = b.tabIndex;
    return H.Bb(b) && 0 <= b && 32768 > b;
  };
  H.a.vn = function (b) {
    return (
      ("A" == b.tagName && b.hasAttribute("href")) ||
      "INPUT" == b.tagName ||
      "TEXTAREA" == b.tagName ||
      "SELECT" == b.tagName ||
      "BUTTON" == b.tagName
    );
  };
  H.a.xm = function (b) {
    b =
      !H.Wa(b.getBoundingClientRect) ||
      (H.userAgent.oa && null == b.parentElement)
        ? { height: b.offsetHeight, width: b.offsetWidth }
        : b.getBoundingClientRect();
    return H.zb(b) && 0 < b.height && 0 < b.width;
  };
  H.a.ud = function (b) {
    if (H.a.ha.Yf && null !== b && "innerText" in b) b = H.c.rl(b.innerText);
    else {
      var c = [];
      H.a.Ye(b, c, !0);
      b = c.join("");
    }
    b = b.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    b = b.replace(/\u200B/g, "");
    H.a.ha.Yf || (b = b.replace(/ +/g, " "));
    " " != b && (b = b.replace(/^\s*/, ""));
    return b;
  };
  H.a.Ku = function (b) {
    var c = [];
    H.a.Ye(b, c, !1);
    return c.join("");
  };
  H.a.Ye = function (b, c, d) {
    if (!(b.nodeName in H.a.vg))
      if (b.nodeType == H.a.ua.$c)
        d
          ? c.push(String(b.nodeValue).replace(/(\r\n|\r|\n)/g, ""))
          : c.push(b.nodeValue);
      else if (b.nodeName in H.a.Yc) c.push(H.a.Yc[b.nodeName]);
      else for (b = b.firstChild; b; ) H.a.Ye(b, c, d), (b = b.nextSibling);
  };
  H.a.Jh = function (b) {
    return H.a.ud(b).length;
  };
  H.a.Kh = function (b, c) {
    c = c || H.a.xb(b).body;
    for (var d = []; b && b != c; ) {
      for (var e = b; (e = e.previousSibling); ) d.unshift(H.a.ud(e));
      b = b.parentNode;
    }
    return H.c.trimLeft(d.join("")).replace(/ +/g, " ").length;
  };
  H.a.Ih = function (b, c, d) {
    b = [b];
    for (var e = 0, f = null; 0 < b.length && e < c; )
      if (((f = b.pop()), !(f.nodeName in H.a.vg)))
        if (f.nodeType == H.a.ua.$c) {
          var g = f.nodeValue.replace(/(\r\n|\r|\n)/g, "").replace(/ +/g, " ");
          e += g.length;
        } else if (f.nodeName in H.a.Yc) e += H.a.Yc[f.nodeName].length;
        else
          for (g = f.childNodes.length - 1; 0 <= g; g--)
            b.push(f.childNodes[g]);
    H.Da(d) && ((d.nw = f ? f.nodeValue.length + c - e - 1 : 0), (d.node = f));
    return f;
  };
  H.a.ef = function (b) {
    if (b && typeof b.length == u) {
      if (H.Da(b)) return typeof b.item == t || typeof b.item == y;
      if (H.Wa(b)) return typeof b.item == t;
    }
    return !1;
  };
  H.a.Me = function (b, c, d, e) {
    if (!c && !d) return null;
    var f = c ? String(c).toUpperCase() : null;
    return H.a.Le(
      b,
      function (g) {
        return (
          (!f || g.nodeName == f) &&
          (!d ||
            (H.L(g.className) && H.g.contains(g.className.split(/\s+/), d)))
        );
      },
      !0,
      e
    );
  };
  H.a.sh = function (b, c, d) {
    return H.a.Me(b, null, c, d);
  };
  H.a.Le = function (b, c, d, e) {
    b && !d && (b = b.parentNode);
    for (d = 0; b && (null == e || d <= e); ) {
      if (c(b)) return b;
      b = b.parentNode;
      d++;
    }
    return null;
  };
  H.a.rh = function (b) {
    try {
      var c = b && b.activeElement;
      return c && c.nodeName ? c : null;
    } catch (d) {
      return null;
    }
  };
  H.a.Ju = function () {
    var b = H.a.dc();
    return H.ca(b.devicePixelRatio)
      ? b.devicePixelRatio
      : b.matchMedia
      ? H.a.Ed(3) || H.a.Ed(2) || H.a.Ed(1.5) || H.a.Ed(1) || 0.75
      : 1;
  };
  H.a.Ed = function (b) {
    return H.a
      .dc()
      .matchMedia(
        "(min-resolution: " +
          b +
          "dppx),(min--moz-device-pixel-ratio: " +
          b +
          "),(min-resolution: " +
          96 * b +
          "dpi)"
      ).matches
      ? b
      : 0;
  };
  H.a.uh = function (b) {
    return b.getContext("2d");
  };
  H.a.Vb = function (b) {
    this.ka = b || H.global.document || document;
  };
  F = H.a.Vb.prototype;
  F.Qe = H.a.Qe;
  F.Zl = D("ka");
  F.Re = function (b) {
    return H.a.Ue(this.ka, b);
  };
  F.jm = function (b) {
    return H.a.Rh(this.ka, b);
  };
  F.vj = H.a.Vb.prototype.Re;
  F.getElementsByTagName = function (b, c) {
    return (c || this.ka).getElementsByTagName(String(b));
  };
  F.Ve = function (b, c, d) {
    return H.a.qd(this.ka, b, c, d);
  };
  F.cm = function (b, c, d) {
    return H.a.Te(this.ka, b, c, d);
  };
  F.Ah = function (b, c) {
    return H.a.Ah(b, c || this.ka);
  };
  F.Se = function (b, c) {
    return H.a.Se(b, c || this.ka);
  };
  F.Qh = function (b, c) {
    return H.a.Qh(b, c || this.ka);
  };
  F.wj = H.a.Vb.prototype.Ve;
  F.Wd = H.a.Wd;
  F.Wh = function (b) {
    return H.a.Wh(b || this.dc());
  };
  F.$l = function () {
    return H.a.Oe(this.dc());
  };
  F.Ce = function (b, c, d) {
    return H.a.Yg(this.ka, arguments);
  };
  F.xj = H.a.Vb.prototype.Ce;
  F.createElement = function (b) {
    return H.a.rb(this.ka, b);
  };
  F.createTextNode = function (b) {
    return this.ka.createTextNode(String(b));
  };
  F.zl = function (b, c, d) {
    return H.a.Zg(this.ka, b, c, !!d);
  };
  F.Ti = function (b) {
    return H.a.Ui(this.ka, b);
  };
  F.Fm = function () {
    return H.a.Jc(this.ka);
  };
  F.dc = function () {
    return H.a.ec(this.ka);
  };
  F.am = function () {
    return H.a.Pe(this.ka);
  };
  F.yh = function () {
    return H.a.zh(this.ka);
  };
  F.rh = function (b) {
    return H.a.rh(b || this.ka);
  };
  F.appendChild = H.a.appendChild;
  F.append = H.a.append;
  F.canHaveChildren = H.a.canHaveChildren;
  F.tf = H.a.tf;
  F.ei = H.a.ei;
  F.di = H.a.di;
  F.ci = H.a.ci;
  F.removeNode = H.a.removeNode;
  F.Ri = H.a.Ri;
  F.oh = H.a.oh;
  F.vh = H.a.vh;
  F.Bh = H.a.Bh;
  F.Eh = H.a.Eh;
  F.Gh = H.a.Gh;
  F.Nh = H.a.Nh;
  F.Hh = H.a.Hh;
  F.Oh = H.a.Oh;
  F.df = H.a.df;
  F.bf = H.a.bf;
  F.zi = H.a.zi;
  F.Mh = H.a.Mh;
  F.contains = H.a.contains;
  F.Sg = H.a.Sg;
  F.kh = H.a.kh;
  F.xb = H.a.xb;
  F.Ch = H.a.Ch;
  F.Dh = H.a.Dh;
  F.yf = H.a.yf;
  F.Lh = H.a.Lh;
  F.lh = H.a.lh;
  F.mh = H.a.mh;
  F.cf = H.a.cf;
  F.Yi = H.a.Yi;
  F.ji = H.a.ji;
  F.ud = H.a.ud;
  F.Jh = H.a.Jh;
  F.Kh = H.a.Kh;
  F.Ih = H.a.Ih;
  F.ef = H.a.ef;
  F.Me = H.a.Me;
  F.sh = H.a.sh;
  F.Le = H.a.Le;
  F.uh = H.a.uh;
  H.o = {};
  H.o.va =
    "StopIteration" in H.global
      ? H.global.StopIteration
      : { message: "StopIteration", stack: "" };
  H.o.Iterator = B();
  H.o.Iterator.prototype.next = function () {
    throw H.o.va;
  };
  H.o.Iterator.prototype.se = function () {
    return this;
  };
  H.o.fa = function (b) {
    if (b instanceof H.o.Iterator) return b;
    if (typeof b.se == t) return b.se(!1);
    if (H.ma(b)) {
      var c = 0,
        d = new H.o.Iterator();
      d.next = function () {
        for (;;) {
          if (c >= b.length) throw H.o.va;
          if (c in b) return b[c++];
          c++;
        }
      };
      return d;
    }
    throw Error("Not implemented");
  };
  H.o.forEach = function (b, c, d) {
    if (H.ma(b))
      try {
        H.g.forEach(b, c, d);
      } catch (e) {
        if (e !== H.o.va) throw e;
      }
    else {
      b = H.o.fa(b);
      try {
        for (;;) c.call(d, b.next(), void 0, b);
      } catch (e) {
        if (e !== H.o.va) throw e;
      }
    }
  };
  H.o.filter = function (b, c, d) {
    var e = H.o.fa(b);
    b = new H.o.Iterator();
    b.next = function () {
      for (;;) {
        var f = e.next();
        if (c.call(d, f, void 0, e)) return f;
      }
    };
    return b;
  };
  H.o.Xt = function (b, c, d) {
    return H.o.filter(b, H.V.xn(c), d);
  };
  H.o.Qd = function (b, c, d) {
    var e = 0,
      f = b,
      g = d || 1;
    1 < arguments.length && ((e = b), (f = +c));
    if (0 == g) throw Error("Range step argument must not be zero");
    var h = new H.o.Iterator();
    h.next = function () {
      if ((0 < g && e >= f) || (0 > g && e <= f)) throw H.o.va;
      var k = e;
      e += g;
      return k;
    };
    return h;
  };
  H.o.join = function (b, c) {
    return H.o.jb(b).join(c);
  };
  H.o.map = function (b, c, d) {
    var e = H.o.fa(b);
    b = new H.o.Iterator();
    b.next = function () {
      var f = e.next();
      return c.call(d, f, void 0, e);
    };
    return b;
  };
  H.o.reduce = function (b, c, d, e) {
    var f = d;
    H.o.forEach(b, function (g) {
      f = c.call(e, f, g);
    });
    return f;
  };
  H.o.some = function (b, c, d) {
    b = H.o.fa(b);
    try {
      for (;;) if (c.call(d, b.next(), void 0, b)) return !0;
    } catch (e) {
      if (e !== H.o.va) throw e;
    }
    return !1;
  };
  H.o.every = function (b, c, d) {
    b = H.o.fa(b);
    try {
      for (;;) if (!c.call(d, b.next(), void 0, b)) return !1;
    } catch (e) {
      if (e !== H.o.va) throw e;
    }
    return !0;
  };
  H.o.gt = function (b) {
    return H.o.sl(arguments);
  };
  H.o.sl = function (b) {
    var c = H.o.fa(b);
    b = new H.o.Iterator();
    var d = null;
    b.next = function () {
      for (;;) {
        if (null == d) {
          var e = c.next();
          d = H.o.fa(e);
        }
        try {
          return d.next();
        } catch (f) {
          if (f !== H.o.va) throw f;
          d = null;
        }
      }
    };
    return b;
  };
  H.o.Nt = function (b, c, d) {
    var e = H.o.fa(b);
    b = new H.o.Iterator();
    var f = !0;
    b.next = function () {
      for (;;) {
        var g = e.next();
        if (!f || !c.call(d, g, void 0, e)) return (f = !1), g;
      }
    };
    return b;
  };
  H.o.ux = function (b, c, d) {
    var e = H.o.fa(b);
    b = new H.o.Iterator();
    b.next = function () {
      var f = e.next();
      if (c.call(d, f, void 0, e)) return f;
      throw H.o.va;
    };
    return b;
  };
  H.o.jb = function (b) {
    if (H.ma(b)) return H.g.jb(b);
    b = H.o.fa(b);
    var c = [];
    H.o.forEach(b, function (d) {
      c.push(d);
    });
    return c;
  };
  H.o.Ob = function (b, c) {
    b = H.o.To({}, b, c);
    var d = H.g.eh;
    return H.o.every(b, function (e) {
      return d(e[0], e[1]);
    });
  };
  H.o.wn = function (b) {
    try {
      H.o.fa(b).next();
    } catch (c) {
      if (c != H.o.va) throw c;
    }
  };
  H.o.product = function (b) {
    if (
      H.g.some(arguments, function (f) {
        return !f.length;
      }) ||
      !arguments.length
    )
      return new H.o.Iterator();
    var c = new H.o.Iterator(),
      d = arguments,
      e = H.g.repeat(0, d.length);
    c.next = function () {
      if (e) {
        for (
          var f = H.g.map(e, function (h, k) {
              return d[k][h];
            }),
            g = e.length - 1;
          0 <= g;
          g--
        ) {
          if (e[g] < d[g].length - 1) {
            e[g]++;
            break;
          }
          if (0 == g) {
            e = null;
            break;
          }
          e[g] = 0;
        }
        return f;
      }
      throw H.o.va;
    };
    return c;
  };
  H.o.Ht = function (b) {
    var c = H.o.fa(b),
      d = [],
      e = 0;
    b = new H.o.Iterator();
    var f = !1;
    b.next = function () {
      var g = null;
      if (!f)
        try {
          return (g = c.next()), d.push(g), g;
        } catch (h) {
          if (h != H.o.va || H.g.Ca(d)) throw h;
          f = !0;
        }
      g = d[e];
      e = (e + 1) % d.length;
      return g;
    };
    return b;
  };
  H.o.count = function (b, c) {
    var d = b || 0,
      e = H.ca(c) ? c : 1;
    b = new H.o.Iterator();
    b.next = function () {
      var f = d;
      d += e;
      return f;
    };
    return b;
  };
  H.o.repeat = function (b) {
    var c = new H.o.Iterator();
    c.next = H.V.Vg(b);
    return c;
  };
  H.o.zs = function (b) {
    var c = H.o.fa(b),
      d = 0;
    b = new H.o.Iterator();
    b.next = function () {
      return (d += c.next());
    };
    return b;
  };
  H.o.uj = function (b) {
    var c = arguments,
      d = new H.o.Iterator();
    if (0 < c.length) {
      var e = H.g.map(c, H.o.fa);
      d.next = function () {
        return H.g.map(e, function (f) {
          return f.next();
        });
      };
    }
    return d;
  };
  H.o.To = function (b, c) {
    var d = H.g.slice(arguments, 1),
      e = new H.o.Iterator();
    if (0 < d.length) {
      var f = H.g.map(d, H.o.fa);
      e.next = function () {
        var g = !1,
          h = H.g.map(f, function (k) {
            try {
              var m = k.next();
              g = !0;
            } catch (n) {
              if (n !== H.o.va) throw n;
              m = b;
            }
            return m;
          });
        if (!g) throw H.o.va;
        return h;
      };
    }
    return e;
  };
  H.o.pt = function (b, c) {
    var d = H.o.fa(c);
    return H.o.filter(b, function () {
      return !!d.next();
    });
  };
  H.o.ke = function (b, c) {
    this.iterator = H.o.fa(b);
    this.Di = c || H.V.ai;
  };
  H.yb(H.o.ke, H.o.Iterator);
  H.o.ke.prototype.next = function () {
    for (; this.yc == this.hj; )
      (this.kd = this.iterator.next()), (this.yc = this.Di(this.kd));
    for (var b = (this.hj = this.yc), c = this.hj, d = []; this.yc == c; ) {
      d.push(this.kd);
      try {
        this.kd = this.iterator.next();
      } catch (e) {
        if (e !== H.o.va) throw e;
        break;
      }
      this.yc = this.Di(this.kd);
    }
    return [b, d];
  };
  H.o.Ru = function (b, c) {
    return new H.o.ke(b, c);
  };
  H.o.px = function (b, c, d) {
    var e = H.o.fa(b);
    b = new H.o.Iterator();
    b.next = function () {
      var f = H.o.jb(e.next());
      return c.apply(d, H.g.concat(f, void 0, e));
    };
    return b;
  };
  H.o.tee = function (b, c) {
    function d() {
      var g = e.next();
      H.g.forEach(f, function (h) {
        h.push(g);
      });
    }
    var e = H.o.fa(b),
      f = H.g.map(H.g.Qd(H.Bb(c) ? c : 2), function () {
        return [];
      });
    return H.g.map(f, function (g) {
      var h = new H.o.Iterator();
      h.next = function () {
        H.g.Ca(g) && d();
        return g.shift();
      };
      return h;
    });
  };
  H.o.Tt = function (b, c) {
    return H.o.uj(H.o.count(c), b);
  };
  H.o.an = function (b, c) {
    var d = H.o.fa(b);
    b = new H.o.Iterator();
    var e = c;
    b.next = function () {
      if (0 < e--) return d.next();
      throw H.o.va;
    };
    return b;
  };
  H.o.vl = function (b, c) {
    for (b = H.o.fa(b); 0 < c--; ) H.o.wn(b);
    return b;
  };
  H.o.slice = function (b, c, d) {
    b = H.o.vl(b, c);
    H.Bb(d) && (b = H.o.an(b, d - c));
    return b;
  };
  H.o.wm = function (b) {
    var c = [];
    H.g.Jn(b, c);
    return b.length != c.length;
  };
  H.o.An = function (b, c) {
    b = H.o.jb(b);
    c = H.g.repeat(b, H.Bb(c) ? c : b.length);
    c = H.o.product.apply(void 0, c);
    return H.o.filter(c, function (d) {
      return !H.o.wm(d);
    });
  };
  H.o.lt = function (b, c) {
    function d(g) {
      return e[g];
    }
    var e = H.o.jb(b);
    b = H.o.Qd(e.length);
    c = H.o.An(b, c);
    var f = H.o.filter(c, function (g) {
      return H.g.wi(g);
    });
    c = new H.o.Iterator();
    c.next = function () {
      return H.g.map(f.next(), d);
    };
    return c;
  };
  H.o.mt = function (b, c) {
    function d(g) {
      return e[g];
    }
    var e = H.o.jb(b);
    b = H.g.Qd(e.length);
    c = H.g.repeat(b, c);
    c = H.o.product.apply(void 0, c);
    var f = H.o.filter(c, function (g) {
      return H.g.wi(g);
    });
    c = new H.o.Iterator();
    c.next = function () {
      return H.g.map(f.next(), d);
    };
    return c;
  };
  H.Pd = {};
  H.Pd.Fr = B();
  H.Thenable = B();
  H.Thenable.prototype.then = B();
  H.Thenable.hg = "$goog_Thenable";
  H.Thenable.Cg = function (b) {
    b.prototype[H.Thenable.hg] = !0;
  };
  H.Thenable.ki = function (b) {
    if (!b) return !1;
    try {
      return !!b[H.Thenable.hg];
    } catch (c) {
      return !1;
    }
  };
  H.Promise = function (b, c) {
    this.qa = H.Promise.ba.$a;
    this.Ia = void 0;
    this.Zb = this.qb = this.ya = null;
    this.He = !1;
    0 < H.Promise.Hb ? (this.Yd = 0) : 0 == H.Promise.Hb && (this.wd = !1);
    H.Promise.eb && ((this.Cf = []), I(this, Error("created")), (this.bh = 0));
    if (b != H.Rb)
      try {
        var d = this;
        b.call(
          c,
          function (e) {
            J(d, H.Promise.ba.nb, e);
          },
          function (e) {
            if (H.sa && !(e instanceof H.Promise.Ub))
              try {
                if (e instanceof Error) throw e;
                throw Error("Promise rejected.");
              } catch (f) {}
            J(d, H.Promise.ba.Ja, e);
          }
        );
      } catch (e) {
        J(this, H.Promise.ba.Ja, e);
      }
  };
  H.Promise.eb = !1;
  H.Promise.Hb = 0;
  H.Promise.ba = { $a: 0, Ij: 1, nb: 2, Ja: 3 };
  H.Promise.Zf = function () {
    this.next = this.context = this.hc = this.Oc = this.Jb = null;
    this.bd = !1;
  };
  H.Promise.Zf.prototype.reset = function () {
    this.context = this.hc = this.Oc = this.Jb = null;
    this.bd = !1;
  };
  H.Promise.ge = 100;
  H.Promise.Ec = new H.async.Wc(
    function () {
      return new H.Promise.Zf();
    },
    function (b) {
      b.reset();
    },
    H.Promise.ge
  );
  H.Promise.th = function (b, c, d) {
    var e = H.Promise.Ec.get();
    e.Oc = b;
    e.hc = c;
    e.context = d;
    return e;
  };
  H.Promise.Rn = function (b) {
    H.Promise.Ec.put(b);
  };
  H.Promise.resolve = function (b) {
    if (b instanceof H.Promise) return b;
    var c = new H.Promise(H.Rb);
    J(c, H.Promise.ba.nb, b);
    return c;
  };
  H.Promise.reject = function (b) {
    return new H.Promise(function (c, d) {
      d(b);
    });
  };
  H.Promise.Rd = function (b, c, d) {
    H.Promise.Ki(b, c, d, null) || H.async.X(H.Sb(c, b));
  };
  H.Promise.race = function (b) {
    return new H.Promise(function (c, d) {
      b.length || c(void 0);
      for (var e = 0, f; e < b.length; e++) (f = b[e]), H.Promise.Rd(f, c, d);
    });
  };
  H.Promise.all = function (b) {
    return new H.Promise(function (c, d) {
      var e = b.length,
        f = [];
      if (e)
        for (
          var g = function (n, r) {
              e--;
              f[n] = r;
              0 == e && c(f);
            },
            h = function (n) {
              d(n);
            },
            k = 0,
            m;
          k < b.length;
          k++
        )
          (m = b[k]), H.Promise.Rd(m, H.Sb(g, k), h);
      else c(f);
    });
  };
  H.Promise.Cs = function (b) {
    return new H.Promise(function (c) {
      var d = b.length,
        e = [];
      if (d)
        for (
          var f = function (k, m, n) {
              d--;
              e[k] = m ? { Xl: !0, value: n } : { Xl: !1, reason: n };
              0 == d && c(e);
            },
            g = 0,
            h;
          g < b.length;
          g++
        )
          (h = b[g]), H.Promise.Rd(h, H.Sb(f, g, !0), H.Sb(f, g, !1));
      else c(e);
    });
  };
  H.Promise.cu = function (b) {
    return new H.Promise(function (c, d) {
      var e = b.length,
        f = [];
      if (e)
        for (
          var g = function (n) {
              c(n);
            },
            h = function (n, r) {
              e--;
              f[n] = r;
              0 == e && d(f);
            },
            k = 0,
            m;
          k < b.length;
          k++
        )
          (m = b[k]), H.Promise.Rd(m, g, H.Sb(h, k));
      else c(void 0);
    });
  };
  H.Promise.Ix = function () {
    var b,
      c,
      d = new H.Promise(function (e, f) {
        b = e;
        c = f;
      });
    return new H.Promise.rk(d, b, c);
  };
  H.Promise.prototype.then = function (b, c, d) {
    H.Promise.eb && I(this, Error("then"));
    return ha(this, H.Wa(b) ? b : null, H.Wa(c) ? c : null, d);
  };
  H.Thenable.Cg(H.Promise);
  H.Promise.prototype.cancel = function (b) {
    this.qa == H.Promise.ba.$a &&
      H.async.X(function () {
        var c = new H.Promise.Ub(b);
        ia(this, c);
      }, this);
  };
  function ia(b, c) {
    if (b.qa == H.Promise.ba.$a)
      if (b.ya) {
        var d = b.ya;
        if (d.qb) {
          for (
            var e = 0, f = null, g = null, h = d.qb;
            h && (h.bd || (e++, h.Jb == b && (f = h), !(f && 1 < e)));
            h = h.next
          )
            f || (g = h);
          f &&
            (d.qa == H.Promise.ba.$a && 1 == e
              ? ia(d, c)
              : (g
                  ? ((e = g),
                    e.next == d.Zb && (d.Zb = e),
                    (e.next = e.next.next))
                  : ja(d),
                ka(d, f, H.Promise.ba.Ja, c)));
        }
        b.ya = null;
      } else J(b, H.Promise.ba.Ja, c);
  }
  function la(b, c) {
    b.qb || (b.qa != H.Promise.ba.nb && b.qa != H.Promise.ba.Ja) || ma(b);
    b.Zb ? (b.Zb.next = c) : (b.qb = c);
    b.Zb = c;
  }
  function ha(b, c, d, e) {
    var f = H.Promise.th(null, null, null);
    f.Jb = new H.Promise(function (g, h) {
      f.Oc = c
        ? function (k) {
            try {
              var m = c.call(e, k);
              g(m);
            } catch (n) {
              h(n);
            }
          }
        : g;
      f.hc = d
        ? function (k) {
            try {
              var m = d.call(e, k);
              !H.ca(m) && k instanceof H.Promise.Ub ? h(k) : g(m);
            } catch (n) {
              h(n);
            }
          }
        : h;
    });
    f.Jb.ya = b;
    la(b, f);
    return f.Jb;
  }
  H.Promise.prototype.Fo = function (b) {
    this.qa = H.Promise.ba.$a;
    J(this, H.Promise.ba.nb, b);
  };
  H.Promise.prototype.Go = function (b) {
    this.qa = H.Promise.ba.$a;
    J(this, H.Promise.ba.Ja, b);
  };
  function J(b, c, d) {
    b.qa == H.Promise.ba.$a &&
      (b === d &&
        ((c = H.Promise.ba.Ja),
        (d = new TypeError("Promise cannot resolve to itself"))),
      (b.qa = H.Promise.ba.Ij),
      H.Promise.Ki(d, b.Fo, b.Go, b) ||
        ((b.Ia = d),
        (b.qa = c),
        (b.ya = null),
        ma(b),
        c != H.Promise.ba.Ja ||
          d instanceof H.Promise.Ub ||
          H.Promise.Ok(b, d)));
  }
  H.Promise.Ki = function (b, c, d, e) {
    if (b instanceof H.Promise)
      return (
        H.Promise.eb && I(b, Error("then")),
        la(b, H.Promise.th(c || H.Rb, d || null, e)),
        !0
      );
    if (H.Thenable.ki(b)) return b.then(c, d, e), !0;
    if (H.Da(b))
      try {
        var f = b.then;
        if (H.Wa(f)) return H.Promise.Do(b, f, c, d, e), !0;
      } catch (g) {
        return d.call(e, g), !0;
      }
    return !1;
  };
  H.Promise.Do = function (b, c, d, e, f) {
    function g(m) {
      k || ((k = !0), e.call(f, m));
    }
    function h(m) {
      k || ((k = !0), d.call(f, m));
    }
    var k = !1;
    try {
      c.call(b, h, g);
    } catch (m) {
      g(m);
    }
  };
  function ma(b) {
    b.He || ((b.He = !0), H.async.X(b.Pl, b));
  }
  function ja(b) {
    var c = null;
    b.qb && ((c = b.qb), (b.qb = c.next), (c.next = null));
    b.qb || (b.Zb = null);
    return c;
  }
  H.Promise.prototype.Pl = function () {
    for (var b; (b = ja(this)); )
      H.Promise.eb && this.bh++, ka(this, b, this.qa, this.Ia);
    this.He = !1;
  };
  function ka(b, c, d, e) {
    if (d == H.Promise.ba.Ja && c.hc && !c.bd)
      if (0 < H.Promise.Hb)
        for (; b && b.Yd; b = b.ya) H.global.clearTimeout(b.Yd), (b.Yd = 0);
      else if (0 == H.Promise.Hb) for (; b && b.wd; b = b.ya) b.wd = !1;
    if (c.Jb) (c.Jb.ya = null), H.Promise.fi(c, d, e);
    else
      try {
        c.bd ? c.Oc.call(c.context) : H.Promise.fi(c, d, e);
      } catch (f) {
        H.Promise.xd.call(null, f);
      }
    H.Promise.Rn(c);
  }
  H.Promise.fi = function (b, c, d) {
    c == H.Promise.ba.nb
      ? b.Oc.call(b.context, d)
      : b.hc && b.hc.call(b.context, d);
  };
  function I(b, c) {
    if (H.Promise.eb && H.L(c.stack)) {
      var d = c.stack.split("\n", 4)[3];
      c = c.message;
      c += Array(11 - c.length).join(" ");
      b.Cf.push(c + d);
    }
  }
  function na(b, c) {
    if (H.Promise.eb && c && H.L(c.stack) && b.Cf.length) {
      for (var d = ["Promise trace:"], e = b; e; e = e.ya) {
        for (var f = b.bh; 0 <= f; f--) d.push(e.Cf[f]);
        d.push(
          "Value: [" +
            (e.qa == H.Promise.ba.Ja ? "REJECTED" : "FULFILLED") +
            "] <" +
            String(e.Ia) +
            ">"
        );
      }
      c.stack += "\n\n" + d.join("\n");
    }
  }
  H.Promise.Ok = function (b, c) {
    0 < H.Promise.Hb
      ? (b.Yd = H.global.setTimeout(function () {
          na(b, c);
          H.Promise.xd.call(null, c);
        }, H.Promise.Hb))
      : 0 == H.Promise.Hb &&
        ((b.wd = !0),
        H.async.X(function () {
          b.wd && (na(b, c), H.Promise.xd.call(null, c));
        }));
  };
  H.Promise.xd = H.async.jj;
  H.Promise.ex = function (b) {
    H.Promise.xd = b;
  };
  H.Promise.Ub = function (b) {
    H.debug.Error.call(this, b);
  };
  H.yb(H.Promise.Ub, H.debug.Error);
  H.Promise.Ub.prototype.name = "cancel";
  H.Promise.rk = function (b, c, d) {
    this.Pd = b;
    this.resolve = c;
    this.reject = d;
  }; /*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
  H.async.I = function (b, c) {
    this.Vd = [];
    this.Oi = b;
    this.fh = c || null;
    this.fc = this.$b = !1;
    this.Ia = void 0;
    this.zf = this.kl = this.xe = !1;
    this.Xd = 0;
    this.ya = null;
    this.cd = 0;
    H.async.I.eb &&
      ((this.Be = null),
      Error.captureStackTrace &&
        ((b = { stack: "" }),
        Error.captureStackTrace(b, H.async.I),
        typeof b.stack == y && (this.Be = b.stack.replace(/^[^\n]*\n/, ""))));
  };
  H.async.I.Bk = !1;
  H.async.I.eb = !1;
  F = H.async.I.prototype;
  F.cancel = function (b) {
    if (this.$b) this.Ia instanceof H.async.I && this.Ia.cancel();
    else {
      if (this.ya) {
        var c = this.ya;
        delete this.ya;
        b ? c.cancel(b) : (c.cd--, 0 >= c.cd && c.cancel());
      }
      this.Oi ? this.Oi.call(this.fh, this) : (this.zf = !0);
      this.$b || this.tb(new H.async.I.Tb(this));
    }
  };
  F.Xg = function (b, c) {
    this.xe = !1;
    K(this, b, c);
  };
  function K(b, c, d) {
    b.$b = !0;
    b.Ia = d;
    b.fc = !c;
    oa(b);
  }
  function pa(b) {
    if (b.$b) {
      if (!b.zf) throw new H.async.I.Tc(b);
      b.zf = !1;
    }
  }
  F.tc = function (b) {
    pa(this);
    K(this, !0, b);
  };
  F.tb = function (b) {
    pa(this);
    qa(this, b);
    K(this, !1, b);
  };
  function qa(b, c) {
    H.async.I.eb &&
      b.Be &&
      H.Da(c) &&
      c.stack &&
      /^[^\n]+(\n   [^\n]+)+/.test(c.stack) &&
      (c.stack = c.stack + "\nDEFERRED OPERATION:\n" + b.Be);
  }
  function L(b, c, d) {
    return M(b, c, null, d);
  }
  function ra(b, c) {
    M(b, null, c, void 0);
  }
  function M(b, c, d, e) {
    b.Vd.push([c, d, e]);
    b.$b && oa(b);
    return b;
  }
  F.then = function (b, c, d) {
    var e,
      f,
      g = new H.Promise(function (h, k) {
        e = h;
        f = k;
      });
    M(this, e, function (h) {
      h instanceof H.async.I.Tb ? g.cancel() : f(h);
    });
    return g.then(b, c, d);
  };
  H.Thenable.Cg(H.async.I);
  H.async.I.prototype.ml = function () {
    var b = new H.async.I();
    M(this, b.tc, b.tb, b);
    b.ya = this;
    this.cd++;
    return b;
  };
  function sa(b) {
    return H.g.some(b.Vd, function (c) {
      return H.Wa(c[1]);
    });
  }
  function oa(b) {
    b.Xd && b.$b && sa(b) && (H.async.I.Lo(b.Xd), (b.Xd = 0));
    b.ya && (b.ya.cd--, delete b.ya);
    for (var c = b.Ia, d = !1, e = !1; b.Vd.length && !b.xe; ) {
      var f = b.Vd.shift(),
        g = f[0],
        h = f[1];
      f = f[2];
      if ((g = b.fc ? h : g))
        try {
          var k = g.call(f || b.fh, c);
          H.ca(k) &&
            ((b.fc = b.fc && (k == c || k instanceof Error)), (b.Ia = c = k));
          if (
            H.Thenable.ki(c) ||
            (typeof H.global.Promise === t && c instanceof H.global.Promise)
          )
            (e = !0), (b.xe = !0);
        } catch (m) {
          (c = m), (b.fc = !0), qa(b, c), sa(b) || (d = !0);
        }
    }
    b.Ia = c;
    e
      ? ((e = H.bind(b.Xg, b, !0)),
        (k = H.bind(b.Xg, b, !1)),
        c instanceof H.async.I ? (M(c, e, k), (c.kl = !0)) : c.then(e, k))
      : H.async.I.Bk &&
        c instanceof Error &&
        !(c instanceof H.async.I.Tb) &&
        (d = b.fc = !0);
    d && (b.Xd = H.async.I.eo(c));
  }
  H.async.I.fj = function (b) {
    var c = new H.async.I();
    c.tc(b);
    return c;
  };
  H.async.I.lu = function (b) {
    var c = new H.async.I();
    b.then(
      function (d) {
        c.tc(d);
      },
      function (d) {
        c.tb(d);
      }
    );
    return c;
  };
  H.async.I.xa = function (b) {
    var c = new H.async.I();
    c.tb(b);
    return c;
  };
  H.async.I.et = function () {
    var b = new H.async.I();
    b.cancel();
    return b;
  };
  H.async.I.Hx = function (b, c, d) {
    return b instanceof H.async.I ? L(b.ml(), c, d) : L(H.async.I.fj(b), c, d);
  };
  H.async.I.Tc = function () {
    H.debug.Error.call(this);
  };
  H.yb(H.async.I.Tc, H.debug.Error);
  H.async.I.Tc.prototype.message = "Deferred has already fired";
  H.async.I.Tc.prototype.name = "AlreadyCalledError";
  H.async.I.Tb = function () {
    H.debug.Error.call(this);
  };
  H.yb(H.async.I.Tb, H.debug.Error);
  H.async.I.Tb.prototype.message = "Deferred was canceled";
  H.async.I.Tb.prototype.name = "CanceledError";
  H.async.I.cg = function (b) {
    this.Ic = H.global.setTimeout(H.bind(this.ij, this), 0);
    this.Nl = b;
  };
  H.async.I.cg.prototype.ij = function () {
    delete H.async.I.Cc[this.Ic];
    throw this.Nl;
  };
  H.async.I.Cc = {};
  H.async.I.eo = function (b) {
    b = new H.async.I.cg(b);
    H.async.I.Cc[b.Ic] = b;
    return b.Ic;
  };
  H.async.I.Lo = function (b) {
    var c = H.async.I.Cc[b];
    c && (H.global.clearTimeout(c.Ic), delete H.async.I.Cc[b]);
  };
  H.async.I.Ss = function () {
    var b = H.async.I.Cc,
      c;
    for (c in b) {
      var d = b[c];
      H.global.clearTimeout(d.Ic);
      d.ij();
    }
  };
  H.N = {};
  H.N.P = {};
  H.N.P.ie = "closure_verification";
  H.N.P.Tj = 5e3;
  H.N.P.vf = [];
  H.N.P.Zn = function (b, c) {
    function d() {
      var f = b.shift();
      f = H.N.P.Sd(f, c);
      b.length && M(f, d, d, void 0);
      return f;
    }
    if (!b.length) return H.async.I.fj(null);
    var e = H.N.P.vf.length;
    H.g.extend(H.N.P.vf, b);
    if (e) return H.N.P.Wi;
    b = H.N.P.vf;
    H.N.P.Wi = d();
    return H.N.P.Wi;
  };
  H.N.P.Sd = function (b, c) {
    var d = c || {};
    c = d.document || document;
    var e = H.b.H.K(b),
      f = H.a.createElement(l),
      g = { Xi: f, lj: void 0 },
      h = new H.async.I(H.N.P.ql, g),
      k = null,
      m = H.zb(d.timeout) ? d.timeout : H.N.P.Tj;
    0 < m &&
      ((k = window.setTimeout(function () {
        H.N.P.gd(f, !0);
        h.tb(
          new H.N.P.Error(
            H.N.P.Vc.TIMEOUT,
            "Timeout reached for loading script " + e
          )
        );
      }, m)),
      (g.lj = k));
    f.onload = f.onreadystatechange = function () {
      (f.readyState &&
        "loaded" != f.readyState &&
        "complete" != f.readyState) ||
        (H.N.P.gd(f, d.it || !1, k), h.tc(null));
    };
    f.onerror = function () {
      H.N.P.gd(f, !0, k);
      h.tb(new H.N.P.Error(H.N.P.Vc.fk, "Error while loading script " + e));
    };
    g = d.attributes || {};
    H.object.extend(g, { type: da, charset: "UTF-8" });
    H.a.Wd(f, g);
    H.a.O.mo(f, b);
    H.N.P.lm(c).appendChild(f);
    return h;
  };
  H.N.P.Bw = function (b, c, d) {
    H.global[H.N.P.ie] || (H.global[H.N.P.ie] = {});
    var e = H.global[H.N.P.ie],
      f = H.b.H.K(b);
    if (H.ca(e[c]))
      return H.async.I.xa(
        new H.N.P.Error(
          H.N.P.Vc.Mk,
          "Verification object " + c + " already defined."
        )
      );
    b = H.N.P.Sd(b, d);
    var g = new H.async.I(H.bind(b.cancel, b));
    L(b, function () {
      var h = e[c];
      H.ca(h)
        ? (g.tc(h), delete e[c])
        : g.tb(
            new H.N.P.Error(
              H.N.P.Vc.Lk,
              "Script " +
                f +
                " loaded, but verification object " +
                c +
                " was not defined."
            )
          );
    });
    ra(b, function (h) {
      H.ca(e[c]) && delete e[c];
      g.tb(h);
    });
    return g;
  };
  H.N.P.lm = function (b) {
    var c = H.a.getElementsByTagName("HEAD", b);
    return !c || H.g.Ca(c) ? b.documentElement : c[0];
  };
  H.N.P.ql = function () {
    if (this && this.Xi) {
      var b = this.Xi;
      b && b.tagName == l && H.N.P.gd(b, !0, this.lj);
    }
  };
  H.N.P.gd = function (b, c, d) {
    H.zb(d) && H.global.clearTimeout(d);
    b.onload = H.Rb;
    b.onerror = H.Rb;
    b.onreadystatechange = H.Rb;
    c &&
      window.setTimeout(function () {
        H.a.removeNode(b);
      }, 0);
  };
  H.N.P.Vc = { fk: 0, TIMEOUT: 1, Lk: 2, Mk: 3 };
  H.N.P.Error = function (b, c) {
    var d = "Jsloader error (code #" + b + ")";
    c && (d += ": " + c);
    H.debug.Error.call(this, d);
    this.code = b;
  };
  H.yb(H.N.P.Error, H.debug.Error);
  H.R = {};
  H.R.Map = function (b, c) {
    this.Ea = {};
    this.$ = [];
    this.Sc = this.Z = 0;
    var d = arguments.length;
    if (1 < d) {
      if (d % 2) throw Error(p);
      for (var e = 0; e < d; e += 2) this.set(arguments[e], arguments[e + 1]);
    } else b && this.addAll(b);
  };
  F = H.R.Map.prototype;
  F.ub = D("Z");
  F.ga = function () {
    N(this);
    for (var b = [], c = 0; c < this.$.length; c++) b.push(this.Ea[this.$[c]]);
    return b;
  };
  F.la = function () {
    N(this);
    return this.$.concat();
  };
  F.Lb = function (b) {
    return H.R.Map.Pb(this.Ea, b);
  };
  F.Mb = function (b) {
    for (var c = 0; c < this.$.length; c++) {
      var d = this.$[c];
      if (H.R.Map.Pb(this.Ea, d) && this.Ea[d] == b) return !0;
    }
    return !1;
  };
  F.Ob = function (b, c) {
    if (this === b) return !0;
    if (this.Z != b.ub()) return !1;
    c = c || H.R.Map.Dl;
    N(this);
    for (var d, e = 0; (d = this.$[e]); e++)
      if (!c(this.get(d), b.get(d))) return !1;
    return !0;
  };
  H.R.Map.Dl = function (b, c) {
    return b === c;
  };
  F = H.R.Map.prototype;
  F.Ca = function () {
    return 0 == this.Z;
  };
  F.clear = function () {
    this.Ea = {};
    this.Sc = this.Z = this.$.length = 0;
  };
  F.remove = function (b) {
    return H.R.Map.Pb(this.Ea, b)
      ? (delete this.Ea[b],
        this.Z--,
        this.Sc++,
        this.$.length > 2 * this.Z && N(this),
        !0)
      : !1;
  };
  function N(b) {
    if (b.Z != b.$.length) {
      for (var c = 0, d = 0; c < b.$.length; ) {
        var e = b.$[c];
        H.R.Map.Pb(b.Ea, e) && (b.$[d++] = e);
        c++;
      }
      b.$.length = d;
    }
    if (b.Z != b.$.length) {
      var f = {};
      for (d = c = 0; c < b.$.length; )
        (e = b.$[c]), H.R.Map.Pb(f, e) || ((b.$[d++] = e), (f[e] = 1)), c++;
      b.$.length = d;
    }
  }
  F.get = function (b, c) {
    return H.R.Map.Pb(this.Ea, b) ? this.Ea[b] : c;
  };
  F.set = function (b, c) {
    H.R.Map.Pb(this.Ea, b) || (this.Z++, this.$.push(b), this.Sc++);
    this.Ea[b] = c;
  };
  F.addAll = function (b) {
    if (b instanceof H.R.Map)
      for (var c = b.la(), d = 0; d < c.length; d++)
        this.set(c[d], b.get(c[d]));
    else for (c in b) this.set(c, b[c]);
  };
  F.forEach = function (b, c) {
    for (var d = this.la(), e = 0; e < d.length; e++) {
      var f = d[e],
        g = this.get(f);
      b.call(c, g, f, this);
    }
  };
  F.clone = function () {
    return new H.R.Map(this);
  };
  F.Co = function () {
    for (var b = new H.R.Map(), c = 0; c < this.$.length; c++) {
      var d = this.$[c];
      b.set(this.Ea[d], d);
    }
    return b;
  };
  F.Ao = function () {
    N(this);
    for (var b = {}, c = 0; c < this.$.length; c++) {
      var d = this.$[c];
      b[d] = this.Ea[d];
    }
    return b;
  };
  F.se = function (b) {
    N(this);
    var c = 0,
      d = this.Sc,
      e = this,
      f = new H.o.Iterator();
    f.next = function () {
      if (d != e.Sc)
        throw Error("The map has changed since the iterator was created");
      if (c >= e.$.length) throw H.o.va;
      var g = e.$[c++];
      return b ? g : e.Ea[g];
    };
    return f;
  };
  H.R.Map.Pb = function (b, c) {
    return Object.prototype.hasOwnProperty.call(b, c);
  };
  H.R.ub = function (b) {
    return b.ub && typeof b.ub == t
      ? b.ub()
      : H.ma(b) || H.L(b)
      ? b.length
      : H.object.ub(b);
  };
  H.R.ga = function (b) {
    if (b.ga && typeof b.ga == t) return b.ga();
    if (H.L(b)) return b.split("");
    if (H.ma(b)) {
      for (var c = [], d = b.length, e = 0; e < d; e++) c.push(b[e]);
      return c;
    }
    return H.object.ga(b);
  };
  H.R.la = function (b) {
    if (b.la && typeof b.la == t) return b.la();
    if (!b.ga || typeof b.ga != t) {
      if (H.ma(b) || H.L(b)) {
        var c = [];
        b = b.length;
        for (var d = 0; d < b; d++) c.push(d);
        return c;
      }
      return H.object.la(b);
    }
  };
  H.R.contains = function (b, c) {
    return b.contains && typeof b.contains == t
      ? b.contains(c)
      : b.Mb && typeof b.Mb == t
      ? b.Mb(c)
      : H.ma(b) || H.L(b)
      ? H.g.contains(b, c)
      : H.object.Mb(b, c);
  };
  H.R.Ca = function (b) {
    return b.Ca && typeof b.Ca == t
      ? b.Ca()
      : H.ma(b) || H.L(b)
      ? H.g.Ca(b)
      : H.object.Ca(b);
  };
  H.R.clear = function (b) {
    b.clear && typeof b.clear == t
      ? b.clear()
      : H.ma(b)
      ? H.g.clear(b)
      : H.object.clear(b);
  };
  H.R.forEach = function (b, c, d) {
    if (b.forEach && typeof b.forEach == t) b.forEach(c, d);
    else if (H.ma(b) || H.L(b)) H.g.forEach(b, c, d);
    else
      for (var e = H.R.la(b), f = H.R.ga(b), g = f.length, h = 0; h < g; h++)
        c.call(d, f[h], e && e[h], b);
  };
  H.R.filter = function (b, c, d) {
    if (typeof b.filter == t) return b.filter(c, d);
    if (H.ma(b) || H.L(b)) return H.g.filter(b, c, d);
    var e = H.R.la(b),
      f = H.R.ga(b),
      g = f.length;
    if (e) {
      var h = {};
      for (var k = 0; k < g; k++) c.call(d, f[k], e[k], b) && (h[e[k]] = f[k]);
    } else
      for (h = [], k = 0; k < g; k++)
        c.call(d, f[k], void 0, b) && h.push(f[k]);
    return h;
  };
  H.R.map = function (b, c, d) {
    if (typeof b.map == t) return b.map(c, d);
    if (H.ma(b) || H.L(b)) return H.g.map(b, c, d);
    var e = H.R.la(b),
      f = H.R.ga(b),
      g = f.length;
    if (e) {
      var h = {};
      for (var k = 0; k < g; k++) h[e[k]] = c.call(d, f[k], e[k], b);
    } else for (h = [], k = 0; k < g; k++) h[k] = c.call(d, f[k], void 0, b);
    return h;
  };
  H.R.some = function (b, c, d) {
    if (typeof b.some == t) return b.some(c, d);
    if (H.ma(b) || H.L(b)) return H.g.some(b, c, d);
    for (var e = H.R.la(b), f = H.R.ga(b), g = f.length, h = 0; h < g; h++)
      if (c.call(d, f[h], e && e[h], b)) return !0;
    return !1;
  };
  H.R.every = function (b, c, d) {
    if (typeof b.every == t) return b.every(c, d);
    if (H.ma(b) || H.L(b)) return H.g.every(b, c, d);
    for (var e = H.R.la(b), f = H.R.ga(b), g = f.length, h = 0; h < g; h++)
      if (!c.call(d, f[h], e && e[h], b)) return !1;
    return !0;
  };
  H.uri = {};
  H.uri.l = {};
  H.uri.l.qc = { Kf: 38, EQUAL: 61, ck: 35, mk: 63 };
  H.uri.l.ye = function (b, c, d, e, f, g, h) {
    var k = "";
    b && (k += b + ":");
    d && ((k += "//"), c && (k += c + "@"), (k += d), e && (k += ":" + e));
    f && (k += f);
    g && (k += "?" + g);
    h && (k += "#" + h);
    return k;
  };
  H.uri.l.ro =
    /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
  H.uri.l.U = { Xb: 1, qe: 2, lb: 3, ob: 4, le: 5, me: 6, dg: 7 };
  H.uri.l.split = function (b) {
    return b.match(H.uri.l.ro);
  };
  H.uri.l.ld = function (b, c) {
    return b ? (c ? decodeURI(b) : decodeURIComponent(b)) : b;
  };
  H.uri.l.ac = function (b, c) {
    return H.uri.l.split(c)[b] || null;
  };
  H.uri.l.Gc = function (b) {
    return H.uri.l.ac(H.uri.l.U.Xb, b);
  };
  H.uri.l.xu = function (b) {
    b = H.uri.l.Gc(b);
    !b &&
      H.global.self &&
      H.global.self.location &&
      ((b = H.global.self.location.protocol), (b = b.substr(0, b.length - 1)));
    return b ? b.toLowerCase() : "";
  };
  H.uri.l.qm = function () {
    return H.uri.l.ac(H.uri.l.U.qe, void 0);
  };
  H.uri.l.vd = function () {
    return H.uri.l.ld(H.uri.l.qm());
  };
  H.uri.l.bm = function () {
    return H.uri.l.ac(H.uri.l.U.lb, void 0);
  };
  H.uri.l.pd = function () {
    return H.uri.l.ld(H.uri.l.bm(), !0);
  };
  H.uri.l.td = function () {
    return Number(H.uri.l.ac(H.uri.l.U.ob, void 0)) || null;
  };
  H.uri.l.im = function () {
    return H.uri.l.ac(H.uri.l.U.le, void 0);
  };
  H.uri.l.bc = function () {
    return H.uri.l.ld(H.uri.l.im(), !0);
  };
  H.uri.l.Xe = function () {
    return H.uri.l.ac(H.uri.l.U.me, void 0);
  };
  H.uri.l.em = function () {
    var b = (void 0).indexOf("#");
    return 0 > b ? null : (void 0).substr(b + 1);
  };
  H.uri.l.Rw = function (b, c) {
    return H.uri.l.Kn(b) + (c ? "#" + c : "");
  };
  H.uri.l.rd = function () {
    return H.uri.l.ld(H.uri.l.em());
  };
  H.uri.l.zu = function (b) {
    b = H.uri.l.split(b);
    return H.uri.l.ye(
      b[H.uri.l.U.Xb],
      b[H.uri.l.U.qe],
      b[H.uri.l.U.lb],
      b[H.uri.l.U.ob]
    );
  };
  H.uri.l.Eu = function (b) {
    b = H.uri.l.split(b);
    return H.uri.l.ye(b[H.uri.l.U.Xb], null, b[H.uri.l.U.lb], b[H.uri.l.U.ob]);
  };
  H.uri.l.Iu = function (b) {
    b = H.uri.l.split(b);
    return H.uri.l.ye(
      null,
      null,
      null,
      null,
      b[H.uri.l.U.le],
      b[H.uri.l.U.me],
      b[H.uri.l.U.dg]
    );
  };
  H.uri.l.Kn = function (b) {
    var c = b.indexOf("#");
    return 0 > c ? b : b.substr(0, c);
  };
  H.uri.l.zm = function (b, c) {
    b = H.uri.l.split(b);
    c = H.uri.l.split(c);
    return (
      b[H.uri.l.U.lb] == c[H.uri.l.U.lb] &&
      b[H.uri.l.U.Xb] == c[H.uri.l.U.Xb] &&
      b[H.uri.l.U.ob] == c[H.uri.l.U.ob]
    );
  };
  H.uri.l.Ts = B();
  H.uri.l.yn = function (b, c) {
    if (b) {
      b = b.split("&");
      for (var d = 0; d < b.length; d++) {
        var e = b[d].indexOf("="),
          f = null;
        if (0 <= e) {
          var g = b[d].substring(0, e);
          f = b[d].substring(e + 1);
        } else g = b[d];
        c(g, f ? H.c.$d(f) : "");
      }
    }
  };
  H.uri.l.bj = function (b) {
    var c = b.indexOf("#");
    0 > c && (c = b.length);
    var d = b.indexOf("?");
    if (0 > d || d > c) {
      d = c;
      var e = "";
    } else e = b.substring(d + 1, c);
    return [b.substr(0, d), e, b.substr(c)];
  };
  H.uri.l.Ci = function (b) {
    return b[0] + (b[1] ? "?" + b[1] : "") + b[2];
  };
  H.uri.l.Dg = function (b, c) {
    return c ? (b ? b + "&" + c : c) : b;
  };
  H.uri.l.ue = function (b, c) {
    if (!c) return b;
    b = H.uri.l.bj(b);
    b[1] = H.uri.l.Dg(b[1], c);
    return H.uri.l.Ci(b);
  };
  H.uri.l.te = function (b, c, d) {
    if (H.isArray(c))
      for (var e = 0; e < c.length; e++) H.uri.l.te(b, String(c[e]), d);
    else null != c && d.push(b + ("" === c ? "" : "=" + H.c.Rc(c)));
  };
  H.uri.l.Mg = function (b, c) {
    var d = [];
    for (c = c || 0; c < b.length; c += 2) H.uri.l.te(b[c], b[c + 1], d);
    return d.join("&");
  };
  H.uri.l.Ng = function (b) {
    var c = [],
      d;
    for (d in b) H.uri.l.te(d, b[d], c);
    return c.join("&");
  };
  H.uri.l.Gs = function (b, c) {
    var d =
      2 == arguments.length
        ? H.uri.l.Mg(arguments[1], 0)
        : H.uri.l.Mg(arguments, 1);
    return H.uri.l.ue(b, d);
  };
  H.uri.l.Hs = function (b, c) {
    c = H.uri.l.Ng(c);
    return H.uri.l.ue(b, c);
  };
  H.uri.l.Pk = function (b, c, d) {
    d = H.zb(d) ? "=" + H.c.Rc(d) : "";
    return H.uri.l.ue(b, c + d);
  };
  H.uri.l.od = function (b, c, d, e) {
    for (var f = d.length; 0 <= (c = b.indexOf(d, c)) && c < e; ) {
      var g = b.charCodeAt(c - 1);
      if (g == H.uri.l.qc.Kf || g == H.uri.l.qc.mk)
        if (
          ((g = b.charCodeAt(c + f)),
          !g ||
            g == H.uri.l.qc.EQUAL ||
            g == H.uri.l.qc.Kf ||
            g == H.uri.l.qc.ck)
        )
          return c;
      c += f + 1;
    }
    return -1;
  };
  H.uri.l.yd = /#|$/;
  H.uri.l.Tu = function (b, c) {
    return 0 <= H.uri.l.od(b, 0, c, b.search(H.uri.l.yd));
  };
  H.uri.l.Gu = function (b, c) {
    var d = b.search(H.uri.l.yd),
      e = H.uri.l.od(b, 0, c, d);
    if (0 > e) return null;
    var f = b.indexOf("&", e);
    if (0 > f || f > d) f = d;
    e += c.length + 1;
    return H.c.$d(b.substr(e, f - e));
  };
  H.uri.l.Hu = function (b, c) {
    for (
      var d = b.search(H.uri.l.yd), e = 0, f, g = [];
      0 <= (f = H.uri.l.od(b, e, c, d));

    ) {
      e = b.indexOf("&", f);
      if (0 > e || e > d) e = d;
      f += c.length + 1;
      g.push(H.c.$d(b.substr(f, e - f)));
    }
    return g;
  };
  H.uri.l.Bo = /[?&]($|#)/;
  H.uri.l.Ln = function (b, c) {
    for (
      var d = b.search(H.uri.l.yd), e = 0, f, g = [];
      0 <= (f = H.uri.l.od(b, e, c, d));

    )
      g.push(b.substring(e, f)), (e = Math.min(b.indexOf("&", f) + 1 || d, d));
    g.push(b.substr(e));
    return g.join("").replace(H.uri.l.Bo, "$1");
  };
  H.uri.l.ko = function (b) {
    var c = H.uri.l.ug.sg,
      d = H.c.Ph();
    return H.uri.l.Pk(H.uri.l.Ln(b, c), c, d);
  };
  H.uri.l.$w = function (b, c) {
    b = H.uri.l.bj(b);
    var d = b[1],
      e = [];
    d &&
      H.g.forEach(d.split("&"), function (f) {
        var g = f.indexOf("=");
        c.hasOwnProperty(0 <= g ? f.substr(0, g) : f) || e.push(f);
      });
    b[1] = H.uri.l.Dg(e.join("&"), H.uri.l.Ng(c));
    return H.uri.l.Ci(b);
  };
  H.uri.l.Is = function (b, c) {
    H.c.endsWith(b, "/") && (b = b.substr(0, b.length - 1));
    H.c.startsWith(c, "/") && (c = c.substr(1));
    return H.c.nl(b, "/", c);
  };
  H.uri.l.Qc = function (b) {
    H.uri.l.split(b);
  };
  H.uri.l.ug = { sg: "zx" };
  H.uri.l.pn = function (b) {
    return H.uri.l.ko(b);
  };
  H.G = function (b, c) {
    this.Ac = this.If = this.mc = "";
    this.Hd = null;
    this.Ke = this.Gd = "";
    this.Ma = this.Sm = !1;
    var d;
    b instanceof H.G
      ? ((this.Ma = H.ca(c) ? c : b.Ma),
        O(this, b.Gc()),
        P(this, b.vd()),
        Q(this, b.pd()),
        R(this, b.td()),
        this.Qc(b.bc()),
        S(this, b.Xe().clone()),
        T(this, b.rd()))
      : b && (d = H.uri.l.split(String(b)))
      ? ((this.Ma = !!c),
        O(this, d[H.uri.l.U.Xb] || "", !0),
        P(this, d[H.uri.l.U.qe] || "", !0),
        Q(this, d[H.uri.l.U.lb] || "", !0),
        R(this, d[H.uri.l.U.ob]),
        this.Qc(d[H.uri.l.U.le] || "", !0),
        S(this, d[H.uri.l.U.me] || "", !0),
        T(this, d[H.uri.l.U.dg] || "", !0))
      : ((this.Ma = !!c), (this.Oa = new H.G.bb(null, this.Ma)));
  };
  H.G.nk = H.uri.l.ug.sg;
  F = H.G.prototype;
  F.toString = function () {
    var b = [],
      c = this.Gc();
    c && b.push(H.G.Bc(c, H.G.Pi, !0), ":");
    var d = this.pd();
    if (d || "file" == c)
      b.push("//"),
        (c = this.vd()) && b.push(H.G.Bc(c, H.G.Pi, !0), "@"),
        b.push(H.G.Qi(H.c.Rc(d))),
        (d = this.td()),
        null != d && b.push(":", String(d));
    if ((d = this.bc()))
      this.Ac && "/" != d.charAt(0) && b.push("/"),
        b.push(H.G.Bc(d, "/" == d.charAt(0) ? H.G.En : H.G.Hn, !0));
    (d = this.Oa.toString()) && b.push("?", d);
    (d = this.rd()) && b.push("#", H.G.Bc(d, H.G.Fn));
    return b.join("");
  };
  F.resolve = function (b) {
    var c = this.clone(),
      d = !!b.mc;
    d ? O(c, b.Gc()) : (d = !!b.If);
    d ? P(c, b.vd()) : (d = !!b.Ac);
    d ? Q(c, b.pd()) : (d = null != b.Hd);
    var e = b.bc();
    if (d) R(c, b.td());
    else if ((d = !!b.Gd)) {
      if ("/" != e.charAt(0))
        if (this.Ac && !this.Gd) e = "/" + e;
        else {
          var f = c.bc().lastIndexOf("/");
          -1 != f && (e = c.bc().substr(0, f + 1) + e);
        }
      e = H.G.In(e);
    }
    d ? c.Qc(e) : (d = "" !== b.Oa.toString());
    d ? S(c, b.Xe().clone()) : (d = !!b.Ke);
    d && T(c, b.rd());
    return c;
  };
  F.clone = function () {
    return new H.G(this);
  };
  F.Gc = D("mc");
  function O(b, c, d) {
    X(b);
    b.mc = d ? H.G.zc(c, !0) : c;
    b.mc && (b.mc = b.mc.replace(/:$/, ""));
  }
  F.vd = D("If");
  function P(b, c, d) {
    X(b);
    b.If = d ? H.G.zc(c) : c;
  }
  F.pd = D("Ac");
  function Q(b, c, d) {
    X(b);
    b.Ac = d ? H.G.zc(c, !0) : c;
  }
  F.td = D("Hd");
  function R(b, c) {
    X(b);
    if (c) {
      c = Number(c);
      if (isNaN(c) || 0 > c) throw Error("Bad port number " + c);
      b.Hd = c;
    } else b.Hd = null;
  }
  F.bc = D("Gd");
  F.Qc = function (b, c) {
    X(this);
    this.Gd = c ? H.G.zc(b, !0) : b;
  };
  function S(b, c, d) {
    X(b);
    c instanceof H.G.bb
      ? ((b.Oa = c), b.Oa.wf(b.Ma))
      : (d || (c = H.G.Bc(c, H.G.Gn)), (b.Oa = new H.G.bb(c, b.Ma)));
  }
  F.Xe = D("Oa");
  F.getQuery = function () {
    return this.Oa.toString();
  };
  F.rd = D("Ke");
  function T(b, c, d) {
    X(b);
    b.Ke = d ? H.G.zc(c) : c;
  }
  F.pn = function () {
    X(this);
    var b = H.G.nk,
      c = H.c.Ph();
    X(this);
    this.Oa.set(b, c);
    return this;
  };
  F.removeParameter = function (b) {
    X(this);
    this.Oa.remove(b);
    return this;
  };
  function X(b) {
    if (b.Sm) throw Error("Tried to modify a read-only Uri");
  }
  F.wf = function (b) {
    this.Ma = b;
    this.Oa && this.Oa.wf(b);
  };
  H.G.parse = function (b, c) {
    return b instanceof H.G ? b.clone() : new H.G(b, c);
  };
  H.G.create = function (b, c, d, e, f, g, h, k) {
    k = new H.G(null, k);
    b && O(k, b);
    c && P(k, c);
    d && Q(k, d);
    e && R(k, e);
    f && k.Qc(f);
    g && S(k, g);
    h && T(k, h);
    return k;
  };
  H.G.resolve = function (b, c) {
    b instanceof H.G || (b = H.G.parse(b));
    c instanceof H.G || (c = H.G.parse(c));
    return b.resolve(c);
  };
  H.G.In = function (b) {
    if (".." == b || "." == b) return "";
    if (H.c.contains(b, "./") || H.c.contains(b, "/.")) {
      var c = H.c.startsWith(b, "/");
      b = b.split("/");
      for (var d = [], e = 0; e < b.length; ) {
        var f = b[e++];
        "." == f
          ? c && e == b.length && d.push("")
          : ".." == f
          ? ((1 < d.length || (1 == d.length && "" != d[0])) && d.pop(),
            c && e == b.length && d.push(""))
          : (d.push(f), (c = !0));
      }
      return d.join("/");
    }
    return b;
  };
  H.G.zc = function (b, c) {
    return b
      ? c
        ? decodeURI(b.replace(/%25/g, "%2525"))
        : decodeURIComponent(b)
      : "";
  };
  H.G.Bc = function (b, c, d) {
    return H.L(b)
      ? ((b = encodeURI(b).replace(c, H.G.Kl)), d && (b = H.G.Qi(b)), b)
      : null;
  };
  H.G.Kl = function (b) {
    b = b.charCodeAt(0);
    return "%" + ((b >> 4) & 15).toString(16) + (b & 15).toString(16);
  };
  H.G.Qi = function (b) {
    return b.replace(/%25([0-9a-fA-F]{2})/g, "%$1");
  };
  H.G.Pi = /[#\/\?@]/g;
  H.G.Hn = /[#\?:]/g;
  H.G.En = /[#\?]/g;
  H.G.Gn = /[#\?@]/g;
  H.G.Fn = /#/g;
  H.G.zm = function (b, c) {
    b = H.uri.l.split(b);
    c = H.uri.l.split(c);
    return (
      b[H.uri.l.U.lb] == c[H.uri.l.U.lb] && b[H.uri.l.U.ob] == c[H.uri.l.U.ob]
    );
  };
  H.G.bb = function (b, c) {
    this.Z = this.da = null;
    this.Ka = b || null;
    this.Ma = !!c;
  };
  function Y(b) {
    b.da ||
      ((b.da = new H.R.Map()),
      (b.Z = 0),
      b.Ka &&
        H.uri.l.yn(b.Ka, function (c, d) {
          b.add(H.c.$d(c), d);
        }));
  }
  H.G.bb.wt = function (b, c, d) {
    c = H.R.la(b);
    if ("undefined" == typeof c) throw Error("Keys are undefined");
    d = new H.G.bb(null, d);
    b = H.R.ga(b);
    for (var e = 0; e < c.length; e++) {
      var f = c[e],
        g = b[e];
      H.isArray(g) ? ta(d, f, g) : d.add(f, g);
    }
    return d;
  };
  H.G.bb.vt = function (b, c, d, e) {
    if (b.length != c.length) throw Error("Mismatched lengths for keys/values");
    d = new H.G.bb(null, e);
    for (e = 0; e < b.length; e++) d.add(b[e], c[e]);
    return d;
  };
  F = H.G.bb.prototype;
  F.ub = function () {
    Y(this);
    return this.Z;
  };
  F.add = function (b, c) {
    Y(this);
    this.Ka = null;
    b = Z(this, b);
    var d = this.da.get(b);
    d || this.da.set(b, (d = []));
    d.push(c);
    this.Z += 1;
    return this;
  };
  F.remove = function (b) {
    Y(this);
    b = Z(this, b);
    return this.da.Lb(b)
      ? ((this.Ka = null), (this.Z -= this.da.get(b).length), this.da.remove(b))
      : !1;
  };
  F.clear = function () {
    this.da = this.Ka = null;
    this.Z = 0;
  };
  F.Ca = function () {
    Y(this);
    return 0 == this.Z;
  };
  F.Lb = function (b) {
    Y(this);
    b = Z(this, b);
    return this.da.Lb(b);
  };
  F.Mb = function (b) {
    var c = this.ga();
    return H.g.contains(c, b);
  };
  F.forEach = function (b, c) {
    Y(this);
    this.da.forEach(function (d, e) {
      H.g.forEach(
        d,
        function (f) {
          b.call(c, f, e, this);
        },
        this
      );
    }, this);
  };
  F.la = function () {
    Y(this);
    for (
      var b = this.da.ga(), c = this.da.la(), d = [], e = 0;
      e < c.length;
      e++
    )
      for (var f = b[e], g = 0; g < f.length; g++) d.push(c[e]);
    return d;
  };
  F.ga = function (b) {
    Y(this);
    var c = [];
    if (H.L(b)) this.Lb(b) && (c = H.g.concat(c, this.da.get(Z(this, b))));
    else {
      b = this.da.ga();
      for (var d = 0; d < b.length; d++) c = H.g.concat(c, b[d]);
    }
    return c;
  };
  F.set = function (b, c) {
    Y(this);
    this.Ka = null;
    b = Z(this, b);
    this.Lb(b) && (this.Z -= this.da.get(b).length);
    this.da.set(b, [c]);
    this.Z += 1;
    return this;
  };
  F.get = function (b, c) {
    if (!b) return c;
    b = this.ga(b);
    return 0 < b.length ? String(b[0]) : c;
  };
  function ta(b, c, d) {
    b.remove(c);
    0 < d.length &&
      ((b.Ka = null), b.da.set(Z(b, c), H.g.clone(d)), (b.Z += d.length));
  }
  F.toString = function () {
    if (this.Ka) return this.Ka;
    if (!this.da) return "";
    for (var b = [], c = this.da.la(), d = 0; d < c.length; d++) {
      var e = c[d],
        f = H.c.Rc(e);
      e = this.ga(e);
      for (var g = 0; g < e.length; g++) {
        var h = f;
        "" !== e[g] && (h += "=" + H.c.Rc(e[g]));
        b.push(h);
      }
    }
    return (this.Ka = b.join("&"));
  };
  F.clone = function () {
    var b = new H.G.bb();
    b.Ka = this.Ka;
    this.da && ((b.da = this.da.clone()), (b.Z = this.Z));
    return b;
  };
  function Z(b, c) {
    c = String(c);
    b.Ma && (c = c.toLowerCase());
    return c;
  }
  F.wf = function (b) {
    b &&
      !this.Ma &&
      (Y(this),
      (this.Ka = null),
      this.da.forEach(function (c, d) {
        var e = d.toLowerCase();
        d != e && (this.remove(d), ta(this, e, c));
      }, this));
    this.Ma = b;
  };
  F.extend = function (b) {
    for (var c = 0; c < arguments.length; c++)
      H.R.forEach(
        arguments[c],
        function (d, e) {
          this.add(e, d);
        },
        this
      );
  };
  var google = { v: {} };
  google.v.w = {};
  google.v.w.ja = {};
  google.v.w.ja.Ai = function () {
    return new Promise(function (b) {
      if ("undefined" == typeof window || "complete" === document.readyState)
        b();
      else if (window.addEventListener)
        document.addEventListener("DOMContentLoaded", b, !0),
          window.addEventListener("load", b, !0);
      else if (window.attachEvent) window.attachEvent("onload", b);
      else {
        var c = window.onload;
        H.Wa(c)
          ? (window.onload = function (d) {
              c(d);
              b();
            })
          : (window.onload = b);
      }
    });
  };
  H.Dc("google.charts.loader.Utils.isWindowLoaded", google.v.w.ja.Ai);
  google.v.w.ja.hb = {};
  google.v.w.ja.ww = function () {
    google.v.w.ja.hb = {};
  };
  google.v.w.ja.Mu = function (b) {
    return google.v.w.ja.hb[b] && google.v.w.ja.hb[b].Pd;
  };
  google.v.w.ja.Lu = function (b) {
    return google.v.w.ja.hb[b] && google.v.w.ja.hb[b].loaded;
  };
  google.v.w.ja.ax = function (b, c) {
    google.v.w.ja.hb[b] = { Pd: c, loaded: !1 };
  };
  google.v.w.ja.lo = function (b) {
    google.v.w.ja.hb[b] || (google.v.w.ja.hb[b] = { loaded: !1 });
    google.v.w.ja.hb[b].loaded = !0;
  };
  google.v.w.Qa = {};
  google.v.w.Qa.kj = 3e4;
  google.v.w.Qa.Tv = function (b, c) {
    return { format: b, Qk: c };
  };
  google.v.w.Qa.om = function (b) {
    return H.b.H.format(b.format, b.Qk);
  };
  google.v.w.Qa.load = function (b, c) {
    var d = H.b.H.format(b, c),
      e = H.N.P.Sd(d, {
        timeout: google.v.w.Qa.kj,
        attributes: { async: !1, defer: !1 },
      });
    return new Promise(function (f) {
      google.v.w.ja.lo(d.toString());
      L(e, f);
    });
  };
  google.v.w.Qa.Ov = function (b) {
    b = H.g.map(b, google.v.w.Qa.om);
    if (H.g.Ca(b)) return Promise.resolve();
    var c = { timeout: google.v.w.Qa.kj, attributes: { async: !1, defer: !1 } },
      d = [];
    !H.userAgent.oa || H.userAgent.Xa(11)
      ? H.g.forEach(b, function (e) {
          d.push(H.N.P.Sd(e, c));
        })
      : d.push(H.N.P.Zn(b, c));
    return Promise.all(
      H.g.map(d, function (e) {
        return new Promise(function (f) {
          return L(e, f);
        });
      })
    );
  };
  google.v.w.Bg = {
    1: "1.0",
    "1.0": "current",
    1.1: "upcoming",
    41: x,
    42: x,
    43: x,
    44: x,
    46: "46.1",
    46.1: "46.2",
    previous: "45.2",
    current: "46",
    upcoming: "46.2",
  };
  google.v.w.J = {};
  google.v.w.J.Cm = function () {
    google.v.w.J.gf = null;
    google.v.w.J.jd = null;
    google.v.w.J.rj = null;
  };
  H.wb(aa)
    ? console.warn("Google Charts loader.js should only be loaded once.")
    : google.v.w.J.Cm();
  google.v.w.J.qn = function (b) {
    var c = b,
      d = b.match(/^testing-/);
    d && (c = c.replace(/^testing-/, ""));
    b = c;
    do {
      if (c === google.v.w.Bg[c])
        throw Error("Infinite loop in version mapping: " + c);
      var e = google.v.w.Bg[c];
      e && (c = e);
    } while (e);
    d = (d ? "testing-" : "") + c;
    return { version: c == x ? b : d, jn: d };
  };
  google.v.w.J.hn = function (b) {
    var c = google.v.w.J.qn(b),
      d = H.c.M.from("https://www.gstatic.com/charts/%{version}/loader.js");
    return google.v.w.Qa.load(d, { version: c.jn }).then(function () {
      var e =
        H.wb("google.charts.loader.VersionSpecific.load") ||
        H.wb("google.charts.loader.publicLoad") ||
        H.wb("google.charts.versionSpecific.load");
      if (!e) throw Error("Bad version: " + b);
      google.v.w.J.rj = function (f) {
        f = e(c.version, f);
        if (null == f || null == f.then) {
          var g =
            H.wb("google.charts.loader.publicSetOnLoadCallback") ||
            H.wb("google.charts.versionSpecific.setOnLoadCallback");
          f = new Promise(function (h) {
            g(h);
          });
          f.then = g;
        }
        return f;
      };
    });
  };
  google.v.w.J.en = function (b, c) {
    if (!google.v.w.J.gf) {
      if (c.enableUrlSettings && window.URLSearchParams)
        try {
          b =
            new URLSearchParams(top.location.search).get("charts-version") || b;
        } catch (d) {
          console.info("Failed to get charts-version from top URL", d);
        }
      google.v.w.J.gf = google.v.w.J.hn(b);
    }
    return (google.v.w.J.jd = google.v.w.J.gf.then(function () {
      return google.v.w.J.rj(c);
    }));
  };
  google.v.w.J.jo = function (b) {
    if (!google.v.w.J.jd)
      throw Error(
        "Must call google.charts.load before google.charts.setOnLoadCallback"
      );
    return b ? google.v.w.J.jd.then(b) : google.v.w.J.jd;
  };
  google.v.load = function (b) {
    for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
    d = 0;
    "visualization" === c[d] && d++;
    var e = "current";
    H.L(c[d]) && ((e = c[d]), d++);
    var f = {};
    H.Da(c[d]) && (f = c[d]);
    return google.v.w.J.en(e, f);
  };
  H.Dc(aa, google.v.load);
  google.v.$i = google.v.w.J.jo;
  H.Dc("google.charts.setOnLoadCallback", google.v.$i);
  google.v.w.J.ik = H.c.M.from(
    "https://maps.googleapis.com/maps/api/js?jsapiRedirect=true&key=%{key}&v=%{version}&libraries=%{libraries}"
  );
  google.v.w.J.jk = H.c.M.from(
    "https://maps-api-ssl.google.com/maps?jsapiRedirect=true&file=googleapi&key=%{key}&v=%{version}&libraries=%{libraries}"
  );
  google.v.w.J.fn = function (b, c, d) {
    console.warn("Loading Maps API with the jsapi loader is deprecated.");
    d = d || {};
    b = google.v.w.J.hf(d.callback);
    google.v.w.Qa.load("2" === c ? google.v.w.J.jk : google.v.w.J.ik, {
      key: d.key || d.client || "",
      version: c || "",
      libraries: d.libraries || "",
    }).then(b);
  };
  google.v.w.J.ig = H.c.M.from(
    "https://www.gstatic.com/inputtools/js/ita/inputtools_3.js"
  );
  google.v.w.J.dn = function (b, c, d) {
    H.Da(d) && d.packages
      ? (H.isArray(d.packages) ? d.packages : [d.packages]).includes(
          "inputtools"
        )
        ? (console.warn(
            "Loading Input Tools with the jsapi loader is deprecated.\nPlease load " +
              google.v.w.J.ig +
              " directly."
          ),
          (b = google.v.w.J.hf(d.callback)),
          google.v.w.Qa.load(google.v.w.J.ig, {}).then(b))
        : console.error(
            "Loading elements other than inputtools with the jsapi loader is unsupported."
          )
      : console.error(
          "google.load of elements was invoked without specifying packages"
        );
  };
  google.v.w.J.hf = function (b) {
    return function () {
      if (H.L(b) && "" !== b)
        try {
          H.wb(b)();
        } catch (c) {
          throw Error("Callback failed with: " + c);
        }
    };
  };
  google.v.w.J.Yh = function (b) {
    for (var c = [], d = 0; d < arguments.length; ++d) c[d - 0] = arguments[d];
    switch (c[0]) {
      case "maps":
        google.v.w.J.fn.apply(google.v.w.J, G.ve(c));
        return;
      case "elements":
        google.v.w.J.dn.apply(google.v.w.J, G.ve(c));
        return;
    }
    if ("visualization" !== c[0])
      throw Error('Module "' + c[0] + '" is not supported.');
    google.v.load.apply(google.v, G.ve(c));
  };
  google.v.w.J.Cn = function (b) {
    H.L(b) && ((b = google.v.w.J.hf(b)), google.v.w.ja.Ai().then(b));
  };
  google.v.w.J.Bn = function (b) {
    if (H.L(b))
      try {
        if ("" !== b)
          for (
            var c = JSON.parse(b).modules, d = G.Dd(c), e = d.next();
            !e.done;
            e = d.next()
          ) {
            var f = e.value;
            google.v.w.J.Yh(f.name, f.version, f);
          }
      } catch (g) {
        throw Error("Autoload failed with: " + g);
      }
  };
  google.v.w.J.Rl = function () {
    H.wb("google.load") ||
      (H.Dc("google.load", google.v.w.J.Yh),
      H.Dc("google.setOnLoadCallback", google.v.$i));
  };
  google.v.w.J.Dn = function () {
    google.v.w.J.Rl();
    var b = document.getElementsByTagName("script");
    b = b[b.length - 1].getAttribute("src");
    b = new H.G(b).Oa.toString();
    b = new H.G.bb(b);
    google.v.w.J.Cn(b.get("callback"));
    google.v.w.J.Bn(b.get("autoload"));
  };
  google.v.w.J.Dn();
}).call(this);
