import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/fonts/iconfont.css'
import axios from 'axios'
axios.defaults.baseURL = 'https://www.escook.cn'
Vue.prototype.$axios = axios
Vue.config.productionTip = false


import MyGoodsList from './views/MyGoodsList.vue'
import MyGoodsSearch from './views/MyGoodsSearch.vue'
import MyUserInfo from './views/MyUserInfo.vue'
// 路由


import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  { path: '/', directive: '/myGoodsList' },
  { path: '/myGoodsList', component: MyGoodsList, name: 'myGoodsList' },
  { path: '/myGoodsSearch', component: MyGoodsSearch, name: 'myGoodsSearch' },
  { path: '/myUserInfo', component: MyUserInfo, name: "myUserInfo" },
]

const router = new VueRouter({
  routes
})
Vue.directive("focus", {
  inserted(el) {
    el.focus()
  }
})
Vue.directive("isShow", {
  inserted(el, binding, Vnode) {
    if (!Vnode.context.newList.includes(binding.value)) {
      el.style.display = 'none'
    }
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
