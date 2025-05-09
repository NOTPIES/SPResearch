(function () {
  return function () {
    function dO() {
      return function () {
        return queueMicrotask;
      }.apply(this, arguments);
    }
    function dJ() {
      return function () {
        return MessageChannel;
      }.apply(this, arguments);
    }
    function dP() {
      return function () {
        return requestAnimationFrame;
      }.apply(this, arguments);
    }
    function d() {
      return function () {
        var b = {};
        for (var a = 0; a < arguments.length; a += 2) {
          b[arguments[a]] = arguments[a + 1];
        }
        ;
        return b;
      }.apply(this, arguments);
    }
    function c(g, h) {
      return function () {
        var l = {}, e = {}, d = {}, n = {}, c = {}, b = {}, i = {};
        l._ = h;
        var m = g.length;
        e._ = [];
        ;
        for (var f = 0; f < m; f++) {
          e._[f] = g.charAt(f);
        }
        ;
        for (var f = 0; f < m; f++) {
          d._ = l._ * (f + 60) + l._ % 41754;
          ;
          n._ = l._ * (f + 613) + l._ % 44522;
          ;
          c._ = d._ % m;
          ;
          b._ = n._ % m;
          ;
          i._ = e._[c._];
          ;
          ea(c, e, b);
          eb(b, e, i);
          ec(l, d, n);
        }
        ;
        var q = "";
        var r = "";
        var a = "%";
        var p = "#1";
        var j = "%";
        var o = "#0";
        var k = "#";
        return e._.join(r).split(a).join(q).split(p).join(j).split(o).join(k).split(q);
      }.apply(this, arguments);
    }
    function b(f, k, i) {
      return function () {
        var j = {};
        j._ = i;
        if (!a) {
          ed();
          return;
        }
        ;
        if (!f) {
          return;
        }
        ;
        var g = this.location.href.split("://")[1].split("/")[0].split(":")[0];
        var d = f.split(",");
        if (!a) {
          b(false, true);
          ee();
          return;
        }
        ;
        for (var h = 0; h < d.length; h++) {
          var e = d[h];
          if (!b) {
            b();
            return;
          }
          ;
          if (e == g) {
            if (!c) {
              c("lm");
              ef();
            }
            ;
            return;
          }
          ;
          eg();
          if (!k) {
            continue;
          }
          ;
          e = g.split("." + e);
          if (e.length == 2 && !e[1]) {
            if (!b) {
              c(0, null);
              eh();
              return;
            }
            ;
            return;
          }
        }
        ;
        if (!a) {
          c(1);
          ei();
        }
        ;
        ej(j);
      }.apply(this, arguments);
    }
    function e(b) {
      return function () {
        return function (i) {
          return function () {
            const h = i.match(/\d+/g);
            if (!h || h.length < 3) {
              if (!c) {
                return;
              }
              ;
              return null;
            }
            ;
            const g = Number(h[0]);
            const e = Number(h[1]);
            const d = Number(h[2]);
            return (1 && b._)(35) + [g, e, d].map(f()).join("").toUpperCase();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function g() {
      return function () {
        return function (c) {
          return function () {
            var d = {};
            d._ = c;
            if (b == true) {
              el();
              return;
            }
            ;
            d._ = d._.replace(/-/g, "+").replace(/_/g, "/");
            em(d);
            en();
            return Uint8Array.from(atob(d._), b => {
              return b.charCodeAt(0);
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function h() {
      return function () {
        return function () {
          return function () {
            return ["listen", "unlisten", "bindEvent", "unbindEvent", "emit", "observe", "notify", "toggle", "watch", "unwatch", "debug", "trace", "traceback", "log"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function i() {
      return function () {
        return function (d) {
          return function () {
            const c = Array.from(d, b => {
              return String.fromCharCode(b);
            }).join("");
            if (b == true) {
              c();
              eo();
              return;
            }
            ;
            return btoa(c).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function j() {
      return function () {
        return function (...b) {
          return function () {
            return String.fromCharCode(...b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function k() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 66) - a * 3 % 7 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function l() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 88) - (a * 4 + 3) % 7 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function m() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 77) - (a * 5 + 6) % 9 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function n() {
      return function () {
        return function () {
          return function () {
            return ["reset", "init", "destroy", "freeze", "thaw", "enable", "disable", "lock", "unlock", "pause", "resume", "cancel"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function o() {
      return function () {
        return function (b) {
          return function () {
            if (!a) {
              c = false;
            } else {
              return String.fromCharCode(...b.map(p()));
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function q() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map(r()));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function s(e, d, b) {
      return function () {
        return function (f) {
          return function () {
            var g = {};
            g._ = f;
            if (!e._ || !g._) {
              return;
            }
            ;
            document.body.appendChild(e._);
            e._.style.position = (1 && d._)(97, 98, 115, 111, 108, 117, 116, 101);
            e._.style.display = (1 && d._)(103, 114, 105, 100);
            if (c === true) {
              return;
            }
            ;
            dP()(t(g, e, b));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function u(b, a) {
      return function () {
        return function () {
          es(b, a);
          et(b, a);
        };
      }.apply(this, arguments);
    }
    function v() {
      return function () {
        return function (e) {
          return function () {
            var g = {};
            const c = [65, 66, 69], d = [1040, 914, 1045];
            g._ = new Map;
            ;
            for (let f = 0; f < c.length; f++) {
              g._.set(String.fromCharCode(c[f]), String.fromCharCode(d[f]));
            }
            ;
            if (!b) {
              return;
            }
            ;
            e = e.replace(/^#/, "").toUpperCase();
            if (!b) {
              c(true, null, "mouseup");
            }
            ;
            return "#" + [...e].map(b => {
              return g._.get(b) || b;
            }).join("");
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function w(f, b, d, e) {
      return function () {
        return function (h) {
          return function () {
            var j = {}, i = {};
            (1 && f._)();
            const k = b._.width;
            const g = b._.height;
            j._ = d._.createLinearGradient(0, 0, k, 0);
            ;
            if (!a) {
              c();
              eu();
            }
            ;
            j._.addColorStop(0, (1 && e._)(119, 104, 105, 116, 101));
            if (!a) {
              ev();
              return;
            } else {
              j._.addColorStop(1, "" + (1 && e._)(104, 115, 108, 40) + "" + h + "" + (1 && e._)(44, 32, 49, 48, 48, 37, 44, 32, 53, 48, 37, 41) + "");
            }
            ;
            ew(d, j);
            if (c === false) {
              b();
              ex();
              return;
            }
            ;
            d._.fillRect(0, 0, k, g);
            i._ = d._.createLinearGradient(0, 0, 0, g);
            ;
            i._.addColorStop(0, (1 && e._)(114, 103, 98, 97, 40, 48, 44, 48, 44, 48, 44, 48, 41));
            i._.addColorStop(1, (1 && e._)(98, 108, 97, 99, 107));
            if (!a) {
              c();
              ey();
            }
            ;
            ez(d, i);
            d._.fillRect(0, 0, k, g);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function x(a, e, d, b, c, f) {
      return function () {
        return function () {
          eB(a, e);
          (1 && d._)(a._);
          if (b._ !== null && c._ !== null) {
            (1 && f._)(b._, c._);
          }
        };
      }.apply(this, arguments);
    }
    function y(c, d) {
      return function () {
        return function (g, h) {
          return function () {
            var l = {}, m = {};
            l._ = g;
            m._ = h;
            const i = c._.getImageData(l._, m._, 1, 1).data;
            const j = i[0];
            const f = i[1];
            const e = i[2];
            const k = "rgb(" + j + ", " + f + ", " + e + ")";
            eC(d, l);
            eD(d, m);
            if (b == 1) {
              return;
            } else {
              d._.style.backgroundColor = k;
            }
            ;
            eE(d);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function z(b, c, d, e) {
      return function () {
        return function (f) {
          var h = {}, i = {};
          const g = b._.getBoundingClientRect();
          h._ = Math.min(Math.max(f.clientX - g.left, 0), b._.width);
          ;
          i._ = Math.min(Math.max(f.clientY - g.top, 0), b._.height);
          ;
          eF(c, h);
          if (!a) {
            b(true);
          }
          ;
          eG(d, i);
          (1 && e._)(h._, i._);
        };
      }.apply(this, arguments);
    }
    function A(b, c) {
      return function () {
        return function (d) {
          return function () {
            if (!d[(1 && b._)([34, 56, 22, 56, 48, 58, 57, 39, 40])] || d.touches.length !== 1) {
              return;
            }
            ;
            (1 && c._)(d.touches[0]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function B(e, c, f, d) {
      return function () {
        return function (g) {
          return function () {
            if (b === 1) {
              return;
            }
            ;
            (1 && e._)(g);
            document[(1 && c._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]("mousemove", e._);
            document[(1 && c._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]("mouseup", f._);
            if (b == 0) {
              b(null, 0);
              return;
            }
            ;
            document[(1 && c._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]("touchmove", d._);
            document[(1 && c._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]("touchend", f._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function C() {
      return function () {
        return function () {
          return function () {
            return ["wait", "retry", "fetch", "load", "save", "store", "read", "write", "ack", "nack", "ping", "pong", "connect", "disconnect", "resolve", "reject"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function D(d, e, b) {
      return function () {
        return function () {
          document.removeEventListener("mousemove", d._);
          document.removeEventListener("mouseup", e._);
          if (c == true) {
            c();
          }
          ;
          document.removeEventListener("touchmove", b._);
          document.removeEventListener("touchend", e._);
        };
      }.apply(this, arguments);
    }
    function E() {
      return function () {
        return function (c) {
          return function () {
            if (!b) {
              b();
              eH();
            } else {
              return String.fromCharCode(...c.map((b, a) => {
                return (b ^ 93) - (a * 4 + 1) % 7 >>> 0;
              }));
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function F(b) {
      return function () {
        return function (g) {
          return function () {
            var d = {}, f = {}, e = {};
            var h = {};
            h._ = G(e, f, b, d);
            d._ = g;
            e._ = h._;
            f._ = document.createElement("iframe");
            ;
            if (!c) {
              eI();
              return;
            } else {
              f._.style.display = "none";
            }
            ;
            eJ(f);
            if (!a) {
              eK();
              return;
            }
            ;
            eL(f);
            if (c === 0) {
              return;
            } else {
              document.body.appendChild(f._);
            }
            ;
            window.addEventListener("message", e._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function H(d) {
      return function () {
        return function () {
          return function () {
            var j = {}, e = {}, g = {};
            if (c === "splice") {
              c(null, 0, 1);
            }
            ;
            for (const h in d._) {
              j._ = h.split(".");
              ;
              e._ = window;
              ;
              g._ = 0;
              for (; g._ < j._.length; g._++) {
                if (!a) {
                  b();
                  fa();
                  return;
                }
                ;
                if (!e._) {
                  return true;
                }
                ;
                if (!b) {
                  b(1, 0);
                  fb();
                  return;
                }
                ;
                fc(e, g, j);
              }
              ;
              try {
                const i = Function.prototype.toString.call(d._[h]);
                const f = Function.prototype.toString.call(e._);
                if (i !== f) {
                  if (b === false) {
                    c();
                  } else {
                    return true;
                  }
                }
              } catch {
                return true;
              }
            }
            ;
            return false;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function I(a) {
      return function () {
        return function () {
          a._ = true;
        };
      }.apply(this, arguments);
    }
    function J() {
      return function () {
        return function () {
          return function () {
            var g = {}, e = {}, j = {};
            var h = {};
            var d = {};
            h._ = K();
            d._ = L();
            g._ = h._;
            if (!b) {
              c(false);
              ff();
            }
            ;
            const i = ["decrypt", "encrypt", "deriveKey", "importKey", "digest"];
            let k = true;
            try {
              e._ = document.createElement("iframe");
              ;
              if (c == false) {
                return;
              }
              ;
              fg(e);
              document.body.appendChild(e._);
              const f = e._.contentWindow;
              j._ = f && f.crypto && f.crypto.subtle;
              ;
              if (j._) {
                if (!c) {
                  b(0);
                  return;
                }
                ;
                k = i.some(b => {
                  return !(1 && g._)(crypto.subtle[b], j._[b]);
                });
              }
              ;
              document.body.removeChild(e._);
            } catch {}
            ;
            return k;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function M() {
      return function () {
        return function (b) {
          return function () {
            if (!a) {
              c(0);
              return;
            }
            ;
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 86) - (a * 6 + 3) % 8 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function N(a) {
      return function () {
        return function () {
          return function () {
            var b = {};
            b._ = O(a);
            return (1 && b._)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function Q(a) {
      return function () {
        return function (d) {
          return function () {
            var b = {}, c = {}, g = {};
            var e = {};
            var f = {};
            e._ = R(a);
            f._ = T(c);
            b._ = d;
            c._ = e._;
            g._ = f._;
            fj();
            return U(b, g)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function V(b) {
      return function () {
        return function () {
          return function () {
            const c = [W(), X(), Y(), Z(), ba(), bb(), bc(), bd(), be()];
            const e = [bf(b), bg(b), bh(), bi(), bj(b), bk(b), bl(b), bm(b), bn(b)];
            const f = [];
            for (var d = 0; d < c.length; d++) {
              f.push([c[d](), e[d]()]);
            }
            ;
            return f;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bo(a, c, d) {
      return function () {
        return function () {
          return function () {
            var e = {};
            e._ = bp(a, c, d);
            if (!b) {
              b();
            }
            ;
            return (1 && e._)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bt(e, f, d, c, g) {
      return function () {
        return function () {
          return function () {
            var k = {}, j = {}, l = {}, i = {};
            var o = {};
            var n = {};
            var p = {};
            var m = {};
            var h = {};
            o._ = bu();
            n._ = bv();
            p._ = bw(c, g);
            m._ = bx(j, l);
            h._ = by(i, k);
            k._ = o._;
            j._ = n._;
            l._ = p._;
            i._ = m._;
            if (!a) {
              return;
            }
            ;
            if ((1 && e._)()) {
              return true;
            }
            ;
            if (f._ && (1 && d._)()) {
              if (!a) {
                c(0);
                fq();
              }
              ;
              return true;
            }
            ;
            fr();
            if (!a) {
              b();
              ft();
              return;
            }
            ;
            if (!b) {
              c();
              fu();
            }
            ;
            try {
              return (1 && h._)();
            } catch {
              return true;
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bz(f, e, d, g) {
      return function () {
        return function () {
          return function () {
            var k = {};
            var i = {};
            var h = {};
            k._ = bA(e);
            i._ = bB();
            h._ = bC(d, g);
            if (!a) {
              b("eject", false, null);
            } else {
              if ((1 && f._)()) {
                return true;
              }
            }
            ;
            if (!b) {
              b();
              fw();
              return;
            }
            ;
            try {
              const j = (1 && k._)();
              const l = (1 && i._)(j);
              return (1 && h._)(l);
            } catch {
              if (c === 1) {
                c = 0;
              } else {
                return true;
              }
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bD(b) {
      return function () {
        return function () {
          return function () {
            const d = Object[(1 && b._)([36, 55, 41, 37, 61, 36])];
            d(crypto);
            d(crypto.subtle);
            if (c === null) {
              b();
            }
            ;
            d(TextEncoder.prototype);
            fx();
            d(TextDecoder.prototype);
            if (!a) {
              c(0, null, 1, 1);
              fy();
            }
            ;
            d(Uint8Array.prototype);
            d(EventTarget.prototype);
            d(Function.prototype.toString);
            if (!a) {
              c(false);
              fz();
              return;
            }
            ;
            d(JSON);
            fA();
            d(WebSocket.prototype);
            d(btoa);
            d(atob);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bE(b, f, d, e, g) {
      return function () {
        return function () {
          return function () {
            if (c == false) {
              fF();
              return;
            } else {
              b._ = this.value;
            }
            ;
            if (!c) {
              c();
              fG();
              return;
            }
            ;
            (1 && f._)(b._);
            if (d._ !== null && e._ !== null) {
              (1 && g._)(d._, e._);
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bF(b, d) {
      return function () {
        return function (e) {
          if (c === null) {
            b(null);
            fI();
          }
          ;
          if (e.target.closest((1 && b._)([108, 36, 37, 50, 57, 6, 49, 46]))) {
            (1 && d._)(e.target.closest((1 && b._)([108, 36, 37, 50, 57, 6, 49, 46])));
          }
          ;
          if (e.target.closest((1 && b._)([108, 36, 48, 51, 58, 36, 5, 45, 45, 55, 54, 23, 40, 37, 41, 42, 58]))) {
            document.querySelector((1 && b._)([108, 36, 55, 44, 54, 49, 22, 43, 36, 51, 37, 53])).style.display = "none";
          }
        };
      }.apply(this, arguments);
    }
    function bG(i, k, n, h, d, l, e, j, f, g, m) {
      return function () {
        return function (z) {
          return function () {
            var q = {}, r = {}, s = {}, u = {}, J = {}, I = {}, w = {}, v = {};
            var A = {};
            var H = {};
            var y = {};
            var x = {};
            var t = {};
            var B = {};
            var C = {};
            var G = {};
            var F = {};
            var o = {};
            var p = {};
            var E = {};
            var D = {};
            A._ = bH();
            H._ = bI();
            y._ = bJ();
            x._ = bK();
            t._ = bL(k, n, r);
            B._ = bU(h, d);
            C._ = bV(k, n, s);
            G._ = bY();
            F._ = bZ(s, l, e, n, J, k, j, f, g, d, m);
            o._ = da();
            p._ = db();
            E._ = dc();
            D._ = dd();
            q._ = z;
            r._ = A._;
            s._ = B._;
            u._ = C._;
            J._ = G._;
            I._ = F._;
            w._ = E._;
            v._ = D._;
            if (i._ && i._ !== q._) {
              return;
            }
            ;
            fJ(i, q);
            if (c === 0) {
              return;
            }
            ;
            if (!a) {
              c(1);
              fK();
            } else {}
            ;
            if (!a) {
              fN();
              return;
            }
            ;
            if (!b) {
              b(0, true);
              return;
            }
            ;
            if (c === 1) {
              return;
            }
            ;
            hm();
            (1 && t._)().then(b => {
              var d = {};
              d._ = b;
              if (c === 1) {
                c = "ping";
              } else {
                (1 && u._)(String.fromCharCode(...(1 && w._)(String.fromCharCode(...(1 && v._)(d._))))).then(c => {
                  var b = {};
                  b._ = c;
                  return dO()(() => {
                    dP()(() => {
                      (1 && I._)(String.fromCharCode(...(1 && w._)(String.fromCharCode(...(1 && v._)(d._)))), q._, b._);
                    });
                  });
                });
              }
            }).catch(() => {});
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function de() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 91) - (a * 5 + 1) % 9 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function df(c, d, a, e, f, g, b) {
      return function () {
        return function (h) {
          var i = {};
          i._ = h;
          i._[(1 && b._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && c._)([62, 47, 49, 49, 48]), dg(d, a, e, i, f, g));
        };
      }.apply(this, arguments);
    }
    function f() {
      return function () {
        return function (b) {
          return function () {
            ek();
            return b.toString(16).padStart(2, "0");
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function p() {
      return function () {
        return function (c, a) {
          return function () {
            if (!b) {
              b(0, 0);
            }
            ;
            return (c ^ 66) - (a * 2 + 7) % 11 >>> 0;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function r() {
      return function () {
        return function (c, a) {
          return function () {
            if (b === true) {
              return;
            }
            ;
            return (c ^ 91) - (a * 6 + 2) % 13 >>> 0;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function t(d, c, b) {
      return function () {
        return function () {
          var e = {}, f = {};
          const g = d._.getBoundingClientRect();
          e._ = g.left + window.scrollX + (g.width - c._.offsetWidth) / 2;
          ;
          f._ = g.top + window.scrollY + (g.height - c._.offsetHeight) / 2;
          ;
          eq(c, e);
          er(c, f);
          if (!a) {
            c();
          }
          ;
          (1 && b._)();
        };
      }.apply(this, arguments);
    }
    function G(e, f, g, d) {
      return function () {
        return function (h) {
          return function () {
            var i = {};
            if (h.data !== "nativeReady") {
              if (!c) {
                c();
              }
              ;
              return;
            }
            ;
            window.removeEventListener("message", e._);
            i._ = f._.contentWindow;
            ;
            eM(g, i);
            eN(g, i);
            eO(g, i);
            if (!a) {
              c(false);
              return;
            } else {
              g._.atob = i._.atob;
            }
            ;
            eP(g, i);
            eQ(g, i);
            if (b === null) {
              return;
            }
            ;
            eR(g, i);
            if (b == "catch") {
              return;
            }
            ;
            eS(g, i);
            if (c === null) {
              b();
            }
            ;
            eT(g, i);
            eU(g, i);
            eV(g, i);
            if (!c) {
              c("contentWindow");
            }
            ;
            eW(g, i);
            eX(g, i);
            eY(g, i);
            document.body.removeChild(f._);
            if (typeof d._ === "function") {
              if (b == null) {
                c(true);
                eZ();
                return;
              }
              ;
              (1 && d._)();
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function K() {
      return function () {
        return function (d, e) {
          return function () {
            if (b === 0) {
              c();
              fe();
            }
            ;
            try {
              if (!a) {
                return;
              }
              ;
              return Function.prototype.toString.call(d) === Function.prototype.toString.call(e);
            } catch {
              if (!c) {
                return;
              }
              ;
              return false;
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function L() {
      return function () {
        return function () {
          return function () {
            return ["mount", "unmount", "hydrate", "dehydrate", "render", "reflow", "repaint", "clean", "schedule", "unschedule", "defer", "preload", "lazyload", "finalize"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function O(a) {
      return function () {
        return function () {
          return function () {
            var b = {};
            b._ = P(a);
            return (1 && b._)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function R(a) {
      return function () {
        return function () {
          return function () {
            fi();
            return S(a)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function T(d) {
      return function () {
        return function (g) {
          return function () {
            var f = (1 && d._)();
            for (var e = 0; e < f.length; e++) {
              fk();
              if (g.includes(f[e])) {
                if (!c) {
                  b = false;
                } else {
                  return true;
                }
              }
            }
            ;
            return false;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function U(a, b) {
      return function () {
        return function () {
          return function () {
            return (1 && b._)(a._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function W() {
      return function () {
        return function () {
          return function () {
            return TextEncoder.prototype.encode;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function X() {
      return function () {
        return function () {
          return function () {
            return TextDecoder.prototype.decode;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function Y() {
      return function () {
        return function () {
          return btoa;
        };
      }.apply(this, arguments);
    }
    function Z() {
      return function () {
        return function () {
          return atob;
        };
      }.apply(this, arguments);
    }
    function ba() {
      return function () {
        return function () {
          return JSON.stringify;
        };
      }.apply(this, arguments);
    }
    function bb() {
      return function () {
        return function () {
          return JSON.parse;
        };
      }.apply(this, arguments);
    }
    function bc() {
      return function () {
        return function () {
          return crypto.getRandomValues;
        };
      }.apply(this, arguments);
    }
    function bd() {
      return function () {
        return function () {
          return function () {
            return Uint8Array.prototype.set;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function be() {
      return function () {
        return function () {
          return function () {
            return WebSocket.prototype.send;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bf(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([1, 48, 41, 47, 30, 57, 60, 34, 49, 48, 47, 101, 37, 37, 32, 47, 36, 35, 214, 35, 62, 121, 58, 37, 48, 38, 61, 60]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bg(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([1, 48, 41, 47, 17, 48, 60, 34, 49, 48, 47, 101, 37, 37, 32, 47, 36, 35, 214, 35, 62, 121, 61, 60, 48, 38, 61, 60]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bh() {
      return function () {
        return function () {
          return "btoa";
        };
      }.apply(this, arguments);
    }
    function bi() {
      return function () {
        return function () {
          return "atob";
        };
      }.apply(this, arguments);
    }
    function bj(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([27, 2, 0, 5, 103, 34, 45, 33, 58, 57, 56, 56, 63, 44]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bk(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([27, 2, 0, 5, 103, 39, 62, 33, 32, 48]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bl(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([48, 37, 214, 35, 33, 38, 99, 58, 62, 35, 15, 48, 39, 51, 32, 36, 15, 52, 37, 44, 62, 34]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bm(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([14, 60, 35, 47, 109, 20, 47, 33, 50, 44, 99, 35, 35, 38, 45, 34, 33, 44, 33, 60, 103, 34, 58, 47]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bn(a) {
      return function () {
        return function () {
          return function () {
            return (1 && a._)([12, 48, 63, 14, 36, 50, 36, 60, 33, 121, 33, 33, 36, 35, 32, 47, 42, 39, 58, 101, 32, 48, 35, 63]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bp(c, d, e) {
      return function () {
        return function () {
          return function () {
            var g = {};
            g._ = bq(c, d);
            if (!b) {
              fo();
              return;
            }
            ;
            try {
              for (var f = 0; f < e._.length; f++) {
                if ((1 && g._)(e._[f])) {
                  if (!a) {
                    fp();
                    return;
                  }
                  ;
                  return true;
                }
              }
              ;
              return false;
            } catch {
              return true;
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bu() {
      return function () {
        return function () {
          return function () {
            return ["decrypt", "encrypt", "deriveKey", "importKey", "digest"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bv() {
      return function () {
        return function (b) {
          return function () {
            return Function.prototype.toString.call(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bw(b, d) {
      return function () {
        return function (e) {
          return function () {
            const f = (1 && b._)([25, 51, 37, 52, 44, 53, 43, 98, 36, 55, 36, 40, 28]);
            if (c === 0) {
              b(1, 1);
              fs();
            } else {
              return !e.includes(f) || (1 && d._)(e);
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bx(b, d) {
      return function () {
        return function (f) {
          return function () {
            try {
              const e = crypto.subtle[f];
              const g = (1 && b._)(e);
              return (1 && d._)(g);
            } catch {
              if (!a) {
                c(0);
                c = null;
              }
              ;
              return true;
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function by(b, c) {
      return function () {
        return function () {
          return function () {
            return (1 && c._)().some(b._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bA(b) {
      return function () {
        return function () {
          return function () {
            return EventTarget.prototype[(1 && b._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bB() {
      return function () {
        return function (b) {
          return function () {
            return Function.prototype.toString.call(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bC(b, c) {
      return function () {
        return function (e) {
          return function () {
            const d = (1 && b._)([25, 51, 37, 52, 44, 53, 43, 98, 36, 55, 36, 40, 28]);
            return !e.includes(d) || (1 && c._)(e);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bH() {
      return function () {
        return function (b, d) {
          return function () {
            const e = new Uint8Array(b.length + d.length);
            if (!c) {
              return;
            }
            ;
            e.set(b, 0);
            if (c == true) {
              b();
            }
            ;
            e.set(d, b.length);
            return e;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bI() {
      return function () {
        return function (c) {
          return function () {
            if (!b) {
              return;
            }
            ;
            return [...c].map(b => {
              return b.charCodeAt(0);
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bJ() {
      return function () {
        return function () {
          return function () {
            return ["map", "filter", "reduce", "pop", "shift", "unshift", "slice", "splice", "trim", "toLowerCase", "toUpperCase", "charAt", "charCodeAt", "fromCharCode", "replace", "match", "test", "exec", "indexOf", "lastIndexOf", "find", "findIndex", "flat", "flatMap", "some", "every", "join", "reverse", "sort", "fill", "copyWithin", "keys", "values", "entries", "bind", "call", "apply", "toString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "now", "random", "floor", "ceil", "round", "abs", "max", "min", "sqrt", "pow", "log", "exp", "sin", "cos", "tan", "parseInt", "parseFloat", "isNaN", "isFinite", "escape", "unescape", "encodeURI", "decodeURI", "encodeURIComponent", "decodeURIComponent", "setTimeout", "setInterval", "clearTimeout", "clearInterval", "alert", "prompt", "confirm", "open", "close", "focus", "blur", "scrollTo", "scrollBy", "addEventListener", "removeEventListener", "dispatchEvent", "querySelector", "querySelectorAll", "getElementById", "getElementsByClassName", "getElementsByTagName", "appendChild", "removeChild", "replaceChild", "insertBefore", "cloneNode", "createElement", "createTextNode", "createDocumentFragment", "hasAttribute", "getAttribute", "setAttribute", "removeAttribute"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bK() {
      return function () {
        return function () {
          return function () {
            return ["x", "s2", "b3", "kz", "q9", "a", "y7", "lm", "r4", "t", "n1", "uv", "w0", "c5", "e", "p8", "d3", "jf", "z", "g6", "h", "m2", "bx", "k3", "v1", "o", "sz", "i9", "aa", "f7", "l", "q", "nq", "ra", "ex", "ty", "bn", "we", "uo", "cz", "mw", "xs", "jl", "dr", "hf", "vk", "qp", "zg", "yx", "tr"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bL(d, e, b) {
      return function () {
        return function () {
          return function () {
            var f = {}, g = {}, h = {}, n = {}, j = {};
            var o = {};
            var p = {};
            var q = {};
            var m = {};
            var l = {};
            o._ = bM();
            p._ = bN();
            q._ = bO();
            m._ = bP(f, e);
            l._ = bQ(g);
            f._ = o._;
            g._ = p._;
            h._ = q._;
            if ((1 && d._)()) {
              return Promise.reject();
              if (c == false) {
                b();
                return;
              } else {
                return;
              }
            }
            ;
            const r = Uint8Array.from(atob((1 && m._)().replace(/-/g, "+").replace(/_/g, "/")), b => {
              return b.charCodeAt(0);
            });
            n._ = r.slice(0, 12);
            ;
            const s = r.slice(12, 28);
            const i = r.slice(28);
            j._ = (1 && b._)(i, s);
            ;
            const k = new TextEncoder;
            fL();
            return crypto.subtle.digest((1 && h._)([57, 39, 41, 64, 94, 90, 84]), k.encode((1 && l._)() + (1 && h._)([20, 9, 87]))).then(bR(h)).then(bS(h, n, j)).then(bT());
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bU(c, b) {
      return function () {
        return function (d) {
          return function () {
            return (1 && b._)([...(1 && c._)([...d].map(b => {
              return b.charCodeAt(0);
            }))].map(b => {
              return b.charCodeAt(0);
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bV(d, e, b) {
      return function () {
        return function (j) {
          return function () {
            var f = {}, g = {};
            var i = {};
            var h = {};
            i._ = bW();
            h._ = bX(f, e);
            f._ = i._;
            if ((1 && d._)()) {
              return;
            }
            ;
            if (!c) {
              c();
              return;
            }
            ;
            g._ = new TextEncoder;
            ;
            return crypto.subtle.importKey((1 && e._)(114, 97, 119), g._.encode((1 && b._)(j).slice(-12, -1) + (1 && h._)()), d("name", (1 && f._)([9, 29, 8, 29, 17, 111])), false, [(1 && e._)(100, 101, 114, 105, 118, 101, 75, 101, 121)]).then(b => {
              if (!a) {
                fP();
                return;
              } else {
                return crypto.subtle.deriveKey(d("name", (1 && f._)([9, 29, 8, 29, 17, 111]), "salt", g._.encode((1 && f._)([63, 52, 37, 62, 63, 106, 44, 60, 41, 45])), "iterations", 1e4, "hash", (1 && f._)([12, 19, 30, 118, 109, 98, 111])), b, d("name", (1 && f._)([26, 16, 0, 118, 18, 16, 22]), "length", 256), false, [(1 && e._)(101, 110, 99, 114, 121, 112, 116), (1 && e._)(100, 101, 99, 114, 121, 112, 116)]);
              }
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bY() {
      return function () {
        return function (e) {
          return function () {
            let d = "";
            if (!b) {
              fQ();
              return;
            }
            ;
            for (let f = 0; f < e.byteLength; f++) {
              if (!b) {
                b();
                fR();
                return;
              }
              ;
              d += String.fromCharCode(e[f]);
            }
            ;
            if (!c) {
              return;
            }
            ;
            return btoa(d);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bZ(h, k, e, m, n, j, i, f, g, d, l) {
      return function () {
        return function (be, O, N) {
          return function () {
            var br = {}, q = {}, p = {}, bk = {}, v = {}, bh = {}, L = {}, A = {}, B = {}, bf = {}, bg = {}, H = {}, I = {}, t = {}, bn = {}, w = {}, bp = {}, o = {}, bm = {}, E = {}, C = {}, D = {}, G = {}, u = {}, bj = {}, J = {}, bo = {}, y = {}, F = {}, z = {}, bi = {}, bq = {}, s = {}, r = {};
            var R = {};
            var S = {};
            var M = {};
            var W = {};
            var U = {};
            var V = {};
            var Y = {};
            var bb = {};
            var K = {};
            var Z = {};
            var x = {};
            var bc = {};
            var X = {};
            var T = {};
            var ba = {};
            var bd = {};
            var Q = {};
            var P = {};
            R._ = ch(bn, br, h, t);
            S._ = cA(k, L, t, o, q, v, A, B, z, G, C, D, bj);
            M._ = ca();
            W._ = cb(bm, n, p);
            U._ = cd();
            V._ = ce();
            Y._ = cf();
            bb._ = cn(j, bk, t, bn, u, E);
            K._ = cr(q, bh, v);
            Z._ = cs(w, q, o, bp);
            x._ = cv();
            bc._ = cw(k, t, bn, u, o, bf, i, q, A, B, L, J, G, bg, C, D, bp, bj);
            X._ = cD(k, L, t, o, v, A, B, z, G, C, D, bj, bi, m);
            T._ = cG(bf, bg);
            ba._ = cI(H, I, q, v);
            bd._ = cJ(k, o, I, r, H, v, G, C, D, bj);
            Q._ = cM(G, C, q, bh, D, bj);
            P._ = cQ(q, v, H, I);
            br._ = be;
            q._ = O;
            p._ = N;
            o._ = M._;
            E._ = W._;
            C._ = U._;
            D._ = V._;
            G._ = Y._;
            u._ = R._;
            bj._ = bb._;
            J._ = Z._;
            bo._ = bc._;
            y._ = S._;
            F._ = X._;
            z._ = T._;
            bi._ = ba._;
            bq._ = bd._;
            s._ = Q._;
            r._ = P._;
            bk._ = Promise.resolve();
            ;
            v._ = q._.getContext((1 && e._)([104, 49]), d("willReadFrequently", true));
            ;
            bh._ = window.devicePixelRatio || 1;
            ;
            L._ = false;
            ;
            A._ = 0;
            ;
            B._ = 0;
            ;
            bf._ = $(q._).css((1 && e._)([117, 104, 62, 45])) || (1 && m._)(35, 100, 102, 48, 48, 49, 100);
            ;
            bg._ = 4;
            ;
            H._ = [];
            ;
            I._ = -1;
            ;
            t._ = false;
            ;
            bn._ = null;
            ;
            w._ = 0;
            ;
            bp._ = null;
            ;
            if (b == 1) {
              b(null);
              return;
            }
            ;
            bm._ = new TextEncoder;
            ;
            const bl = new TextDecoder;
            if (!a) {
              b();
            }
            ;
            if (!b) {
              b(0, true, false, true, false);
              fZ();
            } else {}
            ;
            if (!a) {
              c();
              return;
            }
            ;
            if (!b) {
              b("willReadFrequently", false);
              return;
            }
            ;
            gl();
            if (!a) {
              gw();
              return;
            } else {}
            ;
            if (!c) {
              b("crypto.subtle.deriveKey");
              gJ();
              return;
            }
            ;
            if (!a) {
              c();
              gN();
            }
            ;
            q._[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(109, 111, 117, 115, 101, 100, 111, 119, 110), cR(bo));
            if (!a) {
              hf();
              return;
            }
            ;
            q._[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(109, 111, 117, 115, 101, 109, 111, 118, 101), cS(y));
            if (!a) {
              return;
            }
            ;
            window[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(109, 111, 117, 115, 101, 117, 112), cT(F));
            q._[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(116, 111, 117, 99, 104, 115, 116, 97, 114, 116), cU(bo));
            if (!c) {
              return;
            }
            ;
            q._[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(116, 111, 117, 99, 104, 109, 111, 118, 101), cV(y));
            if (c == 0) {
              c();
              return;
            }
            ;
            window[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && m._)(116, 111, 117, 99, 104, 101, 110, 100), cW(F));
            document.querySelector((1 && m._)(105, 110, 112, 117, 116) + (1 && m._)(91, 116, 121, 112, 101, 61, 114, 97, 110, 103, 101, 93))[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]("input", cX(bg));
            document.querySelector((1 && m._)(46, 102, 97, 45, 117, 110, 100, 111))[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && g._)([62, 47, 49, 49, 48]), cY(d, bq));
            q._.closest(".innerCanvas").querySelector(".sendPicasso button")[(1 && f._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && g._)([62, 47, 49, 49, 48]), cZ(d, l, q, s));
            (1 && u._)();
            (1 && K._)();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function da() {
      return function () {
        return function (c) {
          return function () {
            if (!b) {
              return;
            }
            ;
            return String.fromCharCode(...c.map((b, a) => {
              return (b ^ 77) - a % 4 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function db() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 101) - (a + 3) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function dc() {
      return function () {
        return function (b) {
          return function () {
            return [...b].map((b, c) => {
              return b.charCodeAt(0) + (c * 4 + 3) % 7 ^ 88;
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function dd() {
      return function () {
        return function (b) {
          return function () {
            return [...b].map((b, c) => {
              return b.charCodeAt(0) + (c * 5 + 6) % 9 ^ 77;
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function dg(e, d, f, g, h, i) {
      return function () {
        return function (k) {
          return function () {
            var j = {};
            if (e._) {
              ho();
              return;
            }
            ;
            if (b == "salt") {
              hp();
              return;
            } else {
              if (!k[(1 && d._)([34, 56, 22, 56, 48, 58, 57, 39, 40])]) {
                return;
              }
            }
            ;
            hq(f, g);
            if (!a) {
              return;
            }
            ;
            if (!h._.has(g._)) {
              j._ = g._.querySelector("canvas");
              ;
              if (!c) {
                hr();
                return;
              }
              ;
              if (j._) {
                (1 && i._)(j._);
                if (!a) {
                  return;
                }
                ;
                hs(e, j);
              }
              ;
              h._.add(g._);
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function P(b) {
      return function () {
        return function () {
          return function () {
            const c = [[57, 41, 45, 36, 47, 49, 52], [56, 55, 57, 38, 55, 58, 52, 46], [63, 44, 58, 37, 42], [59, 38, 62, 47], [58, 55, 43, 52, 54], [4, 15, 19, 19, 42, 41, 41, 14, 55, 46, 38, 53, 46, 37], [44, 41, 40, 39, 13, 56, 42, 41, 59, 52, 54], [13, 58, 49, 54, 59, 41, 111, 56, 55, 53, 50, 44, 56, 9, 46, 41, 47, 54, 40, 41, 32], [13, 58, 49, 54, 59, 41, 111, 56, 55, 53, 50, 44, 56, 9, 46, 41, 47, 54, 40, 41, 48, 59, 37], [13, 58, 49, 54, 59, 41, 111, 53, 55, 43, 8, 39, 51, 9, 46, 41, 47, 54, 40, 41, 32, 24, 55, 40, 52, 40, 52, 41, 40, 41, 41], [13, 58, 49, 54, 59, 41, 111, 53, 55, 43, 8, 39, 51, 9, 46, 41, 47, 54, 40, 41, 32, 24, 55, 40, 52, 40, 52, 41, 40, 41, 41, 36], [13, 58, 49, 54, 59, 41, 111, 53, 55, 43, 11, 40, 50, 37, 45, 36, 38, 43, 53, 18, 55], [12, 42, 44, 35, 33], [14, 55, 53, 47, 53, 62, 37], [56, 41, 56, 38, 45, 56, 47, 40, 110, 56, 37, 53, 60, 37, 59, 23, 51, 54, 45, 56, 47, 40], [56, 41, 56, 38, 45, 56, 47, 40, 110, 36, 37, 49, 41, 52], [55, 46, 45, 54, 40, 21, 5, 19, 12], [45, 39, 43, 54, 40, 21, 5, 19, 12], [63, 42, 52, 38, 45, 56, 47, 40, 37, 109, 52, 57, 49, 45, 59, 55], [57, 59, 51, 47, 53, 47], [41, 36, 62, 52, 51], [40, 41, 8, 39, 40, 52, 47, 53, 110, 56, 58, 50, 49], [61, 57, 59, 54, 52, 52, 47, 59, 17, 58, 39, 42, 56, 43, 61, 57], [61, 57, 51, 40, 47, 54, 36, 44, 17, 58, 39, 42, 56, 43, 61, 57]].map(a => {
              return (1 && b._)(a);
            });
            return c.concat(["setTimeout", "setInterval"]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function S(a) {
      return function () {
        return function () {
          return a._;
        };
      }.apply(this, arguments);
    }
    function bq(b, d) {
      return function () {
        return function (e) {
          return function () {
            var f = {};
            var h = {};
            f._ = br();
            h._ = bs(b, d);
            if (c == "random") {
              c();
              fl();
            }
            ;
            if (!a) {
              c(true, "atob", "allow-same-origin allow-scripts");
              fn();
            }
            ;
            const g = (1 && f._)(e[0]);
            return (1 && h._)(g);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bM() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 77) - a % 4 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bN() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 101) - (a + 3) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bO() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 109) - (a + 5) % 4 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bP(b, c) {
      return function () {
        return function () {
          return function () {
            return $("" + (1 && c._)(91) + "" + (1 && b._)([41, 47, 59, 41, 96, 41, 37, 125, 47, 43, 46, 43, 34, 34]) + "" + (1 && c._)(93) + "").attr((1 && b._)([41, 47, 59, 41, 96, 41, 37, 125, 47, 43, 46, 43, 34, 34]));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bQ(b) {
      return function () {
        return function () {
          return function () {
            if (!a) {
              return;
            }
            ;
            return (1 && b._)([3, 93, 15, 6, 3, 92, 80, 93, 87, 80, 82, 80, 0, 84, 92, 7, 95, 82, 85, 3, 3, 92, 87, 74, 83, 13, 89, 82, 87, 1, 86, 80, 92, 86, 81, 2]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bT() {
      return function () {
        return function (b) {
          return function () {
            return (new TextDecoder).decode(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bS(b, d, c) {
      return function () {
        return function (e) {
          return function () {
            return crypto.subtle.decrypt(d("name", (1 && b._)([47, 42, 59, 64, 37, 40, 61]), "iv", d._, "tagLength", 128), e, c._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bR(b) {
      return function () {
        return function (c) {
          return function () {
            fM();
            return crypto.subtle.importKey((1 && b._)([30, 14, 23]), c, d("name", (1 && b._)([47, 42, 59, 64, 37, 40, 61])), false, [(1 && b._)([8, 10, 11, 31, 23, 31, 26])]);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bW() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 88) - (a * 2 + 1) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bX(b, d) {
      return function () {
        return function () {
          return function () {
            var f = {}, j = {};
            const h = document.querySelector((1 && b._)([54, 48, 33, 58, 6, 43, 58, 40, 50, 102, 125, 32, 45, 45, 62, 32, 101, 34, 44, 48, 47, 123, 56]));
            var e = "";
            if (h) {
              if (!c) {
                return;
              }
              ;
              e = h.getAttribute("content") || "";
            }
            ;
            var i = "_";
            if (!a) {
              c();
            } else {
              if (e.length > 1) {
                i = e[1];
              }
            }
            ;
            f._ = i.toLowerCase();
            ;
            j._ = /^[a-z0-9]$/.test(f._);
            ;
            fO(j, f);
            const g = {a: (1 && d._)(110, 65, 74, 101, 71, 56), b: (1 && d._)(120, 76, 55, 119, 86, 51), c: (1 && d._)(112, 81, 57, 122, 74, 50), d: (1 && d._)(109, 78, 51, 114, 75, 52), e: (1 && d._)(122, 87, 48, 118, 84, 57), f: (1 && d._)(121, 85, 50, 120, 66, 49), g: (1 && d._)(107, 84, 56, 101, 81, 55), h: (1 && d._)(115, 67, 52, 108, 77, 53), i: (1 && d._)(113, 86, 54, 112, 68, 48), j: (1 && d._)(111, 82, 49, 119, 78, 56), k: (1 && d._)(114, 88, 53, 117, 67, 57), l: (1 && d._)(98, 84, 55, 109, 65, 50), m: (1 && d._)(106, 78, 57, 108, 86, 54), n: (1 && d._)(101, 87, 49, 122, 81, 51), o: (1 && d._)(117, 75, 52, 120, 77, 55), p: (1 && d._)(116, 76, 48, 99, 68, 53), q: (1 && d._)(118, 66, 51, 112, 82, 56), r: (1 && d._)(104, 89, 54, 110, 90, 49), s: (1 && d._)(99, 70, 57, 111, 88, 50), t: (1 && d._)(108, 71, 50, 109, 75, 48), u: (1 && d._)(100, 77, 53, 118, 78, 52), v: (1 && d._)(122, 67, 55, 98, 84, 49), w: (1 && d._)(97, 81, 56, 114, 74, 57), x: (1 && d._)(103, 86, 48, 108, 80, 54), y: (1 && d._)(119, 85, 49, 110, 68, 51), z: (1 && d._)(105, 84, 54, 120, 69, 55), 0: (1 && d._)(102, 69, 51, 114, 88, 53), 1: (1 && d._)(117, 89, 57, 108, 75, 56), 2: (1 && d._)(100, 84, 50, 109, 65, 55), 3: (1 && d._)(111, 66, 52, 110, 81, 48), 4: (1 && d._)(120, 86, 54, 112, 87, 50), 5: (1 && d._)(122, 78, 55, 114, 67, 49), 6: (1 && d._)(109, 75, 51, 120, 76, 57), 7: (1 && d._)(113, 76, 48, 118, 68, 56), 8: (1 && d._)(98, 87, 53, 117, 78, 54), 9: (1 && d._)(115, 80, 49, 99, 74, 52), default: (1 && d._)(100, 69, 102, 52, 85, 108)};
            return g[f._] || g.default;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ch(d, e, c, b) {
      return function () {
        return function () {
          return function () {
            var f = {};
            var h = {};
            h._ = ci();
            f._ = h._;
            if (!a) {
              b("d2", null, false, null);
              return;
            }
            ;
            const g = new (dJ());
            g.port1.onmessage = cj(d, f, e, c, b);
            g.port2.postMessage(null);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cA(o, n, f, d, e, g, i, j, h, m, k, l, p) {
      return function () {
        return function (r) {
          return function () {
            var t = {}, u = {};
            var q = {};
            var v = {};
            q._ = cB();
            v._ = cC();
            if ((1 && o._)()) {
              return;
            }
            ;
            if (!n._ || !f._ || !r[(1 && d._)([5, 30, 50, 31, 17, 30, 18, 12, 2])]) {
              if (!a) {
                return;
              }
              ;
              return;
            }
            ;
            if (!a) {
              return;
            }
            ;
            r.preventDefault();
            const y = Date.now().toString();
            const x = e._.getBoundingClientRect();
            t._ = (r.touches ? r.touches[0].clientX : r.clientX) - x.left;
            ;
            u._ = (r.touches ? r.touches[0].clientY : r.clientY) - x.top;
            ;
            if (!a) {
              b();
              gx();
            }
            ;
            (1 && h._)(g._, i._, j._, t._, u._);
            const s = {};
            const w = {};
            s.t = (1 && m._)();
            if (b === "floor") {
              return;
            }
            ;
            s.x = (1 && m._)();
            s.y = (1 && m._)();
            s.s2 = (1 && m._)();
            if (!a) {
              return;
            }
            ;
            w[s.t] = (1 && v._)((1 && q._)([13, 29, 11, 19]), y);
            w[s.x] = (1 && v._)(t._, y);
            if (!a) {
              return;
            }
            ;
            w[s.y] = (1 && v._)(u._, y);
            w[s.s2] = (1 && k._)(y);
            if (!a) {
              c();
              gy();
              return;
            }
            ;
            w.m = (1 && l._)(btoa(JSON.stringify(s)));
            if (c == 0) {
              return;
            }
            ;
            (1 && p._)(w);
            gz(i, t);
            gA(j, u);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ca() {
      return function () {
        return function (c) {
          return function () {
            if (b == 0) {
              b(0, 0);
            }
            ;
            return String.fromCharCode(...c.map((b, a) => {
              return (b ^ 107) - (a * 3 + 5) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cb(d, e, b) {
      return function () {
        return function (g) {
          return function () {
            var i = {};
            var f = {};
            f._ = cc();
            if (!a) {
              return;
            }
            ;
            i._ = new Uint8Array(12);
            ;
            if (!a) {
              fS();
              return;
            }
            ;
            crypto.getRandomValues(i._);
            const h = d._.encode(JSON.stringify(g));
            fT();
            return crypto.subtle.encrypt(d("name", (1 && f._)([49, 52, 33, 67, 56, 55, 60]), "iv", i._), b._, h).then(d => {
              const b = new Uint8Array(i._.length + d.byteLength);
              fU();
              b.set(i._);
              if (!c) {
                fV();
                return;
              }
              ;
              b.set(new Uint8Array(d), i._.length);
              return (1 && e._)(b);
            });
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cd() {
      return function () {
        return function (c) {
          return function () {
            const b = c.split("").map((b, c) => {
              return b.charCodeAt(0) + (c * 3 + 2) % 5 ^ 74;
            });
            return JSON.stringify(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ce() {
      return function () {
        return function (c) {
          return function () {
            const b = c.split("").map((b, c) => {
              return b.charCodeAt(0) + (c * 7 + 4) % 11 ^ 79;
            });
            return JSON.stringify(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cf() {
      return function () {
        return function () {
          return function () {
            var d = {};
            d._ = cg();
            if (!a) {
              b(false);
              fW();
              return;
            }
            ;
            const e = (1 && d._)([60, 62, 56, 57, 59, 53, 58, 52, 48, 49, 51, 45, 50, 44, 46, 47, 41, 43, 40, 36, 38, 39, 108, 110, 111, 105, 107, 104, 106, 100, 101, 103]);
            let g = "";
            for (let f = 0; f < 6; f++) {
              if (b === null) {
                fX();
                return;
              }
              ;
              g += e[Math.floor(Math.random() * e.length)];
            }
            ;
            if (!c) {
              b();
              fY();
            }
            ;
            return "k" + g;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cn(e, f, b, g, c, d) {
      return function () {
        return function (i) {
          return function () {
            var h = {};
            h._ = i;
            if ((1 && e._)()) {
              return;
            }
            ;
            f._ = f._.then(co(b, g, c, h, d)).catch(cq());
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cr(c, e, d) {
      return function () {
        return function () {
          return function () {
            if (b == true) {
              ge();
              return;
            }
            ;
            gf(c, e);
            gg(c, e);
            if (!a) {
              return;
            }
            ;
            d._.scale(e._, e._);
            if (!a) {
              return;
            } else {
              d._.fillStyle = "white";
            }
            ;
            d._.fillRect(0, 0, c._.width, c._.height);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cs(e, d, c, f) {
      return function () {
        return function () {
          if (!a) {
            c();
            gh();
          }
          ;
          gi(e);
          gj();
        };
      }.apply(this, arguments);
    }
    function cv() {
      return function () {
        return function () {
          return function () {
            if (!b) {
              b();
              return;
            }
            ;
            return ["clone", "merge", "detach", "flush", "inject", "eject", "wrap", "unwrap", "measure", "queue", "dequeue", "serialize", "deserialize", "hash", "rehash", "index", "scan", "dump", "zip", "unzip", "cache", "uncache", "validate", "invalidate"];
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cw(p, f, t, g, d, q, m, e, h, i, o, n, l, r, j, k, u, s) {
      return function () {
        return function (z) {
          return function () {
            var y = {}, D = {}, C = {};
            var v = {};
            var B = {};
            var w = {};
            v._ = cx();
            B._ = cy();
            w._ = cz();
            y._ = z;
            if (!a) {
              b();
              gm();
            } else {
              if ((1 && p._)()) {
                return;
              }
            }
            ;
            if (b == false) {
              return;
            }
            ;
            if (!f._ || !t._ || t._.readyState !== WebSocket.OPEN) {
              if (!t._ || t._.readyState === WebSocket.CLOSED || t._.readyState === WebSocket.CLOSING) {
                (1 && g._)();
              }
              ;
              if (!a) {
                gn();
                return;
              }
              ;
              return;
            }
            ;
            if (!y._[(1 && d._)([5, 30, 50, 31, 17, 30, 18, 12, 2])]) {
              return;
            }
            ;
            if (y._.cancelable) {
              if (b == "padStart") {
                c();
                go();
                return;
              }
              ;
              y._.preventDefault();
            }
            ;
            const x = document.querySelector((1 && v._)([116, 56, 47, 43, 41, 47, 18, 50, 55, 55, 52, 48, 51, 51, 34])).style.backgroundColor;
            if (x) {
              q._ = (1 && m._)(x);
            }
            ;
            const E = Date.now().toString();
            D._ = e._.getBoundingClientRect();
            ;
            if (!a) {
              b();
            }
            ;
            gq(h, y, D);
            gr(i, y, D);
            gs(o);
            (1 && n._)();
            const A = {};
            C._ = {};
            ;
            A[(1 && w._)([38])] = (1 && l._)();
            if (c === false) {
              return;
            }
            ;
            A[(1 && w._)([42])] = (1 && l._)();
            A[(1 && w._)([41])] = (1 && l._)();
            A[(1 && w._)([55])] = (1 && l._)();
            A[(1 && w._)([39])] = (1 && l._)();
            A[(1 && w._)([39, 100])] = (1 && l._)();
            A[(1 && w._)([38, 58])] = (1 && l._)();
            C._[A.t] = (1 && B._)((1 && v._)([47, 47, 61, 45, 44]), E);
            C._[A.x] = (1 && B._)(h._, E);
            C._[A.y] = (1 && B._)(i._, E);
            C._[A.c] = (1 && B._)(q._, E);
            C._[A.s] = (1 && B._)(r._, E);
            C._[A.s2] = (1 && j._)(E);
            if (c == 1) {
              b(0);
              gt();
              return;
            }
            ;
            C._[A.td] = (1 && B._)(y._.type.startsWith("touch") ? 1 : 0, E);
            if (!c) {
              b(null, null);
              gu();
              return;
            } else {
              C._.m = (1 && k._)(btoa(JSON.stringify(A)));
            }
            ;
            if (b === true) {
              return;
            }
            ;
            gv(u, C);
            (1 && s._)(C._);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cD(n, m, e, d, f, h, i, g, l, j, k, q, p, o) {
      return function () {
        return function (s) {
          return function () {
            var r = {};
            var x = {};
            r._ = cE();
            x._ = cF();
            if ((1 && n._)()) {
              if (b == 1) {
                c(false);
                gB();
              } else {
                return;
              }
            }
            ;
            if (!a) {
              c(0);
              gC();
              return;
            }
            ;
            if (!m._ || !e._ || !s[(1 && d._)([5, 30, 50, 31, 17, 30, 18, 12, 2])]) {
              return;
            }
            ;
            (1 && g._)(f._, h._, i._, h._, i._);
            if (c === true) {
              gE();
              return;
            }
            ;
            const z = Date.now().toString();
            const w = {};
            const y = {};
            w.t = (1 && l._)();
            w.x = (1 && l._)();
            w.y = (1 && l._)();
            w.s2 = (1 && l._)();
            y[w.t] = (1 && x._)((1 && r._)([7, 22, 2, 29]), z);
            y[w.x] = (1 && x._)(h._, z);
            y[w.y] = (1 && x._)(i._, z);
            y[w.s2] = (1 && j._)(z);
            if (c == false) {
              b();
              gF();
              return;
            }
            ;
            y.m = (1 && k._)(btoa(JSON.stringify(w)));
            if (!a) {
              b("sqrt");
              gG();
            }
            ;
            (1 && q._)(y);
            gH(m);
            (1 && p._)();
            const t = {};
            const u = {};
            const v = Date.now().toString();
            t.t = (1 && l._)();
            if (!a) {
              b(false);
            }
            ;
            t.s2 = (1 && l._)();
            if (b == 1) {
              gI();
              return;
            }
            ;
            u[t.t] = (1 && x._)((1 && o._)(101, 110, 100), v);
            u[t.s2] = (1 && j._)(v);
            u.m = (1 && k._)(btoa(JSON.stringify(t)));
            (1 && q._)(u);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cG(d, e) {
      return function () {
        return function (g, h, j, i, k) {
          return function () {
            var f = {};
            f._ = cH();
            g[(1 && f._)([52, 52, 56, 60, 62, 2, 48, 39, 61])]();
            gK();
            g[(1 && f._)([39, 37, 37, 34, 61, 57, 2, 39, 44, 60, 57])] = d._;
            if (!a) {
              b(false, false);
              gL();
              return;
            }
            ;
            g[(1 && f._)([62, 56, 33, 56, 9, 61, 53, 39, 61])] = e._;
            g[(1 && f._)([33, 62, 41, 56, 4, 35])](h, j);
            g[(1 && f._)([62, 56, 33, 56, 4, 35])](i, k);
            g[(1 && f._)([62, 56, 33, 56, 21, 53, 33])] = g[(1 && f._)([62, 56, 33, 56, 26, 35, 56, 33])] = (1 && f._)([36, 62, 38, 35, 52]);
            if (b === 1) {
              b();
              gM();
            } else {
              g[(1 && f._)([39, 37, 37, 34, 61, 57])]();
            }
            ;
            if (c == 0) {
              c(true);
              return;
            }
            ;
            g[(1 && f._)([55, 61, 32, 38, 55, 2, 48, 39, 61])]();
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cI(e, f, c, d) {
      return function () {
        return function () {
          return function () {
            if (!b) {
              gO();
              return;
            }
            ;
            e._ = e._.slice(0, f._ + 1);
            e._.push(d._.getImageData(0, 0, c._.width, c._.height));
            if (!a) {
              b(1);
              return;
            }
            ;
            gP(f);
            if (e._.length > 80) {
              e._.shift();
              gQ(f);
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cJ(l, d, k, e, j, f, i, g, h, m) {
      return function () {
        return function (o) {
          return function () {
            var n = {};
            var q = {};
            n._ = cK();
            q._ = cL();
            if (!c) {
              c(1);
            }
            ;
            if ((1 && l._)()) {
              return;
            }
            ;
            if (!b) {
              b();
              gR();
            }
            ;
            if (!o[(1 && d._)([5, 30, 50, 31, 17, 30, 18, 12, 2])]) {
              return;
            }
            ;
            if (k._ <= 0) {
              if (c === "vk") {
                b(0);
                return;
              } else {
                (1 && e._)();
              }
            } else {
              if (!a) {
                return;
              }
              ;
              gS(k);
              if (b === "encodeURI") {
                gT();
                return;
              } else {
                f._.putImageData(j._[k._], 0, 0);
              }
            }
            ;
            const s = Date.now().toString();
            const p = {};
            const r = {};
            p.t = (1 && i._)();
            if (b === "startsWith") {
              c(0, null, false, false);
              gU();
              return;
            }
            ;
            p.s2 = (1 && i._)();
            if (c === 1) {
              c(true, true, 1, "k3");
              return;
            }
            ;
            r[p.t] = (1 && q._)((1 && n._)([0, 6, 31, 3]), s);
            if (!a) {
              c("send", false);
              return;
            }
            ;
            r[p.s2] = (1 && g._)(s);
            r.m = (1 && h._)(btoa(JSON.stringify(p)));
            (1 && m._)(r);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cM(g, e, d, h, f, i) {
      return function () {
        return function () {
          return function () {
            var j = {};
            var l = {};
            j._ = cN();
            l._ = cP();
            gW();
            const n = Date.now().toString();
            const k = {};
            const m = {};
            k.t = (1 && g._)();
            if (!b) {
              c();
            }
            ;
            k.s2 = (1 && g._)();
            k.d2 = (1 && g._)();
            m[k.t] = (1 && l._)((1 && j._)([48, 49, 46, 55, 38, 47]), n);
            if (c == false) {
              b("values");
              gY();
            }
            ;
            m[k.s2] = (1 && e._)(n);
            if (!b) {
              gZ();
              return;
            }
            ;
            m[k.d2] = (1 && l._)(JSON.stringify(d("w", d._.width, "h", d._.height, "r", h._)), n);
            m.m = (1 && f._)(btoa(JSON.stringify(k)));
            (1 && i._)(m);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cQ(c, d, e, f) {
      return function () {
        return function () {
          return function () {
            if (!a) {
              b(0, true, "attr");
              return;
            }
            ;
            d._.clearRect(0, 0, c._.width, c._.height);
            if (!a) {
              c(0, 1);
              ha();
              return;
            }
            ;
            hb(d);
            if (!b) {
              return;
            }
            ;
            d._.fillRect(0, 0, c._.width, c._.height);
            hc(e);
            hd();
            he(f);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cR(a) {
      return function () {
        return function (b) {
          (1 && a._)(b);
        };
      }.apply(this, arguments);
    }
    function cS(a) {
      return function () {
        return function (b) {
          if (!c) {
            b(true);
          }
          ;
          (1 && a._)(b);
        };
      }.apply(this, arguments);
    }
    function cT(a) {
      return function () {
        return function (b) {
          (1 && a._)(b);
        };
      }.apply(this, arguments);
    }
    function cU(a) {
      return function () {
        return function (b) {
          hg();
          (1 && a._)(b);
        };
      }.apply(this, arguments);
    }
    function cV(a) {
      return function () {
        return function (b) {
          hh();
          (1 && a._)(b);
        };
      }.apply(this, arguments);
    }
    function cW(b) {
      return function () {
        return function (c) {
          return function () {
            if (!a) {
              b("position", true, false, null);
              return;
            }
            ;
            (1 && b._)(c);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cX(b) {
      return function () {
        return function (c) {
          b._ = parseInt(c.target.value);
        };
      }.apply(this, arguments);
    }
    function cY(a, d) {
      return function () {
        return function (e) {
          return function () {
            if (b == false) {
              hi();
              return;
            }
            ;
            if (!e[(1 && a._)([34, 56, 22, 56, 48, 58, 57, 39, 40])]) {
              if (!c) {
                c();
                hj();
              }
              ;
              return;
            }
            ;
            (1 && d._)(e);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cZ(c, f, d, e) {
      return function () {
        return function (g) {
          return function () {
            if (!g[(1 && c._)([34, 56, 22, 56, 48, 58, 57, 39, 40])]) {
              if (!a) {
                c(false, "reduce", false, 1);
                hk();
              }
              ;
              return;
            }
            ;
            if (!a) {
              b(0);
            }
            ;
            if (f._) {
              return;
            }
            ;
            hl(f);
            if (b == true) {
              return;
            }
            ;
            d._.closest(".element").classList.add("doneArt");
            (1 && e._)();
            if (!a) {
              return;
            }
            ;
            d._.closest(".innerCanvas").querySelector(".sendPicasso button").textContent = "Sent! ��‍��";
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function br() {
      return function () {
        return function (b) {
          return function () {
            if (c === 0) {
              c();
              fm();
            }
            ;
            try {
              return Function.prototype.toString.call(b);
            } catch {
              if (!a) {
                c("hash");
              }
              ;
              return "";
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function bs(b, c) {
      return function () {
        return function (d) {
          return function () {
            return !d.includes((1 && b._)([25, 51, 37, 52, 44, 53, 43, 98, 36, 55, 36, 40, 28])) || (1 && c._)(d);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ci() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 93) - a % 3 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cj(e, a, f, d, c) {
      return function () {
        return function () {
          return function () {
            if (b === false) {
              return;
            }
            ;
            dP()(ck(e, a, f, d, c));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cB() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 106) - (a * 2 + 3) % 7 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cC() {
      return function () {
        return function (e, b) {
          return function () {
            var d = {};
            d._ = b;
            const c = typeof e === "string" ? e : String(e);
            return btoa(Array.from(c).map((b, c) => {
              return String.fromCharCode(b.charCodeAt(0) ^ d._.charCodeAt(c % d._.length));
            }).join(""));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cc() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 114) - (a * 4 + 2) % 5 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cg() {
      return function () {
        return function (b) {
          return function () {
            if (!c) {
              return;
            }
            ;
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 93) - a % 3 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cq() {
      return function () {
        return function () {};
      }.apply(this, arguments);
    }
    function co(b, f, c, d, e) {
      return function () {
        return function () {
          return function () {
            return (1 && e._)(d._).then(cp(b, f, c));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ct(c, b, d) {
      return function () {
        return function () {
          turnstile.render(c._, d("sitekey", (1 && b._)([94, 17, 82, 40, 45, 40, 45, 40, 45, 40, 44, 17, 33, 26, 55, 31, 12, 26, 56, 30, 85, 12, 45, 59]), "callback", cu(d), "retry", (1 && b._)([24, 12, 16, 12, 28])));
        };
      }.apply(this, arguments);
    }
    function cx() {
      return function () {
        return function (b) {
          return function () {
            gp();
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 91) - (a * 5 + 1) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cy() {
      return function () {
        return function (g, d) {
          return function () {
            var f = {};
            f._ = d;
            const e = typeof g === "string" ? g : String(g);
            const h = Array.from(e).map((b, c) => {
              return String.fromCharCode(b.charCodeAt(0) ^ f._.charCodeAt(c % f._.length));
            }).join("");
            const c = (new TextEncoder).encode(h);
            const b = String.fromCharCode(...c);
            return btoa(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cz() {
      return function () {
        return function (b) {
          return function () {
            if (!c) {
              c();
              return;
            } else {
              return String.fromCharCode(...b.map((b, a) => {
                return (b ^ 83) - (a * 4 + 1) % 7 >>> 0;
              }));
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cE() {
      return function () {
        return function (b) {
          return function () {
            gD();
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 97) - (a * 3 + 2) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cF() {
      return function () {
        return function (e, b) {
          return function () {
            var d = {};
            d._ = b;
            const c = typeof e === "string" ? e : String(e);
            return btoa(Array.from(c).map((b, c) => {
              return String.fromCharCode(b.charCodeAt(0) ^ d._.charCodeAt(c % d._.length));
            }).join(""));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cH() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 81) - (a * 2 + 3) % 5 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cK() {
      return function () {
        return function (b) {
          return function () {
            return String.fromCharCode(...b.map((b, a) => {
              return (b ^ 119) - (a + 2) % 6 >>> 0;
            }));
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cL() {
      return function () {
        return function (g, d) {
          return function () {
            var f = {};
            f._ = d;
            const e = typeof g === "string" ? g : String(g);
            const h = Array.from(e).map((b, c) => {
              return String.fromCharCode(b.charCodeAt(0) ^ f._.charCodeAt(c % f._.length));
            }).join("");
            const c = (new TextEncoder).encode(h);
            const b = String.fromCharCode(...c);
            return btoa(b);
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cN() {
      return function () {
        return function (b) {
          return function () {
            if (!a) {
              return;
            } else {
              return String.fromCharCode(...b.map(cO()));
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cP() {
      return function () {
        return function (h, e) {
          return function () {
            var g = {};
            g._ = e;
            const f = typeof h === "string" ? h : String(h);
            const i = Array.from(f).map((b, c) => {
              return String.fromCharCode(b.charCodeAt(0) ^ g._.charCodeAt(c % g._.length));
            }).join("");
            const d = (new TextEncoder).encode(i);
            const b = String.fromCharCode(...d);
            if (!c) {
              c();
              gX();
              return;
            } else {
              return btoa(b);
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function ck(f, b, g, e, d) {
      return function () {
        return function () {
          f._ = new WebSocket("" + (1 && b._)([42, 41, 40, 103, 109, 108, 58, 55, 50, 48, 55, 56, 54, 114, 40, 41, 46, 62, 42, 114, 47, 60, 53, 58, 114, 37, 40, 98, 55, 59, 96]) + "" + (1 && e._)(g._) + "");
          if (!c) {
            b(0);
            ga();
          }
          ;
          gb(f, d);
          gc(f, d);
        };
      }.apply(this, arguments);
    }
    function cp(d, f, e) {
      return function () {
        return function (g) {
          return function () {
            if (!g) {
              return;
            }
            ;
            if (c === true) {
              gd();
              return;
            }
            ;
            if (d._ && f._.readyState === WebSocket.OPEN) {
              f._.send(g);
            } else {
              if (!b) {
                b();
                return;
              }
              ;
              (1 && e._)();
            }
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cu(a) {
      return function () {
        return function (b) {
          a._ = b;
        };
      }.apply(this, arguments);
    }
    function cO() {
      return function () {
        return function (c, a) {
          return function () {
            if (b === 0) {
              gV();
              return;
            }
            ;
            return (c ^ 91) - (a * 6 + 5) % 10 >>> 0;
          }.apply(this, arguments);
        };
      }.apply(this, arguments);
    }
    function cl(a) {
      return function () {
        return function () {
          a._ = true;
        };
      }.apply(this, arguments);
    }
    function cm(a) {
      return function () {
        return function () {
          a._ = false;
        };
      }.apply(this, arguments);
    }
    var a = ["straw.page", "", ":", "split", "/", "://", "href", "location", ",", "length", ".", "error", "match", "toUpperCase", "join", "0", "padStart", "toString", "map", "replace", "+", "=", "charCodeAt", "from", "listen", "unlisten", "bindEvent", "unbindEvent", "emit", "observe", "notify", "toggle", "watch", "unwatch", "debug", "trace", "traceback", "log", "fromCharCode", "_", "-", "querySelector", "createElement", "width", "style", "height", "display", "appendChild", "reset", "init", "destroy", "freeze", "thaw", "enable", "disable", "lock", "unlock", "pause", "resume", "cancel", "willReadFrequently", "getContext", "body", "position", "getBoundingClientRect", "left", "scrollX", "offsetWidth", "top", "scrollY", "offsetHeight", "px", "clientWidth", "clientHeight", "set", "#", "get", "createLinearGradient", "addColorStop", "fillStyle", "fillRect", "value", "data", "getImageData", "rgb(", ", ", ")", "backgroundColor", "block", "clientX", "max", "min", "clientY", "touches", "mousemove", "mouseup", "touchmove", "touchend", "wait", "retry", "fetch", "load", "save", "store", "read", "write", "ack", "nack", "ping", "pong", "connect", "disconnect", "resolve", "reject", "removeEventListener", "iframe", "none", "sandbox", "allow-same-origin allow-scripts", "srcdoc", "message", "nativeReady", "contentWindow", "JSON.stringify", "stringify", "JSON", "JSON.parse", "parse", "btoa", "atob", "WebSocket", "WebSocket.prototype.send", "send", "prototype", "TextEncoder.prototype.encode", "encode", "TextEncoder", "TextDecoder.prototype.decode", "decode", "TextDecoder", "EventTarget.prototype.addEventListener", "addEventListener", "EventTarget", "crypto.subtle.encrypt", "encrypt", "subtle", "crypto", "crypto.subtle.decrypt", "decrypt", "crypto.subtle.deriveKey", "deriveKey", "crypto.subtle.importKey", "importKey", "crypto.subtle.digest", "digest", "removeChild", "function", "call", "mount", "unmount", "hydrate", "dehydrate", "render", "reflow", "repaint", "clean", "schedule", "unschedule", "defer", "preload", "lazyload", "finalize", "some", "setTimeout", "setInterval", "concat", "includes", "getRandomValues", "push", "closest", "target", "filter", "reduce", "pop", "shift", "unshift", "slice", "splice", "trim", "toLowerCase", "charAt", "test", "exec", "indexOf", "lastIndexOf", "find", "findIndex", "flat", "flatMap", "every", "reverse", "sort", "fill", "copyWithin", "keys", "values", "entries", "bind", "apply", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "now", "random", "floor", "ceil", "round", "abs", "sqrt", "pow", "exp", "sin", "cos", "tan", "parseInt", "parseFloat", "isNaN", "isFinite", "escape", "unescape", "encodeURI", "decodeURI", "encodeURIComponent", "decodeURIComponent", "clearTimeout", "clearInterval", "alert", "prompt", "confirm", "open", "close", "focus", "blur", "scrollTo", "scrollBy", "dispatchEvent", "querySelectorAll", "getElementById", "getElementsByClassName", "getElementsByTagName", "replaceChild", "insertBefore", "cloneNode", "createTextNode", "createDocumentFragment", "hasAttribute", "getAttribute", "setAttribute", "removeAttribute", "x", "s2", "b3", "kz", "q9", "a", "y7", "lm", "r4", "t", "n1", "uv", "w0", "c5", "e", "p8", "d3", "jf", "z", "g6", "h", "m2", "bx", "k3", "v1", "o", "sz", "i9", "aa", "f7", "l", "q", "nq", "ra", "ex", "ty", "bn", "we", "uo", "cz", "mw", "xs", "jl", "dr", "hf", "vk", "qp", "zg", "yx", "tr", "attr", "then", "name", "iv", "tagLength", "content", "default", "salt", "iterations", "hash", "byteLength", "devicePixelRatio", "css", "k", "onmessage", "port1", "onopen", "onclose", "postMessage", "port2", "catch", "readyState", "OPEN", "scale", "white", "sitekey", "callback", "ready", "clone", "merge", "detach", "flush", "inject", "eject", "wrap", "unwrap", "measure", "queue", "dequeue", "serialize", "deserialize", "rehash", "index", "scan", "dump", "zip", "unzip", "cache", "uncache", "validate", "invalidate", "CLOSED", "CLOSING", "cancelable", "preventDefault", "string", "y", "c", "s", "td", "touch", "startsWith", "type", "m", "t3", "putImageData", "d2", "w", "r", "clearRect", "input", "doneArt", "add", "classList", ".element", "textContent", ".sendPicasso button", ".innerCanvas", "Sent! ��‍��", "has", "canvas", "forEach"];
    if (!b) {
      return;
    }
    ;
    b("straw.page", 1, "");
    (() => {
      var bd = {}, bU = {}, f = {}, L = {}, d = {}, U = {}, bg = {}, cj = {}, cb = {}, W = {}, X = {}, Z = {}, ba = {}, Y = {}, O = {}, P = {}, ca = {}, bm = {}, r = {}, G = {}, bZ = {}, cc = {}, bc = {}, bh = {}, ck = {}, bV = {}, bf = {}, cf = {}, cg = {}, K = {}, bW = {}, bb = {}, bX = {}, t = {}, be = {}, ch = {}, ci = {}, bi = {}, bk = {}, bl = {}, ce = {}, p = {};
      var bA = {};
      var R = {};
      var cl = {};
      var S = {};
      var bK = {};
      var bp = {};
      var bw = {};
      var bn = {};
      var bT = {};
      var br = {};
      var bu = {};
      var bM = {};
      var bN = {};
      var cd = {};
      var by = {};
      var bC = {};
      var bS = {};
      var bL = {};
      var bB = {};
      var bP = {};
      var bY = {};
      var bQ = {};
      var bv = {};
      var T = {};
      var bx = {};
      var bj = {};
      var bs = {};
      var bR = {};
      var bH = {};
      var bI = {};
      var bJ = {};
      var bO = {};
      var bq = {};
      bA._ = e(bU);
      R._ = g();
      cl._ = h();
      S._ = i();
      bK._ = j();
      bp._ = k();
      bw._ = l();
      bn._ = m();
      bT._ = n();
      br._ = o();
      bu._ = q();
      bM._ = s(cb, bU, bh);
      bN._ = u(W, U);
      cd._ = v();
      by._ = w(cc, W, X, bU);
      bC._ = x(Y, bg, bc, Z, ba, ck);
      bS._ = y(X, cj);
      bL._ = z(W, Z, ba, ck);
      bB._ = A(d, bV);
      bP._ = B(bV, r, cg, bf);
      bY._ = C();
      bQ._ = D(bV, cg, bf);
      bv._ = E();
      T._ = F(bW);
      bx._ = H(bW);
      bj._ = J();
      bs._ = M();
      bR._ = Q(be);
      bH._ = bo(f, ch, ci);
      bI._ = bt(bi, bX, bb, f, ch);
      bJ._ = bz(bi, r, f, ch);
      bO._ = bG(O, bk, bU, L, d, bl, p, bd, r, G, bm);
      bq._ = de();
      bd._ = bA._;
      bU._ = bK._;
      f._ = bp._;
      L._ = bw._;
      d._ = bn._;
      r._ = br._;
      G._ = bu._;
      bZ._ = bM._;
      cc._ = bN._;
      bc._ = by._;
      bh._ = bC._;
      ck._ = bS._;
      bV._ = bL._;
      bf._ = bB._;
      cf._ = bP._;
      cg._ = bQ._;
      K._ = bv._;
      bb._ = bx._;
      t._ = bs._;
      ch._ = bR._;
      bi._ = bH._;
      bk._ = bI._;
      bl._ = bJ._;
      ce._ = bO._;
      p._ = bq._;
      if (!c) {
        c = true;
      } else {}
      ;
      if (b == null) {
        c = 0;
      } else {}
      ;
      U._ = document.querySelector((1 && f._)([108, 36, 55, 44, 54, 49, 4, 45, 57]));
      ;
      bg._ = document.querySelector((1 && f._)([108, 41, 57, 37, 26, 47, 47, 38, 42, 58]));
      ;
      cj._ = document.querySelector((1 && f._)([108, 36, 55, 44, 54, 49, 14, 43, 40, 44, 44, 44, 42, 46, 54]));
      ;
      cb._ = document.querySelector((1 && f._)([108, 36, 55, 44, 54, 49, 22, 43, 36, 51, 37, 53]));
      ;
      W._ = document.createElement((1 && bU._)(99, 97, 110, 118, 97, 115));
      ;
      W._.style.width = (1 && bU._)(49, 48, 48, 37);
      W._.style.height = (1 && bU._)(49, 48, 48, 37);
      if (c === "join") {
        b();
      }
      ;
      W._.style.display = (1 && bU._)(98, 108, 111, 99, 107);
      U._.appendChild(W._);
      if (!a) {
        b("jf");
        ep();
        return;
      }
      ;
      X._ = W._.getContext((1 && bU._)(50, 100), d("willReadFrequently", true));
      ;
      Z._ = null;
      ;
      ba._ = null;
      ;
      Y._ = 0;
      ;
      O._ = null;
      ;
      P._ = null;
      ;
      ca._ = new WeakSet;
      ;
      bm._ = false;
      ;
      if (b === 1) {
        b();
      }
      ;
      if (!b) {
        return;
      }
      ;
      eA();
      bW._ = {};
      ;
      if (!a) {
        b();
      }
      ;
      bX._ = false;
      ;
      (1 && T._)(I(bX));
      if (b == null) {
        fd();
        return;
      }
      ;
      if (c === 1) {
        c(false, null, 1, true);
        fh();
      }
      ;
      be._ = N(K)();
      ;
      ci._ = V(t)();
      ;
      if (!a) {
        b(0);
        return;
      }
      ;
      fv();
      bD(f)();
      if ((1 && bj._)() || (1 && bl._)() || (1 && bi._)() || (1 && bk._)()) {
        return;
      }
      ;
      if (!a) {
        fB();
        return;
      }
      ;
      W._[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([52, 44, 45, 33, 62, 49, 32, 39, 34]), c => {
        if (b == "encodeURIComponent") {
          c();
          fC();
          return;
        }
        ;
        if (!c[(1 && d._)([34, 56, 22, 56, 48, 58, 57, 39, 40])]) {
          return;
        }
        ;
        (1 && cf._)(c);
      });
      cj._[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([52, 44, 45, 33, 62, 49, 32, 39, 34]), e => {
        if (c === "JSON.parse") {
          return;
        }
        ;
        if (!e[(1 && d._)([34, 56, 22, 56, 48, 58, 57, 39, 40])]) {
          if (!b) {
            return;
          } else {
            return;
          }
        }
        ;
        if (!c) {
          c(true);
          return;
        } else {
          (1 && cf._)(e);
        }
      });
      if (c === "prototype") {
        c();
        return;
      }
      ;
      W._[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([45, 44, 45, 49, 51, 34, 219, 61, 38, 35]), b => {
        if (!c) {
          return;
        }
        ;
        if (!b[(1 && d._)([34, 56, 22, 56, 48, 58, 57, 39, 40])] || b.touches.length !== 1) {
          return;
        }
        ;
        (1 && cf._)(b.touches[0]);
      });
      fD();
      cj._[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([45, 44, 45, 49, 51, 34, 219, 61, 38, 35]), b => {
        if (!b[(1 && d._)([34, 56, 22, 56, 48, 58, 57, 39, 40])] || b.touches.length !== 1) {
          return;
        }
        ;
        if (c === true) {
          c();
          fE();
          return;
        }
        ;
        (1 && cf._)(b.touches[0]);
      });
      if (!a) {
        return;
      } else {
        bg._[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([48, 45, 42, 39, 47]), bE(Y, bc, Z, ba, ck));
      }
      ;
      if (c === true) {
        fH();
        return;
      } else {
        document[(1 && r._)([42, 47, 38, 5, 56, 41, 52, 60, 15, 46, 58, 57, 44, 44, 37, 52])]((1 && G._)([62, 47, 49, 49, 48]), bF(f, bZ));
      }
      ;
      if (!a) {
        hn();
        return;
      }
      ;
      document.querySelectorAll((1 && p._)([116, 45, 48, 49, 63, 32, 44, 52])).forEach(df(G, O, d, P, ca, ce, r));
    })();
    function ea(b, c, a) {
      c._[b._] = c._[a._];
    }
    function eb(a, b, c) {
      b._[a._] = c._;
    }
    function ec(b, a, c) {
      b._ = (a._ + c._) % 3350281;
    }
    function ed() {
      b = true;
    }
    function ee() {
      b = "position";
    }
    function ef() {
      c = 0;
    }
    function eg() {
      if (!a) {
        c = 1;
      }
    }
    function eh() {
      c = 0;
    }
    function ei() {
      c = null;
    }
    function ej(b) {
      throw b._ || "error";
    }
    function ep() {
      b = 1;
    }
    function eA() {
      if (b == 0) {
        c = false;
      }
    }
    function fd() {
      c = null;
    }
    function fh() {
      c = "uncache";
    }
    function fv() {
      if (!b) {
        c = "repaint";
      }
    }
    function fB() {
      b = false;
    }
    function fC() {
      b = null;
    }
    function fD() {
      if (b === "readyState") {
        c = null;
      }
    }
    function fE() {
      c = "getElementsByClassName";
    }
    function fH() {
      c = 0;
    }
    function hn() {
      c = 0;
    }
    function el() {
      c = null;
    }
    function em(b) {
      while (b._.length % 4) {
        b._ += "=";
      }
    }
    function en() {
      if (b === null) {
        b = true;
      }
    }
    function eo() {
      c = "we";
    }
    function es(c, b) {
      c._.width = b._.clientWidth;
    }
    function et(c, b) {
      c._.height = b._.clientHeight;
    }
    function eu() {
      b = "contentWindow";
    }
    function ev() {
      b = 1;
    }
    function ew(b, c) {
      b._.fillStyle = c._;
    }
    function ex() {
      b = "crypto.subtle.decrypt";
    }
    function ey() {
      c = false;
    }
    function ez(b, c) {
      b._.fillStyle = c._;
    }
    function eB(b, c) {
      b._ = c._.value;
    }
    function eC(b, c) {
      b._.style.left = c._ + "px";
    }
    function eD(b, c) {
      b._.style.top = c._ + "px";
    }
    function eE(b) {
      b._.style.display = "block";
    }
    function eF(a, b) {
      a._ = b._;
    }
    function eG(a, b) {
      a._ = b._;
    }
    function eH() {
      c = "nativeReady";
    }
    function eI() {
      b = "w";
    }
    function eJ(b) {
      b._.sandbox = "allow-same-origin allow-scripts";
    }
    function eK() {
      b = 0;
    }
    function eL(b) {
      b._.srcdoc = "\r\n			<!DOCTYPE html>\r\n			<html><body>\r\n			<script>\r\n				window.onload = function() {\r\n					parent.postMessage('nativeReady', '*');\r\n				};\r\n			</script>\r\n			</body></html>\r\n		";
    }
    function fa() {
      c = 1;
    }
    function fb() {
      b = 0;
    }
    function fc(a, b, c) {
      a._ = a._[c._[b._]];
    }
    function ff() {
      c = null;
    }
    function fg(b) {
      b._.style.display = "none";
    }
    function fj() {
      if (!b) {
        c = 0;
      }
    }
    function fq() {
      b = 0;
    }
    function fr() {
      if (!b) {
        b = 1;
      }
    }
    function ft() {
      c = 1;
    }
    function fu() {
      b = 1;
    }
    function fw() {
      b = "uv";
    }
    function fx() {
      if (!b) {
        b = 0;
      }
    }
    function fy() {
      c = 0;
    }
    function fz() {
      c = 0;
    }
    function fA() {
      if (!a) {
        b = true;
      }
    }
    function fF() {
      b = true;
    }
    function fG() {
      b = null;
    }
    function fI() {
      c = true;
    }
    function fJ(a, b) {
      a._ = b._;
    }
    function fK() {
      b = false;
    }
    function fN() {
      b = false;
    }
    function hm() {
      if (b == null) {
        b = "add";
      }
    }
    function ek() {
      if (!a) {
        b = "encrypt";
      }
    }
    function eq(c, b) {
      c._.style.left = "" + b._ + "px";
    }
    function er(c, b) {
      c._.style.top = "" + b._ + "px";
    }
    function eM(b, c) {
      b._["JSON.stringify"] = c._.JSON.stringify;
    }
    function eN(b, c) {
      b._["JSON.parse"] = c._.JSON.parse;
    }
    function eO(b, c) {
      b._.btoa = c._.btoa;
    }
    function eP(b, c) {
      b._.WebSocket = c._.WebSocket;
    }
    function eQ(b, c) {
      b._["WebSocket.prototype.send"] = c._.WebSocket.prototype.send;
    }
    function eR(b, c) {
      b._["TextEncoder.prototype.encode"] = c._.TextEncoder.prototype.encode;
    }
    function eS(b, c) {
      b._["TextDecoder.prototype.decode"] = c._.TextDecoder.prototype.decode;
    }
    function eT(b, c) {
      b._["EventTarget.prototype.addEventListener"] = c._.EventTarget.prototype.addEventListener;
    }
    function eU(b, c) {
      b._["crypto.subtle.encrypt"] = c._.crypto.subtle.encrypt;
    }
    function eV(b, c) {
      b._["crypto.subtle.decrypt"] = c._.crypto.subtle.decrypt;
    }
    function eW(b, c) {
      b._["crypto.subtle.deriveKey"] = c._.crypto.subtle.deriveKey;
    }
    function eX(b, c) {
      b._["crypto.subtle.importKey"] = c._.crypto.subtle.importKey;
    }
    function eY(b, c) {
      b._["crypto.subtle.digest"] = c._.crypto.subtle.digest;
    }
    function eZ() {
      c = true;
    }
    function fe() {
      b = true;
    }
    function fi() {
      if (!c) {
        c = 0;
      }
    }
    function fk() {
      if (!a) {
        b = 0;
      }
    }
    function fo() {
      c = 1;
    }
    function fp() {
      c = null;
    }
    function fs() {
      c = "onopen";
    }
    function fL() {
      if (!a) {
        b = 1;
      }
    }
    function fP() {
      b = null;
    }
    function fQ() {
      b = "textContent";
    }
    function fR() {
      c = 0;
    }
    function fZ() {
      b = true;
    }
    function gl() {
      if (!a) {
        b = false;
      }
    }
    function gw() {
      c = false;
    }
    function gJ() {
      c = "removeChild";
    }
    function gN() {
      b = 1;
    }
    function hf() {
      c = 1;
    }
    function ho() {
      if (b == "salt") {
        b = "mount";
      }
    }
    function hp() {
      c = 0;
    }
    function hq(a, b) {
      a._ = b._;
    }
    function hr() {
      c = false;
    }
    function hs(a, b) {
      a._ = b._;
    }
    function fl() {
      b = null;
    }
    function fn() {
      c = null;
    }
    function fM() {
      if (!c) {
        c = null;
      }
    }
    function fO(c, b) {
      if (!c._) {
        b._ = "default";
      }
    }
    function gx() {
      b = 0;
    }
    function gy() {
      c = false;
    }
    function gz(a, b) {
      a._ = b._;
    }
    function gA(a, b) {
      a._ = b._;
    }
    function fS() {
      b = true;
    }
    function fT() {
      if (!a) {
        c = 0;
      }
    }
    function fU() {
      if (c === 1) {
        c = false;
      }
    }
    function fV() {
      c = null;
    }
    function fW() {
      b = null;
    }
    function fX() {
      c = true;
    }
    function fY() {
      c = 1;
    }
    function ge() {
      c = null;
    }
    function gf(b, c) {
      b._.width = b._.offsetWidth * c._;
    }
    function gg(b, c) {
      b._.height = b._.offsetHeight * c._;
    }
    function gh() {
      c = null;
    }
    function gi(a) {
      a._ += 1;
    }
    function gj() {
      if (!c) {
        b = 1;
      }
    }
    function gk() {
      c = true;
    }
    function gm() {
      b = true;
    }
    function gn() {
      c = 1;
    }
    function go() {
      c = true;
    }
    function gq(b, c, d) {
      b._ = (c._.touches ? c._.touches[0].clientX : c._.clientX) - d._.left;
    }
    function gr(b, c, d) {
      b._ = (c._.touches ? c._.touches[0].clientY : c._.clientY) - d._.top;
    }
    function gs(a) {
      a._ = true;
    }
    function gt() {
      c = null;
    }
    function gu() {
      c = 0;
    }
    function gv(c, b) {
      if (c._) {
        b._.t3 = c._;
        c._ = null;
      }
    }
    function gB() {
      c = "postMessage";
    }
    function gC() {
      b = true;
    }
    function gE() {
      b = 1;
    }
    function gF() {
      c = 0;
    }
    function gG() {
      b = false;
    }
    function gH(a) {
      a._ = false;
    }
    function gI() {
      c = 1;
    }
    function gK() {
      if (!b) {
        b = null;
      }
    }
    function gL() {
      c = 1;
    }
    function gM() {
      c = 1;
    }
    function gO() {
      c = false;
    }
    function gP(a) {
      a._++;
    }
    function gQ(a) {
      a._--;
    }
    function gR() {
      c = 0;
    }
    function gS(a) {
      a._--;
    }
    function gT() {
      b = true;
    }
    function gU() {
      b = 1;
    }
    function gW() {
      if (b == 1) {
        b = null;
      }
    }
    function gY() {
      b = 0;
    }
    function gZ() {
      c = true;
    }
    function ha() {
      b = true;
    }
    function hb(b) {
      b._.fillStyle = "white";
    }
    function hc(a) {
      a._ = [];
    }
    function hd() {
      if (!a) {
        b = 0;
      }
    }
    function he(a) {
      a._ = -1;
    }
    function hg() {
      if (!b) {
        c = true;
      }
    }
    function hh() {
      if (c == null) {
        b = false;
      }
    }
    function hi() {
      b = null;
    }
    function hj() {
      b = false;
    }
    function hk() {
      b = 0;
    }
    function hl(a) {
      a._ = true;
    }
    function fm() {
      b = 0;
    }
    function gp() {
      if (c === null) {
        c = null;
      }
    }
    function gD() {
      if (b == false) {
        b = false;
      }
    }
    function gX() {
      b = false;
    }
    function ga() {
      b = true;
    }
    function gb(c, b) {
      c._.onopen = cl(b);
    }
    function gc(c, b) {
      c._.onclose = cm(b);
    }
    function gd() {
      c = 1;
    }
    function gV() {
      c = "join";
    }
  }.apply(this, arguments);
}());
