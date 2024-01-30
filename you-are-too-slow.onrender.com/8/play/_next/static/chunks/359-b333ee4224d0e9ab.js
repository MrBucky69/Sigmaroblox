"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [359, 976], {
        20948: function(n, e, t) {
            var i = t(66749),
                r = t(66971),
                o = t(50912),
                a = t(11720),
                l = t(25617),
                c = t(14266),
                d = t(78294),
                p = t(58309),
                s = t(97997);
            e.Z = function() {
                var n = (0, l.I0)(),
                    e = (0, l.v9)((function(n) {
                        return n.auth.isLoggedIn
                    })),
                    t = (0, a.useState)(null),
                    u = t[0],
                    f = t[1],
                    g = (0, l.v9)((function(n) {
                        return n.play.draggableState
                    })),
                    h = (0, l.v9)((function(n) {
                        return n.play.isRecording
                    })),
                    x = (0, l.v9)((function(n) {
                        return n.auth.guestFlow
                    }));
                (0, a.useEffect)((function() {
                    var n = e ? (0, p.et)() : null;
                    n && f(n), !e && (0, d.Us)() && o.Z.dispatch({
                        type: r.Z.UPDATE_LOGIN_TOOLTIP,
                        payload: {
                            isTooltipVisible: !0
                        }
                    })
                }), []);
                var m = function() {
                    "drag" !== g && ((0, d.Sr)(), o.Z.dispatch({
                        type: r.Z.UPDATE_LOGIN_TOOLTIP,
                        payload: {
                            isTooltipVisible: !1
                        }
                    }), o.Z.dispatch({
                        type: r.Z.SET_SENSITIVITY_POPUP,
                        payload: {
                            isSensitivityPopupOpen: !1
                        }
                    }), n(!h || e ? x && !e ? {
                        type: c.Z.TOGGLE_LOGIN,
                        payload: {
                            showLogin: !0
                        }
                    } : {
                        type: r.Z.MODAL_STATUS,
                        payload: {
                            showAboutUs: !0
                        }
                    } : {
                        type: r.Z.UPDATE_IS_RECORDING,
                        payload: {
                            showRecordingModalBeforeExit: !0,
                            showRecordingModalBeforeExitSource: "userLogin"
                        }
                    }))
                };
                return (0, s.tZ)(i.Z, {
                    isLoggedIn: e,
                    user: u,
                    src: null === u || void 0 === u ? void 0 : u.avatar,
                    click: function() {
                        return m()
                    },
                    size: 24
                })
            }
        },
        39475: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return g
                }
            });
            var i, r, o, a = t(79354),
                l = t(77691),
                c = t(20902),
                d = t(50445),
                p = t(44141),
                s = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                u = (0, d.ZP)(p.aU)(o || (o = s(["\n  width: 40px;\n  height: 40px;\n  ", "\n\n  ", "\n"], ["\n  width: 40px;\n  height: 40px;\n  ", "\n\n  ", "\n"])), (function(n) {
                    return n.isPortrait && "\n    order: 3;\n    margin-bottom: auto;\n  "
                }), (function(n) {
                    var e = n.isMobile,
                        t = n.isPortrait;
                    return e || t ? (0, d.iv)(i || (i = s(["\n    &> svg:nth-child(2) {\n      display: none;\n    }\n  "], ["\n    &> svg:nth-child(2) {\n      display: none;\n    }\n  "]))) : (0, d.iv)(r || (r = s(["\n    &> svg:nth-child(1) {\n      display: none;\n    } \n  "], ["\n    &> svg:nth-child(1) {\n      display: none;\n    } \n  "])))
                })),
                f = t(97997),
                g = function(n) {
                    var e = n.isPortrait;
                    return (0, f.BX)(u, {
                        isPortrait: e,
                        isMobile: (0, l.tq)(),
                        onClick: function() {
                            return (0, c.vT)(!0)
                        },
                        className: "back-btn",
                        children: [(0, f.tZ)(a.eJ, {}), (0, f.tZ)(a.lU, {})]
                    })
                }
        },
        50855: function(n, e, t) {
            var i = t(59930),
                r = t(11720),
                o = t(26793),
                a = t(25617),
                l = t(97997),
                c = {
                    support: {
                        title: "helpAndSupport",
                        action: "GET_SUPPORT"
                    },
                    gamepad: {
                        title: "controls.title",
                        action: "TOGGLE_SIDEBAR",
                        fontSize: "23px"
                    }
                };
            e.Z = function(n) {
                var e = n.type,
                    t = (0, r.useState)({}),
                    d = t[0],
                    p = t[1],
                    s = (0, o.$)().t,
                    u = (0, a.I0)(),
                    f = (0, a.v9)((function(n) {
                        return n.play.draggableState
                    }));
                (0, r.useEffect)((function() {
                    p(e && c[e] ? c[e] : {})
                }), [e]);
                var g = (0, r.useCallback)((function() {
                    u({
                        type: d.action
                    })
                }), [d]);
                return (0, l.tZ)(i.Z, {
                    title: s(d.title),
                    onClick: "drag" === f ? function() {} : g,
                    name: e
                })
            }
        },
        79717: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return u
                }
            });
            var i = t(25617),
                r = t(77691),
                o = t(26793),
                a = t(66971),
                l = t(44141),
                c = t(45024),
                d = {
                    src: "/play/_next/static/media/dollar.77f6adad.svg",
                    height: 25,
                    width: 24
                },
                p = t(7969),
                s = t(97997),
                u = function() {
                    var n = (0, i.I0)(),
                        e = (0, o.$)().t;
                    return (0, i.v9)((function(n) {
                        return n.play.iapUserLogin
                    })) ? null : (0, s.tZ)(l.aU, {
                        isMobile: (0, r.tq)(),
                        id: "ng-iap",
                        onClick: function() {
                            return n({
                                type: a.Z.TOGGLE_IAP_POPUP_STATE
                            })
                        },
                        children: (0, s.tZ)(p.X7, {
                            className: "".concat((0, r.tq)() && "mobile"),
                            children: (0, s.tZ)("img", {
                                alt: e("iap"),
                                style: {
                                    opacity: (0, r.tq)() ? .7 : 1
                                },
                                src: (0, c.j)(d)
                            })
                        })
                    })
                }
        },
        7969: function(n, e, t) {
            t.d(e, {
                X7: function() {
                    return u
                },
                Bp: function() {
                    return f
                },
                wf: function() {
                    return g
                },
                RV: function() {
                    return h
                },
                iO: function() {
                    return x
                }
            });
            var i, r, o, a, l, c, d = t(50445),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = (0, d.F4)(i || (i = p(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))),
                u = d.ZP.div(r || (r = p(["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n"], ["\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n"]))),
                f = d.ZP.div(o || (o = p(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  &.mobile{\n    z-index: 99;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 3;\n  width: 100%;\n  height: 100%;\n  background: ", ";\n  &.mobile{\n    z-index: 99;\n  }\n"])), (function(n) {
                    return n.theme.colors.black70
                })),
                g = d.ZP.div(a || (a = p(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(60px);\n  border-radius: ", ";\n  padding: 12px 16px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  i{\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    cursor: pointer;\n  }\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0px;\n    max-width: 313px;\n  }\n  img{\n    animation: ", " 1s linear infinite;\n    width: 28px;\n    height: 28px;\n    margin: 0px auto;\n    margin-bottom: 12px;\n  }\n  &.loaderContainer{\n    padding: 20px 24px 24px 24px;\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(60px);\n  border-radius: ", ";\n  padding: 12px 16px 16px 16px;\n  display: flex;\n  flex-direction: column;\n  color: ", ";\n  i{\n    position: absolute;\n    top: 18px;\n    right: 18px;\n    cursor: pointer;\n  }\n  p {\n    font-size: 14px;\n    font-weight: 400;\n    margin: 0px;\n    max-width: 313px;\n  }\n  img{\n    animation: ", " 1s linear infinite;\n    width: 28px;\n    height: 28px;\n    margin: 0px auto;\n    margin-bottom: 12px;\n  }\n  &.loaderContainer{\n    padding: 20px 24px 24px 24px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.border.base3
                }), (function(n) {
                    return n.theme.border.radius3
                }), (function(n) {
                    return n.theme.colors.white
                }), s),
                h = d.ZP.div(l || (l = p(["\n  height: 36px;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: ", ";\n  margin-top: 16px;\n\n  cursor: pointer;\n  h6{\n    margin: 0px;\n    line-height: 36px;\n    text-align: center;\n  }\n"], ["\n  height: 36px;\n  background: ", ";\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: ", ";\n  margin-top: 16px;\n\n  cursor: pointer;\n  h6{\n    margin: 0px;\n    line-height: 36px;\n    text-align: center;\n  }\n"])), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.border.radius2
                })),
                x = d.ZP.div(c || (c = p(["\n  position: fixed;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, -100%);\n  padding: 8px 16px;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s ease-in-out;\n  z-index: 99;\n  &.slideUp {\n    top: -100px;\n    opacity: 0;\n  }\n  &.slideDown {\n    top: 100px;\n    opacity: 1;\n  }\n  i{\n    font-size: 15px;\n    color: ", ";\n    margin-right: 5px;\n  }\n  p{\n    margin: 0px;\n  }\n"], ["\n  position: fixed;\n  left: 50%;\n  top: -10px;\n  transform: translate(-50%, -100%);\n  padding: 8px 16px;\n  background: ", ";\n  border: ", ";\n  border-radius: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 1s ease-in-out;\n  z-index: 99;\n  &.slideUp {\n    top: -100px;\n    opacity: 0;\n  }\n  &.slideDown {\n    top: 100px;\n    opacity: 1;\n  }\n  i{\n    font-size: 15px;\n    color: ", ";\n    margin-right: 5px;\n  }\n  p{\n    margin: 0px;\n  }\n"])), (function(n) {
                    return n.theme.colors.green
                }), (function(n) {
                    return n.theme.border.base5
                }), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.colors.white
                }))
        },
        56892: function(n, e, t) {
            t.r(e), t.d(e, {
                ActionItems: function() {
                    return Lp
                },
                Controller: function() {
                    return Ip
                },
                GameActions: function() {
                    return Fp
                },
                GlobalActions: function() {
                    return _p
                },
                MouseLock: function() {
                    return Cp
                },
                MouseSensitivity: function() {
                    return Bp
                },
                ProfilesAction: function() {
                    return Xp
                },
                RecordMic: function() {
                    return jp
                },
                RecordWidget: function() {
                    return Rp
                },
                SoftKeyboardAction: function() {
                    return Dp
                },
                SupportAction: function() {
                    return zp
                },
                TopActions: function() {
                    return Up
                },
                VideoPortalAction: function() {
                    return Tp
                },
                default: function() {
                    return Np
                }
            });
            var i, r, o, a, l, c, d, p, s, u, f, g, h, x, m, b, w, v, y, Z, P, k, A, S, E, O, I, C, R, j, B, z, T, D, X, L, _, F, U, N, G, M, V, Y, H, Q, q, J, W, K, $, nn, en, tn, rn, on, an, ln, cn, dn, pn, sn, un, fn, gn, hn, xn, mn, bn, wn, vn, yn, Zn, Pn, kn, An, Sn, En, On, In, Cn, Rn, jn, Bn, zn, Tn, Dn, Xn, Ln, _n, Fn, Un, Nn, Gn, Mn, Vn, Yn, Hn, Qn, qn, Jn, Wn, Kn, $n, ne, ee, te, ie, re, oe, ae, le, ce, de, pe, se, ue, fe, ge, he, xe, me, be, we, ve, ye, Ze, Pe, ke, Ae, Se, Ee, Oe, Ie, Ce, Re, je, Be, ze, Te, De, Xe, Le, _e, Fe, Ue, Ne, Ge, Me, Ve, Ye, He, Qe, qe, Je, We, Ke, $e, nt, et, tt, it, rt, ot, at, lt, ct, dt, pt, st, ut, ft, gt, ht, xt, mt, bt, wt, vt, yt, Zt, Pt, kt, At, St, Et, Ot, It, Ct, Rt, jt, Bt, zt, Tt, Dt, Xt, Lt, _t, Ft, Ut, Nt, Gt, Mt, Vt, Yt, Ht, Qt, qt, Jt, Wt, Kt, $t, ni, ei, ti, ii, ri, oi, ai, li, ci = t(92809),
                di = t(78294),
                pi = t(50912),
                si = t(89598),
                ui = t(3053),
                fi = t(80252),
                gi = t(79717),
                hi = t(25617),
                xi = t(11720),
                mi = t(94381),
                bi = t(88557),
                wi = t(26793),
                vi = {
                    src: "/play/_next/static/media/video-folder.cf40a9ae.svg",
                    height: 24,
                    width: 24
                },
                yi = {
                    src: "/play/_next/static/media/soft-keyboard.bf96f83c.svg",
                    height: 24,
                    width: 24
                },
                Zi = {
                    src: "/play/_next/static/media/leaderboard-cup.20bae4fd.svg",
                    height: 24,
                    width: 24
                },
                Pi = t(45024),
                ki = t(67881),
                Ai = t(77691),
                Si = t(66971),
                Ei = t(74803),
                Oi = t(99719),
                Ii = t(4532),
                Ci = t(51591),
                Ri = t(12422),
                ji = t(79305),
                Bi = t(45628),
                zi = t(50855),
                Ti = t(61740),
                Di = t(59930),
                Xi = t(98219),
                Li = t(97997),
                _i = function() {
                    var n = (0, wi.$)().t,
                        e = (0, hi.v9)((function(n) {
                            return n.play.mouseLockActive
                        }));
                    return (0, Li.tZ)(Di.Z, {
                        alt: n("lockCursor"),
                        title: n("lockCursor"),
                        onClick: function(n) {
                            (0, Xi.E4)(n.clientX, n.clientY)
                        },
                        name: e ? "lock" : "unlock"
                    })
                },
                Fi = t(40434),
                Ui = t(6094),
                Ni = t(50445),
                Gi = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Mi = Ni.ZP.div(i || (i = Gi(["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"])), (function(n) {
                    return n.theme.colors.base600
                })),
                Vi = Ni.ZP.p(r || (r = Gi(["\n  color: ", ";\n  margin: 0;\n  text-align: left;\n  font-size: 10px;\n  line-height: 15px;\n  font-weight: 500;\n"], ["\n  color: ", ";\n  margin: 0;\n  text-align: left;\n  font-size: 10px;\n  line-height: 15px;\n  font-weight: 500;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Yi = Ni.ZP.div(o || (o = Gi(["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"], ["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"]))),
                Hi = Ni.ZP.input(a || (a = Gi(["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"], ["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"])), (function(n) {
                    return n.theme.colors.ascent
                })),
                Qi = Ni.ZP.input(l || (l = Gi(["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"], ["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"])), (function(n) {
                    return n.theme.colors.modal
                })),
                qi = function(n) {
                    var e = n.fsWidget,
                        t = n.heading,
                        i = void 0 === t ? "mouseSensitivity" : t,
                        r = n.prepend,
                        o = void 0 === r ? null : r,
                        a = (0, wi.$)().t,
                        l = (0, hi.v9)((function(n) {
                            return n.appPreferences.mouseSensitivity || mi.rL
                        })),
                        c = (0, hi.v9)((function(n) {
                            return n.play.isSensitivityPopupOpen
                        })),
                        d = (0, hi.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        p = (0, hi.I0)();
                    return (0, Li.BX)(Li.HY, {
                        children: [(0, Li.tZ)(Di.Z, {
                            id: "ng-sensitivity",
                            alt: a("mouseSensitivity"),
                            title: a("mouseSensitivity"),
                            onClick: function() {
                                p({
                                    type: Si.Z.SET_SENSITIVITY_POPUP,
                                    payload: {
                                        isSensitivityPopupOpen: !c
                                    }
                                })
                            },
                            name: "sensi"
                        }), (0, Li.BX)(Mi, {
                            style: {
                                display: c && (d && e || !d && !e) ? "inherit" : "none"
                            },
                            children: [o, (0, Li.tZ)(Vi, {
                                children: a(i)
                            }), (0, Li.BX)(Yi, {
                                children: [(0, Li.tZ)(Hi, {
                                    id: "sensitivity-slider",
                                    type: "range",
                                    min: "1",
                                    max: "10",
                                    value: l,
                                    step: "1",
                                    onChange: function(n) {
                                        var e = parseInt(n.target.value, 10);
                                        p({
                                            type: Fi.Z.MOUSE_SENSITIVITY,
                                            payload: {
                                                mouseSensitivity: e
                                            }
                                        }), Ui.ZP.updateCfgWithSensitivity()
                                    }
                                }), (0, Li.tZ)(Qi, {
                                    id: "sensitivity-box",
                                    type: "number",
                                    min: "1",
                                    max: "10",
                                    step: "1",
                                    value: l,
                                    onChange: function(n) {
                                        var e = parseInt(n.target.value, 10);
                                        e < 1 && (e = 1), e > 10 && (e = 10), p({
                                            type: Fi.Z.MOUSE_SENSITIVITY,
                                            payload: {
                                                mouseSensitivity: e
                                            }
                                        }), Ui.ZP.updateCfgWithSensitivity()
                                    },
                                    onFocus: function() {
                                        p({
                                            type: Si.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !0
                                            }
                                        })
                                    },
                                    onBlur: function() {
                                        p({
                                            type: Si.Z.UPDATE_TEXTFIELD_FOCUS,
                                            payload: {
                                                uiTextfieldInFocus: !1
                                            }
                                        })
                                    }
                                })]
                            })]
                        })]
                    })
                },
                Ji = t(44141),
                Wi = t(66749),
                Ki = t(58309),
                $i = t(95509),
                nr = {
                    src: "/play/_next/static/media/recents.97c17e89.svg",
                    height: 16,
                    width: 16
                },
                er = t(14266),
                tr = t(13978),
                ir = {
                    src: "/play/_next/static/media/help.5d35d39c.svg",
                    height: 24,
                    width: 24
                },
                rr = {
                    src: "/play/_next/static/media/close.16e94527.svg",
                    height: 18,
                    width: 18
                },
                or = {
                    src: "/play/_next/static/media/selector.4ef27b8a.svg",
                    height: 55,
                    width: 88
                },
                ar = {
                    src: "/play/_next/static/media/profile-controls-bg.e750a7f8.svg",
                    height: 116,
                    width: 48
                },
                lr = t(93224),
                cr = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                dr = (0, Ni.F4)(c || (c = cr(["\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n"], ["\n  100% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n"]))),
                pr = (0, Ni.F4)(d || (d = cr(["\n  0% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  100% {\n    background: transparent;\n  }\n"], ["\n  0% {\n    background: rgba(0, 0, 0, 0.7);\n  }\n  100% {\n    background: transparent;\n  }\n"]))),
                sr = Ni.ZP.div(p || (p = cr(["\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  flex-direction: row-reverse;\n  z-index: 20;\n  color: ", ";\n\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: ", ";\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  display: flex;\n  flex-direction: row-reverse;\n  z-index: 20;\n  color: ", ";\n\n  animation-name: ", ";\n  animation-duration: 0.5s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.5s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
                    return n.theme.colors.transparent
                }), (function(n) {
                    return n.theme.colors.white
                }), dr, pr),
                ur = (0, Ni.F4)(s || (s = cr(["\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"], ["\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),
                fr = (0, Ni.F4)(u || (u = cr(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"]))),
                gr = Ni.ZP.div(f || (f = cr(["\n  width: 348px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  opacity: 0;\n  transform: translateX(100px);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  width: 348px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  opacity: 0;\n  transform: translateX(100px);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white10
                }), ur, fr),
                hr = Ni.ZP.img(g || (g = cr(["\n  width: 68px;\n  height: 68px;\n  border-radius: 12px;\n  cursor: pointer;\n"], ["\n  width: 68px;\n  height: 68px;\n  border-radius: 12px;\n  cursor: pointer;\n"]))),
                xr = (0, Ni.F4)(h || (h = cr(["\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),
                mr = (0, Ni.F4)(x || (x = cr(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100px);\n  }\n"]))),
                br = Ni.ZP.div(m || (m = cr(["\n  background: transparent;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 116px;\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n  gap: 2px;\n  transform: translate(50px, -5%);\n  backdrop-filter: blur(60px);\n  clip-path: polygon(0% 0%, 0% 77%, 5% 80%, 93% 91%, 100% 94%, 100% 0%);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  clip-path: polygon(0% 0%, 0% 71%, 5% 75%, 93% 91%, 100% 94%, 100% 0%);\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: transparent;\n  background-image: ", ";\n  background-repeat: no-repeat;\n  width: 48px;\n  height: 116px;\n  backdrop-filter: blur(60px);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 4px;\n  gap: 2px;\n  transform: translate(50px, -5%);\n  backdrop-filter: blur(60px);\n  clip-path: polygon(0% 0%, 0% 77%, 5% 80%, 93% 91%, 100% 94%, 100% 0%);\n\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  clip-path: polygon(0% 0%, 0% 71%, 5% 75%, 93% 91%, 100% 94%, 100% 0%);\n\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
                    return n.bgImg && "url('".concat(di.ZP.prefix).concat((null === ar || void 0 === ar ? void 0 : ar.src) || "", "')")
                }), xr, mr),
                wr = Ni.ZP.div(b || (b = cr(["\n  padding: 8px;\n  color: ", ";\n  cursor: pointer;\n  border-radius: 8px;\n  height: 40px;\n  width: 40px;\n  &.close {\n    ", "\n  }\n  &.support {\n    ", "\n  }\n  &:before {\n    transform: translateX(calc(-100% - 14px)) !important;\n    top: unset !important;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"], ["\n  padding: 8px;\n  color: ", ";\n  cursor: pointer;\n  border-radius: 8px;\n  height: 40px;\n  width: 40px;\n  &.close {\n    ", "\n  }\n  &.support {\n    ", "\n  }\n  &:before {\n    transform: translateX(calc(-100% - 14px)) !important;\n    top: unset !important;\n  }\n\n  img {\n    width: 24px;\n    height: 24px;\n  }\n\n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                }), (0, lr.gB)(Oi.Z.t("close"), !1, !1), (0, lr.gB)(Oi.Z.t("support"), !1, !1), (function(n) {
                    return n.theme.colors.white30
                }), (function(n) {
                    return n.theme.colors.white
                })),
                vr = Ni.ZP.p(w || (w = cr(["\n  min-height: 42px;\n  color: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 150%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 30.75%, rgba(255, 255, 255, 0) 100%) 1;\n  position: sticky;\n  top: 0;\n  margin: 0;\n  \n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  width: 326px;\n\n  img {\n    width: 88px;\n    height: 55px;\n    position: absolute;\n    transform: translate(183px, -14px);\n    transition: 0.3s all;\n  }\n"], ["\n  min-height: 42px;\n  color: ", ";\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 150%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(270deg, rgba(255, 255, 255, 0.2) 30.75%, rgba(255, 255, 255, 0) 100%) 1;\n  position: sticky;\n  top: 0;\n  margin: 0;\n  \n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  width: 326px;\n\n  img {\n    width: 88px;\n    height: 55px;\n    position: absolute;\n    transform: translate(183px, -14px);\n    transition: 0.3s all;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                yr = (0, Ni.F4)(v || (v = cr(["\n  0% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n"]))),
                Zr = (0, Ni.F4)(y || (y = cr(["\n  0% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(44px, 4px);\n  }\n  100% {\n    opacity: 0;\n    transform: translate(144px, 4px);\n  }\n"]))),
                Pr = Ni.ZP.div(Z || (Z = cr(["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  transform: translate(44px, 4px);\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  display: flex;\n  display: flex;\n  flex-direction: column;\n  transform: translate(44px, 4px);\n  animation-name: ", ";\n  animation-duration: 0.3s;\n  animation-timing-function: ease-out;\n  animation-fill-mode: forwards;\n  &.close {\n    animation-name: ", ";\n    animation-duration: 0.3s;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), yr, Zr),
                kr = Ni.ZP.div(P || (P = cr(["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 25.52%,\n    rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.00) 100%) 1;\n  margin: 4px 0px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 25.52%,\n    rgba(255, 255, 255, 0.10) 75%, rgba(255, 255, 255, 0.00) 100%) 1;\n  margin: 4px 0px;\n"]))),
                Ar = Ni.ZP.div(k || (k = cr(["\n  padding-top: 20px;\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow-Y: auto;\n  overflow-X: hidden;\n  width: 100%;\n  height: 100%;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  padding-top: 20px;\n  gap: 16px;\n  display: flex;\n  flex-direction: column;\n  overflow-Y: auto;\n  overflow-X: hidden;\n  width: 100%;\n  height: 100%;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                Sr = t(94564),
                Er = {
                    src: "/play/_next/static/media/edit-white.35ac48b4.svg",
                    height: 24,
                    width: 24
                },
                Or = t(6268),
                Ir = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Cr = Ni.ZP.div(A || (A = Ir(["\n  display: flex;\n  gap: 12px;\n"], ["\n  display: flex;\n  gap: 12px;\n"]))),
                Rr = Ni.ZP.div(S || (S = Ir(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  button {\n    margin-top: 6px;\n    width: 62px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  button {\n    margin-top: 6px;\n    width: 62px;\n  }\n"]))),
                jr = Ni.ZP.div(E || (E = Ir(["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  h5 {\n    color: ", ";\n  }\n\n  p{\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  width: 100%;\n\n  h5 {\n    color: ", ";\n  }\n\n  p{\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white70
                })),
                Br = Ni.ZP.div(O || (O = Ir(["\n  display: flex;\n  width: 100%;\n\n  img {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  width: 100%;\n\n  img {\n    cursor: pointer;\n  }\n"]))),
                zr = (Ni.ZP.div(I || (I = Ir(["\n  display: flex;\n  padding: 2px 6px 2px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30.059px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  margin-top: 6px;\n  width: fit-content;\n"], ["\n  display: flex;\n  padding: 2px 6px 2px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30.059px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  margin-top: 6px;\n  width: fit-content;\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.black10
                })), Ni.ZP.div(C || (C = Ir(["\n  display: flex;\n  width: 284px;\n  padding: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  backdrop-filter: blur(60px);\n  position: absolute;\n  right: 20px;\n  top: 64px;\n  z-index: 7;\n  opacity: 0;\n  pointer-events: none;\n"], ["\n  display: flex;\n  width: 284px;\n  padding: 16px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  gap: 8px;\n  border-radius: 12px;\n  border: 1px solid ", ";\n  background: ", ";\n  color: ", ";\n  backdrop-filter: blur(60px);\n  position: absolute;\n  right: 20px;\n  top: 64px;\n  z-index: 7;\n  opacity: 0;\n  pointer-events: none;\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.black10
                }), (function(n) {
                    return n.theme.colors.white
                })), Ni.ZP.div(R || (R = Ir(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n\n  p {\n    color: ", ";\n    width: 55px;\n    text-align: center;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-self: stretch;\n\n  p {\n    color: ", ";\n    width: 55px;\n    text-align: center;\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                })), Ni.ZP.div(j || (j = Ir(['\n  background-size: cover;\n  margin-right: auto;\n  padding: 3px 10px 3px 24px;\n  margin-top: 5px;\n  font-size: 10px;\n  position: relative;\n  border-radius: 30px;\n  background-position: 5px;\n  background-size: 17px;\n\n  background-image: url("', "social/tiktok.svg\");\n  background-repeat: no-repeat;\n\n  &:before, &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 30px;\n    pointer-events: none;\n  }\n  &:before {\n    z-index: -2;\n    background: linear-gradient(\n      180deg, rgba(0, 242, 234, 0.9) 0.03%,\n      rgba(255, 255, 255, 0.9) 45.27%,\n      rgba(255, 0, 79, 0.9) 88.67%\n    );\n  }\n  &:after {\n    margin: 1px;\n    z-index: -1;\n    background-color: #3e3c3e;\n  }\n"], ['\n  background-size: cover;\n  margin-right: auto;\n  padding: 3px 10px 3px 24px;\n  margin-top: 5px;\n  font-size: 10px;\n  position: relative;\n  border-radius: 30px;\n  background-position: 5px;\n  background-size: 17px;\n\n  background-image: url("', "social/tiktok.svg\");\n  background-repeat: no-repeat;\n\n  &:before, &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    border-radius: 30px;\n    pointer-events: none;\n  }\n  &:before {\n    z-index: -2;\n    background: linear-gradient(\n      180deg, rgba(0, 242, 234, 0.9) 0.03%,\n      rgba(255, 255, 255, 0.9) 45.27%,\n      rgba(255, 0, 79, 0.9) 88.67%\n    );\n  }\n  &:after {\n    margin: 1px;\n    z-index: -1;\n    background-color: #3e3c3e;\n  }\n"])), mi.u1)),
                Tr = function(n) {
                    var e = n.userStore,
                        t = n.onEdit,
                        i = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        r = (0, xi.useRef)(null),
                        o = (0, xi.useRef)(null),
                        a = (0, hi.I0)();
                    (0, xi.useEffect)((function() {
                        r.current && (r.current.addEventListener("mouseenter", (function() {
                            o.current && (o.current.style.opacity = "1")
                        })), r.current.addEventListener("mouseleave", (function() {
                            o.current && (o.current.style.opacity = "0")
                        })))
                    }), [r]);
                    return (0, Li.BX)(Cr, {
                        children: [(0, Li.tZ)(Wi.Z, {
                            user: e,
                            isLoggedIn: i,
                            size: 64,
                            src: null === e || void 0 === e ? void 0 : e.avatar
                        }), (0, Li.BX)(Rr, {
                            children: [(0, Li.BX)(Br, {
                                children: [(0, Li.BX)(jr, {
                                    children: [(0, Li.tZ)(Sr.QV, {
                                        children: (null === e || void 0 === e ? void 0 : e.handle) || (0, tr.t)("guest")
                                    }), ((0, Ai.wA)() || i) && (0, Li.tZ)(Sr.gd, {
                                        children: (null === e || void 0 === e ? void 0 : e.email) || (0, tr.t)("signInToClaimReward")
                                    }), (null === e || void 0 === e ? void 0 : e.tiktokUsername) && (0, Li.tZ)(zr, {
                                        children: null === e || void 0 === e ? void 0 : e.tiktokUsername
                                    })]
                                }), i && (0, Li.tZ)("img", {
                                    alt: "",
                                    src: (0, Pi.j)(Er),
                                    height: 18,
                                    width: 18,
                                    onClick: t
                                })]
                            }), !i && (0, Li.tZ)(Or.z, {
                                size: "small",
                                onClick: function() {
                                    a({
                                        type: er.Z.TOGGLE_LOGIN,
                                        payload: {
                                            showLogin: !0
                                        }
                                    }), a({
                                        type: er.Z.UPDATE_LOGIN_CONTEXT,
                                        payload: {
                                            loginContext: mi.$6.profile
                                        }
                                    })
                                },
                                id: "ng-sign-in",
                                children: (0, tr.t)("signIn")
                            })]
                        })]
                    })
                },
                Dr = {
                    src: "/play/_next/static/media/total-playtime.688cd24a.svg",
                    height: 37,
                    width: 36
                },
                Xr = {
                    src: "/play/_next/static/media/played-games.3c8915d7.svg",
                    height: 37,
                    width: 36
                },
                Lr = {
                    src: "/play/_next/static/media/lock-filled.5a2e104a.svg",
                    height: 16,
                    width: 16
                },
                _r = {
                    src: "/play/_next/static/media/stats-bg.e68cb41d.svg",
                    height: 48,
                    width: 92
                },
                Fr = {
                    src: "/play/_next/static/media/stats-bg-left.290018ff.svg",
                    height: 47,
                    width: 92
                },
                Ur = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Nr = Ni.ZP.div(z || (z = Ur(["\n  width: 100%;\n  border: 1px solid ", ";\n  background: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: right;\n  border-radius: 12px;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"], ["\n  width: 100%;\n  border: 1px solid ", ";\n  background: ", ";\n  background-image: ", ";\n  background-repeat: no-repeat;\n  background-position: right;\n  border-radius: 12px;\n  padding: 8px 10px;\n  display: flex;\n  align-items: center;\n\n  ", "\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    var e, t = n.left;
                    return "url('".concat(di.ZP.prefix).concat((null === (e = t ? Fr : _r) || void 0 === e ? void 0 : e.src) || "", "')")
                }), (function(n) {
                    return n.left && (0, Ni.iv)(B || (B = Ur(["\n    background-position: left;\n    flex-flow: row-reverse;\n\n    div {\n      align-items: end;\n    }\n  "], ["\n    background-position: left;\n    flex-flow: row-reverse;\n\n    div {\n      align-items: end;\n    }\n  "])))
                })),
                Gr = Ni.ZP.div(T || (T = Ur(["\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  gap: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: -webkit-fill-available;\n  gap: 4px;\n"]))),
                Mr = Ni.ZP.div(D || (D = Ur(["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  border-radius: 12px;\n  width: 100%;\n  height: 50px;\n"], ["\n  display: flex;\n  gap: 8px;\n  margin-top: 4px;\n  border-radius: 12px;\n  width: 100%;\n  height: 50px;\n"]))),
                Vr = Ni.ZP.div(X || (X = Ur(["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 12px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-items: flex-start;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 12px;\n"]))),
                Yr = Ni.ZP.div(L || (L = Ur(["\n  display: flex;\n  height: 34px;\n  padding: 0px 16px 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 10px;\n  border: 1px solid #67C3BB;\n  background: rgba(103, 195, 187, 0.20);\n  color: ", ";\n"], ["\n  display: flex;\n  height: 34px;\n  padding: 0px 16px 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 10px;\n  border: 1px solid #67C3BB;\n  background: rgba(103, 195, 187, 0.20);\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.success
                })),
                Hr = function() {
                    var n = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        e = (0, hi.v9)((function(n) {
                            return n.user.totalPlaytime
                        })),
                        t = (0, hi.v9)((function(n) {
                            return n.user.totalPlayedApps
                        })),
                        i = (0, xi.useState)("".concat(e)),
                        r = i[0],
                        o = i[1],
                        a = (0, xi.useState)("".concat(t)),
                        l = a[0],
                        c = a[1];
                    return (0, xi.useEffect)((function() {
                        t < 10 && c("0".concat(t));
                        var n = e / 60,
                            i = n / 60;
                        i = parseInt("".concat(i), 10), n = parseInt("".concat(n % 60), 10), o("".concat(i > 0 ? "".concat(i, " hr ") : "").concat(n % 60, " min"))
                    }), []), (0, xi.useEffect)((function() {
                        var n = e / 60,
                            t = n / 60;
                        t = parseInt("".concat(t), 10), n = parseInt("".concat(n % 60), 10), o("".concat(t > 0 ? "".concat(t, " hr ") : "").concat(n % 60, " min"))
                    }), [e]), (0, Li.BX)(Vr, {
                        children: [(0, Li.BX)(Mr, {
                            children: [(0, Li.BX)(Nr, {
                                children: [(0, Li.BX)(Gr, {
                                    children: [(0, Li.tZ)(Sr.tZ, {
                                        style: {
                                            color: "rgba(255, 255, 255, 0.7)",
                                            letterSpacing: "0.2px"
                                        },
                                        children: (0, tr.t)("gamesPlayed")
                                    }), n && (0, Li.tZ)(Sr.IS, {
                                        children: l
                                    }), !n && (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("lock"),
                                        src: (0, Pi.j)(Lr),
                                        width: 16,
                                        height: 16
                                    })]
                                }), (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("games"),
                                    src: (0, Pi.j)(Xr),
                                    width: 36,
                                    height: 36
                                })]
                            }), (0, Li.BX)(Nr, {
                                children: [(0, Li.BX)(Gr, {
                                    children: [(0, Li.tZ)(Sr.tZ, {
                                        style: {
                                            color: "rgba(255, 255, 255, 0.7)",
                                            letterSpacing: "0.2px"
                                        },
                                        children: (0, tr.t)("totalPlaytime")
                                    }), n && (0, Li.tZ)(Sr.IS, {
                                        children: r
                                    }), !n && (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("lock"),
                                        src: (0, Pi.j)(Lr),
                                        width: 16,
                                        height: 16
                                    })]
                                }), (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("time"),
                                    src: (0, Pi.j)(Dr),
                                    width: 36,
                                    height: 36
                                })]
                            })]
                        }), !n && (0, Li.tZ)(Yr, {
                            children: (0, Li.tZ)(Sr.gd, {
                                children: (0, tr.t)("loginForUserMetrics")
                            })
                        })]
                    })
                },
                Qr = t(94391),
                qr = {
                    src: "/play/_next/static/media/youtube.9b67e93b.svg",
                    height: 16,
                    width: 16
                },
                Jr = {
                    src: "/play/_next/static/media/tiktok.4866f7c7.svg",
                    height: 16,
                    width: 16
                },
                Wr = {
                    src: "/play/_next/static/media/logout.bcc56170.svg",
                    height: 16,
                    width: 17
                },
                Kr = t(78943),
                $r = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                no = Ni.ZP.div(_ || (_ = $r(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 12px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  flex: 1;\n  justify-content: flex-end;\n  align-items: center;\n  padding-top: 12px;\n"]))),
                eo = Ni.ZP.div(F || (F = $r(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: align-content: flex-start;;\n  gap: 8px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  color: ", ";\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-content: align-content: flex-start;;\n  gap: 8px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                to = Ni.ZP.div(U || (U = $r(["\n  align-items: center;\n  align-content: flex-start;\n  align-self: baseline;\n  display: flex;\n  gap: 4px;\n\n  p {\n    cursor: pointer;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"], ["\n  align-items: center;\n  align-content: flex-start;\n  align-self: baseline;\n  display: flex;\n  gap: 4px;\n\n  p {\n    cursor: pointer;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                io = Ni.ZP.div(N || (N = $r(["\n  height: 3px;\n  width: 3px;\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n"], ["\n  height: 3px;\n  width: 3px;\n  background: ", ";\n  border-radius: 50%;\n  display: inline-block;\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                ro = Ni.ZP.div(G || (G = $r(["\n  display: flex;\n  gap: 12px;\n"], ["\n  display: flex;\n  gap: 12px;\n"]))),
                oo = Ni.ZP.a(M || (M = $r(["\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 6px;\n  border: 1px solid ", ";\n\n  &:before {\n    top: unset !important;\n    transform: translateY(calc(-100% - 8px)) !important;\n  }\n\n  &.discord {\n    ", "\n  }\n\n  &.tiktok {\n    ", "\n  }\n\n  &.yt {\n    ", "\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  border-radius: 6px;\n  border: 1px solid ", ";\n\n  &:before {\n    top: unset !important;\n    transform: translateY(calc(-100% - 8px)) !important;\n  }\n\n  &.discord {\n    ", "\n  }\n\n  &.tiktok {\n    ", "\n  }\n\n  &.yt {\n    ", "\n  }\n\n  img {\n    width: 16px;\n    height: 16px;\n  }\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white80
                }), (0, lr.gB)(Oi.Z.t("discord")), (0, lr.gB)(Oi.Z.t("tiktok")), (0, lr.gB)(Oi.Z.t("youtube")), (function(n) {
                    return n.theme.colors.white
                })),
                ao = Ni.ZP.div(V || (V = $r(["\n  height: 1px;\n  width: 100%;\n  background: ", ";\n  display: inline-block;\n"], ["\n  height: 1px;\n  width: 100%;\n  background: ", ";\n  display: inline-block;\n"])), (function(n) {
                    return n.theme.colors.white10
                })),
                lo = Ni.ZP.div(Y || (Y = $r(["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-top: 4px;\n"], ["\n  display: flex;\n  align-items: center;\n  align-content: center;\n  align-self: stretch;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-top: 4px;\n"]))),
                co = function() {
                    var n = (0, hi.v9)((function(n) {
                        return n.auth.isLoggedIn
                    }));
                    return (0, Li.BX)(no, {
                        children: [(0, Li.BX)(eo, {
                            children: [(0, Li.BX)(to, {
                                children: [(0, Li.tZ)(Sr.gd, {
                                    onClick: function() {
                                        window.location.href = (0, bi.wh)("https://now.gg")
                                    },
                                    children: (0, tr.t)("allGames")
                                }), (0, Li.tZ)(io, {}), (0, Li.tZ)(Sr.gd, {
                                    onClick: function() {
                                        window.location.href = (0, bi.wh)(Kr.j7)
                                    },
                                    children: (0, tr.t)("developers")
                                })]
                            }), (0, Li.BX)(to, {
                                children: [(0, Li.tZ)(Sr.gd, {
                                    onClick: function() {
                                        window.location.href = (0, bi.wh)("https://now.gg/aboutus.html")
                                    },
                                    children: (0, tr.t)("aboutUs")
                                }), (0, Li.tZ)(io, {}), (0, Li.tZ)(Sr.gd, {
                                    onClick: function() {
                                        window.location.href = (0, bi.wh)("https://now.gg/terms-and-privacy.html?utm_source=dev.now.gg&utm_medium=dev-site&utm_campaign=dev-home#terms")
                                    },
                                    children: (0, tr.t)("termAndConditions")
                                })]
                            })]
                        }), (0, Li.tZ)(ao, {}), (0, Li.BX)(lo, {
                            children: [(0, Li.BX)(ro, {
                                children: [(0, Li.tZ)(oo, {
                                    href: mi.ul,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "discord",
                                    id: "ng-discord-btn",
                                    children: (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("discord"),
                                        src: (0, Pi.j)(Qr.Z),
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, Li.tZ)(oo, {
                                    href: "https://www.tiktok.com/@nowgg_games",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "tiktok",
                                    id: "ng-tiktok-btn",
                                    children: (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("tiktok"),
                                        src: (0, Pi.j)(Jr),
                                        width: 16,
                                        height: 16
                                    })
                                }), (0, Li.tZ)(oo, {
                                    href: "https://www.youtube.com/channel/UCJ56IoBJr4vtNrtTw0CEpYg",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "yt",
                                    id: "ng-youtube-btn",
                                    children: (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("youtube"),
                                        src: (0, Pi.j)(qr),
                                        width: 16,
                                        height: 16
                                    })
                                })]
                            }), n && (0, Li.BX)(Or.z, {
                                id: "ng-logout",
                                variant: "defaultOutline",
                                style: {
                                    width: "124px",
                                    alignSelf: "center",
                                    gap: "4px"
                                },
                                onClick: function() {
                                    var n, e;
                                    (0, si.L9)("LogoutClicked"), (0, di.u_)(), (0, di.Hh)(), (0, Ki.kS)({
                                        reason: "ManualLogout",
                                        url: null === (e = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.href) || void 0 === e ? void 0 : e.split("?")[0]
                                    })
                                },
                                children: [(0, tr.t)("logout"), (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("logout"),
                                    src: (0, Pi.j)(Wr),
                                    width: 16,
                                    height: 16
                                })]
                            })]
                        })]
                    })
                },
                po = t(79354),
                so = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                uo = Ni.ZP.section(H || (H = so(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  max-height: 100%;\n"]))),
                fo = Ni.ZP.div(Q || (Q = so(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(90deg);\n    cursor: pointer;\n    scale: 1.5\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(90deg);\n    cursor: pointer;\n    scale: 1.5\n  }\n"]))),
                go = Ni.ZP.div(q || (q = so(["\n  display: flex;\n  gap: 11px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  overflow: auto;\n"], ["\n  display: flex;\n  gap: 11px;\n  align-self: stretch;\n  flex-wrap: wrap;\n  overflow: auto;\n"]))),
                ho = function(n) {
                    var e = n.onBack,
                        t = n.apps,
                        i = void 0 === t ? [] : t,
                        r = n.headerText,
                        o = void 0 === r ? "recentlyPlayed" : r,
                        a = (0, hi.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        l = (0, hi.I0)();
                    return (0, Li.BX)(uo, {
                        children: [(0, Li.BX)(fo, {
                            title: (0, tr.t)("back"),
                            onClick: e,
                            children: [(0, Li.tZ)(po.pL, {}), (0, Li.tZ)(Sr.QV, {
                                children: (0, tr.t)(o)
                            })]
                        }), (0, Li.tZ)(go, {
                            children: i.map((function(n) {
                                return (0, Li.tZ)(hr, {
                                    src: n.icon,
                                    onClick: function() {
                                        var e;
                                        e = n.playUrl, a ? l({
                                            type: Si.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                showRecordingModalBeforeExit: !0,
                                                showRecordingModalBeforeExitSource: "gameTile",
                                                urlToOpenAfterRecordModalExit: e
                                            }
                                        }) : window.location.href = (0, bi.ZP)(e)
                                    },
                                    title: n.name
                                })
                            }))
                        })]
                    })
                },
                xo = {
                    src: "/play/_next/static/media/lock.3d40d416.svg",
                    height: 24,
                    width: 24
                },
                mo = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                bo = Ni.ZP.div(J || (J = mo(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),
                wo = Ni.ZP.div(W || (W = mo(["\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(-90deg);\n    margin: 0px;\n    transition: all 300ms ease-out;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:hover {\n    p {\n      color: ", ";\n    }\n    svg {\n      margin-left: 4px;\n    }\n  }\n"], ["\n  display: flex;\n  gap: 8px;\n  cursor: pointer;\n\n  svg {\n    transform: rotate(-90deg);\n    margin: 0px;\n    transition: all 300ms ease-out;\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &.disabled {\n    pointer-events: none;\n  }\n\n  &:hover {\n    p {\n      color: ", ";\n    }\n    svg {\n      margin-left: 4px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white90
                }), (function(n) {
                    return n.theme.colors.white
                })),
                vo = Ni.ZP.div(K || (K = mo(["\n  gap: 12px;\n  display: flex;\n"], ["\n  gap: 12px;\n  display: flex;\n"]))),
                yo = Ni.ZP.div($ || ($ = mo(["\n  display: flex;\n  height: 64px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 8px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25'\n    xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8'\n    stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' stroke-dasharray='8.1' stroke-dashoffset='6'\n    stroke-linecap='round'/%3e%3c/svg%3e\");\n  border-radius: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  height: 64px;\n  padding: 0px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  align-self: stretch;\n  border-radius: 8px;\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25'\n    xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8'\n    stroke='rgba(255, 255, 255, 0.1)' stroke-width='2' stroke-dasharray='8.1' stroke-dashoffset='6'\n    stroke-linecap='round'/%3e%3c/svg%3e\");\n  border-radius: 8px;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                Zo = function(n) {
                    var e = n.onOpen,
                        t = n.apps,
                        i = void 0 === t ? [] : t,
                        r = n.headerImg,
                        o = n.headerText,
                        a = void 0 === o ? "recentlyPlayed" : o,
                        l = n.noAppText,
                        c = void 0 === l ? "noAppRecents" : l,
                        d = n.noAppsDisable,
                        p = void 0 === d ? "false" : d,
                        s = (0, hi.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        u = (0, hi.I0)();
                    return (0, Li.BX)(bo, {
                        children: [(0, Li.BX)(wo, {
                            onClick: e,
                            className: p && i.length < 1 ? "disabled" : "",
                            children: [(0, Li.tZ)("img", {
                                alt: "",
                                src: (0, Pi.j)(r),
                                width: 16,
                                height: 16
                            }), (0, Li.tZ)(Sr.IS, {
                                children: (0, tr.t)(a)
                            }), (0, Li.tZ)(po.pL, {
                                color: "ascent"
                            })]
                        }), i.length > 0 && (0, Li.tZ)(vo, {
                            children: i.slice(0, 4).map((function(n) {
                                return (0, Li.tZ)(hr, {
                                    src: n.icon,
                                    onClick: function() {
                                        var e, t;
                                        e = n.playUrl, t = n.packageName, (0, si.L9)(mi.S5, {
                                            element: "ProfileRecentlyPlayed",
                                            action: "Clicked",
                                            packageName: t
                                        }, (function() {
                                            s ? u({
                                                type: Si.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    showRecordingModalBeforeExit: !0,
                                                    showRecordingModalBeforeExitSource: "gameTile",
                                                    urlToOpenAfterRecordModalExit: e
                                                }
                                            }) : window.location.href = (0, bi.ZP)(e, "ProfileRecentlyPlayed")
                                        }))
                                    },
                                    title: n.name
                                })
                            }))
                        }), 0 === i.length && (0, Li.BX)(yo, {
                            children: [(0, Li.tZ)("img", {
                                alt: "",
                                src: (0, Pi.j)(xo),
                                width: 24,
                                height: 24
                            }), (0, Li.tZ)(Sr.gd, {
                                children: (0, tr.t)(c)
                            })]
                        })]
                    })
                },
                Po = {
                    src: "/play/_next/static/media/shuffle.b7667e55.svg",
                    height: 13,
                    width: 12
                },
                ko = t(93772),
                Ao = t(41609),
                So = t.n(Ao),
                Eo = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Oo = Ni.ZP.div(nn || (nn = Eo(["\n  display: flex;\n  width: 340px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  background: rgba(255, 255, 255, 0.20);\n  backdrop-filter: blur(60px);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  .profile-edit {\n    margin: 0;\n    width: 100%;\n\n    &:before {\n      content: '@';\n      position: absolute;\n      font-size: 16px;\n      font-style: normal;\n      left: 9px;\n      top: 2px;\n      color: #fff;\n    }\n    label {\n      display: none;\n    }\n    input {\n      font-size: 14px;\n      line-height: 18px;\n      padding: 6px 12px 6px 28px;\n      &:not(:focus) {\n        border-color: ", ";\n      }\n    }\n  }\n\n  i {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"], ["\n  display: flex;\n  width: 340px;\n  padding: 24px;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 16px;\n  border-radius: 12px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  background: rgba(255, 255, 255, 0.20);\n  backdrop-filter: blur(60px);\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  .profile-edit {\n    margin: 0;\n    width: 100%;\n\n    &:before {\n      content: '@';\n      position: absolute;\n      font-size: 16px;\n      font-style: normal;\n      left: 9px;\n      top: 2px;\n      color: #fff;\n    }\n    label {\n      display: none;\n    }\n    input {\n      font-size: 14px;\n      line-height: 18px;\n      padding: 6px 12px 6px 28px;\n      &:not(:focus) {\n        border-color: ", ";\n      }\n    }\n  }\n\n  i {\n    position: absolute;\n    right: 20px;\n    top: 20px;\n\n    &:hover {\n      cursor: pointer;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                Io = Ni.ZP.div(en || (en = Eo(["\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  align-self: stretch;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  padding: 12px 16px;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  align-self: stretch;\n  border-radius: 8px;\n"]))),
                Co = (Ni.ZP.div(tn || (tn = Eo(["\n  display: flex;\n  flex-direction: column;\n  align-items: normal;\n  gap: 8px;\n  flex: 1 0 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: normal;\n  gap: 8px;\n  flex: 1 0 0;\n"]))), Ni.ZP.div(rn || (rn = Eo(["\n  display: flex;\n  padding-top: 4px;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n\n  button {\n    width: 50%;\n  }\n"], ["\n  display: flex;\n  padding-top: 4px;\n  align-items: flex-start;\n  gap: 16px;\n  align-self: stretch;\n\n  button {\n    width: 50%;\n  }\n"])))),
                Ro = Ni.ZP.div(on || (on = Eo(["\n  display: flex;\n  width: auto;\n  height: auto;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  width: auto;\n  height: auto;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"]))),
                jo = Ni.ZP.div(an || (an = Eo(["\n  display: flex;\n  padding: 6px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border-radius: 50%;\n  background: rgba(255, 66, 165, 1);\n  z-index: 1;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"], ["\n  display: flex;\n  padding: 6px;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  border-radius: 50%;\n  background: rgba(255, 66, 165, 1);\n  z-index: 1;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"])), (0, lr.gB)(Oi.Z.t("newAvatar"))),
                Bo = (Ni.ZP.div(ln || (ln = Eo(["\n  width: 124px;\n  align-self: flex-start;\n  margin-top: 8px;\n  gap: 4px;\n  background: transparent;\n  display: -webkit-box;\n  cursor: pointer;\n"], ["\n  width: 124px;\n  align-self: flex-start;\n  margin-top: 8px;\n  gap: 4px;\n  background: transparent;\n  display: -webkit-box;\n  cursor: pointer;\n"]))), Ni.ZP.div(cn || (cn = Eo(["\n  display: flex;\n  width: 292px;\n  height: 32px;\n  padding: 4px 0px 4px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.10);\n"], ["\n  display: flex;\n  width: 292px;\n  height: 32px;\n  padding: 4px 0px 4px 12px;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 8px;\n  background: rgba(255, 255, 255, 0.10);\n"])))),
                zo = Ni.ZP.div(dn || (dn = Eo(["\n  background: rgba(255, 66, 165, 1);\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    top: unset !important;\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"], ["\n  background: rgba(255, 66, 165, 1);\n  border-radius: 6px;\n  display: flex;\n  padding: 8px;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n\n  &:hover {\n    background: rgba(255, 51, 146, 1);\n  }\n\n  ", "\n\n  &:before {\n    top: unset !important;\n    transform: translateX(calc(75% - 2px)) !important;\n  }\n"])), (0, lr.gB)(Oi.Z.t("newUsername"))),
                To = Ni.ZP.label(pn || (pn = Eo(["\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0.15em;\n  text-align: left;\n  margin-bottom: -12px;\n  text-transform: uppercase;\n"], ["\n  font-size: 10px;\n  font-weight: 600;\n  line-height: 15px;\n  letter-spacing: 0.15em;\n  text-align: left;\n  margin-bottom: -12px;\n  text-transform: uppercase;\n"]))),
                Do = function() {
                    return (Do = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                Xo = function(n, e, t, i) {
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
                Lo = function(n, e) {
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
                _o = function(n) {
                    var e = n.onClose,
                        t = n.onUpdate,
                        i = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        r = (0, xi.useState)(null),
                        o = r[0],
                        a = r[1],
                        l = (0, xi.useState)(""),
                        c = l[0],
                        d = l[1],
                        p = (0, xi.useState)(""),
                        s = p[0],
                        u = p[1],
                        f = (0, xi.useState)(""),
                        g = f[0],
                        h = f[1],
                        x = (0, xi.useState)(!1),
                        m = x[0],
                        b = x[1],
                        w = (0, xi.useState)(""),
                        v = w[0],
                        y = w[1],
                        Z = (0, xi.useState)([]),
                        P = Z[0],
                        k = Z[1],
                        A = (0, xi.useState)([]),
                        S = A[0],
                        E = A[1],
                        O = (0, xi.useRef)(null);
                    (0, xi.useEffect)((function() {
                        var n = i ? (0, Ki.et)() : null;
                        n && (a(n), d(n.handle), h(n.nickname), y(n.avatar), u(n.tiktokUsername)), Xo(void 0, void 0, void 0, (function() {
                            var n, e;
                            return Lo(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ji.Z.getHandleSuggestions({}, {})];
                                    case 1:
                                        return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                            return n.handle
                                        })), E(n.avatarSuggestions.slice(1, n.avatarSuggestions.length)), k(e)), [2]
                                }
                            }))
                        }))
                    }), []);
                    return (0, Li.BX)(Oo, {
                        children: [(0, Li.tZ)(Sr.Bb, {
                            style: {
                                fontSize: "20px"
                            },
                            children: (0, tr.t)("yourProfile")
                        }), (0, Li.tZ)(Di.Z, {
                            size: 24,
                            name: "cross-thin",
                            onClick: e,
                            title: (0, tr.t)("close")
                        }), (0, Li.tZ)(Io, {
                            children: (0, Li.BX)(Ro, {
                                children: [(0, Li.tZ)("img", {
                                    alt: (0, tr.t)("profilePic"),
                                    src: v,
                                    width: 80,
                                    height: 80,
                                    ref: O
                                }), (0, Li.tZ)(jo, {
                                    onClick: function() {
                                        return Xo(void 0, void 0, void 0, (function() {
                                            var n, e;
                                            return Lo(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return S.length > 0 ? (y(S[0]), E(S.slice(1, S.length)), [2]) : [4, ji.Z.getHandleSuggestions({}, {})];
                                                    case 1:
                                                        return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                                            return n.handle
                                                        })), y(n.avatarSuggestions[0]), E(n.avatarSuggestions.slice(1, n.avatarSuggestions.length)), k(e)), [2]
                                                }
                                            }))
                                        }))
                                    },
                                    children: (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("new"),
                                        src: (0, Pi.j)(Po),
                                        width: 12,
                                        height: 12
                                    })
                                })]
                            })
                        }), (0, Li.tZ)(To, {
                            children: (0, tr.t)("username")
                        }), (0, Li.BX)(Bo, {
                            children: [(0, Li.tZ)(Sr.gd, {
                                children: c
                            }), (0, Li.tZ)(zo, {
                                onClick: function() {
                                    return Xo(void 0, void 0, void 0, (function() {
                                        var n, e;
                                        return Lo(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return P.length > 0 ? (d(P[0].handle), h(P[0].nickname), k(P.slice(1, P.length)), [2]) : [4, ji.Z.getHandleSuggestions({}, {})];
                                                case 1:
                                                    return (n = t.sent()).success && (e = n.suggestions.filter((function(n) {
                                                        return n.handle
                                                    })), d(e[0].handle), h(e[0].nickname), k(e.slice(1, e.length)), E(n.avatarSuggestions)), [2]
                                            }
                                        }))
                                    }))
                                },
                                children: (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("new"),
                                    src: (0, Pi.j)(Po),
                                    width: 16,
                                    height: 16
                                })
                            })]
                        }), (0, Li.tZ)(To, {
                            children: (0, tr.t)("tiktokAccount")
                        }), (0, Li.tZ)(ko.II, {
                            title: "",
                            value: s,
                            wrapperClass: "profile-edit",
                            onUpdate: function(n) {
                                return u(n)
                            },
                            placeholder: (0, tr.t)("tiktokPlaceholder")
                        }), (0, Li.BX)(Co, {
                            children: [(0, Li.tZ)(Or.z, {
                                variant: "tertiary",
                                size: "default",
                                text: (0, tr.t)("cancel"),
                                style: {
                                    margin: 0
                                },
                                disabled: m,
                                onClick: function() {
                                    e()
                                }
                            }), (0, Li.tZ)(Or.z, {
                                variant: "primary",
                                size: "default",
                                text: (0, tr.t)("save"),
                                style: {
                                    margin: 0
                                },
                                disabled: c === (null === o || void 0 === o ? void 0 : o.handle) && v === (null === o || void 0 === o ? void 0 : o.avatar) && s === o.tiktokUsername || m,
                                onClick: function() {
                                    Xo(void 0, void 0, void 0, (function() {
                                        var n, r;
                                        return Lo(this, (function(l) {
                                            switch (l.label) {
                                                case 0:
                                                    return b(!0), n = s.trim(), r = Do(Do(Do({}, c !== (null === o || void 0 === o ? void 0 : o.handle) && {
                                                        handle: c,
                                                        nickname: g
                                                    }), v !== (null === o || void 0 === o ? void 0 : o.avatar) && {
                                                        avatar: v
                                                    }), n && n !== (null === o || void 0 === o ? void 0 : o.tiktokUsername) && {
                                                        tiktokUsername: n
                                                    }), So()(r) ? (e(), [2]) : [4, ji.Z.updateUserProfile({}, r)];
                                                case 1:
                                                    return l.sent(), ji.Z.getUserProfile({}, {}).then((function(n) {
                                                        (0, Ki.Lj)(n), t();
                                                        var r = i ? (0, Ki.et)() : null;
                                                        r && (a(r), d(r.handle), h(r.nickname), y(r.avatar)), e()
                                                    })), [2]
                                            }
                                        }))
                                    }))
                                }
                            })]
                        })]
                    })
                },
                Fo = t(6413),
                Uo = t(98424),
                No = t(59532),
                Go = {
                    src: "/play/_next/static/media/robux-jackpot-title.fa9b37cd.svg",
                    height: 72,
                    width: 192
                },
                Mo = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Vo = Ni.ZP.section(sn || (sn = Mo(["\n    display: flex;\n    flex-direction: column;\n    gap: ", ";\n    padding: 40px 0px 20px 0px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: ", ";\n    padding: 40px 0px 20px 0px;\n"])), (function(n) {
                    return n.showRewardPopup ? "6px" : "24px"
                })),
                Yo = Ni.ZP.div(un || (un = Mo(["\n    display: flex;\n    justify-content: center;\n"], ["\n    display: flex;\n    justify-content: center;\n"]))),
                Ho = Ni.ZP.div(fn || (fn = Mo(["\n    width: 191px;\n    height: 72px;\n"], ["\n    width: 191px;\n    height: 72px;\n"]))),
                Qo = Ni.ZP.div(gn || (gn = Mo(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:8px;\n"], ["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap:8px;\n"]))),
                qo = Ni.ZP.div(hn || (hn = Mo(["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 24px;\n    align-items: center;\n    width: 100%;\n"]))),
                Jo = Ni.ZP.section(xn || (xn = Mo(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n"]))),
                Wo = ((0, Ni.ZP)(Sr.lU)(mn || (mn = Mo(["\n    color: #FF0096;\n"], ["\n    color: #FF0096;\n"]))), (0, Ni.ZP)(Sr.TZ)(bn || (bn = Mo(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white80
                }))),
                Ko = Ni.ZP.p(wn || (wn = Mo(["\n    background: linear-gradient(270deg, #A277FF 0%, #00D8FF 99.48%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    opacity:0.9;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.6px;\n    text-transform: uppercase;\n    margin: 0;\n"], ["\n    background: linear-gradient(270deg, #A277FF 0%, #00D8FF 99.48%);\n    background-clip: text;\n    -webkit-background-clip: text;\n    color: transparent;\n    opacity:0.9;\n    font-size: 10px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.6px;\n    text-transform: uppercase;\n    margin: 0;\n"]))),
                $o = {
                    src: "/play/_next/static/media/striked-robux.2407cfd8.svg",
                    height: 12,
                    width: 23
                },
                na = t(30150),
                ea = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ta = Ni.ZP.div(vn || (vn = ea(["\n    display: flex;\n    flex-direction:column;\n    gap: 24px;\n    align-items:center;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-direction:column;\n    gap: 24px;\n    align-items:center;\n    width: 100%;\n"]))),
                ia = Ni.ZP.div(yn || (yn = ea(["\n    display: flex;\n    gap: 8px;\n    margin-bottom: 4px;\n"], ["\n    display: flex;\n    gap: 8px;\n    margin-bottom: 4px;\n"]))),
                ra = Ni.ZP.div(Zn || (Zn = ea(["\n    display: flex;\n    gap: 16px;\n    width: 100%;\n"], ["\n    display: flex;\n    gap: 16px;\n    width: 100%;\n"]))),
                oa = Ni.ZP.div(Pn || (Pn = ea(["\n    position: relative;\n    width: calc((100% - 24px) / 3);\n    aspect-ratio: 1;\n"], ["\n    position: relative;\n    width: calc((100% - 24px) / 3);\n    aspect-ratio: 1;\n"]))),
                aa = Ni.ZP.div(kn || (kn = ea(["\n    top: -420px;\n    width: 100%;\n    transition: top ease-in-out 2s;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    position:absolute;\n"], ["\n    top: -420px;\n    width: 100%;\n    transition: top ease-in-out 2s;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: 8px;\n    position:absolute;\n"]))),
                la = Ni.ZP.div(An || (An = ea(["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    border: 1px solid  rgba(255, 255, 255, 0.20);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.24) inset, 0px -24px 24px 0px rgba(0, 0, 0, 0.24) inset;\n"], ["\n    position: absolute;\n    overflow: hidden;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    border-radius: 8px;\n    border: 1px solid  rgba(255, 255, 255, 0.20);\n    background: rgba(0, 0, 0, 0.20);\n    box-shadow: 0px 24px 24px 0px rgba(0, 0, 0, 0.24) inset, 0px -24px 24px 0px rgba(0, 0, 0, 0.24) inset;\n"]))),
                ca = Ni.ZP.img(Sn || (Sn = ea(["\n    height: 64px;\n    width: 64px;\n"], ["\n    height: 64px;\n    width: 64px;\n"]))),
                da = (0, Ni.ZP)(na.Yd)(En || (En = ea(["\n    gap: 4px;\n    padding: 7px 16px;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n    }\n\n"], ["\n    gap: 4px;\n    padding: 7px 16px;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n    }\n\n"])), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                pa = (0, Ni.ZP)(na.Yd)(On || (On = ea(["\n    color: #FF3392;\n    padding: 7px 16px;\n    &:disabled {\n        backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n}\n"], ["\n    color: #FF3392;\n    padding: 7px 16px;\n    &:disabled {\n        backdrop-filter: none;\n        box-shadow: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n}\n"])), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                sa = Ni.ZP.div(In || (In = ea(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n"]))),
                ua = ta,
                fa = {
                    src: "/play/_next/static/media/gambling-chip.30064988.svg",
                    height: 58,
                    width: 52
                },
                ga = {
                    src: "/play/_next/static/media/gambling-coin.b07c4539.svg",
                    height: 58,
                    width: 54
                },
                ha = {
                    src: "/play/_next/static/media/game-bag.c1e4342d.svg",
                    height: 58,
                    width: 54
                },
                xa = {
                    src: "/play/_next/static/media/gem1.6888250b.svg",
                    height: 50,
                    width: 58
                },
                ma = {
                    src: "/play/_next/static/media/gem2.40ab99bf.svg",
                    height: 58,
                    width: 52
                },
                ba = {
                    src: "/play/_next/static/media/gift-box.9e5a21a5.svg",
                    height: 64,
                    width: 64
                },
                wa = {
                    src: "/play/_next/static/media/heart.5499afe3.svg",
                    height: 64,
                    width: 64
                },
                va = {
                    src: "/play/_next/static/media/star.7cc20cdf.svg",
                    height: 64,
                    width: 64
                },
                ya = {
                    src: "/play/_next/static/media/gold-coin.4f4c0791.svg",
                    height: 64,
                    width: 64
                },
                Za = function() {
                    return (Za = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                Pa = function(n, e, t, i) {
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
                ka = function(n, e) {
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
                Aa = function() {
                    var n = (0, hi.I0)(),
                        e = (0, wi.$)().t,
                        t = sessionStorage.getItem("showFreeSpinBtn") || "",
                        i = [(0, xi.useRef)(null), (0, xi.useRef)(null), (0, xi.useRef)(null)],
                        r = [fa, ga, ha, xa, ma, ba, wa, ya, va, fa, ga, ha, xa, ma, ba, wa, ya, va],
                        o = di.ZP.appInfo.rwdDailySpinLimit,
                        a = (0, hi.v9)((function(n) {
                            return n.robuxRewards.dailySpinCount
                        })),
                        l = (0, xi.useState)(!1),
                        c = l[0],
                        d = l[1],
                        p = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsEarned
                        })),
                        s = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        u = function(n, e) {
                            n && (n.style.top = "".concat(e, "px"))
                        },
                        f = function(e) {
                            return Pa(void 0, void 0, void 0, (function() {
                                var t, o, a;
                                return ka(this, (function(l) {
                                    switch (l.label) {
                                        case 0:
                                            return s ? (d(!0), i.forEach((function(n) {
                                                n && n.current && u(n.current, 100)
                                            })), [4, ji.Z.getJackpotReward({}, Za(Za({}, (0, Ai.h9)()), {
                                                feSessionTags: (0, Ai.pC)(),
                                                robuxCreditsUsed: "freeSpin" === e ? 0 : di.ZP.appInfo.rwdRobuxCreditsRequiredForSpin
                                            }))]) : (n({
                                                type: er.Z.TOGGLE_LOGIN,
                                                payload: {
                                                    showLogin: !0
                                                }
                                            }), [2]);
                                        case 1:
                                            return (t = l.sent()).status === Bi.YR.Success ? ((0, si.L9)("RobuxJackpotSpinClicked", {
                                                robuxUsed: "freeSpin" === e ? 0 : di.ZP.appInfo.rwdRobuxCreditsRequiredForSpin,
                                                robuxRewarded: t.robuxCreditsRewarded
                                            }), n({
                                                type: Fo.Z.ROBUX_REWARD_CREDIT,
                                                payload: {
                                                    robuxCreditsEarned: t.totalRobuxCreditsEarned,
                                                    totalRobuxCreditsEarnedByAllUsers: t.totalRobuxCreditsEarnedByAllUsers
                                                }
                                            }), n({
                                                type: Fo.Z.ROBUX_REWARD_DETAILS,
                                                payload: {
                                                    dailySpinCount: t.dailySpinCount
                                                }
                                            }), 800 === (o = t.robuxCreditsRewarded) ? a = 7 : 2 === o ? a = 1 : 10 === o ? a = 2 : 5 === o && (a = 3), i.forEach((function(n) {
                                                n && n.current && function(n, e) {
                                                    if (n) {
                                                        var t = n.children[e || Math.floor(Math.random() * r.length)];
                                                        u(n, 14 - t.offsetTop)
                                                    }
                                                }(n.current, a)
                                            })), setTimeout((function() {
                                                n({
                                                    type: Fo.Z.JACKPOT_FLOW,
                                                    payload: {
                                                        robuxCreditsRewarded: o,
                                                        showRewardPopup: !0
                                                    }
                                                }), d(!1), "freeSpin" === e && sessionStorage.removeItem("showFreeSpinBtn")
                                            }), 4e3)) : (d(!1), (0, si.L9)("RobuxJackpotSpinClicked", {
                                                robuxUsed: di.ZP.appInfo.rwdRobuxCreditsRequiredForSpin
                                            })), [2]
                                    }
                                }))
                            }))
                        };
                    return (0, Li.BX)(ua, {
                        children: [(0, Li.BX)(ra, {
                            children: [(0, Li.tZ)(oa, {
                                children: (0, Li.tZ)(la, {
                                    children: (0, Li.tZ)(aa, {
                                        ref: i[0],
                                        children: r.map((function(n) {
                                            return (0, Li.tZ)(ca, {
                                                src: (0, Pi.j)(n),
                                                alt: ""
                                            })
                                        }))
                                    })
                                })
                            }), (0, Li.tZ)(oa, {
                                children: (0, Li.tZ)(la, {
                                    children: (0, Li.tZ)(aa, {
                                        ref: i[1],
                                        children: r.map((function(n) {
                                            return (0, Li.tZ)(ca, {
                                                src: (0, Pi.j)(n),
                                                alt: ""
                                            })
                                        }))
                                    })
                                })
                            }), (0, Li.tZ)(oa, {
                                children: (0, Li.tZ)(la, {
                                    children: (0, Li.tZ)(aa, {
                                        ref: i[2],
                                        children: r.map((function(n) {
                                            return (0, Li.tZ)(ca, {
                                                src: (0, Pi.j)(n),
                                                alt: ""
                                            })
                                        }))
                                    })
                                })
                            })]
                        }), (0, Li.BX)(sa, {
                            children: [(0, Li.BX)(ia, {
                                children: [(0, Li.BX)(da, {
                                    variant: "primary",
                                    onClick: function() {
                                        return f()
                                    },
                                    disabled: o - a < 1 || c || p < 1,
                                    children: [(0, Li.BX)(Sr.IS, {
                                        children: [e("spinFor"), " ", di.ZP.appInfo.rwdRobuxCreditsRequiredForSpin]
                                    }), (0, Li.tZ)(po.EH, {
                                        opacity: o - a < 1 || c || p < 1 ? "0.4" : "1"
                                    }), (0, Li.tZ)("img", {
                                        src: (0, Pi.j)($o),
                                        height: 12,
                                        style: {
                                            marginBottom: "2px"
                                        },
                                        alt: ""
                                    })]
                                }), t && (0, Li.tZ)(pa, {
                                    variant: "secondary",
                                    onClick: function() {
                                        return f("freeSpin")
                                    },
                                    disabled: o - a < 1 || c,
                                    children: e("freeSpin")
                                })]
                            }), (0, Li.BX)(Ko, {
                                style: o - a < 1 ? {
                                    color: "#FF3A30"
                                } : {},
                                children: [o - a, "/", o, " ", e("dailySpinsRemaining")]
                            })]
                        })]
                    })
                },
                Sa = (0, xi.memo)(Aa),
                Ea = {
                    src: "/play/_next/static/media/robux-sad.ccae6838.svg",
                    height: 106,
                    width: 106
                },
                Oa = t(78064),
                Ia = t(61569),
                Ca = t(95860),
                Ra = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ja = (Ni.ZP.section(Cn || (Cn = Ra(["\n  ", "\n"], ["\n  ", "\n"])), Ca.be), (0, Ni.ZP)(na.Yd)(Rn || (Rn = Ra(["\n  padding: 7px 16px;\n  margin-left: 6px;\n"], ["\n  padding: 7px 16px;\n  margin-left: 6px;\n"]))), (0, Ni.F4)(jn || (jn = Ra(["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"])))),
                Ba = (0, Ni.F4)(Bn || (Bn = Ra(["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"]))),
                za = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ta = Ni.ZP.div(zn || (zn = za(["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 272px;\n    padding: 32px 24px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.10);\n    position:relative;\n    animation: ", " 0.6s ease-out;\n    gap: 20px;\n\n    .reward-close {\n        padding: 0;\n        &:hover {\n            border-radius: 6px;\n            background: ", ";\n        }\n    }\n"], ["\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    height: 272px;\n    padding: 32px 24px;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    background: rgba(255, 255, 255, 0.10);\n    position:relative;\n    animation: ", " 0.6s ease-out;\n    gap: 20px;\n\n    .reward-close {\n        padding: 0;\n        &:hover {\n            border-radius: 6px;\n            background: ", ";\n        }\n    }\n"])), ja, (function(n) {
                    return n.theme.colors.white20
                })),
                Da = Ni.ZP.div(Tn || (Tn = za(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:8px;\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap:8px;\n"]))),
                Xa = Ta,
                La = function() {
                    var n = (0, wi.$)().t,
                        e = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsRewarded
                        })),
                        t = (0, hi.I0)(),
                        i = function() {
                            t({
                                type: Fo.Z.JACKPOT_FLOW,
                                payload: {
                                    showRewardPopup: !1
                                }
                            })
                        };
                    return (0, Li.BX)(Xa, {
                        children: [0 !== e && (0, Li.tZ)(Oa.A3, {
                            className: "cross-icon reward-close",
                            onClick: i,
                            style: {
                                position: "absolute",
                                right: "16px",
                                top: "16px",
                                color: "white"
                            },
                            children: (0, Li.tZ)(Di.Z, {
                                name: "cross-thin",
                                size: 16,
                                id: "login-close-icon"
                            })
                        }), (0, Li.tZ)("img", {
                            src: (0, Pi.j)(0 === e ? Ea : ya),
                            alt: "",
                            width: 0 === e ? 106 : 72
                        }), (0, Li.tZ)(Da, {
                            children: 0 === e ? (0, Li.BX)(Li.HY, {
                                children: [(0, Li.tZ)(Sr.Bb, {
                                    children: n("betterLuck")
                                }), (0, Li.tZ)(Or.z, {
                                    style: {
                                        padding: "7px 16px",
                                        color: "#FF0096"
                                    },
                                    variant: "secondary",
                                    text: n("goBack"),
                                    onClick: i
                                })]
                            }) : (0, Li.BX)(Li.HY, {
                                children: [(0, Li.BX)(Ia.GN, {
                                    style: {
                                        alignItems: "center"
                                    },
                                    children: [(0, Li.tZ)(Sr.Bb, {
                                        style: {
                                            marginTop: "8px"
                                        },
                                        children: n("yay")
                                    }), (0, Li.tZ)(Sr.Bb, {
                                        children: n("robuxCount", {
                                            robuxCreditsRewarded: e
                                        })
                                    })]
                                }), (0, Li.BX)(Or.z, {
                                    variant: "discord",
                                    style: {
                                        background: "rgba(114, 137, 218, 1)",
                                        padding: "7px 16px",
                                        gap: "4px"
                                    },
                                    onClick: function() {
                                        return window.open(mi.o7)
                                    },
                                    children: [(0, Li.tZ)("img", {
                                        src: (0, Pi.j)(Qr.Z),
                                        alt: "",
                                        width: 16,
                                        height: 16
                                    }), (0, Li.tZ)(Sr.IS, {
                                        children: n("shareOnDiscord")
                                    })]
                                }), (0, Li.BX)(Sr.lU, {
                                    onClick: i,
                                    style: {
                                        color: "rgba(255,255,255,0.7)",
                                        cursor: "pointer"
                                    },
                                    children: [n("tryAgain"), "?"]
                                })]
                            })
                        })]
                    })
                },
                _a = function() {
                    var n = (0, wi.$)().t,
                        e = (0, hi.v9)((function(n) {
                            return n.robuxRewards.showRewardPopup
                        }));
                    return (0, Li.BX)(Vo, {
                        showRewardPopup: e,
                        children: [(0, Li.tZ)(Yo, {
                            children: (0, Li.tZ)(Ho, {
                                children: (0, Li.tZ)("img", {
                                    src: (0, Pi.j)(Go),
                                    width: 191,
                                    height: 72,
                                    alt: ""
                                })
                            })
                        }), (0, Li.tZ)(Qo, {
                            children: e ? (0, Li.tZ)(La, {}) : (0, Li.BX)(qo, {
                                children: [(0, Li.tZ)(Jo, {
                                    children: (0, Li.BX)(No.Lb, {
                                        gap: "6",
                                        children: [(0, Li.tZ)(Wo, {
                                            children: n("get")
                                        }), (0, Li.BX)(No.Lb, {
                                            gap: "1",
                                            children: [(0, Li.tZ)(po.EH, {
                                                opacity: "0.8",
                                                height: "24",
                                                width: "22"
                                            }), (0, Li.tZ)(po.EH, {
                                                opacity: "0.8",
                                                height: "24",
                                                width: "22"
                                            }), (0, Li.tZ)(po.EH, {
                                                opacity: "0.8",
                                                height: "24",
                                                width: "22"
                                            })]
                                        }), (0, Li.tZ)(Wo, {
                                            children: n("winARobuxCard")
                                        })]
                                    })
                                }), (0, Li.tZ)(Sa, {})]
                            })
                        })]
                    })
                },
                Fa = t(60925),
                Ua = t(30550),
                Na = {
                    src: "/play/_next/static/media/robux-coin.85fea872.svg",
                    height: 40,
                    width: 40
                },
                Ga = {
                    src: "/play/_next/static/media/gift-card-bg1.eb187c88.jpg",
                    height: 340,
                    width: 664,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAACAgMBAAAAAAAAAAAAAAABAgADBRESkf/EABUBAQEAAAAAAAAAAAAAAAAAAAQG/8QAGREBAQADAQAAAAAAAAAAAAAAAQIAAwQR/9oADAMBAAIRAxEAPwCDmbnvC0WkOOQ3WgG9EREptIEAYzhprmhp9c//2Q=="
                },
                Ma = {
                    src: "/play/_next/static/media/gift-card-bg2.53262ce5.jpg",
                    height: 340,
                    width: 664,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAEAAgIDAQAAAAAAAAAAAAABAAIDEQQFEiH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8An/YV9cvHhsthqKutvyIiB//Z"
                },
                Va = {
                    src: "/play/_next/static/media/gift-card-error-bg.3dbc08fa.jpg",
                    height: 340,
                    width: 664,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAYEAADAQEAAAAAAAAAAAAAAAAAAQIRUf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCe3VVW0231gAD/2Q=="
                },
                Ya = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ha = Ni.ZP.div(Dn || (Dn = Ya(["\n    display:flex;\n    flex-direction: column;\n    gap:16px;\n"], ["\n    display:flex;\n    flex-direction: column;\n    gap:16px;\n"]))),
                Qa = Ni.ZP.section(Ln || (Ln = Ya(["\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 12px;\n    border-radius: 10px;\n    ", "\n    background: ", ";\n"], ["\n    display: flex;\n    flex-direction: column;\n    gap: 6px;\n    padding: 12px;\n    border-radius: 10px;\n    ", "\n    background: ", ";\n"])), (function(n) {
                    return n.isNewCode && (0, Ni.iv)(Xn || (Xn = Ya(["border: 1px solid #C8A839;"], ["border: 1px solid #C8A839;"])))
                }), (function(n) {
                    var e = n.theme;
                    return n.isNewCode ? "rgba(200, 168, 57, 0.15)" : e.colors.white10
                })),
                qa = Ni.ZP.div(_n || (_n = Ya(["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    p {\n        margin-left: auto;\n        color: ", ";\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 8px;\n\n    p {\n        margin-left: auto;\n        color: ", ";\n    }\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                Ja = Ni.ZP.div(Fn || (Fn = Ya(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),
                Wa = (0, Ni.ZP)(Sr.lU)(Un || (Un = Ya(["\n    color: ", ";\n    letter-spacing: 2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(100% - 120px);\n"], ["\n    color: ", ";\n    letter-spacing: 2px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: calc(100% - 120px);\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                Ka = Ni.ZP.div(Nn || (Nn = Ya(["\n    padding: 0px 5px;\n    margin-left: auto;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0.10);\n\n    p {\n        color: #B89B34;\n    }\n"], ["\n    padding: 0px 5px;\n    margin-left: auto;\n    border-radius: 4px;\n    background: rgba(255, 255, 255, 0.10);\n\n    p {\n        color: #B89B34;\n    }\n"]))),
                $a = (0, Ni.ZP)(na.Yd)(Gn || (Gn = Ya(["\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 3px 10px;\n    box-shadow: none;\n\n    .copy-tooltip {\n        bottom: 0;\n        right: 0;\n        transform: translate(-20%, -120%);\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    gap: 12px;\n    padding: 3px 10px;\n    box-shadow: none;\n\n    .copy-tooltip {\n        bottom: 0;\n        right: 0;\n        transform: translate(-20%, -120%);\n    }\n"]))),
                nl = (0, Ni.ZP)(na.Yd)(Mn || (Mn = Ya(["\n    margin-top: 4px;\n    padding: 7px 16px;\n    box-shadow: none;\n"], ["\n    margin-top: 4px;\n    padding: 7px 16px;\n    box-shadow: none;\n"]))),
                el = (Ni.ZP.div(Vn || (Vn = Ya(["\n    display: flex;\n    gap: 50px;\n    align-items: center;\n \n"], ["\n    display: flex;\n    gap: 50px;\n    align-items: center;\n \n"]))), Ni.ZP.img(Yn || (Yn = Ya(["\n   cursor: pointer;\n"], ["\n   cursor: pointer;\n"]))), Ni.ZP.div(Hn || (Hn = Ya(["\n    width: 332px;\n    height: 170px;\n    position: relative;\n    background-image:", " ;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    ", "\n"], ["\n    width: 332px;\n    height: 170px;\n    position: relative;\n    background-image:", " ;\n    background-position: center;\n    background-size: cover;\n    border-radius: 8px;\n    ", "\n"])), (function(n) {
                    var e = n.redemptionCode,
                        t = n.redemptionCodeError;
                    return e ? "url('".concat(di.ZP.prefix).concat((null === Ma || void 0 === Ma ? void 0 : Ma.src) || "", "')") : t ? "url('".concat(di.ZP.prefix).concat((null === Va || void 0 === Va ? void 0 : Va.src) || "", "')") : "url('".concat(di.ZP.prefix).concat((null === Ga || void 0 === Ga ? void 0 : Ga.src) || "", "')")
                }), (function(n) {
                    return n.redemptionCodeError && "\n    border: 1px solid rgba(255,255,255,0.3);\n    padding: 6px 16px;\n    "
                })), Ni.ZP.div(Qn || (Qn = Ya(["\n    display: flex;\n    width: 100%;\n    gap:8px;\n\n"], ["\n    display: flex;\n    width: 100%;\n    gap:8px;\n\n"]))), Ni.ZP.img(qn || (qn = Ya(["\n    position: absolute;\n    height: 200px;\n"], ["\n    position: absolute;\n    height: 200px;\n"]))), Ni.ZP.div(Jn || (Jn = Ya(["\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 8px;\n    align-items: center;\n\n"], ["\n    display:flex;\n    flex-direction: column;\n    position: absolute;\n    right: 8px;\n    align-items: center;\n\n"]))), (0, Ni.ZP)(Sr.dH)(Wn || (Wn = Ya(["\n    letter-spacing: 16px;\n    text-transform: uppercase;\n    ", "\n"], ["\n    letter-spacing: 16px;\n    text-transform: uppercase;\n    ", "\n"])), (function(n) {
                    return n.redemptionCodeError && "\n    font-size: 8px;\n    color: rgba(255,255,255,0.3);\n    letter-spacing: 10px;\n    "
                })), Ni.ZP.div(Kn || (Kn = Ya(["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"], ["\n    display: flex;\n    gap: 10px;\n    align-items: center;\n"]))), Ni.ZP.p($n || ($n = Ya(["\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin:0;\n    color: ", ";\n    ", "\n"], ["\n    font-size: 32px;\n    font-style: normal;\n    font-weight: 600;\n    margin:0;\n    color: ", ";\n    ", "\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.redemptionCodeError && "\n    font-size: 20px;\n    color: rgba(255,255,255,0.3);\n \n    "
                })), Ni.ZP.div(ne || (ne = Ya(["\n    display: flex;\n    justify-content: space-between;\n    background: rgba(255, 255, 255, 0.05);\n    width:332px;\n    padding: 7px 12px;\n    align-items: center;\n    gap: 8px;\n    margin-bottom:12px;\n    border-radius: 6px;\n    position:relative;\n\n    &:first-child {\n        border: 1px solid #CEA609;\n    }\n\n    .ellipsis {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    background: rgba(255, 255, 255, 0.05);\n    width:332px;\n    padding: 7px 12px;\n    align-items: center;\n    gap: 8px;\n    margin-bottom:12px;\n    border-radius: 6px;\n    position:relative;\n\n    &:first-child {\n        border: 1px solid #CEA609;\n    }\n\n    .ellipsis {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n"]))), Ni.ZP.div(ee || (ee = Ya(["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    position: absolute;\n    top: 20%;\n"], ["\n    display: flex;\n    gap: 12px;\n    align-items: center;\n    position: absolute;\n    top: 20%;\n"]))), (0, Ni.ZP)(Sr.qm)(te || (te = Ya(["\n    color: #BE9A08;\n"], ["\n    color: #BE9A08;\n"]))), function() {
                    var n = (0, wi.$)().t,
                        e = (0, hi.v9)((function(n) {
                            return n.robuxRewards.redemptionCode
                        })),
                        t = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxRedemptionCodeList
                        })),
                        i = (0, hi.v9)((function(n) {
                            return n.robuxRewards.redemptionCodeError
                        })),
                        r = (0, xi.useState)(!0),
                        o = r[0],
                        a = r[1],
                        l = (0, xi.useState)(""),
                        c = l[0],
                        d = l[1],
                        p = (0, xi.useState)(o ? t.slice(0, 2) : t),
                        s = p[0],
                        u = p[1];
                    return (0, xi.useEffect)((function() {
                        u(o ? t.slice(0, 2) : t)
                    }), [t, o]), (0, Li.BX)(Ha, {
                        children: [s.map((function(t) {
                            return (0, Li.BX)(Qa, {
                                isNewCode: e === t.redemptionCode && !i,
                                children: [(0, Li.BX)(qa, {
                                    children: [(0, Li.tZ)("img", {
                                        src: (0, Pi.j)(Na),
                                        alt: "",
                                        width: "16",
                                        height: "18"
                                    }), (0, Li.tZ)(Sr.QV, {
                                        children: n("robuxCode", {
                                            robux: di.ZP.appInfo.rwdMinRedemptionCredits
                                        })
                                    }), e !== t.redemptionCode || i ? (0, Li.tZ)(Sr.qm, {
                                        children: (0, Ai.p6)(1e3 * t.redemptionDateSecs)
                                    }) : (0, Li.tZ)(Ka, {
                                        children: (0, Li.tZ)(Sr.qm, {
                                            children: n("new")
                                        })
                                    })]
                                }), (0, Li.BX)(Ja, {
                                    children: [(0, Li.tZ)(Wa, {
                                        children: t.redemptionCode
                                    }), (0, Li.BX)($a, {
                                        variant: "defaultOutline",
                                        size: "small",
                                        onClick: function() {
                                            return n = t.redemptionCode, (0, Ua.FF)("copyBtn" === n ? e : n), d(n || ""), void setTimeout((function() {
                                                d("")
                                            }), 2e3);
                                            var n
                                        },
                                        children: [c === t.redemptionCode && (0, Li.tZ)(Fa.YV, {
                                            className: "copy-tooltip",
                                            children: n("codeCopied")
                                        }), (0, Li.tZ)(Di.Z, {
                                            size: 12,
                                            name: "copy"
                                        }), (0, Li.tZ)(Sr.qm, {
                                            children: n("copyCode")
                                        })]
                                    })]
                                })]
                            }, t.redemptionCode)
                        })), 0 !== s.length && o && (0, Li.tZ)(nl, {
                            variant: "defaultOutline",
                            size: "medium",
                            onClick: function() {
                                return a(!1)
                            },
                            children: (0, Li.tZ)(Sr.IS, {
                                children: n("viewAllPreviousCodes")
                            })
                        })]
                    })
                }),
                tl = t(88879),
                il = {
                    src: "/play/_next/static/media/arrow-right.156f9ff2.svg",
                    height: 16,
                    width: 16
                },
                rl = t(50063),
                ol = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                al = Ni.ZP.div(ie || (ie = ol(["\n    background: ", ";\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: ", ";\n    gap: 8px;\n    border-radius: 10px;\n    padding: ", ";\n    border: 1px solid ", ";\n\n    p {\n        color: ", ";\n    }\n"], ["\n    background: ", ";\n    display: flex;\n    flex-direction: ", ";\n    justify-content: center;\n    align-items: ", ";\n    gap: 8px;\n    border-radius: 10px;\n    padding: ", ";\n    border: 1px solid ", ";\n\n    p {\n        color: ", ";\n    }\n"])), (function(n) {
                    var e = n.theme;
                    return n.error ? "rgba(243, 54, 33, 0.15)" : e.colors.white20
                }), (function(n) {
                    return n.showGuestNotification ? "row" : "column"
                }), (function(n) {
                    return n.showGuestNotification ? "center" : "flex-start"
                }), (function(n) {
                    return n.showGuestNotification ? "7px 10px 7px 12px" : "12px"
                }), (function(n) {
                    var e = n.theme;
                    return n.error ? "#DE5A48" : e.colors.white10
                }), (function(n) {
                    return n.theme.colors.white70
                })),
                ll = Ni.ZP.div(re || (re = ol(["\n   display: flex;\n   gap: 4px;\n   align-items: center;\n   \n"], ["\n   display: flex;\n   gap: 4px;\n   align-items: center;\n   \n"]))),
                cl = Ni.ZP.div(oe || (oe = ol(["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n"], ["\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n    gap: 12px;\n    width: 100%;\n"]))),
                dl = Ni.ZP.span(ae || (ae = ol(["\n    height: 16px;\n    width: 16px;\n"], ["\n    height: 16px;\n    width: 16px;\n"]))),
                pl = (0, Ni.ZP)(na.Yd)(le || (le = ol(["\n    ", "\n    height: 32px;\n    font-weight: 600;\n    box-shadow: none;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"], ["\n    ", "\n    height: 32px;\n    font-weight: 600;\n    box-shadow: none;\n    &:disabled {\n        box-shadow: none;\n        backdrop-filter: none;\n        color: ", ";\n        background: ", ";\n        &:hover {\n            background: ", ";\n            color: ", ";\n        }\n  }\n"])), Ca.be, (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                sl = Ni.ZP.div(ce || (ce = ol(["\n    position: absolute;\n    right: 0px;\n    padding-right: 10px;\n    padding-left: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height:100%;\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n\n    &:hover {\n      background: ", ";\n    }\n\n"], ["\n    position: absolute;\n    right: 0px;\n    padding-right: 10px;\n    padding-left: 10px;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height:100%;\n    border-top-right-radius: inherit;\n    border-bottom-right-radius: inherit;\n\n    &:hover {\n      background: ", ";\n    }\n\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                ul = al,
                fl = function() {
                    return (fl = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                gl = function(n) {
                    var e = n.loginToClaim,
                        t = (0, wi.$)().t,
                        i = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        r = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsEarned
                        })),
                        o = (0, hi.v9)((function(n) {
                            return n.robuxRewards.redemptionCodeError
                        })),
                        a = (0, hi.I0)(),
                        l = di.ZP.appInfo,
                        c = l.rwdMinPlayTimeIntervalInSecs,
                        d = l.rwdMinRedemptionCredits,
                        p = (0, xi.useState)(!localStorage.getItem(mi.FD) && !i && !r),
                        s = p[0],
                        u = p[1],
                        f = function() {
                            return ji.Z.getRedemptionHistory({}, {
                                uaSessionId: (0, Ai.io)(mi.K3),
                                uaId: (0, Ai.Fz)(mi.nP),
                                playSessionId: di.ZP.playSessionId || (di.ZP.isAppPage || di.ZP.isHomePage || (0, di.DJ)() ? "NA" : "")
                            }).then((function(n) {
                                n.status === Bi.YR.Success && a({
                                    type: Fo.Z.REDEMPTION_FLOW,
                                    payload: {
                                        robuxRedemptionCodeList: n.redemptionCodes
                                    }
                                })
                            })).catch((function(n) {}))
                        };
                    return (0, xi.useEffect)((function() {
                        i && f()
                    }), [i]), (0, xi.useEffect)((function() {
                        return function() {
                            a({
                                type: Fo.Z.REDEMPTION_FLOW,
                                payload: {
                                    redemptionCodeError: !1,
                                    redemptionCode: ""
                                }
                            })
                        }
                    }), []), (0, Li.tZ)(Li.HY, {
                        children: s ? (0, Li.BX)(ul, {
                            error: o,
                            showGuestNotification: s,
                            style: {
                                position: "relative"
                            },
                            children: [(0, Li.tZ)(dl, {
                                children: (0, Li.tZ)(po.Qp, {})
                            }), (0, Li.tZ)(Sr.js, {
                                style: {
                                    color: "rgba(255,255,255,0.7)"
                                },
                                children: t("oneRobuxForGameplay", {
                                    minutes: Math.floor(c / 60)
                                })
                            }), (0, Li.tZ)(sl, {
                                onClick: function() {
                                    localStorage.setItem(mi.FD, "true"), u(!1)
                                },
                                children: (0, Li.tZ)(Di.Z, {
                                    size: 16,
                                    name: "cross-thin"
                                })
                            })]
                        }) : (!i && r || i) && (0, Li.BX)(ul, {
                            showGuestNotification: s,
                            error: o,
                            children: [(0, Li.BX)(ll, {
                                children: [(0, Li.tZ)("img", {
                                    src: (0, Pi.j)(o ? rl.Z : tl.Z),
                                    alt: "",
                                    height: "18",
                                    width: "16"
                                }), (0, Li.tZ)(Sr.QV, {
                                    children: o ? t("couponUnavailable") : t("haveRobux", {
                                        robuxCreditsEarned: di.ZP.appInfo.rwdMinRedemptionCredits
                                    })
                                })]
                            }), (0, Li.BX)(cl, {
                                children: [(0, Li.BX)(Sr.gd, {
                                    style: {
                                        display: "flex",
                                        gap: "4px"
                                    },
                                    children: [o ? t("checkBackWithin", {
                                        time: 24
                                    }) : t("youCanRedeemRobux"), !o && (0, Li.tZ)("img", {
                                        src: (0, Pi.j)(il),
                                        alt: "",
                                        height: "16"
                                    })]
                                }), !i && r && (0, Li.tZ)(pl, {
                                    onClick: e,
                                    variant: "primary",
                                    style: {
                                        height: "24px",
                                        width: "108px"
                                    },
                                    children: t("loginToClaim")
                                }), i && (0, Li.BX)(pl, {
                                    onClick: function() {
                                        return n = "giftCard", a({
                                            type: Fo.Z.REDEMPTION_FLOW,
                                            payload: {
                                                showRedemptionFlow: !0,
                                                redemptionType: n
                                            }
                                        }), void("giftCard" === n ? ji.Z.redeemReward({}, fl({
                                            feSessionTags: (0, Ai.pC)()
                                        }, (0, Ai.h9)())).then((function(n) {
                                            n.status === Bi.YR.Success ? (a({
                                                type: Fo.Z.REDEMPTION_FLOW,
                                                payload: {
                                                    redemptionCode: n.redemptionCode,
                                                    redemptionCodeError: !1
                                                }
                                            }), a({
                                                type: Fo.Z.ROBUX_REWARD_DETAILS,
                                                payload: {
                                                    robuxCreditsEarned: r - d
                                                }
                                            }), f()) : n.status === Bi.YR.FailureTryAgain && a({
                                                type: Fo.Z.REDEMPTION_FLOW,
                                                payload: {
                                                    redemptionCodeError: !0
                                                }
                                            })
                                        })).catch((function(n) {})) : f());
                                        var n
                                    },
                                    style: {
                                        whiteSpace: "nowrap",
                                        gap: "8px",
                                        padding: "0px 8px",
                                        height: "24px"
                                    },
                                    variant: "primary",
                                    size: "small",
                                    disabled: o,
                                    children: [t("redeemRobux", {
                                        rewardRedemption: d
                                    }), (0, Li.tZ)(po.fX, {})]
                                })]
                            })]
                        })
                    })
                },
                hl = {
                    src: "/play/_next/static/media/robux-no.0aea8634.svg",
                    height: 77,
                    width: 77
                },
                xl = {
                    src: "/play/_next/static/media/bell.19de3e5b.svg",
                    height: 16,
                    width: 14
                },
                ml = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                bl = Ni.ZP.section(de || (de = ml(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  height: 100%;\n"]))),
                wl = Ni.ZP.div(pe || (pe = ml(["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  padding: 20px 0px;\n  overflow: hidden;\n  border-radius: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  position: relative;\n  padding: 20px 0px;\n  overflow: hidden;\n  border-radius: 8px;\n"]))),
                vl = Ni.ZP.img(fe || (fe = ml(["\n  position: absolute;\n\n  ", "\n  ", "\n"], ["\n  position: absolute;\n\n  ", "\n  ", "\n"])), (function(n) {
                    return n.first && (0, Ni.iv)(se || (se = ml(["\n    left: -11px;\n    top: 42px;\n    transform: rotate(-180deg);\n  "], ["\n    left: -11px;\n    top: 42px;\n    transform: rotate(-180deg);\n  "])))
                }), (function(n) {
                    return !n.first && (0, Ni.iv)(ue || (ue = ml(["\n    top: -2px;\n    left: 11px;\n  "], ["\n    top: -2px;\n    left: 11px;\n  "])))
                })),
                yl = (Ni.ZP.div(he || (he = ml(["\n  ", "\n\n  > section {\n    width: 100%;\n  }\n"], ["\n  ", "\n\n  > section {\n    width: 100%;\n  }\n"])), (function(n) {
                    return n.isJockpotFlowEnabled && (0, Ni.iv)(ge || (ge = ml(["\n    flex: 1;\n    display:flex;\n    align-items: center;\n  "], ["\n    flex: 1;\n    display:flex;\n    align-items: center;\n  "])))
                })), Ni.ZP.div(xe || (xe = ml(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"])))),
                Zl = Ni.ZP.section(me || (me = ml(["\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px;\n  border: 1px dashed ", ";\n\n  svg {\n    flex-shrink: 0;\n  }\n  p {\n    color: ", ";\n  }\n"], ["\n  padding: 14px 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  border-radius: 8px;\n  border: 1px dashed ", ";\n\n  svg {\n    flex-shrink: 0;\n  }\n  p {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white70
                })),
                Pl = Ni.ZP.div(be || (be = ml(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"]))),
                kl = Ni.ZP.div(we || (we = ml(["\n  display: flex;\n  min-height: 32px;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 7px 12px;\n  gap: 8px;\n  color: ", ";\n"], ["\n  display: flex;\n  min-height: 32px;\n  justify-content: center;\n  align-items: center;\n  align-self: stretch;\n  border-radius: 6px;\n  background: rgba(255, 255, 255, 0.05);\n  padding: 7px 12px;\n  gap: 8px;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                Al = (Ni.ZP.div(ve || (ve = ml(["\n  margin-top: auto;\n  padding: 16px 0 24px;\n  border-top: 1px dashed ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n\n  p {\n    font-weight: 400;\n    line-height: normal;\n    max-width: 275px;\n    text-align: center;\n  }\n"], ["\n  margin-top: auto;\n  padding: 16px 0 24px;\n  border-top: 1px dashed ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n\n  p {\n    font-weight: 400;\n    line-height: normal;\n    max-width: 275px;\n    text-align: center;\n  }\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white40
                })), Ni.ZP.div(ye || (ye = ml(["\n  border-radius: 30px;\n  border: 1px solid #AF8723;\n  padding: 0px 8px;\n  background: #483800;\n  width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s;\n"], ["\n  border-radius: 30px;\n  border: 1px solid #AF8723;\n  padding: 0px 8px;\n  background: #483800;\n  width: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 1s;\n"])))),
                Sl = Ni.ZP.div(Ze || (Ze = ml(["\n  display: flex;\n  margin-bottom: 20px;\n"], ["\n  display: flex;\n  margin-bottom: 20px;\n"]))),
                El = (0, Ni.F4)(Pe || (Pe = ml(["\n  0% {\n    left: -44%;\n  }\n  100% {\n    left: 100%;\n  }\n"], ["\n  0% {\n    left: -44%;\n  }\n  100% {\n    left: 100%;\n  }\n"]))),
                Ol = Ni.ZP.div(ke || (ke = ml(["\n  width: 50.406px;\n  height: 145.087px;\n  transform: rotate(26.632deg);\n  flex-shrink: 0;\n  position: absolute;\n  opacity: 0.4;\n  background:linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.56) 50%,\n    rgba(255, 255, 255, 0.00) 100%);\n  left: -44%;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 1s;\n"], ["\n  width: 50.406px;\n  height: 145.087px;\n  transform: rotate(26.632deg);\n  flex-shrink: 0;\n  position: absolute;\n  opacity: 0.4;\n  background:linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.56) 50%,\n    rgba(255, 255, 255, 0.00) 100%);\n  left: -44%;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 1s;\n"])), El),
                Il = bl,
                Cl = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Rl = Ni.ZP.div(Ae || (Ae = Cl(["\n  display: flex;\n  border-radius: 6.5px;\n  gap: 2px;\n  padding: 2px;\n  background: ", ";\n  height: 32px;\n  width: 100%;\n"], ["\n  display: flex;\n  border-radius: 6.5px;\n  gap: 2px;\n  padding: 2px;\n  background: ", ";\n  height: 32px;\n  width: 100%;\n"])), (function(n) {
                    return n.theme.colors.black20
                })),
                jl = Ni.ZP.div(Se || (Se = Cl(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  flex: 1 0 0;\n  border-radius: 5px;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 400;\n  min-height: 26px;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background: ", ";\n    color: ", ";\n    pointer-events: none;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  width: -webkit-fill-available;\n  text-align: center;\n  flex: 1 0 0;\n  border-radius: 5px;\n  cursor: pointer;\n  color: ", ";\n  font-weight: 400;\n  min-height: 26px;\n\n  &:hover {\n    background: ", ";\n  }\n\n  &.active {\n    background: ", ";\n    color: ", ";\n    pointer-events: none;\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white30
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Bl = function(n) {
                    var e = n.tabs,
                        t = (0, xi.useState)(0),
                        i = t[0],
                        r = t[1];
                    return (0, Li.tZ)(Rl, {
                        children: e.map((function(n, e) {
                            return (0, Li.tZ)(jl, {
                                className: e === i ? "active" : "",
                                onClick: function() {
                                    return function(n, e) {
                                        n.event && (0, si.L9)(n.event), r(e), n.onClick()
                                    }(n, e)
                                },
                                children: (0, Li.tZ)(Sr.IS, {
                                    children: n.title
                                })
                            })
                        }))
                    })
                },
                zl = {
                    src: "/play/_next/static/media/timer.30a49d06.svg",
                    height: 16,
                    width: 16
                },
                Tl = {
                    src: "/play/_next/static/media/tick.f57f2ee3.svg",
                    height: 16,
                    width: 16
                },
                Dl = t(26544),
                Xl = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ll = Ni.ZP.div(Ee || (Ee = Xl(["\n  width: 100%;\n  border-bottom: 1px solid transparent;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  padding-bottom: 12px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid transparent;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  padding-bottom: 12px;\n"]))),
                _l = Ni.ZP.div(Oe || (Oe = Xl(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 4px;\n\n  .ellipsis {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: ", ";\n  }\n"])), (function(n) {
                    return "PlayGameXForYDays" === n.itemType ? "110px" : "160px"
                })),
                Fl = Ni.ZP.div(Ie || (Ie = Xl(["\n  width: 246px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"], ["\n  width: 246px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n"]))),
                Ul = Ni.ZP.div(Ce || (Ce = Xl(["\n  border-radius: 40px;\n  background: ", ";\n  display: flex;\n  padding: 2px 4px;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n"], ["\n  border-radius: 40px;\n  background: ", ";\n  display: flex;\n  padding: 2px 4px;\n  justify-content: center;\n  align-items: center;\n  gap: 3px;\n"])), (function(n) {
                    return n.theme.colors.black20
                })),
                Nl = (Ni.ZP.div(Re || (Re = Xl(["\n  height: 4px;\n  border-radius: 36px;\n  width:80%;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  border: 1px solid green;\n"], ["\n  height: 4px;\n  border-radius: 36px;\n  width:80%;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  border: 1px solid green;\n"]))), Ni.ZP.div(je || (je = Xl(["\n  border-radius: 12px;\n  height: 3px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n  backdrop-filter: blur(12px);\n  \n  > img {  \n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"], ["\n  border-radius: 12px;\n  height: 3px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n  backdrop-filter: blur(12px);\n  \n  > img {  \n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"])), (function(n) {
                    return n.theme.colors.black10
                }))),
                Gl = Ni.ZP.div(Be || (Be = Xl(["\n  position: relative;\n  border-radius: 6px;\n  height: 4px;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  transform: translateY(-0.5px);\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 6px,\n    rgba(0, 0, 0, 0.09) 6px,\n    rgba(0, 0, 0, 0.09) 12px\n  ),\n  linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n"], ["\n  position: relative;\n  border-radius: 6px;\n  height: 4px;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  box-shadow: 2px 0px 4px 0px rgba(0, 0, 0, 0.12);\n  transform: translateY(-0.5px);\n  background: repeating-linear-gradient(\n    45deg,\n    rgba(0, 0, 0, 0),\n    rgba(0, 0, 0, 0) 6px,\n    rgba(0, 0, 0, 0.09) 6px,\n    rgba(0, 0, 0, 0.09) 12px\n  ),\n  linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n"])), (function(n) {
                    return n.width
                })),
                Ml = Ni.ZP.div(ze || (ze = Xl(["\n  border-radius: 40px;\n  border: 1px solid #F33621;\n  display: flex;\n  align-items: center;\n  gap:3px;\n  padding: 2px 3px 2px 6px;\n  width: max-content;\n"], ["\n  border-radius: 40px;\n  border: 1px solid #F33621;\n  display: flex;\n  align-items: center;\n  gap:3px;\n  padding: 2px 3px 2px 6px;\n  width: max-content;\n"]))),
                Vl = function() {
                    return (Vl = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                Yl = function(n) {
                    var e = n.item,
                        t = (0, wi.$)().t,
                        i = (0, xi.useState)(!1),
                        r = i[0],
                        o = i[1],
                        a = (0, xi.useState)(!1),
                        l = a[0],
                        c = a[1],
                        d = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        p = (0, hi.I0)(),
                        s = "PlayGameXForYDays" === e.type ? e.requiredStreakDays : e.requiredLaunches,
                        u = Math.floor((Date.parse(e.questEndDateTimeUTC.toString()) - Date.now()) / 864e5),
                        f = Math.floor((Date.parse(e.questEndDateTimeUTC.toString()) - Date.now()) / 36e5);
                    return (0, Li.BX)(Ll, {
                        children: [(0, Li.BX)(No.Lb, {
                            gap: "12",
                            onClick: function() {
                                d || (p({
                                    type: er.Z.TOGGLE_LOGIN,
                                    payload: {
                                        showLogin: !0
                                    }
                                }), p({
                                    type: er.Z.UPDATE_LOGIN_CONTEXT,
                                    payload: {
                                        loginContext: mi.$6.profile
                                    }
                                }))
                            },
                            style: {
                                cursor: d ? "" : "pointer"
                            },
                            children: [(0, Li.tZ)("img", {
                                src: e.icon,
                                alt: "",
                                width: 48,
                                height: 48,
                                style: {
                                    borderRadius: "8px"
                                }
                            }), (0, Li.BX)(Fl, {
                                children: [(0, Li.BX)(_l, {
                                    itemType: e.type,
                                    children: [(0, Li.tZ)(Sr.IS, {
                                        className: "ellipsis",
                                        children: e.name
                                    }), (0, Li.BX)(No.Lb, {
                                        gap: "8",
                                        children: [(0, Li.BX)(Ml, {
                                            children: [u > 0 ? "".concat(u, " ").concat(t(u < 2 ? "dayLeft" : "daysLeft")) : "".concat(f, " ").concat(t(f < 2 ? "hourLeft" : "hoursLeft")), (0, Li.tZ)("img", {
                                                src: (0, Pi.j)(zl),
                                                alt: "",
                                                width: 16,
                                                height: 16
                                            })]
                                        }), (0, Li.BX)(Ul, {
                                            children: [(0, Li.BX)(Sr.tZ, {
                                                children: ["+", e.rewardNumRobux]
                                            }), (0, Li.tZ)("img", {
                                                src: (0, Pi.j)(Na),
                                                alt: "",
                                                height: 16,
                                                width: 16
                                            })]
                                        })]
                                    })]
                                }), (0, Li.tZ)("div", {
                                    children: 1 === e.progressRatio && e.earnCount - e.claimCount !== 0 ? (0, Li.BX)(Or.z, {
                                        variant: "primary",
                                        size: "small",
                                        disabled: r || l,
                                        onClick: function() {
                                            d && (o(!0), ji.Z.claimQuestReward({}, Vl({
                                                questId: e.questId,
                                                feSessionTags: (0, Ai.pC)()
                                            }, (0, Ai.h9)())).then((function(n) {
                                                n.status === Bi.YR.Success && (o(!1), p({
                                                    type: Fo.Z.ROBUX_REWARD_CREDIT,
                                                    payload: {
                                                        robuxCreditsEarned: n.robuxCreditsEarned,
                                                        totalRobuxCreditsEarnedByAllUsers: n.totalRobuxCreditsEarnedByAllUsers
                                                    }
                                                }), c(!0), p({
                                                    type: Ri.Z.UPDATE_TASK,
                                                    payload: {
                                                        questClaimed: !0
                                                    }
                                                }), setTimeout((function() {
                                                    (0, Ai.cv)(), p({
                                                        type: Ri.Z.UPDATE_TASK,
                                                        payload: {
                                                            questClaimed: !1
                                                        }
                                                    })
                                                }), 2e3))
                                            })).catch((function(n) {
                                                o(!1)
                                            })))
                                        },
                                        style: {
                                            padding: "4px 12px",
                                            gap: "6px"
                                        },
                                        children: [(0, Li.tZ)(Sr.qm, {
                                            children: t(r ? "claiming" : l ? "claimed" : "claimNow")
                                        }), l && (0, Li.tZ)("img", {
                                            src: (0, Pi.j)(Tl),
                                            alt: ""
                                        })]
                                    }) : (0, Li.tZ)(Sr.gd, {
                                        style: {
                                            color: Dl.qm.colors.white70
                                        },
                                        children: e.description
                                    })
                                })]
                            })]
                        }), (0, Li.BX)(No.Lb, {
                            gap: "12",
                            style: {
                                marginTop: "4px",
                                padding: "2.5px 0px"
                            },
                            children: [(0, Li.tZ)(Nl, {
                                style: {
                                    height: "3px"
                                },
                                children: (0, Li.tZ)(Gl, {
                                    width: "".concat(100 * e.progressRatio, "%")
                                })
                            }), (0, Li.BX)(Sr.tZ, {
                                style: {
                                    lineHeight: "150%"
                                },
                                children: [Math.round(e.progressRatio * s), "/", s]
                            })]
                        })]
                    })
                },
                Hl = (0, xi.memo)(Yl),
                Ql = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ql = Ni.ZP.div(Te || (Te = Ql(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n"]))),
                Jl = (0, Ni.ZP)(Sr.qm)(De || (De = Ql(["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n"], ["\n  display: flex;\n  justify-content: space-between;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Wl = Ni.ZP.div(Xe || (Xe = Ql(["\n  border-radius: 12px;\n  height: 12px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n\n  > img {\n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"], ["\n  border-radius: 12px;\n  height: 12px;\n  width: 100%;\n  background: ", ";\n  position: relative;\n\n  > img {\n    position: absolute;\n    right: 0;\n    bottom: -2px;\n  }\n"])), (function(n) {
                    return n.theme.colors.black40
                })),
                Kl = Ni.ZP.div(Le || (Le = Ql(["\n  position: relative;\n  border-radius: 6px;\n  display: inline-block;\n  height: 100%;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  background: linear-gradient(266deg, #FFD509 2.69%, #987B05 99.76%);\n"], ["\n  position: relative;\n  border-radius: 6px;\n  display: inline-block;\n  height: 100%;\n  width: ", ";\n  transition: width 0.3s ease-out;\n  background: linear-gradient(266deg, #FFD509 2.69%, #987B05 99.76%);\n"])), (function(n) {
                    return n.width
                })),
                $l = (0, Ni.ZP)(Sr.tZ)(_e || (_e = Ql(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  font-weight: 400;\n  line-height: 15px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: ", ";\n  font-weight: 400;\n  line-height: 15px;\n"])), (function(n) {
                    return n.theme.colors.white40
                })),
                nc = ql,
                ec = function() {
                    var n = (0, hi.v9)((function(n) {
                            return n.robuxRewards.accumulatedTimeSecs
                        })) % di.ZP.appInfo.rwdMinPlayTimeIntervalInSecs,
                        e = 100 * n / di.ZP.appInfo.rwdMinPlayTimeIntervalInSecs;
                    return (0, Li.BX)(nc, {
                        children: [(0, Li.BX)(Jl, {
                            children: [(0, Li.tZ)("span", {
                                children: (0, tr.t)("winRobuxEveryMinutes", {
                                    minutes: Math.floor(di.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60)
                                })
                            }), (0, Li.tZ)("span", {
                                children: "+1"
                            })]
                        }), (0, Li.BX)(Wl, {
                            children: [(0, Li.tZ)(Kl, {
                                width: "".concat(e, "%")
                            }), (0, Li.tZ)("img", {
                                src: (0, Pi.j)(Na),
                                alt: "",
                                height: 15,
                                width: 15
                            })]
                        }), (0, Li.BX)($l, {
                            children: [(0, Li.tZ)("span", {
                                children: "0m"
                            }), (0, Li.tZ)("span", {
                                children: (0, tr.t)("remainingMinutes", {
                                    minutes: Math.floor((di.ZP.appInfo.rwdMinPlayTimeIntervalInSecs - n) / 60)
                                })
                            }), (0, Li.tZ)("span", {
                                children: "".concat(Math.floor(di.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60), "m")
                            })]
                        })]
                    })
                },
                tc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ic = Ni.ZP.div(Fe || (Fe = tc(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: auto;\n  margin-bottom: 40px;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  overflow: auto;\n  margin-bottom: 40px;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                rc = Ni.ZP.div(Ue || (Ue = tc(["\n   display: flex;\n   align-items: center;\n   gap: 8px;\n   width: 100%;\n   border-bottom: 1px solid transparent;\n   border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);\n   border-image-slice: 1;\n   padding-bottom: 12px;\n"], ["\n   display: flex;\n   align-items: center;\n   gap: 8px;\n   width: 100%;\n   border-bottom: 1px solid transparent;\n   border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%);\n   border-image-slice: 1;\n   padding-bottom: 12px;\n"]))),
                oc = Ni.ZP.div(Ne || (Ne = tc(["\nopacity: 0.3;\n"], ["\nopacity: 0.3;\n"]))),
                ac = Ni.ZP.div(Ge || (Ge = tc(["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  margin: 4px 0px;\n"], ["\n  width: 100%;\n  border-bottom: 1px solid;\n  border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 100%);\n  border-image-slice: 1;\n  margin: 4px 0px;\n"]))),
                lc = ic,
                cc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                dc = (Ni.ZP.section(Me || (Me = cc(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  background-color: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px;\n  background-color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white10
                })), Ni.ZP.div(Ve || (Ve = cc(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n\n  svg {\n    transition: all 0.3s ease-out;\n    transform: rotate(90deg) translateY(0);\n    height: 20px;\n    width: 20px;\n  }\n\n  &:hover {\n    svg {\n      transform: rotate(90deg) translateY(5px);\n    }\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  text-transform: capitalize;\n\n  svg {\n    transition: all 0.3s ease-out;\n    transform: rotate(90deg) translateY(0);\n    height: 20px;\n    width: 20px;\n  }\n\n  &:hover {\n    svg {\n      transform: rotate(90deg) translateY(5px);\n    }\n  }\n"]))), Ni.ZP.div(Ye || (Ye = cc(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding-right: 12px;\n  border-right: 1px solid ", ";\n"], ["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  padding-right: 12px;\n  border-right: 1px solid ", ";\n"])), (function(n) {
                    return n.theme.colors.white20
                }))),
                pc = Ni.ZP.div(He || (He = cc(["\n  display: flex;\n  border-radius: 12px;\n  padding: 16px 12px 16px 8px;\n  border: 1px solid #DFAC2C;\n  background: rgba(0, 0, 0, 0.20);\n  height: 80px;\n\n  > div:nth-child(2) {\n    flex: 1;\n    padding-left: 12px;\n  }\n"], ["\n  display: flex;\n  border-radius: 12px;\n  padding: 16px 12px 16px 8px;\n  border: 1px solid #DFAC2C;\n  background: rgba(0, 0, 0, 0.20);\n  height: 80px;\n\n  > div:nth-child(2) {\n    flex: 1;\n    padding-left: 12px;\n  }\n"]))),
                sc = function() {
                    var n = (0, hi.v9)((function(n) {
                            return n.user.questsInfo
                        })),
                        e = (0, hi.v9)((function(n) {
                            return n.user.questsIcon
                        })),
                        t = (0, hi.v9)((function(n) {
                            return n.user.questsTitle
                        })),
                        i = (0, wi.$)().t,
                        r = (0, xi.useState)([]),
                        o = r[0],
                        a = r[1],
                        l = (0, xi.useState)([]),
                        c = l[0],
                        d = l[1];
                    return (0, xi.useEffect)((function() {
                        if (n.length) {
                            var e = n.filter((function(n) {
                                return n.earnCount - n.claimCount === 0 && 1 === n.progressRatio
                            }));
                            a(e);
                            var t = n.filter((function(n) {
                                return !(n.earnCount - n.claimCount === 0 && 1 === n.progressRatio)
                            }));
                            d(t)
                        }
                    }), [n]), (0, Li.BX)(lc, {
                        children: [(0, Li.BX)(rc, {
                            children: [e && (0, Li.tZ)("img", {
                                src: e,
                                alt: "",
                                height: 16,
                                width: 16
                            }), (0, Li.tZ)(Sr.uH, {
                                children: t
                            })]
                        }), (0, Ai.c6)() && (0, Li.BX)(Li.HY, {
                            children: [(0, Li.BX)(pc, {
                                children: [(0, Li.tZ)(dc, {
                                    children: (0, Li.tZ)("img", {
                                        alt: "",
                                        src: (0, Pi.O)({
                                            src: "https://cdn.now.gg/apps-content/com.roblox.client/icon/roblox.png",
                                            width: 64,
                                            quality: 70
                                        }),
                                        height: 64,
                                        width: 64,
                                        style: {
                                            borderRadius: "8px"
                                        }
                                    })
                                }), (0, Li.tZ)(ec, {})]
                            }), (0, Li.tZ)(ac, {})]
                        }), c.map((function(n) {
                            return (0, Li.tZ)(Hl, {
                                item: n
                            })
                        })), o.length > 0 && (0, Li.BX)(Li.HY, {
                            children: [(0, Li.tZ)(rc, {
                                children: (0, Li.tZ)(Sr.uH, {
                                    style: {
                                        marginTop: "4px"
                                    },
                                    children: i("completed")
                                })
                            }), (0, Li.tZ)(oc, {
                                children: o.map((function(n) {
                                    return (0, Li.tZ)(Hl, {
                                        item: n
                                    })
                                }))
                            })]
                        })]
                    })
                },
                uc = (0, xi.memo)(sc),
                fc = t(54580),
                gc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                hc = Ni.ZP.section(Qe || (Qe = gc(["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n\n  a,p {\n    color: ", ";\n  }\n  p {\n    ", "\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  strong {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 20px;\n\n  a,p {\n    color: ", ";\n  }\n  p {\n    ", "\n    gap: 4px;\n    flex-wrap: wrap;\n  }\n  strong {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                }), Ca.be, (function(n) {
                    return n.theme.colors.white
                })),
                xc = hc,
                mc = function() {
                    var n = (0, hi.v9)((function(n) {
                        return n.robuxRewards.totalRobuxCreditsEarnedByAllUsers
                    }));
                    return (0, Li.tZ)(xc, {
                        children: (0, Li.tZ)(Sr.gd, {
                            children: (0, Li.tZ)(fc.c, {
                                i18nKey: "footerText",
                                values: {
                                    totalDistributedRobux: (0, Ai.uf)(n)
                                },
                                components: {
                                    img: (0, Li.tZ)("img", {
                                        src: (0, Pi.j)(Na),
                                        width: 16,
                                        height: 16,
                                        alt: ""
                                    }),
                                    strong: (0, Li.tZ)("strong", {}),
                                    a: (0, Li.tZ)("a", {
                                        href: "https://now.gg/terms-and-privacy.html?".concat((0, Ai.wr)()),
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, tr.t)("termAndConditions")
                                    })
                                }
                            })
                        })
                    })
                },
                bc = function(n, e, t, i) {
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
                wc = function(n, e) {
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
                vc = function() {
                    var n = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsEarned
                        })),
                        e = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxRedemptionCodeList
                        })),
                        t = (0, xi.useState)(!0),
                        i = t[0],
                        r = t[1],
                        o = (0, xi.useState)(!0),
                        a = o[0],
                        l = o[1],
                        c = (0, xi.useState)("true" !== localStorage.getItem("ng-no-robux-notif-closed")),
                        d = c[0],
                        p = c[1],
                        s = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        u = (0, hi.v9)((function(n) {
                            return n.gamification.questClaimed
                        })),
                        f = (0, hi.I0)();
                    return (0, xi.useEffect)((function() {
                        s && bc(void 0, void 0, void 0, (function() {
                            var n;
                            return wc(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return e.trys.push([0, 2, , 3]), [4, ji.Z.getRedemptionHistory({}, {
                                            uaSessionId: (0, Ai.io)(mi.K3),
                                            uaId: (0, Ai.Fz)(mi.nP),
                                            playSessionId: di.ZP.playSessionId || (di.ZP.isAppPage || di.ZP.isHomePage || (0, di.DJ)() ? "NA" : "")
                                        })];
                                    case 1:
                                        return (n = e.sent()).status === Bi.YR.Success && f({
                                            type: Fo.Z.REDEMPTION_FLOW,
                                            payload: {
                                                robuxRedemptionCodeList: n.redemptionCodes
                                            }
                                        }), [3, 3];
                                    case 2:
                                        return e.sent(), [3, 3];
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }), []), (0, Li.BX)(Il, {
                        children: [(0, Li.BX)(wl, {
                            children: [u && (0, Li.tZ)(Ol, {}), (0, Li.tZ)("img", {
                                src: (0, Pi.j)(Na),
                                alt: "",
                                height: 48,
                                width: 48
                            }), u && (0, Li.BX)(Li.HY, {
                                children: [(0, Li.tZ)(vl, {
                                    src: (0, Pi.j)(Uo.Z),
                                    alt: "",
                                    height: 43,
                                    width: 43,
                                    first: !0
                                }), (0, Li.tZ)(vl, {
                                    src: (0, Pi.j)(Uo.Z),
                                    alt: "",
                                    height: 43,
                                    width: 43,
                                    first: !1
                                })]
                            }), (0, Li.BX)(Ia.GN, {
                                style: {
                                    gap: "4px"
                                },
                                children: [(0, Li.tZ)(Sr.IS, {
                                    children: (0, tr.t)("robuxWonSoFar")
                                }), (0, Li.tZ)(Al, {
                                    style: u ? {
                                        border: "1px solid #23AF29",
                                        background: "#004803"
                                    } : {},
                                    children: n
                                })]
                            })]
                        }), (0, Li.tZ)(Sl, {
                            children: (0, Li.tZ)(Bl, {
                                tabs: [{
                                    title: (0, tr.t)("quests"),
                                    onClick: function() {
                                        r(!0), l(!1)
                                    },
                                    event: "RobuxQuestButtonClicked"
                                }, {
                                    title: (0, tr.t)("jackpot"),
                                    onClick: function() {
                                        r(!1), l(!0)
                                    },
                                    event: "RobuxJackpotButtonClicked"
                                }, {
                                    title: (0, tr.t)("redeem"),
                                    onClick: function() {
                                        r(!1), l(!1)
                                    },
                                    event: "RobuxRedeemButtonClicked"
                                }]
                            })
                        }), i ? (0, Li.tZ)(uc, {}) : a ? (0, Li.BX)(Li.HY, {
                            children: [(0, Li.tZ)(_a, {}), (0, Li.tZ)(mc, {})]
                        }) : (0, Li.BX)(yl, {
                            children: [n >= di.ZP.appInfo.rwdMinRedemptionCredits ? (0, Li.tZ)(gl, {
                                loginToClaim: function() {
                                    f({
                                        type: er.Z.TOGGLE_LOGIN,
                                        payload: {
                                            showLogin: !0
                                        }
                                    })
                                }
                            }) : 0 === e.length ? (0, Li.BX)(Li.HY, {
                                children: [d && (0, Li.BX)(kl, {
                                    children: [(0, Li.tZ)("img", {
                                        src: (0, Pi.j)(xl),
                                        alt: "",
                                        height: 16,
                                        width: 16
                                    }), (0, Li.tZ)(Sr.gd, {
                                        children: (0, tr.t)("boostRobuxChances")
                                    }), (0, Li.tZ)("img", {
                                        alt: (0, tr.t)("close"),
                                        src: (0, Pi.j)(rr),
                                        style: {
                                            width: "14px",
                                            height: "14px",
                                            marginLeft: "12px",
                                            cursor: "pointer"
                                        },
                                        onClick: function() {
                                            localStorage.setItem("ng-no-robux-notif-closed", "true"), p(!1)
                                        }
                                    })]
                                }), (0, Li.BX)(Zl, {
                                    children: [(0, Li.tZ)("img", {
                                        src: (0, Pi.j)(hl),
                                        alt: "",
                                        height: 77,
                                        width: 77
                                    }), (0, Li.BX)(Pl, {
                                        children: [(0, Li.tZ)(Sr.gd, {
                                            children: (0, tr.t)("notEnoughRobuxHead")
                                        }), (0, Li.tZ)(Sr.IS, {
                                            style: {
                                                color: "white"
                                            },
                                            children: (0, tr.t)("earnRobuxToRedeem", {
                                                minRobuxRqd: di.ZP.appInfo.rwdMinRedemptionCredits
                                            })
                                        })]
                                    })]
                                })]
                            }) : null, 0 !== e.length && (0, Li.tZ)(el, {})]
                        })]
                    })
                },
                yc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Zc = Ni.ZP.div(qe || (qe = yc(["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  max-height: 100%;\n"]))),
                Pc = Zc,
                kc = function() {
                    var n = (0, hi.I0)();
                    return (0, xi.useEffect)((function() {
                        return function() {
                            n({
                                type: Fo.Z.JACKPOT_FLOW,
                                payload: {
                                    showJackpotFlow: !1,
                                    showRewardPopup: !1
                                }
                            })
                        }
                    }), []), (0, Li.tZ)(Pc, {
                        children: (0, Li.tZ)(vc, {})
                    })
                },
                Ac = {
                    src: "/play/_next/static/media/robux-coin-shadow.3dd0b674.svg",
                    height: 70,
                    width: 64
                },
                Sc = {
                    src: "/play/_next/static/media/meter-compact-bg.97e400da.svg",
                    height: 81,
                    width: 101
                },
                Ec = {
                    src: "/play/_next/static/media/meter-success-bg.19af1de9.svg",
                    height: 69,
                    width: 320
                },
                Oc = {
                    src: "/play/_next/static/media/meter-error-bg.fd0b26c3.svg",
                    height: 69,
                    width: 320
                },
                Ic = {
                    src: "/play/_next/static/media/robux-dollars.3f76bf4e.svg",
                    height: 16,
                    width: 16
                },
                Cc = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Rc = Ni.ZP.div(Je || (Je = Cc(["\n  padding: 1px;\n  border-radius: 12px;\n\n  .header {\n    margin-bottom: 8px;\n  }\n"], ["\n  padding: 1px;\n  border-radius: 12px;\n\n  .header {\n    margin-bottom: 8px;\n  }\n"]))),
                jc = Ni.ZP.div(We || (We = Cc(["\n  padding: 14.5px 16px;\n  border-radius: 11.5px;\n  background-color: ", ';\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n\n  &:before {\n    padding: 1px;\n    content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 11.5px;\n    background: linear-gradient(185.47deg, rgba(223, 126, 44, 0.2) 3.91%, #DFAC2C 95.17%);\n    -webkit-mask: \n      linear-gradient(#fff 0 0) content-box, \n      linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    pointer-events: none;\n  }\n\n  > div:first-child {\n    flex: 1;\n  }\n\n  > img {\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n'], ["\n  padding: 14.5px 16px;\n  border-radius: 11.5px;\n  background-color: ", ';\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n\n  &:before {\n    padding: 1px;\n    content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 11.5px;\n    background: linear-gradient(185.47deg, rgba(223, 126, 44, 0.2) 3.91%, #DFAC2C 95.17%);\n    -webkit-mask: \n      linear-gradient(#fff 0 0) content-box, \n      linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n    mask-composite: exclude;\n    pointer-events: none;\n  }\n\n  > div:first-child {\n    flex: 1;\n  }\n\n  > img {\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n'])), (function(n) {
                    return n.theme.colors.black20
                })),
                Bc = Ni.ZP.div(Ke || (Ke = Cc(["\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n\n  img {\n    position: absolute;\n    bottom: 16px;\n  }\n"], ["\n  width: 80px;\n  display: flex;\n  justify-content: center;\n  position: relative;\n  z-index: 1;\n\n  img {\n    position: absolute;\n    bottom: 16px;\n  }\n"]))),
                zc = Ni.ZP.div($e || ($e = Cc(["\n  z-index: 1;\n  min-width: 52px;\n  padding: 0 13px;\n  background-color: #483800;\n  border: 1px solid #AF8723;\n  border-radius: 30px;\n  ", "\n\n  h4 {\n    font-weight: 700;\n  }\n"], ["\n  z-index: 1;\n  min-width: 52px;\n  padding: 0 13px;\n  background-color: #483800;\n  border: 1px solid #AF8723;\n  border-radius: 30px;\n  ", "\n\n  h4 {\n    font-weight: 700;\n  }\n"])), Ca.be),
                Tc = Ni.ZP.div(nt || (nt = Cc(["\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: relative;\n  padding: 32px 16px 12px;\n  color: ", ";\n  position: absolute;\n  bottom: 5px;\n"], ["\n  background: url(", ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  position: relative;\n  padding: 32px 16px 12px;\n  color: ", ";\n  position: absolute;\n  bottom: 5px;\n"])), (function(n) {
                    return n.bgUrl
                }), (function(n) {
                    return n.success ? "#00C9BD" : "#FF3A30"
                })),
                Dc = Ni.ZP.div(et || (et = Cc(["\n  height: 64px;\n  position: relative;\n"], ["\n  height: 64px;\n  position: relative;\n"]))),
                Xc = Rc,
                Lc = function(n) {
                    var e = n.onOpen,
                        t = (0, hi.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsEarned
                        })),
                        i = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        r = !i && t >= 1,
                        o = i && t >= di.ZP.appInfo.rwdMinRedemptionCredits;
                    return (0, Li.BX)(Xc, {
                        children: [(0, Li.BX)(wo, {
                            className: "header",
                            onClick: e,
                            children: [(0, Li.tZ)("img", {
                                alt: "",
                                src: (0, Pi.j)(Ic),
                                width: 16,
                                height: 16
                            }), (0, Li.tZ)(Sr.IS, {
                                children: (0, tr.t)("robuxRewards")
                            }), (0, Li.tZ)(po.pL, {
                                color: "ascent"
                            })]
                        }), (0, Li.BX)(jc, {
                            children: [(0, Li.tZ)(ec, {}), (0, Li.BX)(Bc, {
                                children: [(0, Li.tZ)("img", {
                                    alt: "",
                                    src: (0, Pi.j)(Ac),
                                    height: 68,
                                    width: 62
                                }), (0, Li.tZ)(zc, {
                                    children: (0, Li.tZ)(Sr.js, {
                                        children: t
                                    })
                                })]
                            }), (0, Li.tZ)("img", {
                                alt: "",
                                src: (0, Pi.j)(Sc),
                                height: 80,
                                width: 101
                            })]
                        }), 0 !== t && (r || o) && (0, Li.tZ)(Dc, {
                            children: (0, Li.tZ)(Tc, {
                                success: o,
                                bgUrl: (0, Pi.j)(o ? Ec : Oc),
                                children: (0, Li.tZ)(Sr.gd, {
                                    children: (0, tr.t)(o ? "claimRobux" : "loginClaimRobux")
                                })
                            })
                        })]
                    })
                },
                _c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Fc = Ni.ZP.div(tt || (tt = _c(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: calc(100% - 52px);\n  margin-top: 20px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  height: calc(100% - 52px);\n  margin-top: 20px;\n"]))),
                Uc = Ni.ZP.div(it || (it = _c(["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 12px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 12px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.white70
                })),
                Nc = (0, Ni.ZP)(Sr.gd)(rt || (rt = _c(["\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  text-align: end;\n  text-transform: uppercase;\n"], ["\n  display: flex;\n  flex-flow: row-reverse;\n  align-items: center;\n  gap: 4px;\n  width: 100%;\n  text-align: end;\n  text-transform: uppercase;\n"]))),
                Gc = Ni.ZP.div(ot || (ot = _c(["\n  display: flex;\n  padding: 0px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  width: 100%;\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 0px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  width: 100%;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Mc = (0, Ni.ZP)(Sr.gd)(at || (at = _c(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n\n  img {\n    border-radius: 50%;\n  }\n"]))),
                Vc = Ni.ZP.div(lt || (lt = _c(["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"], ["\n  display: flex;\n  padding: 6px 12px;\n  align-items: center;\n  gap: 4px;\n  align-self: stretch;\n  border-radius: 6px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Yc = Ni.ZP.div(ct || (ct = _c(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-align: end;\n  width: 100%;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-align: end;\n  width: 100%;\n\n  img {\n    border-radius: 50%;\n  }\n"]))),
                Hc = (0, Ni.ZP)(Sr.lU)(dt || (dt = _c(["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: left;\n"], ["\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n  text-align: left;\n"]))),
                Qc = (0, Ni.ZP)(Sr.gd)(pt || (pt = _c(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n  color: ", ";\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  text-align: end;\n  color: ", ";\n\n  img {\n    border-radius: 50%;\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                qc = Ni.ZP.div(st || (st = _c(["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: 15px;\n  overflow-y: auto;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"], ["\n  display: flex;\n  height: 100%;\n  flex-direction: column;\n  gap: 15px;\n  overflow-y: auto;\n  width: 322px;\n  padding-right: 16px;\n  \n  &::-webkit-scrollbar {\n    display:block;\n    width: 5px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 10px;\n    opacity: 0.4;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                })),
                Jc = Ni.ZP.p(ut || (ut = _c(["\n  color: ", ";\n  text-align: center;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin: 8px 0px;\n"], ["\n  color: ", ";\n  text-align: center;\n  font-size: 10px;\n  font-weight: 400;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin: 8px 0px;\n"])), (function(n) {
                    return n.theme.colors.white70
                })),
                Wc = function() {
                    var n, e = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        t = (0, xi.useState)(null),
                        i = t[0],
                        r = t[1],
                        o = (0, hi.v9)((function(n) {
                            return n.gamification.dailyRankings
                        })),
                        a = (0, hi.v9)((function(n) {
                            return n.gamification.selfDailyRank
                        })),
                        l = (0, hi.v9)((function(n) {
                            return n.gamification.weeklyRankings
                        })),
                        c = (0, hi.v9)((function(n) {
                            return n.gamification.selfWeeklyRank
                        })),
                        d = (0, hi.v9)((function(n) {
                            return n.gamification.monthlyRankings
                        })),
                        p = (0, hi.v9)((function(n) {
                            return n.gamification.selfMonthlyRank
                        })),
                        s = (0, hi.v9)((function(n) {
                            return n.gamification.lastUpdatedAt
                        })),
                        u = (0, xi.useState)(o),
                        f = u[0],
                        g = u[1],
                        h = (0, xi.useState)(a),
                        x = h[0],
                        m = h[1],
                        b = parseInt(((Date.now() - s) / 1e3).toString(), 10),
                        w = (0, xi.useState)(b < 300 ? "".concat((0, tr.t)("seconds", {
                            seconds: b
                        })) : new Date(s).toLocaleString()),
                        v = w[0],
                        y = w[1],
                        Z = (0, hi.I0)(),
                        P = (0, xi.useRef)(null),
                        k = [{
                            title: (0, tr.t)("today"),
                            onClick: function() {
                                g(o), m(a)
                            },
                            event: "LeaderboardDailyButtonClicked"
                        }, {
                            title: (0, tr.t)("thisWeek"),
                            onClick: function() {
                                g(l), m(c)
                            },
                            event: "LeaderboardWeeklyButtonClicked"
                        }, {
                            title: (0, tr.t)("thisMonth"),
                            onClick: function() {
                                g(d), m(p)
                            },
                            event: "LeaderboardMonthlyButtonClicked"
                        }],
                        A = function() {
                            var n = e ? (0, Ki.et)() : null;
                            n && r(n)
                        };
                    return (0, xi.useEffect)((function() {
                        return A(), setInterval((function() {
                                var n = pi.Z.getState().gamification.lastUpdatedAt,
                                    e = parseInt(((Date.now() - n) / 1e3).toString(), 10);
                                y(e < 300 ? "".concat((0, tr.t)("seconds", {
                                    seconds: e
                                })) : new Date(n).toLocaleString())
                            }), 1e3), window.addEventListener("nggProfileDetailsUpdated", A),
                            function() {
                                window.removeEventListener("nggProfileDetailsUpdated", A)
                            }
                    }), []), (0, Li.BX)(Fc, {
                        children: [(0, Li.tZ)(Bl, {
                            tabs: k
                        }), (0, Li.tZ)(Jc, {
                            children: "".concat((0, tr.t)("lastUpdated"), " ").concat(v)
                        }), (0, Li.BX)(Uc, {
                            children: [(0, Li.tZ)(Sr.gd, {
                                style: {
                                    width: "26px"
                                },
                                children: "#"
                            }), (0, Li.tZ)(Sr.gd, {
                                style: {
                                    width: "-webkit-fill-available",
                                    textTransform: "uppercase"
                                },
                                children: (0, tr.t)("name")
                            }), (0, Li.BX)(Nc, {
                                children: [(0, Li.tZ)("img", {
                                    alt: (0, tr.t)("robux"),
                                    src: (0, Pi.j)(tl.Z),
                                    width: 12,
                                    height: 12
                                }), (0, tr.t)("robuxWon")]
                            })]
                        }), (0, Li.tZ)(qc, {
                            children: f.map((function(n, e) {
                                return (0, Li.BX)(Gc, {
                                    children: [(0, Li.tZ)(Sr.gd, {
                                        style: {
                                            width: "26px"
                                        },
                                        children: e + 1
                                    }), (0, Li.BX)(Mc, {
                                        children: [(0, Li.tZ)("img", {
                                            alt: "U",
                                            src: n.avatar,
                                            width: 24,
                                            height: 24
                                        }), n.handle]
                                    }), (0, Li.tZ)(Sr.IS, {
                                        style: {
                                            color: Dl.qm.colors.caution,
                                            textAlign: "right"
                                        },
                                        children: n.robuxEarned
                                    })]
                                })
                            }))
                        }), (0, Li.BX)(Vc, {
                            style: {
                                paddingRight: e ? "12px" : "6px"
                            },
                            children: [(0, Li.tZ)(Sr.QV, {
                                ref: P,
                                style: {
                                    marginRight: "4px",
                                    minWidth: e ? "unset" : "24px"
                                },
                                children: e ? x.rank : "--"
                            }), e ? (0, Li.BX)(Yc, {
                                style: {
                                    width: "".concat(274 - ((null === (n = P.current) || void 0 === n ? void 0 : n.getBoundingClientRect().width) || 20), "px")
                                },
                                children: [(0, Li.tZ)("img", {
                                    src: null === i || void 0 === i ? void 0 : i.avatar,
                                    alt: "U",
                                    width: 28,
                                    height: 28
                                }), (0, Li.tZ)(Hc, {
                                    children: null === i || void 0 === i ? void 0 : i.handle
                                }), (0, Li.tZ)(Sr.lU, {
                                    children: "[".concat((0, tr.t)("you"), "]")
                                }), (0, Li.tZ)(Sr.QV, {
                                    style: {
                                        color: Dl.qm.colors.caution,
                                        textAlign: "right"
                                    },
                                    children: x.robuxEarned
                                })]
                            }) : (0, Li.BX)(Li.HY, {
                                children: [(0, Li.BX)(Qc, {
                                    children: [(0, Li.tZ)(Wi.Z, {
                                        isLoggedIn: e,
                                        user: i,
                                        src: null === i || void 0 === i ? void 0 : i.avatar,
                                        size: 28
                                    }), (0, tr.t)("loginToViewRank")]
                                }), (0, Li.tZ)(Or.z, {
                                    size: "small",
                                    onClick: function() {
                                        Z({
                                            type: er.Z.TOGGLE_LOGIN,
                                            payload: {
                                                showLogin: !0
                                            }
                                        }), Z({
                                            type: er.Z.UPDATE_LOGIN_CONTEXT,
                                            payload: {
                                                loginContext: mi.$6.profile
                                            }
                                        })
                                    },
                                    style: {
                                        padding: "4px 11px"
                                    },
                                    children: (0, tr.t)("login")
                                })]
                            })]
                        })]
                    })
                },
                Kc = {
                    src: "/play/_next/static/media/leaderboard.bd6c1332.svg",
                    height: 16,
                    width: 16
                },
                $c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                nd = Ni.ZP.div(ft || (ft = $c(["\n  display: inline-flex;\n  padding: 4px 6px 4px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  color:  ", ";\n  font-size: 10px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  height: 24px;\n  z-index: 1;\n"], ["\n  display: inline-flex;\n  padding: 4px 6px 4px 4px;\n  align-items: center;\n  gap: 2px;\n  border-radius: 30px;\n  border: 1px solid ", ";\n  background: ", ";\n  backdrop-filter: blur(12px);\n  color:  ", ";\n  font-size: 10px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: 0.3px;\n  height: 24px;\n  z-index: 1;\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.black40
                }), (function(n) {
                    return n.theme.colors.white
                })),
                ed = Ni.ZP.div(gt || (gt = $c(["\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  border-radius: 50%;\n  align-self: self-end;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 24px;\n  height: 24px;\n  flex-shrink: 0;\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  border-radius: 50%;\n  align-self: self-end;\n  z-index: 1;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                td = Ni.ZP.div(ht || (ht = $c(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"]))),
                id = Ni.ZP.div(xt || (xt = $c(["\n  display: flex;\n  width: 81px;\n  height: 71px;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  width: 81px;\n  height: 71px;\n  justify-content: space-between;\n"]))),
                rd = Ni.ZP.img(mt || (mt = $c(["\n  border-radius: 50%;\n  position: absolute;\n  margin-left: 16px;\n  transform: translateY(7px);\n"], ["\n  border-radius: 50%;\n  position: absolute;\n  margin-left: 16px;\n  transform: translateY(7px);\n"]))),
                od = function(n) {
                    var e = n.onOpen,
                        t = (0, hi.v9)((function(n) {
                            return n.gamification.dailyRankings
                        }));
                    return (0, Li.BX)(bo, {
                        children: [(0, Li.BX)(wo, {
                            onClick: e,
                            children: [(0, Li.tZ)("img", {
                                alt: (0, tr.t)("leaderboard"),
                                src: (0, Pi.j)(Kc),
                                width: 16,
                                height: 16
                            }), (0, Li.tZ)(Sr.IS, {
                                children: (0, tr.t)("rankings")
                            }), (0, Li.tZ)(po.pL, {
                                color: "ascent"
                            })]
                        }), (0, Li.tZ)(jc, {
                            style: {
                                height: "60px",
                                marginTop: "24px"
                            },
                            children: (0, Li.tZ)(td, {
                                children: t.slice(0, 3).map((function(n, e) {
                                    return (0, Li.BX)(id, {
                                        children: [(0, Li.BX)(nd, {
                                            children: [(0, Li.tZ)("img", {
                                                alt: (0, tr.t)("robux"),
                                                src: (0, Pi.j)(tl.Z),
                                                width: 12,
                                                height: 12
                                            }), n.robuxEarned]
                                        }), (0, Li.tZ)(rd, {
                                            alt: (0, tr.t)("user"),
                                            src: n.avatar,
                                            width: 64,
                                            height: 64
                                        }), (0, Li.tZ)(ed, {
                                            children: (0, Li.tZ)(Sr.qm, {
                                                children: "#".concat(e + 1)
                                            })
                                        })]
                                    })
                                }))
                            })
                        })]
                    })
                },
                ad = function(n, e, t, i) {
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
                ld = function(n, e) {
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
                cd = function(n) {
                    var e = n.robuxView,
                        t = n.profileView,
                        i = n.leaderboardView,
                        r = n.onClose,
                        o = n.onUpdate,
                        a = (0, hi.I0)(),
                        l = (0, hi.v9)((function(n) {
                            var e;
                            return null === (e = n.user) || void 0 === e ? void 0 : e.recentPlayedApps
                        })),
                        c = (0, xi.useState)(!1),
                        d = c[0],
                        p = c[1],
                        s = (0, xi.useState)(!1),
                        u = s[0],
                        f = s[1],
                        g = (0, xi.useState)([]),
                        h = g[0],
                        x = g[1],
                        m = (0, xi.useState)(""),
                        b = m[0],
                        w = m[1],
                        v = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        y = (0, xi.useState)(null),
                        Z = y[0],
                        P = y[1],
                        k = (0, xi.useRef)(null),
                        A = (0, xi.useRef)(null),
                        S = (0, xi.useRef)(null),
                        E = (0, xi.useRef)(null),
                        O = (0, xi.useRef)(null),
                        I = (0, hi.v9)((function(n) {
                            return n.gamification.dailyRankings
                        })),
                        C = (0, hi.v9)((function(n) {
                            return n.gamification.lastUpdatedAt
                        })),
                        R = (0, hi.v9)((function(n) {
                            return n.play.isAdBlockerEnabled
                        })),
                        j = (0, hi.v9)((function(n) {
                            return n.user.questsInfo
                        })),
                        B = function() {
                            var n, e, t, i;
                            setTimeout((function() {
                                r()
                            }), 500), null === (n = k.current) || void 0 === n || n.classList.add("close"), null === (e = A.current) || void 0 === e || e.classList.add("close"), null === (t = S.current) || void 0 === t || t.classList.add("close"), null === (i = E.current) || void 0 === i || i.classList.add("close"), j.forEach((function(n) {
                                1 === n.progressRatio && n.earnCount - n.claimCount !== 0 && a({
                                    type: Ri.Z.UPDATE_ACTION,
                                    payload: {
                                        showNotifDot: !0
                                    }
                                })
                            }))
                        },
                        z = function() {
                            f(!1)
                        },
                        T = function() {
                            var n = v ? (0, Ki.et)() : null;
                            n && P(n)
                        };
                    return (0, xi.useEffect)((function() {
                        i && Date.now() - C > 6e4 && ad(void 0, void 0, void 0, (function() {
                            var n;
                            return ld(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, ji.Z.getLeaderboard({}, {})];
                                    case 1:
                                        return n = e.sent(), (0, Ai.Hg)(n), [2]
                                }
                            }))
                        }))
                    }), [i]), (0, xi.useEffect)((function() {
                        return T(), window.addEventListener("nggProfileDetailsUpdated", T),
                            function() {
                                window.removeEventListener("nggProfileDetailsUpdated", T)
                            }
                    }), []), (0, xi.createPortal)((0, Li.BX)(sr, {
                        ref: E,
                        onClick: function(n) {
                            n.target === E.current && B()
                        },
                        style: d ? {
                            zIndex: "100"
                        } : {},
                        children: [(0, Li.BX)(gr, {
                            ref: k,
                            children: [!d && (0, Li.BX)(vr, {
                                children: [i ? (0, tr.t)("rankings") : e ? (0, tr.t)("winRobuxTitle") : (0, tr.t)("profile"), (0, Li.tZ)("img", {
                                    alt: "",
                                    src: (0, Pi.j)(or),
                                    style: {
                                        transform: i || !(0, Ai.wA)() ? "translate(239px, -14px)" : e || !e && R ? "translate(191px, -14px)" : "translate(143px, -14px)"
                                    }
                                })]
                            }), t && !d && (0, Li.BX)(Li.HY, {
                                children: [(0, Li.BX)(Ar, {
                                    children: [(0, Li.tZ)(Tr, {
                                        userStore: Z,
                                        onEdit: function() {
                                            v ? f(!0) : a({
                                                type: er.Z.TOGGLE_LOGIN,
                                                payload: {
                                                    showLogin: !0
                                                }
                                            })
                                        }
                                    }), (0, Li.tZ)(Hr, {}), (0, Li.tZ)(kr, {}), (0, Ai.wA)() && (0, Ai.c6)() && (0, Li.BX)(Li.HY, {
                                        children: [(0, Li.tZ)(Lc, {
                                            onOpen: function() {
                                                a({
                                                    type: Ri.Z.TOGGLE_VIEW,
                                                    payload: {
                                                        showProfileView: !1,
                                                        showRobuxView: !0,
                                                        showLeaderboardView: !1
                                                    }
                                                })
                                            }
                                        }), (0, Li.tZ)(kr, {})]
                                    }), I.length > 0 && (0, Li.BX)(Li.HY, {
                                        children: [(0, Li.tZ)(od, {
                                            onOpen: function() {
                                                a({
                                                    type: Ri.Z.TOGGLE_VIEW,
                                                    payload: {
                                                        showProfileView: !1,
                                                        showRobuxView: !1,
                                                        showLeaderboardView: !0
                                                    }
                                                })
                                            }
                                        }), (0, Li.tZ)(kr, {})]
                                    }), (0, Li.tZ)(Zo, {
                                        onOpen: function() {
                                            var n, e;
                                            n = l, e = "recentlyPlayed", p(!0), x(n), w(e)
                                        },
                                        apps: l,
                                        headerImg: nr,
                                        headerText: "recentlyPlayed",
                                        noAppText: "noAppRecents",
                                        noAppsDisable: !0
                                    }), (0, Li.tZ)(kr, {})]
                                }), (0, Li.tZ)(co, {})]
                            }), e && !d && (0, Li.tZ)(kc, {}), d && (0, Li.tZ)(ho, {
                                onBack: function() {
                                    p(!1)
                                },
                                apps: h,
                                headerText: b
                            }), i && (0, Li.tZ)(Wc, {})]
                        }), (0, Li.tZ)(br, {
                            bgImg: !0,
                            ref: A
                        }), (0, Li.BX)(Pr, {
                            ref: S,
                            children: [(0, Li.tZ)(wr, {
                                onClick: B,
                                className: "close",
                                children: (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("close"),
                                    src: (0, Pi.j)(rr),
                                    style: {
                                        width: "18px",
                                        height: "18px",
                                        margin: "3px"
                                    }
                                })
                            }), (0, Li.tZ)(wr, {
                                onClick: function() {
                                    a({
                                        type: "GET_SUPPORT"
                                    })
                                },
                                className: "support",
                                children: (0, Li.tZ)("img", {
                                    alt: (0, tr.t)("support"),
                                    src: (0, Pi.j)(ir)
                                })
                            })]
                        }), u && (0, Li.tZ)(sr, {
                            ref: O,
                            onClick: function(n) {
                                n.target === O.current && z()
                            },
                            children: (0, Li.tZ)(_o, {
                                onClose: z,
                                onUpdate: function() {
                                    T(), o()
                                }
                            })
                        })]
                    }), document.body)
                },
                dd = t(17744),
                pd = function() {
                    var n = (0, hi.I0)(),
                        e = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        t = (0, hi.v9)((function(n) {
                            return n.gamification.showRobuxView
                        })),
                        i = (0, hi.v9)((function(n) {
                            return n.gamification.showProfileView
                        })),
                        r = (0, xi.useState)(null),
                        o = r[0],
                        a = r[1],
                        l = (0, hi.v9)((function(n) {
                            return n.play.draggableState
                        })),
                        c = ((0, hi.v9)((function(n) {
                            return n.play.isRecording
                        })), (0, hi.v9)((function(n) {
                            return n.auth.userStoreUpdated
                        }))),
                        d = (0, hi.v9)((function(n) {
                            return n.gamification.showLeaderboardView
                        })),
                        p = function() {
                            var n = e ? (0, Ki.et)() : null;
                            n && a(n), n && !n.handle && ji.Z.getUserProfile({}, {}).then((function(n) {
                                (0, Ki.Lj)(n);
                                var t = e ? (0, Ki.et)() : null;
                                t && a(t)
                            }))
                        };
                    (0, xi.useEffect)((function() {
                        p(), !e && (0, di.Us)() && pi.Z.dispatch({
                            type: Si.Z.UPDATE_LOGIN_TOOLTIP,
                            payload: {
                                isTooltipVisible: !0
                            }
                        })
                    }), []), (0, xi.useEffect)((function() {
                        p(), n((0, $i.J)())
                    }), [c, e]);
                    var s = function() {
                        "drag" !== l && ((0, di.Sr)(), pi.Z.dispatch({
                            type: Si.Z.UPDATE_LOGIN_TOOLTIP,
                            payload: {
                                isTooltipVisible: !1
                            }
                        }), pi.Z.dispatch({
                            type: Si.Z.SET_SENSITIVITY_POPUP,
                            payload: {
                                isSensitivityPopupOpen: !1
                            }
                        }), n({
                            type: Ri.Z.TOGGLE_VIEW,
                            payload: {
                                showProfileView: !0,
                                showRobuxView: !1,
                                showLeaderboardView: !1
                            }
                        }), (0, si.L9)(mi.Kf))
                    };
                    return (0, Li.BX)(Li.HY, {
                        children: [(0, Li.tZ)(dd.S1, {
                            isLoggedIn: e,
                            children: (0, Li.tZ)(Wi.Z, {
                                id: "ng-profile",
                                isLoggedIn: e,
                                user: o,
                                src: null === o || void 0 === o ? void 0 : o.avatar,
                                click: function() {
                                    return s()
                                }
                            })
                        }), (i || t || d) && (0, Li.tZ)(cd, {
                            robuxView: t && "mob" !== window.nggClientIpInfo.browserCode,
                            profileView: i,
                            leaderboardView: d,
                            onClose: function() {
                                n({
                                    type: Ri.Z.TOGGLE_VIEW,
                                    payload: {
                                        showProfileView: !1,
                                        showRobuxView: !1,
                                        showLeaderboardView: !1
                                    }
                                })
                            },
                            onUpdate: function() {
                                var n = e ? (0, Ki.et)() : null;
                                a(n)
                            }
                        })]
                    })
                },
                sd = t(25186),
                ud = t(77360),
                fd = t(71660),
                gd = t(39475),
                hd = function(n) {
                    var e = n.icon,
                        t = n.element,
                        i = n.channelUrl;
                    return (0, Li.tZ)(Ji.aU, {
                        onClick: function() {
                            (0, si.L9)("UserInteraction", {
                                element: t,
                                action: "Clicked"
                            }), window.open(i, "_blank", "noopener")
                        },
                        className: t.toLowerCase(),
                        children: (0, Li.tZ)("img", {
                            alt: "",
                            src: (0, Pi.j)(e),
                            style: {
                                width: "24px",
                                height: "24px"
                            }
                        })
                    })
                },
                xd = t(42385),
                md = t(20948),
                bd = t(29871),
                wd = {
                    src: "/play/_next/static/media/secretPassage.56f8c667.jpg",
                    height: 460,
                    width: 760,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAcEAABBAMBAAAAAAAAAAAAAAACAAEDERITMVH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABcRAAMBAAAAAAAAAAAAAAAAAAABMQL/2gAMAwEAAhEDEQA/AJvNoYhEYzYceZtfPatERDpeqf/Z"
                },
                vd = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                yd = Ni.ZP.div(bt || (bt = vd(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Zd = (0, Ni.iv)(wt || (wt = vd(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 0px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 0px;\n    margin: 0;\n  }\n"]))),
                Pd = Ni.ZP.div(vt || (vt = vd(["\n  ", "\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 8px; \n\n  > p {\n    color: ", ";\n    text-align: center; \n  }\n"], ["\n  ", "\n  gap: 12px;\n  flex-direction: column;\n  margin-top: 8px; \n\n  > p {\n    color: ", ";\n    text-align: center; \n  }\n"])), Ca.be, (function(n) {
                    return n.theme.colors.white70
                })),
                kd = (0, Ni.ZP)(Sr.Bb)(yt || (yt = vd(["\n  margin: 8px auto 12px;\n  text-align: center;\n"], ["\n  margin: 8px auto 12px;\n  text-align: center;\n"]))),
                Ad = (0, Ni.ZP)(na.Yd)(Zt || (Zt = vd(["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))),
                Sd = Ni.ZP.div(Pt || (Pt = vd(["\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px 16px;\n  margin: 16px -24px 0px -24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n"], ["\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 16px 24px 16px;\n  margin: 16px -24px 0px -24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(255, 255, 255, 0.8);\n"]))),
                Ed = Ni.ZP.div(kt || (kt = vd(["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n"]))),
                Od = Ni.ZP.p(At || (At = vd(["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin: 0 0 0 4px;\n  &:after {\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    content: '';\n    transform: translate(-50%, -50%) rotate(45deg);\n    left: 50%;\n    top: 50%;\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\n    border-right: 1px solid rgba(255, 255, 255, 0.8);\n  }\n"], ["\n  position: relative;\n  width: 16px;\n  height: 16px;\n  margin: 0 0 0 4px;\n  &:after {\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    content: '';\n    transform: translate(-50%, -50%) rotate(45deg);\n    left: 50%;\n    top: 50%;\n    border-top: 1px solid rgba(255, 255, 255, 0.8);\n    border-right: 1px solid rgba(255, 255, 255, 0.8);\n  }\n"]))),
                Id = Ni.ZP.p(St || (St = vd(["\n   font-weight: 600;\n   font-size: 20px;\n   line-height: 150%;\n   margin: 0;\n   color: ", ";\n"], ["\n   font-weight: 600;\n   font-size: 20px;\n   line-height: 150%;\n   margin: 0;\n   color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                Cd = Ni.ZP.p(Et || (Et = vd(["\n   color: rgba(255, 255, 255, 1);\n   font-size: 16px;\n   line-height: 24px;\n   font-weight: 600;\n   margin: 0;\n"], ["\n   color: rgba(255, 255, 255, 1);\n   font-size: 16px;\n   line-height: 24px;\n   font-weight: 600;\n   margin: 0;\n"]))),
                Rd = Ni.ZP.a(Ot || (Ot = vd(["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  .hover {\n    display: initial;\n  }\n  img {\n    margin-right: 4px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 7px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.8);\n  border-radius: 4px;\n  cursor: pointer;\n  text-decoration: none;\n  .hover {\n    display: initial;\n  }\n  img {\n    margin-right: 4px;\n  }\n"]))),
                jd = Ni.ZP.div(It || (It = vd(["\n  display: flex;\n  align-items: center;\n  margin: 0 0 16px 0;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: 0 0 16px 0;\n"]))),
                Bd = Ni.ZP.ul(Ct || (Ct = vd(["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.7);\n   margin-bottom: 8px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"], ["\n   margin: 0;\n   padding: 0;\n   list-style-type: decimal;\n   font-weight: 400;\n   font-size: 16px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.7);\n   margin-bottom: 8px;\n   padding-left: 20px;\n   li {\n      margin: 0;\n      padding: 0;\n      span {\n         color: #B3D661;\n      }\n   }\n"]))),
                zd = Ni.ZP.p(Rt || (Rt = vd(["\n   margin: 0 2px 0 0;\n"], ["\n   margin: 0 2px 0 0;\n"]))),
                Td = yd,
                Dd = t(7013),
                Xd = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ld = Ni.ZP.div(jt || (jt = Xd(["\n  padding: 10px 14px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n\n  h6 {\n    font-weight: 700;\n  }\n"], ["\n  padding: 10px 14px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 6px;\n\n  h6 {\n    font-weight: 700;\n  }\n"])), (function(n) {
                    return n.theme.colors.black20
                }), (function(n) {
                    return n.theme.colors.success
                })),
                _d = function() {
                    return (0, Li.tZ)(Ld, {
                        children: (0, Li.tZ)(Sr.IS, {
                            children: (0, tr.t)("rewardValue")
                        })
                    })
                },
                Fd = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Ud = ((0, Ni.ZP)(na.Yd)(Bt || (Bt = Fd(["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin: 32px auto 0;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))), Ni.ZP.div(zt || (zt = Fd(["\n  ", "\n  gap: 5px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 10.5px 24px;\n  margin: 32px auto 0;\n  width: fit-content;\n"], ["\n  ", "\n  gap: 5px;\n  background: ", ";\n  border-radius: 8px;\n  padding: 10.5px 24px;\n  margin: 32px auto 0;\n  width: fit-content;\n"])), Ca.be, (function(n) {
                    return n.theme.colors.black20
                }))),
                Nd = Ni.ZP.span(Tt || (Tt = Fd(["\n  position: relative;\n\n  i {\n    color: ", ";\n    position: relative;\n    z-index: 1;\n  }\n  &::after {\n    content: '';\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: ", ";\n  }\n"], ["\n  position: relative;\n\n  i {\n    color: ", ";\n    position: relative;\n    z-index: 1;\n  }\n  &::after {\n    content: '';\n    width: 50%;\n    height: 50%;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.green
                }), (function(n) {
                    return n.theme.colors.white
                })),
                Gd = function(n, e, t, i) {
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
                Md = function(n, e) {
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
                Vd = function(n) {
                    var e = n.showMessage,
                        t = void 0 === e || e,
                        i = n.btnText,
                        r = void 0 === i ? "" : i,
                        o = n.onCopied,
                        a = (0, xi.useState)(!1),
                        l = a[0],
                        c = a[1],
                        d = (0, hi.v9)((function(n) {
                            return n.play.inviteLink
                        })),
                        p = (0, hi.I0)();
                    return (0, xi.useEffect)((function() {
                        Gd(void 0, void 0, void 0, (function() {
                            var n;
                            return Md(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        if (d) return [2];
                                        e.label = 1;
                                    case 1:
                                        return e.trys.push([1, 3, , 4]), [4, ji.Z.getInviteLink({
                                            appId: di.ZP.appInfo.appId
                                        }, {})];
                                    case 2:
                                        return (n = e.sent()).status === Bi.YR.Success && p({
                                            type: Si.Z.UPDATE_REFER_EARN_DATA,
                                            payload: {
                                                inviteLink: n.inviteUrl
                                            }
                                        }), [3, 4];
                                    case 3:
                                        return e.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                            }))
                        }))
                    }), [d]), l && t ? (0, Li.BX)(Ud, {
                        children: [(0, Li.tZ)(Nd, {
                            children: (0, Li.tZ)(Di.Z, {
                                name: "active",
                                size: 22
                            })
                        }), (0, Li.tZ)(Sr.QV, {
                            children: (0, tr.t)("inviteLinkCopied")
                        })]
                    }) : (0, Li.tZ)(Ad, {
                        onClick: function() {
                            d && ((0, Ua.FF)(d), c(!0), (0, si.L9)(mi.ss), o && o())
                        },
                        disabled: !d,
                        children: (0, Li.tZ)(Sr.QV, {
                            children: (0, tr.t)(r || "copyInviteLink")
                        })
                    })
                },
                Yd = function(n) {
                    var e = n.toggle,
                        t = n.onClose,
                        i = n.loginToInvite,
                        r = n.setSecretPassageState,
                        o = n.secretPassage,
                        a = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        l = (0, wi.$)().t,
                        c = function() {
                            (0, si.L9)("SecretPassageViewed"), r(!0)
                        };
                    return (0, Li.tZ)(bd.Z, {
                        modalStyles: Zd,
                        onClose: function() {
                            setTimeout((function() {
                                r(!1)
                            }), 500), t && t()
                        },
                        toggle: e,
                        children: o ? (0, Li.BX)("div", {
                            children: [(0, Li.tZ)(jd, {
                                children: (0, Li.tZ)(Id, {
                                    children: l("playRoblox")
                                })
                            }), (0, Li.BX)(Cd, {
                                children: [l("hint"), ":"]
                            }), (0, Li.BX)(Bd, {
                                children: [(0, Li.tZ)("li", {
                                    children: (0, Li.BX)(fc.c, {
                                        i18nKey: "findSolitaire",
                                        children: ["Play \u201c", (0, Li.tZ)("span", {
                                            children: "Solitaire"
                                        }), "\u201d on now.gg."]
                                    })
                                }), (0, Li.tZ)("li", {
                                    children: l("getAdFree")
                                })]
                            }), (0, Li.tZ)("img", {
                                src: (0, Pi.j)(wd),
                                alt: "secretPassage",
                                width: 380,
                                height: 230
                            }), (0, Li.BX)(Sd, {
                                children: [(0, Li.tZ)(Sr.QV, {
                                    children: l("stilConfused")
                                }), (0, Li.BX)(Rd, {
                                    href: mi.ul,
                                    target: "_blank",
                                    onClick: c,
                                    rel: "noopener",
                                    id: "ng-discord-btn",
                                    children: [(0, Li.tZ)("img", {
                                        src: (0, Pi.j)(Qr.Z),
                                        alt: "search",
                                        width: 16,
                                        height: 16
                                    }), (0, Li.tZ)(Sr.IS, {
                                        children: l("askForHelp")
                                    })]
                                })]
                            })]
                        }) : (0, Li.BX)(Td, {
                            children: [(0, Li.tZ)(Dd.Z, {
                                height: 144,
                                width: 144,
                                applyAnimation: !0
                            }), (0, Li.tZ)(kd, {
                                children: l("invite&Earn")
                            }), (0, Li.BX)(Pd, {
                                children: [(0, Li.tZ)(Sr.TZ, {
                                    children: l("inviteFriends")
                                }), (0, Li.tZ)(_d, {})]
                            }), a ? (0, Li.tZ)(Vd, {}) : (0, Li.tZ)(Ad, {
                                onClick: i,
                                children: (0, Li.tZ)(Sr.QV, {
                                    children: l("loginToInvite")
                                })
                            }), (0, Li.BX)(Sd, {
                                children: [(0, Li.tZ)(Sr.QV, {
                                    children: l("cheatCode")
                                }), (0, Li.BX)(Ed, {
                                    onClick: c,
                                    children: [(0, Li.tZ)(zd, {
                                        children: "\u26a1"
                                    }), (0, Li.tZ)(Sr.IS, {
                                        children: l("playInstantly")
                                    }), (0, Li.tZ)(Od, {})]
                                })]
                            })]
                        })
                    })
                },
                Hd = t(64857),
                Qd = t(49555),
                qd = t(91469),
                Jd = t(94036),
                Wd = t(60034),
                Kd = function(n) {
                    var e = n.toggle,
                        t = n.onClose;
                    return (0, xi.useEffect)((function() {
                        e && (0, si.L9)(mi.JP, {
                            loginPageContext: mi.$6.inviter
                        })
                    }), [e]), (0, Li.tZ)(bd.Z, {
                        modalStyles: Wd.il,
                        onClose: t,
                        toggle: e,
                        children: (0, Li.BX)(Wd.ZP, {
                            children: [(0, Li.tZ)(Dd.Z, {
                                height: 144,
                                width: 144,
                                applyAnimation: !0
                            }), (0, Li.tZ)(Wd.Dx, {
                                children: (0, tr.t)("signinToPlayAdFreeTime")
                            }), (0, Li.tZ)(Sr.lU, {
                                children: (0, tr.t)("claimPlayTime")
                            }), (0, Li.tZ)(Jd.Z, {
                                pageContext: mi.$6.inviter,
                                params: {
                                    triggeredBy: "rewards"
                                }
                            }), (0, Li.tZ)(qd.Z, {})]
                        })
                    })
                },
                $d = t(22012),
                np = t(68472),
                ep = t(12812),
                tp = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                ip = Ni.ZP.div(Lt || (Lt = tp(["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  .modal-overlay {\n    top: ", "px;\n    background: ", ";\n    transition: all 0.6s ease-out;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  height: 100%;\n  width: 100%;\n\n  .modal-overlay {\n    top: ", "px;\n    background: ", ";\n    transition: all 0.6s ease-out;\n  }\n\n  ", "\n"])), (function(n) {
                    return n.topOffset
                }), (function(n) {
                    return n.theme.colors.black
                }), (function(n) {
                    return n.toggle ? (0, Ni.iv)(Dt || (Dt = tp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), ja) : (0, Ni.iv)(Xt || (Xt = tp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Ba)
                })),
                rp = (0, Ni.iv)(_t || (_t = tp(["\n  width: 460px;\n  > div {\n    color: ", ";\n    margin: 24px 24px 32px;\n  }\n"], ["\n  width: 460px;\n  > div {\n    color: ", ";\n    margin: 24px 24px 32px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                op = Ni.ZP.div(Ft || (Ft = tp(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                ap = ip,
                lp = function(n) {
                    var e = n.toggle,
                        t = n.earnedMinutes,
                        i = n.onClose,
                        r = (0, xi.useState)(0),
                        o = r[0],
                        a = r[1],
                        l = (0, hi.v9)((function(n) {
                            return n.play.consoleHeaderRef
                        })),
                        c = (0, xi.useCallback)((function() {
                            var n;
                            a((null === (n = null === l || void 0 === l ? void 0 : l.current) || void 0 === n ? void 0 : n.getBoundingClientRect().height) || 0)
                        }), [l]);
                    return (0, xi.useEffect)((function() {
                        return c(), window.addEventListener("resizeDone", c),
                            function() {
                                window.removeEventListener("resizeDone", c)
                            }
                    }), [c]), xi.default.createPortal((0, Li.tZ)(ep.Z, {
                        toggle: e,
                        exitingDelay: .6,
                        children: (0, Li.tZ)(ap, {
                            topOffset: o,
                            toggle: e,
                            children: (0, Li.BX)($d.Z, {
                                modalStyles: rp,
                                children: [(0, Li.tZ)(np.T, {
                                    onClick: i,
                                    children: (0, Li.tZ)(Di.Z, {
                                        name: "cross-thin",
                                        size: 24
                                    })
                                }), (0, Li.tZ)(Dd.Z, {
                                    height: 144,
                                    width: 144,
                                    applyAnimation: !0
                                }), (0, Li.tZ)(kd, {
                                    children: (0, tr.t)("earnedAdFreeMinutes", {
                                        minutes: t
                                    })
                                }), (0, Li.BX)(Pd, {
                                    children: [(0, Li.tZ)(Sr.TZ, {
                                        children: (0, tr.t)("inviteMoreFriends")
                                    }), (0, Li.tZ)(_d, {})]
                                }), (0, Li.tZ)(Vd, {})]
                            })
                        })
                    }), document.body)
                },
                cp = {
                    src: "/play/_next/static/media/account-exists.8b2ddecd.svg",
                    height: 144,
                    width: 144
                },
                dp = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                pp = Ni.ZP.div(Ut || (Ut = dp(["\n  color: ", ";\n"], ["\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                sp = (0, Ni.iv)(Nt || (Nt = dp(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"]))),
                up = Ni.ZP.div(Gt || (Gt = dp(["\n  display: flex;\n  width: fit-content;\n  margin: auto;\n"], ["\n  display: flex;\n  width: fit-content;\n  margin: auto;\n"]))),
                fp = pp,
                gp = function(n) {
                    var e = n.toggle,
                        t = n.onClose;
                    return (0, Li.tZ)(bd.Z, {
                        modalStyles: sp,
                        onClose: t,
                        toggle: e,
                        children: (0, Li.BX)(fp, {
                            children: [(0, Li.tZ)(up, {
                                children: (0, Li.tZ)("img", {
                                    src: (0, Pi.j)(cp),
                                    height: 144,
                                    width: 144,
                                    alt: "account exist"
                                })
                            }), (0, Li.tZ)(kd, {
                                children: (0, tr.t)("accountAlreadyExists")
                            }), (0, Li.BX)(Pd, {
                                children: [(0, Li.BX)(Sr.TZ, {
                                    children: [(0, Li.tZ)("strong", {
                                        children: (0, tr.t)("stillWinAdFreeTime")
                                    }), (0, Li.tZ)("br", {}), (0, tr.t)("inviteMoreFriends")]
                                }), (0, Li.tZ)(_d, {})]
                            }), (0, Li.tZ)(Vd, {})]
                        })
                    })
                },
                hp = {
                    src: "/play/_next/static/media/play-time.f80859eb.svg",
                    height: 110,
                    width: 101
                },
                xp = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                mp = (Ni.ZP.section(Ht || (Ht = xp(["\n  ", "\n  padding: 11px 12px 11px 9px;\n  background: ", ";\n  margin-top: -12px;\n  margin-bottom: -12px;\n  position: relative;\n\n  ", "\n\n  ", "\n"], ["\n  ", "\n  padding: 11px 12px 11px 9px;\n  background: ", ";\n  margin-top: -12px;\n  margin-bottom: -12px;\n  position: relative;\n\n  ", "\n\n  ", "\n"])), Ca.be, (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    var e = n.countDownStarted,
                        t = n.theme;
                    return e && (0, Ni.iv)(Mt || (Mt = xp(["\n    background: rgba(243, 54, 33, 0.1);\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      background: ", ";\n    }\n  "], ["\n    background: rgba(243, 54, 33, 0.1);\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 100%;\n      position: absolute;\n      left: 0;\n      background: ", ";\n    }\n  "])), t.colors.error)
                }), (function(n) {
                    return n.toggle ? (0, Ni.iv)(Vt || (Vt = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), ja) : (0, Ni.iv)(Yt || (Yt = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Ba)
                })), Ni.ZP.div(Qt || (Qt = xp(["\n  ", "\n  gap: 18px;\n  margin-left: 25px;\n\n  button {\n    border: 1px solid ", ";\n    padding: 4px 12px;\n    background: transparent;\n    color: ", ";\n    border-radius: ", ";\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n    box-shadow: none;\n    \n    &:hover, &:focus {\n      background: transparent;\n      color: ", ";\n    }\n  }\n\n  img {\n    cursor: pointer;\n    transition: transform 0.6s ease-out;\n    transform: ", ";\n  }\n"], ["\n  ", "\n  gap: 18px;\n  margin-left: 25px;\n\n  button {\n    border: 1px solid ", ";\n    padding: 4px 12px;\n    background: transparent;\n    color: ", ";\n    border-radius: ", ";\n    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));\n    box-shadow: none;\n    \n    &:hover, &:focus {\n      background: transparent;\n      color: ", ";\n    }\n  }\n\n  img {\n    cursor: pointer;\n    transition: transform 0.6s ease-out;\n    transform: ", ";\n  }\n"])), Ca.be, (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    return n.openModal ? "rotateX(0)" : "rotateX(180deg)"
                })), (0, Ni.iv)(qt || (qt = xp(["\n  display: none;\n"], ["\n  display: none;\n"]))), (0, Ni.iv)(Jt || (Jt = xp(["\n  z-index: 1 !important;\n"], ["\n  z-index: 1 !important;\n"]))), Ni.ZP.div($t || ($t = xp(["\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: -3px;\n  transform: translateY(-100%);\n  background: ", ";\n  padding: 16px;\n  border-radius: 12px;\n  isolation: isolate;\n\n  h4 {\n    margin-bottom: 8px;\n    font-weight: 700;\n  }\n\n  button {\n    margin: 0;\n    padding: 7px 16px;\n    white-space: nowrap;\n    border-radius: 6px;\n\n    h5 {\n      font-size: 12px;\n      line-height: 18px;\n    }\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(60px);\n    z-index: -1;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  width: 100%;\n  left: 0;\n  top: -3px;\n  transform: translateY(-100%);\n  background: ", ";\n  padding: 16px;\n  border-radius: 12px;\n  isolation: isolate;\n\n  h4 {\n    margin-bottom: 8px;\n    font-weight: 700;\n  }\n\n  button {\n    margin: 0;\n    padding: 7px 16px;\n    white-space: nowrap;\n    border-radius: 6px;\n\n    h5 {\n      font-size: 12px;\n      line-height: 18px;\n    }\n  }\n\n  p {\n    color: ", ";\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    backdrop-filter: blur(60px);\n    z-index: -1;\n  }\n\n  ", "\n"])), (function(n) {
                    return n.theme.colors.black30
                }), (function(n) {
                    return n.theme.colors.white70
                }), (function(n) {
                    return n.toggle ? (0, Ni.iv)(Wt || (Wt = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), ja) : (0, Ni.iv)(Kt || (Kt = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Ba)
                })), Ni.ZP.div(ni || (ni = xp(["\n  ", "\n  gap: 12px;\n"], ["\n  ", "\n  gap: 12px;\n"])), Ca.be), Ni.ZP.span(ei || (ei = xp(["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 16px;\n  top: 16px;\n  cursor: pointer;\n"]))), Ni.ZP.div(ri || (ri = xp(["\n  position: absolute;\n  top: 22px;\n  right: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 4px 6px;\n\n  p {\n    color: ", ";\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  top: 22px;\n  right: 50px;\n  background: ", ";\n  border: 1px solid ", ";\n  border-radius: 4px;\n  padding: 4px 6px;\n\n  p {\n    color: ", ";\n  }\n\n  ", "\n"])), (function(n) {
                    return n.theme.colors.black80
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.toggle ? (0, Ni.iv)(ti || (ti = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), ja) : (0, Ni.iv)(ii || (ii = xp(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), Ba)
                }))),
                bp = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                wp = Ni.ZP.div(oi || (oi = bp(["\n  color: ", ";\n\n  button {\n    color: ", ";\n    border: 1px solid ", ";\n    filter: drop-shadow(0px 4px 4px ", ");\n    border-radius: 8px;\n    background: none;\n    box-shadow: none;\n    padding: 9.5px 45.5px;\n\n    &:hover, &:focus {\n      background: none;\n    }\n  }\n\n  h3 {\n    margin-top: 36px;\n  }\n"], ["\n  color: ", ";\n\n  button {\n    color: ", ";\n    border: 1px solid ", ";\n    filter: drop-shadow(0px 4px 4px ", ");\n    border-radius: 8px;\n    background: none;\n    box-shadow: none;\n    padding: 9.5px 45.5px;\n\n    &:hover, &:focus {\n      background: none;\n    }\n  }\n\n  h3 {\n    margin-top: 36px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    return n.theme.colors.white80
                }), (function(n) {
                    return n.theme.colors.black20
                })),
                vp = (0, Ni.iv)(ai || (ai = bp(["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"], ["\n  width: 428px;\n\n  &> div {\n    padding: 24px 24px 40px;\n    margin: 0;\n  }\n"]))),
                yp = (0, Ni.ZP)(mp)(li || (li = bp(["\n  top: auto;\n  right: 50%;\n  bottom: 88px;\n  transform: translateX(50%);\n"], ["\n  top: auto;\n  right: 50%;\n  bottom: 88px;\n  transform: translateX(50%);\n"]))),
                Zp = wp,
                Pp = function(n) {
                    var e = n.toggle,
                        t = n.onClose,
                        i = (0, xi.useState)(!1),
                        r = i[0],
                        o = i[1];
                    return (0, Li.tZ)(bd.Z, {
                        modalStyles: vp,
                        onClose: t,
                        toggle: e,
                        children: (0, Li.BX)(Zp, {
                            children: [(0, Li.tZ)(Dd.Z, {
                                height: 110,
                                width: 110,
                                src: hp
                            }), (0, Li.tZ)(kd, {
                                children: (0, tr.t)("adFreeTimeOver")
                            }), (0, Li.BX)(Pd, {
                                children: [(0, Li.tZ)(Sr.TZ, {
                                    children: (0, tr.t)("inviteMoreFriends")
                                }), (0, Li.tZ)(_d, {})]
                            }), (0, Li.tZ)(ep.Z, {
                                toggle: r,
                                exitingDelay: .6,
                                children: (0, Li.tZ)(yp, {
                                    toggle: r,
                                    children: (0, Li.tZ)(Sr.tZ, {
                                        children: (0, tr.t)("linkCopied")
                                    })
                                })
                            }), (0, Li.tZ)(Vd, {
                                btnText: "copyLink",
                                showMessage: !1,
                                onCopied: function() {
                                    o(!0), window.setTimeout((function() {
                                        o(!1)
                                    }), 2e3)
                                }
                            })]
                        })
                    })
                },
                kp = function(n) {
                    var e = n.toggle,
                        t = n.earnedMinutes,
                        i = n.onClose;
                    return (0, Li.tZ)(bd.Z, {
                        modalStyles: Zd,
                        onClose: i,
                        toggle: e,
                        children: (0, Li.BX)(op, {
                            children: [(0, Li.tZ)(Dd.Z, {
                                height: 144,
                                width: 144,
                                applyAnimation: !0
                            }), (0, Li.tZ)(kd, {
                                children: (0, tr.t)("earnedMinutes", {
                                    minutes: t
                                })
                            }), (0, Li.BX)(Pd, {
                                children: [(0, Li.tZ)(Sr.TZ, {
                                    children: (0, tr.t)("inviteMoreFriends")
                                }), (0, Li.tZ)(_d, {})]
                            }), (0, Li.tZ)(Vd, {})]
                        })
                    })
                },
                Ap = function() {
                    var n = (0, xi.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = (0, xi.useState)(!1),
                        r = i[0],
                        o = i[1],
                        a = (0, xi.useState)(!1),
                        l = a[0],
                        c = a[1],
                        d = (0, xi.useState)(!1),
                        p = d[0],
                        s = d[1],
                        u = (0, xi.useState)(!1),
                        f = u[0],
                        g = u[1],
                        h = (0, xi.useState)(!1),
                        x = h[0],
                        m = h[1],
                        b = (0, xi.useState)(!1),
                        w = b[0],
                        v = b[1],
                        y = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        Z = (0, hi.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        P = (0, hi.v9)((function(n) {
                            return n.play.adFreeTimeGainedSecs
                        })),
                        k = (0, hi.v9)((function(n) {
                            return n.play.adFreeTimeSecs
                        })),
                        A = (0, hi.v9)((function(n) {
                            return n.play.rewardStatus
                        })),
                        S = (0, hi.v9)((function(n) {
                            return n.play.isNewInvitee
                        })),
                        E = (0, hi.v9)((function(n) {
                            return n.ads.disableAllAds
                        })),
                        O = (0, hi.I0)();
                    (0, xi.useEffect)((function() {
                        y && Z && "rewards" === localStorage.getItem(mi.mu) && (t(!0), v(!0), localStorage.removeItem(mi.mu))
                    }), [y, Z]), (0, xi.useEffect)((function() {
                        P && P > 0 && (S ? c(!0) : m(!0))
                    }), [P, S]), (0, xi.useEffect)((function() {
                        O({
                            type: Hd.Z.UPDATE_ADS_STATE,
                            payload: {
                                disableAllAds: k > 0
                            }
                        })
                    }), [k]), (0, xi.useEffect)((function() {
                        (0, Qd.Ul)()
                    }), [E]), (0, xi.useEffect)((function() {
                        document.body.addEventListener("click", (function() {
                            t(!1), o(!1), c(!1), s(!1), g(!1), m(!1), setTimeout((function() {
                                v(!1)
                            }), 500)
                        }))
                    }), []), (0, xi.useEffect)((function() {
                        A === Bi.fr.FailureAccountAlreadyExists && (s(!0), (0, si.L9)(mi.M_))
                    }), [A]);
                    return (0, Li.BX)(Li.HY, {
                        children: [(0, Li.tZ)(Yd, {
                            toggle: e,
                            onClose: function() {
                                return t(!1)
                            },
                            loginToInvite: function() {
                                (0, si.L9)(mi.Tk), t(!1), o(!0)
                            },
                            setSecretPassageState: v,
                            secretPassage: w
                        }), (0, Li.tZ)(Kd, {
                            toggle: r,
                            onClose: function() {
                                return o(!1)
                            }
                        }), (0, Li.tZ)(Pp, {
                            onClose: function() {
                                return g(!1)
                            },
                            toggle: f
                        }), (0, Li.tZ)(gp, {
                            toggle: p,
                            onClose: function() {
                                return s(!1)
                            }
                        }), (0, Li.tZ)(lp, {
                            toggle: l,
                            earnedMinutes: Math.floor((P || 0) / 60),
                            onClose: function() {
                                c(!1), O({
                                    type: Si.Z.UPDATE_REFER_EARN_DATA,
                                    payload: {
                                        adFreeTimeGainedSecs: 0
                                    }
                                })
                            }
                        }), (0, Li.tZ)(kp, {
                            toggle: x,
                            earnedMinutes: Math.floor((P || 0) / 60),
                            onClose: function() {
                                m(!1), O({
                                    type: Si.Z.UPDATE_REFER_EARN_DATA,
                                    payload: {
                                        adFreeTimeGainedSecs: 0
                                    }
                                })
                            }
                        })]
                    })
                };

            function Sp(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }
            var Ep = function(n, e, t, i) {
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
                Op = function(n, e) {
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
                Ip = function(n) {
                    var e = n.widget,
                        t = (0, hi.I0)(),
                        i = (0, hi.v9)((function(n) {
                            return n.imap.guideVisible
                        })),
                        r = (0, hi.v9)((function(n) {
                            return n.imap.initialized
                        })),
                        o = (0, hi.v9)((function(n) {
                            return n.user.gameGuideNotificationCount
                        })),
                        a = (0, hi.v9)((function(n) {
                            return n.user.lastGameGuideNotifDate
                        })),
                        l = (0, xi.useState)(!1),
                        c = l[0],
                        d = l[1],
                        p = (0, xi.useState)(!1),
                        s = p[0],
                        u = p[1];
                    return (0, xi.useEffect)((function() {
                        d(!e && o < 3 && (0, fi.J)(a, (new Date).toDateString()))
                    }), []), (0, xi.useEffect)((function() {
                        c && t({
                            type: ui.Z.GAME_GUIDE_NOTIF_COUNT_UPDATE,
                            payload: {
                                gameGuideNotificationCount: o + 1,
                                lastGameGuideNotifDate: (new Date).toDateString()
                            }
                        })
                    }), [c]), (0, xi.useEffect)((function() {
                        i && u(!0)
                    }), [i]), r ? (0, Li.BX)(Ji.aU, {
                        id: "ng-controls",
                        active: i,
                        onClick: function() {
                            return (0, si.L9)(mi.S5, {
                                element: "GameGuide",
                                state: "".concat(i ? "Disabled" : "Enabled"),
                                robloxExperience: pi.Z.getState().play.robloxExperienceId
                            })
                        },
                        children: [(0, Li.tZ)(zi.Z, {
                            type: "gamepad"
                        }), (0, Li.tZ)(ud.F9, {
                            style: {
                                display: !c || i || s ? "none" : "block"
                            }
                        })]
                    }) : null
                },
                Cp = function() {
                    var n, e, t, i, r, o, a = (0, hi.v9)((function(n) {
                            return n.play.mouseLockActive
                        })),
                        l = (0, hi.v9)((function(n) {
                            return n.play.nativeMouseEnabled
                        })),
                        c = pi.Z.getState().appPreferences.legacyControls,
                        d = di.ZP.appInfo.playFeFeatures.enableMouseLock,
                        p = pi.Z.getState().play.isFullscreen;
                    return !l || !d || p || c || (null === (e = null === (n = null === di.ZP || void 0 === di.ZP ? void 0 : di.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || void 0 === e ? void 0 : e.enableNativePointer) ? null : (0, Li.tZ)(Ji.aU, {
                        active: a,
                        className: "mouse-lock",
                        style: {
                            margin: (null === (i = null === (t = null === di.ZP || void 0 === di.ZP ? void 0 : di.ZP.appInfo) || void 0 === t ? void 0 : t.playFeFeatures) || void 0 === i ? void 0 : i.enableNativePointer) ? "0" : void 0,
                            border: (null === (o = null === (r = null === di.ZP || void 0 === di.ZP ? void 0 : di.ZP.appInfo) || void 0 === r ? void 0 : r.playFeFeatures) || void 0 === o ? void 0 : o.enableNativePointer) ? "none" : void 0
                        },
                        children: (0, Li.tZ)(_i, {})
                    })
                },
                Rp = function() {
                    (0, wi.$)().t;
                    var n = (0, hi.I0)(),
                        e = (0, xi.useRef)(null),
                        t = (0, xi.useRef)(null),
                        i = (0, hi.v9)((function(n) {
                            return n.user.gameplayRecordingTooltipCount
                        })),
                        r = ((0, hi.v9)((function(n) {
                            return n.user.lastGameplayRecordingTooltipDate
                        })), (0, hi.v9)((function(n) {
                            return n.play.isRecording
                        }))),
                        o = function(t) {
                            var r;
                            (null === (r = e.current) || void 0 === r ? void 0 : r.contains(t.target)) || n({
                                type: ui.Z.RECORDING_UPDATE,
                                payload: {
                                    gameplayRecordingTooltipCount: i + 1,
                                    lastGameplayRecordingTooltipDate: (new Date).toDateString()
                                }
                            })
                        };
                    return (0, xi.useEffect)((function() {
                        return n({
                                type: Si.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    recordActionRef: t
                                }
                            }), document.body.addEventListener("click", o),
                            function() {
                                document.body.removeEventListener("click", o)
                            }
                    }), []), (0, ki.Z)() ? (0, Li.tZ)(Ji.aU, {
                        className: "record-screen",
                        isRecordingWidget: r,
                        id: "ng-record-screen",
                        ref: t,
                        children: (0, Li.tZ)(fd.Z, {})
                    }) : (0, Li.tZ)(Li.HY, {})
                },
                jp = function() {
                    return (0, Li.tZ)(Ji.aU, {
                        className: "record-mic",
                        children: (0, Li.tZ)(xd.Z, {})
                    })
                },
                Bp = function(n) {
                    var e = n.widget,
                        t = (0, hi.v9)((function(n) {
                            return n.play.isSensitivityPopupOpen
                        })),
                        i = (0, hi.v9)((function(n) {
                            return n.imap.initialized
                        })),
                        r = (0, hi.v9)((function(n) {
                            return n.play.nativeMouseEnabled
                        })),
                        o = pi.Z.getState().appPreferences.legacyControls;
                    return i || r && !o ? (0, Li.tZ)(Ji.aU, {
                        active: t,
                        className: "mouse-sensitivity",
                        children: (0, Li.tZ)(qi, {
                            fsWidget: e
                        })
                    }) : null
                },
                zp = function() {
                    var n = (0, hi.v9)((function(n) {
                        return n.support.showSupport
                    }));
                    return (0, Li.tZ)(Ji.aU, {
                        id: "ng-support",
                        active: n,
                        children: (0, Li.tZ)(zi.Z, {
                            type: "support"
                        })
                    })
                },
                Tp = function() {
                    var n = (0, hi.v9)((function(n) {
                        return n.play.channelHandle
                    }));
                    return (0, Li.tZ)(Ji.aU, {
                        className: "video-portal-action",
                        onClick: function() {
                            window.open((0, bi.ZP)("".concat(window.location.origin, "/videos/").concat(n)))
                        },
                        children: (0, Li.tZ)("img", {
                            src: (0, Pi.j)(vi),
                            alt: "videos"
                        })
                    })
                },
                Dp = function() {
                    var n = (0, wi.$)().t,
                        e = (0, xi.useState)(!1),
                        t = e[0],
                        i = e[1];
                    return (0, Li.tZ)(Ji.aU, {
                        className: "soft-keyboard-action",
                        onClick: function() {
                            i(!t), t ? (0, Ei.f)(mi.vK.keyboard.disable) : (0, Ei.f)(mi.vK.keyboard.enable)
                        },
                        active: t,
                        children: (0, Li.tZ)("img", {
                            src: (0, Pi.j)(yi),
                            alt: n("onScreenKeyboard")
                        })
                    })
                },
                Xp = function(n) {
                    var e = n.topbarRef,
                        t = n.searchIconRef,
                        i = n.loginResolved,
                        r = void 0 === i || i,
                        o = (0, hi.v9)((function(n) {
                            return n.play.isAdBlockerEnabled
                        })),
                        a = (0, hi.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        l = (0, xi.useRef)(null),
                        c = (0, hi.v9)((function(n) {
                            return n.gamification.selfDailyRank
                        })),
                        d = (0, xi.useState)(""),
                        p = d[0],
                        s = d[1],
                        u = (0, hi.I0)();
                    (0, xi.useEffect)((function() {
                        s(sessionStorage.getItem("isEmbeddedFrame")), u({
                            type: Ri.Z.UPDATE_ACTION,
                            payload: {
                                gamificationActionsRef: l
                            }
                        });
                        var n = 0;
                        l.current && (n = l.current.getBoundingClientRect().width);
                        var i = null === e || void 0 === e ? void 0 : e.current;
                        i && (i.style.paddingRight = "".concat(n + 8, "px"));
                        var r = null === t || void 0 === t ? void 0 : t.current;
                        r && (r.style.marginRight = "".concat(n + 16, "px"))
                    }), [l]);
                    return (0, xi.useEffect)((function() {
                        r && (0, Ai.wA)() && Ep(void 0, void 0, void 0, (function() {
                            var n, e;
                            return Op(this, (function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, ji.Z.getLeaderboard({}, {})];
                                    case 1:
                                        return n = t.sent(), (0, Ai.Hg)(n), n.status !== Bi.YR.Success || n.dailyLeaderboard.status === Bi.YR.Success && n.weeklyLeaderboard.status === Bi.YR.Success && n.monthlyLeaderboard.status === Bi.YR.Success ? [3, 3] : [4, ji.Z.getLeaderboard({}, {})];
                                    case 2:
                                        e = t.sent(), (0, Ai.Hg)(e), t.label = 3;
                                    case 3:
                                        return setInterval((function() {
                                            Ep(void 0, void 0, void 0, (function() {
                                                var n;
                                                return Op(this, (function(e) {
                                                    switch (e.label) {
                                                        case 0:
                                                            return [4, ji.Z.getLeaderboard({}, {})];
                                                        case 1:
                                                            return n = e.sent(), (0, Ai.Hg)(n), [2]
                                                    }
                                                }))
                                            }))
                                        }), 3e5), [2]
                                }
                            }))
                        }))
                    }), [r]), p ? (0, Li.tZ)(Li.HY, {}) : (0, Li.BX)(Ji.v2, {
                        ref: l,
                        children: [(0, Li.tZ)(pd, {}), !o && (0, Ai.wA)() && (0, Li.tZ)(Ii.default, {}), (0, Ai.wA)() && (0, Li.BX)(Ci.ZP, {
                            onClick: function() {
                                u({
                                    type: Ri.Z.TOGGLE_VIEW,
                                    payload: {
                                        showProfileView: !1,
                                        showRobuxView: !1,
                                        showLeaderboardView: !0
                                    }
                                }), (0, si.L9)("LeaderboardIconClicked")
                            },
                            children: [(0, Li.tZ)("img", {
                                src: (0, Pi.j)(Zi),
                                width: 24,
                                alt: ""
                            }), (0, Li.tZ)(Ci.XF, {
                                children: a ? c.rank : "--"
                            })]
                        })]
                    })
                },
                Lp = function(n) {
                    var e = n.widget,
                        t = (0, hi.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        i = (0, hi.v9)((function(n) {
                            return n.play.channelHandle
                        })),
                        r = sessionStorage.getItem("isEmbeddedFrame");
                    return (0, Li.BX)(Li.HY, {
                        children: [(0, Li.BX)("div", {
                            style: {
                                display: "flex",
                                flexDirection: (0, bi.hu)() ? "column" : "row"
                            },
                            children: [di.ZP.appInfo.iapLoginPromptEnabled && (0, Li.tZ)(gi.Z, {}), i && !r && (0, Li.tZ)(Tp, {}), t && (0, Li.tZ)(jp, {}), (0, ki.Z)() && (0, Li.tZ)(Rp, {}), !(0, di.DJ)() && !r && !(0, Ai.nI)() && (0, Li.tZ)(md.Z, {}), !r && (0, Li.tZ)(zp, {}), !(0, bi.hu)() && (0, Li.BX)(Li.HY, {
                                children: [(0, Li.tZ)(Bp, {
                                    widget: e
                                }), (0, Li.tZ)(Cp, {}), !(0, di.DJ)() && (0, Li.tZ)(Ji.Ol, {
                                    id: "ng-sound",
                                    children: (0, Li.tZ)(sd.Z, {
                                        showSlider: !0
                                    })
                                }), (0, Li.tZ)(Ip, {
                                    widget: e
                                })]
                            }), ((0, di.DJ)() || !(0, bi.hu)()) && (0, Li.tZ)(Ji.aU, {
                                id: "ng-fs",
                                children: (0, Li.tZ)(Ti.Z, {})
                            })]
                        }), (0, bi.hu)() && (0, Li.BX)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column"
                            },
                            children: [(0, Li.tZ)(Bp, {
                                widget: e
                            }), (0, Li.tZ)(Cp, {}), (0, Li.tZ)(Ip, {
                                widget: e
                            }), (0, Li.tZ)(Ji.Ol, {
                                id: "ng-sound",
                                children: (0, Li.tZ)(sd.Z, {
                                    showSlider: !0
                                })
                            }), (0, Li.tZ)(Ji.aU, {
                                id: "ng-fs",
                                children: (0, Li.tZ)(Ti.Z, {})
                            })]
                        })]
                    })
                },
                _p = function(n) {
                    n.widget;
                    var e, t, i = n.isPortrait,
                        r = n.style,
                        o = (n.countryCode, n.testDriveUi),
                        a = void 0 !== o && o,
                        l = sessionStorage.getItem("isEmbeddedFrame"),
                        c = (0, wi.$)().t;
                    return (0, Li.BX)(Ji.zi, {
                        isPortrait: i,
                        style: r,
                        children: [!(0, di.DJ)() && (0, Li.tZ)(gd.Z, {
                            isPortrait: i
                        }), !(0, di.DJ)() && !l && !(0, Ai.nI)() && (0, Li.tZ)(md.Z, {}), !l && !a && (0, Li.tZ)(zp, {}), (null === (t = null === (e = null === di.ZP || void 0 === di.ZP ? void 0 : di.ZP.appInfo) || void 0 === e ? void 0 : e.playFeFeatures) || void 0 === t ? void 0 : t.enableSocialIcons) && !i && !a && mi.Yg.map((function(n) {
                            return (0, Li.tZ)(hd, function(n) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var t = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? Sp(Object(t), !0).forEach((function(e) {
                                        (0, ci.Z)(n, e, t[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Sp(Object(t)).forEach((function(e) {
                                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                                    }))
                                }
                                return n
                            }({}, n), n.element)
                        })), !i && !(0, Ai.tq)() && (0, Ai.c6)() && !l && !a && (0, Li.tZ)(Ap, {}), a && (0, Li.tZ)(Ji.td, {
                            children: c("testDrive")
                        })]
                    })
                },
                Fp = function(n) {
                    var e = n.widget,
                        t = n.isPortrait,
                        i = (0, hi.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        r = (0, hi.v9)((function(n) {
                            return n.play.channelHandle
                        })),
                        o = sessionStorage.getItem("isEmbeddedFrame");
                    return (0, Li.BX)(Ji.zi, {
                        isPortrait: t,
                        isGameAction: !0,
                        children: [(0, Li.BX)(Ji.kC, {
                            isPortrait: t,
                            children: [r && !o && (0, Li.tZ)(Tp, {}), i && (0, Li.tZ)(jp, {}), (0, Li.tZ)(Rp, {}), (0, Li.tZ)(Cp, {}), (0, Li.tZ)(Bp, {
                                widget: e
                            }), (0, Ai.nI)() && navigator && navigator.maxTouchPoints > 0 && "en" === Oi.Z.resolvedLanguage && (0, Li.tZ)(Dp, {}), (0, Li.tZ)(Ip, {
                                widget: e
                            })]
                        }), (0, Li.BX)(Ji.kC, {
                            isPortrait: t,
                            children: [di.ZP.appInfo.iapLoginPromptEnabled && (0, Li.tZ)(gi.Z, {}), !(0, di.DJ)() && (0, Li.tZ)(Ji.Ol, {
                                id: "ng-sound",
                                children: (0, Li.tZ)(sd.Z, {
                                    showSlider: !0
                                })
                            }), (0, Li.tZ)(Ji.aU, {
                                id: "ng-fs",
                                children: (0, Li.tZ)(Ti.Z, {})
                            })]
                        })]
                    })
                },
                Up = function() {
                    return (0, Li.tZ)(Ji.eX, {
                        style: {
                            color: "#A198B9"
                        },
                        children: (0, Li.tZ)(Lp, {
                            widget: !1
                        })
                    })
                },
                Np = Up
        },
        77360: function(n, e, t) {
            t.d(e, {
                Co: function() {
                    return d
                },
                ug: function() {
                    return p
                },
                F9: function() {
                    return s
                },
                ed: function() {
                    return u
                }
            });
            var i, r, o, a, l = t(50445),
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                d = l.ZP.div(i || (i = c(["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"], ["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  background: rgba(0, 0, 0, 0.8);\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"])), (function(n) {
                    return n.theme.colors.backgroundGlass
                }), (function(n) {
                    return n.theme.border.base
                }), (function(n) {
                    return n.theme.border.radius
                })),
                p = l.ZP.p(r || (r = c(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                s = l.ZP.div(o || (o = c(["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 2;\n"], ["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  z-index: 2;\n"]))),
                u = l.ZP.div(a || (a = c(["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"], ["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"])))
        },
        42385: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return b
                }
            });
            var i = t(11720),
                r = t(25617),
                o = {
                    src: "/play/_next/static/media/micMute.81551a0f.svg",
                    height: 20,
                    width: 20
                },
                a = {
                    src: "/play/_next/static/media/micUnmute.e4e62bb7.svg",
                    height: 20,
                    width: 20
                },
                l = {
                    src: "/play/_next/static/media/micBlocked.f838d6ff.svg",
                    height: 20,
                    width: 20
                },
                c = t(45024),
                d = t(66971),
                p = t(3053),
                s = t(89598),
                u = t(77691),
                f = t(94381),
                g = t(96788),
                h = t(97997),
                x = function(n, e, t, i) {
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
                m = function(n, e) {
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
                b = function() {
                    var n = (0, r.I0)(),
                        e = (0, r.v9)((function(n) {
                            return n.play.recordingUserAudioTrack
                        })),
                        t = (0, r.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        b = (0, r.v9)((function(n) {
                            return n.play.recordingAudioDestinationNode
                        })),
                        w = (0, r.v9)((function(n) {
                            return n.play.recordingAudioContext
                        })),
                        v = (0, r.v9)((function(n) {
                            return n.user.micRecordingEnabled
                        })),
                        y = (0, i.useState)(!(null === e || void 0 === e ? void 0 : e.enabled)),
                        Z = y[0],
                        P = y[1],
                        k = (0, i.useState)(!1),
                        A = k[0],
                        S = k[1],
                        E = (0, i.useState)((0, c.j)(a)),
                        O = E[0],
                        I = E[1],
                        C = function() {
                            return x(void 0, void 0, void 0, (function() {
                                return m(this, (function(e) {
                                    switch (e.label) {
                                        case 0:
                                            return [4, navigator.mediaDevices.getUserMedia({
                                                audio: !0
                                            }).then((function(e) {
                                                return x(void 0, void 0, void 0, (function() {
                                                    return m(this, (function(t) {
                                                        return b && w && new MediaStreamAudioSourceNode(w, {
                                                            mediaStream: e
                                                        }).connect(b), n({
                                                            type: d.Z.UPDATE_IS_RECORDING,
                                                            payload: {
                                                                recordingUserAudioTrack: e.getAudioTracks()[0]
                                                            }
                                                        }), P(!1), (0, s.L9)(f.S5, {
                                                            element: "VideoRecorderMic",
                                                            state: "Enabled"
                                                        }), [2]
                                                    }))
                                                }))
                                            })).catch((function(n) {
                                                S(!0)
                                            }))];
                                        case 1:
                                            return e.sent(), [2]
                                    }
                                }))
                            }))
                        };
                    return (0, i.useEffect)((function() {
                        I(A ? (0, c.j)(l) : Z ? (0, c.j)(a) : (0, c.j)(o))
                    }), [A, Z]), (0, i.useEffect)((function() {
                        try {
                            navigator.permissions.query({
                                name: "microphone"
                            }).then((function(n) {
                                "denied" === n.state && S(!0), n.onchange = function() {
                                    "denied" === n.state ? S(!0) : (S(!1), P(!0))
                                }
                            })).catch((function(n) {}))
                        } catch (n) {}!A && v && x(void 0, void 0, void 0, (function() {
                            return m(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, C()];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            }))
                        })), (0, s.L9)(f.S5, {
                            element: "VideoRecorderMic",
                            state: A || !v ? "Disabled" : "Enabled"
                        })
                    }), []), (0, h.tZ)(g.AO, {
                        onClick: function() {
                            return x(void 0, void 0, void 0, (function() {
                                return m(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return e ? (e.enabled = !(null === e || void 0 === e ? void 0 : e.enabled), P(!Z), n({
                                                type: p.Z.RECORDING_UPDATE,
                                                payload: {
                                                    micRecordingEnabled: e.enabled
                                                }
                                            }), (0, s.L9)(f.S5, {
                                                element: "VideoRecorderMic",
                                                state: e.enabled ? "Enabled" : "Disabled"
                                            }), [3, 3]) : [3, 1];
                                        case 1:
                                            return A ? (n({
                                                type: d.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    showMicBlockedModal: !0
                                                }
                                            }), [2]) : [4, C()];
                                        case 2:
                                            t.sent(), t.label = 3;
                                        case 3:
                                            return [2]
                                    }
                                }))
                            }))
                        },
                        isFullscreen: t,
                        isAdFree: (0, u.Dx)(),
                        children: (0, h.tZ)("img", {
                            alt: "Record",
                            src: O
                        })
                    })
                }
        },
        71660: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return S
                }
            });
            var i = t(11720),
                r = {
                    src: "/play/_next/static/media/recorderImg.822cd89f.svg",
                    height: 25,
                    width: 24
                },
                o = {
                    src: "/play/_next/static/media/recordingBlink.84be0f58.svg",
                    height: 7,
                    width: 6
                },
                a = {
                    src: "/play/_next/static/media/stopRecording.26f4a0e8.svg",
                    height: 7,
                    width: 6
                },
                l = {
                    src: "/play/_next/static/media/download.7afc2051.svg",
                    height: 11,
                    width: 10
                },
                c = t(45024),
                d = t(25617),
                p = t(50912),
                s = t(66971),
                u = t(89598),
                f = t(88557),
                g = t(77691),
                h = t(94381),
                x = t(26544),
                m = t(56817),
                b = t(49555),
                w = t(96788),
                v = t(61740),
                y = t(97997),
                Z = function() {
                    return (Z = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                P = function(n, e, t, i) {
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
                k = function(n, e) {
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
                A = function(n, e, t) {
                    if (t || 2 === arguments.length)
                        for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                    return n.concat(i || Array.prototype.slice.call(e))
                },
                S = function() {
                    var n = (0, d.I0)(),
                        e = (0, d.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        t = (0, d.v9)((function(n) {
                            return n.play.recordingMediaRecorder
                        })),
                        S = (0, d.v9)((function(n) {
                            return n.play.recordingMediaStream
                        })),
                        E = (0, d.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        O = (0, d.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        I = (0, d.v9)((function(n) {
                            return n.play.recordingTimerText
                        })),
                        C = (0, d.v9)((function(n) {
                            return n.play.stopVideoRecording
                        })),
                        R = (0, d.v9)((function(n) {
                            return n.play.isRecordingProcessing
                        })),
                        j = (0, d.v9)((function(n) {
                            return n.play.stopAndDownloadRecording
                        })),
                        B = (0, i.useState)((0, g.Dx)() ? "05:00" : "00:00"),
                        z = B[0],
                        T = B[1],
                        D = (0, i.useRef)(null),
                        X = (0, d.v9)((function(n) {
                            return n.play.recordingUploadInProgress
                        })),
                        L = (0, d.v9)((function(n) {
                            return n.play.recordingData
                        })),
                        _ = function(e) {
                            return function(e) {
                                return P(void 0, void 0, void 0, (function() {
                                    var t, i;
                                    return k(this, (function(r) {
                                        return e.data && e.data.size <= 0 || (t = p.Z.getState().play.recordingData, i = A(A([], t, !0), [e.data], !1), n({
                                            type: s.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                recordingData: i
                                            }
                                        })), [2]
                                    }))
                                }))
                            }(e)
                        },
                        F = function() {
                            var e, i;
                            (0, g.Dx)() && ((0, m.Qg)(v.J), p.Z.dispatch({
                                type: s.Z.SET_FULLSCREEN,
                                payload: {
                                    isFullscreen: !1
                                }
                            }), null === (e = null === E || void 0 === E ? void 0 : E.current) || void 0 === e || e.classList.remove("isRecording"), (0, b.sZ)(), (0, b.Ul)()), n({
                                type: s.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    showRecordModal: !0,
                                    stopVideoRecording: !1
                                }
                            });
                            try {
                                null === (i = p.Z.getState().play.recordingUserAudioTrack) || void 0 === i || i.stop(), null === S || void 0 === S || S.getTracks().forEach((function(n) {
                                    return n.stop()
                                })), null === t || void 0 === t || t.stop()
                            } catch (r) {}(0, g.Dx)() ? T("05:00"): T((0, f.hu)() ? "00\n00" : "00:00"), n({
                                type: s.Z.UPDATE_IS_RECORDING,
                                payload: {
                                    isRecording: !1,
                                    recordingUserAudioTrack: null
                                }
                            })
                        },
                        U = function(e) {
                            return P(void 0, void 0, void 0, (function() {
                                var t, i, r, o;
                                return k(this, (function(a) {
                                    return (t = new MediaStream).addTrack(function(e, t, i) {
                                        var r, o = [],
                                            a = new AudioContext,
                                            l = Math.min(Math.max(0, (null === (r = null === E || void 0 === E ? void 0 : E.current) || void 0 === r ? void 0 : r.volume) || 1), .65);
                                        if (o.push({
                                                track: e,
                                                gain: .2
                                            }), o.push({
                                                track: t,
                                                gain: l
                                            }), i && o.push({
                                                track: i,
                                                gain: 1
                                            }), 1 === o.length) return o[0].track.getAudioTracks();
                                        for (var c = a.createMediaStreamDestination(), d = 0; d < o.length; d += 1)
                                            if (o[d].track && o[d].track.getAudioTracks().length > 0) {
                                                var p = a.createMediaStreamSource(o[d].track),
                                                    u = a.createGain();
                                                u.gain.value = o[d].gain, p.connect(u).connect(c)
                                            }
                                        return n({
                                            type: s.Z.UPDATE_IS_RECORDING,
                                            payload: {
                                                recordingAudioDestinationNode: c,
                                                recordingAudioContext: a
                                            }
                                        }), c.stream.getAudioTracks()
                                    }(e, null === (o = null === E || void 0 === E ? void 0 : E.current) || void 0 === o ? void 0 : o.srcObject)[0]), t.addTrack(e.getVideoTracks()[0]), i = {
                                        mimeType: (0, g.Hh)().mime
                                    }, (r = new MediaRecorder(t, i)).ondataavailable = _, r.start(2e3), n({
                                        type: s.Z.UPDATE_IS_RECORDING,
                                        payload: {
                                            isRecording: !0,
                                            recordingMediaStream: e,
                                            recordingMediaRecorder: r
                                        }
                                    }), e.getVideoTracks()[0].onended = function() {
                                        r.stop(), F();
                                        var n = p.Z.getState().play.recordingTimerText.split(":"),
                                            e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10);
                                        (0, u.L9)(h.S5, {
                                            element: "VideoRecorder",
                                            action: "ScreenShareStopped",
                                            duration: (0, g.Dx)() ? 300 - e : e
                                        })
                                    }, [2]
                                }))
                            }))
                        };
                    return (0, i.useEffect)((function() {
                        if ((0, f.hu)() && !O) {
                            var n = I.split(":");
                            ":" === n[0] && n.splice(0, 1), T(n.join("\n"))
                        } else T(I)
                    }), [I]), (0, i.useEffect)((function() {
                        C && F()
                    }), [C]), (0, i.useEffect)((function() {
                        j && F()
                    }), [j]), (0, i.useEffect)((function() {
                        if (R) var n = I.split(":"),
                            e = 2 === n.length ? 60 * parseInt(n[0], 10) + parseInt(n[1], 10) : 60 * parseInt(n[0], 10) * 60 + 60 * parseInt(n[1], 10) + parseInt(n[2], 10),
                            t = 0,
                            i = setInterval((function() {
                                D.current && (t += 1, D.current.style.borderImage = "conic-gradient(".concat(x.qm.colors.ascent, " ").concat(3.6 * t, "deg, ").concat(x.qm.colors.white20, " 0deg) 1"), 90 === t && clearInterval(i))
                            }), 2 * (e / 60 + (e / 60 > 5 ? 6 : 1)) * 1e3 / 90)
                    }), [R]), (0, i.useEffect)((function() {
                        (0, g.Dx)() ? T((0, f.hu)() && !O ? "05\n00" : "05:00"): T((0, f.hu)() ? "00\n00" : "00:00")
                    }), []), (0, y.tZ)(w.bg, {
                        onClick: function() {
                            if (!R) {
                                var t = {
                                    element: "VideoRecorder",
                                    action: e ? "StopIconClicked" : "StartIconClicked"
                                };
                                if (e) {
                                    var i = I.split(":"),
                                        r = 2 === i.length ? 60 * parseInt(i[0], 10) + parseInt(i[1], 10) : 60 * parseInt(i[0], 10) * 60 + 60 * parseInt(i[1], 10) + parseInt(i[2], 10);
                                    t = Z(Z({}, t), {
                                        duration: (0, g.Dx)() ? 300 - r : r
                                    })
                                }(0, u.L9)(h.S5, t), e ? F() : L.length || X ? n({
                                    type: s.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordModal: !0
                                    }
                                }) : P(void 0, void 0, Promise, (function() {
                                    return k(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, P(void 0, void 0, void 0, (function() {
                                                    return k(this, (function(e) {
                                                        switch (e.label) {
                                                            case 0:
                                                                return [4, navigator.mediaDevices.getDisplayMedia({
                                                                    video: {
                                                                        width: window.innerWidth,
                                                                        height: window.innerHeight
                                                                    },
                                                                    audio: {
                                                                        suppressLocalAudioPlayback: !1
                                                                    },
                                                                    preferCurrentTab: !0
                                                                }).then((function(e) {
                                                                    return P(void 0, void 0, void 0, (function() {
                                                                        var t;
                                                                        return k(this, (function(i) {
                                                                            switch (i.label) {
                                                                                case 0:
                                                                                    return (0, g.Dx)() && (n({
                                                                                        type: s.Z.UPDATE_IS_RECORDING,
                                                                                        payload: {
                                                                                            showRecordingTransition: !0,
                                                                                            isRecording: !0
                                                                                        }
                                                                                    }), (0, g.xF)(), p.Z.dispatch({
                                                                                        type: s.Z.SET_FULLSCREEN,
                                                                                        payload: {
                                                                                            isFullscreen: !0
                                                                                        }
                                                                                    }), null === (t = null === E || void 0 === E ? void 0 : E.current) || void 0 === t || t.classList.add("isRecording"), (0, b.sZ)(), (0, b.Ul)()), (0, u.L9)(h.S5, {
                                                                                        element: "VideoRecorder",
                                                                                        action: "ScreenShareAllowed"
                                                                                    }), (0, g.Dx)() ? [4, (0, g.gw)(3e3)] : [3, 2];
                                                                                case 1:
                                                                                    i.sent(), n({
                                                                                        type: s.Z.UPDATE_IS_RECORDING,
                                                                                        payload: {
                                                                                            showRecordingTransition: !1
                                                                                        }
                                                                                    }), i.label = 2;
                                                                                case 2:
                                                                                    return U(e), [2]
                                                                            }
                                                                        }))
                                                                    }))
                                                                })).catch((function() {
                                                                    (0, u.L9)(h.S5, {
                                                                        element: "VideoRecorder",
                                                                        action: "ScreenShareCancelled"
                                                                    })
                                                                }))];
                                                            case 1:
                                                                return e.sent(), [2]
                                                        }
                                                    }))
                                                }))];
                                            case 1:
                                                return e.sent(), [2]
                                        }
                                    }))
                                }))
                            }
                        },
                        isFullscreen: O,
                        isPortrait: (0, f.hu)(),
                        isAdFree: (0, g.Dx)(),
                        children: e ? (0, y.BX)(w.BZ, {
                            isFullscreen: O,
                            isPortrait: (0, f.hu)(),
                            children: [(0, y.tZ)(w.AU, {
                                isFullscreen: O,
                                isPortrait: (0, f.hu)(),
                                src: (0, c.j)(o)
                            }), (0, y.tZ)(w.lV, {
                                children: z
                            }), (0, y.tZ)(w.Tw, {
                                children: (0, y.tZ)("img", {
                                    alt: "Stop",
                                    src: (0, c.j)(a),
                                    style: {
                                        width: "8px",
                                        height: "8px"
                                    }
                                })
                            })]
                        }) : (0, y.BX)(y.HY, {
                            children: [(0, y.tZ)(w.AO, {
                                ref: D,
                                className: "recordIcon",
                                isProcessing: R,
                                isAdFree: (0, g.Dx)(),
                                children: (0, y.tZ)("img", {
                                    alt: "Record",
                                    src: (0, c.j)(R ? l : r)
                                })
                            }), X && (0, y.tZ)(w.EB, {
                                width: "32px",
                                children: (0, y.tZ)(w.ko, {})
                            })]
                        })
                    })
                }
        },
        96788: function(n, e, t) {
            t.d(e, {
                AO: function() {
                    return P
                },
                bg: function() {
                    return k
                },
                BZ: function() {
                    return A
                },
                AU: function() {
                    return E
                },
                lV: function() {
                    return O
                },
                Tw: function() {
                    return I
                },
                $_: function() {
                    return C
                },
                CF: function() {
                    return z
                },
                B3: function() {
                    return T
                },
                EB: function() {
                    return D
                },
                ko: function() {
                    return X
                }
            });
            var i, r, o, a, l, c, d, p, s, u, f, g, h, x, m, b, w, v = t(50445),
                y = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Z = (0, v.F4)(i || (i = y(["\n  from {\n      width: 0;\n  }\n"], ["\n  from {\n      width: 0;\n  }\n"]))),
                P = v.ZP.div(r || (r = y(["\n  background: transparent;\n  display: flex;\n  margin: 0px;\n  cursor: pointer;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  border: ", ";\n  border-radius: 50%;\n  border-image: ", ";\n\n  img {\n\n    ", "\n  }\n"], ["\n  background: transparent;\n  display: flex;\n  margin: 0px;\n  cursor: pointer;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  width: ", ";\n  height: ", ";\n  justify-content: center;\n  align-items: center;\n  border: ", ";\n  border-radius: 50%;\n  border-image: ", ";\n\n  img {\n\n    ", "\n  }\n"])), (function(n) {
                    return n.isFullscreen ? "absolute" : ""
                }), (function(n) {
                    return n.isAdFree ? "" : "12px"
                }), (function(n) {
                    return n.isAdFree ? "24px" : ""
                }), (function(n) {
                    return n.isAdFree ? "100px" : "94px"
                }), (function(n) {
                    return n.isFullscreen ? "22px" : "calc(var(--vw, 1vw) * 1.5)"
                }), (function(n) {
                    return n.isFullscreen ? "22px" : "calc(var(--vw, 1vw) * 1.5)"
                }), (function(n) {
                    return n.isProcessing ? "2px solid" : ""
                }), (function(n) {
                    var e = n.isProcessing,
                        t = n.theme;
                    return e ? "conic-gradient(".concat(t.colors.ascent, " 3.6deg, ").concat(t.colors.white20, " 0deg) 1") : ""
                }), (function(n) {
                    return n.isProcessing && "\n      width: 10px;\n    "
                })),
                k = v.ZP.div(o || (o = y(["\n  align-items: center;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  justify-content: center;\n"], ["\n  align-items: center;\n  position: ", ";\n  top: ", ";\n  bottom: ", ";\n  right: ", ";\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n  justify-content: center;\n"])), (function(n) {
                    return n.isFullscreen ? "absolute" : ""
                }), (function(n) {
                    return n.isAdFree ? "" : "12px"
                }), (function(n) {
                    return n.isAdFree ? "24px" : ""
                }), (function(n) {
                    return n.isAdFree ? "32px" : "24px"
                }), (function(n) {
                    return n.isFullscreen ? "37px" : ""
                })),
                A = v.ZP.div(a || (a = y(["\n  display: flex;\n  flex-direction: ", ";\n  padding: 0px;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #F33621;\n  border-radius: ", ";\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  padding: 0px;\n  gap: 6px;\n  align-items: center;\n  cursor: pointer;\n  border: 1px solid #F33621;\n  border-radius: ", ";\n"])), (function(n) {
                    var e = n.isPortrait,
                        t = n.isFullscreen;
                    return e && !t ? "column" : "row"
                }), (function(n) {
                    return n.theme.border.radius
                })),
                S = (0, v.F4)(l || (l = y(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))),
                E = v.ZP.img(c || (c = y(["\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate;\n  width: 8px;\n  height: 8px;\n  margin: ", ";\n"], ["\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-direction: alternate;\n  width: 8px;\n  height: 8px;\n  margin: ", ";\n"])), S, (function(n) {
                    var e = n.isPortrait,
                        t = n.isFullscreen;
                    return e && !t ? "6px 6px 0px 6px" : "6px 0px 6px 6px"
                })),
                O = v.ZP.p(d || (d = y(["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  white-space: pre-line;\n"], ["\n  color: ", ";\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 150%;\n  display: flex;\n  align-items: center;\n  margin: 0px;\n  white-space: pre-line;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                I = v.ZP.div(p || (p = y(["\n  width: 20px;\n  height: 20px;\n  background: #F3362133;\n  border-radius: 0px 4px 4px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"], ["\n  width: 20px;\n  height: 20px;\n  background: #F3362133;\n  border-radius: 0px 4px 4px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),
                C = (v.ZP.div(s || (s = y(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 12px 16px;\n  gap: 4px;\n\n  width: 379px;\n  height: 52px;\n"], ["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 12px 16px;\n  gap: 4px;\n\n  width: 379px;\n  height: 52px;\n"]))), v.ZP.div(u || (u = y(["\n  height: 72px;\n  background: ", ";\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"], ["\n  height: 72px;\n  background: ", ";\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"])), (function(n) {
                    return n.theme.colors.black70
                }))),
                R = (0, v.F4)(f || (f = y(["\n  0% {\n    top: 100%;\n    left: 100%;\n    opacity: 1;\n  }\n  12.5% {\n    top: 0;\n    left: 0;\n    opacity: 0.85;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 100%;\n    left: 100%;\n    opacity: 1;\n  }\n  12.5% {\n    top: 0;\n    left: 0;\n    opacity: 0.85;\n  }\n  75% {\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    opacity: 0;\n  }\n"]))),
                j = (0, v.F4)(g || (g = y(["\n  10% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n    top: 21.43vh;\n  }\n  70% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 100%);\n    opacity: 0;\n  }\n"], ["\n  10% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n    top: 21.43vh;\n  }\n  70% {\n    transform: translate(-50%, -100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 100%);\n    opacity: 0;\n  }\n"]))),
                B = (0, v.F4)(h || (h = y(["\n  10% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  70% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 200%);\n    opacity: 0;\n  }\n"], ["\n  10% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  70% {\n    transform: translate(-50%, 100%);\n    opacity: 1;\n  }\n  100% {\n    transform: translate(-50%, 200%);\n    opacity: 0;\n  }\n"]))),
                z = v.ZP.video(x || (x = y(["\n  background: ", ";\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 72px);\n  object-fit: fill;\n  top: 100%;\n  left: 100%;\n  z-index: 1;\n  opacity: 1;\n\n  &.slideIn {\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  background: ", ";\n  position: absolute;\n  width: 100%;\n  height: calc(100% - 72px);\n  object-fit: fill;\n  top: 100%;\n  left: 100%;\n  z-index: 1;\n  opacity: 1;\n\n  &.slideIn {\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
                    return n.theme.colors.black20
                }), R),
                T = v.ZP.div(m || (m = y(["\n  z-index: 1;\n\n  >h1 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n    text-align: center;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 32px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 24px;\n    }\n  }\n  >h3 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 18px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 14px;\n    }\n  }\n"], ["\n  z-index: 1;\n\n  >h1 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n    text-align: center;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 32px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 24px;\n    }\n  }\n  >h3 {\n    position: absolute;\n    top: 21.43vh;\n    left: 50%;\n    transform: translate(-50%, 0);\n    opacity: 0;\n    color: ", ";\n    animation-name: ", ";\n    animation-duration: 2.5s;\n    animation-delay: 0.5s;\n    animation-iteration-count: 1;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    @media only screen and (max-width: 1180px) {\n      font-size: 18px;\n    }\n    @media only screen and (max-width: 800px) {\n      font-size: 14px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), j, (function(n) {
                    return n.theme.colors.white
                }), B),
                D = v.ZP.div(b || (b = y(["\n    width: ", ";\n    height: 4px;\n    margin-top: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 2px;\n"], ["\n    width: ", ";\n    height: 4px;\n    margin-top: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 2px;\n"])), (function(n) {
                    var e = n.width;
                    return "".concat(e)
                })),
                X = v.ZP.div(w || (w = y(["\n    background: ", ";\n    border-radius: 2px;\n    width: 85%;\n    display: block;\n    height: 100%;\n    animation: ", " 5s ease-in 1;\n"], ["\n    background: ", ";\n    border-radius: 2px;\n    width: 85%;\n    display: block;\n    height: 100%;\n    animation: ", " 5s ease-in 1;\n"])), (function(n) {
                    return n.theme.colors.ascent
                }), Z)
        },
        44141: function(n, e, t) {
            t.d(e, {
                eX: function() {
                    return v
                },
                aU: function() {
                    return y
                },
                Ol: function() {
                    return Z
                },
                zi: function() {
                    return P
                },
                kC: function() {
                    return k
                },
                td: function() {
                    return A
                },
                v2: function() {
                    return S
                }
            });
            var i, r, o, a, l, c, d, p, s, u, f, g, h, x, m = t(50445),
                b = t(94564),
                w = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                v = m.ZP.div(i || (i = w(["\n  display: flex;\n  align-items: center;\n  z-index: 2;\n  padding: 0;\n  margin: 0;\n"], ["\n  display: flex;\n  align-items: center;\n  z-index: 2;\n  padding: 0;\n  margin: 0;\n"]))),
                y = m.ZP.button(r || (r = w(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: ", ";\n  outline: none;\n  color: inherit;\n  background: ", ";\n  border: 0;\n  padding: 8px;\n  justify-content: center;\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  i {\n    font-size: 24px;\n  }\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  cursor: pointer;\n  position: relative;\n  border-radius: ", ";\n  outline: none;\n  color: inherit;\n  background: ", ";\n  border: 0;\n  padding: 8px;\n  justify-content: center;\n  &:hover {\n    background: ", ";\n  }\n  ", "\n\n  i {\n    font-size: 24px;\n  }\n\n  ", "\n"])), (function(n) {
                    return n.theme.border.radius2
                }), (function(n) {
                    var e = n.theme;
                    return n.active ? e.colors.ascent : "none"
                }), (function(n) {
                    var e, t = n.theme;
                    return n.active ? "" : null === (e = t.colors) || void 0 === e ? void 0 : e.white20
                }), (function(n) {
                    var e = n.active,
                        t = n.theme;
                    return e ? "&:after{\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      left: 0;\n      background: ".concat(t.colors.ascent, ";\n      z-index: -1;\n      border-radius: 8px;\n      bottom: 0;\n    }") : ""
                }), (function(n) {
                    return n.isMobile && "\n    padding: 0px;\n  "
                })),
                Z = (m.ZP.div(o || (o = w(["\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(\n    180deg,\n    rgba(11, 2, 35, 0.24) 0%,\n    rgba(11, 2, 35, 0.16) 100%),\n    rgba(255, 255, 255, 0.15\n  );\n  backdrop-filter: blur(24px);\n  border: 1px solid hsla(0, 0%, 100%, .2);\n  border-radius: 12px;\n  padding: 0 10px;\n  margin: 0;\n\n  > ", " > span {\n    filter: brightness(100);\n  }\n  &:hover {\n    background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n  }\n  li:hover {\n    background: hsla(0,0%,100%,.1);\n  }\n  .dragging & {\n    pointer-events: none;\n  }\n\n  &.fixed {\n    width: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(\n    180deg,\n    rgba(11, 2, 35, 0.24) 0%,\n    rgba(11, 2, 35, 0.16) 100%),\n    rgba(255, 255, 255, 0.15\n  );\n  backdrop-filter: blur(24px);\n  border: 1px solid hsla(0, 0%, 100%, .2);\n  border-radius: 12px;\n  padding: 0 10px;\n  margin: 0;\n\n  > ", " > span {\n    filter: brightness(100);\n  }\n  &:hover {\n    background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n  }\n  li:hover {\n    background: hsla(0,0%,100%,.1);\n  }\n  .dragging & {\n    pointer-events: none;\n  }\n\n  &.fixed {\n    width: fit-content;\n    position: absolute;\n    right: 10px;\n    top: 10px;\n  }\n"])), y), m.ZP.ul(c || (c = w(["\n  flex-direction: column;\n  display: block;\n  padding: 8px;\n  transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n  border-radius: 8px 8px 100px 100px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n\n  ", "\n\n  ", "\n"], ["\n  flex-direction: column;\n  display: block;\n  padding: 8px;\n  transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n  border-radius: 8px 8px 100px 100px;\n  background: ", ";\n  border: 1px solid ", ";\n  backdrop-filter: blur(12px);\n\n  ", "\n\n  ", "\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black80
                }), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white20
                }), (function(n) {
                    return "show" === (null === n || void 0 === n ? void 0 : n.display) && (0, m.iv)(a || (a = w(["\n    pointer-events: all\n  "], ["\n    pointer-events: all\n  "])))
                }), (function(n) {
                    return "hide" === (null === n || void 0 === n ? void 0 : n.display) && (0, m.iv)(l || (l = w(["\n    gap: 16px;\n    border: ", ";\n  "], ["\n    gap: 16px;\n    border: ", ";\n  "])), (function(n) {
                        var e;
                        return null === (e = n.theme.border) || void 0 === e ? void 0 : e.base
                    }))
                })), (0, m.ZP)(y)(d || (d = w(['\n  cursor: pointer;\n  &:hover div {\n    display: flex;\n  }\n  &:hover::before {\n    content: "";\n    background: ', ";\n    height: 200px;\n    @-moz-document url-prefix() {\n      height: 230px;\n    }\n    position: absolute;\n    z-index: -1;\n    width: 46px;\n    top: -1px;\n    left: -6px;\n    border-radius: ", ";\n  }\n}"], ['\n  cursor: pointer;\n  &:hover div {\n    display: flex;\n  }\n  &:hover::before {\n    content: "";\n    background: ', ";\n    height: 200px;\n    @-moz-document url-prefix() {\n      height: 230px;\n    }\n    position: absolute;\n    z-index: -1;\n    width: 46px;\n    top: -1px;\n    left: -6px;\n    border-radius: ", ";\n  }\n}"])), (function(n) {
                    return n.theme.colors.base600
                }), (function(n) {
                    return n.theme.border.radius
                }))),
                P = (m.ZP.div(p || (p = w(["\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 256px;\n  min-width: 160px;\n  width: max-content;\n  position: absolute;\n  transform: ", ";\n  top: ", ";\n  left: ", ";\n  right: ", ";\n  bottom: ", ";\n  color: ", ';\n  background: #62676A;\n  border-radius: 12px;\n  text-align: left;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n\n  &:after {\n    content: " ";\n    position: absolute;\n    transform: ', ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: 0;\n    height: 0;\n    border-top: 9px solid ", ";\n    border-bottom: 9px solid transparent;\n    border-left: 9px solid ", ";\n    border-right: 9px solid transparent;\n    z-index: 2;\n    transition: border-color 0.2s ease;\n    clip-path: ", ";\n  }\n"], ["\n  box-sizing: border-box;\n\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 256px;\n  min-width: 160px;\n  width: max-content;\n  position: absolute;\n  transform: ", ";\n  top: ", ";\n  left: ", ";\n  right: ", ";\n  bottom: ", ";\n  color: ", ';\n  background: #62676A;\n  border-radius: 12px;\n  text-align: left;\n  padding: 12px 16px;\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(12px);\n\n  &:after {\n    content: " ";\n    position: absolute;\n    transform: ', ";\n    left: ", ";\n    bottom: ", ";\n    right: ", ";\n    width: 0;\n    height: 0;\n    border-top: 9px solid ", ";\n    border-bottom: 9px solid transparent;\n    border-left: 9px solid ", ";\n    border-right: 9px solid transparent;\n    z-index: 2;\n    transition: border-color 0.2s ease;\n    clip-path: ", ";\n  }\n"])), (function(n) {
                    var e = n.isPortrait,
                        t = n.isH5Game;
                    return e ? "none" : t ? "translateY(-100%)" : "translate(-50%, -100%)"
                }), (function(n) {
                    return n.isPortrait ? "auto" : "-24px"
                }), (function(n) {
                    var e = n.isPortrait,
                        t = n.isH5Game;
                    return e || t ? "auto" : "50%"
                }), (function(n) {
                    var e = n.isPortrait,
                        t = n.isH5Game;
                    return e ? "58px" : t ? "0" : "auto"
                }), (function(n) {
                    return n.isPortrait ? "-6px" : "auto"
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.isPortrait ? "translateX(99%)" : "translateX(-50%)"
                }), (function(n) {
                    var e = n.isPortrait,
                        t = n.isH5Game;
                    return e || t ? "auto" : "50%"
                }), (function(n) {
                    return n.isPortrait ? "15px" : "-18px"
                }), (function(n) {
                    var e = n.isPortrait,
                        t = n.isH5Game;
                    return e || t ? "0" : "auto"
                }), (function(n) {
                    return n.isPortrait ? "transparent" : "#62676A"
                }), (function(n) {
                    return n.isPortrait ? "#62676A" : "transparent"
                }), (function(n) {
                    return n.isPortrait ? "polygon(0% 0%, 50% 50%, 0% 100%)" : "polygon(0% 0%, 100% 0%, 50% 50%)"
                })), (0, m.ZP)(b.lU)(s || (s = w(["\n  margin-top: 8px;\n"], ["\n  margin-top: 8px;\n"]))), m.ZP.div(u || (u = w(["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  height: 100%;\n\n  ", "\n"])), (function(n) {
                    var e = n.isPortrait,
                        t = n.isGameAction;
                    return e && "\n    flex-direction: column-reverse;\n    ".concat(t ? "justify-content: space-between;" : "", "\n  ")
                }))),
                k = m.ZP.div(g || (g = w(["\n  display: flex;\n  gap: 6px;\n  ", "\n"], ["\n  display: flex;\n  gap: 6px;\n  ", "\n"])), (function(n) {
                    return n.isPortrait && (0, m.iv)(f || (f = w(["\n    flex-direction: column;\n    &:last-child {\n      flex-direction: column-reverse;\n    }\n  "], ["\n    flex-direction: column;\n    &:last-child {\n      flex-direction: column-reverse;\n    }\n  "])))
                })),
                A = (0, m.ZP)(b.IS).attrs({
                    as: "span"
                })(h || (h = w(["\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 3px;\n  background: ", ";\n  color: ", ";\n  align-self: center;\n  margin-left: 8px;\n  letter-spacing: 1px;\n"], ["\n  display: inline-block;\n  padding: 4px 8px;\n  border-radius: 3px;\n  background: ", ";\n  color: ", ";\n  align-self: center;\n  margin-left: 8px;\n  letter-spacing: 1px;\n"])), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.white
                })),
                S = m.ZP.div(x || (x = w(["\n  display: flex;\n  height: 40px;\n  padding-right: 0px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 120px;\n  margin-right: 4px;\n  align-self: center;\n  cursor: pointer;\n  position absolute;\n  top: 12px;\n  right: 20px;\n  z-index: 100;\n"], ["\n  display: flex;\n  height: 40px;\n  padding-right: 0px;\n  align-items: center;\n  gap: 8px;\n  border-radius: 120px;\n  margin-right: 4px;\n  align-self: center;\n  cursor: pointer;\n  position absolute;\n  top: 12px;\n  right: 20px;\n  z-index: 100;\n"])))
        },
        25186: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return A
                }
            });
            var i, r, o = t(11720),
                a = t(25617),
                l = t(23279),
                c = t.n(l),
                d = t(50912),
                p = t(86296),
                s = t(26793),
                u = t(94381),
                f = t(74803),
                g = t(59930),
                h = t(66971),
                x = t(26544),
                m = t(95509),
                b = t(50445),
                w = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                v = b.ZP.div(i || (i = w(["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"], ["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"]))),
                y = b.ZP.input(r || (r = w(["\n    accent-color:  ", ";\n    height: 3px;\n    background: ", ";\n    cursor: pointer;\n    width: 128px;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n\n    &::-webkit-slider-thumb {\n      appearance: none;\n      -webkit-appearance: none;\n      border: none;\n      height: 16px;\n      width: 16px;\n      border-radius: 50%;\n      background: ", ";\n      margin-top: 0px;\n    }\n\n    &::-moz-range-thumb {\n        appearance: none;\n        -moz-appearance: none;\n        border: none;\n        height: 16px;\n        width: 16px;\n        border-radius: 50%;\n        background: ", ";\n        margin-top: 0px;\n      }\n"], ["\n    accent-color:  ", ";\n    height: 3px;\n    background: ", ";\n    cursor: pointer;\n    width: 128px;\n    outline: none;\n    appearance: none;\n    -webkit-appearance: none;\n\n    &::-webkit-slider-thumb {\n      appearance: none;\n      -webkit-appearance: none;\n      border: none;\n      height: 16px;\n      width: 16px;\n      border-radius: 50%;\n      background: ", ";\n      margin-top: 0px;\n    }\n\n    &::-moz-range-thumb {\n        appearance: none;\n        -moz-appearance: none;\n        border: none;\n        height: 16px;\n        width: 16px;\n        border-radius: 50%;\n        background: ", ";\n        margin-top: 0px;\n      }\n"])), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    var e = n.theme,
                        t = n.value;
                    return "linear-gradient(to right,  0%, ".concat(e.colors.ascent, " ").concat(t, "%,         ").concat(e.colors.white, " ").concat(t, "%, ").concat(e.colors.white, " 100%)")
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.ascent
                })),
                Z = t(97997),
                P = function(n, e, t, i) {
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
                k = function(n, e) {
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
                A = function(n) {
                    var e = n.showSlider,
                        t = (0, s.$)().t,
                        i = (0, o.useRef)(null),
                        r = (0, a.v9)((function(n) {
                            return n.appPreferences.volume
                        })),
                        l = (0, a.v9)((function(n) {
                            return n.play.muted
                        })),
                        b = (0, a.I0)();
                    (0, o.useEffect)((function() {
                        var n = l ? "0" : (10 * r).toString();
                        i.current && (i.current.value = n, i.current.style.background = "linear-gradient(to right, ".concat(x.qm.colors.ascent, " 0%,         ").concat(x.qm.colors.ascent, " ").concat(10 * parseInt(n, 10), "%, ").concat(x.qm.colors.white, " ").concat(10 * parseInt(n, 10), "%,         ").concat(x.qm.colors.white, " 100%)"))
                    }), [r, l]);
                    return (0, Z.BX)(Z.HY, {
                        children: [(0, Z.tZ)(g.Z, {
                            id: "ng-vol",
                            alt: t(l ? "mutedSoundIcon" : "soundIcon"),
                            onClick: function() {
                                return P(void 0, void 0, void 0, (function() {
                                    var n, t, i;
                                    return k(this, (function(r) {
                                        switch (r.label) {
                                            case 0:
                                                return l ? e ? [3, 1] : (n = d.Z.getState(), (t = n.play.videoRef) && t.current && (t.current.muted = !1), i = n.appPreferences.volume, b((0, m.i)({
                                                    volume: i
                                                })), d.Z.dispatch({
                                                    type: h.Z.MUTE,
                                                    payload: {
                                                        muted: !1
                                                    }
                                                }), (0, f.f)(u.vK.audio.unmute), [3, 3]) : [3, 4];
                                            case 1:
                                                return [4, (0, p.ZP)()];
                                            case 2:
                                                r.sent(), r.label = 3;
                                            case 3:
                                                return [3, 5];
                                            case 4:
                                                (0, p.LR)(), r.label = 5;
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }))
                            },
                            name: l ? "mute-icon" : "sound-icon"
                        }), e && (0, Z.tZ)(v, {
                            id: "volume-slider",
                            children: (0, Z.tZ)(y, {
                                onChange: c()((function(n) {
                                    if (i.current) {
                                        i.current.value = n.target.value;
                                        var e = parseInt(n.target.value, 10),
                                            t = e / 10,
                                            r = e < 1;
                                        !r && l && (0, f.f)(u.vK.audio.unmute), r && !l && (0, f.f)(u.vK.audio.mute), b({
                                            type: h.Z.MUTE,
                                            payload: {
                                                muted: r
                                            }
                                        }), b((0, m.i)({
                                            volume: t
                                        }))
                                    }
                                }), 250),
                                onInput: function(n) {
                                    if (i.current) {
                                        i.current.value = n.target.value;
                                        var e = 10 * parseInt(n.target.value, 10);
                                        i.current.style.background = "linear-gradient(to right, ".concat(x.qm.colors.ascent, " 0%,         ").concat(x.qm.colors.ascent, " ").concat(e, "%, ").concat(x.qm.colors.white, " ").concat(e, "%, ").concat(x.qm.colors.white, " 100%)")
                                    }
                                },
                                ref: i,
                                type: "range",
                                min: 0,
                                max: 10,
                                id: "ng-vol"
                            })
                        })]
                    })
                }
        },
        12812: function(n, e, t) {
            var i = t(11720),
                r = t(97997);
            e.Z = function(n) {
                var e = n.initialRender,
                    t = void 0 !== e && e,
                    o = n.toggle,
                    a = n.children,
                    l = n.enteringDelay,
                    c = void 0 === l ? 0 : l,
                    d = n.exitingDelay,
                    p = void 0 === d ? 0 : d,
                    s = n.exitingCallBack,
                    u = void 0 === s ? function() {} : s,
                    f = (0, i.useState)(t),
                    g = f[0],
                    h = f[1],
                    x = (0, i.useRef)(-1),
                    m = (0, i.useRef)(-1);
                return (0, i.useEffect)((function() {
                    window.clearTimeout(x.current), window.clearTimeout(m.current), o && c ? x.current = window.setTimeout((function() {
                        return h(o)
                    }), 1e3 * c) : !o && p ? m.current = window.setTimeout((function() {
                        h(o), u()
                    }), 1e3 * p) : (h(o), o || u())
                }), [c, p, o]), g ? (0, r.tZ)(r.HY, {
                    children: a
                }) : null
            }
        },
        66749: function(n, e, t) {
            var i = t(26793),
                r = t(17744),
                o = t(97997);
            e.Z = function(n) {
                var e = n.user,
                    t = n.click,
                    a = n.isLoggedIn,
                    l = n.size,
                    c = void 0 === l ? 40 : l,
                    d = n.src,
                    p = void 0 === d ? "" : d,
                    s = n.id,
                    u = void 0 === s ? "" : s,
                    f = (null === e || void 0 === e ? void 0 : e.avatar) || "",
                    g = ((null === e || void 0 === e ? void 0 : e.handle) && (null === e || void 0 === e ? void 0 : e.handle.length) > 0 && (null === e || void 0 === e || e.handle[0]), (0, i.$)().t);
                return (0, o.tZ)(r.t, {
                    bgImg: !0,
                    onClick: t,
                    size: c,
                    children: a && f && (0, o.tZ)("img", {
                        alt: g("profilePic"),
                        src: "" === p ? f : p,
                        id: u,
                        width: c,
                        height: c
                    })
                })
            }
        },
        17744: function(n, e, t) {
            t.d(e, {
                S1: function() {
                    return p
                },
                t: function() {
                    return d
                }
            });
            var i, r, o = t(78294),
                a = t(50445),
                l = {
                    src: "/play/_next/static/media/default-profile.af9e1b7d.svg",
                    height: 40,
                    width: 40
                },
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                d = a.ZP.div(i || (i = c(["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  aspect-ratio: 1;\n  &:before {\n    content: '';\n    background-image: ", ";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: ", ";\n    height: ", ";\n    color: ", ";\n    font-size: 16px;\n    z-index: -1;\n  }\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  display: flex;\n  width: ", ";\n  height: ", ";\n  border-radius: 50%;\n  position: relative;\n  z-index: 1;\n  aspect-ratio: 1;\n  &:before {\n    content: '';\n    background-image: ", ";\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    text-align: center;\n    left: 0;\n    right: 0;\n    top: 0;\n    width: ", ";\n    height: ", ";\n    color: ", ";\n    font-size: 16px;\n    z-index: -1;\n  }\n  img {\n    border-radius: 50%;\n  }\n"])), (function(n) {
                    var e = n.size;
                    return "".concat(e, "px")
                }), (function(n) {
                    var e = n.size;
                    return "".concat(e, "px")
                }), (function(n) {
                    return n.bgImg && "url('".concat(o.ZP.prefix).concat((null === l || void 0 === l ? void 0 : l.src) || "", "')")
                }), (function(n) {
                    var e = n.size;
                    return "".concat(e, "px")
                }), (function(n) {
                    var e = n.size;
                    return "".concat(e, "px")
                }), (function(n) {
                    return n.theme.colors.white
                })),
                p = a.ZP.div(r || (r = c(["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n"], ["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  border-radius: 50%;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n\n  ", "\n\n  ", "\n\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white40
                }), (function(n) {
                    return n.isLoggedIn && "\n    width: 42px;\n    height: 42px;\n  "
                }), (function(n) {
                    return !n.isLoggedIn && "\n    div:nth-child(1) {\n      transform: translate(-1px, -1px);\n    }\n  "
                }))
        },
        91469: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return s
                }
            });
            var i, r = t(92809),
                o = (t(11720), t(26793)),
                a = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                l = t(50445).ZP.div(i || (i = a(["\n  ", "\n"], ["\n  ", "\n"])), (function(n) {
                    var e = n.theme;
                    return "\n    color: ".concat(e.colors.white60, ";\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    a {\n      color: ").concat(e.colors.white60, ";\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 150%;\n    }\n  ")
                })),
                c = t(97997);

            function d(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function p(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(t), !0).forEach((function(e) {
                        (0, r.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var s = function(n) {
                var e = (0, o.$)().t;
                return (0, c.BX)(l, p(p({}, n), {}, {
                    children: [e("disclaimer"), " ", (0, c.tZ)("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://now.gg/terms-and-privacy.html#terms",
                        children: e("termsOfUse")
                    }), " ".concat(e("and"), " "), (0, c.tZ)("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://now.gg/terms-and-privacy.html#privacy",
                        children: e("privacyPolicy")
                    }), ", ".concat(e("including"), " "), (0, c.tZ)("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: "https://now.gg/terms-and-privacy.html#cookie-policy",
                        children: e("cookieUse")
                    })]
                }))
            }
        },
        29871: function(n, e, t) {
            var i = t(92809),
                r = t(11720),
                o = t(25617),
                a = t(23279),
                l = t.n(a),
                c = t(22012),
                d = t(59930),
                p = t(12812),
                s = t(68472),
                u = t(97997);

            function f(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function g(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(t), !0).forEach((function(e) {
                        (0, i.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : f(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var h = function(n, e) {
                var t = {};
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                }
                return t
            };
            e.Z = function(n) {
                var e = n.children,
                    t = n.toggle,
                    i = void 0 === t || t,
                    a = n.onClose,
                    f = h(n, ["children", "toggle", "onClose"]),
                    x = (0, o.v9)((function(n) {
                        return n.play.videoRef
                    })),
                    m = (0, r.useState)({
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0
                    }),
                    b = m[0],
                    w = m[1],
                    v = function() {
                        var n, e = null === (n = null === x || void 0 === x ? void 0 : x.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                        return {
                            top: (null === e || void 0 === e ? void 0 : e.top) || 0,
                            right: (null === e || void 0 === e ? void 0 : e.right) || 0,
                            bottom: (null === e || void 0 === e ? void 0 : e.bottom) || 0,
                            left: (null === e || void 0 === e ? void 0 : e.left) || 0,
                            width: (null === e || void 0 === e ? void 0 : e.width) || window.innerWidth,
                            height: (null === e || void 0 === e ? void 0 : e.height) || window.innerHeight
                        }
                    };
                return (0, r.useEffect)((function() {
                    var n = l()((function() {
                        w(v())
                    }), 250);
                    return window.addEventListener("resizeDone", n),
                        function() {
                            window.removeEventListener("resizeDone", n)
                        }
                }), []), (0, r.useEffect)((function() {
                    w(v())
                }), [v, x]), r.default.createPortal((0, u.tZ)(p.Z, {
                    toggle: i,
                    exitingDelay: .6,
                    children: (0, u.tZ)(s.Z, g(g({}, b), {}, {
                        toggle: i,
                        children: (0, u.BX)(c.Z, g(g({}, f), {}, {
                            children: [e, a && (0, u.tZ)(s.T, {
                                onClick: a,
                                children: (0, u.tZ)(d.Z, {
                                    name: "cross-thin",
                                    size: 24
                                })
                            })]
                        }))
                    }))
                }), document.body)
            }
        },
        68472: function(n, e, t) {
            t.d(e, {
                T: function() {
                    return g
                }
            });
            var i, r, o, a, l, c, d = t(50445),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = (0, d.F4)(i || (i = p(["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  } \n  100% {\n    opacity: 1;\n  }\n"]))),
                u = (0, d.F4)(r || (r = p(["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  } \n  100% {\n    opacity: 0;\n  }\n"]))),
                f = d.ZP.div(l || (l = p(["\n  .modal-overlay {\n    z-index: 2;\n    top: ", "px;\n    right: ", "px;\n    bottom: ", "px;\n    left: ", "px;\n    width: ", "px;\n    height: ", "px;\n   \n    ", "\n  }\n"], ["\n  .modal-overlay {\n    z-index: 2;\n    top: ", "px;\n    right: ", "px;\n    bottom: ", "px;\n    left: ", "px;\n    width: ", "px;\n    height: ", "px;\n   \n    ", "\n  }\n"])), (function(n) {
                    return n.top
                }), (function(n) {
                    return n.right
                }), (function(n) {
                    return n.bottom
                }), (function(n) {
                    return n.left
                }), (function(n) {
                    return n.width
                }), (function(n) {
                    return n.height
                }), (function(n) {
                    return n.toggle ? (0, d.iv)(o || (o = p(["\n      animation: ", " 0.6s ease-out;\n    "], ["\n      animation: ", " 0.6s ease-out;\n    "])), s) : (0, d.iv)(a || (a = p(["\n      animation: ", " 0.6s ease-out;\n    "], ["\n      animation: ", " 0.6s ease-out;\n    "])), u)
                })),
                g = d.ZP.span(c || (c = p(["\n  display: inline-block;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  cursor: pointer;\n  color: ", ";\n"], ["\n  display: inline-block;\n  position: absolute;\n  right: 24px;\n  top: 24px;\n  cursor: pointer;\n  color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white80
                }));
            e.Z = f
        },
        60925: function(n, e, t) {
            t.d(e, {
                E$: function() {
                    return s
                },
                dl: function() {
                    return u
                },
                Xz: function() {
                    return f
                },
                YV: function() {
                    return g
                },
                OL: function() {
                    return h
                }
            });
            var i, r, o, a, l, c = t(94564),
                d = t(50445),
                p = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                s = d.ZP.div(i || (i = p(["\n    display : flex;\n    border-radius: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.30);\n    background: rgba(0, 0, 0, 0.50);\n    backdrop-filter: blur(12px);\n    width: ", ";\n    flex-direction:column;\n    left: ", ";\n    top:", ";\n    position: ", ";\n    transform: ", ";\n\n     .caret{\n        border: solid rgba(255,255,255,0.3);\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: 3px;\n        transform: rotate(-45deg);\n        -webkit-transform: rotate(-45deg);\n        margin-left: -5px;\n    }\n\n    .edit-icon {\n        cursor:pointer;\n    }\n\n\n      @media only screen and (max-width: 1240px) and (orientation: portrait) {\n        width: 100%;\n      }\n"], ["\n    display : flex;\n    border-radius: 6px;\n    border: 1px solid rgba(255, 255, 255, 0.30);\n    background: rgba(0, 0, 0, 0.50);\n    backdrop-filter: blur(12px);\n    width: ", ";\n    flex-direction:column;\n    left: ", ";\n    top:", ";\n    position: ", ";\n    transform: ", ";\n\n     .caret{\n        border: solid rgba(255,255,255,0.3);\n        border-width: 0 1px 1px 0;\n        display: inline-block;\n        padding: 3px;\n        transform: rotate(-45deg);\n        -webkit-transform: rotate(-45deg);\n        margin-left: -5px;\n    }\n\n    .edit-icon {\n        cursor:pointer;\n    }\n\n\n      @media only screen and (max-width: 1240px) and (orientation: portrait) {\n        width: 100%;\n      }\n"])), (function(n) {
                    return n.isVideoPage ? "70%" : "80%"
                }), (function(n) {
                    return n.isVideoPage ? "50%" : ""
                }), (function(n) {
                    return n.isVideoPage ? "100px" : ""
                }), (function(n) {
                    return n.isVideoPage ? "relative" : ""
                }), (function(n) {
                    return n.isVideoPage ? "translateX(-50%)" : ""
                })),
                u = d.ZP.div(r || (r = p(["\n    display : flex;\n    padding: 12px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n"], ["\n    display : flex;\n    padding: 12px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n"]))),
                f = d.ZP.div(o || (o = p(["\n    display : flex;\n    padding: 16px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n"], ["\n    display : flex;\n    padding: 16px 20px;\n    align-items : center;\n    justify-content : space-between;\n    background: rgba(255, 255, 255, 0.10);\n    border-bottom-right-radius: inherit;\n    border-bottom-left-radius: inherit;\n"]))),
                g = d.ZP.div(a || (a = p(["\n        color: ", ";\n        background: ", ";\n        position: absolute;\n        font-size: 10px;\n        padding: 4px 6px;\n        gap: 4px;\n        right: 0;\n        bottom: 8%;\n        transform: translateX(-50%);\n        border: 1px solid ", ";\n        border-radius: 4px;\n        z-index:10;\n"], ["\n        color: ", ";\n        background: ", ";\n        position: absolute;\n        font-size: 10px;\n        padding: 4px 6px;\n        gap: 4px;\n        right: 0;\n        bottom: 8%;\n        transform: translateX(-50%);\n        border: 1px solid ", ";\n        border-radius: 4px;\n        z-index:10;\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.black80
                }), (function(n) {
                    return n.theme.colors.white20
                })),
                h = (0, d.ZP)(c.lU)(l || (l = p(["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 280px;\n    color: rgba(255, 255, 255, 0.70)\n"], ["\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 280px;\n    color: rgba(255, 255, 255, 0.70)\n"])))
        },
        53574: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return L
                }
            });
            var i, r, o, a, l, c, d, p, s, u, f, g, h = t(11720),
                x = t(79354),
                m = t(50301),
                b = t(7763),
                w = t(25617),
                v = t(77036),
                y = t(45628),
                Z = t(72742),
                P = t(50445),
                k = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                A = (0, P.F4)(i || (i = k(["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"], ["\n  0% {\n    top: 100px;\n    opacity: 0;\n  } 100% {\n    top: 0;\n    opacity: 1;\n  }\n"]))),
                S = (0, P.F4)(r || (r = k(["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"], ["\n  0% {\n    top: 0;\n    opacity: 1;\n  }\n  50% {\n    top: 100px;\n    opacity: 0;\n  }\n"]))),
                E = P.ZP.div(a || (a = k(["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"], ["\n  overflow: auto;\n  z-index: 20;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: calc(var(--vw, 1vw) * 100);\n  display: flex;\n  flex-direction: column;\n\n  animation: ", " 0.3s ease-out;\n  /* ", "  */\n"])), A, (function(n) {
                    return n.hide && (0, P.iv)(o || (o = k(["\n    animation: ", " 0.6s ease-out;\n  "], ["\n    animation: ", " 0.6s ease-out;\n  "])), S)
                })),
                O = P.ZP.div(l || (l = k(["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"], ["\n  padding: 20px 24px;\n  position: sticky;\n  top: 0;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  z-index: 20;\n  display: flex;\n  justify-content: center;\n\n  @media only screen and (orientation: landscape) {\n    padding: 16px 24px;\n  }\n"])), (function(n) {
                    return n.theme.colors.black70
                })),
                I = P.ZP.div(c || (c = k(["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: ", ";\n  backdrop-filter: blur(60px);\n  width: 100%;\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"])), (function(n) {
                    return n.theme.colors.black70
                })),
                C = P.ZP.div(d || (d = k(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: absolute;\n  left: 24px;\n\n  img {\n    width: 124px;\n    height: 32px;\n  }\n\n  @media only screen and (orientation: landscape) {\n    img {\n      position: absolute;\n      clip: rect(0, 48px, 32px, 0);\n    }\n  }\n"]))),
                R = P.ZP.div(p || (p = k(["\n  position: relative;\n  height: 32px;\n"], ["\n  position: relative;\n  height: 32px;\n"]))),
                j = P.ZP.span(s || (s = k(["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"], ["\n  display: inline-block;\n  width: 20px;\n  height: 20px;\n  z-index: 20;\n  position: absolute;\n  top: 24px;\n  right: 20px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n"]))),
                B = P.ZP.div(u || (u = k(["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"], ["\n  margin-top: 76px;\n\n  @media only screen and (orientation: landscape) {\n    margin-top: 0;\n  }\n\n  @media only screen and (orientation: portrait) {\n    width: 100%;\n  }\n"]))),
                z = P.ZP.div(f || (f = k(["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"], ["\n  padding: 24px;\n  &>div {\n    padding: 0;\n    width: 100% !important;\n    position: relative;\n    border: 0;\n    gap: 24px;\n    background: transparent;\n\n    &.fit-html {\n      left: 0;\n    }\n  }\n\n  .icon-cross-thin, .genre-list {\n    display: none;\n  }\n\n  .trending-section {\n    display: block;\n  }\n"]))),
                T = P.ZP.div(g || (g = k(["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"], ["\n  &>div {\n    top: 0px;\n    bottom: 0px;\n    position: relative;\n    width: 100%;\n    padding: 24px;\n    background: transparent;\n    backdrop-filter: none;\n\n    h3 {\n      text-align: left;\n    }\n\n    &.fit-html {\n      left: 0;\n    }\n\n    @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n      left: 0 !important;\n      width: 100% !important;\n      padding-top: 24px;\n    }\n  }\n\n  .icon-cross-thin {\n    display: none;\n  }\n"]))),
                D = E,
                X = t(97997),
                L = function(n) {
                    var e = n.close,
                        t = n.origin,
                        i = (0, w.v9)((function(n) {
                            return n.play.orientation
                        })),
                        r = (0, h.useState)(!1),
                        o = r[0],
                        a = r[1],
                        l = (0, h.useState)("browse" === t),
                        c = l[0],
                        d = l[1],
                        p = (0, h.useState)(),
                        s = p[0],
                        u = p[1],
                        f = (0, h.useState)(null),
                        g = (f[0], f[1]);
                    (0, h.useEffect)((function() {
                        return document.body.classList.add("revert-rotation", "overflow-hidden"),
                            function() {
                                document.body.classList.remove("revert-rotation", "overflow-hidden")
                            }
                    }), []);
                    return (0, h.createPortal)((0, X.BX)(D, {
                        hide: o,
                        ref: function(n) {
                            return g(n)
                        },
                        children: [(0, X.BX)(O, {
                            children: [(0, X.tZ)(C, {
                                isPortrait: y.cj.portrait === i,
                                children: (0, X.tZ)(R, {
                                    children: (0, X.tZ)(Z.Z, {
                                        className: "app-logo"
                                    })
                                })
                            }), (0, X.tZ)(B, {
                                children: (0, X.tZ)(v.Z, {
                                    autoFocus: "browse" === t,
                                    onFocus: function() {
                                        d(!0)
                                    },
                                    onChange: function(n) {
                                        return u(n)
                                    }
                                })
                            }), (0, X.tZ)(j, {
                                onClick: function() {
                                    a(!0), e()
                                },
                                children: (0, X.tZ)(x.x8, {})
                            })]
                        }), (0, X.BX)(I, {
                            children: [c && (0, X.tZ)(z, {
                                children: (0, X.tZ)(m.Z, {
                                    isOverlay: !0,
                                    overlayKeywords: s
                                })
                            }), !c && (0, X.tZ)(T, {
                                children: (0, X.tZ)(b.default, {
                                    isOverlay: !0
                                })
                            })]
                        })]
                    }), document.body)
                }
        },
        57762: function(n, e, t) {
            t.d(e, {
                il: function() {
                    return y
                },
                aI: function() {
                    return Z
                },
                r2: function() {
                    return P
                },
                W2: function() {
                    return k
                },
                xg: function() {
                    return A
                },
                mo: function() {
                    return S
                },
                __: function() {
                    return E
                },
                X2: function() {
                    return O
                },
                qp: function() {
                    return I
                },
                LD: function() {
                    return C
                },
                ao: function() {
                    return R
                },
                C0: function() {
                    return j
                },
                vx: function() {
                    return B
                },
                xv: function() {
                    return z
                },
                cw: function() {
                    return T
                },
                xR: function() {
                    return D
                }
            });
            var i, r, o, a, l, c, d, p, s, u, f, g, h, x, m, b, w = t(50445),
                v = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                y = (0, w.iv)(i || (i = v(["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n    max-width: 440px;\n"], ["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n    max-width: 440px;\n"]))),
                Z = (0, w.iv)(r || (r = v(["\n  ", "\n"], ["\n  ", "\n"])), y),
                P = (0, w.iv)(o || (o = v(["\n    padding: 20px;\n"], ["\n    padding: 20px;\n"]))),
                k = w.ZP.div(a || (a = v(["\n    padding: 24px;\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"], ["\n    padding: 24px;\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"])), (function(n) {
                    return n.theme.colors.base900
                })),
                A = w.ZP.div(l || (l = v(["\n    display: flex;\n    justify-content: space-between;\n    height: 45px;\n"], ["\n    display: flex;\n    justify-content: space-between;\n    height: 45px;\n"]))),
                S = w.ZP.span(c || (c = v(["\n   margin-left: 4px;\n"], ["\n   margin-left: 4px;\n"]))),
                E = w.ZP.label(d || (d = v(["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: 1px solid ", ';\n        width: 24px;\n        height: 12px;\n        margin: auto 0px;\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        aspect-ratio: 1;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(130%);\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: 1px solid ", ';\n        width: 24px;\n        height: 12px;\n        margin: auto 0px;\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        aspect-ratio: 1;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(130%);\n    }\n"])), (function(n) {
                    return n.theme.border.radius12
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.ascent
                }), (function(n) {
                    return n.theme.colors.white
                })),
                O = w.ZP.div(p || (p = v(["\n    display: flex;\n    flex-direction: row;\n    color: ", ";\n    margin: 8px 0px 0px 0px;\n    span, a {\n        color: ", " !important;\n    }\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    color: ", ";\n    margin: 8px 0px 0px 0px;\n    span, a {\n        color: ", " !important;\n    }\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                I = w.ZP.div(s || (s = v(["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n\n    span, a {\n        color: ", " !important;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n\n    span, a {\n        color: ", " !important;\n    }\n"])), (function(n) {
                    return n.theme.spacing.base4
                }), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.white
                })),
                C = w.ZP.div(u || (u = v(["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-bottom: 16px;\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"], ["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-bottom: 16px;\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"])), (function(n) {
                    return n.theme.colors.white10
                })),
                R = w.ZP.div(f || (f = v(["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n"]))),
                j = w.ZP.span(g || (g = v(["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"])), (function(n) {
                    return n.theme.colors.white60
                })),
                B = w.ZP.p(h || (h = v(["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"], ["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                z = w.ZP.div(x || (x = v(["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"], ["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"]))),
                T = w.ZP.div(m || (m = v(["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"], ["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                D = w.ZP.div(b || (b = v(["\n    display: flex;\n"], ["\n    display: flex;\n"])))
        },
        94036: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return E
                }
            });
            var i, r, o = t(11720),
                a = t(25617),
                l = t(13978),
                c = {
                    src: "/play/_next/static/media/google.ad9f69b8.svg",
                    height: 32,
                    width: 32
                },
                d = t(94391),
                p = {
                    src: "/play/_next/static/media/facebook.76e2ef04.svg",
                    height: 25,
                    width: 25
                },
                s = t(45024),
                u = t(78294),
                f = t(89598),
                g = t(77691),
                h = t(6268),
                x = t(58309),
                m = t(14266),
                b = t(94381),
                w = t(11163),
                v = t(50445),
                y = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                Z = v.ZP.div(i || (i = y(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"]))),
                P = v.ZP.p(r || (r = y(["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"], ["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"])), (function(n) {
                    return n.theme.colors.base500
                }), (function(n) {
                    return n.theme.colors.base500
                })),
                k = Z,
                A = t(97997),
                S = function() {
                    return (S = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                E = function(n) {
                    var e = n.pageContext,
                        t = void 0 === e ? b.$6.pre : e,
                        i = n.showGuestBtn,
                        r = n.params,
                        v = void 0 === r ? {} : r,
                        y = (0, w.useRouter)(),
                        Z = (0, a.v9)((function(n) {
                            return n.robuxRewards.accumulatedTimeSecs
                        })),
                        E = (0, a.v9)((function(n) {
                            return n.play.isPlayerLoaded
                        })),
                        O = (0, a.I0)();
                    (0, o.useEffect)((function() {
                        Z > 0 && sessionStorage.setItem(b.XS, "".concat(Z))
                    }), [Z]);
                    var I = function(n, e) {
                        (0, f.L9)(b.q3, {
                            authProvider: n,
                            loginPageContext: e
                        }), (null === u.ZP || void 0 === u.ZP ? void 0 : u.ZP.isAppPage) && E && (0, u.mv)();
                        var t = u.ZP.authUseThirdPartyFlow ? window.location.pathname : window.location.href.split("?")[0],
                            i = u.ZP.authRedirectionUrl.replace("$provider", n).replace("$continueUrl", (0, g.KW)(t, S({
                                ng_visitId: encodeURIComponent(window.ngVisitId),
                                ng_feSessionId: encodeURIComponent(window.feSessionId || ""),
                                pageReferrer: encodeURIComponent(sessionStorage.getItem("pageReferrer") || "NA"),
                                loginPageContext: e
                            }, v)));
                        window.location.href = i
                    };
                    return (0, A.BX)(k, {
                        className: "login-options",
                        children: [(0, A.BX)(h.z, {
                            onClick: function() {
                                return I("google", t)
                            },
                            id: "ng-google",
                            variant: "google",
                            size: "large",
                            children: [(0, A.tZ)("img", {
                                alt: "",
                                src: (0, s.j)(c),
                                width: 20,
                                height: 20
                            }), " ", (0, l.t)("signInGoogle")]
                        }), (0, A.BX)(h.z, {
                            onClick: function() {
                                return I("discord", t)
                            },
                            variant: "discord",
                            size: "large",
                            children: [(0, A.tZ)("img", {
                                alt: "",
                                src: (0, s.j)(d.Z),
                                width: 20,
                                height: 20
                            }), " ", (0, l.t)("discord")]
                        }), (0, A.BX)(h.z, {
                            onClick: function() {
                                return I("facebook", t)
                            },
                            variant: "facebook",
                            size: "large",
                            children: [(0, A.tZ)("img", {
                                alt: "",
                                src: (0, s.j)(p),
                                width: 20,
                                height: 20
                            }), " ", (0, l.t)("facebook")]
                        }), !u.ZP.features.requireAuth && i && "/browse" !== y.pathname && (0, A.BX)(A.HY, {
                            children: [(0, A.BX)(P, {
                                children: [(0, l.t)("or"), " ", (0, l.t)("asGuest")]
                            }), (0, A.tZ)(h.z, {
                                id: "goRogueBtn",
                                className: "guest-btn",
                                variant: "secondary",
                                text: (0, l.t)("goRogue"),
                                onClick: function() {
                                    return function(n) {
                                        var e, t;
                                        (0, f.L9)("PlayAsGuestClicked", {
                                            loginPageContext: n
                                        }), (null === u.ZP || void 0 === u.ZP ? void 0 : u.ZP.isAppPage) && E && (0, u.mv)(), (0, u.dr)(), (0, x.hB)(), (0, x.kS)({
                                            reason: "PlayAsGuestClicked",
                                            url: null === (t = null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.href) || void 0 === t ? void 0 : t.split("?")[0]
                                        }), O({
                                            type: m.Z.GUEST_FLOW,
                                            payload: {
                                                guestFlow: !0,
                                                showPreloader: !1
                                            }
                                        })
                                    }(t)
                                }
                            })]
                        })]
                    })
                }
        },
        61569: function(n, e, t) {
            t.d(e, {
                r2: function() {
                    return h
                },
                il: function() {
                    return x
                },
                NM: function() {
                    return m
                },
                $S: function() {
                    return b
                },
                az: function() {
                    return w
                },
                W2: function() {
                    return v
                },
                GN: function() {
                    return y
                },
                Ls: function() {
                    return P
                }
            });
            var i, r, o, a, l, c, d, p, s, u = t(50445),
                f = t(94564),
                g = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                h = (0, u.iv)(i || (i = g(["\n  z-index: 12;\n"], ["\n  z-index: 12;\n"]))),
                x = function(n) {
                    return (0, u.iv)(r || (r = g(["\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  max-width:409px;\n  width:100%;\n  \n  @media only screen and (min-width: 768px) {\n    position: absolute;\n    top: 4px;\n    left: 134px;\n  }\n"], ["\n  border: 1px solid ", ";\n  backdrop-filter: blur(60px);\n  max-width:409px;\n  width:100%;\n  \n  @media only screen and (min-width: 768px) {\n    position: absolute;\n    top: 4px;\n    left: 134px;\n  }\n"])), n.colors.white10)
                },
                m = (0, u.ZP)(f.T5)(o || (o = g(["\n  color:", ";\n  margin: 0;\n"], ["\n  color:", ";\n  margin: 0;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                b = (0, u.ZP)(f.kk)(a || (a = g(["\n  color:", ";\n  margin: 12px 0 0;\n"], ["\n  color:", ";\n  margin: 12px 0 0;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                w = u.ZP.span(l || (l = g(["\n  color:", ";\n"], ["\n  color:", ";\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                v = u.ZP.div(c || (c = g(["\n  display: flex;\n  padding: 12px;\n"], ["\n  display: flex;\n  padding: 12px;\n"]))),
                y = u.ZP.div(d || (d = g(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),
                Z = (0, u.F4)(p || (p = g(["\n    0% { opacity:0; }\n    50% { opacity:0; }\n    100% { opacity:1; }\n"], ["\n    0% { opacity:0; }\n    50% { opacity:0; }\n    100% { opacity:1; }\n"]))),
                P = u.ZP.div(s || (s = g(["\n display:flex;\n justify-content: flex-end;\n gap:10px;\n margin-top:30px;\n animation-name: ", ";\n animation-duration: 1.5s;\n animation-fill-mode: forwards;\n opacity:0;\n"], ["\n display:flex;\n justify-content: flex-end;\n gap:10px;\n margin-top:30px;\n animation-name: ", ";\n animation-duration: 1.5s;\n animation-fill-mode: forwards;\n opacity:0;\n"])), Z)
        },
        60034: function(n, e, t) {
            t.d(e, {
                il: function() {
                    return p
                },
                Dx: function() {
                    return s
                }
            });
            var i, r, o, a = t(94564),
                l = t(50445),
                c = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                d = l.ZP.div(i || (i = c(["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"], ["\n  color: ", ";\n  text-align: center;\n\n  p {\n    margin-bottom: 16px;\n  }\n\n  div:last-child {\n    margin-top: 24px;\n  }\n\n  button {\n    padding: 9.5px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                p = (0, l.iv)(r || (r = c(["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 24px;\n    margin: 0;\n  }\n"]))),
                s = (0, l.ZP)(a.Bb)(o || (o = c(["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"], ["\n  margin: 16px auto 24px;\n  text-align: center;\n  max-width: 270px;\n  font-size: 20px;\n  line-height: 30px;\n"])));
            e.ZP = d
        },
        7013: function(n, e, t) {
            t.d(e, {
                Z: function() {
                    return b
                }
            });
            var i, r, o, a = t(92809),
                l = {
                    src: "/play/_next/static/media/no-ads.da3e4483.png",
                    height: 360,
                    width: 360,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAUVBMVEVMaXHaeX3huLrnxcbhiIvefX+dahTGYWHJVVrRYmXXeXm3S0/el3nMWVzhjpDclGzeb3HokJDbiXvPYGPun5jUa3DhkY7on6HutLbwjI7wo4mT6CkDAAAAFnRSTlMA8vv6/aoGFVDpQT12ncnY0xfwwNlmHtlGBQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVyscBgDAMwEClOqGFagP7Dwr56D4CkC0DXMntbYK8PqbvCRwxeFuA2YK/EzA61Tj0u9RauiDy9wNOZwHuHdGUhAAAAABJRU5ErkJggg=="
                },
                c = t(45024),
                d = t(95860),
                p = t(50445),
                s = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                u = (0, p.F4)(i || (i = s(["\n  0% { transform: rotate(-15deg) }\n  4% { transform: rotate(-5deg) }\n  6% { transform: rotate(-15deg) }\n  8% { transform: rotate(-10deg) }\n  10% { transform: rotate(-15deg) }\n\n  // pause\n  45% { transform: rotate(-15deg) }\n\n  50% { transform: rotate(15deg) }\n  54% { transform: rotate(5deg) }\n  56% { transform: rotate(15deg) }\n  58% { transform: rotate(10deg) }\n  60% { transform: rotate(15deg) }\n\n  // pause\n  95% { transform: rotate(15deg) }\n\n  // back to initial position\n  100% { transform: rotate(-15deg) }\n"], ["\n  0% { transform: rotate(-15deg) }\n  4% { transform: rotate(-5deg) }\n  6% { transform: rotate(-15deg) }\n  8% { transform: rotate(-10deg) }\n  10% { transform: rotate(-15deg) }\n\n  // pause\n  45% { transform: rotate(-15deg) }\n\n  50% { transform: rotate(15deg) }\n  54% { transform: rotate(5deg) }\n  56% { transform: rotate(15deg) }\n  58% { transform: rotate(10deg) }\n  60% { transform: rotate(15deg) }\n\n  // pause\n  95% { transform: rotate(15deg) }\n\n  // back to initial position\n  100% { transform: rotate(-15deg) }\n"]))),
                f = p.ZP.div(o || (o = s(["\n  ", "\n  ", "\n\n  ", "\n"], ["\n  ", "\n  ", "\n\n  ", "\n"])), d.be, (function(n) {
                    var e = n.$style;
                    return e && (0, p.iv)(e)
                }), (function(n) {
                    return n.applyAnimation && (0, p.iv)(r || (r = s(["\n    animation: ", " 5s infinite;\n  "], ["\n    animation: ", " 5s infinite;\n  "])), u)
                })),
                g = t(97997);

            function h(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(n);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), t.push.apply(t, i)
                }
                return t
            }

            function x(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(t), !0).forEach((function(e) {
                        (0, a.Z)(n, e, t[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }))
                }
                return n
            }
            var m = function(n, e) {
                    var t = {};
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
                    if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                        var r = 0;
                        for (i = Object.getOwnPropertySymbols(n); r < i.length; r++) e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
                    }
                    return t
                },
                b = function(n) {
                    var e = n.src,
                        t = n.style,
                        i = n.applyAnimation,
                        r = m(n, ["src", "style", "applyAnimation"]);
                    return (0, g.tZ)(f, {
                        $style: t,
                        applyAnimation: i,
                        children: (0, g.tZ)("img", x({
                            src: (0, c.j)(e || l),
                            alt: "reward & earn"
                        }, r))
                    })
                }
        },
        51591: function(n, e, t) {
            t.d(e, {
                XF: function() {
                    return x
                },
                op: function() {
                    return m
                }
            });
            var i, r, o, a, l, c, d, p, s = t(50445),
                u = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                f = (0, s.F4)(i || (i = u(["\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n"], ["\n  0% {\n    transform: scale(1);\n    opacity: 0.5;\n  }\n  100% {\n    transform: scale(4);\n    opacity: 0;\n  }\n"]))),
                g = (0, s.F4)(r || (r = u(["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),
                h = s.ZP.div(o || (o = u(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.3s ease-out;\n  border-radius: 120px;\n  border: 1px solid ", ";\n  background: ", ";\n  box-shadow: 0px 8px 16px 0px ", ";\n  padding: 0px 8px;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n  height: 100%;\n  transition: all 0.3s ease-out;\n  border-radius: 120px;\n  border: 1px solid ", ";\n  background: ", ";\n  box-shadow: 0px 8px 16px 0px ", ";\n  padding: 0px 8px;\n  width: 40px;\n  height: 40px;\n  justify-content: center;\n\n  &:hover {\n    border: 1px solid ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white10
                }), (function(n) {
                    return n.theme.colors.black10
                }), (function(n) {
                    return n.theme.colors.white40
                })),
                x = s.ZP.p(a || (a = u(["\n  animation: ", " 0.3s ease-out;\n  color: white;\n  text-align: center;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0.16px;\n  position: absolute;\n  border-radius: 36px;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  height: 10px;\n  padding: 0px 4px;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(17px);\n"], ["\n  animation: ", " 0.3s ease-out;\n  color: white;\n  text-align: center;\n  font-size: 8px;\n  font-weight: 600;\n  line-height: 16px;\n  letter-spacing: 0.16px;\n  position: absolute;\n  border-radius: 36px;\n  background: ", ";\n  backdrop-filter: blur(60px);\n  display: flex;\n  height: 10px;\n  padding: 0px 4px;\n  justify-content: center;\n  align-items: center;\n  transform: translateY(17px);\n"])), g, (function(n) {
                    return n.theme.colors.white20
                })),
                m = (s.ZP.span(l || (l = u([""], [""]))), s.ZP.div(c || (c = u(["\n    position: absolute;\n    top: 0;\n    right: 10px;\n    &:before, &:after {\n      content: '';\n      color: white;\n      position: absolute;\n      top: 0.25em;\n      left: 0;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #FF5B36;\n    }\n\n    &:before {\n      animation: ", " 1.7s ease infinite;\n      opacity: 0.25;\n    }\n"], ["\n    position: absolute;\n    top: 0;\n    right: 10px;\n    &:before, &:after {\n      content: '';\n      color: white;\n      position: absolute;\n      top: 0.25em;\n      left: 0;\n      width: 6px;\n      height: 6px;\n      border-radius: 50%;\n      background-color: #FF5B36;\n    }\n\n    &:before {\n      animation: ", " 1.7s ease infinite;\n      opacity: 0.25;\n    }\n"])), f));
            s.ZP.span(p || (p = u(["\n  width: 16px;\n  height: 16px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  transition: all 0.3s ease-out;\n  ", ";\n"], ["\n  width: 16px;\n  height: 16px;\n\n  svg {\n    width: 100%;\n    height: 100%;\n  }\n  transition: all 0.3s ease-out;\n  ", ";\n"])), (function(n) {
                return n.rotate && (0, s.iv)(d || (d = u(["transform: rotateX(180deg)"], ["transform: rotateX(180deg)"])))
            }));
            e.ZP = h
        },
        20377: function(n, e, t) {
            t.d(e, {
                il: function() {
                    return m
                },
                h4: function() {
                    return b
                },
                uT: function() {
                    return w
                },
                Dx: function() {
                    return v
                },
                xv: function() {
                    return y
                },
                zx: function() {
                    return Z
                },
                $_: function() {
                    return P
                }
            });
            var i, r, o, a, l, c, d, p, s = t(50445),
                u = t(30150),
                f = t(94564),
                g = t(95860),
                h = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                x = s.ZP.div(i || (i = h(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 24px;\n\n  h3 {\n    color: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.white90
                })),
                m = (0, s.iv)(r || (r = h(["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))),
                b = s.ZP.div(o || (o = h(["\n  display: flex;\n  position: relative;\n  img {\n    max-width: 170px;\n  }\n\n  img:nth-child(2), img:nth-child(3) {\n    position: absolute;\n    transform: scale(0.5)\n  }\n  img:nth-child(2) {\n    left: -40px;\n    top: -75px;\n  }\n  img:nth-child(3) {\n    top: 20px;\n    left: 41px;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  img {\n    max-width: 170px;\n  }\n\n  img:nth-child(2), img:nth-child(3) {\n    position: absolute;\n    transform: scale(0.5)\n  }\n  img:nth-child(2) {\n    left: -40px;\n    top: -75px;\n  }\n  img:nth-child(3) {\n    top: 20px;\n    left: 41px;\n  }\n"]))),
                w = s.ZP.div(a || (a = h(["\n  ", "\n  flex-direction: column;\n"], ["\n  ", "\n  flex-direction: column;\n"])), g.be),
                v = (0, s.ZP)(f.Bb)(l || (l = h(["\n  font-size: 20px;\n  line-height: 150%;\n"], ["\n  font-size: 20px;\n  line-height: 150%;\n"]))),
                y = (0, s.ZP)(f.TZ)(c || (c = h(["\n  margin-top: 8px;\n  color: ", ";\n  text-align: center;\n"], ["\n  margin-top: 8px;\n  color: ", ";\n  text-align: center;\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                Z = (0, s.ZP)(u.Yd)(d || (d = h(["\n  margin-top: 24px;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"], ["\n  margin-top: 24px;\n  padding: 9.5px 24px;\n  border-radius: 8px;\n"]))),
                P = s.ZP.div(p || (p = h(["\n  p, a {\n    color: ", ";\n    text-align: center;\n  }\n"], ["\n  p, a {\n    color: ", ";\n    text-align: center;\n  }\n"])), (function(n) {
                    return n.theme.colors.white70
                }));
            e.ZP = x
        },
        62468: function(n, e, t) {
            t.d(e, {
                il: function() {
                    return m
                },
                xg: function() {
                    return b
                },
                Dx: function() {
                    return w
                },
                qY: function() {
                    return v
                },
                eX: function() {
                    return y
                },
                zx: function() {
                    return Z
                }
            });
            var i, r, o, a, l, c, d, p = t(95860),
                s = t(94564),
                u = t(50445),
                f = t(30150),
                g = t(20377),
                h = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                x = u.ZP.div(i || (i = h(["\n  ", "\n  flex-direction: column;\n\n  h3 {\n    color: ", ";\n  }\n"], ["\n  ", "\n  flex-direction: column;\n\n  h3 {\n    color: ", ";\n  }\n"])), p.be, (function(n) {
                    return n.theme.colors.white
                })),
                m = (0, u.iv)(r || (r = h(["\n  width: 460px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"], ["\n  width: 460px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n"]))),
                b = u.ZP.div(o || (o = h(["\n  ", "\n  width: 144px;\n  height: 144px;\n  margin-bottom: 20px;\n\n  img {\n    width: 100%;\n  }\n"], ["\n  ", "\n  width: 144px;\n  height: 144px;\n  margin-bottom: 20px;\n\n  img {\n    width: 100%;\n  }\n"])), p.be),
                w = (0, u.ZP)(s.Bb)(a || (a = h(["\n  margin-bottom: 8px;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n  text-align: center;\n"], ["\n  margin-bottom: 8px;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n  text-align: center;\n"]))),
                v = (0, u.ZP)(g.xv)(l || (l = h(["\n  color: ", ";\n  margin-bottom: 16px;\n  width: -webkit-fill-available;\n  overflow: auto;\n  overflow-wrap: anywhere;\n"], ["\n  color: ", ";\n  margin-bottom: 16px;\n  width: -webkit-fill-available;\n  overflow: auto;\n  overflow-wrap: anywhere;\n"])), (function(n) {
                    return n.theme.colors.white80
                })),
                y = u.ZP.div(c || (c = h(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n"], ["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n"]))),
                Z = (0, u.ZP)(f.Yd)(d || (d = h(["\n  flex: 1 0 0;\n  font-weight: 600;\n"], ["\n  flex: 1 0 0;\n  font-weight: 600;\n"])));
            e.ZP = x
        },
        4532: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return rn
                }
            });
            var i, r, o, a, l, c, d, p = t(25617),
                s = t(11720),
                u = t(50912),
                f = t(94381),
                g = t(6413),
                h = t(12812),
                x = function() {
                    var n = (0, s.useState)(!1),
                        e = n[0],
                        t = n[1],
                        i = function() {
                            t(!0)
                        },
                        r = function() {
                            t(!1)
                        };
                    return (0, s.useEffect)((function() {
                        return document.addEventListener("mouseleave", i), document.addEventListener("mouseenter", r),
                            function() {
                                document.removeEventListener("mouseleave", i), document.removeEventListener("mouseenter", r)
                            }
                    }), []), [e]
                },
                m = t(85992),
                b = t(78294),
                w = t(89598),
                v = t(12422),
                y = t(77691),
                Z = t(50445),
                P = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                k = Z.ZP.div(i || (i = P(["\n  position: relative;\n"], ["\n  position: relative;\n"]))),
                A = t(88879),
                S = t(45024),
                E = t(51591),
                O = t(97997),
                I = function() {
                    var n = (0, p.v9)((function(n) {
                        return n.robuxRewards.robuxCreditsEarned
                    }));
                    return (0, O.BX)(E.ZP, {
                        onClick: function() {
                            (0, w.L9)(f.Jv)
                        },
                        children: [(0, O.tZ)("img", {
                            src: (0, S.j)(A.Z),
                            width: 24,
                            alt: ""
                        }), (0, O.tZ)(E.XF, {
                            children: n
                        })]
                    })
                },
                C = t(26793),
                R = t(59930),
                j = t(94564),
                B = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                z = (0, Z.F4)(r || (r = B(["\n  0% {\n    opacity: 0;\n    top: 0;\n  }\n  100% {\n    opacity: 1;\n    top: 120%\n  }\n"], ["\n  0% {\n    opacity: 0;\n    top: 0;\n  }\n  100% {\n    opacity: 1;\n    top: 120%\n  }\n"]))),
                T = Z.ZP.div(o || (o = B(["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  height:36px;\n  gap: 8px;\n  right: 48px;\n  top: 120%;\n  backdrop-filter: blur(12px);\n  padding: 8px 12px 8px 12px;\n  cursor: pointer;\n  animation: ", " 0.3s ease-out;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid ", ";\n    top: -6px;\n    right: 13px;\n  }\n  \n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  position: absolute;\n  background: ", ";\n  border-radius: 6px;\n  border: 1px solid ", ";\n  height:36px;\n  gap: 8px;\n  right: 48px;\n  top: 120%;\n  backdrop-filter: blur(12px);\n  padding: 8px 12px 8px 12px;\n  cursor: pointer;\n  animation: ", " 0.3s ease-out;\n\n  &:before {\n    content: '';\n    position: absolute;\n    width: 0; \n    height: 0; \n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 5px solid ", ";\n    top: -6px;\n    right: 13px;\n  }\n  \n  ", "\n"])), (function(n) {
                    return n.theme.colors.black70
                }), (function(n) {
                    return n.theme.colors.white20
                }), z, (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return !n.isQuestCompleteToast && "&:hover {\n    padding-right: 0px;\n    .close-option {\n      display: block;\n    }\n  }"
                })),
                D = (0, Z.ZP)(j.gd)(a || (a = B(["\n  color: ", ";\n  width: max-content;\n"], ["\n  color: ", ";\n  width: max-content;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                X = Z.ZP.div(l || (l = B(["\n    display: none;\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n    border-left: 1px solid rgba(255,255,255,0.2);\n    padding: 9px;\n"], ["\n    display: none;\n    i {\n        font-size: 16px;\n        color : ", ";\n        cursor: pointer;\n    }\n    border-left: 1px solid rgba(255,255,255,0.2);\n    padding: 9px;\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                L = function() {
                    var n = (0, C.$)().t,
                        e = (0, s.useState)(!0),
                        t = e[0],
                        i = e[1],
                        r = (0, p.I0)(),
                        o = (0, p.v9)((function(n) {
                            return n.gamification.showTaskCompleteToast
                        }));
                    (0, s.useEffect)((function() {
                        setTimeout((function() {
                            i(!1), r({
                                type: g.Z.SHOW_ROBUX_TOAST,
                                payload: {
                                    showRobuxToast: !1
                                }
                            }), r({
                                type: v.Z.UPDATE_TASK,
                                payload: {
                                    showTaskCompleteToast: !1
                                }
                            }), sessionStorage.setItem(f.Zc, "true")
                        }), 3e3)
                    }), []);
                    return t ? (0, O.BX)(T, {
                        isQuestCompleteToast: o,
                        children: [(0, O.tZ)("img", {
                            src: (0, S.j)(A.Z),
                            height: 24,
                            width: 22,
                            alt: ""
                        }), (0, O.tZ)(D, {
                            children: n(o ? "completedNewQuest" : "earnedRobux")
                        }), !o && (0, O.tZ)(X, {
                            className: "close-option",
                            onClick: function(n) {
                                return function(n) {
                                    n.stopPropagation(), n.preventDefault(), i(!1), r({
                                        type: g.Z.SHOW_ROBUX_TOAST,
                                        payload: {
                                            showRobuxToast: !1
                                        }
                                    }), r({
                                        type: v.Z.UPDATE_TASK,
                                        payload: {
                                            showTaskCompleteToast: !1
                                        }
                                    })
                                }(n)
                            },
                            children: (0, O.tZ)(R.Z, {
                                name: "cross-thin"
                            })
                        })]
                    }) : null
                },
                _ = t(13978),
                F = t(29871),
                U = t(98424),
                N = {
                    src: "/play/_next/static/media/robux-star-coin.749b5eac.svg",
                    height: 104,
                    width: 116
                },
                G = t(20377),
                M = function(n) {
                    var e = n.toggle,
                        t = n.onClose,
                        i = n.loginToClaim,
                        r = n.closeFlyout,
                        o = (0, p.v9)((function(n) {
                            return n.auth.isLoggedIn
                        }));
                    (0, s.useEffect)((function() {
                        (0, w.L9)(f.Ab)
                    }), []);
                    return (0, O.tZ)(F.Z, {
                        toggle: e,
                        onClose: t,
                        modalStyles: G.il,
                        onPopupClick: r,
                        children: (0, O.BX)(G.ZP, {
                            children: [(0, O.BX)(G.h4, {
                                children: [(0, O.tZ)("img", {
                                    src: (0, S.j)(N),
                                    alt: ""
                                }), (0, O.tZ)("img", {
                                    src: (0, S.j)(U.Z),
                                    alt: ""
                                }), (0, O.tZ)("img", {
                                    src: (0, S.j)(U.Z),
                                    alt: ""
                                })]
                            }), (0, O.BX)(G.uT, {
                                children: [(0, O.tZ)(G.Dx, {
                                    children: (0, _.t)("wonRobuxMessage")
                                }), (0, O.tZ)(G.xv, {
                                    children: (0, _.t)("wonRobuxAfterGameplay", {
                                        minutes: Math.floor(b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs / 60)
                                    })
                                }), !o && (0, O.tZ)(G.zx, {
                                    onClick: function() {
                                        i && i(f.$6.firstRobuxPopup), (0, w.L9)(f.tc)
                                    },
                                    children: (0, O.tZ)(j.QV, {
                                        children: (0, _.t)("loginToClaim")
                                    })
                                })]
                            }), (0, O.tZ)(G.$_, {
                                children: (0, O.BX)(j.gd, {
                                    children: [(0, _.t)("robuxTermsCondition"), "\xa0", (0, O.tZ)("a", {
                                        href: "https://now.gg/terms-and-privacy.html",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: (0, _.t)("termAndConditions")
                                    })]
                                })
                            })]
                        })
                    })
                },
                V = t(91469),
                Y = t(94036),
                H = t(60034),
                Q = t(16678),
                q = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                J = (0, Z.iv)(c || (c = q(["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n\n  h3 {\n    margin: 20px auto 16px;\n  }\n"], ["\n  width: 440px;\n\n  &> div {\n    padding: 32px;\n    margin: 0;\n  }\n\n  h3 {\n    margin: 20px auto 16px;\n  }\n"]))),
                W = Z.ZP.div(d || (d = q(["\n  margin-bottom: 32px;\n  img {\n    width: 190px;\n    height: 48px;\n  }\n"], ["\n  margin-bottom: 32px;\n  img {\n    width: 190px;\n    height: 48px;\n  }\n"]))),
                K = function(n) {
                    var e = n.toggle,
                        t = n.pageContext,
                        i = n.onClose,
                        r = n.closeFlyout;
                    return (0, s.useEffect)((function() {
                        (0, w.L9)(f.JP, {
                            loginPageContext: t
                        })
                    }), [t]), (0, O.tZ)(F.Z, {
                        modalStyles: J,
                        onClose: i,
                        toggle: e,
                        onPopupClick: r,
                        children: (0, O.BX)(H.ZP, {
                            children: [(0, O.tZ)(W, {
                                children: (0, O.tZ)(Q.Z, {
                                    style: {
                                        margin: "0px"
                                    },
                                    themeType: "light",
                                    hasTagline: !1
                                })
                            }), (0, O.tZ)(H.Dx, {
                                children: (0, _.t)("signInProg")
                            }), (0, O.tZ)(Y.Z, {
                                pageContext: t
                            }), (0, O.tZ)(V.Z, {})]
                        })
                    })
                },
                $ = {
                    src: "/play/_next/static/media/lose-reward.7289a6ea.svg",
                    height: 144,
                    width: 145
                },
                nn = t(62468),
                en = function(n) {
                    var e = n.toggle,
                        t = n.claimReward,
                        i = n.onClose,
                        r = n.loginToClaim,
                        o = n.onLoseReward,
                        a = n.closeFlyout,
                        l = (0, p.v9)((function(n) {
                            return n.robuxRewards.accumulatedTimeSecs
                        })),
                        c = b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs - l % b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs;
                    (0, s.useEffect)((function() {
                        t ? (0, w.L9)(f.tF) : (0, w.L9)(f.V5)
                    }), []);
                    return (0, O.tZ)(F.Z, {
                        toggle: e,
                        onClose: i,
                        modalStyles: nn.il,
                        onPopupClick: a,
                        children: (0, O.BX)(nn.ZP, {
                            children: [(0, O.tZ)(nn.xg, {
                                children: (0, O.tZ)("img", {
                                    src: (0, S.j)($),
                                    alt: ""
                                })
                            }), (0, O.tZ)(nn.Dx, {
                                children: (0, _.t)(t ? "claimReward" : "dontLoseReward")
                            }), (0, O.tZ)(nn.qY, {
                                children: (0, _.t)(t ? "robuxInAccount" : "quitNowMessage", {
                                    minutes: "".concat(Math.floor(c / 60))
                                })
                            }), (0, O.BX)(nn.eX, {
                                children: [(0, O.tZ)(nn.zx, {
                                    variant: "secondary",
                                    size: "large",
                                    onClick: o,
                                    children: (0, _.t)("loseReward")
                                }), t ? (0, O.tZ)(nn.zx, {
                                    variant: "primary",
                                    size: "large",
                                    onClick: function() {
                                        r && r(f.$6.exitRobuxPopup), (0, w.L9)(f.dx)
                                    },
                                    children: (0, _.t)("loginToClaim")
                                }) : (0, O.tZ)(nn.zx, {
                                    variant: "primary",
                                    size: "large",
                                    onClick: i,
                                    children: (0, _.t)("keepPlaying")
                                })]
                            })]
                        })
                    })
                },
                tn = t(58169),
                rn = function() {
                    var n = (0, p.v9)((function(n) {
                            return n.robuxRewards.showRobuxToast
                        })),
                        e = (0, p.v9)((function(n) {
                            return n.gamification.showTaskCompleteToast
                        })),
                        t = (0, p.v9)((function(n) {
                            return n.gamification.showNotifDot
                        })),
                        i = (0, p.v9)((function(n) {
                            return n.robuxRewards.robuxPopupOpen
                        })),
                        r = (0, s.useState)(!1),
                        o = r[0],
                        a = r[1],
                        l = (0, s.useState)(!1),
                        c = l[0],
                        d = l[1],
                        Z = (0, s.useState)(!1),
                        P = Z[0],
                        A = Z[1],
                        S = (0, s.useState)(""),
                        C = S[0],
                        R = S[1],
                        j = (0, p.v9)((function(n) {
                            return n.robuxRewards.robuxCreditsEarned
                        })),
                        B = (0, p.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        z = (0, p.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        T = (0, p.v9)((function(n) {
                            return n.robuxRewards.startRobuxTimer
                        })),
                        D = (0, p.v9)((function(n) {
                            return n.robuxRewards.accumulatedTimeSecs
                        })),
                        X = (0, p.v9)((function(n) {
                            return n.robuxRewards.extraTimeSecs
                        })),
                        _ = (0, p.v9)((function(n) {
                            return n.play.isGamePlayerOnFromAppPage
                        })),
                        F = ((0, s.useRef)(), (0, s.useRef)(0)),
                        U = (0, s.useRef)(!1),
                        N = x()[0],
                        G = (0, m.p)().creditReward,
                        V = (0, p.I0)(),
                        Y = function() {
                            U.current && (d(!1), sessionStorage.setItem(f.gj, "true"))
                        },
                        H = function() {
                            a(!1), A(!1), Y()
                        },
                        Q = function() {
                            (!b.ZP.isAppPage || b.ZP.isAppPage && _) && (0, y.c6)() && (0, y.wA)() && (0, tn.Z)()
                        },
                        q = function() {
                            (0, tn.a)()
                        };
                    (0, s.useEffect)((function() {
                        0 !== D && D % b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs === 0 && ((0, w.L9)(f.N5), G(X || b.ZP.appInfo.rwdMinPlayTimeIntervalInSecs), X && V({
                            type: g.Z.ROBUX_REWARD_DETAILS,
                            payload: {
                                extraTimeSecs: 0
                            }
                        }))
                    }), [D]), (0, s.useEffect)((function() {
                        T && (0, tn.Z)()
                    }), [T]);
                    var J = function() {
                            var n = u.Z.getState().robuxRewards;
                            (!u.Z.getState().auth.isLoggedIn && n.robuxCreditsEarned > 0 || 0 === n.robuxCreditsEarned) && (a(!1), d(!0))
                        },
                        W = function() {
                            (0, tn.a)(), J()
                        };
                    (0, s.useEffect)((function() {
                        return document.body.addEventListener("click", H), window.addEventListener("blur", q), window.addEventListener("focus", Q), window.addEventListener("confirmbeforeunload", W),
                            function() {
                                document.body.removeEventListener("click", H), window.removeEventListener("blur", q), window.removeEventListener("focus", Q), window.removeEventListener("confirmbeforeunload", W)
                            }
                    }), []), (0, s.useEffect)((function() {
                        B && N && J()
                    }), [N, B]), (0, s.useEffect)((function() {
                        void 0 !== F.current && 0 === F.current && 1 === j ? a(!0) : F.current = j
                    }), [j]), (0, s.useEffect)((function() {
                        U.current = c
                    }), [c]);
                    var $ = function(n) {
                            a(!1), d(!1), R(n), A(!0)
                        },
                        nn = function() {
                            V({
                                type: g.Z.ROBUX_REWARD_DETAILS,
                                payload: {
                                    robuxPopupOpen: !1
                                }
                            })
                        };
                    return (0, O.BX)(O.HY, {
                        children: [(0, O.BX)(k, {
                            onClick: function(n) {
                                return function(n) {
                                    n.stopPropagation();
                                    var e = localStorage.getItem(f.X7),
                                        t = e ? (Number(e) + 1).toString() : "1";
                                    (0, y.cv)(), localStorage.setItem(f.X7, t), V({
                                        type: g.Z.ROBUX_REWARD_DETAILS,
                                        payload: {
                                            robuxPopupViewCount: t,
                                            robuxPopupOpen: !i
                                        }
                                    }), V({
                                        type: v.Z.TOGGLE_VIEW,
                                        payload: {
                                            showProfileView: !1,
                                            showRobuxView: !0,
                                            showLeaderboardView: !1,
                                            showNotifDot: !1
                                        }
                                    })
                                }(n)
                            },
                            children: [(0, O.tZ)(I, {}), t && (0, O.tZ)(E.op, {})]
                        }), (n && !i || e) && (0, O.tZ)(L, {}), (0, O.tZ)(h.Z, {
                            toggle: o && (0, y.c6)(),
                            exitingDelay: .3,
                            children: (0, O.tZ)(M, {
                                toggle: o,
                                onClose: function() {
                                    return a(!1)
                                },
                                loginToClaim: $,
                                closeFlyout: nn
                            })
                        }), (0, O.tZ)(h.Z, {
                            toggle: c && !sessionStorage.getItem(f.gj) && (0, y.c6)(),
                            exitingDelay: .3,
                            children: (0, O.tZ)(en, {
                                toggle: c && !sessionStorage.getItem(f.gj),
                                onClose: Y,
                                loginToClaim: $,
                                onLoseReward: Y,
                                claimReward: 0 !== j && !z,
                                closeFlyout: nn
                            })
                        }), (0, O.tZ)(h.Z, {
                            toggle: P,
                            exitingDelay: .3,
                            children: (0, O.tZ)(K, {
                                pageContext: C,
                                toggle: P,
                                onClose: function() {
                                    A(!1)
                                },
                                closeFlyout: nn
                            })
                        })]
                    })
                }
        },
        58169: function(n, e, t) {
            t.d(e, {
                a: function() {
                    return a
                }
            });
            var i, r = t(6413),
                o = t(50912),
                a = function() {
                    clearInterval(i)
                };
            e.Z = function() {
                return clearInterval(i), i = setInterval((function() {
                    o.Z.dispatch({
                        type: r.Z.UPDATE_ACCUMULATED_TIME_SECS
                    })
                }), 1e3)
            }
        },
        78943: function(n, e, t) {
            t.d(e, {
                j7: function() {
                    return i
                }
            });
            var i = "https://now.us/?utm_source=now.gg&utm_campaign=navigation&utm_medium=main-site"
        },
        95509: function(n, e, t) {
            t.d(e, {
                J: function() {
                    return h
                },
                i: function() {
                    return x
                }
            });
            var i = t(45628),
                r = t(79305),
                o = t(78294),
                a = t(50912),
                l = t(40434),
                c = function() {
                    return (c = Object.assign || function(n) {
                        for (var e, t = 1, i = arguments.length; t < i; t++)
                            for (var r in e = arguments[t]) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                        return n
                    }).apply(this, arguments)
                },
                d = function(n, e, t, i) {
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
                p = function(n, e) {
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
                s = "fe-user-preferences",
                u = "fe-recent-played-apps",
                f = function() {
                    return JSON.parse(window.localStorage.getItem(s) || "[]").find((function(n) {
                        return n.appId === o.ZP.appInfo.appId
                    }))
                },
                g = function() {
                    return d(void 0, void 0, void 0, (function() {
                        var n;
                        return p(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, r.Z.getPlaytime({}, {})];
                                case 1:
                                    return (n = e.sent()).status === i.YR.Success && a.Z.dispatch({
                                        type: l.Z.UPDATE_PREFERENCES,
                                        payload: {
                                            totalPlaytime: n.totalPlaytime
                                        }
                                    }), [2]
                            }
                        }))
                    }))
                },
                h = function() {
                    return function(n) {
                        return d(void 0, void 0, void 0, (function() {
                            var e, t, h, x, m, b, w, v, y, Z, P;
                            return p(this, (function(k) {
                                switch (k.label) {
                                    case 0:
                                        return a.Z.getState().auth.isLoggedIn ? [4, d(void 0, void 0, void 0, (function() {
                                            var n, e;
                                            return p(this, (function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return n = f(), (0, o.DJ)() && !n ? [2] : (e = {
                                                            recentPlayedApp: o.ZP.appInfo.appId,
                                                            appId: o.ZP.appInfo.appId,
                                                            appPreferences: n ? n.appPreferences : {}
                                                        }, [4, r.Z.updateUserPreferences({}, e)]);
                                                    case 1:
                                                        return t.sent().status === i.YR.Success && (window.localStorage.removeItem(s), window.localStorage.removeItem(u)), [2]
                                                }
                                            }))
                                        }))] : [3, 5];
                                    case 1:
                                        return k.sent(), e = {
                                            recentPlayedApp: o.ZP.appInfo.appId
                                        }, [4, r.Z.updateUserPreferences({}, e)];
                                    case 2:
                                        return k.sent(), [4, r.Z.getUserPreferences({
                                            appId: o.ZP.appInfo.appId
                                        }, {})];
                                    case 3:
                                        return (t = k.sent()).status === i.YR.Success && (h = t.appPreferences, x = h.imapOverlay, m = h.imapScheme, b = h.volume, w = void 0 === b ? 0 : b, sessionStorage.setItem("userVolume", null === w || void 0 === w ? void 0 : w.toString()), n({
                                            type: l.Z.UPDATE_PREFERENCES,
                                            payload: c(c(c(c({}, void 0 !== x && {
                                                imapOverlay: x
                                            }), void 0 !== m && {
                                                imapScheme: m
                                            }), void 0 !== w && {
                                                volume: w
                                            }), {
                                                recentPlayedApps: t.recentPlayedApps,
                                                totalPlayedApps: t.totalPlayedApps
                                            })
                                        })), [4, g()];
                                    case 4:
                                        return k.sent(), (0, o.DJ)() && setInterval((function() {
                                            g()
                                        }), 6e4), [3, 6];
                                    case 5:
                                        v = f(), y = function() {
                                            a.Z.getState().play.isGamePlayerOnFromAppPage;
                                            var n = JSON.parse(window.localStorage.getItem(u) || "[]"),
                                                e = n.find((function(n) {
                                                    return n.appId === o.ZP.appInfo.appId
                                                }));
                                            return e ? n = n.filter((function(n) {
                                                return n.appId !== o.ZP.appInfo.appId
                                            })) : e = {
                                                appId: o.ZP.appInfo.appId,
                                                icon: o.ZP.appInfo.media.icon,
                                                name: o.ZP.appInfo.appName,
                                                playUrl: window.location.href,
                                                appPageUrl: o.ZP.appInfo.appPageUrl,
                                                packageName: o.ZP.appInfo.packageName
                                            }, e && "portal" !== (null === e || void 0 === e ? void 0 : e.appId) && n.unshift(e), window.localStorage.setItem(u, JSON.stringify(n)), n
                                        }(), sessionStorage.setItem("userVolume", (null === (P = null === (Z = null === v || void 0 === v ? void 0 : v.appPreferences) || void 0 === Z ? void 0 : Z.volume) || void 0 === P ? void 0 : P.toString()) || "0"), (v || y) && n({
                                            type: l.Z.UPDATE_PREFERENCES,
                                            payload: c(c({}, null === v || void 0 === v ? void 0 : v.appPreferences), {
                                                recentPlayedApps: y
                                            })
                                        }), k.label = 6;
                                    case 6:
                                        return [2]
                                }
                            }))
                        }))
                    }
                },
                x = function(n) {
                    var e = n.imapScheme,
                        t = n.imapOverlay,
                        u = n.volume;
                    return function(n) {
                        return d(void 0, void 0, void 0, (function() {
                            var d, f, g, h;
                            return p(this, (function(p) {
                                switch (p.label) {
                                    case 0:
                                        return d = a.Z.getState().auth.isLoggedIn, f = c(c(c({}, void 0 !== t && {
                                            imapOverlay: t
                                        }), void 0 !== e && {
                                            imapScheme: e
                                        }), void 0 !== u && u >= 0 && u <= 1 && {
                                            volume: u
                                        }), g = {
                                            appId: o.ZP.appInfo.appId,
                                            appPreferences: f
                                        }, (h = null === f || void 0 === f ? void 0 : f.volume) && sessionStorage.setItem("userVolume", (null === h || void 0 === h ? void 0 : h.toString()) || "0"), d ? [4, r.Z.updateUserPreferences({}, g)] : [3, 2];
                                    case 1:
                                        return p.sent().status === i.YR.Success && n({
                                            type: l.Z.UPDATE_PREFERENCES,
                                            payload: f
                                        }), [3, 3];
                                    case 2:
                                        ! function(n) {
                                            var e = n.appId,
                                                t = n.appPreferences,
                                                i = JSON.parse(window.localStorage.getItem(s) || "[]"),
                                                r = i.findIndex((function(n) {
                                                    return n.appId === e
                                                })); - 1 !== r ? i[r].appPreferences = c(c({}, i[r].appPreferences), t) : i.push({
                                                appId: e,
                                                appPreferences: t
                                            }), window.localStorage.setItem(s, JSON.stringify(i))
                                        }(g), n({
                                            type: l.Z.UPDATE_PREFERENCES,
                                            payload: f
                                        }), p.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }
                }
        },
        85992: function(n, e, t) {
            t.d(e, {
                p: function() {
                    return f
                }
            });
            var i = t(11720),
                r = t(79305),
                o = t(94381),
                a = t(25617),
                l = t(45628),
                c = t(78294),
                d = t(77691),
                p = t(6413),
                s = function(n, e, t, i) {
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
                u = function(n, e) {
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
                f = function() {
                    var n = (0, i.useState)(!1),
                        e = n[0],
                        t = n[1],
                        f = (0, a.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        g = (0, a.I0)();
                    return {
                        loading: e,
                        creditReward: function(n) {
                            return s(void 0, void 0, void 0, (function() {
                                var e, i, a;
                                return u(this, (function(s) {
                                    switch (s.label) {
                                        case 0:
                                            t(!0), s.label = 1;
                                        case 1:
                                            return s.trys.push([1, , 6, 7]), f ? (e = (0, d.Fz)(o.nP), i = (0, d.io)(o.K3), e && i ? [4, r.Z.creditReward({}, {
                                                uaId: e,
                                                uaSessionId: i,
                                                playTimeSecs: n,
                                                playSessionId: c.ZP.playSessionId
                                            })] : [3, 3]) : [3, 4];
                                        case 2:
                                            (a = s.sent()).status === l.YR.Success && (g({
                                                type: p.Z.ROBUX_REWARD_CREDIT,
                                                payload: {
                                                    robuxCreditsEarned: a.robuxCreditsEarned,
                                                    totalRobuxCreditsEarnedByAllUsers: a.totalRobuxCreditsEarnedByAllUsers
                                                }
                                            }), g({
                                                type: p.Z.SHOW_ROBUX_TOAST,
                                                payload: {
                                                    showRobuxToast: !0
                                                }
                                            })), s.label = 3;
                                        case 3:
                                            return [3, 5];
                                        case 4:
                                            g({
                                                type: p.Z.ROBUX_REWARD_CREDIT
                                            }), g({
                                                type: p.Z.SHOW_ROBUX_TOAST,
                                                payload: {
                                                    showRobuxToast: !0
                                                }
                                            }), s.label = 5;
                                        case 5:
                                            return [3, 7];
                                        case 6:
                                            return t(!1), [7];
                                        case 7:
                                            return [2]
                                    }
                                }))
                            }))
                        }
                    }
                }
        },
        94391: function(n, e) {
            e.Z = {
                src: "/play/_next/static/media/discord.9b1f269d.svg",
                height: 25,
                width: 25
            }
        },
        50063: function(n, e) {
            e.Z = {
                src: "/play/_next/static/media/alert.bfbcd90b.svg",
                height: 24,
                width: 24
            }
        },
        88879: function(n, e) {
            e.Z = {
                src: "/play/_next/static/media/robux-coin.b55c8ccb.svg",
                height: 16,
                width: 16
            }
        },
        98424: function(n, e) {
            e.Z = {
                src: "/play/_next/static/media/sparkling-stars.a3790ffe.gif",
                height: 1004,
                width: 1e3
            }
        }
    }
]);
//# sourceMappingURL=359-b333ee4224d0e9ab.js.map