function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`
}

const bodyRef = document.body
const colorRef = document.querySelector('.color')
const changeColor = document.querySelector('.change-color')

function updateColor() {
  const color = getRandomHexColor()
  bodyRef.style.background = color
  colorRef.textContent = color
}

changeColor.addEventListener('click', updateColor)
