<template>
  <li class="large event clear" v-waves.template="true">
    <div class="global-padding">
      <a :href="`/mb/event/index/${item.eventid}.html`">
        <div class="stream-box">
          <template v-if="item.isshoufa==1">
            <span class="event-tag shoufa">首发</span>
          </template>
          <!--<template v-else-if="item.isshoufa==2">-->
            <!--<span class="event-tag tiyanshi">体验师专享</span>-->
          <!--</template>-->
          <!--<template v-else-if="item.isshoufa==3">-->
            <!--<span class="event-tag ev-zhekou">折扣</span>-->
          <!--</template>-->
          <!--<template v-else-if="item.isshoufa==5">-->
            <!--<span class="event-tag tiyanshi">App专享</span>-->
          <!--</template>-->
          <div class="stream-img">
            <img
              :data-background-size="`${220/75}rem auto`"
              v-lazy="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/640/h/320/q/100`"
              :src="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/60/h/30/q/30`"
            />
            <div class="mask-cover"></div>
          </div>
          <div class="home-item-desc">
            <div class="home-item-title">{{item.title}}</div>
            <div class="home-item-type">
              <template
                v-if="item.meta"
                v-for="(meta,meta_index) in item.meta"
                v-key="meta.mid"
              >
                <div
                  :class="[
                    'home-d1',
                    {
                      'gray':meta.is_sold_out==1,
                      'del-line':meta.is_sold_out==1||meta.is_end==1
                    }
                  ]"
                >
                  <span>{{meta.event_list_title}}</span>
                  <span class="home-g1">{{meta.event_list_unit}}</span>
                </div>
              </template>
            </div>
            <div class="home-item-status">
              <!-- 预约 -->
              <template v-if="item.is_reserve">
                <div class="home-f2">{{item.event_list_bottom_left}}</div>
                <div class="event-subscribe-wrap">
                  <div
                    class="home-f2"
                    v-if="item.reserve_desc"
                  >
                    {{item.reserve_desc}}
                  </div>
                  <div class="subscribe">
                    <div class="subscribe-btn">立即预约</div>
                  </div>
                </div>
              </template>
              <!-- 正常情况 -->
              <template v-else>
                <div
                  v-if="isArray(item.event_list_bottom_left) || item.event_list_bottom_left_type==1"
                  class="home-f1"
                >
                  <template
                    v-for="(applylist,applylist_index) in item.event_list_bottom_left"
                    v-key="applylist.avatar+applylist_index"
                  >
                    <img
                      class="home-i1"
                      :src="applylist.avatar"
                    />
                  </template>
                  <img
                    v-if="item.event_list_bottom_left.length>=5"
                    class="home-i1"
                    src="//cdn.jiguo.com/static/WeiXin/images/diandiandian.png"
                  />
                </div>
                <div class="home-f2" v-else>{{item.event_list_bottom_left}}</div>
                <div class="home-f2" v-if="item.event_list_bottom_right">{{item.event_list_bottom_right}}</div>
              </template>
            </div>
          </div>
        </div>
      </a>
    </div>
  </li>
</template>

<script>

	import * as types from '@/store/types'
	import {mapState} from 'vuex'

	export default {
		props: {
			item: {
				type: Object
			}
		},
		data: function () {
			return {}
		},
		created() {
			this.$store.commit(types.PAGE_LOADING_QUERY, {
				show: false
			})
		},
		methods: {
			isArray(array) {
				return Object.prototype.toString.call(array) === '[object Array]'
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import './../../../style/scss/helpers/functions';

  .mian-stream li.large.event {
    display: block;
    &:first-child {
      padding-top: px2rem(12);
    }
    &:after {
      display: none;
    }
    .global-padding {
      padding: px2rem(12) px2rem(24);
    }
    .stream-box {
      border-radius: px2rem(6);
      box-shadow: 0 px2rem(2) px2rem(4) 0 rgba(0, 0, 0, 0.20);
      overflow: hidden;
      position: relative;
      background: #ffffff;
    }
    .stream-img {
      border-radius: 0;
      position: relative;
    }
  }

  .home-item-desc {
    padding: px2rem(36) px2rem(30);
    font-size: px2rem(28);
    color: #333333;
    .home-item-title {
      line-height: px2rem(44);
      color: #000000;
      font-size: px2rem(32);
      font-weight: bold;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
    }

    .home-item-type {
      line-height: px2rem(40);
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      margin-top: px2rem(5);
      flex-wrap: wrap;
      font-size: px2rem(24);
      max-height: px2rem(80);
      line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .home-item-status {
      line-height: px2rem(40);
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: px2rem(30);
      justify-content: space-between;
    }

    .home-d1 {
      margin-right: px2rem(20);
      &.gray {
        color: #999;
      }
    }
    .home-g1 {
      color: #999;
    }

    .home-f2 {
      color: #999;
      font-size: px2rem(24);
    }

    .home-f1 {
      line-height: normal;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding-left: px2rem(10);
    }

    .home-i1 {
      width: px2rem(46);
      height: px2rem(46);
      overflow: hidden;
      border-radius: 50%;
      border: px2rem(4) solid #FFFFFF;
      margin-left: px2rem(-10);
      background-color: #ffffff;
    }

    //y预约
    .event-subscribe-wrap {
      display: flex;
      align-items: center;
      .subscribe {

      }
      .subscribe-btn {
        font-weight: 600;
        font-size: px2rem(24);
        color: #fff;
        background: #F66039;
        border-radius: px2rem(4);
        width: px2rem(73 * 2);
        height: px2rem(23 * 2);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: px2rem(12);
        cursor: pointer;
      }
    }
  }
</style>
