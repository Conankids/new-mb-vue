<style lang="scss">
  @import "./../../../../../style/scss/helpers/functions";
  .user__center-header{
    position: relative;
    background-color: #262626;
    padding: px2rem(35) px2rem(24) px2rem(50) px2rem(24);
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    .user__face{
      border-radius: 50%;
      overflow: hidden;
      border: px2rem(2) solid #fff;
      width: px2rem(100);
      height: px2rem(100);
      img{
        width: 100%;
      }
    }
    .user__desc{
      margin-left: px2rem(40);
      flex: 1;
      .edit{
        color: #fff;
      }
      .k1{
        color: #fff;
        margin: px2rem(20) 0;
      }
    }
  }
</style>
<template>
  <div class="user__center-header mgt52 clear">
    <div class="user__face">
      <img src="//s2.jiguo.com/edb501ae-e8a0-4186-8462-58c314ef98bd/230x230">
    </div>
    <div class="user__desc">
      <div class="k1">
        <span class="username">------</span>
        <router-link to="/mb/userinfo/index.html" class="edit fr">编辑</router-link>
      </div>
      <div class="k2 mgt10">
        <span class="sex"></span>
        <span class="age">27岁</span>
        <span class="area">北京市北京市</span>
      </div>
      <div class="k3 mgt10">测试一下</div>
    </div>
  </div>
</template>
