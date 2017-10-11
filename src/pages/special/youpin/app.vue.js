// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app.vue'
import router from './router'
import Loading from './components/loading'

Vue.config.productionTip = false
Vue.use(Loading)

import {Alert, Confirm, Prompt, Toast} from 'wc-messagebox'
import './style/less/wc-messagebox.less'

Vue.use(Alert)
Vue.use(Confirm)
Vue.use(Prompt)
Vue.use(Toast)

new Vue({
  el: '#app',
  router,
  render: _ => _(App)
});
