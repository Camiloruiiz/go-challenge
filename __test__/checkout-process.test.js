import {priceList} from '../index.js'

describe('Supermarket checkout process',()=> {
  
  describe('Products values', ()=> {
    test('Product A value should be equal to 50', ()=> {
      expect(priceList['A']).toBe(50);
    })
    test('Product B value should be equal to 30', ()=> {
      expect(priceList['B']).toBe(30);
    })
    test('Product C value should be equal to 20', ()=> {
      expect(priceList['C']).toBe(20);
    })
    test('Product D value should be equal to 15', ()=> {
      expect(priceList['D']).toBe(15);
    })
  })
  
})