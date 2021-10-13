<template>
 <TopNavbar />
 <div class="wrapper">
  <transition
   enter-active-class="animate__animated animate__slideInRight animate__faster"
   leave-active-class="animate__animated animate__slideOutRight animate__faster"
   mode="out-in"
   appear
  >
   <Sidenav />
  </transition>
  <router-view />
 </div>
  <SuccessMsg />
</template>

<script>
import TopNavbar from "./components/TopNavbar/TopNavbar.vue"
import Sidenav from "./components/Sidenav/Sidenav.vue";
import SuccessMsg from "./components/widgets/SuccessMsg/SuccessMsg.vue";

//** Functions
//* Requests
import {LocalStorageIsEmpty} from './utils/localStorage/index'
import {getAllCartItemsFromLocalStorage} from './utils/localStorage/index'
import {setAllCartItemsInLocalStorage} from './utils/localStorage/index'


export default {
  components: { TopNavbar, Sidenav, SuccessMsg},
 mounted() {
  this.handleLocalStorage();
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
    if (this.allCartItems != null) setAllCartItemsInLocalStorage(this.allCartItems);
   },  
  },  
 },
 methods: {
  handleLocalStorage() {
   const resp = LocalStorageIsEmpty();
   if (resp && this.allCartItems.length == 0) {
     const localAllCartItems = getAllCartItemsFromLocalStorage();
      this.mutateAllCartItems(localAllCartItems);
   } 
  },
  mutateAllCartItems(allItems) {
   this.$store.commit("cart/mutateAllCartItems", allItems);
  },
 },
};
</script>

<style lang="scss" src="./assets/scss/index.scss" />
