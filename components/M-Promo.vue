<template>

  <div class='Promo'>
    <div class="title">Промо блок</div>

    <div class="promo_wrapper">
      <img src="@/static/img/top-banner.svg" alt="" class="big_promo">
      <img src="@/static/img/sec-banner.svg" alt="" class="small_promo promo1">
      <img src="@/static/img/sec-banner.svg" alt="" class="small_promo promo2">
      <img src="@/static/img/sec-banner.svg" alt="" class="small_promo promo3">
      <img src="@/static/img/sec-banner.svg" alt="" class="small_promo promo4">
    </div>


  </div>

</template>


<script>

export default {
  name: 'promo',
  data: () => ({
    
  }),
}

</script>



<style lang='scss' scoped>

.title {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
}  

.promo_wrapper {
  display: grid;
  gap: 10px 10px;
}

.big_promo {
  grid-row-start: 1;
  grid-row-end: 4;
}
.small_promo {
  width: 185px;
  height: 185px;
}

.promo1 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}
.promo2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.promo3 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
}
.promo4 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}

</style>