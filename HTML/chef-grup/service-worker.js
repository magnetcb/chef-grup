importScripts('./js/cache-polyfill.js');

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('chefgrup').then(function(cache) {
            return cache.addAll([
                '.',
                'index.html',
                'about.html',
                'brands.html',
                'contact.html',
                'images/hero-image-1.jpg',
                'images/hero-image-2.jpg',
                'images/hero-image-3.jpg',
                'images/logo-chef-doner.png',
                'images/logo-chef-meyhane.png',
                'images/logo-chef-mezze.png',
                'images/logo.png',
                'images/rect.png',
                'images/team-image.png',
                'images/team-image-2.JPG',
                'css/contact.css',
                'css/main.css',
                'css/nav.css',
                'js/main.js'
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log("Service Worker: Fetching...");
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});