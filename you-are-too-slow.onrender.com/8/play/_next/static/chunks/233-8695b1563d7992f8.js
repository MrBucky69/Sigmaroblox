"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [233], {
        1883: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return m
                },
                e: function() {
                    return i.ey
                }
            });
            var i = t(15187),
                o = t(50912),
                r = t(25617),
                a = t(11720),
                d = t(56892),
                l = t(94381),
                c = t(66971),
                s = t(78294),
                u = t(77691),
                p = t(11163),
                f = t(93224),
                h = t(88557),
                g = t(97997),
                v = function() {
                    return (v = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                m = function(n) {
                    var e, t, i, m, x, y, w, b = n.style,
                        A = void 0 === b ? {} : b,
                        Z = n.isAppPage,
                        k = (0, p.useRouter)(),
                        S = (0, a.useRef)(null),
                        E = (0, a.useRef)(null),
                        P = (0, r.I0)(),
                        T = (0, r.v9)((function(n) {
                            return n.play.consoleHeaderRef
                        })),
                        C = (0, r.v9)((function(n) {
                            return n.ads.inGameAd
                        })),
                        D = s.ZP.countryCode,
                        R = (0, r.v9)((function(n) {
                            return n.play.isSensitivityPopupOpen
                        })),
                        O = (0, r.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        I = (0, r.v9)((function(n) {
                            return n.play.isRecordingProcessing
                        })),
                        M = (0, r.v9)((function(n) {
                            return n.play.showBackbtn
                        })),
                        L = (0, r.v9)((function(n) {
                            return n.play.gameDisplayed
                        })),
                        B = (0, r.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        X = (0, r.v9)((function(n) {
                            return n.ads.adsEnded
                        })),
                        N = null === (i = null === (t = null === (e = s.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled,
                        K = (0, r.v9)((function(n) {
                            return n.play.mouseLockActive
                        })),
                        j = (0, r.v9)((function(n) {
                            return n.play.recordingUploadInProgress
                        })),
                        z = (0, u.$h)() ? 0 : 46,
                        Y = (0, a.useState)({
                            top: 0,
                            left: 0,
                            width: 0,
                            right: 0,
                            height: 0
                        }),
                        H = Y[0],
                        _ = Y[1],
                        F = ((null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.appInfo) || {}).appType,
                        U = function() {
                            setTimeout((function() {
                                var n = o.Z.getState().play.videoRef;
                                if (n && n.current) {
                                    var e = n.current;
                                    _({
                                        top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().bottom,
                                        width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width,
                                        left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                                        right: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().right,
                                        height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                                    })
                                }
                            }))
                        };
                    (0, a.useEffect)((function() {
                        return U(), window.addEventListener("resizeDone", U), P({
                                type: c.Z.SET_REF,
                                payload: {
                                    consoleFooterRef: S
                                }
                            }),
                            function() {
                                window.removeEventListener("resizeDone", U)
                            }
                    }), []), (0, a.useEffect)((function() {
                        var n = function(n) {
                            var e = n.target;
                            "js-game-video" === (null === e || void 0 === e ? void 0 : e.id) && R && P({
                                type: c.Z.SET_SENSITIVITY_POPUP,
                                payload: {
                                    isSensitivityPopupOpen: !1
                                }
                            })
                        };
                        return window.addEventListener("pointerdown", n),
                            function() {
                                window.removeEventListener("pointerdown", n)
                            }
                    }), [R]);
                    var W = !Z && (0, h.hu)(),
                        G = ((null === (m = null === s.ZP || void 0 === s.ZP ? void 0 : s.ZP.appInfo) || void 0 === m ? void 0 : m.playFeFeatures) || {}).enableTestDriveUi,
                        V = v(v({
                            top: W ? H.top - H.height - (N ? z : (null === (x = null === T || void 0 === T ? void 0 : T.current) || void 0 === x ? void 0 : x.clientHeight) || 0) : (0, s.DJ)() || C !== l.V ? H.top - (N ? z : (null === (y = null === T || void 0 === T ? void 0 : T.current) || void 0 === y ? void 0 : y.clientHeight) || 0) : H.top - H.height,
                            width: W ? "auto" : H.width,
                            height: W ? H.height : "auto",
                            left: W ? H.right : H.left,
                            flexDirection: W ? "column" : "row"
                        }, A), k.pathname.includes("/apps/") && "Html" !== F ? {
                            top: "calc(50% + ".concat(W ? 0 : H.height / 2, "px)"),
                            transform: "translateY(-50%)"
                        } : {});
                    return (0, g.BX)(g.HY, {
                        children: [W && (0, g.tZ)(f.$_, {
                            ref: E,
                            className: "footer",
                            id: "ng-left-control-bar",
                            style: v(v({}, V), {
                                left: H.left - ((null === (w = E.current) || void 0 === w ? void 0 : w.getBoundingClientRect().width) || 0)
                            }),
                            children: (0, g.tZ)(f.ZX, {
                                isH5Game: (0, s.DJ)(),
                                showActionSidebar: W,
                                style: W ? {
                                    height: "100%",
                                    justifyContent: "space-between",
                                    width: "100%"
                                } : {},
                                children: (0, g.tZ)(d.GlobalActions, {
                                    showBackBtn: M && B && L && X,
                                    countryCode: D,
                                    widget: !1,
                                    isPortrait: W,
                                    style: {
                                        height: "100%"
                                    }
                                })
                            })
                        }), (0, g.tZ)(f.$_, {
                            ref: S,
                            className: "footer",
                            id: "ng-control-bar",
                            style: V,
                            children: (0, g.BX)(f.ZX, {
                                isH5Game: (0, s.DJ)(),
                                showActionSidebar: W,
                                isRecording: O,
                                isRecordingProcessing: I,
                                isMouseLock: K,
                                recordUploadInProgess: j,
                                style: W ? {
                                    height: "100%",
                                    justifyContent: "space-between",
                                    width: "100%"
                                } : {},
                                children: [!W && (0, g.tZ)(d.GlobalActions, {
                                    showBackBtn: M && B && L && X,
                                    widget: !1,
                                    isPortrait: W,
                                    countryCode: D,
                                    testDriveUi: G
                                }), (0, g.tZ)(d.GameActions, {
                                    widget: !1,
                                    isPortrait: W
                                })]
                            })
                        })]
                    })
                }
        },
        39600: function(n, e, t) {
            t.d(e, {
                _: function() {
                    return x
                }
            });
            var i = t(94405),
                o = t(66971),
                r = t(77691),
                a = t(11720),
                d = t(25617),
                l = t(40434),
                c = t(50912),
                s = t(52353),
                u = t.n(s),
                p = t(45628),
                f = t(45220),
                h = t.n(f),
                g = t(78294),
                v = t(97997),
                m = function() {
                    return (m = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                x = function(n) {
                    var e = n.children,
                        t = n.style,
                        s = void 0 === t ? {} : t,
                        f = n.className,
                        x = void 0 === f ? "" : f,
                        y = n.setCoordinates,
                        w = n.onRender,
                        b = (0, a.useRef)(null),
                        A = (0, a.useContext)(i.Z),
                        Z = A.widgets;
                    (h()(Z) || u()(Z)) && (A.widgets = {
                        mobileMenu: {
                            left: 10,
                            top: 8
                        },
                        desktopFullScreen: {
                            left: 10,
                            top: 8
                        }
                    }), Z = A.widgets;
                    var k = (0, d.I0)(),
                        S = 0,
                        E = 0,
                        P = 0,
                        T = 0,
                        C = !1;

                    function D(n, e) {
                        (null === b || void 0 === b ? void 0 : b.current) && (b.current.style.transform = "translate3d(".concat(n, "px, ").concat(e, "px, 0)"), (0, r.tq)() && "slow-network-drag" === x && (b.current.style.left = "unset", b.current.style.top = "unset"))
                    }

                    function R(n) {
                        var e, t, i = c.Z.getState().play.orientation;
                        n.preventDefault();
                        var o = (null === (e = null === b || void 0 === b ? void 0 : b.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                            r = (null === (t = null === b || void 0 === b ? void 0 : b.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                        if ("touchmove" === n.type) {
                            var a = n;
                            if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.landscape) {
                                if (a.touches[0].clientX - o < 5 && a.touches[0].clientY - 10 < 5 || window.innerWidth - a.touches[0].clientX < 10 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientX - o < 5 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientY - 10 < 5 && window.innerWidth - a.touches[0].clientX < 10) return;
                                if (a.touches[0].clientX - o < 5) return S = a.touches[0].clientY, E = window.innerWidth - o - 5, void D(S, E);
                                if (a.touches[0].clientY - 10 < 5) return S = 5, E = window.innerWidth - a.touches[0].clientX, void D(S, E);
                                if (window.innerWidth - a.touches[0].clientX < 10) return void D(S = a.touches[0].clientY, E = 10);
                                if (window.innerHeight - a.touches[0].clientY < r + 10) return S = window.innerHeight - r - 10, E = window.innerWidth - a.touches[0].clientX, void D(S, E);
                                S = a.touches[0].clientY, E = window.innerWidth - a.touches[0].clientX
                            } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.landscape) {
                                if (a.touches[0].clientX - 10 < 5 && a.touches[0].clientY < 5 || window.innerWidth - a.touches[0].clientX < r + 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientX - 10 < 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientY < 5 && window.innerWidth - a.touches[0].clientX < r + 5) return;
                                if (a.touches[0].clientX - 10 < 5) return S = 5, E = a.targetTouches[0].clientY, void D(S, E);
                                if (a.touches[0].clientY < 5) return void D(S = a.targetTouches[0].clientX, E = 5);
                                if (window.innerWidth - a.touches[0].clientX < r + 5) return S = window.innerWidth - r - 5, E = a.targetTouches[0].clientY, void D(S, E);
                                if (window.innerHeight - a.touches[0].clientY < o + 5) return S = a.targetTouches[0].clientX, E = window.innerHeight - o - 5, void D(S, E);
                                S = a.targetTouches[0].clientX, E = a.targetTouches[0].clientY
                            } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.portrait) {
                                if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 || a.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientX < 5 && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientY < 5 && a.touches[0].clientX > window.innerWidth - (r + 5)) return;
                                if (a.touches[0].clientX < 5) return S = 5, E = a.touches[0].clientY, void D(S, E);
                                if (a.touches[0].clientY < 5) return void D(S = a.touches[0].clientX, E = 5);
                                if (a.touches[0].clientX > window.innerWidth - (r + 5)) return S = window.innerWidth - (r + 5), E = a.touches[0].clientY, void D(S, E);
                                if (a.touches[0].clientY > window.innerHeight - (o + 5)) return S = a.touches[0].clientX, E = window.innerHeight - (o + 5), void D(S, E);
                                S = a.touches[0].clientX, E = a.touches[0].clientY
                            } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.portrait) {
                                if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 + r || a.touches[0].clientX < 5 && a.touches[0].clientY + 5 > window.innerHeight || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY < 5 + r || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY + 5 > window.innerHeight) return;
                                if (a.touches[0].clientX < 5) return void D(S = window.innerHeight - a.targetTouches[0].clientY, E = 5);
                                if (a.touches[0].clientY < 5 + r) return S = window.innerHeight - (5 + r), E = a.targetTouches[0].clientX, void D(S, E);
                                if (a.touches[0].clientX > window.innerWidth - (o + 5)) return S = window.innerHeight - a.targetTouches[0].clientY, E = window.innerWidth - (o + 5), void D(S, E);
                                if (a.touches[0].clientY + 5 > window.innerHeight) return S = 5, E = a.targetTouches[0].clientX, void D(S, E);
                                S = window.innerHeight - a.targetTouches[0].clientY, E = a.targetTouches[0].clientX
                            }
                        } else {
                            if ((a = n).clientX - r < 5 || a.clientY < 20) return;
                            if (window.innerWidth - a.clientX < 20 || window.innerHeight - a.clientY < o - 20) return;
                            S = a.clientX - P, E = a.clientY - T, C = !0
                        }
                        D(S, E)
                    }
                    var O = function() {
                        k({
                            type: o.Z.DRAGGABLE,
                            payload: {
                                draggableState: C ? "drag" : "click"
                            }
                        })
                    };

                    function I(n) {
                        C = !1, O(), P = S, T = E, y && k({
                            type: l.Z.FS_WIDGET,
                            payload: {
                                fsWidget: {
                                    x: Math.round(P / window.innerWidth * 100),
                                    y: Math.round(T / window.innerHeight * 100)
                                }
                            }
                        }), "touchend" === n.type && (S = 0, E = 0), document.removeEventListener("mouseup", I, !0), document.removeEventListener("mousemove", R, !1)
                    }

                    function M(n) {
                        var e = c.Z.getState().play.orientation;
                        (0, g.DJ)() && ((e === p.cj.landscape ? 90 : 0) !== window.orientation && k({
                            type: o.Z.UPDATE_ORIENTATION,
                            payload: {
                                orientation: 90 === window.orientation ? p.cj.landscape : p.cj.portrait
                            }
                        }));
                        if ("mousedown" === n.type) {
                            var t = n,
                                i = t.target;
                            if ("ng-vol" === i.id || "volume-slider" === i.id || "sensitivity-slider" === i.id || "sensitivty-box" === i.id) return;
                            C = !1, O(), P = t.clientX - S, T = t.clientY - E
                        }
                        document.addEventListener("mousemove", R, !1), document.addEventListener("mouseup", I, !0)
                    }
                    return (0, a.useEffect)((function() {
                        w && b.current && w(b.current), localStorage.removeItem("jsFsWidgetCoordinateObj");
                        var n = null === b || void 0 === b ? void 0 : b.current,
                            e = Z.mobileMenu,
                            t = void 0 === e ? {
                                left: 10,
                                top: 10
                            } : e;
                        if ((0, r.tq)() && "slow-network-drag" !== x && (S = (null === t || void 0 === t ? void 0 : t.left) || 10, E = (null === t || void 0 === t ? void 0 : t.top) || 10, D(S, E)), y) {
                            u()(c.Z.getState().appPreferences.fsWidget) && k({
                                type: l.Z.FS_WIDGET,
                                payload: {
                                    fsWidget: {
                                        x: 70,
                                        y: 20
                                    }
                                }
                            });
                            var i = c.Z.getState().appPreferences.fsWidget || {
                                    x: 70,
                                    y: 20
                                },
                                o = i.x,
                                a = i.y,
                                d = Math.round(window.innerWidth / 100 * o),
                                s = Math.round(window.innerHeight / 100 * a);
                            D(d, s), S = d, E = s
                        }
                        return null === n || void 0 === n || n.addEventListener("touchstart", M, !1), null === n || void 0 === n || n.addEventListener("touchend", I, !1), null === n || void 0 === n || n.addEventListener("touchmove", R, !1), null === n || void 0 === n || n.addEventListener("mousedown", M),
                            function() {
                                null === n || void 0 === n || n.removeEventListener("touchstart", M, !1), null === n || void 0 === n || n.removeEventListener("touchend", I, !1), null === n || void 0 === n || n.removeEventListener("touchmove", R, !1), null === n || void 0 === n || n.removeEventListener("mousedown", M, !1)
                            }
                    }), []), (0, v.tZ)("div", {
                        ref: b,
                        className: "drag-react ".concat(x),
                        style: m({
                            position: "fixed",
                            zIndex: 13
                        }, s),
                        children: e
                    })
                }
        },
        82087: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            var i, o, r = t(22033),
                a = (t(11720), t(50445)),
                d = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                l = a.ZP.div(i || (i = d(["\n    position: absolute; \n    width: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    z-index:10;\n    display : flex;\n    justify-content: center;\n"], ["\n    position: absolute; \n    width: 100%;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%,-50%);\n    z-index:10;\n    display : flex;\n    justify-content: center;\n"]))),
                c = a.ZP.div(o || (o = d(["\n    background: rgba(0,0,0,0.7);\n    z-index:9;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n"], ["\n    background: rgba(0,0,0,0.7);\n    z-index:9;\n    width: 100%;\n    height: 100%;\n    position: absolute;\n"]))),
                s = t(97997),
                u = function() {
                    return (0, s.BX)(s.HY, {
                        children: [(0, s.tZ)(c, {}), (0, s.tZ)(l, {
                            children: (0, s.tZ)(r.Z, {})
                        })]
                    })
                }
        },
        57180: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return S
                }
            });
            var i, o, r, a, d, l = t(59930),
                c = t(94564),
                s = t(66971),
                u = t(40942),
                p = t(89598),
                f = t(78294),
                h = t(11720),
                g = t(26793),
                v = t(25617),
                m = t(50445),
                x = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                y = m.ZP.div(i || (i = x(["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"], ["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                w = m.ZP.div(o || (o = x(["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"], ["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                b = m.ZP.div(r || (r = x(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"]))),
                A = m.ZP.div(a || (a = x(["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"], ["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"]))),
                Z = m.ZP.button(d || (d = x(["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"], ["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                k = t(97997),
                S = function() {
                    var n = (0, g.$)().t,
                        e = (0, v.I0)(),
                        t = (0, v.v9)((function(n) {
                            return n.play.showPwaPrompt
                        }));
                    (0, h.useEffect)((function() {
                        t && (0, p.L9)("PwaNudgeDisplayed")
                    }), [t]);
                    var i = function() {
                            e({
                                type: s.Z.PWA_PROMPT_STATUS,
                                payload: {
                                    showPwaPrompt: !1
                                }
                            })
                        },
                        o = function() {
                            (0, p.L9)("PwaNudgeDismissed"), i()
                        };
                    return (0, k.tZ)(k.HY, {
                        children: t && (0, k.BX)(y, {
                            children: [(0, k.tZ)(c.T4, {
                                children: n("pwaTitle")
                            }), (0, k.tZ)(l.Z, {
                                size: 16,
                                style: {
                                    cursor: "pointer"
                                },
                                name: "cross-thin",
                                onClick: o
                            }), (0, k.BX)(w, {
                                children: [(0, k.tZ)(A, {
                                    children: (0, k.tZ)("img", {
                                        alt: f.ZP.appInfo.appName,
                                        src: f.ZP.appInfo.media.icon,
                                        width: 48,
                                        height: 48
                                    })
                                }), (0, k.BX)("div", {
                                    style: {
                                        marginLeft: "12px"
                                    },
                                    children: [(0, k.tZ)(c.T5, {
                                        children: f.ZP.appInfo.appName
                                    }), (0, k.tZ)(c.kk, {
                                        children: "now.gg"
                                    })]
                                })]
                            }), (0, k.BX)(b, {
                                children: [(0, k.tZ)(Z, {
                                    id: "cancelPWAPopupBtn",
                                    onClick: o,
                                    children: n("cancel")
                                }), (0, k.tZ)(Z, {
                                    className: "ok",
                                    onClick: function() {
                                        (0, p.L9)("PwaNudgeAccepted"), i(), (0, u.QB)()
                                    },
                                    children: n("yes")
                                })]
                            })]
                        })
                    })
                }
        },
        96183: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return Q
                }
            });
            var i, o, r, a, d, l, c, s = t(78294),
                u = t(16678),
                p = t(39600),
                f = t(80252),
                h = t(3053),
                g = t(79717),
                v = t(45628),
                m = t(50912),
                x = t(11720),
                y = t(77691),
                w = t(25617),
                b = t(39475),
                A = t(79354),
                Z = t(59930),
                k = t(58309),
                S = t(95860),
                E = t(50445),
                P = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                T = E.ZP.ul(i || (i = P(["\n  width: 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: ", ";\n  border-radius: 8px 8px 100px 100px;\n  gap: 16px;\n  border: 1px solid #FFFFFF33;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n              linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));\n"], ["\n  width: 56px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0;\n  padding: ", ";\n  border-radius: 8px 8px 100px 100px;\n  gap: 16px;\n  border: 1px solid #FFFFFF33;\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),\n              linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2));\n"])), (function(n) {
                    return n.expanded ? "12px 0 8px" : "16px 0 8px"
                })),
                C = E.ZP.li(o || (o = P(["\n  cursor: pointer;\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  list-style: none;\n  position: relative;\n\n  button {\n    width: 24px;\n    height: 24px;\n\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  div {\n    margin: 0px;\n  }\n"], ["\n  cursor: pointer;\n  color: ", ";\n  width: 24px;\n  height: 24px;\n  list-style: none;\n  position: relative;\n\n  button {\n    width: 24px;\n    height: 24px;\n\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  div {\n    margin: 0px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                D = (0, E.ZP)(C)(r || (r = P(["\n  width: 40px;\n  height: 30px;\n  position: relative;\n\n  i {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"], ["\n  width: 40px;\n  height: 30px;\n  position: relative;\n\n  i {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n  }\n"]))),
                R = E.ZP.span(d || (d = P(["\n  ", "\n  height: 100%;\n  transition: all 0.3s ease-out;\n\n  ", "\n"], ["\n  ", "\n  height: 100%;\n  transition: all 0.3s ease-out;\n\n  ", "\n"])), S.be, (function(n) {
                    return n.clicked && (0, E.iv)(a || (a = P(["\n    transform: rotate(180deg);\n  "], ["\n    transform: rotate(180deg);\n  "])))
                })),
                O = T,
                I = t(20948),
                M = t(25186),
                L = t(50855),
                B = t(77360),
                X = t(53574),
                N = t(12812),
                K = t(94564),
                j = t(13978),
                z = t(49555),
                Y = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                H = E.ZP.span(l || (l = Y(["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n"], ["\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n"]))),
                _ = E.ZP.div(c || (c = Y(["\n  width: 204px;\n  position: absolute;\n  left: 48px;\n  top: 0;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n  padding: 18px;\n  color: ", ';\n\n  h4 {\n    margin-bottom: 8px;\n  }\n\n  p {\n    text-align: left;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    transform: translateX(-100%);\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    \n    border-right: 10px solid #4D555D;   \n  }\n'], ["\n  width: 204px;\n  position: absolute;\n  left: 48px;\n  top: 0;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n  padding: 18px;\n  color: ", ';\n\n  h4 {\n    margin-bottom: 8px;\n  }\n\n  p {\n    text-align: left;\n  }\n\n  &::after {\n    content: "";\n    position: absolute;\n    top: 8px;\n    left: 0;\n    transform: translateX(-100%);\n    width: 0; \n    height: 0; \n    border-top: 10px solid transparent;\n    border-bottom: 10px solid transparent; \n    \n    border-right: 10px solid #4D555D;   \n  }\n'])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white
                })),
                F = t(97997),
                U = function() {
                    var n = (0, x.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = localStorage.getItem("fe-explore-games-tooltip-shown");
                    (0, x.useEffect)((function() {
                        return i || document.body.classList.add("body-overlay"),
                            function() {
                                document.body.classList.remove("body-overlay")
                            }
                    }), []);
                    return (0, F.BX)(F.HY, {
                        children: [(0, F.tZ)(H, {
                            onClick: function() {
                                t(!0), localStorage.setItem("fe-explore-games-tooltip-shown", "true"), document.body.classList.remove("body-overlay")
                            },
                            children: (0, F.tZ)(A.WD, {})
                        }), !i && (0, F.BX)(_, {
                            children: [(0, F.tZ)(K.js, {
                                children: (0, j.t)("exploreMoreGames")
                            }), (0, F.tZ)(K.lU, {
                                children: (0, j.t)("exploreTooltipText")
                            })]
                        }), (0, F.tZ)(N.Z, {
                            toggle: e,
                            exitingCallBack: function() {
                                setTimeout((function() {
                                    (0, z.Ul)(), (0, z.m7)()
                                }), 1e3)
                            },
                            children: (0, F.tZ)(X.Z, {
                                close: function() {
                                    return t(!1)
                                }
                            })
                        })]
                    })
                },
                W = t(61740),
                G = function(n) {
                    var e = n.clicked,
                        t = n.handleInfoIconClick,
                        i = n.onButtonClicked,
                        o = (0, x.useState)(),
                        r = o[0],
                        a = o[1],
                        d = (0, w.v9)((function(n) {
                            return n.play.orientation
                        })),
                        l = (0, x.useCallback)((function() {
                            if (r) {
                                var n = r,
                                    e = n.getBoundingClientRect();
                                if (window.innerHeight > window.innerWidth && 0 === window.orientation && d === v.cj.landscape) {
                                    if (e && e.left < 0) {
                                        var t = window.innerWidth - n.offsetHeight;
                                        n.style.transform = "translate3d(".concat(e.top, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                                    }
                                } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && d === v.cj.landscape) {
                                    if (window.innerHeight - e.top < n.offsetHeight) {
                                        t = window.innerHeight - n.offsetHeight;
                                        n.style.transform = "translate3d(".concat(e.left, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                                    }
                                } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && d === v.cj.portrait) {
                                    if (window.innerHeight - e.top < n.offsetHeight) {
                                        var i = e.left;
                                        t = window.innerHeight - n.offsetHeight;
                                        n.style.transform = "translate3d(".concat(i, "px, ").concat(t > 0 ? t : 0, "px, 0)")
                                    }
                                } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && d === v.cj.portrait && window.innerWidth - e.left < n.offsetHeight) {
                                    i = window.innerWidth - n.offsetHeight, t = window.innerHeight - e.top - n.offsetWidth;
                                    n.style.transform = "translate3d(".concat(t, "px, ").concat(i > 0 ? i : 0, "px, 0)")
                                }
                            }
                        }), [r, d]);
                    (0, x.useEffect)((function() {
                        e && l()
                    }), [e, l]);
                    var c = (0, w.v9)((function(n) {
                            return n.user.loginNotificationCount
                        })),
                        S = (0, w.v9)((function(n) {
                            return n.user.lastLoginNotifDate
                        })),
                        E = (0, w.v9)((function(n) {
                            return n.play.iapUserLogin
                        })),
                        P = (0, w.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        T = (0, x.useState)(null),
                        X = (T[0], T[1]),
                        N = (0, x.useState)(!1),
                        K = N[0],
                        j = N[1],
                        z = (0, x.useState)(!1),
                        Y = z[0],
                        H = z[1],
                        _ = sessionStorage.getItem("isEmbeddedFrame");
                    return (0, x.useEffect)((function() {
                        j(c < 3 && (0, f.J)(S, (new Date).toDateString()))
                    }), []), (0, x.useEffect)((function() {
                        K && m.Z.dispatch({
                            type: h.Z.LOGIN_NOTIF_UPDATE,
                            payload: {
                                loginNotificationCount: c + 1,
                                lastLoginNotifDate: (new Date).toDateString()
                            }
                        })
                    }), [K]), (0, x.useEffect)((function() {
                        var n = P ? (0, k.et)() : null;
                        n && X(n)
                    }), []), (0, F.tZ)(p._, {
                        onRender: function(n) {
                            return a(n)
                        },
                        style: (0, y.Tt)() ? {
                            touchAction: "manipulation"
                        } : {},
                        children: (0, F.BX)(O, {
                            expanded: e,
                            children: [e ? (0, F.BX)(D, {
                                onClick: t,
                                children: [(0, F.tZ)(u.Z, {
                                    orientation: "vertical",
                                    hasTagline: !1,
                                    themeType: "light"
                                }), (0, F.tZ)(Z.Z, {
                                    name: "info",
                                    size: 6
                                })]
                            }) : (0, F.tZ)(F.HY, {}), (0, y.Qx)() ? (0, F.tZ)(C, {
                                id: "ng-fs",
                                children: (0, F.tZ)(W.Z, {})
                            }, "ng-fs") : (0, F.tZ)(F.HY, {}), e || (0, s.DJ)() ? (0, F.tZ)(F.HY, {}) : (0, F.tZ)(C, {
                                children: (0, F.tZ)(b.Z, {})
                            }), (0, s.DJ)() || _ || !e ? (0, F.tZ)(F.HY, {}) : (0, F.BX)(C, {
                                id: "ng-profile",
                                onClick: function() {
                                    H(!0)
                                },
                                children: [(0, F.tZ)(I.Z, {}), (0, F.tZ)(B.F9, {
                                    style: {
                                        display: K && !Y ? "block" : "none",
                                        top: "0",
                                        right: "0"
                                    }
                                })]
                            }, "ng-profile"), (0, s.DJ)() || _ && "nowgg" !== _ || !(0, y.Tt)() ? (0, F.tZ)(F.HY, {}) : (0, F.tZ)(C, {
                                id: "ng-sound",
                                children: (0, F.tZ)(M.Z, {
                                    showSlider: !1
                                })
                            }, "ng-sound"), e && !_ ? (0, F.tZ)(C, {
                                id: "ng-support",
                                children: (0, F.tZ)(L.Z, {
                                    type: "support"
                                })
                            }, "ng-support") : (0, F.tZ)(F.HY, {}), e && !(0, y.$h)() ? (0, F.tZ)(C, {
                                style: {
                                    padding: 0
                                },
                                children: (0, F.tZ)(U, {})
                            }, "ng-game-category") : (0, F.tZ)(F.HY, {}), !E && e && s.ZP.appInfo.iapLoginPromptEnabled ? (0, F.tZ)(C, {
                                children: (0, F.tZ)(g.Z, {})
                            }, "ng-iap") : (0, F.tZ)(F.HY, {}), e && "Html" !== s.ZP.appInfo.appType ? (0, F.tZ)(C, {
                                children: (0, F.tZ)(b.Z, {})
                            }) : (0, F.tZ)(F.HY, {}), (0, F.tZ)(C, {
                                children: (0, F.tZ)(R, {
                                    clicked: e,
                                    onClick: i,
                                    children: (0, F.tZ)(A.pL, {
                                        color: "white50"
                                    })
                                })
                            }, "ng-down-arrow")]
                        })
                    })
                },
                V = t(1883),
                q = t(71174),
                Q = function(n) {
                    var e, t, i = n.clicked,
                        o = n.handleInfoIconClick,
                        r = n.onButtonClicked,
                        a = null === (t = null === (e = s.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.tryAndDownload) || void 0 === t ? void 0 : t.isEnabled;
                    return (0, y.tq)() ? (0, F.BX)(F.HY, {
                        children: [(0, F.tZ)(G, {
                            clicked: i,
                            handleInfoIconClick: o,
                            onButtonClicked: r
                        }), a && !(0, y.$h)() && (0, F.tZ)(q.Z, {})]
                    }) : a && !(0, y.$h)() ? (0, F.tZ)(q.Z, {}) : (0, y.SR)() && !(0, y.$h)() ? (0, F.tZ)(V.e, {}) : null
                }
        },
        63233: function(n, e, t) {
            t.r(e), t.d(e, {
                PlayPage: function() {
                    return rv
                },
                default: function() {
                    return av
                }
            });
            var i, o, r, a, d, l, c, s, u, p, f, h, g, v, m, x, y, w, b, A, Z, k, S, E, P, T, C, D, R, O, I, M, L, B, X, N, K, j, z, Y, H, _, F, U, W, G, V, q, Q, J, $, nn, en, tn, on, rn, an, dn, ln, cn, sn, un, pn, fn, hn, gn, vn, mn, xn, yn, wn, bn, An, Zn, kn, Sn, En, Pn, Tn, Cn, Dn, Rn, On, In, Mn, Ln, Bn, Xn, Nn, Kn, jn, zn, Yn, Hn, _n, Fn, Un, Wn, Gn, Vn, qn, Qn, Jn, $n, ne, ee, te, ie, oe, re, ae, de, le, ce, se, ue, pe, fe, he, ge, ve, me, xe, ye, we, be, Ae, Ze, ke, Se, Ee, Pe, Te, Ce, De, Re, Oe, Ie, Me, Le, Be, Xe, Ne, Ke, je, ze, Ye = t(11720),
                He = t(25617),
                _e = t(64857),
                Fe = t(82132),
                Ue = t(78294),
                We = t(10020),
                Ge = t(77691),
                Ve = t(89598),
                qe = t(45628),
                Qe = t(50445),
                Je = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                $e = Qe.ZP.div(i || (i = Je(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n  height: ", ";\n  .preroll-wrapper-videoplayer-dimensions {\n    height: ", ";\n    padding: ", ";\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: ", ";\n  height: ", ";\n  .preroll-wrapper-videoplayer-dimensions {\n    height: ", ";\n    padding: ", ";\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"])), (function(n) {
                    return n.isAppPage ? "100% !important" : ""
                }), (function(n) {
                    return n.isAppPage ? "100% !important" : ""
                }), (function(n) {
                    return n.isAppPage ? "100% !important" : ""
                }), (function(n) {
                    return n.isAppPage ? "0 !important" : ""
                })),
                nt = $e,
                et = t(97997),
                tt = function() {
                    return (tt = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                it = 0,
                ot = function(n) {
                    var e, t, i, o, r, a, d = n.adsError,
                        l = n.setAdsMuted,
                        c = n.setAdStart,
                        s = n.adsEnded,
                        u = n.isAppPage,
                        p = (0, He.I0)(),
                        f = (0, Ye.useContext)(We.x),
                        h = (0, Ye.useRef)(null),
                        g = (0, Ye.useRef)(null),
                        v = (0, Ye.useRef)(),
                        m = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        x = sessionStorage.getItem("utm_campaign"),
                        y = 0,
                        w = 0,
                        b = window.devicePixelRatio,
                        A = (0, Ye.useRef)(!1),
                        Z = 0,
                        k = 0,
                        S = {},
                        E = {},
                        P = "fredboat" === x || "carl" === x || (0, Ue.DJ)() && !(0, Ge.tq)();
                    P || (P = !(0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)() ? !(null === (a = null === (r = null === (o = Ue.ZP.appInfo.playFeFeatures) || void 0 === o ? void 0 : o.ads) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.enablePrerollAds) : !(null === (i = null === (t = null === (e = Ue.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.ads) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.enablePrerollAds));
                    var T = function(n) {
                            (0, Fe.zr)("adComplete", n), p({
                                type: _e.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            })
                        },
                        C = function(n) {
                            (0, Fe.zr)("adSkipped", n), p({
                                type: _e.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            })
                        },
                        D = function(n) {
                            var e, t;
                            y = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientHeight) || 0, w = (null === (t = null === m || void 0 === m ? void 0 : m.current) || void 0 === t ? void 0 : t.clientWidth) || 0, clearTimeout(g.current), g.current = setTimeout((function() {
                                var e;
                                c(!1), (0, Ve.L9)("AdRequestTimeout", {
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: it,
                                    adWidth: Z,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b
                                }), null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e || e.closePlayer(), (0, Fe.zr)("AdRequestTimeout_onAdLoaded", n), p({
                                    type: _e.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        adsEnded: !0
                                    }
                                })
                            }), 1e4)
                        },
                        R = (0, He.v9)((function(n) {
                            return n.play.orientation
                        }));

                    function O(n) {
                        var e, t;
                        c(!1), y = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientHeight) || 0, w = (null === (t = null === m || void 0 === m ? void 0 : m.current) || void 0 === t ? void 0 : t.clientWidth) || 0, clearTimeout(g.current), (0, Ve.L9)("AdNotFilled", {
                            adContext: "Preroll",
                            adType: "Video",
                            retryCount: it,
                            adWidth: Z,
                            adHeight: k,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: y,
                            androidHeight: w,
                            pixelRatio: b
                        }), n ? function() {
                            var n, e;
                            it += 1;
                            var t = (0, Fe.dl)(f);
                            g.current = setTimeout((function() {
                                var n;
                                c(!1), (0, Ve.L9)("AdRequestTimeout", {
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: it,
                                    adWidth: Z,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b
                                }), null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.closePlayer(), (0, Fe.zr)("AdRequestTimeout_BeforeQueue", !0), p({
                                    type: _e.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        adsEnded: !0
                                    }
                                })
                            }), 15e3), (0, Ve.L9)("AdRequestedNg", {
                                adContext: "Preroll",
                                adType: "Video",
                                retryCount: it,
                                adWidth: Z,
                                adHeight: k,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: y,
                                androidHeight: w,
                                pixelRatio: b,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                            }), window.tude.cmd.push((function() {
                                var n, e;
                                (0, Ve.L9)("AdRequested", {
                                    adContext: "Preroll",
                                    retryCount: it,
                                    adType: "Video",
                                    adWidth: Z,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                                }), window.tude.requestInstreamPlayer({
                                    divId: "preroll-wrapper",
                                    code: "stream",
                                    mode: "adOnly",
                                    targeting: tt(tt({}, t), {
                                        ads_loc: "video-auto-pre"
                                    })
                                }).then((function(n) {
                                    v.current = n, n.on("adNoFill", (function() {
                                        O(!1)
                                    })).on("adError", (function() {
                                        O(!1)
                                    })).on("adReady", (function() {
                                        var n;
                                        l(!0), null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.setVideoVolume(0), E = window.pbjs.getBidResponses() || {}, D(!0)
                                    })).on("adProgress", (function(n, e) {
                                        var t, i = e.milestone;
                                        if ("complete" === i) {
                                            if (A.current) return;
                                            c(!1), T(!0)
                                        } else if ("start" === i) {
                                            null === (t = null === v || void 0 === v ? void 0 : v.current) || void 0 === t || t.setVideoVolume(0), clearTimeout(g.current), A.current = !1, c(!0);
                                            var o = (E["pre-roll"] || {}).bids,
                                                r = (void 0 === o ? [] : o)[0] || {},
                                                a = r.bidder,
                                                d = r.cpm,
                                                l = r.currency,
                                                s = r.netRevenue,
                                                u = r.status,
                                                p = r.statusMessage,
                                                f = r.timeToRespond,
                                                h = r.ttl;
                                            S = {
                                                bidder: a,
                                                cpm: d,
                                                currency: l,
                                                netRevenue: s,
                                                status: u,
                                                statusMessage: p,
                                                timeToRespond: f,
                                                ttl: h
                                            }, (0, Ve.L9)("AdDisplayed", tt({
                                                adContext: "Preroll",
                                                adType: "Video",
                                                retryCount: it,
                                                adWidth: Z,
                                                adHeight: k,
                                                viewPortInnerWidth: window.innerWidth,
                                                viewPortInnerHeight: window.innerHeight,
                                                androidWidth: y,
                                                androidHeight: w,
                                                pixelRatio: b
                                            }, S))
                                        }
                                    })).on("adSkipped", (function() {
                                        c(!1), C(!0), A.current = !0
                                    }))
                                })).catch((function(n) {}))
                            }))
                        }() : ((0, Fe.zr)("AdError", !0), p({
                            type: _e.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        }))
                    }
                    var I = function() {
                        var n, e, t, i, o, r;
                        (0, Ge.tq)() ? (o = R === qe.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20, r = R === qe.cj.portrait ? window.innerHeight : window.innerWidth) : (o = window.innerWidth - 20, r = window.innerHeight);
                        var a, d, s = (a = r, Math.ceil(a * (4 / 3))),
                            u = r;
                        s > o && (d = s = o, u = Math.ceil(d / (4 / 3))), h.current && (h.current.style.width = "".concat(s, "px"), h.current.style.height = "".concat(u, "px")),
                            function(n, e) {
                                Z = n, k = e
                            }(s, u), y = (null === (n = null === m || void 0 === m ? void 0 : m.current) || void 0 === n ? void 0 : n.clientHeight) || 0, w = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientWidth) || 0, clearTimeout(g.current), g.current = setTimeout((function() {
                                var n;
                                c(!1), (0, Ve.L9)("AdRequestTimeout", {
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: it,
                                    adWidth: Z,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b
                                }), null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.closePlayer(), (0, Fe.zr)("AdRequestTimeout_BeforeQueue", !1), p({
                                    type: _e.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        adsEnded: !0
                                    }
                                })
                            }), 15e3), (0, Ve.L9)("AdRequestedNg", {
                                adContext: "Preroll",
                                adType: "Video",
                                retryCount: it,
                                adWidth: Z,
                                adHeight: k,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: y,
                                androidHeight: w,
                                pixelRatio: b,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads)
                            }), window.tude.cmd.push((function() {
                                var n, e, t, i, o = (0, Fe.dl)(f);
                                y = (null === (n = null === m || void 0 === m ? void 0 : m.current) || void 0 === n ? void 0 : n.clientHeight) || 0, w = (null === (e = null === m || void 0 === m ? void 0 : m.current) || void 0 === e ? void 0 : e.clientWidth) || 0, (0, Ve.L9)("AdRequested", {
                                    adContext: "Preroll",
                                    adType: "Video",
                                    retryCount: it,
                                    adWidth: Z,
                                    adHeight: k,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: y,
                                    androidHeight: w,
                                    pixelRatio: b,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === i ? void 0 : i.pubads)
                                }), window.tude.requestInstreamPlayer({
                                    divId: "preroll-wrapper",
                                    code: "pre-roll",
                                    mode: "adOnly",
                                    targeting: tt(tt({}, o), {
                                        ads_loc: "video-auto-pre"
                                    })
                                }).then((function(n) {
                                    v.current = n, n.on("adNoFill", (function() {
                                        O(!0)
                                    })).on("adError", (function() {
                                        O(!0)
                                    })).on("adReady", (function() {
                                        var n;
                                        l(!0), null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n || n.setVideoVolume(0), E = window.pbjs.getBidResponses() || {}, D(!1)
                                    })).on("adProgress", (function(n, e) {
                                        var t, i = e.milestone;
                                        if ("complete" === i) {
                                            if (A.current) return;
                                            c(!1), T(!1)
                                        } else if ("start" === i) {
                                            null === (t = null === v || void 0 === v ? void 0 : v.current) || void 0 === t || t.setVideoVolume(0), clearTimeout(g.current), A.current = !1, c(!0);
                                            var o = (E["pre-roll"] || {}).bids,
                                                r = (void 0 === o ? [] : o)[0] || {},
                                                a = r.bidder,
                                                d = r.cpm,
                                                l = r.currency,
                                                s = r.netRevenue,
                                                u = r.status,
                                                p = r.statusMessage,
                                                f = r.timeToRespond,
                                                h = r.ttl;
                                            S = {
                                                bidder: a,
                                                cpm: d,
                                                currency: l,
                                                netRevenue: s,
                                                status: u,
                                                statusMessage: p,
                                                timeToRespond: f,
                                                ttl: h
                                            }, (0, Ve.L9)("AdDisplayed", tt({
                                                adContext: "Preroll",
                                                adType: "Video",
                                                retryCount: it,
                                                adWidth: Z,
                                                adHeight: k,
                                                viewPortInnerWidth: window.innerWidth,
                                                viewPortInnerHeight: window.innerHeight,
                                                androidWidth: y,
                                                androidHeight: w,
                                                pixelRatio: b
                                            }, S))
                                        }
                                    })).on("adSkipped", (function() {
                                        c(!1), C(!1), A.current = !0
                                    }))
                                })).catch((function(n) {}))
                            }))
                    };
                    return (0, Ye.useEffect)((function() {
                        d || P ? ((0, Fe.zr)((P ? "disableAds" : d && "adsError") || "adsError_disableAds", !1), p({
                            type: _e.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        })) : ((0, Ve.L9)("PrerollBegin"), I())
                    }), []), (0, Ye.useEffect)((function() {
                        return function() {
                            return clearTimeout(g.current)
                        }
                    }), []), d || s || P ? null : (0, et.tZ)(nt, {
                        ref: h,
                        id: "preroll-wrapper",
                        isAppPage: u
                    })
                },
                rt = (0, Ye.memo)(ot),
                at = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                dt = (0, Qe.F4)(o || (o = at(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))),
                lt = Qe.ZP.img(r || (r = at(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
                    return n.theme.spacing.base2
                }), (function(n) {
                    return n.theme.border.radius
                })),
                ct = Qe.ZP.div(a || (a = at(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.spacing.base6
                })),
                st = Qe.ZP.div(d || (d = at(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
                    return n.theme.border.radius3
                }), (function(n) {
                    return n.theme.colors.white
                }), dt),
                ut = function(n) {
                    var e, t = n.animateSmall,
                        i = (0, Ye.useContext)(We.x);
                    return (0, et.BX)(ct, {
                        className: "".concat(t ? "animateSmall" : ""),
                        children: [(0, et.tZ)(lt, {
                            src: null === (e = null === i || void 0 === i ? void 0 : i.media) || void 0 === e ? void 0 : e.icon
                        }), (0, et.tZ)(st, {
                            className: "loadingBar",
                            children: (0, et.tZ)("span", {})
                        })]
                    })
                },
                pt = t(49555),
                ft = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ht = (0, Qe.F4)(l || (l = ft(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))),
                gt = (0, Qe.F4)(c || (c = ft(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),
                vt = (0, Qe.F4)(s || (s = ft(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),
                mt = (0, Qe.F4)(u || (u = ft(["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),
                xt = (0, Qe.F4)(p || (p = ft(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"]))),
                yt = Qe.ZP.div(h || (h = ft(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: ", ";\n  z-index: ", ";\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n  touch-action: none;\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: ", ";\n  z-index: ", ";\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n  touch-action: none;\n\n  ", "\n"])), (function(n) {
                    return n.showBackground ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
                }), (function(n) {
                    return n.isAppPage ? "100% !important" : "100vh"
                }), (function(n) {
                    return n.isAppPage ? 1 : 14
                }), vt, (function(n) {
                    var e = n.isAppPage,
                        t = n.isDesktop;
                    return e && (0, Qe.iv)(f || (f = ft(["\n    width: 100% !important;\n    height: ", ";\n  "], ["\n    width: 100% !important;\n    height: ", ";\n  "])), t ? "calc(100% - 52px) !important" : "100%")
                })),
                wt = Qe.ZP.div(m || (m = ft(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  touch-action: none;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    top: 0;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n  touch-action: none;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    top: 0;\n  }\n\n  ", "\n"])), (function(n) {
                    var e = n.banner;
                    return e ? "background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('".concat(e, "');") : ""
                }), (function(n) {
                    return n.toggle ? (0, Qe.iv)(g || (g = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), vt) : (0, Qe.iv)(v || (v = ft(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), gt)
                })),
                bt = Qe.ZP.div(w || (w = ft(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"])), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.border.radius2
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.toggle ? (0, Qe.iv)(x || (x = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), mt) : (0, Qe.iv)(y || (y = ft(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), xt)
                })),
                At = (Qe.ZP.p(b || (b = ft(["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"], ["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                }), ht, (function(n) {
                    return n.theme.spacing.base6
                })), Qe.ZP.div(A || (A = ft(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"])), (function(n) {
                    return n.theme.colors.black
                })), Qe.ZP.div(Z || (Z = ft(["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"], ["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
                })), Qe.ZP.div(k || (k = ft(["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"], ["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.link
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black10
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
                })), Qe.ZP.div(S || (S = ft(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"], ["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"]))), function(n) {
                    var e, t = n.isAppPage,
                        i = (0, Ye.useState)(!0),
                        o = (i[0], i[1]),
                        r = (0, Ye.useState)(!1),
                        a = (r[0], r[1]),
                        d = (0, Ye.useState)(4),
                        l = d[0],
                        c = d[1],
                        s = (0, Ye.useState)(!1),
                        u = s[0],
                        p = s[1],
                        f = (0, Ye.useRef)(null),
                        h = (0, He.v9)((function(n) {
                            return n.ads.imaError
                        })),
                        g = (0, He.v9)((function(n) {
                            return n.ads.adsEnded
                        })),
                        v = (0, He.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        m = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        x = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        return u && (0, Ge.tq)() && m === qe.cj.landscape && (e = setTimeout((function() {
                                l >= 1 ? c(l - 1) : clearTimeout(e), a(!0)
                            }), 1e3)),
                            function() {
                                clearTimeout(e)
                            }
                    }), [u, l]);
                    var y = function() {
                            var n = null === f || void 0 === f ? void 0 : f.current;
                            n && setTimeout((function() {
                                var e = window.innerWidth,
                                    t = window.innerHeight;
                                (0, Ue.DJ)() || (m !== qe.cj.portrait || 90 !== window.orientation && -90 !== window.orientation) && (m === qe.cj.portrait || m === qe.cj.landscape && (90 === window.orientation || -90 === window.orientation)) ? (n.style.width = "".concat(e, "px"), n.style.height = "".concat(t, "px")) : (n.style.width = "".concat(t, "px"), n.style.height = "".concat(e, "px")), (0, pt.sZ)(), (0, pt.Ul)()
                            }), 100)
                        },
                        w = function() {
                            "visible" === document.visibilityState && setTimeout((function() {
                                y()
                            }), 200)
                        };
                    (0, Ye.useEffect)((function() {
                        var n = (window.nggClientIpInfo || {}).browserCode;
                        return n && "mob" !== n || x({
                                type: _e.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            }), (0, Ge.tq)() && (y(), window.addEventListener("orientationchange", y), document.addEventListener("visibilitychange", w)),
                            function() {
                                (0, Ge.tq)() && (window.removeEventListener("orientationchange", y), document.removeEventListener("visibilitychange", w))
                            }
                    }), []);
                    var b = (window.nggClientIpInfo || {}).browserCode;
                    return b && "mob" !== b ? (0, et.BX)(yt, {
                        ref: f,
                        showBackground: !(g && !v),
                        isAppPage: t,
                        isMobile: (0, Ge.tq)(),
                        isDesktop: (0, Ge.nI)(),
                        children: [(0, et.tZ)(ut, {
                            animateSmall: g || u
                        }), (0, et.tZ)(rt, {
                            setAdsMuted: o,
                            adsError: h,
                            setAdStart: p,
                            adsEnded: g,
                            isAppPage: t
                        })]
                    }) : null
                }),
                Zt = (0, Ye.memo)(At),
                kt = t(50912),
                St = t(14266),
                Et = t(66971),
                Pt = t(79305),
                Tt = t(17174),
                Ct = t(58309),
                Dt = t(48533),
                Rt = t(26793),
                Ot = t(35102),
                It = t(12812),
                Mt = t(94564),
                Lt = {
                    src: "/play/_next/static/media/pokelabo-bg.9f8d2fdd.png",
                    height: 1080,
                    width: 1920,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAD1BMVEWRq/OXnfC5qfSgm/CsoPKVbZ98AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVR4nGNgYmFmZGRgYGBgYmGGsJhYoEJMMDkQA8QCAAZNAEYty97oAAAAAElFTkSuQmCC"
                },
                Bt = {
                    src: "/play/_next/static/media/pokelabo-loader.115722d8.png",
                    height: 70,
                    width: 70,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVMaXGbp66SnqVqeYGNoKQ4QkKeq7GOn6SNm6CNnKOQnaONnqV6iI8AChWtub9wfYnZ5+0BPP+iAAAAEHRSTlMAzMOFPg/oMlwXiEpJGPk9vzNjNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADhJREFUeJwdyFsWwBAQRMGLoadDHvtfbQ6fVYAjDKCUUuDcSiOdDuYZBe/TOv0y1G+UsftupS74ASe5ASMQ2Ob9AAAAAElFTkSuQmCC"
                },
                Xt = t(45024),
                Nt = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Kt = (0, Qe.F4)(E || (E = Nt(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),
                jt = (0, Qe.F4)(P || (P = Nt(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),
                zt = (0, Qe.F4)(T || (T = Nt(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))),
                Yt = (0, Qe.F4)(C || (C = Nt(["\n  0% {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n    60% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    80% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    to {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n"], ["\n  0% {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n    60% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    80% {\n        opacity: 1;\n        text-shadow: 0 0 3px #0d9bd1\n    }\n    to {\n        opacity: .6;\n        text-shadow: 0 0 0 #0d9bd1\n    }\n"]))),
                Ht = (0, Qe.F4)(D || (D = Nt(["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"], ["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"]))),
                _t = Qe.ZP.div(R || (R = Nt(["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
                    return n.theme.colors.ascent
                }), Ht),
                Ft = Qe.ZP.div(O || (O = Nt(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"]))),
                Ut = Qe.ZP.div(I || (I = Nt(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),
                Wt = Qe.ZP.div(X || (X = Nt(["\n  position: absolute;\n  touch-action: none;\n  ", "\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  touch-action: none;\n  ", "\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"])), (function(n) {
                    return n.isPortrait && (0, Qe.iv)(M || (M = Nt(["\n    height: 100vmax;\n  "], ["\n    height: 100vmax;\n  "])))
                }), (function(n) {
                    return n.toggle ? (0, Qe.iv)(L || (L = Nt(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), Kt) : (0, Qe.iv)(B || (B = Nt(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), jt)
                })),
                Gt = Qe.ZP.img(N || (N = Nt(["\n  width: 100%;\n  height: 100%;\n"], ["\n  width: 100%;\n  height: 100%;\n"]))),
                Vt = Qe.ZP.div(K || (K = Nt(["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 9;\n  .loadingText{\n    animation: ", " 1s linear infinite;\n    margin-top: 5px;\n  }\n"], ["\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  z-index: 9;\n  .loadingText{\n    animation: ", " 1s linear infinite;\n    margin-top: 5px;\n  }\n"])), Yt),
                qt = Qe.ZP.img(j || (j = Nt(["\n  width: 40px;\n  height: 40px;\n  animation: ", " 1.5s linear infinite;\n"], ["\n  width: 40px;\n  height: 40px;\n  animation: ", " 1.5s linear infinite;\n"])), zt),
                Qt = function(n) {
                    var e, t, i, o, r, a, d = n.toggle,
                        l = (0, He.v9)((function(n) {
                            return n.play.orientation
                        }));
                    return (0, et.tZ)(Wt, {
                        toggle: d,
                        isPortrait: (0, Ge.tq)() && qe.cj.portrait === l,
                        children: (0, et.tZ)("video", {
                            src: (0, Ge.tq)() ? null === (i = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.launchVideo : null === (a = null === (r = null === (o = Ue.ZP.appInfo) || void 0 === o ? void 0 : o.media) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.launchVideo,
                            autoPlay: !0,
                            muted: !0,
                            loop: !0,
                            disableRemotePlayback: !0,
                            playsInline: !0,
                            className: "preloader-video"
                        })
                    })
                },
                Jt = function(n) {
                    var e, t, i, o = n.toggle,
                        r = (0, He.v9)((function(n) {
                            return n.play.isPokelaboApp
                        })),
                        a = (0, Rt.$)().t;
                    return (0, et.tZ)(wt, {
                        style: {
                            background: "none"
                        },
                        toggle: o,
                        children: r ? (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(Gt, {
                                src: (0, Xt.j)(Lt),
                                alt: "videos"
                            }), (0, et.BX)(Vt, {
                                children: [(0, et.tZ)(qt, {
                                    src: (0, Xt.j)(Bt),
                                    alt: "videos"
                                }), (0, et.tZ)(Mt.T5, {
                                    white: !0,
                                    className: "loadingText",
                                    children: a("loading")
                                })]
                            })]
                        }) : (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(It.Z, {
                                toggle: o,
                                enteringDelay: .6,
                                exitingDelay: .6,
                                children: (0, et.tZ)(Qt, {
                                    toggle: o
                                })
                            }), (0, et.tZ)(It.Z, {
                                toggle: o,
                                exitingDelay: .3,
                                children: (0, et.tZ)(bt, {
                                    style: {
                                        padding: "16px",
                                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                                        position: "absolute",
                                        bottom: (0, Ge.tq)() ? "24px" : "48px"
                                    },
                                    toggle: o,
                                    children: (0, et.BX)(Ft, {
                                        children: [(0, et.tZ)("img", {
                                            src: null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.icon,
                                            alt: null === (i = Ue.ZP.appInfo) || void 0 === i ? void 0 : i.appName,
                                            height: 64,
                                            width: 64
                                        }), (0, et.BX)(Ut, {
                                            children: [(0, et.tZ)("p", {
                                                children: a("launchingGame")
                                            }), (0, et.tZ)(_t, {})]
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                $t = function(n) {
                    var e = n.toggle;
                    return (0, et.tZ)(wt, {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            bottom: 0,
                            height: "100vh",
                            marginTop: "0px",
                            top: "0px"
                        },
                        toggle: e,
                        children: (0, et.tZ)(Ot.Z, {})
                    })
                },
                ni = {
                    src: "/play/_next/static/media/BrowserChrome.17f67783.svg",
                    height: 24,
                    width: 24
                },
                ei = {
                    src: "/play/_next/static/media/BrowserSafari.87ac5020.svg",
                    height: 24,
                    width: 24
                },
                ti = {
                    src: "/play/_next/static/media/BrowserEdge.925a6e2f.svg",
                    height: 24,
                    width: 24
                },
                ii = {
                    src: "/play/_next/static/media/Copy.beaded6b.svg",
                    height: 16,
                    width: 16
                },
                oi = t(22012),
                ri = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ai = Qe.ZP.h3(z || (z = ri(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"], ["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                di = Qe.ZP.div(Y || (Y = ri(["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"], ["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"])), (function(n) {
                    return n.theme.colors.black10
                }), (function(n) {
                    return n.theme.border.base
                }), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.border.radius2
                }), (function(n) {
                    return n.theme.border.radius2
                }), (function(n) {
                    return n.theme.colors.white
                })),
                li = Qe.ZP.div(H || (H = ri(["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"], ["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.colors.white
                })),
                ci = Qe.ZP.div(_ || (_ = ri(["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"])), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.spacing.base
                })),
                si = Qe.ZP.div(F || (F = ri(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"])), (function(n) {
                    return n.theme.spacing.base2
                })),
                ui = Qe.ZP.div(U || (U = ri(["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n  border: ", ";\n\n  img {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n  border: ", ";\n\n  img {\n    cursor: pointer;\n  }\n"])), (function(n) {
                    return n.theme.spacing.base3
                }), (function(n) {
                    return n.theme.colors.black10
                }), (function(n) {
                    return n.theme.spacing.base2
                }), (function(n) {
                    return n.theme.spacing.base3
                }), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.border.base
                })),
                pi = Qe.ZP.p(W || (W = ri(["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"], ["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                fi = Qe.ZP.div(G || (G = ri(["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"], ["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"])), (function(n) {
                    return n.theme.border.base
                }), (function(n) {
                    return n.theme.colors.white
                })),
                hi = Qe.ZP.p(V || (V = ri(["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"], ["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.black
                }), (function(n) {
                    return n.theme.border.base2
                }), (function(n) {
                    return n.theme.spacing.base
                }), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.colors.white
                })),
                gi = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                vi = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                mi = function() {
                    var n = (0, Rt.$)().t;
                    return (0, et.BX)(oi.Z, {
                        style: {
                            padding: "0",
                            fontSize: "18px",
                            lineHeight: "150%",
                            width: "auto"
                        },
                        children: [(0, et.tZ)(di, {
                            children: (0, et.tZ)(ai, {
                                children: n("unsupportedBrowser")
                            })
                        }), (0, et.BX)(li, {
                            children: [(0, et.tZ)(Mt.kk, {
                                med: !0,
                                children: n("switchBrowser")
                            }), (0, et.BX)(ci, {
                                children: [(0, et.BX)(si, {
                                    children: [(0, et.tZ)("img", {
                                        className: "chromeLogo",
                                        alt: n("googleChrome"),
                                        src: (0, Xt.j)(ni),
                                        height: 24,
                                        width: 24
                                    }), (0, et.tZ)(Mt.mH, {
                                        med: !0,
                                        children: n("googleChrome")
                                    })]
                                }), (0, et.BX)(si, {
                                    children: [(0, et.tZ)("img", {
                                        className: "safariLogo",
                                        alt: n("appleSafari"),
                                        src: (0, Xt.j)(ei),
                                        height: 24,
                                        width: 24
                                    }), (0, et.tZ)(Mt.mH, {
                                        med: !0,
                                        children: n("appleSafari")
                                    })]
                                }), (0, et.BX)(si, {
                                    children: [(0, et.tZ)("img", {
                                        className: "edgeLogo",
                                        alt: n("microsoftEdge"),
                                        src: (0, Xt.j)(ti),
                                        height: 24,
                                        width: 24
                                    }), (0, et.tZ)(Mt.mH, {
                                        med: !0,
                                        children: n("microsoftEdge")
                                    })]
                                })]
                            }), (0, et.BX)(ui, {
                                children: [(0, et.tZ)(pi, {
                                    children: window.location.href
                                }), (0, et.tZ)(fi, {}), (0, et.tZ)("img", {
                                    alt: n("copy"),
                                    src: (0, Xt.j)(ii),
                                    height: 16,
                                    width: 16,
                                    onClick: function() {
                                        return gi(void 0, void 0, void 0, (function() {
                                            return vi(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return n.trys.push([0, 2, , 3]), [4, navigator.clipboard.writeText(window.location.href).then((function() {
                                                            var n = document.getElementById("CopyText");
                                                            n && (n.style.display = "flex", setTimeout((function() {
                                                                n.style.display = "none"
                                                            }), 1e3))
                                                        }))];
                                                    case 1:
                                                        return n.sent(), [3, 3];
                                                    case 2:
                                                        return n.sent(), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    }
                                }), (0, et.tZ)(hi, {
                                    id: "CopyText",
                                    children: n("linkCopied")
                                })]
                            })]
                        })]
                    })
                },
                xi = t(6268),
                yi = t(88557),
                wi = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                bi = (0, Qe.F4)(q || (q = wi(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))),
                Ai = Qe.ZP.div(Q || (Q = wi(["\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(0deg, rgba(164, 0, 0, 0.80) 0%, rgba(89, 0, 0, 0.40) 100%);\n    backdrop-filter: blur(12px);\n    border-radius: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    img{\n      pointer-events: all;\n    }\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n      font-weight: 600;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n    }\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n        margin: 0 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"], ["\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(0deg, rgba(164, 0, 0, 0.80) 0%, rgba(89, 0, 0, 0.40) 100%);\n    backdrop-filter: blur(12px);\n    border-radius: ", ";\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    img{\n      pointer-events: all;\n    }\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n      font-weight: 600;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n    }\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n        margin: 0 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.border.radius2
                })),
                Zi = Qe.ZP.div(J || (J = wi(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"], ["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"])), bi),
                ki = Qe.ZP.div($ || ($ = wi(["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"], ["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"]))),
                Si = function() {
                    var n, e = (0, Rt.$)().t,
                        t = (0, Ye.useContext)(We.x);
                    return (0, et.tZ)(ki, {
                        children: (0, et.BX)("div", {
                            className: "mainContainer",
                            children: [(0, et.tZ)("img", {
                                alt: "".concat(e("gameTile")),
                                src: null === (n = null === t || void 0 === t ? void 0 : t.media) || void 0 === n ? void 0 : n.tile,
                                width: 230,
                                height: 310
                            }), (0, et.BX)("div", {
                                className: "content",
                                children: [(0, et.tZ)(Mt.T3, {
                                    children: e("serverBusy")
                                }), (0, et.tZ)(Mt.xv, {
                                    children: e("serverBusyMsg")
                                }), (0, et.tZ)(xi.z, {
                                    variant: "primary",
                                    size: "small",
                                    text: e("restart"),
                                    onClick: function() {
                                        return (0, yi.iI)("SpotInterruption")
                                    }
                                })]
                            })]
                        })
                    })
                },
                Ei = t(32475),
                Pi = t.n(Ei),
                Ti = {
                    src: "/play/_next/static/media/info-icon.c014906a.svg",
                    height: 17,
                    width: 17
                },
                Ci = t(866),
                Di = {
                    src: "/play/_next/static/media/round-loader.ec0f091e.svg",
                    height: 32,
                    width: 32
                },
                Ri = function() {
                    var n = (0, Ye.useRef)(null),
                        e = (0, Ye.useRef)(null),
                        t = (0, Ye.useRef)(null),
                        i = (0, Ye.useRef)(null),
                        o = (0, Ye.useState)(!0),
                        r = o[0],
                        a = o[1],
                        d = (0, Ye.useState)(""),
                        l = d[0],
                        c = d[1],
                        s = (0, He.I0)(),
                        u = (0, Rt.$)().t,
                        p = (0, He.v9)((function(n) {
                            return n.play.userWarningTime
                        })),
                        f = function() {
                            var e;
                            null === (e = null === n || void 0 === n ? void 0 : n.current) || void 0 === e || e.classList.add("expand"), a(!1)
                        };
                    return (0, Ye.useEffect)((function() {
                        var t, o;
                        null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideDown"), null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideUp");
                        var r = p;
                        return i.current = setInterval((function() {
                                var t, o, a, d = Math.floor(r / 60),
                                    l = r % 60,
                                    s = Pi()(String(d), 2, "0"),
                                    u = Pi()(String(l), 2, "0");
                                c("".concat(s, ":").concat(u)), (r -= 1) <= 0 && (clearInterval(i.current), null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideUp"), null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideDown"), null === (a = null === e || void 0 === e ? void 0 : e.current) || void 0 === a || a.classList.remove("hide"))
                            }), 1e3),
                            function() {
                                var t, o, r;
                                clearInterval(i.current), s({
                                    type: Et.Z.SPOT_INSTANCES,
                                    payload: {
                                        disconnecTimer: 0
                                    }
                                }), null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t || t.classList.add("slideUp"), null === (o = null === n || void 0 === n ? void 0 : n.current) || void 0 === o || o.classList.remove("slideDown"), null === (r = null === e || void 0 === e ? void 0 : e.current) || void 0 === r || r.classList.remove("hide")
                            }
                    }), []), (0, et.BX)(et.HY, {
                        children: [(0, et.tZ)(Zi, {
                            ref: e,
                            className: "hide",
                            children: (0, et.tZ)("img", {
                                alt: "".concat(u("roundLoader")),
                                src: (0, Xt.j)(Di)
                            })
                        }), (0, et.BX)(Ai, {
                            ref: n,
                            className: "slideUp flex",
                            children: [(0, et.tZ)("p", {
                                className: "shortDescription",
                                children: u("spotInstanceShortMsg")
                            }), !r && (0, et.tZ)("img", {
                                alt: "".concat(u("infoIcon")),
                                src: (0, Xt.j)(Ti),
                                onClick: f
                            }), (0, et.tZ)("span", {
                                ref: t,
                                className: "timer",
                                children: l
                            }), r && (0, et.tZ)("img", {
                                alt: "".concat(u("infoIcon")),
                                src: (0, Xt.j)(Ti),
                                onClick: f
                            }), (0, et.tZ)("p", {
                                className: "longDescription",
                                children: u("spotInstanceLongMsg")
                            }), !r && (0, et.tZ)("img", {
                                alt: "".concat(u("closeIcon")),
                                src: (0, Xt.j)(Ci.Z),
                                onClick: function() {
                                    var e;
                                    null === (e = null === n || void 0 === n ? void 0 : n.current) || void 0 === e || e.classList.remove("expand"), a(!0)
                                }
                            })]
                        })]
                    })
                },
                Oi = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ii = Qe.ZP.div(nn || (nn = Oi(["\n  background: var(\n    --background-blur-logo-dark-bg,\n    radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      28.93% 32.16% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      29.7% 41.69% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223\n  );\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ", ";\n  padding: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .logo {\n    width: 128px;\n    height: 128px;\n    margin: 0 0 4.43vh 0;\n    border-radius: ", ";\n    .isMobile.landScape & {\n      width: 23vmin;\n      height: 23vmin;\n      margin: 0 0 4.5vmin 0;\n    }\n\n    .isMobile.portrait & {\n      width: 12vmax;\n      height: 12vmax;\n      margin: 0 0 4vmax 0;\n    }\n  }\n  .heading {\n    .isMobile.landScape & {\n      margin: 0px 0px 1vmax 0px;\n    }\n  }\n  .subHeading {\n    max-width: 656px;\n    color: ", ";\n    .isMobile.landScape & {\n      margin: 0px 0px 4.8vmin 0px;\n      max-width: 600px;\n    }\n\n    .isMobile.portrait & {\n      margin: 0px 0px 5vmax 0px;\n      max-width: 350px;\n    }\n\n    .isMobile & {\n      font-size: 16px;\n    }\n  }\n  .baseBtn {\n    font-size: 14px;\n  }\n  @media screen and (orientation: landscape) {\n    width: 100%;\n    height: 100%;\n    .isMobile.landScape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"], ["\n  background: var(\n    --background-blur-logo-dark-bg,\n    radial-gradient(\n      32.85% 62.63% at 50% 30.49%,\n      rgba(81, 165, 201, 0.2) 0%,\n      rgba(51, 80, 111, 0) 100%\n    ),\n    radial-gradient(\n      28.93% 32.16% at 64.37% 56.79%,\n      rgba(179, 214, 97, 0.2) 0%,\n      rgba(179, 214, 97, 0) 100%\n    ),\n    radial-gradient(\n      29.7% 41.69% at 37.22% 60.32%,\n      rgba(255, 66, 165, 0.2) 0%,\n      rgba(255, 66, 165, 0) 100%\n    ),\n    #0b0223\n  );\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: ", ";\n  padding: 0 0 32px 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  .logo {\n    width: 128px;\n    height: 128px;\n    margin: 0 0 4.43vh 0;\n    border-radius: ", ";\n    .isMobile.landScape & {\n      width: 23vmin;\n      height: 23vmin;\n      margin: 0 0 4.5vmin 0;\n    }\n\n    .isMobile.portrait & {\n      width: 12vmax;\n      height: 12vmax;\n      margin: 0 0 4vmax 0;\n    }\n  }\n  .heading {\n    .isMobile.landScape & {\n      margin: 0px 0px 1vmax 0px;\n    }\n  }\n  .subHeading {\n    max-width: 656px;\n    color: ", ";\n    .isMobile.landScape & {\n      margin: 0px 0px 4.8vmin 0px;\n      max-width: 600px;\n    }\n\n    .isMobile.portrait & {\n      margin: 0px 0px 5vmax 0px;\n      max-width: 350px;\n    }\n\n    .isMobile & {\n      font-size: 16px;\n    }\n  }\n  .baseBtn {\n    font-size: 14px;\n  }\n  @media screen and (orientation: landscape) {\n    width: 100%;\n    height: 100%;\n    .isMobile.landScape & {\n      height: calc(100vh + 65px);\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.border.radius6
                }), (function(n) {
                    return n.theme.colors.white60
                })),
                Mi = Qe.ZP.div(en || (en = Oi(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"]))),
                Li = t(52165),
                Bi = function() {
                    var n, e = (0, Ge.tq)(),
                        t = (0, Rt.$)().t,
                        i = (0, Ye.useContext)(We.x),
                        o = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        r = (0, Ye.useMemo)((function() {
                            var n = "";
                            return e && (n += "isMobile "), o === qe.cj.landscape && (n += "landScape "), o === qe.cj.portrait && (n += "portrait "), n
                        }), [o]),
                        a = (0, Ye.useMemo)((function() {
                            return !(!e || o !== qe.cj.portrait)
                        }), [r]);
                    return (0, et.tZ)(Mi, {
                        className: "".concat(r),
                        children: (0, et.BX)(Ii, {
                            children: [(0, et.tZ)("img", {
                                className: "logo",
                                alt: "".concat(t("gameTile")),
                                src: null === (n = null === i || void 0 === i ? void 0 : i.media) || void 0 === n ? void 0 : n.icon
                            }), (0, et.tZ)(Mt.do, {
                                className: "heading",
                                center: !0,
                                med: !0,
                                children: t("endScreenHeading")
                            }), (0, et.tZ)(Mt.T5, {
                                center: !0,
                                className: "subHeading",
                                children: t("endScreenSubHeading")
                            }), (0, et.tZ)(xi.z, {
                                className: "baseBtn",
                                variant: "primary",
                                onClick: function() {
                                    return (0, yi.iI)("SessionComplete")
                                },
                                children: t("restartSession")
                            }), (0, et.tZ)(Li.Z, {
                                breakFooterText: a
                            })]
                        })
                    })
                },
                Xi = t(61740),
                Ni = t(56817),
                Ki = t(94381),
                ji = t(4298),
                zi = t(6094),
                Yi = t(30945),
                Hi = t(20902),
                _i = t(50063),
                Fi = t(55734),
                Ui = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Wi = Qe.ZP.input.attrs({
                    type: "file"
                })(tn || (tn = Ui(["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"], ["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"]))),
                Gi = Qe.ZP.div(on || (on = Ui(["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"], ["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"])), (function(n) {
                    return n.theme.border.base3
                }), (function(n) {
                    return n.theme.border.radius2
                }), Fi.SA),
                Vi = Qe.ZP.div(rn || (rn = Ui(["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"], ["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"])), (function(n) {
                    return n.theme.colors.white
                }), Fi.SA),
                qi = Qe.ZP.div(an || (an = Ui(["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"], ["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"])), (function(n) {
                    return n.theme.colors.blue
                })),
                Qi = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.v9)((function(n) {
                            return n.play.fileUploadState
                        })),
                        t = e.showLoader,
                        i = e.loaderType,
                        o = (0, Ye.useRef)(null),
                        r = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        r({
                            type: Et.Z.UPDATE_UPLOAD_REF,
                            payload: {
                                fileUploadRef: o
                            }
                        })
                    }), [o]);
                    var a = (0, Ye.useMemo)((function() {
                        switch (i) {
                            case "uploading":
                                return "uploadingFile";
                            case "success":
                                return "uploadedSuccessfully";
                            case "warning":
                                return "uploadFailed";
                            default:
                                return ""
                        }
                    }), [i]);
                    return (0, et.BX)(et.HY, {
                        children: [(0, et.tZ)(Wi, {
                            ref: o,
                            id: "uploadFile",
                            onClick: Hi.Hv,
                            onChange: Hi.cT
                        }), (0, et.BX)(Gi, {
                            className: t ? "slideDown" : "",
                            children: ["uploading" === i && (0, et.tZ)(Vi, {}), "success" === i && (0, et.tZ)(qi, {}), "warning" === i && (0, et.tZ)("img", {
                                width: "21",
                                height: "21",
                                src: (0, Xt.j)(_i.Z),
                                alt: "warning"
                            }), (0, et.tZ)(Mt.T5, {
                                style: {
                                    margin: "0px",
                                    marginLeft: "13.5px"
                                },
                                med: !0,
                                white: !0,
                                children: n(a)
                            })]
                        })]
                    })
                },
                Ji = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.v9)((function(n) {
                            return n.play.fileDownloadState
                        })),
                        t = e.showLoader,
                        i = e.loaderType,
                        o = (0, Ye.useState)(""),
                        r = o[0],
                        a = o[1];
                    return (0, Ye.useEffect)((function() {
                        a(function() {
                            switch (i) {
                                case "downloading":
                                    return "downloadingFile";
                                case "success":
                                    return "downloadedSuccessfully";
                                case "warning":
                                    return "downloadFailed";
                                default:
                                    return ""
                            }
                        }())
                    }), [i]), (0, et.BX)(Gi, {
                        className: t ? "slideDown" : "",
                        children: ["downloading" === i && (0, et.tZ)(Vi, {}), "success" === i && (0, et.tZ)(qi, {}), "warning" === i && (0, et.tZ)("img", {
                            width: "21",
                            height: "21",
                            src: (0, Xt.j)(_i.Z),
                            alt: "warning"
                        }), (0, et.tZ)(Mt.T5, {
                            style: {
                                margin: "0px",
                                marginLeft: "13.5px"
                            },
                            med: !0,
                            white: !0,
                            children: n(r)
                        })]
                    })
                },
                $i = function() {
                    return (0, et.tZ)("div", {})
                },
                no = t(78603),
                eo = (t(90534), {
                    src: "/play/_next/static/media/proxyLogo.1825607a.svg",
                    height: 81,
                    width: 80
                }),
                to = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                io = (0, Qe.iv)(dn || (dn = to(["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"], ["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"]))),
                oo = Qe.ZP.div(ln || (ln = to(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n         margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n         user-select: all;\n      }\n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n         margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n         user-select: all;\n      }\n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.black80
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white
                })),
                ro = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                ao = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                lo = function() {
                    var n, e = (0, Rt.$)().t,
                        t = (0, Ye.useState)(!1),
                        i = t[0],
                        o = t[1],
                        r = null === (n = Ue.ZP.appInfo) || void 0 === n ? void 0 : n.alternateUrlForProxies;
                    (0, Ye.useEffect)((function() {
                        (0, Ve.L9)("ProxyScreenShown")
                    }), []);
                    return (0, et.tZ)(oi.Z, {
                        modalStyles: io,
                        children: (0, et.BX)(oo, {
                            children: [(0, et.tZ)("img", {
                                src: (0, Xt.j)(eo),
                                alt: "",
                                width: (0, Ge.tq)() ? 48 : 80,
                                height: (0, Ge.tq)() ? 48 : 80
                            }), (0, et.tZ)(Mt.T3, {
                                med: !0,
                                center: !0,
                                children: e("proxyDetected")
                            }), (0, et.tZ)(Mt.T5, {
                                center: !0,
                                med: !0,
                                children: e("toPlayGame")
                            }), (0, et.tZ)(Mt.T5, {
                                center: !0,
                                children: "1. ".concat(e("disableVpn"))
                            }), (0, et.tZ)(Mt.T5, {
                                center: !0,
                                children: "2. ".concat(e(r ? "useURL" : "reloadPage"))
                            }), r && (0, et.BX)(et.HY, {
                                children: [(0, et.BX)("div", {
                                    className: "proxy-url-container",
                                    children: [(0, et.tZ)("div", {
                                        className: "proxy-url",
                                        children: "".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy")
                                    }), i && (0, et.tZ)("div", {
                                        className: "copy-tooltip",
                                        children: e("linkCopied")
                                    })]
                                }), (0, et.tZ)(xi.z, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return ro(void 0, void 0, void 0, (function() {
                                            return ao(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return n.trys.push([0, 2, , 3]), [4, navigator.clipboard.writeText("".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy"))];
                                                    case 1:
                                                        return n.sent(), o(!0), setTimeout((function() {
                                                            o(!1)
                                                        }), 2e3), [3, 3];
                                                    case 2:
                                                        return n.sent(), [3, 3];
                                                    case 3:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    },
                                    text: e("copyUrl")
                                })]
                            })]
                        })
                    })
                },
                co = t(16678),
                so = {
                    src: "/play/_next/static/media/tryNow.c14372c1.svg",
                    height: 24,
                    width: 24
                },
                uo = {
                    src: "/play/_next/static/media/tryNowAscent.969f3040.svg",
                    height: 25,
                    width: 24
                },
                po = t(1653),
                fo = {
                    src: "/play/_next/static/media/warning.53226107.svg",
                    height: 17,
                    width: 16
                },
                ho = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                go = (0, Qe.iv)(cn || (cn = ho(["\n   max-height: 95vh;\n   width: 494px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 494px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))),
                vo = (0, Qe.iv)(sn || (sn = ho(["\n   max-height: 95vh;\n   width: 630px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 630px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))),
                mo = (0, Qe.iv)(un || (un = ho(["\n   max-height: 95vh;\n   width: 583px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 583px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))),
                xo = Qe.ZP.div(pn || (pn = ho(["\n overflow: auto;\n max-height: inherit;\npadding: ", ";\n"], ["\n overflow: auto;\n max-height: inherit;\npadding: ", ";\n"])), (function(n) {
                    return n.isDesktop ? "32px 60px" : "24px"
                })),
                yo = Qe.ZP.div(hn || (hn = ho(["\n   display: flex;\n   width: 100%;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   background-color: transparent;\n   .appIcon {\n      width: ", ";\n      aspect-ratio: 1;\n      margin-bottom: 16px;\n      border-radius: 8px;\n      ", "\n   }\n"], ["\n   display: flex;\n   width: 100%;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   background-color: transparent;\n   .appIcon {\n      width: ", ";\n      aspect-ratio: 1;\n      margin-bottom: 16px;\n      border-radius: 8px;\n      ", "\n   }\n"])), (function(n) {
                    var e = n.screen,
                        t = n.isDesktop;
                    return "loading" === e ? t ? "140px" : "100px" : "180px"
                }), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(fn || (fn = ho(["\n         @media screen and (orientation: landscape) {\n            width: 80px;\n            margin-bottom: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            width: 80px;\n            margin-bottom: 8px;\n         }\n      "])))
                })),
                wo = Qe.ZP.div(gn || (gn = ho(["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"], ["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"]))),
                bo = Qe.ZP.div(xn || (xn = ho(["\n   display: flex;\n   margin-top: 16px;\n   flex-direction: column;\n   align-items: center;\n   width: 100%;\n   button {\n      border-radius: 12px;\n      padding: 16px;\n      flex-grow: 1;\n      justify-content: center;\n      align-items: center;\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n      display: flex;\n      border: none;\n      cursor: pointer;\n      ", "\n      img {\n         margin-right: 8px;\n      }\n   }\n   ", "\n"], ["\n   display: flex;\n   margin-top: 16px;\n   flex-direction: column;\n   align-items: center;\n   width: 100%;\n   button {\n      border-radius: 12px;\n      padding: 16px;\n      flex-grow: 1;\n      justify-content: center;\n      align-items: center;\n      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n      display: flex;\n      border: none;\n      cursor: pointer;\n      ", "\n      img {\n         margin-right: 8px;\n      }\n   }\n   ", "\n"])), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(vn || (vn = ho(["\n         @media screen and (orientation: landscape) {\n            padding: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            padding: 8px;\n         }\n      "])))
                }), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(mn || (mn = ho(["\n      @media screen and (orientation: landscape) {\n         margin-top: 8px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin-top: 8px;\n      }\n   "])))
                })),
                Ao = Qe.ZP.button(wn || (wn = ho(["\n   background-color: #FF42A5;\n   margin-bottom: 16px;\n   color: #fff;\n   width: 100%;\n   flex-direction: column;\n   .tryNowContainer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n   }\n   .noInstallMsg {\n      font-weight: 400;\n      font-size: 10px;\n      line-height: 15px;\n      letter-spacing: 0.05em;\n      color: #FFFFFF;\n   }\n   &:hover {\n      background-color: rgba(255, 66, 165, 0.9);\n   }\n   ", "\n"], ["\n   background-color: #FF42A5;\n   margin-bottom: 16px;\n   color: #fff;\n   width: 100%;\n   flex-direction: column;\n   .tryNowContainer {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n   }\n   .noInstallMsg {\n      font-weight: 400;\n      font-size: 10px;\n      line-height: 15px;\n      letter-spacing: 0.05em;\n      color: #FFFFFF;\n   }\n   &:hover {\n      background-color: rgba(255, 66, 165, 0.9);\n   }\n   ", "\n"])), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(yn || (yn = ho(["\n      @media screen and (orientation: landscape) {\n         margin-bottom: 8px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin-bottom: 8px;\n      }\n   "])))
                })),
                Zo = Qe.ZP.button(An || (An = ho(["\n   color: #fff;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   background-color: rgba(255, 255, 255, 0.2) !important;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;\n   border-radius: 8px !important;\n   padding: 10px !important;\n   width: unset;\n   width: 100% !important;\n   &:hover {\n   background-color: rgba(255, 255, 255, 0.1) !important;\n   }\n   ", "\n"], ["\n   color: #fff;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   background-color: rgba(255, 255, 255, 0.2) !important;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2) !important;\n   border-radius: 8px !important;\n   padding: 10px !important;\n   width: unset;\n   width: 100% !important;\n   &:hover {\n   background-color: rgba(255, 255, 255, 0.1) !important;\n   }\n   ", "\n"])), (function(n) {
                    return "ending" === n.screen && (0, Qe.iv)(bn || (bn = ho(["\n      background-color: #FF42A5;\n      padding: 16px !important;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 150%;\n      border: none !important;\n      border-radius: 12px !important;\n      &:hover {\n         background-color: rgba(255, 66, 165, 0.9);\n      }\n   "], ["\n      background-color: #FF42A5;\n      padding: 16px !important;\n      font-weight: 400;\n      font-size: 16px;\n      line-height: 150%;\n      border: none !important;\n      border-radius: 12px !important;\n      &:hover {\n         background-color: rgba(255, 66, 165, 0.9);\n      }\n   "])))
                })),
                ko = Qe.ZP.p(Zn || (Zn = ho(["\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   color: #FFFFFF;\n   position: relative;\n   margin-bottom: ", ";\n   &:after, &:before {\n      position: absolute;\n      width: 58.5px;\n      height: 1px;\n      background-color: rgba(255, 255, 255, 0.2);\n      content: '';\n      top: 50%;\n      transform: translateY(-50%);\n   }\n   &:after {\n      right: -64.5px;\n   }\n   &:before {\n      left: -64.5px;\n   }\n"], ["\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   color: #FFFFFF;\n   position: relative;\n   margin-bottom: ", ";\n   &:after, &:before {\n      position: absolute;\n      width: 58.5px;\n      height: 1px;\n      background-color: rgba(255, 255, 255, 0.2);\n      content: '';\n      top: 50%;\n      transform: translateY(-50%);\n   }\n   &:after {\n      right: -64.5px;\n   }\n   &:before {\n      left: -64.5px;\n   }\n"])), (function(n) {
                    return n.isDesktop ? "16px" : "8px"
                })),
                So = Qe.ZP.ul(En || (En = ho(["\n   list-style-type: disc;\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   margin: 16px 0px 0px 0px;\n   padding-left: 16px;\n   color: #EEEDF0;\n   li {\n\n      &:not(:last-child){\n         margin-bottom: 12px;\n      }\n\n      ", "\n   }\n   ", "\n"], ["\n   list-style-type: disc;\n   font-weight: 400;\n   font-size: 10px;\n   line-height: 12px;\n   margin: 16px 0px 0px 0px;\n   padding-left: 16px;\n   color: #EEEDF0;\n   li {\n\n      &:not(:last-child){\n         margin-bottom: 12px;\n      }\n\n      ", "\n   }\n   ", "\n"])), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(kn || (kn = ho(["\n         @media screen and (orientation: landscape) {\n            margin-bottom: 8px;\n         }\n      "], ["\n         @media screen and (orientation: landscape) {\n            margin-bottom: 8px;\n         }\n      "])))
                }), (function(n) {
                    return !n.isDesktop && (0, Qe.iv)(Sn || (Sn = ho(["\n      @media screen and (orientation: landscape) {\n         margin: 8px 0px 0px 0px;\n      }\n   "], ["\n      @media screen and (orientation: landscape) {\n         margin: 8px 0px 0px 0px;\n      }\n   "])))
                })),
                Eo = Qe.ZP.div(Pn || (Pn = ho(["\n   display: flex;\n   flex-direction: column;\n   width: 100%;\n   background-color: transparent;\n   align-items: center;\n"], ["\n   display: flex;\n   flex-direction: column;\n   width: 100%;\n   background-color: transparent;\n   align-items: center;\n"]))),
                Po = Qe.ZP.div(Tn || (Tn = ho(["\n   display: flex;\n   flex-grow: 1;\n   width: 100%;\n"], ["\n   display: flex;\n   flex-grow: 1;\n   width: 100%;\n"]))),
                To = Qe.ZP.div(Cn || (Cn = ho(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   padding-right: 48px;\n   border-right: 1px solid rgba(255, 255, 255, 0.1);\n   flex: 1;\n   .appIcon {\n      width: 180px;\n      aspect-ratio: 1;\n      border-radius: ", ";\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   padding-right: 48px;\n   border-right: 1px solid rgba(255, 255, 255, 0.1);\n   flex: 1;\n   .appIcon {\n      width: 180px;\n      aspect-ratio: 1;\n      border-radius: ", ";\n   }\n"])), (function(n) {
                    return n.isAppPage ? "12px" : "8px"
                })),
                Co = Qe.ZP.div(Dn || (Dn = ho(["\n   display: flex;\n   flex-direction: column;\n   padding-left: 48px;\n   align-items: center;\n   flex: ", ";\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   padding-left: 48px;\n   align-items: center;\n   flex: ", ";\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"])), (function(n) {
                    return "ending" === n.screen ? "1" : "unset"
                })),
                Do = Qe.ZP.div(Rn || (Rn = ho(["\n   padding: 12px;\n   border-radius: 12px;\n   background-color: #fff;\n"], ["\n   padding: 12px;\n   border-radius: 12px;\n   background-color: #fff;\n"]))),
                Ro = Qe.ZP.p(On || (On = ho(["\n   position: absolute;\n   top: -22px;\n   right: -22px;\n   width: 44px;\n   height: 44px;\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 40px;\n   cursor: pointer;\n   &:after, &:before {\n      width: 1px;\n      background-color: #fff;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      content: '';\n      height: 21.63px;\n   }\n   &:after {\n      transform: translate(-50%, -50%) rotate(45deg);\n   }\n   &:before {\n      transform: translate(-50%, -50%) rotate(-45deg);\n   }\n"], ["\n   position: absolute;\n   top: -22px;\n   right: -22px;\n   width: 44px;\n   height: 44px;\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 40px;\n   cursor: pointer;\n   &:after, &:before {\n      width: 1px;\n      background-color: #fff;\n      position: absolute;\n      top: 50%;\n      left:50%;\n      content: '';\n      height: 21.63px;\n   }\n   &:after {\n      transform: translate(-50%, -50%) rotate(45deg);\n   }\n   &:before {\n      transform: translate(-50%, -50%) rotate(-45deg);\n   }\n"]))),
                Oo = Qe.ZP.div(In || (In = ho(["\n   margin: 32px 0 -8px;\n   padding: 24px 60px 0px;\n   border-top: 1px solid rgba(255, 255, 255, 0.1);\n   border-radius: 0px 0px 12px 12px;\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: calc(100% + 120px);\n"], ["\n   margin: 32px 0 -8px;\n   padding: 24px 60px 0px;\n   border-top: 1px solid rgba(255, 255, 255, 0.1);\n   border-radius: 0px 0px 12px 12px;\n   display: flex;\n   align-items: center;\n   justify-content: space-between;\n   width: calc(100% + 120px);\n"]))),
                Io = Qe.ZP.p(Mn || (Mn = ho(["\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   margin: 0;\n"], ["\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   margin: 0;\n"]))),
                Mo = Qe.ZP.div(Ln || (Ln = ho(["\n   text-align: center;\n   margin-bottom: 32px;\n"], ["\n   text-align: center;\n   margin-bottom: 32px;\n"]))),
                Lo = (0, Qe.ZP)(Mt.Bb)(Bn || (Bn = ho(["\n   color: ", ";\n\n   img {\n      width: 24px;\n      margin-right: 8px;\n      vertical-align: middle;\n   }\n"], ["\n   color: ", ";\n\n   img {\n      width: 24px;\n      margin-right: 8px;\n      vertical-align: middle;\n   }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Bo = (0, Qe.ZP)(Mt.lU)(Xn || (Xn = ho(["\n   color: ", ";\n   margin-top: 4px;\n"], ["\n   color: ", ";\n   margin-top: 4px;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Xo = Qe.ZP.div(Nn || (Nn = ho(["\n   text-align:center;\n   margin-top:16px;\n"], ["\n   text-align:center;\n   margin-top:16px;\n"]))),
                No = (0, Qe.ZP)(Mt.js)(Kn || (Kn = ho(["\n   color: ", ";\n"], ["\n   color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Ko = (0, Qe.ZP)(Mt.lU)(jn || (jn = ho(["\n   color: ", ";\n"], ["\n   color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                jo = (0, Qe.ZP)(Mt.IS.withComponent("p"))(zn || (zn = ho(["\n   max-width: 180px;\n   color: ", ";\n   margin-top: 16px;\n   text-align: center;\n"], ["\n   max-width: 180px;\n   color: ", ";\n   margin-top: 16px;\n   text-align: center;\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                zo = (0, Qe.ZP)(Mt.gd)(Yn || (Yn = ho(["\n  color: ", ";\n  margin: 32px auto 0;\n  text-align:center;\n  max-width: 360px;\n"], ["\n  color: ", ";\n  margin: 32px auto 0;\n  text-align:center;\n  max-width: 360px;\n"])), (function(n) {
                    return n.theme.colors.white50
                })),
                Yo = function(n) {
                    var e, t, i, o, r, a, d, l, c, s = n.handleTryNowClick,
                        u = n.screen,
                        p = n.isAppPage,
                        f = (0, Rt.$)().t,
                        h = !(0, Ge.tq)() && !(0, Ge.Em)() && !(0, Ge.zc)(),
                        g = (0, Ye.useState)(!1),
                        v = g[0],
                        m = g[1],
                        x = (0, Ge.Ij)(),
                        y = null === (e = Ue.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === e ? void 0 : e.clientLink,
                        w = ((null === (i = null === (t = Ue.ZP.appInfo.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.cumulativeTimeLimitSecs) || 0) / 3600,
                        b = 0;
                    b = w < 1 ? Math.round(60 * w) : Math.round(w);
                    var A = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        "loading" === u ? (0, Ve.L9)(Ki.S5, {
                            element: "LaunchScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        }) : "ending" === u ? (h && (0, Ve.L9)(Ki.S5, {
                            element: "TrialEndQRScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        }), (0, Ve.L9)(Ki.S5, {
                            element: "TrialEndScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        })) : "inGame" === u && (0, Ve.L9)(Ki.S5, {
                            element: "MidQRScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        })
                    }), []);
                    return (0, et.BX)(et.HY, {
                        children: [(0, et.tZ)(wo, {
                            className: "nowggLogo",
                            children: (0, et.tZ)(co.Z, {
                                themeType: "light",
                                hasTagline: !1,
                                style: {
                                    margin: "0"
                                }
                            })
                        }), (0, et.BX)(oi.Z, {
                            modalStyles: "loading" !== u && ("ending" !== u || h) || v ? v || "inGame" === u ? mo : vo : go,
                            contentStyle: {
                                backgroundImage: "unset",
                                color: "unset",
                                margin: "0",
                                backgroundColor: "unset",
                                overflow: "visible",
                                maxHeight: "inherit",
                                borderRadius: "inherit"
                            },
                            children: ["inGame" === u && (0, et.tZ)(Ro, {
                                onClick: function() {
                                    A({
                                        type: Et.Z.SHOW_TRY_NOW,
                                        payload: {
                                            tryNowModal: !1
                                        }
                                    }), (0, Ve.L9)(Ki.S5, {
                                        element: "MidQRScreen",
                                        action: "Closed",
                                        group: "TryAndDownload"
                                    })
                                }
                            }), (0, et.BX)(xo, {
                                isDesktop: h,
                                children: ["ending" === u && (0, et.BX)(Mo, {
                                    children: [(0, et.BX)(Lo, {
                                        children: [(0, et.tZ)("img", {
                                            src: (0, Xt.j)(fo),
                                            alt: f("warning")
                                        }), (0, et.tZ)("span", {
                                            children: f("trialLimitReached")
                                        })]
                                    }), (0, et.tZ)(Bo, {
                                        children: f("installToContinue")
                                    })]
                                }), ("loading" === u || "ending" === u && (!h || y && !(0, Ge.dl)())) && !v && (0, et.BX)(yo, {
                                    screen: u,
                                    isDesktop: h,
                                    children: [(0, et.tZ)("img", {
                                        src: Ue.ZP.appInfo.media.icon,
                                        alt: f("appIcon"),
                                        className: "appIcon"
                                    }), (0, et.tZ)(Mt.Bb, {
                                        children: (0, et.tZ)("span", {
                                            style: {
                                                color: "#ffffff",
                                                display: "flex",
                                                textAlign: "center"
                                            },
                                            children: null === (o = Ue.ZP.appInfo) || void 0 === o ? void 0 : o.appName
                                        })
                                    }), "loading" !== u && (0, et.tZ)(Mt.lU, {
                                        children: (0, et.tZ)("span", {
                                            style: {
                                                color: "rgba(255, 255, 255, 0.6)"
                                            },
                                            children: null === (a = null === (r = Ue.ZP.appInfo) || void 0 === r ? void 0 : r.appDeveloperInfo) || void 0 === a ? void 0 : a.name
                                        })
                                    }), (0, et.BX)(bo, {
                                        isDesktop: h,
                                        children: ["ending" !== u && (0, et.BX)(et.HY, {
                                            children: [(0, et.BX)(Ao, {
                                                isDesktop: h,
                                                onClick: function() {
                                                    return s && s()
                                                },
                                                children: [(0, et.BX)("div", {
                                                    className: "tryNowContainer",
                                                    children: [(0, et.tZ)("img", {
                                                        alt: f("tryNow"),
                                                        src: (0, Xt.j)(so),
                                                        width: 24,
                                                        height: 24
                                                    }), (0, et.tZ)(Mt.js, {
                                                        children: f(w > 1 || 1 === w ? "tryNowFor" : "tryNowForMinutes", {
                                                            count: b
                                                        })
                                                    })]
                                                }), (0, et.tZ)("span", {
                                                    className: "noInstallMsg",
                                                    children: f("noInstallMsg")
                                                })]
                                            }), (0, et.tZ)(ko, {
                                                isDesktop: h,
                                                children: f("or")
                                            })]
                                        }), (0, et.tZ)(Zo, {
                                            screen: u,
                                            onClick: function() {
                                                var n = sessionStorage.getItem("isEmbeddedFrame");
                                                h ? (y && !(0, Ge.dl)() ? n ? window.open(y, "_parent", "noreferrer") : window.open(y, "_self", "noreferrer") : m(!0), (0, Ve.L9)(Ki.S5, {
                                                    element: "LaunchQRScreen",
                                                    action: "Displayed",
                                                    group: "TryAndDownload"
                                                })) : (0, Ge.Cf)(), "loading" === u ? (0, Ve.L9)(Ki.S5, {
                                                    element: "LaunchScreen",
                                                    action: "InstallNowClicked",
                                                    group: "TryAndDownload"
                                                }) : "ending" === u && (0, Ve.L9)(Ki.S5, {
                                                    element: "TrialEndScreen",
                                                    action: "InstallNowClicked",
                                                    group: "TryAndDownload"
                                                })
                                            },
                                            children: f("install")
                                        })]
                                    }), "ending" !== u && (0, et.BX)(So, {
                                        isDesktop: h,
                                        children: [(0, et.tZ)("li", {
                                            children: f("progressMsg")
                                        }), (0, et.tZ)("li", {
                                            children: f("accountSecurityMsg")
                                        })]
                                    })]
                                }), ("ending" === u && h && !y || "inGame" === u || v) && (0, et.BX)(Eo, {
                                    children: [(0, et.BX)(Po, {
                                        children: [(0, et.BX)(To, {
                                            isAppPage: p,
                                            children: [(0, et.tZ)("img", {
                                                src: Ue.ZP.appInfo.media.icon,
                                                alt: f("appIcon"),
                                                className: "appIcon"
                                            }), (0, et.BX)(Xo, {
                                                children: [(0, et.tZ)(No, {
                                                    children: null === (d = Ue.ZP.appInfo) || void 0 === d ? void 0 : d.appName
                                                }), (0, et.tZ)(Ko, {
                                                    children: null === (c = null === (l = Ue.ZP.appInfo) || void 0 === l ? void 0 : l.appDeveloperInfo) || void 0 === c ? void 0 : c.name
                                                })]
                                            })]
                                        }), (0, et.BX)(Co, {
                                            screen: u,
                                            children: [(0, et.tZ)(Do, {
                                                children: (0, et.tZ)(po.Z, {
                                                    size: 156,
                                                    style: {
                                                        height: "156px",
                                                        width: "156px"
                                                    },
                                                    value: "mac" === x || "ios" === x ? Ue.ZP.appInfo.appleAppStoreUrl : Ue.ZP.appInfo.googlePlayStoreUrl
                                                })
                                            }), (0, et.tZ)(jo, {
                                                children: f("scanPhoneDownload")
                                            })]
                                        })]
                                    }), v && (0, et.BX)(Oo, {
                                        children: [(0, et.tZ)(Io, {
                                            children: f("wantToTry")
                                        }), (0, et.tZ)(xi.z, {
                                            style: {
                                                gap: "4px",
                                                minWidth: "200px"
                                            },
                                            variant: "secondary",
                                            size: "medium",
                                            onClick: function() {
                                                return s && s("bottomBar")
                                            },
                                            text: f("tryNow"),
                                            children: (0, et.tZ)("img", {
                                                alt: f("tryNow"),
                                                src: (0, Xt.j)(uo),
                                                width: 24,
                                                height: 24
                                            })
                                        })]
                                    })]
                                }), "ending" === u && (0, et.tZ)(zo, {
                                    children: f("progressMsg")
                                })]
                            })]
                        })]
                    })
                },
                Ho = t(55072),
                _o = t(78064),
                Fo = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Uo = Qe.ZP.div(Hn || (Hn = Fo(["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"], ["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"]))),
                Wo = {
                    src: "/play/_next/static/media/maintenance.d334ac09.svg",
                    height: 120,
                    width: 120
                },
                Go = function() {
                    var n = (0, Rt.$)().t;
                    return (0, et.tZ)(_o.W2, {
                        style: {
                            zIndex: "13"
                        },
                        children: (0, et.tZ)(_o.VY, {
                            children: (0, et.tZ)(Uo, {
                                children: (0, et.BX)(_o.cy, {
                                    children: [(0, et.tZ)("img", {
                                        src: (0, Xt.j)(Wo),
                                        alt: "now.gg ".concat(n("logo"))
                                    }), (0, Ge.tq)() ? (0, et.tZ)(Mt.T4, {
                                        center: !0,
                                        med: !0,
                                        children: n("underMaintenance")
                                    }) : (0, et.tZ)(Mt.T3, {
                                        center: !0,
                                        med: !0,
                                        children: n("underMaintenance")
                                    }), (0, Ge.tq)() ? (0, et.BX)(Mt.T6, {
                                        style: {
                                            opacity: .8
                                        },
                                        center: !0,
                                        children: [n("currentlyUnderMaintenance"), (0, et.tZ)("br", {}), n("tryAfterSometime")]
                                    }) : (0, et.BX)(Mt.T5, {
                                        style: {
                                            opacity: .8
                                        },
                                        center: !0,
                                        children: [n("currentlyUnderMaintenance"), (0, et.tZ)("br", {}), n("tryAfterSometime")]
                                    })]
                                })
                            })
                        })
                    })
                },
                Vo = t(9008),
                qo = t(40942),
                Qo = t(5152),
                Jo = t(5522),
                $o = t(95509),
                nr = {
                    src: "/play/_next/static/media/bulb-yellow.b465976e.svg",
                    height: 17,
                    width: 16
                },
                er = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                tr = (0, Qe.F4)(_n || (_n = er(["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(180deg);\n    }\n"], ["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(180deg);\n    }\n"]))),
                ir = (0, Qe.F4)(Fn || (Fn = er(["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n"], ["\n    from {\n        -webkit-transform: rotate(0deg);\n    }\n    to {\n        -webkit-transform: rotate(360deg);\n    }\n"]))),
                or = (0, Qe.F4)(Un || (Un = er(["\n    to {\n        clip: rect(auto, auto, auto, auto);\n    }\n"], ["\n    to {\n        clip: rect(auto, auto, auto, auto);\n    }\n"]))),
                rr = Qe.ZP.div(Wn || (Wn = er(["\n    position: fixed;\n    width: 395px;\n    background: linear-gradient(180deg, rgba(36, 63, 139, 0.7) 0%, rgba(30, 115, 157, 0.7) 100%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    border-radius: 0px 8px 8px 0px;\n    display: flex;\n    align-items: center;\n    bottom: ", ";\n    z-index: 99;\n    height: 61px;\n    padding-right: 12px;\n"], ["\n    position: fixed;\n    width: 395px;\n    background: linear-gradient(180deg, rgba(36, 63, 139, 0.7) 0%, rgba(30, 115, 157, 0.7) 100%);\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    border-radius: 0px 8px 8px 0px;\n    display: flex;\n    align-items: center;\n    bottom: ", ";\n    z-index: 99;\n    height: 61px;\n    padding-right: 12px;\n"])), (function(n) {
                    return n.desktop ? "unset" : "50px"
                })),
                ar = Qe.ZP.div(Gn || (Gn = er(["\n    padding-left: 12px;\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    margin-right: 12px;\n    background: rgba(0, 0, 0, 0.2);\n    img {\n        margin-right: 4px;\n    }\n    h6 {\n        margin: 0;\n    }\n    height: 100%;\n"], ["\n    padding-left: 12px;\n    display: flex;\n    align-items: center;\n    padding-right: 20px;\n    margin-right: 12px;\n    background: rgba(0, 0, 0, 0.2);\n    img {\n        margin-right: 4px;\n    }\n    h6 {\n        margin: 0;\n    }\n    height: 100%;\n"]))),
                dr = Qe.ZP.p(Vn || (Vn = er(["\n    margin: 0px 12px 0px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 130%;\n    color: #fff;\n    flex: 1;\n"], ["\n    margin: 0px 12px 0px 0px;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 130%;\n    color: #fff;\n    flex: 1;\n"]))),
                lr = Qe.ZP.p(qn || (qn = er(["\n    width: 30px;\n    height: 30px;\n    margin: 0;\n"], ["\n    width: 30px;\n    height: 30px;\n    margin: 0;\n"]))),
                cr = Qe.ZP.p(Qn || (Qn = er(["\n    position: absolute;\n    right: 12px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 50px;\n    cursor: ", ";;\n    clip: rect(0px, 30px, 30px, 15px);\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: linear;\n    animation-duration: 0.01s;\n    animation-delay: 3s;\n    animation-name: ", ";\n    pointer-events: ", ";\n    margin: 0px;\n    .circle {\n        width: 28px;\n        height: 28px;\n        border: 1px solid #fff;\n        border-radius: 50px;\n        position: absolute;\n        clip: rect(0px, 15px, 30px, 0px);\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: linear;\n        &.left {\n            animation-duration: 6s;\n            animation-name: ", ";\n        }\n        &.right {\n            animation-duration: 3s;\n            animation-name: ", ";\n        }\n      }\n    &:after, &:before {\n        width: 1px;\n        background-color: ", ";\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 16px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"], ["\n    position: absolute;\n    right: 12px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 50px;\n    cursor: ", ";;\n    clip: rect(0px, 30px, 30px, 15px);\n    animation-iteration-count: 1;\n    animation-fill-mode: forwards;\n    animation-timing-function: linear;\n    animation-duration: 0.01s;\n    animation-delay: 3s;\n    animation-name: ", ";\n    pointer-events: ", ";\n    margin: 0px;\n    .circle {\n        width: 28px;\n        height: 28px;\n        border: 1px solid #fff;\n        border-radius: 50px;\n        position: absolute;\n        clip: rect(0px, 15px, 30px, 0px);\n        animation-iteration-count: 1;\n        animation-fill-mode: forwards;\n        animation-timing-function: linear;\n        &.left {\n            animation-duration: 6s;\n            animation-name: ", ";\n        }\n        &.right {\n            animation-duration: 3s;\n            animation-name: ", ";\n        }\n      }\n    &:after, &:before {\n        width: 1px;\n        background-color: ", ";\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 16px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"])), (function(n) {
                    return n.disabled ? "not-allowed" : "pointer"
                }), or, (function(n) {
                    return n.disabled ? "none" : "all"
                }), ir, tr, (function(n) {
                    return n.disabled ? "rgba(255, 255, 255, 0.1)" : "#fff"
                })),
                sr = function() {
                    var n = (0, Ye.useState)(!0),
                        e = n[0],
                        t = n[1],
                        i = !(0, Ge.tq)() && !(0, Ge.Em)() && !(0, Ge.zc)(),
                        o = (0, Ye.useState)(!1),
                        r = o[0],
                        a = o[1],
                        d = (0, Ye.useState)({
                            left: 0,
                            height: 0
                        }),
                        l = d[0],
                        c = d[1],
                        s = (0, Rt.$)().t,
                        u = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        (0, Ve.L9)(Ki.S5, {
                            element: "LoginTip",
                            action: "Displayed",
                            group: "TryAndDownload"
                        });
                        var n = kt.Z.getState().play.videoRef,
                            e = document.getElementById("htmlFrame");
                        if (n && n.current) {
                            var t = n.current;
                            c({
                                left: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().left,
                                height: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().height
                            })
                        } else e && c({
                            left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                            height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                        });
                        a(!0)
                    }), []), setTimeout((function() {
                        t(!1)
                    }), 6e3);
                    return r ? (0, et.BX)(rr, {
                        desktop: i,
                        style: {
                            top: i ? "".concat((window.innerHeight - l.height) / 2 + 100, "px") : "unset",
                            left: l.left
                        },
                        children: [(0, et.BX)(ar, {
                            children: [(0, et.tZ)("img", {
                                alt: s("tip"),
                                src: (0, Xt.j)(nr),
                                height: 16,
                                width: 16
                            }), (0, et.tZ)(Mt.T6, {
                                white: !0,
                                med: !0,
                                children: s("tip")
                            })]
                        }), (0, et.tZ)(dr, {
                            children: s("useEmail")
                        }), (0, et.tZ)(lr, {}), (0, et.BX)(cr, {
                            disabled: e,
                            onClick: function() {
                                u({
                                    type: Et.Z.SHOW_LOGIN_TIP,
                                    payload: {
                                        loginTip: !1
                                    }
                                }), (0, Ve.L9)(Ki.S5, {
                                    element: "LoginTip",
                                    action: "Closed",
                                    group: "TryAndDownload"
                                })
                            },
                            children: [(0, et.tZ)("div", {
                                className: "circle left"
                            }), (0, et.tZ)("div", {
                                className: "circle right"
                            })]
                        })]
                    }) : null
                },
                ur = t(90496),
                pr = t(98219),
                fr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                hr = Qe.ZP.div(Jn || (Jn = fr(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"])), (function(n) {
                    return n.theme.border.radius3
                })),
                gr = Qe.ZP.div($n || ($n = fr(["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"], ["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                vr = Qe.ZP.div(ne || (ne = fr(["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"], ["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"]))),
                mr = Qe.ZP.p(ee || (ee = fr(["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"], ["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"])), (function(n) {
                    return n.theme.spacing.base
                }), (function(n) {
                    return n.theme.colors.white
                })),
                xr = Qe.ZP.p(te || (te = fr(["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"])), (function(n) {
                    return n.theme.spacing.base2
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.spacing.base
                })),
                yr = Qe.ZP.div(ie || (ie = fr(["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"], ["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"])), (function(n) {
                    return n.theme.border.radius3
                }), (function(n) {
                    return n.theme.border.radius3
                })),
                wr = function() {
                    return (wr = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                br = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.I0)(),
                        t = (0, Ye.useRef)(null),
                        i = (0, Ye.useContext)(We.x),
                        o = (0, Ye.useState)(10),
                        r = o[0],
                        a = o[1],
                        d = (0, Ye.useState)(!1),
                        l = d[0],
                        c = d[1],
                        s = (0, Ye.useState)(!1),
                        u = s[0],
                        p = s[1],
                        f = (0, He.v9)((function(n) {
                            return n.ads.rewardedAdsSDK
                        })),
                        h = (0, He.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        g = 18e4,
                        v = !1,
                        m = (0, Ye.useRef)(!1),
                        x = (0, Ye.useRef)(),
                        y = (0, Ye.useRef)(""),
                        w = !1,
                        b = (0, Ye.useRef)(null),
                        A = (0, Ye.useRef)(null),
                        Z = (0, Ye.useRef)(null),
                        k = (0, Ye.useState)(!0),
                        S = k[0],
                        E = k[1],
                        P = (0, Ye.useRef)(!1),
                        T = (0, Ye.useRef)(!1),
                        C = (0, Ye.useRef)(!1);
                    C.current = (0, He.v9)((function(n) {
                        return n.play.keyboardActive
                    }));
                    var D = window.devicePixelRatio,
                        R = kt.Z.getState().play.videoRef,
                        O = 0,
                        I = 0,
                        M = {},
                        L = {},
                        B = function() {
                            Z.current = setTimeout((function() {
                                return t.current && (t.current.style.left = "0", t.current.style.top = "unset", t.current.style.bottom = "0"), f ? (P.current = !0, void(y.current = "loadWrapperAgain")) : C.current ? (T.current = !0, void(y.current = "loadWrapperAgain")) : void("visible" === document.visibilityState ? j() : (v = !0, y.current = "loadWrapperAgain"))
                            }), g)
                        },
                        X = function(n) {
                            var e;
                            if (p(!1), a(10), c(!1), A.current && clearTimeout(A.current), n) try {
                                null === (e = null === x || void 0 === x ? void 0 : x.current) || void 0 === e || e.closePlayer()
                            } catch (t) {}
                            x.current = void 0
                        },
                        N = function(n, e) {
                            n.on("adNoFill", (function() {
                                K(e)
                            })).on("adError", (function() {
                                K(e)
                            })).on("adReady", (function() {
                                var n;
                                null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.setVideoVolume(0), L = window.pbjs.getBidResponses() || {}
                            })).on("adProgress", (function(n, t) {
                                var i, o, r, a = t.milestone;
                                if ("complete" === a) {
                                    if (w) return;
                                    X()
                                } else if ("start" === a) {
                                    null === (i = null === x || void 0 === x ? void 0 : x.current) || void 0 === i || i.setVideoVolume(0), O = (null === (o = null === R || void 0 === R ? void 0 : R.current) || void 0 === o ? void 0 : o.clientHeight) || 0, I = (null === (r = null === R || void 0 === R ? void 0 : R.current) || void 0 === r ? void 0 : r.clientWidth) || 0;
                                    var d = (L[e ? "mid-roll" : "stream"] || {}).bids,
                                        l = (void 0 === d ? [] : d)[0] || {},
                                        s = l.bidder,
                                        u = l.cpm,
                                        p = l.currency,
                                        f = l.netRevenue,
                                        h = l.status,
                                        g = l.statusMessage,
                                        v = l.timeToRespond,
                                        m = l.ttl;
                                    M = {
                                        bidder: s,
                                        cpm: u,
                                        currency: p,
                                        netRevenue: f,
                                        status: h,
                                        statusMessage: g,
                                        timeToRespond: v,
                                        ttl: m
                                    }, (0, Ve.L9)("AdDisplayed", wr({
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: 533,
                                        adHeight: 400,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: O,
                                        androidHeight: I,
                                        pixelRatio: D
                                    }, M)), B(), c(!0), w = !1
                                }
                            })).on("adSkipped", (function() {
                                X(), w = !0
                            }))
                        };

                    function K(n) {
                        var e, t, o, r, a, d;
                        if (O = (null === (e = null === R || void 0 === R ? void 0 : R.current) || void 0 === e ? void 0 : e.clientHeight) || 0, I = (null === (t = null === R || void 0 === R ? void 0 : R.current) || void 0 === t ? void 0 : t.clientWidth) || 0, (0, Ve.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 533,
                                adHeight: 400,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: O,
                                androidHeight: I,
                                pixelRatio: D
                            }), n) {
                            var l = (0, Fe.dl)(i);
                            (0, Ve.L9)("AdRequestedNg", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 533,
                                adHeight: 400,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: O,
                                androidHeight: I,
                                pixelRatio: D,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.tude) || void 0 === o ? void 0 : o.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (r = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === r ? void 0 : r.pubads)
                            }), (0, Ve.L9)("AdRequested", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 533,
                                adHeight: 400,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: O,
                                androidHeight: I,
                                pixelRatio: D,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (a = null === window || void 0 === window ? void 0 : window.tude) || void 0 === a ? void 0 : a.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (d = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === d ? void 0 : d.pubads)
                            }), window.tude.requestInstreamPlayer({
                                divId: "prebid-wrapper-mid-roll",
                                code: "stream",
                                mode: "adOnly",
                                targeting: wr(wr({}, l), {
                                    ads_loc: "video-auto-out"
                                })
                            }).then((function(n) {
                                x.current = n, N(n, !1)
                            })).catch((function(n) {}))
                        } else B(), X()
                    }

                    function j() {
                        var n, e, t, o;
                        if (kt.Z.getState().play.isRecording && (0, Ge.Dx)()) return m.current = !0, void(y.current = "loadWrapperAgain");
                        p(!0), O = (null === (n = null === R || void 0 === R ? void 0 : R.current) || void 0 === n ? void 0 : n.clientHeight) || 0, I = (null === (e = null === R || void 0 === R ? void 0 : R.current) || void 0 === e ? void 0 : e.clientWidth) || 0, (0, Ve.L9)("AdRequestedNg", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: O,
                            androidHeight: I,
                            pixelRatio: D,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                            isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                        }), window.tude.cmd.push((function() {
                            var n, e, t = (0, Fe.dl)(i);
                            (0, Ve.L9)("AdRequested", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 533,
                                adHeight: 400,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: O,
                                androidHeight: I,
                                pixelRatio: D,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                            }), window.tude.requestInstreamPlayer({
                                divId: "prebid-wrapper-mid-roll",
                                code: "mid-roll",
                                mode: "adOnly",
                                targeting: wr(wr({}, t), {
                                    ads_loc: "video-auto-out"
                                })
                            }).then((function(n) {
                                x.current = n, N(n, !0)
                            })).catch((function(n) {}))
                        }))
                    }
                    var z = function() {
                            var n, e;
                            if (kt.Z.getState().play.isRecording && (0, Ge.Dx)()) return m.current = !0, void(y.current = "loadMidRoll");
                            p(!0), (0, Ve.L9)("AdRequestedNg", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: 533,
                                adHeight: 400,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: O,
                                androidHeight: I,
                                pixelRatio: D,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                            }), window.tude.cmd.push((function() {
                                var n, e, t, o, r = (0, Fe.dl)(i);
                                O = (null === (n = null === R || void 0 === R ? void 0 : R.current) || void 0 === n ? void 0 : n.clientHeight) || 0, I = (null === (e = null === R || void 0 === R ? void 0 : R.current) || void 0 === e ? void 0 : e.clientWidth) || 0, (0, Ve.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Video",
                                    adWidth: 533,
                                    adHeight: 400,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: O,
                                    androidHeight: I,
                                    pixelRatio: D,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.tude) || void 0 === t ? void 0 : t.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                                }), window.tude.requestInstreamPlayer({
                                    divId: "prebid-wrapper-mid-roll",
                                    code: "mid-roll",
                                    mode: "adOnly",
                                    targeting: wr(wr({}, r), {
                                        ads_loc: "video-auto-out"
                                    })
                                }).then((function(n) {
                                    x.current = n, N(n, !0)
                                })).catch((function(n) {}))
                            }))
                        },
                        Y = function() {
                            if ("visible" === document.visibilityState) {
                                if (f) return void(P.current = !0);
                                v && (v = !1, "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
                            }
                        };
                    return (0, Ye.useEffect)((function() {
                        f ? X() : P.current && (P.current = !1, "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
                    }), [f]), (0, Ye.useEffect)((function() {
                        !h && m.current ? (m.current = !1, "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j()) : h && (0, Ge.Dx)() && X(!0)
                    }), [h]), (0, Ye.useEffect)((function() {
                        return document.addEventListener("visibilitychange", Y), t.current && (t.current.style.left = "0", t.current.style.top = "unset", t.current.style.bottom = "0"), b.current = setTimeout((function() {
                                return f ? (P.current = !0, void(y.current = "loadMidRoll")) : C.current ? (T.current = !0, void(y.current = "loadMidRoll")) : void("visible" === document.visibilityState ? z() : (v = !0, y.current = "loadMidRoll"))
                            }), g),
                            function() {
                                b.current && clearTimeout(b.current), Z.current && clearTimeout(Z.current), document.removeEventListener("visibilitychange", Y)
                            }
                    }), []), (0, Ye.useEffect)((function() {
                        e({
                            type: Et.Z.SET_MID_ROLL_AD,
                            payload: {
                                midRollAdRef: t
                            }
                        })
                    }), [t]), (0, Ye.useEffect)((function() {
                        return l && (E(!0), A.current = setTimeout((function() {
                                r > 1 ? a(r - 1) : (E(!1), A.current && clearTimeout(A.current))
                            }), 1e3)), e({
                                type: Et.Z.SET_MID_ROLL_AD,
                                payload: {
                                    midRollAdVisible: l
                                }
                            }), l || (0, pr.XW)(),
                            function() {
                                A.current && clearTimeout(A.current)
                            }
                    }), [l, r]), (0, Ye.useEffect)((function() {
                        T.current && (T.current = !1, "loadMidRoll" === y.current ? z() : "loadWrapperAgain" === y.current && j())
                    }), [C.current]), (0, et.BX)(hr, {
                        ref: t,
                        className: "".concat(u ? "show" : "", " ").concat(l ? "started" : ""),
                        children: [(0, et.BX)(gr, {
                            "aria-hidden": "true",
                            className: "".concat(l ? "started" : ""),
                            children: [(0, et.tZ)("p", {
                                children: n("ad")
                            }), S && (0, et.tZ)("p", {
                                children: n("closeAdIn", {
                                    time: r
                                })
                            }), !S && (0, et.tZ)(vr, {
                                "aria-hidden": "true",
                                onClick: function() {
                                    X(!0)
                                },
                                children: (0, et.tZ)(mr, {})
                            }), (0, et.BX)(xr, {
                                children: [(0, et.tZ)("span", {}), (0, et.tZ)("span", {})]
                            })]
                        }), (0, et.tZ)(yr, {
                            id: "prebid-wrapper-mid-roll",
                            className: "".concat(l ? "started" : "")
                        })]
                    })
                },
                Ar = (0, Ye.memo)(br),
                Zr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                kr = (0, Qe.F4)(oe || (oe = Zr(["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(180deg); }\n"], ["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(180deg); }\n  100% { transform: rotate(180deg); }\n"]))),
                Sr = (0, Qe.F4)(re || (re = Zr(["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(0deg); }\n  100% { transform: rotate(180deg); }\n"], ["\n  0% { transform: rotate(0deg); }\n  50% { transform: rotate(0deg); }\n  100% { transform: rotate(180deg); }\n"]))),
                Er = Qe.ZP.div(ae || (ae = Zr(["\n  position: absolute;\n  border: 2px solid rgba(217, 217, 217, 0.01);\n  border-radius: 400px;\n  background: rgba(217, 217, 217, 0.01);\n  backdrop-filter: blur(12px);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  color: #fff;\n  z-index: 9999;\n  text-align: center;\n  .circle {\n    top: 0;\n    left: 0;\n  }\n  .circle.left {\n    position: absolute;\n    clip: rect(0, 80px, 80px, 40px);\n    }\n    .circle.right {\n        position: absolute;\n        clip: rect(0px, 40px, 80px, 0px);\n    }\n    .circle span {\n        width: 80px;\n        height: 80px;\n        border-radius: 100%;\n        position: absolute;\n        border: 2px solid #fff;\n    }\n    .circle.left span {\n        clip: rect(0px, 40px, 80px, 0px);\n        animation: ", " 5s infinite linear;\n    }\n    .circle.right span {\n        clip: rect(0, 80px, 80px, 40px);\n        animation: ", " 5s infinite linear;\n    }\n"], ["\n  position: absolute;\n  border: 2px solid rgba(217, 217, 217, 0.01);\n  border-radius: 400px;\n  background: rgba(217, 217, 217, 0.01);\n  backdrop-filter: blur(12px);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 400;\n  font-size: 14px;\n  color: #fff;\n  z-index: 9999;\n  text-align: center;\n  .circle {\n    top: 0;\n    left: 0;\n  }\n  .circle.left {\n    position: absolute;\n    clip: rect(0, 80px, 80px, 40px);\n    }\n    .circle.right {\n        position: absolute;\n        clip: rect(0px, 40px, 80px, 0px);\n    }\n    .circle span {\n        width: 80px;\n        height: 80px;\n        border-radius: 100%;\n        position: absolute;\n        border: 2px solid #fff;\n    }\n    .circle.left span {\n        clip: rect(0px, 40px, 80px, 0px);\n        animation: ", " 5s infinite linear;\n    }\n    .circle.right span {\n        clip: rect(0, 80px, 80px, 40px);\n        animation: ", " 5s infinite linear;\n    }\n"])), kr, Sr),
                Pr = Qe.ZP.div(de || (de = Zr(["\n    display: flex;\n    flex-direction: column;\n    align: items: center;\n    justify-content: center;\n    .timeLeft {\n        font-weight: 600;\n        font-size: 16px;\n    }\n    p {\n        margin: 0;\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align: items: center;\n    justify-content: center;\n    .timeLeft {\n        font-weight: 600;\n        font-size: 16px;\n    }\n    p {\n        margin: 0;\n    }\n"]))),
                Tr = function() {
                    var n = (0, Ye.useState)(5),
                        e = n[0],
                        t = n[1],
                        i = (0, Ye.useState)({
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0
                        }),
                        o = i[0],
                        r = i[1],
                        a = (0, He.v9)((function(n) {
                            return n.play.orientation
                        }));
                    return (0, Ye.useLayoutEffect)((function() {
                        var n = kt.Z.getState().play.videoRef,
                            e = document.getElementById("htmlFrame");
                        if (n && n.current) {
                            var t = n.current;
                            r({
                                left: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().left,
                                top: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().top,
                                height: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().height,
                                width: null === t || void 0 === t ? void 0 : t.getBoundingClientRect().width
                            })
                        } else e && r({
                            left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                            top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                            height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height,
                            width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width
                        })
                    }), []), (0, Ye.useEffect)((function() {
                        var n = setTimeout((function() {
                            e > 0 ? t(e - 1) : clearTimeout(n)
                        }), 1e3);
                        return function() {
                            return clearTimeout(n)
                        }
                    }), [e]), (0, et.BX)(Er, {
                        style: {
                            top: (0, Ge.tq)() ? a === qe.cj.portrait ? "".concat(o.top + o.height - 120, "px") : "".concat(o.left + o.width - 120, "px") : "".concat(o.top + 10, "px"),
                            left: (0, Ge.tq)() ? a === qe.cj.portrait ? "".concat(o.left + 20, "px") : "".concat(o.top + 20, "px") : "".concat(o.left + 10, "px")
                        },
                        children: [(0, et.tZ)("div", {
                            className: "circle left rotate",
                            children: (0, et.tZ)("span", {})
                        }), (0, et.tZ)("div", {
                            className: "circle right rotate",
                            children: (0, et.tZ)("span", {})
                        }), (0, et.BX)(Pr, {
                            children: [(0, et.tZ)("p", {
                                children: "Ad in"
                            }), (0, et.tZ)("p", {
                                className: "timeLeft",
                                children: e
                            })]
                        })]
                    })
                },
                Cr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Dr = Qe.ZP.div(le || (le = Cr(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  pointer-events: all;\n  background: #000;\n  z-index: -1;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n"], ["\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  pointer-events: all;\n  background: #000;\n  z-index: -1;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n"]))),
                Rr = Qe.ZP.div(ce || (ce = Cr(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"]))),
                Or = function() {
                    return (Or = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                Ir = function() {
                    var n, e, t, i = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        o = (0, Ye.useRef)(null),
                        r = (0, Ye.useContext)(We.x),
                        a = (0, Ye.useState)(!1),
                        d = a[0],
                        l = a[1],
                        c = (0, Ye.useState)(!1),
                        s = c[0],
                        u = c[1],
                        p = (0, Ye.useState)(!1),
                        f = p[0],
                        h = p[1],
                        g = 24e4,
                        v = !1,
                        m = (0, Ye.useRef)(""),
                        x = (0, Ye.useRef)(),
                        y = !1,
                        w = (0, Ye.useRef)(null),
                        b = window.devicePixelRatio,
                        A = 0,
                        Z = 0,
                        k = {},
                        S = {},
                        E = function() {
                            u(!1), l(!1)
                        },
                        P = function() {
                            t = setTimeout((function() {
                                "visible" === document.visibilityState ? R() : (v = !0, m.current = "loadWrapperAgain")
                            }), g), e = setTimeout((function() {
                                h(!0)
                            }), g - 5e3)
                        },
                        T = function() {
                            var n, e;
                            (0, Ge.tq)() ? (n = i === qe.cj.portrait ? window.innerWidth : window.innerHeight, e = i === qe.cj.portrait ? window.innerHeight : window.innerWidth) : (n = window.innerWidth, e = window.innerHeight);
                            var t, r, a = (t = e, Math.ceil(t * (16 / 9))),
                                d = e;
                            a > d && (r = a = n, d = Math.ceil(r / (16 / 9))), o.current && (o.current.style.width = "".concat(a, "px"), o.current.style.height = "".concat(d, "px")),
                                function(n, e) {
                                    A = n, Z = e
                                }(a, d), clearTimeout(w.current), w.current = setTimeout((function() {
                                    var n;
                                    E(), (0, Ve.L9)("AdRequestTimeout", {
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: A,
                                        adHeight: Z,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        pixelRatio: b
                                    }), P(), null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.closePlayer()
                                }), 15e3)
                        },
                        C = function() {
                            (0, Ve.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: A,
                                adHeight: Z,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                pixelRatio: b
                            }), clearTimeout(w.current), P(), E()
                        },
                        D = function(n) {
                            n.on("adError", (function() {
                                g = 3e4, C()
                            })).on("adReady", (function() {
                                var n;
                                null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.setVideoVolume(1), clearTimeout(w.current), clearTimeout(w.current), S = window.pbjs.getBidResponses(), w.current = setTimeout((function() {
                                    var n;
                                    E(), (0, Ve.L9)("AdRequestTimeout", {
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: A,
                                        adHeight: Z,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        pixelRatio: b
                                    }), P(), null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n || n.closePlayer()
                                }), 1e4)
                            })).on("adNoFill", (function() {
                                g = 3e4, C()
                            })).on("adProgress", (function(n, e) {
                                var t, i = e.milestone;
                                if ("complete" === i) {
                                    if (y) return;
                                    E()
                                } else if ("start" === i) {
                                    null === (t = null === x || void 0 === x ? void 0 : x.current) || void 0 === t || t.setVideoVolume(1), clearTimeout(w.current);
                                    var o = (S.stream || {}).bids,
                                        r = (void 0 === o ? [] : o)[0] || {},
                                        a = r.bidder,
                                        d = r.cpm,
                                        c = r.currency,
                                        s = r.netRevenue,
                                        u = r.status,
                                        p = r.statusMessage,
                                        f = r.timeToRespond,
                                        h = r.ttl;
                                    k = {
                                        bidder: a,
                                        cpm: d,
                                        currency: c,
                                        netRevenue: s,
                                        status: u,
                                        statusMessage: p,
                                        timeToRespond: f,
                                        ttl: h
                                    }, (0, Ve.L9)("AdDisplayed", Or({
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: A,
                                        adHeight: Z,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        pixelRatio: b
                                    }, k)), g = 24e4, P(), l(!0), y = !1
                                }
                            })).on("adSkipped", (function() {
                                E(), y = !0
                            }))
                        };

                    function R() {
                        var n, t;
                        T(), u(!0), (0, Ve.L9)("AdRequestedNg", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: A,
                            adHeight: Z,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            pixelRatio: b,
                            isTabVisible: "visible" === document.visibilityState,
                            isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                            isGptLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads)
                        }), window.tude.cmd.push((function() {
                            var n, t, i = (0, Fe.dl)(r);
                            (0, Ve.L9)("AdRequested", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: A,
                                adHeight: Z,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                pixelRatio: b,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads)
                            }), window.tude.requestInstreamPlayer({
                                divId: "prebid-wrapper-mid-roll-fullscreen",
                                code: "stream",
                                mode: "adOnly",
                                targeting: Or(Or({}, i), {
                                    ads_loc: "video-auto-out"
                                }),
                                playerOptions: {
                                    aspectRatio: "16:9"
                                }
                            }).then((function(n) {
                                x.current = n, D(n)
                            })).catch((function(n) {})), clearTimeout(e), h(!1)
                        }))
                    }
                    var O = function() {
                            var n, t;
                            T(), u(!0), (0, Ve.L9)("AdRequestedNg", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: A,
                                adHeight: Z,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                pixelRatio: b,
                                isTabVisible: "visible" === document.visibilityState,
                                isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                isGptLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads)
                            }), window.tude.cmd.push((function() {
                                var n, t, i = (0, Fe.dl)(r);
                                (0, Ve.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Video",
                                    adWidth: A,
                                    adHeight: Z,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    pixelRatio: b,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (t = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === t ? void 0 : t.pubads)
                                }), window.tude.requestInstreamPlayer({
                                    divId: "prebid-wrapper-mid-roll-fullscreen",
                                    code: "stream",
                                    mode: "adOnly",
                                    targeting: Or(Or({}, i), {
                                        ads_loc: "video-auto-out"
                                    }),
                                    playerOptions: {
                                        aspectRatio: "16:9"
                                    }
                                }).then((function(n) {
                                    x.current = n, D(n)
                                })).catch((function(n) {})), clearTimeout(e), h(!1)
                            }))
                        },
                        I = function() {
                            "visible" === document.visibilityState && v && (v = !1, "loadMidRoll" === m.current ? O() : "loadWrapperAgain" === m.current && R())
                        };
                    return (0, Ye.useEffect)((function() {
                        return document.addEventListener("visibilitychange", I), n = setTimeout((function() {
                                "visible" === document.visibilityState ? O() : (v = !0, m.current = "loadMidRoll")
                            }), g), e = setTimeout((function() {
                                h(!0)
                            }), g - 5e3),
                            function() {
                                clearTimeout(n), clearTimeout(t), clearTimeout(e), clearTimeout(w.current), document.removeEventListener("visibilitychange", I)
                            }
                    }), []), (0, et.BX)(et.HY, {
                        children: [f && (0, et.tZ)(Tr, {}), (0, et.tZ)(Dr, {
                            className: "".concat(s ? "show" : "", " ").concat(d ? "started" : ""),
                            children: (0, et.tZ)(Rr, {
                                ref: o,
                                id: "prebid-wrapper-mid-roll-fullscreen",
                                className: "".concat(d ? "started" : "")
                            })
                        })]
                    })
                },
                Mr = (0, Ye.memo)(Ir),
                Lr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Br = (0, Qe.iv)(se || (se = Lr(["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"], ["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"])), (function(n) {
                    return n.theme.colors.black40
                })),
                Xr = Qe.ZP.div(ue || (ue = Lr(["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"], ["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"])), (function(n) {
                    return n.theme.colors.black
                }), (function(n) {
                    return n.theme.colors.black70
                })),
                Nr = Qe.ZP.div(pe || (pe = Lr(["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"], ["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"])), Br),
                Kr = function() {
                    return (Kr = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                jr = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.I0)(),
                        t = (0, Ye.useContext)(We.x),
                        i = (0, Ye.useState)(!1),
                        o = i[0],
                        r = i[1],
                        a = (0, Ye.useState)(!1),
                        d = a[0],
                        l = a[1],
                        c = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        s = (0, Ye.useRef)(null),
                        u = (0, Ye.useRef)(),
                        p = (0, Ye.useRef)(null),
                        f = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        h = (0, He.v9)((function(n) {
                            return n.play.isExperienceEnded
                        })),
                        g = (0, He.v9)((function(n) {
                            return n.play.muted
                        })),
                        v = !1,
                        m = 0,
                        x = 0,
                        y = 0,
                        w = 0,
                        b = window.devicePixelRatio,
                        A = {},
                        Z = function() {
                            var n, e, t = Math.min(window.innerWidth, window.innerHeight),
                                i = Math.max(window.innerWidth, window.innerHeight),
                                o = c === qe.cj.portrait ? t - 20 : i - 20,
                                r = c === qe.cj.portrait ? i : t - 50,
                                a = (n = r, Math.ceil(1.33 * n)),
                                d = r;
                            a > o && (e = a = o, d = Math.ceil(e / 1.33)), s.current && (s.current.style.width = "".concat(a, "px"), s.current.style.height = "".concat(d, "px")), m = a, x = d
                        },
                        k = function() {
                            var n;
                            r(!1), (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.muted) && !g && (f.current.muted = !1), e({
                                type: Et.Z.SET_EXPERIENCE_STATE,
                                payload: {
                                    isExperienceEnded: !1
                                }
                            }), l(!1)
                        },
                        S = function() {
                            var n, e;
                            y = (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0, w = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0, (0, Ve.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Video",
                                adWidth: m,
                                adHeight: x,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: y,
                                androidHeight: w,
                                pixelRatio: b
                            }), k()
                        },
                        E = function(n) {
                            n.on("adNoFill", (function() {
                                S()
                            })).on("adReady", (function() {
                                ! function() {
                                    var n, e, t;
                                    null === (n = null === u || void 0 === u ? void 0 : u.current) || void 0 === n || n.setVideoVolume(0), y = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientHeight) || 0, w = (null === (t = null === f || void 0 === f ? void 0 : f.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                                    var i = (window.pbjs.getBidResponses().stream || {}).bids,
                                        o = (void 0 === i ? [] : i)[0] || {},
                                        r = o.bidder,
                                        a = o.cpm,
                                        d = o.currency,
                                        l = o.netRevenue,
                                        c = o.status,
                                        s = o.statusMessage,
                                        p = o.timeToRespond,
                                        h = o.ttl;
                                    A = {
                                        bidder: r,
                                        cpm: a,
                                        currency: d,
                                        netRevenue: l,
                                        status: c,
                                        statusMessage: s,
                                        timeToRespond: p,
                                        ttl: h
                                    }, (0, Ve.L9)("AdDisplayed", Kr({
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: m,
                                        adHeight: x,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: y,
                                        androidHeight: w,
                                        pixelRatio: b
                                    }, A))
                                }()
                            })).on("adError", (function() {
                                S()
                            })).on("adProgress", (function(n, e) {
                                var t, i = e.milestone;
                                if ("complete" === i) {
                                    if (v) return;
                                    k()
                                } else "start" === i && (p.current && clearTimeout(p.current), l(!1), r(!0), v = !1, null === (t = null === u || void 0 === u ? void 0 : u.current) || void 0 === t || t.setVideoVolume(0))
                            })).on("adSkipped", (function() {
                                k(), v = !0
                            }))
                        };
                    return (0, Ye.useEffect)((function() {
                        var n;
                        return h && (l(!0), p.current = setTimeout((function() {
                                l(!1), e({
                                    type: Et.Z.SET_EXPERIENCE_STATE,
                                    payload: {
                                        isExperienceEnded: !1
                                    }
                                })
                            }), 4e3), Z(), !1 === (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.muted) && (f.current.muted = !0), function() {
                                var n, e, i, o;
                                Z(), (0, Ve.L9)("AdRequestedNg", {
                                    adContext: "Midroll",
                                    adType: "Video",
                                    adWidth: m,
                                    adHeight: x,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                                    androidHeight: (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                                    pixelRatio: b,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                                }), window.tude.cmd.push((function() {
                                    var n, e, i, o, r = (0, Fe.dl)(t);
                                    y = (null === (n = null === f || void 0 === f ? void 0 : f.current) || void 0 === n ? void 0 : n.clientHeight) || 0, w = (null === (e = null === f || void 0 === f ? void 0 : f.current) || void 0 === e ? void 0 : e.clientWidth) || 0, (0, Ve.L9)("AdRequested", {
                                        adContext: "Midroll",
                                        adType: "Video",
                                        adWidth: m,
                                        adHeight: x,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: y,
                                        androidHeight: w,
                                        pixelRatio: b,
                                        isTabVisible: "visible" === document.visibilityState,
                                        isTudeLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                                        isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                                    }), window.tude.requestInstreamPlayer({
                                        divId: "prebid-wrapper-mid-roll-mobile",
                                        code: "mid-roll",
                                        mode: "adOnly",
                                        targeting: Kr(Kr({}, r), {
                                            ads_loc: "video-auto-out"
                                        })
                                    }).then((function(n) {
                                        E(n)
                                    })).catch((function(n) {}))
                                }))
                            }()),
                            function() {
                                p.current && clearTimeout(p.current)
                            }
                    }), [h]), (0, et.tZ)(Xr, {
                        className: "".concat(o ? "started " : "").concat(d ? "blurBG " : ""),
                        children: (0, et.BX)(Nr, {
                            ref: s,
                            children: [(0, et.tZ)("div", {
                                className: "videoAd",
                                id: "prebid-wrapper-mid-roll-mobile"
                            }), o && (0, et.tZ)("span", {
                                className: "adText",
                                children: n("ad")
                            })]
                        })
                    })
                },
                zr = (0, Ye.memo)(jr),
                Yr = t(74803),
                Hr = {
                    src: "/play/_next/static/media/muted.cc92657a.svg",
                    height: 24,
                    width: 24
                },
                _r = {
                    src: "/play/_next/static/media/unmuted.cb7db131.svg",
                    height: 24,
                    width: 24
                },
                Fr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ur = Qe.ZP.div(fe || (fe = Fr(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.spacing.base4
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
                }), (function(n) {
                    return n.theme.border.radius
                })),
                Wr = Qe.ZP.p(he || (he = Fr(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
                })),
                Gr = function(n) {
                    var e = n.adsMuted,
                        t = n.handleVolume,
                        i = n.isInteracted,
                        o = n.isMobileMidroll,
                        r = (0, Rt.$)().t;
                    return (0, et.BX)(Ur, {
                        className: "".concat(i ? "hideText " : "").concat(o ? "isMobileMidroll " : ""),
                        children: [(0, et.tZ)("p", {
                            children: r((0, Ge.tq)() ? "tapToUnmute" : "clickToUnmute")
                        }), (0, et.tZ)(Wr, {
                            onClick: t,
                            children: (0, et.tZ)("img", {
                                alt: r(e ? "mutedSoundIcon" : "soundIcon"),
                                src: (0, Xt.j)(e ? Hr : _r)
                            })
                        })]
                    })
                },
                Vr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                qr = (0, Qe.F4)(ge || (ge = Vr(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))),
                Qr = Qe.ZP.div(ve || (ve = Vr(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .hide{\n    visibility: hidden;\n  }\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .hide{\n    visibility: hidden;\n  }\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"]))),
                Jr = Qe.ZP.div(me || (me = Vr(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"]))),
                $r = Qe.ZP.div(xe || (xe = Vr(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))),
                na = (Qe.ZP.img(ye || (ye = Vr(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
                    return n.theme.spacing.base2
                }), (function(n) {
                    return n.theme.border.radius
                })), Qe.ZP.div(we || (we = Vr(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.spacing.base6
                })), Qe.ZP.div(be || (be = Vr(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
                    return n.theme.border.radius3
                }), (function(n) {
                    return n.theme.colors.white
                }), qr), Qe.ZP.div(Ae || (Ae = Vr(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"])), (function(n) {
                    return n.theme.spacing.base4
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
                }), (function(n) {
                    return n.theme.border.radius
                })), Qe.ZP.p(Ze || (Ze = Vr(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
                })), Qe.ZP.div(ke || (ke = Vr(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'])))),
                ea = Qe.ZP.div(Se || (Se = Vr(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  visibility: hidden;\n  &.adVisible{\n    z-index: 20;\n    visibility: visible;\n  }\n  &.desktop{\n    position: fixed;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #000;\n  visibility: hidden;\n  &.adVisible{\n    z-index: 20;\n    visibility: visible;\n  }\n  &.desktop{\n    position: fixed;\n  }\n"]))),
                ta = t(54036),
                ia = function() {
                    return (ia = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                oa = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                ra = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                aa = function() {
                    var n = (0, Ye.useContext)(We.x),
                        e = (0, Ye.useState)(!1),
                        t = e[0],
                        i = e[1],
                        o = (0, Ye.useState)(!1),
                        r = o[0],
                        a = o[1],
                        d = (0, Ye.useState)(!1),
                        l = d[0],
                        c = d[1],
                        s = (0, Ye.useState)(4),
                        u = s[0],
                        p = s[1],
                        f = (0, Ye.useState)(!0),
                        h = f[0],
                        g = f[1],
                        v = (0, Ye.useState)(!1),
                        m = v[0],
                        x = v[1],
                        y = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        w = (0, He.v9)((function(n) {
                            return n.ads.fallbackDisplayed
                        })),
                        b = (0, He.v9)((function(n) {
                            return n.ads.rewardedAdsSDK
                        })),
                        A = (0, He.v9)((function(n) {
                            return n.ads.rewardedAdType
                        })),
                        Z = (0, He.v9)((function(n) {
                            return n.ads.sdkType
                        })),
                        k = (0, He.v9)((function(n) {
                            return n.play.muted
                        })),
                        S = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        E = (0, Ye.useRef)(null),
                        P = (0, Ye.useRef)(null),
                        T = (0, Ye.useRef)(null),
                        C = (0, Ye.useRef)(null),
                        D = (0, Ye.useRef)(null),
                        R = (0, Ye.useRef)(),
                        O = (0, Ye.useRef)(!1),
                        I = (0, Ye.useRef)(0),
                        M = (0, Ye.useRef)(0),
                        L = (0, Ye.useRef)(0),
                        B = (0, Ye.useRef)(0),
                        X = (0, Ye.useRef)({}),
                        N = (0, He.I0)(),
                        K = window.devicePixelRatio,
                        j = function() {
                            var n, e;
                            (0, Ge.tq)() ? (n = y === qe.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20, e = y === qe.cj.portrait ? window.innerHeight - 100 : window.innerWidth) : (n = window.innerWidth - 20, e = window.innerHeight);
                            var t, i, o = (t = e, Math.ceil(1.33 * t)),
                                r = e;
                            o > n && (i = o = n, r = Math.ceil(i / 1.33)), E.current && (E.current.style.width = "".concat(o, "px"), E.current.style.height = "".concat(r, "px")),
                                function(n, e) {
                                    I.current = n, M.current = e
                                }(o, r)
                        },
                        z = function(n) {
                            var e = Z ? "".concat(n, "::").concat(Z) : n;
                            (0, Yr.f)(e)
                        },
                        Y = function(n) {
                            void 0 === n && (n = !0), x(!1), i(!1), c(!1), n && (A === Ki.fz.rewarded ? ((0, Ve.L9)("RewardEarned"), z("ADS::userEarnedReward"), z("ADS::adsshowstatus::dismiss")) : A === Ki.fz.interstitial && z("ADS::interstitialAdshowstatus::dismiss")), N({
                                type: _e.Z.UPDATE_REWARDED_SDK_STATE,
                                payload: {
                                    rewardedAdsSDK: !1,
                                    rewardedAdType: null,
                                    fallbackDisplayed: !1
                                }
                            }), k || S && S.current && (S.current.muted = !1)
                        },
                        H = function() {
                            var n, e;
                            L.current = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0, B.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0, x(!1), clearTimeout(P.current), (0, Ve.L9)("AdNotFilled", {
                                adContext: "Ingame",
                                adType: "Video",
                                adWidth: I.current,
                                adHeight: M.current,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: L.current,
                                androidHeight: B.current,
                                pixelRatio: K
                            }), i(!0)
                        },
                        _ = function() {
                            return oa(void 0, void 0, void 0, (function() {
                                var e, t, i, o;
                                return ra(this, (function(r) {
                                    return j(), clearTimeout(P.current), P.current = setTimeout((function() {
                                        var n;
                                        null === (n = null === R || void 0 === R ? void 0 : R.current) || void 0 === n || n.closePlayer(), H()
                                    }), 15e3), (0, Ve.L9)("AdRequestedNg", {
                                        adContext: "Ingame",
                                        adType: "Video",
                                        adWidth: null === I || void 0 === I ? void 0 : I.current,
                                        adHeight: null === M || void 0 === M ? void 0 : M.current,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                                        androidHeight: (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                                        pixelRatio: K,
                                        isTabVisible: "visible" === document.visibilityState,
                                        isTudeLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                                        isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                                    }), window.tude.cmd.push((function() {
                                        var e, t, i, o, r = (0, Fe.dl)(n);
                                        L.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0, B.current = (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0, (0, Ve.L9)("AdRequested", {
                                            adContext: "Ingame",
                                            adType: "Video",
                                            adWidth: I.current,
                                            adHeight: M.current,
                                            viewPortInnerWidth: window.innerWidth,
                                            viewPortInnerHeight: window.innerHeight,
                                            androidWidth: L.current,
                                            androidHeight: B.current,
                                            pixelRatio: K,
                                            isTabVisible: "visible" === document.visibilityState,
                                            isTudeLoaded: "undefined" !== typeof(null === (i = null === window || void 0 === window ? void 0 : window.tude) || void 0 === i ? void 0 : i.refreshAdsViaDivMappings),
                                            isGptLoaded: "undefined" !== typeof(null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.pubads)
                                        }), window.tude.requestInstreamPlayer({
                                            divId: "rewarded-wrapper",
                                            code: "stream",
                                            mode: "adOnly",
                                            targeting: ia(ia({}, r), {
                                                ads_loc: "video-ctp-rw"
                                            })
                                        }).then((function(n) {
                                            R.current = n,
                                                function(n) {
                                                    n.on("adNoFill", (function() {
                                                        H()
                                                    })).on("adError", (function() {
                                                        H()
                                                    })).on("adReady", (function() {
                                                        var n, e, t;
                                                        g(!1), null === (n = null === R || void 0 === R ? void 0 : R.current) || void 0 === n || n.setVideoVolume(1), X.current = window.pbjs.getBidResponses(), L.current = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientHeight) || 0, B.current = (null === (t = null === S || void 0 === S ? void 0 : S.current) || void 0 === t ? void 0 : t.clientWidth) || 0, clearTimeout(P.current), P.current = setTimeout((function() {
                                                            var n;
                                                            null === (n = null === R || void 0 === R ? void 0 : R.current) || void 0 === n || n.closePlayer(), H()
                                                        }), 1e4)
                                                    })).on("adSkipped", (function() {
                                                        Y(), O.current = !0
                                                    })).on("adProgress", (function(n, e) {
                                                        var t, i = e.milestone;
                                                        if ("complete" === i) {
                                                            if (x(!1), O.current) return;
                                                            Y()
                                                        } else if ("start" === i) {
                                                            clearTimeout(P.current), A === Ki.fz.rewarded ? z("ADS::adsshowstatus::visible") : A === Ki.fz.interstitial && z("ADS::interstitialAdshowstatus::visible"), g(!1), x(!0), null === (t = null === R || void 0 === R ? void 0 : R.current) || void 0 === t || t.setVideoVolume(1), O.current = !1;
                                                            var o = (X.current.stream || {}).bids,
                                                                r = (void 0 === o ? [] : o)[0] || {},
                                                                a = {
                                                                    bidder: r.bidder,
                                                                    cpm: r.cpm,
                                                                    currency: r.currency,
                                                                    netRevenue: r.netRevenue,
                                                                    status: r.status,
                                                                    statusMessage: r.statusMessage,
                                                                    timeToRespond: r.timeToRespond,
                                                                    ttl: r.ttl
                                                                };
                                                            (0, Ve.L9)("AdDisplayed", ia({
                                                                adContext: "Ingame",
                                                                adType: "Video",
                                                                adWidth: I.current,
                                                                adHeight: M.current,
                                                                viewPortInnerWidth: window.innerWidth,
                                                                viewPortInnerHeight: window.innerHeight,
                                                                androidWidth: L.current,
                                                                androidHeight: B.current,
                                                                pixelRatio: K
                                                            }, a))
                                                        }
                                                    }))
                                                }(n)
                                        })).catch((function(n) {})), k || S && S.current && (S.current.muted = !0)
                                    })), [2]
                                }))
                            }))
                        };
                    return (0, Ye.useEffect)((function() {
                        return m && ((0, Ge.tq)() && y === qe.cj.landscape ? C.current = setTimeout((function() {
                                u >= 1 ? p(u - 1) : C.current && clearTimeout(C.current), a(!0)
                            }), 1e3) : a(!0)),
                            function() {
                                C.current && clearTimeout(C.current)
                            }
                    }), [m, u]), (0, Ye.useEffect)((function() {
                        if (w) {
                            A === Ki.fz.rewarded ? z("ADS::adsshowstatus::visible") : A === Ki.fz.interstitial && z("ADS::interstitialAdshowstatus::visible");
                            var n = A === Ki.fz.rewarded ? 5e3 : 1e4;
                            D.current = setTimeout((function() {
                                c(!0)
                            }), n), T.current = setTimeout((function() {
                                Y()
                            }), n + 1e4)
                        } else t && Y(!1);
                        return function() {
                            clearTimeout(T.current), clearTimeout(D.current)
                        }
                    }), [w]), (0, Ye.useEffect)((function() {
                        if ("visible" !== document.visibilityState) return A === Ki.fz.rewarded ? z("ADS::rewardedAdLoad::fail") : A === Ki.fz.interstitial && z("ADS::interstitialAdLoad::fail"), void Y(!1);
                        if (t) {
                            var e = (0, Fe.dl)(n);
                            (0, ta.Bd)(), (0, ta.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded"), window.tude.cmd.push((function() {
                                (0, ta.Ry)(), (0, ta.JD)("div-gpt-ad-rewarded", "div-gpt-ad-rewarded", "2"), window.tude.refreshAdsViaDivMappings([{
                                    divId: "div-gpt-ad-rewarded",
                                    baseDivId: "pb-slot-display-fb",
                                    targeting: ia(ia({}, e), {
                                        ads_loc: "display-fallback"
                                    })
                                }])
                            }))
                        }
                    }), [t]), (0, Ye.useEffect)((function() {
                        b && A && _()
                    }), [b]), (0, et.BX)(ea, {
                        className: "".concat(b ? "adVisible " : "").concat((0, Ge.tq)() ? "" : "desktop "),
                        children: [!t && m && (0, et.tZ)(ut, {
                            animateSmall: !0
                        }), (0, et.tZ)(Qr, {
                            className: t ? "hide" : "",
                            ref: E,
                            id: "rewarded-wrapper"
                        }), m && !t && (0, et.tZ)(Gr, {
                            isInteracted: r,
                            handleVolume: function() {
                                a(!0), window.tude.setVideoVolume(h ? 1 : 0), g(!h)
                            },
                            adsMuted: h
                        }), t && (0, et.BX)(Jr, {
                            children: [(0, et.tZ)($r, {
                                id: "div-gpt-ad-rewarded"
                            }), l && (0, et.tZ)(na, {
                                onClick: function() {
                                    return Y()
                                }
                            })]
                        })]
                    })
                },
                da = t(24870),
                la = t(939),
                ca = t(24047),
                sa = function(n) {
                    var e = n.str,
                        t = void 0 === e ? "" : e,
                        i = n.enter,
                        o = void 0 === i ? 0 : i,
                        r = n.del,
                        a = void 0 === r ? 0 : r,
                        d = n.composing,
                        l = void 0 !== d && d,
                        c = new ArrayBuffer(4 + 2 * t.length),
                        s = new Uint8Array(c);
                    s[0] = 103, s[1] = a, s[2] = o, s[3] = Number(l);
                    for (var u = 4, p = 0; p < t.length; p += 1) {
                        var f = t[p].charCodeAt(0),
                            h = new Uint16Array([f]),
                            g = new Uint8Array(h.buffer, h.byteOffset, h.byteLength);
                        s[u] = g[0], s[u += 1] = g[1], u += 1
                    }(0, Hi.fr)(c)
                },
                ua = function() {
                    var n = (0, Ye.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = la.fl.lastX + 20,
                        o = la.fl.lastY + 20,
                        r = (0, Ye.useState)(i),
                        a = r[0],
                        d = (r[1], (0, Ye.useState)(o)),
                        l = d[0],
                        c = (d[1], (0, Ye.useRef)(null));
                    (0, Ye.useEffect)((function() {
                        (null === c || void 0 === c ? void 0 : c.current) && c.current.focus()
                    }), [c]);
                    var s = (0, Ye.useCallback)((function(n) {
                            t(!0), sa({
                                del: 0,
                                composing: !0
                            })
                        }), [e]),
                        u = (0, Ye.useCallback)((function(n) {
                            e && sa({
                                str: n.data,
                                composing: e
                            })
                        }), [e]),
                        p = (0, Ye.useCallback)((function(n) {
                            da.un.ended = !0, ca.q$.justEnded = !0, t(!1), sa({
                                str: n.data,
                                composing: !1
                            })
                        }), [e]);
                    return (0, et.tZ)("input", {
                        ref: c,
                        style: {
                            position: "absolute",
                            zIndex: 1e6,
                            left: a,
                            top: l,
                            opacity: 0
                        },
                        onBlur: function(n) {
                            setTimeout((function() {
                                var e, t;
                                da.be.isOpen && !kt.Z.getState().play.uiTextfieldInFocus && -1 === (null === (t = null === (e = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === e ? void 0 : e.className) || void 0 === t ? void 0 : t.indexOf("_hj-")) && n.target.focus()
                            }), 100)
                        },
                        onCompositionStart: s,
                        onCompositionUpdate: u,
                        onCompositionEnd: p,
                        type: "text",
                        autoComplete: "off"
                    })
                },
                pa = t(22572),
                fa = t(25675),
                ha = t(88962),
                ga = t(62825),
                va = t(59930),
                ma = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                xa = ((0, Qe.iv)(Ee || (Ee = ma(["\n  width: 480px;\n  overflow: auto;\n"], ["\n  width: 480px;\n  overflow: auto;\n"]))), Qe.ZP.div(Pe || (Pe = ma(["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n    .mobilePortrait & {\n      margin: 0px;\n      flex: none;\n    }\n  }\n  .mobilePortrait & {\n    flex-direction: column;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n    .mobilePortrait & {\n      margin: 0px;\n      flex: none;\n    }\n  }\n  .mobilePortrait & {\n    flex-direction: column;\n    align-items: center;\n  }\n"])))),
                ya = Qe.ZP.div(Te || (Te = ma(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  color: ", ";\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n    font-weight: 500;\n    .mobilePortrait & {\n      text-align: center;\n      margin: 24px 0px 8px 0px;\n    }\n  }\n\n  p {\n    font-size: 16px;\n    margin-bottom: 22px;\n    color:", ";\n    .mobilePortrait & {\n      text-align: center;\n      margin-bottom: 24px;\n    }\n  }\n\n  button {\n    margin-top: auto;\n    .mobilePortrait & {\n      max-width: 100%;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  color: ", ";\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n    font-weight: 500;\n    .mobilePortrait & {\n      text-align: center;\n      margin: 24px 0px 8px 0px;\n    }\n  }\n\n  p {\n    font-size: 16px;\n    margin-bottom: 22px;\n    color:", ";\n    .mobilePortrait & {\n      text-align: center;\n      margin-bottom: 24px;\n    }\n  }\n\n  button {\n    margin-top: auto;\n    .mobilePortrait & {\n      max-width: 100%;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white80
                })),
                wa = Qe.ZP.div(Ce || (Ce = ma(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 56px;\n\n  button {\n    width: 100%;\n  }\n\n  i {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 56px;\n\n  button {\n    width: 100%;\n  }\n\n  i {\n    cursor: pointer;\n  }\n"]))),
                ba = function(n) {
                    var e, t, i, o = n.type,
                        r = void 0 === o ? Ki.T$ : o,
                        a = n.heading,
                        d = void 0 === a ? "" : a,
                        l = (0, Rt.$)().t,
                        c = (0, Ye.useContext)(We.x),
                        s = null === (i = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled,
                        u = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        p = (0, Ge.tq)(),
                        f = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        (0, Ve.UY)(!1), (0, ha.Z)(), s && (0, Ve.L9)(Ki.S5, {
                            element: "InactivityScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        })
                    }), []);
                    return (0, et.tZ)(oi.Z, {
                        className: p && window.innerHeight > window.innerWidth ? "mobilePortrait" : "",
                        style: p && u === qe.cj.portrait ? {
                            margin: "auto 8.75vmin"
                        } : {},
                        children: (0, et.BX)(xa, {
                            children: [(0, et.tZ)("div", {
                                className: "tile",
                                children: (0, et.tZ)(fa.default, {
                                    src: null === c || void 0 === c ? void 0 : c.media.tile,
                                    alt: c.appName,
                                    width: 160,
                                    height: 215,
                                    quality: 80,
                                    loader: Xt.O
                                })
                            }), (0, et.BX)(ya, {
                                children: [(0, et.tZ)(Mt.T4, {
                                    children: l("".concat(d || r, "Head"))
                                }), (0, et.tZ)(Mt.kk, {
                                    children: l("".concat(r, "Msg"))
                                }), (0, et.BX)(wa, {
                                    style: p ? {
                                        gap: "8px"
                                    } : {},
                                    children: [(0, et.tZ)(xi.z, {
                                        onClick: function() {
                                            var n = "TryAndDownload";
                                            s ? ((0, Ve.L9)(Ki.S5, {
                                                element: "InactivityScreen",
                                                action: "ContinuePlayingClicked",
                                                group: n
                                            }), setTimeout((function() {
                                                (0, yi.iI)(n)
                                            }), 500)) : (0, yi.iI)(n)
                                        },
                                        variant: "primary",
                                        text: r === Ki.LD ? l("restart") : l("continue")
                                    }), (0, et.tZ)(va.Z, {
                                        name: "support",
                                        size: 24,
                                        onClick: function() {
                                            f({
                                                type: ga.Z.GET_SUPPORT
                                            }), f({
                                                type: ga.Z.SET_ERROR_TYPE,
                                                payload: {
                                                    errorType: r
                                                }
                                            })
                                        }
                                    })]
                                })]
                            })]
                        })
                    })
                },
                Aa = {
                    src: "/play/_next/static/media/idleScreenLogo.26cffb49.png",
                    height: 360,
                    width: 360,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAbFBMVEVMaXG6OZEdGza75GTxRKb8PKE1aYYJAyH/zjv/SbVw4f9apm5i0fW942X/NaH/Q6b5QqLlidbC6WcoLC7G7mafu1n6RKssLTD9Q6UDAB37Q6c+ZpRMRF0wJUj/Ral+IWCHH2JNcUkTDjNUXkFyZYYOAAAAIXRSTlMA/f2Tbib8/gH+K3FO6RNIijLG/i269tmr1snJ+/nZ1vhWJ94WAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQ0lEQVR4nCXBxwGAIBAEwAWB2zNhztn+e/ThDAjnQQJEWecpCEa3hpARlZpH5E4w6GW3vS2wqBErbwM/Hec89h2I3wdgPALoH2n/RwAAAABJRU5ErkJggg=="
                },
                Za = {
                    src: "/play/_next/static/media/bulbIcon.c6ab3e9f.svg",
                    height: 17,
                    width: 16
                },
                ka = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Sa = Qe.ZP.div(De || (De = ka(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"]))),
                Ea = Qe.ZP.div(Re || (Re = ka(["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"], ["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"]))),
                Pa = Qe.ZP.div(Oe || (Oe = ka(["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"], ["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Ta = Qe.ZP.div(Ie || (Ie = ka(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"]))),
                Ca = function(n) {
                    var e = n.logo,
                        t = n.heading,
                        i = n.text,
                        o = n.modalInfoText,
                        r = n.buttonText,
                        a = n.infoText,
                        d = n.proTip,
                        l = (0, Rt.$)().t,
                        c = (0, He.I0)();
                    return (0, et.BX)(oi.Z, {
                        children: [(0, et.BX)(Sa, {
                            children: [(0, et.tZ)(Ea, {
                                children: (0, et.tZ)("img", {
                                    alt: "now.gg ".concat(l("logo")),
                                    src: function() {
                                        switch (e) {
                                            case "inactivity":
                                            default:
                                                return (0, Xt.j)(Aa)
                                        }
                                    }()
                                })
                            }), (0, et.BX)(Pa, {
                                children: [(0, et.tZ)(Mt.T4, {
                                    bold: !0,
                                    children: l(t)
                                }), (0, et.tZ)(Mt.T6, {
                                    white: !0,
                                    children: l(i)
                                }), o && (0, et.tZ)(Mt.T6, {
                                    white: !0,
                                    style: {
                                        marginTop: 20
                                    },
                                    children: l(o)
                                }), r && (0, et.tZ)(xi.z, {
                                    variant: "primary",
                                    onClick: function() {
                                        c({
                                            type: Et.Z.MODAL_STATUS,
                                            payload: {
                                                inactivityModal: !1
                                            }
                                        })
                                    },
                                    text: l(r)
                                }), a && (0, et.tZ)(Mt.kk, {
                                    white: !0,
                                    center: !0,
                                    className: "alert-msg",
                                    children: l(a)
                                })]
                            })]
                        }), d && (0, et.BX)(Ta, {
                            children: [(0, et.tZ)("img", {
                                className: "bulbIcon",
                                alt: "".concat(l("proTipLogo")),
                                src: (0, Xt.j)(Za),
                                height: 16,
                                width: 16
                            }), (0, et.tZ)(Mt.T6, {
                                white: !0,
                                children: l(d)
                            })]
                        })]
                    })
                },
                Da = t(97170),
                Ra = function(n) {
                    var e = (0, Ye.useRef)();
                    return (0, Ye.useEffect)((function() {
                        e.current = n
                    })), e.current
                },
                Oa = function() {
                    var n = (0, Ye.useState)(navigator.onLine),
                        e = n[0],
                        t = n[1],
                        i = function() {
                            t(navigator.onLine)
                        };
                    return (0, Ye.useEffect)((function() {
                        return window.addEventListener("online", i), window.addEventListener("offline", i),
                            function() {
                                window.removeEventListener("online", i), window.removeEventListener("offline", i)
                            }
                    }), []), e
                },
                Ia = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ma = Qe.ZP.div(Me || (Me = Ia(["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"], ["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"]))),
                La = Qe.ZP.p(Le || (Le = Ia(["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"], ["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"]))),
                Ba = function() {
                    var n = (0, Ye.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = Oa(),
                        o = Ra(i),
                        r = (0, Rt.$)().t;
                    return (0, Ye.useEffect)((function() {
                        "boolean" === typeof i && !o && i && setTimeout((function() {
                            t(!1)
                        }), 2e3), i || t(!0)
                    }), [i]), (0, et.tZ)(Ma, {
                        children: e ? (0, et.tZ)(La, {
                            style: {
                                background: i ? "#31770a" : "#f9edbe",
                                color: i ? "#fff" : "#000",
                                borderColor: i ? "#6db346" : "#f0c36d"
                            },
                            children: r(i ? "connected" : "networkLost")
                        }) : null
                    })
                },
                Xa = t(3053),
                Na = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ka = (0, Qe.F4)(Be || (Be = Na(["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"], ["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))),
                ja = (0, Qe.F4)(Xe || (Xe = Na(["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"], ["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"]))),
                za = Qe.ZP.div(Ne || (Ne = Na(["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"], ["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"]))),
                Ya = Qe.ZP.div(Ke || (Ke = Na(["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"], ["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"])), ja, (function(n) {
                    return n.theme.colors.white
                }), Ka),
                Ha = Qe.ZP.p(je || (je = Na(["\n    margin-left: 22px;\n    color: ", ";\n"], ["\n    margin-left: 22px;\n    color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                _a = function(n) {
                    var e = n.videoElm,
                        t = (0, He.I0)(),
                        i = (0, Ye.useState)(!1),
                        o = i[0],
                        r = i[1],
                        a = (0, Ye.useState)(!1),
                        d = a[0],
                        l = a[1],
                        c = (0, Rt.$)().t,
                        s = function() {
                            r(!1), setTimeout((function() {
                                t({
                                    type: Et.Z.ROBLOX_TOAST,
                                    payload: {
                                        robloxToast: !1
                                    }
                                })
                            }), 500)
                        },
                        u = function() {
                            var n, t, i = !1,
                                o = function(e) {
                                    3 !== e.which && 2 !== e.button || (i = !0, n = e.pageX, t = e.pageY)
                                },
                                r = function(n) {
                                    n.preventDefault()
                                };
                            e.current && (e.current.addEventListener("contextmenu", r), e.current.addEventListener("mousedown", o), e.current.addEventListener("mouseup", (function a(d) {
                                var l = Math.abs(d.pageX - n),
                                    c = Math.abs(d.pageY - t);
                                i && (i = !1, (l > 6 || c > 6) && (s(), e.current && (e.current.removeEventListener("contextmenu", r), e.current.removeEventListener("mousedown", o), e.current.removeEventListener("mouseup", a))))
                            })))
                        };
                    return (0, Ye.useEffect)((function() {
                        u(), r(!0), setTimeout((function() {
                            l(!0)
                        }), 5e3), setTimeout((function() {
                            s()
                        }), 3e4)
                    }), []), (0, Ye.useEffect)((function() {
                        if (o) {
                            var n = +(localStorage.getItem("robloxToastViewCount") || "0") + 1;
                            localStorage.setItem("robloxToastViewCount", n.toString()), kt.Z.dispatch({
                                type: Xa.Z.ROBLOX_TOAST_UPDATE,
                                payload: {
                                    lastRobloxToastDate: (new Date).toDateString()
                                }
                            })
                        }
                    }), [o]), (0, et.BX)(za, {
                        className: "".concat(o ? "slideDown" : "slideUp"),
                        children: [(0, et.tZ)(Ya, {
                            className: "robloxImgContainer",
                            children: (0, et.tZ)(va.Z, {
                                name: "mouse",
                                size: 20
                            })
                        }), (0, et.tZ)(Ha, {
                            children: c("robloxToastMsg")
                        }), d && (0, et.tZ)("span", {
                            style: {
                                marginLeft: "12px",
                                marginTop: "2px",
                                cursor: "pointer"
                            },
                            children: (0, et.tZ)("img", {
                                alt: "",
                                src: (0, Xt.j)(Ci.Z),
                                onClick: s
                            })
                        })]
                    })
                },
                Fa = t(57180),
                Ua = t(23279),
                Wa = t.n(Ua),
                Ga = function() {
                    var n = (0, Ye.useState)({
                            width: 0,
                            height: 0
                        }),
                        e = n[0],
                        t = n[1];
                    return (0, Ye.useEffect)((function() {
                        var n = Wa()((function() {
                            t({
                                width: window.innerWidth,
                                height: window.innerHeight
                            })
                        }), 100);
                        return window.addEventListener("resize", n), n(),
                            function() {
                                return window.removeEventListener("resize", n)
                            }
                    }), []), e
                },
                Va = t(86296),
                qa = t(7383),
                Qa = t(30550),
                Ja = t(94405),
                $a = t(92809),
                nd = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ed = Qe.ZP.div(ze || (ze = nd(["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"], ["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"])), (function(n) {
                    var e = n.theme;
                    return "drop-shadow(".concat(e.shadow.normal, ")")
                }), (function(n) {
                    return n.width
                }), (function(n) {
                    return n.height
                }), (function(n) {
                    return n.theme.spacing.base3
                }), (function(n) {
                    return n.width
                }), (function(n) {
                    return n.height
                }));

            function td(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function id(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? td(Object(t), !0).forEach((function(e) {
                        (0, $a.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : td(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var od, rd, ad, dd, ld, cd, sd, ud, pd, fd, hd, gd, vd, md, xd, yd, wd, bd, Ad, Zd, kd, Sd, Ed, Pd, Td, Cd, Dd, Rd, Od, Id, Md, Ld, Bd, Xd, Nd, Kd, jd, zd = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (i = Object.getOwnPropertySymbols(n); o < i.length; o++) e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
                    }
                    return t
                },
                Yd = function(n) {
                    var e = n.height,
                        t = void 0 === e ? "160px" : e,
                        i = n.width,
                        o = void 0 === i ? "215px" : i,
                        r = n.className,
                        a = void 0 === r ? "" : r,
                        d = zd(n, ["height", "width", "className"]);
                    return (0, et.tZ)(ed, {
                        height: t,
                        width: o,
                        className: a,
                        children: (0, et.tZ)("img", id({
                            alt: ""
                        }, d))
                    })
                },
                Hd = t(26544),
                _d = {
                    enableHighAccuracy: !0,
                    timeout: 5e3,
                    maximumAge: 0
                },
                Fd = {
                    Location: "icon-location",
                    Camera: "icon-video-cam"
                },
                Ud = t(61569),
                Wd = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                Gd = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                Vd = function() {},
                qd = function(n) {
                    (0, Hi.Yg)(n)
                },
                Qd = function() {
                    var n = (0, Ye.useContext)(Ja.Z),
                        e = (0, He.v9)((function(n) {
                            return n.play.permissionType
                        })),
                        t = (0, Rt.$)().t,
                        i = (0, He.I0)(),
                        o = (0, Ye.useState)(!1),
                        r = o[0],
                        a = o[1],
                        d = (0, Qe.Fg)(),
                        l = (0, Ye.useCallback)((function() {
                            return Wd(void 0, void 0, void 0, (function() {
                                var n;
                                return Gd(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return e.trys.push([0, 2, , 3]), [4, navigator.permissions.query({
                                                name: "geolocation"
                                            })];
                                        case 1:
                                            return "granted" === (null === (n = e.sent()) || void 0 === n ? void 0 : n.state) ? [2, !0] : [2, !1];
                                        case 2:
                                            return e.sent(), [2, !1];
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        }), []),
                        c = (0, Ye.useCallback)((function() {
                            i({
                                type: Et.Z.GET_PERMISSION,
                                payload: {
                                    permissionType: ""
                                }
                            })
                        }), [i]),
                        s = (0, Ye.useCallback)((function() {
                            c(),
                                function(n) {
                                    switch (n) {
                                        case "Location":
                                            navigator.geolocation.getCurrentPosition(qd, Vd, _d)
                                    }
                                }(e)
                        }), [c, e]);
                    return (0, Ye.useEffect)((function() {
                        l().then((function(n) {
                            n ? s() : a(!0)
                        })).catch((function() {
                            a(!0)
                        }))
                    }), [l, s]), r ? (0, et.tZ)(oi.Z, {
                        modalBackgroundColor: Hd.qm.gradients.glass,
                        overlayStyles: Ud.r2,
                        modalStyles: (0, Ud.il)(d),
                        children: (0, et.BX)(Ud.W2, {
                            children: [(0, et.tZ)(Yd, {
                                width: "105px",
                                height: "140px",
                                alt: n.appName,
                                src: n.media.tile
                            }), (0, et.BX)(Ud.GN, {
                                children: [(0, et.tZ)(Ud.NM, {
                                    med: !0,
                                    children: t("permission")
                                }), (0, et.tZ)(Ud.$S, {
                                    style: {
                                        display: "flex",
                                        margin: "12px 0 0"
                                    },
                                    children: "string" === typeof e ? (0, et.BX)(et.HY, {
                                        children: [(0, et.tZ)("span", {
                                            style: {
                                                fontSize: "20px",
                                                marginRight: "4px"
                                            },
                                            className: Fd[e]
                                        }), " ", (0, et.tZ)(Ud.az, {
                                            children: e
                                        })]
                                    }) : null
                                }), (0, et.BX)(Ud.Ls, {
                                    children: [(0, et.tZ)(xi.z, {
                                        variant: "tertiary",
                                        size: "default",
                                        text: t("cancel"),
                                        onClick: c,
                                        style: {
                                            margin: 0
                                        }
                                    }), (0, et.tZ)(xi.z, {
                                        variant: "primary",
                                        size: "default",
                                        text: (0, Ge.tq)() ? t("okay") : t("gotIt"),
                                        onClick: s,
                                        style: {
                                            margin: 0
                                        }
                                    })]
                                })]
                            })]
                        })
                    }) : null
                },
                Jd = t(22920),
                $d = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                nl = Qe.ZP.p(od || (od = $d(["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"], ["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    var e = n.bg,
                        t = n.theme;
                    return e || t.colors.green
                })),
                el = Qe.ZP.span(rd || (rd = $d(["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"], ["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.green
                }), (function(n) {
                    return n.theme.colors.green
                })),
                tl = {
                    success: "#398B4D"
                },
                il = function(n) {
                    var e = n.type,
                        t = n.onClose,
                        i = n.children,
                        o = (0, Ye.useState)(""),
                        r = o[0],
                        a = o[1];
                    return (0, Ye.useEffect)((function() {
                        var n = setTimeout((function() {
                                a("scaleY(1)")
                            }), 1e3),
                            e = setTimeout((function() {
                                a("scaleY(0)"), t()
                            }), 4e3);
                        return function() {
                            clearTimeout(n), clearTimeout(e)
                        }
                    }), []), (0, et.BX)(nl, {
                        bg: tl[e],
                        style: {
                            transform: r || void 0
                        },
                        children: [(0, et.tZ)(el, {}), i]
                    })
                },
                ol = t(80252),
                rl = t(30150),
                al = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                dl = (0, Qe.iv)(ad || (ad = al(["\n  width: 320px;\n  > div {\n    margin: 24px;\n    border-radius: 0;\n  }\n"], ["\n  width: 320px;\n  > div {\n    margin: 24px;\n    border-radius: 0;\n  }\n"]))),
                ll = Qe.ZP.div(dd || (dd = al(["\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 24px;\n\n  i {\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 24px;\n\n  i {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                cl = Qe.ZP.span(ld || (ld = al(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                sl = (0, Qe.ZP)(rl.Yd)(cd || (cd = al(["\n  padding: 7.5px;\n  text-decoration: none;\n"], ["\n  padding: 7.5px;\n  text-decoration: none;\n"]))),
                ul = function() {
                    var n = (0, He.v9)((function(n) {
                            return n.play.urlToOpen
                        })),
                        e = (0, Rt.$)().t,
                        t = (0, He.I0)(),
                        i = function() {
                            t({
                                type: Et.Z.OPEN_URL,
                                payload: {
                                    urlToOpen: ""
                                }
                            })
                        };
                    return n ? (0, et.BX)(oi.Z, {
                        modalStyles: dl,
                        children: [(0, et.BX)(ll, {
                            children: [(0, et.tZ)(Mt.TZ, {
                                children: (0, et.tZ)(cl, {
                                    children: e("externalPopupMessage")
                                })
                            }), (0, et.tZ)(va.Z, {
                                name: "cross-thin",
                                size: 16,
                                onClick: i
                            })]
                        }), (0, et.tZ)(sl, {
                            as: "a",
                            variant: "primary",
                            rel: "noopener noreferrer",
                            size: "medium",
                            target: "_blank",
                            onClick: i,
                            href: n,
                            children: (0, et.tZ)(Mt.QV, {
                                children: e("okay")
                            })
                        })]
                    }) : null
                },
                pl = t(35494),
                fl = t(40077),
                hl = t(13147),
                gl = t(73029),
                vl = t(40434),
                ml = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                xl = Qe.ZP.div(sd || (sd = ml(["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"], ["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.base600
                })),
                yl = Qe.ZP.div(ud || (ud = ml(["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.modal
                })),
                wl = Qe.ZP.ul(pd || (pd = ml(["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"], ["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"]))),
                bl = Qe.ZP.li(fd || (fd = ml(["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"], ["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"]))),
                Al = ((0, Qe.ZP)(bl)(hd || (hd = ml(["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"], ["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"]))), (0, Qe.ZP)(bl)(gd || (gd = ml(["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"], ["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"])))),
                Zl = Qe.ZP.div(vd || (vd = ml(["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"], ["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"]))),
                kl = Qe.ZP.span(md || (md = ml(["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"], ["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"])), (function(n) {
                    return n.theme.colors.modal
                })),
                Sl = Qe.ZP.div(xd || (xd = ml(["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"], ["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"])), (function(n) {
                    return n.theme.colors.modal
                })),
                El = Qe.ZP.div(yd || (yd = ml(["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),
                Pl = Qe.ZP.label(wd || (wd = ml(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"], ["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"]))),
                Tl = (0, Qe.ZP)(El)(bd || (bd = ml(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.base100
                }), (function(n) {
                    return n.theme.colors.modal
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Cl = Qe.ZP.div(Ad || (Ad = ml(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"])), (function(n) {
                    return n.theme.colors.base100
                })),
                Dl = Qe.ZP.span(Zd || (Zd = ml(["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.border.base2
                }), (function(n) {
                    return n.theme.colors.link
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.modal
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Rl = Qe.ZP.div(kd || (kd = ml(["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"], ["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"]))),
                Ol = (0, Qe.ZP)(El)(Sd || (Sd = ml(["\n  gap: ", ";\n"], ["\n  gap: ", ";\n"])), (function(n) {
                    return n.theme.spacing.base2
                })),
                Il = Qe.ZP.div(Ed || (Ed = ml(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))),
                Ml = Qe.ZP.div(Pd || (Pd = ml(["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n\n  ", "\n"], ["\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  position: absolute;\n\n  ", "\n"])), (function(n) {
                    return n.editing ? "\n    background-color: rgba(0,0,0,0.7)};\n  " : ""
                })),
                Ll = Qe.ZP.div(Td || (Td = ml(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 12px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  button {\n    width: 50% !important;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  gap: 12px;\n  justify-content: space-between;\n  margin-bottom: 12px;\n\n  button {\n    width: 50% !important;\n  }\n"]))),
                Bl = Qe.ZP.div(Cd || (Cd = ml(["\n  padding: 8px;\n  text-align: center;\n  align-items: center;\n  border-radius: 12px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n"], ["\n  padding: 8px;\n  text-align: center;\n  align-items: center;\n  border-radius: 12px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n"]))),
                Xl = Qe.ZP.div(Dd || (Dd = ml(["\n  position: absolute;\n  width: 400px;\n  height: auto;\n  display: flex;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.2);\n  gap: 8px;\n  border-radius: 8px;\n  backdrop-filter: blur(24px);\n  color: rgba(255, 255, 255, 1);\n  flex-direction: column;\n  z-index: 10;\n"], ["\n  position: absolute;\n  width: 400px;\n  height: auto;\n  display: flex;\n  padding: 16px;\n  background: rgba(255, 255, 255, 0.2);\n  gap: 8px;\n  border-radius: 8px;\n  backdrop-filter: blur(24px);\n  color: rgba(255, 255, 255, 1);\n  flex-direction: column;\n  z-index: 10;\n"]))),
                Nl = Qe.ZP.div(Rd || (Rd = ml(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),
                Kl = (Qe.ZP.div(Od || (Od = ml(["\n  display: flex;\n  gap: 2px;\n  height: auto;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 2px;\n  height: auto;\n  justify-content: space-between;\n  flex-direction: column;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]))), Qe.ZP.div(Id || (Id = ml(["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  gap: 8px;\n"])))),
                jl = {
                    src: "/play/_next/static/media/MouseLButton.8f31ba3d.png",
                    height: 84,
                    width: 62,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEX29vY3NzclJSXFxcXCwsLg4OBAQEBMaXHl5eXBwcGtra34+Ph6enoAAAD7+/udnZ3S0tL///+fn5////+FhYW5XWQ0AAAAFXRSTlMWzcFdgT7PAFxugyTTpvGxj8KumKyPFHMzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nAXBBwLAIAgAsUNBwNn1/7c2wUeEOez7m4PYb5+BaeplaCtFOilrScLT2gGnVvwHLlIBc7L7MAIAAAAASUVORK5CYII="
                },
                zl = t(93772),
                Yl = {
                    src: "/play/_next/static/media/GamepadDpadDown.9f027fed.png",
                    height: 72,
                    width: 72,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEX///8AAAB7e3u9vb2Ojo46OjrBwcENDQ0gICD9/f24uLgS9t3bAAAACHRSTlMG/bdwtv1w+n1uUAwAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAySURBVHicRcuxEQAgDAOxt0PAsP/AVBy9BJRdACNSBsys7pWJ1Xu3jKVzJFNRotTHr18gzQDju4qaMgAAAABJRU5ErkJggg=="
                },
                Hl = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                _l = Qe.ZP.div(Md || (Md = Hl(["\n  background: ", ";\n  height: auto;\n  width: 300px;\n  position: absolute;\n  z-index: 100;\n  color: white;\n  border-radius: 8px;\n  padding: 8px;\n  border-radius: 0px 8px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(24px);\n"], ["\n  background: ", ";\n  height: auto;\n  width: 300px;\n  position: absolute;\n  z-index: 100;\n  color: white;\n  border-radius: 8px;\n  padding: 8px;\n  border-radius: 0px 8px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(24px);\n"])), (function(n) {
                    return n.theme.colors.base600
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white20
                })),
                Fl = Qe.ZP.header(Ld || (Ld = Hl(["\n  display: flex;\n  padding-bottom: 8px;\n"], ["\n  display: flex;\n  padding-bottom: 8px;\n"]))),
                Ul = Qe.ZP.div(Bd || (Bd = Hl(["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n\n  h6 {\n    width: 110px;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"]))),
                Wl = Qe.ZP.input(Xd || (Xd = Hl(["\n  width: 150px;\n  height: fit-content;\n  padding: 2px;\n  background: ", ";\n  box-shadow: 0px 2px 8px rgba(0,0,0,0.04);\n  border-color: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  text-align: center;\n}\n"], ["\n  width: 150px;\n  height: fit-content;\n  padding: 2px;\n  background: ", ";\n  box-shadow: 0px 2px 8px rgba(0,0,0,0.04);\n  border-color: 1px solid ", ";\n  color: ", ";\n  background: ", ";\n  border: ", ";\n  border-radius: 6px;\n  text-align: center;\n}\n"])), (function(n) {
                    return n.theme.colors.background
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.border.base4
                })),
                Gl = Qe.ZP.div(Nd || (Nd = Hl(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  border-radius: 8px;\n  gap: 8px;\n  margin-bottom: 12px;\n  overflow-y: scroll;\n  overflow-x: none;\n  background-color: transparent;\n  border: 1px solid ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 100%;\n  border-radius: 8px;\n  gap: 8px;\n  margin-bottom: 12px;\n  overflow-y: scroll;\n  overflow-x: none;\n  background-color: transparent;\n  border: 1px solid ", ";\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                Vl = function(n) {
                    return void 0 === n && (n = ""), n.indexOf("Dpad") > -1 && -1 === n.indexOf("+") ? n.replace(/Gamepad/g, "") : "Left" === n || "Right" === n || "Up" === n || "Down" === n ? n : n.replace(/Gamepad/g, "").replace(/Trigger/g, "T").replace(/Left/g, "L").replace(/Right/g, "R").replace(/Shoulder/g, "B")
                },
                ql = {
                    Oem1: ";",
                    Oem2: "/",
                    Oem3: "~",
                    Oem4: "[",
                    Oem5: "\\",
                    Oem6: "]",
                    Oem7: "'",
                    OemPlus: "+",
                    OemComma: ",",
                    OemMinus: "-",
                    OemPeriod: "."
                },
                Ql = function(n) {
                    return n ? ql[n] || n : ""
                },
                Jl = function(n, e) {
                    return n / 100 * e
                },
                $l = {
                    src: "/play/_next/static/media/scroll.cd1d6361.svg",
                    height: 43,
                    width: 42
                },
                nc = {
                    src: "/play/_next/static/media/ScriptEditor.7ad774e3.svg",
                    height: 12,
                    width: 12
                },
                ec = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                tc = Qe.ZP.span(Kd || (Kd = ec(["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"], ["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"])), (function(n) {
                    return n.theme.colors.modal
                })),
                ic = Qe.ZP.div(jd || (jd = ec(["\n  border: 5px solid ", ",\n  width: ", ",\n  height: ", ",\n  position: absolute,\n  borderRadius: 50%,\n  pointerEvents: none,\n"], ["\n  border: 5px solid ", ",\n  width: ", ",\n  height: ", ",\n  position: absolute,\n  borderRadius: 50%,\n  pointerEvents: none,\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    var e = n.radius;
                    return "".concat(2 * e, " px")
                }), (function(n) {
                    var e = n.radius;
                    return "".concat(2 * e, " px")
                })),
                oc = {
                    MouseLButton: jl,
                    MouseRButton: {
                        src: "/play/_next/static/media/MouseRButton.d74dac8c.png",
                        height: 84,
                        width: 62,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAATlBMVEX5+fnV1dW3t7cAAADBwcHGxsb///9MaXFAQEA3Nzfg4OAkJCTu7u52dnb6+vqdnZ3AwMDHx8fT09P///+lpaX///+enp7w8PCIiIgTExMwMIjoAAAAGnRSTlMWRX6mb1wqAM7OY8FV0fSwh3uRwIiXrySus6dy+4IAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicBcEHAsAgCACxU1HA2d3+/6VN0FL7q5TxnRPquO7ZCccuWyB6axYRT8kFltkDSs7oDzhYAbkITR/DAAAAAElFTkSuQmCC"
                    },
                    MouseMButton: {
                        src: "/play/_next/static/media/MouseMButton.be91e84d.png",
                        height: 72,
                        width: 54,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAMAAADtGH4KAAAAP1BMVEX///+kpKT///+srKy5ubmvr6+np6cFBQXd3d3IyMibm5v29vZFRUWKior7+/v39/d1dXVzc3OhoaE2NjYeHh4jYdQyAAAAE3RSTlMBdgXMPlun/ClMk5z9pZvbnJ2a+qgK1AAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJwFwQkSABAMALFFaes2/P+tErDWDCStlYRc5iwZH/sMITzVF/Creh1q7xWIZpEPLHsBi3eDfwQAAAAASUVORK5CYII="
                    },
                    DpadUp: {
                        src: "/play/_next/static/media/GamepadDpadUp.f38ef235.png",
                        height: 72,
                        width: 72,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEX///97e3sAAAC9vb1MaXGOjo46OjrBwcENDQ0gICABAQH9/f24uLh+iDkQAAAACXRSTlMKt/xwALb9cPpl1wDcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANUlEQVR4nEXLMRIAIAgDsLYoWPT/73Xy3BMMBBkYwLTkCYRlywG2zlET7Nw7myivzOX6+PULKsABNWxg+dMAAAAASUVORK5CYII="
                    },
                    DpadDown: Yl,
                    DpadLeft: {
                        src: "/play/_next/static/media/GamepadDpadLeft.6c56681a.png",
                        height: 72,
                        width: 72,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dmZmZAQEAeHh7q6uqsrKxKPmb/AAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYtBEsAgDITIRmNd/f97Wz30xgxAC41UNKIb3AO5/JRFMtcySeJ9QS581B+ffXz7CywKATlSUeKrAAAAAElFTkSuQmCC"
                    },
                    DpadRight: {
                        src: "/play/_next/static/media/GamepadDpadRight.691db1eb.png",
                        height: 72,
                        width: 72,
                        blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEUAAAD///++vr59fX1MaXGNjY0BAQF3d3dlZWVAQEAeHh7q6uqsrKya6EWTAAAAC3RSTlP+CnC2ALb6uf38/kzITgQAAAAJcEhZcwAACxMAAAsTAQCanBgAAAA3SURBVHicPYvBDcAgDMScS4D2YP95Ufroz5JtKpRLUcQweATyfDwtEu/9kh8ck61Mqz+u0Or9AiwQATk4iacQAAAAAElFTkSuQmCC"
                    }
                },
                rc = {
                    Tab: "Tab",
                    Enter: "Enter",
                    ShiftLeft: "Shift",
                    ShiftRight: "Shift",
                    ControlLeft: "Ctrl",
                    ControlRight: "Ctrl",
                    AltLeft: "Alt",
                    AltRight: "Alt",
                    CapsLock: "CapsLock",
                    Space: "Space",
                    PageUp: "PgUp",
                    PageDown: "PgDn",
                    End: "End",
                    Home: "Home",
                    ArrowLeft: "Left",
                    ArrowUp: "Up",
                    ArrowRight: "Right",
                    ArrowDown: "Down",
                    Insert: "Insert",
                    Delete: "Delete",
                    Minus: "OemMinus",
                    Period: "OemPeriod",
                    Comma: "OemComma",
                    Equal: "OemPlus",
                    Digit0: "0",
                    Digit1: "1",
                    Digit2: "2",
                    Digit3: "3",
                    Digit4: "4",
                    Digit5: "5",
                    Digit6: "6",
                    Digit7: "7",
                    Digit8: "8",
                    Digit9: "9",
                    KeyA: "A",
                    KeyB: "B",
                    KeyC: "C",
                    KeyD: "D",
                    KeyE: "E",
                    KeyF: "F",
                    KeyG: "G",
                    KeyH: "H",
                    KeyI: "I",
                    KeyJ: "J",
                    KeyK: "K",
                    KeyL: "L",
                    KeyM: "M",
                    KeyN: "N",
                    KeyO: "O",
                    KeyP: "P",
                    KeyQ: "Q",
                    KeyR: "R",
                    KeyS: "S",
                    KeyT: "T",
                    KeyU: "U",
                    KeyV: "V",
                    KeyW: "W",
                    KeyX: "X",
                    KeyY: "Y",
                    KeyZ: "Z",
                    Numpad0: "Num0",
                    Numpad1: "Num1",
                    Numpad2: "Num2",
                    Numpad3: "Num3",
                    Numpad4: "Num4",
                    Numpad5: "Num5",
                    Numpad6: "Num6",
                    Numpad7: "Num7",
                    Numpad8: "Num8",
                    Numpad9: "Num9",
                    Semicolon: "Oem1",
                    Slash: "Oem2",
                    Backquote: "Oem3",
                    BracketLeft: "Oem4",
                    Backslash: "Oem5",
                    BracketRight: "Oem6",
                    Quote: "Oem7",
                    Backspace: "Backspace"
                },
                ac = function(n) {
                    return rc[n]
                },
                dc = [],
                lc = function(n) {
                    if (dc.includes(n)) return null;
                    var e = ac(n);
                    return e ? (0 !== dc.length && (e = "".concat(ac(dc[dc.length - 1]), " + ").concat(e)), dc.push(n), e) : null
                },
                cc = function(n) {
                    var e, t, i, o, r = n.gamepad,
                        a = n.control,
                        d = n.height,
                        l = n.newControl,
                        c = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        s = (0, Ye.useState)((null === (e = a.KeyUp) || void 0 === e ? void 0 : e.length) || 1),
                        u = s[0],
                        p = s[1],
                        f = (0, Ye.useState)(l),
                        h = f[0],
                        g = f[1],
                        v = (0, Ye.useState)((null === (t = a.KeyDown) || void 0 === t ? void 0 : t.length) || 1),
                        m = v[0],
                        x = v[1],
                        y = (0, Ye.useState)(!1),
                        w = y[0],
                        b = y[1],
                        A = (0, Ye.useState)((null === (i = a.KeyLeft) || void 0 === i ? void 0 : i.length) || 1),
                        Z = A[0],
                        k = A[1],
                        S = (0, Ye.useState)(!1),
                        E = S[0],
                        P = S[1],
                        T = (0, Ye.useState)((null === (o = a.KeyRight) || void 0 === o ? void 0 : o.length) || 1),
                        C = T[0],
                        D = T[1],
                        R = (0, Ye.useState)(!1),
                        O = R[0],
                        I = R[1],
                        M = (0, Ye.useRef)(null),
                        L = (0, Ye.useRef)(null),
                        B = (0, Ye.useRef)(null),
                        X = (0, Ye.useRef)(null),
                        N = function(n) {
                            var e = lc(n.code);
                            e && (h ? (a.KeyUp = e, p(e.length)) : w ? (a.KeyDown = e, x(e.length)) : E ? (a.KeyLeft = e, k(e.length)) : O && (a.KeyRight = e, D(e.length)), n.target.value = e)
                        },
                        K = function(n) {
                            dc = dc.filter((function(e) {
                                return e !== n.code
                            }))
                        },
                        j = function(n) {
                            h ? (a.KeyUp = "MouseRButton", p("MouseRButton".length)) : w ? (a.KeyDown = "MouseRButton", x("MouseRButton".length)) : E ? (a.KeyLeft = "MouseRButton", k("MouseRButton".length)) : O && (a.KeyRight = "MouseRButton", D("MouseRButton".length)), n.target.value = "MouseRButton"
                        };
                    return (0, Ye.useEffect)((function() {
                        c || (g(!1), b(!1), P(!1), I(!1))
                    }), [c]), (0, Ye.useEffect)((function() {
                        var n, e, t, i;
                        h && (null === (n = M.current) || void 0 === n || n.focus()), w && (null === (e = L.current) || void 0 === e || e.focus()), E && (null === (t = B.current) || void 0 === t || t.focus()), O && (null === (i = X.current) || void 0 === i || i.focus())
                    }), [h, w, E, O]), (0, et.BX)(et.HY, {
                        children: [r && !c && a.GamepadStick && (0, et.tZ)("span", {
                            className: "overlayKeyValue",
                            children: Vl(a.GamepadStick)
                        }), (!r || c) && (0, et.BX)(et.HY, {
                            children: [a.KeyUp && !h && (0, et.tZ)("span", {
                                className: "overlayKeyValue up",
                                style: {
                                    pointerEvents: c ? "all" : "none",
                                    transform: "translateY(-100%) translateY(-".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                onClick: function() {
                                    c && g(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(a.KeyUp)
                                })
                            }), h && c && (0, et.tZ)("input", {
                                ref: M,
                                value: a.KeyUp,
                                type: "text",
                                style: {
                                    pointerEvents: c ? "all" : "none",
                                    transform: "translateY(-100%) translateY(-".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                id: "".concat(a.$type, "-key-input"),
                                required: !0,
                                onKeyDown: N,
                                onKeyUp: K,
                                onBlur: function() {
                                    g(!1)
                                },
                                size: u,
                                onContextMenu: function(n) {
                                    j(n), n.preventDefault()
                                }
                            }), a.KeyLeft && !E && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    transform: "translateX(-100%) translateX(-".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                onClick: function() {
                                    c && P(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(a.KeyLeft)
                                })
                            }), E && c && (0, et.tZ)("input", {
                                value: a.KeyLeft,
                                ref: B,
                                type: "text",
                                style: {
                                    pointerEvents: c ? "all" : "none",
                                    transform: "translateX(-100%) translateX(-".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                id: "".concat(a.$type, "-key-input"),
                                required: !0,
                                onKeyDown: N,
                                onKeyUp: K,
                                onBlur: function() {
                                    P(!1)
                                },
                                size: Z,
                                onContextMenu: function(n) {
                                    j(n), n.preventDefault()
                                }
                            }), a.KeyDown && !w && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    transform: "translateY(100%) translateY(".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                onClick: function() {
                                    c && b(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(a.KeyDown)
                                })
                            }), w && c && (0, et.tZ)("input", {
                                value: a.KeyDown,
                                ref: L,
                                type: "text",
                                style: {
                                    pointerEvents: c ? "all" : "none",
                                    transform: "translateY(100%) translateY(".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                id: "".concat(a.$type, "-key-input"),
                                required: !0,
                                onKeyDown: N,
                                onKeyUp: K,
                                onBlur: function() {
                                    b(!1)
                                },
                                size: m,
                                onContextMenu: function(n) {
                                    j(n), n.preventDefault()
                                }
                            }), a.KeyRight && !O && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    transform: "translateX(100%) translateX(".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                onClick: function() {
                                    c && I(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(a.KeyRight)
                                })
                            }), O && c && (0, et.tZ)("input", {
                                value: a.KeyRight,
                                ref: X,
                                type: "text",
                                style: {
                                    pointerEvents: c ? "all" : "none",
                                    transform: "translateX(100%) translateX(".concat(Jl(d, (a.XRadius || 5) / 2), "px)")
                                },
                                id: "".concat(a.$type, "-key-input"),
                                required: !0,
                                onKeyDown: N,
                                onKeyUp: K,
                                onBlur: function() {
                                    I(!1)
                                },
                                size: C,
                                onContextMenu: function(n) {
                                    j(n), n.preventDefault()
                                }
                            }), c && (0, et.tZ)("span", {
                                style: {
                                    height: "".concat(2 * Jl(d, (a.XRadius || 5) / 2) + 80, "px"),
                                    aspectRatio: "1",
                                    border: "1px solid white",
                                    borderRadius: "50%",
                                    zIndex: "-1"
                                }
                            })]
                        })]
                    })
                },
                sc = function(n) {
                    var e, t, i, o, r, a, d = n.gamepad,
                        l = n.control,
                        c = n.height,
                        s = n.newControl,
                        u = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        p = d ? Vl(l.Key_alt1) : Ql(l.Key),
                        f = (0, Ye.useState)((null === (e = l.Key) || void 0 === e ? void 0 : e.length) || 1),
                        h = f[0],
                        g = f[1],
                        v = (0, Ye.useState)(s),
                        m = v[0],
                        x = v[1],
                        y = (0, Ye.useState)((null === (t = l.KeyUp) || void 0 === t ? void 0 : t.length) || 1),
                        w = y[0],
                        b = y[1],
                        A = (0, Ye.useState)(s),
                        Z = A[0],
                        k = A[1],
                        S = (0, Ye.useState)((null === (i = l.KeyDown) || void 0 === i ? void 0 : i.length) || 1),
                        E = S[0],
                        P = S[1],
                        T = (0, Ye.useState)(!1),
                        C = T[0],
                        D = T[1],
                        R = (0, Ye.useState)((null === (o = l.KeyLeft) || void 0 === o ? void 0 : o.length) || 1),
                        O = R[0],
                        I = R[1],
                        M = (0, Ye.useState)(!1),
                        L = M[0],
                        B = M[1],
                        X = (0, Ye.useState)((null === (r = l.KeyRight) || void 0 === r ? void 0 : r.length) || 1),
                        N = X[0],
                        K = X[1],
                        j = (0, Ye.useState)(!1),
                        z = j[0],
                        Y = j[1],
                        H = (0, Ye.useRef)(null),
                        _ = (0, Ye.useRef)(null),
                        F = (0, Ye.useRef)(null),
                        U = (0, Ye.useRef)(null),
                        W = (0, Ye.useRef)(null),
                        G = function(n) {
                            var e = lc(n.code);
                            e && (Z ? (l.KeyUp = e, b(e.length)) : C ? (l.KeyDown = e, P(e.length)) : L ? (l.KeyLeft = e, I(e.length)) : z ? (l.KeyRight = e, K(e.length)) : m && (l.Key = e, g(e.length)), n.target.value = e)
                        },
                        V = function(n) {
                            dc = dc.filter((function(e) {
                                return e !== n.code
                            }))
                        },
                        q = function(n) {
                            Z ? (l.KeyUp = "MouseRButton", b("MouseRButton".length)) : C ? (l.KeyDown = "MouseRButton", P("MouseRButton".length)) : L ? (l.KeyLeft = "MouseRButton", I("MouseRButton".length)) : z ? (l.KeyRight = "MouseRButton", K("MouseRButton".length)) : m && (l.Key = "MouseRButton", g("MouseRButton".length)), n.target.value = "MouseRButton"
                        };
                    return (0, Ye.useEffect)((function() {
                        u || (x(!1), k(!1), D(!1), B(!1), Y(!1))
                    }), [u]), (0, Ye.useEffect)((function() {
                        var n, e, t, i, o;
                        m && (null === (n = H.current) || void 0 === n || n.focus()), Z && (null === (e = _.current) || void 0 === e || e.focus()), C && (null === (t = U.current) || void 0 === t || t.focus()), L && (null === (i = F.current) || void 0 === i || i.focus()), z && (null === (o = W.current) || void 0 === o || o.focus())
                    }), [m, Z, C, L, z]), (0, et.tZ)(et.HY, {
                        children: u ? l.DeviceType ? (0, et.BX)(et.HY, {
                            children: [!m && (0, et.tZ)("span", {
                                className: "overlayKeyValue ".concat(l.Type, " ").concat(oc[p] ? "DpadImage" : ""),
                                onClick: function() {
                                    var n;
                                    u && x(!0), null === (n = H.current) || void 0 === n || n.focus()
                                },
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    minWidth: "28px",
                                    minHeight: "16px"
                                },
                                children: oc[p] ? (0, et.tZ)("img", {
                                    src: null === (a = oc[p]) || void 0 === a ? void 0 : a.src,
                                    alt: ""
                                }) : p
                            }), m && u && (0, et.tZ)("input", {
                                ref: H,
                                value: l.Key,
                                type: "text",
                                id: "".concat(l.$type, "-key-input"),
                                required: !0,
                                onKeyDown: G,
                                onKeyUp: V,
                                onBlur: function() {
                                    x(!1)
                                },
                                size: h,
                                onContextMenu: function(n) {
                                    q(n), n.preventDefault()
                                },
                                style: {
                                    pointerEvents: u ? "all" : "none"
                                }
                            })]
                        }) : (0, et.BX)(et.HY, {
                            children: [l.KeyUp && !Z && (0, et.tZ)("span", {
                                className: "overlayKeyValue up",
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    position: "absolute",
                                    transform: "translate(0, -200%)"
                                },
                                onClick: function() {
                                    u && k(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyUp)
                                })
                            }), Z && u && (0, et.tZ)("input", {
                                ref: _,
                                value: l.KeyUp,
                                type: "text",
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    position: "absolute",
                                    transform: "translate(0, -200%)"
                                },
                                id: "".concat(l.$type, "-key-input"),
                                required: !0,
                                onKeyDown: G,
                                onKeyUp: V,
                                onBlur: function() {
                                    k(!1)
                                },
                                size: w,
                                onContextMenu: function(n) {
                                    q(n), n.preventDefault()
                                }
                            }), l.KeyLeft && !L && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    position: "absolute",
                                    transform: "translate(-150%, 0)"
                                },
                                onClick: function() {
                                    u && B(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyLeft)
                                })
                            }), L && u && (0, et.tZ)("input", {
                                value: l.KeyLeft,
                                ref: F,
                                type: "text",
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    position: "absolute",
                                    transform: "translate(-150%, 0)"
                                },
                                id: "".concat(l.$type, "-key-input"),
                                required: !0,
                                onKeyDown: G,
                                onKeyUp: V,
                                onBlur: function() {
                                    B(!1)
                                },
                                size: O,
                                onContextMenu: function(n) {
                                    q(n), n.preventDefault()
                                }
                            }), l.KeyDown && !C && (0, et.tZ)("span", {
                                className: "overlayKeyValue down",
                                style: {
                                    position: "absolute",
                                    transform: "translate(0, 200%)"
                                },
                                onClick: function() {
                                    u && D(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyDown)
                                })
                            }), C && u && (0, et.tZ)("input", {
                                value: l.KeyDown,
                                ref: U,
                                type: "text",
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    position: "absolute",
                                    transform: "translate(0, 200%)"
                                },
                                id: "".concat(l.$type, "-key-input"),
                                required: !0,
                                onKeyDown: G,
                                onKeyUp: V,
                                onBlur: function() {
                                    D(!1)
                                },
                                size: E,
                                onContextMenu: function(n) {
                                    q(n), n.preventDefault()
                                }
                            }), l.KeyRight && !z && (0, et.tZ)("span", {
                                className: "overlayKeyValue right",
                                style: {
                                    position: "absolute",
                                    transform: "translate(125%, 0)"
                                },
                                onClick: function() {
                                    u && Y(!0)
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyRight)
                                })
                            }), z && u && (0, et.tZ)("input", {
                                value: l.KeyRight,
                                ref: W,
                                type: "text",
                                style: {
                                    pointerEvents: u ? "all" : "none",
                                    position: "absolute",
                                    transform: "translate(125%, 0)"
                                },
                                id: "".concat(l.$type, "-key-input"),
                                required: !0,
                                onKeyDown: G,
                                onKeyUp: V,
                                onBlur: function() {
                                    Y(!1)
                                },
                                size: N,
                                onContextMenu: function(n) {
                                    q(n), n.preventDefault()
                                }
                            })]
                        }) : d ? l.GamepadStick ? (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)("span", {
                                className: "overlayKeyValue",
                                children: Vl(l.GamepadStick)
                            }), (0, et.tZ)(tc, {})]
                        }) : (0, et.BX)(et.HY, {
                            children: [l.KeyUp_alt1 && (0, et.tZ)("span", {
                                className: "overlayKeyValue up",
                                style: {
                                    transform: "translateY(-40%) translateY(-".concat(Jl(c, 3), "px)")
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyUp_alt1)
                                })
                            }), l.KeyLeft_alt1 && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    transform: "translateX(-40%) translateX(-".concat(Jl(c, 3), "px)")
                                },
                                children: (0, et.tZ)("span", {
                                    children: Vl(l.KeyLeft_alt1)
                                })
                            }), l.KeyDown_alt1 && (0, et.tZ)("span", {
                                className: "overlayKeyValue down",
                                style: {
                                    transform: "translateY(40%) translateY(".concat(Jl(c, 3), "px)")
                                },
                                children: (0, et.tZ)("span", {
                                    children: l.KeyDown_alt1
                                })
                            }), l.KeyRight_alt1 && (0, et.tZ)("span", {
                                className: "overlayKeyValue left",
                                style: {
                                    transform: "translateX(40%) translateX(".concat(Jl(c, 3), "px")
                                },
                                children: (0, et.tZ)("span", {
                                    children: l.KeyRight_alt1
                                })
                            }), (0, et.tZ)(tc, {})]
                        }) : null
                    })
                },
                uc = function(n) {
                    var e, t, i = n.gamepad,
                        o = n.control,
                        r = n.newControl,
                        a = i ? Vl(o.Key_alt1) : Ql(o.Key),
                        d = (0, Ye.useState)((null === (e = o.Key) || void 0 === e ? void 0 : e.length) || 1),
                        l = d[0],
                        c = d[1],
                        s = (0, Ye.useState)(r),
                        u = s[0],
                        p = s[1],
                        f = (0, Ye.useRef)(null),
                        h = (0, He.v9)((function(n) {
                            return n.play.showScriptEditor
                        })),
                        g = (0, He.v9)((function(n) {
                            return n.play.scriptCommands
                        })),
                        v = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        m = (0, He.I0)();
                    return (0, Ye.useEffect)((function() {
                        v || p(!1)
                    }), [v]), (0, Ye.useEffect)((function() {
                        var n;
                        u && (null === (n = f.current) || void 0 === n || n.focus())
                    }), [u]), (0, Ye.useEffect)((function() {
                        !h && g.length > 0 && (o.Commands = g, m({
                            type: Et.Z.SCRIPT_EDITOR,
                            payload: {
                                scriptCommands: []
                            }
                        }))
                    }), [h]), (i ? o.Key_alt1 : o.Key) || v ? (0, et.BX)(et.HY, {
                        children: [!u && (0, et.tZ)("span", {
                            className: "overlayKeyValue ".concat(o.Type, " ").concat(oc[a] ? "DpadImage" : ""),
                            onClick: function() {
                                var n;
                                v && p(!0), null === (n = f.current) || void 0 === n || n.focus()
                            },
                            style: {
                                pointerEvents: v ? "all" : "none",
                                minWidth: "28px",
                                minHeight: "16px"
                            },
                            children: oc[a] ? (0, et.tZ)("img", {
                                src: null === (t = oc[a]) || void 0 === t ? void 0 : t.src,
                                alt: ""
                            }) : a
                        }), v && "Script" === o.Type && (0, et.tZ)("img", {
                            src: (0, Xt.j)(nc),
                            alt: "",
                            style: {
                                width: "20px",
                                height: "20px",
                                position: "absolute",
                                background: "rgba(0,0,0,1)",
                                transform: "translate(14px, 18px)",
                                borderRadius: "8px",
                                padding: "2px"
                            },
                            onClick: function() {
                                m({
                                    type: Et.Z.SCRIPT_EDITOR,
                                    payload: {
                                        showScriptEditor: !0
                                    }
                                })
                            }
                        }), u && v && (0, et.tZ)("input", {
                            ref: f,
                            value: o.Key,
                            type: "text",
                            id: "".concat(o.$type, "-key-input"),
                            required: !0,
                            onKeyDown: function(n) {
                                var e = lc(n.code);
                                e && (o.Key = e, c(e.length), n.target.value = e)
                            },
                            onKeyUp: function(n) {
                                dc = dc.filter((function(e) {
                                    return e !== n.code
                                }))
                            },
                            onBlur: function() {
                                p(!1)
                            },
                            size: l,
                            onContextMenu: function(n) {
                                var e;
                                e = n, o.Key = "MouseRButton", c("MouseRButton".length), e.target.value = "MouseRButton", n.preventDefault()
                            },
                            style: {
                                pointerEvents: v ? "all" : "none"
                            }
                        })]
                    }) : null
                },
                pc = function(n) {
                    var e, t, i, o = n.gamepad,
                        r = n.control,
                        a = n.newControl,
                        d = n.isPanLeftControl,
                        l = d ? Ql(r.KeyAction) : o ? Vl(r.KeyStartStop_alt1) : Ql(r.KeyStartStop),
                        c = (0, Ye.useState)((d ? null === (e = r.KeyAction) || void 0 === e ? void 0 : e.length : null === (t = r.Key) || void 0 === t ? void 0 : t.length) || 1),
                        s = c[0],
                        u = c[1],
                        p = (0, Ye.useState)(a),
                        f = p[0],
                        h = p[1],
                        g = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        v = (0, Ye.useRef)(null);
                    return (0, Ye.useEffect)((function() {
                        g || h(!1)
                    }), [g]), (0, Ye.useEffect)((function() {
                        var n;
                        f && g && (null === (n = v.current) || void 0 === n || n.focus())
                    }), [f]), l ? (0, et.BX)(et.HY, {
                        children: [!f && (0, et.tZ)("span", {
                            className: "overlayKeyValue",
                            onClick: function() {
                                g && h(!0)
                            },
                            style: {
                                pointerEvents: g ? "all" : "none"
                            },
                            children: oc[l] ? (0, et.tZ)("img", {
                                src: null === (i = oc[l]) || void 0 === i ? void 0 : i.src,
                                alt: ""
                            }) : l
                        }), f && g && (0, et.tZ)("input", {
                            value: d ? r.KeyAction : r.KeyStartStop,
                            ref: v,
                            type: "text",
                            id: "".concat(r.$type, "-key-input"),
                            required: !0,
                            onKeyDown: function(n) {
                                var e = lc(n.code);
                                e && (d ? r.KeyStartStop = e : r.KeyAction = e, u(e.length), n.target.value = e)
                            },
                            onKeyUp: function(n) {
                                dc = dc.filter((function(e) {
                                    return e !== n.code
                                }))
                            },
                            onBlur: function() {
                                h(!1)
                            },
                            size: s,
                            onContextMenu: function(n) {
                                var e;
                                e = n, d ? r.KeyStartStop = "MouseRButton" : r.KeyAction = "MouseRButton", u("MouseRButton".length), e.target.value = "MouseRButton", n.preventDefault()
                            },
                            style: {
                                pointerEvents: g ? "all" : "none"
                            }
                        })]
                    }) : null
                },
                fc = function(n) {
                    var e, t, i, o = n.gamepad,
                        r = n.control,
                        a = n.newControl,
                        d = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        l = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        c = null === (e = null === d || void 0 === d ? void 0 : d.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                        s = o ? Vl(r.KeyIn_alt1) : Ql(r.KeyIn),
                        u = o ? Vl(r.KeyOut_alt1) : Ql(r.KeyOut),
                        p = (0, Ye.useState)((null === (t = r.KeyIn) || void 0 === t ? void 0 : t.length) || 1),
                        f = p[0],
                        h = p[1],
                        g = (0, Ye.useState)((null === (i = r.KeyOut) || void 0 === i ? void 0 : i.length) || 1),
                        v = g[0],
                        m = g[1],
                        x = (0, Ye.useState)(a),
                        y = x[0],
                        w = x[1],
                        b = (0, Ye.useState)(!1),
                        A = b[0],
                        Z = b[1],
                        k = (0, Ye.useState)(((r.X1 || 0) - (r.X2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100),
                        S = k[0],
                        E = k[1],
                        P = (0, Ye.useState)(((r.Y1 || 0) - (r.Y2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100),
                        T = P[0],
                        C = P[1],
                        D = (0, Ye.useState)(((r.X2 || 0) - (r.X1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100),
                        R = D[0],
                        O = D[1],
                        I = (0, Ye.useState)(((r.Y2 || 0) - (r.Y1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100),
                        M = I[0],
                        L = I[1],
                        B = (0, Ye.useRef)(null),
                        X = (0, Ye.useRef)(null);
                    (0, Ye.useEffect)((function() {
                        E(((r.X1 || 0) - (r.X2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100), C(((r.Y1 || 0) - (r.Y2 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100), O(((r.X2 || 0) - (r.X1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.width) || 720) / 100), L(((r.Y2 || 0) - (r.Y1 || 0)) / 2 * ((null === c || void 0 === c ? void 0 : c.height) || 720) / 100)
                    }), [r.X1, r.X2, r.Y1, r.Y2]);
                    var N = function(n) {
                            var e = lc(n.code);
                            e && (y ? (r.KeyIn = e, h(e.length)) : A && (r.KeyOut = e, m(e.length)), n.target.value = e)
                        },
                        K = function(n) {
                            dc = dc.filter((function(e) {
                                return e !== n.code
                            }))
                        },
                        j = function(n) {
                            y ? (r.KeyIn = "MouseRButton", h("MouseRButton".length)) : A && (r.KeyOut = "MouseRButton", m("MouseRButton".length)), n.target.value = "MouseRButton"
                        };
                    return (0, Ye.useEffect)((function() {
                        l || (w(!1), Z(!1))
                    }), [l]), (0, Ye.useEffect)((function() {
                        var n, e;
                        y && (null === (n = B.current) || void 0 === n || n.focus()), A && (null === (e = X.current) || void 0 === e || e.focus())
                    }), [y, A]), l ? (0, et.BX)(et.HY, {
                        children: [!y && (0, et.tZ)("span", {
                            className: "overlayKeyValue",
                            onClick: function() {
                                l && w(!0)
                            },
                            style: {
                                pointerEvents: l ? "all" : "none",
                                position: "absolute",
                                minHeight: "16px",
                                transform: "translate(".concat(S, "px, ").concat(T, "px)")
                            },
                            children: s
                        }), y && (0, et.tZ)("input", {
                            value: r.KeyIn,
                            ref: B,
                            type: "text",
                            id: "".concat(r.$type, "-key-input"),
                            required: !0,
                            onKeyDown: N,
                            onKeyUp: K,
                            onBlur: function() {
                                w(!1)
                            },
                            size: f,
                            onContextMenu: function(n) {
                                j(n), n.preventDefault()
                            },
                            style: {
                                pointerEvents: l ? "all" : "none",
                                position: "absolute",
                                transform: "translate(".concat(S, "px, ").concat(T, "px)")
                            }
                        }), !A && (0, et.tZ)("span", {
                            className: "overlayKeyValue",
                            onClick: function() {
                                l && Z(!0)
                            },
                            style: {
                                pointerEvents: l ? "all" : "none",
                                position: "absolute",
                                transform: "translate(".concat(R, "px, ").concat(M, "px)"),
                                minHeight: "16px"
                            },
                            children: u
                        }), A && (0, et.tZ)("input", {
                            value: r.KeyOut,
                            ref: X,
                            type: "text",
                            id: "".concat(r.$type, "-key-input"),
                            required: !0,
                            onKeyDown: N,
                            onKeyUp: K,
                            onBlur: function() {
                                Z(!1)
                            },
                            size: v,
                            onContextMenu: function(n) {
                                j(n), n.preventDefault()
                            },
                            style: {
                                pointerEvents: l ? "all" : "none",
                                position: "absolute",
                                transform: "translate(".concat(R, "px, ").concat(M, "px)")
                            }
                        })]
                    }) : null
                },
                hc = function(n) {
                    var e, t, i, o = n.controlKey,
                        r = n.gamepad,
                        a = n.control,
                        d = n.newControl,
                        l = (0, Ye.useState)((null === (e = a.KeyActivate) || void 0 === e ? void 0 : e.length) || 1),
                        c = l[0],
                        s = l[1],
                        u = (0, Ye.useState)(d),
                        p = u[0],
                        f = u[1],
                        h = (0, Ye.useRef)(null),
                        g = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        v = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        m = null === (t = null === g || void 0 === g ? void 0 : g.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                        x = (a.XRadius || 8) * ((null === m || void 0 === m ? void 0 : m.height) || 720) / 100;
                    return (0, Ye.useEffect)((function() {
                        v || f(!1)
                    }), [v]), (0, Ye.useEffect)((function() {
                        var n;
                        p && v && (null === (n = h.current) || void 0 === n || n.focus())
                    }), [p]), (0, et.BX)(et.HY, {
                        children: [!p && (oc[o] ? (0, et.tZ)("span", {
                            className: "overlayKeyValue",
                            children: (0, et.tZ)("img", {
                                src: null === (i = oc[o]) || void 0 === i ? void 0 : i.src,
                                alt: ""
                            })
                        }) : (0, et.tZ)("span", {
                            className: "overlayKeyValue MobaText ".concat(o),
                            children: r ? Vl(o) : Ql(o)
                        })), v && (0, et.tZ)(ic, {
                            radius: x
                        }), p && v && (0, et.tZ)("input", {
                            value: a.KeyActivate,
                            ref: h,
                            type: "text",
                            id: "".concat(a.$type, "-key-input"),
                            required: !0,
                            onKeyDown: function(n) {
                                var e = lc(n.code);
                                e && (a.KeyActivate = e, s(e.length), n.target.value = e)
                            },
                            onKeyUp: function(n) {
                                dc = dc.filter((function(e) {
                                    return e !== n.code
                                }))
                            },
                            onBlur: function() {
                                f(!1)
                            },
                            size: c,
                            onContextMenu: function(n) {
                                var e;
                                e = n, a.KeyActivate = "MouseRButton", s("MouseRButton".length), e.target.value = "MouseRButton", n.preventDefault()
                            },
                            style: {
                                pointerEvents: v ? "all" : "none"
                            }
                        })]
                    })
                },
                gc = function(n) {
                    n.control;
                    var e = (0, He.v9)((function(n) {
                        return n.imap.keymappingEditMode
                    }));
                    return e ? (0, et.tZ)("span", {
                        style: {
                            pointerEvents: e ? "all" : "none",
                            minWidth: "28px",
                            minHeight: "16px"
                        },
                        children: (0, et.tZ)("img", {
                            src: (0, Xt.j)($l),
                            alt: ""
                        })
                    }) : null
                },
                vc = function(n) {
                    var e, t, i = n.control,
                        o = n.newControl,
                        r = Ql(i.KeyMove),
                        a = (0, Ye.useState)((null === (e = i.KeyMove) || void 0 === e ? void 0 : e.length) || 1),
                        d = a[0],
                        l = a[1],
                        c = (0, Ye.useState)(o),
                        s = c[0],
                        u = c[1],
                        p = (0, Ye.useRef)(null),
                        f = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        }));
                    return (0, Ye.useEffect)((function() {
                        f || u(!1)
                    }), [f]), (0, Ye.useEffect)((function() {
                        var n;
                        s && (null === (n = p.current) || void 0 === n || n.focus())
                    }), [s]), f ? (0, et.BX)(et.HY, {
                        children: [!s && (0, et.tZ)("span", {
                            className: "overlayKeyValue ".concat(i.Type, " ").concat(oc[r] ? "DpadImage" : ""),
                            onClick: function() {
                                var n;
                                f && u(!0), null === (n = p.current) || void 0 === n || n.focus()
                            },
                            style: {
                                pointerEvents: f ? "all" : "none",
                                minWidth: "28px",
                                minHeight: "16px"
                            },
                            children: oc[r] ? (0, et.tZ)("img", {
                                src: null === (t = oc[r]) || void 0 === t ? void 0 : t.src,
                                alt: ""
                            }) : r
                        }), s && f && (0, et.tZ)("input", {
                            ref: p,
                            value: i.KeyMove,
                            type: "text",
                            id: "".concat(i.$type, "-key-input"),
                            required: !0,
                            onKeyDown: function(n) {
                                var e = lc(n.code);
                                e && (i.KeyMove = e, l(e.length), n.target.value = e)
                            },
                            onKeyUp: function(n) {
                                dc = dc.filter((function(e) {
                                    return e !== n.code
                                }))
                            },
                            onBlur: function() {
                                u(!1)
                            },
                            size: d,
                            onContextMenu: function(n) {
                                var e;
                                e = n, i.KeyMove = "MouseRButton", l("MouseRButton".length), e.target.value = "MouseRButton", n.preventDefault()
                            },
                            style: {
                                pointerEvents: f ? "all" : "none"
                            }
                        })]
                    }) : null
                },
                mc = function(n, e, t, i, o) {
                    void 0 === o && (o = !1);
                    var r = kt.Z.getState().imap.keymappingEditMode;
                    switch (n.Type) {
                        case pl.x_.Tap:
                        case pl.x_.TapRepeat:
                        case pl.x_.Script:
                        case pl.x_.Swipe:
                        case pl.x_.State:
                            return (0, et.tZ)(uc, {
                                gamepad: e,
                                control: n,
                                newControl: i
                            });
                        case pl.x_.Dpad:
                            return (0, et.tZ)(cc, {
                                gamepad: e,
                                height: t.height || 500,
                                control: n,
                                newControl: i
                            });
                        case pl.x_.FreeLook:
                            return (0, et.tZ)(sc, {
                                gamepad: e,
                                height: t.height || 500,
                                control: n,
                                newControl: i
                            });
                        case pl.x_.Pan:
                            return (0, et.tZ)(pc, {
                                gamepad: e,
                                control: n,
                                newControl: i,
                                isPanLeftControl: o
                            });
                        case pl.x_.MOBASkill:
                            var a = e ? n.KeyActivate_alt1 : n.KeyActivate;
                            if (a || r) return (0, et.tZ)(hc, {
                                controlKey: a || "",
                                gamepad: e,
                                control: n,
                                newControl: i
                            });
                            break;
                        case pl.x_.Zoom:
                            return (0, et.tZ)(fc, {
                                gamepad: e,
                                control: n,
                                newControl: i
                            });
                        case pl.x_.EdgeScroll:
                        case pl.x_.Scroll:
                            return (0, et.tZ)(gc, {
                                control: n
                            });
                        case pl.x_.MOBADpad:
                            return (0, et.tZ)(vc, {
                                control: n,
                                newControl: i
                            });
                        default:
                            if (r) return (0, et.tZ)("span", {
                                className: "overlayKeyValue ".concat(n.Type),
                                style: {
                                    pointerEvents: r ? "all" : "none",
                                    minWidth: "28px",
                                    minHeight: "16px"
                                }
                            })
                    }
                    return ""
                },
                xc = function() {
                    return (xc = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                yc = function(n) {
                    var e = n.children,
                        t = n.style,
                        i = void 0 === t ? {} : t,
                        o = n.className,
                        r = n.controlRef,
                        a = n.callback,
                        d = n.isPanLeftControl,
                        l = void 0 !== d && d,
                        c = (0, Ye.useRef)(null),
                        s = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        u = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        p = (0, Ye.useState)(!1),
                        f = p[0],
                        h = p[1],
                        g = (0, He.I0)(),
                        v = 0,
                        m = 0,
                        x = 0,
                        y = 0,
                        w = !1;

                    function b(n, e) {
                        var t, i = n + x,
                            o = e + y,
                            r = null === (t = null === s || void 0 === s ? void 0 : s.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                        (null === c || void 0 === c ? void 0 : c.current) && (r && (i = Math.min(Math.max(i, r.left), r.right), o = Math.min(Math.max(o, r.top), r.bottom)), c.current.style.transform = "translate3d(".concat(i - x, "px, ").concat(o - y, "px, 0)"))
                    }

                    function A(n) {
                        var e, t, i = kt.Z.getState().play.orientation;
                        n.preventDefault();
                        var o = (null === (e = null === c || void 0 === c ? void 0 : c.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                            r = (null === (t = null === c || void 0 === c ? void 0 : c.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                        if ("touchmove" === n.type) {
                            var a = n;
                            if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === qe.cj.landscape) {
                                if (a.touches[0].clientX - o < 5 && a.touches[0].clientY - 10 < 5 || window.innerWidth - a.touches[0].clientX < 10 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientX - o < 5 && window.innerHeight - a.touches[0].clientY < r + 10 || a.touches[0].clientY - 10 < 5 && window.innerWidth - a.touches[0].clientX < 10) return;
                                if (a.touches[0].clientX - o < 5) return v = a.touches[0].clientY, m = window.innerWidth - o - 5, void b(v, m);
                                if (a.touches[0].clientY - 10 < 5) return v = 5, m = window.innerWidth - a.touches[0].clientX, void b(v, m);
                                if (window.innerWidth - a.touches[0].clientX < 10) return void b(v = a.touches[0].clientY, m = 10);
                                if (window.innerHeight - a.touches[0].clientY < r + 10) return v = window.innerHeight - r - 10, m = window.innerWidth - a.touches[0].clientX, void b(v, m);
                                v = a.touches[0].clientY, m = window.innerWidth - a.touches[0].clientX
                            } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === qe.cj.landscape) {
                                if (a.touches[0].clientX - 10 < 5 && a.touches[0].clientY < 5 || window.innerWidth - a.touches[0].clientX < r + 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientX - 10 < 5 && window.innerHeight - a.touches[0].clientY < o + 5 || a.touches[0].clientY < 5 && window.innerWidth - a.touches[0].clientX < r + 5) return;
                                if (a.touches[0].clientX - 10 < 5) return v = 5, m = a.targetTouches[0].clientY, void b(v, m);
                                if (a.touches[0].clientY < 5) return void b(v = a.targetTouches[0].clientX, m = 5);
                                if (window.innerWidth - a.touches[0].clientX < r + 5) return v = window.innerWidth - r - 5, m = a.targetTouches[0].clientY, void b(v, m);
                                if (window.innerHeight - a.touches[0].clientY < o + 5) return v = a.targetTouches[0].clientX, m = window.innerHeight - o - 5, void b(v, m);
                                v = a.targetTouches[0].clientX, m = a.targetTouches[0].clientY
                            } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === qe.cj.portrait) {
                                if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 || a.touches[0].clientX > window.innerWidth - (r + 5) && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientX < 5 && window.innerHeight < a.touches[0].clientY + o + 5 || a.touches[0].clientY < 5 && a.touches[0].clientX > window.innerWidth - (r + 5)) return;
                                if (a.touches[0].clientX < 5) return v = 5, m = a.touches[0].clientY, void b(v, m);
                                if (a.touches[0].clientY < 5) return void b(v = a.touches[0].clientX, m = 5);
                                if (a.touches[0].clientX > window.innerWidth - (r + 5)) return v = window.innerWidth - (r + 5), m = a.touches[0].clientY, void b(v, m);
                                if (a.touches[0].clientY > window.innerHeight - (o + 5)) return v = a.touches[0].clientX, m = window.innerHeight - (o + 5), void b(v, m);
                                v = a.touches[0].clientX, m = a.touches[0].clientY
                            } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === qe.cj.portrait) {
                                if (a.touches[0].clientX < 5 && a.touches[0].clientY < 5 + r || a.touches[0].clientX < 5 && a.touches[0].clientY + 5 > window.innerHeight || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY < 5 + r || a.touches[0].clientX > window.innerWidth - (o + 5) && a.touches[0].clientY + 5 > window.innerHeight) return;
                                if (a.touches[0].clientX < 5) return void b(v = window.innerHeight - a.targetTouches[0].clientY, m = 5);
                                if (a.touches[0].clientY < 5 + r) return v = window.innerHeight - (5 + r), m = a.targetTouches[0].clientX, void b(v, m);
                                if (a.touches[0].clientX > window.innerWidth - (o + 5)) return v = window.innerHeight - a.targetTouches[0].clientY, m = window.innerWidth - (o + 5), void b(v, m);
                                if (a.touches[0].clientY + 5 > window.innerHeight) return v = 5, m = a.targetTouches[0].clientX, void b(v, m);
                                v = window.innerHeight - a.targetTouches[0].clientY, m = a.targetTouches[0].clientX
                            }
                        } else {
                            if ((a = n).clientX - r < 5 || a.clientY < 20) return;
                            if (window.innerWidth - a.clientX < 20 || window.innerHeight - a.clientY < o - 20) return;
                            v = a.clientX - x, m = a.clientY - y, w = !0
                        }
                        b(v, m)
                    }
                    var Z = function() {
                        g({
                            type: Et.Z.DRAGGABLE,
                            payload: {
                                draggableState: w ? "drag" : "click"
                            }
                        })
                    };

                    function k(n) {
                        var e, t, i = null === (e = null === s || void 0 === s ? void 0 : s.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                            o = w;
                        if (w = !1, Z(), x = v, y = m, v = 0, m = 0, document.removeEventListener("mouseup", k, !0), document.removeEventListener("mousemove", A, !1), o) {
                            var d = null === (t = r.current) || void 0 === t ? void 0 : t.getBoundingClientRect();
                            if (c.current && i && (c.current.style.transform = "unset", d)) {
                                var u, p = 0,
                                    f = 0;
                                if ("touchmove" === n.type) p = (u = n).touches[0].clientX, f = u.touches[0].clientY;
                                else p = (u = n).clientX, f = u.clientY;
                                a && a(p, f, l)
                            }
                        }
                    }

                    function S(n) {
                        if (kt.Z.getState().imap.keymappingEditMode) {
                            var e = kt.Z.getState().play.orientation;
                            if ((0, Ue.DJ)())(e === qe.cj.landscape ? 90 : 0) !== window.orientation && g({
                                type: Et.Z.UPDATE_ORIENTATION,
                                payload: {
                                    orientation: 90 === window.orientation ? qe.cj.landscape : qe.cj.portrait
                                }
                            });
                            if ("mousedown" === n.type) {
                                var t = n,
                                    i = t.target;
                                if ("ng-vol" === i.id || "volume-slider" === i.id || "sensitivity-slider" === i.id || "sensitivty-box" === i.id) return;
                                w = !1, Z(), x = t.clientX - v, y = t.clientY - m
                            }
                            document.addEventListener("mousemove", A, !1), document.addEventListener("mouseup", k, !0)
                        }
                    }
                    return (0, Ye.useEffect)((function() {
                        var n = null === c || void 0 === c ? void 0 : c.current;
                        f && !u && (null === n || void 0 === n || n.removeEventListener("touchstart", S, !1), null === n || void 0 === n || n.removeEventListener("touchend", k, !1), null === n || void 0 === n || n.removeEventListener("touchmove", A, !1), null === n || void 0 === n || n.removeEventListener("mousedown", S, !1), h(!1)), u && (f || (null === n || void 0 === n || n.addEventListener("touchstart", S, !1), null === n || void 0 === n || n.addEventListener("touchend", k, !1), null === n || void 0 === n || n.addEventListener("touchmove", A, !1), null === n || void 0 === n || n.addEventListener("mousedown", S), h(!0)))
                    }), [u]), (0, et.tZ)("div", {
                        ref: c,
                        className: "drag-react ".concat(o),
                        style: xc({
                            position: u ? "fixed" : "unset",
                            zIndex: 13,
                            width: "fill-content",
                            pointerEvents: "unset"
                        }, i),
                        children: e
                    })
                },
                wc = function() {
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
                bc = function() {
                    this.Tweaks = 0, this.Exclusive = !1, this.ExclusiveDelay = 200, this.Enabled = !0, this.XExpr = "", this.YExpr = "", this.XOverlayOffset = "", this.YOverlayOffset = "", this.StartCondition = "", this.EnableCondition = "", this.ShowOnOverlay = !0
                },
                Ac = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                    return "key";
                                case "GuidanceKey":
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Key = "", e.Key_alt1 = "", e.GuidanceKey = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Zc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKey":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Count":
                                case "Delay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "RepeatUntilKeyUp":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Key = "", e.Key_alt1 = "", e.GuidanceKey = "", e.Count = 1, e.Delay = 16, e.RepeatUntilKeyUp = !0, e
                    }
                    return wc(e, n), e
                }(bc),
                kc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "Override":
                                    return "boolean";
                                case "Speed":
                                case "Amplitude":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Speed = 100, e.Amplitude = 20, e.Override = !0, e
                    }
                    return wc(e, n), e
                }(bc),
                Sc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "KeyUp":
                                case "KeyUp_alt1":
                                case "KeyDown":
                                case "KeyDown_alt1":
                                case "KeyLeft":
                                case "KeyLeft_alt1":
                                case "KeyRight":
                                case "KeyRight_alt1":
                                case "KeySpeedModifier1":
                                case "KeySpeedModifier1_alt1":
                                case "KeySpeedModifier2":
                                case "KeySpeedModifier2_alt1":
                                case "GamepadStick":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyUp":
                                case "GuidanceKeyDown":
                                case "GuidanceKeyLeft":
                                case "GuidanceKeyRight":
                                case "GuidanceKeySpeedModifier1":
                                case "GuidanceKeySpeedModifier2":
                                case "GuidanceDpadTitle":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "ActivationSpeed":
                                case "ActivationTime":
                                case "DeadExpiryTime":
                                case "AnalogType":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                    return "boolean";
                                case "XRadius":
                                case "XRadius1":
                                case "XRadius2":
                                case "DeadZoneRadius":
                                case "Speed":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.KeyUp = "W", e.KeyUp_alt1 = "", e.GuidanceKeyUp = "Up", e.KeyDown = "S", e.KeyDown_alt1 = "", e.GuidanceKeyDown = "Down", e.KeyRight = "D", e.KeyRight_alt1 = "", e.GuidanceKeyRight = "Right", e.KeyLeft = "A", e.KeyLeft_alt1 = "", e.GuidanceKeyLeft = "Left", e.KeySpeedModifier1 = "", e.KeySpeedModifier1_alt1 = "", e.GuidanceKeySpeedModifier1 = "", e.KeySpeedModifier2 = "", e.KeySpeedModifier2_alt1 = "", e.GuidanceKeySpeedModifier2 = "", e.GamepadStick = "", e.XRadius = 0, e.XRadius1 = 0, e.XRadius2 = 0, e.DeadZoneRadius = 0, e.Speed = 100, e.ActivationSpeed = 0, e.ActivationTime = 0, e.DeadExpiryTime = 0, e.AnalogType = 0, e.GuidanceDpadTitle = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Ec = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                case "KeyStartStop":
                                case "KeyStartStop_alt1":
                                case "KeySuspend":
                                case "KeySuspend_alt1":
                                case "KeyLookAround":
                                case "KeyLookAround_alt1":
                                case "GamepadStick":
                                case "KeyAction":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyStartStop":
                                case "GuidanceKeySuspend":
                                case "GuidanceKeyLookAround":
                                case "LButtonXExpr":
                                case "LButtonYExpr":
                                case "LButtonXOverlayOffset":
                                case "LButtonYOverlayOffset":
                                case "LookAroundXExpr":
                                case "LookAroundYExpr":
                                case "LookAroundXOverlayOffset":
                                case "LookAroundYOverlayOffset":
                                case "LookAroundShowOnOverlayExpr":
                                case "LButtonShowOnOverlayExpr":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "WaitAfterShootTime":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "AutoDisable":
                                case "MouseAcceleration":
                                case "IsLookAroundEnabled":
                                case "IsShootOnClickEnabled":
                                    return "boolean";
                                case "Sensitivity":
                                case "SensitivityRatio":
                                case "LButtonX":
                                case "LButtonY":
                                case "LookAroundX":
                                case "LookAroundY":
                                case "GamepadSensitivity":
                                case "DeadzoneRadius":
                                case "Left":
                                case "Right":
                                case "Top":
                                case "Bottom":
                                case "Speed":
                                case "ActivationTimeMs":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.KeyStartStop = "F1", e.KeyStartStop_alt1 = "", e.GuidanceKeyStartStop = "", e.KeySuspend = "Alt", e.KeySuspend_alt1 = "", e.GuidanceKeySuspend = "", e.KeyLookAround = "", e.KeyLookAround_alt1 = "", e.GuidanceKeyLookAround = "", e.Sensitivity = 1, e.SensitivityRatio = 1, e.LButtonX = -1, e.LButtonY = -1, e.LookAroundX = -1, e.LookAroundY = -1, e.AutoDisable = !1, e.MouseAcceleration = !1, e.IsLookAroundEnabled = !1, e.IsShootOnClickEnabled = !1, e.GamepadStick = "", e.GamepadSensitivity = 1, e.DeadzoneRadius = 14, e.Left = 250, e.Right = 250, e.Top = 1e3, e.Bottom = 1e3, e.Speed = 10, e.ActivationTimeMs = 40, e.KeyAction = "MouseLButton", e.WaitAfterShootTime = -1, e.LButtonXExpr = "", e.LButtonYExpr = "", e.LButtonXOverlayOffset = "", e.LButtonYOverlayOffset = "", e.LookAroundXExpr = "", e.LookAroundYExpr = "", e.LookAroundXOverlayOffset = "", e.LookAroundYOverlayOffset = "", e.LookAroundShowOnOverlayExpr = "", e.LButtonShowOnOverlayExpr = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Pc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                case "KeyUp":
                                case "KeyUp_alt1":
                                case "KeyDown":
                                case "KeyDown_alt1":
                                case "KeyLeft":
                                case "KeyLeft_alt1":
                                case "KeyRight":
                                case "KeyRight_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKey":
                                case "GuidanceKeyUp":
                                case "GuidanceKeyDown":
                                case "GuidanceKeyLeft":
                                case "GuidanceKeyRight":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "DeviceType":
                                case "Delay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "MouseAcceleration":
                                    return "boolean";
                                case "Sensitivity":
                                case "Speed":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Key = "V", e.Key_alt1 = "", e.GuidanceKey = "", e.KeyUp = "Up", e.KeyUp_alt1 = "", e.GuidanceKeyUp = "Up", e.KeyDown = "Down", e.KeyDown_alt1 = "", e.GuidanceKeyDown = "Down", e.KeyRight = "Right", e.KeyRight_alt1 = "", e.GuidanceKeyRight = "Right", e.KeyLeft = "Left", e.KeyLeft_alt1 = "", e.GuidanceKeyLeft = "Left", e.Sensitivity = 1, e.Speed = 10, e.DeviceType = 0, e.Delay = 50, e.MouseAcceleration = !1, e
                    }
                    return wc(e, n), e
                }(bc),
                Tc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X1":
                                case "Y1":
                                case "X2":
                                case "Y2":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKey":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Speed":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "Hold":
                                case "KeyUpStop":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X1 = 0, e.Y1 = 0, e.X2 = 0, e.Y2 = 0, e.Key = "", e.Key_alt1 = "", e.GuidanceKey = "", e.Speed = 200, e.Hold = !1, e.KeyUpStop = !1, e
                    }
                    return wc(e, n), e
                }(bc),
                Cc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X1":
                                case "Y1":
                                case "X2":
                                case "Y2":
                                    return "coord";
                                case "KeyIn":
                                case "KeyIn_alt1":
                                case "KeyOut":
                                case "KeyOut_alt1":
                                case "KeyModifier":
                                case "KeyModifier_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyIn":
                                case "GuidanceKeyOut":
                                case "GuidanceKeyModifier":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Speed":
                                case "Mode":
                                case "ResetDelay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "Override":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X1 = 0, e.Y1 = 0, e.X2 = 0, e.Y2 = 0, e.KeyIn = "", e.KeyIn_alt1 = "", e.GuidanceKeyIn = "", e.KeyOut = "", e.KeyOut_alt1 = "", e.GuidanceKeyOut = "", e.KeyModifier = "", e.KeyModifier_alt1 = "", e.GuidanceKeyModifier = "", e.Speed = 1, e.Mode = 0, e.ResetDelay = 75, e.Override = !0, e
                    }
                    return wc(e, n), e
                }(bc),
                Dc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X1":
                                case "Y1":
                                case "X2":
                                case "Y2":
                                    return "coord";
                                case "KeyModifier":
                                case "KeyModifier_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyModifier":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Speed":
                                case "Amplitude":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "Override":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X1 = 0, e.Y1 = 0, e.X2 = 0, e.Y2 = 0, e.KeyModifier = "", e.KeyModifier_alt1 = "", e.GuidanceKeyModifier = "", e.Speed = 40, e.Amplitude = 25, e.Override = !0, e
                    }
                    return wc(e, n), e
                }(bc),
                Rc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "KeyClock":
                                case "KeyClock_alt1":
                                case "KeyAntiClock":
                                case "KeyAntiClock_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyClock":
                                case "GuidanceKeyAntiClock":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Speed":
                                case "ActivationTime":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                    return "boolean";
                                case "XRadius":
                                case "StartingAngle":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.XRadius = 6, e.StartingAngle = 90, e.Speed = 60, e.ActivationTime = 100, e.KeyClock = "", e.KeyClock_alt1 = "", e.GuidanceKeyClock = "", e.KeyAntiClock = "", e.KeyAntiClock_alt1 = "", e.GuidanceKeyAntiClock = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Oc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "KeyUp":
                                case "KeyUp_alt1":
                                case "KeyDown":
                                case "KeyDown_alt1":
                                case "KeyLeft":
                                case "KeyLeft_alt1":
                                case "KeyRight":
                                case "KeyRight_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyUp":
                                case "GuidanceKeyDown":
                                case "GuidanceKeyLeft":
                                case "GuidanceKeyRight":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Radius":
                                case "MaxAngle":
                                case "Speed":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "AutoReset":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Radius = 10, e.MaxAngle = 45, e.Speed = 45, e.AutoReset = !0, e.KeyUp = "Up", e.KeyUp_alt1 = "", e.GuidanceKeyUp = "", e.KeyDown = "Down", e.KeyDown_alt1 = "", e.GuidanceKeyDown = "", e.KeyRight = "Right", e.KeyRight_alt1 = "", e.GuidanceKeyRight = "", e.KeyLeft = "Left", e.KeyLeft_alt1 = "", e.GuidanceKeyLeft = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Ic = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                case "OriginX":
                                case "OriginY":
                                case "CancelX":
                                case "CancelY":
                                    return "coord";
                                case "KeyMove":
                                case "KeyCancel":
                                case "KeyCancel_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyCancel":
                                case "OriginXExpr":
                                case "OriginYExpr":
                                case "CancelXExpr":
                                case "CancelYExpr":
                                case "cancelXOverlayOffset":
                                case "cancelYOverlayOffset":
                                case "cancelShowOnOverlayExpr":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "IsCancelSkillEnabled":
                                    return "boolean";
                                case "XRadius":
                                case "DpadSpeed":
                                case "CharSpeed":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.OriginX = 50, e.OriginY = 50, e.CancelX = -1, e.CancelY = -1, e.XRadius = 6, e.DpadSpeed = 120, e.CharSpeed = 10, e.IsCancelSkillEnabled = !1, e.KeyMove = "MouseRButton", e.KeyCancel = "", e.KeyCancel_alt1 = "", e.GuidanceKeyCancel = "", e.OriginXExpr = "", e.OriginYExpr = "", e.CancelXExpr = "", e.CancelYExpr = "", e.cancelXOverlayOffset = "", e.cancelYOverlayOffset = "", e.cancelShowOnOverlayExpr = "", e
                    }
                    return wc(e, n), e
                }(bc),
                Mc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                case "OriginX":
                                case "OriginY":
                                case "CancelX":
                                case "CancelY":
                                    return "coord";
                                case "KeyActivate":
                                case "KeyActivate_alt1":
                                case "KeyAutocastToggle":
                                case "KeyAutocastToggle_alt1":
                                case "KeyCancel":
                                case "KeyCancel_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKeyActivate":
                                case "GuidanceKeyAutocastToggle":
                                case "GuidanceKeyCancel":
                                case "OriginXExpr":
                                case "OriginYExpr":
                                case "CancelXExpr":
                                case "CancelYExpr":
                                case "cancelXOverlayOffset":
                                case "cancelYOverlayOffset":
                                case "cancelShowOnOverlayExpr":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "NoCancelOnSwitch":
                                case "NoCancelTime":
                                case "MinSkillTime":
                                case "MinSKillHoldTime":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "IsCancelSkillEnabled":
                                case "AutoAttack":
                                case "StopMOBADpad":
                                case "AdvancedMode":
                                case "AutocastEnabled":
                                    return "boolean";
                                case "YAxisRatio":
                                case "XRadius":
                                case "DeadZoneRadius":
                                case "Speed":
                                case "CancelSpeed":
                                case "MinSwipeRadius":
                                    return "float";
                                case "ExtraData":
                                    return "array";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.OriginX = 50, e.OriginY = 50, e.CancelX = -1, e.CancelY = -1, e.YAxisRatio = 0, e.XRadius = 8, e.DeadZoneRadius = 0, e.Speed = 200, e.CancelSpeed = 200, e.MinSwipeRadius = 0, e.NoCancelOnSwitch = 0, e.NoCancelTime = 0, e.MinSkillTime = 0, e.MinSKillHoldTime = 0, e.IsCancelSkillEnabled = !1, e.AutoAttack = !1, e.StopMOBADpad = !1, e.AdvancedMode = !0, e.AutocastEnabled = !0, e.KeyActivate = "", e.KeyActivate_alt1 = "", e.GuidanceKeyActivate = "", e.KeyAutocastToggle = "", e.KeyAutocastToggle_alt1 = "", e.GuidanceKeyAutocastToggle = "", e.KeyCancel = "", e.KeyCancel_alt1 = "", e.GuidanceKeyCancel = "", e.GamepadStick = "", e.OriginXExpr = "", e.OriginYExpr = "", e.CancelXExpr = "", e.CancelYExpr = "", e.cancelXOverlayOffset = "", e.cancelYOverlayOffset = "", e.cancelShowOnOverlayExpr = "", e.ExtraData = [], e
                    }
                    return wc(e, n), e
                }(bc),
                Lc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKey":
                                case "Name":
                                case "Model":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "Delay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                    return "boolean";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Delay = 0, e.Key = "", e.Key_alt1 = "", e.GuidanceKey = "", e.Name = "", e.Model = "Modifier", e
                    }
                    return wc(e, n), e
                }(bc),
                Bc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                case "ResetDelay":
                                case "SpeedUpWaitTime":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                case "EdgeScrollEnabled":
                                    return "boolean";
                                case "XVelocity":
                                case "YVelocity":
                                case "XActiveMargin":
                                case "YActiveMargin":
                                case "SpeedUpFactor":
                                    return "float";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.XVelocity = 100, e.YVelocity = 100, e.XActiveMargin = 3, e.YActiveMargin = 3, e.SpeedUpFactor = 2, e.ResetDelay = 150, e.SpeedUpWaitTime = 200, e.EdgeScrollEnabled = !0, e
                    }
                    return wc(e, n), e
                }(bc),
                Xc = function(n) {
                    function e() {
                        var e = n.call(this) || this;
                        return e.checkKeyType = function(n) {
                            switch (n) {
                                case "X":
                                case "Y":
                                    return "coord";
                                case "Key":
                                case "Key_alt1":
                                    return "key";
                                case "XExpr":
                                case "YExpr":
                                case "XOverlayOffset":
                                case "YOverlayOffset":
                                case "StartCondition":
                                case "EnableCondition":
                                case "GuidanceKey":
                                    return "string";
                                case "Tweaks":
                                case "ExclusiveDelay":
                                    return "int";
                                case "Exclusive":
                                case "Enabled":
                                case "ShowOnOverlay":
                                    return "boolean";
                                case "Commands":
                                    return "array";
                                default:
                                    return "string"
                            }
                        }, e.X = 0, e.Y = 0, e.Key = "", e.Key_alt1 = "", e.GuidanceKey = "", e.Commands = [], e
                    }
                    return wc(e, n), e
                }(bc),
                Nc = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, o = 0, r = e.length; o < r; o++) !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)), i[o] = e[o]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                Kc = [];

            function jc(n, e, t) {
                n[e] = t
            }
            var zc, Yc = function(n) {
                    var e, t, i, o = n.control,
                        r = n.isGamepadview,
                        a = n.offset,
                        d = n.index,
                        l = n.deleteCallback,
                        c = n.newControl,
                        s = (0, Rt.$)().t,
                        u = (0, Ye.useRef)(null),
                        p = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        f = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        h = (0, Ye.useState)(!1),
                        g = h[0],
                        v = h[1],
                        m = mc(o, r, a, c),
                        x = o.IsVisibleInOverlay || o.ShowOnOverlay,
                        y = (0, Ye.useState)(o.X),
                        w = y[0],
                        b = y[1],
                        A = (0, Ye.useState)(o.Y),
                        Z = A[0],
                        k = A[1],
                        S = (0, Ye.useState)(!1),
                        E = S[0],
                        P = S[1],
                        T = (0, Ye.useRef)(null),
                        C = (0, Ye.useRef)(null),
                        D = function(n) {
                            switch (n) {
                                case "Tap":
                                    return new Ac;
                                case "TapRepeat":
                                    return new Zc;
                                case "Scroll":
                                    return new kc;
                                case "Dpad":
                                    return new Sc;
                                case "Pan":
                                    return new Ec;
                                case "FreeLook":
                                    return new Pc;
                                case "Swipe":
                                    return new Tc;
                                case "Zoom":
                                    return new Cc;
                                case "MouseZoom":
                                    return new Dc;
                                case "Rotate":
                                    return new Rc;
                                case "Tilt":
                                    return new Oc;
                                case "MOBADpad":
                                    return new Ic;
                                case "MOBASkill":
                                    return new Mc;
                                case "State":
                                    return new Lc;
                                case "EdgeScroll":
                                    return new Bc;
                                case "Script":
                                    return new Xc;
                                default:
                                    return new Ac
                            }
                        }(o.Type),
                        R = Object.keys(D);
                    R.splice(R.indexOf("checkKeyType"), 1), R.splice.apply(R, Nc([R.length - 1, 0], R.splice(0, 11), !1));
                    var O = (0, Ye.useRef)(null),
                        I = 0,
                        M = 0,
                        L = 0,
                        B = 0,
                        X = 0,
                        N = 0,
                        K = 0;

                    function j(n) {
                        var e, t;
                        n.preventDefault();
                        var i = (null === (e = null === O || void 0 === O ? void 0 : O.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                            r = (null === (t = null === O || void 0 === O ? void 0 : O.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                            d = n;
                        if (!(d.clientX - r < 5 || d.clientY < 20) && !(window.innerWidth - d.clientX < 20 || window.innerHeight - d.clientY < i - 20)) {
                            N += (d.clientX - X) / 2, N = Math.max(N, -K), I = d.clientX - L, M = d.clientY - B, X = d.clientX, d.clientY, !0;
                            var l = N + Jl(a.height || 500, (o.XRadius || 5) / 2) + 25,
                                c = N + Jl(a.height || 500, (o.XRadius || 5) / 2) + 20;
                            (null === O || void 0 === O ? void 0 : O.current) && (O.current.style.transform = "translate3d(".concat(l, "px, ").concat(c, "px, 0)"))
                        }
                    }

                    function z(n) {
                        !1, o.XRadius = ((null === o || void 0 === o ? void 0 : o.XRadius) || 0) + 100 * N * 2 / a.height, L = I, B = M, document.removeEventListener("mouseup", z, !0), document.removeEventListener("mousemove", j, !1)
                    }

                    function Y(n) {
                        if ("mousedown" === n.type) {
                            var e = n;
                            !1, L = e.clientX - I, B = e.clientY - M, X = e.clientX, e.clientY, K = Jl(a.height || 500, ((o.XRadius || 3) - 3) / 2)
                        }
                        document.addEventListener("mousemove", j, !1), document.addEventListener("mouseup", z, !0)
                    }(0, Ye.useEffect)((function() {
                        var n;
                        if (u.current) {
                            var e = null === (n = null === p || void 0 === p ? void 0 : p.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                t = (null === e || void 0 === e ? void 0 : e.top) || 0,
                                i = (null === e || void 0 === e ? void 0 : e.left) || 0;
                            u.current.style.left = "".concat(i + (o.X || 0) * ((null === e || void 0 === e ? void 0 : e.width) || 0) / 100, "px"), u.current.style.top = "".concat(t + (o.Y || 0) * ((null === e || void 0 === e ? void 0 : e.height) || 0) / 100, "px")
                        }
                    }), [u]), (0, Ye.useEffect)((function() {
                        var n = null === O || void 0 === O ? void 0 : O.current;
                        T.current && T.current.addEventListener("contextmenu", (function(n) {
                            f && v(!0), n.stopPropagation(), n.preventDefault()
                        })), f ? null === n || void 0 === n || n.addEventListener("mousedown", Y) : null === n || void 0 === n || n.removeEventListener("mousedown", Y, !1)
                    }), [f]), (0, Ye.useEffect)((function() {
                        C.current && C.current.addEventListener("contextmenu", (function(n) {
                            f && v(!0), n.stopPropagation(), n.preventDefault()
                        }))
                    }), [o.LButtonX, o.LButtonY]);
                    var H = function(n) {
                            return !!n.startsWith("Guidance")
                        },
                        _ = function(n, e) {
                            if ("boolean" !== D.checkKeyType(e))
                                if ("coord" === D.checkKeyType(e)) ! function(n, e) {
                                    var t = parseFloat(n.target.value);
                                    t || (t = 0), t < 0 && (t = 0), t > 100 && (t = 100), t = parseFloat(t.toFixed(2)), jc(o, e, t), n.target.value = t.toString(), "X" === e ? b(t) : "Y" === e && k(t)
                                }(n, e);
                                else if ("int" === D.checkKeyType(e)) {
                                (t = parseInt(n.target.value, 10)) || (t = 0), jc(o, e, t), n.target.value = t.toString()
                            } else if ("float" === D.checkKeyType(e)) {
                                (t = parseFloat(n.target.value)) || (t = 0), t = parseFloat(t.toFixed(2)), jc(o, e, t), n.target.value = t.toString()
                            } else if ("string" === D.checkKeyType(e)) {
                                var t;
                                (t = n.target.value) || (t = ""), H(e) && (e = e.replace("Guidance", "")), jc(o.Guidance, e, t), n.target.value = t
                            }
                        },
                        F = function(n, e) {
                            if ("key" === D.checkKeyType(e)) {
                                var t = function(n) {
                                    if (Kc.includes(n)) return null;
                                    var e = ac(n);
                                    return e ? (0 !== Kc.length && (e = "".concat(ac(Kc[Kc.length - 1]), " + ").concat(e)), Kc.push(n), e) : null
                                }(n.code);
                                t && (jc(o, e, t), n.target.value = t), n.preventDefault()
                            }
                        };

                    function U(n) {
                        n.dataTransfer.setData("span", n.currentTarget.id)
                    }(0, Ye.useEffect)((function() {
                        u.current && (u.current.style.top = "".concat(a.top + Jl(a.height, Z || 0), "px"), u.current.style.left = "".concat(a.left + Jl(a.width, w || 0), "px"))
                    }), [w, Z]);
                    var W = function(n) {
                            return void 0 === n && (n = !1), "Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type ? ((o.X1 || 0) + (o.X2 || 0)) / 2 : n ? o.LButtonX || 0 : o.X || 0
                        },
                        G = function(n) {
                            return void 0 === n && (n = !1), "Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type ? ((o.Y1 || 0) + (o.Y2 || 0)) / 2 : n ? o.LButtonY || 0 : o.Y || 0
                        };
                    (0, Ye.useEffect)((function() {
                        b(o.X), k(o.Y)
                    }), [o.X, o.Y]);
                    var V = function(n, e, t) {
                        var i, r = null === (i = null === p || void 0 === p ? void 0 : p.current) || void 0 === i ? void 0 : i.getBoundingClientRect();
                        if (r) {
                            var a = parseInt((100 * (n - r.left) / r.width * 100).toString(), 10) / 100,
                                d = parseInt((100 * (e - r.top) / r.height * 100).toString(), 10) / 100;
                            if ("Zoom" === o.Type || "MouseZoom" === o.Type || "Swipe" === o.Type) {
                                var l = ((o.X2 || 0) - (o.X1 || 0)) / 2,
                                    c = ((o.Y2 || 0) - (o.Y1 || 0)) / 2;
                                jc(o, "X1", a - l), jc(o, "X2", a + l), jc(o, "Y1", d - c), jc(o, "Y2", d + c)
                            }
                            b(a), t ? o.LButtonX = a : o.X = a, k(d), t ? o.LButtonY = d : o.Y = d
                        }
                    };
                    return !x && !f || E ? null : (0, et.BX)(et.HY, {
                        children: ["Pan" === o.Type && (null === (i = null === (t = null === (e = null === Ue.ZP || void 0 === Ue.ZP ? void 0 : Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.gl) || void 0 === i ? void 0 : i.enableImageDetection) && r && (0, et.BX)(et.HY, {
                            children: [o.isShootOnClickEnabled ? (0, et.tZ)("span", {
                                className: "overlayKey LBM",
                                style: {
                                    left: a.left + Jl(a.width, o.LButtonX || 0),
                                    top: a.top + Jl(a.height, o.LButtonY || 0)
                                },
                                children: (0, et.BX)("span", {
                                    className: "overlayKeyValue",
                                    children: [(0, et.tZ)("img", {
                                        src: "".concat(jl.src),
                                        alt: ""
                                    }), " ", ":"]
                                })
                            }) : null, o.isLookAroundEnabled ? (0, et.tZ)("span", {
                                className: "overlayKey Tap ".concat(r ? "gamepad" : ""),
                                style: {
                                    left: a.left + Jl(a.width, o.LookAroundX || 0),
                                    top: a.top + Jl(a.height, o.LookAroundY || 0)
                                },
                                children: (0, et.tZ)("span", {
                                    className: "overlayKeyValue",
                                    children: o.KeyLookAround
                                })
                            }) : null]
                        }), "MOBASkill" === o.Type && o.CancelX && o.CancelX > 0 && o.CancelY && o.CancelY > 0 && (0, et.tZ)("span", {
                            className: "overlayKey Tap",
                            style: {
                                left: a.left + Jl(a.width, o.CancelX),
                                top: a.top + Jl(a.height, o.CancelY)
                            },
                            children: (0, et.tZ)("span", {
                                className: "overlayKeyValue",
                                children: r ? Vl(o.KeyCancel_alt1) : o.KeyCancel
                            })
                        }), m && (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(yc, {
                                className: "overlayKey ".concat(r ? "gamepad" : ""),
                                controlRef: T,
                                callback: V,
                                children: (0, et.tZ)("span", {
                                    ref: T,
                                    className: "overlayKey ".concat(o.Type, " ").concat(r ? "gamepad" : "", "\n                  ").concat(f ? "editMode" : ""),
                                    style: {
                                        left: a.left + Jl(a.width, W()),
                                        top: a.top + Jl(a.height, G()),
                                        aspectRatio: f ? "1" : "unset",
                                        background: f ? Hd.qm.colors.white80 : "unset",
                                        border: f ? Hd.qm.border.base : "unset",
                                        borderRadius: f ? "50%" : "unset",
                                        display: f ? "flex" : "unset",
                                        alignItems: f ? "center" : "unset",
                                        padding: f ? "4px" : "unset",
                                        color: f ? "black" : "unset",
                                        transform: "translate(-50%, -50%)",
                                        fontWeight: f ? "700" : "unset",
                                        width: "max-content",
                                        justifyContent: "center",
                                        pointerEvents: "all"
                                    },
                                    draggable: f,
                                    onDragStart: U,
                                    children: m
                                }, "".concat(o.$type, "-").concat(d))
                            }), "Pan" === o.Type && (-1 !== o.LButtonX || -1 !== o.LButtonY) && (0, et.tZ)(yc, {
                                className: "overlayKey ".concat(r ? "gamepad" : ""),
                                controlRef: C,
                                callback: V,
                                isPanLeftControl: !0,
                                children: (0, et.tZ)("span", {
                                    ref: C,
                                    className: "overlayKey ".concat(o.Type, " ").concat(r ? "gamepad" : "", "\n                    ").concat(f ? "editMode" : ""),
                                    style: {
                                        left: a.left + Jl(a.width, W(!0)),
                                        top: a.top + Jl(a.height, G(!0)),
                                        aspectRatio: f ? "1" : "unset",
                                        background: f ? Hd.qm.colors.white80 : "unset",
                                        border: f ? Hd.qm.border.base : "unset",
                                        borderRadius: f ? "50%" : "unset",
                                        display: f ? "flex" : "unset",
                                        alignItems: f ? "center" : "unset",
                                        padding: f ? "4px" : "unset",
                                        color: f ? "black" : "unset",
                                        transform: "translate(-50%, -50%)",
                                        fontWeight: f ? "700" : "unset",
                                        width: "max-content",
                                        justifyContent: "center",
                                        pointerEvents: "all"
                                    },
                                    draggable: f,
                                    onDragStart: U,
                                    children: mc(o, r, a, c, !0)
                                }, "".concat(o.$type, "-").concat(d))
                            }), f && o.XRadius && (0, et.tZ)("img", {
                                src: (0, Xt.j)(Yl),
                                alt: "drag",
                                style: {
                                    width: "20px",
                                    height: "20px",
                                    transform: "translateX(".concat(Jl(a.height || 500, o.XRadius / 2) + 25, "px) translateY(").concat(Jl(a.height || 500, o.XRadius / 2) + 20, "px)"),
                                    position: "absolute",
                                    left: a.left + Jl(a.height || 500, o.XRadius / 2) + Jl(a.width, W()) + 300 < window.innerWidth ? a.left + Jl(a.width, W()) : window.innerWidth - 300,
                                    top: a.top + Jl(a.height || 500, o.XRadius / 2) + Jl(a.height, G()),
                                    cursor: "nwse-resize"
                                },
                                ref: O
                            }), f && g && (0, et.BX)(_l, {
                                ref: u,
                                style: {
                                    left: a.left + Jl(a.width, W()) + 300 < window.innerWidth ? a.left + Jl(a.width, W()) : window.innerWidth - 300,
                                    top: a.top + Jl(a.height, G()),
                                    height: window.innerHeight - (a.top + Jl(a.height, G())) - 52
                                },
                                children: [(0, et.BX)(Fl, {
                                    children: [(0, et.tZ)(Mt.js, {
                                        children: o.Type
                                    }), (0, et.tZ)(_o.A3, {
                                        onClick: function() {
                                            v(!1)
                                        },
                                        children: (0, et.tZ)(va.Z, {
                                            name: "cross-thin",
                                            size: 14
                                        })
                                    })]
                                }), (0, et.tZ)(Gl, {
                                    style: {
                                        height: window.innerHeight - (a.top + Jl(a.height, G())) - ("Pan" === o.Type ? 202 : 152)
                                    },
                                    children: R.map((function(n) {
                                        var e, t, i, r, a;
                                        return (0, et.BX)(Ul, {
                                            children: [(0, et.tZ)(Mt.T6, {
                                                title: n,
                                                children: n
                                            }), (0, et.tZ)(Wl, {
                                                id: "controls-box",
                                                type: "DeviceType" === n ? "text" : typeof(null === (e = Object.getOwnPropertyDescriptor(D, n)) || void 0 === e ? void 0 : e.value),
                                                value: H(n) ? null === (t = Object.getOwnPropertyDescriptor(o.Guidance, n.replace("Guidance", ""))) || void 0 === t ? void 0 : t.value : "DeviceType" === n ? (null === (i = Object.getOwnPropertyDescriptor(o, n)) || void 0 === i ? void 0 : i.value) ? "Mobile" : "Desktop" : null === (r = Object.getOwnPropertyDescriptor(o, n)) || void 0 === r ? void 0 : r.value,
                                                onChange: function(e) {
                                                    return _(e, n)
                                                },
                                                onClick: function(e) {
                                                    return function(n, e) {
                                                        "boolean" === D.checkKeyType(e) ? (jc(o, e, "false" === n.target.value), n.target.value = "false" === n.target.value ? "true" : "false") : "DeviceType" === e && (jc(o, e, "Mobile" === n.target.value ? 0 : 1), n.target.value = "Mobile" === n.target.value ? "Desktop" : "Mobile")
                                                    }(e, n)
                                                },
                                                readOnly: "boolean" === typeof(null === (a = Object.getOwnPropertyDescriptor(D, n)) || void 0 === a ? void 0 : a.value) || "DeviceType" === n,
                                                onKeyDown: function(e) {
                                                    return F(e, n)
                                                },
                                                onKeyUp: function(e) {
                                                    return function(n, e) {
                                                        "key" === D.checkKeyType(e) && (Kc = Kc.filter((function(e) {
                                                            return e !== n.code
                                                        })))
                                                    }(e, n)
                                                },
                                                onContextMenu: function(e) {
                                                    ! function(n, e) {
                                                        "key" === D.checkKeyType(e) && (jc(o, e, "MouseRButton"), n.target.value = "MouseRButton")
                                                    }(e, n), e.preventDefault()
                                                }
                                            })]
                                        })
                                    }))
                                }), "Pan" === o.Type && (0, et.tZ)(zl.Jg, {
                                    onChange: function(n) {
                                        -1 !== o.LButtonX || -1 !== o.LButtonY ? (o.KeyAction = "", o.LButtonX = -1, o.LButtonY = -1) : (o.KeyAction = "MouseLButton", o.LButtonX = 50, o.LButtonY = 50)
                                    },
                                    checked: -1 !== o.LButtonX || -1 !== o.LButtonY,
                                    children: (0, et.tZ)(Mt.gd, {
                                        children: "Add Left Button Click"
                                    })
                                }), (0, et.tZ)(xi.z, {
                                    onClick: function() {
                                        l(d), P(!0)
                                    },
                                    style: {
                                        width: "100%"
                                    },
                                    children: s("delete")
                                })]
                            })]
                        })]
                    })
                },
                Hc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                _c = Qe.ZP.div(zc || (zc = Hc(["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n  border-radius: 4px;\n  width: 100%;\n  height: 66px;\n  padding: 4px;\n  text-align: center;\n  align-items: center;\n  border: 1px solid ", ";\n  cursor: pointer;\n\n  h6 {\n    width: 100%;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  height: auto;\n  justify-content: space-between;\n  border-radius: 4px;\n  width: 100%;\n  height: 66px;\n  padding: 4px;\n  text-align: center;\n  align-items: center;\n  border: 1px solid ", ";\n  cursor: pointer;\n\n  h6 {\n    width: 100%;\n    margin: 0;\n    text-overflow: ellipsis;\n    overflow: hidden;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                Fc = ["Tap", "TapRepeat", "Scroll", "Dpad", "Pan", "FreeLook", "Swipe", "Zoom", "MouseZoom", "Rotate", "Tilt", "MOBADpad", "MOBASkill", "State", "EdgeScroll", "Script"];

            function Uc(n, e, t) {
                n[e] = t
            }
            var Wc, Gc, Vc, qc, Qc, Jc, $c, ns, es, ts, is, os, rs, as, ds, ls, cs, ss, us, ps, fs, hs, gs, vs, ms, xs, ys, ws, bs, As, Zs, ks, Ss = function(n) {
                    var e = n.x,
                        t = n.y,
                        i = n.gameControls,
                        o = n.reloadCallback,
                        r = n.closeCallback,
                        a = (0, Rt.$)().t,
                        d = (0, Ye.useRef)(null),
                        l = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        c = function(n, e) {
                            var t = {
                                $type: "".concat(e, ", Bluestacks"),
                                Tweaks: 0,
                                ShowOnOverlay: !0,
                                Type: e,
                                Exclusive: !0,
                                ExclusiveDelay: 0,
                                XExpr: "",
                                YExpr: "",
                                XOverlayOffset: "",
                                YOverlayOffset: "",
                                EnableCondition: "",
                                StartCondition: "",
                                Guidance: {}
                            };
                            return Object.keys(n).forEach((function(e) {
                                var i, o, r;
                                if ("function" !== typeof(null === (i = Object.getOwnPropertyDescriptor(n, e)) || void 0 === i ? void 0 : i.value)) return e.startsWith("Guidance") ? (e = e.replace("Guidance", ""), void Uc(t.Guidance, e.replace("Guidance", ""), null === (o = Object.getOwnPropertyDescriptor(n, "Guidance".concat(e))) || void 0 === o ? void 0 : o.value)) : void Uc(t, e, null === (r = Object.getOwnPropertyDescriptor(n, e)) || void 0 === r ? void 0 : r.value)
                            })), t
                        },
                        s = function(n) {
                            var a, d = function(n) {
                                    switch (n) {
                                        case "Tap":
                                            return new Ac;
                                        case "TapRepeat":
                                            return new Zc;
                                        case "Scroll":
                                            return new kc;
                                        case "Dpad":
                                            return new Sc;
                                        case "Pan":
                                            return new Ec;
                                        case "FreeLook":
                                            return new Pc;
                                        case "Swipe":
                                            return new Tc;
                                        case "Zoom":
                                            return new Cc;
                                        case "MouseZoom":
                                            return new Dc;
                                        case "Rotate":
                                            return new Rc;
                                        case "Tilt":
                                            return new Oc;
                                        case "MOBADpad":
                                            return new Ic;
                                        case "MOBASkill":
                                            return new Mc;
                                        case "State":
                                            return new Lc;
                                        case "EdgeScroll":
                                            return new Bc;
                                        case "Script":
                                            return new Xc;
                                        default:
                                            return new Ac
                                    }
                                }(n),
                                s = c(d, n),
                                u = 50,
                                p = 50,
                                f = null === (a = null === l || void 0 === l ? void 0 : l.current) || void 0 === a ? void 0 : a.getBoundingClientRect();
                            if (f && (u = 100 * (e - f.left) / f.width, p = 100 * (t + 56 - f.top) / f.height, u = parseFloat(u.toFixed(2)), p = parseFloat(p.toFixed(2))), "Swipe" === n) {
                                Uc(s, "X1", u), Uc(s, "X2", u), Uc(s, "Y1", p), Uc(s, "Y2", p - 26.67);
                                var h = c(d, n);
                                Uc(h, "X1", u), Uc(h, "X2", u), Uc(h, "Y1", p), Uc(h, "Y2", p + 26.67);
                                var g = c(d, n);
                                Uc(g, "X1", u), Uc(g, "X2", u - 15), Uc(g, "Y1", p), Uc(g, "Y2", p);
                                var v = c(d, n);
                                Uc(v, "X1", u), Uc(v, "X2", u + 15), Uc(v, "Y1", p), Uc(v, "Y2", p), i.push.apply(i, [s, h, g, v])
                            } else "Zoom" !== n && "MouseZoom" !== n || (Uc(s, "X1", u), Uc(s, "X2", u), Uc(s, "Y1", p - 20), Uc(s, "Y2", p + 20)), Object.keys(d).includes("X") && (Uc(s, "X", u), Uc(s, "Y", p)), i.push(s);
                            r(), o()
                        };
                    return (0, et.BX)(_l, {
                        ref: d,
                        style: {
                            left: "".concat(e, "px"),
                            top: "".concat(t, "px"),
                            height: "360px",
                            width: "360px"
                        },
                        children: [(0, et.BX)(Fl, {
                            children: [(0, et.tZ)(Mt.js, {
                                children: a("addControls")
                            }), (0, et.tZ)(_o.A3, {
                                onClick: r,
                                children: (0, et.tZ)(va.Z, {
                                    name: "cross-thin",
                                    size: 14
                                })
                            })]
                        }), (0, et.tZ)(Gl, {
                            style: {
                                height: "306px",
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))"
                            },
                            children: Fc.map((function(n) {
                                return (0, et.tZ)(_c, {
                                    onClick: function() {
                                        s(n)
                                    },
                                    children: (0, et.tZ)(Mt.T6, {
                                        title: n,
                                        children: n
                                    })
                                })
                            }))
                        })]
                    })
                },
                Es = function() {
                    return (Es = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                Ps = function(n) {
                    var e = n.gameControls,
                        t = n.isGamepadview,
                        i = (0, Ye.useState)({
                            top: 0,
                            left: 0,
                            width: 0,
                            height: 0
                        }),
                        o = i[0],
                        r = i[1],
                        a = (0, He.v9)((function(n) {
                            return n.appPreferences.imapOverlay
                        })),
                        d = (0, He.v9)((function(n) {
                            return n.appPreferences.legacyControls
                        })),
                        l = (0, He.v9)((function(n) {
                            return n.play.showScriptEditor
                        })),
                        c = (0, Ye.useRef)(null),
                        s = (0, Ye.useState)(!1),
                        u = s[0],
                        p = s[1],
                        f = (0, Ye.useState)(!1),
                        h = f[0],
                        g = f[1],
                        v = (0, Ye.useState)(.5 * window.innerHeight),
                        m = v[0],
                        x = v[1],
                        y = (0, Ye.useState)(.5 * window.innerWidth),
                        w = y[0],
                        b = y[1],
                        A = (0, Ye.useState)(!1),
                        Z = A[0],
                        k = A[1],
                        S = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        E = function() {
                            var n = kt.Z.getState().play.videoRef;
                            if (null === n || void 0 === n ? void 0 : n.current) {
                                var e = null === n || void 0 === n ? void 0 : n.current.getBoundingClientRect(),
                                    t = null === n || void 0 === n ? void 0 : n.current.parentNode;
                                if (e && t) {
                                    var i = t.getBoundingClientRect(),
                                        a = {
                                            top: Math.max(e.top - i.top, 0),
                                            left: Math.max(e.left - i.left, 0),
                                            width: e.width,
                                            height: e.height
                                        };
                                    a.left === o.left && a.width === o.width && a.top === o.top && a.height === o.height || r(a)
                                }
                            }
                        };
                    var P = function(n) {
                        x(n.x), b(n.y - 56), g(!0), n.preventDefault()
                    };
                    (0, Ye.useEffect)((function() {
                        return window.addEventListener(pl.Sg, E), c.current && c.current.addEventListener("contextmenu", P),
                            function() {
                                c.current && c.current.removeEventListener("contextmenu", P)
                            }
                    }), []), (0, Ye.useEffect)((function() {
                        E()
                    }), [a, d]);
                    var T = function(n) {
                        e.splice(n, 1), p(!0)
                    };
                    (0, Ye.useEffect)((function() {
                        p(!0)
                    }), [e]), (0, Ye.useEffect)((function() {
                        u && p(!1)
                    }), [u]);
                    var C;
                    return (0, et.BX)(Ml, {
                        ref: c,
                        editing: S,
                        onDrop: function(n) {
                            ! function(n) {
                                var e = n.dataTransfer.getData("span");
                                n.preventDefault(), n.currentTarget.appendChild(document.getElementById(e))
                            }(n)
                        },
                        onDragOver: function(n) {
                            n.preventDefault()
                        },
                        style: {
                            pointerEvents: S ? "all" : "none",
                            zIndex: "10",
                            display: l ? "none" : "block"
                        },
                        children: [h && S && (0, et.tZ)(Ss, {
                            x: m,
                            y: w,
                            gameControls: e,
                            reloadCallback: function() {
                                p(!0), k(!0)
                            },
                            closeCallback: function() {
                                g(!1)
                            }
                        }), (a || S) && d && !u && (C = e, S ? e : C && C.length && zi.ZP.controlIndexToStateMap ? e.map((function(n, e) {
                            if (!(null === zi.ZP || void 0 === zi.ZP ? void 0 : zi.ZP.controlIndexToStateMap) || !(null === zi.ZP || void 0 === zi.ZP ? void 0 : zi.ZP.controlIndexToStateMap[e]) || !(null === zi.ZP || void 0 === zi.ZP ? void 0 : zi.ZP.controlIndexToStateMap[e].enabled)) return null;
                            var t = zi.ZP.controlIndexToStateMap[e];
                            if ("P" === t.type && (n.LButtonX && n.LButtonX >= 0 && n.LButtonY && n.LButtonY >= 0 || n.LookAroundX && n.LookAroundX >= 0 && n.LookAroundY && n.LookAroundY >= 0)) {
                                var i = 1 === t.points[6],
                                    o = 1 === t.points[7];
                                return o || i ? Es(Es({}, n), {
                                    isShootOnClickEnabled: o,
                                    isLookAroundEnabled: i,
                                    X: t.points[0] || n.X,
                                    Y: t.points[1] || n.Y,
                                    LButtonX: t.points[2] || n.LButtonX,
                                    LButtonY: t.points[3] || n.LButtonY,
                                    LookAroundX: t.points[4] || n.LookAroundX,
                                    LookAroundY: t.points[5] || n.LookAroundY
                                }) : null
                            }
                            return "MS" === t.type ? Es(Es({}, n), {
                                X: t.points[0] || n.X,
                                Y: t.points[1] || n.Y,
                                CancelX: t.points[2] || n.CancelX,
                                CancelY: t.points[3] || n.CancelY,
                                OriginX: t.points[4] || n.OriginX,
                                OriginY: t.points[5] || n.OriginY
                            }) : "MD" === t.type ? Es(Es({}, n), {
                                X: t.points[0] || n.X,
                                Y: t.points[1] || n.Y,
                                OriginX: t.points[4] || n.OriginX,
                                OriginY: t.points[5] || n.OriginY
                            }) : "S" === t.type ? Es(Es({}, n), {
                                X1: t.points[0] || n.X1,
                                Y1: t.points[1] || n.Y1,
                                X2: t.points[0] || n.X2,
                                Y2: t.points[1] || n.Y2
                            }) : Es(Es({}, n), {
                                X: t.points[0] || n.X,
                                Y: t.points[1] || n.Y
                            })
                        })).filter((function(n) {
                            return n
                        })) : C).map((function(n, i) {
                            return n && (14 === zi.ZP.cfgParserVersion || n.IsVisibleInOverlay || n.ShowOnOverlay || S) && (0, et.tZ)(Yc, {
                                control: n,
                                isGamepadview: t,
                                offset: o,
                                index: i,
                                deleteCallback: T,
                                newControl: i === e.length - 1 && Z
                            })
                        }))]
                    })
                },
                Ts = t(55791),
                Cs = t(68593),
                Ds = t(34483),
                Rs = {
                    src: "/play/_next/static/media/save.6a7e2a8b.svg",
                    height: 16,
                    width: 16
                },
                Os = {
                    src: "/play/_next/static/media/plus.95fd59e4.svg",
                    height: 12,
                    width: 12
                },
                Is = {
                    src: "/play/_next/static/media/delete.9154f996.svg",
                    height: 12,
                    width: 12
                },
                Ms = t(39600),
                Ls = t(58844),
                Bs = function() {
                    return (Bs = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                Xs = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, o = 0, r = e.length; o < r; o++) !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)), i[o] = e[o]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                Ns = [],
                Ks = function(n) {
                    var e = n.label,
                        t = n.value,
                        i = n.guidanceCategory,
                        o = i && -1 === Ns.indexOf(i);
                    return o && Ns.push(i), (0, et.BX)(et.HY, {
                        children: [o && (0, et.tZ)(Al, {
                            children: i
                        }, "".concat(i)), (0, et.BX)(bl, {
                            children: [(0, et.tZ)("span", {
                                children: e
                            }), (0, et.tZ)("span", {
                                children: t
                            })]
                        }, "".concat(e, "_").concat(t))]
                    })
                },
                js = function(n) {
                    var e = n.type,
                        t = (0, Rt.$)().t;
                    return (0, et.BX)(Sl, {
                        children: [(0, et.tZ)("img", {
                            src: (0, Xt.j)(_i.Z),
                            alt: t("gamepadWarning")
                        }), (0, et.tZ)(Mt.T4, {
                            style: {
                                marginTop: "10px"
                            },
                            children: t("not_supported" === e ? "sidebar.gamepadNotSupported" : "sidebar.gamepadNotDetected")
                        }), (0, et.tZ)(Mt.kk, {
                            children: t("not_supported" === e ? "sidebar.gamepadNotSupportedInfo" : "sidebar.gamepadNotDetectedInfo")
                        })]
                    })
                },
                zs = {},
                Ys = function(n) {
                    var e = n.className,
                        t = (0, Rt.$)().t,
                        i = (0, Ye.useState)(null),
                        o = i[0],
                        r = i[1],
                        a = (0, Ye.useState)(!1),
                        d = a[0],
                        l = a[1],
                        c = (0, Ye.useState)(!!Ts.Z.gamepad),
                        s = c[0],
                        u = c[1],
                        p = (0, Ye.useState)([]),
                        f = p[0],
                        h = p[1],
                        g = (0, Ye.useState)(null),
                        v = g[0],
                        m = g[1],
                        x = (0, Ye.useState)(!1),
                        y = x[0],
                        w = x[1],
                        b = (0, Ye.useState)(!1),
                        A = b[0],
                        Z = b[1],
                        k = (0, Ye.useState)([]),
                        S = k[0],
                        E = k[1],
                        P = (0, He.v9)((function(n) {
                            return n.imap.isActive
                        })),
                        T = (0, He.v9)((function(n) {
                            return n.imap.initialized
                        })),
                        C = (0, He.v9)((function(n) {
                            return n.imap.guideVisible
                        })),
                        D = (0, He.v9)((function(n) {
                            return n.appPreferences.imapOverlay
                        })),
                        R = (0, He.v9)((function(n) {
                            return n.appPreferences.legacyControls
                        })),
                        O = (0, He.v9)((function(n) {
                            return n.appPreferences.imapScheme
                        })),
                        I = (0, He.v9)((function(n) {
                            return n.ads.adsEnded
                        })),
                        M = (0, He.v9)((function(n) {
                            return n.play.showScriptEditor
                        })),
                        L = Ue.ZP.features.nativeControlsList.length > 0,
                        B = Ue.ZP.features.shiftLock,
                        X = (0, Ye.useState)(null),
                        N = X[0],
                        K = X[1],
                        j = (0, Ye.useState)(null),
                        z = j[0],
                        Y = j[1],
                        H = (0, Ye.useRef)(null),
                        _ = (0, Ye.useState)(!1),
                        F = _[0],
                        U = _[1],
                        W = (0, Ye.useState)(""),
                        G = W[0],
                        V = W[1],
                        q = (0, Ye.useState)(""),
                        Q = q[0],
                        J = q[1],
                        $ = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        nn = (0, He.v9)((function(n) {
                            return n.imap.keymappingEditMode
                        })),
                        en = (0, He.v9)((function(n) {
                            return n.play.showTimeLimitExceededScreen
                        })),
                        tn = {
                            ImageId: "",
                            ImageType: "",
                            TextureCRC: "",
                            TextureCoord: [],
                            TextureIndex: 0,
                            VertexIndex: 0,
                            VertexRect: [],
                            MatchColor: ""
                        },
                        on = "5349" === Ue.ZP.appInfo.appId || Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities && Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities.length > 0,
                        rn = (0, He.I0)(),
                        an = function(n) {
                            S.forEach((function(e) {
                                var i;
                                e.Type === pl.x_.Pan && (A ? e.KeyStartStop_alt1 : e.KeyStartStop) && ((i = A ? e.KeyStartStop_alt1 : e.KeyStartStop) && !zs[i] && n && zi.ZP.showLookAroundToasts && ((0, Jd.Am)((0, et.BX)(et.HY, {
                                    children: [t("overlay.look"), " ", (0, et.tZ)("kbd", {
                                        children: Vl(i)
                                    }), " ", t("overlay.tip2")]
                                }), Ki.dO), zs[i] = !0));
                                e.Type === pl.x_.FreeLook && 0 !== e.DeviceType && (A ? e.Key_alt1 : e.Key) && ((i = A ? e.Key_alt1 : e.Key) && !zs[i] && n && zi.ZP.showLookAroundToasts && ((0, Jd.Am)((0, et.BX)(et.HY, {
                                    children: [t("overlay.klook"), " ", (0, et.tZ)("kbd", {
                                        children: Vl(i)
                                    }), " ", t("overlay.tip2")]
                                }), Ki.dO), zi.ZP.showLookAroundToasts = !1, zs[i] = !0))
                            }))
                        },
                        dn = function() {
                            return Ns = [], on || R || rn({
                                type: vl.Z.LEGACY_CONTROLS
                            }), null
                        },
                        ln = function() {
                            dn(), rn({
                                type: gl.Z.TOGGLE_SIDEBAR
                            })
                        },
                        cn = function(n) {
                            for (var e = "".concat(n, " (1)"), t = 1; null === o || void 0 === o ? void 0 : o.ControlSchemes.some((function(n) {
                                    return n.Name === e
                                }));) t += 1, e = "".concat(n, " (").concat(t, ")");
                            return e
                        };
                    (0, Ye.useEffect)((function() {
                        var n = function(n) {
                                var e, t = n.detail;
                                rn({
                                    type: gl.Z.IMAP_STATUS,
                                    payload: {
                                        initialized: !0
                                    }
                                }), r(t);
                                var i = "".concat(kt.Z.getState().play.robloxExperienceId) || sessionStorage.getItem(Hi.$3);
                                i && zi.ZP.experienceStarted(i);
                                var o = Ue.ZP.features.nativeControlsList;
                                "object" !== typeof o || o.length || (null === (e = Ue.ZP.appInfo.playFeFeatures.nativeMouseActivities) || void 0 === e ? void 0 : e.length) || rn({
                                    type: vl.Z.SET_LEGACY_CONTROLS,
                                    payload: {
                                        legacyControls: !0
                                    }
                                })
                            },
                            e = function(n) {
                                var e = n.detail;
                                e.ended || rn((0, $o.i)({
                                    imapOverlay: !0
                                })), rn({
                                    type: vl.Z.SET_LEGACY_CONTROLS,
                                    payload: {
                                        legacyControls: !e.ended
                                    }
                                }), l(!e.ended), r(e.cfg), zi.ZP.updateDimensions()
                            },
                            t = function() {
                                rn({
                                    type: gl.Z.IMAP_STATUS,
                                    payload: {
                                        initialized: !1
                                    }
                                }), r(null)
                            },
                            i = function(n) {
                                var e = n.detail;
                                u(!!e)
                            };
                        return window.addEventListener(pl.UD, n), window.addEventListener(pl.kn, e), window.addEventListener(pl.u5, t), window.addEventListener(pl.eT, i),
                            function() {
                                window.removeEventListener(pl.eT, i), window.removeEventListener(pl.UD, n), window.removeEventListener(pl.kn, e), window.removeEventListener(pl.u5, t)
                            }
                    }), []), (0, Ye.useEffect)((function() {
                        var n = null === o || void 0 === o ? void 0 : o.ControlSchemes.some((function(n) {
                            var e = n.Name,
                                t = n.Selected;
                            return e === O && t
                        }));
                        if (o && !n) {
                            var e = o.ControlSchemes.find((function(n) {
                                return n.Name === O
                            }));
                            if (e) {
                                var t = o.ControlSchemes.map((function(n) {
                                        return n.Name === e.Name ? Bs(Bs({}, n), {
                                            Selected: !0
                                        }) : Bs(Bs({}, n), {
                                            Selected: !1
                                        })
                                    })),
                                    i = Bs(Bs({}, o), {
                                        ControlSchemes: t
                                    });
                                zi.ZP.loadCfg(i), r(i), m({
                                    label: e.Name,
                                    value: e.Name
                                })
                            }
                        }
                    }), [O, o]), (0, Ye.useEffect)((function() {
                        an(R)
                    }), [S]), (0, Ye.useEffect)((function() {
                        dn();
                        var n = null === o || void 0 === o ? void 0 : o.ControlSchemes;
                        if (n && n.forEach((function(n) {
                                var e;
                                if (n.Selected) {
                                    w(n.isGamepadControlsPresent), Ts.Z.setActiveSchemeHasGamepad(n.isGamepadControlsPresent), Y(n);
                                    var t = n.GameControls;
                                    t && E(t), (null === (e = null === n || void 0 === n ? void 0 : n.Images) || void 0 === e ? void 0 : e.length) ? (0, Cs.VX)(Ls.Z.currentPackageName, JSON.stringify({
                                        Images: n.Images.map((function(n) {
                                            return Bs(Bs({}, n), {
                                                DetectPosition: !0
                                            })
                                        }))
                                    })) : (0, Cs.VX)(Ls.Z.currentPackageName, JSON.stringify({
                                        Images: []
                                    }))
                                }
                            })), null === o || void 0 === o ? void 0 : o.ControlSchemes) {
                            var e = null === o || void 0 === o ? void 0 : o.ControlSchemes.reduce((function(n, e) {
                                var t = {
                                    label: e.Name,
                                    value: e.Name
                                };
                                return n.push(t), e.Selected && (Y(e), m(t)), n
                            }), []);
                            e && h(e)
                        }
                    }), [o, A]), (0, Ye.useEffect)((function() {
                        dn(), kt.Z.dispatch({
                            type: Et.Z.SET_SENSITIVITY_POPUP,
                            payload: {
                                isSensitivityPopupOpen: !1
                            }
                        })
                    }), [C]);
                    var sn = function(n) {
                            (null === n || void 0 === n ? void 0 : n.value) && n.value !== (null === v || void 0 === v ? void 0 : v.value) && rn((0, $o.i)({
                                imapScheme: n.value
                            }))
                        },
                        un = function() {
                            var n = URL.createObjectURL(new Blob([JSON.stringify(o)])),
                                e = document.createElement("a");
                            e.href = n, e.download = "".concat(Ue.ZP.appInfo.packageName, "_edited.cfg"), e.click()
                        };
                    return (0, et.BX)(et.HY, {
                        children: [I && P && T && !en && (0, et.tZ)(Ps, {
                            gameControls: S,
                            isGamepadview: A
                        }), M && (0, et.tZ)(Ml, {
                            editing: !0,
                            style: {
                                pointerEvents: nn ? "all" : "none",
                                zIndex: "10"
                            },
                            onClick: function(n) {
                                var e, t = null === (e = null === $ || void 0 === $ ? void 0 : $.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                                if (t) {
                                    var i = 100 * (n.clientX - t.left) / t.width,
                                        o = 100 * (n.clientY - t.top) / t.height;
                                    i = parseFloat(i.toFixed(2)), o = parseFloat(o.toFixed(2)), J("".concat(Q, " ").concat(i, " ").concat(o))
                                }
                            }
                        }), nn && R && M && (0, et.tZ)(Ms._, {
                            style: {
                                top: "0px",
                                right: "308px"
                            },
                            children: (0, et.BX)(Xl, {
                                style: {
                                    width: "300px"
                                },
                                children: [(0, et.BX)(yl, {
                                    children: [(0, et.tZ)("div", {
                                        className: "sidebar-heading",
                                        children: (0, et.tZ)(Mt.TZ, {
                                            children: "Add Script Commands"
                                        })
                                    }), (0, et.tZ)(va.Z, {
                                        style: {
                                            cursor: "pointer"
                                        },
                                        id: "game-controls-cross",
                                        onClick: function() {
                                            rn({
                                                type: Et.Z.SCRIPT_EDITOR,
                                                payload: {
                                                    showScriptEditor: !1
                                                }
                                            })
                                        },
                                        size: 18,
                                        name: "cross-thin"
                                    })]
                                }), (0, et.tZ)(Kl, {
                                    children: (0, et.BX)(Nl, {
                                        children: [(0, et.tZ)(zl.gx, {
                                            title: "Commands",
                                            onUpdate: function() {},
                                            value: Q,
                                            onChange: function(n) {
                                                J(n.currentTarget.value)
                                            }
                                        }), (0, et.tZ)(xi.z, {
                                            onClick: function() {
                                                var n = Q.split("\n");
                                                rn({
                                                    type: Et.Z.SCRIPT_EDITOR,
                                                    payload: {
                                                        scriptCommands: n,
                                                        showScriptEditor: !1
                                                    }
                                                })
                                            },
                                            children: "Update"
                                        })]
                                    })
                                })]
                            })
                        }), nn && R && !M && (0, et.tZ)(Ms._, {
                            style: {
                                top: "0px",
                                left: "50%"
                            },
                            children: (0, et.BX)(Ll, {
                                style: {
                                    background: Hd.qm.colors.black40,
                                    borderRadius: "16px",
                                    padding: "12px",
                                    margin: 0,
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    backdropFilter: "blur(24px)",
                                    alignItems: "center"
                                },
                                children: [(0, et.tZ)("input", {
                                    type: "file",
                                    ref: H,
                                    style: {
                                        display: "none",
                                        pointerEvents: "none"
                                    }
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        zi.ZP.loadCfg(o), rn({
                                            type: vl.Z.UPDATE_CONFIG,
                                            payload: {
                                                config: o
                                            }
                                        }), rn({
                                            type: gl.Z.IMAP_STATUS,
                                            payload: {
                                                keymappingEditMode: !nn
                                            }
                                        })
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Rs),
                                        alt: t("save"),
                                        title: t("saveChanges")
                                    })
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        r(N), zi.ZP.loadCfg(N), rn({
                                            type: gl.Z.IMAP_STATUS,
                                            payload: {
                                                keymappingEditMode: !1
                                            }
                                        })
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Ci.Z),
                                        alt: t("discard"),
                                        title: t("discardChanges")
                                    })
                                }), (0, et.tZ)(Bl, {
                                    onClick: un,
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Ds.Z),
                                        alt: t("download"),
                                        title: t("downloadConfig")
                                    })
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        var n, e;
                                        null === (n = H.current) || void 0 === n || n.click(), null === (e = H.current) || void 0 === e || e.addEventListener("change", (function() {
                                            var n, e, t, i = new FileReader;
                                            if ((null === (n = H.current) || void 0 === n ? void 0 : n.files) && (null === (e = H.current) || void 0 === e ? void 0 : e.files[0])) {
                                                var r = null === (t = H.current) || void 0 === t ? void 0 : t.files[0];
                                                i.addEventListener("load", (function(n) {
                                                    var e, t;
                                                    if (null === (e = n.target) || void 0 === e ? void 0 : e.result) {
                                                        var i = JSON.parse(null === (t = n.target) || void 0 === t ? void 0 : t.result),
                                                            r = Xs([], f, !0);
                                                        i.ControlSchemes.forEach((function(n) {
                                                            n.Name = cn(n.Name), null === o || void 0 === o || o.ControlSchemes.push(n);
                                                            var e = {
                                                                label: n.Name,
                                                                value: n.Name
                                                            };
                                                            r.push(e)
                                                        })), h(Xs([], r, !0))
                                                    }
                                                })), i.readAsBinaryString(r)
                                            }
                                            H.current && (H.current.value = "")
                                        }))
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Ds.Z),
                                        alt: t("import"),
                                        title: t("import"),
                                        style: {
                                            transform: "rotate(180deg)"
                                        }
                                    })
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        U(!0), tn.ImageId = "", tn.ImageType = "", tn.TextureCRC = "", tn.TextureCoord = [], tn.TextureIndex = 0, tn.VertexIndex = 0, tn.VertexRect = []
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Os),
                                        alt: t("new"),
                                        title: "Add images"
                                    })
                                }), (null === f || void 0 === f ? void 0 : f.length) > 1 && v && (0, et.tZ)(hl.ZP, {
                                    value: v,
                                    options: f,
                                    onChange: sn,
                                    className: "select-container",
                                    classNamePrefix: "select"
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        var n = structuredClone(z);
                                        z && (z.Name = cn((null === z || void 0 === z ? void 0 : z.Name) || "New")), n.Selected = !1, null === o || void 0 === o || o.ControlSchemes.push(n);
                                        var e = {
                                            label: (null === z || void 0 === z ? void 0 : z.Name) || "New",
                                            value: (null === z || void 0 === z ? void 0 : z.Name) || "New"
                                        };
                                        h(Xs(Xs([], f, !0), [e], !1)), m(e), rn((0, $o.i)({
                                            imapScheme: null === z || void 0 === z ? void 0 : z.Name
                                        }))
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(ii),
                                        alt: t("copy"),
                                        title: t("copyControlScheme")
                                    })
                                }), (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        var n = {
                                            GameControls: [],
                                            Images: [],
                                            Name: cn("New scheme"),
                                            BuiltIn: !1,
                                            Selected: !0,
                                            IsBookMarked: !1,
                                            IsCategoryVisible: !1,
                                            KeyboardLayout: (null === z || void 0 === z ? void 0 : z.KeyboardLayout) || "",
                                            SchemeTags: [],
                                            isGamepadControlsPresent: !1
                                        };
                                        z && (z.Selected = !1), null === o || void 0 === o || o.ControlSchemes.push(n);
                                        var e = {
                                            label: n.Name,
                                            value: n.Name
                                        };
                                        h(Xs(Xs([], f, !0), [e], !1)), m(e), E(n.GameControls), rn((0, $o.i)({
                                            imapScheme: null === z || void 0 === z ? void 0 : z.Name
                                        }))
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Os),
                                        alt: t("new"),
                                        title: t("addControlScheme")
                                    })
                                }), f.length > 1 && (0, et.tZ)(Bl, {
                                    onClick: function() {
                                        if (o) {
                                            o.ControlSchemes = o.ControlSchemes.filter((function(n) {
                                                return n.Name !== (null === z || void 0 === z ? void 0 : z.Name)
                                            }));
                                            var n = o.ControlSchemes[0];
                                            h(f.filter((function(n) {
                                                return n.value !== (null === z || void 0 === z ? void 0 : z.Name)
                                            }))), m({
                                                label: n.Name,
                                                value: n.Name
                                            }), E(n.GameControls), rn((0, $o.i)({
                                                imapScheme: n.Name
                                            }))
                                        }
                                    },
                                    children: (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Is),
                                        alt: t("delete"),
                                        title: t("deleteControlScheme")
                                    })
                                })]
                            })
                        }), F && nn && R && (0, et.BX)(Xl, {
                            children: [(0, et.BX)(yl, {
                                children: [(0, et.tZ)("div", {
                                    className: "sidebar-heading",
                                    children: (0, et.tZ)(Mt.TZ, {
                                        children: "Add Images to Cfg"
                                    })
                                }), (0, et.tZ)(va.Z, {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    id: "game-controls-cross",
                                    onClick: function() {
                                        U(!1)
                                    },
                                    size: 18,
                                    name: "cross-thin"
                                })]
                            }), (0, et.tZ)(Kl, {
                                children: (0, et.BX)(Nl, {
                                    children: [(0, et.tZ)(zl.gx, {
                                        title: "Images",
                                        onUpdate: function() {},
                                        value: G,
                                        onChange: function(n) {
                                            V(n.currentTarget.value)
                                        },
                                        onPaste: function(n) {
                                            var e = n.clipboardData.getData("text");
                                            V("".concat(G).concat(e))
                                        }
                                    }), (0, et.tZ)(xi.z, {
                                        onClick: function() {
                                            tn = JSON.parse(G), null === z || void 0 === z || z.Images.push(tn), U(!1)
                                        },
                                        children: "Add Image"
                                    })]
                                })
                            })]
                        }), T && (0, et.BX)(xl, {
                            className: "".concat(C ? "" : "hide", " ").concat(e),
                            children: [(0, et.BX)(yl, {
                                children: [(0, et.BX)("div", {
                                    className: "sidebar-heading",
                                    children: [(0, et.tZ)(va.Z, {
                                        className: "\n                ".concat(s ? "" : "null", "\n              "),
                                        style: {
                                            fontSize: "21px",
                                            paddingLeft: "0",
                                            paddingRight: "10px",
                                            pointerEvents: "none"
                                        },
                                        size: 18,
                                        name: "gamepad"
                                    }), (0, et.tZ)(Mt.TZ, {
                                        children: t("controls.title")
                                    })]
                                }), (0, et.tZ)(va.Z, {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    id: "game-controls-cross",
                                    onClick: ln,
                                    size: 18,
                                    name: "cross-thin"
                                })]
                            }), (L && on || B) && !d && (0, et.BX)(Ol, {
                                children: [(0, et.BX)(Cl, {
                                    children: [(0, et.tZ)(Pl, {
                                        className: "".concat(R ? "dim" : ""),
                                        children: t("sidebar.nativeTitle")
                                    }), (0, et.tZ)(Dl, {
                                        className: "".concat(R ? "active" : ""),
                                        onClick: function() {
                                            return function() {
                                                dn();
                                                var n = kt.Z.getState().play,
                                                    e = n.nativeMouseEnabled,
                                                    t = n.shiftLockActive;
                                                (0, Ve.L9)(Ki.S5, {
                                                    element: "ControlScheme",
                                                    state: "".concat(R ? "Native" : null === v || void 0 === v ? void 0 : v.label),
                                                    robloxExperience: kt.Z.getState().play.robloxExperienceId
                                                }), rn({
                                                    type: vl.Z.LEGACY_CONTROLS
                                                }), e && R ? (0, pr.Jj)(!1) : ((0, pr.DA)(), rn({
                                                    type: Et.Z.ROBLOX_TOAST,
                                                    payload: {
                                                        robloxToast: !1
                                                    }
                                                }), an(!0)), (0, pt.Ul)(), R && t && (kt.Z.dispatch({
                                                    type: Et.Z.UPDATE_SHIFT_LOCK
                                                }), (0, Ve.L9)(Ki.S5, {
                                                    element: "ShiftLock",
                                                    state: "Disabled",
                                                    robloxExperience: kt.Z.getState().play.robloxExperienceId
                                                }))
                                            }()
                                        }
                                    }), (0, et.tZ)(Pl, {
                                        className: "".concat(R ? "" : "dim"),
                                        children: t("sidebar.legacyTitle")
                                    })]
                                }), (0, et.tZ)(Rl, {}), (0, et.tZ)(Pl, {
                                    className: "dim",
                                    children: t(R ? "sidebar.legacyInfo" : "sidebar.nativeInfo")
                                })]
                            }), R && (0, et.BX)(Tl, {
                                className: "".concat(D ? "active" : ""),
                                children: [(0, et.tZ)(Pl, {
                                    children: t("sidebar.onscreenControls")
                                }), (0, et.tZ)("span", {
                                    onClick: function() {
                                        return (0, Ve.L9)(Ki.S5, {
                                            element: "OnScreenControls",
                                            state: "".concat(D ? "Disabled" : "Enabled"),
                                            robloxExperience: kt.Z.getState().play.robloxExperienceId
                                        }), void rn((0, $o.i)({
                                            imapOverlay: !D
                                        }))
                                    }
                                })]
                            }), R && Ue.ZP.features.enableKeymapEditor && (0, et.BX)(Ll, {
                                children: [(0, et.tZ)(xi.z, {
                                    onClick: function() {
                                        K(structuredClone(o)), ln(), rn({
                                            type: gl.Z.IMAP_STATUS,
                                            payload: {
                                                keymappingEditMode: !nn
                                            }
                                        })
                                    },
                                    children: t("edit")
                                }), (0, et.tZ)(xi.z, {
                                    onClick: un,
                                    children: t("download")
                                })]
                            }), (null === f || void 0 === f ? void 0 : f.length) > 1 && v && (0, et.BX)(El, {
                                children: [(0, et.tZ)(Pl, {
                                    style: {
                                        margin: "0 0 8px 0"
                                    },
                                    children: t("sidebar.controlSchemes")
                                }), (0, et.tZ)(hl.ZP, {
                                    value: v,
                                    options: f,
                                    onChange: sn,
                                    className: "select-container",
                                    classNamePrefix: "select"
                                })]
                            }), (0, et.BX)(Zl, {
                                children: [(0, et.BX)(kl, {
                                    className: "".concat(A ? "" : "active"),
                                    onClick: function() {
                                        return Z(!1)
                                    },
                                    children: [(0, et.tZ)(va.Z, {
                                        name: "keyboard"
                                    }), t("sidebar.keyboard")]
                                }), (0, et.BX)(kl, {
                                    className: "".concat(A ? "active" : ""),
                                    onClick: function() {
                                        return Z(!0)
                                    },
                                    children: [(0, et.tZ)(va.Z, {
                                        name: "gamepad"
                                    }), t("sidebar.gamepad")]
                                })]
                            }), A && (!y || !R || y && !s && R) && (0, et.tZ)(js, {
                                type: y && R ? "null" : "not_supported"
                            }), (A && y && s || !A) && (0, et.BX)(fl.Z, {
                                autoHide: !1,
                                style: {
                                    maxHeight: "calc(100vh - 384px)",
                                    borderBottomLeftRadius: "4px",
                                    borderBottomRightRadius: "4px"
                                },
                                children: [(R || !B && (!L || !on)) && (0, et.BX)(wl, {
                                    children: [dn(), null === S || void 0 === S ? void 0 : S.map((function(n) {
                                        var e, t = n.Guidance,
                                            i = A ? "_alt1" : "";
                                        switch (n.Type) {
                                            case pl.x_.FreeLook:
                                                return n.KeyDown || n.KeyRight || n.KeyUp || n.KeyLeft || i ? (0, et.BX)(et.HY, {
                                                    children: [(null === t || void 0 === t ? void 0 : t.Key) && (0, et.tZ)(Ks, {
                                                        label: t.Key,
                                                        value: Vl(n["Key".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyDown) && (0, et.tZ)(Ks, {
                                                        label: t.KeyDown,
                                                        value: Vl(n["KeyDown".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyUp) && (0, et.tZ)(Ks, {
                                                        label: t.KeyUp,
                                                        value: Vl(n["KeyUp".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyRight) && (0, et.tZ)(Ks, {
                                                        label: t.KeyRight,
                                                        value: Vl(n["KeyRight".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyLeft) && (0, et.tZ)(Ks, {
                                                        label: t.KeyLeft,
                                                        value: Vl(n["KeyLeft".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    })]
                                                }) : null;
                                            case pl.x_.Pan:
                                                return n.KeyAction || n.KeyStartStop || i ? (0, et.BX)(et.HY, {
                                                    children: [(null === t || void 0 === t ? void 0 : t.KeyAction) && n["KeyAction".concat(i)] && (0, et.tZ)(Ks, {
                                                        label: Vl(n["KeyAction".concat(i)]),
                                                        value: "MouseLButton",
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyLookAround) && n["KeyLookAround".concat(i)] && (0, et.tZ)(Ks, {
                                                        label: t.KeyLookAround || "Pan",
                                                        value: Vl(n["KeyLookAround".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyStartStop) && n["KeyStartStop".concat(i)] && (0, et.tZ)(Ks, {
                                                        label: t.KeyStartStop,
                                                        value: Vl(n["KeyStartStop".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeySuspend) && n["KeySuspend".concat(i)] && (0, et.tZ)(Ks, {
                                                        label: t.KeySuspend,
                                                        value: Vl(n["KeySuspend".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    })]
                                                }) : null;
                                            case pl.x_.Dpad:
                                                return n.KeyDown || n.KeyUp || n.KeyRight || n.KeyLeft || i ? (0, et.BX)(et.HY, {
                                                    children: [(null === t || void 0 === t ? void 0 : t.DpadTitle) && (0, et.tZ)(Ks, {
                                                        label: t.DpadTitle,
                                                        value: "".concat(Vl(n["KeyUp".concat(i)]), "\n                                  ").concat(Vl(n["KeyLeft".concat(i)]), "\n                                  ").concat(Vl(n["KeyDown".concat(i)]), "\n                                  ").concat(Vl(n["KeyRight".concat(i)])),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), i && n.GamepadStick ? (0, et.tZ)(Ks, {
                                                        label: (null === t || void 0 === t ? void 0 : t.GamepadStick) || "DPAD",
                                                        value: n.GamepadStick,
                                                        guidanceCategory: n.GuidanceCategory
                                                    }) : (0, et.BX)(et.HY, {
                                                        children: [(null === t || void 0 === t ? void 0 : t.KeyDown) && (0, et.tZ)(Ks, {
                                                            label: t.KeyDown,
                                                            value: Vl(n["KeyDown".concat(i)]),
                                                            guidanceCategory: n.GuidanceCategory
                                                        }), (null === t || void 0 === t ? void 0 : t.KeyUp) && (0, et.tZ)(Ks, {
                                                            label: t.KeyUp,
                                                            value: Vl(n["KeyUp".concat(i)]),
                                                            guidanceCategory: n.GuidanceCategory
                                                        }), (null === t || void 0 === t ? void 0 : t.KeyRight) && (0, et.tZ)(Ks, {
                                                            label: t.KeyRight,
                                                            value: Vl(n["KeyRight".concat(i)]),
                                                            guidanceCategory: n.GuidanceCategory
                                                        }), (null === t || void 0 === t ? void 0 : t.KeyLeft) && (0, et.tZ)(Ks, {
                                                            label: t.KeyLeft,
                                                            value: Vl(n["KeyLeft".concat(i)]),
                                                            guidanceCategory: n.GuidanceCategory
                                                        })]
                                                    })]
                                                }) : null;
                                            case pl.x_.EdgeScroll:
                                                if ("boolean" === typeof(null === t || void 0 === t ? void 0 : t.EdgeScrollEnabled)) return (0, et.tZ)(Ks, {
                                                    label: t.EdgeScrollEnabled,
                                                    value: n.EdgeScrollEnabled ? "True" : "False",
                                                    guidanceCategory: n.GuidanceCategory
                                                });
                                                break;
                                            case pl.x_.Zoom:
                                            case pl.x_.MouseZoom:
                                                return (0, et.BX)(et.HY, {
                                                    children: [(null === t || void 0 === t ? void 0 : t.KeyIn) && (0, et.tZ)(Ks, {
                                                        label: t.KeyIn,
                                                        value: Vl(n["KeyIn".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyOut) && (0, et.tZ)(Ks, {
                                                        label: t.KeyOut,
                                                        value: Vl(n["KeyOut".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    }), (null === t || void 0 === t ? void 0 : t.KeyWheel) && (0, et.tZ)(Ks, {
                                                        label: t.KeyWheel,
                                                        value: Vl(n["KeyWheel".concat(i)]),
                                                        guidanceCategory: n.GuidanceCategory
                                                    })]
                                                });
                                            default:
                                                if ((null === (e = n.Guidance) || void 0 === e ? void 0 : e.Key) && (n["Key".concat(i)] || n["KeyModifier".concat(i)])) return (0, et.tZ)(Ks, {
                                                    label: n.Guidance.Key || "",
                                                    value: Vl(n["Key".concat(i)] || n["KeyModifier".concat(i)]),
                                                    guidanceCategory: n.GuidanceCategory
                                                })
                                        }
                                        return null
                                    }))]
                                }), !R && !A && (0, et.BX)(wl, {
                                    children: [B && (0, et.BX)(Il, {
                                        children: [(0, et.tZ)(Al, {
                                            children: t("sidebar.specialKey")
                                        }), (0, et.tZ)(Ks, {
                                            label: t("mouseLockKey"),
                                            value: "Ctrl + Shift + 1",
                                            guidanceCategory: ""
                                        }), (0, et.tZ)(Ks, {
                                            label: t("shiftLockKey"),
                                            value: "Shift + Q",
                                            guidanceCategory: ""
                                        })]
                                    }, "nativeControlBox"), Ue.ZP.features.nativeControlsList.map((function(n) {
                                        return (0, et.BX)(et.HY, {
                                            children: [(0, et.tZ)(Al, {
                                                children: n.key.toString()
                                            }, "".concat(n.key.toString())), n.value.map((function(n) {
                                                return (0, et.tZ)(Ks, {
                                                    label: n.key || "",
                                                    value: n.value,
                                                    guidanceCategory: ""
                                                })
                                            }))]
                                        })
                                    }))]
                                })]
                            })]
                        })]
                    })
                },
                Hs = t(77360),
                _s = function() {
                    return (0, Ye.useEffect)((function() {
                        ! function(n, e) {
                            var t = {
                                    appId: "350e2364bb18edfc4fbb2d984bc91b854",
                                    popupWidget: !1,
                                    onInit: function() {
                                        var n = {
                                            onChatWidgetOpen: function() {
                                                var n, e = kt.Z.getState().play.videoRef,
                                                    t = null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                                    i = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                                i && i[0] && (i[0].style.left = "".concat(((null === t || void 0 === t ? void 0 : t.left) || 0) + ((null === t || void 0 === t ? void 0 : t.width) || 0) - 390, "px"), i[0].style.top = "".concat(((null === t || void 0 === t ? void 0 : t.top) || 0) + ((null === t || void 0 === t ? void 0 : t.height) || 0) - 600, "px"))
                                            },
                                            onChatWidgetClose: function() {
                                                var n = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                                n && n[0] && (n[0].style.left = "auto", n[0].style.top = "auto")
                                            }
                                        };
                                        window.Kommunicate.subscribeToEvents(n)
                                    }
                                },
                                i = document.createElement("script");
                            i.type = "text/javascript", i.async = !0, i.src = "https://widget.kommunicate.io/v2/kommunicate.app", document.getElementsByTagName("head")[0].appendChild(i), window.kommunicate = e, e._globals = t
                        }(document, window.kommunicate || {})
                    }), []), (0, et.tZ)("div", {})
                },
                Fs = t(1883),
                Us = t(7763),
                Ws = t(50301),
                Gs = t(7969),
                Vs = function(n) {
                    var e = n.setIapBtnClicked,
                        t = (0, Rt.$)().t,
                        i = (0, He.I0)();
                    return (0, et.tZ)(Gs.Bp, {
                        className: "".concat((0, Ge.tq)() && "mobile"),
                        children: (0, et.BX)(Gs.wf, {
                            children: [(0, et.tZ)(va.Z, {
                                name: "cross-thin",
                                onClick: function() {
                                    return i({
                                        type: Et.Z.TOGGLE_IAP_POPUP_STATE
                                    })
                                },
                                size: 12
                            }), (0, et.tZ)(Mt.T5, {
                                med: !0,
                                white: !0,
                                children: t("iapTitle")
                            }), (0, et.tZ)("p", {
                                children: t("iapDescription")
                            }), (0, et.tZ)(Gs.RV, {
                                onClick: function() {
                                    i({
                                        type: Et.Z.TOGGLE_IAP_POPUP_STATE
                                    }), e(!0), (0, Yr.f)("userLogin::com.google")
                                },
                                children: (0, et.tZ)(Mt.T6, {
                                    med: !0,
                                    children: t("iapBtnText")
                                })
                            })]
                        })
                    })
                },
                qs = function() {
                    var n = (0, Rt.$)().t;
                    return (0, et.tZ)(Gs.Bp, {
                        className: "".concat((0, Ge.tq)() && "mobile"),
                        children: (0, et.BX)(Gs.wf, {
                            className: "loaderContainer",
                            children: [(0, et.tZ)("img", {
                                alt: "".concat(n("roundLoader")),
                                src: (0, Xt.j)(Di)
                            }), (0, et.tZ)("p", {
                                children: n("iapLoaderText")
                            })]
                        })
                    })
                },
                Qs = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.I0)(),
                        t = (0, Ye.useState)(!1),
                        i = t[0],
                        o = t[1],
                        r = (0, Ye.useState)(!1),
                        a = r[0],
                        d = r[1],
                        l = (0, Ye.useState)(""),
                        c = l[0],
                        s = l[1],
                        u = (0, He.v9)((function(n) {
                            return n.play.showIAPPopup
                        })),
                        p = (0, He.v9)((function(n) {
                            return n.play.iapUserLogin
                        }));
                    return (0, Ye.useEffect)((function() {
                        var n, t, r;
                        return i && p ? (e({
                                type: Et.Z.UPDATE_PLAY_STATE,
                                payload: {
                                    hideIAPIcon: !0
                                }
                            }), d(!0), s(""), n = setTimeout((function() {
                                d(!1), s("slideDown")
                            }), 1e3), t = setTimeout((function() {
                                s("slideUp")
                            }), 3e3), r = setTimeout((function() {
                                o(!1)
                            }), 4e3)) : o(!1),
                            function() {
                                clearTimeout(n), clearTimeout(t), clearTimeout(r)
                            }
                    }), [p]), u ? (0, et.tZ)(Vs, {
                        setIapBtnClicked: o
                    }) : i && p ? (0, et.BX)(et.HY, {
                        children: [(0, et.BX)(Gs.iO, {
                            className: c,
                            children: [(0, et.tZ)("i", {
                                className: "icon-active"
                            }), (0, et.tZ)(Mt.kk, {
                                med: !0,
                                white: !0,
                                children: n("iapToastText")
                            })]
                        }), a && (0, et.tZ)(qs, {})]
                    }) : null
                },
                Js = t(96183),
                $s = t(82087),
                nu = t(31591),
                eu = t(59532),
                tu = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                iu = Qe.ZP.div(Wc || (Wc = tu(["\n    position: absolute;\n    top:50%;\n    left: 50%;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 24px;\n    flex-direction: column;\n    gap: 8px;\n    width: 355px;\n    transform: translate(-50%,-50%);\n    z-index: 100;\n"], ["\n    position: absolute;\n    top:50%;\n    left: 50%;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 24px;\n    flex-direction: column;\n    gap: 8px;\n    width: 355px;\n    transform: translate(-50%,-50%);\n    z-index: 100;\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.black70
                })),
                ou = Qe.ZP.div(Gc || (Gc = tu(["\n    position: absolute;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 10px;\n    z-index: 100;\n"], ["\n    position: absolute;\n    border-radius: 12px;\n    border: 1px solid ", ";\n    background: ", ";\n    box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.16);\n    backdrop-filter: blur(60px);\n    display: flex;\n    padding: 10px;\n    z-index: 100;\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.black70
                })),
                ru = Qe.ZP.div(Vc || (Vc = tu(["\n    display: flex;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    justify-content: space-between;\n"]))),
                au = Qe.ZP.div(qc || (qc = tu(["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: flex-end;\n"], ["\n    display: flex;\n    align-items: center;\n    width: 100%;\n    justify-content: flex-end;\n"]))),
                du = (0, Qe.ZP)(Mt.lU)(Qc || (Qc = tu(["\n    color: #FFF;\n    padding: 4px 12px;\n    border-radius: 6px;\n    border: 1px solid ", ";\n    margin-top: 10px;\n    margin-bottom: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n"], ["\n    color: #FFF;\n    padding: 4px 12px;\n    border-radius: 6px;\n    border: 1px solid ", ";\n    margin-top: 10px;\n    margin-bottom: 8px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                lu = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                cu = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                su = function() {
                    var n, e = (0, He.v9)((function(n) {
                            return n.play.showCopyPastePrompt.type
                        })),
                        t = (0, He.v9)((function(n) {
                            return n.play.showCopyPastePrompt.event
                        })),
                        i = (0, He.v9)((function(n) {
                            return n.play.showCopyPastePrompt.copyText
                        })),
                        o = (0, He.v9)((function(n) {
                            return n.play.keyboardActive
                        })),
                        r = (0, Rt.$)().t,
                        a = (0, He.I0)(),
                        d = (0, Ye.useState)(!1),
                        l = d[0],
                        c = d[1],
                        s = (0, Ye.useState)(!1),
                        u = s[0],
                        p = s[1],
                        f = function() {
                            return lu(void 0, void 0, void 0, (function() {
                                var n;
                                return cu(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return "copy" !== e ? [3, 1] : (c(!0), p(!0), (0, Qa.FF)(i || ""), setTimeout((function() {
                                                c(!1), a({
                                                    type: Et.Z.COPY_PASTE_PROMPT,
                                                    payload: {
                                                        showCopyPastePrompt: {
                                                            type: ""
                                                        }
                                                    }
                                                })
                                            }), 3e3), [3, 5]);
                                        case 1:
                                            if ("paste" !== e) return [3, 5];
                                            t.label = 2;
                                        case 2:
                                            return t.trys.push([2, 4, , 5]), [4, navigator.clipboard.readText()];
                                        case 3:
                                            return (n = t.sent()) && ((0, Qa.g2)(n), a({
                                                type: Et.Z.COPY_PASTE_PROMPT,
                                                payload: {
                                                    showCopyPastePrompt: {
                                                        type: ""
                                                    }
                                                }
                                            })), [3, 5];
                                        case 4:
                                            return t.sent(), [3, 5];
                                        case 5:
                                            return [2]
                                    }
                                }))
                            }))
                        };
                    return "copy" === e ? (0, et.BX)(iu, {
                        children: [(0, et.BX)(ru, {
                            children: [(0, et.BX)(eu.Lb, {
                                gap: "8",
                                children: [l && (0, et.tZ)(Vi, {}), (0, et.tZ)(Mt.js, {
                                    style: {
                                        color: "#FFF"
                                    },
                                    children: r("copyToClipboard")
                                })]
                            }), (0, et.tZ)(va.Z, {
                                name: "cross-thin",
                                size: 24,
                                style: {
                                    color: "#FFF",
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    p(!1), a({
                                        type: Et.Z.COPY_PASTE_PROMPT,
                                        payload: {
                                            showCopyPastePrompt: {
                                                type: "",
                                                copyText: ""
                                            }
                                        }
                                    })
                                }
                            })]
                        }), !l && !u && (0, et.BX)(et.HY, {
                            children: [(0, et.BX)("div", {
                                children: [(0, et.tZ)(Mt.TZ, {
                                    style: {
                                        color: "rgba(255, 255, 255, 0.80"
                                    },
                                    children: r("textYouSelected")
                                }), (0, et.tZ)(du, {
                                    children: i
                                })]
                            }), (0, et.tZ)(au, {
                                children: (0, et.tZ)(xi.z, {
                                    variant: "primary",
                                    text: r("copy"),
                                    onClick: f
                                })
                            })]
                        })]
                    }) : t && (null === (n = null === t || void 0 === t ? void 0 : t.changedTouches) || void 0 === n ? void 0 : n.length) && o ? (0, et.tZ)(ou, {
                        onClick: f,
                        style: {
                            top: "".concat(t.changedTouches[0].pageY, "px"),
                            left: "".concat(t.changedTouches[0].pageX, "px")
                        },
                        children: (0, et.tZ)(Mt.gd, {
                            style: {
                                color: "#FFF",
                                cursor: "pointer"
                            },
                            children: r("paste")
                        })
                    }) : null
                },
                uu = t(13978),
                pu = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                fu = (0, Qe.F4)(Jc || (Jc = pu(["\n  0% {\n    width: 0%;\n  }\n  10% {\n    width: 80%;\n  }\n  100% {\n    width: 100%;\n  }\n"], ["\n  0% {\n    width: 0%;\n  }\n  10% {\n    width: 80%;\n  }\n  100% {\n    width: 100%;\n  }\n"]))),
                hu = (0, Qe.F4)($c || ($c = pu(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),
                gu = Qe.ZP.section(es || (es = pu(["\n  padding: 10px 12px;\n  background: linear-gradient(270deg, #7B4CFF 77.6%, #0EA4C5 100%);\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: white;\n  animation: ", " 2s ease-out;\n  ", "\n\n  img {\n    border-radius: 3px;\n  }\n  h4 {\n    font-weight: 700;\n    text-overflow: ellipsis;\n    text-wrap: nowrap;\n    overflow: hidden;\n    padding-right: 12px;\n  }\n  p {\n    margin-left: auto;\n    color: ", ";\n    text-wrap: nowrap;\n  }\n\n  &::after, &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 4px;\n    transform: translateY(-4px);\n  }\n\n  &::before {\n    background-color: ", ";\n  }\n  &::after {\n    width: 50%;\n    background-color: ", ";\n    animation: ", " 60s ease-out;\n  }\n"], ["\n  padding: 10px 12px;\n  background: linear-gradient(270deg, #7B4CFF 77.6%, #0EA4C5 100%);\n  position: absolute;\n  bottom: ", ";\n  left: 0;\n  width: 100%;\n  z-index: ", ";\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: white;\n  animation: ", " 2s ease-out;\n  ", "\n\n  img {\n    border-radius: 3px;\n  }\n  h4 {\n    font-weight: 700;\n    text-overflow: ellipsis;\n    text-wrap: nowrap;\n    overflow: hidden;\n    padding-right: 12px;\n  }\n  p {\n    margin-left: auto;\n    color: ", ";\n    text-wrap: nowrap;\n  }\n\n  &::after, &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 4px;\n    transform: translateY(-4px);\n  }\n\n  &::before {\n    background-color: ", ";\n  }\n  &::after {\n    width: 50%;\n    background-color: ", ";\n    animation: ", " 60s ease-out;\n  }\n"])), (function(n) {
                    return n.isDesktop ? "52px" : "0"
                }), (function(n) {
                    return n.isAppPage ? "1" : "20"
                }), hu, (function(n) {
                    var e = n.isMobile,
                        t = n.isAppPage;
                    return !e && t && (0, Qe.iv)(ns || (ns = pu(["\n    transform: translateY(100%);\n  "], ["\n    transform: translateY(100%);\n  "])))
                }), (function(n) {
                    return n.theme.colors.white70
                }), (function(n) {
                    return n.theme.colors.black60
                }), (function(n) {
                    return n.theme.colors.ascent
                }), fu),
                vu = function(n) {
                    var e = n.gameName,
                        t = n.gameIcon,
                        i = n.isMobile,
                        o = n.isAppPage,
                        r = n.isDesktop;
                    return (0, et.BX)(gu, {
                        isMobile: i,
                        isDesktop: r,
                        isAppPage: o,
                        children: [(0, et.tZ)("img", {
                            src: t,
                            alt: "",
                            width: 32,
                            height: 32
                        }), (0, et.tZ)(Mt.js, {
                            children: (0, uu.t)("gameLaunchAfterAd", {
                                gameName: e
                            })
                        }), (0, et.tZ)(Mt.lU, {
                            children: (0, uu.t)("seconds", {
                                seconds: 30
                            })
                        })]
                    })
                },
                mu = {
                    src: "/play/_next/static/media/logo-art-min.d2b58742.svg",
                    height: 24,
                    width: 24
                },
                xu = t(79354),
                yu = t(54580),
                wu = t(95860),
                bu = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Au = (0, Qe.F4)(ts || (ts = bu(["\n  0% {\n    transform: translate(-50%, -12px);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, 0);\n    opacity: 1;\n  }\n"], ["\n  0% {\n    transform: translate(-50%, -12px);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(-50%, 0);\n    opacity: 1;\n  }\n"]))),
                Zu = (0, Qe.F4)(is || (is = bu(["\n  0% {\n    transform: translate(-50%, 0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, -12px);\n    opacity: 0;\n  }\n"], ["\n  0% {\n    transform: translate(-50%, 0);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, -12px);\n    opacity: 0;\n  }\n"]))),
                ku = Qe.ZP.section(os || (os = bu(["\n  width: 240px;\n  position: absolute;\n  top: 12px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 2;\n\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  background-color: ", ";\n  border-radius: 12px;\n  backdrop-filter: blur(12px);\n\n  animation: ", " 0.4s ease-out;\n\n  p {\n    color: ", ";\n    padding-right: 20px;\n  }\n\n  .highlight {\n    color: ", ";\n    cursor: pointer;\n  }\n"], ["\n  width: 240px;\n  position: absolute;\n  top: 12px;\n  left: 50%;\n  transform: translate(-50%, 0);\n  z-index: 2;\n\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  background-color: ", ";\n  border-radius: 12px;\n  backdrop-filter: blur(12px);\n\n  animation: ", " 0.4s ease-out;\n\n  p {\n    color: ", ";\n    padding-right: 20px;\n  }\n\n  .highlight {\n    color: ", ";\n    cursor: pointer;\n  }\n"])), (function(n) {
                    return n.theme.colors.black70
                }), (function(n) {
                    return n.show ? Au : Zu
                }), (function(n) {
                    return n.theme.colors.white70
                }), (function(n) {
                    return n.theme.colors.ascent
                })),
                Su = Qe.ZP.div(rs || (rs = bu(["\n  ", "\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  ", "\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: ", ";\n"])), wu.be, (function(n) {
                    return n.theme.colors.white
                })),
                Eu = Qe.ZP.div(as || (as = bu(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n"]))),
                Pu = Qe.ZP.span(ds || (ds = bu(["\n  cursor: pointer;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  i {\n    color: ", ";\n  }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  right: 12px;\n  top: 12px;\n  i {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                Tu = ku,
                Cu = function() {
                    var n = (0, Ye.useState)(!1),
                        e = n[0],
                        t = n[1];
                    (0, Ye.useEffect)((function() {
                        setTimeout((function() {
                            t(!0)
                        }), 2e3)
                    }), []);
                    var i = function() {
                        var n = Ki.vK.openDeepLink.replace("<package_name>", Ue.ZP.appInfo.packageName).replace("<url>", "https://tiktok.com/@nowgg_games");
                        (0, Yr.f)(n), t(!1);
                        var e = +(localStorage.getItem(Ki.tg) || "0");
                        localStorage.setItem(Ki.tg, "".concat(e + 1)), localStorage.setItem(Ki.xL, "".concat(Date.now() + Ki.Sm))
                    };
                    return (0, et.tZ)(It.Z, {
                        toggle: e,
                        exitingDelay: .3,
                        children: (0, et.BX)(Tu, {
                            show: e,
                            children: [(0, et.BX)(Eu, {
                                children: [(0, et.tZ)(Su, {
                                    children: (0, et.tZ)("img", {
                                        width: 24,
                                        height: 24,
                                        src: (0, Xt.j)(mu),
                                        alt: ""
                                    })
                                }), (0, et.tZ)(Mt.gd, {
                                    children: (0, et.tZ)(yu.c, {
                                        i18nKey: "followTikTok",
                                        components: {
                                            span: (0, et.tZ)("span", {
                                                role: "button",
                                                className: "highlight",
                                                onClick: i
                                            })
                                        }
                                    })
                                })]
                            }), (0, et.BX)(xi.z, {
                                variant: "tertiaryOutline",
                                size: "medium",
                                as: "a",
                                style: {
                                    gap: "4px"
                                },
                                onClick: i,
                                children: [(0, et.tZ)(xu.HT, {}), (0, et.tZ)(Mt.IS, {
                                    children: (0, uu.t)("visitTiktok")
                                })]
                            }), (0, et.tZ)(Pu, {
                                onClick: i,
                                children: (0, et.tZ)(va.Z, {
                                    name: "cross-thin",
                                    size: 16
                                })
                            })]
                        })
                    })
                },
                Du = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ru = Qe.ZP.div(ss || (ss = Du(["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n    padding: 16px 0px;\n  }\n  ", ";\n"], ["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n    padding: 16px 0px;\n  }\n  ", ";\n"])), (function(n) {
                    return n.isLandscape && (0, Qe.iv)(ls || (ls = Du(["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "], ["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "])))
                }), (function(n) {
                    return n.isMobile && (0, Qe.iv)(cs || (cs = Du(["max-height: 100vh"], ["max-height: 100vh"])))
                })),
                Ou = Qe.ZP.video(us || (us = Du(["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  &.isRecording {\n    top: calc(50% - 36px) !important;\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"], ["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  &.isRecording {\n    top: calc(50% - 36px) !important;\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
                })),
                Iu = Qe.ZP.div(fs || (fs = Du(["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n\n    ", "\n"], ["\n    position: absolute;\n    left: 20px;\n    top: 20px;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n\n    ", "\n"])), (function(n) {
                    return !n.isMobile && "gap: 10px"
                }), (function(n) {
                    return n.isMobile && (0, Qe.iv)(ps || (ps = Du(["\n      left: 16px;\n      top: 16px;\n    "], ["\n      left: 16px;\n      top: 16px;\n    "])))
                })),
                Mu = t(36716),
                Lu = t(57981),
                Bu = t(57762),
                Xu = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Nu = Qe.ZP.div(hs || (hs = Xu(["\n   position: relative;\n"], ["\n   position: relative;\n"]))),
                Ku = Qe.ZP.div(gs || (gs = Xu(["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"], ["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.border.base
                })),
                ju = Qe.ZP.div(vs || (vs = Xu(["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"], ["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"])), (function(n) {
                    return n.theme.shadow.big
                })),
                zu = Qe.ZP.p(ms || (ms = Xu(["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"], ["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Yu = Qe.ZP.div(xs || (xs = Xu(["\n    display: flex;\n    flex-direction: row;\n"], ["\n    display: flex;\n    flex-direction: row;\n"]))),
                Hu = Qe.ZP.div(ys || (ys = Xu(["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"], ["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"]))),
                _u = Qe.ZP.div(ws || (ws = Xu(["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"], ["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"]))),
                Fu = Qe.ZP.div(bs || (bs = Xu(["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Uu = Qe.ZP.div(As || (As = Xu(["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"], ["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Wu = Qe.ZP.div(Zs || (Zs = Xu(["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Gu = (0, Qe.ZP)(Bu.__)(ks || (ks = Xu(["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"], ["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }));

            function Vu(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function qu(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Vu(Object(t), !0).forEach((function(e) {
                        (0, $a.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Vu(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var Qu = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                Ju = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                $u = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, o = 0, r = e.length; o < r; o++) !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)), i[o] = e[o]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                np = function() {
                    var n, e = (0, Rt.$)().t,
                        t = (0, He.I0)(),
                        i = (0, Ye.useState)(["platform", "appPackage", "country", "connectionState", "ping", "currentResolution", "framesPerSecond", "clientID", "sessionID", "buildVersion"]),
                        o = i[0],
                        r = i[1],
                        a = (0, Ye.useContext)(Ja.Z),
                        d = (0, He.v9)((function(n) {
                            return n.play.peerConnectionState
                        })),
                        l = (0, He.v9)((function(n) {
                            return n.play.peerConnection
                        })),
                        c = (0, He.v9)((function(n) {
                            return n.play.isNerdMode
                        })),
                        s = (0, He.v9)((function(n) {
                            return n.play.tpEnabled
                        })),
                        u = kt.Z.getState(),
                        p = "",
                        f = "",
                        h = "",
                        g = "",
                        v = u.play.videoRef;
                    v && v.current && (f = v.current.offsetHeight.toString(), p = v.current.offsetWidth.toString());
                    var m = Ue.ZP.countryCode || "-",
                        x = ["bitrate", "codec", "packets"],
                        y = new Map([
                            ["bitrate", "videoBitrate"],
                            ["codec", "videoCodec"],
                            ["packets", "videoPackets"]
                        ]),
                        w = new Map([
                            ["bitrate", "audioBitrate"],
                            ["codec", "audioCodec"],
                            ["packets", "audioPackets"]
                        ]),
                        b = (0, Ye.useState)(new Map([
                            ["platform", null === (n = (0, Ge.Tb)().description) || void 0 === n ? void 0 : n.split(" ").join(" ")],
                            ["appPackage", a.packageName],
                            ["country", m],
                            ["connectionState", d || "NA"],
                            ["ping", "0ms"],
                            ["currentResolution", ""],
                            ["framesPerSecond", "0"],
                            ["clientID", (0, Ge.Fz)(Ki.nP)],
                            ["sessionID", (0, Ge.io)(Ki.K3)],
                            ["buildVersion", Lu.f4],
                            ["viewport", ""],
                            ["devicePixelRatio", ""],
                            ["frames", ""],
                            ["videoBitrate", ""],
                            ["videoCodec", ""],
                            ["videoPackets", ""],
                            ["audioBitrate", ""],
                            ["audioCodec", ""],
                            ["audioPackets", ""]
                        ])),
                        A = b[0],
                        Z = b[1],
                        k = (0, Ye.useState)({}),
                        S = k[0],
                        E = k[1],
                        P = (0, Ye.useState)(!1),
                        T = P[0],
                        C = P[1],
                        D = (0, Ye.useState)(0),
                        R = D[0],
                        O = D[1],
                        I = (0, Ye.useRef)(null),
                        M = (0, He.v9)((function(n) {
                            return n.ads.inGameAd
                        }));

                    function L(n) {
                        var e = parseInt(n, 10);
                        return e && e > 0 ? "".concat(parseInt((e / 1e3).toString(), 10), " kHz") : "0 kHz"
                    }

                    function B(n) {
                        var e = parseInt(n, 10);
                        return e && e > 0 ? "".concat(parseFloat((e / 1e3).toString()).toFixed(2), " kbps") : "0 kbps"
                    }

                    function X(n) {
                        var t, i, o, r, a, d, l = null === (i = null === (t = null === n || void 0 === n ? void 0 : n.data) || void 0 === t ? void 0 : t.connection) || void 0 === i ? void 0 : i.currentRoundTripTime,
                            c = null === (r = null === (o = n.data) || void 0 === o ? void 0 : o.video) || void 0 === r ? void 0 : r.inbound[0],
                            s = null === (d = null === (a = n.data) || void 0 === a ? void 0 : a.audio) || void 0 === d ? void 0 : d.inbound[0],
                            u = c.frameWidth && c.frameHeight ? "".concat(c.frameWidth, " x ").concat(c.frameHeight) : "",
                            p = !!c.framesPerSecond && c.framesPerSecond,
                            f = "".concat(c.mimeType || "NA", "-").concat(L(c.clockRate || "0")),
                            h = "".concat(s.mimeType || "NA", "-").concat(L(s.clockRate || "0")),
                            g = B(c ? c.bitrate : "0"),
                            v = B(s ? s.bitrate : "0"),
                            m = "".concat(c.packetsLost || "0", " ").concat(e("frameLost"), " ").concat(c.packetsReceived || "0"),
                            x = "".concat(s.packetsLost || "0", " ").concat(e("frameLost"), " ").concat(s.packetsReceived || "0");
                        Z((function(n) {
                            var e = new Map(n);
                            return l && e.set("ping", "".concat(parseFloat((1e3 * l).toString()).toFixed(2), "ms")), u ? e.set("currentResolution", u) : e.delete("currentResolution"), p ? e.set("framesPerSecond", p) : e.delete("framesPerSecond"), f ? e.set("videoCodec", f) : e.delete("videoCodec"), h ? e.set("audioCodec", h) : e.delete("audioCodec"), g ? e.set("videoBitrate", g) : e.delete("videoBitrate"), v ? e.set("audioBitrate", v) : e.delete("audioBitrate"), m ? e.set("videoPackets", m) : e.delete("videoPackets"), x ? e.set("audioPackets", x) : e.delete("audioPackets"), e
                        }))
                    }(0, Ye.useEffect)((function() {
                        if (c) {
                            if ((0, Hi.qO)("1"), l instanceof RTCPeerConnection) {
                                var n = void 0;
                                S instanceof Mu.Q ? n = S : (n = new Mu.Q({
                                    getStatsInterval: 1e3
                                }), E(n));
                                try {
                                    n.addPeer({
                                        pc: l,
                                        peerId: "1"
                                    }), n.on("stats", X)
                                } catch (e) {
                                    (0, Lu.ZP)(e)
                                }
                            }
                        } else S instanceof Mu.Q && (S.removePeer("1"), S.removeListener("stats", X), (0, Hi.qO)("0"));
                        return function() {
                            S instanceof Mu.Q && (S.removePeer("1"), S.removeListener("stats", X))
                        }
                    }), [c]), (0, Ye.useEffect)((function() {
                        Z((function(n) {
                            return n.set("connectionState", d || "NA"), n.set("clientID", (0, Ge.Fz)(Ki.nP) || ""), n.set("sessionID", (0, Ge.io)(Ki.K3) || ""), n
                        }))
                    }), [d]), (0, Ye.useEffect)((function() {
                        7 === R && (r((function(n) {
                            return $u($u([], n, !0), ["viewport", "devicePixelRatio", "frames"], !1)
                        })), I.current = setInterval((function() {
                            ! function() {
                                if (v && v.current) {
                                    var n = v.current.getVideoPlaybackQuality();
                                    0 !== n.totalVideoFrames && R >= 7 && (h = n.totalVideoFrames.toString(), g = n.droppedVideoFrames.toString(), Z((function(n) {
                                        var t = new Map(n);
                                        return t.set("frames", "".concat(g, " ").concat(e("frameDrop"), " ").concat(h)), t
                                    })))
                                }
                            }()
                        }), 1e3), Z((function(n) {
                            return n.set("viewport", "".concat(f, " x ").concat(p)), n.set("devicePixelRatio", parseFloat(window.devicePixelRatio.toString()).toFixed(2)), n
                        })))
                    }), [R]);

                    function N(n, e) {
                        return n ? "connected" === e ? {
                            lightGreen: !0
                        } : {
                            red: !0
                        } : {}
                    }
                    return (0, et.BX)(Nu, {
                        children: [T && (0, et.tZ)(Ku, {
                            children: (0, et.tZ)(Mt.kk, {
                                style: {
                                    margin: 0
                                },
                                children: e("copiedToClipboard")
                            })
                        }), c && (0, et.BX)(ju, {
                            style: M === Ki.us ? {
                                top: 0
                            } : {},
                            children: [(0, et.BX)(Yu, {
                                style: {
                                    color: "white"
                                },
                                children: [(0, et.tZ)(Mt.T6, {
                                    med: !0,
                                    style: {
                                        margin: 0
                                    },
                                    children: e("nerdMode")
                                }), (0, et.BX)(Hu, {
                                    children: [(0, et.tZ)(va.Z, {
                                        name: "copy",
                                        onClick: function() {
                                            return function() {
                                                return Qu(this, void 0, void 0, (function() {
                                                    var n;
                                                    return Ju(this, (function(t) {
                                                        switch (t.label) {
                                                            case 0:
                                                                n = "", O(R + 1), A.forEach((function(t, i) {
                                                                    n += "".concat(e(i), " : ").concat(t, "\n")
                                                                })), t.label = 1;
                                                            case 1:
                                                                return t.trys.push([1, 3, , 4]), [4, navigator.clipboard.writeText(n)];
                                                            case 2:
                                                                return t.sent(), C(!0), setTimeout((function() {
                                                                    C(!1)
                                                                }), 2e3), [3, 4];
                                                            case 3:
                                                                return t.sent(), [3, 4];
                                                            case 4:
                                                                return [2]
                                                        }
                                                    }))
                                                }))
                                            }()
                                        },
                                        size: 18
                                    }), (0, et.tZ)(va.Z, {
                                        name: "divider",
                                        size: 18
                                    }), (0, et.tZ)(va.Z, {
                                        id: "ng-nerd-close",
                                        name: "cross-thin",
                                        onClick: function() {
                                            return O(0), clearInterval(I.current), Z((function(n) {
                                                var e = new Map(n);
                                                return e.delete("frames"), e.delete("viewport"), e.delete("devicePixelRatio"), e
                                            })), r((function(n) {
                                                var e = n;
                                                return e.filter((function(n) {
                                                    return "frames" !== n && "viewport" !== n && "devicePixelRatio" !== n
                                                }))
                                            })), void t({
                                                type: Et.Z.START_CONNECTION,
                                                payload: {
                                                    isNerdMode: !1
                                                }
                                            })
                                        },
                                        size: 18
                                    })]
                                })]
                            }), (0, et.tZ)(zu, {
                                children: e("nerdModeDescription")
                            }), (0, et.tZ)(_u, {}), o.map((function(n) {
                                return (0, et.BX)(Fu, {
                                    children: [(0, et.tZ)(Mt.mH, {
                                        style: {
                                            textAlign: "right",
                                            margin: 0,
                                            fontWeight: 400
                                        },
                                        children: e(n)
                                    }), (0, et.tZ)("div", {
                                        children: ":"
                                    }), (0, et.tZ)(Mt.mH, qu(qu({}, N("connectionState" === n, A.get(n))), {}, {
                                        style: {
                                            letterSpacing: "0.05em",
                                            opacity: .8,
                                            margin: 0
                                        },
                                        children: A.get(n) || ""
                                    }))]
                                }, n)
                            })), (0, et.BX)("div", {
                                style: {
                                    color: "white",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    margin: "10px 0px 0"
                                },
                                children: [(0, et.tZ)(Mt.mH, {
                                    style: {
                                        margin: 0,
                                        fontSize: 11,
                                        fontWeight: 400
                                    },
                                    children: (0, et.tZ)("strong", {
                                        children: e("tp.toggle")
                                    })
                                }), (0, et.BX)(Gu, {
                                    id: "ng-touch-points",
                                    style: {
                                        pointerEvents: "auto"
                                    },
                                    children: [(0, et.tZ)("input", {
                                        type: "checkbox",
                                        checked: s,
                                        onChange: function() {
                                            return n = s, (0, Hi.CE)(n ? "0" : "1"), void t({
                                                type: Et.Z.TP_ENABLED,
                                                payload: {
                                                    tpEnabled: !n
                                                }
                                            });
                                            var n
                                        }
                                    }), (0, et.tZ)("span", {})]
                                })]
                            }), R >= 7 && (0, et.BX)("div", {
                                style: {
                                    marginTop: "8px"
                                },
                                children: [(0, et.tZ)(_u, {}), (0, et.BX)(Wu, {
                                    children: [(0, et.BX)("div", {
                                        children: [(0, et.tZ)(Mt.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: e("video")
                                        }), x.map((function(n) {
                                            return (0, et.BX)(Uu, {
                                                children: [(0, et.tZ)(Mt.mH, {
                                                    style: {
                                                        margin: 0
                                                    },
                                                    children: e(n)
                                                }), " ", (0, et.tZ)("div", {
                                                    children: ":"
                                                }), " ", (0, et.tZ)(Mt.mH, {
                                                    style: {
                                                        opacity: .8,
                                                        margin: 0
                                                    },
                                                    children: A.get(y.get(n) || "")
                                                })]
                                            })
                                        }))]
                                    }), (0, et.BX)("div", {
                                        children: [(0, et.tZ)(Mt.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: e("audio")
                                        }), x.map((function(n) {
                                            return (0, et.BX)(Uu, {
                                                children: [(0, et.tZ)(Mt.mH, {
                                                    style: {
                                                        margin: 0
                                                    },
                                                    children: e(n)
                                                }), " ", (0, et.tZ)("div", {
                                                    children: ":"
                                                }), " ", (0, et.tZ)(Mt.mH, {
                                                    style: {
                                                        opacity: .8,
                                                        margin: 0
                                                    },
                                                    children: A.get(w.get(n) || "")
                                                })]
                                            })
                                        }))]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                ep = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                tp = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                };

            function ip(n) {
                n.preventDefault()
            }
            var op, rp, ap, dp, lp, cp, sp, up, pp, fp, hp, gp, vp, mp, xp, yp, wp, bp, Ap, Zp, kp, Sp, Ep, Pp, Tp, Cp, Dp, Rp, Op, Ip, Mp, Lp, Bp, Xp, Np, Kp, jp, zp, Yp, Hp, _p, Fp, Up, Wp, Gp, Vp, qp, Qp, Jp, $p, nf, ef, tf, of , rf, af, df, lf, cf, sf, uf, pf, ff, hf, gf, vf, mf, xf, yf, wf, bf, Af, Zf, kf, Sf, Ef, Pf, Tf = function(n) {
                    var e, t, i, o, r, a, d, l, c, s, u, p, f = n.isAppPage,
                        h = n.overlayElement,
                        g = (0, Ye.useRef)(null),
                        v = (0, Ye.useRef)(null),
                        m = (0, He.I0)(),
                        x = (0, Rt.$)().t,
                        y = (0, He.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        w = (0, He.v9)((function(n) {
                            return n.play.isImeEnabled
                        })),
                        b = (0, He.v9)((function(n) {
                            return n.play.robloxToast
                        })),
                        A = (0, He.v9)((function(n) {
                            return n.play.androidActivityName
                        })),
                        Z = (0, He.v9)((function(n) {
                            return n.support.showSupport
                        })),
                        k = (0, He.v9)((function(n) {
                            return n.play.sessionMigrated
                        })),
                        S = (0, He.v9)((function(n) {
                            return n.play.duplicateTab
                        })),
                        E = (0, He.v9)((function(n) {
                            return n.play.sessionComplete
                        })),
                        P = (0, He.v9)((function(n) {
                            return n.play.endingTryNow
                        })),
                        T = (0, He.v9)((function(n) {
                            return n.play.inactiveTimeout
                        })),
                        C = (0, He.v9)((function(n) {
                            return n.play.peerConnectionState
                        })),
                        D = (0, He.v9)((function(n) {
                            return n.play.showAboutUs
                        })),
                        R = (0, He.v9)((function(n) {
                            return n.play.showAllGamesOverlay
                        })),
                        O = (0, He.v9)((function(n) {
                            return n.play.showExploreGamesOverlay
                        })),
                        I = (0, He.v9)((function(n) {
                            return n.play.permissionType
                        })),
                        M = (0, He.v9)((function(n) {
                            return n.play.orientationValue
                        })),
                        L = (0, He.v9)((function(n) {
                            return n.auth.guestFlow
                        })),
                        B = (0, He.v9)((function(n) {
                            return n.play.consoleFooterRef
                        })),
                        X = (0, He.v9)((function(n) {
                            return n.play.consoleHeaderRef
                        })),
                        N = (0, He.v9)((function(n) {
                            return n.play.showTimeLimitExceededScreen
                        })),
                        K = (0, He.v9)((function(n) {
                            return n.appPreferences.volume
                        })),
                        j = (0, He.v9)((function(n) {
                            return n.play.muted
                        })),
                        z = (0, He.v9)((function(n) {
                            return n.ads.inGameAds
                        })),
                        Y = (0, He.v9)((function(n) {
                            return n.ads.inGameAd
                        })),
                        H = (0, He.v9)((function(n) {
                            return n.ads.midRollAds
                        })),
                        _ = (0, He.v9)((function(n) {
                            return n.ads.midRollAdsMobile
                        })),
                        F = (0, He.v9)((function(n) {
                            return n.ads.midRollAdsFullScreen
                        })),
                        U = (0, He.v9)((function(n) {
                            return n.ads.imaError
                        })),
                        W = (0, He.v9)((function(n) {
                            return n.ads.adBlocker
                        })),
                        G = (0, He.v9)((function(n) {
                            return n.play.inactivityModal
                        })),
                        V = (0, He.v9)((function(n) {
                            return n.play.nativeMouseEnabled
                        })),
                        q = (0, He.v9)((function(n) {
                            return n.appPreferences.legacyControls
                        })),
                        Q = (0, He.v9)((function(n) {
                            return n.play.showBackbtn
                        })),
                        J = (0, He.v9)((function(n) {
                            return n.play.gameDisplayed
                        })),
                        $ = (0, He.v9)((function(n) {
                            return n.ads.adsEnded
                        })),
                        nn = (0, He.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        en = (0, Ye.useState)(!1),
                        tn = en[0],
                        on = en[1],
                        rn = Ga(),
                        an = Ue.ZP.features.shiftLock,
                        dn = (0, Ye.useRef)(null),
                        ln = (0, He.v9)((function(n) {
                            return n.play.mouseLockActive
                        })),
                        cn = (0, He.v9)((function(n) {
                            return n.play.showMouseLockOnboarding
                        })),
                        sn = (0, Ye.useState)(!1),
                        un = sn[0],
                        pn = sn[1],
                        fn = (0, Ye.useState)(!1),
                        hn = fn[0],
                        gn = fn[1],
                        vn = (0, Ye.useState)(!1),
                        mn = vn[0],
                        xn = vn[1],
                        yn = (0, Ye.useState)(!1),
                        wn = yn[0],
                        bn = yn[1],
                        An = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        Zn = null === (i = null === (t = null === (e = Ue.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.tryAndDownload) || void 0 === i ? void 0 : i.isEnabled,
                        kn = (0, He.v9)((function(n) {
                            return n.play.showRecordingModalBeforeExit
                        })),
                        Sn = (0, He.v9)((function(n) {
                            return n.ads.disableAllAds
                        })),
                        En = (0, He.v9)((function(n) {
                            return n.play.recordingUploadCompleted
                        })),
                        Pn = (0, He.v9)((function(n) {
                            return n.ads.displayAdLoaded
                        })),
                        Tn = (0, He.v9)((function(n) {
                            return n.ads.mobileExperiment
                        })),
                        Cn = (0, He.v9)((function(n) {
                            return n.play.displayAdRef
                        })),
                        Dn = (0, He.v9)((function(n) {
                            return n.play.showCopyPastePrompt.type
                        })),
                        Rn = (0, He.v9)((function(n) {
                            return n.play.showBloxdErrorScreen
                        })),
                        On = (0, He.v9)((function(n) {
                            return n.play.pokelaboHideHeaderFooter
                        })),
                        In = (0, He.v9)((function(n) {
                            return n.play.isPokelaboApp
                        }));
                    (0, Ye.useEffect)((function() {
                        return (0, Ve.L9)("AndroidPlayerLoaded"), (0, Ue.rN)(), document.addEventListener("visibilitychange", Hi.Co), window.addEventListener("blur", Ni.u1), window.addEventListener("paste", Qa.$b),
                            function() {
                                (0, Ue.rN)(), document.removeEventListener("visibilitychange", Hi.Co), window.removeEventListener("blur", Ni.u1), window.removeEventListener("paste", Qa.$b)
                            }
                    }), []), (0, Ye.useEffect)((function() {
                        ln ? setTimeout((function() {
                            gn(!1), pn(!0)
                        }), cn ? 4e3 : 1e3) : pn(!1)
                    }), [ln]), (0, Ye.useEffect)((function() {
                        Cn && Cn.current && Pn && (Cn.current.style.marginLeft = "0", Cn.current.style.marginRight = "0", Cn.current.style.marginTop = "0", Cn.current.style.marginBottom = "0")
                    }), [Cn, Pn]), (0, Ye.useEffect)((function() {
                        cn && (kt.Z.dispatch({
                            type: Et.Z.UPDATE_MOUSE_LOCK,
                            payload: {
                                showMouseLockOnboarding: !1
                            }
                        }), setTimeout((function() {
                            var n, e = null === (n = null === g || void 0 === g ? void 0 : g.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            null !== e && void 0 !== e && (null === dn || void 0 === dn ? void 0 : dn.current) && (dn.current.style.visibility = "visible", dn.current.style.width = "".concat(e.width, "px"), dn.current.style.height = "".concat(e.height, "px"), dn.current.style.top = "".concat(e.top, "px"), dn.current.style.left = "".concat(e.left, "px"))
                        }), (0, Ge.G6)() ? 1e3 : 0), setTimeout((function() {
                            ln && gn(!0)
                        }), 1e3), setTimeout((function() {
                            gn(!1), (null === dn || void 0 === dn ? void 0 : dn.current) && (dn.current.style.visibility = "collapse", dn.current.style.width = "100%", dn.current.style.height = "100%", dn.current.style.top = "0px", dn.current.style.left = "0px")
                        }), 3e3))
                    }), [cn]), (0, Ye.useEffect)((function() {
                        (0, Ve.L9)("VideoElementLoaded");
                        var n = null === g || void 0 === g ? void 0 : g.current;
                        return S ? (0, Ve.L9)("DuplicateTab2") : (m({
                                type: Et.Z.START_CONNECTION,
                                payload: {
                                    uaId: (0, Ge.Fz)(Ki.nP),
                                    uaSessionId: (0, Ge.io)(Ki.K3),
                                    videoRef: g,
                                    videoContainerRef: v,
                                    orientation: (0, Ue.DJ)() ? 90 === window.orientation ? qe.cj.landscape : qe.cj.portrait : Ue.ZP.appInfo.initialOrientation
                                }
                            }), Rn ? (window.addEventListener("resize", pt.m7), window.addEventListener("orientationchange", pt.m7), window.addEventListener("orientationchange", pt.Ul)) : ((0, qa.E1)(g), ep(void 0, void 0, void 0, (function() {
                                var n, e;
                                return tp(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, Pt.Z.getAppPlayFeatures({
                                                appId: Ue.ZP.appInfo.appId
                                            }, {})];
                                        case 1:
                                            return (n = t.sent()).status === qe.YR.Success && bn(null === (e = n.playFeatures) || void 0 === e ? void 0 : e.enableLiveChat), [2]
                                    }
                                }))
                            })), function(n) {
                                document.addEventListener("keydown", Yi.nv.keyDownEvent), document.addEventListener("keyup", Yi.nv.keyUpEvent), window.addEventListener("resize", pt.m7), window.addEventListener("orientationchange", pt.m7), window.addEventListener("orientationchange", pt.Ul), n && (null === n || void 0 === n || n.addEventListener(Ki.I6, Yi.h9.mouseDown), null === n || void 0 === n || n.addEventListener(Ki.Vy, Yi.h9.mouseUp), null === n || void 0 === n || n.addEventListener(Ki.Vy, Va.$9, {
                                    once: !0
                                }), null === n || void 0 === n || n.addEventListener("pointerleave", Yi.h9.mouseCancel), null === n || void 0 === n || n.addEventListener("pointermove", Yi.h9.mouseMove), null === n || void 0 === n || n.addEventListener("wheel", Yi.h9.mouseWheel), window.addEventListener("wheel", Yi.h9.mouseWheelNative, !1), (0, Ge.Tt)() && (null === n || void 0 === n || n.addEventListener("click", ip)))
                            }(n))),
                            function() {
                                ! function(n) {
                                    document.removeEventListener("keydown", Yi.nv.keyDownEvent), document.removeEventListener("keyup", Yi.nv.keyUpEvent), window.removeEventListener("orientationchange", pt.Ul), window.removeEventListener("orientationchange", pt.m7), n && (null === n || void 0 === n || n.removeEventListener(Ki.I6, Yi.h9.mouseDown), null === n || void 0 === n || n.removeEventListener(Ki.Vy, Yi.h9.mouseUp), null === n || void 0 === n || n.removeEventListener(Ki.Vy, Va.$9), null === n || void 0 === n || n.removeEventListener("pointerleave", Yi.h9.mouseCancel), null === n || void 0 === n || n.removeEventListener("pointermove", Yi.h9.mouseMove), null === n || void 0 === n || n.removeEventListener("wheel", Yi.h9.mouseWheel), (0, Ge.Tt)() && (null === n || void 0 === n || n.removeEventListener("click", ip)))
                                }(n)
                            }
                    }), [g]), (0, Ye.useEffect)((function() {
                        xn(!(0, Ge.tq)() && function() {
                            if ("4478" !== Ue.ZP.appInfo.appId) return !1;
                            var n = +(localStorage.getItem(Ki.tg) || "0"),
                                e = +(localStorage.getItem(Ki.xL) || "0");
                            return !(n >= 3 || Date.now() <= e)
                        }() && nn && $ && A === Ki.ps)
                    }), [nn, $, A]), (0, Ye.useEffect)((function() {
                        (0, pt.Ul)()
                    }), [rn, $, nn]), (0, Ye.useEffect)((function() {
                        (0, pt.sZ)(), (0, pt.EN)()
                    }), [$, nn, M]), (0, Ye.useEffect)((function() {
                        ln ? setTimeout((function() {
                            gn(!1), pn(!0)
                        }), cn ? 5e3 : 2e3) : pn(!1)
                    }), [ln]), (0, Ye.useEffect)((function() {
                        g.current && (g.current.volume = K || .5, g.current.muted = j)
                    }), [K, j]), (0, Ye.useEffect)((function() {
                        kt.Z.dispatch({
                            type: Et.Z.SET_SENSITIVITY_POPUP,
                            payload: {
                                isSensitivityPopupOpen: !1
                            }
                        })
                    }), [Z]), (0, Ye.useEffect)((function() {
                        var n, e = v.current,
                            t = Wa()(pt.Ul, 250);
                        return e && f && (n = new ResizeObserver((function() {
                                t()
                            }))).observe(e),
                            function() {
                                e && f && n.unobserve(e)
                            }
                    }), []);
                    return (0, et.BX)(et.HY, {
                        children: [(0, et.tZ)(Ba, {}), !nn && !Rn || !$ || !(0, Ge.tq)() && f || On ? null : (0, et.tZ)(Js.Z, {
                            clicked: tn,
                            handleInfoIconClick: function() {
                                m({
                                    type: Et.Z.MODAL_STATUS,
                                    payload: {
                                        showAboutUs: !D
                                    }
                                })
                            },
                            onButtonClicked: function() {
                                on(!tn)
                            }
                        }), (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(np, {}), w ? (0, et.tZ)(ua, {}) : null, nn && b && (0, et.tZ)(_a, {
                                videoElm: g
                            }), !(0, Ge.tq)() && an && (0, et.tZ)(ol.Z, {}), (0, et.BX)(Ru, {
                                ref: v,
                                isLandscape: !(!((0, Ge.tq)() && window.innerHeight < window.innerWidth) || 0 !== window.orientation && 90 !== window.orientation),
                                isMobile: (0, Ge.tq)(),
                                children: [mn && (0, et.tZ)(Cu, {}), !(S || k || T || E && !L && !P) || kn || N ? null : (0, et.tZ)(ba, {
                                    type: k ? Ki.$T : S ? Ki.J8 : T ? Ki.T$ : Ki.LD
                                }), (nn || Rn) && !U && !W && !Sn && (0, et.BX)(et.HY, {
                                    children: [z && (!f || (0, Ge.Em)() || (0, Ge.zc)()) && (0, et.tZ)(ur.Z, {}), H && (0, et.tZ)(Ar, {}), F && (0, et.tZ)(Mr, {}), _ && (0, et.tZ)(zr, {}), Tn && (nn || Rn) && (0, et.tZ)(nu.Z, {})]
                                }), (nn || Rn) && (0, et.tZ)(aa, {}), Z && (0, et.tZ)(Da.default, {}), D && (0, et.tZ)(pa.Z, {
                                    closeModal: function() {
                                        m({
                                            type: Et.Z.MODAL_STATUS,
                                            payload: {
                                                showAboutUs: !1
                                            }
                                        })
                                    }
                                }), !Ue.ZP.isAppPage && R && (0, et.tZ)(Us.default, {}), !Ue.ZP.isAppPage && O && (0, et.tZ)(Ws.Z, {}), G && $ && (nn || Rn) && (0, et.tZ)(Ca, {
                                    logo: "inactivity",
                                    heading: "areYouThere",
                                    text: "idleScreentext",
                                    buttonText: "iAmStillHere",
                                    infoText: "stoppingGame"
                                }), "connected" === C && I && (0, et.tZ)(Qd, {}), Q && nn && J && $ && (0, et.tZ)(Iu, {
                                    isMobile: (0, Ge.tq)(),
                                    children: (0, et.tZ)(xi.z, {
                                        variant: "primary",
                                        onClick: function() {
                                            return (0, Hi.vT)()
                                        },
                                        className: "back-btn",
                                        text: (0, Ge.tq)() ? x("back") : x("backToGame"),
                                        rounded: (0, Ge.tq)() ? {
                                            diameter: "56px"
                                        } : null,
                                        style: {
                                            paddingRight: 7
                                        },
                                        children: (0, Ge.tq)() ? (0, et.tZ)(et.HY, {
                                            children: (0, et.tZ)("span", {
                                                className: "arrow",
                                                children: (0, et.tZ)("svg", {
                                                    width: "8",
                                                    height: "13",
                                                    viewBox: "0 0 8 13",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    children: (0, et.tZ)("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: "M7.20711 0.792893C7.59763 1.18342 7.59763 1.81658 7.20711\n 2.20711L2.91421 6.5L7.20711 10.7929C7.59763 11.1834 7.59763\n 11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289\n 12.2071L0.792893 7.20711C0.402369 6.81658 0.402369 6.18342 0.792893\n 5.79289L5.79289 0.792893C6.18342 0.402369 6.81658 0.402369 7.20711 0.792893Z",
                                                        fill: "white"
                                                    })
                                                })
                                            })
                                        }) : "<"
                                    })
                                }), !k && !E && !S && (0, et.BX)(et.HY, {
                                    children: [(0, et.tZ)(ul, {}), (0, et.tZ)(Fa.Z, {}), $ && nn && !(0, Ue.yj)() && !In && (0, et.tZ)(il, {
                                        type: "success",
                                        onClose: Ue.Fp,
                                        children: (0, Ct._B)() ? x("guestToast") : "".concat(x("welcome"), ", ").concat((null === (r = null === (o = (0, Ct.et)()) || void 0 === o ? void 0 : o.name) || void 0 === r ? void 0 : r.split(" ")[0]) || x("player"), "!")
                                    }), (0, et.tZ)(Ou, {
                                        id: "js-game-video",
                                        onContextMenu: function(n) {
                                            return n.preventDefault()
                                        },
                                        style: {
                                            cursor: !q && V ? "none" : "auto",
                                            opacity: "disconnected" === C || "failed" === C ? .5 : nn && $ && !Rn ? 1 : 0,
                                            top: ((0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)()) && Zn && !(0, Ge.$h)() ? "calc(50% + ".concat(0, "px)") : (0, Ge.tq)() && !(0, Ge.Em)() && !(0, Ge.zc)() && Tn ? "calc(50% + ".concat(Ki.Fb / 2, "px)") : y || An === qe.cj.portrait ? "50%" : Y !== Ki.V ? "calc(50% - ".concat((null === (a = null === B || void 0 === B ? void 0 : B.current) || void 0 === a ? void 0 : a.clientHeight) ? .5 * Number(null === (d = null === B || void 0 === B ? void 0 : B.current) || void 0 === d ? void 0 : d.clientHeight) : 0, "px)") : "calc(50% + ".concat((null === (l = null === X || void 0 === X ? void 0 : X.current) || void 0 === l ? void 0 : l.clientHeight) ? .5 * Number(null === (c = null === X || void 0 === X ? void 0 : X.current) || void 0 === c ? void 0 : c.clientHeight) : 0, "px)"),
                                            left: y || Y !== Ki.V || An === qe.cj.portrait ? "50%" : "calc(50% - ".concat((null === (s = null === B || void 0 === B ? void 0 : B.current) || void 0 === s ? void 0 : s.clientWidth) ? .5 * Number(null === (u = null === B || void 0 === B ? void 0 : B.current) || void 0 === u ? void 0 : u.clientWidth) : 0, "px)")
                                        },
                                        autoPlay: !0,
                                        muted: !0,
                                        disableRemotePlayback: !0,
                                        playsInline: !0,
                                        ref: g
                                    }), h, !y && (0, Ge.SR)() && $ && nn && !Rn && !On && (0, et.tZ)(Fs.Z, {
                                        isAppPage: f
                                    })]
                                }), !(0, Ue.DJ)() && !$ && f && (0, et.tZ)(vu, {
                                    gameName: Ue.ZP.appInfo.appName,
                                    gameIcon: null === (p = Ue.ZP.appInfo.media) || void 0 === p ? void 0 : p.icon,
                                    isMobile: (0, Ge.tq)(),
                                    isDesktop: (0, Ge.nI)(),
                                    isAppPage: f
                                }), !(0, Ge.tq)() && (0, et.tZ)(Ys, {
                                    className: $ && nn && !E ? "" : "hidden"
                                }), (0, et.tZ)(Qs, {})]
                            }), $ && nn && !E && (0, et.tZ)(Jd.Ix, {}), (0, Ge.SR)() && (0, et.BX)(et.HY, {
                                children: [(0, et.tZ)(Hs.ed, {
                                    ref: dn
                                }), (0, et.tZ)(Hs.Co, {
                                    style: {
                                        display: un && ln ? "block" : "none"
                                    },
                                    children: (0, et.BX)(Hs.ug, {
                                        children: [x("press"), " ", (0, et.tZ)("kbd", {
                                            children: "Esc"
                                        }), " ", x("cursorLockedInfo")]
                                    })
                                }), (0, et.tZ)(Hs.Co, {
                                    style: {
                                        display: hn && ln ? "block" : "none"
                                    },
                                    children: (0, et.tZ)(Hs.ug, {
                                        children: x("cursorLocked")
                                    })
                                })]
                            }), En && (0, et.tZ)($s.Z, {}), $ && wn && (0, Ue.CO)() && (0, et.tZ)(_s, {}), Dn && (0, et.tZ)(su, {})]
                        })]
                    })
                },
                Cf = t(71660),
                Df = t(42385),
                Rf = t(96788),
                Of = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                If = Qe.ZP.div(op || (op = Of(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                Mf = ((0, Qe.ZP)(If)(ap || (ap = Of(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: #111111;\n  z-index: 5;\n  transition: all 0.3s ease-out;\n\n  ", "\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  background-color: #111111;\n  z-index: 5;\n  transition: all 0.3s ease-out;\n\n  ", "\n"])), (function(n) {
                    return !n.toggle && (0, Qe.iv)(rp || (rp = Of(["\n    opacity: 0;\n  "], ["\n    opacity: 0;\n  "])))
                })), Qe.ZP.div(dp || (dp = Of(["\n  position: absolute;\n  left: 16px;\n  top: 19px;\n"], ["\n  position: absolute;\n  left: 16px;\n  top: 19px;\n"]))), (0, Qe.ZP)(If)(lp || (lp = Of(["\n  flex-direction: column;\n  gap: 26px;\n  padding: 24px;\n  width: 264px;\n  height: 125px;\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n"], ["\n  flex-direction: column;\n  gap: 26px;\n  padding: 24px;\n  width: 264px;\n  height: 125px;\n  background: ", ";\n  backdrop-filter: blur(12px);\n  border-radius: 12px;\n"])), (function(n) {
                    return n.theme.colors.white20
                })), {
                    src: "/play/_next/static/media/logoIcon.c5c2b984.svg",
                    height: 16,
                    width: 16
                }),
                Lf = t(15576),
                Bf = {
                    src: "/play/_next/static/media/minimize.88be5bab.svg",
                    height: 17,
                    width: 16
                },
                Xf = t(3327),
                Nf = {
                    src: "/play/_next/static/media/yt.4deb7209.svg",
                    height: 16,
                    width: 16
                },
                Kf = t(42109),
                jf = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                zf = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                Yf = function() {
                    var n = (0, Rt.$)().t,
                        e = window.localStorage.getItem(Ki.$U) || "".concat(n("recordFilenameOp".concat(Math.floor(9 * Math.random()))).replace("{0}", Ue.ZP.appInfo.appName), "  #nowgg #").concat(Ue.ZP.appInfo.appName.replaceAll(" ", "").toLowerCase()),
                        t = (0, Ye.useState)(e),
                        i = t[0],
                        o = t[1],
                        r = (0, He.I0)(),
                        a = (0, He.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        d = (0, He.v9)((function(n) {
                            return n.play.recordingData
                        })),
                        l = (0, He.v9)((function(n) {
                            return n.play.consoleFooterRef
                        })),
                        c = (0, He.v9)((function(n) {
                            return n.play.saveRecordingPostConversion
                        })),
                        s = (0, He.v9)((function(n) {
                            return n.play.stopAndDownloadRecording
                        })),
                        u = (0, He.v9)((function(n) {
                            return n.play.urlToOpenAfterRecordModalExit
                        })),
                        p = (0, Ye.useState)("50vh"),
                        f = p[0],
                        h = p[1],
                        g = (0, Ye.useState)("50vw"),
                        v = g[0],
                        m = g[1],
                        x = (0, Ye.useState)(new Blob(d)),
                        y = x[0],
                        w = x[1],
                        b = (0, Ye.useState)((0, Ge.Hh)().extension),
                        A = b[0],
                        Z = b[1],
                        k = (0, Ye.useState)(!1),
                        S = k[0],
                        E = k[1],
                        P = (0, Ye.useState)(!1),
                        T = P[0],
                        C = P[1],
                        D = (0, Ye.useState)(a || (0, yi.hu)()),
                        R = D[0],
                        O = D[1],
                        I = (0, Ye.useState)(!1),
                        M = I[0],
                        L = I[1],
                        B = (0, Ye.useState)(!1),
                        X = B[0],
                        N = B[1],
                        K = (0, He.v9)((function(n) {
                            return n.play.recordingUploadInProgress
                        })),
                        j = (0, Ye.useState)(!1),
                        z = j[0],
                        Y = j[1],
                        H = (0, Ye.useState)(!0),
                        _ = H[0],
                        F = H[1],
                        U = (0, He.v9)((function(n) {
                            return n.play.recordingUploadError
                        })),
                        W = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        G = (0, He.v9)((function(n) {
                            return n.play.htmlFrameRef
                        })),
                        V = (0, Ye.useRef)(null),
                        q = sessionStorage.getItem("isEmbeddedFrame"),
                        Q = (0, He.v9)((function(n) {
                            return n.play.recordActionRef
                        })),
                        J = (0, He.v9)((function(n) {
                            return n.play.isRecordingProcessing
                        })),
                        $ = (0, He.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        nn = ((0, He.v9)((function(n) {
                            return n.play.canUploadStop
                        })), function() {
                            (0, Ve.L9)(Ki.S5, {
                                element: "VideoRecorder",
                                action: "DiscardClicked"
                            }), r({
                                type: Et.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    recordingData: [],
                                    showRecordModal: !1
                                }
                            }), q || (0, Xf.GK)()
                        }),
                        en = function() {
                            return jf(void 0, void 0, void 0, (function() {
                                return zf(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return N(!0), [4, (e = d, jf(void 0, void 0, Promise, (function() {
                                                var n, t;
                                                return zf(this, (function(o) {
                                                    switch (o.label) {
                                                        case 0:
                                                            return e.length < 1 ? [2] : T ? ((0, Ge.Sv)(y, "".concat(i).concat(A)), [2]) : (r({
                                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                                payload: {
                                                                    isRecordingProcessing: !0
                                                                }
                                                            }), S ? (r({
                                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                                payload: {
                                                                    saveRecordingPostConversion: !0
                                                                }
                                                            }), [2]) : (n = (0, Ge.Hh)(), t = {
                                                                processedBlob: new Blob(e, {
                                                                    type: n.mime
                                                                }),
                                                                processedBlobExt: n.extension
                                                            }, ".mp4" === n.extension ? [3, 2] : [4, (0, Ge.d8)(t.processedBlob)]));
                                                        case 1:
                                                            ".mp4" === (t = o.sent()).processedBlobExt && (E(!0), Z(t.processedBlobExt), w(t.processedBlob), E(!1), C(!0)), o.label = 2;
                                                        case 2:
                                                            return (0, Ge.Sv)(t.processedBlob, "".concat(i).concat(t.processedBlobExt)), r({
                                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                                payload: {
                                                                    isRecordingProcessing: !1
                                                                }
                                                            }), [2]
                                                    }
                                                }))
                                            })))];
                                        case 1:
                                            return n.sent(), c || (0, Ve.L9)(Ki.S5, {
                                                element: "VideoRecorder",
                                                action: "SaveClicked"
                                            }), [2]
                                    }
                                    var e
                                }))
                            }))
                        },
                        tn = function() {
                            var n, e, t, i = null === (n = null === Q || void 0 === Q ? void 0 : Q.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            if (i) {
                                var o = null === (e = null === W || void 0 === W ? void 0 : W.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                    r = null === (t = null === V || void 0 === V ? void 0 : V.current) || void 0 === t ? void 0 : t.getBoundingClientRect(),
                                    a = i.top || 0,
                                    d = i.right || 0,
                                    l = window.innerHeight - a + 16,
                                    c = window.innerWidth - d - 48;
                                (0, yi.hu)() || r && o && window.innerWidth - c - r.width < o.left ? O(!0) : (O(!1), h("".concat(l, "px")), m("".concat(c, "px")))
                            } else O(!0)
                        };
                    (0, Ye.useEffect)((function() {
                        tn()
                    }), [null === Q || void 0 === Q ? void 0 : Q.current]), (0, Ye.useEffect)((function() {
                        var n = kt.Z.getState().play.recordingTimerText.split(":"),
                            e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10),
                            t = (0, Ge.Hh)(),
                            o = {
                                processedBlob: new Blob(d, {
                                    type: t.mime
                                }),
                                processedBlobExt: t.extension
                            };
                        ".mp4" !== t.extension && (window.localStorage.getItem(Ki.$U) || e < 300) && jf(void 0, void 0, void 0, (function() {
                            var n;
                            return zf(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return n = kt.Z.getState().play.recordingData, E(!0), [4, (0, Ge.d8)(new Blob(n, {
                                            type: t.mime
                                        }))];
                                    case 1:
                                        return o = e.sent(), Z(o.processedBlobExt), w(o.processedBlob), E(!1), C(!0), kt.Z.getState().play.saveRecordingPostConversion && ((0, Ge.Sv)(o.processedBlob, "".concat(i).concat(o.processedBlobExt)), r({
                                            type: Et.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                isRecordingProcessing: !1,
                                                saveRecordingPostConversion: !1
                                            }
                                        }), (0, Ve.L9)(Ki.S5, {
                                            element: "VideoRecorder",
                                            action: "SaveClicked"
                                        })), [2]
                                }
                            }))
                        })), (null === l || void 0 === l ? void 0 : l.current) || O(!0);
                        var a = new ResizeObserver((function() {
                                tn()
                            })),
                            c = new MutationObserver((function() {
                                tn()
                            })),
                            s = null;
                        return (null === G || void 0 === G ? void 0 : G.current) && (s = new ResizeObserver((function() {
                                tn()
                            }))), (null === l || void 0 === l ? void 0 : l.current) && c.observe(l.current, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), (null === W || void 0 === W ? void 0 : W.current) && a.observe(W.current), s && (null === G || void 0 === G ? void 0 : G.current) && s.observe(G.current),
                            function() {
                                a.disconnect(), c.disconnect(), s && s.disconnect()
                            }
                    }), []);
                    (0, Ye.useEffect)((function() {
                        s && (F(!1), jf(void 0, void 0, void 0, (function() {
                            return zf(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, en()];
                                    case 1:
                                        return n.sent(), u && window.open(u, "_self"), [2]
                                }
                            }))
                        })))
                    }), [s]);
                    return _ ? (0, et.tZ)(Kf.aV, {
                        children: (0, et.BX)(Kf.jB, {
                            showCentered: R || a || (0, yi.hu)(),
                            style: {
                                bottom: R ? "" : f,
                                right: R ? "" : v
                            },
                            ref: V,
                            children: [(0, et.BX)(Kf.Ue, {
                                children: [(0, et.BX)(If, {
                                    children: [M && (0, et.tZ)("div", {
                                        style: {
                                            marginRight: "8px"
                                        },
                                        children: (0, et.tZ)("img", {
                                            src: (0, Xt.j)(fo),
                                            alt: n("warning")
                                        })
                                    }), (0, et.tZ)(Mt.QV, {
                                        className: "recordingTooltip",
                                        children: M ? n("discardRecording") : z ? "".concat(n("stopUploading"), "?") : n(U ? "retryUploading" : K ? "savingVideo" : "recordingComplete")
                                    })]
                                }), !M && !z && (0, et.tZ)(_o.A3, {
                                    onClick: function() {
                                        K ? r({
                                            type: Et.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                recordingData: d,
                                                showRecordModal: !1
                                            }
                                        }) : X ? nn() : L(!0)
                                    },
                                    children: K ? (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Bf),
                                        alt: n("minimize")
                                    }) : (0, et.tZ)(va.Z, {
                                        name: "cross-thin",
                                        size: 14
                                    })
                                })]
                            }), U && !M && !z && (0, et.BX)("div", {
                                style: {
                                    display: "flex",
                                    gap: "8px",
                                    marginBottom: "8px",
                                    marginTop: "8px"
                                },
                                children: [(0, et.tZ)("img", {
                                    src: (0, Xt.j)(fo),
                                    alt: n("warning")
                                }), (0, et.tZ)(Mt.gd, {
                                    style: {
                                        color: "#FFF"
                                    },
                                    children: n("retryDescription")
                                })]
                            }), !M && !z && !q && (0, et.BX)(et.HY, {
                                children: [(0, et.tZ)(Mt.gd, {
                                    style: {
                                        color: "rgba(255, 255, 255, 0.80)",
                                        marginTop: "12px",
                                        marginBottom: "4px"
                                    },
                                    children: n("giveGameplayName")
                                }), (0, et.tZ)(Kf.EH, {
                                    id: "search-box",
                                    type: "text",
                                    value: K && window.localStorage.getItem(Ki.$U) || i,
                                    disabled: !!K,
                                    onChange: function(n) {
                                        return o(n.target.value)
                                    },
                                    autoComplete: "off",
                                    onBlur: function() {
                                        o(i), r({
                                            type: Et.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !1
                                            }
                                        })
                                    },
                                    onFocus: function() {
                                        r({
                                            type: Et.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !0
                                            }
                                        })
                                    }
                                })]
                            }), (0, et.tZ)(Mt.gd, {
                                className: "rec-description",
                                children: q ? n("recCompleteDesc") : M ? n("discardRecDescription") : z ? n("stopUploadingDesc") : null
                            }), (0, et.BX)(Kf.pI, {
                                children: [J ? (0, et.tZ)(Kf.V4, {
                                    style: {
                                        marginRight: "8px"
                                    },
                                    children: (0, et.BX)(Kf.fX, {
                                        children: [(0, et.tZ)("img", {
                                            className: "spinner",
                                            src: (0, Xt.j)(Lf.Z),
                                            alt: n("loader")
                                        }), (0, et.BX)(Mt.IS, {
                                            style: {
                                                color: "white"
                                            },
                                            children: [n("downloading"), "..."]
                                        })]
                                    })
                                }) : (0, et.tZ)(xi.z, {
                                    variant: M || z ? "secondary" : "primary",
                                    style: {
                                        marginRight: "8px",
                                        width: "50%",
                                        gap: "8px"
                                    },
                                    onClick: function() {
                                        return jf(void 0, void 0, void 0, (function() {
                                            return zf(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return M ? (L(!1), [3, 4]) : [3, 1];
                                                    case 1:
                                                        return z ? ((0, Pt.F)(), r({
                                                            type: Et.Z.UPDATE_IS_RECORDING,
                                                            payload: {
                                                                showRecordModal: !1
                                                            }
                                                        }), r({
                                                            type: Et.Z.VIDEO_UPLOAD_STATUS,
                                                            payload: {
                                                                recordingUploadInProgress: !1,
                                                                recordingUploadCompleted: !1,
                                                                recordingUploadStopped: !0
                                                            }
                                                        }), Y(!1), [3, 4]) : [3, 2];
                                                    case 2:
                                                        return [4, en()];
                                                    case 3:
                                                        n.sent(), n.label = 4;
                                                    case 4:
                                                        return [2]
                                                }
                                            }))
                                        }))
                                    },
                                    text: n(M ? "goBack" : z ? "stopUploading" : "download"),
                                    children: !M && !z && (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Ds.Z),
                                        alt: n("download")
                                    })
                                }), !K || z ? (0, et.tZ)(xi.z, {
                                    variant: M || z ? "primary" : "secondary",
                                    style: {
                                        width: "50%",
                                        color: M || z ? "" : "rgba(0, 0, 0, 0.8)"
                                    },
                                    onClick: function() {
                                        return jf(void 0, void 0, void 0, (function() {
                                            return zf(this, (function(n) {
                                                return M ? nn() : q ? ((0, Ve.L9)(Ki.S5, {
                                                    element: "VideoRecorder",
                                                    action: "YouTubeClicked"
                                                }), N(!0), window.open("https://studio.youtube.com/channel/", "_blank", "noopener")) : z ? Y(!1) : ($ && kt.Z.dispatch({
                                                    type: Et.Z.VIDEO_UPLOAD_STATUS,
                                                    payload: {
                                                        recordingUploadInProgress: !0,
                                                        recordingUploadStopped: !1,
                                                        recordingUploadCompleted: !1,
                                                        canUploadStop: !0
                                                    }
                                                }), N(!0), (0, Xf.vJ)(d, i)), [2]
                                            }))
                                        }))
                                    },
                                    text: n(M ? "discard" : q ? "shareOnYT" : z ? "goBack" : U ? "retryNow" : "saveOnNowgg"),
                                    children: !M && !z && (q ? (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Nf),
                                        alt: "yt"
                                    }) : (0, et.tZ)("img", {
                                        src: (0, Xt.j)(Mf),
                                        alt: "nowgg"
                                    }))
                                }) : (0, et.BX)(Kf.V4, {
                                    children: [(0, et.BX)(Kf.fX, {
                                        children: [(0, et.tZ)("img", {
                                            className: "spinner",
                                            src: (0, Xt.j)(Lf.Z),
                                            alt: n("loader")
                                        }), (0, et.tZ)(Mt.IS, {
                                            style: {
                                                color: "white"
                                            },
                                            children: n("uploading")
                                        })]
                                    }), (0, et.tZ)(Rf.EB, {
                                        width: "90%",
                                        style: {
                                            position: "absolute",
                                            bottom: "0"
                                        },
                                        children: (0, et.tZ)(Rf.ko, {})
                                    })]
                                })]
                            })]
                        })
                    }) : (0, et.tZ)(et.HY, {})
                },
                Hf = {
                    src: "/play/_next/static/media/micWarning.fd3a8271.svg",
                    height: 24,
                    width: 24
                },
                _f = {
                    src: "/play/_next/static/media/micBlock.6173cc2a.svg",
                    height: 20,
                    width: 20
                },
                Ff = {
                    src: "/play/_next/static/media/cameraBlock.1ce4badf.svg",
                    height: 20,
                    width: 20
                },
                Uf = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Wf = Qe.ZP.div(cp || (cp = Uf(["\n  display: flex;\n  padding-bottom: 8px;\n  align-items: center;\n\n  h5 {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  padding-bottom: 8px;\n  align-items: center;\n\n  h5 {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Gf = Qe.ZP.div(sp || (sp = Uf(["\n  height: 215px;\n  display: flex;\n  flex-direction: column;\n  width: 410px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  height: 215px;\n  display: flex;\n  flex-direction: column;\n  width: 410px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n\n  h3 {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.border.radius3
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Vf = Qe.ZP.div(up || (up = Uf(["\n  color: ", ";\n  margin-bottom: 24px;\n"], ["\n  color: ", ";\n  margin-bottom: 24px;\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                qf = Qe.ZP.span(pp || (pp = Uf(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  vertical-align: top;\n"], ["\n  color: ", ";\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 150%;\n  vertical-align: top;\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                Qf = Qe.ZP.img(fp || (fp = Uf(["\n  width: 20px;\n  height: 20px;\n  margin: 0px 4px;\n"], ["\n  width: 20px;\n  height: 20px;\n  margin: 0px 4px;\n"]))),
                Jf = function() {
                    return (Jf = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                $f = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.I0)(),
                        t = function() {
                            e({
                                type: Et.Z.MODAL_STATUS,
                                payload: {
                                    showMicBlockedModal: !1
                                }
                            })
                        };
                    return (0, et.tZ)(Kf.aV, {
                        children: (0, et.BX)(Gf, {
                            children: [(0, et.tZ)(va.Z, {
                                style: Jf({
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    cursor: "pointer"
                                }, !(0, Ge.tq)() && {
                                    position: "absolute",
                                    top: "24px",
                                    right: "24px",
                                    color: Hd.qm.colors.white
                                }),
                                onClick: t,
                                size: 16,
                                name: "cross-thin",
                                id: "ng-info-close"
                            }), (0, et.BX)(Wf, {
                                children: [(0, et.tZ)("img", {
                                    alt: n("recorder"),
                                    src: (0, Xt.j)(Hf),
                                    style: {
                                        width: "24px",
                                        height: "24px"
                                    }
                                }), (0, et.tZ)(Mt.T3, {
                                    style: {
                                        marginLeft: "8px",
                                        marginBottom: "0px"
                                    },
                                    children: n("micBlocked.head")
                                })]
                            }), (0, et.BX)(Vf, {
                                children: [(0, et.tZ)(qf, {
                                    children: n("micBlocked.info1")
                                }), (0, et.tZ)(Qf, {
                                    src: (0, Xt.j)(_f)
                                }), (0, et.tZ)(qf, {
                                    children: n("micBlocked.info2")
                                }), (0, et.tZ)(Qf, {
                                    src: (0, Xt.j)(Ff)
                                }), (0, et.tZ)(qf, {
                                    children: n("micBlocked.info3")
                                })]
                            }), (0, et.BX)(Kf.pI, {
                                children: [(0, et.tZ)(xi.z, {
                                    variant: "secondary",
                                    style: {
                                        marginRight: "8px",
                                        width: "50%"
                                    },
                                    onClick: function() {
                                        null === window || void 0 === window || window.open(Ki.C_, "_blank", "noopener noreferrer"), e({
                                            type: Et.Z.MODAL_STATUS,
                                            payload: {
                                                showMicBlockedModal: !1
                                            }
                                        })
                                    },
                                    text: n("learnMore")
                                }), (0, et.tZ)(xi.z, {
                                    variant: "primary",
                                    style: {
                                        width: "50%"
                                    },
                                    onClick: t,
                                    text: n("close")
                                })]
                            })]
                        })
                    })
                },
                nh = {
                    src: "/play/_next/static/media/secretPassageImage.ebf63dee.svg",
                    height: 126,
                    width: 400
                },
                eh = {
                    src: "/play/_next/static/media/backArrowIcon.e4ed78b4.svg",
                    height: 32,
                    width: 30
                },
                th = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ih = Qe.ZP.div(hp || (hp = th(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   padding: 40px;\n   color: ", ";\n   max-height: 95vh;\n   max-width: 505px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.64);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   .allowAdsText {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n   .adBlockMsg {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   padding: 40px;\n   color: ", ";\n   max-height: 95vh;\n   max-width: 505px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   box-shadow: 0px 12px 32px rgba(0, 0, 0, 0.64);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   .allowAdsText {\n      font-weight: 600;\n      font-size: 24px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n   .adBlockMsg {\n      font-weight: 400;\n      font-size: 14px;\n      line-height: 150%;\n      margin: 8px 0px 0px;\n      text-align: center;\n   }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                oh = Qe.ZP.button(gp || (gp = th(["\n   width: 100%;\n   margin-top: 40px;\n   margin-bottom: 52px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 12px;\n   border: none;\n   outline: none;\n   cursor: pointer;\n   padding: 16px;\n   color: ", ";\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"], ["\n   width: 100%;\n   margin-top: 40px;\n   margin-bottom: 52px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 12px;\n   border: none;\n   outline: none;\n   cursor: pointer;\n   padding: 16px;\n   color: ", ";\n   font-weight: 600;\n   font-size: 16px;\n   line-height: 150%;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                rh = Qe.ZP.div(vp || (vp = th(["\n   left: 0;\n   right: 0;\n   bottom: 0;\n   top: 0;\n   position: fixed;\n   z-index: 99;\n   background-color: rgba(0, 0, 0, 0.7);\n"], ["\n   left: 0;\n   right: 0;\n   bottom: 0;\n   top: 0;\n   position: fixed;\n   z-index: 99;\n   background-color: rgba(0, 0, 0, 0.7);\n"]))),
                ah = Qe.ZP.div(mp || (mp = th(["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 12px;\n   background: rgba(0, 0, 0, 0.6);\n   border-radius: 0px 0px 12px 12px;\n   color: rgba(255, 255, 255, 0.8);\n   width: 100%;\n   position: absolute;\n   bottom: 0;\n"], ["\n   display: flex;\n   justify-content: center;\n   align-items: center;\n   padding: 12px;\n   background: rgba(0, 0, 0, 0.6);\n   border-radius: 0px 0px 12px 12px;\n   color: rgba(255, 255, 255, 0.8);\n   width: 100%;\n   position: absolute;\n   bottom: 0;\n"]))),
                dh = Qe.ZP.p(xp || (xp = th(["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   margin-right: 12px;\n   margin-bottom: 0;\n"], ["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   margin-right: 12px;\n   margin-bottom: 0;\n"]))),
                lh = Qe.ZP.p(yp || (yp = th(["\n   border: 1px solid rgba(255, 255, 255, 0.8);\n   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n   border-radius: 6px;\n   padding: 7px 14px;\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   cursor: pointer;\n   margin: 0;\n"], ["\n   border: 1px solid rgba(255, 255, 255, 0.8);\n   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n   border-radius: 6px;\n   padding: 7px 14px;\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   cursor: pointer;\n   margin: 0;\n"]))),
                ch = Qe.ZP.div(wp || (wp = th(["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 440px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   img {\n      border-radius: 8px;\n      margin-bottom: 12px;\n   }\n   p {\n      margin: 0;\n   }\n"], ["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 440px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   img {\n      border-radius: 8px;\n      margin-bottom: 12px;\n   }\n   p {\n      margin: 0;\n   }\n"]))),
                sh = Qe.ZP.p(bp || (bp = th(["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: ", ";\n"], ["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                uh = Qe.ZP.p(Ap || (Ap = th(["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 20px !important;\n"], ["\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 20px !important;\n"]))),
                ph = Qe.ZP.ul(Zp || (Zp = th(["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"], ["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"]))),
                fh = Qe.ZP.button(kp || (kp = th(["\n   width: 100%;\n   margin: 0;\n   padding: 10px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 8px;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   color: ", ";\n   cursor: pointer;\n   border: none;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"], ["\n   width: 100%;\n   margin: 0;\n   padding: 10px;\n   background: #FF42A5;\n   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n   border-radius: 8px;\n   font-weight: 600;\n   font-size: 14px;\n   line-height: 150%;\n   color: ", ";\n   cursor: pointer;\n   border: none;\n   &:hover {\n      background: rgba(255, 66, 165, 0.8);\n   }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                hh = Qe.ZP.div(Sp || (Sp = th(["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 680px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   video {\n      border-radius: 8px;\n   }\n"], ["\n   padding: 20px;\n   max-height: 95vh;\n   max-width: 680px;\n   width: 100%;\n   background: rgba(255, 255, 255, 0.2);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(60px);\n   border-radius: 12px;\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   video {\n      border-radius: 8px;\n   }\n"]))),
                gh = Qe.ZP.div(Ep || (Ep = th(["\n   position: absolute;\n   left: 20px;\n   top: 22px;\n   width: 30px;\n   height: 32px;\n   cursor: pointer;\n"], ["\n   position: absolute;\n   left: 20px;\n   top: 22px;\n   width: 30px;\n   height: 32px;\n   cursor: pointer;\n"]))),
                vh = Qe.ZP.p(Pp || (Pp = th(["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: #fff;\n   text-align: center;\n   margin-bottom: 20px;\n"], ["\n   font-weight: 600;\n   font-size: 24px;\n   line-height: 150%;\n   color: #fff;\n   text-align: center;\n   margin-bottom: 20px;\n"]))),
                mh = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, Ye.useState)(!1),
                        t = e[0],
                        i = (e[1], (0, Ye.useState)(!1)),
                        o = i[0],
                        r = i[1];
                    return (0, et.BX)(rh, {
                        className: "ad-blocker",
                        children: [!t && !o && (0, et.BX)(ih, {
                            children: [(0, et.tZ)("img", {
                                src: (0, Xt.j)(eo),
                                alt: "logo",
                                width: 88,
                                height: 88
                            }), (0, et.tZ)("p", {
                                className: "allowAdsText",
                                children: n("pleaseAllowAds")
                            }), (0, et.tZ)("p", {
                                className: "adBlockMsg",
                                children: n("adBlockerMsg")
                            }), (0, et.tZ)(oh, {
                                onClick: function() {
                                    (0, yi.iI)("AdblockerOn")
                                },
                                children: n("adBlockerCnfrmMsg")
                            }), (0, et.BX)(ah, {
                                children: [(0, et.tZ)(dh, {
                                    children: n("cantTurnOff")
                                }), (0, et.tZ)(lh, {
                                    onClick: function() {
                                        (0, Ve.L9)("SecretPassageViewed", {}, (function() {
                                            window.open(Ki.o7, "_self", "noreferrer")
                                        }))
                                    },
                                    children: n("joinOnDiscord")
                                })]
                            })]
                        }), t && !o && (0, et.BX)(ch, {
                            children: [(0, et.tZ)(sh, {
                                children: n("secretPassage")
                            }), (0, et.tZ)(uh, {
                                children: n("toPlayGames")
                            }), (0, et.BX)(ph, {
                                children: [(0, et.tZ)("li", {
                                    children: (0, et.BX)(yu.c, {
                                        i18nKey: "searchFor",
                                        children: ["Search for \u201c", (0, et.tZ)("span", {
                                            children: "Online games"
                                        }), "\u201d on Google Search"]
                                    })
                                }), (0, et.tZ)("li", {
                                    children: n("findBelow")
                                })]
                            }), (0, et.tZ)("img", {
                                src: (0, Xt.j)(nh),
                                alt: n("search"),
                                width: 400,
                                height: 125
                            }), (0, et.tZ)(fh, {
                                onClick: function() {
                                    r(!0), (0, Ve.L9)("SecretPassageHintViewed")
                                },
                                children: n("hint")
                            })]
                        }), o && (0, et.BX)(hh, {
                            children: [(0, et.tZ)(gh, {
                                onClick: function() {
                                    return r(!1)
                                },
                                children: (0, et.tZ)("img", {
                                    src: (0, Xt.j)(eh),
                                    alt: n("back"),
                                    width: 30,
                                    height: 32
                                })
                            }), (0, et.tZ)(vh, {
                                children: n("secretPassageTutorial")
                            }), (0, et.tZ)("video", {
                                width: "640",
                                height: "267.2",
                                autoPlay: !0,
                                muted: !0,
                                style: {
                                    background: "white"
                                },
                                loop: !0,
                                children: (0, et.tZ)("source", {
                                    src: "https://cdn.now.gg/apps-content/Now.ggActivity.mp4",
                                    type: "video/mp4"
                                })
                            })]
                        })]
                    })
                },
                xh = {
                    src: "/play/_next/static/media/watermark.1a9cd7c7.svg",
                    height: 48,
                    width: 124
                },
                yh = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                wh = Qe.ZP.div(Tp || (Tp = yh(["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 320px;\n  background: ", ";\n  padding: ", ";\n  top: 50%;\n  left: 50%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  border-radius: ", ";\n  backdrop-filter: blur(60px);\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.spacing.base6
                }), (function(n) {
                    return n.theme.border.radius3
                })),
                bh = Qe.ZP.div(Cp || (Cp = yh(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: space-between;\n  gap: 16px;\n"]))),
                Ah = function() {
                    return (Ah = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var o in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                Zh = function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                },
                kh = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                Sh = {
                    gameTile: {
                        heading: "warning",
                        info: "recordingStopOnGameSwitch",
                        btn1: "startRecordingSwitch",
                        btn2: "stopRecordingSwitch",
                        btn3: "continueRecording"
                    },
                    sessionComplete: {
                        heading: "recordingStopped",
                        info: "recordingStoppedGametime",
                        btn1: "saveRecording",
                        btn2: "discardRecordingNoQM"
                    },
                    duplicateTab: {
                        heading: "recordingStopped",
                        info: "recordingStoppedDuplicateTab",
                        btn1: "saveRecording",
                        btn2: "discardRecordingNoQM"
                    },
                    inactiveTimeout: {
                        heading: "recordingStopped",
                        info: "recordingStoppedInactivity",
                        btn1: "saveRecording",
                        btn2: "discardRecordingNoQM"
                    },
                    userLogin: {
                        heading: "warning",
                        info: "recordingStoppedLogin",
                        btn1: "saveRecordingLogin",
                        btn2: "stopRecordingLogin",
                        btn3: "continueRecording"
                    }
                },
                Eh = function() {
                    var n = (0, Rt.$)().t,
                        e = "".concat(n("recordFilenameOp".concat(Math.floor(9 * Math.random()))).replace("{0}", Ue.ZP.appInfo.appName), "  #nowgg #").concat(Ue.ZP.appInfo.appName.replaceAll(" ", "").toLowerCase()),
                        t = (0, He.I0)(),
                        i = (0, He.v9)((function(n) {
                            return n.play.urlToOpenAfterRecordModalExit
                        })),
                        o = (0, He.v9)((function(n) {
                            return n.play.showRecordingModalBeforeExitSource
                        })),
                        r = (0, He.v9)((function(n) {
                            return n.play.recordingUserAudioTrack
                        })),
                        a = (0, He.v9)((function(n) {
                            return n.play.recordingMediaStream
                        })),
                        d = (0, He.v9)((function(n) {
                            return n.play.recordingMediaRecorder
                        })),
                        l = function() {
                            if ("continueRecording" !== Sh[o].btn3) {
                                t({
                                    type: Et.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordingModalBeforeExit: !1,
                                        showRecordingModalBeforeExitSource: "",
                                        urlToOpenAfterRecordModalExit: "",
                                        isRecording: !1,
                                        recordingUserAudioTrack: null
                                    }
                                });
                                try {
                                    null === r || void 0 === r || r.stop(), null === a || void 0 === a || a.getTracks().forEach((function(n) {
                                        return n.stop()
                                    })), null === d || void 0 === d || d.stop()
                                } catch (n) {}
                            } else t({
                                type: Et.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    showRecordingModalBeforeExit: !1,
                                    showRecordingModalBeforeExitSource: "",
                                    urlToOpenAfterRecordModalExit: ""
                                }
                            })
                        };
                    return (0, et.tZ)(Kf.aV, {
                        children: (0, et.BX)(wh, {
                            children: [(0, et.tZ)(va.Z, {
                                style: Ah({
                                    marginTop: "auto",
                                    marginBottom: "auto",
                                    cursor: "pointer"
                                }, !(0, Ge.tq)() && {
                                    position: "absolute",
                                    top: "24px",
                                    right: "24px",
                                    color: Hd.qm.colors.white
                                }),
                                onClick: l,
                                size: 16,
                                name: "cross-thin",
                                id: "ng-info-close"
                            }), (0, et.BX)(Wf, {
                                children: [(0, et.tZ)("img", {
                                    alt: n("recorder"),
                                    src: (0, Xt.j)(Hf),
                                    style: {
                                        width: "24px",
                                        height: "24px"
                                    }
                                }), (0, et.tZ)(Mt.T5, {
                                    style: {
                                        marginLeft: "8px",
                                        marginBottom: "0px"
                                    },
                                    children: n(Sh[o].heading)
                                })]
                            }), (0, et.tZ)(Vf, {
                                children: (0, et.tZ)(qf, {
                                    children: n(Sh[o].info)
                                })
                            }), (0, et.BX)(bh, {
                                children: [(0, et.tZ)(xi.z, {
                                    variant: "primary",
                                    style: {
                                        marginRight: "8px",
                                        width: "100%"
                                    },
                                    onClick: function() {
                                        return Zh(void 0, void 0, void 0, (function() {
                                            return kh(this, (function(n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [4, (0, Ge.J0)(e)];
                                                    case 1:
                                                        return n.sent(), "userLogin" === o && t({
                                                            type: St.Z.TOGGLE_LOGIN,
                                                            payload: {
                                                                showLogin: !0
                                                            }
                                                        }), t({
                                                            type: Et.Z.UPDATE_IS_RECORDING,
                                                            payload: {
                                                                showRecordingModalBeforeExit: !1,
                                                                showRecordingModalBeforeExitSource: "",
                                                                stopAndDownloadRecording: !0,
                                                                isRecording: !1,
                                                                recordingData: [],
                                                                isRecordingProcessing: !1
                                                            }
                                                        }), [2]
                                                }
                                            }))
                                        }))
                                    },
                                    text: n(Sh[o].btn1),
                                    id: "ng-exit-recording-save-btn"
                                }), (0, et.tZ)(xi.z, {
                                    variant: "secondary",
                                    style: {
                                        width: "100%"
                                    },
                                    onClick: function() {
                                        var n;
                                        if (t({
                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    showRecordingModalBeforeExit: !1,
                                                    showRecordingModalBeforeExitSource: ""
                                                }
                                            }), "userLogin" === o) {
                                            try {
                                                null === (n = kt.Z.getState().play.recordingUserAudioTrack) || void 0 === n || n.stop(), null === a || void 0 === a || a.getTracks().forEach((function(n) {
                                                    return n.stop()
                                                })), null === d || void 0 === d || d.stop()
                                            } catch (e) {}
                                            t({
                                                type: Et.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    isRecording: !1,
                                                    recordingUserAudioTrack: null
                                                }
                                            }), t({
                                                type: St.Z.TOGGLE_LOGIN,
                                                payload: {
                                                    showLogin: !0
                                                }
                                            })
                                        } else window.open(i, "_self")
                                    },
                                    text: n(Sh[o].btn2),
                                    id: "ng-exit-recording-stop-btn"
                                }), ("gameTile" === o || "userLogin" === o) && (0, et.tZ)(xi.z, {
                                    variant: "tertiaryOutline",
                                    style: {
                                        width: "100%"
                                    },
                                    onClick: l,
                                    text: n(Sh[o].btn3 || "continueRecording"),
                                    id: "ng-exit-recording-continue-btn"
                                })]
                            })]
                        })
                    })
                },
                Ph = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Th = Qe.ZP.div(Dp || (Dp = Ph(["\nbackground: rgba(0, 0, 0, 0.7);\nborder: 1px solid rgba(255, 255, 255, 0.2);\nbackdrop-filter: blur(12px);\nborder-radius: 6px;\nposition:absolute;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nz-index:2;\nright: 125%;\nwidth: max-content;\n&:after {\n    width: 0;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid rgba(255, 255, 255, 0.2);\n    right: -9px;\n    position: absolute;\n    content: '';\n}\n.video-ready-text {\n  padding: 9px 12px;\n  color : ", "\n}\n.close-option {\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n   border-left: 1px solid rgba(255,255,255,0.2);\n   padding: 9px;\n}\n"], ["\nbackground: rgba(0, 0, 0, 0.7);\nborder: 1px solid rgba(255, 255, 255, 0.2);\nbackdrop-filter: blur(12px);\nborder-radius: 6px;\nposition:absolute;\ndisplay: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\nz-index:2;\nright: 125%;\nwidth: max-content;\n&:after {\n    width: 0;\n    height: 0;\n    border-top: 8px solid transparent;\n    border-bottom: 8px solid transparent;\n    border-left: 8px solid rgba(255, 255, 255, 0.2);\n    right: -9px;\n    position: absolute;\n    content: '';\n}\n.video-ready-text {\n  padding: 9px 12px;\n  color : ", "\n}\n.close-option {\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n   border-left: 1px solid rgba(255,255,255,0.2);\n   padding: 9px;\n}\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Ch = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, Ye.useState)(!0),
                        t = e[0],
                        i = e[1],
                        o = (0, He.v9)((function(n) {
                            return n.play.recordingUploadStopped
                        })),
                        r = (0, He.v9)((function(n) {
                            return n.play.showMyVideosOnboarding
                        })),
                        a = (0, He.I0)();
                    return t && document.getElementsByClassName("video-portal-action")[0] ? (0, Ye.createPortal)((0, et.BX)(Th, {
                        className: "video-toast",
                        children: [(0, et.tZ)("div", {
                            className: "video-ready-text",
                            children: (0, et.tZ)(Mt.gd, {
                                children: n(o ? "uploadStopped" : r ? "findVideos" : "videoReady")
                            })
                        }), (0, et.tZ)("div", {
                            className: "close-option",
                            onClick: function(n) {
                                return function(n) {
                                    n.stopPropagation(), n.preventDefault(), i(!1), a({
                                        type: Et.Z.MY_VIDEOS_ONBOARDING,
                                        payload: {
                                            showMyVideosOnboarding: !1
                                        }
                                    })
                                }(n)
                            },
                            children: (0, et.tZ)(va.Z, {
                                name: "cross-thin"
                            })
                        })]
                    }), document.getElementsByClassName("video-portal-action")[0]) : null
                },
                Dh = t(91469),
                Rh = t(94036),
                Oh = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ih = Qe.ZP.div(Rp || (Rp = Oh(["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"], ["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Mh = (0, Qe.iv)(Op || (Op = Oh(["\n  background: transparent;\n"], ["\n  background: transparent;\n"]))),
                Lh = (0, Qe.iv)(Ip || (Ip = Oh(["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"]))),
                Bh = (0, Qe.ZP)(Mt.Bb)(Mp || (Mp = Oh(["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"], ["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"]))),
                Xh = Qe.ZP.div(Lp || (Lp = Oh(["\n  z-index: 100;\n\n  img {\n    width: 135px;\n    height: 36px;\n    margin: 20px 40px !important;\n  }\n"], ["\n  z-index: 100;\n\n  img {\n    width: 135px;\n    height: 36px;\n    margin: 20px 40px !important;\n  }\n"]))),
                Nh = Ih,
                Kh = t(7013),
                jh = function() {
                    return (0, Ye.useEffect)((function() {
                        (0, Ve.L9)(Ki.JP, {
                            loginPageContext: Ki.$6.invitee
                        })
                    }), []), (0, et.BX)(et.HY, {
                        children: [(0, et.tZ)(Xh, {
                            children: (0, et.tZ)(co.Z, {
                                hasTagline: !1,
                                themeType: "light"
                            })
                        }), (0, et.tZ)(oi.Z, {
                            modalStyles: Lh,
                            overlayStyles: Mh,
                            children: (0, et.BX)(Nh, {
                                children: [(0, et.tZ)(Kh.Z, {
                                    height: 144,
                                    width: 144,
                                    applyAnimation: !0
                                }), (0, et.tZ)(Bh, {
                                    children: (0, uu.t)("invitationToPlay")
                                }), (0, et.tZ)(Mt.lU, {
                                    children: (0, uu.t)("claimPlayTime")
                                }), (0, et.tZ)(Rh.Z, {
                                    pageContext: Ki.$6.invitee
                                }), (0, et.tZ)(Dh.Z, {})]
                            })
                        })]
                    })
                },
                zh = t(67881),
                Yh = t(6413),
                Hh = t(85992),
                _h = {
                    src: "/play/_next/static/media/bloxd-error.c62649cf.jpg",
                    height: 320,
                    width: 512,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAgEAABAgUFAAAAAAAAAAAAAAABAAIDBAUREhMhYXGh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAYEQADAQEAAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8ArpOqzM3UYsMuDGaghCw3Bwyv1x6iIrNPlPRcSniP/9k="
                },
                Fh = t(56327),
                Uh = {
                    appId: "51240",
                    packageName: "com.nowgg.h5.pub511.app51240",
                    media: {
                        desktop: {
                            banner: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/banner/desktop/bloxd-io.jpg"
                        },
                        mobile: {
                            banner: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/banner/mobile/bloxd-io.jpg"
                        },
                        icon: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/icon/bloxd-io.png",
                        tile: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/game-tiles/bloxd-io.jpg",
                        logo: "https://cdn.now.gg/apps-content/com.nowgg.h5.pub511.app51240/logo/bloxd-io.png"
                    },
                    appName: "Bloxd.io",
                    appGenre: "Arcade Games",
                    playUrl: "https://now.gg/play/bloxd/51240/bloxd-io",
                    appDeveloperInfo: {
                        name: "bloxd",
                        developerSlug: "bloxd"
                    },
                    appRating: 4,
                    appPageUrl: ""
                },
                Wh = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Gh = Qe.ZP.div(Bp || (Bp = Wh(["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n  \n  ", ""], ["\n  display: flex;\n  width: 24px;\n  height: 24px;\n  overflow: hidden;\n  position: absolute;\n  z-index: 1;\n  background-size: cover;\n  background-position: center;\n  \n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      background: transparent !important;\n      min-height: 240px;\n    }"
                })),
                Vh = Qe.ZP.div(Xp || (Xp = Wh(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.85);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n\n  ", ""], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.85);\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 12px;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      background: transparent;\n    }"
                })),
                qh = Qe.ZP.div(Np || (Np = Wh(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.6);\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 24px;\n  border-radius: 16px;\n  padding: 12px;\n\n  ", ""], ["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.6);\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 24px;\n  border-radius: 16px;\n  padding: 12px;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      height: calc(100% - 40px);\n      border-radius: 0px 0px 16px 16px;\n    }"
                })),
                Qh = Qe.ZP.div(Kp || (Kp = Wh(["\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  background-color: rgba(222, 90, 72, 0.5);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  padding: 0px 24px;\n  border-radius: 8px;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  ", ""], ["\n  display: flex;\n  margin-top: 12px;\n  margin-bottom: 12px;\n  background-color: rgba(222, 90, 72, 0.5);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  padding: 0px 24px;\n  border-radius: 8px;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  ", ""])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      display: none;\n    }"
                })),
                Jh = Qe.ZP.div(jp || (jp = Wh(["\n  color: #FFFFFF80;\n  height: 32px;\n\n  &::before, &::after {\n    flex: 1;\n    content: '';\n    padding: 0px 20px;\n    background-color: #FFFFFF80;\n    margin: 5px;\n    padding: 0px 52px;\n    font-size: 1px;\n    vertical-align: middle;\n  }\n\n  ", ""], ["\n  color: #FFFFFF80;\n  height: 32px;\n\n  &::before, &::after {\n    flex: 1;\n    content: '';\n    padding: 0px 20px;\n    background-color: #FFFFFF80;\n    margin: 5px;\n    padding: 0px 52px;\n    font-size: 1px;\n    vertical-align: middle;\n  }\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      display: none;\n    }"
                })),
                $h = Qe.ZP.div(zp || (zp = Wh(["\n  height: 158px;\n  width: 100%;\n  border-radius: 16px;\n  border: 1px solid #FFFFFF33;\n  background: #FFFFFF33;\n  background-size: cover;\n  background-repeat: no-repeat;\n  max-width: 600px;\n\n  ", ""], ["\n  height: 158px;\n  width: 100%;\n  border-radius: 16px;\n  border: 1px solid #FFFFFF33;\n  background: #FFFFFF33;\n  background-size: cover;\n  background-repeat: no-repeat;\n  max-width: 600px;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      width: 100%;\n      max-width: 400px;\n      min-height: 240px;\n      background-position: right;\n    }"
                })),
                ng = Qe.ZP.div(Yp || (Yp = Wh(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  color: white;\n  align-items: normal;\n\n  ", ""], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 4px;\n  color: white;\n  align-items: normal;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      margin-bottom: 12px;\n      align-items: center;\n      gap: 16px;\n    }"
                })),
                eg = Qe.ZP.div(Hp || (Hp = Wh(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 16px;\n  color: white;\n  width: 412px;\n  align-self: end;\n  align-items: end;\n\n  ", ""], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  gap: 16px;\n  color: white;\n  width: 412px;\n  align-self: end;\n  align-items: end;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      flex-direction: column;\n      align-items: center;\n      align-self: center;\n      gap: 0px;\n    }"
                })),
                tg = Qe.ZP.img(_p || (_p = Wh(["\n  width: 110px;\n  height: 110px;\n  border-radius: 9px;\n\n  ", ""], ["\n  width: 110px;\n  height: 110px;\n  border-radius: 9px;\n\n  ", ""])), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      display: none;\n    }"
                })),
                ig = Qe.ZP.div(Fp || (Fp = Wh(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"]))),
                og = Qe.ZP.div(Up || (Up = Wh(["\n  background-color: rgba(91,41,36,255);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  display: none;\n  border-radius: 16px 16px 0px 0px;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  ", ""], ["\n  background-color: rgba(91,41,36,255);\n  color: ", ";\n  height: 40px;\n  gap: 4px;\n  align-items: center;\n  display: none;\n  border-radius: 16px 16px 0px 0px;\n  justify-content: center;\n\n  img {\n    width: 20px;\n    height: 20px;\n  }\n\n  ", ""])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return !n.landscapeSection && "\n    @media all and (max-width: 940px) {\n      display: flex;\n    }"
                })),
                rg = t(81262),
                ag = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        t = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        i = (0, Ye.useRef)(null),
                        o = function() {
                            var n, o = null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                            o && i.current && ((0, Ge.tq)() ? (t === rg.cj.landscape ? (i.current.style.width = "".concat(Math.max(o.height, o.width), "px"), i.current.style.height = "".concat(Math.min(o.height, o.width), "px")) : (i.current.style.height = "".concat(Math.max(o.height, o.width), "px"), i.current.style.width = "".concat(Math.min(o.height, o.width), "px")), (0, Ge.Em)() ? (i.current.style.top = "50%", i.current.style.transform = "translateY(-50%)") : i.current.style.top = "58px") : (i.current.style.left = "50%", i.current.style.top = "50%", i.current.style.transform = "translate(-50%,-50%)", i.current.style.width = "".concat(o.width, "px"), i.current.style.height = "".concat(o.height, "px")))
                        };
                    return (0, Ye.useEffect)((function() {
                        return o(), window.addEventListener("resizeDone", o),
                            function() {
                                window.removeEventListener("resizeDone", o)
                            }
                    }), []), (0, et.tZ)(Gh, {
                        ref: i,
                        style: {
                            backgroundImage: "url(".concat((0, Xt.j)(_h), ")")
                        },
                        landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                        children: (0, et.BX)(Vh, {
                            landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                            children: [(0, et.BX)(Qh, {
                                landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                children: [(0, et.tZ)("img", {
                                    alt: n("warning"),
                                    src: (0, Xt.j)(fo)
                                }), (0, et.tZ)(Mt.QV, {
                                    children: n("robloxNotAvailable")
                                })]
                            }), (0, et.tZ)(Jh, {
                                landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                children: n("similarGame")
                            }), (0, et.BX)($h, {
                                style: {
                                    backgroundImage: "url(".concat(Uh.media.desktop.banner, ")")
                                },
                                landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                children: [(0, et.BX)(og, {
                                    landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                    children: [(0, et.tZ)("img", {
                                        alt: n("warning"),
                                        src: (0, Xt.j)(fo)
                                    }), (0, et.tZ)(Mt.QV, {
                                        style: {
                                            textAlign: "center"
                                        },
                                        children: n("robloxNotAvailable")
                                    })]
                                }), (0, et.BX)(qh, {
                                    landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                    children: [(0, et.tZ)(tg, {
                                        src: Uh.media.icon,
                                        landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape
                                    }), (0, et.BX)(eg, {
                                        landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                        children: [(0, et.BX)(ng, {
                                            landscapeSection: (0, Ge.tq)() && t === rg.cj.landscape,
                                            children: [(0, et.tZ)(Mt.Bb, {
                                                children: Uh.appName
                                            }), (0, et.BX)(ig, {
                                                children: [(0, et.tZ)("img", {
                                                    src: (0, Xt.j)(Fh.Z),
                                                    alt: "rating",
                                                    style: {
                                                        width: "16px",
                                                        height: "16px"
                                                    }
                                                }), (0, et.tZ)(Mt.TZ, {
                                                    children: Uh.appRating
                                                }), (0, et.tZ)(Mt.lU, {
                                                    style: {
                                                        color: "rgba(255,255,255,0.7)",
                                                        padding: "0px 8px"
                                                    },
                                                    children: Uh.appDeveloperInfo.name
                                                }), (0, et.tZ)("div", {
                                                    style: {
                                                        width: "1px",
                                                        height: "16px",
                                                        border: "1px solid rgba(255,255,255,0.7)"
                                                    }
                                                }), (0, et.tZ)(Mt.Aj, {
                                                    style: {
                                                        marginLeft: "8px"
                                                    },
                                                    children: Uh.appGenre
                                                })]
                                            })]
                                        }), (0, et.tZ)(xi.z, {
                                            style: {
                                                width: "160px"
                                            },
                                            onClick: function() {
                                                window.location.href = (0, yi.ZP)(Uh.playUrl)
                                            },
                                            children: (0, et.tZ)(Mt.IS, {
                                                children: n("playNow")
                                            })
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                dg = t(29871),
                lg = {
                    src: "/play/_next/static/media/cloudy.ef2ef64d.svg",
                    height: 144,
                    width: 144
                },
                cg = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                sg = Qe.ZP.section(Wp || (Wp = cg(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 8px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    margin-top: 20px;\n    text-align: center;\n    color: ", ";\n  }\n\n  button {\n    margin-top: 16px;\n    padding: 12px 0;\n    width: 100%;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 72px;\n      height: 72px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  p {\n    margin-top: 8px;\n    color: ", ";\n    text-align: center;\n  }\n  h3 {\n    margin-top: 20px;\n    text-align: center;\n    color: ", ";\n  }\n\n  button {\n    margin-top: 16px;\n    padding: 12px 0;\n    width: 100%;\n  }\n\n  @media (max-height: 400px) {\n    img {\n      width: 72px;\n      height: 72px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white60
                }), (function(n) {
                    return n.theme.colors.white
                })),
                ug = (0, Qe.iv)(Gp || (Gp = cg(["\n  width: 420px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 420px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))),
                pg = sg,
                fg = t(57348),
                hg = {
                    FailureForbidden: {
                        heading: "errorFailureForbidden.heading",
                        message: "errorFailureForbidden.subHeading",
                        cta: "takeMeBack"
                    }
                },
                gg = function() {
                    var n = (0, He.v9)((function(n) {
                            return n.play.videoModalError
                        })),
                        e = (0, He.v9)((function(n) {
                            return n.play.errorDescription
                        })),
                        t = hg[n],
                        i = t.heading,
                        o = t.message,
                        r = t.cta,
                        a = (0, He.I0)();
                    (0, Ye.useEffect)((function() {
                        (0, Ve.L9)("ErrorScreen", {
                            error: n,
                            errorDescription: e
                        })
                    }), []);
                    return (0, et.tZ)(dg.Z, {
                        modalStyles: ug,
                        toggle: !0,
                        children: (0, et.BX)(pg, {
                            children: [(0, et.tZ)("img", {
                                src: (0, Xt.j)(lg),
                                alt: "",
                                width: 144,
                                height: 144
                            }), (0, et.tZ)(Mt.Bb, {
                                children: (0, uu.t)(i)
                            }), (0, et.tZ)(Mt.TZ, {
                                children: (0, uu.t)(o)
                            }), (0, et.tZ)(fg.zx, {
                                onClick: function() {
                                    a({
                                        type: Et.Z.SET_ERROR,
                                        payload: {
                                            videoModalError: ""
                                        }
                                    })
                                },
                                children: (0, uu.t)(r)
                            })]
                        })
                    })
                },
                vg = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                mg = (Qe.ZP.div(Vp || (Vp = vg(["\n   display: flex;\n   border-radius: 10px;\n   background: linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%);\n   width: 100%;\n"], ["\n   display: flex;\n   border-radius: 10px;\n   background: linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0) 100%);\n   width: 100%;\n"]))), Qe.ZP.img(qp || (qp = vg(["\n   height: 32px;\n   width: fit-content;\n"], ["\n   height: 32px;\n   width: fit-content;\n"])))),
                xg = (Qe.ZP.div(Qp || (Qp = vg(["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   padding: 12px 12px 12px 0;\n\n"], ["\n   display: flex;\n   flex-direction: column;\n   gap: 8px;\n   padding: 12px 12px 12px 0;\n\n"]))), Qe.ZP.div(Jp || (Jp = vg(["\n   width: 100px;\n   img {\n      height: 140px;\n      margin-left: -22px;\n   }\n"], ["\n   width: 100px;\n   img {\n      height: 140px;\n      margin-left: -22px;\n   }\n"]))), (0, Qe.ZP)(rl.Yd)($p || ($p = vg(["\n    font-weight: 600;\n    text-wrap: nowrap;\n    align-self: end;\n    padding: 7px 16px;\n    margin-top: 6px;\n    border-radius: 6px;\n    box-shadow: none;\n    &:disabled {\n      backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"], ["\n    font-weight: 600;\n    text-wrap: nowrap;\n    align-self: end;\n    padding: 7px 16px;\n    margin-top: 6px;\n    border-radius: 6px;\n    box-shadow: none;\n    &:disabled {\n      backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"])), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                })), {
                    src: "/play/_next/static/media/jackpot_title.04d0cfb0.svg",
                    height: 34,
                    width: 166
                }),
                yg = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                wg = Qe.ZP.div(nf || (nf = yg(["\n    display: flex;\n    flex-direction: column;\n    gap:8px;\n    margin-top: 24px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap:8px;\n    margin-top: 24px;\n"]))),
                bg = function() {
                    var n = (0, Rt.$)().t,
                        e = (0, He.I0)(),
                        t = (0, Ye.useState)(!1),
                        i = t[0],
                        o = t[1],
                        r = (0, Ye.useState)(""),
                        a = r[0],
                        d = r[1],
                        l = function() {
                            e({
                                type: Yh.Z.JACKPOT_FLOW,
                                payload: {
                                    showFreeSpinVerification: !1
                                }
                            }), sessionStorage.removeItem("enableFreeSpin")
                        };
                    return (0, et.BX)(oi.Z, {
                        style: {
                            width: "350px",
                            padding: "24px"
                        },
                        children: [(0, et.tZ)(mg, {
                            src: (0, Xt.j)(xg)
                        }), (0, et.tZ)(_o.A3, {
                            className: "cross-icon",
                            onClick: l,
                            style: {
                                position: "absolute",
                                right: "16px",
                                top: "16px",
                                color: "white"
                            },
                            children: (0, et.tZ)(va.Z, {
                                name: "cross-thin",
                                size: 16,
                                id: "login-close-icon"
                            })
                        }), (0, et.BX)(wg, {
                            children: [(0, et.tZ)(Mt.lU, {
                                style: {
                                    color: "rgba(255,255,255,0.7)"
                                },
                                children: n("enterEmailForSpin")
                            }), (0, et.tZ)(zl.II, {
                                title: n("emailId"),
                                onUpdate: function(n) {
                                    return function(n) {
                                        d(n), n || o(!1)
                                    }(n)
                                },
                                error: i,
                                placeholder: n("enterHere")
                            }), i && (0, et.tZ)(Mt.IS, {
                                style: {
                                    color: "#FF3A30",
                                    marginTop: "-14px",
                                    marginBottom: "16px"
                                },
                                children: n("emailMismatchError")
                            }), (0, et.tZ)(xi.z, {
                                variant: "primary",
                                text: n("verifyAndGetSpin"),
                                onClick: function() {
                                    var n = (0, Ct.et)();
                                    n && (n.email !== a ? o(!0) : (l(), sessionStorage.setItem("showFreeSpinBtn", "true"), e({
                                        type: Yh.Z.ROBUX_REWARD_DETAILS,
                                        payload: {
                                            robuxPopupOpen: !0
                                        }
                                    }), e({
                                        type: Yh.Z.JACKPOT_FLOW,
                                        payload: {
                                            showJackpotFlow: !0
                                        }
                                    })))
                                }
                            })]
                        })]
                    })
                },
                Ag = t(58169),
                Zg = t(74348),
                kg = t(62468),
                Sg = {
                    src: "/play/_next/static/media/robux-warn.c88be150.svg",
                    height: 155,
                    width: 162
                },
                Eg = t(12422),
                Pg = function(n) {
                    var e = n.taskName,
                        t = n.taskRwd,
                        i = (0, Rt.$)().t,
                        o = (0, He.I0)();
                    return (0, Ye.useEffect)((function() {
                        (0, Ve.L9)("RobuxQuestCompletePromptDisplayed", {
                            task: e
                        })
                    }), []), (0, et.tZ)(oi.Z, {
                        modalStyles: kg.il,
                        children: (0, et.BX)(kg.ZP, {
                            children: [(0, et.tZ)(_o.A3, {
                                className: "cross-icon",
                                onClick: function() {
                                    o({
                                        type: Eg.Z.UPDATE_TASK,
                                        payload: {
                                            showTaskCompletePopup: {}
                                        }
                                    })
                                },
                                style: {
                                    position: "absolute",
                                    right: "16px",
                                    top: "16px",
                                    color: "white"
                                },
                                children: (0, et.tZ)(va.Z, {
                                    name: "cross-thin",
                                    size: 16,
                                    id: "login-close-icon"
                                })
                            }), (0, et.tZ)(kg.xg, {
                                children: (0, et.tZ)("img", {
                                    src: (0, Xt.j)(Sg),
                                    alt: ""
                                })
                            }), (0, et.tZ)(kg.Dx, {
                                children: i("taskCompleted", {
                                    task: e
                                })
                            }), (0, et.tZ)(kg.qY, {
                                children: i("taskCompleteMsg", {
                                    task: e,
                                    reward: t
                                })
                            }), (0, et.tZ)(xi.z, {
                                variant: "primary",
                                size: "large",
                                onClick: function() {
                                    o({
                                        type: Eg.Z.TOGGLE_VIEW,
                                        payload: {
                                            showProfileView: !1,
                                            showRobuxView: !0,
                                            showLeaderboardView: !1,
                                            showTaskCompletePopup: {}
                                        }
                                    })
                                },
                                children: i("viewRewards")
                            })]
                        })
                    })
                },
                Tg = {
                    src: "/play/_next/static/media/secure-notification-bg.55642608.svg",
                    height: 64,
                    width: 579
                },
                Cg = {
                    src: "/play/_next/static/media/cloud-phone-landscape.c5def59c.png",
                    height: 128,
                    width: 230,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAPFBMVEVMaXGZfIHHs7ZqXmrrq3BARl61lpnnl2mgiIR6eYX/31/ll5Tov5NETkN1ZHZrXX1PY3NOWnN6d294OXJkbeY/AAAADXRSTlMAv6b15Pm+JPWoEFnecSlxKQAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAACdJREFUeJxjYGDgFBRgZAABNmFeDnYQg4mflY+bgYGBi0eImYOFHQANfwDOIngQ/QAAAABJRU5ErkJggg=="
                },
                Dg = {
                    src: "/play/_next/static/media/cloud-phone-portrait.9e66752e.png",
                    height: 210,
                    width: 190,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAY1BMVEVMaXH///9qZX35q6t9Z3hFS2DytVjwt69TZYpOY4SCcXRJXXNWZ3j/yLD/z4r/3tlLSHFrGmA9UDfZmpTfinzOhEvqqZjpsVVNUmZTWm6OdIaPiY5CYmqsg5nkpEahmIHopnvxi7WIAAAAGnRSTlMADNAr/Pv+OCM99aO2Qd5m/f7+0lrSmEj+/r2AYzgAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA9SURBVHicBcEHAoAgDACxU5ku3Lbg+v8rTSDEGAA6lboCehXjYcjT1Tbg73l5PaRirdlgLKL5APfs6+fOH0qlAtYvPtsVAAAAAElFTkSuQmCC"
                },
                Rg = {
                    src: "/play/_next/static/media/secure-shield.cd1f691a.png",
                    height: 36,
                    width: 36,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAWlBMVEUTFBaSeUkkIhxORTYlK1KdiF+3llRDPC0bGxszLiR6b1+miVhITWmHcFZ7cWlQV3lub4N1cnyajnZcYoKJg31oXFlvWzWGazkxPWhxa2VeWEs9QV+9p3ykloHDsPd9AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAQklEQVR4nAXBBQKAMAwEsJu2nRsO//8mCQAajhiQsGYfkXC3OpfNB0wvn7N5B7XXPTYa6Kumc/MMUEnBC8AQpTT4B2r7Ar17z8aiAAAAAElFTkSuQmCC"
                },
                Og = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ig = (0, Qe.F4)(ef || (ef = Og(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]))),
                Mg = (0, Qe.F4)(tf || (tf = Og(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(180deg);\n  }\n"]))),
                Lg = Qe.ZP.div( of || ( of = Og(["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  transform: rotate(180deg);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n\n  div {\n    overflow: hidden;\n    position: absolute;\n    width: 50%;\n    height: 100%;\n  }\n\n  .loader {\n    position: absolute;\n    left: 100%;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 1000px;\n    background-color: ", ";\n  }\n\n  .left-wrap .loader {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    transform-origin: 0 50% 0;\n    animation: ", " ", "s linear;\n  }\n\n  .right-wrap {\n    left: 50%;\n  }\n\n  .right-wrap .loader {\n    left: -100%;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    transform-origin: 100% 50% 0;\n    animation: ", " ", "s linear;\n  }\n"], ["\n  width: ", "px;\n  height: ", "px;\n  background-color: ", ";\n  border-radius: ", "px;\n  transform: rotate(180deg);\n  position: relative;\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: ", "px;\n    height: ", "px;\n    border-radius: 50%;\n    background-color: ", ";\n  }\n\n  div {\n    overflow: hidden;\n    position: absolute;\n    width: 50%;\n    height: 100%;\n  }\n\n  .loader {\n    position: absolute;\n    left: 100%;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 1000px;\n    background-color: ", ";\n  }\n\n  .left-wrap .loader {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    transform-origin: 0 50% 0;\n    animation: ", " ", "s linear;\n  }\n\n  .right-wrap {\n    left: 50%;\n  }\n\n  .right-wrap .loader {\n    left: -100%;\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n    transform-origin: 100% 50% 0;\n    animation: ", " ", "s linear;\n  }\n"])), (function(n) {
                    return n.diameter
                }), (function(n) {
                    return n.diameter
                }), (function(n) {
                    return n.trackColor
                }), (function(n) {
                    return n.diameter
                }), (function(n) {
                    return n.diameter - 2 * n.border
                }), (function(n) {
                    return n.diameter - 2 * n.border
                }), (function(n) {
                    return n.backgroundColor
                }), (function(n) {
                    return n.movingColor
                }), Ig, (function(n) {
                    return n.duration
                }), Mg, (function(n) {
                    return n.duration
                })),
                Bg = function(n) {
                    var e = n.diameter,
                        t = void 0 === e ? 40 : e,
                        i = n.border,
                        o = void 0 === i ? 5 : i,
                        r = n.backgroundColor,
                        a = void 0 === r ? "#7B4CFF" : r,
                        d = n.movingColor,
                        l = void 0 === d ? "white" : d,
                        c = n.trackColor,
                        s = void 0 === c ? Hd.qm.colors.white20 : c,
                        u = n.duration,
                        p = void 0 === u ? 5 : u;
                    return (0, et.BX)(Lg, {
                        diameter: t,
                        border: o,
                        backgroundColor: a,
                        movingColor: l,
                        trackColor: s,
                        duration: p,
                        children: [(0, et.tZ)("div", {
                            className: "left-wrap",
                            children: (0, et.tZ)("div", {
                                className: "loader"
                            })
                        }), (0, et.tZ)("div", {
                            className: "right-wrap",
                            children: (0, et.tZ)("div", {
                                className: "loader"
                            })
                        })]
                    })
                },
                Xg = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ng = function(n) {
                    var e = n.isPortrait,
                        t = void 0 !== e && e,
                        i = n.isMobile,
                        o = void 0 !== i && i;
                    return (0, Qe.iv)(af || (af = Xg(["\n  height: ", " ;\n  background: none;\n  transform: translateY(-1px);\n\n  &.modal-overlay {\n    ", "\n  }\n"], ["\n  height: ", " ;\n  background: none;\n  transform: translateY(-1px);\n\n  &.modal-overlay {\n    ", "\n  }\n"])), t ? "121px !important" : "64px !important", !t && o && (0, Qe.iv)(rf || (rf = Xg(["\n      top: 0 !important;\n      width: 100% !important;\n      left: 0 !important;\n    "], ["\n      top: 0 !important;\n      width: 100% !important;\n      left: 0 !important;\n    "]))))
                },
                Kg = (0, Qe.iv)(df || (df = Xg(["\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  backdrop-filter: none;\n  background: none;\n  overflow: hidden;\n  position: relative;\n  \n  & > div {\n    margin: 0;\n    color: ", ";\n    height: 100%;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  backdrop-filter: none;\n  background: none;\n  overflow: hidden;\n  position: relative;\n  \n  & > div {\n    margin: 0;\n    color: ", ";\n    height: 100%;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                jg = (0, Qe.F4)(lf || (lf = Xg(["\n  0% {\n    transform: translateY(-100%);\n  } \n  100% {\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    transform: translateY(-100%);\n  } \n  100% {\n    transform: translateY(0);\n  }\n"]))),
                zg = (0, Qe.F4)(cf || (cf = Xg(["\n  0% {\n    transform: translateY(0);\n  } \n  100% {\n    transform: translateY(-100%);\n  }\n"], ["\n  0% {\n    transform: translateY(0);\n  } \n  100% {\n    transform: translateY(-100%);\n  }\n"]))),
                Yg = Qe.ZP.div(sf || (sf = Xg(["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(60px);\n  transition: all 0.3s ease-out;\n  transform: translateY(0);\n  animation: ", " 0.3s ease-out;\n\n  img {\n    height: 100%;\n    max-width: ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    z-index: 1;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"], ["\n  position: absolute;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  backdrop-filter: blur(60px);\n  transition: all 0.3s ease-out;\n  transform: translateY(0);\n  animation: ", " 0.3s ease-out;\n\n  img {\n    height: 100%;\n    max-width: ", ";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    height: 2px;\n    width: 100%;\n    z-index: 1;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"])), (function(n) {
                    return n.theme.colors.black90
                }), (function(n) {
                    return n.toggle ? jg : zg
                }), (function(n) {
                    return n.isPortrait ? "95px" : "101px"
                })),
                Hg = Qe.ZP.div(mf || (mf = Xg(["\n  position: absolute;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  padding-left: ", ";\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  ", "\n\n  &:nth-child(2) {\n    ", "\n  }\n\n  &:nth-child(3) {\n    ", "\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  min-height: ", ";\n  height: ", ";\n  padding: ", ";\n  padding-left: ", ";\n  display: flex;\n  align-items: center;\n\n  ", "\n\n  ", "\n\n  &:nth-child(2) {\n    ", "\n  }\n\n  &:nth-child(3) {\n    ", "\n  }\n"])), (function(n) {
                    return n.isPortrait ? "50%" : "100%"
                }), (function(n) {
                    return n.isPortrait ? "fit-content" : "100%"
                }), (function(n) {
                    return n.isPortrait ? "4px" : "0px"
                }), (function(n) {
                    return n.isPortrait ? "95px" : "0"
                }), (function(n) {
                    var e = n.isBottom,
                        t = n.theme,
                        i = n.isPortrait;
                    return (0, Qe.iv)(pf || (pf = Xg(["\n    ", "\n  "], ["\n    ", "\n  "])), e && i ? (0, Qe.iv)(uf || (uf = Xg(["\n      bottom: 0; background-color: ", ";\n    "], ["\n      bottom: 0; background-color: ", ";\n    "])), t.colors.white10) : "top: 0;")
                }), (function(n) {
                    return n.isPortrait && (0, Qe.iv)(ff || (ff = Xg(["\n    h5 {\n      font-size: 12.5px;\n    }\n  "], ["\n    h5 {\n      font-size: 12.5px;\n    }\n  "])))
                }), (function(n) {
                    return !n.isPortrait && (0, Qe.iv)(hf || (hf = Xg(["\n      margin-left: 101px;\n    "], ["\n      margin-left: 101px;\n    "])))
                }), (function(n) {
                    return n.isPortrait ? (0, Qe.iv)(gf || (gf = Xg(["\n      width: 100%;\n    "], ["\n      width: 100%;\n    "]))) : (0, Qe.iv)(vf || (vf = Xg(["\n      width: 60%;\n      right: 0;\n      padding-right: 84px;\n      padding-left: 10%;\n      display: flex;\n      justify-content: center;\n    "], ["\n      width: 60%;\n      right: 0;\n      padding-right: 84px;\n      padding-left: 10%;\n      display: flex;\n      justify-content: center;\n    "])))
                })),
                _g = Qe.ZP.img(xf || (xf = Xg(["\n  max-width: 100% !important;\n  width: 100%;\n  position: absolute;\n  right: 0;\n"], ["\n  max-width: 100% !important;\n  width: 100%;\n  position: absolute;\n  right: 0;\n"]))),
                Fg = Qe.ZP.div(yf || (yf = Xg(["\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n"]))),
                Ug = Qe.ZP.div(wf || (wf = Xg(["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"], ["\n  display: flex;\n  gap: 4px;\n  align-items: center;\n"]))),
                Wg = (0, Qe.ZP)(Mt.gd)(bf || (bf = Xg(["\n  color: #E4B95E;\n"], ["\n  color: #E4B95E;\n"]))),
                Gg = Qe.ZP.div(Af || (Af = Xg(["\n  display: flex;\n  gap: 32px;\n  z-index: 1;\n  position: relative;\n"], ["\n  display: flex;\n  gap: 32px;\n  z-index: 1;\n  position: relative;\n"]))),
                Vg = Qe.ZP.div(Zf || (Zf = Xg(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n\n  h5 {\n    text-wrap: balance;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n\n  h5 {\n    text-wrap: balance;\n  }\n"]))),
                qg = Qe.ZP.div(Sf || (Sf = Xg(["\n  border-radius: 22.406px;\n  background: ", ";\n  padding: 0px 5.602px;\n  text-transform: uppercase;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 150%;\n\n  ", "\n"], ["\n  border-radius: 22.406px;\n  background: ", ";\n  padding: 0px 5.602px;\n  text-transform: uppercase;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 150%;\n\n  ", "\n"])), (function(n) {
                    return n.theme.colors.black40
                }), (function(n) {
                    var e = n.isPortrait,
                        t = n.theme;
                    return e && (0, Qe.iv)(kf || (kf = Xg(["\n    background-color: ", ";\n    padding: 0px 4.95px;\n    font-size: 7px;\n  "], ["\n    background-color: ", ";\n    padding: 0px 4.95px;\n    font-size: 7px;\n  "])), t.colors.white20)
                })),
                Qg = Qe.ZP.div(Pf || (Pf = Xg(["\n  ", "\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  ", "\n\n  & > div {\n    position: absolute;\n    transition: all 0.6s ease-out;\n    opacity: ", ";\n  }\n\n  i {\n    cursor: pointer;\n  }\n"], ["\n  ", "\n  position: absolute;\n  right: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n\n  ", "\n\n  & > div {\n    position: absolute;\n    transition: all 0.6s ease-out;\n    opacity: ", ";\n  }\n\n  i {\n    cursor: pointer;\n  }\n"])), wu.be, (function(n) {
                    return n.isPortrait && (0, Qe.iv)(Ef || (Ef = Xg(["\n    top: 16px;\n    right: 8px;\n  "], ["\n    top: 16px;\n    right: 8px;\n  "])))
                }), (function(n) {
                    return n.toggle ? "1" : "0"
                })),
                Jg = function(n) {
                    var e = n.toggle,
                        t = (0, Ye.useState)(!0),
                        i = t[0],
                        o = t[1],
                        r = (0, He.v9)((function(n) {
                            return n.play.orientation
                        })),
                        a = (0, He.v9)((function(n) {
                            return n.play.deviceLocationDisplayString
                        })),
                        d = (0, He.I0)(),
                        l = qe.cj.portrait === r;
                    (0, Ye.useEffect)((function() {
                        setTimeout((function() {
                            o(!i)
                        }), 5e3)
                    }), []);
                    return (0, et.tZ)(dg.Z, {
                        overlayStyles: Ng({
                            isPortrait: l,
                            isMobile: (0, Ge.tq)()
                        }),
                        modalStyles: Kg,
                        children: (0, et.BX)(Yg, {
                            isPortrait: l,
                            toggle: e,
                            children: [(0, et.tZ)("img", {
                                src: (0, Xt.j)(l ? Dg : Cg),
                                alt: ""
                            }), (0, et.tZ)(Hg, {
                                isPortrait: l,
                                children: (0, et.BX)(Fg, {
                                    children: [(0, et.tZ)(Mt.QV, {
                                        children: (0, uu.t)("signingToCloudService")
                                    }), (0, et.BX)(Ug, {
                                        children: [(0, et.tZ)("img", {
                                            src: (0, Xt.j)(Rg),
                                            width: 18,
                                            height: 18,
                                            alt: ""
                                        }), (0, et.tZ)(Wg, {
                                            children: (0, uu.t)("securePlatform")
                                        })]
                                    })]
                                })
                            }), (0, et.BX)(Hg, {
                                isBottom: !0,
                                isPortrait: l,
                                children: [!l && (0, et.tZ)(_g, {
                                    src: (0, Xt.j)(Tg),
                                    alt: ""
                                }), (0, et.BX)(Gg, {
                                    children: [(0, et.BX)(Vg, {
                                        children: [(0, et.tZ)(qg, {
                                            isPortrait: l,
                                            children: (0, uu.t)("cloudDevice")
                                        }), (0, et.tZ)(Mt.QV, {
                                            children: "Galaxy S20 Plus"
                                        })]
                                    }), (0, et.BX)(Vg, {
                                        children: [(0, et.tZ)(qg, {
                                            isPortrait: l,
                                            children: (0, uu.t)("cloudDeviceLocation")
                                        }), (0, et.tZ)(Mt.QV, {
                                            children: a
                                        })]
                                    })]
                                })]
                            }), (0, et.BX)(Qg, {
                                toggle: i,
                                isPortrait: l,
                                children: [(0, et.tZ)(It.Z, {
                                    toggle: i,
                                    exitingDelay: .6,
                                    children: (0, et.tZ)(Bg, {
                                        diameter: 14,
                                        border: 1,
                                        duration: 5
                                    })
                                }), (0, et.tZ)(va.Z, {
                                    name: "cross-thin",
                                    size: 11,
                                    onClick: function() {
                                        d({
                                            type: Et.Z.UPDATE_PLAY_STATE,
                                            payload: {
                                                androidActivityName: ""
                                            }
                                        })
                                    }
                                })]
                            })]
                        })
                    })
                },
                $g = t(75555),
                nv = (t(40993), t(202), function(n, e, t, i) {
                    return new(t || (t = Promise))((function(o, r) {
                        function a(n) {
                            try {
                                l(i.next(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function d(n) {
                            try {
                                l(i.throw(n))
                            } catch (e) {
                                r(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof t ? e : new t((function(n) {
                                n(e)
                            }))).then(a, d)
                        }
                        l((i = i.apply(n, e || [])).next())
                    }))
                }),
                ev = function(n, e) {
                    var t, i, o, r, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: d(0),
                        throw: d(1),
                        return: d(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function d(r) {
                        return function(d) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (t = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                a.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && a.label < o[1]) {
                                                a.label = o[1], o = r;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(r);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    r = e.call(n, a)
                                } catch (d) {
                                    r = [6, d], i = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, d])
                        }
                    }
                },
                tv = (0, Qo.default)((function() {
                    return Promise.resolve().then(t.bind(t, 82258))
                }), {
                    loading: $i,
                    loadableGenerated: {
                        webpack: function() {
                            return [82258]
                        },
                        modules: ["../src/pages/play/index.tsx -> @components/modals/error"]
                    }
                }),
                iv = (0, Qo.default)((function() {
                    return t.e(47).then(t.bind(t, 3047))
                }), {
                    loading: $i,
                    loadableGenerated: {
                        webpack: function() {
                            return [3047]
                        },
                        modules: ["../src/pages/play/index.tsx -> @components/html-player"]
                    }
                }),
                ov = 0,
                rv = function(n) {
                    var e, t, i, o, r, a, d, l, c, s, u, p, f, h, g, v, m, x, y, w, b, A, Z, k, S = n.manifest,
                        E = (n.adsConfigUrl, n.isAppPage),
                        P = (0, Rt.$)().t,
                        T = (0, He.v9)((function(n) {
                            return n.play.error
                        })),
                        C = (0, He.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        D = (0, He.v9)((function(n) {
                            return n.ads.adsEnded
                        })),
                        R = (0, He.v9)((function(n) {
                            return n.ads.imaError
                        })),
                        O = (0, He.v9)((function(n) {
                            return n.ads.adBlocker
                        })),
                        I = (0, He.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        M = (0, He.v9)((function(n) {
                            return n.auth.isLoginResolved
                        })),
                        L = (0, He.v9)((function(n) {
                            return n.auth.showPreloader
                        })),
                        B = (0, He.v9)((function(n) {
                            return n.play.spotInstances
                        })),
                        X = (0, He.v9)((function(n) {
                            return n.play.spotInstanceToast
                        })),
                        N = (0, He.v9)((function(n) {
                            return n.play.gameDisplayed
                        })),
                        K = (0, He.v9)((function(n) {
                            return n.play.showTimeLimitExceededScreen
                        })),
                        j = (0, He.v9)((function(n) {
                            return n.play.sessionMigrated
                        })),
                        z = (0, He.v9)((function(n) {
                            return n.play.duplicateTab
                        })),
                        Y = (0, He.v9)((function(n) {
                            return n.play.sessionComplete
                        })),
                        H = (0, He.v9)((function(n) {
                            return n.auth.guestFlow
                        })),
                        _ = (0, He.v9)((function(n) {
                            return n.auth.showLogin
                        })),
                        F = (0, He.v9)((function(n) {
                            return n.auth.manualLogoutShowLogin
                        })),
                        U = (0, He.v9)((function(n) {
                            return n.play.tryNowModal
                        })),
                        W = (0, He.v9)((function(n) {
                            return n.play.endingTryNow
                        })),
                        G = (0, He.v9)((function(n) {
                            return n.play.loginTip
                        })),
                        V = (0, He.v9)((function(n) {
                            return n.play.listenersAttached
                        })),
                        q = (0, He.v9)((function(n) {
                            return n.play.recordingMediaStream
                        })),
                        Q = null === (t = null === (e = Ue.ZP.appInfo.playFeFeatures) || void 0 === e ? void 0 : e.tryAndDownload) || void 0 === t ? void 0 : t.isEnabled,
                        J = Q && "true" !== (null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem(Ki.Wp)),
                        $ = (0, Ye.useState)(!E || !J),
                        nn = $[0],
                        en = $[1],
                        tn = !(0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)() ? null === (l = null === (d = null === (a = Ue.ZP.appInfo.playFeFeatures) || void 0 === a ? void 0 : a.ads) || void 0 === d ? void 0 : d.desktop) || void 0 === l ? void 0 : l.enableDisplayAds : null === (r = null === (o = null === (i = Ue.ZP.appInfo.playFeFeatures) || void 0 === i ? void 0 : i.ads) || void 0 === o ? void 0 : o.mobile) || void 0 === r ? void 0 : r.enableDisplayAds,
                        on = !(0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)() ? null === (h = null === (f = null === (p = Ue.ZP.appInfo.playFeFeatures) || void 0 === p ? void 0 : p.ads) || void 0 === f ? void 0 : f.desktop) || void 0 === h ? void 0 : h.enablePrerollAds : null === (u = null === (s = null === (c = Ue.ZP.appInfo.playFeFeatures) || void 0 === c ? void 0 : c.ads) || void 0 === s ? void 0 : s.mobile) || void 0 === u ? void 0 : u.enablePrerollAds,
                        rn = !(0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)() ? null === (w = null === (y = null === (x = Ue.ZP.appInfo.playFeFeatures) || void 0 === x ? void 0 : x.ads) || void 0 === y ? void 0 : y.desktop) || void 0 === w ? void 0 : w.enableMidrollAds : null === (m = null === (v = null === (g = Ue.ZP.appInfo.playFeFeatures) || void 0 === g ? void 0 : g.ads) || void 0 === v ? void 0 : v.mobile) || void 0 === m ? void 0 : m.enableMidrollAds,
                        an = tn || on || rn,
                        dn = !(0, Ge.tq)() && !(0, Ge.Em)() && !(0, Ge.zc)(),
                        ln = !an || (0, Ge.EO)(),
                        cn = (0, Ye.useState)(!1),
                        sn = cn[0],
                        un = cn[1],
                        pn = (0, Ye.useState)(!1),
                        fn = pn[0],
                        hn = pn[1],
                        gn = (0, Ye.useState)(!1),
                        vn = gn[0],
                        mn = gn[1],
                        xn = (0, Ye.useState)(!1),
                        yn = xn[0],
                        wn = xn[1],
                        bn = (0, He.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        An = (0, He.v9)((function(n) {
                            return n.play.showRecordModal
                        })),
                        Zn = (0, He.v9)((function(n) {
                            return n.play.showMicBlockedModal
                        })),
                        kn = (0, He.v9)((function(n) {
                            return n.play.consoleFooterRef
                        })),
                        Sn = (0, He.v9)((function(n) {
                            return n.play.showRecordingTransition
                        })),
                        En = (0, He.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        Pn = (0, He.v9)((function(n) {
                            return n.play.showRecordingModalBeforeExit
                        })),
                        Tn = (0, He.v9)((function(n) {
                            var e;
                            return null === (e = null === n || void 0 === n ? void 0 : n.play) || void 0 === e ? void 0 : e.isFullscreen
                        })),
                        Cn = (0, Ye.useState)(!1),
                        Dn = Cn[0],
                        Rn = Cn[1],
                        On = (0, Hh.p)().creditReward,
                        In = (0, He.I0)(),
                        Mn = (0, Ye.useContext)(We.x),
                        Ln = (0, Ye.useState)(""),
                        Bn = Ln[0],
                        Xn = Ln[1],
                        Nn = (0, Ye.useRef)(null),
                        Kn = (0, Ye.useRef)(null),
                        jn = (0, Ye.useState)(!j && !Y && !z && !W),
                        zn = jn[0],
                        Yn = jn[1],
                        Hn = (0, He.v9)((function(n) {
                            return n.play.recordingUploadCompleted
                        })),
                        _n = (0, He.v9)((function(n) {
                            return n.play.recordingUploadStopped
                        })),
                        Fn = (0, He.v9)((function(n) {
                            return n.play.showMyVideosOnboarding
                        })),
                        Un = (0, He.v9)((function(n) {
                            return n.robuxRewards.accumulatedTimeSecs
                        })),
                        Wn = (0, Ye.useRef)(null),
                        Gn = (0, He.v9)((function(n) {
                            return n.robuxRewards.showFreeSpinVerification
                        })),
                        Vn = (0, He.v9)((function(n) {
                            return n.play.androidActivityName
                        })),
                        qn = (0, He.v9)((function(n) {
                            return n.play.videoModalError
                        })),
                        Qn = (0, He.v9)((function(n) {
                            return n.gamification.showTaskCompletePopup
                        })),
                        Jn = function(n) {
                            n.key !== Ki.B1 || n.newValue || (0, yi.iI)("TokenRemoved")
                        },
                        $n = function(n) {
                            wn(!0), (0, Ve.L9)("ProxyDetected", n)
                        },
                        ne = function() {
                            return T === qe.YR.FailureServiceNotInRegion && (0, Ge.c6)(Mn.packageName)
                        },
                        ee = function() {
                            return !!R && ((0, Ve.L9)("AdBlockerDetected"), (0, Fe.zr)("AdBlockerDetected", !1), In({
                                type: _e.Z.UPDATE_IMAERROR,
                                payload: {
                                    adBlocker: !0,
                                    adsEnded: !0
                                }
                            }), !!an)
                        },
                        te = function() {},
                        ie = function() {
                            var n;
                            kt.Z.dispatch({
                                type: Et.Z.SET_FULLSCREEN,
                                payload: {
                                    isFullscreen: !!(Xi.J.fullscreenElement || Xi.J.webkitFullscreenElement || Xi.J.msFullscreenElement || Xi.J.mozFullScreenElement),
                                    isSensitivityPopupOpen: !1
                                }
                            }), (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && (Xi.J.fullscreenElement || Xi.J.webkitFullscreenElement || Xi.J.msFullscreenElement || Xi.J.mozFullScreenElement ? document.body.classList.add("--fullscreen") : document.body.classList.remove("--fullscreen")), (0, pt.sZ)(), (0, pt.Ul)()
                        };
                    (0, Ye.useEffect)((function() {
                        In({
                            type: Et.Z.UPDATE_PLAY_STATE,
                            payload: {
                                isPlayerLoaded: !0
                            }
                        })
                    }), []), (0, Ye.useEffect)((function() {
                        if (sn)
                            if (dn && !ln) {
                                hn(!0), window.googlefc = window.googlefc || {}, window.googlefc.ccpa = window.googlefc.ccpa || {}, window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
                                var n = setTimeout((function() {
                                    clearTimeout(n), mn(!0), un(!1)
                                }), 5e3);
                                window.googlefc.callbackQueue.push({
                                    AD_BLOCK_DATA_READY: function() {
                                        clearTimeout(n);
                                        var e = window.googlefc.getAdBlockerStatus(),
                                            t = window.googlefc.getAllowAdsStatus();
                                        if (e === window.googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER || e === window.googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER)
                                            if (t === window.googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED)(0, ta.cd)(), In({
                                                type: Et.Z.UPDATE_PLAY_STATE,
                                                payload: {
                                                    isAdBlockerEnabled: !0
                                                }
                                            });
                                            else {
                                                if (!sn) return;
                                                mn(!0), un(!1)
                                            }
                                        else {
                                            if (!sn) return;
                                            mn(!0), un(!1)
                                        }
                                    }
                                })
                            } else mn(!0), un(!1)
                    }), [sn]), (0, Ye.useEffect)((function() {
                        var n, e, t;
                        Sn ? (null === (n = Kn.current) || void 0 === n || n.play(), null === (e = Kn.current) || void 0 === e || e.classList.add("slideIn")) : null === (t = Kn.current) || void 0 === t || t.classList.remove("slideIn")
                    }), [Sn]), (0, Ye.useEffect)((function() {
                        vn && ((0, Ve.L9)("GoogleAdBlockCheckCrossed"), ee() && dn && (!sessionStorage.getItem("isEmbeddedFrame") || an) ? (In({
                            type: Et.Z.UPDATE_PLAY_STATE,
                            payload: {
                                isAdBlockerEnabled: !0
                            }
                        }), Rn(!0)) : (0, Ve.L9)("NowggAdBlockCheckCrossed"))
                    }), [vn]);
                    var oe = function() {
                            zi.CC.onfocus(), (0, Zg.v0)()
                        },
                        re = function() {
                            var n, e, t, i, o;
                            if ((0, Ue.DJ)() || un(!0), window.addEventListener("storage", Jn), window.addEventListener("blur", Yi.ny), window.addEventListener("focus", oe), window.addEventListener("appinstalled", qo.YL), document.addEventListener("touchcancel", Zg.v0), window.addEventListener("keydown", Ve._b), window.addEventListener("pointerdown", Ve._b), window.addEventListener("touchstart", Ve.Sg), window.addEventListener("touchend", Ve.se), "serviceWorker" in navigator) {
                                var r = "".concat((null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.host) || "").concat((null === (t = null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.href) || void 0 === t ? void 0 : t.indexOf("".concat(Ue.ZP.prefix, "/play/"))) > -1 ? "".concat(Ue.ZP.prefix) : "");
                                navigator.serviceWorker.register("https://".concat(r).concat((null === (o = null === (i = null === window || void 0 === window ? void 0 : window.location) || void 0 === i ? void 0 : i.href) || void 0 === o ? void 0 : o.indexOf("/play/")) > -1 ? "/play/" : "/", "sw.js")).then((function(n) {}), (function(n) {}))
                            }
                        },
                        ae = function(n) {
                            try {
                                var e = sessionStorage.getItem(Ki.oE);
                                if (e)((new Date).getTime() - parseInt(e, 10)) / 1e3 < 60 && (0, Jo.Ip)({
                                    event: "NUlessthan60s"
                                })
                            } catch (t) {}(0, Hi.LK)(), (0, Pt.F)(), In({
                                type: St.Z.SET_LOGGED_IN,
                                payload: {
                                    showPreloader: !0
                                }
                            })
                        };
                    (0, Ye.useEffect)((function() {
                        In({
                            type: Et.Z.SHOW_BLOXD_ERROR_SCREEN,
                            payload: {
                                showBloxdErrorScreen: T === qe.YR.FailureServiceNotInRegion && (0, Ge.c6)(Mn.packageName)
                            }
                        })
                    }), [T]), (0, Ye.useEffect)((function() {
                        (0, Ve.L9)("PlayPageLoaded"), window.addEventListener("orientationchange", pt.TG), window.addEventListener("resize", pt.TG), window.addEventListener("beforeunload", ae), Ue.ZP.isAppPage || window.addEventListener("beforeinstallprompt", qo.dz), (0, pt.TG)();
                        try {
                            if (nv(void 0, void 0, void 0, (function() {
                                    var n;
                                    return ev(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return e.trys.push([0, 5, , 6]), (0, Ue.DJ)() ? (wn(!1), re(), [4, (0, Ct.ZP)({
                                                    isPlayer: !0
                                                })]) : [3, 2];
                                            case 1:
                                                return e.sent(), [2];
                                            case 2:
                                                return re(), J && en(!1), E ? [3, 4] : [4, (0, Ct.ZP)({
                                                    isPlayer: !0
                                                })];
                                            case 3:
                                                e.sent(), e.label = 4;
                                            case 4:
                                                return [3, 6];
                                            case 5:
                                                return n = e.sent(), $n({
                                                    error: n,
                                                    detectionMethod: Ki.fi
                                                }), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                })), "function" === typeof BroadcastChannel) {
                                var n = new BroadcastChannel("tab"),
                                    e = "tab-".concat(Ue.ZP.appInfo.appId);
                                n.postMessage(e), n.addEventListener("message", (function(n) {
                                    n.data === e && (kt.Z.getState().play.isRecording && kt.Z.dispatch({
                                        type: Et.Z.UPDATE_IS_RECORDING,
                                        payload: {
                                            showRecordingModalBeforeExit: !0,
                                            showRecordingModalBeforeExitSource: "duplicateTab"
                                        }
                                    }), (0, Ve.L9)("DuplicateTab"), In({
                                        type: Et.Z.DUPLICATE_TAB,
                                        payload: {
                                            duplicateTab: !0
                                        }
                                    }))
                                }))
                            }
                        } catch (i) {
                            $n({
                                error: i,
                                detectionMethod: Ki.fi
                            })
                        }
                        if (!V) {
                            var t = ["", "moz", "webkit", "ms"];
                            t.forEach((function(n) {
                                document.addEventListener("".concat(n, "fullscreenchange"), ie, !1)
                            })), t.forEach((function(n) {
                                document.addEventListener("".concat(n, "fullscreenerror"), te, !1)
                            })), kt.Z.dispatch({
                                type: Et.Z.LISTENERS_ATTACHED,
                                payload: !0
                            })
                        }
                        return (0, ha.Z)(),
                            function() {
                                window.removeEventListener("storage", Jn), window.removeEventListener("beforeunload", ae), window.removeEventListener("orientationchange", pt.TG), window.removeEventListener("resize", pt.TG), window.removeEventListener("blur", Yi.ny), window.removeEventListener("focus", oe), document.removeEventListener("touchcancel", Zg.v0), window.removeEventListener("orientationchange", pt.TG), window.removeEventListener("resize", pt.TG), window.removeEventListener("keydown", Ve._b), window.removeEventListener("pointerdown", Ve._b), window.removeEventListener("touchstart", Ve.Sg), window.removeEventListener("touchend", Ve.se)
                            }
                    }), []), (0, Ye.useEffect)((function() {
                        var n = (0, Ge.Dx)() && !(0, Ue.DJ)();
                        return bn && !Sn ? (ov = n ? 300 : 0, Wn.current = setInterval((function() {
                                var e = n ? ov - 1 : ov + 1;
                                ov = e;
                                var t = Math.floor(e / 3600),
                                    i = Math.floor(e / 60 % 60);
                                e = Math.floor(e % 60);
                                var o = "".concat(t > 0 ? "".concat(t <= 9 ? "0" : "").concat(t, ":") : "", "\n      ").concat(i <= 9 ? "0" : "").concat(i, ":").concat(e <= 9 ? "0" : "").concat(e);
                                o = o.replaceAll("\n", "").replaceAll(" ", ""), In({
                                    type: Et.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        recordingTimerText: o
                                    }
                                }), (0, Ge.Dx)() && 0 === ov && In({
                                    type: Et.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        stopVideoRecording: !0
                                    }
                                })
                            }), 1e3)) : Wn.current && clearInterval(Wn.current),
                            function() {
                                Wn.current && clearInterval(Wn.current)
                            }
                    }), [bn, Sn]);
                    (0, Ye.useEffect)((function() {
                        if (((0, Ue.DJ)() && !C || !(0, Ue.DJ)() && C) && In((0, $o.J)()), (C || (0, Ue.DJ)()) && I && ((0, Ge.wA)() && (0, Ge.WM)(), Pt.Z.getVideoChannel({}, {}).then((function(n) {
                                return nv(void 0, void 0, void 0, (function() {
                                    var e, t;
                                    return ev(this, (function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return n.status === qe.YR.Success && (In({
                                                    type: Et.Z.CHANNEL_DETAILS,
                                                    payload: {
                                                        channelDisplayName: n.channelDisplayName,
                                                        channelHandle: n.channelHandle
                                                    }
                                                }), window.localStorage.setItem(Ki.OC, null === n || void 0 === n ? void 0 : n.channelHandle)), e = window.localStorage.getItem(Ki.$U), [4, (0, Xf.zo)()];
                                            case 1:
                                                return t = i.sent(), "true" === window.sessionStorage.getItem(Ki.c8) ? ((0, Xf.GK)(), [3, 5]) : [3, 2];
                                            case 2:
                                                return t ? [4, (0, Xf.G2)()] : [3, 5];
                                            case 3:
                                                return i.sent(), [4, (0, Xf.U9)(e || "")];
                                            case 4:
                                                i.sent(), i.label = 5;
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }))
                            })).catch((function(n) {}))), C && !ne())
                            if (I) {
                                if ((0, Ge.wA)() && (0, Ge.c6)()) {
                                    var n = +(sessionStorage.getItem(Ki.XS) || "");
                                    sessionStorage.removeItem(Ki.XS), nv(void 0, void 0, void 0, (function() {
                                        return ev(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return n > 0 ? [4, On(n)] : [3, 2];
                                                case 1:
                                                    e.sent(), e.label = 2;
                                                case 2:
                                                    return (0, Ge.WM)(), [2]
                                            }
                                        }))
                                    }))
                                }
                            } else In({
                                type: Yh.Z.ROBUX_REWARD_DETAILS,
                                payload: {
                                    startRobuxTimer: !0
                                }
                            })
                    }), [I, C]), (0, Ye.useEffect)((function() {
                        D && C && sessionStorage.getItem("enableFreeSpin") === Ue.rs && In(I ? {
                            type: Yh.Z.JACKPOT_FLOW,
                            payload: {
                                showFreeSpinVerification: !0
                            }
                        } : {
                            type: St.Z.TOGGLE_LOGIN,
                            payload: {
                                showLogin: !0
                            }
                        })
                    }), [D, I, C]), (0, Ye.useEffect)((function() {
                        (0, Ge.wA)() && (0, Ge.c6)() && (K || Y) && (On(Un % Ue.ZP.appInfo.rwdMinPlayTimeIntervalInSecs), (0, Ag.a)())
                    }), [K, Y]), (0, Ye.useEffect)((function() {
                        var n;
                        (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && !(0, Ue.DJ)() && document.body.classList[I || H ? "add" : "remove"]("landscape")
                    }), [I, H, _]), (0, Ye.useEffect)((function() {
                        var n;
                        Y && (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && document.body.classList.remove(Ki.pp, Ki.Ov)
                    }), [Y]), (0, Ye.useEffect)((function() {
                        var n;
                        if (j || Y || z) {
                            try {
                                null === (n = kt.Z.getState().play.recordingUserAudioTrack) || void 0 === n || n.stop(), null === q || void 0 === q || q.getTracks().forEach((function(n) {
                                    return n.stop()
                                }))
                            } catch (e) {}
                            Yn(!1)
                        }
                    }), [Y, j, z]), (0, Ye.useEffect)((function() {
                        if (C) {
                            var n = 0;
                            Nn.current = setInterval((function() {
                                n += 60, In({
                                    type: _e.Z.UPDATE_PLAYTIME,
                                    payload: {
                                        playtime: n / 60
                                    }
                                })
                            }), 6e4)
                        }
                        D && !C && Nn.current && clearInterval(Nn.current)
                    }), [C]);
                    var de = !0,
                        le = !0;
                    if (!(0, Ge.tq)() || (0, Ge.Em)() || (0, Ge.zc)()) {
                        var ce = (null === (k = null === (Z = Mn.playFeFeatures) || void 0 === Z ? void 0 : Z.ads) || void 0 === k ? void 0 : k.desktop) || {};
                        ue = ce.enableMidrollAds, pe = ce.enableDisplayAds;
                        de = !!ue, le = !!pe
                    } else {
                        var se = (null === (A = null === (b = Mn.playFeFeatures) || void 0 === b ? void 0 : b.ads) || void 0 === A ? void 0 : A.mobile) || {},
                            ue = se.enableMidrollAds,
                            pe = se.enableDisplayAds;
                        de = !!ue, le = !!pe
                    }(0, Ye.useEffect)((function() {
                        if (D && C) {
                            In((0, Tt.UZ)(de, le));
                            var n = (0, Ue.GL)();
                            if (n) {
                                var e = n.type,
                                    t = n.userWarningTime,
                                    i = n.disconnecTimer,
                                    o = e === Ki.UY;
                                In({
                                    type: Et.Z.SPOT_INSTANCES,
                                    payload: {
                                        disconnecTimer: i,
                                        userWarningTime: t,
                                        spotInstances: !1,
                                        spotInstanceToast: !0,
                                        sessionTimeLimitExceeded: o
                                    }
                                })
                            }(0, Ge.wA)() && (0, Ge.cv)()
                        } else D && ne() && In((0, Tt.UZ)(de, le))
                    }), [D, C]), (0, Ye.useEffect)((function() {
                        N && D && (0, Ve.L9)(Ki.Mz)
                    }), [N, D]), (0, Ye.useEffect)((function() {
                        var n = (ne() ? "" : T) || (Mn.packageName ? "" : "NoPackageName");
                        Xn(n), n && (0, Ve.L9)("ShowErrorOverlay", {
                            err: n,
                            error: T
                        })
                    }), [Mn, T]);
                    var fe = T !== qe.YR.FailureNoResource && !Bn && (!C || !D) && !j && !Y && !z,
                        he = !(0, Ue.DJ)() && L && window.Modernizr.peerconnection,
                        ge = !(0, Ue.DJ)() && !L && D && fe && !C && !ne() && window.Modernizr.peerconnection && !(!H || _ || F) && !W,
                        ve = (0, Ye.useCallback)((function() {
                            var n = document.documentElement;
                            Tn || Xi.J.fullscreenElement || Xi.J.mozFullScreenElement || Xi.J.webkitFullscreenElement || Xi.J.msFullscreenElement ? Tn && (Xi.J.fullscreenElement || Xi.J.mozFullScreenElement || Xi.J.webkitFullscreenElement || Xi.J.msFullscreenElement) && (0, Ni.Qg)(Xi.J) : n && (0, Ni.rM)(n), kt.Z.dispatch({
                                type: Et.Z.SET_FULLSCREEN,
                                payload: {
                                    isFullscreen: !Tn
                                }
                            }), (0, pt.sZ)(), (0, pt.Ul)()
                        }), [Tn]);
                    (0, Ye.useEffect)((function() {
                        var n, e;
                        Tn ? bn && (0, Ge.Dx)() && (null === (e = null === En || void 0 === En ? void 0 : En.current) || void 0 === e || e.classList.add("isRecording")) : null === (n = null === En || void 0 === En ? void 0 : En.current) || void 0 === n || n.classList.remove("isRecording")
                    }), [Tn]);
                    var me = function(n) {
                        en(!0), null === localStorage || void 0 === localStorage || localStorage.setItem(Ki.Wp, "true"), ve(), "bottomBar" === n ? (0, Ve.L9)(Ki.S5, {
                            element: "LaunchQRScreen",
                            action: "TryNowClicked",
                            group: "TryAndDownload"
                        }) : (0, Ve.L9)(Ki.S5, {
                            element: "LaunchScreen",
                            action: "TryNowClicked",
                            group: "TryAndDownload"
                        })
                    };
                    return (0, et.BX)(et.HY, {
                        children: [fn && (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(ji.default, {
                                async: !0,
                                src: "https://fundingchoicesmessages.google.com/i/pub-9233878085988971?ers=1",
                                nonce: "qMzTqTjB9TkXzg695cx_KA",
                                onError: function() {
                                    (0, Fe.zr)("fundingChoiceLoadError", !1), In({
                                        type: _e.Z.UPDATE_IMAERROR,
                                        payload: {
                                            imaError: !0,
                                            adsEnded: !0
                                        }
                                    })
                                }
                            }), (0, et.tZ)(ji.default, {
                                nonce: "qMzTqTjB9TkXzg695cx_KA",
                                id: "googleInlineScript",
                                dangerouslySetInnerHTML: {
                                    __html: '(function () {\n                  function signalGooglefcPresent() {\n                    if (!window.frames["googlefcPresent"]) {\n                      if (document.body) {\n                        const iframe = document.createElement("iframe");\n                        iframe.style =\n                          "width: 0; height: 0; border: none; z-index: -1000; left: -1000px; top: -1000px;";\n                        iframe.style.display = "none";\n                        iframe.name = "googlefcPresent";\n                        document.body.appendChild(iframe);\n                      } else {\n                        setTimeout(signalGooglefcPresent, 0);\n                      }\n                    }\n                  }\n                  signalGooglefcPresent();\n                })();'
                                }
                            }), (0, et.tZ)(ji.default, {
                                id: "googleScript",
                                dangerouslySetInnerHTML: {
                                    __html: (0, Jo.Ci)()
                                }
                            })]
                        }), yn ? (0, et.tZ)(lo, {}) : nn ? T === qe.YR.FailureUnderMaintenance ? (0, et.tZ)(Go, {}) : (M || E) && !I && sessionStorage.getItem(Ki.o_) ? (0, et.tZ)(jh, {}) : (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(Vo.default, {
                                children: !E && S && (0, et.tZ)("link", {
                                    rel: "manifest",
                                    href: "data:application/json;charset=utf-8,".concat((0, qo.ZP)(Mn.appName, (0, Ge.tq)()))
                                })
                            }), !((0, Ue.DJ)() && (0, Ge.tq)()) && (0, et.BX)(et.HY, {
                                children: [(0, et.tZ)(It.Z, {
                                    toggle: he,
                                    exitingDelay: .3,
                                    children: (0, et.tZ)($t, {
                                        toggle: he
                                    })
                                }), (0, et.tZ)(It.Z, {
                                    toggle: ge,
                                    exitingDelay: .6,
                                    enteringDelay: .3,
                                    children: (0, et.tZ)(Jt, {
                                        toggle: ge
                                    })
                                })]
                            }), Dn && (0, et.tZ)(mh, {}), (0, Ue.DJ)() && !(0, Ge.tq)() && !L && !Bn && !D && !R && !O && !W && (0, et.tZ)(Zt, {
                                isAppPage: E
                            }), (0, Ue.DJ)() && (!(0, Ge.tq)() || (0, Ge.tq)() && !L) && (0, et.tZ)(no.r, {
                                loading: null,
                                persistor: kt.D,
                                children: (0, et.tZ)(iv, {
                                    isAppPage: E
                                })
                            }), U && (0, et.tZ)(Yo, {
                                isAppPage: E,
                                screen: "inGame",
                                handleTryNowClick: me
                            }), W && (0, et.tZ)(Yo, {
                                isAppPage: E,
                                screen: "ending"
                            }), G && (0, et.tZ)(sr, {}), !(0, Ue.DJ)() && !L && (I || H) && !F && window.Modernizr.peerconnection && T !== qe.YR.FailureNoResource && !Bn && (!C && !ne() || !D) && !j && !Y && !R && !z && !O && !W && (0, et.tZ)(Zt, {
                                isAppPage: E
                            }), !L && (I || H) && !F && window.Modernizr.peerconnection && (0, et.BX)(et.HY, {
                                children: [!(0, Ue.DJ)() && (0, et.tZ)(no.r, {
                                    loading: null,
                                    persistor: kt.D,
                                    children: !Bn && (M || E) && (0, et.tZ)(Tf, {
                                        isAppPage: E,
                                        overlayElement: ne() && D ? (0, et.tZ)(ag, {}) : null
                                    })
                                }), (T === qe.YR.FailureServiceNotInRegion && !(0, Ge.c6)(Mn.packageName) || T === qe.YR.FailureAppNotAvailable) && Q ? (0, et.tZ)(Ho.Z, {}) : T === qe.YR.FailureServiceNotInRegion && (0, Ge.c6)(Mn.packageName) || !T || "string" !== typeof T ? null : (0, et.tZ)(tv, {
                                    error: T,
                                    errorName: "PlayPage-".concat(T)
                                })]
                            }), !(0, Ue.DJ)() && B && !X && (0, et.tZ)(Si, {}), !(0, Ue.DJ)() && X && !B && !z && (0, et.tZ)(Ri, {}), !(0, Ue.DJ)() && !window.Modernizr.peerconnection && (0, et.tZ)(mi, {}), !(0, Ue.DJ)() && !B && !X && !z && K && (0, et.tZ)(Bi, {}), !L && window.Modernizr.peerconnection && !I && (!H || _ || F) && (0, et.tZ)(Dt.Z, {
                                withBG: !0
                            }), zn && (0, zh.Z)() && !(0, Ge.tq)() && !(0, Ge.Em)() && !(0, Ge.zc)() && (0, et.BX)(et.HY, {
                                children: [(0, Ge.Dx)() && (0, et.tZ)(Rf.CF, {
                                    preload: "auto",
                                    muted: !0,
                                    ref: Kn,
                                    style: {
                                        display: Sn ? "block" : "none"
                                    },
                                    className: "transition-video",
                                    children: (0, et.tZ)("source", {
                                        src: "".concat(Ki.u1, "clapboardVideo.mp4"),
                                        type: "video/mp4"
                                    })
                                }), bn && Tn && !L && !ge && (!fe || "Html" === Ue.ZP.appInfo.appType) && D && (0, et.BX)(et.HY, {
                                    children: [(0, Ge.Dx)() && (0, et.BX)(et.HY, {
                                        children: [Sn && (0, et.BX)(Rf.B3, {
                                            children: [(0, et.tZ)(Mt.T1, {
                                                children: P("recordingTransitionTitle")
                                            }), (0, et.tZ)(Mt.T3, {
                                                children: P("recordingTransitionInfo")
                                            })]
                                        }), (0, et.tZ)(Rf.$_, {
                                            children: (0, et.tZ)("img", {
                                                alt: "Nowgg  ".concat(P("logo")),
                                                src: (0, Xt.j)(xh),
                                                style: {
                                                    width: "124px",
                                                    height: "48px",
                                                    position: "absolute",
                                                    left: "12px",
                                                    bottom: "12px"
                                                }
                                            })
                                        })]
                                    }), (0, et.tZ)(Cf.Z, {}), (0, et.tZ)(Df.Z, {})]
                                }), An && ((null === kn || void 0 === kn ? void 0 : kn.current) || !(0, Ge.Dx)()) && (0, et.tZ)(Yf, {}), Zn && (0, et.tZ)($f, {}), (Fn || Hn || _n) && (0, et.tZ)(Ch, {})]
                            }), Pn && (0, et.tZ)(Eh, {}), Gn && (0, et.tZ)(bg, {}), (0, $g.ZX)().flag && (0, et.tZ)(It.Z, {
                                toggle: Vn === Ki.cD,
                                exitingDelay: .3,
                                children: (0, et.tZ)(Jg, {
                                    toggle: Vn === Ki.cD
                                })
                            }), qn && !(0, Ge.tq)() && (0, et.tZ)(gg, {}), (null === Qn || void 0 === Qn ? void 0 : Qn.name) && (C || (0, Ue.DJ)() || Ue.ZP.isAppPage || Ue.ZP.isHomePage) && (!an || D) && (0, et.tZ)(Pg, {
                                taskName: Qn.name,
                                taskRwd: Qn.rewardNumRobux
                            })]
                        }) : (0, et.tZ)(Yo, {
                            isAppPage: E,
                            handleTryNowClick: me,
                            screen: "loading"
                        }), !(0, Ue.DJ)() && (0, et.BX)(et.HY, {
                            children: [(0, et.tZ)(Qi, {}), (0, et.tZ)(Ji, {})]
                        })]
                    })
                },
                av = rv
        }
    }
]);
//# sourceMappingURL=233-8695b1563d7992f8.js.map