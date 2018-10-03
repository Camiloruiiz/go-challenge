<template>
  <div id="app" class="supermarket">
    <h1 class='supermarket__title' >SuperMarket</h1>
    <div class="supermarket__inner">
      <product-list :items="['A', 'B', 'C', 'D']"  @add-item-to-list="addItemToList($event)" />
      <shopping-list :shoppingList="shoppinListItems"></shopping-list>
      <price :shoppingList="shoppinListItems"/>
    </div>
  </div>
</template>

<script>
import Price from '@/components/Price.vue'
import ProductList from '@/components/ProductList.vue'
import ShoppingList from '@/components/ShoppingList.vue'

export default {
  name: 'app',
  data () {
    return {
      shoppinListItems: ''
    }
  },
  components: {
    Price,
    ProductList,
    ShoppingList
  },
  methods: {
    addItemToList: function (item) {
      let vm = this
      vm.shoppinListItems += item
    }
  }
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);

:root {
  --primary-color: #5a5a8d;
  --dark-color: #3f437a;
  --light-color: #f5fff8;
  --bkg-color: #f0f0d8;
}

* {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Patrick Hand SC', cursive;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin: 0;
  color: var(--primary-color);
  background: var(--bkg-color);
}

.supermarket {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;

  &__title {
    font-size: 3rem;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 400px;
  }

  &__btn {
    display: block;
    margin-bottom: 16px;
    padding: 16px 36px 22px;
    transition: all .5s ease;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
    border-radius: 6px;
    background-color: var(--light-color);

    position: relative;
    overflow: hidden;

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      display: block;
      backface-visibility: hidden;
      width: 100%;
      height: 7px;
      content: '';
      border-top: 1px solid var(--primary-color);
      background-image: repeating-linear-gradient(45deg,
        var(--primary-color),
        var(--primary-color) 1px,
        transparent 2px,
        transparent 5px);
      background-size: 7px 7px;
      -webkit-backface-visibility: hidden;
    }

    &:hover {
      color: var(--light-color);
      border-color: var(--dark-color);
      background-color: var(--primary-color);

      &:after {
        animation: stripe-slide 12s infinite linear forwards;
        border-top: 1px solid var(--dark-color);
        background-image: repeating-linear-gradient(45deg,
          var(--light-color),
          var(--light-color) 1px,
          transparent 2px,
          transparent 5px);
      }
    }
    &--radius {
        border-radius: 36px;
    }
  }
}

@keyframes stripe-slide {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: 100% 0;
  }
}

</style>
