<!-- @format -->

<template>
 <nav class="pagination" aria-label="Page navigation">
  <ul class="pagination__list">
   <li class="page_item page_item--double_arrow" aria-label="Previous" @click="changePage(0)">
    <span class="arrows arrow--left" aria-hidden="true">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="18px"
      viewBox="0 0 20 20"
      width="18px"
      fill="#000000"
     >
      <g><rect fill="none" height="20" width="20" x="0" /></g>
      <g>
       <g>
        <polygon points="14.94,15 16,13.94 12.06,10 16,6.06 14.94,5 9.94,10" />
        <polygon points="9,15 10.06,13.94 6.12,10 10.06,6.06 9,5 4,10" />
       </g>
      </g>
     </svg>
    </span>
   </li>
   <li
    class="page_item page_item--arrow"
    :style="{ 'pointer-events: none': page - 1 > 0 }"
    @click="changePage(-1)"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     height="18px"
     viewBox="0 0 24 24"
     width="18px"
     fill="#000000"
    >
     <path d="M0 0h24v24H0V0z" fill="none" />
     <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
    </svg>
   </li>
   <li class="page_item" v-if="page - 1 > 0" @click="changePage(-1)">
    {{ page - 1 }}
   </li>
   <li class="page_item active">{{ page }}</li>
   <li class="page_item" v-if="page + 1 <= TotalPages" @click="changePage(1)">
    {{ page + 1 }}
   </li>
   <li
    class="page_item page_item--arrow"
    :style="{ 'pointer-events: none': page + 2 <= TotalPages }"
    @click="changePage(2)"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     height="18px"
     viewBox="0 0 24 24"
     width="18px"
     fill="#000000"
    >
     <path d="M0 0h24v24H0V0z" fill="none" />
     <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
    </svg>
   </li>
   <li
    class="page_item page_item--double_arrow"
    aria-label="Next"
    @click="changePage(this.TotalPages)"
   >
    <span aria-hidden="true">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      enable-background="new 0 0 20 20"
      height="18px"
      viewBox="0 0 20 20"
      width="18px"
      fill="#000000"
     >
      <g><rect fill="none" height="20" width="20" x="0" /></g>
      <g>
       <g>
        <polygon points="5.06,5 4,6.06 7.94,10 4,13.94 5.06,15 10.06,10" />
        <polygon points="11,5 9.94,6.06 13.88,10 9.94,13.94 11,15 16,10" />
       </g>
      </g>
     </svg>
    </span>
   </li>
  </ul>
 </nav>
</template>

<script>
export default {
 props: ["listLength", "perPageOptions"],
 data: function() {
  return {
   page: 1,
   perPage: this.perPageOptions[2],
  };
 },
 computed: {
  TotalPages() {
   const remainder = this.listLength % this.perPage;
   if (remainder > 0) {
    return Math.floor(this.listLength / this.perPage) + 1;
   } else {
    return this.listLength / this.perPage;
   }
  },
 },
 methods: {
  changePage(val) {
   switch (val) {
    case -2:
     this.page = this.page > 1 ? this.page - 2 : this.page;
     break;
    case -1:
     this.page = this.page > 1 ? this.page - 1 : this.page;
     break;
    case 0:
     this.page = 1;
     break;
    case 1:
     this.page = this.page < this.TotalPages ? this.page + 1 : this.page;
     break;
    case 2:
     this.page = this.page < this.TotalPages ? this.page + 2 : this.page;
     break;
    case this.TotalPages:
     this.page = this.TotalPages;
     break;
   }
   this.updateParentProps();
   this.scrollToTop();
  },
  updateParentProps() {
   this.$emit("newPage", this.page);
   this.$emit("newPerPage", this.perPage);
  },
  scrollToTop() {
   let currentScroll = document.documentElement.scrollTop,
    int = setInterval(frame, 10);

   function frame() {
    if (0 > currentScroll) clearInterval(int);
    else {
     currentScroll = currentScroll - 20;
     document.documentElement.scrollTop = currentScroll;
    }
   }
  },
 },
};
</script>
<style lang="scss" src="./scss/_pagination.scss"></style>
