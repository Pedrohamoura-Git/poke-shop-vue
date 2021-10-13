<template>
 <button class="hamburger hamburger--chop" :class="{ active: burgerIsActive }" @click="ShowSidebar()" type="button">
  <div class="inner">
   <span class="bar"></span>
   <span class="bar"></span>
   <span class="bar"></span>
  </div>
 </button>
</template>

<script>
export default {
 data() {
  return {};
 },
 computed: {
  burgerIsActive() {
   return this.$store.state.burger.burgerIsActive;
  },
 },
 methods: {
  ShowSidebar() {
   this.$store.commit("sidebar/mutateShowSidebar");
    this.mutateToggleBurger();
  },
  mutateToggleBurger() {
   this.$store.commit("burger/mutateToggleBurger");
  }
 },
};
</script>

<style lang="scss" src="./scss/_burger.scss" scoped/>
