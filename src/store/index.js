import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo:null
  },
  mutations: {
    GetUserinfo(state,data){
      state.userinfo = data
      console.log(state.userinfo)
    }
  },
  actions: {

  },
  modules: {
  }
})
