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
    "url": "/_nuxt/app.a6a35f235c1fcd50fad4.js",
    "revision": "fdb297d253efa5e8cbfddb92f74cc605"
  },
  {
    "url": "/_nuxt/common.51cab404e03a0f40520f.js",
    "revision": "0bf182d9e43cdd60fd3a4003ee08802c"
  },
  {
    "url": "/_nuxt/layouts/default.769d1869e1d8f4758c02.js",
    "revision": "adc487a397cbe33aee2dd94ae560f2cb"
  },
  {
    "url": "/_nuxt/manifest.9f55d08a62da97abbce8.js",
    "revision": "ca7fb6fa44756b85637a37ef46c61b81"
  },
  {
    "url": "/_nuxt/pages/_page/index.fe8cb841c8d5a55442cb.js",
    "revision": "003529c564c03f0580905441426cbcec"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.b1d0b04e8250b4207e70.js",
    "revision": "71bd8a0ea4dad349fccac3a61a40296b"
  },
  {
    "url": "/_nuxt/pages/blog/index.89667c7e58c00228d5d3.js",
    "revision": "a2bd142332f3c6c2371a7d4edf6895a0"
  },
  {
    "url": "/_nuxt/pages/events/_event.ca8d184324b78b08e459.js",
    "revision": "9576bfd92edef911c224f90ab59252c6"
  },
  {
    "url": "/_nuxt/pages/events/index.791591a76cdb86c37df6.js",
    "revision": "a2df2c582a73462dbbf72d998d07a006"
  },
  {
    "url": "/_nuxt/pages/index.b3962dd4415cdd43eef9.js",
    "revision": "39fb34c6ad252f74c4b3c7dd113f96ec"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.b297cb560df8eef1fbb4.js",
    "revision": "cf691c28fdc65ec7c69569ca4b5b2206"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.86eec01f14a1ada02159.js",
    "revision": "e82345222367a9c36a3924e9aac9741a"
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
