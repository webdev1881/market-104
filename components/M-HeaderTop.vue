<template>

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

  .header_top {
    display: flex;
    justify-content: space-between;
    padding: 10px 0px;
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
