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
    "url": "/_nuxt/0.nuxt.bundle.8a8c799fdfcc70864e56.js",
    "revision": "04c5753488ce7b031477cd8a988e819f"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.c0931b306e6c4ae7a629.js",
    "revision": "9c1ed1b5f2d13ed3327c0db9de57c4df"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.8b871eb7c515549b1147.js",
    "revision": "b7646d72708de9c79b82527240c3a1fc"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.efba089be18020fa4dc5.js",
    "revision": "880776dd7ffca25a1c131c8faf854025"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.e1591ab6bbd0a18cfb1e.js",
    "revision": "d105039f5369091392dfdee9ab576846"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.04750c31d035b779c594.js",
    "revision": "01f4c0c5ac3676b409ba917a2dde9028"
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
    "revision": "ed5d3cfb748e51ef712f41ead1e03fcb"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.a8f4a02318c726cf9021.js",
    "revision": "cdbda8b9087b3cd05ec6ba2bc03cabde"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.a6643128254a512e87ef.js",
    "revision": "c9faf54e5c2241939feea9717334e692"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "641f1b4394a5304f5246f0c6ba91452c"
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
