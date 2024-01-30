! function() {
    "use strict";
    var e = {
            895: function() {
                try {
                    self["workbox:cacheable-response:6.5.3"] && _()
                } catch (e) {}
            },
            913: function() {
                try {
                    self["workbox:core:6.5.3"] && _()
                } catch (e) {}
            },
            550: function() {
                try {
                    self["workbox:expiration:6.5.3"] && _()
                } catch (e) {}
            },
            977: function() {
                try {
                    self["workbox:precaching:6.5.3"] && _()
                } catch (e) {}
            },
            80: function() {
                try {
                    self["workbox:routing:6.5.3"] && _()
                } catch (e) {}
            },
            873: function() {
                try {
                    self["workbox:strategies:6.5.3"] && _()
                } catch (e) {}
            }
        },
        t = {};

    function s(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var r = t[n] = {
                exports: {}
            },
            i = !0;
        try {
            e[n](r, r.exports, s), i = !1
        } finally {
            i && delete t[n]
        }
        return r.exports
    }! function() {
        s(913);
        const e = (e, ...t) => {
            let s = e;
            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`), s
        };
        class t extends Error {
            constructor(t, s) {
                super(e(t, s)), this.name = t, this.details = s
            }
        }
        const n = {
                googleAnalytics: "googleAnalytics",
                precache: "precache-v2",
                prefix: "workbox",
                runtime: "runtime",
                suffix: "undefined" !== typeof registration ? registration.scope : ""
            },
            a = e => [n.prefix, e, n.suffix].filter((e => e && e.length > 0)).join("-"),
            r = e => {
                (e => {
                    for (const t of Object.keys(n)) e(t)
                })((t => {
                    "string" === typeof e[t] && (n[t] = e[t])
                }))
            },
            i = e => e || a(n.precache),
            c = e => e || a(n.runtime);
        s(977);
        let o;
        async function h(e, s) {
            let n = null;
            if (e.url) {
                n = new URL(e.url).origin
            }
            if (n !== self.location.origin) throw new t("cross-origin-copy-response", {
                origin: n
            });
            const a = e.clone(),
                r = {
                    headers: new Headers(a.headers),
                    status: a.status,
                    statusText: a.statusText
                },
                i = s ? s(r) : r,
                c = function() {
                    if (void 0 === o) {
                        const t = new Response("");
                        if ("body" in t) try {
                            new Response(t.body), o = !0
                        } catch (e) {
                            o = !1
                        }
                        o = !1
                    }
                    return o
                }() ? a.body : await a.blob();
            return new Response(c, i)
        }
        const l = e => new URL(String(e), location.href).href.replace(new RegExp(`^${location.origin}`), "");

        function u(e, t) {
            const s = new URL(e);
            for (const n of t) s.searchParams.delete(n);
            return s.href
        }
        class d {
            constructor() {
                this.promise = new Promise(((e, t) => {
                    this.resolve = e, this.reject = t
                }))
            }
        }
        const f = new Set;
        s(873);

        function p(e) {
            return "string" === typeof e ? new Request(e) : e
        }
        class g {
            constructor(e, t) {
                this._cacheKeys = {}, Object.assign(this, t), this.event = t.event, this._strategy = e, this._handlerDeferred = new d, this._extendLifetimePromises = [], this._plugins = [...e.plugins], this._pluginStateMap = new Map;
                for (const s of this._plugins) this._pluginStateMap.set(s, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            async fetch(e) {
                const {
                    event: s
                } = this;
                let n = p(e);
                if ("navigate" === n.mode && s instanceof FetchEvent && s.preloadResponse) {
                    const e = await s.preloadResponse;
                    if (e) return e
                }
                const a = this.hasCallback("fetchDidFail") ? n.clone() : null;
                try {
                    for (const e of this.iterateCallbacks("requestWillFetch")) n = await e({
                        request: n.clone(),
                        event: s
                    })
                } catch (i) {
                    if (i instanceof Error) throw new t("plugin-error-request-will-fetch", {
                        thrownErrorMessage: i.message
                    })
                }
                const r = n.clone();
                try {
                    let e;
                    e = await fetch(n, "navigate" === n.mode ? void 0 : this._strategy.fetchOptions);
                    for (const t of this.iterateCallbacks("fetchDidSucceed")) e = await t({
                        event: s,
                        request: r,
                        response: e
                    });
                    return e
                } catch (c) {
                    throw a && await this.runCallbacks("fetchDidFail", {
                        error: c,
                        event: s,
                        originalRequest: a.clone(),
                        request: r.clone()
                    }), c
                }
            }
            async fetchAndCachePut(e) {
                const t = await this.fetch(e),
                    s = t.clone();
                return this.waitUntil(this.cachePut(e, s)), t
            }
            async cacheMatch(e) {
                const t = p(e);
                let s;
                const {
                    cacheName: n,
                    matchOptions: a
                } = this._strategy, r = await this.getCacheKey(t, "read"), i = Object.assign(Object.assign({}, a), {
                    cacheName: n
                });
                s = await caches.match(r, i);
                for (const c of this.iterateCallbacks("cachedResponseWillBeUsed")) s = await c({
                    cacheName: n,
                    matchOptions: a,
                    cachedResponse: s,
                    request: r,
                    event: this.event
                }) || void 0;
                return s
            }
            async cachePut(e, s) {
                const n = p(e);
                var a;
                await (a = 0, new Promise((e => setTimeout(e, a))));
                const r = await this.getCacheKey(n, "write");
                if (!s) throw new t("cache-put-with-no-response", {
                    url: l(r.url)
                });
                const i = await this._ensureResponseSafeToCache(s);
                if (!i) return !1;
                const {
                    cacheName: c,
                    matchOptions: o
                } = this._strategy, h = await self.caches.open(c), d = this.hasCallback("cacheDidUpdate"), g = d ? await async function(e, t, s, n) {
                    const a = u(t.url, s);
                    if (t.url === a) return e.match(t, n);
                    const r = Object.assign(Object.assign({}, n), {
                            ignoreSearch: !0
                        }),
                        i = await e.keys(t, r);
                    for (const c of i)
                        if (a === u(c.url, s)) return e.match(c, n)
                }(h, r.clone(), ["__WB_REVISION__"], o) : null;
                try {
                    await h.put(r, d ? i.clone() : i)
                } catch (m) {
                    if (m instanceof Error) throw "QuotaExceededError" === m.name && await async function() {
                        for (const e of f) await e()
                    }(), m
                }
                for (const t of this.iterateCallbacks("cacheDidUpdate")) await t({
                    cacheName: c,
                    oldResponse: g,
                    newResponse: i.clone(),
                    request: r,
                    event: this.event
                });
                return !0
            }
            async getCacheKey(e, t) {
                const s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let n = e;
                    for (const e of this.iterateCallbacks("cacheKeyWillBeUsed")) n = p(await e({
                        mode: t,
                        request: n,
                        event: this.event,
                        params: this.params
                    }));
                    this._cacheKeys[s] = n
                }
                return this._cacheKeys[s]
            }
            hasCallback(e) {
                for (const t of this._strategy.plugins)
                    if (e in t) return !0;
                return !1
            }
            async runCallbacks(e, t) {
                for (const s of this.iterateCallbacks(e)) await s(t)
            }* iterateCallbacks(e) {
                for (const t of this._strategy.plugins)
                    if ("function" === typeof t[e]) {
                        const s = this._pluginStateMap.get(t),
                            n = n => {
                                const a = Object.assign(Object.assign({}, n), {
                                    state: s
                                });
                                return t[e](a)
                            };
                        yield n
                    }
            }
            waitUntil(e) {
                return this._extendLifetimePromises.push(e), e
            }
            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift();) await e
            }
            destroy() {
                this._handlerDeferred.resolve(null)
            }
            async _ensureResponseSafeToCache(e) {
                let t = e,
                    s = !1;
                for (const n of this.iterateCallbacks("cacheWillUpdate"))
                    if (t = await n({
                            request: this.request,
                            response: t,
                            event: this.event
                        }) || void 0, s = !0, !t) break;
                return s || t && 200 !== t.status && (t = void 0), t
            }
        }
        class m {
            constructor(e = {}) {
                this.cacheName = c(e.cacheName), this.plugins = e.plugins || [], this.fetchOptions = e.fetchOptions, this.matchOptions = e.matchOptions
            }
            handle(e) {
                const [t] = this.handleAll(e);
                return t
            }
            handleAll(e) {
                e instanceof FetchEvent && (e = {
                    event: e,
                    request: e.request
                });
                const t = e.event,
                    s = "string" === typeof e.request ? new Request(e.request) : e.request,
                    n = "params" in e ? e.params : void 0,
                    a = new g(this, {
                        event: t,
                        request: s,
                        params: n
                    }),
                    r = this._getResponse(a, s, t);
                return [r, this._awaitComplete(r, a, s, t)]
            }
            async _getResponse(e, s, n) {
                let a;
                await e.runCallbacks("handlerWillStart", {
                    event: n,
                    request: s
                });
                try {
                    if (a = await this._handle(s, e), !a || "error" === a.type) throw new t("no-response", {
                        url: s.url
                    })
                } catch (r) {
                    if (r instanceof Error)
                        for (const t of e.iterateCallbacks("handlerDidError"))
                            if (a = await t({
                                    error: r,
                                    event: n,
                                    request: s
                                }), a) break;
                    if (!a) throw r
                }
                for (const t of e.iterateCallbacks("handlerWillRespond")) a = await t({
                    event: n,
                    request: s,
                    response: a
                });
                return a
            }
            async _awaitComplete(e, t, s, n) {
                let a, r;
                try {
                    a = await e
                } catch (r) {}
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: n,
                        request: s,
                        response: a
                    }), await t.doneWaiting()
                } catch (i) {
                    i instanceof Error && (r = i)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                        event: n,
                        request: s,
                        response: a,
                        error: r
                    }), t.destroy(), r) throw r
            }
        }
        class w extends m {
            constructor(e = {}) {
                e.cacheName = i(e.cacheName), super(e), this._fallbackToNetwork = !1 !== e.fallbackToNetwork, this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(e, t) {
                const s = await t.cacheMatch(e);
                return s || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
            }
            async _handleFetch(e, s) {
                let n;
                const a = s.params || {};
                if (!this._fallbackToNetwork) throw new t("missing-precache-entry", {
                    cacheName: this.cacheName,
                    url: e.url
                }); {
                    0;
                    const t = a.integrity,
                        r = e.integrity,
                        i = !r || r === t;
                    if (n = await s.fetch(new Request(e, {
                            integrity: "no-cors" !== e.mode ? r || t : void 0
                        })), t && i && "no-cors" !== e.mode) {
                        this._useDefaultCacheabilityPluginIfNeeded();
                        await s.cachePut(e, n.clone());
                        0
                    }
                }
                return n
            }
            async _handleInstall(e, s) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const n = await s.fetch(e);
                if (!(await s.cachePut(e, n.clone()))) throw new t("bad-precaching-response", {
                    url: e.url,
                    status: n.status
                });
                return n
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let e = null,
                    t = 0;
                for (const [s, n] of this.plugins.entries()) n !== w.copyRedirectedCacheableResponsesPlugin && (n === w.defaultPrecacheCacheabilityPlugin && (e = s), n.cacheWillUpdate && t++);
                0 === t ? this.plugins.push(w.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
            }
        }
        w.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => !e || e.status >= 400 ? null : e
        }, w.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async ({
                response: e
            }) => e.redirected ? await h(e) : e
        };
        s(80);
        const _ = e => e && "object" === typeof e ? e : {
            handle: e
        };
        class y {
            constructor(e, t, s = "GET") {
                this.handler = _(t), this.match = e, this.method = s
            }
            setCatchHandler(e) {
                this.catchHandler = _(e)
            }
        }
        class b extends y {
            constructor(e, t, s) {
                super((({
                    url: t
                }) => {
                    const s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index)) return s.slice(1)
                }), t, s)
            }
        }
        class v {
            constructor() {
                this._routes = new Map, this._defaultHandlerMap = new Map
            }
            get routes() {
                return this._routes
            }
            addFetchListener() {
                self.addEventListener("fetch", (e => {
                    const {
                        request: t
                    } = e, s = this.handleRequest({
                        request: t,
                        event: e
                    });
                    s && e.respondWith(s)
                }))
            }
            addCacheListener() {
                self.addEventListener("message", (e => {
                    if (e.data && "CACHE_URLS" === e.data.type) {
                        const {
                            payload: t
                        } = e.data;
                        0;
                        const s = Promise.all(t.urlsToCache.map((t => {
                            "string" === typeof t && (t = [t]);
                            const s = new Request(...t);
                            return this.handleRequest({
                                request: s,
                                event: e
                            })
                        })));
                        e.waitUntil(s), e.ports && e.ports[0] && s.then((() => e.ports[0].postMessage(!0)))
                    }
                }))
            }
            handleRequest({
                request: e,
                event: t
            }) {
                const s = new URL(e.url, location.href);
                if (!s.protocol.startsWith("http")) return void 0;
                const n = s.origin === location.origin,
                    {
                        params: a,
                        route: r
                    } = this.findMatchingRoute({
                        event: t,
                        request: e,
                        sameOrigin: n,
                        url: s
                    });
                let i = r && r.handler;
                const c = e.method;
                if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)), !i) return void 0;
                let o;
                try {
                    o = i.handle({
                        url: s,
                        request: e,
                        event: t,
                        params: a
                    })
                } catch (l) {
                    o = Promise.reject(l)
                }
                const h = r && r.catchHandler;
                return o instanceof Promise && (this._catchHandler || h) && (o = o.catch((async n => {
                    if (h) {
                        0;
                        try {
                            return await h.handle({
                                url: s,
                                request: e,
                                event: t,
                                params: a
                            })
                        } catch (r) {
                            r instanceof Error && (n = r)
                        }
                    }
                    if (this._catchHandler) return this._catchHandler.handle({
                        url: s,
                        request: e,
                        event: t
                    });
                    throw n
                }))), o
            }
            findMatchingRoute({
                url: e,
                sameOrigin: t,
                request: s,
                event: n
            }) {
                const a = this._routes.get(s.method) || [];
                for (const r of a) {
                    let a;
                    const i = r.match({
                        url: e,
                        sameOrigin: t,
                        request: s,
                        event: n
                    });
                    if (i) return a = i, (Array.isArray(a) && 0 === a.length || i.constructor === Object && 0 === Object.keys(i).length || "boolean" === typeof i) && (a = void 0), {
                        route: r,
                        params: a
                    }
                }
                return {}
            }
            setDefaultHandler(e, t = "GET") {
                this._defaultHandlerMap.set(t, _(e))
            }
            setCatchHandler(e) {
                this._catchHandler = _(e)
            }
            registerRoute(e) {
                this._routes.has(e.method) || this._routes.set(e.method, []), this._routes.get(e.method).push(e)
            }
            unregisterRoute(e) {
                if (!this._routes.has(e.method)) throw new t("unregister-route-but-not-found-with-method", {
                    method: e.method
                });
                const s = this._routes.get(e.method).indexOf(e);
                if (!(s > -1)) throw new t("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(s, 1)
            }
        }
        let x;
        const E = () => (x || (x = new v, x.addFetchListener(), x.addCacheListener()), x);

        function R(e, s, n) {
            let a;
            if ("string" === typeof e) {
                const t = new URL(e, location.href);
                0;
                a = new y((({
                    url: e
                }) => e.href === t.href), s, n)
            } else if (e instanceof RegExp) a = new b(e, s, n);
            else if ("function" === typeof e) a = new y(e, s, n);
            else {
                if (!(e instanceof y)) throw new t("unsupported-route-type", {
                    moduleName: "workbox-routing",
                    funcName: "registerRoute",
                    paramName: "capture"
                });
                a = e
            }
            return E().registerRoute(a), a
        }

        function D(e) {
            e.then((() => {}))
        }
        class C extends m {
            async _handle(e, s) {
                let n, a = await s.cacheMatch(e);
                if (a) 0;
                else {
                    0;
                    try {
                        a = await s.fetchAndCachePut(e)
                    } catch (r) {
                        r instanceof Error && (n = r)
                    }
                    0
                }
                if (!a) throw new t("no-response", {
                    url: e.url,
                    error: n
                });
                return a
            }
        }
        const k = {
            cacheWillUpdate: async ({
                response: e
            }) => 200 === e.status || 0 === e.status ? e : null
        };
        class q extends m {
            constructor(e = {}) {
                super(e), this.plugins.some((e => "cacheWillUpdate" in e)) || this.plugins.unshift(k)
            }
            async _handle(e, s) {
                const n = s.fetchAndCachePut(e).catch((() => {}));
                s.waitUntil(n);
                let a, r = await s.cacheMatch(e);
                if (r) 0;
                else {
                    0;
                    try {
                        r = await n
                    } catch (i) {
                        i instanceof Error && (a = i)
                    }
                }
                if (!r) throw new t("no-response", {
                    url: e.url,
                    error: a
                });
                return r
            }
        }
        s(895);
        class N {
            constructor(e = {}) {
                this._statuses = e.statuses, this._headers = e.headers
            }
            isResponseCacheable(e) {
                let t = !0;
                return this._statuses && (t = this._statuses.includes(e.status)), this._headers && t && (t = Object.keys(this._headers).some((t => e.headers.get(t) === this._headers[t]))), t
            }
        }
        let O, S;
        const L = new WeakMap,
            P = new WeakMap,
            A = new WeakMap,
            I = new WeakMap,
            M = new WeakMap;
        let T = {
            get(e, t, s) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t) return P.get(e);
                    if ("objectStoreNames" === t) return e.objectStoreNames || A.get(e);
                    if ("store" === t) return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
                }
                return B(e[t])
            },
            set: (e, t, s) => (e[t] = s, !0),
            has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };

        function U(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (S || (S = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(W(this), t), B(L.get(this))
            } : function(...t) {
                return B(e.apply(W(this), t))
            } : function(t, ...s) {
                const n = e.call(W(this), t, ...s);
                return A.set(n, t.sort ? t.sort() : [t]), B(n)
            }
        }

        function j(e) {
            return "function" === typeof e ? U(e) : (e instanceof IDBTransaction && function(e) {
                if (P.has(e)) return;
                const t = new Promise(((t, s) => {
                    const n = () => {
                            e.removeEventListener("complete", a), e.removeEventListener("error", r), e.removeEventListener("abort", r)
                        },
                        a = () => {
                            t(), n()
                        },
                        r = () => {
                            s(e.error || new DOMException("AbortError", "AbortError")), n()
                        };
                    e.addEventListener("complete", a), e.addEventListener("error", r), e.addEventListener("abort", r)
                }));
                P.set(e, t)
            }(e), t = e, (O || (O = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, T) : e);
            var t
        }

        function B(e) {
            if (e instanceof IDBRequest) return function(e) {
                const t = new Promise(((t, s) => {
                    const n = () => {
                            e.removeEventListener("success", a), e.removeEventListener("error", r)
                        },
                        a = () => {
                            t(B(e.result)), n()
                        },
                        r = () => {
                            s(e.error), n()
                        };
                    e.addEventListener("success", a), e.addEventListener("error", r)
                }));
                return t.then((t => {
                    t instanceof IDBCursor && L.set(t, e)
                })).catch((() => {})), M.set(t, e), t
            }(e);
            if (I.has(e)) return I.get(e);
            const t = j(e);
            return t !== e && (I.set(e, t), M.set(t, e)), t
        }
        const W = e => M.get(e);
        const H = ["get", "getKey", "getAll", "getAllKeys", "count"],
            F = ["put", "add", "delete", "clear"],
            K = new Map;

        function V(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t) return;
            if (K.get(t)) return K.get(t);
            const s = t.replace(/FromIndex$/, ""),
                n = t !== s,
                a = F.includes(s);
            if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !a && !H.includes(s)) return;
            const r = async function(e, ...t) {
                const r = this.transaction(e, a ? "readwrite" : "readonly");
                let i = r.store;
                return n && (i = i.index(t.shift())), (await Promise.all([i[s](...t), a && r.done]))[0]
            };
            return K.set(t, r), r
        }
        T = (e => ({ ...e,
            get: (t, s, n) => V(t, s) || e.get(t, s, n),
            has: (t, s) => !!V(t, s) || e.has(t, s)
        }))(T);
        s(550);
        const $ = "cache-entries",
            G = e => {
                const t = new URL(e, location.href);
                return t.hash = "", t.href
            };
        class Q {
            constructor(e) {
                this._db = null, this._cacheName = e
            }
            _upgradeDb(e) {
                const t = e.createObjectStore($, {
                    keyPath: "id"
                });
                t.createIndex("cacheName", "cacheName", {
                    unique: !1
                }), t.createIndex("timestamp", "timestamp", {
                    unique: !1
                })
            }
            _upgradeDbAndDeleteOldDbs(e) {
                this._upgradeDb(e), this._cacheName && function(e, {
                    blocked: t
                } = {}) {
                    const s = indexedDB.deleteDatabase(e);
                    t && s.addEventListener("blocked", (e => t(e.oldVersion, e))), B(s).then((() => {}))
                }(this._cacheName)
            }
            async setTimestamp(e, t) {
                const s = {
                        url: e = G(e),
                        timestamp: t,
                        cacheName: this._cacheName,
                        id: this._getId(e)
                    },
                    n = (await this.getDb()).transaction($, "readwrite", {
                        durability: "relaxed"
                    });
                await n.store.put(s), await n.done
            }
            async getTimestamp(e) {
                const t = await this.getDb(),
                    s = await t.get($, this._getId(e));
                return null === s || void 0 === s ? void 0 : s.timestamp
            }
            async expireEntries(e, t) {
                const s = await this.getDb();
                let n = await s.transaction($).store.index("timestamp").openCursor(null, "prev");
                const a = [];
                let r = 0;
                for (; n;) {
                    const s = n.value;
                    s.cacheName === this._cacheName && (e && s.timestamp < e || t && r >= t ? a.push(n.value) : r++), n = await n.continue()
                }
                const i = [];
                for (const c of a) await s.delete($, c.id), i.push(c.url);
                return i
            }
            _getId(e) {
                return this._cacheName + "|" + G(e)
            }
            async getDb() {
                return this._db || (this._db = await
                    function(e, t, {
                        blocked: s,
                        upgrade: n,
                        blocking: a,
                        terminated: r
                    } = {}) {
                        const i = indexedDB.open(e, t),
                            c = B(i);
                        return n && i.addEventListener("upgradeneeded", (e => {
                            n(B(i.result), e.oldVersion, e.newVersion, B(i.transaction), e)
                        })), s && i.addEventListener("blocked", (e => s(e.oldVersion, e.newVersion, e))), c.then((e => {
                            r && e.addEventListener("close", (() => r())), a && e.addEventListener("versionchange", (e => a(e.oldVersion, e.newVersion, e)))
                        })).catch((() => {})), c
                    }("workbox-expiration", 1, {
                        upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                    })), this._db
            }
        }
        class J {
            constructor(e, t = {}) {
                this._isRunning = !1, this._rerunRequested = !1, this._maxEntries = t.maxEntries, this._maxAgeSeconds = t.maxAgeSeconds, this._matchOptions = t.matchOptions, this._cacheName = e, this._timestampModel = new Q(e)
            }
            async expireEntries() {
                if (this._isRunning) return void(this._rerunRequested = !0);
                this._isRunning = !0;
                const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0,
                    t = await this._timestampModel.expireEntries(e, this._maxEntries),
                    s = await self.caches.open(this._cacheName);
                for (const n of t) await s.delete(n, this._matchOptions);
                this._isRunning = !1, this._rerunRequested && (this._rerunRequested = !1, D(this.expireEntries()))
            }
            async updateTimestamp(e) {
                await this._timestampModel.setTimestamp(e, Date.now())
            }
            async isURLExpired(e) {
                if (this._maxAgeSeconds) {
                    const t = await this._timestampModel.getTimestamp(e),
                        s = Date.now() - 1e3 * this._maxAgeSeconds;
                    return void 0 === t || t < s
                }
                return !1
            }
            async delete() {
                this._rerunRequested = !1, await this._timestampModel.expireEntries(1 / 0)
            }
        }
        class z {
            constructor(e = {}) {
                this.cachedResponseWillBeUsed = async ({
                    event: e,
                    request: t,
                    cacheName: s,
                    cachedResponse: n
                }) => {
                    if (!n) return null;
                    const a = this._isResponseDateFresh(n),
                        r = this._getCacheExpiration(s);
                    D(r.expireEntries());
                    const i = r.updateTimestamp(t.url);
                    if (e) try {
                        e.waitUntil(i)
                    } catch (c) {
                        0
                    }
                    return a ? n : null
                }, this.cacheDidUpdate = async ({
                    cacheName: e,
                    request: t
                }) => {
                    const s = this._getCacheExpiration(e);
                    await s.updateTimestamp(t.url), await s.expireEntries()
                }, this._config = e, this._maxAgeSeconds = e.maxAgeSeconds, this._cacheExpirations = new Map, e.purgeOnQuotaError && function(e) {
                    f.add(e)
                }((() => this.deleteCacheAndMetadata()))
            }
            _getCacheExpiration(e) {
                if (e === c()) throw new t("expire-custom-caches-only");
                let s = this._cacheExpirations.get(e);
                return s || (s = new J(e, this._config), this._cacheExpirations.set(e, s)), s
            }
            _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds) return !0;
                const t = this._getDateHeaderTimestamp(e);
                if (null === t) return !0;
                return t >= Date.now() - 1e3 * this._maxAgeSeconds
            }
            _getDateHeaderTimestamp(e) {
                if (!e.headers.has("date")) return null;
                const t = e.headers.get("date"),
                    s = new Date(t).getTime();
                return isNaN(s) ? null : s
            }
            async deleteCacheAndMetadata() {
                for (const [e, t] of this._cacheExpirations) await self.caches.delete(e), await t.delete();
                this._cacheExpirations = new Map
            }
        }
        var X, Y = {
            media: !0,
            "start-url": !0,
            "now-gg-precache": !0
        };
        r({
            prefix: "now-gg",
            suffix: "",
            precache: "precache",
            runtime: "runtime",
            googleAnalytics: "analytics"
        }), self.__WB_DISABLE_DEV_LOGS = !0, skipWaiting(), self.addEventListener("activate", (() => self.clients.claim())), self.addEventListener("activate", (e => {
            const t = i();
            e.waitUntil((async (e, t = "-precache-") => {
                const s = (await self.caches.keys()).filter((s => s.includes(t) && s.includes(self.registration.scope) && s !== e));
                return await Promise.all(s.map((e => self.caches.delete(e)))), s
            })(t).then((e => {})))
        })), R((function(e) {
            return "https://fonts.googleapis.com" === e.url.origin
        }), new q({
            cacheName: "google-fonts-stylesheets"
        })), R((function(e) {
            return "https://fonts.gstatic.com" === e.url.origin
        }), new C({
            cacheName: "google-fonts-webfonts",
            plugins: [new class {
                constructor(e) {
                    this.cacheWillUpdate = async ({
                        response: e
                    }) => this._cacheableResponse.isResponseCacheable(e) ? e : null, this._cacheableResponse = new N(e)
                }
            }({
                statuses: [0, 200]
            }), new z({
                maxAgeSeconds: 31536e3,
                maxEntries: 30
            })]
        })), R(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new q({
            cacheName: "static-image-assets",
            plugins: [new z({
                maxEntries: 64,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"), R(/\.(?:js)$/i, new q({
            cacheName: "static-js-assets",
            plugins: [new z({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"), R(/\.(?:css|less)$/i, new q({
            cacheName: "static-style-assets",
            plugins: [new z({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"), self.addEventListener("install", (function(e) {
            e && e.waitUntil && e.waitUntil(caches.keys().then((function(e) {
                return Promise.all(e.filter((function(e) {
                    return Y[e]
                })).map((function(e) {
                    return caches.delete(e)
                })))
            })))
        })), X = function(e) {
            var t = e.url;
            try {
                return (new C).handle({
                    request: new Request(t)
                })
            } catch (s) {}
        }, E().setCatchHandler(X);
        [{
            'revision': '136da563960a61ca872f8ab465c6c14c',
            'url': '/play/_next/build-manifest.json'
        }, {
            'revision': '95b9c9be21041996457d2063f44d017b',
            'url': '/play/_next/react-loadable-manifest.json'
        }, {
            'revision': '4f5ca87a6870c96ad6fb0f65adfdac9b',
            'url': '/play/_next/server/middleware-manifest.json'
        }, {
            'revision': '5a4cb7f527967e39',
            'url': '/play/_next/static/chunks/166-5a4cb7f527967e39.js'
        }, {
            'revision': 'f40b68a6ad4063ae',
            'url': '/play/_next/static/chunks/233-f40b68a6ad4063ae.js'
        }, {
            'revision': '40c4ef3713948674',
            'url': '/play/_next/static/chunks/235-40c4ef3713948674.js'
        }, {
            'revision': '7931fe54ffd43001',
            'url': '/play/_next/static/chunks/342.7931fe54ffd43001.js'
        }, {
            'revision': '2e7da233b6389678',
            'url': '/play/_next/static/chunks/349-2e7da233b6389678.js'
        }, {
            'revision': 'de5fcf22cc61966f',
            'url': '/play/_next/static/chunks/359-de5fcf22cc61966f.js'
        }, {
            'revision': '2dda2fe11aed132c',
            'url': '/play/_next/static/chunks/47.2dda2fe11aed132c.js'
        }, {
            'revision': '344fa64e82f901b5',
            'url': '/play/_next/static/chunks/51-344fa64e82f901b5.js'
        }, {
            'revision': 'bf5058d8faf73c95',
            'url': '/play/_next/static/chunks/54-bf5058d8faf73c95.js'
        }, {
            'revision': 'fcddf4194c247c99',
            'url': '/play/_next/static/chunks/608.fcddf4194c247c99.js'
        }, {
            'revision': 'ff73f918db4bd543',
            'url': '/play/_next/static/chunks/61-ff73f918db4bd543.js'
        }, {
            'revision': '41a8f8a5046980e2',
            'url': '/play/_next/static/chunks/651.41a8f8a5046980e2.js'
        }, {
            'revision': '1390f35c8e1b82c6',
            'url': '/play/_next/static/chunks/677-1390f35c8e1b82c6.js'
        }, {
            'revision': '8b9049011b2dbba4',
            'url': '/play/_next/static/chunks/742-8b9049011b2dbba4.js'
        }, {
            'revision': '78b34a6e5fca2da9',
            'url': '/play/_next/static/chunks/761.78b34a6e5fca2da9.js'
        }, {
            'revision': '180ec31a6500e3dc',
            'url': '/play/_next/static/chunks/766-180ec31a6500e3dc.js'
        }, {
            'revision': 'd77bd788935e9ac5',
            'url': '/play/_next/static/chunks/796-d77bd788935e9ac5.js'
        }, {
            'revision': 'a7e5ed7591092f2e',
            'url': '/play/_next/static/chunks/800.a7e5ed7591092f2e.js'
        }, {
            'revision': '75f4970ef1cd3005',
            'url': '/play/_next/static/chunks/806-75f4970ef1cd3005.js'
        }, {
            'revision': 'e82076b1483191ea',
            'url': '/play/_next/static/chunks/976.e82076b1483191ea.js'
        }, {
            'revision': '0e1b29c5be962d52',
            'url': '/play/_next/static/chunks/framework-0e1b29c5be962d52.js'
        }, {
            'revision': 'd59f0ad61824b1ab',
            'url': '/play/_next/static/chunks/main-d59f0ad61824b1ab.js'
        }, {
            'revision': '9b3b2831f0aab201',
            'url': '/play/_next/static/chunks/pages/_app-9b3b2831f0aab201.js'
        }, {
            'revision': 'abd39e97abf0222c',
            'url': '/play/_next/static/chunks/pages/_error-abd39e97abf0222c.js'
        }, {
            'revision': '06c438686641483c',
            'url': '/play/_next/static/chunks/pages/apps/%5Bdev-slug%5D/%5Bid%5D/%5Bpub-slug%5D-06c438686641483c.js'
        }, {
            'revision': '893bc663f8d002ea',
            'url': '/play/_next/static/chunks/pages/browse-893bc663f8d002ea.js'
        }, {
            'revision': 'ab780d3f6360e2b9',
            'url': '/play/_next/static/chunks/pages/index-ab780d3f6360e2b9.js'
        }, {
            'revision': '98d2b4c8b070c1b0',
            'url': '/play/_next/static/chunks/pages/notFoundScreen-98d2b4c8b070c1b0.js'
        }, {
            'revision': 'f4f67207e887af77',
            'url': '/play/_next/static/chunks/pages/videos/%5BchannelHandle%5D-f4f67207e887af77.js'
        }, {
            'revision': '81759751b676591c',
            'url': '/play/_next/static/chunks/pages/videos/watch/%5BvideoId%5D-81759751b676591c.js'
        }, {
            'revision': '99442aec5788bccac9b2f0ead2afdd6b',
            'url': '/play/_next/static/chunks/polyfills-5cd94c89d3acac5f.js'
        }, {
            'revision': '2f7fa2757c111590',
            'url': '/play/_next/static/chunks/webpack-2f7fa2757c111590.js'
        }, {
            'revision': '1634d5343d0c5502',
            'url': '/play/_next/static/css/1634d5343d0c5502.css'
        }, {
            'revision': '3d0ae4c613f4697f',
            'url': '/play/_next/static/css/3d0ae4c613f4697f.css'
        }, {
            'revision': 'e22fd47d094e53b1286f59c7ae4bb038',
            'url': '/play/_next/static/media/BrowserChrome.17f67783.svg'
        }, {
            'revision': '44773bb5a292b20f71e3a9f4bc19c0c2',
            'url': '/play/_next/static/media/BrowserEdge.925a6e2f.svg'
        }, {
            'revision': '484dad2771e9f3d0692173004841af71',
            'url': '/play/_next/static/media/BrowserSafari.87ac5020.svg'
        }, {
            'revision': '47f6559792b8a1ada0d511f866256619',
            'url': '/play/_next/static/media/Copy.beaded6b.svg'
        }, {
            'revision': '252b7ff6114562ca54ae3cf7468d50c0',
            'url': '/play/_next/static/media/GamepadDpadDown.9f027fed.png'
        }, {
            'revision': 'ef477ff45d73102792fac8950c450dcc',
            'url': '/play/_next/static/media/GamepadDpadLeft.6c56681a.png'
        }, {
            'revision': '0d00719869b67c4c169a92be4dae84dd',
            'url': '/play/_next/static/media/GamepadDpadRight.691db1eb.png'
        }, {
            'revision': '0b8b3eb813faddf4dfdf8f92b5793a70',
            'url': '/play/_next/static/media/GamepadDpadUp.f38ef235.png'
        }, {
            'revision': 'fe028e9da73c8cd91401f5e1aea81eef',
            'url': '/play/_next/static/media/MouseLButton.8f31ba3d.png'
        }, {
            'revision': 'af813224560754ee54b8816578b04997',
            'url': '/play/_next/static/media/MouseMButton.be91e84d.png'
        }, {
            'revision': '0079e0a4515feebcd786661e14ab41e9',
            'url': '/play/_next/static/media/MouseRButton.d74dac8c.png'
        }, {
            'revision': 'bbe46f4999498bdc709d7a690d6fe11d',
            'url': '/play/_next/static/media/ScriptEditor.7ad774e3.svg'
        }, {
            'revision': 'f5bd6c30478d3d91b604f296ee613b35',
            'url': '/play/_next/static/media/account-exists.8b2ddecd.svg'
        }, {
            'revision': 'af3ef47a4961648d8365eef134090a7a',
            'url': '/play/_next/static/media/alert.bfbcd90b.svg'
        }, {
            'revision': '676cc48f384d4067fc3bcdc46f88c5ac',
            'url': '/play/_next/static/media/aptoidIcon.2e8228d0.svg'
        }, {
            'revision': 'c9928e22d36c65e131c2718c888bac1c',
            'url': '/play/_next/static/media/arrow-right.156f9ff2.svg'
        }, {
            'revision': '914c397735a22b4097a2e4d30aee7464',
            'url': '/play/_next/static/media/backArrowIcon.e4ed78b4.svg'
        }, {
            'revision': 'c916b5f8384313c702030dad1df97b6f',
            'url': '/play/_next/static/media/bell.19de3e5b.svg'
        }, {
            'revision': 'd70dc221498e2d0835db3b272f19b348',
            'url': '/play/_next/static/media/bloxd-error.c62649cf.jpg'
        }, {
            'revision': '9ce00687c15629d7fdb531ba4d621118',
            'url': '/play/_next/static/media/bulb-yellow.b465976e.svg'
        }, {
            'revision': '372793d95c596d2fbe099c7d0849f0dd',
            'url': '/play/_next/static/media/bulbIcon.c6ab3e9f.svg'
        }, {
            'revision': '50be3b3a9759b2c39211ef24e12c8825',
            'url': '/play/_next/static/media/button-loader.4167e949.svg'
        }, {
            'revision': 'f66656a1fb567b98cf7ac4f6d16553d1',
            'url': '/play/_next/static/media/cameraBlock.1ce4badf.svg'
        }, {
            'revision': 'b6dd1ff3a48ad3377f9272a97df9b0ed',
            'url': '/play/_next/static/media/close-icon.bbd54abd.svg'
        }, {
            'revision': '32c0dd3ea85691a3108eb5547b71878b',
            'url': '/play/_next/static/media/close.16e94527.svg'
        }, {
            'revision': 'bf2d48f1afcd5ce5991c0fd184f42b93',
            'url': '/play/_next/static/media/cloud-phone-landscape.c5def59c.png'
        }, {
            'revision': '580557f424ebe1afcc3aa839cc9a1603',
            'url': '/play/_next/static/media/cloud-phone-portrait.9e66752e.png'
        }, {
            'revision': '8e528632955ff5202638c8bb6570cedf',
            'url': '/play/_next/static/media/cloudy.ef2ef64d.svg'
        }, {
            'revision': '41d872d55869206b2ea8d99b3b985394',
            'url': '/play/_next/static/media/default-profile.af9e1b7d.svg'
        }, {
            'revision': '1badc5e8ff94b0a831e25413a6140471',
            'url': '/play/_next/static/media/delete.9154f996.svg'
        }, {
            'revision': 'a1ccf3266421829a95d5f302bd8be7b6',
            'url': '/play/_next/static/media/discord.308beb79.svg'
        }, {
            'revision': '6b01ef2c81e5479f7ba3ad023071ae22',
            'url': '/play/_next/static/media/discord.9b1f269d.svg'
        }, {
            'revision': '732207e1c9bd02cc8e9fd506f2d29b16',
            'url': '/play/_next/static/media/dollar.77f6adad.svg'
        }, {
            'revision': '75a18e36afe2e23dbac7b85dcade8cff',
            'url': '/play/_next/static/media/download.7afc2051.svg'
        }, {
            'revision': '0895d721aecec8515c76524825e6c941',
            'url': '/play/_next/static/media/download.d629056e.svg'
        }, {
            'revision': 'a60b977635f1684878382d9789f56555',
            'url': '/play/_next/static/media/edit-white.35ac48b4.svg'
        }, {
            'revision': '25c8c1bd58cd220e1fd917f1fcbeeb20',
            'url': '/play/_next/static/media/edit.a61656bd.svg'
        }, {
            'revision': 'f82648373c8963ab4ae906bf8afac01e',
            'url': '/play/_next/static/media/error-logo.0a27f02b.svg'
        }, {
            'revision': 'd76b62b628cd359db178d5dfc2d3f110',
            'url': '/play/_next/static/media/facebook.76e2ef04.svg'
        }, {
            'revision': '18babe04ac3d04665df782101fae6a53',
            'url': '/play/_next/static/media/filled-star.b766385c.svg'
        }, {
            'revision': 'a9734ec84501cac36dea026bfc2e000e',
            'url': '/play/_next/static/media/gambling-chip.30064988.svg'
        }, {
            'revision': 'dea79a99ebd4e6749aff6deee1d3906f',
            'url': '/play/_next/static/media/gambling-coin.b07c4539.svg'
        }, {
            'revision': '007558fcf5958dfa577670c777d0243d',
            'url': '/play/_next/static/media/game-bag.c1e4342d.svg'
        }, {
            'revision': 'db084b7b91ff68852b639c25cce54871',
            'url': '/play/_next/static/media/gem1.6888250b.svg'
        }, {
            'revision': '7f78be2cf65ac84876e9177c29b70051',
            'url': '/play/_next/static/media/gem2.40ab99bf.svg'
        }, {
            'revision': '21f761acf517c1928d07357c5adc2bc1',
            'url': '/play/_next/static/media/gift-box.9e5a21a5.svg'
        }, {
            'revision': '3125c004e0f2149ec57ebb53e7f0cca5',
            'url': '/play/_next/static/media/gift-card-bg1.eb187c88.jpg'
        }, {
            'revision': 'b85a18e998ba571657fef9b66c1c3b11',
            'url': '/play/_next/static/media/gift-card-bg2.53262ce5.jpg'
        }, {
            'revision': '65acf1e40a034312e1eb4f3923216d52',
            'url': '/play/_next/static/media/gift-card-error-bg.3dbc08fa.jpg'
        }, {
            'revision': 'c1188436a648820b4235dbef6ffb97f6',
            'url': '/play/_next/static/media/gold-coin.4f4c0791.svg'
        }, {
            'revision': '2355417e0adf5987b7568e961fdd063b',
            'url': '/play/_next/static/media/google.ad9f69b8.svg'
        }, {
            'revision': 'ecab1ebbed62d805785203cd67834947',
            'url': '/play/_next/static/media/heart.5499afe3.svg'
        }, {
            'revision': 'cd705efd615ed71dc96a3d5815a3376e',
            'url': '/play/_next/static/media/help.5d35d39c.svg'
        }, {
            'revision': '5be20e6cfc3cba30e756ba0c212946e4',
            'url': '/play/_next/static/media/hue.e6540d39.png'
        }, {
            'revision': '2d59622d2c28d9bbd7081e48f5a1f115',
            'url': '/play/_next/static/media/idleScreenLogo.26cffb49.png'
        }, {
            'revision': '2350576c395139f3c84c14c419ac8922',
            'url': '/play/_next/static/media/info-icon.c014906a.svg'
        }, {
            'revision': '32edda83a61d47cd37c3d552b9032f9e',
            'url': '/play/_next/static/media/jackpot_title.04d0cfb0.svg'
        }, {
            'revision': 'ec57cfc1659a7592f04c8df67cba0965',
            'url': '/play/_next/static/media/leaderboard-cup.20bae4fd.svg'
        }, {
            'revision': 'c18d41a693edfc483aedace39526b872',
            'url': '/play/_next/static/media/leaderboard.bd6c1332.svg'
        }, {
            'revision': 'b0cbe63fcdeb1609824936e96ff1a60b',
            'url': '/play/_next/static/media/lock-filled.5a2e104a.svg'
        }, {
            'revision': 'cc1b68a1a62dccd68620dbe63b815465',
            'url': '/play/_next/static/media/lock.3d40d416.svg'
        }, {
            'revision': '08427a27447fcdb33e32dc371b89c4d7',
            'url': '/play/_next/static/media/logo-art-min.d2b58742.svg'
        }, {
            'revision': 'aaa47965568144049d925b45dcd34051',
            'url': '/play/_next/static/media/logo-art.5722dca5.svg'
        }, {
            'revision': '979eb50a8f8f865f4daec3ff1ed57e64',
            'url': '/play/_next/static/media/logoIcon.c5c2b984.svg'
        }, {
            'revision': '34f6feac423dc0086145af4897286111',
            'url': '/play/_next/static/media/logout.bcc56170.svg'
        }, {
            'revision': 'fa142de705ee67d5cfaf7b13f09ef706',
            'url': '/play/_next/static/media/lose-reward.7289a6ea.svg'
        }, {
            'revision': '3356e2276d724263369cf2b60ab002bd',
            'url': '/play/_next/static/media/maintenance.d334ac09.svg'
        }, {
            'revision': '9570e5116be63eddf256044c6165b29a',
            'url': '/play/_next/static/media/meter-compact-bg.97e400da.svg'
        }, {
            'revision': '4b584282e463a8ef83215f95b7cf246c',
            'url': '/play/_next/static/media/meter-error-bg.fd0b26c3.svg'
        }, {
            'revision': 'e79c820f7a41815100f4e567df2423a4',
            'url': '/play/_next/static/media/meter-success-bg.19af1de9.svg'
        }, {
            'revision': '7ae3c945b581970cd87d49c1cce5cf72',
            'url': '/play/_next/static/media/micBlock.6173cc2a.svg'
        }, {
            'revision': '8bb60d2cc0c30ae09cbab4de5e815416',
            'url': '/play/_next/static/media/micBlocked.f838d6ff.svg'
        }, {
            'revision': 'c7ce6c82ef8070613e037f04c91786f9',
            'url': '/play/_next/static/media/micMute.81551a0f.svg'
        }, {
            'revision': '506c369806bb528bd93229402d8a5b4d',
            'url': '/play/_next/static/media/micUnmute.e4e62bb7.svg'
        }, {
            'revision': '0caa250543269f23c3719c86cdb6a300',
            'url': '/play/_next/static/media/micWarning.fd3a8271.svg'
        }, {
            'revision': '2c2c449668cbe1db3b64b6cf0ce523b7',
            'url': '/play/_next/static/media/minimize.88be5bab.svg'
        }, {
            'revision': '5a5ad34b0f87c3e638497350808773a2',
            'url': '/play/_next/static/media/muted.cc92657a.svg'
        }, {
            'revision': 'b62fe81f1cf00f3772fba4bd428447a9',
            'url': '/play/_next/static/media/no-ads.da3e4483.png'
        }, {
            'revision': 'aecb82b57d49f509966fdd29347101fd',
            'url': '/play/_next/static/media/play-time.f80859eb.svg'
        }, {
            'revision': '16a67762eb53a895d64763edf6d34078',
            'url': '/play/_next/static/media/played-games.3c8915d7.svg'
        }, {
            'revision': '6b035a3da04b5a4df00a15a4434690c5',
            'url': '/play/_next/static/media/plus.95fd59e4.svg'
        }, {
            'revision': 'b74fc19e83d9f45d0de2189d9bb1e752',
            'url': '/play/_next/static/media/pokelabo-bg.9f8d2fdd.png'
        }, {
            'revision': '64b6b023bb077a78b12c4eaae537208a',
            'url': '/play/_next/static/media/pokelabo-loader.115722d8.png'
        }, {
            'revision': '780daa4e9db8ff88943570ccff0e134b',
            'url': '/play/_next/static/media/profile-controls-bg.e750a7f8.svg'
        }, {
            'revision': '0e90e57d012f9369664938dbac974ad5',
            'url': '/play/_next/static/media/proxyLogo.1825607a.svg'
        }, {
            'revision': '5fef488abc0814f7d06d2adcb9befec2',
            'url': '/play/_next/static/media/recents.97c17e89.svg'
        }, {
            'revision': '2df4053670597a459561d807050e868c',
            'url': '/play/_next/static/media/recorderImg.822cd89f.svg'
        }, {
            'revision': 'd02a387061f3675082f63949fc213ded',
            'url': '/play/_next/static/media/recordingBlink.84be0f58.svg'
        }, {
            'revision': 'd43f2ef4152683bc6e9ed85ae894b70f',
            'url': '/play/_next/static/media/reload.5da61a46.png'
        }, {
            'revision': '90f1be2f98a75348abe9e70353adc69f',
            'url': '/play/_next/static/media/robux-coin-shadow.3dd0b674.svg'
        }, {
            'revision': 'ecde3cfb4701247ac535c5d7b914733c',
            'url': '/play/_next/static/media/robux-coin.85fea872.svg'
        }, {
            'revision': '796046619634b83254f5b7a059a80c77',
            'url': '/play/_next/static/media/robux-coin.b55c8ccb.svg'
        }, {
            'revision': '2e0606e3c80ad25f5299b08a1f6dcc9b',
            'url': '/play/_next/static/media/robux-dollars.3f76bf4e.svg'
        }, {
            'revision': '923be88eda708e61c1f8c365b649dee5',
            'url': '/play/_next/static/media/robux-jackpot-title.fa9b37cd.svg'
        }, {
            'revision': 'd81a16c872e16d7c3701b7e8e282251a',
            'url': '/play/_next/static/media/robux-no.0aea8634.svg'
        }, {
            'revision': '80ca9aecfaf370adc95e410623b20d82',
            'url': '/play/_next/static/media/robux-sad.ccae6838.svg'
        }, {
            'revision': '2ec3b788c7e8ac12174680dc023616ea',
            'url': '/play/_next/static/media/robux-star-coin.749b5eac.svg'
        }, {
            'revision': '67f3f774a2c12bdc475c1a6a2c8aa81c',
            'url': '/play/_next/static/media/robux-warn.c88be150.svg'
        }, {
            'revision': '4283bf92c0e0be8d08b6fb941eedae26',
            'url': '/play/_next/static/media/round-loader.ec0f091e.svg'
        }, {
            'revision': 'ef96d279241d22ac781a65a2736606bb',
            'url': '/play/_next/static/media/save.6a7e2a8b.svg'
        }, {
            'revision': '70d0bc8c7bc26752387c671a88f3faac',
            'url': '/play/_next/static/media/scroll.cd1d6361.svg'
        }, {
            'revision': 'd8cbb89170428d9bafcbc5d594d26087',
            'url': '/play/_next/static/media/secretPassage.56f8c667.jpg'
        }, {
            'revision': '0290bfc41018ab2dd661326266039cb5',
            'url': '/play/_next/static/media/secretPassageImage.ebf63dee.svg'
        }, {
            'revision': 'd8770ca331ae9d83050bf04a8b05024d',
            'url': '/play/_next/static/media/secure-notification-bg.55642608.svg'
        }, {
            'revision': 'cc3c2e2ce34293e32b2cbdcdccfff9c0',
            'url': '/play/_next/static/media/secure-shield.cd1f691a.png'
        }, {
            'revision': 'ab70de986986bd558bcf4167414db394',
            'url': '/play/_next/static/media/selector.4ef27b8a.svg'
        }, {
            'revision': '5f48e5865ab77bce1128a13ed44ff56d',
            'url': '/play/_next/static/media/shuffle.b7667e55.svg'
        }, {
            'revision': 'faf47d5b5d2f01ae8c75fcec8e87bbc7',
            'url': '/play/_next/static/media/soft-keyboard.bf96f83c.svg'
        }, {
            'revision': '7222a953bace920846730c6da2ff8fce',
            'url': '/play/_next/static/media/sparkling-stars.a3790ffe.gif'
        }, {
            'revision': '0d068264d76669a6afc385a1a1292ffd',
            'url': '/play/_next/static/media/star.7cc20cdf.svg'
        }, {
            'revision': '20b81c09569d8c7111002a6b4398639f',
            'url': '/play/_next/static/media/stats-bg-left.290018ff.svg'
        }, {
            'revision': '22ef07201e08442f1074eb24d35ac4d1',
            'url': '/play/_next/static/media/stats-bg.e68cb41d.svg'
        }, {
            'revision': '4e5e6c349917eefc48dc8474b599799f',
            'url': '/play/_next/static/media/stopRecording.26f4a0e8.svg'
        }, {
            'revision': '0d531dc2fe705074ea8939cbc1bab428',
            'url': '/play/_next/static/media/striked-robux.2407cfd8.svg'
        }, {
            'revision': 'ac319e8883071f55e095f6fac85e0366',
            'url': '/play/_next/static/media/tick.f57f2ee3.svg'
        }, {
            'revision': '94e1c5b9a07882aa10e502e0a301127d',
            'url': '/play/_next/static/media/tiktok.4866f7c7.svg'
        }, {
            'revision': '0c750084b11b796196d8bf495b92eadd',
            'url': '/play/_next/static/media/timer.30a49d06.svg'
        }, {
            'revision': '7f4adc03518658d8ea09c8287815955f',
            'url': '/play/_next/static/media/total-playtime.688cd24a.svg'
        }, {
            'revision': '065014e9ad97c663d81ad09b4cb69aba',
            'url': '/play/_next/static/media/tryNow.c14372c1.svg'
        }, {
            'revision': '66f61a335c6cf207567f2c006b1095c1',
            'url': '/play/_next/static/media/tryNowAscent.969f3040.svg'
        }, {
            'revision': 'fe0010ed409c8344298b51be3c5bd491',
            'url': '/play/_next/static/media/unmuted.cb7db131.svg'
        }, {
            'revision': 'c759cf50ab3545b556ec2363f9cdb93e',
            'url': '/play/_next/static/media/video-folder.cf40a9ae.svg'
        }, {
            'revision': '96101903d7575dadc850ea482062d5de',
            'url': '/play/_next/static/media/warning.53226107.svg'
        }, {
            'revision': '7686121d5e9bac6bc7d63f4b83c15366',
            'url': '/play/_next/static/media/watermark.1a9cd7c7.svg'
        }, {
            'revision': '709e26c29319d049458740ccc00d39b7',
            'url': '/play/_next/static/media/youtube.4281af53.svg'
        }, {
            'revision': '73ef93b714a7e975d6dafd7883ba10bc',
            'url': '/play/_next/static/media/youtube.9b67e93b.svg'
        }, {
            'revision': '9e0f6d86785fedb55935dbd9849a084b',
            'url': '/play/_next/static/media/yt.4deb7209.svg'
        }, {
            'revision': '113169f2d27093d5b64cf02cb64d4306',
            'url': '/play/_next/static/pIQFqANLTVazjxwrCnpjo/_buildManifest.js'
        }, {
            'revision': 'fb2823d66b3e778e04a3f681d0d2fb19',
            'url': '/play/_next/static/pIQFqANLTVazjxwrCnpjo/_middlewareManifest.js'
        }, {
            'revision': 'b6652df95db52feb4daf4eca35380933',
            'url': '/play/_next/static/pIQFqANLTVazjxwrCnpjo/_ssgManifest.js'
        }, {
            'revision': '73d7c7acbaf7cbd9b26e914973603199',
            'url': '/play/favicon.ico'
        }, {
            'revision': '2ea7cc0bc7ea338399e58e60393e872c',
            'url': '/play/imap.js'
        }, {
            'revision': 'a2195ceefbbd9212ef30feaa852e5063',
            'url': '/play/imap.wasm'
        }, {
            'revision': 'd2d04a1790e082e6177a6adb58578f2e',
            'url': '/play/imap.worker.js'
        }, {
            'revision': '27f3b21b5f53de2c37ed7b81c916a4a2',
            'url': '/play/videos/now-pass.mp4'
        }]
    }()
}();