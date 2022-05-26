<template>

  <div class="">

    <Navbar/>
    <Banner/>
    <Tabs/>
    <FirstCompany/>
    <SecondCompany/>
    <ThirdCompany/>

  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Navbar from '@/components/M-Navbar.vue'
import Banner from '@/components/M-Banner.vue'
import Tabs from '@/components/M-Tabs.vue'
import FirstCompany from '@/components/M-FirstCompany.vue'
import SecondCompany from '@/components/M-SecondCompany.vue'
import ThirdCompany from '@/components/M-ThirdCompany.vue'

export default Vue.extend({
  name: "IndexPage",
  components: {
    Navbar,
    Banner,
    Tabs,
    FirstCompany,
    SecondCompany,
    ThirdCompany,
  },
});
</script>

<style lang="scss" scoped>
h3 {
  color: $prim;
  height: 180px;
}
</style>
