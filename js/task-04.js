let counterValue = 0;
const decrementButton = document.querySelector('button[data-action="decrement"]') ;
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');


decrementButton.addEventListener('click', () => {
    counterValue--;
    updateCounter();
  });
  incrementButton.addEventListener('click', () => {
    counterValue++;
    updateCounter();
  });
  function updateCounter() {
    valueSpan.textContent = counterValue;
  }