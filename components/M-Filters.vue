<template>

    <div class='filters'>
        
        <div class="range">
          <div class="range_title"> Ціна </div>
          <UIM-Range/>
        </div>



        <UIM-Accordion class="mb-4">
          <template v-slot:title>
            Accordion 1
          </template>
          <template v-slot:content>
            <p>
              <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
              porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
              accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
              itaque consectetur impedit?
            </p>
          </template>
        </UIM-Accordion>



    </div>

</template>


<script>

export default {
    name: 'm-filters',
    data: () => ({
        
    }),
    components: {

    },
}

</script>



<style lang='scss' scoped>

.range {
  margin-bottom: 25px;
}
    
    
.range_title {
  margin-bottom: 15px;
}

</style>