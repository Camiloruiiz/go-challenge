import {priceList} from '../index.js'

describe('Supermarket checkout process',()=> {
  test('Product A value', ()=> {
    expect(priceList['A']).toBe(50);
  })
})