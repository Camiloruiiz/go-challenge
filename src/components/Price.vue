<template>
  <div class="supermarket__price">
    <button id="calculate-price" class="supermarket__btn supermarket__price__btn" @click="calculatePrice">
      Calculate Price
    </button>
    <price-message :priceMessage="priceMessage"></price-message>
  </div>
</template>

<script>
import PriceMessage from '@/components/PriceMessage.vue'
import { priceOf } from '@/assets/checkout-process'

export default {
  name: 'price',
  props: [
    'shoppingList'
  ],
  data () {
    return {
      priceMessage: null
    }
  },
  methods: {
    calculatePrice () {
      let vm = this
      try {
        vm.priceMessage = `Price: ${priceOf(vm.shoppingList)}`
      } catch (err) {
        vm.priceMessage = err.message
      }
    }
  },
  components: {
    PriceMessage
  }
}
</script>
<style lang="scss">
.supermarket__price {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
}
</style>
