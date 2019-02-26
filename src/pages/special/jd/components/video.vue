<template>
  <div class="video-wrap">
    <div class="video">
      <div class="video-inner" @click="play">
        <iframe
          class="video-iframe"
          :class="{'full-screen':playing}"
          frameborder="0"
          :src="`https://v.qq.com/iframe/player.html?vid=m0690l8zl0z&tiny=0&auto=${playing?1:0}`"
        />
        <!--<div v-show="!playing" class="play-btn"/>-->
      </div>
    </div>
    <a class="video-next" v-animate
       href="http://m.jiguo.com/mb/article/article/62706.html?from=singlemessage&isappinstalled=0">
      <img class="img" src="//s2.jiguo.com/efbf5ebc-3dec-45a7-ad61-fb59b5a37d6b?imageView2/1/w/640/h/365/q/100"/>
      <div class="text">这个夏天不仅有世界杯！超能玩家跨界集结...</div>
    </a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        playing: false
      }
    },
    mounted () {
      // this.$refs['video'].onended = () => {
      //   this.playing = false
      // }
    },
    methods: {
      play () {
        //let video = this.$refs['video']
        // if (this.playing) {
        //   //video.pause()
        //   this.playing = false
        // } else {
        //   //video.play()
        //   this.playing = true
        // }
      }
    }
  }
</script>

<style lang="scss">
  @import "../style/function.scss";

  .video-wrap {
    margin-top: px2rem(1126);

    .video {
      margin: auto;
      width: px2rem(830);
      height: px2rem(560);
      position: relative;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;

        background-image: url(./video-bg.png);
        background-position: left top;
        background-size: 100% 100%;
        pointer-events: none;
      }
      .video-inner {
        width: px2rem(830);
        height: px2rem(470);
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #000;
        video {
          width: 100%;
          height: 100%;
        }
      }
    }

    .video-next {
      width: px2rem(830);
      height: px2rem(472);
      margin: auto;
      margin-top: px2rem(95);
      position: relative;
      display: block;
      &:after {
        content: '';
        display: block;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 2;

        background-image: url(./image-window.png);
        background-position: left top;
        background-size: 100% 100%;
      }
      .img {
        width: 100%;
        height: 100%;
      }
      .text {
        color: #fff;
        height: px2rem(75);
        line-height: px2rem(75);
        background-color: rgba(0, 0, 0, 0.34);
        font-size: px2rem(26);
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
      }
    }
  }

  .play-btn {

    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 100%;
    height: 100%;
    position: absolute;
    /*background-image: url(./play-btn.png);*/
    background-position: center center;
    background-size: px2rem(106) px2rem(106);
    background-repeat: no-repeat;
    z-index: 1;
  }

  .video-iframe {
    width: 100%;
    height: 100%;
    border: none;
    &.full-screen {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 5;
    }
  }
</style>
