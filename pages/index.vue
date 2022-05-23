<template>

  <div class="">

    <Navbar />


  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Navbar from '@/components/M-Navbar.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar
  },
});
</script>

<style lang="scss" scoped>
h3 {
  color: $prim;
  height: 180px;
}
</style>
