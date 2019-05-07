<template>
  <header class="header header-wrap">
    <div class="header header-inner">
      <div class="menu">
        <a @click="openMenu" class="menu__open">
          <i class="icon icon-menu" v-waves.circle="true"></i>
        </a>
        <left-menu
          ref="menu"
          :show="show"
          @closeMenu="closeMenu"
          :curr="curr"
        />
      </div>
      <div class="logo">
        <a @click="clearCacheData" href="/">
          <img src="../style/images/logo.png"/>
        </a>
      </div>
      <div class="header-right">
        <template v-if="search">
          <a @click="searchRecodCurrUrl" class="search" href="/mb/search/list.html">
            <i class="icon icon-search" v-waves.circle="true"></i>
          </a>
        </template>
        <template v-if="user">
          <a v-if="window.URL && window.URL['login']" class="user has-login" href="/mb/user/index.html">
            <div class="header-right-badge-wrap">
              <div class="user-innner" v-waves.circle="true">
                <img :src="window.URL['user-face']">
              </div>
              <em v-if="hasMessage" class="badge"
                  :class="{'number':ioMessageNumber}">{{ ioMessageNumber ? ioMessageNumber : '' }}</em>
            </div>
          </a>
          <a class="user fl pos-rel" href="/mb/user/index.html" v-else>
            <i class="icon icon-user"></i>
          </a>
        </template>
      </div>
    </div>
  </header>
</template>

<script>
  import leftMenu from './leftMenu.vue'
  import sessionStorage from './../tools/session-storage'
  import Cookie from 'js-cookie'
  import io from 'socket.io-client'
  import $ from 'jquery'

  export default {
    props: {
      curr: {
        type: String,
        default: 'index'
      },
      search: {
        type: Boolean,
        default: true
      },
      user: {
        type: Boolean,
        default: true
      }
    },
    data: function () {
      return {
        show: false,
        window: window,
        hasMessage: false,
        ioMessageNumber: 0
      }
    },
    components: {
      'left-menu': leftMenu
    },
    mounted: function () {
      if (!('messageIo' in window) && window.URL && window.URL['uid'] && window.URL['ioid']) {
        window.messageIo = true
        setTimeout(() => {
          this.pushNotification(window.URL['ioid'])
        })
      }
    },
    methods: {
      openMenu: function () {
        var _this = this
        _this.$refs['menu'].$el.style.display = 'block'
        setTimeout(function () {
          _this.show = true
        }, 0)
      },
      closeMenu: function () {
        var _this = this
        _this.show = false
        setTimeout(function () {
          _this.$refs['menu'].$el.style.display = 'none'
        }, 320)
      },
      clearCacheData () {
        sessionStorage.clear()
      },
      searchRecodCurrUrl () {
        Cookie.set('isSearchCurrUrl', window.location.href, {path: '/'})
      },
      pushNotification (userssid) {
        var socket
        // 连接服务端
        if (process.env.NODE_ENV == 'production') {
          socket = io('wss://io.jiguo.com')
        } else {
          socket = io('wss://msg.jiguo.com')
        }
        // 连接后登录
        socket.on('connect', function () {
          socket.emit('login', userssid)
        })
        // 后端推送来消息时
        socket.on('h5-news', msg => {
          eval('msg = ' + msg)

          if (msg != null) {
            if (msg.type == 'news') {
              //消息
              if (typeof(msg.num) != 'undefined' && parseInt(msg.num) > 0) {
                // 显示数字
                this.hasMessage = true
                this.ioMessageNumber = msg.num
              } else if (parseInt(msg.num) == 0 && typeof (msg.tips) != 'undefined' && parseInt(msg.tips) > 0) {
                // 显示点
                this.hasMessage = true
                this.ioMessageNumber = 0
              } else {
                this.hasMessage = false
                this.ioMessageNumber = 0
              }
            } else if (msg.type == 'broadcast') {

              this.hasMessage = !!msg.tips
              this.ioMessageNumber = msg.tips || 0

            }
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../style/scss/helpers/functions";

  $height: px2rem(104);
  .icon {
    display: flex !important;
  }

  .header {
    background: #fff;
    position: relative;
    height: $height;
    z-index: 5;
  }

  .header-inner {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    position: fixed;
    border-bottom: px2rem(1) solid #ececec;
    box-sizing: border-box;
    width: 100%;
    top: 0;
    left: 0;
  }

  .logo {
    flex: 1;
    text-align: center;
    position: absolute;
    width: 100%;
    z-index: 1;
    left: 0;
    top: 0;
    a {
      display: block;
      line-height: $height;
    }
    img {
      display: inline-block;
      vertical-align: middle;
      height: px2rem(70);
    }
  }

  .menu, .header-right {
    position: relative;
    z-index: 2;
  }

  .menu {
    height: $height;
    display: flex;
    justify-content: flex-start;
    align-items: stretch;
    z-index: 3;
    .menu__open {
      width: $height;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .icon-menu{
      width: $height/1.5!important;
      height: $height/1.5!important;
    }
  }

  .header-right {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    > a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $height;
    }
    .user-innner {
      border-radius: 50%;
      overflow: hidden;
      width: px2rem(64);
      height: px2rem(64);
    }
    img {
      width: 100%;
    }
  }

  .header-right-badge-wrap {
    position: relative;
    margin-right: px2rem(15);
    display: flex !important;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .user-innner img {
      display: block;
    }
  }
</style>
