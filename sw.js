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
    "url": "/_nuxt/0.nuxt.bundle.1f8b47ef594e07c0b3a7.js",
    "revision": "58db1118e07706503e3b05ed257974eb"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.9ad7392fee4cbb948826.js",
    "revision": "2af22265f2f33a0ee8f9c7e718e7fc9b"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.84c27e53e22a67e1aa03.js",
    "revision": "89ae1a5cc3f23d5e43feada9ad389e87"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.379a416f074e81281da5.js",
    "revision": "a17897e3e35f4ed486d6c43662229109"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.ba41f738adc4d0a4eb87.js",
    "revision": "41433c4162b441dc7875009efaa1427b"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.df96efed67613d904559.js",
    "revision": "d6bb52696f358f61dac3b559254b9d5c"
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
    "revision": "5acec1d56edf0362fd01c1be11a3c285"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.4bcf774761636eca57d1.js",
    "revision": "07d3f9e17d0e185e946314acf80466ab"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.a88c8acb43bb56265fed.js",
    "revision": "20b7e9cbc397f7226fabd497c99ff057"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "bd5cb912c0982cfdd9bb69230ba15244"
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
