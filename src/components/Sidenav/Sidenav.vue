<template>
<aside v-if="showSidebar" class="sidenav">
  <router-link class="sidenav_link" :to="{ name: 'Home' }">Lista de tipos</router-link>
</aside>
</template>

<script>
export default {
  data() {
    return{}
  }, 
  computed: {
    showSidebar() {
      return this.$store.state.sidebar.showSidebar
    }
  },
}
</script>

<style lang="scss" src="./scss/_sidenav.scss" scoped/>
