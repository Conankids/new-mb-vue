<template>
  <div class="main-type">
    <div v-for="(item, index) in typeList"
         v-waves.block="true"
         class="blog-type"
         :class="{'on':curIndex==index}"
         @click="chooseType(index, item.type)">{{ item.name }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      typeList: {
        type: [Object, Array, String]
      }
    },
    data() {
      return {
        curIndex: 0
      }
    },
    methods: {
      chooseType(index, type) {
        this.curIndex = index
        this.$emit('changeType', type)
      }
    }
  }
</script>

<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import './../../style/scss/app.scss';

  .main-type {
    background-color: #fff;
    margin-bottom: px2rem(16);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 px2rem(195);
    .blog-type {
      height: px2rem(68);
      line-height: px2rem(68);
      border-bottom: 2px solid transparent;
      font-size: px2rem(28);
      color: #999999;
      font-weight: bold;
      &.on {
        color: #333333;
        border-bottom-color: #F66039;
      }
    }
  }
</style>
