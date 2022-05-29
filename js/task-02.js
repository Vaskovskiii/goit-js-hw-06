const ingredientsRef = document.querySelector('#ingredients')
console.log('object :>> ', ingredientsRef)

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
]

const markUp = ingredients.map((item) => {
  const li = document.createElement('li')
  li.textContent = item
  li.classList.add('item')
  return li
})

ingredientsRef.append(...markUp)
console.log('markUp :>> ', markUp)
