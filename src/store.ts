import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const IsShow = 'isShow'
export default new Vuex.Store({
  state: {
    isShow: false
  },
  mutations: {
    IsShow(state, value) {
      state.isShow = value
    }
  },
  actions: {}
})
