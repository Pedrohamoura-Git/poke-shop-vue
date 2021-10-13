<!-- @format -->

<template>
 <div class="home" id="scroll_to_me">
  <div v-for="(poke, index) in paginationData" :key="index">
  <router-link :to="{ name: 'TypeList', params: {selectedType: poke.type.en_us}}">
    <PokeballCard :type="poke.type.pt_br" :imageUrl="poke.image.url" 
    @click="handleSelectedType(poke.type.en_us)" 
    />
  </router-link>
  </div>
 </div>
 <div class="pagination_container" v-if="templates.length !== 0">
  <Pagination
   v-if="templates"
   :listLength="templates.length"
   :perPageOptions="perPageOptions"
   @newPage="pagination.page = $event"
   @newPerPage="pagination.perPage = $event"
  />
 </div>
</template>

<script>
import PokeballCard from "../../components/PokeballCard/PokeballCard";
import Pagination from "../../components/Pagination/Pagination.vue";

const perPageOptions = [4, 8, 12, 20, 50, 100];
export default {
 components: { PokeballCard, Pagination },
 data() {
  return {
   //**pagination**//
   perPageOptions,
   pagination: {
    page: 1,
    perPage: perPageOptions[2],
   },

   templates: [
    {
     id: 10,
     type: { en_us: "fire", pt_br: "Fogo" },
     color: "#CF2C03",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg",
     },
    },
    {
     id: 11,
     type: { en_us: "water", pt_br: "Água" },
     color: "#3B9BF1",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg",
     },
    },
    {
     id: 12,
     type: { en_us: "grass", pt_br: "Planta" },
     color: "#67AF32",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
     },
    },
    {
     id: 1,
     type: { en_us: "normal", pt_br: "Normal" },
     color: "#C4C0B4",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg",
     },
    },
    {
     id: 2,
     type: { en_us: "fighting", pt_br: "Lutador" },
     color: "#852816",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/56.svg",
     },
    },
    {
     id: 3,
     type: { en_us: "flying", pt_br: "Voador" },
     color: "#8FA4FF",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg",
     },
    },
    {
     id: 4,
     type: { en_us: "poison", pt_br: "Venenoso" },
     color: "#924990",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg",
     },
    },
    {
     id: 5,
     type: { en_us: "ground", pt_br: "Terra" },
     color: "#C5A455",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg",
     },
    },
    {
     id: 6,
     type: { en_us: "rock", pt_br: "Pedra" },
     color: "#5E491C",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/74.svg",
     },
    },
    {
     id: 7,
     type: { en_us: "bug", pt_br: "Inseto" },
     color: "#87950C",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg",
     },
    },
    {
     id: 8,
     type: { en_us: "ghost", pt_br: "Fantasma" },
     color: "#6969AF",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/92.svg",
     },
    },
    {
     id: 9,
     type: { en_us: "steel", pt_br: "Metálico" },
     color: "#7F8488",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/81.svg",
     },
    },

    {
     id: 13,
     type: { en_us: "electric", pt_br: "Elétrico" },
     color: "#E08D00",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg",
     },
    },
    {
     id: 14,
     type: { en_us: "psychic", pt_br: "Psíquico" },
     color: "#E25484",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/63.svg",
     },
    },
    {
     id: 15,
     type: { en_us: "ice", pt_br: "Gelo" },
     color: "#8de4f5",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/87.svg",
     },
    },
    {
     id: 16,
     type: { en_us: "dragon", pt_br: "Dragão" },
     color: "#7361D1",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/147.svg",
     },
    },
    {
     id: 17,
     type: { en_us: "dark", pt_br: "Noturno" },
     color: "#413831",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/197.svg",
     },
    },
    {
     id: 18,
     type: { en_us: "fairy", pt_br: "Fada" },
     color: "#E29FE6",
     image: {
      url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/35.svg",
     },
    },
   ],
  };
 },
 computed: {
  paginationData() {
   if (!this.templates) return [];
   else {
    const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
    const lastIndex = this.pagination.page * this.pagination.perPage;
    return this.templates.slice(firstIndex, lastIndex);
   }
  },
 },
 methods: {
  handleSelectedType(type) {
    this.mutateSelectedType(type);
  },
  mutateSelectedType(type) {
   this.$store.commit("typeList/mutateSelectedType", type);
  },
 },
};
</script>

<style lang="scss" src="./scss/_home.scss" />
