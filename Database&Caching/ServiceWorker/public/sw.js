const CACHE_NAME = "my-cache-v1";
const urlsToCache = ["/", "/index.html", "/style.css", "/app.js", "/image.gif"]; // this will take all the file that we want to cache in serviceworker

// below will install the service worker and cache the files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// below will fetch the files from cache if available otherwise from network - match will look for the request in cache
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
