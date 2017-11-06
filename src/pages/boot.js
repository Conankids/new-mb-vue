import Vue from 'vue'
import Loading from './../components/loading'

Vue.use(Loading)
import jQuery from 'jquery'
import Waves from '../components/button/waves'

Vue.use(Waves)
import Lazyload from '../components/lazyload/index'

Vue.use(Lazyload)

import { Alert, Confirm, Toast } from 'wc-messagebox'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Toast)

window.$WIN_HEIGHT = jQuery(window).height()
window.$WIN_WIDTH = jQuery(window).width()

import mainMixins from './mainMixins'

module.exports = function (options) {
  options.el = options.el || '#app'
  options.mixins = options.mixins || []
  options.mixins = [mainMixins, ...options.mixins]
  return new Vue(options)
}

