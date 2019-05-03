/**
 * Registration of the service worker
 */
if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js').then(function() {
      console.log('Service worker registration worked!');
    }).catch(function(err) {
      console.log('Service worker registration failed! ' + err);
    });
}
  