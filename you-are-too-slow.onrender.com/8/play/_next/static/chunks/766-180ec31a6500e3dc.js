"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [766], {
        54036: function(n, e, i) {
            i.d(e, {
                Bd: function() {
                    return l
                },
                Ry: function() {
                    return p
                },
                yq: function() {
                    return u
                },
                cd: function() {
                    return h
                },
                JD: function() {
                    return f
                },
                DN: function() {
                    return x
                }
            });
            var t = i(50912),
                o = i(89598),
                d = i(94381),
                a = function() {
                    return (a = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                r = 0;

            function l() {
                r += 1
            }

            function p() {
                r -= 1
            }

            function s() {
                return r
            }
            var c = !1;

            function u() {
                c = !0
            }
            var g = !1;

            function h() {
                g = !0
            }

            function v() {
                var n, e, i, o, d, a, r, l, p, s, u, h, v, f, w, x, m, y;
                try {
                    var b = t.Z.getState().ads,
                        Z = b.imaError,
                        A = b.adBlocker;
                    return {
                        isVideoTudeLoaded: "undefined" !== typeof(null === (n = null === window || void 0 === window ? void 0 : window.tude) || void 0 === n ? void 0 : n.requestInstreamPlayer),
                        isAdGPTCallbacksRegistered: c,
                        isTudeCmdArray: void 0 !== (null === (i = null === (e = null === window || void 0 === window ? void 0 : window.tude) || void 0 === e ? void 0 : e.cmd) || void 0 === i ? void 0 : i.length),
                        isGptCmdArray: void 0 !== (null === (d = null === (o = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === o ? void 0 : o.cmd) || void 0 === d ? void 0 : d.length),
                        isGptCmdArray2: Array.isArray(null === (a = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === a ? void 0 : a.cmd),
                        isGptPubadsReady: null !== (l = null === (r = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === r ? void 0 : r.pubadsReady) && void 0 !== l && l,
                        isGptApiReady: null !== (s = null === (p = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === p ? void 0 : p.apiReady) && void 0 !== s && s,
                        isGptLoaded2: null !== (h = null === (u = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === u ? void 0 : u._loaded_) && void 0 !== h && h,
                        gfcAdBlockerStatus: null !== (w = (null === (v = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === v ? void 0 : v.getAdBlockerStatus) && (null === (f = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === f ? void 0 : f.getAdBlockerStatus())) && void 0 !== w ? w : -1,
                        gfcAllowAdsStatus: null !== (y = (null === (x = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === x ? void 0 : x.getAllowAdsStatus) && (null === (m = null === window || void 0 === window ? void 0 : window.googlefc) || void 0 === m ? void 0 : m.getAllowAdsStatus())) && void 0 !== y ? y : -1,
                        isAdBlockerDetectedByGoogle: g,
                        imaError: Z,
                        adBlocker: A
                    }
                } catch (k) {
                    return {}
                }
            }

            function f(n, e, i) {
                var r, l, p, c, u, g, h;
                void 0 === i && (i = "");
                try {
                    var f = t.Z.getState().play,
                        w = f.videoRef,
                        x = f.isAndroidConnected,
                        m = window.devicePixelRatio,
                        y = (null === (r = null === w || void 0 === w ? void 0 : w.current) || void 0 === r ? void 0 : r.clientHeight) || 0,
                        b = (null === (l = null === w || void 0 === w ? void 0 : w.current) || void 0 === l ? void 0 : l.clientWidth) || 0,
                        Z = 0,
                        A = 0,
                        k = "Midroll";
                    n === d.V ? (Z = 720, A = 90) : n === d.us ? (Z = 160, A = 600) : "div-gpt-ad-display" === n ? (Z = 320, A = 50) : "div-gpt-ad-rewarded" === n && (Z = 320, A = 250, k = "Ingame"), (0, o.L9)("AdRequestedNg".concat(i), a({
                        adContext: k,
                        adType: "Display",
                        adWidth: Z,
                        adHeight: A,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: y,
                        androidHeight: b,
                        pixelRatio: m,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof(null === (p = null === window || void 0 === window ? void 0 : window.tude) || void 0 === p ? void 0 : p.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof(null === (c = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === c ? void 0 : c.pubads),
                        isAndroidConnected: x,
                        gdprApplies: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("gdprApplies")),
                        userConsent: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("userConsent")),
                        displayAdsQueueSize: s(),
                        slotId: e
                    }, v()))
                } catch (I) {
                    (0, o.L9)("AdRequestedNg".concat(i), a({
                        adContext: "exception",
                        adType: "Display",
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        isTabVisible: "visible" === document.visibilityState,
                        isTudeLoaded: "undefined" !== typeof(null === (u = null === window || void 0 === window ? void 0 : window.tude) || void 0 === u ? void 0 : u.refreshAdsViaDivMappings),
                        isGptLoaded: "undefined" !== typeof(null === (g = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === g ? void 0 : g.pubads),
                        gdprApplies: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("gdprApplies")),
                        userConsent: "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("userConsent")),
                        displayAdsQueueSize: s(),
                        exception: (null === (h = I) || void 0 === h ? void 0 : h.message) || "unknown",
                        slotId: e
                    }, v()))
                }
            }

            function w(n) {
                var e, i = n.detail || {},
                    t = i.event,
                    d = void 0 === t ? "unknown" : t,
                    r = i.data;
                (0, o.L9)("TudeCustomEvent", a({
                    tudeEventName: d,
                    tudeEventPayload: r,
                    isTabVisible: "visible" === document.visibilityState,
                    isGptLoaded: "undefined" !== typeof(null === (e = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === e ? void 0 : e.pubads)
                }, v()))
            }

            function x() {
                document.addEventListener("tudeCustomEvent", w)
            }
        },
        5052: function(n, e, i) {
            var t = i(50912),
                o = i(89598),
                d = i(64857),
                a = i(74803),
                r = i(94381),
                l = i(49555),
                p = i(54036),
                s = i(90496),
                c = i(31591),
                u = function() {
                    return (u = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                };
            e.Z = function() {
                (0, o.L9)("AdAddDisplayAdListenersCalled"), (0, p.DN)();
                var n = window.devicePixelRatio;
                window.googletag.cmd.push((function() {
                    var e;
                    try {
                        window.googletag.pubads().addEventListener("slotRequested", (function(e) {
                            var i, a, r, l, p, u, g, h, v, f, w, x, m, y, b, Z, A, k, I, P, S, D, T;
                            try {
                                var H = t.Z.getState(),
                                    R = H.play.videoRef,
                                    L = H.ads.adBlocker,
                                    W = (null === (i = null === R || void 0 === R ? void 0 : R.current) || void 0 === i ? void 0 : i.clientHeight) || 0,
                                    C = (null === (a = null === R || void 0 === R ? void 0 : R.current) || void 0 === a ? void 0 : a.clientWidth) || 0,
                                    E = e.slot.getSlotElementId(); - 1 !== E.indexOf("leaderBoard") ? (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 720,
                                    adHeight: 90,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (r = null === window || void 0 === window ? void 0 : window.tude) || void 0 === r ? void 0 : r.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (l = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === l ? void 0 : l.pubads),
                                    adBlocker: L,
                                    slotId: E,
                                    repeatCount: (0, s.w)()
                                }) : -1 !== E.indexOf("skyScrapper") ? (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 160,
                                    adHeight: 600,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (p = null === window || void 0 === window ? void 0 : window.tude) || void 0 === p ? void 0 : p.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (u = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === u ? void 0 : u.pubads),
                                    adBlocker: L,
                                    slotId: E,
                                    repeatCount: (0, s.w)()
                                }) : -1 !== E.indexOf("div-gpt-ad-banner") ? (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (g = null === window || void 0 === window ? void 0 : window.tude) || void 0 === g ? void 0 : g.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (h = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === h ? void 0 : h.pubads),
                                    adBlocker: L,
                                    slotId: E
                                }) : -1 !== E.indexOf("pre-roll-gpt") ? (0, o.L9)("AdRequested", {
                                    adContext: "Preroll",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (v = null === window || void 0 === window ? void 0 : window.tude) || void 0 === v ? void 0 : v.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (f = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === f ? void 0 : f.pubads),
                                    adBlocker: L,
                                    slotId: E
                                }) : -1 !== E.indexOf("div-gpt-ad-rewarded") ? (0, o.L9)("AdRequested", {
                                    adContext: "Ingame",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (w = null === window || void 0 === window ? void 0 : window.tude) || void 0 === w ? void 0 : w.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (x = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === x ? void 0 : x.pubads),
                                    adBlocker: L,
                                    slotId: E
                                }) : -1 !== E.indexOf("panelAdBottom_HTML") ? (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (m = null === window || void 0 === window ? void 0 : window.tude) || void 0 === m ? void 0 : m.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (y = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === y ? void 0 : y.pubads),
                                    adBlocker: L,
                                    slotId: E
                                }) : -1 !== E.indexOf("div-gpt-ad-panelAdMega") ? (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 300,
                                    adHeight: 250,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (b = null === window || void 0 === window ? void 0 : window.tude) || void 0 === b ? void 0 : b.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (Z = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === Z ? void 0 : Z.pubads),
                                    adBlocker: L,
                                    slotId: E
                                }) : -1 !== E.indexOf("div-gpt-ad-display") ? (t.Z.dispatch({
                                    type: d.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        displayAdLoaded: !1
                                    }
                                }), (0, o.L9)("AdRequested", {
                                    adContext: "Midroll",
                                    adType: "Display",
                                    adWidth: 320,
                                    adHeight: 50,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (A = null === window || void 0 === window ? void 0 : window.tude) || void 0 === A ? void 0 : A.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (k = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === k ? void 0 : k.pubads),
                                    repeatCount: (0, c.f)(),
                                    adBlocker: L,
                                    slotId: E
                                })) : (0, o.L9)("AdRequested", {
                                    adContext: "unknown",
                                    adType: "unknown",
                                    adWidth: -1,
                                    adHeight: -1,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: W,
                                    androidHeight: C,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (I = null === window || void 0 === window ? void 0 : window.tude) || void 0 === I ? void 0 : I.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (P = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === P ? void 0 : P.pubads),
                                    adBlocker: L,
                                    slotId: E
                                })
                            } catch (B) {
                                (0, o.L9)("AdRequestException", {
                                    adContext: "exception",
                                    adType: "exception",
                                    adWidth: -1,
                                    adHeight: -1,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    pixelRatio: n,
                                    isTabVisible: "visible" === document.visibilityState,
                                    isTudeLoaded: "undefined" !== typeof(null === (S = null === window || void 0 === window ? void 0 : window.tude) || void 0 === S ? void 0 : S.refreshAdsViaDivMappings),
                                    isGptLoaded: "undefined" !== typeof(null === (D = null === window || void 0 === window ? void 0 : window.googletag) || void 0 === D ? void 0 : D.pubads),
                                    exception: (null === (T = B) || void 0 === T ? void 0 : T.message) || "unknown",
                                    slotId: "unkknown"
                                })
                            }
                        })), window.googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                            var i, p, g = e.slot.getSlotElementId() || "",
                                h = t.Z.getState(),
                                v = h.play.videoRef,
                                f = h.ads.rewardedAdType,
                                w = (null === (i = null === v || void 0 === v ? void 0 : v.current) || void 0 === i ? void 0 : i.clientHeight) || 0,
                                x = (null === (p = null === v || void 0 === v ? void 0 : v.current) || void 0 === p ? void 0 : p.clientWidth) || 0,
                                m = (window.pbjs.getBidResponses()[g] || {}).bids,
                                y = (void 0 === m ? [] : m)[0] || {},
                                b = {
                                    bidder: y.bidder,
                                    cpm: y.cpm,
                                    currency: y.currency,
                                    netRevenue: y.netRevenue,
                                    status: y.status,
                                    statusMessage: y.statusMessage,
                                    timeToRespond: y.timeToRespond,
                                    ttl: y.ttl
                                };
                            if (-1 !== g.indexOf("leaderBoard")) e.isEmpty ? (0, o.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 720,
                                adHeight: 90,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                repeatCount: (0, s.w)(),
                                slotId: g
                            }) : (0, o.L9)("AdDisplayed", u({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                repeatCount: (0, s.w)(),
                                slotId: g
                            }, b));
                            else if (-1 !== g.indexOf("skyScrapper")) e.isEmpty ? (0, o.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 160,
                                adHeight: 600,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g,
                                repeatCount: (0, s.w)()
                            }) : (0, o.L9)("AdDisplayed", u({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g,
                                repeatCount: (0, s.w)()
                            }, b));
                            else if (-1 !== g.indexOf("div-gpt-ad-banner")) e.isEmpty ? (0, o.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 300,
                                adHeight: 250,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g
                            }) : (0, o.L9)("AdDisplayed", u({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g
                            }, b));
                            else if (-1 !== g.indexOf("pre-roll-gpt")) e.isEmpty ? (t.Z.dispatch({
                                type: d.Z.UPDATE_ADS_STATE,
                                payload: {
                                    adsEnded: !0
                                }
                            }), (0, o.L9)("AdNotFilled", {
                                adContext: "Preroll",
                                adType: "Display",
                                adWidth: 300,
                                adHeight: 250,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g
                            })) : (setTimeout((function() {
                                t.Z.dispatch({
                                    type: d.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        adsEnded: !0
                                    }
                                })
                            }), 5e3), (0, o.L9)("AdDisplayed", u({
                                adContext: "Preroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                slotId: g
                            }, b)));
                            else if (-1 !== g.indexOf("div-gpt-ad-rewarded"))
                                if (e.isEmpty) {
                                    (0, o.L9)("AdNotFilled", {
                                        adContext: "Ingame",
                                        adType: "Display",
                                        adWidth: 300,
                                        adHeight: 250,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: w,
                                        androidHeight: x,
                                        pixelRatio: n,
                                        slotId: g
                                    });
                                    var Z = t.Z.getState().ads.sdkType,
                                        A = Z ? "::".concat(Z) : "";
                                    f === r.fz.rewarded ? (0, a.f)("ADS::rewardedAdLoad::fail".concat(A)) : f === r.fz.interstitial && (0, a.f)("ADS::interstitialAdLoad::fail".concat(A)), t.Z.dispatch({
                                        type: d.Z.UPDATE_REWARDED_SDK_STATE,
                                        payload: {
                                            rewardedAdsSDK: !1,
                                            fallbackDisplayed: !1
                                        }
                                    }), h.play.muted || v && v.current && (v.current.muted = !1)
                                } else(0, o.L9)("AdDisplayed", u({
                                    adContext: "Ingame",
                                    adType: "Display",
                                    adWidth: e.size[0],
                                    adHeight: e.size[1],
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: w,
                                    androidHeight: x,
                                    pixelRatio: n,
                                    slotId: g
                                }, b)), t.Z.dispatch({
                                    type: d.Z.UPDATE_ADS_STATE,
                                    payload: {
                                        fallbackDisplayed: !0
                                    }
                                });
                            else -1 !== g.indexOf("div-gpt-ad-display") && (e.isEmpty ? (0, o.L9)("AdNotFilled", {
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: 320,
                                adHeight: 50,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                repeatCount: (0, c.f)(),
                                slotId: g
                            }) : ((0, o.L9)("AdDisplayed", u({
                                adContext: "Midroll",
                                adType: "Display",
                                adWidth: e.size[0],
                                adHeight: e.size[1],
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: w,
                                androidHeight: x,
                                pixelRatio: n,
                                repeatCount: (0, c.f)(),
                                slotId: g
                            }, b)), t.Z.dispatch({
                                type: d.Z.UPDATE_ADS_STATE,
                                payload: {
                                    displayAdLoaded: !0
                                }
                            }), (0, l.sZ)(), (0, l.Ul)(), setTimeout((function() {
                                (0, l.sZ)(), (0, l.Ul)()
                            }), 2e3)))
                        })), (0, p.yq)(), (0, o.L9)("AdGPTCallbacksRegistered")
                    } catch (i) {
                        (0, o.L9)("AdGPTCallbacksRegisterException", {
                            exception: (null === (e = i) || void 0 === e ? void 0 : e.message) || "unknown"
                        })
                    }
                }))
            }
        },
        90496: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return k
                },
                w: function() {
                    return Z
                }
            });
            var t, o, d = i(11720),
                a = i(10020),
                r = i(17174),
                l = i(49555),
                p = i(25617),
                s = i(94381),
                c = i(78294),
                u = i(77691),
                g = i(45628),
                h = i(82132),
                v = i(50445),
                f = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                w = v.ZP.div(t || (t = f(["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    &.upliftAd{\n      z-index: 9;\n    }\n"], ["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n    &.upliftAd{\n      z-index: 9;\n    }\n"])), (function(n) {
                    return n.isHtmlGame ? "8px" : "0px"
                }), (function(n) {
                    return n.isHtmlGame ? "8px" : "0px"
                })),
                x = v.ZP.div(o || (o = f(["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: '100vw';\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"], ["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: '100vw';\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"])), (function(n) {
                    return n.isHtmlGame ? "8px" : "0px"
                }), (function(n) {
                    var e, i, t = n.mobile,
                        o = n.theme;
                    return t ? null === (e = o.colors) || void 0 === e ? void 0 : e.transparent : null === (i = o.colors) || void 0 === i ? void 0 : i.base800
                }), (function(n) {
                    return n.isHtmlGame ? "8px" : "0px"
                })),
                m = i(54036),
                y = i(97997),
                b = function() {
                    return (b = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                Z = function() {
                    return 0
                },
                A = function(n) {
                    var e = n.leftSkyScrapperContainer,
                        i = n.rightSkyScrapperContainer,
                        t = (0, p.I0)(),
                        o = (0, d.useRef)(null),
                        v = (0, d.useRef)(null),
                        f = (0, d.useRef)(null),
                        Z = (0, d.useRef)(null),
                        A = (0, p.v9)((function(n) {
                            return n.play.orientation
                        })),
                        k = (0, p.v9)((function(n) {
                            return n.play.videoContainerRef
                        })),
                        I = (0, p.v9)((function(n) {
                            return n.play.videoRef
                        })),
                        P = (0, p.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        S = (0, d.useState)(""),
                        D = S[0],
                        T = S[1],
                        H = (0, d.useContext)(a.x),
                        R = (0, p.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        L = (0, p.v9)((function(n) {
                            return n.play.showIAPPopup
                        })),
                        W = (0, d.useMemo)((function() {
                            return (0, u.ri)(R)
                        }), [R]),
                        C = (0, d.useMemo)((function() {
                            return P && (0, u.Dx)()
                        }), [P]) || W,
                        E = (0, d.useCallback)((function() {
                            var n, e, i, t = (null === k || void 0 === k ? void 0 : k.current) ? null === k || void 0 === k ? void 0 : k.current.offsetHeight : 0,
                                o = (null === I || void 0 === I ? void 0 : I.current) ? null === I || void 0 === I ? void 0 : I.current.offsetHeight : 0,
                                d = (null === k || void 0 === k ? void 0 : k.current) ? null === k || void 0 === k ? void 0 : k.current.offsetWidth : 0,
                                a = (null === I || void 0 === I ? void 0 : I.current) ? null === I || void 0 === I ? void 0 : I.current.offsetWidth : 0;
                            return (0, c.DJ)() ? n = (0, u.Em)() || (0, u.zc)() ? s.V : s.us : (0, u.Em)() || (0, u.zc)() ? (A === g.cj.portrait ? (e = t - o, i = d - a) : (e = t - a, i = d - o), n = e >= 190 ? s.V : i >= 330 || i > e ? s.us : s.V) : n = s.us, n
                        }), [A, I, k]);
                    (0, d.useEffect)((function() {
                        t((0, r.dI)(o, v, f, Z)), setTimeout((function() {
                            var n = E();
                            t((0, r.RT)(n)), T(n), (0, l.sZ)(), (0, l.Ul)()
                        }), 1e3)
                    }), [t, E]), (0, d.useEffect)((function() {
                        if (!C) {
                            var n = (0, h.dl)(H);
                            D === s.us ? ((0, m.JD)(s.us, "div-gpt-ad-skyScrapper-1"), (0, m.JD)(s.us, "div-gpt-ad-skyScrapper-2"), window.tude.cmd.push((function() {
                                (0, m.JD)(s.us, "div-gpt-ad-skyScrapper-1", "2"), (0, m.JD)(s.us, "div-gpt-ad-skyScrapper-2", "2"), window.tude.refreshAdsViaDivMappings([{
                                    divId: "div-gpt-ad-skyScrapper-1",
                                    baseDivId: "pb-slot-incontent-large",
                                    targeting: b(b({}, n), {
                                        ads_loc: "display-ss-left"
                                    })
                                }, {
                                    divId: "div-gpt-ad-skyScrapper-2",
                                    baseDivId: "pb-slot-incontent-large",
                                    targeting: b(b({}, n), {
                                        ads_loc: "display-ss-right"
                                    })
                                }])
                            }))) : D === s.V && ((0, m.JD)(s.V, "div-gpt-ad-leaderBoard-1"), (0, m.JD)(s.V, "div-gpt-ad-leaderBoard-2"), window.tude.cmd.push((function() {
                                (0, m.JD)(s.V, "div-gpt-ad-leaderBoard-1", "2"), (0, m.JD)(s.V, "div-gpt-ad-leaderBoard-2", "2"), window.tude.refreshAdsViaDivMappings([{
                                    divId: "div-gpt-ad-leaderBoard-1",
                                    baseDivId: "pb-slot-incontent-small",
                                    targeting: b(b({}, n), {
                                        ads_loc: "display-lb-top"
                                    })
                                }, {
                                    divId: "div-gpt-ad-leaderBoard-2",
                                    baseDivId: "pb-slot-incontent-small",
                                    targeting: b(b({}, n), {
                                        ads_loc: "display-lb-bottom"
                                    })
                                }])
                            })))
                        }
                    }), [H, D, C]);
                    var B = function() {
                            return (0, y.tZ)(w, {
                                isHtmlGame: (0, c.DJ)(),
                                ref: o,
                                className: "skyScrapperFirst ".concat(L ? "upliftAd" : ""),
                                id: "skyScrapper-1",
                                children: !C && (0, y.tZ)("div", {
                                    id: "div-gpt-ad-skyScrapper-1"
                                })
                            })
                        },
                        z = function() {
                            return (0, y.tZ)(w, {
                                isHtmlGame: (0, c.DJ)(),
                                ref: v,
                                className: "skyScrapperSecond ".concat(L ? "upliftAd" : ""),
                                id: "skyScrapper-2",
                                children: !C && (0, y.tZ)("div", {
                                    id: "div-gpt-ad-skyScrapper-2"
                                })
                            })
                        };
                    return (0, y.BX)(y.HY, {
                        children: [D === s.us && (0, y.BX)(y.HY, {
                            children: [e ? (0, d.createPortal)(B(), e) : B(), i ? (0, d.createPortal)(z(), i) : z()]
                        }), D === s.V && (0, y.BX)(y.HY, {
                            children: [(0, y.tZ)(x, {
                                isHtmlGame: (0, c.DJ)(),
                                mobile: (0, u.tq)() && A !== g.cj.portrait,
                                ref: f,
                                className: "leaderBoardFirst",
                                id: "leaderBoard-1",
                                children: !C && (0, y.tZ)("div", {
                                    id: "div-gpt-ad-leaderBoard-1"
                                })
                            }), (0, y.tZ)(x, {
                                isHtmlGame: (0, c.DJ)(),
                                mobile: (0, u.tq)() && A !== g.cj.portrait,
                                ref: Z,
                                className: "leaderBoardSecond",
                                id: "leaderBoard-2",
                                children: !C && (0, y.tZ)("div", {
                                    id: "div-gpt-ad-leaderBoard-2"
                                })
                            })]
                        })]
                    })
                },
                k = (0, d.memo)(A)
        },
        31591: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return m
                },
                f: function() {
                    return w
                }
            });
            var t, o = i(11720),
                d = i(10020),
                a = i(49555),
                r = i(25617),
                l = i(77691),
                p = i(82132),
                s = i(66971),
                c = i(94381),
                u = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                g = i(50445).ZP.div(t || (t = u(["\n  position: fixed;\n  top: 0;\n  pointer-events: all;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: ", ";\n  touch-action: none;\n"], ["\n  position: fixed;\n  top: 0;\n  pointer-events: all;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  min-height: ", ";\n  touch-action: none;\n"])), "".concat(c.g8, "px")),
                h = i(54036),
                v = i(97997),
                f = function() {
                    return (f = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                w = function() {
                    return 0
                },
                x = function() {
                    var n = (0, o.useState)(""),
                        e = n[0],
                        i = n[1],
                        t = (0, r.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        u = (0, o.useContext)(d.x),
                        w = (0, o.useRef)(null),
                        x = (0, r.I0)(),
                        m = (0, o.useMemo)((function() {
                            return t && (0, l.Dx)()
                        }), [t]);
                    return (0, o.useEffect)((function() {
                        x({
                            type: s.Z.SET_REF,
                            payload: {
                                displayAdRef: w
                            }
                        }), setTimeout((function() {
                            i(c.Nw), (0, a.sZ)(), (0, a.Ul)()
                        }), 1e3)
                    }), [x]), (0, o.useEffect)((function() {
                        if (!m && e === c.Nw) {
                            var n = (0, p.dl)(u);
                            (0, h.JD)("div-gpt-ad-display", "div-gpt-ad-display"), window.tude.cmd.push((function() {
                                (0, h.JD)("div-gpt-ad-display", "div-gpt-ad-display", "2"), window.tude.refreshAdsViaDivMappings([{
                                    divId: "div-gpt-ad-display",
                                    baseDivId: "pb-slot-incontent",
                                    targeting: f(f({}, n), {
                                        ads_loc: "display-lb-top"
                                    })
                                }])
                            }))
                        }
                    }), [u, e, m]), (0, v.tZ)(g, {
                        children: !m && (0, v.tZ)("div", {
                            ref: w,
                            id: "div-gpt-ad-display"
                        })
                    })
                },
                m = (0, o.memo)(x)
        },
        15187: function(n, e, i) {
            i.d(e, {
                zt: function() {
                    return T
                },
                ey: function() {
                    return H
                }
            });
            var t = i(5152),
                o = i(72742),
                d = i(94564),
                a = i(94381),
                r = i(66971),
                l = i(50912),
                p = i(78294),
                s = i(11720),
                c = i(25617),
                u = i(89598),
                g = i(26544),
                h = i(77691),
                v = i(26793),
                f = i(45628),
                w = i(56892),
                x = i(11163),
                m = i(78603),
                y = i(39435),
                b = i(79354),
                Z = i(88557),
                A = i(42847),
                k = i(97997),
                I = function() {
                    return (I = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                P = function(n, e, i, t) {
                    return new(i || (i = Promise))((function(o, d) {
                        function a(n) {
                            try {
                                l(t.next(n))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function r(n) {
                            try {
                                l(t.throw(n))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof i ? e : new i((function(n) {
                                n(e)
                            }))).then(a, r)
                        }
                        l((t = t.apply(n, e || [])).next())
                    }))
                },
                S = function(n, e) {
                    var i, t, o, d, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return d = {
                        next: r(0),
                        throw: r(1),
                        return: r(2)
                    }, "function" === typeof Symbol && (d[Symbol.iterator] = function() {
                        return this
                    }), d;

                    function r(d) {
                        return function(r) {
                            return function(d) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, t && (o = 2 & d[0] ? t.return : d[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, d[1])).done) return o;
                                    switch (t = 0, o && (d = [2 & d[0], o.value]), d[0]) {
                                        case 0:
                                        case 1:
                                            o = d;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: d[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, t = d[1], d = [0];
                                            continue;
                                        case 7:
                                            d = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === d[0] || 2 === d[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === d[0] && (!o || d[1] > o[0] && d[1] < o[3])) {
                                                a.label = d[1];
                                                break
                                            }
                                            if (6 === d[0] && a.label < o[1]) {
                                                a.label = o[1], o = d;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(d);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    d = e.call(n, a)
                                } catch (r) {
                                    d = [6, r], t = 0
                                } finally {
                                    i = o = 0
                                }
                                if (5 & d[0]) throw d[1];
                                return {
                                    value: d[0] ? d[1] : void 0,
                                    done: !0
                                }
                            }([d, r])
                        }
                    }
                },
                D = function(n, e, i) {
                    if (i || 2 === arguments.length)
                        for (var t, o = 0, d = e.length; o < d; o++) !t && o in e || (t || (t = Array.prototype.slice.call(e, 0, o)), t[o] = e[o]);
                    return n.concat(t || Array.prototype.slice.call(e))
                },
                T = ((0, t.default)((function() {
                    return Promise.resolve().then(i.bind(i, 4532))
                }), {
                    loadableGenerated: {
                        webpack: function() {
                            return [4532]
                        },
                        modules: ["../src/components/console/header/index.tsx -> @components/robux-reward"]
                    }
                }), function(n) {
                    var e, i, t = n.game,
                        o = n.index,
                        d = (0, c.v9)((function(n) {
                            return n.play.isRecording
                        })),
                        l = (0, c.I0)(),
                        p = "TopBarRecommendation";
                    return (0, k.tZ)(y.r9, {
                        id: null === t || void 0 === t ? void 0 : t.appName,
                        children: (0, k.tZ)("span", {
                            onClick: function() {
                                var n = (0, Z.wh)(null === t || void 0 === t ? void 0 : t.playUrl, p),
                                    e = {
                                        element: p,
                                        action: "Clicked",
                                        packageName: t.packageName
                                    };
                                "number" === typeof o && (e.index = o + 1), (0, u.L9)(a.S5, e), d ? l({
                                    type: r.Z.UPDATE_IS_RECORDING,
                                    payload: {
                                        showRecordingModalBeforeExit: !0,
                                        showRecordingModalBeforeExitSource: "gameTile",
                                        urlToOpenAfterRecordModalExit: n
                                    }
                                }) : window.open(n, "_self")
                            },
                            "data-title": null === t || void 0 === t ? void 0 : t.appName,
                            id: null === t || void 0 === t ? void 0 : t.appName,
                            children: (null === (e = null === t || void 0 === t ? void 0 : t.media) || void 0 === e ? void 0 : e.icon) && (0, k.tZ)(A.oy, {
                                src: null === (i = null === t || void 0 === t ? void 0 : t.media) || void 0 === i ? void 0 : i.icon,
                                alt: null === t || void 0 === t ? void 0 : t.appName,
                                quality: 25,
                                sizes: "(max-width: 2000px) 64px, 64px"
                            })
                        })
                    })
                }),
                H = function(n) {
                    var e, i, t, u = n.componentStyle,
                        A = n.ssrGames,
                        H = n.id,
                        R = n.isAppPage,
                        L = n.ssrOrigin,
                        W = n.isAllGamesHomePageRedirect,
                        C = n.isTestDriveDisable,
                        E = n.loginResolved,
                        B = (0, s.useState)(null),
                        z = B[0],
                        O = B[1],
                        _ = (0, c.v9)((function(n) {
                            return n.play.showAllGamesOverlay
                        })),
                        N = (0, c.v9)((function(n) {
                            return n.play.showExploreGamesOverlay
                        })),
                        G = (0, c.v9)((function(n) {
                            return n.play.isFullscreen
                        })),
                        M = (0, s.useRef)(null),
                        j = (0, c.I0)(),
                        V = (0, c.v9)((function(n) {
                            return n.ads.inGameAd
                        })),
                        F = l.Z.getState().play.consoleFooterRef,
                        X = ((0, x.useRouter)(), (0, s.useState)({
                            top: 0,
                            left: 0,
                            width: 0,
                            right: 0,
                            height: 0
                        })),
                        q = X[0],
                        U = X[1],
                        J = (0, c.v9)((function(n) {
                            return n.play.orientation
                        })),
                        Y = ((0, c.v9)((function(n) {
                            return n.play.isAdBlockerEnabled
                        })), (0, v.$)().t),
                        $ = (0, s.useState)(""),
                        K = $[0],
                        Q = $[1],
                        nn = (0, c.v9)((function(n) {
                            return n.gamification.gamificationActionsRef
                        }));
                    (0, s.useEffect)((function() {
                        Q(sessionStorage.getItem("isEmbeddedFrame"))
                    }), []);
                    var en = (0, s.useMemo)((function() {
                            var n, e;
                            return !C && (J !== f.cj.portrait && (null === (e = null === (n = null === p.ZP || void 0 === p.ZP ? void 0 : p.ZP.appInfo) || void 0 === n ? void 0 : n.playFeFeatures) || void 0 === e ? void 0 : e.enableTestDriveUi))
                        }), [C, J]),
                        tn = function() {
                            var n = l.Z.getState().play.videoRef;
                            setTimeout((function() {
                                if (n && n.current) {
                                    var e = n.current;
                                    U({
                                        top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().bottom,
                                        width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width,
                                        left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                                        right: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().right,
                                        height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                                    })
                                }
                            }))
                        };
                    (0, s.useEffect)((function() {
                        return (0, p.DJ)() || (tn(), window.addEventListener("resizeDone", tn)), en || P(void 0, void 0, void 0, (function() {
                                var n, e, i, t, o, d, a, r, l, s, c, u, g, h, v;
                                return S(this, (function(f) {
                                    switch (f.label) {
                                        case 0:
                                            return n = {}, A ? (n = A, [3, 3]) : [3, 1];
                                        case 1:
                                            return [4, (0, p.qt)()];
                                        case 2:
                                            n = null === (h = f.sent()) || void 0 === h ? void 0 : h.gamesList, f.label = 3;
                                        case 3:
                                            return e = n.topApps, i = void 0 === e ? [] : e, t = n.topBarApps, o = void 0 === t ? [] : t, d = n.remainingApps, a = void 0 === d ? [] : d, r = n.otherApps, l = void 0 === r ? [] : r, s = D(D(D(D([], i, !0), o, !0), a, !0), l, !0), c = null === (v = p.ZP.features) || void 0 === v ? void 0 : v.promotedGame, "2534" === p.ZP.appInfo.appId && c && c.length && (u = c[0], s.findIndex((function(n) {
                                                return n.appId === u.appId
                                            })) > -1 && o.unshift(u)), g = o.slice(0, 8), O(g), [2]
                                    }
                                }))
                            })), j({
                                type: r.Z.SET_REF,
                                payload: {
                                    consoleHeaderRef: M
                                }
                            }),
                            function() {
                                (0, p.DJ)() || window.removeEventListener("resizeDone", tn)
                            }
                    }), []);
                    return (0, k.BX)(y.h4, {
                        id: H,
                        ref: M,
                        className: _ || N ? "g-overlay" : "",
                        style: I({
                            opacity: G ? 0 : 1,
                            visibility: G ? "hidden" : "visible",
                            display: G ? "none" : "flex",
                            position: (0, p.DJ)() || V !== a.V || J === f.cj.portrait ? "relative" : "absolute",
                            top: (0, p.DJ)() || V !== a.V || J === f.cj.portrait ? "" : Math.max(q.top - q.height - ((null === (e = M.current) || void 0 === e ? void 0 : e.clientHeight) || 0), 90),
                            width: (0, p.DJ)() || V !== a.V || J === f.cj.portrait ? "" : ((null === (i = null === F || void 0 === F ? void 0 : F.current) || void 0 === i ? void 0 : i.clientWidth) || 0) + q.width,
                            left: (0, p.DJ)() || V !== a.V || J === f.cj.portrait ? "" : q.left,
                            paddingRight: "".concat(((null === (t = null === nn || void 0 === nn ? void 0 : nn.current) || void 0 === t ? void 0 : t.getBoundingClientRect().width) || 0) + 32, "px")
                        }, u),
                        children: [(0, k.tZ)(o.Z, {
                            isAppPage: R,
                            ssrOrigin: L,
                            hasTagline: !1
                        }), en ? (0, k.tZ)(y.$y, {
                            children: !K && (0, k.tZ)(w.SupportAction, {})
                        }) : (0, k.BX)(k.HY, {
                            children: [(0, k.BX)(y.Rj, {
                                style: {
                                    background: N ? g.qm.colors.ascent : ""
                                },
                                id: "ng-search-games",
                                onClick: function() {
                                    var n = !N;
                                    j({
                                        type: r.Z.MODAL_STATUS,
                                        payload: {
                                            showExploreGamesOverlay: n,
                                            showAllGamesOverlay: !n && void 0
                                        }
                                    })
                                },
                                children: [(0, k.tZ)(b.ol, {}), (0, k.tZ)(d.xv, {
                                    children: Y("searchGames")
                                })]
                            }), (0, k.tZ)(y.Nc, {
                                id: "ng-topbar-games-list",
                                children: z && z.map((function(n, e) {
                                    return (0, k.tZ)(T, {
                                        index: e,
                                        game: n
                                    })
                                }))
                            }), (0, k.tZ)(y.WJ, {
                                onClick: function() {
                                    if (W) window.location.href = (0, Z.wh)("https://now.gg");
                                    else {
                                        var n = !_;
                                        j({
                                            type: r.Z.MODAL_STATUS,
                                            payload: {
                                                showAllGamesOverlay: n,
                                                showExploreGamesOverlay: !n && void 0
                                            }
                                        })
                                    }
                                },
                                id: "ng-all-games",
                                className: _ ? "active" : "",
                                children: (0, k.tZ)(b.pL, {
                                    color: "white50"
                                })
                            }), (0, h.nI)() && (R ? (0, k.BX)(m.r, {
                                loading: null,
                                persistor: l.D,
                                children: [(0, k.tZ)(y.Kd, {}), (0, s.createPortal)((0, k.tZ)(w.ProfilesAction, {
                                    loginResolved: E
                                }), document.body)]
                            }) : !K && (0, k.BX)(k.HY, {
                                children: [(0, k.tZ)(y.Kd, {}), (0, s.createPortal)((0, k.tZ)(w.ProfilesAction, {
                                    loginResolved: E
                                }), document.body)]
                            }))]
                        })]
                    })
                }
        },
        39435: function(n, e, i) {
            i.d(e, {
                h4: function() {
                    return v
                },
                Rj: function() {
                    return f
                },
                WJ: function() {
                    return w
                },
                Nc: function() {
                    return x
                },
                r9: function() {
                    return m
                },
                $y: function() {
                    return y
                },
                Kd: function() {
                    return b
                }
            });
            var t, o, d, a, r, l, p, s = i(50445),
                c = i(99719),
                u = i(93224),
                g = i(9912),
                h = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                v = s.ZP.header(t || (t = h(["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 calc(var(--vw, 1vw));\n  z-index: 3;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(24px);\n  left: 0;\n  min-height: 64px;\n  right: 0;\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: ", ";\n  }\n"], ["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 calc(var(--vw, 1vw));\n  z-index: 3;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(24px);\n  left: 0;\n  min-height: 64px;\n  right: 0;\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: ", ";\n  }\n"])), (function(n) {
                    return n.theme.colors.ascent
                })),
                f = s.ZP.div(o || (o = h(["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  margin-right: auto;\n  margin-left: 1vw;\n\n  &:hover {\n    background: ", ";\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"], ["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  margin-right: auto;\n  margin-left: 1vw;\n\n  &:hover {\n    background: ", ";\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"])), (function(n) {
                    return n.theme.colors.white10
                })),
                w = s.ZP.div(d || (d = h(["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  border-radius: 8px;\n  border: 1px solid ", ";;\n  width: calc(var(--vw,1vw) * 3);\n  height: calc(var(--vw,1vw) * 3);\n  margin: calc(var(--vw, 1vw) * 0.4) 0;\n  align-self: center;\n\n  svg {\n    scale: 2.13;\n  }\n\n  &.active {\n    background: ", ";;\n\n    svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  &:hover {\n    background: ", ";;\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"], ["\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1.1);\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n\n  border-radius: 8px;\n  border: 1px solid ", ";;\n  width: calc(var(--vw,1vw) * 3);\n  height: calc(var(--vw,1vw) * 3);\n  margin: calc(var(--vw, 1vw) * 0.4) 0;\n  align-self: center;\n\n  svg {\n    scale: 2.13;\n  }\n\n  &.active {\n    background: ", ";;\n\n    svg {\n      transform: rotate(180deg);\n    }\n  }\n\n  &:hover {\n    background: ", ";;\n  }\n  p {\n    margin: 0;\n    font-size: calc(var(--vw, 1vw) * 0.8);\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.white10
                })),
                x = s.ZP.ul(a || (a = h(["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: calc(var(--vw, 1vw) * 0.8);\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1);\n"], ["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: calc(var(--vw, 1vw) * 0.8);\n  padding: calc(var(--vw, 1vw) * 0.4) calc(var(--vw, 1vw) * 1);\n"]))),
                m = s.ZP.li(r || (r = h(["\n  display: flex;\n  align-items: center;\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: calc(var(--vw, 1vw) * 3);\n    height: calc(var(--vw, 1vw) * 3);\n    flex: 0 0 calc(var(--vw, 1vw) * 3);\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, .50);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      width: 250%;\n      left: -75%;\n      font-size: calc(var(--vw, 1vw) * 0.8);\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid ", ";;\n      border-radius: 4px;\n      padding: 4px 6px;\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    height: 8px;\n    left: 3px;\n    right: 3px;\n    bottom: -4.53px;\n    background: ", ";\n    filter: blur(3.5px);\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: calc(var(--vw, 1vw) * 3);\n    height: calc(var(--vw, 1vw) * 3);\n    flex: 0 0 calc(var(--vw, 1vw) * 3);\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, .50);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      width: 250%;\n      left: -75%;\n      font-size: calc(var(--vw, 1vw) * 0.8);\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid ", ";;\n      border-radius: 4px;\n      padding: 4px 6px;\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    height: 8px;\n    left: 3px;\n    right: 3px;\n    bottom: -4.53px;\n    background: ", ";\n    filter: blur(3.5px);\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n  }\n"])), (function(n) {
                    return n.theme.colors.white20
                }), (function(n) {
                    return n.theme.colors.ascent
                }), g.Ji),
                y = s.ZP.div(l || (l = h(["\n  display:flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 0;\n\n  #ng-support {\n    ", "\n  }\n\n  #ng-profile {\n    ", "\n  }\n"], ["\n  display:flex;\n  align-items: center;\n  gap: 6px;\n  padding: 12px 0;\n\n  #ng-support {\n    ", "\n  }\n\n  #ng-profile {\n    ", "\n  }\n"])), (0, u.gB)(c.Z.t("helpAndSupport"), !1, !0), (0, u.gB)(c.Z.t("profile"), !1, !0)),
                b = s.ZP.div(p || (p = h(["\n  height: calc(var(--vw,1vw) * 2);\n  border-right: 1px solid ", ";\n  align-self: center;\n  margin: 0px 12px;\n"], ["\n  height: calc(var(--vw,1vw) * 2);\n  border-right: 1px solid ", ";\n  align-self: center;\n  margin: 0px 12px;\n"])), (function(n) {
                    return n.theme.colors.white20
                }))
        },
        3021: function(n, e, i) {
            i.d(e, {
                im: function() {
                    return t.Z
                }
            });
            var t = i(12731);
            i(30945)
        },
        30945: function(n, e, i) {
            i.d(e, {
                nv: function() {
                    return t.ZP
                },
                h9: function() {
                    return a
                },
                ny: function() {
                    return r
                }
            });
            var t = i(24047),
                o = i(98219),
                d = i(74348),
                a = {
                    mouseDown: d.uG,
                    mouseUp: d.vV,
                    mouseMove: d.ou,
                    mouseCancel: d.YN,
                    mouseWheel: d.NX,
                    mouseWheelNative: d._C
                },
                r = function() {
                    (0, o.mD)(), (0, t.Gn)()
                }
        },
        22572: function(n, e, i) {
            var t = i(59930),
                o = i(94564),
                d = i(66971),
                a = i(58309),
                r = i(11720),
                l = i(26793),
                p = i(25617),
                s = i(22012),
                c = i(16678),
                u = i(62825),
                g = i(89598),
                h = i(78294),
                v = i(6268),
                f = i(77691),
                w = i(88557),
                x = i(57762),
                m = i(66749),
                y = i(97997);
            e.Z = function(n) {
                var e = n.closeModal,
                    i = n.isAppPage,
                    b = n.userAuthAndProfileInfo,
                    Z = (0, l.$)().t,
                    A = (0, p.I0)(),
                    k = (0, p.v9)((function(n) {
                        return n.play.isNerdMode
                    })),
                    I = (0, p.v9)((function(n) {
                        return n.auth.isLoggedIn
                    })),
                    P = (0, r.useState)(null),
                    S = P[0],
                    D = P[1],
                    T = (0, p.v9)((function(n) {
                        return n.play.isAndroidConnected
                    })),
                    H = sessionStorage.getItem("isEmbeddedFrame"),
                    R = (0, f.tq)(),
                    L = i ? !!(null === b || void 0 === b ? void 0 : b.isLoggedIn) : I;
                (0, r.useEffect)((function() {
                    var n;
                    i ? (n = L ? null === b || void 0 === b ? void 0 : b.profileInfo : null) && D(n) : (n = L ? (0, a.et)() : null) && D(n)
                }), [i, L, S, null === b || void 0 === b ? void 0 : b.profileInfo]);
                var W = function() {
                    var n, e;
                    (0, g.L9)("LogoutClicked"), (0, h.u_)(), (0, h.Hh)(), (0, a.kS)({
                        reason: "ManualLogout",
                        url: null === (e = null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.href) || void 0 === e ? void 0 : e.split("?")[0]
                    })
                };
                return (0, y.tZ)(s.Z, {
                    overlayStyles: x.r2,
                    modalStyles: R ? x.aI : x.il,
                    children: (0, y.BX)(x.W2, {
                        children: [(0, y.BX)(x.xg, {
                            children: [(0, y.tZ)(c.Z, {
                                style: {
                                    margin: "0px"
                                },
                                themeType: "light",
                                hasTagline: !1
                            }), (0, y.tZ)(t.Z, {
                                style: {
                                    cursor: "pointer",
                                    color: "white",
                                    position: "relative",
                                    left: "8px"
                                },
                                onClick: e,
                                size: 16,
                                name: "cross-thin",
                                id: "ng-info-close"
                            })]
                        }), !(0, h.DJ)() && !H && L && S && Object.keys(S).length > 1 && (0, y.tZ)(x.LD, {
                            isMobile: R,
                            children: (0, y.BX)("div", {
                                children: [(0, y.tZ)(m.Z, {
                                    isLoggedIn: L,
                                    user: S
                                }), (0, y.BX)(x.ao, {
                                    children: [(0, y.tZ)(x.vx, {
                                        children: null === S || void 0 === S ? void 0 : S.handle
                                    }), (0, y.tZ)(x.C0, {
                                        id: "emailId",
                                        children: null === S || void 0 === S ? void 0 : S.email
                                    })]
                                }), (0, y.tZ)("div", {
                                    style: {
                                        marginLeft: "auto"
                                    },
                                    children: (0, y.tZ)(v.z, {
                                        id: "logout",
                                        variant: "primary",
                                        size: "medium",
                                        onClick: W,
                                        text: Z("logout")
                                    })
                                })]
                            })
                        }), (0, y.BX)(x.X2, {
                            children: [(0, y.tZ)(o.T6, {
                                children: (0, y.BX)(o.rU, {
                                    href: (0, w.ZP)("https://www.now.gg"),
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    white: !0,
                                    className: "link",
                                    children: [(0, y.tZ)("span", {
                                        children: Z("website")
                                    }), (0, y.tZ)(x.mo, {
                                        children: (0, y.tZ)(t.Z, {
                                            name: "union",
                                            size: 9
                                        })
                                    })]
                                })
                            }), (0, y.tZ)(o.T6, {
                                style: {
                                    marginBottom: 16,
                                    marginLeft: 15
                                },
                                children: (0, y.BX)(o.rU, {
                                    href: "https://nowgg.zendesk.com/hc/en-us",
                                    target: "_blank",
                                    rel: "noreferrer noopener",
                                    white: !0,
                                    className: "link",
                                    children: [(0, y.tZ)("span", {
                                        children: Z("faqs")
                                    }), " ", (0, y.tZ)(x.mo, {
                                        children: (0, y.tZ)(t.Z, {
                                            name: "union",
                                            size: 9
                                        })
                                    })]
                                })
                            })]
                        }), (0, y.tZ)(x.xv, {
                            children: (0, y.BX)(o.kk, {
                                style: {
                                    marginBottom: 0,
                                    color: "rgba(255, 255, 255, 0.6)"
                                },
                                children: ["".concat(Z("copyright", {
                                    year: (new Date).getFullYear()
                                }), " ").concat(Z("disclaimerSub1"), " "), (0, y.tZ)("br", {}), Z("disclaimerSub2"), (0, y.tZ)(o.rU, {
                                    style: {
                                        fontSize: 12
                                    },
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "https://now.gg/terms-and-privacy.html#terms",
                                    children: Z("termsOfUse")
                                }), " ".concat(Z("and"), " "), (0, y.tZ)(o.rU, {
                                    style: {
                                        fontSize: 12
                                    },
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "https://now.gg/terms-and-privacy.html#privacy",
                                    children: Z("privacyPolicy")
                                }), ", ".concat(Z("disclaimerSub3"), " ")]
                            })
                        }), T && (0, y.BX)(x.qp, {
                            children: [(0, y.tZ)(x.cw, {
                                onClick: function() {
                                    e(), A({
                                        type: u.Z.GET_SUPPORT
                                    })
                                },
                                children: Z("reportAProblem")
                            }), (0, y.BX)(x.xR, {
                                children: [(0, y.tZ)(o.kk, {
                                    style: {
                                        marginLeft: "auto",
                                        marginBottom: 0
                                    },
                                    children: Z("nerdMode")
                                }), (0, y.BX)(x.__, {
                                    id: "ng-nerd-mode",
                                    children: [(0, y.tZ)("input", {
                                        type: "checkbox",
                                        checked: k,
                                        onChange: function() {
                                            A({
                                                type: d.Z.START_CONNECTION,
                                                payload: {
                                                    isNerdMode: !k
                                                }
                                            })
                                        }
                                    }), (0, y.tZ)("span", {})]
                                })]
                            })]
                        })]
                    })
                })
            }
        },
        48533: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return Y
                }
            });
            var t, o, d, a, r, l, p, s, c, u, g, h, v, f, w = i(11720),
                x = i(26793),
                m = i(10020),
                y = i(89598),
                b = i(58309),
                Z = i(25617),
                A = i(14266),
                k = i(59930),
                I = i(22012),
                P = i(16678),
                S = i(91469),
                D = i(26544),
                T = i(78294),
                H = i(77691),
                R = i(94381),
                L = i(11163),
                W = i(50445),
                C = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                E = (0, W.iv)(t || (t = C(["\n  @media screen and (orientation: landscape) and (max-height: 575.98px),\n  (orientation: portrait) and (max-width: 600px) {\n    justify-content: flex-end;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    align-items: flex-end;\n  }\n"], ["\n  @media screen and (orientation: landscape) and (max-height: 575.98px),\n  (orientation: portrait) and (max-width: 600px) {\n    justify-content: flex-end;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    align-items: flex-end;\n  }\n"]))),
                B = (0, W.iv)(o || (o = C(["\n  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.64));\n  width: 100%;\n  max-width: 440px;\n  padding: 0;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    width: calc(100vw - 32px);\n\n    .content-section {\n      padding: 24px;\n    }\n  }\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    &.split {\n      height: 100%;\n      border-radius: 0;\n      max-width: 340px;\n      margin: 0;\n    }\n\n    .login-container::before {\n      border-radius: 0;\n    }\n\n    &.popup {\n      border-radius: 0;\n      max-width: 380px;\n\n      .content-section {\n        gap: 16px;\n      }\n    }\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    margin: 0 auto 16px;\n    &.rotate-modal {\n      // &.split {\n      //   transform: rotate(-90deg) translateX(calc(-100% - 16px));\n      //   width: calc(100vw - 32px);\n      //   transform-origin: top left;\n      //   padding-bottom: 8px;\n      //   margin: auto 86px;\n      // }\n    }\n\n    &.popup {\n      margin: auto;\n      .nowgg-logo, .game-logo {\n        display: none;\n      }\n    }\n  }\n"], ["\n  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.64));\n  width: 100%;\n  max-width: 440px;\n  padding: 0;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    width: calc(100vw - 32px);\n\n    .content-section {\n      padding: 24px;\n    }\n  }\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    &.split {\n      height: 100%;\n      border-radius: 0;\n      max-width: 340px;\n      margin: 0;\n    }\n\n    .login-container::before {\n      border-radius: 0;\n    }\n\n    &.popup {\n      border-radius: 0;\n      max-width: 380px;\n\n      .content-section {\n        gap: 16px;\n      }\n    }\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    margin: 0 auto 16px;\n    &.rotate-modal {\n      // &.split {\n      //   transform: rotate(-90deg) translateX(calc(-100% - 16px));\n      //   width: calc(100vw - 32px);\n      //   transform-origin: top left;\n      //   padding-bottom: 8px;\n      //   margin: auto 86px;\n      // }\n    }\n\n    &.popup {\n      margin: auto;\n      .nowgg-logo, .game-logo {\n        display: none;\n      }\n    }\n  }\n"]))),
                z = W.ZP.div(d || (d = C(["\n  position: relative;\n  height: 100px;\n  width: 100%;\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    height: 80px;\n  }\n\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"], ["\n  position: relative;\n  height: 100px;\n  width: 100%;\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    height: 80px;\n  }\n\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"]))),
                O = W.ZP.div(a || (a = C(["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 189px !important;\n    height: 48px !important;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 4px;\n    margin-top: 10px;\n    // max-width: 150px;\n  }\n  .landscape .popup & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"], ["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 189px !important;\n    height: 48px !important;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 4px;\n    margin-top: 10px;\n    // max-width: 150px;\n  }\n  .landscape .popup & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"]))),
                _ = W.ZP.div(r || (r = C(["\n  height: 100%;\n  display: flex;\n  color: ", ";\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    justify-content: space-around;\n  }\n\n  > ", ", > ", " {\n    display: none;\n  }\n\n  .landscape &.popup {\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      justify-content: center;\n    }\n  }\n\n  .landscape &.split {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      align-items: flex-end;\n      padding: 0;\n      border-radius: 0;\n      > ", " {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        display: block;\n        width: 200px;\n        text-align: left;\n      }\n      > ", " {\n        display: block;\n        position: fixed;\n        left: 20px;\n        top: 30px;\n      }\n    }\n  }\n"], ["\n  height: 100%;\n  display: flex;\n  color: ", ";\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    justify-content: space-around;\n  }\n\n  > ", ", > ", " {\n    display: none;\n  }\n\n  .landscape &.popup {\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      justify-content: center;\n    }\n  }\n\n  .landscape &.split {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      align-items: flex-end;\n      padding: 0;\n      border-radius: 0;\n      > ", " {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        display: block;\n        width: 200px;\n        text-align: left;\n      }\n      > ", " {\n        display: block;\n        position: fixed;\n        left: 20px;\n        top: 30px;\n      }\n    }\n  }\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
                }), z, O, z, O),
                N = W.ZP.div(l || (l = C(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n\n    .cross-icon {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      color: ", ";\n    }\n\n    @media screen and (orientation: landscape) and (max-height: 300px) {\n      .login-options {\n        span:nth-child(2), span:nth-child(3) {\n          margin-bottom: 8px;\n        }\n      }\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n\n    .cross-icon {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      color: ", ";\n    }\n\n    @media screen and (orientation: landscape) and (max-height: 300px) {\n      .login-options {\n        span:nth-child(2), span:nth-child(3) {\n          margin-bottom: 8px;\n        }\n      }\n    }\n"])), (function(n) {
                    return n.theme.colors.base900
                })),
                G = W.ZP.div(p || (p = C(["\n  padding: 0px 24px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: ", ";\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 15px 20px;\n  }\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    gap:2px;\n    .landscape .split {\n      padding: 0 24px;\n    }\n  }\n"], ["\n  padding: 0px 24px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: ", ";\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 15px 20px;\n  }\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    gap:2px;\n    .landscape .split {\n      padding: 0 24px;\n    }\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                })),
                M = W.ZP.div(s || (s = C(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  text-align: center;\n  color: ", ";\n  font-size: 12px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  text-align: center;\n  color: ", ";\n  font-size: 12px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    display: none;\n  }\n"])), (function(n) {
                    var e;
                    return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
                })),
                j = W.ZP.footer(c || (c = C(["\n  padding: 6px;\n  border-radius: 4px;\n  opacity: .8;\n  font-size: 12px;\n  text-align: center;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 11px;\n    padding: 4px;\n  }\n  @media screen and (orientation: landscape) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 0 4px;\n  }\n"], ["\n  padding: 6px;\n  border-radius: 4px;\n  opacity: .8;\n  font-size: 12px;\n  text-align: center;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 11px;\n    padding: 4px;\n  }\n  @media screen and (orientation: landscape) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 0 4px;\n  }\n"]))),
                V = (W.ZP.div(u || (u = C(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"]))), W.ZP.span(g || (g = C(["\n  display: flex;\n  border-radius: 50%;\n  background: white;\n  padding: 4px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.4);\n"], ["\n  display: flex;\n  border-radius: 50%;\n  background: white;\n  padding: 4px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.4);\n"]))), W.ZP.div(h || (h = C(["\n  z-index: 100;\n  padding: 12px 16px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  line-height: 22px;\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 12px;\n    padding: 4px;\n  }\n"], ["\n  z-index: 100;\n  padding: 12px 16px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  line-height: 22px;\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 12px;\n    padding: 4px;\n  }\n"])), (function(n) {
                    return n.theme.colors.white
                }), (function(n) {
                    return n.theme.colors.warning
                }))),
                F = W.ZP.div(v || (v = C(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 990;\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 24px;\n  padding-top: ", ";\n  max-width: 40%;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    display: flex;\n\n    & > span {\n      img {\n        width: 190px !important;\n        height: 48px !important;\n      }\n    }\n\n    & > div {\n      display: flex !important;\n      img {\n        width: auto;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 990;\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 24px;\n  padding-top: ", ";\n  max-width: 40%;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    display: flex;\n\n    & > span {\n      img {\n        width: 190px !important;\n        height: 48px !important;\n      }\n    }\n\n    & > div {\n      display: flex !important;\n      img {\n        width: auto;\n      }\n    }\n  }\n"])), (function(n) {
                    return n.sessionComplete ? "54px" : "24px"
                })),
                X = W.ZP.p(f || (f = C(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 18px;\n  }\n"], ["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 18px;\n  }\n"]))),
                q = i(94036),
                U = i(78064),
                J = i(97997),
                Y = function(n) {
                    var e, i = n.withBG,
                        t = (0, w.useContext)(m.x),
                        o = (0, x.$)().t,
                        d = (0, Z.I0)(),
                        a = (0, w.useState)(),
                        r = a[0],
                        l = a[1],
                        p = (0, w.useState)("Pre"),
                        s = p[0],
                        c = p[1],
                        u = (0, Z.v9)((function(n) {
                            return n.play.isAndroidConnected
                        })),
                        g = (0, Z.v9)((function(n) {
                            return n.play.sessionComplete
                        })),
                        h = (0, Z.v9)((function(n) {
                            return n.auth.loginContext
                        })),
                        v = sessionStorage.getItem("enableFreeSpin") === T.rs,
                        f = (0, L.useRouter)();
                    (0, w.useEffect)((function() {
                        var n = R.$6.logout;
                        h ? n = h : g ? n = R.$6.post : u && (n = R.$6.mid), (0, y.L9)(R.JP, {
                            loginPageContext: n
                        }), c(n), l(!(0, b._B)() || (0, T.Hy)())
                    }), []);
                    var W = function() {
                            d({
                                type: A.Z.TOGGLE_LOGIN,
                                payload: {
                                    showLogin: !0
                                }
                            }), d({
                                type: A.Z.TOGGLE_MANUAL_LOGOUT_LOGIN,
                                payload: {
                                    manualLogoutShowLogin: !1
                                }
                            }), d({
                                type: A.Z.UPDATE_LOGIN_CONTEXT,
                                payload: {
                                    loginContext: ""
                                }
                            })
                        },
                        C = "/browse" === f.pathname;
                    return (0, J.BX)(J.HY, {
                        children: [g && (0, J.tZ)(V, {
                            children: o("endLogin")
                        }), r && (0, J.BX)(F, {
                            sessionComplete: g,
                            children: [(0, J.tZ)(P.Z, {
                                themeType: "light"
                            }), (0, J.tZ)(z, {
                                children: (0, J.tZ)("img", {
                                    src: null === (e = null === t || void 0 === t ? void 0 : t.media) || void 0 === e ? void 0 : e.logo,
                                    alt: "".concat(t.appName, " ").concat(o("logo"))
                                })
                            })]
                        }), (0, J.tZ)(I.Z, {
                            className: "\n          ".concat(!u && r || g ? "split" : "popup", " ").concat(r ? "" : "rotate-modal", "\n          ").concat(C ? "browse-login" : "", "\n        "),
                            onClickOverlay: u && !g ? W : void 0,
                            overlayStyles: E,
                            modalStyles: B,
                            overlayBackgroundColor: i ? D.qm.colors.overlay : "none",
                            modalBackgroundColor: D.qm.gradients.radialDark,
                            showAvatarHeader: !(0, H.tq)(),
                            centeredLogo: !0,
                            children: (0, J.tZ)(_, {
                                children: (0, J.BX)(N, {
                                    style: {
                                        border: "0"
                                    },
                                    className: "login-container",
                                    children: [(0, H.tq)() && (0, J.tZ)(O, {
                                        className: "nowgg-logo",
                                        children: (0, J.tZ)(P.Z, {})
                                    }), (!r || C) && (0, J.tZ)(U.A3, {
                                        className: "cross-icon",
                                        onClick: W,
                                        style: {
                                            position: "absolute",
                                            right: "16px",
                                            top: "16px",
                                            color: "white"
                                        },
                                        children: (0, J.tZ)(k.Z, {
                                            name: "cross-thin",
                                            size: 16,
                                            id: "login-close-icon"
                                        })
                                    }), (0, J.BX)(G, {
                                        className: "content-section",
                                        children: [!u && T.ZP.features.requireAuth && (0, J.tZ)(X, {
                                            className: "sign-in-head",
                                            children: o("signInHead")
                                        }), u && !g && (0, J.tZ)(X, {
                                            children: h === R.$6.saveVideoToNowgg ? o("signInToShare") : o(v ? "signInForSpin" : "signInProg")
                                        }), g && (0, J.tZ)(X, {
                                            children: o("signInInactive")
                                        }), (0, J.tZ)(q.Z, {
                                            pageContext: s,
                                            showGuestBtn: r
                                        }), (0, J.tZ)(j, {
                                            children: (0, J.tZ)(S.Z, {})
                                        })]
                                    })]
                                })
                            })
                        }), !(u && !g) && (0, J.tZ)(M, {
                            children: o("rights", {
                                year: (new Date).getFullYear()
                            })
                        })]
                    })
                }
        },
        55072: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return B
                }
            });
            var t, o, d, a, r, l, p, s, c, u, g, h = i(16678),
                v = i(22012),
                f = i(94564),
                w = i(94381),
                x = i(77691),
                m = i(89598),
                y = i(1653),
                b = i(78294),
                Z = i(11720),
                A = i(26793),
                k = i(50445),
                I = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                P = (0, k.iv)(t || (t = I(["\n   max-height: 95vh;\n   width: 440px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"], ["\n   max-height: 95vh;\n   width: 440px;\n   max-width: calc(100% - 10px);\n   background: rgba(255, 255, 255, 0.1);\n   border: 1px solid rgba(255, 255, 255, 0.2);\n   backdrop-filter: blur(12px);\n   border-radius: 24px;\n"]))),
                S = k.ZP.div(o || (o = I(["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"], ["\n   position: absolute;\n   top: 16px;\n   left: 16px;\n   z-index: 999;\n"]))),
                D = k.ZP.div(a || (a = I(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .appIcon {\n        width: 140px;\n        aspect-ratio: 1;\n        margin-bottom: 24px;\n        border-radius: 8px;\n        ", "\n     }\n"], ["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    .appIcon {\n        width: 140px;\n        aspect-ratio: 1;\n        margin-bottom: 24px;\n        border-radius: 8px;\n        ", "\n     }\n"])), (function(n) {
                    return !n.isDesktop && (0, k.iv)(d || (d = I(["\n            margin-bottom: 16px;\n            width: 100px;\n            @media screen and (orientation: landscape) {\n                width: 80px;\n                margin-bottom: 8px;\n            }\n        "], ["\n            margin-bottom: 16px;\n            width: 100px;\n            @media screen and (orientation: landscape) {\n                width: 80px;\n                margin-bottom: 8px;\n            }\n        "])))
                })),
                T = k.ZP.p(l || (l = I(["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    margin-top: 24px;\n    margin-bottom: 16px;\n    text-align: center;\n    ", "\n"], ["\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 150%;\n    color: #fff;\n    margin-top: 24px;\n    margin-bottom: 16px;\n    text-align: center;\n    ", "\n"])), (function(n) {
                    return !n.isDesktop && (0, k.iv)(r || (r = I(["\n        margin-top: 16px;\n        @media screen and (orientation: landscape) {\n            margin-top: 8px;\n            margin-bottom: 8px;\n        }\n    "], ["\n        margin-top: 16px;\n        @media screen and (orientation: landscape) {\n            margin-top: 8px;\n            margin-bottom: 8px;\n        }\n    "])))
                })),
                H = k.ZP.button(p || (p = I(["\n    color: #fff;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n    background-color: #FF42A5;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 12px;\n    width: 100%;\n    display: flex;\n    border: none;\n    flex-grow: 1;\n    justify-content: center;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n"], ["\n    color: #fff;\n    cursor: pointer;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 150%;\n    background-color: #FF42A5;\n    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n    border-radius: 8px;\n    padding: 12px;\n    width: 100%;\n    display: flex;\n    border: none;\n    flex-grow: 1;\n    justify-content: center;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n"]))),
                R = k.ZP.div(s || (s = I(["\n", "\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"], ["\n", "\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n"])), (function(n) {
                    var e = n.desktopBanner;
                    return " background: url(".concat(e, ") center center / cover no-repeat rgba(0, 0, 0, 0.7); ")
                })),
                L = k.ZP.div(c || (c = I(["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   img {\n      width: 200px;\n      aspect-ratio: 1;\n      border-radius: 24px;\n   }\n"]))),
                W = k.ZP.div(u || (u = I(["\n   padding: 12px;\n   border-radius: 24px;\n   background-color: #fff;\n"], ["\n   padding: 12px;\n   border-radius: 24px;\n   background-color: #fff;\n"]))),
                C = k.ZP.p(g || (g = I(["\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n"], ["\n   font-weight: 600;\n   font-size: 12px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   margin-bottom: 12px;\n"]))),
                E = i(97997),
                B = function() {
                    var n, e, i = (0, Z.useState)(!1),
                        t = i[0],
                        o = i[1],
                        d = (b.ZP.appInfo.media || {}).desktop;
                    (0, Z.useEffect)((function() {
                        (0, m.L9)(w.S5, {
                            element: "ErrorScreen",
                            action: "Displayed",
                            group: "TryAndDownload"
                        })
                    }), []);
                    var a = !(0, x.tq)() && !(0, x.Em)() && !(0, x.zc)(),
                        r = (0, x.Ij)(),
                        l = (0, A.$)().t,
                        p = {
                            backgroundImage: "unset",
                            color: "unset",
                            margin: "0",
                            padding: a ? "32px 70px" : "24px 40px",
                            backgroundColor: "unset",
                            backdropFilter: "blur(12px)",
                            overflow: "visible"
                        },
                        s = null === (n = b.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === n ? void 0 : n.clientLink;
                    return (0, E.BX)(R, {
                        desktopBanner: null === d || void 0 === d ? void 0 : d.banner,
                        children: [(0, E.tZ)(S, {
                            className: "nowggLogo",
                            children: (0, E.tZ)(h.Z, {
                                themeType: "light",
                                hasTagline: !1
                            })
                        }), (0, E.tZ)(v.Z, {
                            modalStyles: P,
                            contentStyle: p,
                            children: (0, E.BX)(D, {
                                isDesktop: a,
                                children: [(0, E.tZ)("img", {
                                    src: b.ZP.appInfo.media.icon,
                                    alt: l("appIcon"),
                                    className: "appIcon"
                                }), (0, E.tZ)(f.Bb, {
                                    children: (0, E.tZ)("span", {
                                        style: {
                                            color: "#ffffff",
                                            display: "flex",
                                            textAlign: "center"
                                        },
                                        children: null === (e = b.ZP.appInfo) || void 0 === e ? void 0 : e.appName
                                    })
                                }), (0, E.tZ)(T, {
                                    isDesktop: a,
                                    children: l("notSupported")
                                }), !t && (0, E.tZ)(H, {
                                    onClick: function() {
                                        var n = sessionStorage.getItem("isEmbeddedFrame");
                                        a ? s && !(0, x.dl)() ? n ? window.open(s, "_parent", "noreferrer") : window.open(s, "_self", "noreferrer") : o(!0) : (0, x.Cf)(), (0, m.L9)(w.S5, {
                                            element: "ErrorScreen",
                                            action: "InstallNowClicked",
                                            group: "TryAndDownload"
                                        })
                                    },
                                    children: l("install")
                                }), t && (0, E.BX)(L, {
                                    children: [(0, E.tZ)(C, {
                                        children: l("scanPhone")
                                    }), (0, E.tZ)(W, {
                                        children: (0, E.tZ)(y.Z, {
                                            size: 176,
                                            style: {
                                                height: "176px",
                                                width: "176px"
                                            },
                                            value: "mac" === r || "ios" === r ? b.ZP.appInfo.appleAppStoreUrl : b.ZP.appInfo.googlePlayStoreUrl
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        71174: function(n, e, i) {
            i.d(e, {
                Z: function() {
                    return A
                }
            });
            var t, o, d, a, r, l = i(94564),
                p = i(66971),
                s = i(77691),
                c = i(78294),
                u = i(11720),
                g = i(26793),
                h = i(25617),
                v = i(94381),
                f = i(89598),
                w = i(50445),
                x = function(n, e) {
                    return Object.defineProperty ? Object.defineProperty(n, "raw", {
                        value: e
                    }) : n.raw = e, n
                },
                m = w.ZP.header(t || (t = x(["\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.7);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    padding: 8.5px 10px 7.5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    touch-action: none;\n    .appIcon {\n        width: 28px;\n        aspect-ratio: 1;\n        border-radius: 4px;\n        margin-right: 12px;\n    }\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background-color: rgba(102, 102, 102, 0.2);\n        pointer-events: none;\n    }\n"], ["\n    width: 100%;\n    position: relative;\n    background: rgba(0, 0, 0, 0.7);\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(12px);\n    padding: 8.5px 10px 7.5px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 1;\n    touch-action: none;\n    .appIcon {\n        width: 28px;\n        aspect-ratio: 1;\n        border-radius: 4px;\n        margin-right: 12px;\n    }\n    &:after {\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        content: '';\n        background-color: rgba(102, 102, 102, 0.2);\n        pointer-events: none;\n    }\n"]))),
                y = w.ZP.button(o || (o = x(["\n    background-color: #FF42A5;\n    color: #fff;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n   margin-left: 36px;\n   border-radius: 6px;\n   padding: 4px 12px;\n   border: none;\n   cursor: pointer;\n   text-align: center;\n"], ["\n    background-color: #FF42A5;\n    color: #fff;\n    &:hover {\n        background-color: rgba(255, 66, 165, 0.9);\n    }\n   margin-left: 36px;\n   border-radius: 6px;\n   padding: 4px 12px;\n   border: none;\n   cursor: pointer;\n   text-align: center;\n"]))),
                b = (w.ZP.p(d || (d = x(["\n   width: 461px;\n   height: 37px;\n   background: rgba(0, 0, 0, 0.7);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 8px;\n   position: fixed;\n   left: 50%;\n   transform: translateX(-50%);\n   top: 52px;\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   z-index: 1;\n   p {\n      cursor: pointer;\n      font-weight: 600;\n      color: #fff;\n      margin: 0px 0px 0px 3px;\n   }\n"], ["\n   width: 461px;\n   height: 37px;\n   background: rgba(0, 0, 0, 0.7);\n   border: 1px solid rgba(255, 255, 255, 0.1);\n   backdrop-filter: blur(12px);\n   border-radius: 8px;\n   position: fixed;\n   left: 50%;\n   transform: translateX(-50%);\n   top: 52px;\n   font-weight: 400;\n   font-size: 14px;\n   line-height: 150%;\n   color: rgba(255, 255, 255, 0.6);\n   display: flex;\n   align-items: center;\n   justify-content: center;\n   z-index: 1;\n   p {\n      cursor: pointer;\n      font-weight: 600;\n      color: #fff;\n      margin: 0px 0px 0px 3px;\n   }\n"]))), w.ZP.p(a || (a = x(["\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    margin: 0px 0px 0px 4px;\n    position: relative;\n    &:after, &:before {\n        width: 1px;\n        background-color: rgba(255, 255, 255, 0.8);\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 11px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"], ["\n    width: 16px;\n    height: 16px;\n    cursor: pointer;\n    margin: 0px 0px 0px 4px;\n    position: relative;\n    &:after, &:before {\n        width: 1px;\n        background-color: rgba(255, 255, 255, 0.8);\n        position: absolute;\n        top: 50%;\n        left:50%;\n        content: '';\n        height: 11px;\n    }\n    &:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n    }\n    &:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n    }\n"]))), w.ZP.div(r || (r = x(["\n    display: flex;\n    align-items: center;\n    margin-left: 12px;\n    span {\n        &:after {\n            content: '\u2605';\n            color: #FFC32A;\n        }\n    }\n    p {\n        margin: 0px 0px 0px 4px;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 100%;\n        color: #fff;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    margin-left: 12px;\n    span {\n        &:after {\n            content: '\u2605';\n            color: #FFC32A;\n        }\n    }\n    p {\n        margin: 0px 0px 0px 4px;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 100%;\n        color: #fff;\n    }\n"])))),
                Z = i(97997),
                A = function() {
                    var n, e, i, t = (0, g.$)().t,
                        o = (0, h.I0)(),
                        d = (0, u.useRef)(null),
                        a = !(0, s.tq)() && !(0, s.Em)() && !(0, s.zc)();
                    (0, u.useEffect)((function() {
                        o({
                            type: p.Z.SET_REF,
                            payload: {
                                tryNowRef: d
                            }
                        })
                    }), []);
                    return (0, Z.BX)(m, {
                        ref: d,
                        children: [(0, Z.tZ)("img", {
                            src: c.ZP.appInfo.media.icon,
                            alt: t("appIcon"),
                            className: "appIcon"
                        }), (0, Z.tZ)(l.QV, {
                            children: (0, Z.tZ)("span", {
                                style: {
                                    color: "#ffffff",
                                    marginRight: "12px",
                                    marginTop: "4px",
                                    display: "inline-flex"
                                },
                                children: null === (n = c.ZP.appInfo) || void 0 === n ? void 0 : n.appName
                            })
                        }), (0, Z.tZ)(l.lU, {
                            children: (0, Z.tZ)("span", {
                                style: {
                                    color: "rgba(255, 255, 255, 0.6)",
                                    marginTop: "4px",
                                    display: "inline-flex"
                                },
                                children: null === (i = null === (e = c.ZP.appInfo) || void 0 === e ? void 0 : e.appDeveloperInfo) || void 0 === i ? void 0 : i.name
                            })
                        }), (0, Z.BX)(b, {
                            children: [(0, Z.tZ)("span", {}), (0, Z.tZ)("p", {
                                children: "4.8"
                            })]
                        }), (0, Z.tZ)(y, {
                            onClick: function() {
                                var n, e = sessionStorage.getItem("isEmbeddedFrame");
                                if (a) {
                                    var i = null === (n = c.ZP.appInfo.playFeFeatures.tryAndDownload) || void 0 === n ? void 0 : n.clientLink;
                                    i && !(0, s.dl)() ? e ? window.open(i, "_parent", "noreferrer") : window.open(i, "_self", "noreferrer") : o({
                                        type: p.Z.SHOW_TRY_NOW,
                                        payload: {
                                            tryNowModal: !0
                                        }
                                    })
                                } else(0, s.Cf)();
                                (0, f.L9)(v.S5, {
                                    element: "TopBar",
                                    action: "InstallNowClicked",
                                    group: "TryAndDownload"
                                })
                            },
                            children: (0, Z.tZ)(l.QV, {
                                children: t("install")
                            })
                        })]
                    })
                }
        },
        94405: function(n, e, i) {
            var t = i(11720).default.createContext({});
            e.Z = t
        },
        10020: function(n, e, i) {
            i.d(e, {
                x: function() {
                    return t.Z
                }
            });
            var t = i(94405)
        },
        68615: function(n, e, i) {
            var t = i(11720);
            e.Z = function(n) {
                var e = (0, t.useState)(n),
                    i = e[0],
                    o = e[1];
                return (0, t.useEffect)((function() {
                    document.title = i
                }), [i]), [i, o]
            }
        },
        17174: function(n, e, i) {
            i.d(e, {
                UZ: function() {
                    return a
                },
                RT: function() {
                    return r
                },
                dI: function() {
                    return l
                }
            });
            var t = i(64857),
                o = i(78294),
                d = i(77691),
                a = function(n, e) {
                    return function(i) {
                        sessionStorage.getItem("isEmbeddedFrame") ? i({
                            type: t.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAdsFullScreen: o.ZP.embeddedFullScreenAdsEnabled,
                                midRollAds: n,
                                inGameAds: e
                            }
                        }) : !(0, d.tq)() || (0, d.Em)() || (0, d.zc)() ? (0, d.tq)() || (0, d.Em)() || (0, d.zc)() ? ((0, d.Em)() || (0, d.zc)()) && ((0, d.c6)() ? i({
                            type: t.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAdsMobile: !0,
                                inGameAds: e
                            }
                        }) : i({
                            type: t.Z.LOAD_MID_ROLL,
                            payload: {
                                inGameAds: e
                            }
                        })) : i({
                            type: t.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAds: n,
                                inGameAds: e
                            }
                        }) : (0, d.c6)() && i({
                            type: t.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAdsMobile: !0,
                                mobileExperiment: e
                            }
                        })
                    }
                },
                r = function(n) {
                    return function(e) {
                        e({
                            type: t.Z.SET_IN_GAME_AD,
                            payload: {
                                inGameAd: n
                            }
                        })
                    }
                },
                l = function(n, e, i, o) {
                    return function(d) {
                        d({
                            type: t.Z.SET_IN_GAME_AD,
                            payload: {
                                skyScrapperRef1: n,
                                skyScrapperRef2: e,
                                leaderBoardRef1: i,
                                leaderBoardRef2: o
                            }
                        })
                    }
                }
        },
        82132: function(n, e, i) {
            i.d(e, {
                dl: function() {
                    return g
                },
                oi: function() {
                    return h
                },
                zr: function() {
                    return f
                }
            });
            var t = i(50912),
                o = i(78294),
                d = i(58309),
                a = i(94381),
                r = i(77691),
                l = i(61084),
                p = i(89598),
                s = function() {
                    return (s = Object.assign || function(n) {
                        for (var e, i = 1, t = arguments.length; i < t; i++)
                            for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                        return n
                    }).apply(this, arguments)
                },
                c = function(n, e, i, t) {
                    return new(i || (i = Promise))((function(o, d) {
                        function a(n) {
                            try {
                                l(t.next(n))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function r(n) {
                            try {
                                l(t.throw(n))
                            } catch (e) {
                                d(e)
                            }
                        }

                        function l(n) {
                            var e;
                            n.done ? o(n.value) : (e = n.value, e instanceof i ? e : new i((function(n) {
                                n(e)
                            }))).then(a, r)
                        }
                        l((t = t.apply(n, e || [])).next())
                    }))
                },
                u = function(n, e) {
                    var i, t, o, d, a = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return d = {
                        next: r(0),
                        throw: r(1),
                        return: r(2)
                    }, "function" === typeof Symbol && (d[Symbol.iterator] = function() {
                        return this
                    }), d;

                    function r(d) {
                        return function(r) {
                            return function(d) {
                                if (i) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (i = 1, t && (o = 2 & d[0] ? t.return : d[0] ? t.throw || ((o = t.return) && o.call(t), 0) : t.next) && !(o = o.call(t, d[1])).done) return o;
                                    switch (t = 0, o && (d = [2 & d[0], o.value]), d[0]) {
                                        case 0:
                                        case 1:
                                            o = d;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: d[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, t = d[1], d = [0];
                                            continue;
                                        case 7:
                                            d = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === d[0] || 2 === d[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === d[0] && (!o || d[1] > o[0] && d[1] < o[3])) {
                                                a.label = d[1];
                                                break
                                            }
                                            if (6 === d[0] && a.label < o[1]) {
                                                a.label = o[1], o = d;
                                                break
                                            }
                                            if (o && a.label < o[2]) {
                                                a.label = o[2], a.ops.push(d);
                                                break
                                            }
                                            o[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    d = e.call(n, a)
                                } catch (r) {
                                    d = [6, r], t = 0
                                } finally {
                                    i = o = 0
                                }
                                if (5 & d[0]) throw d[1];
                                return {
                                    value: d[0] ? d[1] : void 0,
                                    done: !0
                                }
                            }([d, r])
                        }
                    }
                },
                g = function(n) {
                    var e, i = t.Z.getState().play.servingRegion,
                        d = t.Z.getState().ads.playtime,
                        p = "true" === sessionStorage.getItem("gdprApplies"),
                        c = o.ZP.compressedPackage,
                        u = (0, o.We)(),
                        g = u.utmCampaign,
                        h = u.utmSource,
                        v = "true" === sessionStorage.getItem(a.UD),
                        f = "now.us" === window.location.hostname,
                        w = s({
                            game: null === n || void 0 === n ? void 0 : n.appSlug,
                            genre: null === n || void 0 === n ? void 0 : n.appGenre,
                            "instance-region": i,
                            ads_project: "v3",
                            ads_site: "nowgg_proxy" === g ? "mathsspot" : "ropro" === g ? "ropro" : "fredboat" === g ? "fredboat" : "carl" === g ? "carl" : f ? "nowus" : "nowgg",
                            app_package: n.packageName.length < 40 ? n.packageName : c,
                            playtime: (d <= 15 ? d : 5 * Math.ceil(d / 5)).toString(),
                            utype: v ? "new" : "returning",
                            ads_status: "mob" === (null === (e = window.nggClientIpInfo) || void 0 === e ? void 0 : e.browserCode) ? "p" : "np",
                            ad: g,
                            inc: o.ZP.incognitoMode || l.F.UNKNOWN
                        }, (0, r.cN)());
                    if (p) {
                        var x = "true" === sessionStorage.getItem("userConsent");
                        w.cs = x ? "t" : "f"
                    }
                    return "gamepix" === h && (w.ads_campaign = "gamepix"), w
                },
                h = function() {
                    var n = {},
                        e = window.nggClientIpInfo || {},
                        i = e.ipv4,
                        t = e.ipv6;
                    i && "NA" !== i && (n.i4 = i), t && "NA" !== t && (n.i6 = t), window.tude.cmd.push((function() {
                        return c(void 0, void 0, void 0, (function() {
                            var e, i, t;
                            return u(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (e = "", (i = (0, d.et)()) && (e = JSON.parse(JSON.stringify(i)).email), !e) return [3, 4];
                                        o.label = 1;
                                    case 1:
                                        return o.trys.push([1, 3, , 4]), [4, (a = e, c(void 0, void 0, void 0, (function() {
                                            var n, e;
                                            return u(this, (function(i) {
                                                switch (i.label) {
                                                    case 0:
                                                        return n = (new TextEncoder).encode(a), [4, crypto.subtle.digest("SHA-256", n)];
                                                    case 1:
                                                        return e = i.sent(), [2, Array.from(new Uint8Array(e)).map((function(n) {
                                                            return n.toString(16).padStart(2, "0")
                                                        })).join("")]
                                                }
                                            }))
                                        })))];
                                    case 2:
                                        return e = o.sent(), t = s(s({}, n), {
                                            e: e
                                        }), window.tude.setIdProfile(s({}, t)), [3, 4];
                                    case 3:
                                        return o.sent(), [3, 4];
                                    case 4:
                                        return [2]
                                }
                                var a
                            }))
                        }))
                    }))
                },
                v = !1;

            function f(n, e) {
                v || ((0, p.L9)("PrerollEnd", {
                    endReason: n,
                    isFallback: e
                }), v = !0)
            }
        },
        56327: function(n, e) {
            e.Z = {
                src: "/play/_next/static/media/filled-star.b766385c.svg",
                height: 15,
                width: 14
            }
        }
    }
]);
//# sourceMappingURL=766-180ec31a6500e3dc.js.map