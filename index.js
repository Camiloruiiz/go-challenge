export const priceList = {
  A: 50,
  B: 30,
  C: 20,
  D: 15
}

export function getProductValue(product) {
  let productValue = priceList[product]
  return productValue
}

export function sumValues(shoppingList) {
  let listByProduct = shoppingList.split('')
  let totalValue = 0

  listByProduct.forEach(element => {
    totalValue += getProductValue(element)
  })

  if (totalValue === 0){
    return 'Shopping list is empty.'
  }

  return totalValue
}
