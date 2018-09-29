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
  let listGroupByProduct = {}
  
  let totalValue = 0

  listByProduct.forEach(element => {
    if (listGroupByProduct[element]){
      listGroupByProduct[element] = listGroupByProduct[element] + element
    } else {
      listGroupByProduct[element] = element
    }
  })
  
  listByProduct.forEach(element => {
    totalValue += getProductValue(element)
  })

  if (totalValue === 0){
    return 'Shopping list is empty.'
  }

  if(listGroupByProduct['A']){
    let amoutnAProducts = listGroupByProduct['A'].length
    let totalASavings = Math.floor(amoutnAProducts/3)*20
    return totalValue - totalASavings
  }
  
  return totalValue
}
