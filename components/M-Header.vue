<template>

  <div class='header'>

    <div class="header_top md:container md:mx-auto">

      <div class="header-left">
        <nuxt-link :to="localePath('/')" class="header-logo">
          <img src="@/static/img/logo.png" alt="" class="header-logo__pic">
          <div class="header-logo__title">маркет</div>
        </nuxt-link>
        <div class="header-location">
          <div class="header-location__city">м. Івано-Франківськ</div>
          <div class="header-location__tel">+380 800 104 105</div>
        </div>
      </div>

      <div class="header-right">
        <ul class="header-right__navbar" >
          <nuxt-link     
            v-for="link in links"
            :key="link.url"
            v-slot="{ href, navigate }"
            active-class="active"
            :to="link.url"
            :exact="link.exact">

            <a :href="href"  @click="navigate" class="header-right__navbar__link">
              {{ $t(link.title) }}
            </a>

          </nuxt-link>
        </ul>
        <div class="header-right__localize">
          <nuxt-link :to="switchLocalePath('ua')" active-class="active" :exact="true">UA</nuxt-link>
          <span> | </span>
          <nuxt-link :to="switchLocalePath('ru')" active-class="active">RU</nuxt-link>
        </div>
        <div class="header-right__account">
          <img src="@/static/img/account.png" alt="" class="account_logo_pic">
          <div class="account_login">
            <nuxt-link :to="'/admin'"  class="account_login__title">{{ $t('admin') }}</nuxt-link>
            <nuxt-link :to="localePath('/auth')"  class="account_login__title">{{ $t('enter') }}</nuxt-link>
            <nuxt-link :to="localePath('/auth')">
              <img src="@/static/img/login.svg" class="account_login__pic">
            </nuxt-link>
          </div>
        </div>
      </div>

    </div>


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

  </div>

</template>


<script>

export default {
  name: 'm-header',
  data: () => ({
    links: [
      {title: 'stock', url: '/stock', exact: true},
      {title: 'certificate', url: '/certificate'},
      {title: 'finance', url: '/finance'},
      {title: 'service', url: '/service'},
      {title: 'inshurance', url: '/inshurance'}
    ]
  }),
}

</script>



<style lang='scss' scoped>
.header {
  display: flex;
  flex-direction: column;
  .header_top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
    // width: 100%;
    // max-width: $xl;
    margin: 0 auto;
    .header-left {
      display: flex;
      align-items: center;
      .header-logo {
        display: flex;
        align-items: flex-end;    
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
        &__city {
          margin-right: 1em;
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .header-right__navbar {
        display: flex;
        .header-right__navbar__link {
          margin-right: 1em;
        }
      }
      .header-right__localize {
        margin-right: 25px;
        &__ua, &__ru {
          cursor: pointer;
        }
      }
      .active {
        font-weight: 800;
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

  .header_bottom {
    background-color: $sec;
    padding: 15px 0;
    .header_bottom__wrapper {
      display: flex;
      justify-content: space-between;
      padding-right: 20px;
      // width: 100%;
      // max-width: $xl;
      margin: 0 auto;
    }
    .header_catalog {
      min-width: 175px;
      // margin-right: 20px;
      // margin-left: -5px;  
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
}
</style>


.google_button::before {
  content: url("@/static/svg/go.svg");
  position: absolute;
  width: 25px;
  height: 25px;
  margin: 3px 3px;
  left: 5px;
  z-index: -1;
}