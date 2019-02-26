<template>
  <li class="large clear" v-waves.block="true">
    <div class="global-padding">
      <a :href="`/mb/article/article/${item.blogid}.html`">
        <div class="stream-title ft14 mgb12">{{ item.title }}</div>
        <div class="stream-box">
          <template v-if="tag || item.type==9">
            <span v-if="item.type==1" class="event-tag qingdan">清单</span>
            <span v-else-if="item.type==2" class="event-tag xinping">新品</span>
            <span v-else-if="item.type==4" class="event-tag tiyan">体验</span>
            <span v-else-if="item.type==9" class="event-tag qingtiyan">轻体验</span>
          </template>
          <div class="stream-img">
            <img
              :data-background-size="`${220/75}rem auto`"
              v-lazy="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/640/h/320/q/100`"
              :src="`//s2.jiguo.com/${item.cover}/640?imageView2/1/w/60/h/30/q/30`"
            />
            <div class="mask-cover"></div>
          </div>

          <div class="stream-bottom">
            <div class="stream-bottom-inner">
              <div v-if="item.video==1" class="video">
                <i class="icon icon-video"></i>
              </div>

              <div class="stream-text">
                <template v-if="item.type==1">
								<span class="ft12" v-if="item.format.list_bottom_left && item.format.list_bottom_left!=''">
									{{ item.addtime }} · {{ item.format.list_bottom_left }}
								</span>
                  <span v-else class="ft12">{{ item.addtime }}</span>
                </template>
                <template v-if="item.type==2||item.type==3">
                  <span class="ft12">{{ item.addtime }}</span>
                </template>
                <span v-else-if="item.type==4" class="ft12 user-face-warp">
							  <span class="ft12">{{ item.author }} · {{ item.addtime }}</span>
							</span>

                <div class="ft12 praise-replay">
                  <span class="pos-rel"><i class="icon icon-praise"></i>{{ item.praise }}</span>
                  <span class="pos-rel mgl10"><i class="icon icon-replay"></i>{{ item.reply }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </a>
      <template v-if="productName">
        <div class="article-show-all-header" v-if="item.product">
          <a class="article-show-all-header-href ft12 gray" :href="`/mb/article/articlelist/id/${item.pid}.html`">
            <span class="line1">{{ item.product }}</span>
            <span v-if="item.num>1" class="icon icon-more">{{item.num}}篇</span>
          </a>
        </div>
      </template>
    </div>
  </li>
</template>

<script>

  export default {
    props: {
      item: {
        type: Object
      },
      tag: {
        type: Boolean,
        default: true
      },
      productName: {
        type: Boolean,
        default: false
      }
    },
    data: function () {
      return {}
    },
  }
</script>
<style lang="scss" scoped>
  $IMAGES_PATH : '../../style/images/';
  @import './../../style/scss/helpers/_functions.scss';
  .line1{
    overflow: hidden;
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    height: px2rem(40);
    flex: 1;
  }
  .icon.icon-more {
    position: relative;
    padding-right: px2rem(35);
    min-width: px2rem(100);
    &::before {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
</style>
