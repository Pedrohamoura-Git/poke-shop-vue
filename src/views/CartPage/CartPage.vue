<!-- @format -->

<template>
 <main class="cart_page">
  <template class="empty_cart" v-if="allCartItems == 0">
   <h3 class="empty_cart__txt">O carrinho está vazio...</h3>
  </template>
  <section class="all_cart_items" v-else>
   <template v-for="(item, index) in allCartItems" :key="index">
    <CartItem :index="index" :item="item" />
   </template>
  </section>
  <Resume />
 </main>
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
