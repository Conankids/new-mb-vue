<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="article"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <TabType :typeList="typeList" @changeType="changeType"/>
        <load-data-limit
          url="/api/article/GetBlogLists"
          :cache="listcache"
          :extData="extData"
        >
          <template slot="item" slot-scope="props">
            <larg-card
              :item="props.item"
              :tag="false"
              :productName="true"
            />
          </template>
        </load-data-limit>
      </div>
    </div>
  </div>
</template>

<script>
  import PageHeader from '@/components/header.vue'
  import loadDataLimit from '@/components/loadDataLimit.vue'
  import LargCard from './../../components/card/large.vue'
  import TabType from './tab-type.vue'
  import {mapState} from 'vuex'

  export default {
    data: function () {
      return {
        listcache: process.env.NODE_ENV == 'production' ? true : false,
        extData: {
          blog_type: '',
        },
        typeList: [
          {name: '全部', type: ''},
          {name: '体验', type: '4'},
          {name: '轻体验', type: '9'}
        ]
      }
    },
    methods: {
      changeType(type) {
        this.extData.blog_type = type
      }
    },
    components: {
      PageHeader,
      LargCard,
      loadDataLimit,
      TabType
    },
  }
</script>

<style lang="scss">
  $IMAGES_PATH: '../../style/images/';
  @import './../../style/scss/app.scss';
</style>
