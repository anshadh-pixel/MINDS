self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('memory-game').then(cache => {
      return cache.addAll([
        'index.html',
        'manifest.json',
        'service-worker.js',
        'background.jpg',
        'card-back.png',
        'icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});