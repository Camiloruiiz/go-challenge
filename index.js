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
