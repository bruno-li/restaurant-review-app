// label  for saving cache in the browser
let cacheName = "restaurants-review-cache-v2";

// fetches url for use
let cacheUrls = [
  "./",
  "./sw_registration.js",
  "index.html",
  "restaurant.html",
  "css/styles.css",
  "data/restaurants.json",
  "js/dbhelper.js",
  "js/main.js",
  "js/restaurant_info.js",
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
  "img/6.jpg",
  "img/7.jpg",
  "img/8.jpg",
  "img/9.jpg",
  "img/10.jpg"
];

//open and install the cash array, and perform install steps
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log("Opened Cache");
      return cache.addAll(cacheUrls);
    })
  );
});

self.addEventListener("activate", event => {
  //activate service worker
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request, { ignoreSearch: true })
      .then(response => {
        return response || fetch(event.request); // return if a match in the cache, or return original request if no match
      })
      .catch(err => console.log(err, event.request))
  );
});
