(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [166], {
        90534: function() {
            (function(n, e, t) {
                function i(n, e) {
                    return typeof n === e
                }

                function r(n) {
                    return n.replace(/([a-z])-([a-z])/g, (function(n, e, t) {
                        return e + t.toUpperCase()
                    })).replace(/^-/, "")
                }

                function o() {
                    return "function" != typeof e.createElement ? e.createElement(arguments[0]) : v ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
                }

                function a(n, e) {
                    return !!~("" + n).indexOf(e)
                }

                function l(n, e) {
                    return function() {
                        return n.apply(e, arguments)
                    }
                }

                function c(n) {
                    return n.replace(/([A-Z])/g, (function(n, e) {
                        return "-" + e.toLowerCase()
                    })).replace(/^ms-/, "-ms-")
                }

                function s(e, t, i) {
                    var r;
                    if ("getComputedStyle" in n) {
                        r = getComputedStyle.call(n, e, t);
                        var o = n.console;
                        if (null !== r) i && (r = r.getPropertyValue(i));
                        else if (o) {
                            o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                        }
                    } else r = !t && e.currentStyle && e.currentStyle[i];
                    return r
                }

                function d(n, t, i, r) {
                    var a, l, c, s, d = "modernizr",
                        p = o("div"),
                        u = function() {
                            var n = e.body;
                            return n || ((n = o(v ? "svg" : "body")).fake = !0), n
                        }();
                    if (parseInt(i, 10))
                        for (; i--;)(c = o("div")).id = r ? r[i] : d + (i + 1), p.appendChild(c);
                    return (a = o("style")).type = "text/css", a.id = "s" + d, (u.fake ? u : p).appendChild(a), u.appendChild(p), a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(e.createTextNode(n)), p.id = d, u.fake && (u.style.background = "", u.style.overflow = "hidden", s = b.style.overflow, b.style.overflow = "hidden", b.appendChild(u)), l = t(p, n), u.fake ? (u.parentNode.removeChild(u), b.style.overflow = s, b.offsetHeight) : p.parentNode.removeChild(p), !!l
                }

                function p(e, i) {
                    var r = e.length;
                    if ("CSS" in n && "supports" in n.CSS) {
                        for (; r--;)
                            if (n.CSS.supports(c(e[r]), i)) return !0;
                        return !1
                    }
                    if ("CSSSupportsRule" in n) {
                        for (var o = []; r--;) o.push("(" + c(e[r]) + ":" + i + ")");
                        return d("@supports (" + (o = o.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(n) {
                            return "absolute" == s(n, null, "position")
                        }))
                    }
                    return t
                }

                function u(n, e, l, c) {
                    function s() {
                        u && (delete C.style, delete C.modElem)
                    }
                    if (c = !i(c, "undefined") && c, !i(l, "undefined")) {
                        var d = p(n, l);
                        if (!i(d, "undefined")) return d
                    }
                    for (var u, h, g, f, x, b = ["modernizr", "tspan", "samp"]; !C.style && b.length;) u = !0, C.modElem = o(b.shift()), C.style = C.modElem.style;
                    for (g = n.length, h = 0; g > h; h++)
                        if (f = n[h], x = C.style[f], a(f, "-") && (f = r(f)), C.style[f] !== t) {
                            if (c || i(l, "undefined")) return s(), "pfx" != e || f;
                            try {
                                C.style[f] = l
                            } catch (m) {}
                            if (C.style[f] != x) return s(), "pfx" != e || f
                        }
                    return s(), !1
                }

                function h(n, e, t, r, o) {
                    var a = n.charAt(0).toUpperCase() + n.slice(1),
                        c = (n + " " + Z.join(a + " ") + a).split(" ");
                    return i(e, "string") || i(e, "undefined") ? u(c, e, r, o) : function(n, e, t) {
                        var r;
                        for (var o in n)
                            if (n[o] in e) return !1 === t ? n[o] : i(r = e[n[o]], "function") ? l(r, t || e) : r;
                        return !1
                    }(c = (n + " " + P.join(a + " ") + a).split(" "), e, t)
                }
                var g = [],
                    m = {
                        _version: "3.6.0",
                        _config: {
                            classPrefix: "",
                            enableClasses: !0,
                            enableJSClass: !0,
                            usePrefixes: !0
                        },
                        _q: [],
                        on: function(n, e) {
                            var t = this;
                            setTimeout((function() {
                                e(t[n])
                            }), 0)
                        },
                        addTest: function(n, e, t) {
                            g.push({
                                name: n,
                                fn: e,
                                options: t
                            })
                        },
                        addAsyncTest: function(n) {
                            g.push({
                                name: null,
                                fn: n
                            })
                        }
                    },
                    f = function() {};
                f.prototype = m, f = new f;
                var x = [],
                    b = e.documentElement,
                    v = "svg" === b.nodeName.toLowerCase();
                f.addTest("canvas", (function() {
                    var n = o("canvas");
                    return !(!n.getContext || !n.getContext("2d"))
                }));
                var w = o("canvas");
                f.addTest("todataurljpeg", (function() {
                    return !!f.canvas && 0 === w.toDataURL("image/jpeg").indexOf("data:image/jpeg")
                })), f.addTest("todataurlpng", (function() {
                    return !!f.canvas && 0 === w.toDataURL("image/png").indexOf("data:image/png")
                })), f.addTest("todataurlwebp", (function() {
                    var n = !1;
                    try {
                        n = !!f.canvas && 0 === w.toDataURL("image/webp").indexOf("data:image/webp")
                    } catch (e) {}
                    return n
                }));
                var y = "Moz O ms Webkit",
                    Z = m._config.usePrefixes ? y.split(" ") : [];
                m._cssomPrefixes = Z;
                var k = function(e) {
                    var i, r = prefixes.length,
                        o = n.CSSRule;
                    if ("undefined" == typeof o) return t;
                    if (!e) return !1;
                    if ((i = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in o) return "@" + e;
                    for (var a = 0; r > a; a++) {
                        var l = prefixes[a];
                        if (l.toUpperCase() + "_" + i in o) return "@-" + l.toLowerCase() + "-" + e
                    }
                    return !1
                };
                m.atRule = k;
                var P = m._config.usePrefixes ? y.toLowerCase().split(" ") : [];
                m._domPrefixes = P;
                var O = {
                    elem: o("modernizr")
                };
                f._q.push((function() {
                    delete O.elem
                }));
                var C = {
                    style: O.elem.style
                };
                f._q.unshift((function() {
                    delete C.style
                })), m.testAllProps = h;
                var S = m.prefixed = function(n, e, t) {
                    return 0 === n.indexOf("@") ? k(n) : (-1 != n.indexOf("-") && (n = r(n)), e ? h(n, e, t) : h(n, "pfx"))
                };
                f.addTest("peerconnection", !!S("RTCPeerConnection", n)),
                    function() {
                        var n, e, t, r, o, a;
                        for (var l in g)
                            if (g.hasOwnProperty(l)) {
                                if (n = [], (e = g[l]).name && (n.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length))
                                    for (t = 0; t < e.options.aliases.length; t++) n.push(e.options.aliases[t].toLowerCase());
                                for (r = i(e.fn, "function") ? e.fn() : e.fn, o = 0; o < n.length; o++) 1 === (a = n[o].split(".")).length ? f[a[0]] = r : (!f[a[0]] || f[a[0]] instanceof Boolean || (f[a[0]] = new Boolean(f[a[0]])), f[a[0]][a[1]] = r), x.push((r ? "" : "no-") + a.join("-"))
                            }
                    }(), delete m.addTest, delete m.addAsyncTest;
                for (var j = 0; j < f._q.length; j++) f._q[j]();
                n.Modernizr = f
            })(window, document)
        },
        63995: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSP: function() {
                    return x
                },
                getGamesBrowseSSR: function() {
                    return b
                },
                ReqResError: function() {
                    return v
                }
            });
            var i = t(26544),
                r = t(22899),
                o = t(9008),
                a = t(78294),
                l = t(5522),
                c = t(57020),
                s = t(47139),
                d = t(58223),
                p = t(1568),
                u = t(77691),
                h = t(58502),
                g = t(97997),
                m = function() {
                    var n = function(e, t) {
                        return (n = Object.setPrototypeOf || {
                                __proto__: []
                            }
                            instanceof Array && function(n, e) {
                                n.__proto__ = e
                            } || function(n, e) {
                                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t])
                            })(e, t)
                    };
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function i() {
                            this.constructor = e
                        }
                        n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
                    }
                }(),
                f = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                x = !0,
                b = function(n, e) {
                    return void 0 === e && (e = Number.POSITIVE_INFINITY), {
                        otherApps: f(f([], (0, u.hU)(n.topApps).slice(5), !0), (0, u.hU)(f(f([], n.otherApps, !0), n.remainingApps, !0)), !0).slice(0, e),
                        topApps: (0, u.hU)(n.topApps).slice(0, 5),
                        remainingApps: [],
                        topBarApps: (0, u.hU)(n.topBarApps)
                    }
                },
                v = function(n) {
                    function e(e, t) {
                        var i = n.call(this, e) || this;
                        return i.extraData = t, i
                    }
                    return m(e, n), e
                }(Error);
            e.default = function(n) {
                var e, t, u = n.appInfo,
                    m = n.errorStatus,
                    f = n.authServiceHost,
                    x = n.ngNcmHost,
                    b = n.authUseThirdPartyFlow,
                    v = n.authRedirectionUrl,
                    w = n.prefix,
                    y = n.features,
                    Z = n.gamesList,
                    k = n.isCfMobile,
                    P = n.countryCode;
                return a.ZP.appInfo = u, a.ZP.isCfMobile = k, a.ZP.prefix = w, a.ZP.authUseThirdPartyFlow = b, a.ZP.authRedirectionUrl = v, a.ZP.features = y, a.ZP.ngNcmHost = x, a.ZP.isHomePage = !0, a.ZP.countryCode = P || "", (0, c.v)({
                    authServiceHost: f
                }), m ? (0, g.tZ)(h.NotFound, {
                    prefix: w,
                    ngNcmHost: x,
                    errorReason: "Browse".concat(m)
                }) : (0, g.BX)(i.Pw, {
                    children: [(0, g.BX)(o.default, {
                        children: [(0, g.tZ)("title", {
                            children: "Play Online Games for Free | now.gg Mobile Cloud"
                        }), (0, g.tZ)("meta", {
                            httpEquiv: "Cache-control",
                            content: "private, no-cache, no-store, max-age=0, must-revalidate"
                        }), (0, g.tZ)("meta", {
                            httpEquiv: "Pragma",
                            content: "no-cache"
                        }), (null === (e = null === Z || void 0 === Z ? void 0 : Z.topApps[2].media[k ? "mobile" : "desktop"]) || void 0 === e ? void 0 : e.banner) && (0, g.tZ)("link", {
                            rel: "preload",
                            as: "image",
                            href: null === (t = null === Z || void 0 === Z ? void 0 : Z.topApps[2].media[k ? "mobile" : "desktop"]) || void 0 === t ? void 0 : t.banner
                        }), (0, p.LX)((null === u || void 0 === u ? void 0 : u.metaTags) || ""), (0, g.tZ)("script", {
                            dangerouslySetInnerHTML: {
                                __html: (0, l.ZP)({
                                    appId: u.appId,
                                    authServiceHost: f
                                }, u.packageName, w)
                            }
                        })]
                    }), (0, g.BX)(d.Z, {
                        children: [(0, g.tZ)(r.Z, {}), (0, g.tZ)("noscript", {
                            style: {
                                margin: "auto",
                                borderRadius: "20px",
                                padding: "20px",
                                textAlign: "center",
                                fontSize: "x-large",
                                color: "#ffffff",
                                background: "rgba(0, 0, 0, 0.8)"
                            },
                            children: "You need to enable JavaScript to run this app."
                        }), (0, g.tZ)(s.Z, {
                            gamesList: Z
                        })]
                    })]
                })
            }
        },
        58502: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                __N_SSP: function() {
                    return u
                },
                NotFound: function() {
                    return h
                }
            });
            var i = t(12731),
                r = t(26544),
                o = t(22899),
                a = t(9008),
                l = t(78294),
                c = t(43626),
                s = t(82258),
                d = t(5522),
                p = t(97997),
                u = !0,
                h = function(n) {
                    var e = n.prefix,
                        t = n.ngNcmHost,
                        u = n.errorReason;
                    return l.ZP.appInfo.appId = "404", l.ZP.appInfo.packageName = "com.nowgg.404", l.ZP.prefix = e || "", l.ZP.ngNcmHost = t || "", l.ZP.feErrorNotInRegion = !0, (0, p.BX)(r.Pw, {
                        children: [(0, p.BX)(a.default, {
                            children: [(0, p.BX)("title", {
                                children: ["404 | now.gg", " "]
                            }), (0, p.tZ)("meta", {
                                name: "robots",
                                content: "noindex,nofollow,noarchive"
                            }), (0, p.tZ)("meta", {
                                httpEquiv: "Cache-control",
                                content: "private, no-cache, no-store, max-age=0, must-revalidate"
                            }), (0, p.tZ)("meta", {
                                httpEquiv: "Pragma",
                                content: "no-cache"
                            }), (0, p.tZ)("script", {
                                dangerouslySetInnerHTML: {
                                    __html: (0, d.ZP)({
                                        appId: "404",
                                        authServiceHost: ""
                                    }, "com.nowgg.404", e)
                                }
                            })]
                        }), (0, p.BX)(i.Z, {
                            children: [(0, p.tZ)(o.Z, {}), (0, p.tZ)(c.Z, {
                                children: (0, p.tZ)(s.default, {
                                    error: "NotFound",
                                    errorName: "NotFoundScreen-".concat(u)
                                })
                            })]
                        })]
                    })
                };
            e.default = h
        },
        13715: function(n, e, t) {
            "use strict";
            t.d(e, {
                tF: function() {
                    return s
                },
                tS: function() {
                    return d
                },
                W7: function() {
                    return p
                }
            });
            var i, r, o, a = t(95860),
                l = t(50445),
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = l.ZP.section(i || (i = c(["\n  margin-top: 32px;\n  position: relative;\n\n  @media only screen and (max-width: 767px) {\n    margin-top: 16px;\n  }\n\n  .swiper {\n    @media only screen and (min-width: 768px) {\n      &::before,\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        width: 8%;\n        height: 100%;\n        background: linear-gradient(89.55deg, #111111 12.29%, rgba(17, 17, 17, 0) 99.63%);\n        z-index: 2;\n      }\n      &::before {\n        left: 0;\n      }\n      &::after {\n        right: 0;\n        transform: matrix(-1, 0, 0, 1, 0, 0);\n      }\n    }\n  }\n"], ["\n  margin-top: 32px;\n  position: relative;\n\n  @media only screen and (max-width: 767px) {\n    margin-top: 16px;\n  }\n\n  .swiper {\n    @media only screen and (min-width: 768px) {\n      &::before,\n      &::after {\n        content: '';\n        position: absolute;\n        top: 0;\n        width: 8%;\n        height: 100%;\n        background: linear-gradient(89.55deg, #111111 12.29%, rgba(17, 17, 17, 0) 99.63%);\n        z-index: 2;\n      }\n      &::before {\n        left: 0;\n      }\n      &::after {\n        right: 0;\n        transform: matrix(-1, 0, 0, 1, 0, 0);\n      }\n    }\n  }\n"]))),
                d = l.ZP.div(r || (r = c(["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 36px;\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n  }\n"], ["\n  z-index: 1;\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n  padding: 0 36px;\n\n  > div {\n    display: flex;\n    justify-content: space-between;\n  }\n"]))),
                p = l.ZP.button(o || (o = c(["\n  ", "\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);\n  backdrop-filter: blur(60px);\n  background: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  @media only screen and (max-width: 767px) {\n    display: none;\n  }\n"], ["\n  ", "\n  cursor: pointer;\n  border: 0;\n  padding: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);\n  backdrop-filter: blur(60px);\n  background: ", ";\n\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  @media only screen and (max-width: 767px) {\n    display: none;\n  }\n"])), a.be, (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.isRightArrow && "transform: rotate(180deg);"
                }))
        },
        64067: function(n, e, t) {
            "use strict";
            t.d(e, {
                oj: function() {
                    return i
                },
                Od: function() {
                    return r
                }
            });
            var i = [{
                    id: 21,
                    name: "Action Games",
                    slug: "action",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeAction-1.png"
                    }
                }, {
                    id: 31,
                    name: "Adventure Games",
                    slug: "adventure",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeAdventure-1.png"
                    }
                }, {
                    id: 23,
                    name: "Arcade Games",
                    slug: "arcade",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeArcade-1.png"
                    }
                }, {
                    id: 37,
                    name: "Board Games",
                    slug: "board",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeBoard-1.png"
                    }
                }, {
                    id: 396,
                    name: "Browser Games",
                    slug: "browser",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeBrowse-1.png"
                    }
                }, {
                    id: 468,
                    name: "Card Games",
                    slug: "card",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeCard-1.png"
                    }
                }, {
                    id: 33,
                    name: "Casino Games",
                    slug: "casino",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeCasino-1.png"
                    }
                }, {
                    id: 22,
                    name: "Casual Games",
                    slug: "casual",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeCasual.png"
                    }
                }, {
                    id: 28,
                    name: "Communication Games",
                    slug: "communication",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/05/Communication-150x150.png"
                    }
                }, {
                    id: 48,
                    name: "Educational Games",
                    slug: "educational",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeEducational.png"
                    }
                }, {
                    id: 34,
                    name: "Entertainment Games",
                    slug: "entertainment",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeEntertainment.png"
                    }
                }, {
                    id: 49,
                    name: "Lifestyle Games",
                    slug: "lifestyle",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/05/Lifestyle-150x150.png"
                    }
                }, {
                    id: 36,
                    name: "Music & Audio Games",
                    slug: "music-audio",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMusic.png"
                    }
                }, {
                    id: 47,
                    name: "Productivity Games",
                    slug: "productivity",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeProductivity.png"
                    }
                }, {
                    id: 27,
                    name: "Puzzle Games",
                    slug: "puzzle",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypePuzzle.png"
                    }
                }, {
                    id: 25,
                    name: "Racing Games",
                    slug: "racing",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeRacing.png"
                    }
                }, {
                    id: 24,
                    name: "Role Playing Games",
                    slug: "role-playing",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeRPG.png"
                    }
                }, {
                    id: 39,
                    name: "Shopping Games",
                    slug: "shopping",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/05/Shopping-150x150.png"
                    }
                }, {
                    id: 30,
                    name: "Simulation Games",
                    slug: "simulation",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSimulation.png"
                    }
                }, {
                    id: 29,
                    name: "Social Games",
                    slug: "social",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSocial.png"
                    }
                }, {
                    id: 32,
                    name: "Sports Games",
                    slug: "sports",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSports.png"
                    }
                }, {
                    id: 26,
                    name: "Strategy Games",
                    slug: "strategy",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeStrategy.png"
                    }
                }, {
                    id: 40,
                    name: "Trivia Games",
                    slug: "trivia",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeTrivia.png"
                    }
                }, {
                    id: 38,
                    name: "Word Games",
                    slug: "word",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeWord.png"
                    }
                }, {
                    id: 419,
                    name: "3D Games",
                    slug: "3d",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/Type3d.png"
                    }
                }, {
                    id: 420,
                    name: "Animal Games",
                    slug: "animal",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeAnimals.png"
                    }
                }, {
                    id: 421,
                    name: "Anime Games",
                    slug: "anime",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeAnime.png"
                    }
                }, {
                    id: 423,
                    name: "Building Games",
                    slug: "building",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeBuilding.png"
                    }
                }, {
                    id: 424,
                    name: "Car Games",
                    slug: "car",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeCar.png"
                    }
                }, {
                    id: 426,
                    name: "Cat Games",
                    slug: "cat",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeCat.png"
                    }
                }, {
                    id: 429,
                    name: "Dragon Games",
                    slug: "dragon",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeDragon.png"
                    }
                }, {
                    id: 430,
                    name: "Farm Games",
                    slug: "farm",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeFarm.png"
                    }
                }, {
                    id: 447,
                    name: "Fashion Games",
                    slug: "fashion",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeFashion.png"
                    }
                }, {
                    id: 451,
                    name: "Funny Games",
                    slug: "funny",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeFunny.png"
                    }
                }, {
                    id: 456,
                    name: "Gun Games",
                    slug: "gun",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeGun.png"
                    }
                }, {
                    id: 448,
                    name: "Hair Games",
                    slug: "hair",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeHair.png"
                    }
                }, {
                    id: 435,
                    name: "Horror Games",
                    slug: "horror",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeHorror.png"
                    }
                }, {
                    id: 437,
                    name: "Idle Games",
                    slug: "idle",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeIdle.png"
                    }
                }, {
                    id: 441,
                    name: "Ludo Games",
                    slug: "ludo",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeLudo.png"
                    }
                }, {
                    id: 444,
                    name: "Magic Games",
                    slug: "magic",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMagic.png"
                    }
                }, {
                    id: 433,
                    name: "Makeover Games",
                    slug: "makeover",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMakeover.png"
                    }
                }, {
                    id: 438,
                    name: "Matching Games",
                    slug: "matching",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMatching.png"
                    }
                }, {
                    id: 445,
                    name: "Medieval Games",
                    slug: "medieval",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMedivial.png"
                    }
                }, {
                    id: 446,
                    name: "Monster Games",
                    slug: "monster",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMonster.png"
                    }
                }, {
                    id: 439,
                    name: "Multiplayer Games",
                    slug: "multiplayer",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMultiplayer.png"
                    }
                }, {
                    id: 434,
                    name: "Music Games",
                    slug: "music",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeMusic-1.png"
                    }
                }, {
                    id: 469,
                    name: "Paid Games",
                    slug: "paid",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypePaid.png"
                    }
                }, {
                    id: 455,
                    name: "Quiz Games",
                    slug: "quiz",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeQuiz.png"
                    }
                }, {
                    id: 449,
                    name: "Retro Games",
                    slug: "retro",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeRetro.png"
                    }
                }, {
                    id: 431,
                    name: "Running Games",
                    slug: "running",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeRunning.png"
                    }
                }, {
                    id: 457,
                    name: "Shooting Games",
                    slug: "shooting",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeShooting.png"
                    }
                }, {
                    id: 453,
                    name: "Slot Games",
                    slug: "slot",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSlot.png"
                    }
                }, {
                    id: 442,
                    name: "Solitaire Games",
                    slug: "solitaire",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSolitaire.png"
                    }
                }, {
                    id: 452,
                    name: "Sudoku Games",
                    slug: "sudoku",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeSudoku.png"
                    }
                }, {
                    id: 450,
                    name: "Tower Defense Games",
                    slug: "tower-defense",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeTower.png"
                    }
                }, {
                    id: 477,
                    name: "Trial Games",
                    slug: "trial",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeTrial.png"
                    }
                }, {
                    id: 454,
                    name: "Tycoon Games",
                    slug: "tycoon",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeTycoon.png"
                    }
                }, {
                    id: 458,
                    name: "War Games",
                    slug: "war",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeWar.png"
                    }
                }, {
                    id: 459,
                    name: "Zombie Games",
                    slug: "zombie",
                    icon: {
                        thumbnail: "https://cms-cdn.now.gg/cms-media/2023/07/TypeZombie.png"
                    }
                }],
                r = function(n) {
                    for (var e = 0; e < i.length; e += 1)
                        if (i[e].slug === n.toLowerCase()) return "https://now.gg/games/".concat(i[e].slug, ".html");
                    return ""
                }
        },
        47139: function(n, e, t) {
            "use strict";
            t.d(e, {
                Q: function() {
                    return zn
                },
                Z: function() {
                    return An
                }
            });
            var i, r, o, a, l, c, s, d, p, u, h, g, m, f, x, b = t(11720),
                v = t(78294),
                w = t(55475),
                y = t(89598),
                Z = t(58309),
                k = t(77691),
                P = t(25617),
                O = t(50912),
                C = t(5152),
                S = t(78603),
                j = t(14266),
                L = t(92809),
                T = (t(72821), t(30933), t(22544)),
                B = t(22546),
                z = t(64067),
                A = t(94381),
                E = t(13715),
                R = t(45024),
                G = t(50445),
                I = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                D = G.ZP.div(i || (i = I(["\n  height: 400px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  overflow: hidden;\n\n  @media only screen and (max-width: 960px) {\n    height: 300px;\n  }\n\n  @media only screen and (max-width: 767px) and (orientation: portrait) {\n    height: 420px;\n  }\n"], ["\n  height: 400px;\n  border: 1px solid ", ";\n  border-radius: 8px;\n  overflow: hidden;\n\n  @media only screen and (max-width: 960px) {\n    height: 300px;\n  }\n\n  @media only screen and (max-width: 767px) and (orientation: portrait) {\n    height: 420px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white10
                })),
                N = G.ZP.div(r || (r = I(["\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  padding: 40px;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n\n    background: linear-gradient(270deg, rgba(11, 2, 35, 0) 48.42%,\n              rgba(11, 2, 35, 0.56) 77.94%,\n              rgba(11, 2, 35, 0.8) 91%),\n              linear-gradient(180deg, rgba(11, 2, 35, 0) 0%,\n              rgba(11, 2, 35, 0.7) 77.08%, #0B0223 100%);\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 26px 24px;\n  }\n"], ["\n  height: 100%;\n  display: flex;\n  align-items: flex-end;\n  padding: 40px;\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n\n    background: linear-gradient(270deg, rgba(11, 2, 35, 0) 48.42%,\n              rgba(11, 2, 35, 0.56) 77.94%,\n              rgba(11, 2, 35, 0.8) 91%),\n              linear-gradient(180deg, rgba(11, 2, 35, 0) 0%,\n              rgba(11, 2, 35, 0.7) 77.08%, #0B0223 100%);\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 26px 24px;\n  }\n"]))),
                X = G.ZP.div(o || (o = I(["\n  object-fit: fill;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n  background-image: url(", ");\n  min-width: 100%;\n  min-height: 100%;\n  background-size: cover;\n  background-repeat: repeat;\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"], ["\n  object-fit: fill;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  margin: auto;\n  background-image: url(", ");\n  min-width: 100%;\n  min-height: 100%;\n  background-size: cover;\n  background-repeat: repeat;\n\n  @media only screen and (max-width: 767px) {\n    width: 100%;\n  }\n"])), (function(n) {
                    return n.src
                })),
                F = G.ZP.div(a || (a = I(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  video {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n\n  video {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n"]))),
                U = t(13978),
                H = t(26544),
                M = t(88557),
                V = t(42847),
                _ = t(94564),
                q = t(95860),
                Y = t(6268),
                W = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                J = G.ZP.div(c || (c = W(["\n  ", "\n  display: flex;\n  gap: 24px;\n  width: 100%;\n\n  @media only screen and (max-width: 960px) {\n    gap: 18px;\n    align-items: flex-end;\n  }\n\n  @media only screen and (max-width: 567px) {\n    gap: 24px;\n    flex-direction: column;\n    align-items: center;\n  }\n"], ["\n  ", "\n  display: flex;\n  gap: 24px;\n  width: 100%;\n\n  @media only screen and (max-width: 960px) {\n    gap: 18px;\n    align-items: flex-end;\n  }\n\n  @media only screen and (max-width: 567px) {\n    gap: 24px;\n    flex-direction: column;\n    align-items: center;\n  }\n"])), (function(n) {
                    return n.active && (0, G.iv)(l || (l = W(["z-index: 2;"], ["z-index: 2;"])))
                })),
                $ = G.ZP.div(s || (s = W(["\n  display: flex;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n  flex-basis: 144px;\n  height: 144px;\n  position: relative;\n  background: rgba(11,2,35,0.8);\n\n  @media only screen and (max-width: 960px) {\n    flex-basis: 108px;\n    height: 108px;\n  }\n\n  @media only screen and (max-width: 767px) and (orientation: portrait) {\n    flex-basis: 80px;\n    height: 80px;\n  }\n"], ["\n  display: flex;\n  border-radius: 8px;\n  overflow: hidden;\n  flex-shrink: 0;\n  flex-basis: 144px;\n  height: 144px;\n  position: relative;\n  background: rgba(11,2,35,0.8);\n\n  @media only screen and (max-width: 960px) {\n    flex-basis: 108px;\n    height: 108px;\n  }\n\n  @media only screen and (max-width: 767px) and (orientation: portrait) {\n    flex-basis: 80px;\n    height: 80px;\n  }\n"]))),
                K = G.ZP.div(d || (d = W(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  width: calc(100% - 140px);\n\n  @media only screen and (max-width: 767px) {\n    button {\n      margin-top: 16px;\n      padding: 9.5px 24px;\n    }\n  }\n\n  @media only screen and (max-width: 567px) {\n    width: 100%;\n  }\n\n  @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n    align-items: flex-start;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  align-items: flex-start;\n  width: calc(100% - 140px);\n\n  @media only screen and (max-width: 767px) {\n    button {\n      margin-top: 16px;\n      padding: 9.5px 24px;\n    }\n  }\n\n  @media only screen and (max-width: 567px) {\n    width: 100%;\n  }\n\n  @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n    align-items: flex-start;\n  }\n"]))),
                Q = (0, G.ZP)(_.Bb)(p || (p = W(["\n  margin-top: 4px;\n  color: ", ";\n  width: 100%;\n  text-align: left;\n  ", "\n\n  @media only screen and (max-width: 960px) {\n    margin-top: 3px;\n  }\n\n  @media only screen and (max-width: 567px) {\n    text-align: center;\n    font-size: 20px;\n    line-height: 30px;\n    margin-bottom: 12px;\n    margin-top: 0;\n  }\n"], ["\n  margin-top: 4px;\n  color: ", ";\n  width: 100%;\n  text-align: left;\n  ", "\n\n  @media only screen and (max-width: 960px) {\n    margin-top: 3px;\n  }\n\n  @media only screen and (max-width: 567px) {\n    text-align: center;\n    font-size: 20px;\n    line-height: 30px;\n    margin-bottom: 12px;\n    margin-top: 0;\n  }\n"])), (function(n) {
                    return n.theme.colors.white90
                }), q.LH),
                nn = G.ZP.div(u || (u = W(["\n  display: flex;\n  gap: 24px;\n  color: ", ";\n\n  @media only screen and (max-width: 567px) {\n    justify-content: center;\n    width: 100%;\n  }\n"], ["\n  display: flex;\n  gap: 24px;\n  color: ", ";\n\n  @media only screen and (max-width: 567px) {\n    justify-content: center;\n    width: 100%;\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                en = (0, G.ZP)(_.TZ)(g || (g = W(["\n  color: ", ";\n  position: relative;\n\n  ", "\n\n  @media only screen and (max-width: 767px) {\n    ", "\n    ", "\n    line-height: 100%;\n  }\n"], ["\n  color: ", ";\n  position: relative;\n\n  ", "\n\n  @media only screen and (max-width: 767px) {\n    ", "\n    ", "\n    line-height: 100%;\n  }\n"])), (function(n) {
                    var e = n.color,
                        t = n.theme;
                    return e || t.colors.white
                }), (function(n) {
                    var e = n.showPipe,
                        t = n.theme;
                    return e && (0, G.iv)(h || (h = W(["\n    &::before {\n      content: '';\n      position: absolute;\n      left: -12px;\n      width: 1px;\n      height: 14px;\n      background: ", ";\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  "], ["\n    &::before {\n      content: '';\n      position: absolute;\n      left: -12px;\n      width: 1px;\n      height: 14px;\n      background: ", ";\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  "])), t.colors.white)
                }), q.LH, (function(n) {
                    return n.showPipe && "display: none;"
                })),
                tn = (0, G.ZP)(_.TZ)(m || (m = W(["\n  line-height: 100%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  position: relative;\n  margin-right: -10px;\n"], ["\n  line-height: 100%;\n  color: ", ";\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  position: relative;\n  margin-right: -10px;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                rn = (0, G.ZP)(Y.z)(f || (f = W(["\n  margin-top: 9px;\n  margin-left: 0;\n  padding: 9.5px 33.5px;\n  margin-top: 9px;\n  border-radius: 8px;\n\n  @media only screen and (max-width: 959px) {\n    border-radius: 6px;\n    padding: 7px 25px;\n  }\n\n  @media only screen and (max-width: 567px) {\n    padding: 7px 25px;\n    width: 100%;\n    justify-content: center;\n  }\n"], ["\n  margin-top: 9px;\n  margin-left: 0;\n  padding: 9.5px 33.5px;\n  margin-top: 9px;\n  border-radius: 8px;\n\n  @media only screen and (max-width: 959px) {\n    border-radius: 6px;\n    padding: 7px 25px;\n  }\n\n  @media only screen and (max-width: 567px) {\n    padding: 7px 25px;\n    width: 100%;\n    justify-content: center;\n  }\n"]))),
                on = (0, G.ZP)(_.QV)(x || (x = W(["\n  text-transform: capitalize;\n"], ["\n  text-transform: capitalize;\n"]))),
                an = t(97997),
                ln = function(n) {
                    var e = n.media,
                        t = n.appName,
                        i = n.appRating,
                        r = n.appGenre,
                        o = n.playUrl,
                        a = n.appPageUrl,
                        l = n.appDeveloperInfo,
                        c = n.active,
                        s = n.packageName,
                        d = n.isHomePage,
                        p = void 0 !== d && d,
                        u = n.categoryLink,
                        h = void 0 === u ? "" : u,
                        g = n.index;
                    return (0, an.BX)(J, {
                        active: c,
                        className: "gameInfo",
                        children: [(0, an.tZ)($, {
                            children: (0, an.tZ)(V.oy, {
                                src: e.icon,
                                alt: t,
                                sizes: "(max-width: 1000px) 128px, 256px"
                            })
                        }), (0, an.BX)(K, {
                            children: [(0, an.tZ)(Q, {
                                children: t
                            }), (0, an.BX)(nn, {
                                children: [!!i && (0, an.BX)(tn, {
                                    children: [(0, an.tZ)("img", {
                                        src: "".concat(A.u1, "star.svg"),
                                        width: 15,
                                        height: 15,
                                        alt: ""
                                    }), (0, an.tZ)("span", {
                                        children: i
                                    })]
                                }), (null === l || void 0 === l ? void 0 : l.name) && (0, an.tZ)(en, {
                                    color: H.qm.colors.white70,
                                    children: null === l || void 0 === l ? void 0 : l.name
                                }), r && (0, an.tZ)(en, {
                                    showPipe: !0,
                                    as: h ? "a" : "p",
                                    href: h,
                                    children: r
                                })]
                            }), (0, an.tZ)(rn, {
                                onClick: function() {
                                    var n = {
                                        element: "".concat(A.FR, "Game"),
                                        action: "Clicked",
                                        packageName: s
                                    };
                                    "number" === typeof g && (n.index = g + 1), (0, y.L9)(A.S5, n, (function() {
                                        window.location.href = p ? (0, M.ZP)(a) : (0, M.ZP)(o)
                                    }))
                                },
                                children: (0, an.tZ)(on, {
                                    as: "p",
                                    children: (0, U.t)("playNow")
                                })
                            })]
                        })]
                    })
                };

            function cn(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function sn(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? cn(Object(t), !0).forEach((function(e) {
                        (0, L.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : cn(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var dn = function(n) {
                var e, t, i, r, o, a, l, c, s, d, p, u, h = (0, b.useState)(2.5),
                    g = h[0],
                    m = h[1];
                return (0, an.tZ)(D, {
                    onMouseEnter: function() {
                        return m(15)
                    },
                    onMouseLeave: function() {
                        return m(2.5)
                    },
                    children: (0, an.BX)(N, {
                        children: [(0, an.tZ)(X, {
                            src: (0, R.O)({
                                src: v.ZP.isCfMobile ? null === (t = null === (e = null === n || void 0 === n ? void 0 : n.media) || void 0 === e ? void 0 : e.mobile) || void 0 === t ? void 0 : t.banner : null === (r = null === (i = null === n || void 0 === n ? void 0 : n.media) || void 0 === i ? void 0 : i.desktop) || void 0 === r ? void 0 : r.banner,
                                width: v.ZP.isCfMobile ? 640 : 1200,
                                quality: 80
                            })
                        }), n.active && n.interactionDone && ((null === (a = null === (o = null === n || void 0 === n ? void 0 : n.media) || void 0 === o ? void 0 : o.mobile) || void 0 === a ? void 0 : a.launchVideo) || (null === (c = null === (l = null === n || void 0 === n ? void 0 : n.media) || void 0 === l ? void 0 : l.desktop) || void 0 === c ? void 0 : c.launchVideo)) && (0, an.tZ)(F, {
                            children: (0, an.tZ)("video", {
                                autoPlay: !0,
                                muted: !0,
                                onTimeUpdate: function(n) {
                                    var e;
                                    (null === (e = null === n || void 0 === n ? void 0 : n.currentTarget) || void 0 === e ? void 0 : e.currentTime) > g && (n.currentTarget.currentTime = 0)
                                },
                                loop: !0,
                                playsInline: !0,
                                src: "".concat((0, k.tq)() ? null === (d = null === (s = n.media) || void 0 === s ? void 0 : s.mobile) || void 0 === d ? void 0 : d.launchVideo : null === (u = null === (p = n.media) || void 0 === p ? void 0 : p.desktop) || void 0 === u ? void 0 : u.launchVideo)
                            })
                        }), (0, an.tZ)(ln, sn({}, n))]
                    })
                })
            };

            function pn(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function un(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? pn(Object(t), !0).forEach((function(e) {
                        (0, L.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : pn(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var hn, gn = function() {
                    var n = (0, b.useState)(null),
                        e = n[0],
                        t = n[1],
                        i = (0, b.useRef)(),
                        r = (0, b.useContext)(zn).topApps,
                        o = (0, b.useState)(!0),
                        a = o[0],
                        l = o[1],
                        c = (0, b.useState)(!1),
                        s = c[0],
                        d = c[1],
                        p = (0, b.useCallback)((function() {
                            s && (i.current = window.setInterval((function() {
                                null === e || void 0 === e || e.slideNext()
                            }), 3e3))
                        }), [e, s]),
                        u = (0, b.useCallback)((function() {
                            window.clearInterval(i.current)
                        }), []);
                    return (0, b.useEffect)((function() {
                        document.body.addEventListener("pointermove", (function() {
                            d(!0)
                        }), {
                            once: !0
                        }), l(!1)
                    }), []), (0, b.useEffect)((function() {
                        return e && p(),
                            function() {
                                u()
                            }
                    }), [u, p, e]), (0, an.BX)(an.HY, {
                        children: [(0, an.BX)("div", {
                            className: "hero-static",
                            style: {
                                display: a ? "" : "none"
                            },
                            children: [(0, an.tZ)("h1", {
                                style: {
                                    display: "none"
                                },
                                children: "Play Online Games for Free | now.gg Mobile Cloud"
                            }), (0, an.tZ)(dn, un(un({
                                preload: !0,
                                isHomePage: !0
                            }, r[2]), {}, {
                                index: 0,
                                active: !1,
                                categoryLink: (0, z.Od)(r[0].appGenre)
                            })), (0, an.tZ)("ul", {
                                style: {
                                    display: "none"
                                },
                                children: (0, k.hU)(r).slice(1).map((function(n) {
                                    return (0, an.BX)("li", {
                                        children: [(0, an.tZ)("a", {
                                            href: n.appPageUrl,
                                            title: "Play ".concat(n.appName, " online"),
                                            children: n.appName
                                        }), (0, z.Od)(n.appGenre) ? (0, an.tZ)("a", {
                                            href: (0, z.Od)(n.appGenre),
                                            title: "Play ".concat(n.appGenre, " games online"),
                                            children: n.appGenre
                                        }) : null]
                                    })
                                }))
                            })]
                        }), !a && (0, an.BX)(E.tF, {
                            onMouseEnter: function() {
                                return u()
                            },
                            onMouseLeave: function() {
                                return p()
                            },
                            children: [(0, an.tZ)(B.tq, {
                                modules: [T.pt, T.W_],
                                spaceBetween: 20,
                                slidesPerView: 1.3,
                                centeredSlides: !0,
                                slideToClickedSlide: !0,
                                loop: !0,
                                speed: 1200,
                                breakpoints: {
                                    1360: {
                                        slidesPerView: 1.6,
                                        spaceBetween: 24
                                    },
                                    960: {
                                        slidesPerView: 1.3,
                                        spaceBetween: 27
                                    }
                                },
                                onSwiper: function(n) {
                                    return t(n)
                                },
                                children: (0, k.hU)(r).map((function(n, e) {
                                    return (0, an.tZ)(B.o5, {
                                        children: function(t) {
                                            var i = t.isActive;
                                            return (0, an.tZ)(dn, un(un({
                                                preload: !1,
                                                isHomePage: !0
                                            }, n), {}, {
                                                interactionDone: s,
                                                index: e,
                                                active: i,
                                                categoryLink: (0, z.Od)(n.appGenre)
                                            }))
                                        }
                                    }, n.appId)
                                }))
                            }, 5), (0, an.tZ)(E.tS, {
                                children: (0, an.BX)(w.W2, {
                                    children: [(0, an.tZ)(E.W7, {
                                        onClick: function() {
                                            return null === e || void 0 === e ? void 0 : e.slidePrev()
                                        },
                                        children: (0, an.tZ)("img", {
                                            alt: "Left arrow",
                                            src: "".concat(A.u1, "icons/arrow.svg"),
                                            width: 24,
                                            height: 24
                                        })
                                    }), (0, an.tZ)(E.W7, {
                                        onClick: function() {
                                            return null === e || void 0 === e ? void 0 : e.slideNext()
                                        },
                                        isRightArrow: !0,
                                        children: (0, an.tZ)("img", {
                                            alt: "Right arrow",
                                            src: "".concat(A.u1, "icons/arrow.svg"),
                                            width: 24,
                                            height: 24
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                },
                mn = t(64300),
                fn = t(28200),
                xn = function() {
                    return (xn = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                bn = function() {
                    return (0, an.tZ)("svg", {
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, an.tZ)("path", {
                            d: "M4 6.5L8 10.5L12 6.5",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                vn = function() {
                    return (0, an.tZ)("svg", {
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, an.tZ)("path", {
                            d: "M4 10.5L8 6.5L12 10.5",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                wn = function() {
                    var n = (0, b.useState)({
                            0: !0
                        }),
                        e = n[0],
                        t = n[1];
                    return (0, an.BX)(mn.s9, {
                        children: [(0, an.BX)(mn.u9, {
                            className: e[0] ? "" : "collapsed",
                            children: [(0, an.BX)("h3", {
                                onClick: function() {
                                    t(xn(xn({}, e), {
                                        0: !e[0]
                                    }))
                                },
                                children: ["01. What games can you play with friends online?", (0, an.tZ)(mn.e0, {
                                    children: e[0] ? (0, an.tZ)(vn, {}) : (0, an.tZ)(bn, {})
                                })]
                            }), (0, an.tZ)("section", {
                                children: (0, an.BX)("p", {
                                    children: ["We have new multiplayer-friendly online games launching daily on now.gg like\xa0", (0, an.tZ)("a", {
                                        href: "https://now.gg/apps/fingerfun/5581/mu-origin.html",
                                        children: "MU Origin 3"
                                    }), ",\xa0", (0, an.tZ)("a", {
                                        href: "https://now.gg/apps/wargaming/4054/world-of-tanks.html",
                                        children: "World of Tanks Blitz"
                                    }), ",\xa0", (0, an.tZ)("a", {
                                        href: "https://now.gg/apps/youzu/6848/league-of-angels.html",
                                        children: "League of Angels: Chaos"
                                    }), ", and many more. You can play games with friends and make enduring memories, from cooperative adventures to competitive challenges."]
                                })
                            })]
                        }), (0, an.BX)(mn.u9, {
                            className: e[1] ? "" : "collapsed",
                            children: [(0, an.BX)("h3", {
                                onClick: function() {
                                    t(xn(xn({}, e), {
                                        1: !e[1]
                                    }))
                                },
                                children: ["02. Do you need to upload or download online games?", (0, an.tZ)(mn.e0, {
                                    children: e[1] ? (0, an.tZ)(vn, {}) : (0, an.tZ)(bn, {})
                                })]
                            }), (0, an.tZ)("section", {
                                children: (0, an.BX)("p", {
                                    children: ["No, you don't need to download or upload anything to play our selection of online games. Visit", " ", (0, an.tZ)("a", {
                                        href: "https://now.gg/",
                                        children: "now.gg"
                                    }), ", select your game, and begin playing immediately."]
                                })
                            })]
                        }), (0, an.BX)(mn.u9, {
                            className: e[2] ? "" : "collapsed",
                            children: [(0, an.BX)("h3", {
                                onClick: function() {
                                    t(xn(xn({}, e), {
                                        2: !e[2]
                                    }))
                                },
                                children: ["03. Where can I play free games online without downloading them?", (0, an.tZ)(mn.e0, {
                                    children: e[2] ? (0, an.tZ)(vn, {}) : (0, an.tZ)(bn, {})
                                })]
                            }), (0, an.BX)("section", {
                                children: [(0, an.tZ)("p", {
                                    children: "now.gg is the perfect destination for free online games with no downloads required. Begin your exploration of games on our homepage, or choose a game from one of these well-liked categories;"
                                }), (0, an.BX)("ul", {
                                    children: [(0, an.tZ)("li", {
                                        children: (0, an.tZ)("a", {
                                            href: "https://now.gg/games/adventure.html",
                                            children: "Adventure Games"
                                        })
                                    }), (0, an.tZ)("li", {
                                        children: (0, an.tZ)("a", {
                                            href: "https://now.gg/games/action.html",
                                            children: "Action Games"
                                        })
                                    }), (0, an.tZ)("li", {
                                        children: (0, an.tZ)("a", {
                                            href: "https://now.gg/games/simulation.html",
                                            children: "Simulation Games"
                                        })
                                    }), (0, an.tZ)("li", {
                                        children: (0, an.tZ)("a", {
                                            href: "https://now.gg/games/strategy.html",
                                            children: "Strategy Games"
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                yn = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Zn = G.ZP.div(hn || (hn = yn(["\n  margin-top: 40px;\n  padding: 0 36px;\n  position: relative;\n  z-index: 1;\n\n  @media only screen and (max-width: 959px) {\n    padding: 0 28px;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 16px;\n    margin-top: 16px;\n  }\n"], ["\n  margin-top: 40px;\n  padding: 0 36px;\n  position: relative;\n  z-index: 1;\n\n  @media only screen and (max-width: 959px) {\n    padding: 0 28px;\n  }\n\n  @media only screen and (max-width: 767px) {\n    padding: 0 16px;\n    margin-top: 16px;\n  }\n"]))),
                kn = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                Pn = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                On = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                Cn = (0, C.default)((function() {
                    return Promise.all([t.e(349), t.e(742), t.e(359), t.e(761)]).then(t.bind(t, 28761))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [28761]
                        },
                        modules: ["../src/components/browse/index.tsx -> ./components/header/home"]
                    }
                }),
                Sn = (0, C.default)((function() {
                    return Promise.resolve().then(t.bind(t, 7763))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [7763]
                        },
                        modules: ["../src/components/browse/index.tsx -> ../console/browse-all-games"]
                    }
                }),
                jn = (0, C.default)((function() {
                    return t.e(800).then(t.bind(t, 77800))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [77800]
                        },
                        modules: ["../src/components/browse/index.tsx -> ./components/login"]
                    }
                }),
                Ln = (0, C.default)((function() {
                    return Promise.all([t.e(61), t.e(976)]).then(t.bind(t, 71061))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [71061]
                        },
                        modules: ["../src/components/browse/index.tsx -> ../app-page/footer"]
                    }
                }),
                Tn = (0, C.default)((function() {
                    return t.e(342).then(t.bind(t, 51342))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [51342]
                        },
                        modules: ["../src/components/browse/index.tsx -> ./categories"]
                    }
                }),
                Bn = (0, C.default)((function() {
                    return Promise.resolve().then(t.bind(t, 97170))
                }), {
                    loading: function() {
                        return (0, an.tZ)("span", {})
                    },
                    ssr: !1,
                    loadableGenerated: {
                        webpack: function() {
                            return [97170]
                        },
                        modules: ["../src/components/browse/index.tsx -> @components/modals/support"]
                    }
                }),
                zn = (0, b.createContext)({
                    topApps: [],
                    otherApps: [],
                    remainingApps: [],
                    topBarApps: []
                }),
                An = function(n) {
                    var e = n.gamesList,
                        t = (0, b.useRef)(),
                        i = (0, P.v9)((function(n) {
                            return n.support.showSupport
                        })),
                        r = (0, b.useState)(e),
                        o = r[0],
                        a = r[1],
                        l = (0, P.v9)((function(n) {
                            return n.auth.showLogin
                        })),
                        c = (0, P.I0)(),
                        s = (0, P.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        d = (0, P.v9)((function(n) {
                            return n.auth.isLoginResolved
                        }));
                    (0, b.useEffect)((function() {
                        s && (0, k.wA)() && (0, k.WM)()
                    }), [s]), (0, b.useEffect)((function() {
                        t.current = (0, y.wn)(!0), (0, Z.ZP)(), (0, k.wA)() && (0, k.cv)();
                        var n = function() {
                            kn(void 0, void 0, void 0, (function() {
                                var n, t;
                                return Pn(this, (function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return [4, (0, v.qt)()];
                                        case 1:
                                            return (n = i.sent().gamesList) && (t = On(On([], e.otherApps, !0), n.otherApps.filter((function(n) {
                                                return !e.otherApps.find((function(e) {
                                                    return e.appId === n.appId
                                                }))
                                            })), !0), a({
                                                topApps: e.topApps,
                                                otherApps: On(On([], t, !0), n.remainingApps, !0),
                                                remainingApps: n.remainingApps,
                                                topBarApps: n.topBarApps
                                            })), [2]
                                    }
                                }))
                            }))
                        };
                        return document.addEventListener("pointerdown", n, {
                                once: !0
                            }),
                            function() {
                                document.removeEventListener("pointerdown", n), clearInterval(t.current)
                            }
                    }), []);
                    return (0, an.BX)(an.HY, {
                        children: [(0, an.BX)(S.r, {
                            loading: null,
                            persistor: O.D,
                            children: [l && (0, an.tZ)(jn, {
                                toggle: l,
                                onClose: function() {
                                    c({
                                        type: j.Z.TOGGLE_LOGIN,
                                        payload: {
                                            showLogin: !1
                                        }
                                    })
                                }
                            }), i && (0, an.tZ)(Bn, {
                                isHome: !0
                            })]
                        }), (0, an.BX)(mn.Z0, {
                            children: [(0, an.BX)(zn.Provider, {
                                value: o,
                                children: [(0, an.tZ)(Cn, {
                                    loginResolved: d
                                }), (0, an.tZ)(gn, {}), (0, an.tZ)(Zn, {
                                    children: (0, an.tZ)(w.W2, {
                                        children: (0, an.tZ)(Sn, {
                                            isHomepage: !0
                                        })
                                    })
                                })]
                            }), (0, an.BX)(w.W2, {
                                children: [(0, an.BX)(mn.$0, {
                                    children: [(0, an.tZ)(mn.OT, {
                                        className: "d-mobile",
                                        id: "shortVideos",
                                        children: "Short Videos"
                                    }), (0, an.tZ)(mn.OT, {
                                        className: "d-desk",
                                        id: "shortVideos",
                                        children: "Enjoy some Short videos"
                                    }), (0, an.tZ)(fn.Z, {})]
                                }), (0, an.tZ)(Tn, {}), (0, an.BX)(mn.$0, {
                                    children: [(0, an.tZ)(mn.OT, {
                                        id: "about",
                                        children: "What is now.gg"
                                    }), (0, an.tZ)(mn.K3, {
                                        children: (0, an.BX)(mn.r4, {
                                            children: [(0, an.tZ)("h5", {
                                                children: "Online Games - Play Anywhere, Anytime"
                                            }), (0, an.tZ)("p", {
                                                children: "Discover a world of excitement with our vast collection of free online games, conveniently accessible with no downloads required. Get ready to immerse yourself in endless fun, whether playing solo, challenging friends, or seeking thrilling multiplayer adventures."
                                            }), (0, an.tZ)("h5", {
                                                children: "Free Online Games at Your Fingertips"
                                            }), (0, an.BX)("p", {
                                                children: ["Play online from a wide variety of fun online games, including \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/roblox-corporation/5349/roblox.html",
                                                    children: "Roblox"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/bloxd/51240/bloxd-io.html",
                                                    children: "Bloxd.io"
                                                }), ", and\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/mob-games-studio/1293/poppy-playtime.html",
                                                    children: "Poppy Playtime"
                                                }), ". You can find a game to fit your mood and interests among the various game genres, such as \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/card.html",
                                                    children: "card games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/sports.html",
                                                    children: "sports games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/shooting.html",
                                                    children: "shooting games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/ludo.html",
                                                    children: "ludo games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/solitaire.html",
                                                    children: "solitaire games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/browser.html",
                                                    children: "browser games"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/quiz.html",
                                                    children: "quiz games"
                                                }), ", and exciting\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/zombie.html",
                                                    children: "zombie games"
                                                }), ". Get ready to embark on unforgettable adventures and immerse yourself in exhilarating gaming experiences. Start playing right away and enjoy yourself!"]
                                            }), (0, an.tZ)("h5", {
                                                children: "Multiplayer Adventures Await"
                                            }), (0, an.BX)("p", {
                                                children: ["Gaming online with friends is more fun, and now.gg has you covered. Explore our collection of online\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/multiplayer.html",
                                                    children: "multiplayer games"
                                                }), "to play with friends and engage in epic combat. You can choose from numerous games like\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/roblox-corporation/5349/roblox.html",
                                                    children: "Roblox"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/new-times-game/4075/soul-land.html",
                                                    children: "Soul Land Reloaded"
                                                }), ", \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/agame/51029/fireboy-and-watergirl-1-light-temple.html",
                                                    children: "Fireboy and Watergirl 2: Light Temple"
                                                }), ", \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/innersloth-llc/4047/among-us.html",
                                                    children: "Among Us"
                                                }), ", \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/activision-publishing-inc/7935/call-of-duty.html",
                                                    children: "Call of Duty"
                                                }), ", and many more. Connect with friends from around the world and let the competition begin."]
                                            }), (0, an.tZ)("h5", {
                                                children: "Fun for All Ages"
                                            }), (0, an.BX)("p", {
                                                children: ["Players of all ages can play games on now.gg. We recognize the value of offering children a fun and secure gaming environment. Explore our selection of games like \xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/kahoot/5840/kahoot-play.html",
                                                    children: "Kahoot! Play & Create Quizzes"
                                                }), ",\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/toca-boca/9907/toca-kitchen2.html",
                                                    children: "Toca Kitchen 2"
                                                }), ", and\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/apps/vex-robotics/1421/vexcode-v5.html",
                                                    children: "VEXcode V5"
                                                }), "\xa0 for children have been carefully chosen to guarantee fun. Our games will keep young minds entertained and inspired, offering everything from\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/educational.html",
                                                    children: "educational quizzes"
                                                }), "\xa0 to delightful\xa0", (0, an.tZ)("a", {
                                                    href: "https://now.gg/games/adventure.html",
                                                    children: "adventures"
                                                }), "."]
                                            })]
                                        })
                                    })]
                                }), (0, an.BX)(mn.$0, {
                                    children: [(0, an.tZ)(mn.OT, {
                                        id: "faqs",
                                        children: "FAQs"
                                    }), (0, an.tZ)(wn, {})]
                                })]
                            }), (0, an.tZ)(Ln, {})]
                        })]
                    })
                }
        },
        28200: function(n, e, t) {
            "use strict";
            var i = t(11720),
                r = t(22544),
                o = t(22546),
                a = t(59930),
                l = t(42847),
                c = t(94381),
                s = t(64300),
                d = t(97997),
                p = [{
                    imageURL: "https://cms-cdn.now.gg/cms-media/2023/03/video-game-2.png",
                    title: "No Downloads. No Installs. Play games INSTANTLY on now.gg",
                    videoURL: "https://www.youtube.com/embed/qaTVpUZkSTI?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "530"
                }, {
                    imageURL: "https://cms-cdn.now.gg/cms-media/2023/03/vide-game-6.png",
                    title: "Busted gaming on school laptop, but you are still lit\ud83d\udd25\ud83d\ude0e #unblockedgames",
                    videoURL: "https://www.youtube.com/embed/6wCsIDFSabM?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "26k"
                }, {
                    imageURL: "https://cms-cdn.now.gg/cms-media/2023/03/video-game-3.png",
                    title: "Did you score? #unblockedgames #school",
                    videoURL: "https://www.youtube.com/embed/aMZXrSweWxA?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "2.7k"
                }, {
                    imageURL: "https://cms-cdn.now.gg/cms-media/2023/03/video-game-4.png",
                    title: "Play Instantly on now.gg #nowgg #onlinegaming #santacityrun",
                    videoURL: "https://www.youtube.com/embed/_23wYKZvzHw?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "2.7k"
                }, {
                    imageURL: "https://cms-cdn.now.gg/cms-media/2023/03/video-game-5.png",
                    title: "Breaking game records like OG\ud83d\ude0e #nowgg #electrondash",
                    videoURL: "https://www.youtube.com/embed/cFvIQc5TXus?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "1.9k"
                }, {
                    imageURL: "https://cdn.now.gg/apps-content/img/website/video-game-7.png",
                    title: "No More Homework Horror with Unblocked Games Online #school #unblockedgames",
                    videoURL: "https://www.youtube.com/embed/_EzyIJuHeVA?autoplay=1&controls=1&mute=1&enablejsapi=1",
                    views: "9.7k"
                }];
            e.Z = function(n) {
                var e = n.isAppPage,
                    t = n.videoList,
                    u = void 0 === t ? p : t,
                    h = (0, i.useState)(null),
                    g = h[0],
                    m = h[1],
                    f = (0, i.useState)(null),
                    x = f[0],
                    b = f[1],
                    v = (0, i.useState)(0),
                    w = v[0],
                    y = v[1];
                return (0, d.BX)("div", {
                    style: {
                        position: "relative"
                    },
                    children: [(0, d.tZ)(o.tq, {
                        modules: [r.W_],
                        loop: !1,
                        autoplay: !1,
                        slidesPerView: "auto",
                        onSwiper: function(n) {
                            m(n), y(n.activeIndex)
                        },
                        className: "videoSwiper",
                        onSlideChange: function(n) {
                            y(n.activeIndex)
                        },
                        breakpoints: e ? {
                            1200: {
                                slidesPerView: 5.5,
                                spaceBetween: 8
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 8
                            },
                            400: {
                                slidesPerView: 3,
                                spaceBetween: 8
                            },
                            300: {
                                slidesPerView: 1.5,
                                spaceBetween: 8
                            }
                        } : {},
                        children: u.map((function(n) {
                            return (0, d.tZ)(o.o5, {
                                children: function(e) {
                                    e.isActive;
                                    return (0, d.BX)(s.mo, {
                                        onClick: function() {
                                            return b(n)
                                        },
                                        children: [(0, d.BX)("div", {
                                            children: [(0, d.tZ)("span", {
                                                children: (0, d.tZ)(l.oy, {
                                                    layout: "fill",
                                                    loading: "lazy",
                                                    height: 270,
                                                    sizes: "256px",
                                                    unoptimized: !0,
                                                    src: n.imageURL,
                                                    alt: "".concat(n.title, " | now.gg")
                                                })
                                            }), (0, d.tZ)("div", {
                                                className: "hover"
                                            })]
                                        }), (0, d.tZ)("p", {
                                            children: n.title
                                        }), "number" === typeof n.views && (0, d.BX)("h5", {
                                            children: [n.views, "views"]
                                        })]
                                    })
                                }
                            }, n.title)
                        }))
                    }), 0 !== w && (0, d.tZ)(s.td, {
                        onClick: function() {
                            return null === g || void 0 === g ? void 0 : g.slidePrev()
                        },
                        children: (0, d.tZ)("img", {
                            alt: "Left arrow",
                            src: "".concat(c.u1, "icons/arrow.svg"),
                            width: 24,
                            height: 24
                        })
                    }), (0, d.tZ)(s.td, {
                        onClick: function() {
                            return null === g || void 0 === g ? void 0 : g.slideNext()
                        },
                        isRightArrow: !0,
                        children: (0, d.tZ)("img", {
                            alt: "Right arrow",
                            src: "".concat(c.u1, "icons/arrow.svg"),
                            width: 24,
                            height: 24
                        })
                    }), x && (0, d.BX)(s.Y7, {
                        onClick: function() {
                            return b(null)
                        },
                        children: [(0, d.tZ)(a.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "video-player-cross",
                            onClick: function() {
                                return b(null)
                            },
                            size: 18,
                            name: "cross-thin"
                        }), (0, d.tZ)(s.yj, {
                            children: (0, d.tZ)("iframe", {
                                title: x.title,
                                src: x.videoURL,
                                frameBorder: "0",
                                height: "100%",
                                width: "100%"
                            })
                        })]
                    })]
                })
            }
        },
        64300: function(n, e, t) {
            "use strict";
            t.d(e, {
                gi: function() {
                    return a
                },
                $0: function() {
                    return l
                },
                OT: function() {
                    return c
                },
                K3: function() {
                    return s
                },
                r4: function() {
                    return d
                },
                Co: function() {
                    return p
                },
                WD: function() {
                    return u
                },
                mo: function() {
                    return j
                },
                Y7: function() {
                    return L
                },
                yj: function() {
                    return T
                },
                td: function() {
                    return B
                },
                s9: function() {
                    return z
                },
                u9: function() {
                    return A
                },
                e0: function() {
                    return E
                },
                Z0: function() {
                    return R
                }
            });
            var i = t(50445),
                r = t(13715),
                o = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                a = i.ZP.div(h || (h = o(["\n    padding: 10px 20px;\n    text-align: center;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        padding: 10px;\n    }\n"], ["\n    padding: 10px 20px;\n    text-align: center;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        padding: 10px;\n    }\n"]))),
                l = i.ZP.section(g || (g = o(["\n    margin: 20px 20px 30px;\n    @media only screen and (max-width: 768px) {\n        margin: 10px 20px;\n    }\n"], ["\n    margin: 20px 20px 30px;\n    @media only screen and (max-width: 768px) {\n        margin: 10px 20px;\n    }\n"]))),
                c = i.ZP.h2(m || (m = o(["\n    text-align: center;\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 150%;\n    color: rgba(255, 255, 255, 0.9);\n    position: relative;\n    padding-bottom: 15px;\n    margin-top: 50px;\n    margin-bottom: 32px;\n    @media only screen and (max-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 24px;\n        margin-top: 30px;\n    }\n    &:after {\n        content: '';\n        background: linear-gradient(90deg, rgba(255, 66, 165, 0) 0%, #FF42A5 49.65%, rgba(255, 66, 165, 0) 101.41%);\n        position: absolute;\n        bottom: 0;\n        width: 300px;\n        height: 1px;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n"], ["\n    text-align: center;\n    font-weight: 500;\n    font-size: 32px;\n    line-height: 150%;\n    color: rgba(255, 255, 255, 0.9);\n    position: relative;\n    padding-bottom: 15px;\n    margin-top: 50px;\n    margin-bottom: 32px;\n    @media only screen and (max-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 24px;\n        margin-top: 30px;\n    }\n    &:after {\n        content: '';\n        background: linear-gradient(90deg, rgba(255, 66, 165, 0) 0%, #FF42A5 49.65%, rgba(255, 66, 165, 0) 101.41%);\n        position: absolute;\n        bottom: 0;\n        width: 300px;\n        height: 1px;\n        left: 50%;\n        transform: translateX(-50%);\n    }\n"]))),
                s = i.ZP.section(f || (f = o(["\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-bottom: 40px;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        flex-direction: column;\n        margin-bottom: 20px;\n    }\n"], ["\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-bottom: 40px;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        flex-direction: column;\n        margin-bottom: 20px;\n    }\n"]))),
                d = i.ZP.div(x || (x = o(["\n    margin: auto 5%;\n\n    h5 {\n        font-weight: 600;\n        font-size: 20px;\n    }\n    a {\n        color: rgba(255,255,255,0.6);\n        &:hover {\n            color: #fff;\n        }\n    }\n    p {\n        font-size: 16px;\n        line-height: 150%;\n        color: rgba(255, 255, 255, 0.6);\n        margin-bottom: 20px;\n    }\n    @media only screen and (max-width: 480px) {\n        margin: 0;\n        h5 {\n            font-size: 16px;\n        }\n        p {\n            font-size: 12px;\n        }\n    }\n"], ["\n    margin: auto 5%;\n\n    h5 {\n        font-weight: 600;\n        font-size: 20px;\n    }\n    a {\n        color: rgba(255,255,255,0.6);\n        &:hover {\n            color: #fff;\n        }\n    }\n    p {\n        font-size: 16px;\n        line-height: 150%;\n        color: rgba(255, 255, 255, 0.6);\n        margin-bottom: 20px;\n    }\n    @media only screen and (max-width: 480px) {\n        margin: 0;\n        h5 {\n            font-size: 16px;\n        }\n        p {\n            font-size: 12px;\n        }\n    }\n"]))),
                p = i.ZP.section(b || (b = o(["\n    display: flex;\n    gap: 14px;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 40px;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        margin-bottom: 20px;\n        gap: 10px;\n        justify-content: space-between;\n    }\n"], ["\n    display: flex;\n    gap: 14px;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    margin-bottom: 40px;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        margin-bottom: 20px;\n        gap: 10px;\n        justify-content: space-between;\n    }\n"]))),
                u = i.ZP.a(v || (v = o(["\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 8px;\n    padding: 8px 16px;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border: 1px solid transparent;\n\n    &:hover {\n        border-color: ", ";\n    }\n    span {\n        display: inline-block;\n        width: calc(100% - 30px);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        flex: 0 0 calc(50% - 5px);\n        padding: 4px 8px;\n    }\n"], ["\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 8px;\n    padding: 8px 16px;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    text-decoration: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    border: 1px solid transparent;\n\n    &:hover {\n        border-color: ", ";\n    }\n    span {\n        display: inline-block;\n        width: calc(100% - 30px);\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n    }\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        flex: 0 0 calc(50% - 5px);\n        padding: 4px 8px;\n    }\n"])), (function(n) {
                    return n.theme.colors.ascent
                }));
            e.ZP = a;
            var h, g, m, f, x, b, v, w, y, Z, k, P, O, C, S, j = i.ZP.div(w || (w = o(["\n    display: flex;\n    flex-direction: column;\n    width: 212px;\n    margin: 0 16px;\n    cursor: pointer;\n    p {\n        font-weight: 500;\n        font-size: 14px;\n        margin-bottom: 0;\n        margin-top: 8px;\n    }\n    h5 {\n        color: rgba(255, 255, 255, 0.7);\n        font-size: 11px;\n        font-weight: normal;\n    }\n    div {\n        position: relative;\n        border-radius: 8px;\n        overflow: hidden;\n\n        > span {\n            height: 270px;\n            display: block;\n            &:hover {\n                & ~ .hover {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n    .hover {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0;\n        pointer-events: none;\n        border: 1px solid ", ";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 8px;\n        &:before {\n            content: '';\n            position: absolute;\n            width: 40px;\n            height: 40px;\n            background: #FF42A5;\n            border-radius: 50%;\n        }\n        &:after {\n            content: '';\n            width: 0;\n            height: 0;\n            border-top: 8px solid transparent;\n            border-bottom: 8px solid transparent;\n            border-left: 12px solid white;\n            z-index: 2;\n            position: absolute;\n            margin-left: 4px;\n        }\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 212px;\n    margin: 0 16px;\n    cursor: pointer;\n    p {\n        font-weight: 500;\n        font-size: 14px;\n        margin-bottom: 0;\n        margin-top: 8px;\n    }\n    h5 {\n        color: rgba(255, 255, 255, 0.7);\n        font-size: 11px;\n        font-weight: normal;\n    }\n    div {\n        position: relative;\n        border-radius: 8px;\n        overflow: hidden;\n\n        > span {\n            height: 270px;\n            display: block;\n            &:hover {\n                & ~ .hover {\n                    opacity: 1;\n                }\n            }\n        }\n    }\n    .hover {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: rgba(0, 0, 0, 0.5);\n        opacity: 0;\n        pointer-events: none;\n        border: 1px solid ", ";\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        border-radius: 8px;\n        &:before {\n            content: '';\n            position: absolute;\n            width: 40px;\n            height: 40px;\n            background: #FF42A5;\n            border-radius: 50%;\n        }\n        &:after {\n            content: '';\n            width: 0;\n            height: 0;\n            border-top: 8px solid transparent;\n            border-bottom: 8px solid transparent;\n            border-left: 12px solid white;\n            z-index: 2;\n            position: absolute;\n            margin-left: 4px;\n        }\n    }\n"])), (function(n) {
                    return n.theme.colors.ascent
                })),
                L = i.ZP.div(y || (y = o(["\n    position: fixed;\n    background: rgba(11, 2, 35, 0.8);\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 22;\n    i {\n        margin: 20px;\n        font-size: 22px;\n        justify-content: flex-end;\n        cursor: pointer;\n    }\n"], ["\n    position: fixed;\n    background: rgba(11, 2, 35, 0.8);\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 22;\n    i {\n        margin: 20px;\n        font-size: 22px;\n        justify-content: flex-end;\n        cursor: pointer;\n    }\n"]))),
                T = i.ZP.div(Z || (Z = o(["\n    max-width: 1200px;\n    width: 100%;\n    padding: 20px;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    iframe {\n        aspect-ratio: 0.5625;\n        max-width: 50vw;\n        margin: auto;\n        max-height: calc(100vh - 200px);\n        min-height: 50vh;\n    }\n    @media only screen and (max-width: 768px) {\n        padding: 20px;\n        iframe {\n            min-height: 78vh;\n            max-width: 90vw;\n        }\n    }\n"], ["\n    max-width: 1200px;\n    width: 100%;\n    padding: 20px;\n    margin: auto;\n    display: flex;\n    justify-content: center;\n    iframe {\n        aspect-ratio: 0.5625;\n        max-width: 50vw;\n        margin: auto;\n        max-height: calc(100vh - 200px);\n        min-height: 50vh;\n    }\n    @media only screen and (max-width: 768px) {\n        padding: 20px;\n        iframe {\n            min-height: 78vh;\n            max-width: 90vw;\n        }\n    }\n"]))),
                B = (0, i.ZP)(r.W7)(k || (k = o(["\n    position: absolute;\n    right: ", ";\n    top: 50%;\n    z-index: 2;\n    transform: translateY(-100%) ", ";\n    background: ", ";\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    margin-right: 4px;\n    &:hover {\n        background: ", ";\n    }\n    @media only screen and (max-width: 768px) {\n        display: block;\n        border: 1px solid #FF42A5;\n        background: #111111;\n    }\n    @media only screen and (min-width: 1500px) {\n        display: none;\n    }\n"], ["\n    position: absolute;\n    right: ", ";\n    top: 50%;\n    z-index: 2;\n    transform: translateY(-100%) ", ";\n    background: ", ";\n    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    margin-right: 4px;\n    &:hover {\n        background: ", ";\n    }\n    @media only screen and (max-width: 768px) {\n        display: block;\n        border: 1px solid #FF42A5;\n        background: #111111;\n    }\n    @media only screen and (min-width: 1500px) {\n        display: none;\n    }\n"])), (function(n) {
                    return n.isRightArrow ? 0 : "auto"
                }), (function(n) {
                    return n.isRightArrow ? "rotate(180deg)" : ""
                }), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.black40
                })),
                z = i.ZP.ul(P || (P = o(["\n    max-width: 1100px;\n    margin: auto;\n    list-style-type: none;\n    margin-bottom: 50px;\n    padding: 0;\n"], ["\n    max-width: 1100px;\n    margin: auto;\n    list-style-type: none;\n    margin-bottom: 50px;\n    padding: 0;\n"]))),
                A = i.ZP.li(O || (O = o(["\n    border-radius: 8px;\n    padding: 12px 16px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 8px;\n    background: rgba(102, 102, 102, 0.2);\n    backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n\n    &.collapsed {\n        background: rgba(102, 102, 102, 0.2);\n        border-color: transparent;\n        section {\n            max-height: 0;\n            margin-top: 0;\n        }\n    }\n    &:hover {\n        background: rgba(102, 102, 102, 0.4);\n        border-color: rgba(255, 255, 255, 0.2);\n    }\n    @media only screen and (max-width: 480px) {\n        p, a {\n            font-size: 12px;\n        }\n    }\n    h3 {\n        font-size: 14px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n        color: rgba(255, 255, 255, 0.7);\n        display: flex;\n        align-items: center;\n        margin: 0;\n        cursor: pointer;\n    }\n    section {\n        margin-top: 8px;\n        max-height: 300px;\n        transition: all 0.3s ease-in-out;\n        overflow: hidden;\n        box-sizing: border-box;\n    }\n    p, a {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 150%;\n        align-items: center;\n\n        color: rgba(255, 255, 255, 0.6);\n    }\n    ul {\n        list-style-type: disc;\n    }\n"], ["\n    border-radius: 8px;\n    padding: 12px 16px;\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 8px;\n    background: rgba(102, 102, 102, 0.2);\n    backdrop-filter: blur(12px);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n\n    &.collapsed {\n        background: rgba(102, 102, 102, 0.2);\n        border-color: transparent;\n        section {\n            max-height: 0;\n            margin-top: 0;\n        }\n    }\n    &:hover {\n        background: rgba(102, 102, 102, 0.4);\n        border-color: rgba(255, 255, 255, 0.2);\n    }\n    @media only screen and (max-width: 480px) {\n        p, a {\n            font-size: 12px;\n        }\n    }\n    h3 {\n        font-size: 14px;\n        font-weight: 600;\n        display: flex;\n        align-items: center;\n        color: rgba(255, 255, 255, 0.7);\n        display: flex;\n        align-items: center;\n        margin: 0;\n        cursor: pointer;\n    }\n    section {\n        margin-top: 8px;\n        max-height: 300px;\n        transition: all 0.3s ease-in-out;\n        overflow: hidden;\n        box-sizing: border-box;\n    }\n    p, a {\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 150%;\n        align-items: center;\n\n        color: rgba(255, 255, 255, 0.6);\n    }\n    ul {\n        list-style-type: disc;\n    }\n"]))),
                E = i.ZP.span(C || (C = o(["\n    margin-left: auto;\n    padding-left: 10px 5px 10px 10px;\n"], ["\n    margin-left: auto;\n    padding-left: 10px 5px 10px 10px;\n"]))),
                R = i.ZP.div(S || (S = o(["\n    position: relative;\n    z-index: 1;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        padding-bottom: 100px;\n    }\n"], ["\n    position: relative;\n    z-index: 1;\n    @media only screen and (max-width: 768px) and (orientation: portrait) {\n        padding-bottom: 100px;\n    }\n"])))
        },
        52165: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return d
                }
            });
            var i, r = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                o = t(50445).ZP.div(i || (i = r(["\n  width: 100%;\n  padding: 0vw calc(var(--vw, 1vw) * 3.86);\n  border-top: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n  .footerText{\n    text-align: right;\n    color: ", ";\n    margin: 0px;\n  }\n"], ["\n  width: 100%;\n  padding: 0vw calc(var(--vw, 1vw) * 3.86);\n  border-top: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  bottom: 0px;\n  .footerText{\n    text-align: right;\n    color: ", ";\n    margin: 0px;\n  }\n"])), (function(n) {
                    return n.theme.border.base3
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                a = t(94564),
                l = t(26793),
                c = t(29693),
                s = t(97997),
                d = function(n) {
                    var e = n.breakFooterText,
                        t = (0, l.$)().t;
                    return (0, s.BX)(o, {
                        children: [(0, s.tZ)("img", {
                            id: "ng-logo",
                            width: 110.6,
                            height: 28,
                            src: (0, c.Z)("light", "horizontal", !0),
                            alt: "now.gg ".concat(t("logo")),
                            style: {
                                margin: "18px 0px"
                            }
                        }), (0, s.BX)(a.kk, {
                            className: "footerText",
                            children: [t("copyright", {
                                year: (new Date).getFullYear()
                            }), e && (0, s.tZ)("br", {}), t("disclaimerSub1")]
                        })]
                    })
                }
        },
        22012: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z: function() {
                    return k
                }
            });
            var i, r, o, a, l, c = t(92809),
                s = t(11720),
                d = t(50445),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                u = d.ZP.div(i || (i = p(["\n  display: flex;\n  position: fixed;\n  z-index: 101;\n  transform: inherit;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  position: fixed;\n  z-index: 101;\n  transform: inherit;\n\n  ", "\n\n  ", "\n"])), (function(n) {
                    var e = n.showOverly,
                        t = n.overlayBackgroundColor,
                        i = n.theme;
                    return e ? "\n    background: ".concat(t || i.colors.overlay, ";\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  ") : "\n    border-radius: 12px;\n  "
                }), (function(n) {
                    return n.overlayStyles
                })),
                h = d.ZP.div(r || (r = p(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  max-width: 100%;\n  border-radius: ", ";\n  backdrop-filter: blur(", ");\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n  border: ", ";\n\n  ", "\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin: auto;\n  max-width: 100%;\n  border-radius: ", ";\n  backdrop-filter: blur(", ");\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  background: ", ";\n  border: ", ";\n\n  ", "\n"])), (function(n) {
                    return n.width || "617px"
                }), (function(n) {
                    return n.height || "auto"
                }), (function(n) {
                    return n.theme.spacing.base3
                }), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.border.base
                }), (function(n) {
                    return n.modalStyles
                })),
                g = d.ZP.div(a || (a = p(["\n  z-index: 1;\n  margin: 4px;\n  border-radius: 10px;\n  background: transparent;\n  color: ", ";\n  background-size: cover;\n  overflow: auto;\n\n  ", "\n"], ["\n  z-index: 1;\n  margin: 4px;\n  border-radius: 10px;\n  background: transparent;\n  color: ", ";\n  background-size: cover;\n  overflow: auto;\n\n  ", "\n"])), (function(n) {
                    return n.theme.colors.base900
                }), (function(n) {
                    var e = n.showAvatarHeader,
                        t = n.theme;
                    return e && (0, d.iv)(o || (o = p(["\n    margin-top: 0;\n    .icon-cross-thin {\n      color: ", ";\n    }\n  "], ["\n    margin-top: 0;\n    .icon-cross-thin {\n      color: ", ";\n    }\n  "])), t.colors.white)
                })),
                m = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                f = d.ZP.div(l || (l = m(["\n  position: relative;\n  margin: 4px;\n  background: transparent;\n  margin-bottom: 0;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  align-self: ", ";\n"], ["\n  position: relative;\n  margin: 4px;\n  background: transparent;\n  margin-bottom: 0;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  align-self: ", ";\n"])), (function(n) {
                    return n.center ? "center" : ""
                })),
                x = t(16678),
                b = t(97997),
                v = function(n) {
                    var e = n.center,
                        t = void 0 !== e && e;
                    return (0, b.tZ)(f, {
                        center: t,
                        children: (0, b.tZ)(x.Z, {
                            themeType: "light",
                            style: {
                                height: "28px",
                                width: "110px"
                            }
                        })
                    })
                };

            function w(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function y(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? w(Object(t), !0).forEach((function(e) {
                        (0, c.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : w(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var Z = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                k = function(n) {
                    var e = n.children,
                        t = n.showOverly,
                        i = void 0 === t || t,
                        r = n.overlayBackgroundColor,
                        o = n.onClickOverlay,
                        a = n.onPopupClick,
                        l = n.overlayStyles,
                        c = n.showAvatarHeader,
                        d = void 0 !== c && c,
                        p = n.centeredLogo,
                        m = void 0 !== p && p,
                        f = n.contentStyle,
                        x = Z(n, ["children", "showOverly", "overlayBackgroundColor", "onClickOverlay", "onPopupClick", "overlayStyles", "showAvatarHeader", "centeredLogo", "contentStyle"]),
                        w = (0, s.useRef)(null);
                    return (0, b.tZ)(u, {
                        id: "overlay",
                        className: "modal-overlay",
                        showOverly: i,
                        overlayBackgroundColor: r,
                        overlayStyles: l,
                        onClick: function(n) {
                            n.target !== w.current && o && o()
                        },
                        children: (0, b.BX)(h, y(y({}, x), {}, {
                            ref: w,
                            onClick: function(n) {
                                n.stopPropagation(), a && a()
                            },
                            children: [d && (0, b.tZ)(v, {
                                center: m
                            }), (0, b.tZ)(g, {
                                style: f,
                                showAvatarHeader: d,
                                children: e
                            })]
                        }))
                    })
                }
        },
        77036: function(n, e, t) {
            "use strict";
            t.d(e, {
                E: function() {
                    return u
                }
            });
            var i = t(66971),
                r = t(13978),
                o = t(23279),
                a = t.n(o),
                l = t(11720),
                c = t(25617),
                s = t(79354),
                d = t(57592),
                p = t(97997),
                u = function(n) {
                    var e = n.timeout,
                        t = void 0 === e ? 250 : e,
                        o = n.searchString,
                        u = void 0 === o ? "" : o,
                        h = n.autoFocus,
                        g = void 0 === h || h,
                        m = n.onChange,
                        f = n.onBlur,
                        x = n.onFocus,
                        b = (0, l.useState)(u),
                        v = b[0],
                        w = b[1],
                        y = (0, l.useRef)(null),
                        Z = (0, c.I0)();
                    (0, l.useEffect)((function() {
                        var n;
                        g && (null === (n = null === y || void 0 === y ? void 0 : y.current) || void 0 === n || n.focus())
                    }), []), (0, l.useEffect)((function() {
                        w(u)
                    }), [u]);
                    return (0, p.BX)(d.Rj, {
                        dropdownVisible: v.length > 0,
                        onClick: function(n) {
                            return n.stopPropagation()
                        },
                        children: [(0, p.tZ)(d.W1, {
                            onClick: function() {
                                var n;
                                return null === (n = y.current) || void 0 === n ? void 0 : n.focus()
                            },
                            children: (0, p.tZ)(s.ol, {
                                style: {
                                    width: "100%",
                                    height: "100%"
                                }
                            })
                        }), (0, p.tZ)(d.Mj, {
                            as: "input",
                            id: "search-box",
                            type: "text",
                            autoFocus: g,
                            title: (0, r.t)("searchPremiumGames"),
                            placeholder: (0, r.t)("searchPremiumGames"),
                            defaultValue: v,
                            onChange: a()((function(n) {
                                var e = n.target.value;
                                w(e), null === m || void 0 === m || m(e)
                            }), t),
                            autoComplete: "off",
                            ref: y,
                            onBlur: function() {
                                f && f(v), Z({
                                    type: i.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            },
                            onFocus: function() {
                                x && x(), Z({
                                    type: i.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            }
                        }), (0, p.tZ)(d.Wp, {
                            onClick: function() {
                                w(""), null === m || void 0 === m || m(""), y.current && (y.current.focus(), y.current.value = "")
                            },
                            style: {
                                display: v.length ? "block" : "none"
                            },
                            children: (0, r.t)("clear")
                        })]
                    })
                };
            e.Z = u
        },
        57592: function(n, e, t) {
            "use strict";
            t.d(e, {
                Rj: function() {
                    return p
                },
                Mj: function() {
                    return u
                },
                Wp: function() {
                    return h
                },
                W1: function() {
                    return g
                }
            });
            var i, r, o, a, l, c = t(94564),
                s = t(50445),
                d = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                p = s.ZP.div(r || (r = d(["\n  width: 400px;\n  position: relative;\n  padding: 7px 8px 7px 12px;\n  display: flex;\n  align-items: center;\n\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  ", "\n\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n\n  @media only screen and (max-width: 850px) {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n  }\n\n  @media only screen and (max-width: 567px) and (orientation: portrait) {\n    width: 100%;\n  }\n"], ["\n  width: 400px;\n  position: relative;\n  padding: 7px 8px 7px 12px;\n  display: flex;\n  align-items: center;\n\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 8px;\n  ", "\n\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n\n  @media only screen and (max-width: 850px) {\n    width: 400px;\n    max-width: 100%;\n    margin: auto;\n  }\n\n  @media only screen and (max-width: 567px) and (orientation: portrait) {\n    width: 100%;\n  }\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.dropdownVisible && (0, s.iv)(i || (i = d(["\n    border-radius: 8px 8px 0px 0px;\n  "], ["\n    border-radius: 8px 8px 0px 0px;\n  "])))
                }), (function(n) {
                    return n.theme.colors.ascentHover
                })),
                u = (0, s.ZP)(c.lU)(o || (o = d(["\n  font-family: inherit;\n  width: 100%;\n  padding: 0 16px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  line-height: 24px;\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  font-family: inherit;\n  width: 100%;\n  padding: 0 16px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  line-height: 24px;\n  color: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white80
                })),
                h = (0, s.ZP)(c.gd)(a || (a = d(["\n  cursor: pointer;\n  text-transform: uppercase;\n  margin-left: auto;\n  color: ", ";\n"], ["\n  cursor: pointer;\n  text-transform: uppercase;\n  margin-left: auto;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                g = s.ZP.span(l || (l = d(["\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n\n  &.app-search {\n    margin-left: auto;\n    width: 48px;\n    height: 48px;\n    padding: 14px;\n    margin-right: -16px;\n  }\n"], ["\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n\n  &.app-search {\n    margin-left: auto;\n    width: 48px;\n    height: 48px;\n    padding: 14px;\n    margin-right: -16px;\n  }\n"])))
        },
        95860: function(n, e, t) {
            "use strict";
            t.d(e, {
                LH: function() {
                    return c
                },
                be: function() {
                    return s
                },
                BC: function() {
                    return p
                }
            });
            var i, r, o, a = t(50445),
                l = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                c = (0, a.iv)(i || (i = l(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"], ["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),
                s = (0, a.iv)(r || (r = l(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]))),
                d = {
                    xs: 576,
                    sm: 768,
                    md: 992,
                    lg: 1200,
                    xl: 1400
                },
                p = function(n, e) {
                    var t = "string" === typeof e ? (0, a.iv)(o || (o = l(["", ""], ["", ""])), e) : e;
                    return Array.isArray(n) ? "@media only screen and (min-width: ".concat(d[n[0]] + 1, "px) and (max-width: ").concat(d[n[1]], ") { ").concat(t, " }") : "@media only screen and (max-width: ".concat(d[n], "px) { ").concat(t, " }")
                }
        },
        7763: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                AllGamesOverlay: function() {
                    return B
                },
                default: function() {
                    return z
                }
            });
            var i = t(42847),
                r = t(50912),
                o = t(11720),
                a = t(25617),
                l = t(78294),
                c = t(23279),
                s = t.n(c),
                d = t(59930),
                p = t(66971),
                u = t(94381),
                h = t(89598),
                g = t(45628),
                m = t(77691),
                f = t(6268),
                x = t(64300),
                b = t(47139),
                v = t(63995),
                w = t(55475),
                y = t(13978),
                Z = t(94564),
                k = t(47001),
                P = t(97997),
                O = function(n) {
                    var e = n.title,
                        t = n.style;
                    return (0, P.tZ)(k.c7, {
                        style: t,
                        children: (0, P.tZ)(Z.Bb, {
                            children: (0, y.t)("".concat(e))
                        })
                    })
                },
                C = function() {
                    return (C = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                S = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                j = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                L = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                T = function(n) {
                    var e, t = n.isHomepage,
                        r = n.chunkSize,
                        a = n.closeAllGamesPopup,
                        c = "".concat(u.G1, "SuggestedGame"),
                        s = (0, o.useContext)(b.Q),
                        d = (0, o.useState)(t ? (0, v.getGamesBrowseSSR)(s) : {
                            topApps: [],
                            topBarApps: [],
                            remainingApps: [],
                            otherApps: []
                        }),
                        p = d[0],
                        h = d[1];
                    (0, o.useEffect)((function() {
                        t || S(void 0, void 0, void 0, (function() {
                            var n, e, t, i, r, o, a, c, s, d, p, u, g, m;
                            return j(this, (function(f) {
                                switch (f.label) {
                                    case 0:
                                        return [4, (0, l.qt)()];
                                    case 1:
                                        return n = f.sent().gamesList, e = n.topApps, t = void 0 === e ? [] : e, i = n.topBarApps, r = void 0 === i ? [] : i, o = n.remainingApps, a = void 0 === o ? [] : o, c = n.otherApps, s = void 0 === c ? [] : c, d = L(L(L(L([], t, !0), r, !0), a, !0), s, !0), (p = null === (m = l.ZP.features) || void 0 === m ? void 0 : m.promotedGame) && p.length && (u = p[0], (g = d.findIndex((function(n) {
                                            return n.appId === u.appId
                                        }))) > -1 && (d.splice(g, 1), d.splice(0, 0, u))), n && (n.otherApps = t.concat(s).concat(a), h(n)), [2]
                                }
                            }))
                        }))
                    }), []), (0, o.useEffect)((function() {
                        t && s && h((0, v.getGamesBrowseSSR)(s))
                    }), [s]);
                    var g = (0, o.useState)(0),
                        m = g[0],
                        w = g[1];
                    return (0, P.BX)(P.HY, {
                        children: [!t && (0, P.tZ)(O, {
                            title: "otherGamesYouMayLike",
                            style: t ? {} : {
                                marginTop: "40px"
                            }
                        }), (null === p || void 0 === p ? void 0 : p.otherApps) && (0, P.BX)(P.HY, {
                            children: [(0, P.tZ)(i.ZP, {
                                playCurrentGame: a,
                                gameList: p.otherApps.slice(0, 0 + r),
                                tileType: "default",
                                element: c,
                                kname: "recent-row",
                                type: t ? "link" : "redirect",
                                openPlayPageUrl: !!l.ZP.isAppPage,
                                id: "ng-other-games-list"
                            }, "recent-row-gg"), (0, P.tZ)(i.ZP, {
                                playCurrentGame: a,
                                gameList: p.otherApps.slice(0 + r, 0 + r + (r >= 15 ? 6 : 5)),
                                tileType: "vertical",
                                media: "tile",
                                element: c,
                                kname: "first-row",
                                type: t ? "link" : "redirect",
                                openPlayPageUrl: !!l.ZP.isAppPage
                            }, "first-row-gg"), (0, P.tZ)(i.ZP, {
                                playCurrentGame: a,
                                gameList: p.otherApps.slice(0 + r + (r >= 15 ? 6 : 5), t ? m + 0 + 4 * r + (r >= 15 ? 6 : 5) : p.otherApps.length),
                                tileType: "default",
                                element: c,
                                kname: "second-row",
                                type: t ? "link" : "redirect",
                                openPlayPageUrl: !!l.ZP.isAppPage
                            }, "second-row")]
                        }), (null === (e = null === p || void 0 === p ? void 0 : p.otherApps) || void 0 === e ? void 0 : e.length) > 0 && t && m + 0 + 4 * r + (r >= 15 ? 6 : 5) < p.otherApps.length && (0, P.tZ)(x.ZP, {
                            style: {
                                marginTop: 14
                            },
                            children: (0, P.tZ)(f.z, {
                                id: "showMoreGames",
                                variant: "outline",
                                className: "more-cta",
                                size: "medium",
                                onClick: function() {
                                    w(m + 2 * r)
                                },
                                children: "Show More"
                            })
                        })]
                    })
                },
                B = function(n) {
                    var e, t = n.isHomepage,
                        c = n.isOverlay,
                        f = n.style,
                        x = void 0 === f ? {} : f,
                        b = r.Z.getState().play.videoRef,
                        v = null === b || void 0 === b ? void 0 : b.current,
                        y = (0, o.useState)({
                            top: (null === v || void 0 === v ? void 0 : v.getBoundingClientRect().bottom) || 0,
                            width: (null === v || void 0 === v ? void 0 : v.getBoundingClientRect().width) || 0,
                            left: (null === v || void 0 === v ? void 0 : v.getBoundingClientRect().left) || 0,
                            right: (null === v || void 0 === v ? void 0 : v.getBoundingClientRect().right) || 0,
                            height: (null === v || void 0 === v ? void 0 : v.getBoundingClientRect().height) || 0
                        }),
                        Z = y[0],
                        k = y[1],
                        S = (0, a.v9)((function(n) {
                            return n.play.consoleHeaderRef
                        })),
                        j = (0, o.useState)((null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0),
                        L = j[0],
                        B = j[1],
                        z = (0, a.v9)((function(n) {
                            return n.ads.inGameAd
                        })),
                        A = (0, a.v9)((function(n) {
                            return n.play.orientation
                        })),
                        E = (0, a.v9)((function(n) {
                            var e;
                            return null === (e = n.user) || void 0 === e ? void 0 : e.recentPlayedApps
                        })),
                        R = (0, o.useState)(18),
                        G = R[0],
                        I = R[1],
                        D = (0, o.useRef)(null),
                        N = (0, a.I0)(),
                        X = function() {
                            N({
                                type: p.Z.MODAL_STATUS,
                                payload: {
                                    showAllGamesOverlay: !1
                                }
                            })
                        },
                        F = function() {
                            var n = r.Z.getState().play,
                                e = n.consoleHeaderRef,
                                t = n.videoRef;
                            setTimeout((function() {
                                var n = null === t || void 0 === t ? void 0 : t.current;
                                n && k({
                                    top: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().bottom,
                                    width: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().width,
                                    left: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().left,
                                    right: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().right,
                                    height: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().height
                                })
                            })), e && e.current && B(e.current.clientHeight), window.matchMedia("(min-width: 1367px)").matches ? I(18) : window.matchMedia("(min-width: 960px)").matches ? I(16) : window.matchMedia("(min-width: 550px)").matches || (0, m.tq)() && window.matchMedia("(min-width: 600px)").matches ? I(12) : I(15)
                        },
                        U = s()(F, 100);
                    (0, o.useEffect)((function() {
                        return F(), (0, l.DJ)() || t ? window.addEventListener("resize", U) : window.addEventListener("resizeDone", U), t || l.ZP.isAppPage || (0, h.L9)(u.S5, {
                                element: "".concat(u.G1, "Window"),
                                state: "Open"
                            }),
                            function() {
                                (0, l.DJ)() ? window.removeEventListener("resize", U): window.removeEventListener("resizeDone", U)
                            }
                    }), []);
                    var H = (0, o.useCallback)((function() {
                        return E.map((function(n) {
                            return {
                                appId: n.appId,
                                media: {
                                    icon: n.icon
                                },
                                appName: n.name,
                                playUrl: n.playUrl,
                                packageName: n.packageName,
                                appPageUrl: n.appPageUrl
                            }
                        }))
                    }), [E]);
                    return (0, P.BX)(w.T8, {
                        id: "browse-games-container",
                        className: (0, l.DJ)() ? l.ZP.isAppPage ? (0, m.VR)() ? "fit-app-page-html" : "" : "fit-html" : "",
                        isBrowsePage: t,
                        style: t || c ? {
                            width: l.ZP.isAppPage ? "100%" : void 0
                        } : C({
                            top: (0, l.DJ)() && !l.ZP.isAppPage ? L : z === u.V ? Z.top - Z.height : "0px",
                            bottom: "0px",
                            left: (0, l.DJ)() || A !== g.cj.landscape ? "" : Z.left,
                            height: z !== u.V || (0, l.DJ)() ? "" : Z.height,
                            width: A !== g.cj.landscape || (0, l.DJ)() ? "" : Z.width
                        }, x),
                        ref: D,
                        isOverlay: c,
                        isAppPage: l.ZP.isAppPage,
                        children: [!t && (0, P.BX)(P.HY, {
                            children: [(0, P.tZ)(d.Z, {
                                name: "cross-thin",
                                size: 20,
                                onClick: X
                            }), (0, P.BX)("div", {
                                className: "recent-played-apps",
                                children: [(0, P.tZ)(O, {
                                    title: "recentlyPlayed"
                                }), (0, P.tZ)(i.ZP, {
                                    playCurrentGame: X,
                                    gameList: H().slice(0, 10),
                                    tileType: "default",
                                    kname: "recent",
                                    element: "".concat(u.e9, "RecentGame"),
                                    openPlayPageUrl: !0
                                })]
                            })]
                        }), (0, P.tZ)(T, {
                            isHomepage: !!t,
                            chunkSize: G,
                            closeAllGamesPopup: X
                        })]
                    })
                },
                z = B
        },
        55475: function(n, e, t) {
            "use strict";
            t.d(e, {
                W2: function() {
                    return s
                },
                T8: function() {
                    return d
                }
            });
            var i, r, o, a = t(50445),
                l = t(9912),
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = a.ZP.div(i || (i = c(["\n    width: 100%;\n    max-width: 1550px;\n    margin: auto;\n    pointer-events: auto;\n"], ["\n    width: 100%;\n    max-width: 1550px;\n    margin: auto;\n    pointer-events: auto;\n"]))),
                d = a.ZP.div(o || (o = c(["\n    ", "\n\n    .extension-game-tile{\n        padding: 12px;\n        background: rgba(255, 255, 255, 0.1);\n        ul {\n            margin: 4px 0px 0px;\n            gap: 0px 20px;\n        }\n    }\n    .icon-cross-thin{\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        cursor:pointer;\n        color:", ";\n        transition: background 0.3s ease-out;\n        padding: 5px;\n        border-radius: 50%;\n\n        &:hover{\n            background: rgba(255, 255, 255, 0.1);\n        }\n\n    }\n    & > div {\n        width: 100%;\n    }\n"], ["\n    ", "\n\n    .extension-game-tile{\n        padding: 12px;\n        background: rgba(255, 255, 255, 0.1);\n        ul {\n            margin: 4px 0px 0px;\n            gap: 0px 20px;\n        }\n    }\n    .icon-cross-thin{\n        position: absolute;\n        right: 15px;\n        top: 15px;\n        cursor:pointer;\n        color:", ";\n        transition: background 0.3s ease-out;\n        padding: 5px;\n        border-radius: 50%;\n\n        &:hover{\n            background: rgba(255, 255, 255, 0.1);\n        }\n\n    }\n    & > div {\n        width: 100%;\n    }\n"])), (function(n) {
                    return !n.isBrowsePage && (0, a.iv)(r || (r = c(["\n        top: 0px;\n        height:100%;\n        width: 70%;\n        overflow-y: scroll;\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        padding: 48px 32px 32px;\n        isolation: isolate;\n        background: rgba(17, 17, 17, 0.8);\n        backdrop-filter: blur(60px);\n        z-index: 4;\n        animation-name: ", ";\n        animation-duration: 0.3s;\n    "], ["\n        top: 0px;\n        height:100%;\n        width: 70%;\n        overflow-y: scroll;\n        position: absolute;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        padding: 48px 32px 32px;\n        isolation: isolate;\n        background: rgba(17, 17, 17, 0.8);\n        backdrop-filter: blur(60px);\n        z-index: 4;\n        animation-name: ", ";\n        animation-duration: 0.3s;\n    "])), l.Ji)
                }), (function(n) {
                    return n.theme.colors.white
                }))
        },
        47001: function(n, e, t) {
            "use strict";
            t.d(e, {
                c7: function() {
                    return l
                },
                Dx: function() {
                    return c
                }
            });
            var i, r, o = t(50445),
                a = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                l = o.ZP.div(i || (i = a(["\n  margin-bottom: 16px;\n  color: ", ";\n\n  @media only screen and (max-width: 767px), (orientation: landscape) and (max-height: 575.98px) {\n    h3 {\n      font-size: 20px;\n      line-height: 150%;\n      text-align: center;\n    }\n  }\n"], ["\n  margin-bottom: 16px;\n  color: ", ";\n\n  @media only screen and (max-width: 767px), (orientation: landscape) and (max-height: 575.98px) {\n    h3 {\n      font-size: 20px;\n      line-height: 150%;\n      text-align: center;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white90
                })),
                c = o.ZP.p(r || (r = a(["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 150%;\n  color: rgba(255, 255, 255, 0.9);\n"], ["\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 150%;\n  color: rgba(255, 255, 255, 0.9);\n"])))
        },
        50301: function(n, e, t) {
            "use strict";
            var i = t(77036),
                r = t(50912),
                o = t(11720),
                a = t(25617),
                l = t(13978),
                c = t(66971),
                s = t(59930),
                d = t(23279),
                p = t.n(d),
                u = t(78294),
                h = t(94381),
                g = t(89598),
                m = t(45628),
                f = t(77691),
                x = t(11163),
                b = t(94564),
                v = t(45024),
                w = t(1003),
                y = t(9912),
                Z = t(42847),
                k = t(47001),
                P = t(79354),
                O = t(97997),
                C = function() {
                    return (C = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                S = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                j = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                L = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                };
            e.Z = function(n) {
                var e = n.isOverlay,
                    t = n.overlayKeywords,
                    d = n.gamesList,
                    T = n.isAppPage,
                    B = n.style,
                    z = void 0 === B ? {} : B,
                    A = (0, o.useState)([]),
                    E = A[0],
                    R = A[1],
                    G = (0, o.useState)([]),
                    I = G[0],
                    D = G[1],
                    N = (0, o.useState)(0),
                    X = N[0],
                    F = N[1],
                    U = (0, o.useState)([]),
                    H = U[0],
                    M = U[1],
                    V = (0, o.useState)(""),
                    _ = V[0],
                    q = V[1],
                    Y = (0, a.I0)(),
                    W = (0, o.useState)([]),
                    J = W[0],
                    $ = W[1],
                    K = (0, o.useState)(""),
                    Q = K[0],
                    nn = K[1],
                    en = (0, o.useState)([]),
                    tn = en[0],
                    rn = en[1],
                    on = r.Z.getState().play.videoRef,
                    an = null === on || void 0 === on ? void 0 : on.current,
                    ln = (0, o.useState)({
                        top: (null === an || void 0 === an ? void 0 : an.getBoundingClientRect().bottom) || 0,
                        width: (null === an || void 0 === an ? void 0 : an.getBoundingClientRect().width) || 0,
                        left: (null === an || void 0 === an ? void 0 : an.getBoundingClientRect().left) || 0,
                        right: (null === an || void 0 === an ? void 0 : an.getBoundingClientRect().right) || 0,
                        height: (null === an || void 0 === an ? void 0 : an.getBoundingClientRect().height) || 0
                    }),
                    cn = ln[0],
                    sn = ln[1],
                    dn = (0, a.v9)((function(n) {
                        return n.ads.inGameAd
                    })),
                    pn = (0, a.v9)((function(n) {
                        return n.play.orientation
                    })),
                    un = (0, a.v9)((function(n) {
                        return n.play.isGamePlayerOnFromAppPage
                    })),
                    hn = (0, x.useRouter)(),
                    gn = dn === h.V ? 4 : 8,
                    mn = (0, o.useState)([]),
                    fn = mn[0],
                    xn = mn[1],
                    bn = function(n) {
                        if (n) {
                            R(n);
                            for (var e = [], t = 0; t < n.length; t += 1) {
                                var i = n[t]; - 1 === e.indexOf(i.appGenre) && e.push(i.appGenre)
                            }
                            rn(e)
                        }
                    },
                    vn = function(n) {
                        return n.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (function(n, e) {
                            return 0 === +n ? "" : 0 === e ? n.toLowerCase() : n.toUpperCase()
                        }))
                    };
                (0, o.useEffect)((function() {
                    T || (0, g.L9)(h.S5, {
                        element: h.QS,
                        state: "Open"
                    }), S(void 0, void 0, void 0, (function() {
                        var n, e, t, i;
                        return j(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return n = [], [4, (0, u.qt)()];
                                case 1:
                                    return n = null === (i = r.sent()) || void 0 === i ? void 0 : i.searchGamesList, bn(d ? L(L(L(L([], d.topApps, !0), d.otherApps, !0), d.topBarApps, !0), d.remainingApps, !0) : n), e = n.filter((function(n) {
                                        return n.appId !== u.ZP.appInfo.appId
                                    })), (t = e.filter((function(n) {
                                        return n.appId === h.Rv
                                    }))).length > 0 && xn(t), D(e), [2]
                            }
                        }))
                    }))
                }), []);
                var wn = function() {
                        var n = r.Z.getState().play,
                            e = n.consoleHeaderRef,
                            t = n.videoRef;
                        setTimeout((function() {
                            var n = null === t || void 0 === t ? void 0 : t.current;
                            if (n) {
                                var e = {
                                    top: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().bottom,
                                    width: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().width,
                                    left: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().left,
                                    right: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().right,
                                    height: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().height
                                };
                                sn(e)
                            }
                        })), e && e.current && F(e.current.clientHeight)
                    },
                    yn = p()(wn, 100);
                (0, o.useEffect)((function() {
                    return wn(), (0, u.DJ)() ? window.addEventListener("resize", yn) : window.addEventListener("resizeDone", yn),
                        function() {
                            (0, u.DJ)() ? window.removeEventListener("resize", yn): window.removeEventListener("resizeDone", yn)
                        }
                }), []);
                var Zn = function(n, e) {
                        T || (0, g.L9)(h.S5, {
                            element: "".concat(h.$D, "Input"),
                            input: n,
                            hasResult: e
                        })
                    },
                    kn = function(n) {
                        if (q(n), "" === n) return M([]), void Zn("", !1);
                        var e = n.toLowerCase().split(/\s+/),
                            t = (null === E || void 0 === E ? void 0 : E.filter((function(n) {
                                var t = n.appName;
                                return e.every((function(n) {
                                    return null === t || void 0 === t ? void 0 : t.toLocaleLowerCase().includes(n)
                                }))
                            }))).filter((function(n, e, t) {
                                return e === t.findIndex((function(e) {
                                    return e.appName === n.appName
                                }))
                            }));
                        M(t || []), Zn(n, t.length > 0)
                    };
                (0, o.useEffect)((function() {
                    void 0 !== t && kn(t)
                }), [t]);
                var Pn = function() {
                        Y({
                            type: c.Z.MODAL_STATUS,
                            payload: {
                                showExploreGamesOverlay: !1
                            }
                        })
                    },
                    On = "";
                return (0, u.DJ)() && (u.ZP.isAppPage ? un && (0, f.VR)() && (On = "fit-app-page-html") : On = "fit-html"), (0, O.BX)(y.c1, {
                    className: On,
                    style: e ? {} : C({
                        top: (0, u.DJ)() && !u.ZP.isAppPage ? X : dn === h.V ? cn.top - cn.height : "0px",
                        bottom: "0px",
                        left: (0, u.DJ)() || pn !== m.cj.landscape ? "" : cn.left,
                        height: dn !== h.V || (0, u.DJ)() ? "" : cn.height,
                        width: pn !== m.cj.landscape || (0, u.DJ)() || T ? "" : cn.width
                    }, z),
                    isOverlay: e,
                    isAppPage: T,
                    children: [(0, O.tZ)(s.Z, {
                        id: "icon-cross-thin",
                        name: "cross-thin",
                        size: 20,
                        onClick: Pn
                    }), !e && (0, O.tZ)(i.Z, {
                        autoFocus: "/browse" === hn.pathname,
                        onChange: kn,
                        onBlur: function(n) {
                            return Zn(n, H.length > 0)
                        }
                    }), J.length ? (0, O.BX)(O.HY, {
                        children: [(0, O.tZ)("div", {
                            className: "selected-category",
                            children: (0, O.BX)("div", {
                                children: [(0, O.BX)("span", {
                                    children: [(0, l.t)(vn(Q.toLowerCase()), {
                                        defaultValue: Q
                                    }), "\xa0", (0, l.t)("games")]
                                }), (0, O.tZ)(s.Z, {
                                    name: "cross-thin",
                                    size: 16,
                                    onClick: function() {
                                        nn(""), $([])
                                    }
                                })]
                            })
                        }), (0, O.BX)(k.Dx, {
                            children: [(0, l.t)("showingResults"), "\xa0", (0, O.BX)("b", {
                                children: [(0, l.t)(vn(Q.toLowerCase()), {
                                    defaultValue: Q
                                }), "\xa0", (0, l.t)("games")]
                            })]
                        }), (0, O.tZ)(Z.Z9, {
                            tileType: "default",
                            gameList: J,
                            media: "tile",
                            kname: "search-rows",
                            element: "".concat(h.$D, "Input"),
                            onGameClick: function() {
                                return Zn(_, !0)
                            },
                            playCurrentGame: Pn,
                            openPlayPageUrl: !!u.ZP.isAppPage
                        }, "search-rows-gg")]
                    }) : null, H.length > 0 ? (0, O.BX)(y.u9, {
                        children: [(0, f.tq)() && (0, O.BX)(y.X0, {
                            style: {
                                textAlign: "center"
                            },
                            children: [(0, O.tZ)("span", {
                                children: (0, l.t)("resultsFor")
                            }), (0, O.tZ)("span", {
                                children: _
                            })]
                        }), (0, O.tZ)(Z.Z9, {
                            playCurrentGame: Pn,
                            gameList: H,
                            tileType: "default",
                            media: "tile",
                            kname: "search-tile",
                            element: "".concat(h.$D, "Result"),
                            onGameClick: function() {
                                return Zn(_, !0)
                            },
                            openPlayPageUrl: !0,
                            id: "ng-search-games-list"
                        }, "search-tile-gg")]
                    }) : null, 0 !== H.length || Q ? null : (0, O.BX)(O.HY, {
                        children: [_ ? (0, O.BX)(O.HY, {
                            children: [(0, O.tZ)(y.pJ, {
                                children: (0, O.tZ)(k.Dx, {
                                    children: (0, l.t)("cantFindAnything")
                                })
                            }), fn[0] && (0, O.BX)(y.U9, {
                                onClick: function() {
                                    (0, f.jj)(_)
                                },
                                children: [(0, O.tZ)("img", {
                                    alt: "Aptoid ".concat((0, l.t)("logo")),
                                    src: (0, v.j)(w.Z),
                                    style: {
                                        width: "20px",
                                        height: "20px"
                                    }
                                }), (0, O.tZ)(b.IS, {
                                    children: (0, l.t)("searchAppStore")
                                }), (0, O.tZ)(P.pL, {})]
                            })]
                        }) : (0, O.tZ)("ul", {
                            className: "genre-list",
                            children: tn.map((function(n) {
                                return (0, O.BX)("li", {
                                    className: "genre-list-item",
                                    onClick: function() {
                                        return function(n, e) {
                                            var t = e.filter((function(e) {
                                                return e.appGenre && e.appGenre === n
                                            }));
                                            nn(n), $(t)
                                        }(n, I)
                                    },
                                    children: [(0, l.t)(vn(n.toLowerCase()), {
                                        defaultValue: n
                                    }), "\xa0", (0, l.t)("games")]
                                })
                            }))
                        }), (!_ || _ && !fn[0]) && (0, O.BX)("div", {
                            className: "trending-section",
                            children: [(0, O.tZ)(k.Dx, {
                                style: {
                                    textAlign: "center",
                                    marginBottom: "50px"
                                },
                                children: _ ? (0, l.t)("tryOtherGames") : (0, l.t)("trendingThisWeek")
                            }), (0, O.tZ)(Z.Z9, {
                                kname: "search-recommend",
                                playCurrentGame: Pn,
                                gameList: I.slice(gn, gn + 5),
                                tileType: "default",
                                element: "".concat(h.QS, "Recommendation"),
                                alignCenter: !0,
                                openPlayPageUrl: !!u.ZP.isAppPage
                            }, "search-recommend")]
                        })]
                    })]
                })
            }
        },
        9912: function(n, e, t) {
            "use strict";
            t.d(e, {
                Ji: function() {
                    return u
                },
                c1: function() {
                    return h
                },
                pJ: function() {
                    return g
                },
                X0: function() {
                    return m
                },
                u9: function() {
                    return f
                },
                U9: function() {
                    return x
                }
            });
            var i, r, o, a, l, c, s = t(50445),
                d = t(47001),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                u = (0, s.F4)(i || (i = p(["\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n"], ["\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n"]))),
                h = s.ZP.div(r || (r = p(["\n    top: 0px;\n    width:", ";\n    height: 100%;\n    position: absolute;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: #111111;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    z-index: 4;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.selected-category {\n    border-radius: 4px;\n    background: ", ";\n    div {\n        display:flex;\n        width:fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 6px;\n        align-items: center;\n        height: 34px;\n        background: #333;\n        margin: 1px;\n        border-radius: 4px;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        position: relative;\n        transition: background 0.3s ease-out;\n        &:hover {\n            background: #666;\n        }\n    }\n}\n#icon-cross-thin {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n.trending-section{\n    width: 100%;\n    &> p {\n      margin-bottom: 16px !important;\n    }\n\n    ul {\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n    li {\n      flex-basis: 15%;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      width: 100%;\n\n      li {\n        flex-basis: 15%;\n      }\n    }\n\n    @media only screen and (orientation: portrait) and (max-width: 767px) {\n      li {\n        flex-basis: 33%;\n      }\n    }\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n    }\n}\n\n.genre-list{\n    display: flex;\n    list-style-type:none;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items:center;\n    gap: 10px;\n    padding: 0;\n    .genre-list-item{\n        flex-basis: fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 4px;\n        height: 34px;\n        background: rgba(255, 255, 255, 0.1);\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        transition: background 0.3s ease-out;\n        &:hover{\n            background: rgba(255, 255, 255, 0.3);\n        }\n    }\n}\n"], ["\n    top: 0px;\n    width:", ";\n    height: 100%;\n    position: absolute;\n    overflow-y: scroll;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: #111111;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    z-index: 4;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.selected-category {\n    border-radius: 4px;\n    background: ", ";\n    div {\n        display:flex;\n        width:fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 6px;\n        align-items: center;\n        height: 34px;\n        background: #333;\n        margin: 1px;\n        border-radius: 4px;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        position: relative;\n        transition: background 0.3s ease-out;\n        &:hover {\n            background: #666;\n        }\n    }\n}\n#icon-cross-thin {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n.trending-section{\n    width: 100%;\n    &> p {\n      margin-bottom: 16px !important;\n    }\n\n    ul {\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n    li {\n      flex-basis: 15%;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      width: 100%;\n\n      li {\n        flex-basis: 15%;\n      }\n    }\n\n    @media only screen and (orientation: portrait) and (max-width: 767px) {\n      li {\n        flex-basis: 33%;\n      }\n    }\n\n    @media only screen and (max-width: 767px) {\n      width: 100%;\n    }\n}\n\n.genre-list{\n    display: flex;\n    list-style-type:none;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items:center;\n    gap: 10px;\n    padding: 0;\n    .genre-list-item{\n        flex-basis: fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 4px;\n        height: 34px;\n        background: rgba(255, 255, 255, 0.1);\n        border-radius: 4px;\n        font-style: normal;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        transition: background 0.3s ease-out;\n        &:hover{\n            background: rgba(255, 255, 255, 0.3);\n        }\n    }\n}\n"])), (function(n) {
                    return n.isAppPage ? "100%" : "70%"
                }), u, (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                g = s.ZP.div(o || (o = p(["\n  display:flex;\n  flex-direction:column;\n  align-items: center;\n\n  @media only screen and (max-width: 767px) {\n    p {\n      text-align: center;\n    }\n  }\n"], ["\n  display:flex;\n  flex-direction:column;\n  align-items: center;\n\n  @media only screen and (max-width: 767px) {\n    p {\n      text-align: center;\n    }\n  }\n"]))),
                m = (0, s.ZP)(d.Dx)(a || (a = p(["\n    font-weight: 400;\n    span:first-child {\n        color: ", ";\n    }\n    span:last-child {\n        display: block;\n    }\n"], ["\n    font-weight: 400;\n    span:first-child {\n        color: ", ";\n    }\n    span:last-child {\n        display: block;\n    }\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                f = s.ZP.div(l || (l = p(["\n    width: 100%;\n\n    ul {\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n\n    li {\n        flex-basis: 15%;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      width: 100%;\n    }\n\n    @media only screen and (orientation: portrait) and (max-width: 767px) {\n      li {\n        flex-basis: 33%;\n      }\n    }\n"], ["\n    width: 100%;\n\n    ul {\n      display: flex;\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n\n    li {\n        flex-basis: 15%;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      width: 100%;\n    }\n\n    @media only screen and (orientation: portrait) and (max-width: 767px) {\n      li {\n        flex-basis: 33%;\n      }\n    }\n"]))),
                x = s.ZP.div(c || (c = p(["\n  height: 52px;\n  border-radius: 12px;\n  background: ", ";\n  width: 100%;\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  cursor: pointer;\n  align-items: center;\n  color: ", ";\n\n  svg {\n    transform: rotate(-90deg);\n  }\n\n  p {\n    width: -webkit-fill-available;\n  }\n"], ["\n  height: 52px;\n  border-radius: 12px;\n  background: ", ";\n  width: 100%;\n  display: flex;\n  gap: 12px;\n  padding: 16px;\n  cursor: pointer;\n  align-items: center;\n  color: ", ";\n\n  svg {\n    transform: rotate(-90deg);\n  }\n\n  p {\n    width: -webkit-fill-available;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white
                }))
        },
        42847: function(n, e, t) {
            "use strict";
            t.d(e, {
                Z9: function() {
                    return V
                },
                oy: function() {
                    return M
                },
                ZP: function() {
                    return _
                }
            });
            var i, r, o, a, l, c, s, d, p, u, h, g, m = t(92809),
                f = t(94564),
                x = t(94381),
                b = t(89598),
                v = t(78294),
                w = t(13978),
                y = t(11720),
                Z = t(45024),
                k = t(25675),
                P = t(6268),
                O = t(25617),
                C = t(66971),
                S = t(11163),
                j = t(88557),
                L = t(80030),
                T = t(76559),
                B = t(77691),
                z = t(50445),
                A = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                E = z.ZP.ul(i || (i = A(["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  width: ", ";\n  padding: 1px 0 0 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0;\n  width: ", ";\n  padding: 1px 0 0 0;\n  z-index: ", ";\n"])), (function(n) {
                    return "hero-container" === n.element ? "40%" : "100%"
                }), (function(n) {
                    return "hero-container" === n.element ? "1" : "auto"
                })),
                R = z.ZP.span(a || (a = A(["\n  width: 100%;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(11, 2, 35, 0.5);\n\n  object-fit: cover;\n  max-width: 100%;\n  width: 100%;\n  aspect-ratio: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  width: 100%;\n  border-radius: 8px;\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(11, 2, 35, 0.5);\n\n  object-fit: cover;\n  max-width: 100%;\n  width: 100%;\n  aspect-ratio: ", ";\n\n  ", "\n\n  ", "\n"])), (function(n) {
                    return "vertical" === n.tileType ? "32/43" : "1"
                }), (function(n) {
                    return "vertical" === n.tileType && (0, z.iv)(r || (r = A(["\n      @supports not (aspect-ratio: auto) {\n        @media screen and (orientation: portrait) {\n          height: 172px;\n          width: 129px;\n          max-width: 129px;\n        }\n\n        @media screen  (orientation: landscape) {\n          height: 215px;\n          width: 160px;\n          max-width: 160px;\n        }\n      }\n    "], ["\n      @supports not (aspect-ratio: auto) {\n        @media screen and (orientation: portrait) {\n          height: 172px;\n          width: 129px;\n          max-width: 129px;\n        }\n\n        @media screen  (orientation: landscape) {\n          height: 215px;\n          width: 160px;\n          max-width: 160px;\n        }\n      }\n    "])))
                }), (function(n) {
                    return "vertical" !== n.tileType && (0, z.iv)(o || (o = A(["\n      @supports not (aspect-ratio: auto) {\n          height: 110px;\n          width: 110px;\n          max-width: 110px;\n      }\n    "], ["\n      @supports not (aspect-ratio: auto) {\n          height: 110px;\n          width: 110px;\n          max-width: 110px;\n      }\n    "])))
                })),
                G = z.ZP.li(s || (s = A(["\n  display: flex;\n  width: 100%;\n\n  ", "\n"], ["\n  display: flex;\n  width: 100%;\n\n  ", "\n"])), (function(n) {
                    return "vertical" === n.tileType ? (0, z.iv)(l || (l = A(["\n    max-width: calc(100%/var(--grid-vertical-items-per-row) - var(--grid-vertical-item-margin));\n    margin: 0 calc(var(--grid-vertical-item-margin)/2) var(--grid-vertical-item-margin);\n  "], ["\n    max-width: calc(100%/var(--grid-vertical-items-per-row) - var(--grid-vertical-item-margin));\n    margin: 0 calc(var(--grid-vertical-item-margin)/2) var(--grid-vertical-item-margin);\n  "]))) : (0, z.iv)(c || (c = A(["\n    max-width: calc(100%/var(--grid-items-per-row) - var(--grid-item-margin));\n    margin: 0 calc(var(--grid-item-margin)/2) var(--grid-item-margin);\n  "], ["\n    max-width: calc(100%/var(--grid-items-per-row) - var(--grid-item-margin));\n    margin: 0 calc(var(--grid-item-margin)/2) var(--grid-item-margin);\n  "])))
                })),
                I = z.ZP.a(p || (p = A(["\n  color: ", ";\n  width: 100%;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  gap: 4px;\n  padding: ", ";\n  background:", ";\n  border-radius: 8px;\n  .game-info-tooltip{\n    flex-direction: column;\n    z-index:1;\n    &:before {\n      content: '';\n    }\n  }\n  &:before {\n    content: '';\n    bottom: -8.5px;\n    background: ", ";\n    filter: blur(8px);\n    position: absolute;\n    height: 12px;\n    width: 84%;\n    border-radius: 50%;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:after {\n    position: absolute;\n    content: '';\n    opacity: 0;\n    top: -1px;\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    border-radius: 8px;\n    border: 1px solid ", ";\n  }\n  &:hover{\n    .game-info-tooltip{\n      display: flex;\n    }\n\n    ", "\n\n    ", "\n  }\n\n  p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n\n  .playing-overlay{\n    position:absolute;\n    top:30%;\n    left:50%;\n    transform:translate(-50%,-15%);\n    padding: 6px calc(100% / 8);\n    color:", ";\n    background: rgba(17, 17, 17, 0.7);\n    backdrop-filter: blur(12px);\n    border-radius: 24px;\n  }\n"], ["\n  color: ", ";\n  width: 100%;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  gap: 4px;\n  padding: ", ";\n  background:", ";\n  border-radius: 8px;\n  .game-info-tooltip{\n    flex-direction: column;\n    z-index:1;\n    &:before {\n      content: '';\n    }\n  }\n  &:before {\n    content: '';\n    bottom: -8.5px;\n    background: ", ";\n    filter: blur(8px);\n    position: absolute;\n    height: 12px;\n    width: 84%;\n    border-radius: 50%;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:after {\n    position: absolute;\n    content: '';\n    opacity: 0;\n    top: -1px;\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    border-radius: 8px;\n    border: 1px solid ", ";\n  }\n  &:hover{\n    .game-info-tooltip{\n      display: flex;\n    }\n\n    ", "\n\n    ", "\n  }\n\n  p {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n  }\n\n  .playing-overlay{\n    position:absolute;\n    top:30%;\n    left:50%;\n    transform:translate(-50%,-15%);\n    padding: 6px calc(100% / 8);\n    color:", ";\n    background: rgba(17, 17, 17, 0.7);\n    backdrop-filter: blur(12px);\n    border-radius: 24px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return "vertical" === n.tileType ? "0" : "8px"
                }), (function(n) {
                    return n.isCurrentGame ? "rgba(255, 255, 255, 0.1)" : ""
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.isCurrentGame ? "" : "\n      background: #111111;\n        &:after, &:before {\n          opacity: 1;\n        }\n        .overlay-hue{\n          display:flex;\n        }\n      "
                }), (function(n) {
                    return "vertical" === n.tileType && (0, z.iv)(d || (d = A(["\n      .app-info {\n        display: inline-block;\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 41.67%);\n        border-radius: 0px 0px 8px 8px;\n\n        button {\n          display: flex;\n        }\n      }\n    "], ["\n      .app-info {\n        display: inline-block;\n        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 41.67%);\n        border-radius: 0px 0px 8px 8px;\n\n        button {\n          display: flex;\n        }\n      }\n    "])))
                }), (function(n) {
                    return n.theme.colors.white
                })),
                D = z.ZP.div(h || (h = A(["\n  width: 100%;\n\n  button {\n    display: none;\n    width: 100%;\n    margin-top: 6px;\n    padding: 7px;\n  }\n\n  ", "\n"], ["\n  width: 100%;\n\n  button {\n    display: none;\n    width: 100%;\n    margin-top: 6px;\n    padding: 7px;\n  }\n\n  ", "\n"])), (function(n) {
                    return "vertical" === n.tileType && (0, z.iv)(u || (u = A(["\n    position: absolute;\n    padding: 12px;\n    bottom: 0;\n    display: none;\n  "], ["\n    position: absolute;\n    padding: 12px;\n    bottom: 0;\n    display: none;\n  "])))
                })),
                N = z.ZP.div(g || (g = A(["\n    position:absolute;\n    top:25px;\n    left:20%;\n    transform:translate(-50%,-15%);\n    padding: 6px calc(100% / 8);\n    color:", ";\n    background: #398B4D;\n    border: 1px solid #B3D661;\n    backdrop-filter: blur(60px);\n    border-radius: 4px 24px 24px 4px;\n\n    &:hover {\n      background: #62676A;\n    }\n"], ["\n    position:absolute;\n    top:25px;\n    left:20%;\n    transform:translate(-50%,-15%);\n    padding: 6px calc(100% / 8);\n    color:", ";\n    background: #398B4D;\n    border: 1px solid #B3D661;\n    backdrop-filter: blur(60px);\n    border-radius: 4px 24px 24px 4px;\n\n    &:hover {\n      background: #62676A;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                X = t(97997);

            function F(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            var U = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                H = "".concat(x.u1, "placeholder-image.jpg"),
                M = function(n) {
                    var e = n.src,
                        t = U(n, ["src"]),
                        i = (0, y.useState)(e),
                        r = i[0],
                        o = i[1];
                    return (0, X.tZ)(k.default, function(n) {
                        for (var e = 1; e < arguments.length; e++) {
                            var t = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? F(Object(t), !0).forEach((function(e) {
                                (0, m.Z)(n, e, t[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach((function(e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                            }))
                        }
                        return n
                    }({
                        src: r,
                        onLoadingComplete: function(n) {
                            0 === n.naturalWidth && "Mozilla Firefox" !== B.Xh && o(H)
                        },
                        onError: function() {
                            o(H)
                        },
                        objectFit: "cover",
                        layout: "fill",
                        loader: Z.O
                    }, t))
                },
                V = function(n) {
                    var e = n.gameList,
                        t = void 0 === e ? [] : e,
                        i = n.tileType,
                        r = n.element,
                        o = void 0 === r ? "NA" : r,
                        a = n.media,
                        l = void 0 === a ? "icon" : a,
                        c = n.playCurrentGame,
                        s = (n.alignCenter, n.onGameClick),
                        d = n.type,
                        p = void 0 === d ? "redirect" : d,
                        u = (n.openPlayPageUrl, n.kname),
                        h = void 0 === u ? "game-grid" : u,
                        g = (n.source, n.isAppPage),
                        m = n.showAdFreeTag,
                        y = void 0 !== m && m,
                        Z = n.showGridAsSidebar,
                        k = void 0 !== Z && Z,
                        z = n.id,
                        A = void 0 === z ? "" : z,
                        F = (0, O.I0)(),
                        U = (0, O.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        H = (0, S.useRouter)(),
                        V = (0, L.Z)(!g);
                    return (0, X.tZ)(E, {
                        element: o,
                        id: A,
                        children: t.map((function(n) {
                            var e;
                            return (0, X.tZ)(G, {
                                tileType: i,
                                style: k ? {
                                    maxWidth: "calc(100%/2 - 20px)",
                                    margin: "0 calc(20px/2) 20px"
                                } : {},
                                children: (0, X.BX)(I, {
                                    href: "link" === p ? V ? (0, j.wh)(n.appPageUrl) : n.appPageUrl : void 0,
                                    tileType: i,
                                    isCurrentGame: n.appId === v.ZP.appInfo.appId,
                                    onClick: function(e) {
                                        return s && "function" === typeof s && s(n), e.preventDefault(), n.appId === v.ZP.appInfo.appId ? c() : function(n, e, t, i, r, o, a) {
                                            (0, b.L9)(a ? "SuggestedAppClicked" : x.S5, {
                                                element: t,
                                                action: "Clicked",
                                                packageName: n.packageName
                                            }, (function() {
                                                var e = (0, j.wh)(n.appPageUrl || n.playUrl, -1 !== t.indexOf(x.$D) ? "SearchBarGameClicked" : -1 !== t.indexOf("Recent") ? "OverlayPortalRecentGames" : "OverlayPortalOtherGames");
                                                r ? o({
                                                    type: C.Z.UPDATE_IS_RECORDING,
                                                    payload: {
                                                        showRecordingModalBeforeExit: !0,
                                                        showRecordingModalBeforeExitSource: "gameTile",
                                                        urlToOpenAfterRecordModalExit: e
                                                    }
                                                }) : window.open(e, "_self")
                                            }), a ? T.a.APP_PAGE : void 0)
                                        }(n, H.pathname, o, 0, U, F, !!g), !1
                                    },
                                    children: [(0, X.tZ)(R, {
                                        tileType: i,
                                        children: n.media[l] && (0, X.tZ)(M, {
                                            src: null !== (e = n.media[l]) && void 0 !== e ? e : "",
                                            alt: (0, w.t)("playOnlineOnNowgg", {
                                                appName: n.appName
                                            }),
                                            quality: "default" === i ? 80 : 100,
                                            fetchpriority: "low",
                                            unoptimized: "default" !== i,
                                            sizes: "(max-width: 720px) 64px,\n                    128px"
                                        })
                                    }), n.appId === v.ZP.appInfo.appId && (0, X.tZ)("div", {
                                        className: "playing-overlay",
                                        children: (0, X.tZ)(f.qm, {
                                            children: (0, w.t)("playing")
                                        })
                                    }), y && (0, B.c6)(n.packageName) && (0, B.jk)() && (0, X.tZ)(N, {
                                        children: (0, X.tZ)(f.qm, {
                                            children: (0, w.t)("adFree")
                                        })
                                    }), (0, X.BX)(D, {
                                        tileType: i,
                                        className: "app-info",
                                        children: [(0, X.tZ)(f.IS, {
                                            children: n.appName
                                        }), (0, X.tZ)(P.z, {
                                            children: (0, X.tZ)(f.IS, {
                                                children: (0, w.t)("playNow")
                                            })
                                        })]
                                    })]
                                }, n.appId)
                            })
                        }))
                    }, "".concat(h, "-wrap"))
                },
                _ = V
        },
        79354: function(n, e, t) {
            "use strict";
            t.d(e, {
                ol: function() {
                    return a
                },
                x8: function() {
                    return l
                },
                WD: function() {
                    return c
                },
                eJ: function() {
                    return s
                },
                lU: function() {
                    return d
                },
                pL: function() {
                    return p
                },
                Qp: function() {
                    return u
                },
                EH: function() {
                    return h
                },
                fX: function() {
                    return g
                },
                HT: function() {
                    return m
                }
            });
            var i = t(26544),
                r = t(97997),
                o = function() {
                    return (o = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                a = function(n) {
                    var e = n.style,
                        t = n.onClick;
                    return (0, r.tZ)("svg", {
                        style: o({
                            width: "1.3vw",
                            marginRight: "0.5vw"
                        }, e),
                        onClick: t,
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "22",
                        height: "21",
                        viewBox: "0 0 22 21",
                        fill: "none",
                        children: (0, r.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M15.812 14.8257L20.9165 19.929C21.1587 20.1712 21.1587 20.5716 20.9165 20.8137C20.7954 20.9395 20.6324 21 20.4741 21C20.3157 21 20.1527 20.9348 20.0316 20.8137L14.9272 15.7104C13.353 17.0794 11.2991 17.9082 9.05423 17.9082C4.11744 17.9082 0.0981445 13.8898 0.0981445 8.9541C0.0981445 4.0184 4.11278 0 9.05423 0C13.991 0 18.0103 4.01375 18.0103 8.9541C18.0103 11.1984 17.1813 13.2519 15.812 14.8257ZM9.04962 1.25721C4.80678 1.25721 1.35102 4.70755 1.35102 8.95411C1.35102 13.2007 4.80678 16.6557 9.04962 16.6557C13.2971 16.6557 16.7482 13.196 16.7482 8.95411C16.7482 4.7122 13.2971 1.25721 9.04962 1.25721Z",
                            fill: "white"
                        })
                    })
                },
                l = function(n) {
                    var e = n.style;
                    return (0, r.BX)("svg", {
                        style: o({}, e),
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.tZ)("path", {
                            d: "M16.875 3.125L3.125 16.875",
                            stroke: "white",
                            strokeLinecap: "round"
                        }), (0, r.tZ)("path", {
                            d: "M16.875 16.875L3.125 3.125",
                            stroke: "white",
                            strokeLinecap: "round"
                        })]
                    })
                },
                c = function(n) {
                    var e = n.style;
                    return (0, r.BX)("svg", {
                        style: o({}, e),
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.tZ)("rect", {
                            x: "14.75",
                            y: "14.5",
                            width: "6.5",
                            height: "6.5",
                            rx: "1.5",
                            stroke: "rgba(255, 255, 255, 0.8)",
                            strokeOpacity: "0.8"
                        }), (0, r.tZ)("path", {
                            d: "M10 15C8.89231 16.1077 5.53846 19.4615 4 21M4 15L10 21",
                            stroke: "rgba(255, 255, 255, 0.8)",
                            strokeOpacity: "0.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, r.tZ)("circle", {
                            cx: "7",
                            cy: "6",
                            r: "3.5",
                            stroke: "rgba(255, 255, 255, 0.8)",
                            strokeOpacity: "0.8"
                        }), (0, r.tZ)("path", {
                            d: "M18.4472 2.77639C18.3625 2.607 18.1894 2.5 18 2.5C17.8106 2.5 17.6375 2.607 17.5528 2.77639L14.5528 8.77639C14.4753 8.93139 14.4836 9.11546 14.5747 9.26287C14.6658 9.41027 14.8267 9.5 15 9.5H21C21.1733 9.5 21.3342 9.41027 21.4253 9.26287C21.5164 9.11546 21.5247 8.93139 21.4472 8.77639L18.4472 2.77639Z",
                            stroke: "rgba(255, 255, 255, 0.8)",
                            strokeOpacity: "0.8",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                s = function(n) {
                    var e = n.style;
                    return (0, r.tZ)("svg", {
                        style: o({}, e),
                        width: "13",
                        height: "11",
                        viewBox: "0 0 13 11",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.tZ)("path", {
                            d: "M5.5 1L1 5.5M1 5.5L5.5 10M1 5.5H12",
                            stroke: "white",
                            strokeOpacity: "0.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                },
                d = function(n) {
                    var e = n.style;
                    return (0, r.BX)("svg", {
                        style: o({}, e),
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, r.tZ)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10.5",
                            stroke: "white",
                            strokeOpacity: "0.8"
                        }), (0, r.tZ)("path", {
                            d: "M11.5 7L7 11.5M7 11.5L11.5 16M7 11.5H18",
                            stroke: "white",
                            strokeOpacity: "0.8",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                },
                p = function(n) {
                    var e = n.color,
                        t = void 0 === e ? "white" : e,
                        o = n.onClick;
                    return (0, r.tZ)("svg", {
                        onClick: o,
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.3536 6.11617C12.1583 5.92091 11.8417 5.92091 11.6464 6.11617L8 9.76262L4.35355 6.11617C4.15829 5.92091 3.84171 5.92091 3.64645 6.11617C3.45118 6.31143 3.45118 6.62802 3.64645 6.82328L7.64645 10.8233C7.84171 11.0185 8.15829 11.0185 8.35355 10.8233L12.3536 6.82328C12.5488 6.62802 12.5488 6.31144 12.3536 6.11617Z",
                            fill: i.qm.colors[t]
                        })
                    })
                },
                u = function(n) {
                    var e = n.color,
                        t = void 0 === e ? "caution" : e;
                    return (0, r.tZ)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "16",
                        height: "17",
                        viewBox: "0 0 16 17",
                        fill: "none",
                        children: (0, r.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.66959 2.57931C3.66483 2.50295 3.68028 2.38646 3.75813 2.21731C4.02924 1.89165 4.22072 1.82019 4.32834 1.80886C4.44287 1.7968 4.59677 1.8383 4.81993 2.01002C5.04366 2.18219 5.2736 2.43598 5.5292 2.73864C5.57804 2.79647 5.62814 2.85651 5.67923 2.91772L5.67932 2.91783L5.6794 2.91793L5.67944 2.91798L5.67945 2.91799C5.87469 3.15195 6.08427 3.4031 6.29272 3.61413L6.50097 3.87441L6.48229 3.86912C6.33037 3.82614 6.18049 3.78479 6.03332 3.74419L6.03327 3.74417L6.03326 3.74417L6.03325 3.74417L6.03325 3.74417C5.57745 3.61841 5.14761 3.49982 4.76329 3.36241C4.24124 3.17576 3.91778 2.991 3.76594 2.80594C3.70127 2.72712 3.67436 2.65593 3.66959 2.57931ZM6.46387 2.29699L6.46387 2.29698L6.46385 2.29696C6.40863 2.23084 6.35189 2.16292 6.2932 2.09342C6.03845 1.79178 5.74764 1.46211 5.42979 1.21751C5.11136 0.972474 4.70283 0.763905 4.22365 0.814351C3.74206 0.86505 3.32019 1.16305 2.94283 1.63482L2.90975 1.67618L2.88607 1.72354C2.73341 2.02886 2.65252 2.33645 2.67152 2.64147C2.69092 2.95304 2.81204 3.21987 2.99286 3.44025C3.332 3.85358 3.88934 4.11194 4.42663 4.30404C4.56464 4.35338 4.70885 4.40075 4.85665 4.44663H2.33337C1.50495 4.44663 0.833374 5.1182 0.833374 5.94663V7.61329V8.11329H1.33337H14.6667H15.1667V7.61329V5.94662C15.1667 5.1182 14.4951 4.44663 13.6667 4.44663H11.5294C12.0118 4.29925 12.5041 4.09536 12.8379 3.75293C13.0285 3.55743 13.1698 3.31488 13.2251 3.02154C13.2795 2.73297 13.2441 2.43084 13.1411 2.12165L13.1298 2.08791L13.1139 2.05611C12.8892 1.6068 12.5882 1.27305 12.1865 1.12583C11.7829 0.977887 11.3847 1.05748 11.0516 1.20456C10.7213 1.35033 10.4062 1.58279 10.124 1.82417C9.83892 2.06801 9.56135 2.34403 9.31275 2.59267L9.29676 2.60866L9.28229 2.62603L8.00687 4.15589L7.05677 2.9684L7.03949 2.94681L7.01993 2.92725C6.83989 2.74718 6.66154 2.53365 6.46389 2.29701L6.46388 2.29699L6.46387 2.29699ZM12.2424 2.83621C12.2569 2.75955 12.2562 2.64353 12.203 2.47112C12.0505 2.17849 11.9164 2.09187 11.8424 2.06476C11.7678 2.03739 11.6514 2.03287 11.4554 2.11937C11.2565 2.20717 11.0281 2.36679 10.774 2.58412C10.5281 2.79443 10.282 3.03775 10.0359 3.28375L9.5144 3.90927C9.7208 3.85973 9.92006 3.81483 10.1126 3.77143L10.1126 3.77143C10.4782 3.68905 10.8196 3.61211 11.1401 3.51915C11.6415 3.37373 11.9588 3.22212 12.1218 3.05487C12.1925 2.9824 12.228 2.91293 12.2424 2.83621ZM2.33337 5.44662C2.05723 5.44662 1.83337 5.67048 1.83337 5.94663V7.11329H6.16671V5.44662H2.33337ZM8.83337 7.11329H7.16671V5.44662H8.83337V7.11329ZM9.83337 7.11329H14.1667V5.94662C14.1667 5.67048 13.9429 5.44662 13.6667 5.44662H9.83337V7.11329ZM2.00004 8.4466H1.50004V8.9466V15.2799C1.50004 16.1084 2.17161 16.7799 3.00004 16.7799H13C13.8285 16.7799 14.5 16.1084 14.5 15.2799V8.9466V8.4466H14H2.00004ZM2.50004 15.2799V9.4466H6.16671V15.7799H3.00004C2.7239 15.7799 2.50004 15.5561 2.50004 15.2799ZM7.16671 15.7799H8.83337V9.4466H7.16671V15.7799ZM13 15.7799H9.83337L9.83337 9.4466H13.5V15.2799C13.5 15.5561 13.2762 15.7799 13 15.7799Z",
                            fill: i.qm.colors[t]
                        })
                    })
                },
                h = function(n) {
                    var e = n.opacity,
                        t = void 0 === e ? "1" : e,
                        i = n.height,
                        o = void 0 === i ? "16" : i,
                        a = n.width,
                        l = void 0 === a ? "16" : a;
                    return (0, r.tZ)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: l,
                        height: o,
                        viewBox: "0 0 17 17",
                        fill: "none",
                        children: (0, r.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.6705 3.33409C15.6594 3.90287 16.2692 4.95463 16.2692 6.09219V10.9072C16.2692 12.0454 15.6594 13.0965 14.6705 13.6653L10.4828 16.0734C9.49385 16.6422 8.27477 16.6422 7.28585 16.0734L3.09815 13.6653C2.10923 13.0965 1.5 12.0454 1.5 10.9072V6.09219C1.5 4.95463 2.10923 3.90287 3.09815 3.33409L7.28585 0.926585C8.27477 0.357805 9.49385 0.357805 10.4828 0.926585L14.6705 3.33409ZM7.84646 2.0194L3.76831 4.36439C3.12585 4.73398 2.73077 5.41615 2.73077 6.15532V10.8447C2.73077 11.5832 3.12585 12.266 3.76831 12.6356L7.84646 14.98C8.48892 15.3496 9.27969 15.3496 9.92215 14.98L14.0003 12.6356C14.6428 12.266 15.0385 11.5832 15.0385 10.8447V6.15532C15.0385 5.41615 14.6428 4.73398 14.0003 4.36439L9.92215 2.0194C9.27969 1.64982 8.48892 1.64982 7.84646 2.0194ZM9.73692 3.3298L12.9548 5.17956C13.4822 5.48295 13.8077 6.04377 13.8077 6.65116V10.3513C13.8077 10.9581 13.4822 11.5189 12.9548 11.8223L9.73692 13.6726C9.20954 13.976 8.55908 13.976 8.03169 13.6726L4.81385 11.8223C4.28646 11.5189 3.96154 10.9581 3.96154 10.3513V6.65116C3.96154 6.04377 4.28646 5.48295 4.81385 5.17956L8.03169 3.3298C8.55908 3.02641 9.20954 3.02641 9.73692 3.3298ZM7.03846 10.3396H10.7308V6.66219H7.03846V10.3396Z",
                            fill: "white",
                            fillOpacity: t
                        })
                    })
                },
                g = function(n) {
                    var e = n.color,
                        t = void 0 === e ? "white" : e;
                    return (0, r.tZ)("svg", {
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, r.tZ)("g", {
                            id: "R Icon",
                            children: (0, r.tZ)("path", {
                                id: "coin",
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M14.6705 2.83409C15.6594 3.40287 16.2692 4.45463 16.2692 5.59219V10.4072C16.2692 11.5454 15.6594 12.5965 14.6705 13.1653L10.4828 15.5734C9.49385 16.1422 8.27477 16.1422 7.28585 15.5734L3.09815 13.1653C2.10923 12.5965 1.5 11.5454 1.5 10.4072V5.59219C1.5 4.45463 2.10923 3.40287 3.09815 2.83409L7.28585 0.426585C8.27477 -0.142195 9.49385 -0.142195 10.4828 0.426585L14.6705 2.83409ZM7.84646 1.5194L3.76831 3.86439C3.12585 4.23398 2.73077 4.91615 2.73077 5.65532V10.3447C2.73077 11.0832 3.12585 11.766 3.76831 12.1356L7.84646 14.48C8.48892 14.8496 9.27969 14.8496 9.92215 14.48L14.0003 12.1356C14.6428 11.766 15.0385 11.0832 15.0385 10.3447V5.65532C15.0385 4.91615 14.6428 4.23398 14.0003 3.86439L9.92215 1.5194C9.27969 1.14982 8.48892 1.14982 7.84646 1.5194ZM9.73692 2.8298L12.9548 4.67956C13.4822 4.98295 13.8077 5.54377 13.8077 6.15116V9.85129C13.8077 10.4581 13.4822 11.0189 12.9548 11.3223L9.73692 13.1726C9.20954 13.476 8.55908 13.476 8.03169 13.1726L4.81385 11.3223C4.28646 11.0189 3.96154 10.4581 3.96154 9.85129V6.15116C3.96154 5.54377 4.28646 4.98295 4.81385 4.67956L8.03169 2.8298C8.55908 2.52641 9.20954 2.52641 9.73692 2.8298ZM7.03846 9.83965H10.7308V6.16219H7.03846V9.83965Z",
                                fill: i.qm.colors[t]
                            })
                        })
                    })
                },
                m = function(n) {
                    var e = n.color,
                        t = void 0 === e ? "white" : e;
                    return (0, r.tZ)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "17",
                        height: "16",
                        viewBox: "0 0 17 16",
                        fill: "none",
                        children: (0, r.tZ)("path", {
                            d: "M14 7.14444V5.04978C13.0302 5.04978 12.2901 4.78795 11.8125 4.27904C11.3223 3.69823 11.0477 2.96271 11.0359 2.19914V2.04794L9.07813 2V10.5077C9.01097 10.8789 8.83283 11.2203 8.56776 11.4858C8.30269 11.7514 7.96346 11.9283 7.59585 11.9926C7.22825 12.057 6.84997 12.0057 6.5121 11.8457C6.17422 11.6857 5.89301 11.4247 5.70643 11.0979C5.51985 10.7711 5.43688 10.3943 5.46873 10.0183C5.50058 9.64236 5.6457 9.28531 5.88452 8.9954C6.12334 8.70549 6.44434 8.49668 6.80421 8.39715C7.16407 8.29763 7.54545 8.31218 7.89688 8.43884V6.41057C7.69198 6.37661 7.48471 6.35935 7.27708 6.35894C6.53005 6.35894 5.79979 6.58301 5.17865 7.00282C4.55751 7.42262 4.07339 8.01931 3.78751 8.71742C3.50164 9.41553 3.42684 10.1837 3.57258 10.9248C3.71832 11.6659 4.07805 12.3467 4.60628 12.881C5.13452 13.4153 5.80753 13.7792 6.54021 13.9266C7.27289 14.074 8.03234 13.9983 8.72251 13.7092C9.41268 13.42 10.0026 12.9303 10.4176 12.302C10.8326 11.6738 11.0542 10.9351 11.0542 10.1795C11.0538 10.0229 11.044 9.8665 11.025 9.71112V6.33682C11.9152 6.89918 12.951 7.18036 14 7.14444Z",
                            fill: i.qm.colors[t]
                        })
                    })
                };
            e.ZP = a
        },
        57348: function(n, e, t) {
            "use strict";
            t.d(e, {
                VY: function() {
                    return p
                },
                zx: function() {
                    return u
                }
            });
            var i, r, o, a = t(30150),
                l = t(95860),
                c = t(50445),
                s = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                d = c.ZP.div(i || (i = s(["\n  height: calc(100% - 65px);\n  ", "\n"], ["\n  height: calc(100% - 65px);\n  ", "\n"])), l.be),
                p = c.ZP.div(r || (r = s(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 12px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    text-align: center;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 90px;\n      height: 90px;\n    }\n  }\n"], ["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 12px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    text-align: center;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 90px;\n      height: 90px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                u = (0, c.ZP)(a.Yd)(o || (o = s(["\n  margin-top: 24px;\n  padding: 9.5px 40px;\n  border-radius: 8px;\n"], ["\n  margin-top: 24px;\n  padding: 9.5px 40px;\n  border-radius: 8px;\n"])));
            e.ZP = d
        },
        93772: function(n, e, t) {
            "use strict";
            t.d(e, {
                II: function() {
                    return p
                },
                gx: function() {
                    return u
                },
                Jg: function() {
                    return h
                }
            });
            var i = t(92809),
                r = t(11720),
                o = t(26544),
                a = t(12749),
                l = t(97997);

            function c(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function s(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(t), !0).forEach((function(e) {
                        (0, i.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var d = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                p = function(n) {
                    var e = n.title,
                        t = n.error,
                        i = n.onUpdate,
                        r = n.wrapperClass,
                        c = d(n, ["title", "error", "onUpdate", "wrapperClass"]);
                    return (0, l.BX)(a.X2, {
                        className: r,
                        children: [(0, l.BX)(a.__, {
                            style: {
                                color: o.qm.colors.white
                            },
                            children: [e, " ", c.required ? "*" : ""]
                        }), (0, l.tZ)(a.Wz, s(s({
                            error: !!t,
                            onChange: function(n) {
                                i && "function" === typeof i && i(n.target.value)
                            }
                        }, c), {}, {
                            onKeyUp: function(n) {
                                return n.stopPropagation()
                            },
                            onKeyDown: function(n) {
                                return n.stopPropagation()
                            }
                        }))]
                    })
                },
                u = function(n) {
                    var e = n.title,
                        t = n.error,
                        i = n.limit,
                        c = n.initialValue,
                        p = void 0 === c ? "" : c,
                        u = n.style,
                        h = n.onUpdate,
                        g = d(n, ["title", "error", "limit", "initialValue", "style", "onUpdate"]),
                        m = (0, r.useState)(p.length),
                        f = m[0],
                        x = m[1];
                    return (0, l.BX)(a.X2, {
                        style: u,
                        children: [(0, l.BX)(a.__, {
                            style: {
                                color: o.qm.colors.white
                            },
                            children: [e, " ", g.required ? "*" : ""]
                        }), (0, l.tZ)(a.zC, s({
                            error: !!t,
                            onChange: function(n) {
                                var e = n.target.value.length;
                                i && i < e || (x(e), h(n.target.value))
                            },
                            onKeyUp: function(n) {
                                return n.stopPropagation()
                            },
                            onKeyDown: function(n) {
                                return n.stopPropagation()
                            }
                        }, g)), (0, l.BX)(a.cd, {
                            children: [f, " ", "/", " ", i]
                        })]
                    })
                },
                h = function(n) {
                    var e = n.children,
                        t = n.title,
                        i = n.onChange,
                        r = n.type,
                        c = void 0 === r ? "checkbox" : r,
                        p = d(n, ["children", "title", "onChange", "type"]);
                    return (0, l.tZ)(a.X2, {
                        children: (0, l.BX)(a.XZ, {
                            style: {
                                color: o.qm.colors.white
                            },
                            children: [(0, l.tZ)("input", s({
                                type: c,
                                onChange: i
                            }, p)), t || e]
                        })
                    })
                }
        },
        12749: function(n, e, t) {
            "use strict";
            t.d(e, {
                Wz: function() {
                    return h
                },
                zC: function() {
                    return g
                },
                __: function() {
                    return m
                },
                X2: function() {
                    return f
                },
                cd: function() {
                    return x
                },
                XZ: function() {
                    return b
                }
            });
            var i, r, o, a, l, c, s, d = t(50445),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                u = (0, d.iv)(i || (i = p(["\n  border: ", ";\n  border-radius: 6px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 150%;\n  padding: 8px 12px;\n  color: currentColor;\n  box-shadow: ", ";\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"], ["\n  border: ", ";\n  border-radius: 6px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 150%;\n  padding: 8px 12px;\n  color: currentColor;\n  box-shadow: ", ";\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.border.base4
                }), (function(n) {
                    return n.theme.shadow.small
                }), (function(n) {
                    return n.theme.colors.ascent
                })),
                h = d.ZP.input(r || (r = p(["\n  ", "\n  ", ";\n  color: ", ";\n  background: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  ", "\n  ", ";\n  color: ", ";\n  background: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"])), u, (function(n) {
                    var e = n.theme,
                        t = n.error;
                    return "border-color: ".concat(t ? e.colors.error : e.border.base)
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                g = d.ZP.textarea(o || (o = p(["\n  ", "\n  ", ";\n  height: 120px;\n  resize: none;\n  color: ", ";\n  background: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  ", "\n  ", ";\n  height: 120px;\n  resize: none;\n  color: ", ";\n  background: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"])), u, (function(n) {
                    var e = n.theme,
                        t = n.error;
                    return "border-color: ".concat(t ? e.colors.error : e.border.base)
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                m = d.ZP.label(a || (a = p(["\n  font-size: 12px;\n  line-height: 15px;\n  color: ", ";\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: block;\n  text-transform: uppercase;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  color: ", ";\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: block;\n  text-transform: uppercase;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                f = d.ZP.div(l || (l = p(["\n  position: relative;\n  margin: 16px 0;\n"], ["\n  position: relative;\n  margin: 16px 0;\n"]))),
                x = d.ZP.p(c || (c = p(["\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  color: ", ";\n"], ["\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                b = d.ZP.label(s || (s = p(['\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: currentColor;\n  cursor: pointer;\n\n  &:focus-within {\n    outline: none;\n  }\n\n  input[type="checkbox" i] {\n    margin-right: 10px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: currentColor;\n  cursor: pointer;\n\n  &:focus-within {\n    outline: none;\n  }\n\n  input[type="checkbox" i] {\n    margin-right: 10px;\n  }\n'])))
        },
        30512: function(n, e, t) {
            "use strict";
            var i = t(92809),
                r = (t(11720), t(55734)),
                o = t(97997);

            function a(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            e.Z = function(n) {
                return (0, o.tZ)(r.zL, function(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(t), !0).forEach((function(e) {
                            (0, i.Z)(n, e, t[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : a(Object(t)).forEach((function(e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                        }))
                    }
                    return n
                }({}, n))
            }
        },
        55734: function(n, e, t) {
            "use strict";
            t.d(e, {
                SA: function() {
                    return s
                },
                zL: function() {
                    return d
                }
            });
            var i, r, o, a, l = t(50445),
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = (0, l.F4)(i || (i = c(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"], ["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]))),
                d = (l.ZP.img(r || (r = c(["\n    width: 42px;\n    height: 42px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n"], ["\n    width: 42px;\n    height: 42px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n"])), s), l.ZP.span(a || (a = c(["", ""], ["", ""])), (function(n) {
                    var e = n.width,
                        t = void 0 === e ? "14px" : e,
                        i = n.trackSize,
                        r = void 0 === i ? "1px" : i,
                        a = n.trackColor,
                        d = void 0 === a ? "#D0E6FFE5" : a,
                        p = n.movingColor,
                        u = void 0 === p ? "#0397EB" : p;
                    return (0, l.iv)(o || (o = c(["\n      display: inline-block;\n      position: relative;\n      height: ", ";\n      width: ", ";\n  \n      &::before {\n          content: '';\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%;\n          border: ", " solid ", ";\n          border-bottom-color: ", ";\n          animation-name: ", ";\n          animation-duration: 1s;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n  "], ["\n      display: inline-block;\n      position: relative;\n      height: ", ";\n      width: ", ";\n  \n      &::before {\n          content: '';\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%;\n          border: ", " solid ", ";\n          border-bottom-color: ", ";\n          animation-name: ", ";\n          animation-duration: 1s;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n  "])), t, t, r, d, u, s)
                })))
        },
        82258: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                ErrorModal: function() {
                    return E
                },
                default: function() {
                    return R
                }
            });
            var i = t(78064),
                r = t(89598),
                o = t(11720),
                a = t(26793),
                l = t(79305),
                c = t(45628),
                s = t(77691),
                d = t(94381),
                p = t(52165),
                u = t(88962),
                h = t(78294),
                g = t(88557),
                m = t(6268),
                f = t(42847),
                x = t(11163),
                b = t(7763),
                v = t(50301),
                w = t(25617),
                y = t(62825),
                Z = t(97170),
                k = t(45024),
                P = {
                    src: "/play/_next/static/media/logo-art.5722dca5.svg",
                    height: 180,
                    width: 180
                },
                O = t(94564),
                C = t(13978),
                S = t(57348),
                j = t(97997),
                L = function(n) {
                    var e = n.heading,
                        t = n.subHeading,
                        i = n.cta,
                        r = n.breakFooterText;
                    return (0, j.BX)(S.ZP, {
                        children: [(0, j.BX)(S.VY, {
                            children: [(0, j.tZ)("img", {
                                src: (0, k.j)(P),
                                alt: "",
                                width: 180,
                                height: 180
                            }), (0, j.tZ)(O.Bb, {
                                children: (0, C.t)(e)
                            }), (0, j.tZ)(O.TZ, {
                                children: (0, C.t)(t)
                            }), (0, j.tZ)(S.zx, {
                                onClick: function() {
                                    window.location.reload()
                                },
                                children: (0, C.t)(i)
                            })]
                        }), (0, j.tZ)(p.Z, {
                            breakFooterText: r
                        })]
                    })
                },
                T = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                B = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                z = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                A = {
                    FailureNoResource: {
                        head1: "errorServerOverloaded",
                        head2: "playAmazingGames"
                    },
                    FailureMobileNotSupported: {
                        head1: "errorNotSupported",
                        head2: "playAmazingGames"
                    },
                    FailureDesktopNotSupported: {
                        head1: "errorNotSupported",
                        head2: "playAmazingGames"
                    },
                    FailureTabletNotSupported: {
                        head1: "errorNotSupported",
                        head2: "playAmazingGames"
                    },
                    FailureOsNotSupported: {
                        head1: "errorNotSupported",
                        head2: "playAmazingGames"
                    },
                    FailureAppNotAvailable: {
                        head1: "errorGameNotFound",
                        head2: "playAmazingGames"
                    },
                    FailureServiceNotInRegion: {
                        head1: "errorServiceNotInRegion",
                        head2: "checkEpicGames"
                    },
                    NotFound: {
                        head1: "errorNotFound",
                        head2: "tryPerformingGames"
                    },
                    Failure: {
                        head1: "errorFailure",
                        head2: "tryPerformingGames"
                    },
                    FailureInvalidPlayToken: {
                        head1: "errorInvalidPlayToken",
                        head2: "checkFunGames"
                    },
                    FailureTokenExpired: {
                        head1: "errorFailureTokenExpired.heading",
                        head2: "errorFailureTokenExpired.subHeading"
                    },
                    FailureInvalidToken: {
                        head1: "errorFailureInvalidToken.heading",
                        head2: "errorFailureInvalidToken.subHeading"
                    }
                },
                E = function(n) {
                    var e, t, k, P = n.error,
                        O = void 0 === P ? "Failure" : P,
                        C = (n.origin, n.errorName),
                        S = (0, s.tq)(),
                        E = (0, s.Em)(),
                        R = ((0, x.useRouter)(), (0, o.useState)(null)),
                        G = R[0],
                        I = R[1],
                        D = (0, o.useState)("-landscape"),
                        N = D[0],
                        X = D[1],
                        F = (0, o.useState)(10),
                        U = F[0],
                        H = F[1],
                        M = (0, a.$)().t,
                        V = (0, o.useState)(M("refreshSecs").replace("{0}", U.toLocaleString())),
                        _ = V[0],
                        q = V[1],
                        Y = (0, o.useState)(""),
                        W = Y[0],
                        J = Y[1],
                        $ = (0, o.useState)(!1),
                        K = $[0],
                        Q = $[1],
                        nn = (0, w.v9)((function(n) {
                            return n.play.showAllGamesOverlay
                        })),
                        en = (0, w.v9)((function(n) {
                            return n.play.showExploreGamesOverlay
                        })),
                        tn = (0, w.v9)((function(n) {
                            return n.play.errorDescription
                        })),
                        rn = (0, w.v9)((function(n) {
                            return n.play.consoleHeaderRef
                        })),
                        on = (0, w.v9)((function(n) {
                            return n.support.showSupport
                        })),
                        an = (null === (e = A[O]) || void 0 === e ? void 0 : e.head1) || A.Failure.head1,
                        ln = (null === (t = A[O]) || void 0 === t ? void 0 : t.head2) || A.Failure.head2,
                        cn = (0, w.I0)(),
                        sn = function(n) {
                            for (var e = n.length - 1; e > 0; e -= 1) {
                                var t = Math.floor(Math.random() * (e + 1)),
                                    i = n[e];
                                n[e] = n[t], n[t] = i
                            }
                            return n
                        },
                        dn = function() {
                            var n = window.orientation;
                            0 === n ? X("-portrait") : 90 === n || -90 === n ? X("-landscape") : 180 !== n && -180 !== n || X("-portrait")
                        };
                    (0, o.useEffect)((function() {
                        return (0, r.UY)(!1), (0, u.Z)(), dn(), document.body.classList.remove(d.pp), document.body.classList.remove(d.Ov), d.D3.includes(O) && J(M(an, {
                                appName: h.ZP.appInfo.appName
                            })), window.addEventListener("orientationchange", dn), (0, r.L9)("ErrorScreen", {
                                error: O,
                                errorName: C || "None",
                                errorDescription: tn
                            }), T(void 0, void 0, void 0, (function() {
                                var n, e, t, i, r, o, a, p, u, h, g, m, f, x, b, v, w, y;
                                return B(this, (function(Z) {
                                    switch (Z.label) {
                                        case 0:
                                            return [4, l.Z.getAppsList({}, {})];
                                        case 1:
                                            return (n = Z.sent()) ? (n && (e = sessionStorage.getItem("popularGamesList"), t = e ? JSON.parse(e) : {}, i = n.topApps, r = void 0 === i ? [] : i, o = n.topBarApps, a = void 0 === o ? [] : o, p = n.remainingApps, u = void 0 === p ? [] : p, h = n.otherApps, g = void 0 === h ? [] : h, m = Object.keys(t).length >= 2 ? t[0].concat(t[1]) : [], f = z(z(z(z([], r, !0), a, !0), u, !0), g, !0), x = f.filter((function(n) {
                                                return (0, s.M2)(n.packageName)
                                            })), e && 0 !== m.length ? (d.ut.includes(O) || (m = m.filter((function(n) {
                                                return 4 !== n.appId.length
                                            }))), b = S || E ? 7 : 12, m.length < b && (d.ut.includes(O) || (f = f.filter((function(n) {
                                                return 4 !== n.appId.length
                                            }))), v = sn(f), w = v.slice(0, 46), y = Math.floor(w.length / 2), t[0] = w.splice(0, y), t[1] = w.splice(-y), sessionStorage.setItem("popularGamesList", JSON.stringify(t)), m = t[0].concat(t[1]))) : f && (d.ut.includes(O) || (f = f.filter((function(n) {
                                                return 4 !== n.appId.length
                                            }))), v = sn(f), w = v.slice(0, 46), y = Math.floor(w.length / 2), t[0] = w.splice(0, y), t[1] = w.splice(-y), sessionStorage.setItem("popularGamesList", JSON.stringify(t)), m = t[0].concat(t[1])), x.length && O === c.YR.FailureServiceNotInRegion && (m = m.filter((function(n) {
                                                return !(0, s.M2)(n.packageName)
                                            }))).unshift(x[0]), I(S ? m.slice(0, 6) : m.slice(0, 5))), [2]) : [2]
                                    }
                                }))
                            })),
                            function() {
                                window.removeEventListener("orientationchange", dn)
                            }
                    }), []), (0, o.useEffect)((function() {
                        setTimeout((function() {
                            U > 0 ? (H(U - 1), q(M("refreshSecs").replace("{0}", U.toLocaleString()))) : (q(M("tryRefresh")), Q(!0))
                        }), 1e3)
                    }), [U]);
                    var pn = function() {
                            K && (0, g.iI)("RefreshBtn")
                        },
                        un = function(n) {
                            var e;
                            if (n.playUrl) {
                                (0, r.L9)(d.S5, {
                                    element: "ErrorScreenGameIcon",
                                    action: "Clicked",
                                    packageName: n.packageName
                                });
                                var t = (null === (e = null === n || void 0 === n ? void 0 : n.playUrl) || void 0 === e ? void 0 : e.includes("utm_campaign")) ? n.playUrl.replace("popular_games", "portal") : n.playUrl.concat("?utm_campaign=portal");
                                window.location.href = t
                            }
                        },
                        hn = function() {
                            cn({
                                type: y.Z.GET_SUPPORT
                            }), cn({
                                type: y.Z.SET_ERROR_TYPE,
                                payload: {
                                    errorType: O
                                }
                            })
                        },
                        gn = (0, o.useCallback)((function() {
                            (0, r.L9)(d.S5, {
                                element: "ErrorScreenBrowseBtn",
                                state: "Clicked"
                            }), window.location.href = (0, g.ZP)("https://now.gg", "ErrorPage")
                        }), []),
                        mn = (0, o.useMemo)((function() {
                            return !(!S || "-portrait" !== N)
                        }), [N]),
                        fn = {
                            width: "100%",
                            height: "auto",
                            position: "fixed",
                            top: "".concat((null === (k = null === rn || void 0 === rn ? void 0 : rn.current) || void 0 === k ? void 0 : k.clientHeight) || 0, "px"),
                            bottom: "65px"
                        };
                    return (0, j.BX)(j.HY, {
                        children: [en && (0, j.tZ)(v.Z, {
                            style: fn
                        }), nn && (0, j.tZ)(b.default, {
                            style: fn
                        }), (0, j.tZ)(i.mU, {
                            className: "\n      ".concat(S || E ? "mobileErr " : "desktopErr", "\n      ").concat(d.Bq[O] ? "errorCode " : "", "\n      ").concat(N, "\n    "),
                            children: O === c.YR.FailureTokenExpired || O === c.YR.FailureInvalidToken ? (0, j.tZ)(L, {
                                heading: A[O].head1,
                                subHeading: A[O].head2,
                                cta: O === c.YR.FailureTokenExpired ? "retryNow" : "refreshNow",
                                breakFooterText: mn
                            }) : (0, j.BX)(i.Zt, {
                                children: [S && "-portrait" !== N ? (0, j.BX)(j.HY, {
                                    children: [(0, j.BX)(i.OO, {
                                        children: [d.Bq[O] && (0, j.tZ)(i.jK, {
                                            children: "".concat(M("error"), " NG ").concat(d.Bq[O])
                                        }), (0, j.tZ)("h2", {
                                            children: d.D3.includes(O) ? W : M(an)
                                        }), O === c.YR.FailureInvalidPlayToken && (0, j.BX)(i.J0, {
                                            children: [(0, j.tZ)("p", {
                                                children: _
                                            }), (0, j.tZ)(m.z, {
                                                size: "default",
                                                disabled: !K,
                                                variant: "defaultOutline",
                                                style: {
                                                    padding: "7px 16px"
                                                },
                                                onClick: pn,
                                                text: M("refreshNow"),
                                                id: "ng-error-refresh-btn"
                                            })]
                                        }), G && (null === G || void 0 === G ? void 0 : G.length) > 0 && (0, j.BX)(j.HY, {
                                            children: [(0, j.tZ)("h3", {
                                                children: M(ln)
                                            }), (0, j.BX)(i.w3, {
                                                isMobile: (0, s.tq)(),
                                                children: [(0, j.tZ)(m.z, {
                                                    variant: "secondary",
                                                    onClick: gn,
                                                    text: M("browseGames"),
                                                    id: "ng-error-browse-more-btn"
                                                }), (0, j.tZ)(m.z, {
                                                    variant: "defaultOutline",
                                                    onClick: hn,
                                                    text: M("reportIssue"),
                                                    id: "ng-error-report-btn"
                                                })]
                                            })]
                                        })]
                                    }), G && (null === G || void 0 === G ? void 0 : G.length) > 0 && (0, j.tZ)(i.GA, {
                                        id: "ng-error-suggestion-list",
                                        children: G.map((function(n) {
                                            var e;
                                            return (0, j.BX)(i.zt, {
                                                onClick: function() {
                                                    return un(n)
                                                },
                                                children: [(0, j.tZ)("div", {
                                                    className: "imgContainer",
                                                    children: (0, j.tZ)(f.oy, {
                                                        src: null === (e = null === n || void 0 === n ? void 0 : n.media) || void 0 === e ? void 0 : e.tile,
                                                        alt: n.appName,
                                                        sizes: "128px",
                                                        quality: 100,
                                                        unoptimized: !0
                                                    })
                                                }), (0, j.tZ)("div", {
                                                    className: "imgBorder"
                                                })]
                                            }, n.appName)
                                        }))
                                    })]
                                }) : (0, j.BX)(j.HY, {
                                    children: [O !== c.YR.FailureInvalidPlayToken ? (0, j.BX)(i.Vr, {
                                        children: [d.Bq[O] && (0, j.tZ)(i.jK, {
                                            children: "".concat(M("error"), " NG ").concat(d.Bq[O])
                                        }), (0, j.tZ)(i.nL, {
                                            className: "\n        ".concat(O === c.YR.FailureNoResource ? "noResource " : "", "\n        "),
                                            children: d.D3.includes(O) ? W : M(an)
                                        })]
                                    }) : (0, j.BX)(i.tH, {
                                        children: [(0, j.tZ)("h2", {
                                            children: d.D3.includes(O) ? W : M(an)
                                        }), (0, j.BX)(i.J0, {
                                            children: [(0, j.tZ)("p", {
                                                children: _
                                            }), (0, j.tZ)(m.z, {
                                                size: "default",
                                                disabled: !K,
                                                variant: "defaultOutline",
                                                style: {
                                                    padding: "7px 16px"
                                                },
                                                onClick: pn,
                                                text: M("refreshNow"),
                                                id: "ng-error-refresh-btn"
                                            })]
                                        })]
                                    }), G && (null === G || void 0 === G ? void 0 : G.length) > 0 && (0, j.BX)(i.tz, {
                                        children: [(0, j.tZ)(i.XJ, {
                                            className: "\n            ".concat(O === c.YR.FailureInvalidPlayToken ? "tokenErr" : "", "\n            "),
                                            children: M(ln)
                                        }), (0, j.tZ)(i.GA, {
                                            id: "ng-error-suggestion-list",
                                            children: G.map((function(n) {
                                                var e;
                                                return (0, j.BX)(i.zt, {
                                                    onClick: function() {
                                                        return un(n)
                                                    },
                                                    children: [(0, j.tZ)("div", {
                                                        className: "imgContainer",
                                                        children: (0, j.tZ)(f.oy, {
                                                            src: null === (e = null === n || void 0 === n ? void 0 : n.media) || void 0 === e ? void 0 : e.tile,
                                                            alt: n.appName,
                                                            sizes: "128px",
                                                            quality: 100,
                                                            unoptimized: !0
                                                        })
                                                    }), !S && (0, j.BX)(i.Y2, {
                                                        className: "tileContent",
                                                        children: [(0, j.tZ)("p", {
                                                            children: n.appName
                                                        }), (0, j.tZ)("div", {
                                                            children: M("playNow")
                                                        })]
                                                    }), (0, j.tZ)("div", {
                                                        className: "imgBorder"
                                                    })]
                                                }, n.appName)
                                            }))
                                        }), (0, j.BX)(i.w3, {
                                            isMobile: (0, s.tq)(),
                                            children: [(0, j.tZ)(m.z, {
                                                variant: "secondary",
                                                onClick: gn,
                                                text: M("browseGames"),
                                                id: "ng-error-browse-more-btn"
                                            }), (0, j.tZ)(m.z, {
                                                variant: "defaultOutline",
                                                onClick: hn,
                                                text: M("reportIssue"),
                                                id: "ng-error-report-btn"
                                            })]
                                        })]
                                    })]
                                }), (0, j.tZ)(p.Z, {
                                    breakFooterText: mn
                                })]
                            })
                        }), on && (0, j.tZ)(Z.default, {
                            isError: !0
                        })]
                    })
                },
                R = E
        },
        97170: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return ge
                }
            });
            var i, r, o = t(92809),
                a = t(79305),
                l = t(6268),
                c = t(57981),
                s = t(93772),
                d = t(12749),
                p = t(59930),
                u = t(78064),
                h = t(97997),
                g = function(n) {
                    var e = n.children,
                        t = n.center;
                    return (0, h.tZ)(u.mz, {
                        center: t,
                        children: e
                    })
                },
                m = t(94564),
                f = function(n) {
                    var e = n.icon,
                        t = n.title,
                        i = n.onClose;
                    return (0, h.BX)(u.xB, {
                        children: [e, (0, h.tZ)(m.js, {
                            children: t
                        }), i && (0, h.tZ)(u.A3, {
                            onClick: i,
                            children: (0, h.tZ)(p.Z, {
                                name: "cross-thin",
                                size: 14
                            })
                        })]
                    })
                },
                x = t(50912),
                b = t(62825),
                v = t(58844),
                w = t(77691),
                y = t(78294),
                Z = t(11752),
                k = t(11720),
                P = t(26793),
                O = t(25617),
                C = t(26544),
                S = t(22012),
                j = t(50445),
                L = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                T = j.ZP.div(r || (r = L(['\ndisplay: flex;\ninput[type="radio"] {\n  display: none;\n  margin: 0;\n  &:checked + label {\n    &:after {\n      box-sizing: content-box;\n      position: absolute;\n      left: 4px;\n      content: "";\n      height: 8px;\n      width: 8px;\n      background: ', ";\n      border-radius: 50%;\n      -webkit-transition: .4s;\n      transition: .4s;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n    &:before {\n      border: 2px solid ", ";\n    }\n    color: ", " !important;\n  }\n}\nlabel {\n  position: relative;\n  cursor: pointer;\n  color: currentColor !important;\n  ", '\n  padding-left: 28px;\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    content: "";\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    box-sizing: border-box;\n    background-color: transparent;\n    border: 2px solid currentcolor;\n    display: inline-block;\n    margin-right: 5px;\n  }\n}\n'], ['\ndisplay: flex;\ninput[type="radio"] {\n  display: none;\n  margin: 0;\n  &:checked + label {\n    &:after {\n      box-sizing: content-box;\n      position: absolute;\n      left: 4px;\n      content: "";\n      height: 8px;\n      width: 8px;\n      background: ', ";\n      border-radius: 50%;\n      -webkit-transition: .4s;\n      transition: .4s;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n    &:before {\n      border: 2px solid ", ";\n    }\n    color: ", " !important;\n  }\n}\nlabel {\n  position: relative;\n  cursor: pointer;\n  color: currentColor !important;\n  ", '\n  padding-left: 28px;\n  &:before {\n    position: absolute;\n    left: 0;\n    top: 50%;\n    transform: translateY(-50%);\n    content: "";\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    box-sizing: border-box;\n    background-color: transparent;\n    border: 2px solid currentcolor;\n    display: inline-block;\n    margin-right: 5px;\n  }\n}\n'])), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.labeltext && (0, j.iv)(i || (i = L(["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n  "], ["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n  "])))
                }));

            function B(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function z(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? B(Object(t), !0).forEach((function(e) {
                        (0, o.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : B(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var A, E, R, G, I, D = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                N = function(n) {
                    var e = n.children,
                        t = n.labelId,
                        i = D(n, ["children", "labelId"]);
                    return (0, h.BX)(T, z(z({}, i), {}, {
                        children: [(0, h.tZ)("input", z({
                            type: "radio"
                        }, i)), (0, h.tZ)("label", {
                            htmlFor: i.id,
                            id: t,
                            children: i.labeltext || e
                        })]
                    }))
                },
                X = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                F = j.ZP.div(A || (A = X(["\n  ", "\n  border-radius: 6px;\n  transition: all 0.3s ease-out;\n"], ["\n  ", "\n  border-radius: 6px;\n  transition: all 0.3s ease-out;\n"])), (function(n) {
                    var e = n.theme,
                        t = n.openState;
                    return "\n    background-color: ".concat(e.colors.transparent, ";\n    border: 1px solid ").concat(e.colors.white20, ";\n    ").concat(t ? "" : "box-shadow: ".concat(e.shadow.small, ";"), "\n  ")
                })),
                U = j.ZP.div(E || (E = X(["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 12px;\n  transition: all 0.3s ease-out;\n  svg {\n    stroke: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 12px;\n  transition: all 0.3s ease-out;\n  svg {\n    stroke: ", ";\n  }\n  &:hover {\n    background-color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    var e = n.theme;
                    return n.openState ? e.colors.ascent : e.colors.white60
                }), (function(n) {
                    return n.theme.colors.black20
                })),
                H = j.ZP.ul(R || (R = X(["\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  margin: 1px;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  max-height: 0;\n  list-style: none;\n  padding: 0;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  margin: 1px;\n  border-radius: 6px;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  max-height: 0;\n  list-style: none;\n  padding: 0;\n"])), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.black10
                }), (function(n) {
                    return n.theme.shadow.small
                })),
                M = j.ZP.li(G || (G = X(["\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n  color: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n  &:hover {\n    color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n  color: ", ";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n  &:hover {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.white
                })),
                V = j.ZP.span(I || (I = X(["\n  display: inline-flex;\n  align-items: center;\n  transition: transform 0.3s ease-out;\n\n  ", "\n"], ["\n  display: inline-flex;\n  align-items: center;\n  transition: transform 0.3s ease-out;\n\n  ", "\n"])), (function(n) {
                    return n.rotate && "transform: rotateX(180deg);"
                }));

            function _(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function q(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? _(Object(t), !0).forEach((function(e) {
                        (0, o.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var Y = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                W = function(n) {
                    var e = n.label,
                        t = n.options,
                        i = void 0 === t ? [] : t,
                        r = n.selectedValue,
                        o = n.showOptions,
                        a = void 0 !== o && o,
                        l = n.onSelectOption,
                        c = Y(n, ["label", "options", "selectedValue", "showOptions", "onSelectOption"]),
                        s = (0, k.useState)(a),
                        d = s[0],
                        p = s[1],
                        u = (0, P.$)().t,
                        g = (0, k.useRef)(null),
                        f = function(n) {
                            g.current && (g.current.style.maxHeight = n ? "".concat(g.current.scrollHeight, "px") : "", p(n))
                        };
                    return (0, k.useEffect)((function() {
                        f(a)
                    }), [a]), i.length ? (0, h.BX)(F, q(q({
                        openState: d
                    }, c), {}, {
                        children: [(0, h.BX)(U, {
                            onClick: function() {
                                f(!d)
                            },
                            openState: d,
                            children: [(0, h.tZ)(m.xP, {
                                children: u(e)
                            }), (0, h.tZ)(V, {
                                rotate: d,
                                children: (0, h.tZ)("svg", {
                                    width: "10",
                                    height: "6",
                                    viewBox: "0 0 10 6",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: (0, h.tZ)("path", {
                                        d: "M9 1.46973L5 5.46973L1 1.46973",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                })
                            })]
                        }), (0, h.tZ)(H, {
                            ref: g,
                            children: i.map((function(n) {
                                return (0, h.tZ)(M, {
                                    onClick: function() {
                                        return l && l(n)
                                    },
                                    children: (0, h.tZ)(N, {
                                        checked: r === n,
                                        labelId: n,
                                        children: (0, h.tZ)(m.lU, {
                                            children: u(n)
                                        })
                                    })
                                }, n)
                            }))
                        })]
                    })) : null
                },
                J = t(30512),
                $ = t(45628),
                K = t(94381),
                Q = t(74803),
                nn = t(58309),
                en = t(55791),
                tn = t(10812),
                rn = t(66971),
                on = t(7383),
                an = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                ln = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                };

            function cn(n) {
                return an(this, void 0, void 0, (function() {
                    return ln(this, (function(e) {
                        return [2, fetch(n).then((function(n) {
                            return n.blob()
                        })).then((function(n) {
                            return new File([n], "screenshot.png", {
                                type: "image/jpeg"
                            })
                        })).catch((function(n) {
                            throw new Error("Oops! unable to convert dataURI to file ".concat(n))
                        }))]
                    }))
                }))
            }
            var sn = function(n) {
                return an(void 0, void 0, Promise, (function() {
                    return ln(this, (function(e) {
                        return [2, new Promise((function(e) {
                            try {
                                var t = [],
                                    i = 0;
                                n.forEach((function(r, o) {
                                    var a = r.uri,
                                        l = r.name,
                                        c = new Image;
                                    c.src = a, c.onload = function() {
                                        return function(r, o, a) {
                                            t[a] = {
                                                element: o,
                                                name: r
                                            }, (i += 1) === n.length && e(t)
                                        }(l, c, o)
                                    }
                                }))
                            } catch (r) {
                                throw new Error("Oops! unable load Images")
                            }
                        }))]
                    }))
                }))
            };

            function dn(n) {
                var e = document.createElement("canvas"),
                    t = e.getContext("2d"),
                    i = n.reduce((function(n, e) {
                        return n + e.element.width
                    }), 0) + 20 * (n.length - 1),
                    r = Math.max.apply(Math, n.map((function(n) {
                        return n.element.height
                    })));
                e.width = i, e.height = r + 80;
                var o = 0;
                if (t) return t.font = "26px Arial", t.textAlign = "center", t.fillStyle = "#e3f081", n.forEach((function(n) {
                    var e = n.element,
                        i = n.name;
                    t.drawImage(e, o, 0, e.width, e.height), t.fillText(i, o + e.width / 2, r + 40), o += e.width + 20
                })), e.toDataURL("image/png");
                throw new Error("Oops! unable to get context from canvas")
            }
            var pn = function() {
                return an(void 0, void 0, Promise, (function() {
                    var n, e;
                    return ln(this, (function(t) {
                        return (n = (0, on.Mc)()) && 0 !== n.getVideoTracks().length ? ((e = document.createElement("video")).srcObject = n, e.autoplay = !0, e.muted = !0, [2, new Promise((function(t) {
                            e.play().catch((function(n) {
                                t(!1)
                            })), e.addEventListener("playing", (function() {
                                var i = document.createElement("canvas");
                                i.width = e.videoWidth, i.height = e.videoHeight;
                                var r = i.getContext("2d");
                                r ? setTimeout((function() {
                                    r.drawImage(e, 0, 0, e.videoWidth, e.videoHeight);
                                    var o = i.toDataURL("image/jpeg");
                                    t({
                                        androidStreamURI: o,
                                        identifier: n.getVideoTracks()[0].id
                                    })
                                }), 1e3) : t(!1)
                            }))
                        }))]) : [2, !1]
                    }))
                }))
            };

            function un(n, e) {
                var t = document.createElement("canvas"),
                    i = t.getContext("2d");
                return e === $.cj.landscape ? (0, w.tq)() ? (t.width = n.clientHeight, t.height = n.clientWidth, null === i || void 0 === i || i.rotate(-Math.PI / 2), null === i || void 0 === i || i.drawImage(n, -t.width / 2, 0, t.height, t.width)) : (t.width = n.clientHeight, t.height = n.clientWidth, null === i || void 0 === i || i.translate(t.width / 2, t.height / 2), null === i || void 0 === i || i.rotate(-Math.PI / 2), null === i || void 0 === i || i.drawImage(n, -t.height / 2, -t.width / 2, t.height, t.width)) : (t.width = n.clientWidth, t.height = n.clientHeight, null === i || void 0 === i || i.drawImage(n, 0, 0, n.clientWidth, n.clientHeight)), t.toDataURL("image/jpeg")
            }

            function hn(n, e, t) {
                return an(this, void 0, void 0, (function() {
                    var i, r, o;
                    return ln(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return i = [], [4, pn()];
                            case 1:
                                return r = a.sent(), o = un(e, t), r && i.push({
                                    uri: r.androidStreamURI,
                                    name: "Android Stream(".concat(r.identifier, ")")
                                }), o && i.push({
                                    uri: o,
                                    name: "Video Element"
                                }), n && i.push({
                                    uri: n,
                                    name: "Uploaded File"
                                }), [4, sn(i)];
                            case 2:
                                return [2, dn(a.sent())]
                        }
                    }))
                }))
            }

            function gn(n) {
                return an(this, void 0, void 0, (function() {
                    return ln(this, (function(e) {
                        return [2, navigator.mediaDevices.getDisplayMedia({
                            video: !0
                        }).then((function(e) {
                            var t = document.createElement("video");
                            return t.srcObject = e, t.autoplay = !0, t.muted = !0, new Promise((function(i) {
                                t.play().catch((function(n) {
                                    i(!1)
                                })), t.addEventListener("playing", (function() {
                                    var r = document.createElement("canvas");
                                    r.width = t.videoWidth, r.height = t.videoHeight;
                                    var o = r.getContext("2d");
                                    if (!o) return e.getTracks().forEach((function(n) {
                                        return n.stop()
                                    })), void i(!1);
                                    setTimeout((function() {
                                        o.drawImage(t, 0, 0, t.videoWidth, t.videoHeight), e.getTracks().forEach((function(n) {
                                            return n.stop()
                                        }));
                                        var a = r.toDataURL("image/jpeg");
                                        n.current = a, i(a)
                                    }), 1e3)
                                }))
                            }))
                        })).catch((function(n) {
                            return !1
                        }))]
                    }))
                }))
            }

            function mn(n, e, t) {
                return an(this, void 0, void 0, (function() {
                    var i, r, o, a;
                    return ln(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                return i = [], r = un(n, e), [4, gn(t)];
                            case 1:
                                return o = l.sent(), [4, pn()];
                            case 2:
                                return (a = l.sent()) && i.push({
                                    uri: a.androidStreamURI,
                                    name: "Android Stream(".concat(a.identifier, ")")
                                }), r && i.push({
                                    uri: r,
                                    name: "Video Element"
                                }), "string" === typeof o && i.push({
                                    uri: o,
                                    name: "Screen Capture"
                                }), [4, sn(i)];
                            case 3:
                                return [2, dn(l.sent())]
                        }
                    }))
                }))
            }
            var fn, xn, bn, vn, wn, yn, Zn, kn, Pn, On, Cn, Sn, jn, Ln, Tn, Bn, zn, An, En, Rn = t(67881),
                Gn = t(4326),
                In = t(89598),
                Dn = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                Nn = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                Xn = ["packetsLost", "packetsReceived", "bytesReceived", "framesReceived", "frameWidth", "frameHeight", "framesPerSecond", "framesDecoded", "keyFramesDecoded", "framesDropped", "nackCount"],
                Fn = function(n) {
                    return Dn(void 0, void 0, void 0, (function() {
                        var e, t;
                        return Nn(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    e = {
                                        video: {},
                                        audio: {},
                                        candidate: {},
                                        connection: {}
                                    }, i.label = 1;
                                case 1:
                                    return i.trys.push([1, 3, , 4]), [4, n.getStats(null)];
                                case 2:
                                    return (t = i.sent()) && t.forEach((function(n) {
                                        "inbound-rtp" === n.type && ("audio" === n.kind ? e.audio.packetsLost = n.packetsLost : "video" === n.kind && Xn.map((function(t) {
                                            return e.video[t] = n[t], t
                                        }))), "candidate-pair" === n.type && (e.candidate.currentRoundTripTime = "".concat(parseFloat((1e3 * (null === n || void 0 === n ? void 0 : n.currentRoundTripTime)).toString()).toFixed(2), "ms"))
                                    })), [3, 4];
                                case 3:
                                    return i.sent(), [3, 4];
                                case 4:
                                    try {
                                        ["iceGatheringState", "iceConnectionState", "connectionState", "canTrickleIceCandidates", "signalingState"].map((function(t) {
                                            return n[t] && (e.connection[t] = n[t]), t
                                        }))
                                    } catch (r) {}
                                    return [2, e]
                            }
                        }))
                    }))
                },
                Un = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Hn = (0, j.iv)(fn || (fn = Un(["\n    max-width: 100%;\n    max-height: 100vh;\n    width: 380px;\n    overflow: auto;\n    margin: 0;\n\n\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: calc(100% - 18px);\n    }\n\n    @media screen and (orientation: portrait) and (max-width: 600px) {\n      &.addRotation{\n        transform: rotate(-90deg);\n      }\n        width: calc(100vw - 18px);\n    }\n"], ["\n    max-width: 100%;\n    max-height: 100vh;\n    width: 380px;\n    overflow: auto;\n    margin: 0;\n\n\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: calc(100% - 18px);\n    }\n\n    @media screen and (orientation: portrait) and (max-width: 600px) {\n      &.addRotation{\n        transform: rotate(-90deg);\n      }\n        width: calc(100vw - 18px);\n    }\n"]))),
                Mn = (0, j.iv)(xn || (xn = Un(["\n    justify-content: center;\n    align-items: center;\n"], ["\n    justify-content: center;\n    align-items: center;\n"]))),
                Vn = j.ZP.div(bn || (bn = Un(["\n    padding: 16px;\n\n    header {\n        color: ", ";\n        border: 0;\n        span {\n            margin-right: 8px;\n        }\n    }\n    label {\n        color: ", ";\n        font-weight: 500;\n        letter-spacing: 0.6px;\n    }\n    .error {\n        color: ", ";\n        opacity: 0.8;\n    }\n    footer {\n        margin-top: 8px;\n    }\n"], ["\n    padding: 16px;\n\n    header {\n        color: ", ";\n        border: 0;\n        span {\n            margin-right: 8px;\n        }\n    }\n    label {\n        color: ", ";\n        font-weight: 500;\n        letter-spacing: 0.6px;\n    }\n    .error {\n        color: ", ";\n        opacity: 0.8;\n    }\n    footer {\n        margin-top: 8px;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.error
                })),
                _n = j.ZP.span(vn || (vn = Un(["\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    font-size: 14px;\n    line-height: 20px;\n    align-self: center;\n"], ["\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    font-size: 14px;\n    line-height: 20px;\n    align-self: center;\n"])), (function(n) {
                    return n.theme.colors.warning
                })),
                qn = (j.ZP.div(wn || (wn = Un(["\n    display: flex;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    justify-content: space-between;\n"]))), j.ZP.ul(yn || (yn = Un(["\n    padding: 0;\n    margin: 24px auto 16px;\n    list-style-type: none;\n"], ["\n    padding: 0;\n    margin: 24px auto 16px;\n    list-style-type: none;\n"])))),
                Yn = j.ZP.li(Zn || (Zn = Un(["\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 16px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    .icon-active {\n        color: ", ";\n    }\n"], ["\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 16px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    .icon-active {\n        color: ", ";\n    }\n"])), (function(n) {
                    return n.theme.colors.white40
                }), C.qm.colors.green),
                Wn = j.ZP.div(kn || (kn = Un(["\n    list-style-type: none;\n    display: flex;\n    margin: 0;\n    background: ", ";\n    border: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    padding: 16px;\n"], ["\n    list-style-type: none;\n    display: flex;\n    margin: 0;\n    background: ", ";\n    border: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    padding: 16px;\n"])), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.border.base4
                }), (function(n) {
                    return n.theme.shadow.small
                })),
                Jn = j.ZP.label(On || (On = Un(["\n    ", ";\n    width: 48px;\n    height: 48px;\n    margin-right: auto;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    cursor: pointer;\n    span {\n        z-index: 2;\n    }\n    p {\n        margin-bottom: 0;\n        width: 16px;\n        height: 16px;\n    }\n    .icon-cross-thin {\n        color: white;\n        z-index: 1;\n        font-weight: bold;\n    }\n\n    ", "\n"], ["\n    ", ";\n    width: 48px;\n    height: 48px;\n    margin-right: auto;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    cursor: pointer;\n    span {\n        z-index: 2;\n    }\n    p {\n        margin-bottom: 0;\n        width: 16px;\n        height: 16px;\n    }\n    .icon-cross-thin {\n        color: white;\n        z-index: 1;\n        font-weight: bold;\n    }\n\n    ", "\n"])), (function(n) {
                    var e = n.background;
                    return e ? 'background-image: url("'.concat(e, '")') : ""
                }), (function(n) {
                    return n.loading ? "" : (0, j.iv)(Pn || (Pn = Un(["\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 4px;\n    overflow: hidden;\n    &:hover {\n        &:after {\n            background: ", ";\n        }\n    }\n\n    &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n\n    }"], ["\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 4px;\n    overflow: hidden;\n    &:hover {\n        &:after {\n            background: ", ";\n        }\n    }\n\n    &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n\n    }"])), (function(n) {
                        return n.theme.colors.modal
                    }))
                })),
                $n = j.ZP.label(Ln || (Ln = Un(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n\n    ", "\n    ", ";\n    p {\n        margin: 13px 0 0;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n    }\n    input {\n        display: none;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n\n    ", "\n    ", ";\n    p {\n        margin: 13px 0 0;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n    }\n    input {\n        display: none;\n    }\n"])), (function(n) {
                    return n.compact ? (0, j.iv)(Cn || (Cn = Un(["\n        width: 48px;\n        min-width: 48px;\n        height: 48px;\n        background: ", ";\n        border-radius: 4px;\n        margin-left: 8px;\n    "], ["\n        width: 48px;\n        min-width: 48px;\n        height: 48px;\n        background: ", ";\n        border-radius: 4px;\n        margin-left: 8px;\n    "])), (function(n) {
                        return n.theme.colors.black20
                    })) : (0, j.iv)(Sn || (Sn = Un(["flex: 1;"], ["flex: 1;"])))
                }), (function(n) {
                    return n.seperator ? (0, j.iv)(jn || (jn = Un(["border-right: 1px solid rgba(255, 255, 255, 0.1)"], ["border-right: 1px solid rgba(255, 255, 255, 0.1)"]))) : ""
                })),
                Kn = j.ZP.div(Tn || (Tn = Un(["\n    display: flex;\n    align-items: center;\n    color: ", " !important;\n    p {\n        margin-right: 20px;\n        margin-left: 10px;\n        flex: 2;\n        color: ", ";\n    }\n    span {\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    color: ", " !important;\n    p {\n        margin-right: 20px;\n        margin-left: 10px;\n        flex: 2;\n        color: ", ";\n    }\n    span {\n        color: ", ";\n    }\n"])), (function(n) {
                    return n.theme.colors.error
                }), (function(n) {
                    return n.theme.colors.error
                }), (function(n) {
                    return n.theme.colors.error
                })),
                Qn = j.ZP.div(Bn || (Bn = Un(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    button {\n        flex: 1;\n        max-width: 50%;\n        p {\n            padding: 1.5px;\n            font-weight: 500;\n        }\n    }\n"], ["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    button {\n        flex: 1;\n        max-width: 50%;\n        p {\n            padding: 1.5px;\n            font-weight: 500;\n        }\n    }\n"]))),
                ne = j.ZP.div(zn || (zn = Un(["\n    margin-top: 16px;\n\n    div {\n        color: ", ";\n        label {\n            color: ", ";\n            i {\n                color: ", ";\n            }\n        }\n    }\n"], ["\n    margin-top: 16px;\n\n    div {\n        color: ", ";\n        label {\n            color: ", ";\n            i {\n                color: ", ";\n            }\n        }\n    }\n"])), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                ee = j.ZP.div(An || (An = Un(["\n    margin-top: 16px;\n"], ["\n    margin-top: 16px;\n"]))),
                te = j.ZP.div(En || (En = Un(["\n    margin-bottom: 24px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n"], ["\n    margin-bottom: 24px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]))),
                ie = (t(90534), [{
                    label: "gameplay.label",
                    options: ["gameplay.gameUpdate", "gameplay.gameFroze", "gameplay.gameStuck", "gameplay.gameLagging", "other"]
                }, {
                    label: "gamecontrols.label",
                    options: ["gamecontrols.keyControls", "gamecontrols.mouseIssues", "gamecontrols.gamepadIssues", "other"]
                }, {
                    label: "accountLogin.label",
                    options: ["accountLogin.incorrectPassword", "accountLogin.LoginIssues", "accountLogin.unableToSave", "other"]
                }, {
                    label: "appOrGameRequest.label",
                    options: ["appOrGameRequest.appRequest", "appOrGameRequest.gameRequest"]
                }]),
                re = ["createDeviceProfile", "collectingStats", "collectingOtherInformation", "sendingProblemReport"],
                oe = ["compilingInformation", "processingProblemReport", "sendingProblemReport"],
                ae = [{
                    showProblems: !0,
                    buttons: [{
                        type: "close",
                        label: "close",
                        variant: "tertiaryOutline"
                    }, {
                        type: "next",
                        label: "next"
                    }],
                    nextLayer: 1
                }, {
                    showEmail: !0,
                    showDescription: !0,
                    showUpload: !0,
                    showDiagnosisCheckbox: !0,
                    buttons: [{
                        type: "back",
                        label: "back",
                        variant: "tertiaryOutline"
                    }, {
                        type: "submit",
                        label: "submit"
                    }],
                    prevLayer: 0,
                    nextLayer: 4
                }, {
                    showEmail: !0,
                    showUpload: !0,
                    showDiagnosisCheckbox: !0,
                    buttons: [{
                        type: "back",
                        label: "back",
                        variant: "tertiaryOutline"
                    }, {
                        type: "next",
                        label: "next"
                    }],
                    prevLayer: 0,
                    nextLayer: 3
                }, {
                    showDescription: !0,
                    showDiagnosisCheckbox: !0,
                    buttons: [{
                        type: "back",
                        label: "back",
                        variant: "tertiaryOutline"
                    }, {
                        type: "submit",
                        label: "submit"
                    }],
                    prevLayer: 2,
                    nextLayer: 4
                }, {
                    title: "diagnosingProblem",
                    showDiagnosis: !0
                }, {
                    title: "thankYou",
                    showSuccess: !0,
                    buttons: [{
                        type: "close",
                        label: "okay"
                    }]
                }, {
                    title: "submissionFailed",
                    showFailed: !0,
                    buttons: [{
                        type: "tryAgain",
                        label: "tryAgain"
                    }],
                    nextLayer: 0
                }, {
                    showEmail: !0,
                    showDescription: !0,
                    showUpload: !0,
                    showDiagnosisCheckbox: !0,
                    buttons: [{
                        type: "submit",
                        label: "submit"
                    }],
                    nextLayer: 4
                }, {
                    showEmail: !0,
                    showUpload: !0,
                    showDiagnosisCheckbox: !0,
                    buttons: [{
                        type: "next",
                        label: "next"
                    }],
                    prevLayer: 0,
                    nextLayer: 3
                }],
                le = t(34155);

            function ce(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            var se = function() {
                    return (se = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                de = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(r, o) {
                        function a(n) {
                            try {
                                c(i.next(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function l(n) {
                            try {
                                c(i.throw(n))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(n) {
                            var e;
                            n.done ? r(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, l)
                        }
                        c((i = i.apply(n, e || [])).next())
                    }))
                },
                pe = function(n, e) {
                    var t, i, r, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & r[0]) throw r[1];
                            return r[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function l(o) {
                        return function(l) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                    switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            r = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < r[1]) {
                                                a.label = r[1], r = o;
                                                break
                                            }
                                            if (r && a.label < r[2]) {
                                                a.label = r[2], a.ops.push(o);
                                                break
                                            }
                                            r[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = e.call(n, a)
                                } catch (l) {
                                    o = [6, l], i = 0
                                } finally {
                                    t = r = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, l])
                        }
                    }
                },
                ue = (0, Z.default)().publicRuntimeConfig,
                he = le.env.NEXT_PUBLIC_FE_VERSION || ue.NEXT_PUBLIC_FE_VERSION || "",
                ge = function(n) {
                    var e, t, i = n.isHome,
                        r = void 0 !== i && i,
                        u = n.isError,
                        Z = void 0 !== u && u,
                        j = n.isAppPage,
                        L = (0, P.$)().t,
                        T = (0, O.v9)((function(n) {
                            return n.support.errorType
                        })),
                        B = (0, O.v9)((function(n) {
                            return n.play.error
                        })),
                        z = (0, O.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        A = (0, O.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        E = (0, O.v9)((function(n) {
                            return n.play.peerConnection
                        })),
                        R = (0, O.v9)((function(n) {
                            return n.appPreferences.volume
                        })),
                        G = (0, O.v9)((function(n) {
                            return n.play.orientation
                        })),
                        I = (0, O.v9)((function(n) {
                            return n.appPreferences.imapOverlay
                        })),
                        D = (0, O.I0)(),
                        N = (0, w.tq)() && G === $.cj.landscape,
                        X = (0, k.useState)(""),
                        F = X[0],
                        U = X[1],
                        H = (0, k.useState)((0, y.DJ)() ? (0, w.tq)() && !(0, w.Em)() && N ? 8 : 7 : 0),
                        M = H[0],
                        V = H[1],
                        _ = (0, k.useState)(!0),
                        q = _[0],
                        Y = _[1],
                        on = (0, k.useState)(""),
                        an = on[0],
                        ln = on[1],
                        pn = (0, k.useState)(!1),
                        un = pn[0],
                        gn = pn[1],
                        fn = (0, k.useState)(!1),
                        xn = fn[0],
                        bn = fn[1],
                        vn = (0, k.useState)(""),
                        wn = vn[0],
                        yn = vn[1],
                        Zn = (0, k.useState)(!0),
                        kn = Zn[0],
                        Pn = Zn[1],
                        On = (0, k.useState)(!1),
                        Cn = On[0],
                        Sn = On[1],
                        jn = (0, k.useState)(0),
                        Ln = jn[0],
                        Tn = jn[1],
                        Bn = (0, k.useState)(""),
                        zn = Bn[0],
                        An = Bn[1],
                        En = (0, k.useState)(null),
                        Dn = En[0],
                        Nn = En[1],
                        Xn = (0, k.useState)(!1),
                        Un = Xn[0],
                        le = Xn[1],
                        ue = (0, k.useState)($.Ps.None),
                        ge = ue[0],
                        me = ue[1],
                        fe = (0, k.useState)(0),
                        xe = fe[0],
                        be = fe[1],
                        ve = (0, k.useState)(""),
                        we = ve[0],
                        ye = ve[1],
                        Ze = (0, k.useState)((0, Rn.Z)())[0],
                        ke = (0, k.useRef)(""),
                        Pe = (0, k.useRef)(""),
                        Oe = (0, k.useRef)(0);
                    (0, k.useEffect)((function() {
                        (0, w.tq)() && !(0, w.Em)() && N && (ae[0].nextLayer = 2);
                        var n = A ? (0, nn.et)() : null;
                        n && ln(n.email)
                    }), []);
                    var Ce = function() {
                        D({
                            type: b.Z.CLOSE_SUPPORT
                        })
                    };
                    (0, k.useEffect)((function() {
                        Y(!((0 !== M || F) && (1 !== M || an && !un && wn && !xn) && (2 !== M || an && !un) && (3 !== M || wn && !xn) && (7 !== M || an && !un && wn && !xn) && (8 !== M || an && !un)))
                    }), [F, un, wn, M, xn, an]);
                    var Se = function(n, e) {
                            switch (n) {
                                case "email":
                                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? gn(!1) : gn(!0), ln(e);
                                    break;
                                case "description":
                                    0 === e.trim().length || e.length < 12 ? bn(!0) : bn(!1), yn(e)
                            }
                        },
                        je = (0, k.useCallback)((function() {
                            return de(void 0, void 0, void 0, (function() {
                                var n, e, t, i, r, o, a, l, s, d;
                                return pe(this, (function(p) {
                                    switch (p.label) {
                                        case 0:
                                            if (n = x.Z.getState(), e = n.play, t = e.videoRef, i = e.videoContainerRef, Sn(!1), An(""), me($.Ps.None), Nn(null), (r = document.getElementById("overlay")) && (r.style.display = "none"), !(t && t.current && (null === (d = null === i || void 0 === i ? void 0 : i.current) || void 0 === d ? void 0 : d.parentElement))) return [3, 7];
                                            p.label = 1;
                                        case 1:
                                            return p.trys.push([1, 6, , 7]), [4, mn(t.current, G, ke)];
                                        case 2:
                                            return o = p.sent(), Pe.current && "string" === typeof o ? ((a = []).push({
                                                uri: o,
                                                name: ""
                                            }), a.push({
                                                uri: Pe.current,
                                                name: "Uploaded File"
                                            }), [4, sn(a)]) : [3, 4];
                                        case 3:
                                            l = p.sent(), o = dn(l), p.label = 4;
                                        case 4:
                                            return r && (r.style.display = "flex"), le(!0), [4, cn(o)];
                                        case 5:
                                            return s = p.sent(), le(!1), me($.Ps.Jpeg), An(o), Nn(s), [3, 7];
                                        case 6:
                                            return p.sent(), r && (r.style.display = "flex"), le(!1), An(""), (0, c.ZP)(new Error("cannot generate screenshot")), Nn(null), [3, 7];
                                        case 7:
                                            return [2]
                                    }
                                }))
                            }))
                        }), [M]),
                        Le = function(n, e) {
                            if ("next" === n && void 0 !== e.nextLayer) V(e.nextLayer);
                            else if ("back" === n && void 0 !== e.prevLayer) V(e.prevLayer), 0 === e.prevLayer && be(Oe.current);
                            else if ("submit" === n) {
                                if (0 === wn.trim().length || wn.length < 12) return;
                                void 0 !== e.nextLayer && V(e.nextLayer), de(void 0, void 0, void 0, (function() {
                                    var n, e, t, i, r, o, l, s;
                                    return pe(this, (function(d) {
                                        switch (d.label) {
                                            case 0:
                                                n = x.Z.getState(), Tn(1), d.label = 1;
                                            case 1:
                                                return d.trys.push([1, 5, , 6]), [4, (0, Gn.nr)()];
                                            case 2:
                                                return e = d.sent(), t = {}, kn ? (t = {
                                                    error: B,
                                                    serviceError: T,
                                                    proxyUserType: null === (l = window.nggClientIpInfo) || void 0 === l ? void 0 : l.browserCode,
                                                    errorDescription: n.play.errorDescription,
                                                    feErrorNotInRegion: y.ZP.feErrorNotInRegion,
                                                    client: {
                                                        userAgent: navigator.userAgent,
                                                        audio: {
                                                            volume: R
                                                        }
                                                    },
                                                    appType: y.ZP.appInfo.appType,
                                                    lang: navigator.language,
                                                    concurrency: navigator.hardwareConcurrency || "none",
                                                    buildVersion: he,
                                                    clientInfo: {
                                                        os: (0, w.Ij)(),
                                                        browserVersion: (0, w.Tb)().version,
                                                        description: (0, w.Tb)().description,
                                                        browser: w.Xh,
                                                        isTouchDevice: navigator.maxTouchPoints > 0,
                                                        isMobile: (0, w.tq)()
                                                    }
                                                }, (0, y.DJ)() ? [3, 4] : (t = se(se({}, t), {
                                                    isAndroidConnected: z,
                                                    imapState: {
                                                        isGamepadConnected: (0, en.c)(),
                                                        isWasmSupported: (0, tn.qU)(),
                                                        overlayActive: I,
                                                        orientation: G
                                                    },
                                                    androidState: v.Z,
                                                    batteryStatus: e
                                                }), z && E instanceof RTCPeerConnection ? (i = t, [4, Fn(E)]) : [3, 4])) : [3, 4];
                                            case 3:
                                                i.rtcDump = d.sent(), d.label = 4;
                                            case 4:
                                                return r = se({
                                                    issueTitle: (0, y.DJ)() ? "H5 feedback" : L(F),
                                                    issueDescription: wn,
                                                    email: an,
                                                    packageName: null === (s = null === y.ZP || void 0 === y.ZP ? void 0 : y.ZP.appInfo) || void 0 === s ? void 0 : s.packageName,
                                                    diagnosticReportData: t,
                                                    uploadImageMimeType: ge || "none",
                                                    playUrl: window.location.href
                                                }, (0, w.I$)()), z && (0, Q.f)(K.vK.reportproblem), setTimeout((function() {
                                                    de(void 0, void 0, void 0, (function() {
                                                        var n, e;
                                                        return pe(this, (function(t) {
                                                            switch (t.label) {
                                                                case 0:
                                                                    return Tn(2), [4, a.Z.createTicket({}, r)];
                                                                case 1:
                                                                    if ((n = t.sent()).status !== $.YR.Success) throw new Error("create support ticket failed ".concat(JSON.stringify(n)));
                                                                    return ge !== $.Ps.None && (n.uploadImageUrl ? (e = {
                                                                        method: "PUT",
                                                                        headers: {
                                                                            "Content-Type": "application/octet-stream"
                                                                        },
                                                                        body: Dn
                                                                    }, fetch(n.uploadImageUrl, e).then().catch((function(n) {
                                                                        Tn(0), V(6), (0, c.ZP)(n)
                                                                    }))) : (0, c.ZP)(new Error("image mime type error ".concat(Dn, " ").concat(ge)))), Tn(3), setTimeout((function() {
                                                                        V(5)
                                                                    }), 1e3), T && (0, In.L9)(K.C9, {
                                                                        error: T
                                                                    }), [2]
                                                            }
                                                        }))
                                                    }))
                                                }), z ? 2e3 : 500), [3, 6];
                                            case 5:
                                                return o = d.sent(), (0, c.ZP)(o), Tn(0), V(6), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            } else "tryAgain" === n ? (V(0), U(""), An(""), Nn(null), yn(""), A || ln(""), gn(!1), bn(!1), Tn(0), me($.Ps.None), Pn(!0), V(0)) : Ce()
                        };
                    return (0, h.tZ)(S.Z, {
                        className: "".concat(r || Z || j || G !== $.cj.landscape || !(0, w.tq)() ? "" : "addRotation ", "\n      ").concat(0 === M ? "fullSize" : ""),
                        modalBackgroundColor: C.qm.gradients.glass,
                        overlayStyles: Mn,
                        modalStyles: Hn,
                        style: (0, y.DJ)() ? {
                            transform: "rotate(0deg)"
                        } : {},
                        children: (0, h.BX)(Vn, {
                            children: [(0, h.tZ)(f, {
                                icon: ae[M].showFailed ? (0, h.tZ)(_n, {
                                    children: "!"
                                }) : "",
                                title: L(ae[M].title || "helpAndSupport"),
                                onClose: ae[M].showDiagnosis ? null : Ce
                            }), ae[M].showProblems && (0, h.tZ)(ee, {
                                children: ie.map((function(n, e) {
                                    var t = n.label,
                                        i = n.options;
                                    return (0, h.tZ)(te, {
                                        onClick: function() {
                                            xe !== e && be(e)
                                        },
                                        children: (0, h.tZ)(W, {
                                            label: t,
                                            options: i,
                                            selectedValue: we === t ? F : "",
                                            showOptions: e === xe,
                                            onSelectOption: function(n) {
                                                U(n), ye(t), Oe.current = e
                                            }
                                        })
                                    }, t)
                                }))
                            }), ae[M].showEmail && (0, h.tZ)(s.II, {
                                disabled: A,
                                value: an,
                                type: "text",
                                id: "email-input",
                                required: !0,
                                error: un,
                                title: L("email"),
                                onUpdate: function(n) {
                                    return Se("email", n)
                                },
                                placeholder: L("emailPlaceholder"),
                                pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                                onFocus: function() {
                                    D({
                                        type: rn.Z.UPDATE_TEXTFIELD_FOCUS,
                                        payload: {
                                            uiTextfieldInFocus: !0
                                        }
                                    })
                                },
                                onBlur: function() {
                                    D({
                                        type: rn.Z.UPDATE_TEXTFIELD_FOCUS,
                                        payload: {
                                            uiTextfieldInFocus: !1
                                        }
                                    })
                                }
                            }), ae[M].showDescription && (0, h.BX)(h.HY, {
                                children: [(0, h.tZ)(s.gx, {
                                    limit: 200,
                                    error: xn,
                                    value: wn,
                                    id: "description-input",
                                    initialValue: wn,
                                    title: L("problemDescription"),
                                    placeholder: L("problemInfo"),
                                    onUpdate: function(n) {
                                        return Se("description", n)
                                    },
                                    required: !0,
                                    style: xn ? {
                                        marginBottom: "3px"
                                    } : {},
                                    onFocus: function() {
                                        D({
                                            type: rn.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !0
                                            }
                                        })
                                    },
                                    onBlur: function() {
                                        D({
                                            type: rn.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !1
                                            }
                                        })
                                    }
                                }), xn && (0, h.tZ)(m.kk, {
                                    className: "error",
                                    red: !0,
                                    med: !0,
                                    bold: !0,
                                    children: L("min12Characters")
                                })]
                            }), ae[M].showUpload && (0, h.BX)(ne, {
                                children: [(0, h.tZ)(d.__, {
                                    style: {
                                        color: C.qm.colors.white
                                    },
                                    children: L("uploadScreenshot")
                                }), (0, h.BX)(Wn, {
                                    preview: !!zn,
                                    children: [!(!zn && !Un) && (0, h.BX)(Jn, {
                                        tabIndex: 0,
                                        loading: !!Un,
                                        background: zn,
                                        onClick: function() {
                                            return An("")
                                        },
                                        children: [zn && (0, h.tZ)(p.J, {
                                            name: "cross-thin",
                                            size: 16
                                        }), Un && (0, h.tZ)(J.Z, {
                                            trackColor: C.qm.colors.white,
                                            movingColor: C.qm.colors.white40
                                        })]
                                    }), Cn && (0, h.BX)(Kn, {
                                        children: [(0, h.tZ)(p.J, {
                                            name: "warning",
                                            size: 16
                                        }), (0, h.tZ)(m.mH, {
                                            red: !0,
                                            children: L("invalidFileTryAgain")
                                        })]
                                    }), (0, h.BX)($n, {
                                        tabIndex: 0,
                                        seperator: !zn && z && window.Modernizr.canvas,
                                        compact: !!(zn || Un || Cn),
                                        htmlFor: "uploadFile",
                                        children: [(0, h.tZ)(p.J, {
                                            name: "upload",
                                            size: 16
                                        }), !(zn || Un || Cn) && (0, h.tZ)("p", {
                                            children: L("uploadFromDevice")
                                        }), (0, h.tZ)("input", {
                                            type: "file",
                                            id: "uploadFile",
                                            onChange: function(n) {
                                                return de(void 0, void 0, void 0, (function() {
                                                    var e, t, i, r, o;
                                                    return pe(this, (function(a) {
                                                        return e = n.target, Sn(!1), An(""), me($.Ps.None), Nn(null), t = e.files && e.files.length > 0 ? e.files[0] : null, n.target.value = "", t ? (i = ["jpg", "jpeg", "png", "svg", "tiff"], r = t.type.split("/")[1], i.includes(r) ? (o = new FileReader, me(t.type), le(!0), o.onload = function(n) {
                                                            return de(void 0, void 0, void 0, (function() {
                                                                var e, t, i, r, o, a, l, c, s, d;
                                                                return pe(this, (function(p) {
                                                                    switch (p.label) {
                                                                        case 0:
                                                                            if (e = x.Z.getState(), t = e.play.videoRef, (null === (l = null === n || void 0 === n ? void 0 : n.target) || void 0 === l ? void 0 : l.result) && (Pe.current = n.target.result), !(null === t || void 0 === t ? void 0 : t.current) || !(null === (c = null === n || void 0 === n ? void 0 : n.target) || void 0 === c ? void 0 : c.result)) return [3, 8];
                                                                            p.label = 1;
                                                                        case 1:
                                                                            return p.trys.push([1, 6, , 7]), [4, hn(n.target.result, t.current, G)];
                                                                        case 2:
                                                                            return i = p.sent(), ke.current && "string" === typeof i ? ((r = []).push({
                                                                                uri: i,
                                                                                name: ""
                                                                            }), r.push({
                                                                                uri: ke.current,
                                                                                name: "Screen Capture"
                                                                            }), [4, sn(r)]) : [3, 4];
                                                                        case 3:
                                                                            o = p.sent(), i = dn(o), p.label = 4;
                                                                        case 4:
                                                                            return [4, cn(i)];
                                                                        case 5:
                                                                            return a = p.sent(), me($.Ps.Jpeg), An(i), Nn(a), [3, 7];
                                                                        case 6:
                                                                            return p.sent(), An(null === (s = null === n || void 0 === n ? void 0 : n.target) || void 0 === s ? void 0 : s.result), [3, 7];
                                                                        case 7:
                                                                            return [3, 9];
                                                                        case 8:
                                                                            An(null === (d = null === n || void 0 === n ? void 0 : n.target) || void 0 === d ? void 0 : d.result), p.label = 9;
                                                                        case 9:
                                                                            return le(!1), [2]
                                                                    }
                                                                }))
                                                            }))
                                                        }, o.onerror = function() {
                                                            le(!1), An(""), me($.Ps.None)
                                                        }, o.readAsDataURL(t), Nn(t)) : Sn(!0), [2]) : [2]
                                                    }))
                                                }))
                                            },
                                            accept: "image/png, image/svg+xml, image/tif, image/gif, image/jpeg, image/jpg, .tif"
                                        })]
                                    }), z && window.Modernizr.canvas && Ze && (0, h.BX)($n, {
                                        tabIndex: 0,
                                        compact: !!(zn || Un || Cn),
                                        onClick: je,
                                        children: [(0, h.tZ)(p.J, {
                                            name: "screenshot",
                                            size: 16
                                        }), !(zn || Un || Cn) && (0, h.tZ)("p", {
                                            children: L("captureScreen")
                                        })]
                                    })]
                                })]
                            }), ae[M].showDiagnosisCheckbox && (0, h.tZ)(s.Jg, {
                                onChange: function(n) {
                                    return Pn(n.target.checked)
                                },
                                checked: kn,
                                children: (0, h.tZ)(m.gd, {
                                    children: L("runDiagnostics")
                                })
                            }), ae[M].showDiagnosis && (0, h.tZ)(qn, {
                                children: (kn ? re : oe).map((function(n, e) {
                                    return (0, h.BX)(Yn, {
                                        onClick: function() {
                                            return U(n)
                                        },
                                        children: [e < Ln ? (0, h.tZ)(p.J, {
                                            name: "active",
                                            size: 16
                                        }) : (0, h.tZ)(J.Z, {}), (0, h.tZ)(m.lU, {
                                            children: L(n)
                                        })]
                                    }, n)
                                }))
                            }), ae[M].showSuccess && (0, h.tZ)("div", {
                                style: {
                                    margin: "16px 8px",
                                    color: "white"
                                },
                                children: (0, h.tZ)(m.T6, {
                                    children: L("reviewingResponse")
                                })
                            }), ae[M].showFailed && (0, h.tZ)("div", {
                                style: {
                                    margin: "16px 8px"
                                },
                                children: (0, h.tZ)(m.T6, {
                                    children: L("feedbackFailedTryAgain")
                                })
                            }), (null === (e = ae[M].buttons) || void 0 === e ? void 0 : e.length) && (0, h.tZ)(g, {
                                center: 1 !== M,
                                children: (0, h.tZ)(Qn, {
                                    children: null === (t = ae[M].buttons) || void 0 === t ? void 0 : t.map((function(n) {
                                        var e = n.type,
                                            t = n.label,
                                            i = n.variant,
                                            r = void 0 === i ? "primary" : i;
                                        return (0, h.tZ)(l.z, function(n) {
                                            for (var e = 1; e < arguments.length; e++) {
                                                var t = null != arguments[e] ? arguments[e] : {};
                                                e % 2 ? ce(Object(t), !0).forEach((function(e) {
                                                    (0, o.Z)(n, e, t[e])
                                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : ce(Object(t)).forEach((function(e) {
                                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                                                }))
                                            }
                                            return n
                                        }({
                                            text: L(t),
                                            onClick: function() {
                                                return Le(e, ae[M])
                                            },
                                            variant: r,
                                            id: "".concat(t.toLowerCase(), "-btn")
                                        }, ("submit" === e || "next" === e) && {
                                            disabled: q
                                        }), t)
                                    }))
                                })
                            })]
                        })
                    })
                }
        },
        43626: function(n, e, t) {
            "use strict";
            var i = t(11720),
                r = t(97997),
                o = function() {
                    return (0, r.tZ)("span", {})
                };
            e.Z = function(n) {
                var e = n.children,
                    t = (0, i.useState)(!1),
                    a = t[0],
                    l = t[1];
                return (0, i.useEffect)((function() {
                    return l(!0)
                }), []), (0, r.tZ)(r.HY, {
                    children: a ? e : (0, r.tZ)(o, {})
                })
            }
        },
        12731: function(n, e, t) {
            "use strict";
            t(11720);
            var i = t(25675),
                r = t(45024),
                o = t(94672),
                a = t(97997);
            e.Z = function(n) {
                var e = n.desktopBanner,
                    t = n.children,
                    l = n.style,
                    c = n.isAppPage;
                return (0, a.BX)(o.W, {
                    className: "landscape",
                    style: l,
                    children: [(0, a.tZ)(o.Bg, {
                        isAppPage: c,
                        children: e && (0, a.tZ)(i.default, {
                            src: e,
                            quality: "80",
                            objectFit: "cover",
                            layout: "fill",
                            loader: r.O
                        })
                    }), t]
                })
            }
        },
        1003: function(n, e) {
            "use strict";
            e.Z = {
                src: "/play/_next/static/media/aptoidIcon.2e8228d0.svg",
                height: 21,
                width: 21
            }
        }
    }
]);
//# sourceMappingURL=166-6380aa1e6d9876f7.js.map