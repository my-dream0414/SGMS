import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

// //获取原型对象上的push函数
// const originalPush = VueRouter.prototype.push
// //修改原型对象中的push方法
// VueRouter.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// }

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
