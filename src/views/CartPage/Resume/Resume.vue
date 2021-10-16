<!-- @format -->

<template>
 <section class="resume" v-if="info.itemsQuant > 0">
  <router-link class="keep_buying" :to="{ name: 'Home' }">
   <p>continuar comprando</p>
  </router-link>
  <h2 class="card_title">Resumo do pedido</h2>
  <p v-if="info.itemsQuant <= 1" class="poke_quant">{{ info.itemsQuant }} Pokémon</p>
  <p v-else class="poke_quant">{{ info.itemsQuant }} Pokémons</p>
  <div class="resume__total custom_border--top">
   <h3>total</h3>
   <div class="total_price">{{ info.TotalPriceSum }}</div>
  </div>
  <router-link :to="{ name: 'Home' }" class="complete_purchase" @click="completePurchase()">
   finalizar compra
  </router-link>
 </section>
</template>

<script>
import { formatCurrency } from "../../../utils/transformData/index";

export default {
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
 watch: {
  allCartItems: {
   deep: true,
   handler() {
    this.getInfo();
   },
  },
 },
 methods: {
  getInfo() {
   const itemsQuant = this.allCartItems.reduce((acc, item) => acc + item.quant, 0);
   const TotalPriceSum = formatCurrency(this.allCartItems.reduce((acc, item) => acc + item.priceNum * item.quant, 0));
   this.info["itemsQuant"] = itemsQuant;
   this.info["TotalPriceSum"] = TotalPriceSum;
  },
  completePurchase() {
   this.mutateRemoveAllCartItems();
   this.mutateShowPurchaseMsg();
  },
  mutateShowPurchaseMsg() {
   this.$store.commit("purchaseMsg/mutateShowPurchaseMsg");
  },
  mutateRemoveAllCartItems() {
   this.$store.commit("cart/mutateRemoveAllCartItems");
  },
 },
};
</script>

<style lang="scss" src="./scss/_resume.scss" />
