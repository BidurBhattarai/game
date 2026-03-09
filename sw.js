const V='aio-v3';
const FILES=['./',  './index.html','./manifest.json','./games/runner.html','./games/shooter.html','./games/platformer.html','./games/match3.html','./games/memory.html','./games/sudoku.html','./games/ludo.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
