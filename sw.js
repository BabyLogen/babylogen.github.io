importScripts('workbox-sw.prod.v1.3.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/11.00130125045423028fc9.js",
    "revision": "759c39b710c7486bc82bc2474694fc56"
  },
  {
    "url": "/_nuxt/12.c52a608a3b192042b928.js",
    "revision": "995a721c7756cd8fd454016231ac08fb"
  },
  {
    "url": "/_nuxt/13.904a191404a362851a5a.js",
    "revision": "36ae81813453ee96f454e5d3cdaa09df"
  },
  {
    "url": "/_nuxt/14.6a49ee8a1361a74047a1.js",
    "revision": "98c8eb3d54731850fd852eb03dc2958c"
  },
  {
    "url": "/_nuxt/15.b7f2007958ebeaabf9ec.js",
    "revision": "1ad85313bc9755942776f0e4ff8dd783"
  },
  {
    "url": "/_nuxt/16.cc909c0f50e51eac61f5.js",
    "revision": "b4949d64b351c4a5051c4c3712980c94"
  },
  {
    "url": "/_nuxt/17.88c096282fa3e0513a16.js",
    "revision": "aae1da07c9db24d5cfc7395a9d45b765"
  },
  {
    "url": "/_nuxt/18.6c97e889c757f29285f0.js",
    "revision": "99002e1bc179cc444e1df841736bf460"
  },
  {
    "url": "/_nuxt/19.b4aff1a33fef0526e482.js",
    "revision": "58f94d5b1f8a423ee6e611419959e077"
  },
  {
    "url": "/_nuxt/app.98d808765665ff3a7e38.js",
    "revision": "ef2fb2823b0577bf0173e899d117a596"
  },
  {
    "url": "/_nuxt/common.ccb51203ff28b5b56152.js",
    "revision": "fc1ca48496deb5ed1d422b778d886a8f"
  },
  {
    "url": "/_nuxt/layouts/default.2ab9d30bf8e94517996b.js",
    "revision": "89c1504fce92ad417657836c4af9660e"
  },
  {
    "url": "/_nuxt/manifest.ae5bc121010f2ea3f9fc.js",
    "revision": "26e8682ccf6f26a4b26554475340afba"
  },
  {
    "url": "/_nuxt/pages/_page/index.f6141e3e24613bd25223.js",
    "revision": "d4d251337a93440ef988d41f1443365c"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.adcdbd1e051dae005bde.js",
    "revision": "d0dbdc27ba79fd26666e9755c126223a"
  },
  {
    "url": "/_nuxt/pages/blog/index.53f22bb5812d9ac829bf.js",
    "revision": "6fc71a982200edff164e57e0a2147a52"
  },
  {
    "url": "/_nuxt/pages/events/_event.c6ec84143580ba958406.js",
    "revision": "c6f04f4e5157b543330c874db66f616c"
  },
  {
    "url": "/_nuxt/pages/events/index.53e54b4fe60016bd2937.js",
    "revision": "43ff4661c99c5ac1be242449d4f7559b"
  },
  {
    "url": "/_nuxt/pages/index.97e3869c17672fd2b052.js",
    "revision": "6ba6212734636a44ddd4bf9bac12dd8f"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.c046f83b5676d118a497.js",
    "revision": "1eb677f7573ccc9c654463f52b412922"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.9f5fb7a2f283b8bef92d.js",
    "revision": "d09bd097137dd13c7b8efc68685e0771"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
