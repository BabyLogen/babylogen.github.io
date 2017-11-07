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
    "url": "/_nuxt/11.00a3b618289678a93577.js",
    "revision": "68a926f2d85362074733a1f15d3c2657"
  },
  {
    "url": "/_nuxt/12.53ec724ed68babc95ebf.js",
    "revision": "5eb29e82b467148f721b91ca86969a2e"
  },
  {
    "url": "/_nuxt/13.9b92e34a920635766684.js",
    "revision": "0c17f95a5bc059926650897c18434d55"
  },
  {
    "url": "/_nuxt/14.05980b780063807ee93e.js",
    "revision": "0c381df95205ee1ee96207006ac2fcc4"
  },
  {
    "url": "/_nuxt/15.a90f0501226d5c755741.js",
    "revision": "64d2fb7897f0caab96db836938352657"
  },
  {
    "url": "/_nuxt/16.46c40a41230b7d6dd7a8.js",
    "revision": "459c396cd620f153895bbfbeae93e269"
  },
  {
    "url": "/_nuxt/17.3ebd7b7fcccbc9c369e2.js",
    "revision": "75506f58d11a09f944accc997dde5191"
  },
  {
    "url": "/_nuxt/18.20fd78b60eea089bca30.js",
    "revision": "275ff7087b1de61bd83034746ce6ef33"
  },
  {
    "url": "/_nuxt/19.6775ea4cde889492c2c4.js",
    "revision": "05a609d8f20da63256140f600b250586"
  },
  {
    "url": "/_nuxt/app.29ae90f64674cf546997.js",
    "revision": "9571a370dc562b6f0d16d4a5117481f9"
  },
  {
    "url": "/_nuxt/common.d7b187b9355dba3746e1.js",
    "revision": "ff48eccf5e3ee28b0a0c2e3fe00e8d08"
  },
  {
    "url": "/_nuxt/layouts/default.49052d53a60a5c423c43.js",
    "revision": "c0864e9ccdae11f2c18118b28d25a59d"
  },
  {
    "url": "/_nuxt/manifest.56c7d8a231f78ac5969b.js",
    "revision": "42eb55f1d212dcd4569d96f0a60fe2d0"
  },
  {
    "url": "/_nuxt/pages/_page/index.6f21c8c28f3a3bc22ea6.js",
    "revision": "296552234dc68a2c1179a5d6cc02daa7"
  },
  {
    "url": "/_nuxt/pages/blog/_blog.7b97db8d99d87f9a5b82.js",
    "revision": "a9889a6bc93e91274bbae894f15becb7"
  },
  {
    "url": "/_nuxt/pages/blog/index.295b2474942a6088053a.js",
    "revision": "9e27f968e61ec55454c191d055e6aba0"
  },
  {
    "url": "/_nuxt/pages/events/_event.f63c6f4be4ec15fc4e3b.js",
    "revision": "904bd6dd4c2cf5627b77c69768e8fec5"
  },
  {
    "url": "/_nuxt/pages/events/index.49336363f3429de6fa23.js",
    "revision": "9d352007d1eb89aea7de9110e84d7827"
  },
  {
    "url": "/_nuxt/pages/index.632c751c600557982181.js",
    "revision": "62e51956db1b1a2043d174839ef57940"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/_service.78d9b0538e50fb48c962.js",
    "revision": "9064f6c26d19d41c9eb3ace634faa09c"
  },
  {
    "url": "/_nuxt/pages/vi-tilbyder/index.69fed472ad8d2139a18b.js",
    "revision": "09228b0b612c08db6ce97cd4671c076e"
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
