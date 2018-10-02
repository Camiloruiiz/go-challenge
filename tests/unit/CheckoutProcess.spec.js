import { priceOfferList, getProductValue, priceOf } from '@/assets/checkout-process.js'

describe('Supermarket checkout process', () => {
  describe('Products values', () => {
    test('Product A value should be equal to 50', () => {
      expect(priceOfferList['A'].value).toBe(50)
    })
    test('Product B value should be equal to 30', () => {
      expect(priceOfferList['B'].value).toBe(30)
    })
    test('Product C value should be equal to 20', () => {
      expect(priceOfferList['C'].value).toBe(20)
    })
    test('Product D value should be equal to 15', () => {
      expect(priceOfferList['D'].value).toBe(15)
    })
  })
  describe('Get values from a shopping list', () => {
    test('Product values should be equal to priceOfferList values', () => {
      expect(getProductValue('A')).toBe(priceOfferList['A'].value)
      expect(getProductValue('B')).toBe(priceOfferList['B'].value)
      expect(getProductValue('C')).toBe(priceOfferList['C'].value)
      expect(getProductValue('D')).toBe(priceOfferList['D'].value)
    })
    test('Empty Shopping list should return a error message', () => {
      const shoppingList = ''
      expect(() => { priceOf(shoppingList) }).toThrow('Shopping list is empty.')
    })
    describe('Shopping list with more than one products', () => {
      test('total value of "AB" shopping list, should be 80', () => {
        const shoppingList = 'AB'
        expect(priceOf(shoppingList)).toBe(80)
      })
      test('total value of "BC" shopping list, should be 50', () => {
        const shoppingList = 'BC'
        expect(priceOf(shoppingList)).toBe(50)
      })
      test('total value of "CD" shopping list, should be 35', () => {
        const shoppingList = 'CD'
        expect(priceOf(shoppingList)).toBe(35)
      })
      test('total value of "CDBA" shopping list, should be 115', () => {
        const shoppingList = 'CDBA'
        expect(priceOf(shoppingList)).toBe(115)
      })
    })
    describe('Shopping list with multi priced products', () => {
      test('total value of "AAA" shopping list, should be 130', () => {
        const shoppingList = 'AAA'
        expect(priceOf(shoppingList)).toBe(130)
      })
      test('total value of "BB" shopping list, should be 45', () => {
        const shoppingList = 'BB'
        expect(priceOf(shoppingList)).toBe(45)
      })
      test('total value of "AAABB" shopping list, should be 175', () => {
        const shoppingList = 'AAABB'
        expect(priceOf(shoppingList)).toBe(175)
      })
      test('total value of "ABACDACDB" shopping list, should be 245', () => {
        const shoppingList = 'ABACDACDB'
        expect(priceOf(shoppingList)).toBe(245)
      })
    })
  })
})
