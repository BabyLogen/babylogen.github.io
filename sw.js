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
    "url": "/_nuxt/0.nuxt.bundle.b648902dd041a49243a9.js",
    "revision": "8f273d8980cfa06d6da8ff6af6e0f96a"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.c1d5d4a5535b55fc238d.js",
    "revision": "2a1d5f0c1c023f6dbc48afa8b647766a"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.180245129eeb753864e7.js",
    "revision": "872665b5d6a6d70b2b9f5217865ca1c5"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.fb6037d7e460f23bb072.js",
    "revision": "76a7e0980a102199262822cf5f1d1e81"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.d0b2ef58dafc71d9ecb2.js",
    "revision": "3514e690cf5797a90ab59629ea07b115"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.e21b0587dfe386c17138.js",
    "revision": "3dc8082b877e2cab1f929caab7ff9e2f"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.da8a88b9335a646c3add.js",
    "revision": "3fe31b34e0ddf0305d621df0e31d9929"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.47e70c376f3e7811f112.js",
    "revision": "4484cbb32f9afaed37bf8a74117152ff"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "e4a6b79135e3118a1bda79a0a77e5b6d"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.7599b6fb4cb6034318f5.js",
    "revision": "69aba84f56f855e03d978cc5b5491ada"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.3103b8ea68c162faf474.js",
    "revision": "d5b5aab4037f7b9da26d2269753e4a3d"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "fb1f3a7cb3304290fba7d765f55fbfb2"
  },
  {
    "url": "/_nuxt/vendor.bundle.d3b376a133acba909e62.js",
    "revision": "d0b509466c42ddb6868799db8cc6b93e"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
