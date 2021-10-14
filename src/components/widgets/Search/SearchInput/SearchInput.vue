<!-- @format -->

<template>
 <div v-if="showSearchInput" class="search_input">
  <label class="search_input__label">
   <button class="btn btn--close_card" @click.prevent="handleCloseSearchInput()">
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
     <path
      d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"
     />
    </svg>
   </button>
   <input type="text" class="search_input__input" placeholder="Pesquise por nome" @keydown.enter="handleSearchInput($event)" />
  </label>
 </div>
</template>

<script>
export default {
 computed: {
  showSearchInput() {
   return this.$store.state.search.showSearchInput;
  },
  selectedType() {
   return this.$store.state.typeList.selectedType;
  },
 },
 methods: {
  handleCloseSearchInput() {
   this.mutateNameToFilter("");
   this.mutateShowSearchInput();
  },
  handleRoute() {
   const url = location.href;
   if (!url.match(`type-list/${this.selectedType}`)) this.pushRoute();
  },
  handleSearchInput(event) {
   if (!this.selectedTypeIsEmpty()) {
    const name = event.target.value;
    this.mutateNameToFilter(name);
    this.handleRoute();
   } else {
    alert("Por favor, selecione o tipo do pokemon antes.");
    this.mutateShowSidebar();
    this.mutateToggleBurger();
    this.mutateShowSearchInput();
   }
  },
  selectedTypeIsEmpty() {
   if (this.selectedType == "") return true;
   else return false;
  },
  mutateShowSearchInput() {
   this.$store.commit("search/mutateShowSearchInput");
  },
  mutateShowSidebar() {
   this.$store.commit("sidebar/mutateShowSidebar");
  },
  mutateToggleBurger() {
   this.$store.commit("burger/mutateToggleBurger");
  },
  mutateNameToFilter(name) {
   this.$store.commit("typeList/mutateNameToFilter", name);
  },
  pushRoute() {
   this.$router.push({
    name: "TypeList",
    params: { selectedType: this.selectedType },
   });
  },
 },
};
</script>

<style lang="scss" src="./scss/_searchInput.scss" scoped />
