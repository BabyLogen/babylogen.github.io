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
    "url": "/_nuxt/11.aa333e8330ac88bde6f0.js",
    "revision": "6f0dff83a13d5b8eefa6cd8493a30bc6"
  },
  {
    "url": "/_nuxt/12.74b9282a705c803b5b5d.js",
    "revision": "52a6e0978af2846107df6c848e444108"
  },
  {
    "url": "/_nuxt/13.f5e592c573dd48d055e8.js",
    "revision": "8b07df6b325818ffe2c54d43a91ba166"
  },
  {
    "url": "/_nuxt/14.8eb6244ca3ed39594d81.js",
    "revision": "eaa04373cadc768be66a387e027ec50d"
  },
  {
    "url": "/_nuxt/15.ccc940c07e71e3240654.js",
    "revision": "bf6c25ae76f9362121f0c9dfa59b7535"
  },
  {
    "url": "/_nuxt/16.e13b41c34602847ee002.js",
    "revision": "861202e3f4de832998049b2550e16596"
  },
  {
    "url": "/_nuxt/17.72fc025dc64141b23592.js",
    "revision": "34c5b11dd81ad97faaa27e3f022d9ad7"
  },
  {
    "url": "/_nuxt/18.efd93365fbcf19f3aede.js",
    "revision": "ffce35c7409679901f504c6c73f2f293"
  },
  {
    "url": "/_nuxt/19.18483e88ad4a95077055.js",
    "revision": "a6450a526d0a40143b850296a54e8764"
  },
  {
    "url": "/_nuxt/app.750566644dc753094b2e.js",
    "revision": "7a7bd8ce339fe67920629fabbdc2e625"
  },
  {
    "url": "/_nuxt/common.bf25e1d32ddd340fb70a.js",
    "revision": "b06c7cba77fdf5c9d6763aa752b45997"
  },
  {
    "url": "/_nuxt/layouts/default.ab2a99651c7e62d8c377.js",
    "revision": "57f1acb7854550a7f94421bdffdf3686"
  },
  {
    "url": "/_nuxt/manifest.1c436f7efbfa70c5c3a8.js",
    "revision": "f61966d416d27bc99c5963b096d302dc"
  },
  {
    "url": "/_nuxt/pages/_page/index.7e77093225f1aaa4494c.js",
    "revision": "0d6190d9e4bd293ea0bb65b5397c13a1"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.53297a97e27a7431d3a8.js",
    "revision": "122d47fdcc2584b016382607b18c28cf"
  },
  {
    "url": "/_nuxt/pages/blog/index.3dabbcc2432efed3c360.js",
    "revision": "861a1e4a28593a60628a76d918eca0b0"
  },
  {
    "url": "/_nuxt/pages/events/_event.d352fef36113adadbf0b.js",
    "revision": "5055a64f2600e379d1f4c594320d58ed"
  },
  {
    "url": "/_nuxt/pages/events/index.77c4b26b4c6fdcfdbb4e.js",
    "revision": "6e57f5033e1cba306daaa33fee88059b"
  },
  {
    "url": "/_nuxt/pages/index.bb25537afb9b930bf29b.js",
    "revision": "babc918f7b159c29f3892b6a26f405d8"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.09f0afb633e74be1041f.js",
    "revision": "fdb5a23e10fac76ebcdbcda6fc616842"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.76b5041da9bb57b8110e.js",
    "revision": "a3430da2a4c9130d4a7a469afb2d7f0b"
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
