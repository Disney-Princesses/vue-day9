import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Index from '@/views/Index'
import News from '@/views/News'
import PE from '@/views/PE'
import NotFound from '@/views/NotFound'
import Play from '@/views/Second/Play'
import Home from '@/views/Second/Home'
import Abroad from '@/views/Second/Abroad'

Vue.config.productionTip = false
Vue.use(VueRouter)

export const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path:'/index',
    component:Index
  },
  {
    path:'/news',
    component:News
  },
  {
    path:'/pe',
    component:PE,
    children:[
      {
        path:'play',
        component:Play
      },
      {
        path:'home',
        component:Home
      },
      {
        path:'abroad',
        component:Abroad
      },
    ]
  },
  {
    path:'*',
    component:NotFound
  },
]


const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
