const inputRef = document.querySelector('input')
const createRef = document.querySelector('[data-create]')
const destroyRef = document.querySelector('[data-destroy]')
const boxesRef = document.querySelector('#boxes')

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

function createMarkup(amount) {
  let size = 30
  let markup = ''
  for (let i = 0; i < amount; i++) {
    markup += `<div class="item" style="width: ${size}px; height: ${size}px;
    background:  ${getRandomHexColor()}"></div>`
    size += 10
  }
  return markup
}

function clearMarkup() {
  updateMarkup()
  inputRef.value = ''
}

function getValue() {
  const value = inputRef.value
  if (!value) return
  createBoxes(Number(value))
}

function createBoxes(amount) {
  const markup = createMarkup(amount)
  updateMarkup(markup)
}

function updateMarkup(markup = '') {
  boxesRef.innerHTML = markup
}

createRef.addEventListener('click', getValue)
destroyRef.addEventListener('click', clearMarkup)
