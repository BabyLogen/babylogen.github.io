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
    "revision": "28de8c326b8d28e72d6b0b50cb55e14e"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.1c506f54bcab96c64908.js",
    "revision": "9343ddacabfe7275c6bf9fb550bf05ee"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.69b06e9213551e5cde75.js",
    "revision": "ae6ac93c2090fa28b3818d10cac88f4c"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "629f79cd12ada1fc9ca5fb86c943d730"
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
