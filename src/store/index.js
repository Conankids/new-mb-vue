import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger'
import * as actions from './actions';
import mutations from './mutations';
import search from './../pages/search/store';
Vue.use(Vuex);

const initState = {
	//页面加载提示
	show: true
};
const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
	state: initState,
	actions,
	mutations,
  modules:{
    search
	},
  strict: debug,
  plugins: debug ? [createLogger()] : []
});


store.registerModule('routerDir', {
  state: {
    direction: 'forward'
  },
  mutations: {
    updateDirection (state, payload) {
      state.direction = payload.direction
    }
  },
  actions: {
    updateDirection ({commit}, direction) {
      commit({type: 'updateDirection', direction: direction})
      if(direction.direction=='out'){
      	setTimeout(()=>{
          commit({type: 'updateDirection', direction: 'forward'})
				},350);
      }
    }
  }
})

export default store;
