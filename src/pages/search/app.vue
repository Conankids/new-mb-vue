<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import './../../style/scss/app.scss';
  @import './../../style/scss/components/wc-messagebox.scss';
  /*@import './../../style/scss/components/page-toggle-scene.scss';*/
</style>

<style lang="scss" scoped>
  .page {
    background-color: #f2f2f2;
  }
</style>

<template>
  <div class="page">
    <loading v-show="show"/>
    <div class="content-wrap">
      <!--<transition :name="transitionName">-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
      <!--</transition>-->
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import mainMixins from './../mainMixins'

  export default {
    mixins: [mainMixins],
    computed: {
      ...mapState({
        show: state => state.show
      })
    }
  }
</script>
