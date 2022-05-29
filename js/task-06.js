const validationInputRef = document.querySelector('#validation-input')

function validationInput(e) {
  const t = e.target
  const length = Number(t.dataset.length)

  if (length === t.value.trim().length) {
    return updateClassElement(t, 'valid', 'invalid')
  }
  updateClassElement(t, 'invalid', 'valid')
}

function updateClassElement(elem, add, rem) {
  elem.classList.add(add)
  elem.classList.remove(rem)
}

validationInputRef.addEventListener('blur', validationInput)
