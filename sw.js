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
    "url": "0.nuxt.bundle.94ac484113cae905114a.js",
    "revision": "536cc02ada00355e4d599e5a2a7f181f"
  },
  {
    "url": "1.nuxt.bundle.1e30ee63b06499fc67a3.js",
    "revision": "ac539d0339aeaecd491ae6f8c237d625"
  },
  {
    "url": "2.nuxt.bundle.edac010722ebad2435ca.js",
    "revision": "b131fcedaed50fe124afa43e1e0a03e6"
  },
  {
    "url": "3.nuxt.bundle.0f35dbd4c331c8fb3eb7.js",
    "revision": "1950fdaae6c526055576cca80d341edd"
  },
  {
    "url": "4.nuxt.bundle.0196306f6aa8a8478add.js",
    "revision": "b5ab6d7bcdf18a4ec9af49086c5f8660"
  },
  {
    "url": "5.nuxt.bundle.555085a4681f2d3d1c8c.js",
    "revision": "019420f0b9a2b46764d53acddc4499db"
  },
  {
    "url": "6.nuxt.bundle.3153b376e5e8e461655d.js",
    "revision": "b8527ca566ac312cd62f522709086cd3"
  },
  {
    "url": "7.nuxt.bundle.a8f5241e283c9250133c.js",
    "revision": "64da99e2e0f12762bfa94889dc60428e"
  },
  {
    "url": "8.nuxt.bundle.35664468ca1a455d4f38.js",
    "revision": "21ceab6c92bdba147f0233104610a618"
  },
  {
    "url": "9.nuxt.bundle.e54abb2ce01e82ac8e2d.js",
    "revision": "a034e3c809b2210b24050ff78c8de7c6"
  },
  {
    "url": "client-manifest.json",
    "revision": "f92eaf36987c4269fd1e58a24c512863"
  },
  {
    "url": "index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "manifest.32a5e7a8.json",
    "revision": "a8c86be0acce4fc1d76ef686ebc9ebf7"
  },
  {
    "url": "manifest.660829e5ca41ae1cef2e.js",
    "revision": "f8e5f1bdafa0cf33694490495b27a02f"
  },
  {
    "url": "nuxt.bundle.ccce89666b57f2def26a.js",
    "revision": "f0f27cc6ca5445c47cfcae2f5e9b9598"
  },
  {
    "url": "server-bundle.json",
    "revision": "4cc1cef144ff60a619241fe56a50cffc"
  },
  {
    "url": "vendor.bundle.c8420611220caea7ca12.js",
    "revision": "e7fc6707e50afa8a3b918e6e0f825bc3"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/\/_nuxt\/.*/', workboxSW.strategies.cacheFirst({}), 'GET');
workboxSW.router.registerRoute('/\/.*/', workboxSW.strategies.networkFirst({}), 'GET');
