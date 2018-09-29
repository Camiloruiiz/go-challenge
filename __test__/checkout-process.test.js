import {priceList} from '../index.js'

describe('Supermarket checkout process',()=> {
  test('Product A value', ()=> {
    expect(priceList['A']).toBe(50);
  })
  test('Product B value', ()=> {
    expect(priceList['B']).toBe(30);
  })
})