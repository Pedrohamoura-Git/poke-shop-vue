<template>
 <div class="cart_item custom_border--bottom custom_border--right">
  <router-link class="poke_link" :to="{ name: 'PokemonInfo', params: { name: item.name } }">
   <img class="poke_img" :src="item.img" />
   <p class="poke_name">{{ item.name }}</p>
  </router-link>
  <div class="cart_item__actions">
   <input type="number" :class="`items_quant--${item.name}`" :value="item.quant" @input="handleItemQuant()" />
   <button class="btn btn--remove" @click="removeItem()">remover</button>
  </div>
 </div>
</template>

<script>
//* functions
import {formatCurrency} from "../../../utils/transformData/index";

export default {
 props: { index: { required: true }, item: { required: true } },
 data() {
  return {
   quantInput: 0,
  };
 },
 mounted() {
 },
 computed: {
  allCartItems() {
   return this.$store.state.cart.allCartItems;
  },
 },
 watch: {
  item: {
   deep: true,
   handler() {
    if (this.item.quant != 0) {
     this.quantInput = this.item.quant;
    }
   },
  },
 },
 methods: {
  handleItemQuant() {
   this.updateItemQuant();
   this.updateTotalPrice();
  },
  updateItemQuant() {
   const quant = Number(document.querySelector(".items_quant--" + `${this.item.name}`).value);
   const payload = { index: this.index, quant: quant };
   this.mutateItemQuant(payload);
  },
  updateTotalPrice() {
   const quant = Number(document.querySelector(".items_quant--" + `${this.item.name}`).value);
   const newTotalPrice = formatCurrency(quant * this.item.priceNum);
   const payload = { index: this.index, newTotalPrice: newTotalPrice };
   this.mutateTotalPrice(payload);
  },
  mutateItemQuant(payload) {
   this.$store.commit("cart/mutateItemQuant", payload);
  },
  mutateTotalPrice(payload) {
   this.$store.commit("cart/mutateTotalPrice", payload);
  },
  removeItem() {
   if (confirm("Você têm certeza?")) {
    this.$store.commit("cart/mutateRemoveCartItem", this.index);
   }
  },
 },
};
</script>

<style lang="scss" src="./scss/_cartItem.scss" />
