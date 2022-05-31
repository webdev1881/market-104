<template>

  <div class='secondCompany'>

    <div class="title">Заголовок кoмпанії</div>

    <div class="content">
      <UIM-MiniProductCard
        :img="'https://hotline.ua/img/tx/314/3149049465.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'90%'"
      />
      <UIM-MiniProductCard
        :img="'https://staticmarket.104.ua/media/catalog/product/cache/4a15f35b1461b8924097543d63c979aa/7/7/7736901388_base.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'70%'"
      />
      <UIM-MiniProductCard
        :img="'https://staticmarket.104.ua/media/catalog/product/cache/4a15f35b1461b8924097543d63c979aa/7/7/7736901387_base.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'50%'"
      />
      <UIM-MiniProductCard
        :img="'https://staticmarket.104.ua/media/catalog/product/cache/4a15f35b1461b8924097543d63c979aa/7/7/7736902013_base.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'40%'"
      />
      <UIM-MiniProductCard
        :img="'https://staticmarket.104.ua/media/catalog/product/cache/4a15f35b1461b8924097543d63c979aa/7/7/7736900168_base_2_1.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'30%'"
      />
      <UIM-MiniProductCard
        :img="'https://staticmarket.104.ua/media/catalog/product/cache/4a15f35b1461b8924097543d63c979aa/7/7/7736901203_base_2.jpg'"
        :fullname="'Беспроводная тревожная кнопка AJAX Button Черная'"
        :rate="'20%'"
      />
    </div>

  </div>

</template>


<script>

export default {
  name: 'firstCompany',
  data: () => ({
    
  }),
}

</script>



<style lang='scss' scoped>

.secondCompany {
  // display: flex;
}

.content {
  display: flex;
  justify-content: space-between;
}
  
.title {
  font-size: 20px;
  font-weight: 600;
  margin: 20px 0;
}
  
  
</style>