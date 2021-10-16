<template>
 <section 
    class="cart_popup" 
    v-if="showCartPopup"
    @click="mutateShowCartPopup()"
  >
  <div class="inner" v-if="allCartItems">
  <div class="cart_page_link">
    <router-link class="router_link" :to="{ name: 'CartPage' }">
    Ver Carrinho
   </router-link>
  </div>

  <div class="all_cart_items">
   <router-link 
    v-for="(pokemon, index) in allCartItems" 
    :key="index" 
    :to="{name: 'PokemonInfo', params: {name: `${pokemon.queryName}` }}"
    >

      <PopupItem :popupItem="pokemon" />

    </router-link>
  </div>
  </div>
 </section>
</template>

<script>
import PopupItem from "./PopupItem/PopupItem";

export default {
 components: { PopupItem },
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
