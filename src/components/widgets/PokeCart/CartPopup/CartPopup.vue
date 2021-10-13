<template>
 <div class="cart_popup" v-if="showCartPopup" @click="mutateShowCartPopup()">
  <div class="inner" v-if="allCartItems">
   <router-link class="router_link" :to="{ name: 'CartPage' }">Ver Carrinho</router-link>
   <router-link v-for="(pokemon, index) in allCartItems" :key="index" 
   :to="{ name: 'PokemonInfo', params: { name: `${pokemon.queryName}` } }">
    <PopupInfo :popupInfo="pokemon" />
   </router-link>
  </div>
 </div>
</template>

<script>
import PopupInfo from "./PopupInfo/PopupInfo";

export default {
 components: { PopupInfo },
 computed: {
  showCartPopup() {
   return this.$store.state.cart.showCartPopup;
  },
  allCartItems() {
   return this.$store.state.cart.allCartItems;
  },
 },
 methods: {
  mutateShowCartPopup() {
   this.$store.commit("cart/mutateShowCartPopup");
  },
 },
};
</script>

<style lang="scss" src="./scss/_cartPopup.scss" scoped />
