if (navigator.serviceWorker) {
  // register the serviceworker
  navigator.serviceWorker
    .register("./sw.js")
    .then(() => {
      console.log("Service Worker is registered successfully 1!");
    })
    .catch((err) => {
      console.log("Error while registering the service worker - ", err);
    });
}
