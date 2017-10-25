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
    "url": "/_nuxt/app.178cfa3abfd9b0230c34.js",
    "revision": "8505e111c7bf48aee4ffab4532077ed6"
  },
  {
    "url": "/_nuxt/common.f7e01b424815852b53e2.js",
    "revision": "8651dbca0aace4077a4f9157ca081ca7"
  },
  {
    "url": "/_nuxt/layouts/default.769d1869e1d8f4758c02.js",
    "revision": "adc487a397cbe33aee2dd94ae560f2cb"
  },
  {
    "url": "/_nuxt/manifest.fb71c9e2d0a4d2d2ae44.js",
    "revision": "e751d077b937b6261d0ba395bbad86a2"
  },
  {
    "url": "/_nuxt/pages/_page/index.0485c4e0e712e4529eb0.js",
    "revision": "db4312ed75ff7fc0fa2891b6f1f37b58"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.b99be5d97cd3b6da0372.js",
    "revision": "c08cc33c6ae98434559362fd61b368d3"
  },
  {
    "url": "/_nuxt/pages/blog/index.deea9022c8a2f7efd003.js",
    "revision": "764759b6bd1ef14e80c9d9c5ddfde716"
  },
  {
    "url": "/_nuxt/pages/events/_event.85cb4c4f8a17f8c40447.js",
    "revision": "6b460ed105dbbe336aea7ab178e321e3"
  },
  {
    "url": "/_nuxt/pages/events/index.8456ea75691eab2aaae9.js",
    "revision": "eab1d74ab2993405926994b4c2754995"
  },
  {
    "url": "/_nuxt/pages/index.62338247cf6d4c941da0.js",
    "revision": "3f2ace8c5a35173eb0b46f262e0b69b2"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.904c1d2ee9a73f471c3b.js",
    "revision": "051d105206fe9063bfc856d8ec1ddb9c"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.28f3c29e30ec960ecfb2.js",
    "revision": "ad7aff3241f900dd34abe3e4682b9bec"
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
