<template>

  <div class='miniproductcard'>

    <div class="card_img"><img :src="img" alt=""></div>

    <div class="fullname"> {{ fullname }} </div>

    <div class="ratings">
      <div class="empty-stars"></div>
      <div class="full-stars" :style="{width:rate}"></div>
    </div>

    <div class="price">
      <div class="pricevalues">
        <del class="oldprice">20 999 ₴</del>
        <div class="currprice">16 999 ₴</div>
      </div>


      <div class="cart">

        <img src="@/static/svg/cart.svg" alt="" class="cart_icon">

      </div>
      <!-- <div class="wrap_control"><div class="control_icon cart"></div><div class="count ">42</div></div> -->
    
    </div>
    
  </div>

</template>


<script>

export default {
  name: 'm-miniproductcard',
  data: () => ({
    
  }),
  props: {
      img: {type:String, default:''},
      fullname: {type:String, default:''},
      rate: {type:String, default:'50%'},
      old_price: {type:String, default:''},
      price: {type:String, default:''},
  },
}

</script>



<style lang='scss' scoped>



      // .cart {
      //   mask-image: url(@/static/svg/cart.svg);
      // }












.miniproductcard {
  width: 237px;
  height: auto;
  // margin-right: 20px;
}
  
.card_img {
  width: 50%;
  height: 170px;
  padding: 20px 0 20px;
  margin: 0 auto;
}

.fullname {
  font-size: 14px;
}


.price {
  display: flex;
  justify-content: space-between;
}

.oldprice {
  color: #9CA3AF;
}
.currprice {
  font-size: 20px;
}

.cart {
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $orange;
  border-radius: 50%;
  .cart_icon {
    color: red;
    width: 21px!important;
    height: 21px!important;
  }
}




.ratings {
    position: relative;
    vertical-align: middle;
    display: inline-block;
    color: #b1b1b1;
    overflow: hidden;
}
.full-stars {
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    overflow: hidden;
    color: #0000;
}
.empty-stars:before, .full-stars:before {
    content:"\2605\2605\2605\2605\2605";
    font-size: 11pt;
}
.empty-stars:before {
    -webkit-text-stroke: 1px #848484;
}
.full-stars:before {
    -webkit-text-stroke: 1px #0000;
}
  
</style>