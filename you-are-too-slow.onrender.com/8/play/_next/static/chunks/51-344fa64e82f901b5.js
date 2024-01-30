(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51], {
        78566: function(e, t, r) {
            "use strict";
            var n = r(61682),
                i = r(53848),
                s = r(83115);
            t.default = function(e) {
                var t, r = e.src,
                    s = e.sizes,
                    d = e.unoptimized,
                    u = void 0 !== d && d,
                    p = e.priority,
                    v = void 0 !== p && p,
                    b = e.loading,
                    y = e.lazyBoundary,
                    w = void 0 === y ? "200px" : y,
                    S = e.className,
                    E = e.quality,
                    T = e.width,
                    O = e.height,
                    _ = e.objectFit,
                    M = e.objectPosition,
                    k = e.onLoadingComplete,
                    L = e.loader,
                    A = void 0 === L ? C : L,
                    z = e.placeholder,
                    I = void 0 === z ? "empty" : z,
                    j = e.blurDataURL,
                    D = function(e, t) {
                        if (null == e) return {};
                        var r, n, i = function(e, t) {
                            if (null == e) return {};
                            var r, n, i = {},
                                s = Object.keys(e);
                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var s = Object.getOwnPropertySymbols(e);
                            for (n = 0; n < s.length; n++) r = s[n], t.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                        }
                        return i
                    }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    G = s ? "responsive" : "intrinsic";
                "layout" in D && (D.layout && (G = D.layout), delete D.layout);
                var N = "";
                if (function(e) {
                        return "object" === typeof e && (g(e) || function(e) {
                            return void 0 !== e.src
                        }(e))
                    }(r)) {
                    var B = g(r) ? r.default : r;
                    if (!B.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(B)));
                    if (j = j || B.blurDataURL, N = B.src, (!G || "fill" !== G) && (O = O || B.height, T = T || B.width, !B.height || !B.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(B)))
                }
                r = "string" === typeof r ? r : N;
                var R = P(T),
                    F = P(O),
                    V = P(E),
                    $ = !v && ("lazy" === b || "undefined" === typeof b);
                (r.startsWith("data:") || r.startsWith("blob:")) && (u = !0, $ = !1);
                m.has(r) && ($ = !1);
                0;
                var H, W = c.useIntersection({
                        rootMargin: w,
                        disabled: !$
                    }),
                    q = i(W, 2),
                    X = q[0],
                    Y = q[1],
                    U = !$ || Y,
                    K = {
                        boxSizing: "border-box",
                        display: "block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    Z = {
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    J = !1,
                    Q = {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        boxSizing: "border-box",
                        padding: 0,
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: 0,
                        height: 0,
                        minWidth: "100%",
                        maxWidth: "100%",
                        minHeight: "100%",
                        maxHeight: "100%",
                        objectFit: _,
                        objectPosition: M
                    },
                    ee = "blur" === I ? {
                        filter: "blur(20px)",
                        backgroundSize: _ || "cover",
                        backgroundImage: 'url("'.concat(j, '")'),
                        backgroundPosition: M || "0% 0%"
                    } : {};
                if ("fill" === G) K.display = "block", K.position = "absolute", K.top = 0, K.left = 0, K.bottom = 0, K.right = 0;
                else if ("undefined" !== typeof R && "undefined" !== typeof F) {
                    var te = F / R,
                        re = isNaN(te) ? "100%" : "".concat(100 * te, "%");
                    "responsive" === G ? (K.display = "block", K.position = "relative", J = !0, Z.paddingTop = re) : "intrinsic" === G ? (K.display = "inline-block", K.position = "relative", K.maxWidth = "100%", J = !0, Z.maxWidth = "100%", H = '<svg width="'.concat(R, '" height="').concat(F, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === G && (K.display = "inline-block", K.position = "relative", K.width = R, K.height = F)
                } else 0;
                var ne = {
                    src: h,
                    srcSet: void 0,
                    sizes: void 0
                };
                U && (ne = x({
                    src: r,
                    unoptimized: u,
                    layout: G,
                    width: R,
                    quality: V,
                    sizes: s,
                    loader: A
                }));
                var ie = r;
                0;
                0;
                var se = (n(t = {}, "imagesrcset", ne.srcSet), n(t, "imagesizes", ne.sizes), t);
                return a.default.createElement("span", {
                    style: K
                }, J ? a.default.createElement("span", {
                    style: Z
                }, H ? a.default.createElement("img", {
                    style: {
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: 0,
                        margin: 0,
                        padding: 0
                    },
                    alt: "",
                    "aria-hidden": !0,
                    src: "data:image/svg+xml;base64,".concat(l.toBase64(H))
                }) : null) : null, a.default.createElement("img", Object.assign({}, D, ne, {
                    decoding: "async",
                    "data-nimg": G,
                    className: S,
                    ref: function(e) {
                        X(e),
                            function(e, t, r, n, i) {
                                if (!e) return;
                                var s = function() {
                                    e.src !== h && ("decode" in e ? e.decode() : Promise.resolve()).catch((function() {})).then((function() {
                                        if ("blur" === n && (e.style.filter = "none", e.style.backgroundSize = "none", e.style.backgroundImage = "none"), m.add(t), i) {
                                            var r = e.naturalWidth,
                                                s = e.naturalHeight;
                                            i({
                                                naturalWidth: r,
                                                naturalHeight: s
                                            })
                                        }
                                    }))
                                };
                                e.complete ? s() : e.onload = s
                            }(e, ie, 0, I, k)
                    },
                    style: f({}, Q, ee)
                })), a.default.createElement("noscript", null, a.default.createElement("img", Object.assign({}, D, x({
                    src: r,
                    unoptimized: u,
                    layout: G,
                    width: R,
                    quality: V,
                    sizes: s,
                    loader: A
                }), {
                    decoding: "async",
                    "data-nimg": G,
                    style: Q,
                    className: S,
                    loading: b || "lazy"
                }))), v ? a.default.createElement(o.default, null, a.default.createElement("link", Object.assign({
                    key: "__nimg-" + ne.src + ne.srcSet + ne.sizes,
                    rel: "preload",
                    as: "image",
                    href: ne.srcSet ? void 0 : ne.src
                }, se))) : null)
            };
            var a = p(r(11720)),
                o = p(r(72717)),
                l = r(33389),
                d = r(5809),
                c = r(90639);

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    })))), n.forEach((function(t) {
                        u(e, t, r[t])
                    }))
                }
                return e
            }
            var m = new Set,
                h = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var v = new Map([
                ["default", function(e) {
                    var t = e.root,
                        r = e.src,
                        n = e.width,
                        i = e.quality;
                    0;
                    return "".concat(t, "?url=").concat(encodeURIComponent(r), "&w=").concat(n, "&q=").concat(i || 75)
                }],
                ["imgix", function(e) {
                    var t = e.root,
                        r = e.src,
                        n = e.width,
                        i = e.quality,
                        s = new URL("".concat(t).concat(O(r))),
                        a = s.searchParams;
                    a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || n.toString()), i && a.set("q", i.toString());
                    return s.href
                }],
                ["cloudinary", function(e) {
                    var t = e.root,
                        r = e.src,
                        n = e.width,
                        i = e.quality,
                        s = ["f_auto", "c_limit", "w_" + n, "q_" + (i || "auto")].join(",") + "/";
                    return "".concat(t).concat(s).concat(O(r))
                }],
                ["akamai", function(e) {
                    var t = e.root,
                        r = e.src,
                        n = e.width;
                    return "".concat(t).concat(O(r), "?imwidth=").concat(n)
                }],
                ["custom", function(e) {
                    var t = e.src;
                    throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
                }]
            ]);

            function g(e) {
                return void 0 !== e.default
            }
            var b = {
                    deviceSizes: [640, 1200, 3840],
                    imageSizes: [64, 128, 256],
                    path: "/play/_next/image",
                    loader: "default"
                } || d.imageConfigDefault,
                y = b.deviceSizes,
                w = b.imageSizes,
                S = b.loader,
                E = b.path,
                T = (b.domains, [].concat(s(y), s(w)));

            function x(e) {
                var t = e.src,
                    r = e.unoptimized,
                    n = e.layout,
                    i = e.width,
                    a = e.quality,
                    o = e.sizes,
                    l = e.loader;
                if (r) return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
                var d = function(e, t, r) {
                        if (r && ("fill" === t || "responsive" === t)) {
                            for (var n, i = /(^|\s)(1?\d?\d)vw/g, a = []; n = i.exec(r); n) a.push(parseInt(n[2]));
                            if (a.length) {
                                var o = .01 * Math.min.apply(Math, a);
                                return {
                                    widths: T.filter((function(e) {
                                        return e >= y[0] * o
                                    })),
                                    kind: "w"
                                }
                            }
                            return {
                                widths: T,
                                kind: "w"
                            }
                        }
                        return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                            widths: y,
                            kind: "w"
                        } : {
                            widths: s(new Set([e, 2 * e].map((function(e) {
                                return T.find((function(t) {
                                    return t >= e
                                })) || T[T.length - 1]
                            })))),
                            kind: "x"
                        }
                    }(i, n, o),
                    c = d.widths,
                    u = d.kind,
                    p = c.length - 1;
                return {
                    sizes: o || "w" !== u ? o : "100vw",
                    srcSet: c.map((function(e, r) {
                        return "".concat(l({
                            src: t,
                            quality: a,
                            width: e
                        }), " ").concat("w" === u ? e : r + 1).concat(u)
                    })).join(", "),
                    src: l({
                        src: t,
                        quality: a,
                        width: c[p]
                    })
                }
            }

            function P(e) {
                return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
            }

            function C(e) {
                var t = v.get(S);
                if (t) return t(f({
                    root: E
                }, e));
                throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "), ". Received: ").concat(S))
            }

            function O(e) {
                return "/" === e[0] ? e.slice(1) : e
            }
            y.sort((function(e, t) {
                return e - t
            })), T.sort((function(e, t) {
                return e - t
            }))
        },
        90639: function(e, t, r) {
            "use strict";
            var n = r(53848);
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    r = e.disabled || !a,
                    l = i.useRef(),
                    d = i.useState(!1),
                    c = n(d, 2),
                    u = c[0],
                    p = c[1],
                    f = i.useCallback((function(e) {
                        l.current && (l.current(), l.current = void 0), r || u || e && e.tagName && (l.current = function(e, t, r) {
                            var n = function(e) {
                                    var t = e.rootMargin || "",
                                        r = o.get(t);
                                    if (r) return r;
                                    var n = new Map,
                                        i = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = n.get(e.target),
                                                    r = e.isIntersecting || e.intersectionRatio > 0;
                                                t && r && t(r)
                                            }))
                                        }), e);
                                    return o.set(t, r = {
                                        id: t,
                                        observer: i,
                                        elements: n
                                    }), r
                                }(r),
                                i = n.id,
                                s = n.observer,
                                a = n.elements;
                            return a.set(e, t), s.observe(e),
                                function() {
                                    a.delete(e), s.unobserve(e), 0 === a.size && (s.disconnect(), o.delete(i))
                                }
                        }(e, (function(e) {
                            return e && p(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [r, t, u]);
                return i.useEffect((function() {
                    if (!a && !u) {
                        var e = s.requestIdleCallback((function() {
                            return p(!0)
                        }));
                        return function() {
                            return s.cancelIdleCallback(e)
                        }
                    }
                }), [u]), [f, u]
            };
            var i = r(11720),
                s = r(26286),
                a = "undefined" !== typeof IntersectionObserver;
            var o = new Map
        },
        73579: function(e, t, r) {
            "use strict";
            var n = r(61682);

            function i(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? i(Object(r), !0).forEach((function(t) {
                        n(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            t.default = function(e, t) {
                var r = a.default,
                    n = {
                        loading: function(e) {
                            e.error, e.isLoading;
                            return e.pastDelay, null
                        }
                    };
                e instanceof Promise ? n.loader = function() {
                    return e
                } : "function" === typeof e ? n.loader = e : "object" === typeof e && (n = s(s({}, n), e));
                var i = n = s(s({}, n), t);
                if (i.suspense) throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");
                if (i.suspense) return r(i);
                n.loadableGenerated && delete(n = s(s({}, n), n.loadableGenerated)).loadableGenerated;
                if ("boolean" === typeof n.ssr) {
                    if (!n.ssr) return delete n.ssr, l(r, n);
                    delete n.ssr
                }
                return r(n)
            };
            o(r(11720));
            var a = o(r(23668));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function l(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }
        },
        3982: function(e, t, r) {
            "use strict";
            var n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.LoadableContext = void 0;
            var i = ((n = r(11720)) && n.__esModule ? n : {
                default: n
            }).default.createContext(null);
            t.LoadableContext = i
        },
        23668: function(e, t, r) {
            "use strict";
            var n = r(2553),
                i = r(62012),
                s = r(61682);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        s(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function l(e, t) {
                var r = "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (!r) {
                    if (Array.isArray(e) || (r = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return d(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === r && e.constructor && (r = e.constructor.name);
                            if ("Map" === r || "Set" === r) return Array.from(e);
                            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return d(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        r && (e = r);
                        var n = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return n >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[n++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var s, a = !0,
                    o = !1;
                return {
                    s: function() {
                        r = r.call(e)
                    },
                    n: function() {
                        var e = r.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        o = !0, s = e
                    },
                    f: function() {
                        try {
                            a || null == r.return || r.return()
                        } finally {
                            if (o) throw s
                        }
                    }
                }
            }

            function d(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var c, u = (c = r(11720)) && c.__esModule ? c : {
                    default: c
                },
                p = r(67161),
                f = r(3982);
            var m = [],
                h = [],
                v = !1;

            function g(e) {
                var t = e(),
                    r = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return r.promise = t.then((function(e) {
                    return r.loading = !1, r.loaded = e, e
                })).catch((function(e) {
                    throw r.loading = !1, r.error = e, e
                })), r
            }
            var b = function() {
                function e(t, r) {
                    n(this, e), this._loadFn = t, this._opts = r, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return i(e, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var e = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var t = this._res,
                            r = this._opts;
                        t.loading && ("number" === typeof r.delay && (0 === r.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            e._update({
                                pastDelay: !0
                            })
                        }), r.delay)), "number" === typeof r.timeout && (this._timeout = setTimeout((function() {
                            e._update({
                                timedOut: !0
                            })
                        }), r.timeout))), this._res.promise.then((function() {
                            e._update({}), e._clearTimeouts()
                        })).catch((function(t) {
                            e._update({}), e._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(e) {
                        this._state = o(o({}, this._state), {}, {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }, e), this._callbacks.forEach((function(e) {
                            return e()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(e) {
                        var t = this;
                        return this._callbacks.add(e),
                            function() {
                                t._callbacks.delete(e)
                            }
                    }
                }]), e
            }();

            function y(e) {
                return function(e, t) {
                    var r = Object.assign({
                        loader: null,
                        loading: null,
                        delay: 200,
                        timeout: null,
                        webpack: null,
                        modules: null,
                        suspense: !1
                    }, t);
                    r.suspense && (r.lazy = u.default.lazy(r.loader));
                    var n = null;

                    function i() {
                        if (!n) {
                            var t = new b(e, r);
                            n = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return n.promise()
                    }
                    if (!v && "function" === typeof r.webpack && !r.suspense) {
                        var s = r.webpack();
                        h.push((function(e) {
                            var t, r = l(s);
                            try {
                                for (r.s(); !(t = r.n()).done;) {
                                    var n = t.value;
                                    if (-1 !== e.indexOf(n)) return i()
                                }
                            } catch (a) {
                                r.e(a)
                            } finally {
                                r.f()
                            }
                        }))
                    }
                    var a = r.suspense ? function(e, t) {
                        return u.default.createElement(r.lazy, o(o({}, e), {}, {
                            ref: t
                        }))
                    } : function(e, t) {
                        i();
                        var s = u.default.useContext(f.LoadableContext),
                            a = p.useSubscription(n);
                        return u.default.useImperativeHandle(t, (function() {
                            return {
                                retry: n.retry
                            }
                        }), []), s && Array.isArray(r.modules) && r.modules.forEach((function(e) {
                            s(e)
                        })), u.default.useMemo((function() {
                            return a.loading || a.error ? u.default.createElement(r.loading, {
                                isLoading: a.loading,
                                pastDelay: a.pastDelay,
                                timedOut: a.timedOut,
                                error: a.error,
                                retry: n.retry
                            }) : a.loaded ? u.default.createElement(function(e) {
                                return e && e.__esModule ? e.default : e
                            }(a.loaded), e) : null
                        }), [e, a])
                    };
                    return a.preload = function() {
                        return !r.suspense && i()
                    }, a.displayName = "LoadableComponent", u.default.forwardRef(a)
                }(g, e)
            }

            function w(e, t) {
                for (var r = []; e.length;) {
                    var n = e.pop();
                    r.push(n(t))
                }
                return Promise.all(r).then((function() {
                    if (e.length) return w(e, t)
                }))
            }
            y.preloadAll = function() {
                return new Promise((function(e, t) {
                    w(m).then(e, t)
                }))
            }, y.preloadReady = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(t) {
                    var r = function() {
                        return v = !0, t()
                    };
                    w(h, e).then(r, r)
                }))
            }, window.__NEXT_PRELOADREADY = y.preloadReady;
            var S = y;
            t.default = S
        },
        33389: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.toBase64 = function(e) {
                return window.btoa(e)
            }
        },
        96086: function(e) {
            "use strict";
            var t = Object.assign.bind(Object);
            e.exports = t, e.exports.default = e.exports
        },
        72821: function() {},
        30933: function() {},
        5809: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.imageConfigDefault = t.VALID_LOADERS = void 0;
            t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
            t.imageConfigDefault = {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                path: "/_next/image",
                loader: "default",
                domains: [],
                disableStaticImages: !1,
                minimumCacheTTL: 60,
                formats: ["image/webp"]
            }
        },
        5152: function(e, t, r) {
            e.exports = r(73579)
        },
        25675: function(e, t, r) {
            e.exports = r(78566)
        },
        11163: function(e, t, r) {
            e.exports = r(69898)
        },
        78603: function(e, t, r) {
            "use strict";

            function n(e) {
                return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function s(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                }
            }

            function a(e, t) {
                return !t || "object" !== n(t) && "function" !== typeof t ? l(e) : t
            }

            function o(e) {
                return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function l(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            r.d(t, {
                r: function() {
                    return u
                }
            });
            var u = function(e) {
                function t() {
                    var e, r;
                    i(this, t);
                    for (var n = arguments.length, s = new Array(n), d = 0; d < n; d++) s[d] = arguments[d];
                    return c(l(r = a(this, (e = o(t)).call.apply(e, [this].concat(s)))), "state", {
                        bootstrapped: !1
                    }), c(l(r), "_unsubscribe", void 0), c(l(r), "handlePersistorState", (function() {
                        r.props.persistor.getState().bootstrapped && (r.props.onBeforeLift ? Promise.resolve(r.props.onBeforeLift()).finally((function() {
                            return r.setState({
                                bootstrapped: !0
                            })
                        })) : r.setState({
                            bootstrapped: !0
                        }), r._unsubscribe && r._unsubscribe())
                    })), r
                }
                var r, n, u;
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(t, e), r = t, (n = [{
                    key: "componentDidMount",
                    value: function() {
                        this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState), this.handlePersistorState()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this._unsubscribe && this._unsubscribe()
                    }
                }, {
                    key: "render",
                    value: function() {
                        return "function" === typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading
                    }
                }]) && s(r.prototype, n), u && s(r, u), t
            }(r(11720).PureComponent);
            c(u, "defaultProps", {
                children: null,
                loading: null
            })
        },
        22546: function(e, t, r) {
            "use strict";
            r.d(t, {
                tq: function() {
                    return S
                },
                o5: function() {
                    return T
                }
            });
            var n = r(11720),
                i = r(22544);

            function s(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function a(e, t) {
                const r = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : s(t[r]) && s(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : a(e[r], t[r]) : e[r] = t[r]
                }))
            }

            function o(e = {}) {
                return e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function l(e = {}) {
                return e.pagination && "undefined" === typeof e.pagination.el
            }

            function d(e = {}) {
                return e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function c(e = "") {
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    r = [];
                return t.forEach((e => {
                    r.indexOf(e) < 0 && r.push(e)
                })), r.join(" ")
            }

            function u(e = "") {
                return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
            }
            const p = ["eventsPrefix", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control", "injectStyles", "injectStylesUrls"];

            function f(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function m(e) {
                const t = [];
                return n.default.Children.toArray(e).forEach((e => {
                    f(e) ? t.push(e) : e.props && e.props.children && m(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function h(e) {
                const t = [],
                    r = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.default.Children.toArray(e).forEach((e => {
                    if (f(e)) t.push(e);
                    else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const n = m(e.props.children);
                        n.length > 0 ? n.forEach((e => t.push(e))) : r["container-end"].push(e)
                    } else r["container-end"].push(e)
                })), {
                    slides: t,
                    slots: r
                }
            }

            function v({
                swiper: e,
                slides: t,
                passedParams: r,
                changedParams: n,
                nextEl: i,
                prevEl: o,
                scrollbarEl: l,
                paginationEl: d
            }) {
                const c = n.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                    {
                        params: u,
                        pagination: p,
                        navigation: f,
                        scrollbar: m,
                        virtual: h,
                        thumbs: v
                    } = e;
                let g, b, y, w, S, E, T, x;
                n.includes("thumbs") && r.thumbs && r.thumbs.swiper && u.thumbs && !u.thumbs.swiper && (g = !0), n.includes("controller") && r.controller && r.controller.control && u.controller && !u.controller.control && (b = !0), n.includes("pagination") && r.pagination && (r.pagination.el || d) && (u.pagination || !1 === u.pagination) && p && !p.el && (y = !0), n.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (u.scrollbar || !1 === u.scrollbar) && m && !m.el && (w = !0), n.includes("navigation") && r.navigation && (r.navigation.prevEl || o) && (r.navigation.nextEl || i) && (u.navigation || !1 === u.navigation) && f && !f.prevEl && !f.nextEl && (S = !0);
                if (n.includes("loop") && e.isElement && (u.loop && !r.loop ? E = !0 : !u.loop && r.loop ? T = !0 : x = !0), c.forEach((t => {
                        if (s(u[t]) && s(r[t])) a(u[t], r[t]);
                        else {
                            const i = r[t];
                            !0 !== i && !1 !== i || "navigation" !== t && "pagination" !== t && "scrollbar" !== t ? u[t] = r[t] : !1 === i && e[n = t] && (e[n].destroy(), "navigation" === n ? (e.isElement && (e[n].prevEl.remove(), e[n].nextEl.remove()), u[n].prevEl = void 0, u[n].nextEl = void 0, e[n].prevEl = void 0, e[n].nextEl = void 0) : (e.isElement && e[n].el.remove(), u[n].el = void 0, e[n].el = void 0))
                        }
                        var n
                    })), c.includes("controller") && !b && e.controller && e.controller.control && u.controller && u.controller.control && (e.controller.control = u.controller.control), n.includes("children") && t && h && u.virtual.enabled && (h.slides = t, h.update(!0)), n.includes("children") && t && u.loop && (x = !0), g) {
                    v.init() && v.update(!0)
                }
                b && (e.controller.control = u.controller.control), y && (!e.isElement || d && "string" !== typeof d || ((d = document.createElement("div")).classList.add("swiper-pagination"), e.el.shadowEl.appendChild(d)), d && (u.pagination.el = d), p.init(), p.render(), p.update()), w && (!e.isElement || l && "string" !== typeof l || ((l = document.createElement("div")).classList.add("swiper-scrollbar"), e.el.shadowEl.appendChild(l)), l && (u.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), S && (e.isElement && (i && "string" !== typeof i || ((i = document.createElement("div")).classList.add("swiper-button-next"), e.el.shadowEl.appendChild(i)), o && "string" !== typeof o || ((o = document.createElement("div")).classList.add("swiper-button-prev"), e.el.shadowEl.appendChild(o))), i && (u.navigation.nextEl = i), o && (u.navigation.prevEl = o), f.init(), f.update()), n.includes("allowSlideNext") && (e.allowSlideNext = r.allowSlideNext), n.includes("allowSlidePrev") && (e.allowSlidePrev = r.allowSlidePrev), n.includes("direction") && e.changeDirection(r.direction, !1), (E || x) && e.loopDestroy(), (T || x) && e.loopCreate(), e.update()
            }

            function g(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const b = (0, n.createContext)(null),
                y = (0, n.createContext)(null);

            function w() {
                return (w = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            const S = (0, n.forwardRef)((function(e, t) {
                let {
                    className: r,
                    tag: f = "div",
                    wrapperTag: m = "div",
                    children: b,
                    onSwiper: S,
                    ...E
                } = void 0 === e ? {} : e, T = !1;
                const [x, P] = (0, n.useState)("swiper"), [C, O] = (0, n.useState)(null), [_, M] = (0, n.useState)(!1), k = (0, n.useRef)(!1), L = (0, n.useRef)(null), A = (0, n.useRef)(null), z = (0, n.useRef)(null), I = (0, n.useRef)(null), j = (0, n.useRef)(null), D = (0, n.useRef)(null), G = (0, n.useRef)(null), N = (0, n.useRef)(null), {
                    params: B,
                    passedParams: R,
                    rest: F,
                    events: V
                } = function(e = {}, t = !0) {
                    const r = {
                            on: {}
                        },
                        n = {},
                        o = {};
                    a(r, i.ZP.defaults), a(r, i.ZP.extendedDefaults), r._emitClasses = !0, r.init = !1;
                    const l = {},
                        d = p.map((e => e.replace(/_/, ""))),
                        c = Object.assign({}, e);
                    return Object.keys(c).forEach((i => {
                        "undefined" !== typeof e[i] && (d.indexOf(i) >= 0 ? s(e[i]) ? (r[i] = {}, o[i] = {}, a(r[i], e[i]), a(o[i], e[i])) : (r[i] = e[i], o[i] = e[i]) : 0 === i.search(/on[A-Z]/) && "function" === typeof e[i] ? t ? n[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : r.on[`${i[2].toLowerCase()}${i.substr(3)}`] = e[i] : l[i] = e[i])
                    })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                        !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
                    })), {
                        params: r,
                        passedParams: o,
                        rest: l,
                        events: n
                    }
                }(E), {
                    slides: $,
                    slots: H
                } = h(b), W = () => {
                    M(!_)
                };
                Object.assign(B.on, {
                    _containerClasses(e, t) {
                        P(t)
                    }
                });
                const q = () => {
                    Object.assign(B.on, V), T = !0;
                    const e = { ...B
                    };
                    if (delete e.wrapperClass, A.current = new i.ZP(e), A.current.virtual && A.current.params.virtual.enabled) {
                        A.current.virtual.slides = $;
                        const e = {
                            cache: !1,
                            slides: $,
                            renderExternal: O,
                            renderExternalUpdate: !1
                        };
                        a(A.current.params.virtual, e), a(A.current.originalParams.virtual, e)
                    }
                };
                L.current || q(), A.current && A.current.on("_beforeBreakpoint", W);
                return (0, n.useEffect)((() => () => {
                    A.current && A.current.off("_beforeBreakpoint", W)
                })), (0, n.useEffect)((() => {
                    !k.current && A.current && (A.current.emitSlidesClasses(), k.current = !0)
                })), g((() => {
                    if (t && (t.current = L.current), L.current) return A.current.destroyed && q(),
                        function({
                            el: e,
                            nextEl: t,
                            prevEl: r,
                            paginationEl: n,
                            scrollbarEl: i,
                            swiper: s
                        }, a) {
                            o(a) && t && r && (s.params.navigation.nextEl = t, s.originalParams.navigation.nextEl = t, s.params.navigation.prevEl = r, s.originalParams.navigation.prevEl = r), l(a) && n && (s.params.pagination.el = n, s.originalParams.pagination.el = n), d(a) && i && (s.params.scrollbar.el = i, s.originalParams.scrollbar.el = i), s.init(e)
                        }({
                            el: L.current,
                            nextEl: j.current,
                            prevEl: D.current,
                            paginationEl: G.current,
                            scrollbarEl: N.current,
                            swiper: A.current
                        }, B), S && S(A.current), () => {
                            A.current && !A.current.destroyed && A.current.destroy(!0, !1)
                        }
                }), []), g((() => {
                    !T && V && A.current && Object.keys(V).forEach((e => {
                        A.current.on(e, V[e])
                    }));
                    const e = function(e, t, r, n, i) {
                        const a = [];
                        if (!t) return a;
                        const o = e => {
                            a.indexOf(e) < 0 && a.push(e)
                        };
                        if (r && n) {
                            const e = n.map(i),
                                t = r.map(i);
                            e.join("") !== t.join("") && o("children"), n.length !== r.length && o("children")
                        }
                        return p.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                            if (r in e && r in t)
                                if (s(e[r]) && s(t[r])) {
                                    const n = Object.keys(e[r]),
                                        i = Object.keys(t[r]);
                                    n.length !== i.length ? o(r) : (n.forEach((n => {
                                        e[r][n] !== t[r][n] && o(r)
                                    })), i.forEach((n => {
                                        e[r][n] !== t[r][n] && o(r)
                                    })))
                                } else e[r] !== t[r] && o(r)
                        })), a
                    }(R, z.current, $, I.current, (e => e.key));
                    return z.current = R, I.current = $, e.length && A.current && !A.current.destroyed && v({
                        swiper: A.current,
                        slides: $,
                        passedParams: R,
                        changedParams: e,
                        nextEl: j.current,
                        prevEl: D.current,
                        scrollbarEl: N.current,
                        paginationEl: G.current
                    }), () => {
                        V && A.current && Object.keys(V).forEach((e => {
                            A.current.off(e, V[e])
                        }))
                    }
                })), g((() => {
                    var e;
                    !(e = A.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                }), [C]), n.default.createElement(f, w({
                    ref: L,
                    className: c(`${x}${r?` ${r}`:""}`)
                }, F), n.default.createElement(y.Provider, {
                    value: A.current
                }, H["container-start"], n.default.createElement(m, {
                    className: u(B.wrapperClass)
                }, H["wrapper-start"], B.virtual ? function(e, t, r) {
                    if (!r) return null;
                    const i = e => {
                            let r = e;
                            return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
                        },
                        s = e.isHorizontal() ? {
                            [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
                        } : {
                            top: `${r.offset}px`
                        },
                        {
                            from: a,
                            to: o
                        } = r,
                        l = e.params.loop ? -t.length : 0,
                        d = e.params.loop ? 2 * t.length : t.length,
                        c = [];
                    for (let n = l; n < d; n += 1) n >= a && n <= o && c.push(t[i(n)]);
                    return c.map(((t, r) => n.default.cloneElement(t, {
                        swiper: e,
                        style: s,
                        key: `slide-${r}`
                    })))
                }(A.current, $, C) : $.map(((e, t) => n.default.cloneElement(e, {
                    swiper: A.current,
                    swiperSlideIndex: t
                }))), H["wrapper-end"]), o(B) && n.default.createElement(n.default.Fragment, null, n.default.createElement("div", {
                    ref: D,
                    className: "swiper-button-prev"
                }), n.default.createElement("div", {
                    ref: j,
                    className: "swiper-button-next"
                })), d(B) && n.default.createElement("div", {
                    ref: N,
                    className: "swiper-scrollbar"
                }), l(B) && n.default.createElement("div", {
                    ref: G,
                    className: "swiper-pagination"
                }), H["container-end"]))
            }));

            function E() {
                return (E = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }
            S.displayName = "Swiper";
            const T = (0, n.forwardRef)((function(e, t) {
                let {
                    tag: r = "div",
                    children: i,
                    className: s = "",
                    swiper: a,
                    zoom: o,
                    lazy: l,
                    virtualIndex: d,
                    swiperSlideIndex: u,
                    ...p
                } = void 0 === e ? {} : e;
                const f = (0, n.useRef)(null),
                    [m, h] = (0, n.useState)("swiper-slide"),
                    [v, y] = (0, n.useState)(!1);

                function w(e, t, r) {
                    t === f.current && h(r)
                }
                g((() => {
                    if ("undefined" !== typeof u && (f.current.swiperSlideIndex = u), t && (t.current = f.current), f.current && a) {
                        if (!a.destroyed) return a.on("_slideClass", w), () => {
                            a && a.off("_slideClass", w)
                        };
                        "swiper-slide" !== m && h("swiper-slide")
                    }
                })), g((() => {
                    a && f.current && !a.destroyed && h(a.getSlideClasses(f.current))
                }), [a]);
                const S = {
                        isActive: m.indexOf("swiper-slide-active") >= 0,
                        isVisible: m.indexOf("swiper-slide-visible") >= 0,
                        isPrev: m.indexOf("swiper-slide-prev") >= 0,
                        isNext: m.indexOf("swiper-slide-next") >= 0
                    },
                    T = () => "function" === typeof i ? i(S) : i;
                return n.default.createElement(r, E({
                    ref: f,
                    className: c(`${m}${s?` ${s}`:""}`),
                    "data-swiper-slide-index": d,
                    onLoad: () => {
                        y(!0)
                    }
                }, p), o && n.default.createElement(b.Provider, {
                    value: S
                }, n.default.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof o ? o : void 0
                }, T(), l && !v && n.default.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !o && n.default.createElement(b.Provider, {
                    value: S
                }, T(), l && !v && n.default.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            }));
            T.displayName = "SwiperSlide"
        },
        22544: function(e, t, r) {
            "use strict";

            function n(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e = {}, t = {}) {
                Object.keys(t).forEach((r => {
                    "undefined" === typeof e[r] ? e[r] = t[r] : n(t[r]) && n(e[r]) && Object.keys(t[r]).length > 0 && i(e[r], t[r])
                }))
            }
            r.d(t, {
                pt: function() {
                    return Z
                },
                W_: function() {
                    return K
                },
                ZP: function() {
                    return U
                }
            });
            const s = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return i(e, s), e
            }
            const o = {
                document: s,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return i(e, o), e
            }

            function d(e, t = 0) {
                return setTimeout(e, t)
            }

            function c() {
                return Date.now()
            }

            function u(e, t = "x") {
                const r = l();
                let n, i, s;
                const a = function(e) {
                    const t = l();
                    let r;
                    return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
                }(e);
                return r.WebKitCSSMatrix ? (i = a.transform || a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === i ? "" : i)) : (s = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (i = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
            }

            function p(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function f(...e) {
                const t = Object(e[0]),
                    r = ["__proto__", "constructor", "prototype"];
                for (let i = 1; i < e.length; i += 1) {
                    const s = e[i];
                    if (void 0 !== s && null !== s && (n = s, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? n instanceof HTMLElement : n && (1 === n.nodeType || 11 === n.nodeType)))) {
                        const e = Object.keys(Object(s)).filter((e => r.indexOf(e) < 0));
                        for (let r = 0, n = e.length; r < n; r += 1) {
                            const n = e[r],
                                i = Object.getOwnPropertyDescriptor(s, n);
                            void 0 !== i && i.enumerable && (p(t[n]) && p(s[n]) ? s[n].__swiper__ ? t[n] = s[n] : f(t[n], s[n]) : !p(t[n]) && p(s[n]) ? (t[n] = {}, s[n].__swiper__ ? t[n] = s[n] : f(t[n], s[n])) : t[n] = s[n])
                        }
                    }
                }
                var n;
                return t
            }

            function m(e, t, r) {
                e.style.setProperty(t, r)
            }

            function h({
                swiper: e,
                targetPosition: t,
                side: r
            }) {
                const n = l(),
                    i = -e.translate;
                let s, a = null;
                const o = e.params.speed;
                e.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(e.cssModeFrameID);
                const d = t > i ? "next" : "prev",
                    c = (e, t) => "next" === d && e >= t || "prev" === d && e <= t,
                    u = () => {
                        s = (new Date).getTime(), null === a && (a = s);
                        const l = Math.max(Math.min((s - a) / o, 1), 0),
                            d = .5 - Math.cos(l * Math.PI) / 2;
                        let p = i + d * (t - i);
                        if (c(p, t) && (p = t), e.wrapperEl.scrollTo({
                                [r]: p
                            }), c(p, t)) return e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                                [r]: p
                            })
                        })), void n.cancelAnimationFrame(e.cssModeFrameID);
                        e.cssModeFrameID = n.requestAnimationFrame(u)
                    };
                u()
            }

            function v(e, t = "") {
                return [...e.children].filter((e => e.matches(t)))
            }

            function g(e, t = []) {
                const r = document.createElement(e);
                return r.classList.add(...Array.isArray(t) ? t : [t]), r
            }

            function b(e, t) {
                return l().getComputedStyle(e, null).getPropertyValue(t)
            }

            function y(e) {
                let t, r = e;
                if (r) {
                    for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
                    return t
                }
            }

            function w(e, t, r) {
                const n = l();
                return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }
            let S, E, T;

            function x() {
                return S || (S = function() {
                    const e = l(),
                        t = a();
                    return {
                        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), S
            }

            function P(e = {}) {
                return E || (E = function({
                    userAgent: e
                } = {}) {
                    const t = x(),
                        r = l(),
                        n = r.navigator.platform,
                        i = e || r.navigator.userAgent,
                        s = {
                            ios: !1,
                            android: !1
                        },
                        a = r.screen.width,
                        o = r.screen.height,
                        d = i.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let c = i.match(/(iPad).*OS\s([\d_]+)/);
                    const u = i.match(/(iPod)(.*OS\s([\d_]+))?/),
                        p = !c && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        f = "Win32" === n;
                    let m = "MacIntel" === n;
                    return !c && m && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${a}x${o}`) >= 0 && (c = i.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), m = !1), d && !f && (s.os = "android", s.android = !0), (c || p || u) && (s.os = "ios", s.ios = !0), s
                }(e)), E
            }

            function C() {
                return T || (T = function() {
                    const e = l();
                    let t = !1;

                    function r() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (r()) {
                        const r = String(e.navigator.userAgent);
                        if (r.includes("Version/")) {
                            const [e, n] = r.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            t = e < 16 || 16 === e && n < 2
                        }
                    }
                    return {
                        isSafari: t || r(),
                        needPerspectiveFix: t,
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), T
            }
            var O = {
                on(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;
                    const i = r ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][i](t)
                    })), n
                },
                once(e, t, r) {
                    const n = this;
                    if (!n.eventsListeners || n.destroyed) return n;
                    if ("function" !== typeof t) return n;

                    function i(...r) {
                        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, r)
                    }
                    return i.__emitterProxy = t, n.on(e, i, r)
                },
                onAny(e, t) {
                    const r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" !== typeof e) return r;
                    const n = t ? "unshift" : "push";
                    return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[n](e), r
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const r = t.eventsAnyListeners.indexOf(e);
                    return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
                },
                off(e, t) {
                    const r = this;
                    return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((n, i) => {
                            (n === t || n.__emitterProxy && n.__emitterProxy === t) && r.eventsListeners[e].splice(i, 1)
                        }))
                    })), r) : r
                },
                emit(...e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsListeners) return t;
                    let r, n, i;
                    "string" === typeof e[0] || Array.isArray(e[0]) ? (r = e[0], n = e.slice(1, e.length), i = t) : (r = e[0].events, n = e[0].data, i = e[0].context || t), n.unshift(i);
                    return (Array.isArray(r) ? r : r.split(" ")).forEach((e => {
                        t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach((t => {
                            t.apply(i, [e, ...n])
                        })), t.eventsListeners && t.eventsListeners[e] && t.eventsListeners[e].forEach((e => {
                            e.apply(i, n)
                        }))
                    })), t
                }
            };
            const _ = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
                    if (r) {
                        const t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
                        t && t.remove()
                    }
                },
                M = (e, t) => {
                    if (!e.slides[t]) return;
                    const r = e.slides[t].querySelector('[loading="lazy"]');
                    r && r.removeAttribute("loading")
                },
                k = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const r = e.slides.length;
                    if (!r || !t || t < 0) return;
                    t = Math.min(t, r);
                    const n = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        i = e.activeIndex,
                        s = i + n - 1;
                    if (e.params.rewind)
                        for (let a = i - t; a <= s + t; a += 1) {
                            const t = (a % r + r) % r;
                            t !== i && t > s && M(e, t)
                        } else
                            for (let a = Math.max(s - t, 0); a <= Math.min(s + t, r - 1); a += 1) a !== i && a > s && M(e, a)
                };

            function L({
                swiper: e,
                runCallbacks: t,
                direction: r,
                step: n
            }) {
                const {
                    activeIndex: i,
                    previousIndex: s
                } = e;
                let a = r;
                if (a || (a = i > s ? "next" : i < s ? "prev" : "reset"), e.emit(`transition${n}`), t && i !== s) {
                    if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
                    e.emit(`slideChangeTransition${n}`), "next" === a ? e.emit(`slideNextTransition${n}`) : e.emit(`slidePrevTransition${n}`)
                }
            }

            function A(e) {
                const t = this,
                    r = a(),
                    n = l(),
                    i = t.touchEventsData;
                i.evCache.push(e);
                const {
                    params: s,
                    touches: o,
                    enabled: d
                } = t;
                if (!d) return;
                if (!s.simulateTouch && "mouse" === e.pointerType) return;
                if (t.animating && s.preventInteractionOnTransition) return;
                !t.animating && s.cssMode && s.loop && t.loopFix();
                let u = e;
                u.originalEvent && (u = u.originalEvent);
                let p = u.target;
                if ("wrapper" === s.touchEventsTarget && !t.wrapperEl.contains(p)) return;
                if ("which" in u && 3 === u.which) return;
                if ("button" in u && u.button > 0) return;
                if (i.isTouched && i.isMoved) return;
                const f = !!s.noSwipingClass && "" !== s.noSwipingClass,
                    m = e.composedPath ? e.composedPath() : e.path;
                f && u.target && u.target.shadowRoot && m && (p = m[0]);
                const h = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
                    v = !(!u.target || !u.target.shadowRoot);
                if (s.noSwiping && (v ? function(e, t = this) {
                        return function t(r) {
                            if (!r || r === a() || r === l()) return null;
                            r.assignedSlot && (r = r.assignedSlot);
                            const n = r.closest(e);
                            return n || r.getRootNode ? n || t(r.getRootNode().host) : null
                        }(t)
                    }(h, p) : p.closest(h))) return void(t.allowClick = !0);
                if (s.swipeHandler && !p.closest(s.swipeHandler)) return;
                o.currentX = u.pageX, o.currentY = u.pageY;
                const g = o.currentX,
                    b = o.currentY,
                    y = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
                    w = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
                if (y && (g <= w || g >= n.innerWidth - w)) {
                    if ("prevent" !== y) return;
                    e.preventDefault()
                }
                Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), o.startX = g, o.startY = b, i.touchStartTime = c(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, s.threshold > 0 && (i.allowThresholdMove = !1);
                let S = !0;
                p.matches(i.focusableElements) && (S = !1, "SELECT" === p.nodeName && (i.isTouched = !1)), r.activeElement && r.activeElement.matches(i.focusableElements) && r.activeElement !== p && r.activeElement.blur();
                const E = S && t.allowTouchMove && s.touchStartPreventDefault;
                !s.touchStartForcePreventDefault && !E || p.isContentEditable || u.preventDefault(), t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !s.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", u)
            }

            function z(e) {
                const t = a(),
                    r = this,
                    n = r.touchEventsData,
                    {
                        params: i,
                        touches: s,
                        rtlTranslate: o,
                        enabled: l
                    } = r;
                if (!l) return;
                if (!i.simulateTouch && "mouse" === e.pointerType) return;
                let d = e;
                if (d.originalEvent && (d = d.originalEvent), !n.isTouched) return void(n.startMoving && n.isScrolling && r.emit("touchMoveOpposite", d));
                const u = n.evCache.findIndex((e => e.pointerId === d.pointerId));
                u >= 0 && (n.evCache[u] = d);
                const p = n.evCache.length > 1 ? n.evCache[0] : d,
                    f = p.pageX,
                    m = p.pageY;
                if (d.preventedByNestedSwiper) return s.startX = f, void(s.startY = m);
                if (!r.allowTouchMove) return d.target.matches(n.focusableElements) || (r.allowClick = !1), void(n.isTouched && (Object.assign(s, {
                    startX: f,
                    startY: m,
                    prevX: r.touches.currentX,
                    prevY: r.touches.currentY,
                    currentX: f,
                    currentY: m
                }), n.touchStartTime = c()));
                if (i.touchReleaseOnEdges && !i.loop)
                    if (r.isVertical()) {
                        if (m < s.startY && r.translate <= r.maxTranslate() || m > s.startY && r.translate >= r.minTranslate()) return n.isTouched = !1, void(n.isMoved = !1)
                    } else if (f < s.startX && r.translate <= r.maxTranslate() || f > s.startX && r.translate >= r.minTranslate()) return;
                if (t.activeElement && d.target === t.activeElement && d.target.matches(n.focusableElements)) return n.isMoved = !0, void(r.allowClick = !1);
                if (n.allowTouchCallbacks && r.emit("touchMove", d), d.targetTouches && d.targetTouches.length > 1) return;
                s.currentX = f, s.currentY = m;
                const h = s.currentX - s.startX,
                    v = s.currentY - s.startY;
                if (r.params.threshold && Math.sqrt(h ** 2 + v ** 2) < r.params.threshold) return;
                if ("undefined" === typeof n.isScrolling) {
                    let e;
                    r.isHorizontal() && s.currentY === s.startY || r.isVertical() && s.currentX === s.startX ? n.isScrolling = !1 : h * h + v * v >= 25 && (e = 180 * Math.atan2(Math.abs(v), Math.abs(h)) / Math.PI, n.isScrolling = r.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                }
                if (n.isScrolling && r.emit("touchMoveOpposite", d), "undefined" === typeof n.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (n.startMoving = !0)), n.isScrolling || r.zoom && r.params.zoom && r.params.zoom.enabled && n.evCache.length > 1) return void(n.isTouched = !1);
                if (!n.startMoving) return;
                r.allowClick = !1, !i.cssMode && d.cancelable && d.preventDefault(), i.touchMoveStopPropagation && !i.nested && d.stopPropagation();
                let g = r.isHorizontal() ? h : v,
                    b = r.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
                i.oneWayMovement && (g = Math.abs(g) * (o ? 1 : -1), b = Math.abs(b) * (o ? 1 : -1)), s.diff = g, g *= i.touchRatio, o && (g = -g, b = -b);
                const y = r.touchesDirection;
                r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = b > 0 ? "prev" : "next";
                const w = r.params.loop && !i.cssMode;
                if (!n.isMoved) {
                    if (w && r.loopFix({
                            direction: r.swipeDirection
                        }), n.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0
                        });
                        r.wrapperEl.dispatchEvent(e)
                    }
                    n.allowMomentumBounce = !1, !i.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", d)
                }
                let S;
                n.isMoved && y !== r.touchesDirection && w && Math.abs(g) >= 1 && (r.loopFix({
                    direction: r.swipeDirection,
                    setTranslate: !0
                }), S = !0), r.emit("sliderMove", d), n.isMoved = !0, n.currentTranslate = g + n.startTranslate;
                let E = !0,
                    T = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (T = 0), g > 0 ? (w && !S && n.currentTranslate > (i.centeredSlides ? r.minTranslate() - r.size / 2 : r.minTranslate()) && r.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), n.currentTranslate > r.minTranslate() && (E = !1, i.resistance && (n.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + n.startTranslate + g) ** T))) : g < 0 && (w && !S && n.currentTranslate < (i.centeredSlides ? r.maxTranslate() + r.size / 2 : r.maxTranslate()) && r.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: r.slides.length - ("auto" === i.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                    }), n.currentTranslate < r.maxTranslate() && (E = !1, i.resistance && (n.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - n.startTranslate - g) ** T))), E && (d.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && n.currentTranslate < n.startTranslate && (n.currentTranslate = n.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && n.currentTranslate > n.startTranslate && (n.currentTranslate = n.startTranslate), r.allowSlidePrev || r.allowSlideNext || (n.currentTranslate = n.startTranslate), i.threshold > 0) {
                    if (!(Math.abs(g) > i.threshold || n.allowThresholdMove)) return void(n.currentTranslate = n.startTranslate);
                    if (!n.allowThresholdMove) return n.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, n.currentTranslate = n.startTranslate, void(s.diff = r.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                }
                i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && r.freeMode || i.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), r.params.freeMode && i.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(n.currentTranslate), r.setTranslate(n.currentTranslate))
            }

            function I(e) {
                const t = this,
                    r = t.touchEventsData,
                    n = r.evCache.findIndex((t => t.pointerId === e.pointerId));
                if (n >= 0 && r.evCache.splice(n, 1), ["pointercancel", "pointerout", "pointerleave"].includes(e.type)) {
                    if (!("pointercancel" === e.type && (t.browser.isSafari || t.browser.isWebView))) return
                }
                const {
                    params: i,
                    touches: s,
                    rtlTranslate: a,
                    slidesGrid: o,
                    enabled: l
                } = t;
                if (!l) return;
                if (!i.simulateTouch && "mouse" === e.pointerType) return;
                let u = e;
                if (u.originalEvent && (u = u.originalEvent), r.allowTouchCallbacks && t.emit("touchEnd", u), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && i.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
                i.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const p = c(),
                    f = p - r.touchStartTime;
                if (t.allowClick) {
                    const e = u.path || u.composedPath && u.composedPath();
                    t.updateClickedSlide(e && e[0] || u.target), t.emit("tap click", u), f < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", u)
                }
                if (r.lastClickTime = c(), d((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === s.diff || r.currentTranslate === r.startTranslate) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
                let m;
                if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, m = i.followFinger ? a ? t.translate : -t.translate : -r.currentTranslate, i.cssMode) return;
                if (t.params.freeMode && i.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: m
                });
                let h = 0,
                    v = t.slidesSizesGrid[0];
                for (let d = 0; d < o.length; d += d < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                    const e = d < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                    "undefined" !== typeof o[d + e] ? m >= o[d] && m < o[d + e] && (h = d, v = o[d + e] - o[d]) : m >= o[d] && (h = d, v = o[o.length - 1] - o[o.length - 2])
                }
                let g = null,
                    b = null;
                i.rewind && (t.isBeginning ? b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                const y = (m - o[h]) / v,
                    w = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                if (f > i.longSwipesMs) {
                    if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= i.longSwipesRatio ? t.slideTo(i.rewind && t.isEnd ? g : h + w) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - i.longSwipesRatio ? t.slideTo(h + w) : null !== b && y < 0 && Math.abs(y) > i.longSwipesRatio ? t.slideTo(b) : t.slideTo(h))
                } else {
                    if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (u.target === t.navigation.nextEl || u.target === t.navigation.prevEl) ? u.target === t.navigation.nextEl ? t.slideTo(h + w) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + w), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : h))
                }
            }
            let j;

            function D() {
                const e = this,
                    {
                        params: t,
                        el: r
                    } = e;
                if (r && 0 === r.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: n,
                    allowSlidePrev: i,
                    snapGrid: s
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const o = a && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(j), j = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = i, e.allowSlideNext = n, e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow()
            }

            function G(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function N() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: r,
                        enabled: n
                    } = e;
                if (!n) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const s = e.maxTranslate() - e.minTranslate();
                i = 0 === s ? 0 : (e.translate - e.minTranslate()) / s, i !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function B(e) {
                _(this, e.target), this.update()
            }
            let R = !1;

            function F() {}
            const V = (e, t) => {
                const r = a(),
                    {
                        params: n,
                        el: i,
                        wrapperEl: s,
                        device: o
                    } = e,
                    l = !!n.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                i[d]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), r[d]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: l
                }), r[d]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), r[d]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), r[d]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), r[d]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), (n.preventClicks || n.preventClicksPropagation) && i[d]("click", e.onClick, !0), n.cssMode && s[d]("scroll", e.onScroll), n.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", D, !0) : e[c]("observerUpdate", D, !0), i[d]("load", e.onLoad, {
                    capture: !0
                })
            };
            const $ = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var H = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopedSlides: null,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function W(e, t) {
                return function(r = {}) {
                    const n = Object.keys(r)[0],
                        i = r[n];
                    "object" === typeof i && null !== i ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && !0 === e[n] && (e[n] = {
                        auto: !0
                    }), n in e && "enabled" in i ? (!0 === e[n] && (e[n] = {
                        enabled: !0
                    }), "object" !== typeof e[n] || "enabled" in e[n] || (e[n].enabled = !0), e[n] || (e[n] = {
                        enabled: !1
                    }), f(t, r)) : f(t, r)) : f(t, r)
                }
            }
            const q = {
                    eventsEmitter: O,
                    update: {
                        updateSize: function() {
                            const e = this;
                            let t, r;
                            const n = e.el;
                            t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : n.clientWidth, r = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : n.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt(b(n, "padding-left") || 0, 10) - parseInt(b(n, "padding-right") || 0, 10), r = r - parseInt(b(n, "padding-top") || 0, 10) - parseInt(b(n, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
                                width: t,
                                height: r,
                                size: e.isHorizontal() ? t : r
                            }))
                        },
                        updateSlides: function() {
                            const e = this;

                            function t(t) {
                                return e.isHorizontal() ? t : {
                                    width: "height",
                                    "margin-top": "margin-left",
                                    "margin-bottom ": "margin-right",
                                    "margin-left": "margin-top",
                                    "margin-right": "margin-bottom",
                                    "padding-left": "padding-top",
                                    "padding-right": "padding-bottom",
                                    marginRight: "marginBottom"
                                }[t]
                            }

                            function r(e, r) {
                                return parseFloat(e.getPropertyValue(t(r)) || 0)
                            }
                            const n = e.params,
                                {
                                    wrapperEl: i,
                                    slidesEl: s,
                                    size: a,
                                    rtlTranslate: o,
                                    wrongRTL: l
                                } = e,
                                d = e.virtual && n.virtual.enabled,
                                c = d ? e.virtual.slides.length : e.slides.length,
                                u = v(s, `.${e.params.slideClass}, swiper-slide`),
                                p = d ? e.virtual.slides.length : u.length;
                            let f = [];
                            const h = [],
                                g = [];
                            let y = n.slidesOffsetBefore;
                            "function" === typeof y && (y = n.slidesOffsetBefore.call(e));
                            let S = n.slidesOffsetAfter;
                            "function" === typeof S && (S = n.slidesOffsetAfter.call(e));
                            const E = e.snapGrid.length,
                                T = e.slidesGrid.length;
                            let x = n.spaceBetween,
                                P = -y,
                                C = 0,
                                O = 0;
                            if ("undefined" === typeof a) return;
                            "string" === typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * a), e.virtualSize = -x, u.forEach((e => {
                                o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                            })), n.centeredSlides && n.cssMode && (m(i, "--swiper-centered-offset-before", ""), m(i, "--swiper-centered-offset-after", ""));
                            const _ = n.grid && n.grid.rows > 1 && e.grid;
                            let M;
                            _ && e.grid.initSlides(p);
                            const k = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter((e => "undefined" !== typeof n.breakpoints[e].slidesPerView)).length > 0;
                            for (let m = 0; m < p; m += 1) {
                                let i;
                                if (M = 0, u[m] && (i = u[m]), _ && e.grid.updateSlide(m, i, p, t), !u[m] || "none" !== b(i, "display")) {
                                    if ("auto" === n.slidesPerView) {
                                        k && (u[m].style[t("width")] = "");
                                        const s = getComputedStyle(i),
                                            a = i.style.transform,
                                            o = i.style.webkitTransform;
                                        if (a && (i.style.transform = "none"), o && (i.style.webkitTransform = "none"), n.roundLengths) M = e.isHorizontal() ? w(i, "width", !0) : w(i, "height", !0);
                                        else {
                                            const e = r(s, "width"),
                                                t = r(s, "padding-left"),
                                                n = r(s, "padding-right"),
                                                a = r(s, "margin-left"),
                                                o = r(s, "margin-right"),
                                                l = s.getPropertyValue("box-sizing");
                                            if (l && "border-box" === l) M = e + a + o;
                                            else {
                                                const {
                                                    clientWidth: r,
                                                    offsetWidth: s
                                                } = i;
                                                M = e + t + n + a + o + (s - r)
                                            }
                                        }
                                        a && (i.style.transform = a), o && (i.style.webkitTransform = o), n.roundLengths && (M = Math.floor(M))
                                    } else M = (a - (n.slidesPerView - 1) * x) / n.slidesPerView, n.roundLengths && (M = Math.floor(M)), u[m] && (u[m].style[t("width")] = `${M}px`);
                                    u[m] && (u[m].swiperSlideSize = M), g.push(M), n.centeredSlides ? (P = P + M / 2 + C / 2 + x, 0 === C && 0 !== m && (P = P - a / 2 - x), 0 === m && (P = P - a / 2 - x), Math.abs(P) < .001 && (P = 0), n.roundLengths && (P = Math.floor(P)), O % n.slidesPerGroup === 0 && f.push(P), h.push(P)) : (n.roundLengths && (P = Math.floor(P)), (O - Math.min(e.params.slidesPerGroupSkip, O)) % e.params.slidesPerGroup === 0 && f.push(P), h.push(P), P = P + M + x), e.virtualSize += M + x, C = M, O += 1
                                }
                            }
                            if (e.virtualSize = Math.max(e.virtualSize, a) + S, o && l && ("slide" === n.effect || "coverflow" === n.effect) && (i.style.width = `${e.virtualSize+n.spaceBetween}px`), n.setWrapperSize && (i.style[t("width")] = `${e.virtualSize+n.spaceBetween}px`), _ && e.grid.updateWrapperSize(M, f, t), !n.centeredSlides) {
                                const t = [];
                                for (let r = 0; r < f.length; r += 1) {
                                    let i = f[r];
                                    n.roundLengths && (i = Math.floor(i)), f[r] <= e.virtualSize - a && t.push(i)
                                }
                                f = t, Math.floor(e.virtualSize - a) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - a)
                            }
                            if (d && n.loop) {
                                const t = g[0] + x;
                                if (n.slidesPerGroup > 1) {
                                    const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup),
                                        i = t * n.slidesPerGroup;
                                    for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + i)
                                }
                                for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === n.slidesPerGroup && f.push(f[f.length - 1] + t), h.push(h[h.length - 1] + t), e.virtualSize += t
                            }
                            if (0 === f.length && (f = [0]), 0 !== n.spaceBetween) {
                                const r = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
                                u.filter(((e, t) => !(n.cssMode && !n.loop) || t !== u.length - 1)).forEach((e => {
                                    e.style[r] = `${x}px`
                                }))
                            }
                            if (n.centeredSlides && n.centeredSlidesBounds) {
                                let e = 0;
                                g.forEach((t => {
                                    e += t + (n.spaceBetween ? n.spaceBetween : 0)
                                })), e -= n.spaceBetween;
                                const t = e - a;
                                f = f.map((e => e < 0 ? -y : e > t ? t + S : e))
                            }
                            if (n.centerInsufficientSlides) {
                                let e = 0;
                                if (g.forEach((t => {
                                        e += t + (n.spaceBetween ? n.spaceBetween : 0)
                                    })), e -= n.spaceBetween, e < a) {
                                    const t = (a - e) / 2;
                                    f.forEach(((e, r) => {
                                        f[r] = e - t
                                    })), h.forEach(((e, r) => {
                                        h[r] = e + t
                                    }))
                                }
                            }
                            if (Object.assign(e, {
                                    slides: u,
                                    snapGrid: f,
                                    slidesGrid: h,
                                    slidesSizesGrid: g
                                }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                                m(i, "--swiper-centered-offset-before", -f[0] + "px"), m(i, "--swiper-centered-offset-after", e.size / 2 - g[g.length - 1] / 2 + "px");
                                const t = -e.snapGrid[0],
                                    r = -e.slidesGrid[0];
                                e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
                            }
                            if (p !== c && e.emit("slidesLengthChange"), f.length !== E && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), h.length !== T && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !d && !n.cssMode && ("slide" === n.effect || "fade" === n.effect)) {
                                const t = `${n.containerModifierClass}backface-hidden`,
                                    r = e.el.classList.contains(t);
                                p <= n.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                            }
                        },
                        updateAutoHeight: function(e) {
                            const t = this,
                                r = [],
                                n = t.virtual && t.params.virtual.enabled;
                            let i, s = 0;
                            "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                            const a = e => n ? t.getSlideIndexByData(e) : t.slides[e];
                            if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                                if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                                    r.push(e)
                                }));
                                else
                                    for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                        const e = t.activeIndex + i;
                                        if (e > t.slides.length && !n) break;
                                        r.push(a(e))
                                    } else r.push(a(t.activeIndex));
                            for (i = 0; i < r.length; i += 1)
                                if ("undefined" !== typeof r[i]) {
                                    const e = r[i].offsetHeight;
                                    s = e > s ? e : s
                                }(s || 0 === s) && (t.wrapperEl.style.height = `${s}px`)
                        },
                        updateSlidesOffset: function() {
                            const e = this,
                                t = e.slides,
                                r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                            for (let n = 0; n < t.length; n += 1) t[n].swiperSlideOffset = (e.isHorizontal() ? t[n].offsetLeft : t[n].offsetTop) - r
                        },
                        updateSlidesProgress: function(e = this && this.translate || 0) {
                            const t = this,
                                r = t.params,
                                {
                                    slides: n,
                                    rtlTranslate: i,
                                    snapGrid: s
                                } = t;
                            if (0 === n.length) return;
                            "undefined" === typeof n[0].swiperSlideOffset && t.updateSlidesOffset();
                            let a = -e;
                            i && (a = e), n.forEach((e => {
                                e.classList.remove(r.slideVisibleClass)
                            })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                            for (let o = 0; o < n.length; o += 1) {
                                const e = n[o];
                                let l = e.swiperSlideOffset;
                                r.cssMode && r.centeredSlides && (l -= n[0].swiperSlideOffset);
                                const d = (a + (r.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + r.spaceBetween),
                                    c = (a - s[0] + (r.centeredSlides ? t.minTranslate() : 0) - l) / (e.swiperSlideSize + r.spaceBetween),
                                    u = -(a - l),
                                    p = u + t.slidesSizesGrid[o];
                                (u >= 0 && u < t.size - 1 || p > 1 && p <= t.size || u <= 0 && p >= t.size) && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(o), n[o].classList.add(r.slideVisibleClass)), e.progress = i ? -d : d, e.originalProgress = i ? -c : c
                            }
                        },
                        updateProgress: function(e) {
                            const t = this;
                            if ("undefined" === typeof e) {
                                const r = t.rtlTranslate ? -1 : 1;
                                e = t && t.translate && t.translate * r || 0
                            }
                            const r = t.params,
                                n = t.maxTranslate() - t.minTranslate();
                            let {
                                progress: i,
                                isBeginning: s,
                                isEnd: a,
                                progressLoop: o
                            } = t;
                            const l = s,
                                d = a;
                            if (0 === n) i = 0, s = !0, a = !0;
                            else {
                                i = (e - t.minTranslate()) / n;
                                const r = Math.abs(e - t.minTranslate()) < 1,
                                    o = Math.abs(e - t.maxTranslate()) < 1;
                                s = r || i <= 0, a = o || i >= 1, r && (i = 0), o && (i = 1)
                            }
                            if (r.loop) {
                                const r = t.getSlideIndexByData(0),
                                    n = t.getSlideIndexByData(t.slides.length - 1),
                                    i = t.slidesGrid[r],
                                    s = t.slidesGrid[n],
                                    a = t.slidesGrid[t.slidesGrid.length - 1],
                                    l = Math.abs(e);
                                o = l >= i ? (l - i) / a : (l + a - s) / a, o > 1 && (o -= 1)
                            }
                            Object.assign(t, {
                                progress: i,
                                progressLoop: o,
                                isBeginning: s,
                                isEnd: a
                            }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !s || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
                        },
                        updateSlidesClasses: function() {
                            const e = this,
                                {
                                    slides: t,
                                    params: r,
                                    slidesEl: n,
                                    activeIndex: i
                                } = e,
                                s = e.virtual && r.virtual.enabled,
                                a = e => v(n, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                            let o;
                            if (t.forEach((e => {
                                    e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
                                })), s)
                                if (r.loop) {
                                    let t = i - e.virtual.slidesBefore;
                                    t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), o = a(`[data-swiper-slide-index="${t}"]`)
                                } else o = a(`[data-swiper-slide-index="${i}"]`);
                            else o = t[i];
                            if (o) {
                                o.classList.add(r.slideActiveClass);
                                let e = function(e, t) {
                                    const r = [];
                                    for (; e.nextElementSibling;) {
                                        const n = e.nextElementSibling;
                                        t ? n.matches(t) && r.push(n) : r.push(n), e = n
                                    }
                                    return r
                                }(o, `.${r.slideClass}, swiper-slide`)[0];
                                r.loop && !e && (e = t[0]), e && e.classList.add(r.slideNextClass);
                                let n = function(e, t) {
                                    const r = [];
                                    for (; e.previousElementSibling;) {
                                        const n = e.previousElementSibling;
                                        t ? n.matches(t) && r.push(n) : r.push(n), e = n
                                    }
                                    return r
                                }(o, `.${r.slideClass}, swiper-slide`)[0];
                                r.loop && 0 === !n && (n = t[t.length - 1]), n && n.classList.add(r.slidePrevClass)
                            }
                            e.emitSlidesClasses()
                        },
                        updateActiveIndex: function(e) {
                            const t = this,
                                r = t.rtlTranslate ? t.translate : -t.translate,
                                {
                                    snapGrid: n,
                                    params: i,
                                    activeIndex: s,
                                    realIndex: a,
                                    snapIndex: o
                                } = t;
                            let l, d = e;
                            const c = e => {
                                let r = e - t.virtual.slidesBefore;
                                return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
                            };
                            if ("undefined" === typeof d && (d = function(e) {
                                    const {
                                        slidesGrid: t,
                                        params: r
                                    } = e, n = e.rtlTranslate ? e.translate : -e.translate;
                                    let i;
                                    for (let s = 0; s < t.length; s += 1) "undefined" !== typeof t[s + 1] ? n >= t[s] && n < t[s + 1] - (t[s + 1] - t[s]) / 2 ? i = s : n >= t[s] && n < t[s + 1] && (i = s + 1) : n >= t[s] && (i = s);
                                    return r.normalizeSlideIndex && (i < 0 || "undefined" === typeof i) && (i = 0), i
                                }(t)), n.indexOf(r) >= 0) l = n.indexOf(r);
                            else {
                                const e = Math.min(i.slidesPerGroupSkip, d);
                                l = e + Math.floor((d - e) / i.slidesPerGroup)
                            }
                            if (l >= n.length && (l = n.length - 1), d === s) return l !== o && (t.snapIndex = l, t.emit("snapIndexChange")), void(t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = c(d)));
                            let u;
                            u = t.virtual && i.virtual.enabled && i.loop ? c(d) : t.slides[d] ? parseInt(t.slides[d].getAttribute("data-swiper-slide-index") || d, 10) : d, Object.assign(t, {
                                snapIndex: l,
                                realIndex: u,
                                previousIndex: s,
                                activeIndex: d
                            }), t.initialized && k(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== u && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                        },
                        updateClickedSlide: function(e) {
                            const t = this,
                                r = t.params,
                                n = e.closest(`.${r.slideClass}, swiper-slide`);
                            let i, s = !1;
                            if (n)
                                for (let a = 0; a < t.slides.length; a += 1)
                                    if (t.slides[a] === n) {
                                        s = !0, i = a;
                                        break
                                    }
                            if (!n || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                            t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = i, r.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                        }
                    },
                    translate: {
                        getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
                            const {
                                params: t,
                                rtlTranslate: r,
                                translate: n,
                                wrapperEl: i
                            } = this;
                            if (t.virtualTranslate) return r ? -n : n;
                            if (t.cssMode) return n;
                            let s = u(i, e);
                            return r && (s = -s), s || 0
                        },
                        setTranslate: function(e, t) {
                            const r = this,
                                {
                                    rtlTranslate: n,
                                    params: i,
                                    wrapperEl: s,
                                    progress: a
                                } = r;
                            let o, l = 0,
                                d = 0;
                            r.isHorizontal() ? l = n ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), i.cssMode ? s[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -d : i.virtualTranslate || (s.style.transform = `translate3d(${l}px, ${d}px, 0px)`), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : d;
                            const c = r.maxTranslate() - r.minTranslate();
                            o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== a && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
                        },
                        minTranslate: function() {
                            return -this.snapGrid[0]
                        },
                        maxTranslate: function() {
                            return -this.snapGrid[this.snapGrid.length - 1]
                        },
                        translateTo: function(e = 0, t = this.params.speed, r = !0, n = !0, i) {
                            const s = this,
                                {
                                    params: a,
                                    wrapperEl: o
                                } = s;
                            if (s.animating && a.preventInteractionOnTransition) return !1;
                            const l = s.minTranslate(),
                                d = s.maxTranslate();
                            let c;
                            if (c = n && e > l ? l : n && e < d ? d : e, s.updateProgress(c), a.cssMode) {
                                const e = s.isHorizontal();
                                if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
                                else {
                                    if (!s.support.smoothScroll) return h({
                                        swiper: s,
                                        targetPosition: -c,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    o.scrollTo({
                                        [e ? "left" : "top"]: -c,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return 0 === t ? (s.setTransition(0), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(c), r && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
                            }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
                        }
                    },
                    transition: {
                        setTransition: function(e, t) {
                            const r = this;
                            r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`), r.emit("setTransition", e, t)
                        },
                        transitionStart: function(e = !0, t) {
                            const r = this,
                                {
                                    params: n
                                } = r;
                            n.cssMode || (n.autoHeight && r.updateAutoHeight(), L({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e = !0, t) {
                            const r = this,
                                {
                                    params: n
                                } = r;
                            r.animating = !1, n.cssMode || (r.setTransition(0), L({
                                swiper: r,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: {
                        slideTo: function(e = 0, t = this.params.speed, r = !0, n, i) {
                            "string" === typeof e && (e = parseInt(e, 10));
                            const s = this;
                            let a = e;
                            a < 0 && (a = 0);
                            const {
                                params: o,
                                snapGrid: l,
                                slidesGrid: d,
                                previousIndex: c,
                                activeIndex: u,
                                rtlTranslate: p,
                                wrapperEl: f,
                                enabled: m
                            } = s;
                            if (s.animating && o.preventInteractionOnTransition || !m && !n && !i) return !1;
                            const v = Math.min(s.params.slidesPerGroupSkip, a);
                            let g = v + Math.floor((a - v) / s.params.slidesPerGroup);
                            g >= l.length && (g = l.length - 1);
                            const b = -l[g];
                            if (o.normalizeSlideIndex)
                                for (let h = 0; h < d.length; h += 1) {
                                    const e = -Math.floor(100 * b),
                                        t = Math.floor(100 * d[h]),
                                        r = Math.floor(100 * d[h + 1]);
                                    "undefined" !== typeof d[h + 1] ? e >= t && e < r - (r - t) / 2 ? a = h : e >= t && e < r && (a = h + 1) : e >= t && (a = h)
                                }
                            if (s.initialized && a !== u) {
                                if (!s.allowSlideNext && b < s.translate && b < s.minTranslate()) return !1;
                                if (!s.allowSlidePrev && b > s.translate && b > s.maxTranslate() && (u || 0) !== a) return !1
                            }
                            let y;
                            if (a !== (c || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(b), y = a > u ? "next" : a < u ? "prev" : "reset", p && -b === s.translate || !p && b === s.translate) return s.updateActiveIndex(a), o.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== o.effect && s.setTranslate(b), "reset" !== y && (s.transitionStart(r, y), s.transitionEnd(r, y)), !1;
                            if (o.cssMode) {
                                const e = s.isHorizontal(),
                                    r = p ? b : -b;
                                if (0 === t) {
                                    const t = s.virtual && s.params.virtual.enabled;
                                    t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                                        f[e ? "scrollLeft" : "scrollTop"] = r
                                    }))) : f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                                        s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                                    }))
                                } else {
                                    if (!s.support.smoothScroll) return h({
                                        swiper: s,
                                        targetPosition: r,
                                        side: e ? "left" : "top"
                                    }), !0;
                                    f.scrollTo({
                                        [e ? "left" : "top"]: r,
                                        behavior: "smooth"
                                    })
                                }
                                return !0
                            }
                            return s.setTransition(t), s.setTranslate(b), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(r, y), 0 === t ? s.transitionEnd(r, y) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, y))
                            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
                        },
                        slideToLoop: function(e = 0, t = this.params.speed, r = !0, n) {
                            if ("string" === typeof e) {
                                e = parseInt(e, 10)
                            }
                            const i = this;
                            let s = e;
                            return i.params.loop && (i.virtual && i.params.virtual.enabled ? s += i.virtual.slidesBefore : s = i.getSlideIndexByData(s)), i.slideTo(s, t, r, n)
                        },
                        slideNext: function(e = this.params.speed, t = !0, r) {
                            const n = this,
                                {
                                    enabled: i,
                                    params: s,
                                    animating: a
                                } = n;
                            if (!i) return n;
                            let o = s.slidesPerGroup;
                            "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                            const l = n.activeIndex < s.slidesPerGroupSkip ? 1 : o,
                                d = n.virtual && s.virtual.enabled;
                            if (s.loop) {
                                if (a && !d && s.loopPreventsSliding) return !1;
                                n.loopFix({
                                    direction: "next"
                                }), n._clientLeft = n.wrapperEl.clientLeft
                            }
                            return s.rewind && n.isEnd ? n.slideTo(0, e, t, r) : n.slideTo(n.activeIndex + l, e, t, r)
                        },
                        slidePrev: function(e = this.params.speed, t = !0, r) {
                            const n = this,
                                {
                                    params: i,
                                    snapGrid: s,
                                    slidesGrid: a,
                                    rtlTranslate: o,
                                    enabled: l,
                                    animating: d
                                } = n;
                            if (!l) return n;
                            const c = n.virtual && i.virtual.enabled;
                            if (i.loop) {
                                if (d && !c && i.loopPreventsSliding) return !1;
                                n.loopFix({
                                    direction: "prev"
                                }), n._clientLeft = n.wrapperEl.clientLeft
                            }

                            function u(e) {
                                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                            }
                            const p = u(o ? n.translate : -n.translate),
                                f = s.map((e => u(e)));
                            let m = s[f.indexOf(p) - 1];
                            if ("undefined" === typeof m && i.cssMode) {
                                let e;
                                s.forEach(((t, r) => {
                                    p >= t && (e = r)
                                })), "undefined" !== typeof e && (m = s[e > 0 ? e - 1 : e])
                            }
                            let h = 0;
                            if ("undefined" !== typeof m && (h = a.indexOf(m), h < 0 && (h = n.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (h = h - n.slidesPerViewDynamic("previous", !0) + 1, h = Math.max(h, 0))), i.rewind && n.isBeginning) {
                                const i = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                                return n.slideTo(i, e, t, r)
                            }
                            return n.slideTo(h, e, t, r)
                        },
                        slideReset: function(e = this.params.speed, t = !0, r) {
                            return this.slideTo(this.activeIndex, e, t, r)
                        },
                        slideToClosest: function(e = this.params.speed, t = !0, r, n = .5) {
                            const i = this;
                            let s = i.activeIndex;
                            const a = Math.min(i.params.slidesPerGroupSkip, s),
                                o = a + Math.floor((s - a) / i.params.slidesPerGroup),
                                l = i.rtlTranslate ? i.translate : -i.translate;
                            if (l >= i.snapGrid[o]) {
                                const e = i.snapGrid[o];
                                l - e > (i.snapGrid[o + 1] - e) * n && (s += i.params.slidesPerGroup)
                            } else {
                                const e = i.snapGrid[o - 1];
                                l - e <= (i.snapGrid[o] - e) * n && (s -= i.params.slidesPerGroup)
                            }
                            return s = Math.max(s, 0), s = Math.min(s, i.slidesGrid.length - 1), i.slideTo(s, e, t, r)
                        },
                        slideToClickedSlide: function() {
                            const e = this,
                                {
                                    params: t,
                                    slidesEl: r
                                } = e,
                                n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                            let i, s = e.clickedIndex;
                            const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
                            if (t.loop) {
                                if (e.animating) return;
                                i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - n / 2 || s > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), s = e.getSlideIndex(v(r, `${a}[data-swiper-slide-index="${i}"]`)[0]), d((() => {
                                    e.slideTo(s)
                                }))) : e.slideTo(s) : s > e.slides.length - n ? (e.loopFix(), s = e.getSlideIndex(v(r, `${a}[data-swiper-slide-index="${i}"]`)[0]), d((() => {
                                    e.slideTo(s)
                                }))) : e.slideTo(s)
                            } else e.slideTo(s)
                        }
                    },
                    loop: {
                        loopCreate: function(e) {
                            const t = this,
                                {
                                    params: r,
                                    slidesEl: n
                                } = t;
                            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
                            v(n, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            })), t.loopFix({
                                slideRealIndex: e,
                                direction: r.centeredSlides ? void 0 : "next"
                            })
                        },
                        loopFix: function({
                            slideRealIndex: e,
                            slideTo: t = !0,
                            direction: r,
                            setTranslate: n,
                            activeSlideIndex: i,
                            byController: s,
                            byMousewheel: a
                        } = {}) {
                            const o = this;
                            if (!o.params.loop) return;
                            o.emit("beforeLoopFix");
                            const {
                                slides: l,
                                allowSlidePrev: d,
                                allowSlideNext: c,
                                slidesEl: u,
                                params: p
                            } = o;
                            if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && p.virtual.enabled) return t && (p.centeredSlides || 0 !== o.snapIndex ? p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = c, void o.emit("loopFix");
                            const f = "auto" === p.slidesPerView ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10));
                            let m = p.loopedSlides || f;
                            m % p.slidesPerGroup !== 0 && (m += p.slidesPerGroup - m % p.slidesPerGroup), o.loopedSlides = m;
                            const h = [],
                                v = [];
                            let g = o.activeIndex;
                            "undefined" === typeof i ? i = o.getSlideIndex(o.slides.filter((e => e.classList.contains(p.slideActiveClass)))[0]) : g = i;
                            const b = "next" === r || !r,
                                y = "prev" === r || !r;
                            let w = 0,
                                S = 0;
                            if (i < m) {
                                w = Math.max(m - i, p.slidesPerGroup);
                                for (let e = 0; e < m - i; e += 1) {
                                    const t = e - Math.floor(e / l.length) * l.length;
                                    h.push(l.length - t - 1)
                                }
                            } else if (i > o.slides.length - 2 * m) {
                                S = Math.max(i - (o.slides.length - 2 * m), p.slidesPerGroup);
                                for (let e = 0; e < S; e += 1) {
                                    const t = e - Math.floor(e / l.length) * l.length;
                                    v.push(t)
                                }
                            }
                            if (y && h.forEach((e => {
                                    u.prepend(o.slides[e])
                                })), b && v.forEach((e => {
                                    u.append(o.slides[e])
                                })), o.recalcSlides(), p.watchSlidesProgress && o.updateSlidesOffset(), t)
                                if (h.length > 0 && y)
                                    if ("undefined" === typeof e) {
                                        const e = o.slidesGrid[g],
                                            t = o.slidesGrid[g + w] - e;
                                        a ? o.setTranslate(o.translate - t) : (o.slideTo(g + w, 0, !1, !0), n && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t))
                                    } else n && o.slideToLoop(e, 0, !1, !0);
                            else if (v.length > 0 && b)
                                if ("undefined" === typeof e) {
                                    const e = o.slidesGrid[g],
                                        t = o.slidesGrid[g - S] - e;
                                    a ? o.setTranslate(o.translate - t) : (o.slideTo(g - S, 0, !1, !0), n && (o.touches[o.isHorizontal() ? "startX" : "startY"] += t))
                                } else o.slideToLoop(e, 0, !1, !0);
                            if (o.allowSlidePrev = d, o.allowSlideNext = c, o.controller && o.controller.control && !s) {
                                const t = {
                                    slideRealIndex: e,
                                    slideTo: !1,
                                    direction: r,
                                    setTranslate: n,
                                    activeSlideIndex: i,
                                    byController: !0
                                };
                                Array.isArray(o.controller.control) ? o.controller.control.forEach((e => {
                                    !e.destroyed && e.params.loop && e.loopFix(t)
                                })) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(t)
                            }
                            o.emit("loopFix")
                        },
                        loopDestroy: function() {
                            const e = this,
                                {
                                    params: t,
                                    slidesEl: r
                                } = e;
                            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
                            e.recalcSlides();
                            const n = [];
                            e.slides.forEach((e => {
                                const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                                n[t] = e
                            })), e.slides.forEach((e => {
                                e.removeAttribute("data-swiper-slide-index")
                            })), n.forEach((e => {
                                r.append(e)
                            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                        }
                    },
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                                t.__preventObserver__ = !1
                            }))
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                                e.__preventObserver__ = !1
                            })))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                t = a(),
                                {
                                    params: r
                                } = e;
                            e.onTouchStart = A.bind(e), e.onTouchMove = z.bind(e), e.onTouchEnd = I.bind(e), r.cssMode && (e.onScroll = N.bind(e)), e.onClick = G.bind(e), e.onLoad = B.bind(e), R || (t.addEventListener("touchstart", F), R = !0), V(e, "on")
                        },
                        detachEvents: function() {
                            V(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    realIndex: t,
                                    initialized: r,
                                    params: n,
                                    el: i
                                } = e,
                                s = n.breakpoints;
                            if (!s || s && 0 === Object.keys(s).length) return;
                            const a = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
                            if (!a || e.currentBreakpoint === a) return;
                            const o = (a in s ? s[a] : void 0) || e.originalParams,
                                l = $(e, n),
                                d = $(e, o),
                                c = n.enabled;
                            l && !d ? (i.classList.remove(`${n.containerModifierClass}grid`, `${n.containerModifierClass}grid-column`), e.emitContainerClasses()) : !l && d && (i.classList.add(`${n.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === n.grid.fill) && i.classList.add(`${n.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                                const r = n[t] && n[t].enabled,
                                    i = o[t] && o[t].enabled;
                                r && !i && e[t].disable(), !r && i && e[t].enable()
                            }));
                            const u = o.direction && o.direction !== n.direction,
                                p = n.loop && (o.slidesPerView !== n.slidesPerView || u);
                            u && r && e.changeDirection(), f(e.params, o);
                            const m = e.params.enabled;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), c && !m ? e.disable() : !c && m && e.enable(), e.currentBreakpoint = a, e.emit("_beforeBreakpoint", o), p && r && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()), e.emit("breakpoint", o)
                        },
                        getBreakpoint: function(e, t = "window", r) {
                            if (!e || "container" === t && !r) return;
                            let n = !1;
                            const i = l(),
                                s = "window" === t ? i.innerHeight : r.clientHeight,
                                a = Object.keys(e).map((e => {
                                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: s * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            a.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                            for (let o = 0; o < a.length; o += 1) {
                                const {
                                    point: e,
                                    value: s
                                } = a[o];
                                "window" === t ? i.matchMedia(`(min-width: ${s}px)`).matches && (n = e) : s <= r.clientWidth && (n = e)
                            }
                            return n || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: r
                                } = e,
                                {
                                    slidesOffsetBefore: n
                                } = r;
                            if (n) {
                                const t = e.slides.length - 1,
                                    r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
                                e.isLocked = e.size > r
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: r,
                                    rtl: n,
                                    el: i,
                                    device: s
                                } = e,
                                a = function(e, t) {
                                    const r = [];
                                    return e.forEach((e => {
                                        "object" === typeof e ? Object.keys(e).forEach((n => {
                                            e[n] && r.push(t + n)
                                        })) : "string" === typeof e && r.push(t + e)
                                    })), r
                                }(["initialized", r.direction, {
                                    "free-mode": e.params.freeMode && r.freeMode.enabled
                                }, {
                                    autoheight: r.autoHeight
                                }, {
                                    rtl: n
                                }, {
                                    grid: r.grid && r.grid.rows > 1
                                }, {
                                    "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                                }, {
                                    android: s.android
                                }, {
                                    ios: s.ios
                                }, {
                                    "css-mode": r.cssMode
                                }, {
                                    centered: r.cssMode && r.centeredSlides
                                }, {
                                    "watch-progress": r.watchSlidesProgress
                                }], r.containerModifierClass);
                            t.push(...a), i.classList.add(...t), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                el: e,
                                classNames: t
                            } = this;
                            e.classList.remove(...t), this.emitContainerClasses()
                        }
                    }
                },
                X = {};
            class Y {
                constructor(...e) {
                    let t, r;
                    1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? r = e[0] : [t, r] = e, r || (r = {}), r = f({}, r), t && !r.el && (r.el = t);
                    const n = a();
                    if (r.el && "string" === typeof r.el && n.querySelectorAll(r.el).length > 1) {
                        const e = [];
                        return n.querySelectorAll(r.el).forEach((t => {
                            const n = f({}, r, {
                                el: t
                            });
                            e.push(new Y(n))
                        })), e
                    }
                    const i = this;
                    i.__swiper__ = !0, i.support = x(), i.device = P({
                        userAgent: r.userAgent
                    }), i.browser = C(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], r.modules && Array.isArray(r.modules) && i.modules.push(...r.modules);
                    const s = {};
                    i.modules.forEach((e => {
                        e({
                            params: r,
                            swiper: i,
                            extendParams: W(r, s),
                            on: i.on.bind(i),
                            once: i.once.bind(i),
                            off: i.off.bind(i),
                            emit: i.emit.bind(i)
                        })
                    }));
                    const o = f({}, H, s);
                    return i.params = f({}, o, X, r), i.originalParams = f({}, i.params), i.passedParams = f({}, r), i.params && i.params.on && Object.keys(i.params.on).forEach((e => {
                        i.on(e, i.params.on[e])
                    })), i.params && i.params.onAny && i.onAny(i.params.onAny), Object.assign(i, {
                        enabled: i.params.enabled,
                        el: t,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === i.params.direction,
                        isVertical: () => "vertical" === i.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: i.params.allowSlideNext,
                        allowSlidePrev: i.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: i.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            evCache: []
                        },
                        allowClick: !0,
                        allowTouchMove: i.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), i.emit("_swiper"), i.params.init && i.init(), i
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: r
                    } = this, n = y(v(t, `.${r.slideClass}, swiper-slide`)[0]);
                    return y(e) - n
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
                }
                recalcSlides() {
                    const {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = v(e, `.${t.slideClass}, swiper-slide`)
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const r = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const n = r.minTranslate(),
                        i = (r.maxTranslate() - n) * e + n;
                    r.translateTo(i, "undefined" === typeof t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((r => {
                        const n = e.getSlideClasses(r);
                        t.push({
                            slideEl: r,
                            classNames: n
                        }), e.emit("_slideClass", r, n)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e = "current", t = !1) {
                    const {
                        params: r,
                        slides: n,
                        slidesGrid: i,
                        slidesSizesGrid: s,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if (r.centeredSlides) {
                        let e, t = n[o].swiperSlideSize;
                        for (let r = o + 1; r < n.length; r += 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0));
                        for (let r = o - 1; r >= 0; r -= 1) n[r] && !e && (t += n[r].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = o + 1; d < n.length; d += 1) {
                            (t ? i[d] + s[d] - i[o] < a : i[d] - i[o] < a) && (l += 1)
                        } else
                            for (let d = o - 1; d >= 0; d -= 1) {
                                i[o] - i[d] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: r
                    } = e;

                    function n() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let i;
                    r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                        t.complete && _(e, t)
                    })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || n()), r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t = !0) {
                    const r = this,
                        n = r.params.direction;
                    return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${n}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), r.emit("changeDirection"), t && r.update()), r
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let r = e || t.params.el;
                    if ("string" === typeof r && (r = document.querySelector(r)), !r) return !1;
                    r.swiper = t, r.shadowEl && (t.isElement = !0);
                    const n = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
                    let i = (() => {
                        if (r && r.shadowRoot && r.shadowRoot.querySelector) {
                            return r.shadowRoot.querySelector(n())
                        }
                        return v(r, n())[0]
                    })();
                    return !i && t.params.createElements && (i = g("div", t.params.wrapperClass), r.append(i), v(r, `.${t.params.slideClass}`).forEach((e => {
                        i.append(e)
                    }))), Object.assign(t, {
                        el: r,
                        wrapperEl: i,
                        slidesEl: t.isElement ? r : i,
                        mounted: !0,
                        rtl: "rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === b(r, "direction")),
                        wrongRTL: "-webkit-box" === b(i, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e => {
                        e.complete ? _(t, e) : e.addEventListener("load", (e => {
                            _(t, e.target)
                        }))
                    })), k(t), t.initialized = !0, k(t), t.emit("init"), t.emit("afterInit")), t
                }
                destroy(e = !0, t = !0) {
                    const r = this,
                        {
                            params: n,
                            el: i,
                            wrapperEl: s,
                            slides: a
                        } = r;
                    return "undefined" === typeof r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), n.loop && r.loopDestroy(), t && (r.removeClasses(), i.removeAttribute("style"), s.removeAttribute("style"), a && a.length && a.forEach((e => {
                        e.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
                        r.off(e)
                    })), !1 !== e && (r.el.swiper = null, function(e) {
                        const t = e;
                        Object.keys(t).forEach((e => {
                            try {
                                t[e] = null
                            } catch (r) {}
                            try {
                                delete t[e]
                            } catch (r) {}
                        }))
                    }(r)), r.destroyed = !0), null
                }
                static extendDefaults(e) {
                    f(X, e)
                }
                static get extendedDefaults() {
                    return X
                }
                static get defaults() {
                    return H
                }
                static installModule(e) {
                    Y.prototype.__modules__ || (Y.prototype.__modules__ = []);
                    const t = Y.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => Y.installModule(e))), Y) : (Y.installModule(e), Y)
                }
            }
            Object.keys(q).forEach((e => {
                Object.keys(q[e]).forEach((t => {
                    Y.prototype[t] = q[e][t]
                }))
            })), Y.use([function({
                swiper: e,
                on: t,
                emit: r
            }) {
                const n = l();
                let i = null,
                    s = null;
                const a = () => {
                        e && !e.destroyed && e.initialized && (r("beforeResize"), r("resize"))
                    },
                    o = () => {
                        e && !e.destroyed && e.initialized && r("orientationchange")
                    };
                t("init", (() => {
                    e.params.resizeObserver && "undefined" !== typeof n.ResizeObserver ? e && !e.destroyed && e.initialized && (i = new ResizeObserver((t => {
                        s = n.requestAnimationFrame((() => {
                            const {
                                width: r,
                                height: n
                            } = e;
                            let i = r,
                                s = n;
                            t.forEach((({
                                contentBoxSize: t,
                                contentRect: r,
                                target: n
                            }) => {
                                n && n !== e.el || (i = r ? r.width : (t[0] || t).inlineSize, s = r ? r.height : (t[0] || t).blockSize)
                            })), i === r && s === n || a()
                        }))
                    })), i.observe(e.el)) : (n.addEventListener("resize", a), n.addEventListener("orientationchange", o))
                })), t("destroy", (() => {
                    s && n.cancelAnimationFrame(s), i && i.unobserve && e.el && (i.unobserve(e.el), i = null), n.removeEventListener("resize", a), n.removeEventListener("orientationchange", o)
                }))
            }, function({
                swiper: e,
                extendParams: t,
                on: r,
                emit: n
            }) {
                const i = [],
                    s = l(),
                    a = (t, r = {}) => {
                        const a = new(s.MutationObserver || s.WebkitMutationObserver)((t => {
                            if (e.__preventObserver__) return;
                            if (1 === t.length) return void n("observerUpdate", t[0]);
                            const r = function() {
                                n("observerUpdate", t[0])
                            };
                            s.requestAnimationFrame ? s.requestAnimationFrame(r) : s.setTimeout(r, 0)
                        }));
                        a.observe(t, {
                            attributes: "undefined" === typeof r.attributes || r.attributes,
                            childList: "undefined" === typeof r.childList || r.childList,
                            characterData: "undefined" === typeof r.characterData || r.characterData
                        }), i.push(a)
                    };
                t({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), r("init", (() => {
                    if (e.params.observer) {
                        if (e.params.observeParents) {
                            const t = function(e, t) {
                                const r = [];
                                let n = e.parentElement;
                                for (; n;) t ? n.matches(t) && r.push(n) : r.push(n), n = n.parentElement;
                                return r
                            }(e.el);
                            for (let e = 0; e < t.length; e += 1) a(t[e])
                        }
                        a(e.el, {
                            childList: e.params.observeSlideChildren
                        }), a(e.wrapperEl, {
                            attributes: !1
                        })
                    }
                })), r("destroy", (() => {
                    i.forEach((e => {
                        e.disconnect()
                    })), i.splice(0, i.length)
                }))
            }]);
            var U = Y;

            function K({
                swiper: e,
                extendParams: t,
                on: r,
                emit: n
            }) {
                t({
                    navigation: {
                        nextEl: null,
                        prevEl: null,
                        hideOnClick: !1,
                        disabledClass: "swiper-button-disabled",
                        hiddenClass: "swiper-button-hidden",
                        lockClass: "swiper-button-lock",
                        navigationDisabledClass: "swiper-navigation-disabled"
                    }
                }), e.navigation = {
                    nextEl: null,
                    prevEl: null
                };
                const i = e => (Array.isArray(e) || (e = [e].filter((e => !!e))), e);

                function s(t) {
                    let r;
                    return t && "string" === typeof t && e.isElement && (r = e.el.shadowRoot.querySelector(t), r) ? r : (t && ("string" === typeof t && (r = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" === typeof t && r.length > 1 && 1 === e.el.querySelectorAll(t).length && (r = e.el.querySelector(t))), t && !r ? t : r)
                }

                function a(t, r) {
                    const n = e.params.navigation;
                    (t = i(t)).forEach((t => {
                        t && (t.classList[r ? "add" : "remove"](...n.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = r), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](n.lockClass))
                    }))
                }

                function o() {
                    const {
                        nextEl: t,
                        prevEl: r
                    } = e.navigation;
                    if (e.params.loop) return a(r, !1), void a(t, !1);
                    a(r, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
                }

                function l(t) {
                    t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), n("navigationPrev"))
                }

                function d(t) {
                    t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), n("navigationNext"))
                }

                function c() {
                    const t = e.params.navigation;
                    if (e.params.navigation = function(e, t, r, n) {
                            return e.params.createElements && Object.keys(n).forEach((i => {
                                if (!r[i] && !0 === r.auto) {
                                    let s = v(e.el, `.${n[i]}`)[0];
                                    s || (s = g("div", n[i]), s.className = n[i], e.el.append(s)), r[i] = s, t[i] = s
                                }
                            })), r
                        }(e, e.originalParams.navigation, e.params.navigation, {
                            nextEl: "swiper-button-next",
                            prevEl: "swiper-button-prev"
                        }), !t.nextEl && !t.prevEl) return;
                    let r = s(t.nextEl),
                        n = s(t.prevEl);
                    Object.assign(e.navigation, {
                        nextEl: r,
                        prevEl: n
                    }), r = i(r), n = i(n);
                    const a = (r, n) => {
                        r && r.addEventListener("click", "next" === n ? d : l), !e.enabled && r && r.classList.add(...t.lockClass.split(" "))
                    };
                    r.forEach((e => a(e, "next"))), n.forEach((e => a(e, "prev")))
                }

                function u() {
                    let {
                        nextEl: t,
                        prevEl: r
                    } = e.navigation;
                    t = i(t), r = i(r);
                    const n = (t, r) => {
                        t.removeEventListener("click", "next" === r ? d : l), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
                    };
                    t.forEach((e => n(e, "next"))), r.forEach((e => n(e, "prev")))
                }
                r("init", (() => {
                    !1 === e.params.navigation.enabled ? p() : (c(), o())
                })), r("toEdge fromEdge lock unlock", (() => {
                    o()
                })), r("destroy", (() => {
                    u()
                })), r("enable disable", (() => {
                    let {
                        nextEl: t,
                        prevEl: r
                    } = e.navigation;
                    t = i(t), r = i(r), [...t, ...r].filter((e => !!e)).forEach((t => t.classList[e.enabled ? "remove" : "add"](e.params.navigation.lockClass)))
                })), r("click", ((t, r) => {
                    let {
                        nextEl: s,
                        prevEl: a
                    } = e.navigation;
                    s = i(s), a = i(a);
                    const o = r.target;
                    if (e.params.navigation.hideOnClick && !a.includes(o) && !s.includes(o)) {
                        if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === o || e.pagination.el.contains(o))) return;
                        let t;
                        s.length ? t = s[0].classList.contains(e.params.navigation.hiddenClass) : a.length && (t = a[0].classList.contains(e.params.navigation.hiddenClass)), n(!0 === t ? "navigationShow" : "navigationHide"), [...s, ...a].filter((e => !!e)).forEach((t => t.classList.toggle(e.params.navigation.hiddenClass)))
                    }
                }));
                const p = () => {
                    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), u()
                };
                Object.assign(e.navigation, {
                    enable: () => {
                        e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), c(), o()
                    },
                    disable: p,
                    update: o,
                    init: c,
                    destroy: u
                })
            }

            function Z({
                swiper: e,
                extendParams: t,
                on: r,
                emit: n,
                params: i
            }) {
                let s, o;
                e.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, t({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !0,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let l, d, c, u, p, f, m, h = i && i.autoplay ? i.autoplay.delay : 3e3,
                    v = i && i.autoplay ? i.autoplay.delay : 3e3,
                    g = (new Date).getTime;

                function b(t) {
                    e && !e.destroyed && e.wrapperEl && t.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", b), x())
                }
                const y = () => {
                        if (e.destroyed || !e.autoplay.running) return;
                        e.autoplay.paused ? d = !0 : d && (v = l, d = !1);
                        const t = e.autoplay.paused ? l : g + v - (new Date).getTime();
                        e.autoplay.timeLeft = t, n("autoplayTimeLeft", t, t / h), o = requestAnimationFrame((() => {
                            y()
                        }))
                    },
                    w = t => {
                        if (e.destroyed || !e.autoplay.running) return;
                        cancelAnimationFrame(o), y();
                        let r = "undefined" === typeof t ? e.params.autoplay.delay : t;
                        h = e.params.autoplay.delay, v = e.params.autoplay.delay;
                        const i = (() => {
                            let t;
                            if (t = e.virtual && e.params.virtual.enabled ? e.slides.filter((e => e.classList.contains("swiper-slide-active")))[0] : e.slides[e.activeIndex], !t) return;
                            return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
                        })();
                        !Number.isNaN(i) && i > 0 && "undefined" === typeof t && (r = i, h = i, v = i), l = r;
                        const a = e.params.speed,
                            d = () => {
                                e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(a, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, a, !0, !0), n("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(a, !0, !0), n("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, a, !0, !0), n("autoplay")), e.params.cssMode && (g = (new Date).getTime(), requestAnimationFrame((() => {
                                    w()
                                }))))
                            };
                        return r > 0 ? (clearTimeout(s), s = setTimeout((() => {
                            d()
                        }), r)) : requestAnimationFrame((() => {
                            d()
                        })), r
                    },
                    S = () => {
                        e.autoplay.running = !0, w(), n("autoplayStart")
                    },
                    E = () => {
                        e.autoplay.running = !1, clearTimeout(s), cancelAnimationFrame(o), n("autoplayStop")
                    },
                    T = (t, r) => {
                        if (e.destroyed || !e.autoplay.running) return;
                        clearTimeout(s), t || (m = !0);
                        const i = () => {
                            n("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", b) : x()
                        };
                        if (e.autoplay.paused = !0, r) return f && (l = e.params.autoplay.delay), f = !1, void i();
                        const a = l || e.params.autoplay.delay;
                        l = a - ((new Date).getTime() - g), e.isEnd && l < 0 && !e.params.loop || (l < 0 && (l = 0), i())
                    },
                    x = () => {
                        e.isEnd && l < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (g = (new Date).getTime(), m ? (m = !1, w(l)) : w(), e.autoplay.paused = !1, n("autoplayResume"))
                    },
                    P = () => {
                        if (e.destroyed || !e.autoplay.running) return;
                        const t = a();
                        "hidden" === t.visibilityState && (m = !0, T(!0)), "visible" === t.visibilityState && x()
                    },
                    C = e => {
                        "mouse" === e.pointerType && (m = !0, T(!0))
                    },
                    O = t => {
                        "mouse" === t.pointerType && e.autoplay.paused && x()
                    };
                r("init", (() => {
                    e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", C), e.el.addEventListener("pointerleave", O)), a().addEventListener("visibilitychange", P), g = (new Date).getTime(), S())
                })), r("destroy", (() => {
                    e.el.removeEventListener("pointerenter", C), e.el.removeEventListener("pointerleave", O), a().removeEventListener("visibilitychange", P), e.autoplay.running && E()
                })), r("beforeTransitionStart", ((t, r, n) => {
                    !e.destroyed && e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? T(!0, !0) : E())
                })), r("sliderFirstMove", (() => {
                    !e.destroyed && e.autoplay.running && (e.params.autoplay.disableOnInteraction ? E() : (c = !0, u = !1, m = !1, p = setTimeout((() => {
                        m = !0, u = !0, T(!0)
                    }), 200)))
                })), r("touchEnd", (() => {
                    if (!e.destroyed && e.autoplay.running && c) {
                        if (clearTimeout(p), clearTimeout(s), e.params.autoplay.disableOnInteraction) return u = !1, void(c = !1);
                        u && e.params.cssMode && x(), u = !1, c = !1
                    }
                })), r("slideChange", (() => {
                    !e.destroyed && e.autoplay.running && (f = !0)
                })), Object.assign(e.autoplay, {
                    start: S,
                    stop: E,
                    pause: T,
                    resume: x
                })
            }
        }
    }
]);
//# sourceMappingURL=51-344fa64e82f901b5.js.map