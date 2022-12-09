import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {
      name: "未登录",
      role: "默认",
      token: "",
    },
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo.name = data.name;
      state.userInfo.role = data.role;
    },
  },
  actions: {},
  modules: {},
});
