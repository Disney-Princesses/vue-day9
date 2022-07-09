import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Ranking from '@/views/Second/Ranking.vue'
import Recommend from '@/views/Second/Recommend.vue'
import SongList from '@/views/Second/SongList.vue'

Vue.use(VueRouter)


let routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(err => err)
}
//创建路由规则数组
const routes = [
  /* { path: '/find/:name', component: Find },
  { path: '/my/:id', component: My },
  { path: '/part/:age', component: Part }, */
  { path: '/', redirect: '/find' },
  {
    path: '/find', component: Find, name: 'find',
    children: [
      // 三级路由
      { path: 'ranking', component: Ranking, children: [{ path: 'songList', component: SongList }] },
      { path: 'recommend', component: Recommend, },
      { path: 'songList', component: SongList, },
    ]
  },
  { path: '/my', component: My, name: 'my' },
  { path: '/part', component: Part, name: 'part' }, ,
  { path: '*', component: NotFound }
]
const router = new VueRouter({
  routes,
  // mode:'history' 
})






Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
