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
    "url": "/_nuxt/0.nuxt.bundle.6527753982b5e0654618.js",
    "revision": "fe829b66b9de91f4f453705be658cfc4"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.d7a1f10818f0eba913cb.js",
    "revision": "f2d97d3adc912c490d6e2a98fb77a38c"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.dbcee5bbf8db6f15aced.js",
    "revision": "d046422321e03ded986c0d91d7258383"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.ac0907e214cd3ef5a3e3.js",
    "revision": "12f07c273e02b0c90eee4d9cc9ad901b"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.cc6dae11d63616441c5b.js",
    "revision": "a541d457a3cd021047835569dc334718"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.c74e5e4dc59c34f30b7e.js",
    "revision": "f99553081ed2ccefbc8b3a2e526d448d"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.85478a4551a1efbbb27f.js",
    "revision": "034969cd4e8090967b05a871abb56ac9"
  },
  {
    "url": "/_nuxt/7.nuxt.bundle.2188bfe48608b8454405.js",
    "revision": "b6b99b34b84841a49058eaed0e0597d7"
  },
  {
    "url": "/_nuxt/8.nuxt.bundle.35664468ca1a455d4f38.js",
    "revision": "21ceab6c92bdba147f0233104610a618"
  },
  {
    "url": "/_nuxt/9.nuxt.bundle.e54abb2ce01e82ac8e2d.js",
    "revision": "a034e3c809b2210b24050ff78c8de7c6"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "0f8c2d16138a7f2830ef151412c9f549"
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
    "url": "/_nuxt/manifest.ca3ce14c44e2975ed3ee.js",
    "revision": "8f51fad603f941be221ecb341c51ac3a"
  },
  {
    "url": "/_nuxt/nuxt.bundle.6f30d40fa51286f80ddb.js",
    "revision": "6fee2d2c86aa2806909f928852d7f99d"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "4527d16edd2d64c14372d2b89c80cdb8"
  },
  {
    "url": "/_nuxt/vendor.bundle.c8420611220caea7ca12.js",
    "revision": "e7fc6707e50afa8a3b918e6e0f825bc3"
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
