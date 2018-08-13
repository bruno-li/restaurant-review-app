/***********   Service Worker registration  ************/

document.addEventListener("DOMContentLoaded", event => {
  if (navigator.serviceWorker) {
    navigator.serviceWorker
      .register("sw.js")
      .then(registration =>
        console.log("Service Worker Registered", registration)
      )
      .catch(e => console.log("Registration has failed :(", e));
  }
});
