import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import NotFound from '@/views/NotFound.vue'
import Recommend from '@/views/Second/Recommend'
import Ranking from '@/views/Second/Ranking'
import SongList from '@/views/Second/SongList'


// 引入vue-router
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/find'//重定向
  },
  {
    path: '/find',
    name: 'Find',
    component: Find,
    children: [
      {
        path: 'recommend',
        component: Recommend
      },
      {
        path: 'ranking',
        component: Ranking
      },
      {
        path: 'songList',
        component: SongList
      },
    ]
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/part/:username/:id',
    name: 'Part',
    component: Part
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes,
  // mode:'history'
})

// 设置全局守卫
const isLogin = false
router.beforeEach((to, from, next) => {
  if (to.path === '/my' && !isLogin) {//true表示未登录
    alert('请先登录')
    next(false)
  } else {
    next()//正常放行
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
