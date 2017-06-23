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
    "url": "/_nuxt/0.nuxt.bundle.af0f8aa0e2960df21bcc.js",
    "revision": "4334b213ebdfe522950801b56d14f578"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.11420739e21d3211ac03.js",
    "revision": "0a7a2258551d46c3c03a60aa02c85dc6"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.130f1f29edf781a3ffef.js",
    "revision": "e616acc2021048a5988bd8b45541dce8"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.10cda385fc26b734997b.js",
    "revision": "d47fbadb91a680cf16f84284a9b4721a"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.56758019132a7220aa42.js",
    "revision": "8c5ba6598d968d298792b6450122b75d"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.0cf54a0d5c1eddf922ed.js",
    "revision": "a8ad02b39de3032c797a62375c46e134"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.72513baa15361cac0240.js",
    "revision": "102b971e6059207050f4c0e3e1c5d77c"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.5f1d0b2e6160ae6261f6.js",
    "revision": "31fcb732a1c90c0d6907bbbf03306ba3"
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
    "revision": "f519e7a3f2c2bbf9e87c044a4f201bea"
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
    "url": "/_nuxt/manifest.78302d2937ba9752e00b.js",
    "revision": "77499dd3edd381309debd5dfca3fc3fb"
  },
  {
    "url": "/_nuxt/nuxt.bundle.4464e4c1c247f20e6f11.js",
    "revision": "cafd84c8764baf762543e389b3f02c1b"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "658405da99475e273b3a99e116cdabde"
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
