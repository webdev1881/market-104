<template>

  <div class='miniproductcard'>

    <div class="card_img"><img :src="img" alt=""></div>

    <div class="fullname"> {{ fullname }} </div>

    <div class="ratings">
      <div class="empty-stars"></div>
      <div class="full-stars" :style="rated"></div>
      <!-- {{ (Math.random() * (5 - 1 + 1) + 1).toFixed(2) }} -->
    </div>

    <div class="price">
      <div class="pricevalues">
        <del class="oldprice"> {{ price }} ₴</del>
        <div class="currprice"> {{ price }} ₴</div>
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
  computed: {
    rated () {
      let random = (Math.random() * (5 - 1 + 1) + 1).toFixed(2)
      return 'width: ' + random * 100 / 5 + '%' ;
    }
  },
}

</script>



<style lang='scss' scoped>

.miniproductcard {
  width: 237px;
  padding: 10px;
  border: 1px solid #e9e9e9;
  min-height: 350px;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 10px 10px silver;
  }
}
  
.card_img {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 80%;
  height: 170px;
  overflow: hidden;
  margin: 20px auto;
}

.fullname {
  font-size: 14px;
  height: 65px;
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
    color: $gray;
}
.empty-stars:before, .full-stars:before {
    content:"\2605\2605\2605\2605\2605";
    font-size: 11pt;
}
.empty-stars:before {
    -webkit-text-stroke: 1px #848484;
}
.full-stars:before {
    -webkit-text-stroke: 1px $gray;
}
  
</style>