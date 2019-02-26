<template>
  <div class="page">
    <loading v-show="$store.show"/>
    <page-header curr="article"/>
    <div class="content-wrap">
      <div class="mian-stream">
        <load-data-limit
          url="/api/article/ArticleList"
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
  import { mapState } from 'vuex'

  export default {
    data: function () {
      return {
        listcache: false,
        extData: {
          id: process.env.NODE_ENV == 'production' ? window.blogid : 4449
        }
      }
    },
    created () {
      if (!this.extData.id) {
        window.history.back()
      }
    },
    components: {
      PageHeader,
      LargCard,
      loadDataLimit
    },
  }
</script>

<style lang="scss">
  $IMAGES_PATH : '../../style/images/';
  @import './../../style/scss/app.scss';
</style>
