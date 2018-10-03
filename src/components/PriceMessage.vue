<template>
  <h1 class="supermarket__message"> {{ priceMessage || '' }}</h1>
</template>

<script>
export default {
  name: 'price-message',
  props: [
    'priceMessage'
  ]
}
</script>

<style lang="scss">
  .supermarket__message {
    text-align: center;
    height: 45px;
  }
</style>
