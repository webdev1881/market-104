<template>

    <div class="header_bottom">
      <div class="header_bottom__wrapper md:container md:mx-auto">
        <div class="header_catalog">
          <div class="catalog_icon"></div>
          <span> Каталог товарів </span>
        </div>
        <input class="header_search">
        <div class="header_controls">
        <div class="wrap_control"><div class="control_icon compare"></div><div class="count ">42</div></div>
        <div class="wrap_control"><div class="control_icon favorite"></div><div class="count ">42</div></div>
        <div class="wrap_control"><div class="control_icon cart"></div><div class="count ">42</div></div>
        </div>
      </div>
    </div>

</template>


<script>

export default {
  name: 'm-header',
  data: () => ({

  }),
}

</script>



<style lang='scss' scoped>


  .header_bottom {
    background-color: $sec;
    padding: 15px 0;
    position: sticky;
    top: 0;
    z-index: 6;
    .header_bottom__wrapper {
      position: sticky;
      top: 0;
      display: flex;
      justify-content: space-between;
      padding-right: 20px;

      margin: 0 auto;
    }
    .header_catalog {
      min-width: 175px; 
      display: flex;
      align-items: center;
      cursor: pointer;
      span {
        font-size: 16px;
        color: #fff;
      }
      &:hover {
        background-color: #384154;
      }
      .catalog_icon {
        width: 35px;
        height: 35px;
        margin-right: 10px;
        margin-left: -5px;
        background-color: #fff;
        mask-image: url(@/static/svg/catalog.svg);
      }
      
    }
    .header_search {
      width: 100%;
      border-radius: 8px;
      padding-left: 10px;
    }
    .header_controls {
      display: flex;
      align-items: center;
      .control_icon {
        width: 25px;
        height: 25px;
        background-color: #fff;
        mask-repeat: no-repeat;
        margin-left: 30px;
      }

      .wrap_control {
        position: relative;
      }
      .count {
        position: absolute;
        color: #fff;
        background-color: #EF4444;
        width: 22px;
        height: 16px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        top: -6px;
        right: -15px;
      }

      .compare {
        mask-image: url(@/static/svg/bar.svg);
      }
      .favorite {
        mask-image: url(@/static/svg/favorite.svg);
      }
      .cart {
        mask-image: url(@/static/svg/cart.svg);
      }




    }
  }

</style>
