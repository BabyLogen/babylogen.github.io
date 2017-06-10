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
    "url": "/_nuxt/0.nuxt.bundle.d93d4c413464fe52fe1f.js",
    "revision": "fa07546408fea61e1322d3ec175951af"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.cf2c3135a704801bb3fa.js",
    "revision": "3bfdd888daf36d72ffca30f4d422362b"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.e9f8c9197e546b89410a.js",
    "revision": "29c819bfb257b65020d81b94466c2657"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.f71f9f5d4a1dc85d4926.js",
    "revision": "a076fc2ad52e410b36e217f245abf99a"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.b5855faf13df1e1f7956.js",
    "revision": "eb74eb07f8f0990a6c389cff0cba5fab"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.c518f830f6ae77695fe2.js",
    "revision": "b9a17f71dbb2c0515175bc12024333b1"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.cc7fb8f31f3ae8e685fa.js",
    "revision": "a15fc3b67e379a7604094e164aa33232"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.bcef4ff079e252424403.js",
    "revision": "a60a638e4007b57e90ef715b68ab3dfe"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "03e42eb0f360bbc720d58e5ba0d189ef"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.5dbc1d4490ef7f26f5a8.js",
    "revision": "5aa5e4ab2efabc78480af4a17ed1142d"
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
    "revision": "873e1dc5040c4f7c25e36ae687431723"
  },
  {
    "url": "/_nuxt/vendor.bundle.be1bcc81648e46d5e900.js",
    "revision": "fecd660ad1e867c9e48b3e92458f8171"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
