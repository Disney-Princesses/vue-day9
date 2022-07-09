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
// 二级嵌套的页面
import home1 from '@/views/Second/home1'
import home2 from '@/views/Second/home2'
import home3 from '@/views/Second/home3'

// 路由规则
const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home', component: Home, name: 'Home', children: [
      { path: '/home', redirect: 'home1' },
      { path: 'home1', component: home1 },
      { path: 'home2', component: home2 },
      { path: 'home3', component: home3 },
      { path: '*', component: NotFound }

    ]
  },
  // { path: '/my/:title', component: My },
  { path: '/my', component: My, name: 'My' },
  { path: '/order', component: Order, name: 'Order' },
  { path: '/tag', component: Tag, name: 'Tag' },
  { path: '*', component: NotFound }
]

// 生成路由对象
const router = new VueRouter({
  routes,
})

// 全局前置守卫
const login = false  //未登录的状态
router.beforeEach((to, from, next) => {
  if (to.path == '/order' && !login) {
    next(false)
    alert('未登录')
  } else {
    next(true)
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
