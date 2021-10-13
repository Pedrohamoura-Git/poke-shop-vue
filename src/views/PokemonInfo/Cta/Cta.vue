<template>
 <div class="cta">
  <div class="payment">
   <h3 class="price">{{ price() }}</h3>
   <p class="payment_methods">
    Em até <strong>12X<em> sem juros</em></strong> no Pokecard
   </p>
  </div>
  <div class="custom_border--bottom"></div>
  <div class="shipping">
   <p>Receba até 01 de <strong>Dezembro</strong></p>
   <div class="shipping__price">Grátis</div>
  </div>
  <div class="custom_border--bottom"></div>
  <router-link class="router_link" @click="handleCartItem()" :to="{ name: 'CartPage' }">comprar</router-link>
 </div>
</template>
<script>

//* functions
import {formatCurrency} from '../../../utils/transformData/index'


export default {
 props: { selectedPokemon: { required: true } },
 watch: {
  selectedPokemon: {
   deep: true,
   handler() {
   },
  },
 },
 computed: {
  allCartItems() {
   return this.$store.state.cart.allCartItems;
  },
  paramName() {
   return this.$route.params.name;
  },
 },
 methods: {
  price() {
   return formatCurrency(this.selectedPokemon.priceNum);
  },
  handleCartItem() {
   const resp = this.checkIsNew();

   if (resp.isNew) {
    this.addItem();
   }
  },
  checkIsNew() {
   const itemsQueryName = this.allCartItems != null ? this.allCartItems.map((item) => item.queryName) : [];

   for (let i = 0; i < itemsQueryName.length; i++) {
    if (itemsQueryName[i] == this.paramName) {
     const resp = { isNew: false, index: i };
     return resp;
    }
   }
   const resp = { isNew: true, index: null };
   return resp;
  },
  addItem() {
   var item = {};
   item["img"] = this.selectedPokemon.imgs[0];
   item["queryName"] = this.selectedPokemon.queryName;
   item["name"] = this.selectedPokemon.name.toLowerCase();
   item["quant"] = 1;
   item["priceNum"] = this.selectedPokemon.priceNum;
   item["totalPrice"] = formatCurrency(this.selectedPokemon.priceNum * item.quant);
   this.mutateAddCartItem(item);
   this.index = this.allCartItems.findIndex((item) => item.name === this.name);
  },
  mutateAddCartItem(item) {
   this.$store.commit("cart/mutateAddCartItem", item);
  },
 },
};
</script>

<style lang="scss" src="./scss/_cta.scss" scoped />
