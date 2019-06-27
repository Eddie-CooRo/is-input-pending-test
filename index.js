window.addEventListener('load', () => {
  document.getElementById('button').addEventListener('click', function() {
    console.log('Clicked');
  });
  let startBlock = null;
  let endBlock = null;
  document.getElementById('startBlock').addEventListener('click', function() {
    if (startBlock || startNonBlock) return;
    startBlock = Date.now();
    endBlock = Date.now() + 5 * 1000;
    function block() {
      console.log(
        'Starting while for',
        (endBlock - Date.now()) / 1000,
        'seconds.'
      );
      while (Date.now() < endBlock) {}
      if (Date.now() >= endBlock) {
        console.log('End of 5 seconds');
        startBlock = null;
        endBlock = null;
      }
    }
    block();
  });
  let startNonBlock = null;
  let endNonBlock = null;
  document
    .getElementById('startNonBlock')
    .addEventListener('click', function() {
      if (startNonBlock || startBlock) return;
      startNonBlock = Date.now();
      endNonBlock = Date.now() + 5 * 1000;
      function block() {
        console.log(
          'Starting while loop for',
          (endNonBlock - Date.now()) / 1000,
          'seconds.'
        );
        while (Date.now() < endNonBlock) {
          if (navigator.scheduling.isInputPending(['click'])) {
            console.log('Returning to browser in order to handle click event');
            setTimeout(block, 0);
            break;
          }
        }
        if (Date.now() >= endNonBlock) {
          console.log('End of 5 seconds');
          startNonBlock = null;
          endNonBlock = null;
        }
      }
      block();
    });
});
