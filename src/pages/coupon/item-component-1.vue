<style lang="scss">
  @import "./../../style/scss/helpers/functions";
  @import "item";

  .mall-logo-wrap {
    width: px2rem(36);
    height: px2rem(36);
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  .coupons__no {
    height: px2rem(28);
    overflow: hidden;
  }
</style>

<template>
  <li v-waves.block="link"
      :class="`coupons__card-wrap ${item.coupon_package_user_type==1?'gary':'yellow'}`"
      @click="openWindow(item)"
  >
    <div class="coupons__card-left">
      <div class="coupons__card-money">
        <template v-if="item.coupon_package_icon==1">
          <div class="ft22">{{ item.depict }}</div>
          <div class="ft14">{{ item.desc }}</div>
        </template>
        <template v-if="item.coupon_package_icon==2">
          <div class="ft22">{{ item.depict }}</div>
          <div class="ft14">For Sale</div>
        </template>
        <template v-if="item.coupon_package_icon==3">
          <span class="ft14">{{ item.desc }}</span>
        </template>
      </div>
    </div>
    <div class="coupons__card-right">
      <div class="coupons__card-desc">{{item.name}}</div>
      <div class="coupons__no">券号：{{ item.jid }}</div>
      <div class="mall-logo-wrap" v-if="item.cover"><img :src="`//s2.jiguo.com/${ item.cover }/230x230`"/></div>
      <div class="coupons__card-time">有效期：{{item.start_time}}-{{item.end_time}}</div>
    </div>
    <div class="coupons__card-status">
      <div v-if="item.coupon_package_user_type==1">已过期</div>
      <div v-else-if="item.coupon_package_user_type==2">立即使用</div>
    </div>
  </li>
</template>
<script>

  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      link: {
        type: Boolean,
        default: true
      },
    },
    methods: {
      openWindow () {
        if (this.link) {
          this.$router.push({
            path: '/mb/user/draw.html?id=' + this.item.id
          })
        }
      }
    },
    filters: {
      priceFilter (price) {
        return String(price).replace(/\.[0]+$/, '')
      }
    }
  }
</script>
