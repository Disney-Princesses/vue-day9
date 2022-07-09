import Vue from 'vue'
import App from './App.vue'
import Home from "@/views/MyHome";
import Type from "@/views/MyType";
import Order from "@/views/MyOrder";
import Mine from "@/views/MyMine";

Vue.config.productionTip = false

// 引入路由
import VueRouter from "vue-router";
// 使用路由插件
Vue.use(VueRouter)
// 创建路由规则数组
const routes = [
  { path: '/home', component: Home },
  { path: '/type', component: Type },
  { path: '/make', component: Order },
  { path: '/mine', component: Mine },
];
const router=new VueRouter({
  routes,
});
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
