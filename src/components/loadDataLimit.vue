<template>
  <div class="mian-content">
    <div class="mian-stream-box">
      <ul class="mian-stream-inner">
        <template v-for="v in item_data">
          <slot name="item" :item="v"></slot>
        </template>
      </ul>
    </div>
    <div ref="loading-more-flage" class="loading-more-flage bg-white">
      <slot name="load" :loading-status="{loading:loading,nodata:nodata,nomore:nomore}">
        <div v-if="loading" class="main loading-more bg-white">
          <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
          </div>
        </div>
        <div class="ft14 gray tc" v-else>
          <div v-if="nodata" class="main first-no-data bg-white pdt15 pdb15">
            <div class="nodata-center">
              <img src="../style/images/nodata.png" class="nodata-img">
              <div>暂时没有数据</div>
            </div>
          </div>
          <div v-else-if="nomore" class="main no-data bg-white pdt15 pdb15">
            <div>没有更多啦~</div>
          </div>
          <div @click="getItemData" ref="load-more" class="main no-more bg-white pdt15 pdb15" v-else>
            <div>点击加载更多~</div>
          </div>
        </div>
      </slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>

  import jQuery from 'jquery'
  import throttle from '../tools/throttle'
  import sessionStorage from '../tools/session-storage'

  export default {
    props: {
      cache: {
        type: Boolean,
        default: process.env.NODE_ENV == 'production' ? true : false
      },
      url: {
        type: String
      },
      size: {
        type: Number,
        default: 10
      },
      fixload: {
        type: Number,
        default: 1000
      },
      limit: {
        type: [String, Number],
        default: ''
      },
      extData: {
        type: Object,
        default: function () {
          return {
            sys: 'mb'
          }
        }
      },
      resultCallback: {
        type: Function,
        default: function (replayData) {
          return replayData
        }
      }
    },
    data: function () {
      return {
        new_limit: this.limit,
        item_data: [],

        loading: false,
        nodata: false,
        nomore: false,

        timer: null,
        jqueryLoader: null,
        _cacheKey_: window.location.href,
        _cacheData_: ''
      }
    },
    components: {},
    mounted: function () {
      this.initData()
    },
    methods: {
      initData(){
        this._cacheKey_ = window.location.href + (this.extData.blog_type || '')
        let cache_data = sessionStorage.get(this._cacheKey_)
        if (!this.cache || !cache_data) {
          sessionStorage.delete(this._cacheKey_)
          this.getItemData()
        } else {
          this._cacheData_ = cache_data
          this.new_limit = cache_data.limit || this.new_limit
          this.item_data = cache_data.data || this.item_data
          this.loading = cache_data.loading || this.loading
          this.nodata = cache_data.nodata || this.nodata
          this.nomore = cache_data.nomore || this.nomore
        }

        let throttleDeFn = throttle(() => {
          this.getItemData()
        },320);
        jQuery(window).off('scroll.home').on('scroll.home', () => {
          throttleDeFn()
        })
      },
      getItemData () {

        //没有更多数据
        if (this.nomore) return

        //正在加载中
        if (this.loading) return

        var loadMoreObj = jQuery(this.$refs['loading-more-flage'] || null)
        if (loadMoreObj.length && window.$WIN_HEIGHT + jQuery(window).scrollTop() + loadMoreObj.height() + this.fixload < loadMoreObj.offset().top) {
          return
        }
        this.loading = true
        var l_timer = setTimeout(() => {
          this.loading = false
          this.jqueryLoader && this.jqueryLoader.abort()
        }, 10000)

        this.jqueryLoader = jQuery.get(this.url, jQuery.extend(true, this.extData, {
          limit: this.new_limit,
          size: this.size
        }), replayDate => {
          replayDate = this.resultCallback(replayDate)

          this.loading = false
          clearTimeout(l_timer)

          if (replayDate.resultCode == 0) {

            replayDate.result = replayDate.result || []
            //没有数据
            if (!this.item_data.length && !replayDate.result.length) {
              this.nodata = true
            }
            if (replayDate.result.length < this.size) {
              this.nomore = true
            }

            this.new_limit = replayDate.limit
            this.item_data = this.item_data.concat(replayDate.result)

            //缓存数据
            this._cacheData_ = {
              limit: this.new_limit,
              data: this.item_data,
              loading: this.loading,
              nodata: this.nodata,
              nomore: this.nomore,
            }
            sessionStorage.set(this._cacheKey_, this._cacheData_)
            jQuery(window).trigger('scroll')

            if (!this.nomore && !this.nodata) {
              if (loadMoreObj.length && window.$WIN_HEIGHT + jQuery(window).scrollTop() + loadMoreObj.height() >= loadMoreObj.offset().top) {
                this.timer && clearTimeout(this.timer)
                this.timer = setTimeout(() => {
                  this.getItemData()
                }, 0)
              }
            }

          } else {

          }
        }, 'json')
      },
      refresh (isClearCache) {
        this.jqueryLoader && this.jqueryLoader.abort()
        !isClearCache && sessionStorage.delete(this._cacheKey_)
        this.timer && clearTimeout(this.timer)
        this.new_limit = ''
        this.item_data = []
        this.nomore = false
        this.loading = false
        this.nodata = false
        !isClearCache && (this._cacheData_ = '')
      }
    },
    watch:{
      extData:{
        deep: true,
        handler(newVal, oldVal){
            this.refresh(true)
            this.$nextTick(() => {
              this.initData()
            })
        }
      }
    }
  }
</script>


<style lang="scss">
  @import "../style/scss/helpers/functions";

  .spinner {
    height: px2rem(80);
    text-align: center;
    font-size: px2rem(20);
    padding: px2rem(16) 0;
  }

  .spinner > div {
    background-color: #e8e8e8;
    height: 100%;
    width: px2rem(6);
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .spinner .rect2 {
    animation-delay: -1.1s;
  }

  .spinner .rect3 {
    animation-delay: -1.0s;
  }

  .spinner .rect4 {
    animation-delay: -0.9s;
  }

  .spinner .rect5 {
    animation-delay: -0.8s;
  }

  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
    }
  }

  .no-data {
    background-color: #f2f2f2;
  }

  .loading-more-flage {
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    > * {
      flex: 1;
      height: 100%;
    }
  }
</style>






