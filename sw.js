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
    "url": "/_nuxt/0.nuxt.bundle.030e18d50ecb4208b1e9.js",
    "revision": "b6246b8122b11a97d4f51ab99e1fac3f"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.cfcd626db708e9a8b324.js",
    "revision": "902b6012d9dce73897880c55dd89188f"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.2b837487aa48e2efd2e4.js",
    "revision": "351a8dc430f0cc167e77d12c81d28c21"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.30e76e9408de860bc8fa.js",
    "revision": "64d3390cffe41ee8cf51287c341d5a88"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.56d25093f8c93df1b254.js",
    "revision": "88545cddc3ca1e811bdde023ef92e619"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.6f245cfe1871ed98b222.js",
    "revision": "c076fee84ccf3f6e05bd3a8c44380be1"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.8a2c8a5a60f61428e96c.js",
    "revision": "65b25a3135bb996495ebac86e68243fe"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.4e0d95e30c0e8d4ad6df.js",
    "revision": "6fcd726abd9d712ba243360b809a374a"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "a1aef37aabd706d35e1cdc8667dc2191"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.42b05bf636787b5e1eec.js",
    "revision": "47dd37c88641389d95830b96147fe519"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.22cc34531dc11c6807f1.js",
    "revision": "b75f1039652990dfec5eb7633c5227f9"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "d83389a08406d06d98d85b5893cb63ae"
  },
  {
    "url": "/_nuxt/vendor.bundle.01cec0215f407d4b3de4.js",
    "revision": "399b3481914cad358ab36358cb572160"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
