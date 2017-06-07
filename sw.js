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
    "url": "/_nuxt/0.nuxt.bundle.12ceebcab53efb974c7b.js",
    "revision": "a2a15a7a0629064edbfdcb671f15c5bf"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.ef197d9ba70b9785e1d5.js",
    "revision": "e38a1a68991472964a0dbfade7d4fe55"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.2ff7f3df5a779be59674.js",
    "revision": "e2ea1d1994560f1a21592bccb0881773"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.3a7a8b8e391f1b640d08.js",
    "revision": "2d41ad62de48536d28621f453af4d7a0"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.3da8cd2fc71a879aa9e8.js",
    "revision": "369393a16fdc6e7c45dada9976d12b2b"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.c518f830f6ae77695fe2.js",
    "revision": "b9a17f71dbb2c0515175bc12024333b1"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.a5f1f52c092b0a2cfa2b.js",
    "revision": "1d006d2f15e5267243e11cb15a577aa1"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.bcef4ff079e252424403.js",
    "revision": "a60a638e4007b57e90ef715b68ab3dfe"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "5f64d90db226365e494e96e49a33a2c2"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.e263c126eeeeb299a14e.js",
    "revision": "eadd0cb713bec454cb392bbe2544c4b7"
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
    "revision": "62d3773a32d06b594eafd12aeba6cd61"
  },
  {
    "url": "/_nuxt/vendor.bundle.be1bcc81648e46d5e900.js",
    "revision": "fecd660ad1e867c9e48b3e92458f8171"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
