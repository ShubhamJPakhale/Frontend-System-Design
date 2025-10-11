const SERVICEWORKER_CACHE_NAME = "offline-support-app/v2";

const CACHE_FILES = ["index.html", "index.css", "Photo.jpg", "index.js"];
// self is serviceworker
// install the service  worker
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(SERVICEWORKER_CACHE_NAME).then((cache) => {
      cache.addAll(CACHE_FILES);
    })
  );
});

self.addEventListener("activate", (e) => {
  // Clean up useless cache
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key != SERVICEWORKER_CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  // offline experience
  // whenever file is requested
  // good practice - to call the api and get the files and if something some changes in file then update the file in serviceworker
  // else if network is not available then use cache files for the offline experinece

  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const cloneData = res.clone();
        caches.open(SERVICEWORKER_CACHE_NAME).then((cache) => {
          cache.put(e.request, cloneData);
        });
        return res;
      })
      .catch(() => {
        return caches.match(e.request).then((file) => file);
      })
  );
});

// 1. check whether service worker is supported or not - navigator.serviceWorker
// 2. register the serviceworker
// 3. install the serviceworkder
// 4. fetch the serviceworker file from the cache memory - offline support
// 5. use activate function to cleanup the cache which are not in use by application
