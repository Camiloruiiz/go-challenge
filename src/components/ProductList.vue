<template>
  <div class="supermarket__products-wrap">
    <div class="supermarket__btn supermarket__btn--radius" :key="item" v-for="item in items" @click="$emit('add-item-to-list', item)">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-list',
  props: [
    'items'
  ]
}
</script>
<style lang="scss">
.supermarket__products-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
</style>
