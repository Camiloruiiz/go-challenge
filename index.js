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

function sumValues(listByProduct) {
  let sumValue = 0
  listByProduct.forEach(element => {
    sumValue += getProductValue(element)
  })
  return sumValue
}

export function applySavings(listByProduct) {
  let listGroupByProduct = {}
  let totalValue = 0

  listByProduct.forEach(element => {
    if (listGroupByProduct[element]) {
      listGroupByProduct[element] = listGroupByProduct[element] + element
    } else {
      listGroupByProduct[element] = element
    }
  })

  if (listGroupByProduct['A']) {
    let amoutnAProducts = listGroupByProduct['A'].length
    let totalASavings = Math.floor(amoutnAProducts / 3) * 20
    totalValue = totalValue - totalASavings
  }

  if (listGroupByProduct['B']) {
    let amoutnAProducts = listGroupByProduct['B'].length
    let totalASavings = Math.floor(amoutnAProducts / 2) * 15
    totalValue = totalValue - totalASavings
  }

  return totalValue
}


export function priceOf(shoppingList) {
  let listByProduct = shoppingList.split('')

  let totalValue = sumValues(listByProduct)
  
  if (totalValue === 0) {
    return 'Shopping list is empty.'
  }

  totalValue = totalValue + applySavings(listByProduct)
  
  return totalValue
}