
const counter = document.querySelector('#value');
const incrementButtonEl = document.querySelector('[data-action="increment"]');
const decrementButtonEl = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

const incrementCounter = () => {
    counterValue += 1;
    counter.textContent = counterValue;

}
const decrementCounter = () => {
    counterValue -= 1;
    counter.textContent = counterValue;

}

incrementButtonEl.addEventListener('click', incrementCounter);
decrementButtonEl.addEventListener('click', decrementCounter);