importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/27f609d2d781996f031a.js",
    "revision": "9ac0e329c1e9858b0b0cb972943daf4c"
  },
  {
    "url": "/_nuxt/4a7c02f846fff7ad41de.js",
    "revision": "c4bb0b9baa37244f403cb7021bdf900b"
  },
  {
    "url": "/_nuxt/50d45eb9cae752f585d3.js",
    "revision": "386d4a6b2c58499d1096eb8fb7596635"
  },
  {
    "url": "/_nuxt/c9841000f5ce57f62fd1.js",
    "revision": "f99968a15c272bf180dcbf3b35a3bd75"
  },
  {
    "url": "/_nuxt/d674ce0d7e5a14618530.js",
    "revision": "585231c1ad56593ce80775febd616077"
  },
  {
    "url": "/_nuxt/e916b58ad720a5d048d7.js",
    "revision": "4d6de110cf258af4f9f3fe3bf5bc64b5"
  }
], {
  "cacheId": "ITMO.GAMEDEV",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
