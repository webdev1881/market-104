<template>

<div class="range">

  <vue-slider
    class="slider"
    v-model="value"
    :enable-cross="false"
    :interval="100"
    :min-range="500"
    :max="10000"
   ></vue-slider>
  <div>value: {{ value }}</div>
</div>


</template>

<script>
  import VueSlider from 'vue-slider-component/dist-css/vue-slider-component.umd.min.js'
  import 'vue-slider-component/dist-css/vue-slider-component.css'
  import 'vue-slider-component/theme/default.css'

  export default {
    name: 'm-range',
    components: { VueSlider },
    data: () => ({
      value: [0, 8000],
    }),
    methods: {
      // UpdateValues(e) {
      //   this.barMinValue = e.minValue;
      //   this.barMaxValue = e.maxValue;
      // }
    }
  }
</script >

<style scoped>
.slider {
  width: 300px!important;
}
</style>