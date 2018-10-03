import { shallowMount } from '@vue/test-utils'
import ProductList from '@/components/ProductList.vue'

describe('ProductList.vue', () => {
  test('renders produt for each item in props.items', () => {
    const items = ['A', 'B']
    const wrapper = shallowMount(ProductList, {
      propsData: { items }
    })
    expect(wrapper.findAll('.supermarket__btn')).toHaveLength(items.length)
  })
})
