const listLiRef = document.querySelectorAll('.item')
console.log('Number of categories: ', listLiRef.length)

listLiRef.forEach((item) => {
  console.log(
    `Categorie: ${item.querySelector('h2').textContent} \nElements: ${
      item.querySelectorAll('li').length
    }`,
  )
})
