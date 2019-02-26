<style lang="scss">
  $IMAGES_PATH : './../../../../style/images/';
  @import "./../../../../style/scss/helpers/functions";
  @import "./../../style/table-view.scss";

  .userinfo__face {
    text-align: center;
    padding: px2rem(50) 0;
    .userinfo__box {
      border-radius: 50%;
      overflow: hidden;
      width: px2rem(120);
      height: px2rem(120);
      display: inline-block;
      border: px2rem(4) solid #e0e0e0;
      position: relative;
      img {
        width: 100%;
      }
    }
    .userinfo__text {

    }
  }
</style>
<style lang="scss" scoped>
  @import "./../../../../style/scss/helpers/functions";
  .user-infor-edit-view {
    .table-view-inner {
      padding-left: px2rem(26) !important;
    }
    & {
      position: relative;
    }
    &:before {
      content: '';
      display: block;
      height: px2rem(1);
      left: px2rem(0);
      width: 100%;
      position: absolute;
      background-color: #e6e6e6;
      bottom: px2rem(0);
      top: 0;
      z-index: 1;
    }
  }
</style>
<template>
  <div class="page">
    <loading v-show="show"/>
    <page-header-back
      @back="back"
      @right="right"
      title="编辑资料"
      right-title="保存"
    />
    <div class="content-wrap">
      <div class="userinfo__face">
        <div class="userinfo__box">
          <img src="//s2.jiguo.com/edb501ae-e8a0-4186-8462-58c314ef98bd/230x230">
        </div>
        <div class="userinfo__text">头像</div>
      </div>
      <ul class="table-view user-infor-edit-view">
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editname/type.html">
            <div class="table-view-cell-title">昵称</div>
            <span class="table-view-cell-value">------</span>
          </a>
        </li>
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editsex/type.html">
            <div class="table-view-cell-title">性别</div>
            <div class="table-view-cell-value">未完善</div>
          </a>
        </li>
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editbri/type.html">
            <div class="table-view-cell-title">生日</div>
            <div class="table-view-cell-value">1991-12-24</div>
          </a>
        </li>
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editwork/type.html">
            <div class="table-view-cell-title">职业</div>
            <div class="table-view-cell-value">学生</div>
          </a>
        </li>
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editcity/type.html">
            <div class="table-view-cell-title">地域</div>
            <div class="table-view-cell-value">北京市北京市</div>
          </a>
        </li>
        <li class="table-view-row">
          <a class="table-view-inner" href="/mb/userinfo/editcity/type.html">
            <div class="table-view-cell-title">简介</div>
            <div class="table-view-cell-value">
              <div class="tl" style="text-align: justify;">
                京市北京市北京市北京市
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import PageHeaderBack from '@/components/header-back.vue'

  export default {
    created () {

    },
    mounted () {
      this.hidePageLoading()
    },
    computed: {
      ...mapState({
        show: state => state.show
      })
    },
    components: {
      PageHeaderBack,
    },
    methods: {
      back () {
        this.updateDirection({
          direction: 'out'
        })
        this.$router.push({
          path: '/mb/user/index'
        })
      },
      right () {

      },
      ...mapActions([
        'updateDirection',
        'hidePageLoading'
      ])
    }
  }
</script>
