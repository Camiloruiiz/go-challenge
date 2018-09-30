export const priceOfferList = {
  A: {
    value: 50,
    offer: {
      cuantity: 3,
      value: 130,
    }
  },
  B: {
    value: 30,
    offer: {
      cuantity: 2,
      value: 45,
    }
  },
  C: {
    value: 20
  },
  D: {
    value: 15
  }
}

export function getProductValue(product) {
  let productValue = priceOfferList[product].value
  return productValue
}

function sumValues(listGroupByProduct) {
  let sumValue = 0
  for (var key in listGroupByProduct) {
    sumValue += listGroupByProduct[key].length * getProductValue(key)
  }
  return sumValue
}

function applySavings(listGroupByProduct, sumValue) {
  var totalSavings = 0
  for (const key in listGroupByProduct) {
    if (listGroupByProduct.hasOwnProperty(key)) {
      var product = priceOfferList[key];
      if (product.offer) {
        let amoutnProducts = listGroupByProduct[key].length
        let saving = (product.value * product.offer.cuantity) - (product.offer.value)
        let savingByProduct = Math.floor(amoutnProducts / product.offer.cuantity) * saving
        totalSavings = totalSavings - savingByProduct
      }
    }
  }
  return sumValue + totalSavings
}

function groupByProduct(shoppingList) {
  let listByProduct = shoppingList.split('')
  let listGroupByProduct = {}
  listByProduct.forEach(element => {
    if (listGroupByProduct[element]) {
      listGroupByProduct[element] = listGroupByProduct[element] + element
    } else {
      listGroupByProduct[element] = element
    }
  })
  return listGroupByProduct
}

export function priceOf(shoppingList) {
  let totalValue
  let listGroupByProduct = groupByProduct(shoppingList)
  let sumValue = sumValues(listGroupByProduct)
  if (sumValue === 0) {
    throw new Error("Shopping list is empty.");
  }
  totalValue = applySavings(listGroupByProduct, sumValue)
  return totalValue
}