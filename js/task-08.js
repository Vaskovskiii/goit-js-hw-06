const loginFormRef = document.querySelector('.login-form')

function getDataForm(e) {
  e.preventDefault()
  const { email, password } = e.target.elements
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()

  if (!emailValue || !passwordValue) {
    return alert('Треба заповнити всі поля!')
  }
  const data = {
    [email.name]: emailValue,
    [password.name]: passwordValue,
  }
  //console.log(data)
  e.currentTarget.reset()
}

loginFormRef.addEventListener('submit', getDataForm)
