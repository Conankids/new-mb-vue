<style lang="scss">
  @import "./../../../style/scss/helpers/functions";

  .coupon__wrap {
    .bg-white {
      background-color: transparent !important;
    }
  }

  .coupon__body-wrap {
    .nodata {
      height: px2rem(500);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        width: px2rem(180);
      }
    }
  }
</style>
<style lang="scss" scoped="">
  @import "./../../../style/scss/helpers/functions";

  .coupon__wrap {
    .coupon__header-wrap {
      display: flex;
      height: px2rem(80);
      justify-content: center;
      align-items: stretch;
      color: #999;
      font-size: px2rem(24);
      background-color: #fff;
      position: fixed;
      width: 100%;
      z-index: 2;

      .coupon__header-item {
        flex: 1;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        &.on {
          color: #333;
        }
        &.on:after {
          position: absolute;
          content: '';
          display: block;
          width: px2rem(80);
          height: px2rem(4);
          background-color: #F54E38;
          left: 50%;
          transform: translateX(-50%);
          bottom: 0;
        }
      }
    }
    .coupon__body-wrap {
      display: flex;
      padding-top: px2rem(80);
      .coupon__body-list-wrap {
        flex: 1;
      }
    }
  }
</style>

<template>
  <div class="content-wrap">
    <page-header-back @back="back">
      <div slot="title">我的优惠券</div>
    </page-header-back>
    <div class="page__body coupon__wrap">
      <div class="coupon__header-wrap">
        <div
          v-for="item in tabbar"
          class="coupon__header-item"
          :class="item.ctype==currentItem.ctype?'on':''"
          @click="switchTabbar(item)"
          v-waves.block="true"
        >
          <div class="coupon__header-title">{{ item.title }}（{{ item.count }}）</div>
        </div>
      </div>
      <div class="coupon__body-wrap">
        <div
          class="coupon__body-list-wrap"
          v-for="item in tabbar"
          v-if="item.ctype==currentItem.ctype"
        >
          <load-async-data
            url="/api/coupon/GetUserCouponList"
            :extData="{
              ctype:item.ctype
            }"
            :ref="`load-data-limit-${item.ctype}`"
            :cache="true"
            :cacheKey="`cacheKey${item.ctype}`"
            :key="item.ctype"
          >
            <template slot="slot-data-box" slot-scope="props">
              <ul>
                <template v-for="item in props.data">
                  <template v-if="item.ctype==1">
                    <item-component1 @click.native="setShowItem(item)" :link="false" :item="item" :key="item.id"/>
                  </template>
                  <template v-else>
                    <item-component2 :link="item.has_use==1" :item="item" :key="item.id"/>
                  </template>
                </template>
              </ul>
            </template>
            <div class="nodata" slot="slot-nodata-status">
              <div>
                <img src="./../icon/icon-coupons-none.png"/>
              </div>
              <div class="mgt12">还没有优惠券</div>
            </div>
          </load-async-data>
        </div>
      </div>
    </div>
    <coupon-item-show v-if="showItem.id" :item.sync="showItem"></coupon-item-show>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import $ from 'jquery'
  import tools from '../../../tools/index'
  import PageHeaderBack from '@/components/header-back.vue'
  import LoadAsyncData from '@/pages/search/bases/load-async-data.vue'
  import ItemComponent1 from '../item-component-1.vue'
  import ItemComponent2 from '../item-component-2.vue'
  import CouponItemShow from '../coupon-item-show.vue'

  export default {
    data() {
      return {
        tabbar: [],
        currentItem: {},
        showItem: {}
      }
    },
    mounted() {
      const initType = tools.url.getUrlParams('type')
      $.get('/api/coupon/GetCouponBar', replayData => {
        this.hidePageLoading()
        let currentType = 0
        this.tabbar = replayData.result
        this.tabbar.map((item, index) => {
          if (item.ctype == initType) {
            currentType = index
          }
        })
        this.currentItem = this.tabbar[currentType]
      }, 'json').always(() => {

      }).fail(() => {
        this.Toast().setText('加载错误').show()
      })
    },
    components: {
      PageHeaderBack,
      LoadAsyncData,
      ItemComponent1,
      ItemComponent2,
      CouponItemShow
    },
    methods: {
      back() {
        window.location = '/mb/user/index.html'
      },
      setShowItem(item) {
        if(item.coupon_package_user_type!=1){
          this.showItem = item
        }
      },
      switchTabbar(item) {
        this.currentItem = item
      },
      ...mapActions(['hidePageLoading'])
    }
  }
</script>
