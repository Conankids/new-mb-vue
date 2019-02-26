<template>
  <div class="banner" v-if="event_hot.length">
    <section class="banner-inner" id="banner-inner">
      <div class="bd">
        <ul class="banner-topic-swipe">
          <template v-for="v in event_hot">
            <li v-if="v.type==1">
              <a :href="`/mb/event/index/${v.eventid}.html`">
                <div class="banner-img-box">
                  <span v-if="v.isshoufa==1" class="event-tag shoufa">首发</span>
                  <!--<span v-else-if="v.isshoufa==2" class="event-tag tiyanshi">体验师专享</span>-->
                  <!--<span v-else-if="v.isshoufa==3" class="event-tag ev-zhekou">折扣</span>-->
                  <!--<span v-else-if="v.isshoufa==5" class="event-tag tiyanshi">App专享</span>-->
                  <img :src="`//s2.jiguo.com/${v.fileid}/640?imageView2/1/w/640/h/320/q/100`">
                </div>
                <div class="banner-desc">
                  <div class="banner-title">{{ v.name }} {{ v.isshoufa == 2 ? '(体验师专享)' : '' }}</div>
                  <div class="banner-tips pos-rel">

                    <span v-if="!v.is_reserve" class="ft16 colfff">{{ v.follownum }} <font class="ft12 gray">人申请</font></span>
                    <span class="ft16 colfff" v-else>{{ v.follownum }} <font class="ft12 gray">人已预约</font></span>

                    <span class="ft12 gray">{{v.buying_name}}</span>

                    <template v-if="v.deadline > now">
                      <span class="ft12 colfff pos-abs r0 b0">{{ v.deadline_time }} <font class="gray">截止</font></span>
                    </template>
                    <span class="ft12 colfff pos-abs r0 b0" v-else>
											<font class="gray">已截止</font>
										</span>
                  </div>
                </div>
                <img src="../style/images/large-card-cover.png" class="mask-cover"/>
              </a>
            </li>
            <li v-else-if="v.type==2">
              <a :href="`/mb/article/article/${v.blogid}.html`">
                <div class="banner-img-box">
                  <img :src="`//s2.jiguo.com/${v.fileid}/640?imageView2/1/w/640/h/320/q/100`">
                </div>
              </a>
            </li>
            <li v-else-if="v.type==3">
              <a :href="`/mb/live/LiveList/${v.blogid}.html`">
                <div class="banner-img-box">
                  <img :src="`//s2.jiguo.com/${v.fileid}/640?imageView2/1/w/640/h/320/q/100`">
                </div>
                <div class="banner-desc new_banner">
                  <div class="new_main">
                    <div class="new_title">{{ v.title }}</div>
                    <div class="news">
                      <template v-if="v.status==0||v.status==1||v.status==2||v.status==-1">
                        <span v-if="v.status==0">未开启</span>
                        <span v-else-if="v.status==1||v.status==2">直播进行中</span>
                        <span v-else-if="v.status==-1">已结束</span>
                        <span class="line"></span>
                      </template>
                      <span>{{ v.member ? v.member : 0 }}人参加</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li v-else-if="v.type==4">
              <a :href="v.url">
                <div class="banner-img-box">
                  <img :src="`//s2.jiguo.com/${v.fileid}/640?imageView2/1/w/640/h/320/q/100`">
                </div>
              </a>
            </li>
            <li v-else-if="v.type==5">
              <a :href="`/mb/topic/index/${v.blogid}.html`">
                <div class="banner-img-box">
                  <img :src="`//s2.jiguo.com/${v.fileid}/640?imageView2/1/w/640/h/320/q/100`">
                </div>
                <div class="banner-desc new_banner">
                  <div class="new_main">
                    <div class="new_title">{{ v.title }}</div>
                    <div class="news">
                      <span><i class="icon icon-topic-join"></i>{{ v.reply }}</span>
                      <span class="line"></span>
                      <span><i class="icon icon-topic-star"></i>{{ v.stow }}</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
      <div class="hd">
        <ul></ul>
      </div>
    </section>
  </div>
</template>

<script>

	import * as types from '../store/types';
	import TouchSlide from '../components/touchslide/touch-slide';
	import jQuery from 'jquery';

	export default {
		data: function () {
			return {
				event_hot: [],
				now: (new Date()).getTime() / 1000
			}
		},
		created: function () {
			this.getBannerData();
		},
		methods: {
			getBannerData() {
				jQuery.get('/api/event/GetMbBannerList', replayData => {
					this.event_hot = replayData.result;
					this.init();
				}, 'json');
			},
			init() {
				if (this.event_hot.length <= 0) return;

				var _o = jQuery.extend(true, {
					slideCell: "#banner-inner",
					titCell: ".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
					mainCell: ".bd ul",
					effect: "leftLoop",
					interTime: "4000",
					autoPlay: true,//自动播放
					autoPage: true //自动分页
				});
				setTimeout(() => {
					TouchSlide(_o);
					this.$store.commit(types.PAGE_LOADING_QUERY, {
						show: false
					});
				});
			}

		}
	}
</script>

<style lang="scss">
  @import "../style/scss/helpers/functions";

  .banner-topic-swipe {
    overflow: hidden;
    li {
      overflow: hidden;
      position: relative;
      height: px2rem(375);
      overflow: hidden;
      a {
        overflow: hidden
      }
      img {
        width: 100%;
      }
    }

    .banner-img-box {
      position: relative;
      height: px2rem(375);
      overflow: hidden;
    }

    .banner-desc {
      position: absolute;
      bottom: px2rem(60);
      width: 100%;
      left: 0;
      z-index: 1;

      .banner-title, .banner-tips {
        margin: 0 px2rem(48);
      }
      .banner-title {
        line-height: px2rem(60);
        font-size: px2rem(32);
        color: #fff;
        border-bottom: px2rem(1) solid rgba(255, 255, 255, 0.3);
      }
      .banner-tips {
        margin-top: px2rem(6);
      }
    }
  }

  .banner-inner {
    position: relative;
    .hd {
      position: absolute;
      bottom: px2rem(16);
      width: 100%;
      left: 0;
      text-align: center;
      li {
        display: inline-block;
        border-radius: 50%;
        height: px2rem(10);
        width: px2rem(10);
        background-color: #fff;
        text-indent: -99999px;
        overflow: hidden;
        margin: 0 px2rem(4);
        &.on {
          background-color: #fe584d;
        }
      }
    }
  }

  .banner-topic-swipe li a .mask-cover {
    border-radius: 0;
  }

  //焦点图 2016-11-15
  .new_banner {
    width: 100% !important;
    height: 100% !important;
    margin-bottom: px2rem(-70);
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    top: 0 !important;

    .new_title {
      margin-bottom: px2rem(8);
      font-size: px2rem(44);
      text-shadow: 0px px2rem(24) px2rem(48) rgba(0, 0, 0, 0.3);
    }

    .news {
      height: px2rem(44);
      padding: 0 px2rem(30);
      border-radius: px2rem(50);
      line-height: px2rem(44);
      background-color: rgba(255, 255, 255, 0.4);
      font-size: px2rem(28);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      span {
        margin: 0 px2rem(10);
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .line {
        width: px2rem(2);
        height: px2rem(20);
        margin: 0;
        background-color: rgba(255, 255, 255, .5);
      }
    }

    .status {
      margin-top: px2rem(16);
      font-wight: 100;
    }

  }
</style>
