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
    "url": "/_nuxt/0.nuxt.bundle.b0a442b5e2c2980e5d1f.js",
    "revision": "4d4eb06f7151c5a9aeffcd2d34f0a1a5"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.d27bf4b72ceb2ea1239d.js",
    "revision": "a79b4de26fd4153b2b42d3b6b1c21ae7"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.d15c14a72bc05eb120ae.js",
    "revision": "d4570dd18031210b5eaeb9ff82f8b280"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.8d1469c24c7d4803475e.js",
    "revision": "c3764d9c3f86e8733a14e5a7a8c17b4f"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.38a0d2bcea48c9e9c341.js",
    "revision": "dace29d522fbc328b50527a1f4a1cdcd"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.403282963c74e23da045.js",
    "revision": "cbe6a92ec0a02a51d8cb91c54912f679"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.486cf456c73a40c3d20d.js",
    "revision": "a9faaf1a9bfa214484e472ada45395f2"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.af3ae8047b2d5d59e485.js",
    "revision": "27efd8e7aa8f8f95401f40943035963f"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.5bdbba04642fd2cc9a2b.js",
    "revision": "a6d55819ebb5c049d049a69130fc54b5"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.c1167963a5b204a96e0f.js",
    "revision": "49ba3be46490d06d8632cd3cf71c09db"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "9f137c4e513206663b1e3fb7cc06c8a0"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.510c7ef8247a1942071b.js",
    "revision": "1788abfc49a7ec4bba72c0848a170959"
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
    "revision": "763631c0d80470801cd59825cbf571a3"
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
