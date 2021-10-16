<template>
 <section class="poke_profile">
  <h3 class="poke_name">{{selectedPokemon.name}}</h3>
  <div class="poke_status">
   <span class="poke_status__hp">
    <h4>hp</h4>
    <p>{{selectedPokemon.hp}}/{{selectedPokemon.hp}}</p>
   </span>
   <span class="poke_status__height custom_border--left">
    <h4>altura</h4>
    <p>{{selectedPokemon.height}} m</p>
   </span>
   <span class="poke_status__weight custom_border--left">
    <h4>peso</h4>
    <p>{{selectedPokemon.weight}} kg</p>
   </span>
   <span class="poke_status__type">
    <h4>tipos</h4>
    <router-link 
    v-for="(type, index) in selectedPokemon.types" :key="index" 
    :to="{ name: 'TypeList', params: {selectedType: type} }" class="poke_status__type__link">
    {{type}}
    </router-link>
   </span>
   <span class="poke_status__abilities custom_border--top">
    <h4>habilidades</h4>
    <span class="poke_status__abilities__txt" v-for="(ability, index) in selectedPokemon.abilities" :key="index">{{ability}}</span>
   </span>
  </div>
 </section>
</template>

<script>

export default {
  props: { selectedPokemon: {required: true}},
}
</script>

<style lang="scss" src="./scss/_pokeProfile.scss" scoped />
