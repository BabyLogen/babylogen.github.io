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
    "url": "/_nuxt/0.nuxt.bundle.5f797abbb04be031658d.js",
    "revision": "f044c952e35c672b0d1a4e5426da788c"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.b87744c147f995e1a58a.js",
    "revision": "784cd4ce8d877abf793438e98872dcb5"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a1302c5b5d41381cdc5b.js",
    "revision": "54ae3fd065793de0bad75ea9e1d3da04"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.c1c46b24052c03897c02.js",
    "revision": "ee2e504b586d46335d82f47f8d60ffa6"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.6b6c8c317f5c3f275d82.js",
    "revision": "b13f6c2ea9f6bc9ca548bf5e2e5f80d8"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.a1fda1ce878075e1d50c.js",
    "revision": "61842ff27ac5c2113226f55eb69a8b72"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ae26fe767b778103908b.js",
    "revision": "64ebff08d5e8f50071c7593bc5a3b7a7"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.f4d158a65311557421d2.js",
    "revision": "2afb5f0d6ecbba1ef5dc8c0763422a59"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.5a0200da6686edc1d983.js",
    "revision": "d041dc5ba6ea67abc48a264953c1decc"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.732b7762f23da6d7f8e1.js",
    "revision": "badfd7cd1c7cc023cd6d9e308403ccd7"
  },
  {
    "url": "/_nuxt/index.spa.html",
    "revision": "8bdb9c980c43c071de7beea89067bfbd"
  },
  {
    "url": "/_nuxt/index.ssr.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.32a5e7a8.json",
    "revision": "a8c86be0acce4fc1d76ef686ebc9ebf7"
  },
  {
    "url": "/_nuxt/manifest.c5d64c131e89fe8e5acd.js",
    "revision": "f89d29395545fef763e755facf2578ab"
  },
  {
    "url": "/_nuxt/nuxt.bundle.e55ad9f2b957dbb6d374.js",
    "revision": "dce22d1645629d484f201ed308192961"
  },
  {
    "url": "/_nuxt/vendor.bundle.17539d45e5a53d29a21f.js",
    "revision": "eac8ff7ab91f32344ac6044cdfc5b680"
  },
  {
    "url": "/_nuxt/vue-ssr-client-manifest.json",
    "revision": "2ba16474a3de41723fbe33e18ec7917e"
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
