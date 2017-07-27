importScripts('workbox-sw.prod.v1.1.0.js');

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
    "url": "/_nuxt/0.nuxt.bundle.54d2c58c6f37644978b7.js",
    "revision": "b0970a71b58a9ba68ccdd07cd37c547c"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.ddb7a1d62327f8f99f72.js",
    "revision": "052f94525c2b08610452810ca5554d04"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c9b78a799590aff14f94.js",
    "revision": "60f6abe6b64d35a6e35c37f803a4a5f8"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.4de9734dd13c6290e027.js",
    "revision": "0b82bb3d707924dbc1d781cddadfad18"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.0349425f3e44986fd372.js",
    "revision": "2c25755753c7d72c5ab20dacb70c48a4"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.3a39aa19bd2310e42da6.js",
    "revision": "fd9565601e86ffc18a397653c939aa1a"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.9e08afad35dd39d44d6d.js",
    "revision": "6eeca297534f4cf8d7ef2c8640f5359c"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.902f296b9476b153750a.js",
    "revision": "7c1f14e00682bf5939a261f5421c936e"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.35664468ca1a455d4f38.js",
    "revision": "21ceab6c92bdba147f0233104610a618"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.e54abb2ce01e82ac8e2d.js",
    "revision": "a034e3c809b2210b24050ff78c8de7c6"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "ad240db9adee2939e865c94c86b76489"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.32a5e7a8.json",
    "revision": "a8c86be0acce4fc1d76ef686ebc9ebf7"
  },
  {
    "url": "/_nuxt/manifest.cfb93e6f4945a1bd0941.js",
    "revision": "d9bcd2488798e682fef75e9407f74239"
  },
  {
    "url": "/_nuxt/nuxt.bundle.6f30d40fa51286f80ddb.js",
    "revision": "6fee2d2c86aa2806909f928852d7f99d"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "7900210e21b207bf7df28bf10e3e6f64"
  },
  {
    "url": "/_nuxt/vendor.bundle.c8420611220caea7ca12.js",
    "revision": "e7fc6707e50afa8a3b918e6e0f825bc3"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
