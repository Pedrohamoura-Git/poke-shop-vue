<template>
 <div class="poke-card">
  <div class="pokeball">
   <div class="pokeball__button">
    <img :src="imageUrl" alt="" class="pokeball__img" />
   </div>
   <h3 class="pokeball__txt">{{ type }}</h3>
  </div>
 </div>
</template>

<script>
export default {
 props: {
  type: { required: true },
  imageUrl: {required: true},
 },
};
</script>


<style lang="scss" src="./scss/_pokeballCard.scss" scoped />
