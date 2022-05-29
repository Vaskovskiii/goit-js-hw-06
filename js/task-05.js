const nameInputRef = document.querySelector('#name-input')
const nameOutputRef = document.querySelector('#name-output')

function updateTextOutput(e) {
  const value = e.target.value.trim()
  nameOutputRef.textContent = value ? value : 'Anonymous'
}
nameInputRef.addEventListener('input', updateTextOutput)
