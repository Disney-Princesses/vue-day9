import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import UI_Router from '@/views/UI_Router'
import Contacts from '@/views/Contacts'
import About from '@/views/About'
import NotFound from '@/views/NotFound'
import All_contacts from '@/views/Second/All_contacts'
import Alice from '@/views/Second/Alice'
import Bob from '@/views/Second/Bob'
import Blog from '@/views/Second/Third/Blog'
import Fax from '@/views/Second/Third/Fax'



Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/ui_router'
  },
  {
    path:'/ui_router',
    component:UI_Router
  },
  {
    path:'/contacts',
    component:Contacts,
    children:[
      {
        path:'all_contacts',
        component: All_contacts
      },
      {
        path:'alice',
        component: Alice
      },
      {
        path:'bob',
        component: Bob,
        children:[
          {
            path:'blog',
            component:Blog
          },
          {
            path:'fax',
            component:Fax
          },
        ]
      },
    ]
  },
  {
    path:'/about',
    component:About
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
