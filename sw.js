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
    "url": "/_nuxt/0.nuxt.bundle.522809bf1ac75dbbddc5.js",
    "revision": "650c1b1b94758cc6ba51864a3388d786"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.281a4a03ad4568ffadfe.js",
    "revision": "fb1b74743ef4a7bac0b15da7aafdaa4e"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.94bda127b07f081ac17b.js",
    "revision": "86dc8720c370dd0b851d80df20c26b44"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.96cd3f31e43508ca1332.js",
    "revision": "fc971ebbff354009b28bb3d6e03715f0"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.0b1b8f42dd026372196f.js",
    "revision": "293b8324cc8db394b155fd84f82b67f5"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.c518f830f6ae77695fe2.js",
    "revision": "b9a17f71dbb2c0515175bc12024333b1"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.025cb259cca809507fc3.js",
    "revision": "c656c670c98a3eeb33dccc6ebbca0556"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.bcef4ff079e252424403.js",
    "revision": "a60a638e4007b57e90ef715b68ab3dfe"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "0938d4744425353353ad29849216432f"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.8a60fa5a53a89b810410.js",
    "revision": "b68057ce4bf70f53b77002681c28d52b"
  },
  {
    "url": "/_nuxt/manifest.fb1025e8.json",
    "revision": "3ce52ad858d9fc22c94f1574f383cfb7"
  },
  {
    "url": "/_nuxt/nuxt.bundle.5e6bc92fecd09c2c148a.js",
    "revision": "ab3989d5f40445f86cb5ef53a19509f8"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "d8c75035758c1c2fced390f2cf10814a"
  },
  {
    "url": "/_nuxt/vendor.bundle.de834bbab10eb66eaa58.js",
    "revision": "7b35f40f10b971cdce63b008a189d92d"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
