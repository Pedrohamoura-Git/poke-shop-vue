<template>
 <div class="poke_cart" v-if="cartCont > 0">
  <div class="poke_box">
   <div class="cart_items">{{ cartCont }}</div>
   <div class="pokeball" @click="mutateShowCartPopup()">
    <div class="pokeball__button"></div>
   </div>
  </div>
 </div>
</template>
<script>
export default {
 computed: {
  allCartItems() {
   return this.$store.state.cart.allCartItems;
  },
  cartCont() {
   if (this.allCartItems != null) {
    const itemsQuant = this.allCartItems.reduce((acc, item) => acc + item.quant, 0);
    return itemsQuant;
   } else return 0;
  },
 },
 methods: {
  mutateShowCartPopup() {
   this.$store.commit("cart/mutateShowCartPopup");
  },
 },
};
</script>

<style lang="scss" src="./scss/_pokeCart.scss" scoped />
