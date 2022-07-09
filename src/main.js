import Vue from 'vue'
import App from './App.vue'
import Home from "@/views/MyHome";
import Type from "@/views/MyType";
import Order from "@/views/MyOrder";
import Mine from "@/views/MyMine";
import Found from "@/views/NotFound"
import Ranking from "@/views/Second/Ranking"
import Recommend from "@/views/Second/Recommend"
import SongList from "@/views/Second/SongList"
import Part from "@/views/Second/Third/MyPart"
import Love from "@/views/Second/Third/MyLove"

Vue.config.productionTip = false

// 引入路由
import VueRouter from "vue-router";
// 使用路由插件
Vue.use(VueRouter)
// 创建路由规则数组
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  {
    path: '/type', component: Type, children: [
      // { path: '/type', redirect: 'recommend' },
      {
        path: 'ranking', component: Ranking, children: [
          // { path: '/type/ranking', redirect: 'love' },
          { path: 'part', component: Part },
          { path: 'love', component: Love }
        ]
      },
      { path: 'recommend', component: Recommend },
      { path: 'songlist', component: SongList }
    ]
  },
  { path: '/make', component: Order },
  { path: '/mine', component: Mine },
  { path:'*',component:Found},
];
const router = new VueRouter({
  routes,
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
