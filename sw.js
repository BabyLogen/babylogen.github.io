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
    "url": "/_nuxt/app.178cfa3abfd9b0230c34.js",
    "revision": "8505e111c7bf48aee4ffab4532077ed6"
  },
  {
    "url": "/_nuxt/common.f7e01b424815852b53e2.js",
    "revision": "8651dbca0aace4077a4f9157ca081ca7"
  },
  {
    "url": "/_nuxt/layouts/default.769d1869e1d8f4758c02.js",
    "revision": "adc487a397cbe33aee2dd94ae560f2cb"
  },
  {
    "url": "/_nuxt/manifest.49d7b1f7e8b060721898.js",
    "revision": "75061de6cf529b9027d0529fe18b7e1f"
  },
  {
    "url": "/_nuxt/pages/_page/index.c81424f24224fd3a2541.js",
    "revision": "ca34d9ace219549d4da9dade4bc0b646"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.5a34491256ebdf69499b.js",
    "revision": "a7b503002895c88470cd89c2fb17bc5b"
  },
  {
    "url": "/_nuxt/pages/blog/index.1eb22c10bce62a847331.js",
    "revision": "37738734369b210ad3a59347d151d294"
  },
  {
    "url": "/_nuxt/pages/events/_event.02b54eabf9fab76db05c.js",
    "revision": "15eed7ae6ecf1e6b1e73717c56bbab45"
  },
  {
    "url": "/_nuxt/pages/events/index.7f2c8730f5e968d1b1d3.js",
    "revision": "d29e42a2882f6c8728a5223b0661181b"
  },
  {
    "url": "/_nuxt/pages/index.e68ebb1c3798a279fbb9.js",
    "revision": "c36d66a05699a523b4f95a3017c4d42a"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.cf08397bcbfdc399f479.js",
    "revision": "e999c2adf8e5067b8910151acbd668f2"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.b9f292f29311fb195731.js",
    "revision": "debe22d8728daaf58b17730a9af1c582"
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
