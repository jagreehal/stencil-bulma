/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-bulma.js",
    "revision": "efd4d52ddf4f5a4976ad074aa5407427"
  },
  {
    "url": "build/stencil-bulma/stencil-bulma.exlyvvgu.js",
    "revision": "86568c9276eedaf89d1b3193fd7b8938"
  },
  {
    "url": "build/stencil-bulma/stencil-bulma.jupbzqed.js",
    "revision": "7fbe3790574e76d6336875ad3d2242bf"
  },
  {
    "url": "build/stencil-bulma/ybwfxp5c.es5.js",
    "revision": "6e475466d5cf0b031d30a4d9ca62944c"
  },
  {
    "url": "build/stencil-bulma/ybwfxp5c.js",
    "revision": "08d00d4a99705c9da66b14fb2c1fddc0"
  },
  {
    "url": "build/stencil-bulma/ybwfxp5c.sc.es5.js",
    "revision": "ebe884af705088352fe0215c15902dbb"
  },
  {
    "url": "build/stencil-bulma/ybwfxp5c.sc.js",
    "revision": "2db1205dfec8a9d65441a1d3290c2872"
  },
  {
    "url": "index.html",
    "revision": "2af71dc577b083a9f9b6aed12439d63c"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
