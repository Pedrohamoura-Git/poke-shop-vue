<template>
 <nav class="nav">
  <router-link :to="{ name: 'Home' }" class="nav__link">
   <img src="@/assets/images/logo.png" alt="pokemon logo" class="nav__logo" />
  </router-link>
  <div class="nav__actions">
   <transition
    enter-active-class="animate__animated animate__bounceIn animate__faster"
    leave-active-class="animate__animated animate__bounceOut animate__faster"
    mode="out-in"
    appear
   >
    <PokeCart />
   </transition>
   <Search />
   <Burguer />
   <transition
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
    mode="out-in"
    appear
   >
    <CartPopup />
   </transition>
  </div>
 </nav>
</template>

<script>
import Burguer from "../widgets/Burger/Burger.vue";
import Search from "../widgets/Search/Search.vue";
import PokeCart from "../widgets/PokeCart/pokeCart.vue";
import CartPopup from "../widgets/PokeCart/CartPopup/CartPopup.vue";

export default {
 components: { Burguer, Search, PokeCart, CartPopup },
};
</script>

<style lang="scss" src="./scss/_topNavbar.scss" scoped />
