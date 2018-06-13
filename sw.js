const version = "0.0.1";
const cacheName = `resto-review-${version}`;
self.addEventListener('install', e => {
    const timeStamp = Date.now();
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                `/`,
                `/index.html`,
                `/css/styles.css`,
                `/js/dbhelper.js`,
                `/js/main.js`,
                `/js/restaurant_info.js`,
                `/data/restaurants.json`,
                `/img/1.jpg`,
                `/img/2.jpg`,
                `/img/3.jpg`,
                `/img/4.jpg`,
                `/img/5.jpg`,
                `/img/6.jpg`,
                `/img/7.jpg`,
                `/img/8.jpg`,
                `/img/9.jpg`,
                `/img/10.jpg`

            ])
                .then(() => self.skipWaiting());
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.open(cacheName)
            .then(cache => cache.match(event.request, {ignoreSearch: true}))
            .then(response => {
                return response || fetch(event.request);
            })
    );
});