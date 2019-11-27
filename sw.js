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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "APPWeather.png",
    "revision": "fa11970ee346ac4268a99db6be73d171"
  },
  {
    "url": "icone_gps.png",
    "revision": "a1f27a831ba08f323358dc184cb25cc2"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8177db2fbc435b2100935c888b565094"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "bed742892d00d9d04ec5440a344a18bf"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "1351d8f42f97bc832293456123ed4750"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "02e6ff0d1e0de96d1d54ff2f6415dd3b"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "898a6f0c429a99e0b9e409423f34a895"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "84070aa16ae12a19d2a2f9af97fcd9c7"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "9078e51c1ccaae25e8c9107dba7923ac"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "4ce8844543815834788ff4a4b535aba7"
  },
  {
    "url": "index.html",
    "revision": "61dd80508adbf5a5528d9d0e3d1e9f00"
  },
  {
    "url": "index.js",
    "revision": "02d33252ba8007db68d0db0c41fffe02"
  },
  {
    "url": "manifest.json",
    "revision": "cf7c1f06f6226543fb010370b46a0846"
  },
  {
    "url": "README.md",
    "revision": "1ba06d1c5199da3384e8a509cd812134"
  },
  {
    "url": "service_worker.js",
    "revision": "8f7603a30363db30a1561723a02f17d9"
  },
  {
    "url": "workbox-config.js",
    "revision": "0b93e22e641452916e86bce66eca0624"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
