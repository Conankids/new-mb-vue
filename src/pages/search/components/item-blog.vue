<style lang="scss" scoped>
  @import "../../../style/scss/helpers/functions";
  .item {
    position: relative;
    padding: px2rem(24);
    &:before {
      content: '';
      display: block;
      clear: both;
      height: 1px;
      left: 0;
      width: 100%;
      position: absolute;
      background-color: #ebebeb;
      bottom: 0;
    }
    .stream-box {
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: stretch;
    }
    .stream-title {
      line-height: px2rem(40);
      max-height: px2rem(80);
      overflow: hidden;
      word-break: break-all;
      color: #333333;
      font-weight: bold;
    }
    .stream-img {
      overflow: hidden;
      border-radius: px2rem(10);
      height: px2rem(200);
      width: px2rem(200);
      img {
        width: 100%;
        height: 100%;
      }
    }
    .stream-right {
      flex: 1;
      margin-left: px2rem(20);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
    }
  }
</style>

<template>
  <li class="item" v-waves.block="true">
    <a :href="`/mb/article/article/${item.blogid}.html`">
      <div class="stream-box">
        <div class="stream-img">
          <div class="elite" v-if="item.elite==1">
            <img src="../../../style/images/elite.png">
          </div>
          <img
            v-lazy="`//s2.jiguo.com/${item.cover}/230x230`"
            :src="`//s2.jiguo.com/${item.cover}/230x230?imageView2/1/w/50/h/30/q/30`"
          />
          <div class="video" v-if="item.video==1">
            <i class="icon icon-video"></i>
          </div>
        </div>
        <div class="stream-right">
          <div class="stream-title ft14">{{ item.title }}</div>
          <div class="stream-discount red">
            <!--红色价格 特色描述-->
            <template v-if="item.format">
              <span class="red ft12">
                <em class="ft16">{{ item.format.middle_left }}</em>
                <em class="ft12 mgl10">{{ item.format.middle_right }}</em>
              </span>
            </template>
            <template v-else-if="item.feature">
              <span class="red ft12">{{ item.feature }}</span>
            </template>
            <template v-else>
              <template v-if="item.productinfo && item.productinfo.price">
                <span class="ft16">￥{{ item.productinfo.price }}</span>
              </template>

              <template v-if="item.productinfo && item.productinfo.discount && item.productinfo.discount>0">
                <span class="mgl10 ft12">{{ item.productinfo.discount }}折</span>
              </template>
            </template>

          </div>
          <div class="stream-mall gray ft12">
            <span v-if="item.format">{{ item.format.bottom_left }}</span>
            <span v-else-if="item.productinfo && item.productinfo.mall" class="mall">{{ item.productinfo.mall }}</span>
            <span v-else-if="item.author" class="author">{{ item.author }}</span>
            <span class="time fr">{{ item.addtime }}</span>
          </div>
        </div>
      </div>
    </a>
  </li>
</template>
<script>

  export default {
    props: {
      item: {
        type: Object,
        required: true
      }
    }
  }
</script>
