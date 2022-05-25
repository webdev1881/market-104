<template>

  <div class='navbar'>
    <nuxt-link class="navbar-item" :to="localePath('/catalog/discount')">{{ $t('discount') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/certificate')">{{ $t('certificate') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/top')">{{ $t('top') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/brands')">{{ $t('brands') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/gas_caldron')">{{ $t('gas_caldron') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/clever_house')">{{ $t('clever_house') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/inshurance')">{{ $t('inshurance') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/poweron_caldron')">{{ $t('poweron_caldron') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/complects')">{{ $t('complects') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/gas_column')">{{ $t('gas_column') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/signal')">{{ $t('signal') }}</nuxt-link>
    <nuxt-link class="navbar-item" :to="localePath('/modem')">{{ $t('modem') }}</nuxt-link> 
  </div>

</template>


<script>
export default {
  name: 'navbar',
  data: () => ({
    
  }),
  
}
</script>



<style lang='scss' scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  &-item:hover {
    // font-weight: 800;
    // background-color: red;
  }
}

</style>