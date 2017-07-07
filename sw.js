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
    "url": "/_nuxt/0.nuxt.bundle.86e96d00dc3acd0067cc.js",
    "revision": "cc223f40f113fb5081bbb118de315441"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.0df611c667ef68abd4e9.js",
    "revision": "7043f66556f304281ea747bd0f07d507"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.c9ea759a0f0d19a341b7.js",
    "revision": "e004ed9b694855b2c66c15933625d499"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.6904040c388947a62923.js",
    "revision": "f481332f7e217bdfd7427d4b2cb10bd7"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.9cf4ccceed346410b5a9.js",
    "revision": "71d384adbafd02c3dd09ddf3a49cf502"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.20231b3b39f4e887a09f.js",
    "revision": "5e41b15353172fe92dddff777113a695"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.052339b4cf2d4947ad31.js",
    "revision": "028926424e0c938190263cc6655b13de"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.e20434cb55e362c61e7b.js",
    "revision": "e02558d8b8cf60957adfe7121602c492"
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
    "revision": "502eee2ca2eaaf8114d4d1b8632868f2"
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
    "url": "/_nuxt/manifest.a36d53158b0be1a0ca26.js",
    "revision": "bbfbe5fc929e97448835ee1839d32aa7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.753a33dec17aa942ff25.js",
    "revision": "b93eed58bced1220e5ac2ee558dbc9a4"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "b6798075457b086890928cf7d0c12bcd"
  },
  {
    "url": "/_nuxt/vendor.bundle.f15a33a83a9e1356c2a6.js",
    "revision": "7c39482398b3d1efc2659e07d2233a25"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
