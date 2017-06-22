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
    "url": "/_nuxt/0.nuxt.bundle.29ddd500710b573493ba.js",
    "revision": "f9c0ef6b3abfb343f2d9da78bfec5f67"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.22a231d16a1faef46ca9.js",
    "revision": "8688fd6511e1ef296b4b299db372775c"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.56534990d2691debdde0.js",
    "revision": "a43e835c105c4c6fa8b421a9bcb21627"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.b6638a8bac02da7c8456.js",
    "revision": "dc2a7cbb518ad865e707c64a0385ae34"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.af95345596a7ab557043.js",
    "revision": "7a5c152d643fd87ab77bd7ef8b4da843"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.1899b7e1281bca02e085.js",
    "revision": "e487407d7fac44b6dc5a12bf4d4a5ada"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.8e63f50e6814cfa14f34.js",
    "revision": "1de9f69b70722dff5bb9cc48856205cb"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.23f9d45733f83b17f08a.js",
    "revision": "94b783c532c6939bad18310191d1d7e6"
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
    "revision": "e296e0200f0148d3071aeef8e252eec9"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.0879da6f86f98ef53bed.js",
    "revision": "f002f97d9823a3dc3be452d03716fdbe"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.d58ac2d4b233c0d57e68.js",
    "revision": "6e31650d781640f829569b91188eebd9"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "6331e323e842eaf6d1009f63a9f8130c"
  },
  {
    "url": "/_nuxt/vendor.bundle.8bb1be2979399c79d0d1.js",
    "revision": "e322a927153f2be161a722f076a369be"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
