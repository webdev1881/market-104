<template>
  <div class='error_page'>



    <div class="md:container md:mx-auto">

      NOT FOUND
      {{ error }}

    </div>




  </div>
</template>


<script>

export default {
  name: 'error_page',
  props: ['error'],
  data: () => ({
    
  }),
}

</script>



<style lang='scss' scoped>
  
  
  
</style>