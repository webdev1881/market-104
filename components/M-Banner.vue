<template>

  <div class='banner'>
    <div class="banner-wrap">

      <div class="slider">
        <VueSlickCarousel :arrows="true" :dots="true" :autoplay="true" >
          <img src="@/static/img/top-banner.svg" alt="">
          <img src="@/static/img/top-banner.svg" alt="">
          <img src="@/static/img/top-banner.svg" alt="">
          <img src="@/static/img/top-banner.svg" alt="">
        </VueSlickCarousel>
      </div>




      <img src="@/static/img/sec-banner.svg" alt="">
    </div>
  </div>

</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'banner',
  components: { VueSlickCarousel },
  data: () => ({
    
  }),
}

</script>



<style lang='scss' >
  
.banner-wrap {
  display: flex;
  justify-content: space-between;
}

.slider {
  height: 378px;
  width: 1134px;
}

.slick-prev {
  left: 10px;
  z-index: 1;
}
.slick-next {
  right: 10px;
  z-index: 1;
}
.slick-dots {
  bottom: 10px;
}
  
</style>