<!-- @format -->

<template>
 <div class="cart_page">
  <template v-if="allCartItems == 0">
   O carrinho está vazio...
  </template>
  <div class="all_cart_items" v-else>
   <template v-for="(item, index) in allCartItems" :key="index">
    <CartItem :index="index" :item="item" />
   </template>
  </div>
  <Resume />
 </div>
</template>
<script>
import CartItem from "./CartItem/CartItem.vue";
import Resume from "./Resume/Resume.vue";
export default {
 components: {
  CartItem,
  Resume,
 },
 data() {
  return {
   info: {},
  };
 },
 mounted() {
  this.getInfo();
 },
 computed: {
  allCartItems() {
   return this.$store.state.cart.allCartItems;
  },
 },
 methods: {
  getInfo() {
   this.info["itemsQuant"] = this.allCartItems.reduce((acc, item) => acc + item.quant, 0);
   this.info["TotalPriceSum"] = this.allCartItems.reduce(
    (acc, item) => acc + item.priceNum * item.quant,
    0
   );
  },
 },
};
</script>

<style lang="scss" src="./scss/_cartPage.scss" />
