// Check if service workers are suppoerted
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('../sw_cached_site.js')
    .then(reg => console.log('Servive Worker: Registered'))
    .catch(err => console.log(`Service Worker: ${err}`))

}

window.addEventListener('load', function() {
  function updateOnlineStatus(event) {
    if (navigator.onLine) {
      document.documentElement.classList.remove('is-offline');
      document.querySelector('.connection-status').innerHTML =`<div data-alert class="alert-box success online">
      You're back online!
    </div>`;
    $(".online").delay(3000).fadeOut();
    } else {
      document.documentElement.classList.add('is-offline');
      document.querySelector('.connection-status').innerHTML = `<div data-alert class="alert-box warning offline">You are currently offline, but no worries, you can still call us at [phone]</div>`;
    }
  }

  window.addEventListener('online',  updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
});