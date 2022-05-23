<template>

  <div class='navbar'>



    <nuxt-link :to="localePath('/')">{{ $t('welcome') }}</nuxt-link>


    <nuxt-link :to="switchLocalePath('ua')">UA</nuxt-link>
    <nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>


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
  
  
  
</style>