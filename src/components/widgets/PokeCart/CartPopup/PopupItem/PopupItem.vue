<template>
 <div class="popup_item custom_border" >

  <div class="popup_item__quant">{{ popupItem.quant }}</div>
   <img class="popup_item__img" :src="popupItem.img" alt="popupItemmon image" />
   <h3 class="popup_item__name">{{ popupItem.name }}</h3>
   <p class="popup_item__price">{{ popupItem.totalPrice }}</p>
 
 </div>
</template>


<script>
export default {
 props: { popupItem: { required: true } },
};
</script>


<style lang="scss" src="./scss/_popupItem.scss" scoped />
