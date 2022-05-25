<template>

  <div class="tabs">
    <div class="tabs-controller">
      <div @click="category_tab" class="tab-button" :class=" {'active': active === 'category'} " > {{ $t('new_category') }} </div>
      <div @click="brands_tab" class="tab-button" :class=" {'active': active === 'brands'} " > {{ $t('brands') }} </div>
    </div>

    <div v-show="active === 'category'" class="tab-1">
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
      <div class="item">
        <img src="@/static/img/test/category.jpg" alt="">
        <span class="title">{{ $t('gaz') }}</span>
      </div>
    </div>

    <div v-show="active === 'brands'" class="tab-2">
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
      <div class="item brand">
        <img src="@/static/img/test/lg.png" alt="">
        <span class="title">{{ $t('LG Electronics') }}</span>
      </div>
    </div>

  </div>

</template>


<script>
export default {
  name: "tabs",
  data: () => ({
    active: "category"
  }),
  methods: {
    category_tab() {
      this.active = "category"
    },
    brands_tab() {
      this.active = "brands"
    }
  }
};
</script>



<style lang='scss' scoped>

.active {
  color: $sec!important;
}

.tabs {
  // margin-top: 25px;
}

.brand {
  img {
    width: 100px!important;
    height: 100px!important;
    margin-top: 20px;
  }
}

.tabs-controller {
  display: flex;
  margin-top: 25px;
  .tab-button {
    font-size: 20px;
    cursor: pointer;
    margin-right: 20px;
    // margin-bottom: 20px;
    font-weight: 600;
    color: #9CA3AF;
  }
}
  
.tab-1, .tab-2 {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 237px;
  height: 176px;
  box-shadow: 3.30399e-16px 5.39583px 15.5556px rgba(0, 0, 0, 0.00416667), 3.0208e-16px 4.93333px 14.2222px rgba(0, 0, 0, 0.0166667), 2.5488e-16px 4.1625px 12px rgba(0, 0, 0, 0.0275), 1.888e-16px 3.08333px 8.88889px rgba(0, 0, 0, 0.0567), 1.0384e-16px 1.69583px 4.88889px rgba(0, 0, 0, 0.0842), 0px 0px 0px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  img {
    width: 82px;
    height: 102px;
  }
  .title {
    font-size: 16px;
    font-weight: 500;
    margin-top: 15px;
  }

}



</style>