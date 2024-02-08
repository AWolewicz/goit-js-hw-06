const spanValue = document.querySelector('#value');
let counterValue = 0;

const decrementValue = document.querySelector('button[data-action="decrement"]');
const incrementValue = document.querySelector('button[data-action="increment"]');

decrementValue.addEventListener('click', () => {
  spanValue.textContent = counterValue;
  return counterValue -= 1;
});

incrementValue.addEventListener('click', () => {
  spanValue.textContent = counterValue;
  return counterValue += 1;
});