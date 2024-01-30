self.__BUILD_MANIFEST = function(s, e, c, a, t, n, d, i, u, o, b, f, h) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: d,
                destination: d
            }, {
                source: i,
                destination: i
            }, {
                source: "/play/404",
                destination: "/play/notFoundScreen"
            }, {
                source: "/play/:path*",
                destination: "/play"
            }],
            fallback: []
        },
        "/": [c, a, u, "static/css/1634d5343d0c5502.css", "static/chunks/54-bf5058d8faf73c95.js", o, s, e, t, n, b, f, "static/chunks/233-8695b1563d7992f8.js", h, "static/chunks/pages/index-ab780d3f6360e2b9.js"],
        "/_error": [c, a, s, e, t, "static/chunks/pages/_error-abd39e97abf0222c.js"],
        "/apps/[dev-slug]/[id]/[pub-slug]": [c, a, u, o, s, e, t, n, b, h, "static/chunks/61-ff73f918db4bd543.js", "static/chunks/pages/apps/[dev-slug]/[id]/[pub-slug]-e7b0c8fd745139c3.js"],
        "/browse": [c, a, s, e, t, "static/chunks/pages/browse-893bc663f8d002ea.js"],
        "/notFoundScreen": [c, a, s, e, t, "static/chunks/pages/notFoundScreen-98d2b4c8b070c1b0.js"],
        "/videos/watch/[videoId]": [s, e, n, f, "static/chunks/pages/videos/watch/[videoId]-e7ed69405d70b737.js"],
        "/videos/[channelHandle]": [s, n, "static/chunks/pages/videos/[channelHandle]-f4f67207e887af77.js"],
        sortedPages: ["/", "/_app", "/_error", "/apps/[dev-slug]/[id]/[pub-slug]", "/browse", "/notFoundScreen", "/videos/watch/[videoId]", "/videos/[channelHandle]"]
    }
}("static/chunks/806-c2bb3f53ef7afa7a.js", "static/chunks/677-1390f35c8e1b82c6.js", "static/css/3d0ae4c613f4697f.css", "static/chunks/51-344fa64e82f901b5.js", "static/chunks/166-6380aa1e6d9876f7.js", "static/chunks/742-8b9049011b2dbba4.js", "/play/browse", "/play/videos/:path*", "static/chunks/349-2e7da233b6389678.js", "static/chunks/796-d77bd788935e9ac5.js", "static/chunks/359-b333ee4224d0e9ab.js", "static/chunks/235-40c4ef3713948674.js", "static/chunks/766-180ec31a6500e3dc.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();