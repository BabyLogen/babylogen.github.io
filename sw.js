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
    "url": "/_nuxt/0.nuxt.bundle.cd41b2d00804fa66c2d0.js",
    "revision": "112c5efe279c32a2e082c40a7cd13df0"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.061cbf4efb7659a2f703.js",
    "revision": "f93d6902a66fff6b6ba7a0937c9f3981"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.f00db492851916dce7e1.js",
    "revision": "ba3759fc0f09c416f4652f7061c39a3e"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.b7309d535a3a754b4b30.js",
    "revision": "4be45d0613bb1041f097712df4dc9f0a"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.dad7cc28eeeadbafeca7.js",
    "revision": "5aa99635e9210fca9ce5b5ae5e9bb85c"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.932ac8784c3da5d20d9f.js",
    "revision": "190c9aaac403aa00f3e53202cd50760b"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.5844880e828ecd86d35b.js",
    "revision": "f8e2c823911a48f092dc618a129a85fd"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.59d63e4dab0d7a5604e9.js",
    "revision": "1a3fc280fd22909bf557287daa48d404"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.95d1f892f83cd7a47460.js",
    "revision": "01ae6a041343504ea7ec29373712c683"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.c1167963a5b204a96e0f.js",
    "revision": "49ba3be46490d06d8632cd3cf71c09db"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "d705a1a7ce7ea52ab133b49575ba1749"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.d5c1951e72cebce02520.js",
    "revision": "13d7a36112d76445e00d0136cb23d4f0"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.65d7992b448bb4cc83f5.js",
    "revision": "33350c2d8a834443e4a89b4a0fa322ab"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "de58ef0e543293e1213d49482cad4ce7"
  },
  {
    "url": "/_nuxt/vendor.bundle.6a071ac79412963858a1.js",
    "revision": "75c2633140cb8b9dfb0a1681bdedd9c8"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
