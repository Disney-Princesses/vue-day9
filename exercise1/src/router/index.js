import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import Test from '@/views/test.vue'
import NotFound from '@/views/NotFound.vue'

export const routes = [
    { path: '/', redirect: '/find' },
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/part', component: Part },
    { path: '/test', component: Test },
    { path: '*', component: NotFound },
]
