importScripts('workbox-sw.prod.v1.0.1.js');

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
    "url": "/_nuxt/0.nuxt.bundle.0c10714dfb369e1a18a6.js",
    "revision": "b2880104dc6c562b2fcd757b7860825e"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.b940ce339c8a78746faf.js",
    "revision": "1991e24375813c66eee1153f2ba518f7"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.1348374a5f876e7d5944.js",
    "revision": "314590cd15344e16954cb0fe6ebff058"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f6c89f5d1e3e1173f2f7.js",
    "revision": "2c24c4c19c3f75d10b56a64380d27754"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.4213ae5b4f279e742ab8.js",
    "revision": "a30765498fb0c8956b4e4d35946f017f"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3029ae3d26098603e78c.js",
    "revision": "2a4b690ce1265c8f89ee293a77c02522"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.25f0b2b4474fa2c6b390.js",
    "revision": "bfa9817e7d69e2a70bbb6da367a0a317"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.61d24ce9e9102e218517.js",
    "revision": "e626387ea11e0b07c4c13fd4427e26d6"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "453f8321b8aae2b676d03c6f7fca4e4d"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.142161f2979a1d130b06.js",
    "revision": "48d31e0bfadc7595031758a6657daa47"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.5e6bc92fecd09c2c148a.js",
    "revision": "ab3989d5f40445f86cb5ef53a19509f8"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "5328a7a1d74e71eb4932f76f9c589ef7"
  },
  {
    "url": "/_nuxt/vendor.bundle.de834bbab10eb66eaa58.js",
    "revision": "7b35f40f10b971cdce63b008a189d92d"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
