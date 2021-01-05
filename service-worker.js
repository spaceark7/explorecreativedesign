importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');
 
if (workbox)
  console.log(`Workbox berhasil dimuat`);
else
  console.log(`Workbox gagal dimuat`);

workbox.precaching.precacheAndRoute([
  {url: '/index.html', revision: '1'},
  {url: '/data.js', revision: '1'},
  {url: '/pages/home.html', revision: '1'},
  {url: '/index.css', revision: '1'},
  {url: '/css/home.css', revision: '1'},
  {url: '/css/materialize.min.css', revision: '1'},
  {url: '/manifest.json', revision: '1'},
  {url: '/js/jquery-3.5.1.min.js', revision: '1'},
  {url: '/js/materialize.min.js', revision: '1'},
  {url: '/js/api.js', revision: '1'},
  {url: '/js/nav.js', revision: '1'},
  {url: '/nav.html', revision: '1'},
  {url: '/assets/logob.png', revision: '1'},
  {url: '/assets/logobjm.png', revision: '1'},
  {url: '/assets/logokps.png', revision: '1'},
  {url: '/assets/maranggi.png', revision: '1'},
  {url: '/assets/logoe.png', revision: '1'},
  {url: '/assets/logopss.png', revision: '1'},
  {url: '/assets/Webh.png', revision: '1'},
  {url: '/assets/weblogo.png', revision: '1'},
  {url: '/logo192.png', revision: '1'},
  {url: '/logo256.png', revision: '1'},
  {url: '/logo512.png', revision: '1'},
  {url: '/logo144.png', revision: '1'},
]);

workbox.routing.registerRoute(
  new RegExp('/pages/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'pages'
  })
);
workbox.routing.registerRoute(
  new RegExp('/js/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'jscript'
  })
);
workbox.routing.registerRoute(
  new RegExp('/css/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'css/style'
  })
);
workbox.routing.registerRoute(
  new RegExp('/assets/'),
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'img/video/logo'
  })
);

workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'google-fonts-stylesheets',
  })
);

workbox.routing.registerRoute(
  /^https:\/\/kits\.fontawesome\.com/,
  workbox.strategies.staleWhileRevalidate({
    cacheName: 'fontawesome-icon',
  })
);

workbox.routing.registerRoute(
  ({url}) => url.origin === 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'animate-css',
  })
);

// const CACHE_NAME = "UEFA-2020-v5";
// var urlsToCache = [
//   "/",
//   "/nav.html",
//   "/index.html",
//   "/team.html",
//   "/pages/home.html",
//   "/pages/saved.html",
//   "/pages/teams.html",
//   "/index.css",
//   "/teamDetail.css",
//   "/css/home.css",
//   "/css/materialize.min.css",
//   "/manifest.json",
//   "/js/jquery-3.5.1.min.js",
//   "/js/materialize.min.js",
//   "/js/nav.js",
//   "/js/api.js",
//   "/js/db.js",
//   "/js/idb.js",
//   "/assets/bg.jpg",
//   "/assets/cr.png",
//   "/assets/dijk.png",
//   "/assets/football-ball.png",
//   "/assets/football-ball.svg",
//   "/assets/football.svg",
//   "/assets/logo.png",
//   "/assets/lv.png",
//   "/assets/mbappe.png",
//   "/assets/Messi.png",
//   "/assets/sports.svg",
//   "/assets/statistics.svg",
//   "/assets/top-image.jpg",
//   "/logo192.png",
//   "/logo256.png",
//   "/logo512.png",
//   "/logo144.png",

  
// ];

// self.addEventListener("install", function (event) {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then(function (cache) {
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches
//       .match(event.request, { cacheName: CACHE_NAME })
//       .then(function (response) {
//         if (response) {
//           console.log(
//             "Service Worker: Menggunakan aset dari cache: ",
//             response.url
//           );
//           return response;
//         }

//         var fetchRequest = event.request.clone();

//         return fetch(fetchRequest).then( function (respon) {
        
//             if(!respon || respon.status !== 200) {
//               return respon;
//             }
//             var responseToCache = respon.clone();
//             caches.open(CACHE_NAME).then(function(cache) {
//               cache.put(event.request, responseToCache);
//             });
//             return respon;
          
//         })
//         // console.log(
//         //   "Service Worker: Menggunakan aset dari server: ",
//         //   event.request.url
//         // );

//         // return fetch(event.request);
//       })
//   );
// });

// self.addEventListener("activate", function (event) {
//   event.waitUntil(
//     caches.keys().then(function (cacheNames) {
//       return Promise.all(
//         cacheNames.map(function (cacheName) {
//           if (cacheName != CACHE_NAME) {
//             console.log("Service Worker: cache " + cacheName + " dihapus!");
//             return caches.delete(cacheName);
//           }
//         })
//       );
//     })
//   );
// });

self.addEventListener('push', function(event) {
  var body;
  if (event.data) {
    body = event.data.text();
  } else {
    body = 'Push message no payload';
  }
  var options = {
    body: body,
    icon: 'assets/logo.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  event.waitUntil(
    self.registration.showNotification('Push Notification', options)
  );
});
