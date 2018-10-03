import { shallowMount } from '@vue/test-utils'
import PriceMessage from '@/components/PriceMessage.vue'

describe('PriceMessage.vue', () => {
  it('renders props.total when passed', () => {
    const priceMessage = '100'
    const wrapper = shallowMount(PriceMessage, {
      propsData: { priceMessage }
    })
    expect(wrapper.text()).toBe(priceMessage)
  })

  it('renders default message if not passed a prop', () => {
    const defaultMessage = ''
    const wrapper = shallowMount(PriceMessage)
    expect(wrapper.text()).toBe(defaultMessage)
  })
})
