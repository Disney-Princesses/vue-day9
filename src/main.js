import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/views/Home.vue'
import Class from '@/views/Class.vue'
import Order from '@/views/Order.vue'
import My from '@/views/My.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/class',
    component: Class
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/my',
    component: My
  },
]

const router = new VueRouter({
  routes
})




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
