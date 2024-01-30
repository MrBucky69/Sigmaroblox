(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        46473: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                __N_SSP: function() {
                    return B
                },
                Play: function() {
                    return q
                }
            });
            var o = t(3021),
                a = t(43626),
                r = t(10020),
                i = t(26544),
                l = t(5052),
                d = t(22899),
                s = t(75555),
                u = t(9008),
                c = t(58309),
                p = t(11720),
                v = t(89598),
                f = t(78294),
                g = t(25617),
                m = t(14266),
                b = t(66971),
                y = t(5522),
                P = t(45628),
                h = t(68615),
                E = t(40942),
                w = t(57020),
                Z = t(11752),
                I = t(73145),
                A = t(94381),
                F = t(4298),
                S = t(64857),
                N = t(20902),
                D = t(77691),
                R = t(55072),
                _ = t(82258),
                T = t(1568),
                x = t(58157),
                k = t(61084),
                L = t(82132),
                O = t(17174),
                U = t(58502),
                M = t(63233),
                C = t(97997),
                Y = t(34155),
                H = function() {
                    return (H = Object.assign || function(e) {
                        for (var n, t = 1, o = arguments.length; t < o; t++)
                            for (var a in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        return e
                    }).apply(this, arguments)
                },
                X = function(e, n, t, o) {
                    return new(t || (t = Promise))((function(a, r) {
                        function i(e) {
                            try {
                                d(o.next(e))
                            } catch (n) {
                                r(n)
                            }
                        }

                        function l(e) {
                            try {
                                d(o.throw(e))
                            } catch (n) {
                                r(n)
                            }
                        }

                        function d(e) {
                            var n;
                            e.done ? a(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                                e(n)
                            }))).then(i, l)
                        }
                        d((o = o.apply(e, n || [])).next())
                    }))
                },
                j = function(e, n) {
                    var t, o, a, r, i = {
                        label: 0,
                        sent: function() {
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return r = {
                        next: l(0),
                        throw: l(1),
                        return: l(2)
                    }, "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                        return this
                    }), r;

                    function l(r) {
                        return function(l) {
                            return function(r) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (t = 1, o && (a = 2 & r[0] ? o.return : r[0] ? o.throw || ((a = o.return) && a.call(o), 0) : o.next) && !(a = a.call(o, r[1])).done) return a;
                                    switch (o = 0, a && (r = [2 & r[0], a.value]), r[0]) {
                                        case 0:
                                        case 1:
                                            a = r;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: r[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, o = r[1], r = [0];
                                            continue;
                                        case 7:
                                            r = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
                                                i.label = r[1];
                                                break
                                            }
                                            if (6 === r[0] && i.label < a[1]) {
                                                i.label = a[1], a = r;
                                                break
                                            }
                                            if (a && i.label < a[2]) {
                                                i.label = a[2], i.ops.push(r);
                                                break
                                            }
                                            a[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    r = n.call(e, i)
                                } catch (l) {
                                    r = [6, l], o = 0
                                } finally {
                                    t = a = 0
                                }
                                if (5 & r[0]) throw r[1];
                                return {
                                    value: r[0] ? r[1] : void 0,
                                    done: !0
                                }
                            }([r, l])
                        }
                    }
                },
                B = !0,
                q = function(e) {
                    var n, t, B, q, z, V, G, Q, J, W, K, $, ee, ne, te, oe, ae, re, ie, le, de, se, ue = e.appInfo,
                        ce = e.authServiceHost,
                        pe = e.ngNcmHost,
                        ve = e.errorStatus,
                        fe = e.pwaIconHost,
                        ge = e.pwaNudgeDelayMs,
                        me = e.features,
                        be = e.authUseThirdPartyFlow,
                        ye = e.prefix,
                        Pe = e.authRedirectionUrl,
                        he = (e.playDomain, e.adsConfigUrl),
                        Ee = e.serviceStatus,
                        we = e.countryCode,
                        Ze = e.isAppPage,
                        Ie = ue.media,
                        Ae = ue.packageName,
                        Fe = (ue.appType, (Ie || {}).desktop),
                        Se = (0, h.Z)(ve ? "404 | now.gg" : ""),
                        Ne = Se[0],
                        De = Se[1],
                        Re = (0, p.useRef)(),
                        _e = null === (t = null === (n = ue.playFeFeatures) || void 0 === n ? void 0 : n.tryAndDownload) || void 0 === t ? void 0 : t.isEnabled,
                        Te = (0, g.I0)(),
                        xe = 36e4,
                        ke = (0, p.useRef)(null),
                        Le = !0,
                        Oe = null,
                        Ue = function(e) {
                            return X(void 0, void 0, void 0, (function() {
                                var n, t, o;
                                return j(this, (function(a) {
                                    switch (a.label) {
                                        case 0:
                                            return n = (new TextEncoder).encode(e), [4, crypto.subtle.digest("SHA-1", n)];
                                        case 1:
                                            return t = a.sent(), o = Array.from(new Uint8Array(t)), [2, o.map((function(e) {
                                                return e.toString(16).padStart(2, "0")
                                            })).join("")]
                                    }
                                }))
                            }))
                        },
                        Me = !0,
                        Ce = !0,
                        Ye = !0,
                        He = !0;
                    if (!(0, T.yF)()) {
                        var Xe = (0, Z.default)().publicRuntimeConfig,
                            je = Y.env.NEXT_PUBLIC_ENVIRONMENT || Xe.NEXT_PUBLIC_ENVIRONMENT || "development",
                            Be = !!(je && je.indexOf("staging") > -1),
                            qe = !!(je && je.indexOf("qa") > -1),
                            ze = !!(je && je.indexOf("dev") > -1),
                            Ve = "now.gg" === window.location.hostname,
                            Ge = "staging-demo.abctest.in" === window.location.hostname;
                        Oe = sessionStorage.getItem("isEmbeddedFrame"), Le = (Ve || Be || qe || ze) && !Ge && !Oe, Me = !(0, D.tq)() || (0, D.Em)() || (0, D.zc)() ? null === (Q = null === (G = null === (V = ue.playFeFeatures) || void 0 === V ? void 0 : V.ads) || void 0 === G ? void 0 : G.desktop) || void 0 === Q ? void 0 : Q.enableDisplayAds : null === (z = null === (q = null === (B = ue.playFeFeatures) || void 0 === B ? void 0 : B.ads) || void 0 === q ? void 0 : q.mobile) || void 0 === z ? void 0 : z.enableDisplayAds, Ce = !(0, D.tq)() || (0, D.Em)() || (0, D.zc)() ? null === (ne = null === (ee = null === ($ = ue.playFeFeatures) || void 0 === $ ? void 0 : $.ads) || void 0 === ee ? void 0 : ee.desktop) || void 0 === ne ? void 0 : ne.enablePrerollAds : null === (K = null === (W = null === (J = ue.playFeFeatures) || void 0 === J ? void 0 : J.ads) || void 0 === W ? void 0 : W.mobile) || void 0 === K ? void 0 : K.enablePrerollAds, Ye = !(0, D.tq)() || (0, D.Em)() || (0, D.zc)() ? null === (le = null === (ie = null === (re = ue.playFeFeatures) || void 0 === re ? void 0 : re.ads) || void 0 === ie ? void 0 : ie.desktop) || void 0 === le ? void 0 : le.enableMidrollAds : null === (ae = null === (oe = null === (te = ue.playFeFeatures) || void 0 === te ? void 0 : te.ads) || void 0 === oe ? void 0 : oe.mobile) || void 0 === ae ? void 0 : ae.enableMidrollAds, (0, D.T2)() && (Me = !1, Ce = !1, Ye = !1), He = Me || Ce || Ye
                    }
                    f.ZP.serviceStatus = "".concat(Ee), f.ZP.isPlayPage = !0, (0, p.useEffect)((function() {
                        var e;
                        f.ZP.appInfo = ue;
                        var n = {};
                        f.ZP.prefix = ye, f.ZP.ngNcmHost = pe, f.ZP.countryCode = we || "", (0, w.v)({
                            authServiceHost: ce,
                            authUseThirdPartyFlow: be,
                            pwaIconHost: fe,
                            pwaNudgeDelayMs: ge
                        });
                        var t = (0, s.ZX)();
                        n.eVar = t.evar, t.isNewUserForExperiment && (n.isNewUserForExperiment = !0), (0, v.L9)("PreloaderDisplayed", n);
                        try {
                            if ((0, D.EO)()) {
                                var o = (new Date).getTime();
                                sessionStorage.setItem(A.oE, o.toString())
                            }
                            if (!sessionStorage.getItem(A.bA)) {
                                var a = sessionStorage.getItem(A.UZ);
                                if (a) {
                                    var r = Date.now() - parseInt(a, 10);
                                    if (r >= xe)(0, y.Ip)({
                                        event: "six_minutes"
                                    }), sessionStorage.setItem(A.bA, "true");
                                    else {
                                        var i = xe - r;
                                        ke.current = setTimeout((function() {
                                            (0, y.Ip)({
                                                event: "six_minutes"
                                            }), sessionStorage.setItem(A.bA, "true")
                                        }), i)
                                    }
                                } else {
                                    o = Date.now();
                                    sessionStorage.setItem(A.UZ, o.toString()), ke.current = setTimeout((function() {
                                        (0, y.Ip)({
                                            event: "six_minutes"
                                        }), sessionStorage.setItem(A.bA, "true")
                                    }), xe)
                                }
                            }
                        } catch (Y) {}
                        Ee && A.VI[Ee] && (0, x.Z)(A.VI[Ee], "", "NowggIfpSdkEvent");
                        var d = A.sU.includes(ue.appId),
                            u = d && !A.D1.includes(ue.appId);
                        Te({
                            type: b.Z.UPDATE_PLAY_STATE,
                            payload: {
                                isPokelaboApp: d,
                                pokelaboHideHeaderFooter: u
                            }
                        });
                        var p = sessionStorage.getItem("isEmbeddedFrame");
                        if (p) {
                            f.ZP.appInfo.iapLoginPromptEnabled = !1;
                            var g = (0, D.Ed)(p),
                                P = !1,
                                h = !1,
                                Z = !1,
                                F = !1;
                            g && (P = -1 !== g.indexOf("b"), h = -1 !== g.indexOf("a"), Z = -1 !== g.indexOf("c"), F = -1 !== g.indexOf("d")), f.ZP.appInfo.playFeFeatures.ads = {
                                desktop: {
                                    enablePrerollAds: h,
                                    enableDisplayAds: P,
                                    enableMidrollAds: Z
                                },
                                mobile: {
                                    enablePrerollAds: h,
                                    enableDisplayAds: P,
                                    enableMidrollAds: Z
                                }
                            }, f.ZP.embeddedFullScreenAdsEnabled = F
                        }((0, D.F8)() || (0, D.T2)()) && (f.ZP.appInfo.playFeFeatures.ads = {
                            desktop: {
                                enablePrerollAds: !1,
                                enableDisplayAds: !1,
                                enableMidrollAds: !1
                            },
                            mobile: {
                                enablePrerollAds: !1,
                                enableDisplayAds: !1,
                                enableMidrollAds: !1
                            }
                        }, f.ZP.embeddedFullScreenAdsEnabled = !1), "ropro" === (0, f.We)().utmCampaign.toLowerCase() && De("RoPro Cloud Play via now.gg"), (0, f.DJ)() && De("Play ".concat(f.ZP.appInfo.appName, " Online"));
                        var R = window.fetch,
                            _ = /^\/play\/_next\/data\/.*\.json/;
                        window.fetch = function() {
                            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                            return X(void 0, void 0, void 0, (function() {
                                var n;
                                return j(this, (function(t) {
                                    return n = e[0], _.test(n) ? [2, Promise.reject()] : [2, R.apply(void 0, e)]
                                }))
                            }))
                        };
                        var T = sessionStorage.getItem(N.$3);
                        T && parseInt(T, 10) && Te({
                            type: b.Z.SET_ROBLOX_EXPERIENCE_ID,
                            payload: {
                                robloxExperienceId: parseInt(T, 10),
                                currentRobloxExperienceTimer: Date.now()
                            }
                        }), f.ZP.features = me, f.ZP.authRedirectionUrl = Pe, f.ZP.authUseThirdPartyFlow = be, _e && (f.ZP.pwaSupported = !1);
                        X(void 0, void 0, void 0, (function() {
                            var e;
                            return j(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return f.ZP.appInfo.packageName && f.ZP.appInfo.packageName.length > 40 ? [4, Ue(f.ZP.appInfo.packageName)] : [3, 2];
                                    case 1:
                                        e = n.sent(), f.ZP.compressedPackage = e, n.label = 2;
                                    case 2:
                                        return [2]
                                }
                            }))
                        })).then((function() {})).catch((function(e) {}));
                        try {
                            var U = "IncognitoMode";
                            (0, I.r)().then((function(e) {
                                e.isPrivate ? (f.ZP.pwaSupported = !1, f.ZP.incognitoMode = k.F.TRUE, (0, v.L9)("".concat(U, "Detected"))) : f.ZP.incognitoMode = k.F.FALSE
                            })).catch((function(e) {
                                f.ZP.incognitoMode = k.F.ERROR, (0, v.L9)("".concat(U, "DetectionFailed"), {
                                    error: e
                                })
                            }))
                        } catch (H) {}(0, v.L9)("PreloaderDisplayed2", n), localStorage.removeItem("A/B-experiment::play-page"), Re.current = (0, v.wn)(), sessionStorage.removeItem(A.dZ), Te({
                            type: b.Z.UPDATE_ORIENTATION,
                            payload: {
                                orientation: ue.initialOrientation
                            }
                        }), (0, E.i1)();
                        var M = (0, c._B)();

                        function C() {
                            (0, L.oi)(), (0, D.T2)() && (Me = !1, Ce = !1, Ye = !1, f.ZP.appInfo.playFeFeatures.ads = {
                                desktop: {
                                    enablePrerollAds: !1,
                                    enableDisplayAds: !1,
                                    enableMidrollAds: !1
                                },
                                mobile: {
                                    enablePrerollAds: !1,
                                    enableDisplayAds: !1,
                                    enableMidrollAds: !1
                                }
                            }, f.ZP.embeddedFullScreenAdsEnabled = !1, He = !1, Te({
                                type: S.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            }), Te((0, O.UZ)(!1, !1)))
                        }
                        return Te({
                                type: m.Z.GUEST_FLOW,
                                payload: {
                                    guestFlow: M
                                }
                            }), (null === (e = null === f.ZP || void 0 === f.ZP ? void 0 : f.ZP.features) || void 0 === e ? void 0 : e.ads) && (0, l.Z)(), M && Te({
                                type: m.Z.SET_LOGGED_IN,
                                payload: {
                                    isLoggedIn: !1,
                                    showPreloader: !1
                                }
                            }), (0, v.L9)("PreloaderDisplayed3", n), C(), window.addEventListener("nggClientIpInfoEvent", C), window.addEventListener("nggProfileDetailsUpdated", L.oi),
                            function() {
                                window.removeEventListener("nggClientIpInfoEvent", C), window.removeEventListener("nggProfileDetailsUpdated", L.oi), clearInterval(Re.current), ke.current && clearTimeout(ke.current)
                            }
                    }), []);
                    var Qe = function() {
                            Te({
                                type: S.Z.UPDATE_IMAERROR,
                                payload: {
                                    imaError: !1
                                }
                            })
                        },
                        Je = function() {
                            f.ZP.prebidFailed = !0, (0, L.zr)("aditudeScriptLoadError", !1), Te({
                                type: S.Z.UPDATE_IMAERROR,
                                payload: {
                                    imaError: !0,
                                    adsEnded: !0
                                }
                            })
                        };
                    return ve ? (0, C.tZ)(U.NotFound, {
                        prefix: ye,
                        ngNcmHost: pe,
                        errorReason: "Play".concat(ve)
                    }) : (0, C.BX)(i.Pw, {
                        children: [(0, C.BX)(u.default, {
                            children: [(0, C.tZ)("meta", {
                                name: "robots",
                                content: "noindex,nofollow,noarchive"
                            }), (0, C.tZ)("meta", {
                                httpEquiv: "Cache-control",
                                content: "private, no-cache, no-store, max-age=0, must-revalidate"
                            }), (0, C.tZ)("meta", {
                                httpEquiv: "Pragma",
                                content: "no-cache"
                            }), (0, C.tZ)("script", {
                                dangerouslySetInnerHTML: {
                                    __html: (0, y.ZP)(H(H({}, ue), {
                                        authServiceHost: ce
                                    }), Ae, ye, !1, null === (se = null === (de = ue.playFeFeatures) || void 0 === de ? void 0 : de.tryAndDownload) || void 0 === se ? void 0 : se.isEnabled)
                                }
                            }), (0, T.LX)((null === ue || void 0 === ue ? void 0 : ue.metaTags) || ""), Ne && (0, C.tZ)("title", {
                                children: Ne
                            }), (0, C.tZ)("script", {
                                children: "document.addEventListener('wheel', function(e) { if (e.ctrlKey) { e.preventDefault(); }}, { passive: false });\n          document.addEventListener('touchmove', function (event) { if (event.touches.length > 1) { event.preventDefault();} }, { passive: false });\n          document.addEventListener('gesturestart', function (event) { event.preventDefault() }, { passive: false });\n          document.addEventListener('gesturechange', function (event) { event.preventDefault() }, { passive: false });\n          document.addEventListener('gestureend', function (event) { event.preventDefault() }, { passive: false });"
                            })]
                        }), (0, C.BX)(o.im, {
                            desktopBanner: null === Fe || void 0 === Fe ? void 0 : Fe.banner,
                            children: [(0, C.tZ)(d.Z, {}), (0, C.tZ)("noscript", {
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
                            }), (0, C.tZ)(r.x.Provider, {
                                value: ue,
                                children: (0, C.BX)(a.Z, {
                                    children: [(!Ee || Ee === P.YR.FailureServiceNotInRegion && (0, D.c6)(ue.packageName)) && (0, C.BX)(C.HY, {
                                        children: [He && (Le ? (0, C.tZ)(F.default, {
                                            src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/nowgg-default/prebid-load.js",
                                            onLoad: Qe,
                                            onError: Je
                                        }) : (0, C.tZ)(F.default, {
                                            src: "https://dn0qt3r0xannq.cloudfront.net/nowgg-IZQznjkQaj/longtail/prebid-load.js",
                                            onLoad: Qe,
                                            onError: Je
                                        })), (0, C.tZ)(M.PlayPage, {
                                            manifest: !0,
                                            adsConfigUrl: he,
                                            isAppPage: Ze
                                        })]
                                    }), (Ee === P.YR.FailureServiceNotInRegion && !(0, D.c6)(ue.packageName) || Ee === P.YR.FailureAppNotAvailable) && _e ? (0, C.tZ)(R.Z, {}) : (Ee === P.YR.Failure || Ee === P.YR.FailureNoResource || Ee === P.YR.FailureMobileNotSupported || Ee === P.YR.FailureDesktopNotSupported || Ee === P.YR.FailureTabletNotSupported || Ee === P.YR.FailureOsNotSupported || Ee === P.YR.FailureServiceNotInRegion && !(0, D.c6)(ue.packageName) || Ee === P.YR.FailureAppNotAvailable) && (0, C.tZ)(_.default, {
                                        error: Ee,
                                        errorName: "PageServiceStatus-".concat(Ee)
                                    })]
                                })
                            })]
                        })]
                    })
                };
            n.default = q
        },
        45301: function(e, n, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return t(46473)
            }])
        }
    },
    function(e) {
        e.O(0, [774, 51, 349, 54, 796, 806, 677, 166, 742, 359, 235, 233, 766, 888, 179], (function() {
            return n = 45301, e(e.s = n);
            var n
        }));
        var n = e.O();
        _N_E = n
    }
]);
//# sourceMappingURL=index-ab780d3f6360e2b9.js.map