<!-- @format -->

<template>
 <div class="type_list" id="scroll_to_me">
  <div class="type_list__content">
   <Loading v-if="searchRepos.length == 0" />
   <template v-else v-for="(pokemon, index) in paginationData" :key="index">
    <PokeballCard
     v-if="pokemon.img !== null"
     :type="pokemon.name"
     :imageUrl="pokemon.img"
     @click="goToRoute('PokemonInfo', pokemon.name)"
    />
   </template>
  </div>
  <div class="pagination_container" v-if="searchRepos.length !== 0">
   <Pagination
    v-if="searchRepos"
    :listLength="searchRepos.length"
    :perPageOptions="perPageOptions"
    @newPage="pagination.page = $event"
    @newPerPage="pagination.perPage = $event"
   />
  </div>
 </div>
</template>

<script>
import PokeballCard from "../../components/PokeballCard/PokeballCard";
import Loading from "../../components/widgets/Loading/Loading";
import Pagination from "../../components/Pagination/Pagination.vue";

//** Functions
//* Requests
import { getAllPokemonsOfType } from "../../services/endpoints/types/index";
import { getImgFromUrl } from "../../services/endpoints/img/index";
//* Router
import { pushRoute } from "../../utils/routerNavigation/index";

const perPageOptions = [4, 8, 12, 20, 50, 100];
export default {
 components: {
  PokeballCard,
  Loading,
  Pagination,
 },
 data() {
  return {
   //**pagination**//
   perPageOptions,
   pagination: {
    page: 1,
    perPage: perPageOptions[2],
   },

   typeList: [],
  };
 },
 mounted() {
  this.handlePokeCard();
 },
 computed: {
  selectedType() {
   return this.$route.params.selectedType;
  },
  nameToFilter() {
   return this.$store.state.typeList.nameToFilter;
  },
  searchRepos() {
   return this.typeList.filter((pokemon) => {
    return pokemon.name.toLowerCase().match(this.nameToFilter);
   });
  },
  paginationData() {
   if (!this.searchRepos) return [];
   else {
    const firstIndex = (this.pagination.page - 1) * this.pagination.perPage;
    const lastIndex = this.pagination.page * this.pagination.perPage;
    return this.searchRepos.slice(firstIndex, lastIndex);
   }
  },
 },
 methods: {
  async handlePokeCard() {
   const pokeList = await getAllPokemonsOfType(this.selectedType);
   const nameList = pokeList.map(({ pokemon }) => pokemon.name);
   const urlList = pokeList.map(({ pokemon }) => pokemon.url);
   const imgList = await this.handleImgList(urlList);

   this.updateTypeList(nameList, imgList);
  },
  handleImgList(urlList) {
   var imgList = [];
   var fetches = [];
   for (const url of urlList) {
    fetches.push(
     getImgFromUrl(url).then((img) => {
      if (img != null) imgList.push(img);
     })
    );
   }
   return Promise.all(fetches).then(() => {
    return imgList;
   });
  },
  updateTypeList(nameList, imgList) {
   imgList.forEach((img, index) => {
    var obj = {};
    obj["img"] = img;
    obj["name"] = nameList[index];
    this.typeList[index] = obj;
   });
  },
  goToRoute(name, param) {
    pushRoute(name, param)
  }
 },
};
</script>
<style lang="scss" src="./scss/_typeList.scss"></style>
