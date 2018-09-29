import {priceList} from '../index.js'

describe('Supermarket checkout process',()=> {
  test('Product A value', ()=> {
    expect(priceList['A']).toBe(50);
  })
  test('Product B value', ()=> {
    expect(priceList['B']).toBe(30);
  })
  test('Product C value', ()=> {
    expect(priceList['C']).toBe(20);
  })
})