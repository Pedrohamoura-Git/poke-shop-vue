<template>
 <div class="popup_info custom_border">
  <div class="popup_info__quant">{{ popupInfo.quant }}</div>
   <img class="popup_info__img" :src="popupInfo.img" alt="popupInfomon image" />
   <h3 class="popup_info__name">{{ popupInfo.name }}</h3>
   <p class="popup_info__price">{{ popupInfo.totalPrice }}</p>
 </div>
</template>
<script>
export default {
 props: { popupInfo: { required: true } },
};
</script>
<style lang="scss" src="./scss/_popupInfo.scss" scoped />
