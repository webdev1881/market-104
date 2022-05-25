<template>

  <div class="">

    <Navbar/>
    <Banner/>
    <Tabs/>

  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Navbar from '@/components/M-Navbar.vue'
import Banner from '@/components/M-Banner.vue'
import Tabs from '@/components/M-Tabs.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar,
    Banner,
    Tabs,
  },
});
</script>

<style lang="scss" scoped>
h3 {
  color: $prim;
  height: 180px;
}
</style>
