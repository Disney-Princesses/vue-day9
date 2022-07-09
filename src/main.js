import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 引入路由
import VueRouter from 'vue-router'
// 挂载注册
Vue.use(VueRouter)

// 引入页面
import Home from '@/views/home.vue'
import My from '@/views/my.vue';
import Order from '@/views/order.vue'
import Tag from '@/views/tag.vue'
import NotFound from '@/views/NotFound.vue'

// 路由规则
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/my', component: My },
  { path: '/order', component: Order },
  { path: '/tag', component: Tag },
  { path: '*', component: NotFound }
]

// 生成路由对象
const router = new VueRouter({
  routes,
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
