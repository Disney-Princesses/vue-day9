import Index from '@/views/Index'
import Sort from '@/views/Sort'
import Order from '@/views/Order'
import My from '@/views/My'
import NotFound from '@/views/NotFound'

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
      path:'/sort',
      component:Sort
    },
    {
      path:'/order',
      component:Order
    },
    {
      path:'/my',
      component:My
    },
    {
      path:'*',
      component:NotFound
    },
  ]
