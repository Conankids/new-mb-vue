<template>
  <div>
    <button type="button" class="button" :class="sending?'gray':''" @click="sendCode">{{ text }}</button>
    <loading-window ref="loading-window"></loading-window>
  </div>
</template>

<script>
  import $ from 'jquery'
  import LoadingWindow from '@/components/window/loading.vue'

  export default {
    props: {
      postData: {
        type: Object,
        require: true
      },
      time: {
        type: Number,
        default: 60
      },
      url: {
        type: String,
        default: '/mb/ajax/login.html'
      }
    },
    data () {
      return {
        sending: false,
        text: '发送验证码',
        _time: this.time
      }
    },
    components: {
      LoadingWindow
    },
    methods: {
      sendCode () {
        if (!/^1\d{10}$/.test(this.postData.tel)) {
          this.$alert('请输入手机号码')
          return
        }
        if (!this.postData.vcode) {
          this.$alert('请输入图片验证码')
          return
        }

        if (this.sending) return
        this.sending = true
        this._time = this.time
        this.$refs['loading-window'].show()
        $.post(this.url, this.postData, repalyData => {
          this.$refs['loading-window'].close()
          if (repalyData.resultCode == 0) {
            this.$emit('success')
            this.sending = true
            this.runTimer()
          } else {
            this.$emit('error')
            this.sending = false
            this.$alert(repalyData.errorMsg || '登录失败')
          }
        }, 'json')
      },
      runTimer () {
        this._time--
        this.text = this._time + 's后重新发送'
        if (this._time >= 0) {
          setTimeout(() => {
            this.runTimer()
          }, 1000)
        } else {
          this.sending = false
          this.text = '发送验证码'
          this._time = this.time
          this.$emit('complete')
        }
      }
    }
  }
</script>
