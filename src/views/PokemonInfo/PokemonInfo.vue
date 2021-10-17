<template>
<Loading v-if="selectedPokemon.imgs.length == 0" />
 <main class="poke_info"  v-else>
  <article class="poke_info__details">
   <Carousel 
   :starting-image="0" 
   :images="selectedPokemon.imgs" 
   :auto-slide-interval="2100" />
   <PokeProfile :selectedPokemon="selectedPokemon" />
  </article>
  <Cta :selectedPokemon="selectedPokemon" />
 </main>
</template>

<script>
import Loading from "../../components/widgets/Loading/Loading";
import Carousel from "../../components/Carousel/Carousel";
import PokeProfile from "./PokeProfile/PokeProfile";
import Cta from "./Cta/Cta";
//* functions
import { capitalize, calcPrice } from "../../utils/transformData/index";
import { getPokemonByName } from "../../services/endpoints/pokemon/index";
export default {
 components: { Loading, Carousel, PokeProfile, Cta },
 data() {
  return {
   // ** CHANGE TO "selectedPokemon" later
   selectedPokemon: {
    abilities: "",
    hp: 0,
    height: 0,
    weight: 0,
    types: [],
    imgs: [],
   },
  };
 },
 mounted() {
  Promise.all([getPokemonByName(this.paramName)])
  .then((data) => {
   this.updateSelectedPokemon(data[0]);
  });
 },
 computed: {
  paramName() {
   return this.$route.params.name;
  },
 },
 methods: {
  updateSelectedPokemon(data) {
   this.selectedPokemon.abilities = data.abilities.map(({ ability }) => {
    return capitalize(ability.name);
   });
   this.selectedPokemon.name = capitalize(data.name);
   this.selectedPokemon["queryName"] = data.name;
   this.selectedPokemon.hp = data.stats[0].base_stat;
   this.selectedPokemon.height = data.height / 10;
   this.selectedPokemon.weight = data.weight / 10;
   this.selectedPokemon.types = data.types.map(({ type }) => type.name);
   this.selectedPokemon.imgs[0] = data.sprites.other.dream_world.front_default;
   this.selectedPokemon.imgs[1] = data.sprites.back_default;
   this.selectedPokemon.imgs[2] = data.sprites.front_default;
   this.selectedPokemon.imgs[3] = data.sprites.back_shiny;
   this.selectedPokemon.imgs[4] = data.sprites.front_shiny;
   this.selectedPokemon.priceNum = calcPrice(data);
  },
 },
};
</script>

<style lang="scss" src="./scss/_pokemonInfo.scss" scoped />