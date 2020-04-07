// Check if service workers are suppoerted
if ('serviceWorker' in navigator) {
  window.addEventListener('load',() => {
    navigator.serviceWorker
    .register('../sw_cached_site.js')
    .then(reg => console.log('Servive Worker: Registered'))
    .catch(err => console.log(`Service Worker: ${err}`))
  })
}