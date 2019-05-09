<style lang="scss" scoped="">
  @import "./../../style/scss/helpers/functions";

  @mixin mark-logo() {
    position: absolute;
    right: px2rem(-8px);
    top: px2rem(-8px);
    width: px2rem(60px);
    height: px2rem(60px);
    background-size: cover;
    background-position: left bottom;
    background-repeat: no-repeat;
    &.over {
      background-image: url("./icon/mark-over.png");
    }

    &.end {
      background-image: url("./icon/mark-end.png");
    }

    &.get {
      background-image: url("./icon/mark-get.png");
    }

    &.used {
      background-image: url("./icon/mark-used.png");
    }
  }

  .immediately-wrap {
    position: relative;
    &.bg {
      background-color: #fff;
      width: px2rem(290px * 2);
    }
    .immediately-tips {
      border-radius: px2rem(3px * 2);
      overflow: hidden;
      background-color: #fff;
      .immediately-tips-text {
        padding: px2rem(50px * 2) px2rem(30px * 2);
        color: #595959;
        text-align: center;
      }
      .table {
        text-align: center;
        border-top: px2rem(1px * 2) solid #E6E6E6;
        height: px2rem(50px * 2);
        .table-cell {
          vertical-align: middle;
          position: relative;
          width: 50%;
          &:nth-child(2) {
            color: #FF5B5B;
            &:after {
              content: '';
              display: block;
              left: 0;
              top: 0;
              height: 100%;
              width: px2rem(1px * 2);
              background-color: #E6E6E6;
              position: absolute;
            }
          }
        }
      }
    }
    .immediately-close {
      position: absolute;
      bottom: px2rem(-70px * 2);
      left: 50%;
      transform: translateX(-50%);
      width: px2rem(30px * 2);
      height: px2rem(30px * 2);
      background-color: transparent;
      border-radius: 50%;
      background-image: url("./icon/close.svg");
      background-position: center center;
      background-repeat: repeat;
      background-size: 100% auto;
      /*box-shadow: 0 0 1px 1px #fff;*/
      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: px2rem(35px * 2);
        left: 50%;
        height: px2rem(24px * 2);
        width: px2rem(1px * 2);
        background-color: #F2F2F2;
      }
    }
    .immediately-header {
      width: px2rem(290px * 2);
      height: px2rem(110px * 2);
      background-image: url("./icon/coupon-header-bg.png");
      background-size: px2rem(290px * 2) auto;
      background-position: left top;
      background-repeat: repeat;
      text-align: center;
      position: relative;
      overflow: hidden;
      background-color: #f66b61;
      padding: 0 px2rem(10px * 2);
      box-sizing: border-box;

      .c1 {
        color: #822828;
        font-size: px2rem(12px * 2);
        position: absolute;
        bottom: px2rem(5px * 2);
        left: 50%;
        transform: translateX(-50%);
      }
      .k1 {
        font-size: px2rem(18px * 2);
        color: #FFFFFF;
        margin-top: px2rem(35px * 2);
      }
      .t1 {
        font-size: px2rem(40px * 2);
        color: #FFFFFF;
        font-weight: bold;
        height: px2rem(40px * 2);
        line-height: px2rem(40px * 2);
        margin-top: px2rem(15px * 2);
      }
      .t2 {
        font-size: px2rem(12px * 2);
        color: #FFFFFF;
        margin-top: px2rem(5px * 2);
      }
    }
    .immediately-line {
      display: block;
      width: 100%;
      height: 0;
      left: 0;
      border-bottom: px2rem(1px * 2) dashed #E34F41;
    }
    .immediately-body {
      position: relative;

      &:after {
        content: '';
        display: block;
        left: 0;
        height: px2rem(10px * 2);
        bottom: px2rem(-5px * 2);
        width: 100%;
        position: absolute;
        background-image: url("./icon/coupon-shape.png");
        background-size: px2rem(290px * 2) auto;
        background-position: left bottom;
        background-repeat: repeat-x;
      }

      .immediately-erweima {
        border: px2rem(1px * 2) solid #D7D7D7;
        text-align: center;
        position: relative;
        width: px2rem(155px * 2);
        height: px2rem(155px * 2);
        margin: px2rem(20px * 2) auto;

        img {
          width: 100%;
        }
        .logo {
          $w: px2rem(24px * 2);
          $w2: px2rem(50px * 2);
          background-color: #fff;
          position: absolute;
          height: $w;
          width: $w2;
          margin-left: -$w2/2;
          top: -$w/2;
          left: 50%;
          .logo-box {
            overflow: hidden;
            border-radius: 50%;
            margin: auto;
            height: $w;
            width: $w;
          }
        }
        .erweima {
          width: px2rem(110px * 2);
          height: px2rem(110px * 2);
          margin: auto;
          margin-top: px2rem(20px * 2);
        }
        .desc {
          background-color: #fff;
          position: absolute;
          bottom: px2rem(-10px * 2);
          left: 50%;
          transform: translateX(-50%);
          width: px2rem(120px * 2);
        }
      }
      .immediately-quanhao {
        img {
          width: 100%;
        }
        .cb3 {
          color: #b3b3b3;
        }
        .logo-box {
          $w: px2rem(24px * 2);
          overflow: hidden;
          border-radius: 50%;
          margin: auto;
          height: $w;
          width: $w;
        }
        .immediately-coupon-tiaoxin {
          width: px2rem(80px * 2);
          margin: auto;
        }
        .query {
          padding: px2rem(20px * 2) 0;
          .btn {
            line-height: px2rem(30px * 2);
            height: px2rem(30px * 2);
            width: 100%;
            &.gray {
              color: #595959 !important;
              border-color: #B3B3B3 !important;
              background-color: transparent !important;
            }
          }
        }
      }
      .immediately-desc {
        font-size: px2rem(12px * 2);
        line-height: px2rem(20px * 2);
        color: #595959;
        margin-top: px2rem(18px * 2);
        padding-bottom: px2rem(10px * 2);
        text-align: left;
        position: relative;
        z-index: 1;
      }
    }
    .mark-logo {
      @include mark-logo();
    }
  }
  .modal__inner{
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn{
    background: #fe584d;
    color: #fff;
    font-size: px2rem(14px * 2);
    min-width: px2rem(80px * 2);
    display: inline-block;
    text-align: center;
    border-radius: px2rem(25px * 2);
    line-height: px2rem(30px * 2);
    height: px2rem(30px * 2);
    width: 100%;
    border: px2rem(1px * 2) solid #fe584d !important;
    &.gray {
      color: #595959;
      border-color: #B3B3B3;
      background-color: transparent;
    }
    &.white {
      background: #fff;
      color: #fe584d;
      border: px2rem(1px * 2) solid #fe584d;
    }
  }

  .table{
    display: table;
    width: 100%;
    border: none;
    .table-cell{
      display: table-cell;
    }
  }

</style>
<template>
  <modal :modal="modal" :mask="mask" :visible="window_show">
    <div class="modal__inner">
      <div class="immediately-wrap bg" style="margin-top:-50px">
        <div class="immediately-close" @click="close"></div>
        <div class="immediately-header">
          <template v-if="item.coupon_package_icon==1">
            <div class="t1">{{ item.depict }}</div>
            <div class="t2">{{ item.desc }}</div>
          </template>
          <div class="k1" v-else-if="item.coupon_package_icon==2">{{ item.depict }}</div>
          <div class="k1" v-else-if="item.coupon_package_icon==3">{{ item.desc }}</div>
          <div class="c1">{{ item.name }}</div>
        </div>
        <div class="immediately-line"></div>
        <div class="immediately-body">
          <div class="immediately-quanhao mgt20 mgl20 mgr20 tc">
            <div class="mb20">
              <div class="logo-box" v-if="item.cover">
                <img :src="`//s2.jiguo.com/${ item.cover }/230x230`">
              </div>
              <div class="mgt10">
                <span class="cb3 ft14">券号：</span>
                <span class="c00 ft14" id="clipboard-content">{{ item.jid }}</span>
              </div>
              <!--<div class="immediately-coupon-tiaoxin mgt10">-->
                <!--<img src="./icon/coupon-tiaoxin2.svg">-->
              <!--</div>-->
              <div class="immediately-time ft12 mgt10">
                <span style="color:#595959;">{{ item.start_time }} - {{ item.end_time }}</span>
              </div>
            </div>
            <div class="immediately-desc">{{ item.item }}</div>
            <div class="query">
              <div class="btn-group table">
                <div class="table-cell pdr10" >
                  <a class="btn gray border" href="javascript:;" ref="clipboard-copy" :data-clipboard-text="item.jid">复制券号</a>
                </div>
                <div class="table-cell pdl10">
                  <a class="btn white border" target="_blank" :href="item.link">前往使用</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>
<script>
  import Modal from '@/components/modal/modal.vue'
  import $ from 'jquery'
  import Clipboard from 'clipboard'

  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      modal: {
        type: Boolean,
        default: true
      },
      mask: {
        type: Boolean,
        default: true
      },
      visible: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        window_show: this.visible
      }
    },
    components: {
      Modal
    },
    mounted(){
      this.copy()
    },
    methods:{
      close(){
        this.$emit('update:item', {})
      },
      copy(){
        var clip = new Clipboard( this.$refs['clipboard-copy'] );
        var _this = this
        clip.on('success',function () {
          _this.Toast().setText('复制完成').show()
        });
        clip.on('error',function (e) {
          console.log(e)
//          $('.table-cell.pdr10').hide().next().removeClass('pdl10');
        });
      }
    }
  }
</script>
