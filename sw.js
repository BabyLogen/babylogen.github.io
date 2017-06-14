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
    "url": "/_nuxt/0.nuxt.bundle.4765f9ef42f39a99dc0a.js",
    "revision": "1dd535bd7c7de668c9d5cd17987d37a8"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.bdba31eaf4d75f6eafed.js",
    "revision": "cceddd289f2c27e2efa307ca151e552f"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.4b8d7eb303dcdc2c8ee8.js",
    "revision": "69d35df6078592951154275641154487"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.baa51d8d0e4d2bf7b13e.js",
    "revision": "e207bf68642bdcb172f8b3b85008165b"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.cfd5bdb13231db342586.js",
    "revision": "5bc1d6fca07e6bd3f9b670717d092fb3"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.fcfaeaef1865a20fe00a.js",
    "revision": "b51f862be2406b2103c76a2c1d7560f3"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.7a3566728700d87fb00c.js",
    "revision": "19f4c9925090d35253466b9373c90ace"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.ef8d05651744a3a05763.js",
    "revision": "2901c6cc509bf13db9b1c12f6790269e"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "2a4a20cec068c6a236489bdd227d408d"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.c6ba3b5387ab232b974d.js",
    "revision": "155b9c24e7f925d33908a5d78b54ab2a"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.ee8cb137ecc5c461e086.js",
    "revision": "20f05d1a5f1689bbab43c72f45259247"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "249ad6158410e245ad292b4f14e56fe5"
  },
  {
    "url": "/_nuxt/vendor.bundle.1f389668c53a019f25ee.js",
    "revision": "180c953af64dbdb6038d439e30bc9a2c"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
