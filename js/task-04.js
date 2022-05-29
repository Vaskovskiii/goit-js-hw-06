const decrementRef = document.querySelector('[data-action="decrement"]')
const incrementRef = document.querySelector('[data-action="increment"]')
const valueRef = document.querySelector('#value')
let counterValue = 0

function decrement() {
  counterValue -= 1
  updateCounterValue()
}

function increment() {
  counterValue += 1
  updateCounterValue()
}

function updateCounterValue() {
  valueRef.textContent = counterValue
}

decrementRef.addEventListener('click', decrement)
incrementRef.addEventListener('click', increment)
