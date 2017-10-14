importScripts('workbox-sw.prod.v1.3.0.js');

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
    "url": "/_nuxt/app.2a434b288503c9cbfd3b.js",
    "revision": "7df2ff484c9413816389d3e3c909e536"
  },
  {
    "url": "/_nuxt/common.51cab404e03a0f40520f.js",
    "revision": "0bf182d9e43cdd60fd3a4003ee08802c"
  },
  {
    "url": "/_nuxt/layouts/default.40d074fdb0f45596de26.js",
    "revision": "15b0f2e50a8d2c0d97433bc4e6e16567"
  },
  {
    "url": "/_nuxt/manifest.66938d0c7eb8a7530809.js",
    "revision": "5219e325be82d58d7f387e9c299b1648"
  },
  {
    "url": "/_nuxt/pages/_page/index.edafc5948d9dc4b102e3.js",
    "revision": "1293557116c85888912c599a2a9736c4"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.473d633c59802b134059.js",
    "revision": "8430a32d211d966d7ac7de2a71efcc36"
  },
  {
    "url": "/_nuxt/pages/blog/index.62011dfe3be7931ffb5d.js",
    "revision": "fbe1e8b89bb2251769f68398d2369cb3"
  },
  {
    "url": "/_nuxt/pages/events/_event.c39d4f20ed851cd65bac.js",
    "revision": "050e3b22ffcd7045dafa0be7e6bd59d3"
  },
  {
    "url": "/_nuxt/pages/events/index.46a6efd787151de0bf11.js",
    "revision": "4ccf290ad3d259e7cde8bfd498b20d98"
  },
  {
    "url": "/_nuxt/pages/index.e2ddb0957d12f2f40550.js",
    "revision": "cc7294960bcab1f8c71ac4b204ab518b"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.69726882f0246c581644.js",
    "revision": "7fa23007243bdd0ec3ce5d1226edd8f3"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.3f54bf9f58f728b19cbd.js",
    "revision": "12bd509c607e4baa3b7b95548ba18051"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "www_0.1.0",
  "clientsClaim": true,
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute('/**', workboxSW.strategies.networkFirst({}), 'GET');
workboxSW.router.registerRoute('/_nuxt/**', workboxSW.strategies.cacheFirst({}), 'GET');
