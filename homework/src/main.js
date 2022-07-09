import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'
import NotFound from '@/views/NotFound'


Vue.config.productionTip = false
Vue.use(VueRouter)
// 全局自定义指令，获取焦点
Vue.directive('focusl',{
  inserted(el) {
    el.focus()
  }
})

Vue.directive('person',{
  inserted(el,bind) {
    console.log(bind);
    if(bind.value==0) {
      el.style.display='none'
    } else {
      el.style.display='block'
    }
  },
  update(el,bind) {
    if(bind.value==0) {
      el.style.display='none'
    } else {
      el.style.display='block'
    }
  }
})

// 引入bootStrap.css和字体图标样式
import "bootstrap/dist/css/bootstrap.css"
import "./assets/fonts/iconfont.css"
import axios from 'axios'
// import { component } from 'vue/types/umd'
axios.defaults.baseURL='https://www.escook.cn'
Vue.prototype.$axios=axios

const routes = [
  {
    path:'/',
    redirect:'/MyGoodsList'
  },
  {
    path:'/MyGoodsList',
    component:MyGoodsList
  },
  {
    path:'/MyGoodsSearch',
    component:MyGoodsSearch
  },
  {
    path:'/MyUserInfo',
    component:MyUserInfo
  },
  {
    path:'*',
    component:NotFound
  }
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
