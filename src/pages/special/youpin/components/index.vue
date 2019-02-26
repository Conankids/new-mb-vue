<template>
  <div>
    <header-bg/>
    <register
      v-if="show_register"
      @close="closeRegister"
      :type="type"
      class="register"
    />
    <sub-header @openRegister="openRegister"/>
    <div class="classic-case">
      <div style="margin-bottom: 50px">
        <sub-header-item :sub_data="has_sub_item" :button="false"/>
      </div>
      <template v-for="item in item_link">
        <center-item :item="item" />
      </template>
    </div>
    <footer-bottom />
  </div>
</template>

<script>
  import $ from 'jquery'
  import Register from './register/register.vue'
  import HeaderBg from './header-bg.vue'
  import FooterBottom from './footer.vue'
  import CenterItem from './center-item.vue'
  import SubHeader from './subheader/index.vue'
  import SubHeaderItem from './subheader/sub-header.vue'

  export default {
    data () {
      return {
        type:1,
        show_register: false,
        has_sub_item: {
          sub_logo: 'icon-11.png',
          sub_title: '经典案例',
          sub_en_title: 'Classic Case'
        },
        item_link:[
          {
            url:'https://www.jiguo.com/article/article/50124.html',
            cover:require('../style/images/凯驰.jpg'),
            title:'与德国凯驰达成独家战略合作',
          },
          {
            url:'https://www.jiguo.com/article/article/50101.html',
            cover:require('../style/images/有赞.jpg'),
            title:'有赞推荐优质合作伙伴',
          },
          {
            url:'https://www.jiguo.com/article/article/50104.html',
            cover:require('../style/images/天猫.jpg'),
            title:'助推品牌电商流量暴涨5倍',
          },
          {
            url:'https://www.jiguo.com/article/article/50105.html',
            cover:require('../style/images/比菲力T恤.jpg'),
            title:'60天将一件小众T恤卖到400万',
          }
        ]
      }
    },
    components: {
      Register,
      HeaderBg,
      SubHeader,
      SubHeaderItem,
      FooterBottom,
      CenterItem
    },
    methods: {
      openRegister (type) {
        this.show_register = true;
        this.type = type || this.type;
      },
      closeRegister () {
        this.show_register = false;
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../../style/scss/helpers/functions";
  .classic-case {
    background: #fff;
    padding: px2rem(75);
  }
</style>
