"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [235], {
        22033: function(n, t, e) {
            e.d(t, {
                Z: function() {
                    return j
                }
            });
            var i, o, r, l = e(11720),
                a = e(73101),
                d = e(94564),
                c = e(26793),
                s = e(78064),
                u = e(59930),
                p = {
                    src: "/play/_next/static/media/edit.a61656bd.svg",
                    height: 16,
                    width: 16
                },
                f = e(45024),
                h = e(6268),
                C = e(50445),
                g = function(n, t) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: t
                    }) : n.raw = t, n
                },
                v = (C.ZP.div(i || (i = g(["\n  text-align: center;\n  z-index: 4;\n  background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 3px 6px;\n  cursor: pointer;\n  color:", ";\n"], ["\n  text-align: center;\n  z-index: 4;\n  background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 3px 6px;\n  cursor: pointer;\n  color:", ";\n"])), (function(n) {
                    return n.theme.border.radius
                }), (function(n) {
                    return n.theme.colors.white
                })), C.ZP.div(o || (o = g(["\n  display:flex;\n  justify-content:center;\n  align-items:center;\n"], ["\n  display:flex;\n  justify-content:center;\n  align-items:center;\n"])))),
                x = (C.ZP.li(r || (r = g(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  align-items: flex-start;"], ["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 30px;\n  display: flex;\n  align-items: center;\n  position: relative;\n  align-items: flex-start;"]))), e(25617)),
                w = e(78294),
                b = e(79305),
                y = e(42109),
                m = e(66971),
                Z = e(88557),
                I = e(30550),
                k = e(34483),
                P = e(94381),
                B = e(77691),
                V = e(89598),
                F = e(58309),
                M = e(59532),
                H = e(60925),
                _ = e(3327),
                S = e(81262),
                E = e(97997),
                z = function(n, t, e, i) {
                    return new(e || (e = Promise))((function(o, r) {
                        function l(n) {
                            try {
                                d(i.next(n))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function a(n) {
                            try {
                                d(i.throw(n))
                            } catch (t) {
                                r(t)
                            }
                        }

                        function d(n) {
                            var t;
                            n.done ? o(n.value) : (t = n.value, t instanceof e ? t : new e((function(n) {
                                n(t)
                            }))).then(l, a)
                        }
                        d((i = i.apply(n, t || [])).next())
                    }))
                },
                L = function(n, t) {
                    var e, i, o, r, l = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: a(0),
                        throw: a(1),
                        return: a(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function a(r) {
                        return function(a) {
                            return function(r) {
                                if (e) throw new TypeError("Generator is already executing.");
                                for (; l;) try {
                                    if (e = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                                    switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            o = r;
                                            break;
                                        case 4:
                                            return l.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            l.label++, i = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = l.ops.pop(), l.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = l.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                l = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                                l.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && l.label < o[1]) {
                                                l.label = o[1], o = r;
                                                break
                                            }
                                            if (o && l.label < o[2]) {
                                                l.label = o[2], l.ops.push(r);
                                                break
                                            }
                                            o[2] && l.ops.pop(), l.trys.pop();
                                            continue
                                    }
                                    r = t.call(n, l)
                                } catch (a) {
                                    r = [6, a], i = 0
                                } finally {
                                    e = o = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, a])
                        }
                    }
                },
                j = function(n) {
                    var t = n.isVideoPage,
                        e = void 0 !== t && t,
                        i = n.videoIdFromQuery,
                        o = (0, x.v9)((function(n) {
                            return n.play.videoId
                        })),
                        r = (0, x.v9)((function(n) {
                            return n.auth.isLoggedIn
                        })),
                        C = e ? i : o,
                        g = (0, c.$)().t,
                        j = (0, l.useState)(!0),
                        O = j[0],
                        U = j[1],
                        D = (0, l.useState)(),
                        N = D[0],
                        X = D[1],
                        T = (0, l.useState)(!1),
                        A = T[0],
                        R = T[1],
                        q = (0, l.useState)(!1),
                        Y = q[0],
                        G = q[1],
                        W = (0, l.useState)(""),
                        $ = W[0],
                        K = W[1],
                        Q = (0, x.I0)(),
                        J = (0, l.useState)(!1),
                        nn = J[0],
                        tn = J[1],
                        en = (0, l.useRef)(null),
                        on = sessionStorage.getItem("refresh_token"),
                        rn = sessionStorage.getItem("allow_edit") === w.rs,
                        ln = "https://".concat(window.location.hostname, "/video/edit?videoId=").concat(null === N || void 0 === N ? void 0 : N.videoId);
                    (0, l.useEffect)((function() {
                        C && z(void 0, void 0, void 0, (function() {
                            return L(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, b.Z.getVideoInfo({
                                            videoId: C
                                        }, {}).then((function(n) {
                                            var t, e;
                                            n.status === S.YR.Success && (X(n.video), K(null === (t = n.video) || void 0 === t ? void 0 : t.title), localStorage.getItem(P.B1) && (0, _.Yb)((null === (e = n.video) || void 0 === e ? void 0 : e.channelHandle) || "") && tn(!0))
                                        }))];
                                    case 1:
                                        return n.sent(), [2]
                                }
                            }))
                        })).catch((function() {}))
                    }), [C]), (0, l.useEffect)((function() {
                        (0, F.ZP)()
                    }), []);
                    var an = function() {
                            G(!0)
                        },
                        dn = function() {
                            return z(void 0, void 0, void 0, (function() {
                                return L(this, (function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return K($), Q({
                                                type: m.Z.UPDATE_TEXTFIELD_FOCUS,
                                                payload: {
                                                    uiTextfieldInFocus: !1
                                                }
                                            }), [4, z(void 0, void 0, void 0, (function() {
                                                return L(this, (function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return [4, b.Z.updateVideo({}, {
                                                                videoId: null === N || void 0 === N ? void 0 : N.videoId,
                                                                title: $
                                                            }).then((function(n) {
                                                                n.status === S.YR.Success && G(!1)
                                                            }))];
                                                        case 1:
                                                            return n.sent(), [2]
                                                    }
                                                }))
                                            }))];
                                        case 1:
                                            return n.sent(), [2]
                                    }
                                }))
                            }))
                        },
                        cn = function() {
                            Q({
                                type: m.Z.UPDATE_TEXTFIELD_FOCUS,
                                payload: {
                                    uiTextfieldInFocus: !0
                                }
                            })
                        };
                    return O ? (0, E.BX)(H.E$, {
                        ref: en,
                        isVideoPage: e,
                        children: [(0, E.BX)(H.dl, {
                            children: [(0, E.BX)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "7px"
                                },
                                children: [Y && nn && e ? (0, E.tZ)(y.EH, {
                                    id: "search-box",
                                    type: "text",
                                    value: $,
                                    onChange: function(n) {
                                        return K(n.target.value)
                                    },
                                    autoComplete: "off",
                                    onBlur: dn,
                                    onFocus: cn
                                }) : (0, E.tZ)(d.js, {
                                    style: {
                                        color: "#FFF"
                                    },
                                    children: e ? $ : g("videoReadyForSharing")
                                }), !Y && nn && e && (0, E.tZ)("img", {
                                    className: "edit-icon",
                                    src: (0, f.j)(p),
                                    alt: "Edit",
                                    onClick: an
                                })]
                            }), (0, E.BX)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "20px"
                                },
                                children: [(null === N || void 0 === N ? void 0 : N.downloadUrl) && nn && e && (0, E.tZ)("a", {
                                    href: N.downloadUrl.concat("?filename=".concat(function(n) {
                                        var t = n;
                                        return t.indexOf("#") > 0 && (t = t.slice(0, t.indexOf("#")).trim()), t = (t = t.replaceAll(" ", "_")).replace(/[^a-zA-Z0-9_-]+/g, "")
                                    }($))),
                                    download: !0,
                                    children: (0, E.tZ)("img", {
                                        src: (0, f.j)(k.Z),
                                        alt: "download",
                                        style: {
                                            cursor: "pointer"
                                        }
                                    })
                                }), (0, E.tZ)(s.A3, {
                                    onClick: function() {
                                        if (e) window.open((0, Z.ZP)("".concat(window.location.origin, "/videos/").concat(null === N || void 0 === N ? void 0 : N.channelHandle)), "_self");
                                        else {
                                            U(!1);
                                            var n = window.localStorage.getItem("my-videos-onboarding-toast"),
                                                t = !1;
                                            n ? n && Number(n) < 3 && (window.localStorage.setItem("my-videos-onboarding-toast", (Number(n) + 1).toString()), t = !0) : (window.localStorage.setItem("my-videos-onboarding-toast", "1"), t = !0), Q({
                                                type: m.Z.UPDATE_IS_RECORDING,
                                                payload: {
                                                    recordingData: []
                                                }
                                            }), Q({
                                                type: m.Z.MY_VIDEOS_ONBOARDING,
                                                payload: {
                                                    showMyVideosOnboarding: t
                                                }
                                            }), (0, _.GK)()
                                        }
                                    },
                                    children: (0, E.tZ)(u.Z, {
                                        name: "cross-thin",
                                        size: 14
                                    })
                                })]
                            })]
                        }), (null === N || void 0 === N ? void 0 : N.cflVideoId) && (0, E.tZ)(a.F, {
                            controls: !0,
                            preload: !0,
                            onLoadedData: function() {
                                var n;
                                if (e && !(0, B.tq)()) {
                                    var t = null === (n = en.current) || void 0 === n ? void 0 : n.getBoundingClientRect(),
                                        i = null === t || void 0 === t ? void 0 : t.width,
                                        o = null === t || void 0 === t ? void 0 : t.height,
                                        r = 1;
                                    i && o && (r = i / o), en.current && (en.current.style.width = "".concat((window.innerHeight - 150) * r, "px"))
                                }
                            },
                            src: null === N || void 0 === N ? void 0 : N.cflVideoId
                        }), (0, E.BX)(H.Xz, {
                            children: [e ? (0, E.BX)(M.d3, {
                                style: (null === N || void 0 === N ? void 0 : N.appPlayUrl) ? {
                                    cursor: "pointer"
                                } : {
                                    pointerEvents: "none"
                                },
                                href: (null === N || void 0 === N ? void 0 : N.appPlayUrl) ? (0, Z.ZP)(null === N || void 0 === N ? void 0 : N.appPlayUrl, "VideoPortal") : "",
                                target: "_blank",
                                children: [(null === N || void 0 === N ? void 0 : N.appIcon) && (0, E.tZ)("img", {
                                    src: null === N || void 0 === N ? void 0 : N.appIcon,
                                    alt: "gameName",
                                    style: {
                                        height: "16px",
                                        width: "16px"
                                    }
                                }), (null === N || void 0 === N ? void 0 : N.appName) && (0, E.tZ)(d.lU, {
                                    className: "app-name",
                                    style: {
                                        color: "rgba(255, 255, 255, 0.70)"
                                    },
                                    children: null === N || void 0 === N ? void 0 : N.appName
                                }), (null === N || void 0 === N ? void 0 : N.appPlayUrl) && (0, E.tZ)("span", {
                                    className: "caret"
                                })]
                            }) : (0, E.BX)(v, {
                                style: {
                                    gap: "4px"
                                },
                                children: [Y ? (0, E.tZ)(y.EH, {
                                    id: "search-box",
                                    type: "text",
                                    value: $,
                                    onChange: function(n) {
                                        return K(n.target.value)
                                    },
                                    autoComplete: "off",
                                    onBlur: dn,
                                    onFocus: cn
                                }) : (0, E.tZ)(H.OL, {
                                    children: $
                                }), !Y && (0, E.tZ)("img", {
                                    className: "edit-icon",
                                    src: (0, f.j)(p),
                                    alt: "Edit",
                                    onClick: an
                                })]
                            }), (0, E.BX)(v, {
                                children: [(0, E.tZ)(d.lU, {
                                    style: {
                                        color: "#FFF",
                                        marginRight: "12px"
                                    },
                                    children: g("shareWithFriends")
                                }), A && (0, E.tZ)(H.YV, {
                                    children: g("linkCopied")
                                }), (0, E.tZ)(h.z, {
                                    variant: "primary",
                                    text: g("copyLink"),
                                    onClick: function() {
                                        return z(void 0, void 0, void 0, (function() {
                                            var n, t;
                                            return L(this, (function(e) {
                                                return n = (0, F.et)(), (0, V.L9)(P.mb, {
                                                    channelId: null === N || void 0 === N ? void 0 : N.channelId,
                                                    isChannelOwner: (0, _.Yb)((null === N || void 0 === N ? void 0 : N.channelHandle) || ""),
                                                    authUserId: n ? n.userId : ""
                                                }), t = "".concat(window.location.origin, "/videos/watch/").concat(C, "?ng_ntmSource=VideoLinkCopyBtn"), (0, I.FF)(t), R(!0), setTimeout((function() {
                                                    R(!1)
                                                }), 2e3), [2]
                                            }))
                                        }))
                                    },
                                    style: {
                                        gap: "8px"
                                    },
                                    icon: {
                                        name: "copy",
                                        size: 16,
                                        style: {
                                            fontWeight: "700"
                                        }
                                    }
                                })]
                            }), (r || rn) && e && (0, E.tZ)(h.z, {
                                variant: "tertiaryOutline",
                                text: g("editVideo"),
                                onClick: function() {
                                    var n = "";
                                    (ln || r) && (n += "&allow_edit=true"), on && (n += "&refresh_token=".concat(on)), window.location.href = ln + n
                                }
                            })]
                        })]
                    }) : (0, E.tZ)(E.HY, {})
                }
        },
        42109: function(n, t, e) {
            e.d(t, {
                O2: function() {
                    return h
                },
                EH: function() {
                    return C
                },
                jB: function() {
                    return g
                },
                Ue: function() {
                    return v
                },
                pI: function() {
                    return x
                },
                aV: function() {
                    return w
                },
                V4: function() {
                    return b
                },
                fX: function() {
                    return y
                }
            });
            var i, o, r, l, a, d, c, s, u = e(26544),
                p = e(50445),
                f = function(n, t) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: t
                    }) : n.raw = t, n
                },
                h = (0, p.F4)(i || (i = f(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))),
                C = p.ZP.input(o || (o = f(["\n  height: 28px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n  border-radius: 6px;\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  border: 0px;\n\n  input[type=text] {\n    color: ", ";\n    box-sizing: border-box;\n  }\n"], ["\n  height: 28px;\n  width: 100%;\n  background: ", ";\n  color: ", ";\n  border-radius: 6px;\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  border: 0px;\n\n  input[type=text] {\n    color: ", ";\n    box-sizing: border-box;\n  }\n"])), u.qm.colors.black20, u.qm.colors.white, u.qm.colors.white),
                g = p.ZP.div(r || (r = f(["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding: 12px 16px;\n\tposition: absolute;\n\twidth: 410px;\n\ttransform: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tbackdrop-filter: blur(60px);\n\tborder-radius: 12px;\n\ttext-align: left;\n\n\t.recordingTooltip {\n\t\tcolor: ", ";\n\t\tmargin: 0;\n\t}\n\t.rec-description {\n       color: ", ";\n\t   margin: 12px 0px;\n\t}\n"], ["\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n\tpadding: 12px 16px;\n\tposition: absolute;\n\twidth: 410px;\n\ttransform: ", ";\n\tright: ", ";\n\ttop: ", ";\n\tbackground: ", ";\n\tborder: 1px solid ", ";\n\tbackdrop-filter: blur(60px);\n\tborder-radius: 12px;\n\ttext-align: left;\n\n\t.recordingTooltip {\n\t\tcolor: ", ";\n\t\tmargin: 0;\n\t}\n\t.rec-description {\n       color: ", ";\n\t   margin: 12px 0px;\n\t}\n"])), (function(n) {
                    return n.showCentered ? "translate(50%, -50%)" : ""
                }), (function(n) {
                    return n.showCentered ? "50vw" : ""
                }), (function(n) {
                    return n.showCentered ? "50vh" : ""
                }), u.qm.colors.white20, (function(n) {
                    return n.theme.colors.white20
                }), u.qm.colors.white, u.qm.colors.white80),
                v = p.ZP.div(l || (l = f(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                x = p.ZP.div(a || (a = f(["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: space-between;\n"]))),
                w = p.ZP.div(d || (d = f(["\n  display: flex;\n  position: fixed;\n  z-index: 101;\n  transform: inherit;\n  background: ", ";\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n"], ["\n  display: flex;\n  position: fixed;\n  z-index: 101;\n  transform: inherit;\n  background: ", ";\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n"])), u.qm.colors.overlay),
                b = p.ZP.div(c || (c = f(["\n\tbackground: rgba(0, 0, 0, 0.3);\n\tborder-radius: 6px;\n  position:relative;\n\talign-items: center;\n\tpadding: 8px 8px 8px 16px;\n\tdisplay: flex;\n  flex-direction: column;\n\n\twidth:50%;\n\t.spinner {\n\t\tanimation: ", " 1s linear infinite;\n\t}\n\t.cancel-icon {\n\t\tcursor: pointer;\n\t}\n"], ["\n\tbackground: rgba(0, 0, 0, 0.3);\n\tborder-radius: 6px;\n  position:relative;\n\talign-items: center;\n\tpadding: 8px 8px 8px 16px;\n\tdisplay: flex;\n  flex-direction: column;\n\n\twidth:50%;\n\t.spinner {\n\t\tanimation: ", " 1s linear infinite;\n\t}\n\t.cancel-icon {\n\t\tcursor: pointer;\n\t}\n"])), h),
                y = p.ZP.div(s || (s = f(["\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-evenly;\n  gap: 10px;\n  align-items: center;\n"])))
        },
        35102: function(n, t, e) {
            e.d(t, {
                G: function() {
                    return o
                }
            });
            var i = e(97997),
                o = function() {
                    return (0, i.BX)("svg", {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.tZ)("path", {
                            d: "M15.841 19.7725C6.95694 20.5693 0 28.0911 0 37.2455C0 46.9442 7.78561 54.7963 17.402 54.7963H31.9518C31.9711 54.7963 31.9711 54.7963 31.9904 54.7963C22.3933 54.7769 14.6269 46.9247 14.6269 37.2455V26.2058C14.6269 23.9318 15.0509 21.7549 15.841 19.7725Z",
                            fill: "#FF42A5"
                        }), (0, i.tZ)("path", {
                            d: "M48.1591 19.7725C48.9492 21.7744 49.3732 23.9512 49.3732 26.2253V37.265C49.3732 46.9442 41.6069 54.7963 32.0098 54.8158C32.029 54.8158 32.029 54.8158 32.0483 54.8158H46.5981C56.2145 54.8158 64.0001 46.9636 64.0001 37.265C64.0001 28.0911 57.0432 20.5693 48.1591 19.7725Z",
                            fill: "#B3D661"
                        }), (0, i.tZ)("path", {
                            d: "M31.9516 54.7966C31.9323 54.7966 31.9323 54.7966 31.913 54.7966C31.9323 54.7966 31.9516 54.7966 31.9516 54.7966C31.9708 54.7966 31.9708 54.7966 31.9901 54.7966C31.9901 54.7966 31.9708 54.7966 31.9516 54.7966ZM31.9516 8.65527C24.5899 8.65527 18.3075 13.2616 15.7637 19.7727C16.284 19.7339 16.8043 19.695 17.3246 19.695H31.8745C31.8937 19.695 31.9323 19.695 31.9516 19.695C31.9708 19.695 32.0094 19.695 32.0286 19.695H46.5785C47.0988 19.695 47.6384 19.7144 48.1395 19.7727C45.6149 13.2616 39.3132 8.65527 31.9516 8.65527Z",
                            fill: "#51A5C9"
                        }), (0, i.tZ)("path", {
                            d: "M31.894 19.6953H17.3249C16.8045 19.6953 16.265 19.7147 15.7639 19.7731C14.9738 21.775 14.5498 23.9518 14.5498 26.2258V37.2656C14.5498 46.9447 22.3161 54.7969 31.9133 54.8164C31.9325 54.8164 31.9325 54.8164 31.9518 54.8164C22.374 54.7775 14.6269 46.9253 14.6269 37.2656C14.6269 27.5864 22.374 19.7536 31.9518 19.7147C31.9325 19.6953 31.9133 19.6953 31.894 19.6953Z",
                            fill: "#4C4789"
                        }), (0, i.tZ)("path", {
                            d: "M46.5976 19.6953H32.0478C32.0285 19.6953 31.99 19.6953 31.9707 19.6953C41.5485 19.7342 49.2956 27.5864 49.2956 37.2461C49.2956 46.9253 41.5485 54.7581 31.9707 54.7969C31.99 54.7969 31.99 54.7969 32.0092 54.7969C41.6064 54.7775 49.3727 46.9253 49.3727 37.2461V26.2064C49.3727 23.9324 48.9487 21.7555 48.1586 19.7536C47.6383 19.7147 47.1179 19.6953 46.5976 19.6953Z",
                            fill: "#398B4D"
                        }), (0, i.tZ)("path", {
                            d: "M31.9519 19.6953C22.374 19.7342 14.627 27.5864 14.627 37.2461C14.627 46.9253 22.374 54.7581 31.9519 54.7969C41.5297 54.7581 49.2768 46.9059 49.2768 37.2461C49.296 27.5864 41.5297 19.7342 31.9519 19.6953Z",
                            fill: "#0B0223"
                        }), (0, i.tZ)("path", {
                            d: "M31.9899 54.7969C41.6007 54.7969 49.3919 46.9392 49.3919 37.2461C49.3919 27.5531 41.6007 19.6953 31.9899 19.6953C22.379 19.6953 14.5879 27.5531 14.5879 37.2461C14.5879 46.9392 22.379 54.7969 31.9899 54.7969Z",
                            fill: "#0B0223"
                        }), (0, i.tZ)("path", {
                            d: "M28.0893 34.489C28.0893 36.0583 26.8142 37.3334 25.2448 37.3334C23.6755 37.3334 22.4004 36.0583 22.4004 34.489C22.4004 32.9196 23.6755 31.6445 25.2448 31.6445C26.8142 31.6445 28.0893 32.9196 28.0893 34.489Z",
                            fill: "white"
                        }), (0, i.tZ)("path", {
                            d: "M41.9555 34.489C41.9555 36.0583 40.6804 37.3334 39.111 37.3334C37.5417 37.3334 36.2666 36.0583 36.2666 34.489C36.2666 32.9196 37.5417 31.6445 39.111 31.6445C40.6804 31.6445 41.9555 32.9196 41.9555 34.489Z",
                            fill: "white"
                        }), (0, i.tZ)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M28.3981 45.3583C28.2265 45.917 27.6365 46.2342 27.075 46.0676C26.5102 45.9 26.1883 45.3063 26.3559 44.7415L27.3785 45.045C26.3559 44.7415 26.3561 44.7409 26.3563 44.7403L26.3567 44.7389L26.3575 44.7361L26.3595 44.7295L26.3647 44.7129C26.3687 44.7003 26.3738 44.6848 26.3801 44.6664C26.3926 44.6297 26.4097 44.5817 26.4323 44.5241C26.4772 44.409 26.5438 44.2543 26.6372 44.0732C26.8234 43.7124 27.1206 43.2379 27.5727 42.7639C28.4993 41.7927 30.0178 40.8887 32.3562 40.8887C34.6947 40.8887 36.2132 41.7927 37.1398 42.7639C37.5919 43.2379 37.8891 43.7124 38.0753 44.0732C38.1687 44.2543 38.2353 44.409 38.2802 44.5241C38.3028 44.5817 38.3199 44.6297 38.3324 44.6664C38.3387 44.6848 38.3438 44.7003 38.3478 44.7129L38.353 44.7295L38.355 44.7361L38.3558 44.7389L38.3562 44.7403C38.3564 44.7409 38.3566 44.7415 37.3536 45.0392L38.3566 44.7415C38.5242 45.3063 38.2023 45.9 37.6375 46.0676C37.076 46.2342 36.486 45.917 36.3144 45.3583C36.3141 45.3574 36.3137 45.356 36.313 45.3542C36.3101 45.3456 36.3036 45.3272 36.2932 45.3004C36.2721 45.2465 36.2353 45.1598 36.1793 45.0512C36.0666 44.8328 35.8808 44.5349 35.5961 44.2364C35.049 43.6628 34.0786 43.022 32.3562 43.022C30.6339 43.022 29.6635 43.6628 29.1164 44.2364C28.8316 44.5349 28.6459 44.8328 28.5332 45.0512C28.4772 45.1598 28.4404 45.2465 28.4193 45.3004C28.4089 45.3272 28.4024 45.3456 28.3995 45.3542C28.3988 45.356 28.3984 45.3574 28.3981 45.3583Z",
                            fill: "white"
                        })]
                    })
                };
            t.Z = function() {
                return (0, i.BX)("svg", {
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.tZ)("path", {
                        d: "M15.8399 19.7726C6.95647 20.5695 0 28.0912 0 37.2457C0 46.9443 7.78508 54.7965 17.4008 54.7965H31.9496C31.9689 54.7965 31.9689 54.7965 31.9882 54.7965C22.3917 54.777 14.6259 46.9248 14.6259 37.2457V26.2059C14.6259 23.9319 15.0499 21.7551 15.8399 19.7726Z",
                        fill: "#FF42A5"
                    }), (0, i.tZ)("path", {
                        d: "M48.1557 19.7726C48.9458 21.7745 49.3697 23.9513 49.3697 26.2254V37.2651C49.3697 46.9443 41.6039 54.7965 32.0074 54.8159C32.0267 54.8159 32.0267 54.8159 32.046 54.8159H46.5948C56.2106 54.8159 63.9956 46.9637 63.9956 37.2651C63.9956 28.0912 57.0392 20.5695 48.1557 19.7726Z",
                        fill: "#B3D661"
                    }), (0, i.tZ)("path", {
                        d: "M31.9496 54.7965C31.9303 54.7965 31.9303 54.7965 31.9111 54.7965C31.9303 54.7965 31.9496 54.7965 31.9496 54.7965C31.9689 54.7965 31.9689 54.7965 31.9881 54.7965C31.9881 54.7965 31.9689 54.7965 31.9496 54.7965ZM31.9496 8.65515C24.5885 8.65515 18.3065 13.2615 15.7628 19.7726C16.2831 19.7337 16.8034 19.6949 17.3237 19.6949H31.8725C31.8918 19.6949 31.9303 19.6949 31.9496 19.6949C31.9689 19.6949 32.0074 19.6949 32.0267 19.6949H46.5755C47.0958 19.6949 47.6354 19.7143 48.1364 19.7726C45.612 13.2615 39.3107 8.65515 31.9496 8.65515Z",
                        fill: "#51A5C9"
                    }), (0, i.tZ)("path", {
                        d: "M31.8918 19.6949H17.3237C16.8034 19.6949 16.2639 19.7143 15.7628 19.7726C14.9728 21.7746 14.5488 23.9514 14.5488 26.2254V37.2651C14.5488 46.9443 22.3146 54.7965 31.9111 54.816C31.9304 54.816 31.9304 54.816 31.9496 54.816C22.3724 54.7771 14.6259 46.9249 14.6259 37.2651C14.6259 27.5859 22.3724 19.7532 31.9496 19.7143C31.9304 19.6949 31.9111 19.6949 31.8918 19.6949Z",
                        fill: "#4C4789"
                    }), (0, i.tZ)("path", {
                        d: "M46.5948 19.6949H32.046C32.0267 19.6949 31.9881 19.6949 31.9689 19.6949C41.5461 19.7338 49.2926 27.5859 49.2926 37.2457C49.2926 46.9249 41.5461 54.7576 31.9689 54.7965C31.9881 54.7965 31.9881 54.7965 32.0074 54.7965C41.6039 54.7771 49.3697 46.9249 49.3697 37.2457V26.206C49.3697 23.932 48.9457 21.7551 48.1557 19.7532C47.6354 19.7143 47.1151 19.6949 46.5948 19.6949Z",
                        fill: "#398B4D"
                    }), (0, i.tZ)("path", {
                        d: "M31.9496 19.6949C22.3725 19.7338 14.6259 27.5859 14.6259 37.2457C14.6259 46.9249 22.3725 54.7576 31.9496 54.7965C41.5268 54.7576 49.2734 46.9055 49.2734 37.2457C49.2926 27.5859 41.5268 19.7338 31.9496 19.6949Z",
                        fill: "#0B0223"
                    }), (0, i.tZ)("path", {
                        d: "M31.9882 54.7965C41.5984 54.7965 49.389 46.9387 49.389 37.2457C49.389 27.5527 41.5984 19.6949 31.9882 19.6949C22.378 19.6949 14.5874 27.5527 14.5874 37.2457C14.5874 46.9387 22.378 54.7965 31.9882 54.7965Z",
                        fill: "#0B0223"
                    }), (0, i.tZ)("path", {
                        d: "M27.691 36.1962C27.691 37.7511 26.4384 39.0144 24.8968 39.0144C23.3552 39.0144 22.1027 37.7511 22.1027 36.1962C22.1027 34.6413 23.3552 33.3779 24.8968 33.3779C26.4384 33.3779 27.691 34.6413 27.691 36.1962Z",
                        fill: "white"
                    }), (0, i.tZ)("path", {
                        d: "M41.6231 37.751H37.3837C36.6322 37.751 36.0156 37.1291 36.0156 36.3711V36.0407C36.0156 35.2827 36.6322 34.6607 37.3837 34.6607H41.6231C42.3747 34.6607 42.9913 35.2827 42.9913 36.0407V36.3711C42.9913 37.1291 42.3747 37.751 41.6231 37.751Z",
                        fill: "white"
                    }), (0, i.tZ)("path", {
                        d: "M27.7295 36.235C27.7295 37.7899 26.477 39.0532 24.9354 39.0532C23.3938 39.0532 22.1412 37.7899 22.1412 36.235C22.1412 34.6801 23.3938 33.4167 24.9354 33.4167C26.477 33.4167 27.7295 34.6801 27.7295 36.235Z",
                        fill: "white"
                    }), (0, i.tZ)("path", {
                        d: "M41.6425 37.7899H37.4031C36.6516 37.7899 36.0349 37.1679 36.0349 36.4099V36.0795C36.0349 35.3215 36.6516 34.6995 37.4031 34.6995H41.6425C42.394 34.6995 43.0106 35.3215 43.0106 36.0795V36.4099C43.0106 37.1679 42.4133 37.7899 41.6425 37.7899Z",
                        fill: "white"
                    })]
                })
            }
        },
        15576: function(n, t) {
            t.Z = {
                src: "/play/_next/static/media/button-loader.4167e949.svg",
                height: 24,
                width: 24
            }
        },
        34483: function(n, t) {
            t.Z = {
                src: "/play/_next/static/media/download.d629056e.svg",
                height: 16,
                width: 17
            }
        }
    }
]);
//# sourceMappingURL=235-40c4ef3713948674.js.map