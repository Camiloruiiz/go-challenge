import { shallowMount } from '@vue/test-utils'
import Price from '@/components/Price.vue'
import PriceMessage from '@/components/PriceMessage.vue'

describe('Price.vue', () => {
  test('PriceMessage when button is clicked', () => {
    const shoppingList = 'CDBA'

    const wrapper = shallowMount(Price, {
      propsData: { shoppingList }
    })
    const button = wrapper.find('#calculate-price')
    button.trigger('click')
    const PriceMessageComponent = wrapper.find(PriceMessage)
    expect(PriceMessageComponent.props()).toEqual({ priceMessage: 'Price: 115' })

  })
  test('A empty shopping list return a error message when button is clicked', () => {
    const shoppingList = ''

    const wrapper = shallowMount(Price, {
      propsData: {
        shoppingList: shoppingList
      }
    })
    const button = wrapper.find('#calculate-price')
    button.trigger('click')
    const PriceMessageComponent = wrapper.find(PriceMessage)
    expect(PriceMessageComponent.props()).toEqual({ priceMessage: 'Shopping list is empty.' })
  })
})
