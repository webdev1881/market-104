<template>

  <div class="services">

    <div class="services_wraper">

      <div class="service_card delivery">
        <div class="card_icon delivery_icon"></div>
        <div class="service_card_title delivery"> Доставка </div>
        <div class="service_card_descrip delivery">
          Самовивіз із магазину "104.ua", доставка за адресою або у відділення"Нова Пошта" і "Justin"
        </div>
      </div>

      <div class="service_card protect">
        <div class="card_icon protect_icon"></div>
        <div class="service_card_title protect"> Захист </div>
        <div class="service_card_descrip protect">
          Самовивіз із магазину "104.ua", доставка за адресою або у відділення"Нова Пошта" і "Justin"
        </div>
      </div>

      <div class="service_card pay">
        <div class="card_icon pay_icon"></div>
        <div class="service_card_title pay"> Оплата </div>
        <div class="service_card_descrip pay">
          Самовивіз із магазину "104.ua", доставка за адресою або у відділення"Нова Пошта" і "Justin"
        </div>
      </div>

      <div class="service_card back">
        <div class="card_icon back_icon"></div>
        <div class="service_card_title back"> Обмін </div>
        <div class="service_card_descrip back">
          Самовивіз із магазину "104.ua", доставка за адресою або у відділення"Нова Пошта" і "Justin"
        </div>
      </div>


    </div>

  </div>

</template>


<script>

export default {
  name: 'services',
  data: () => ({
    
  }),
}

</script>



<style lang='scss' scoped>

.services {
  margin: 25px 0;
}

.services_wraper {
  display: flex;
  justify-content: space-between;
  background-color: $gray_bg;
  padding: 25px 0;
}

.service_card {
  padding: 0 30px;
  cursor: pointer;
}

.service_card_title {
  margin: 10px 0;
  font-weight: 600;
}

.service_card_descrip {
  font-size: 14px;
}



  
.delivery {
  color: $blue;
}
.protect {
  color: $green;
}
.pay {
  color: $orange;
}
.back {
  color: $red;
}


.card_icon {
  width: 35px;
  height: 35px;
} 

.delivery_icon {
  background-color: $blue;
  mask-image: url(@/static/svg/truck.svg);
  mask-repeat: no-repeat;
}
.protect_icon {
  background-color: $green;
  mask-image: url(@/static/svg/stroke.svg);
  mask-repeat: no-repeat;
}
.pay_icon {
  background-color: $orange;
  mask-image: url(@/static/svg/credit-card.svg);
  mask-repeat: no-repeat;
}
.back_icon {
  background-color: $red;
  mask-image: url(@/static/svg/refresh.svg);
  mask-repeat: no-repeat;
}

.service_card_title {
  font-size: 16px;
}
  
</style>