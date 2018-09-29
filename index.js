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

  if (totalValue === 0) {
    return 'Shopping list is empty.'
  }

  totalValue = totalValue + applySavings(listByProduct)

  return totalValue
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