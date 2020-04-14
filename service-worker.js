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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "https://assets.support-vision.fr/precache-manifest.5c0fc90e7c4640fc2ee630b4708f1646.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("https://assets.support-vision.fr/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
self.addEventListener('message',function(e){if(e.data&&e.data.type==='SKIP_WAITING'){skipWaiting()}})
workbox.routing.registerRoute(/(tags\?site=\d)|(articles\?tags=(\w*)&sortDir=(desc|asc)&sortProp=(\w+)&showFolders=(false|true)&showChildren=(false|true)&page=\d+&itemsPerPage=\d&site=\d)/,new workbox.strategies.NetworkFirst({cacheName:'h',plugins:[new workbox.expiration.Plugin({maxEntries:50,maxAgeSeconds:2592000})]}))
workbox.routing.registerRoute(/^.+(\/articles\/)/,new workbox.strategies.NetworkFirst({cacheName:'a',plugins:[new workbox.expiration.Plugin({maxEntries:150,maxAgeSeconds:2592000})]}))
workbox.routing.registerRoute(/^.+(\/images\/)/,new workbox.strategies.StaleWhileRevalidate({cacheName:'i',plugins:[new workbox.expiration.Plugin({maxEntries:30,maxAgeSeconds:5184000})]}))
workbox.routing.registerRoute(/^(?!.+((disqus)|(paypal)|(service-worker.js))).+/,new workbox.strategies.StaleWhileRevalidate({cacheName:'o',plugins:[new workbox.expiration.Plugin({maxEntries:100,maxAgeSeconds:5184000})]}))
