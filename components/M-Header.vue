<template>

  <div class='header'>

    <div class="header-left">
      <div class="header-logo">
        <img src="@/static/img/logo.png" alt="" class="header-logo__pic">
        <div class="header-logo__title">маркет</div>
      </div>
      <div class="header-location">
        <div class="header-location__city">м. Івано-Франківськ</div>
        <div class="header-location__tel">+380 800 104 104</div>
      </div>
    </div>

    <div class="header-right">
      <ul class="header-right__navbar" >
        <nuxt-link     
          v-for="link in links"
          :key="link.url"
          tag="li"
          active-class="active"
          :to="link.url"
          :exact="link.exact">
          <a class="header-right__navbar__link">{{link.title}}</a>
        </nuxt-link>
      </ul>
      <div class="header-right__localize">
        <a class="header-right__localize__ua"> UA </a>
        <span> | </span>
        <a class="header-right__localize__ru"> RU </a>
      </div>
      <div class="header-right__account">
        <img src="@/static/img/account.png" alt="" class="account_logo_pic">
        <div class="account_login">
          <nuxt-link to="auth"  class="account_login__title">Увійти</nuxt-link>
          <nuxt-link to="auth">
            <img src="@/static/img/login.svg" class="account_login__pic">
          </nuxt-link>
        </div>
      </div>
    </div>



  </div>

</template>


<script>

export default {
  name: 'm-header',
  data: () => ({
    links: [
      {title: 'Акції', url: '/stock', exact: true},
      {title: 'Сертифікати', url: '/certificate'},
      {title: 'Фінанси', url: '/finance'},
      {title: 'Сервіс', url: '/service'},
      {title: 'Страхування', url: '/inshurance'}
    ]
  }),
}

</script>



<style lang='scss' scoped>
  
.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  .header-left {
    display: flex;
    align-items: center;
    .header-logo {
      display: flex;
      align-items: end;    
      .header-logo__pic {
        width: 20px;
        height: 20px;
        margin-right: 5px;
      }
      .header-logo__title {
        font-size: 20px;
        line-height: 0.7;
        font-weight: 800;
        margin-right: 80px;
      }
    }
    .header-location {
      display: flex;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    .header-right__navbar {
      display: flex;
      .header-right__navbar__link {
        margin-right: 25px;
      }
    }
    .header-right__localize {
      font-weight: 800;
      margin-right: 25px;
      &__ua, &__ru {
        cursor: pointer;
      }
    }
    .header-right__account {
      display: flex;
      align-items: center;
      .account_logo_pic {
        width: 20px;
        height: 20px;
        margin-right: 25px;
        cursor: pointer;
      }
      .account_login {
        display: flex;
        align-items: center;
        // cursor: pointer;
        .account_login__title {
          font-size: 16px;
          margin-right: 5px;
          cursor: pointer;
        }
        .account_logo_pic {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
  }
}
  
</style>