<template>
  <div class="supermarket__shopping-list">
     <h2 class="supermarket__shopping-list_title">Shopping List</h2>
     {{ shoppingList }}
  </div>
</template>

<script>

export default {
  name: 'shopping-list',
  props: [
    'shoppingList'
  ]
}
</script>

<style lang="scss">
.supermarket__shopping-list_title {
  font-size: 2rem;
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--primary-color);
}

.supermarket__shopping-list {
  font-size: 2rem;
  width: 100%;
  min-height: 180px;
  margin: 2rem 0 4rem 0;
  padding: 2rem;
  letter-spacing: 1px;
  word-wrap: break-word;
  color: var(--dark-color);
  border: dashed 5px var(--primary-color);
  border-radius: 255px 15px 225px 15px/15px 225px 15px 255px;
  outline: none;
  background: transparent;
  box-shadow: 20px 38px 34px -26px hsla(0, 0%, 0%, .2);
  align-self: center;
}

</style>
