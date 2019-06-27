window.addEventListener('load', function() {
  if (navigator.scheduling && navigator.scheduling.isInputPending) {
    globalThis.supportsInputPending = true;
  } else {
    globalThis.supportsInputPending = false;
    const root = document.getElementById('root');
    console.log('Please use chrome > v74 in order to use this new API');
    root.innerHTML = "<h1>Your browser doesn't support isInputPendingAPI</h1>";
  }
});
