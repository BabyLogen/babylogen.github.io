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
    "url": "0.nuxt.bundle.f64b40907fb1eeb48a69.js",
    "revision": "cc223f40f113fb5081bbb118de315441"
  },
  {
    "url": "1.nuxt.bundle.66840c11e4d330780e90.js",
    "revision": "7043f66556f304281ea747bd0f07d507"
  },
  {
    "url": "2.nuxt.bundle.c10503082770c40e80bf.js",
    "revision": "e004ed9b694855b2c66c15933625d499"
  },
  {
    "url": "3.nuxt.bundle.2d28588d52f273b79fe9.js",
    "revision": "f481332f7e217bdfd7427d4b2cb10bd7"
  },
  {
    "url": "4.nuxt.bundle.b233b9e08d6c7ec7d13c.js",
    "revision": "71d384adbafd02c3dd09ddf3a49cf502"
  },
  {
    "url": "5.nuxt.bundle.a99fa065db6550ab3edb.js",
    "revision": "5e41b15353172fe92dddff777113a695"
  },
  {
    "url": "6.nuxt.bundle.ba46b30e034ae9e45dfb.js",
    "revision": "028926424e0c938190263cc6655b13de"
  },
  {
    "url": "7.nuxt.bundle.e97d279430acc2923750.js",
    "revision": "e02558d8b8cf60957adfe7121602c492"
  },
  {
    "url": "8.nuxt.bundle.12b58e10479da5afcff1.js",
    "revision": "a6d55819ebb5c049d049a69130fc54b5"
  },
  {
    "url": "9.nuxt.bundle.62e973a664b2315984d8.js",
    "revision": "49ba3be46490d06d8632cd3cf71c09db"
  },
  {
    "url": "client-manifest.json",
    "revision": "542cafca0c42a255170cbb3a8a43d36c"
  },
  {
    "url": "index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "manifest.20b5392b99ee6ba51484.js",
    "revision": "8a14ad638ad585bc670fc312ae9293e0"
  },
  {
    "url": "manifest.32a5e7a8.json",
    "revision": "a8c86be0acce4fc1d76ef686ebc9ebf7"
  },
  {
    "url": "nuxt.bundle.093fb50ed321fecb6142.js",
    "revision": "b93eed58bced1220e5ac2ee558dbc9a4"
  },
  {
    "url": "server-bundle.json",
    "revision": "b6798075457b086890928cf7d0c12bcd"
  },
  {
    "url": "vendor.bundle.f15a33a83a9e1356c2a6.js",
    "revision": "7c39482398b3d1efc2659e07d2233a25"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
