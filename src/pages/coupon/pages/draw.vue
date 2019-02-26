<style lang="scss" scoped="">
  @import "./../../../style/scss/helpers/functions";

  .coupon__wrap {

    .coupons__header {
      .coupons__header-bg {
        width: px2rem(710);
        height: px2rem(680);
        background-size: px2rem(750) auto;
        background-repeat: no-repeat;
        background-image: url(../icon/icon-coupons-all.png);
        background-position: px2rem(-20) px2rem(-655);
        margin: auto;
        overflow: hidden;
        position: relative;
      }

      .coupons__header-title {
        line-height: px2rem(50);
        color: #333;
        text-align: center;
        font-size: px2rem(36);
        font-weight: 500;
        margin-top: px2rem(45);
      }

      .coupons__header-tips {
        line-height: px2rem(40);
        color: #F66039;
        text-align: center;
        font-size: px2rem(28);
        margin-top: px2rem(40);
      }

      /*coupons__open-btn*/
      .coupons__open-btn {
        width: px2rem(100);
        height: px2rem(100);
        overflow: hidden;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: px2rem(195);
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .coupons__open-btn img {
        max-width: 94%;
      }

      /*coupons__header-card*/
      .coupons__header-card {
        margin: px2rem(24) 0;
      }

      /*
   coupons__card-wrap
   */
      .coupons__card-wrap {

        width: px2rem(292 * 2);
        height: px2rem(168);
        display: flex;
        margin: auto;
        flex-direction: row;
        align-items: stretch;
        justify-content: space-between;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url(../icon/icon-coupons-item-bg2.png);
      }
      .coupons__card-wrap.red {
        background-image: url(../icon/icon-coupons-item-bg2.png);
      }
      .coupons__card-wrap.gary {
        background-image: url(../icon/icon-coupons-item-bg1.png);
      }
      .coupons__card-wrap.yellow {
        background-image: url(../icon/icon-coupons-item-bg3.png);
      }

      .coupons__card-left {
        width: px2rem(196);
        position: relative;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: #fff;
      }
      .coupons__card-money {
        font-size: px2rem(52);
        line-height: px2rem(60);
      }
      .coupons__card-money .unit {
        font-size: px2rem(32);
      }
      .coupons__card-type-desc {
        font-size: px2rem(26);
        max-width: px2rem(170);
        height: px2rem(32);
        overflow: hidden;
      }

      .coupons__card-right {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        font-size: px2rem(24);
        color: #666666;
        line-height: px2rem(34);
        padding: px2rem(25) px2rem(10);
        overflow: hidden;
      }
      .coupons__card-desc {
        line-height: px2rem(34);
        max-height: px2rem(68);
        overflow: hidden;
      }
      .coupons__card-time {
        font-size: px2rem(24);
        letter-spacing: -1px;
      }
    }

    /*coupons__record-title*/
    .coupons__record-title {
      color: #333;
      font-size: px2rem(28);
      text-align: center;
      line-height: px2rem(40);
    }

    /*coupons__record-list*/
    .coupons__record {
      margin-top: px2rem(40);
    }
    .coupons__record-list {
      padding: 0 px2rem(24);
      /*max-height: px2rem(600);*/
      /*overflow: hidden;*/
    }
    .coupons__record-list.show {
      /*max-height: none;*/
      /*overflow: auto;*/
    }
    .coupons__record-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      font-size: px2rem(28);
      color: #666666;
      border-bottom: px2rem(1) dashed #CCCCCC;
      padding: px2rem(20);
    }
    .coupons__record-userinfo {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    .coupons__record-user-face {
      width: px2rem(100);
      height: px2rem(100);
      overflow: hidden;
      border-radius: 50%;
    }
    .coupons__record-user-face img {
      width: 100%;
    }
    .coupons__record-user-name {
      margin-left: px2rem(40);
    }

    /*coupons__record-more*/
    .coupons__record-more {
      text-align: center;
      padding: px2rem(30) 0;
      position: relative;
    }
    .coupons__record-more.show {
      /*display: none;*/
    }

    .coupons__record-more:after,
    .coupons__event .coupons__event-item:after {
      position: absolute;
      display: block;
      content: '';
      left: 50%;
      transform: translateX(-50%);
      bottom: px2rem(0);
      width: px2rem(22);
      height: px2rem(22);

      background-size: px2rem(22) auto;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url(../icon/icon-coupons-item-more.png);

    }

    /*coupons__use*/
    .coupons__use {
      padding: 0 px2rem(44);
      line-height: px2rem(44);
      font-size: px2rem(28);
      margin-top: px2rem(50);
      margin-bottom: px2rem(200);
    }
    .coupons__use-title {
      color: #333333;
    }
    .coupons__use-desc {
      color: #808080;
    }

    /*coupons__event*/
    .coupons__event {
      margin-top: px2rem(50);
    }
    .coupons__event .coupons__event-list {
      /*max-height: px2rem(1190);*/
      /*overflow: hidden;*/
    }
    .coupons__event .coupons__event-list.show {
      /*max-height: none;*/
      /*overflow: auto;*/
    }
    .coupons__event .coupons__event-title-wrap {
      text-align: center;
    }
    .coupons__event .coupons__event-title {
      position: relative;
      display: inline-block;
      color: #333;
      font-size: px2rem(32);
      text-align: center;
      line-height: px2rem(44);
      margin-bottom: px2rem(25);
      padding: 0 px2rem(20);
    }
    .coupons__event .coupons__event-item {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: stretch;
      border-bottom: px2rem(2) solid #F0F0F0;
      padding: px2rem(30) px2rem(24);
      &:first-child {
        border-top: px2rem(2) solid #F0F0F0;
      }
      &:after {
        left: auto;
        right: px2rem(24);
        top: 50%;
        transform: translateY(-50%) rotateZ(-90deg);
      }
    }
    .coupons__event .coupons__event-cover,
    .coupons__event .coupons__event-cover img {
      width: px2rem(220);
      height: px2rem(220);
    }
    .coupons__event .coupons__event-cover {
      border-radius: px2rem(20);
      overflow: hidden;
    }
    .coupons__event-right {
      flex: 1;
      color: #333333;
      margin-left: px2rem(40);
      margin-right: px2rem(90);
      display: flex;
      flex-direction: column;
      font-weight: 500;
    }
    .coupons__event-item-title {
      max-height: px2rem(80);
      line-height: px2rem(40);
      overflow: hidden;
      font-size: px2rem(28);
      position: relative;
    }

    /*F66039*/
    .coupons__event-type-list {
      font-size: px2rem(24);
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: stretch;
    }
    .coupons__event-right .type-item {
      margin: px2rem(10) 0;
      position: relative;
      padding-left: px2rem(20);
    }
    .coupons__event .coupons__event-title:after,
    .coupons__event .coupons__event-title:before,
    .coupons__event-right .type-item:after {
      content: '';
      display: block;
      background-color: #4B4B4B;
      width: px2rem(6);
      height: px2rem(6);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    .coupons__event .coupons__event-title:before {
      left: auto;
      right: 0;
    }
    .coupons__event-right .type-item .gray {
      font-weight: 100;
    }
    .coupons__event-right .type-item.disable,
    .coupons__event-right .type-item.disable .red {
      color: #999999;
    }
    .coupons__event-right .type-item:after {
      background-color: #999999;
    }
  }
</style>
<style lang="scss">
  html.coupon__draw {
    &, & .page {
      background-color: #fff;
    }
  }
</style>

<template>
  <div class="content-wrap">
    <page-header-back @back="back">
      <div slot="title">领取优惠券</div>
    </page-header-back>
    <div class="page__body coupon__wrap">
      <div class="coupons__header mgt20">
        <div v-if="login" class="coupons__header-bg">
          <div class="coupons__header-title">{{coupons.ctitle}}</div>
          <div class="coupons__header-card">
            <div class="coupons__card-wrap" :class="coupons.has_use==1?'red':'gary'">
              <div class="coupons__card-left">
                <div class="coupons__card-money">
                  <span>{{coupons.price}}</span>
                  <span class="unit">元</span>
                </div>
                <div class="coupons__card-type-desc">{{coupons.cleftdesc}}</div>
              </div>
              <div class="coupons__card-right">
                <div class="coupons__card-desc">{{coupons.cdesc}}</div>
                <div class="coupons__card-time">有效期：{{coupons.start_time}} - {{coupons.end_time}}</div>
              </div>
            </div>
          </div>
          <div class="coupons__header-tips">{{coupons.has_use_title}}</div>

          <div class="coupons__open-btn">
            <img src="../icon/icon-coupons-open-btn.png"/>
          </div>
        </div>
        <div class="pdl12 pdr12" v-else>
          <a href="/mb/user/login.html">
            <img src="../icon/icon-coupons-item-package.png" style="display: block;width: 100%"/>
          </a>
        </div>
      </div>

      <div class="coupons__event" v-if="loadEvent">
        <load-async-data
          url="/api/coupon/GetEventList"
          :cache="false"
          :size="3"
          :extData="extData"
          :scrollTrigger="false"
          :key="`key1`"
        >
          <template slot="slot-data-box" slot-scope="props">
            <div class="coupons__event-title-wrap">
              <div class="coupons__event-title">可以使用此券的活动</div>
            </div>
            <div class="coupons__event-list">
              <a v-for="item in props.data" class="coupons__event-item" :href="`/mb/event/index/${item.eventid}.html`">
                <div class="coupons__event-cover">
                  <img :src="`//s2.jiguo.com/${item.cover}/230x230`"/>
                </div>
                <div class="coupons__event-right">
                  <div class="coupons__event-item-title">{{item.title}}</div>
                  <div class="coupons__event-type-list">
                    <div class="coupons__event-type-inner">
                      <div
                        v-for="itemmeta in item.meta"
                        class="type-item"
                        :class="itemmeta.is_sold_out!=0?'disable':''"
                      >
                        <span>
                          <span>{{itemmeta.buying_name}}</span>
                          <span class="gray">{{itemmeta.unit}}</span>
                        </span>
                        <span class="red fr">{{itemmeta.price}}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </template>
          <div slot="slot-load-more-status" class="main pdt15 pdb15 tc">
            <div>点击加载更多~</div>
          </div>
          <span slot="slot-nomore-status"></span>

        </load-async-data>
      </div>
      <div class="coupons__record" v-else-if="loadUser">
        <load-async-data
          url="/api/coupon/GetCouponList"
          :cache="false"
          :extData="extData"
          :scrollTrigger="false"
          :key="`key2`"
        >
          <template slot="slot-data-box" slot-scope="props">
            <div class="coupons__record-title">领取记录</div>
            <div class="coupons__record-list">
              <div class="coupons__record-item" v-for="item in props.data">
                <div class="coupons__record-userinfo">
                  <div class="coupons__record-user-face">
                    <img :src="`${item.avatar}`"/>
                  </div>
                  <div class="coupons__record-user-name">{{item.username}}</div>
                </div>
                <div class="coupons__record-user-time">{{item.add_time}}</div>
              </div>
            </div>
          </template>

          <div slot="slot-load-more-status" class="main pdt15 pdb15 tc">
            <div>点击加载更多~</div>
          </div>
          <span slot="slot-nomore-status"></span>

        </load-async-data>
      </div>

      <div class="coupons__use">
        <div class="coupons__use-title">使用说明：</div>
        <div class="coupons__use-desc">
          <span>{{coupons.crule}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import $ from 'jquery'
  import PageHeaderBack from '@/components/header-back.vue'
  import LoadAsyncData from '@/pages/search/bases/load-async-data.vue'

  export default {
    data () {
      return {
        coupons: {},
        loadEvent: false,
        loadUser: false,
        login: !!window.URL['login'],
        extData: {
          id: this.$route.query.id
        }
      }
    },
    created () {
      this.getCouponsDesc()
      this.window = window
      $('html').addClass('coupon__draw')
    },
    destroyed () {
      $('html').removeClass('coupon__draw')
    },
    components: {
      PageHeaderBack,
      LoadAsyncData
    },
    methods: {
      back () {
        window.history.back()
      },
      showMore () {
        this.show = true
      },
      getCouponsDesc () {
        $.get('/api/coupon/GetCouponDesc', {
          id: this.$route.query.id
        }, repayData => {
          this.coupons = repayData.result
          if (repayData.result.is_receive) {
            this.loadEvent = true
            this.loadUser = false
          } else {
            this.loadEvent = false
            this.loadUser = true
          }
          this.hidePageLoading()
        }, 'json')
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
