<style lang="scss">
  @import "../../../../style/scss/helpers/functions";
  .order__product{
    display: flex;
    flex-direction: row;
    align-items: stretch;
    padding: px2rem(24);
    background-color: #fff;

    .order__product-img{
      width: px2rem(200);
      height: px2rem(200);
      overflow: hidden;
      border-radius: px2rem(10);
      img{
        width: 100%;
      }
    }
    .order__product-desc{
      margin-left: px2rem(30);
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: stretch;
      justify-content: space-between;

      .product-title{
        max-height: px2rem(80);
        line-height: px2rem(40);
        color: #404040;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: px2rem(32);
      }
    }
    .order__deposit{
      font-size: px2rem(28);
      color: #333;
    }
  }
</style>

<template>
  <div class="order__product mgt10">
    <div class="order__product-img">
      <img src="//s2.jiguo.com/0ea145ef-23bd-4885-8265-f28db212a68f/230x230" />
    </div>
    <div class="order__product-desc">
      <h2 class="product-title">小佩Petkit宠物智能喂食器</h2>
      <div class="order__deposit">
        6折试用
      </div>
    </div>
  </div>
</template>


<script>
  import { mapState } from 'vuex'

  export default {

  }
</script>





