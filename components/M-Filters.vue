<template>

    <div class='filters'>
        filters
        <UIM-Range/>

        <Accordion :headerStyle="headerStyle" :contentStyle="contentStyle">


  Your accordion content. It can be simple text like this.
  <p>It can also be HTML.</p>
</Accordion>


    </div>

</template>


<script>
import Accordion from "@2alheure/vue-accordion";
export default {
    name: 'm-filters',
    data: () => ({
        
    }),
    components: {
      Accordion
    },
}

</script>



<style lang='scss' scoped>
    
    
    
</style>