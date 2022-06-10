<template>

    <div class='filters'>
        

        <UIM-Accordion class="accordion">
          <template class="title" v-slot:title> Ціна </template>
          <template v-slot:content>
              <UIM-Range class="prop" />
          </template>
        </UIM-Accordion>


        <UIM-Accordion class="accordion">
          <template class="title" v-slot:title> Бренд </template>
          <template v-slot:content>
              <div class="prop"><input type="checkbox" id="cb1"> <label for="cb1">Бренд 1</label></div>
              <div class="prop"><input type="checkbox" id="cb2"> <label for="cb2">Бренд 2</label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">Бренд 3</label></div>
          </template>
        </UIM-Accordion>


        <UIM-Accordion class="accordion">
          <template class="title" v-slot:title> Теплова потужність, кВт </template>
          <template v-slot:content>
              <div class="prop"><input type="checkbox" id="cb1"> <label for="cb1">15-19 </label></div>
              <div class="prop"><input type="checkbox" id="cb2"> <label for="cb2">20-24 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">25-29 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">30-34 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">35-39 </label></div>
          </template>
        </UIM-Accordion>


        <UIM-Accordion class="accordion">
          <template class="title" v-slot:title> Матеріал теплообмінника </template>
          <template v-slot:content>
              <div class="prop"><input type="checkbox" id="cb1"> <label for="cb1">Алюміній</label></div>
              <div class="prop"><input type="checkbox" id="cb2"> <label for="cb2">Мідь</label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">Нержавіюча сталь</label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">Сталь</label></div>
          </template>
        </UIM-Accordion>

        <UIM-Accordion class="accordion">
          <template class="title" v-slot:title> Площа обігріву, кв. м </template>
          <template v-slot:content>
              <div class="prop"><input type="checkbox" id="cb1"> <label for="cb1">101 - 200 </label></div>
              <div class="prop"><input type="checkbox" id="cb2"> <label for="cb2">120 - 139 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">180 - 199 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">200 - 249 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">201 - 350 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">250 - 299 </label></div>
              <div class="prop"><input type="checkbox" id="cb3"> <label for="cb3">200 - 249 </label></div>
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

.title {
  color: #3e77aa;
  margin-bottom: 15px;
}

.prop {
  margin: 10px 0 0 10px;
}

.accordion {
  border-bottom: 1px solid red;
  border-right: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  padding: 8px;
}

</style>