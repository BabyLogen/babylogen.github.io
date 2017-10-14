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
    "url": "/_nuxt/app.2a434b288503c9cbfd3b.js",
    "revision": "7df2ff484c9413816389d3e3c909e536"
  },
  {
    "url": "/_nuxt/common.51cab404e03a0f40520f.js",
    "revision": "0bf182d9e43cdd60fd3a4003ee08802c"
  },
  {
    "url": "/_nuxt/layouts/default.40d074fdb0f45596de26.js",
    "revision": "15b0f2e50a8d2c0d97433bc4e6e16567"
  },
  {
    "url": "/_nuxt/manifest.7374d4ed8a8e04da0073.js",
    "revision": "036fcb6d0b9658e770c56c0ed01488b2"
  },
  {
    "url": "/_nuxt/pages/_page/index.b5c57f765a2b1b570e36.js",
    "revision": "a75a35fa1bc515983cb767105583939c"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.3fdafc96f64dca9ba197.js",
    "revision": "cc2e25850c45adcb7ab48bb750ffd6aa"
  },
  {
    "url": "/_nuxt/pages/blog/index.c668f8f0cbc3b06f5a9e.js",
    "revision": "8680c43a9733bf0ee9b985c516e9a7e4"
  },
  {
    "url": "/_nuxt/pages/events/_event.2f520362f8aabfa21016.js",
    "revision": "f4d587149bd37255a9573d4d89ed359f"
  },
  {
    "url": "/_nuxt/pages/events/index.85b2197e0a1cf12c9b6b.js",
    "revision": "b62e043ba380ab0d59a00088ba25e457"
  },
  {
    "url": "/_nuxt/pages/index.f1c7113d691abc52af11.js",
    "revision": "6222a8f36ca7ed155313a6d95a86bf42"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.5904d2b1ca9fd5d62e35.js",
    "revision": "eb0807425fb6b2f193051a2d38b60612"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.2c653f8101a2ec3d89d3.js",
    "revision": "afed1f3db2d70ba88756af6103c659fd"
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
