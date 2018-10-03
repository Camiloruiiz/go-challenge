import { shallowMount } from '@vue/test-utils'
import ShoppingList from '@/components/ShoppingList.vue'

describe('ShoppingList.vue', () => {
  test('renders props.shoppingList  when passed', () => {
    const shoppingList = 'CDBAAACDACBB'
    const wrapper = shallowMount(ShoppingList, {
      propsData: { shoppingList }
    })
    const shoppingListTest = wrapper.find('.supermarket__shopping-list')
    expect(shoppingListTest.text()).toContain(shoppingList)
  })
})
