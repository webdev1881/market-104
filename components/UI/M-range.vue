<template>

<div class="range">

  <!-- <vue-slider v-model="value"></vue-slider> -->

</div>


</template>

<script>
// import VueSlider from 'vue-slider-component'
// import 'vue-slider-component/theme/default.css'

  export default {
    name: 'm-range',
    components: { VueSlider },
    data: () => ({
      value: [20, 40]
    }),
    methods: {
      // UpdateValues(e) {
      //   this.barMinValue = e.minValue;
      //   this.barMaxValue = e.maxValue;
      // }
    }
  }
</script>

<style scoped>

</style>