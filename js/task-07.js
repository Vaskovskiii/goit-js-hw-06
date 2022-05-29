const inputRef = document.querySelector('input')
const textRef = document.querySelector('#text')

function updateStyleElement(e) {
  console.log('e.target.value :>> ', 444)
  textRef.style.cssText = `font-size: ${e.target.value}px`
}

textRef.style.fontSize = inputRef.value + 'px'
inputRef.addEventListener('input', updateStyleElement)
