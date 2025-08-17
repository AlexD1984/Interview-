
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("it-cache-v1").then((cache) => cache.addAll(["./", "./index.html", "./assets/icon.png", "./assets/icon-192.png", "./assets/icon-512.png", "./manifest.webmanifest"]))
  );
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
