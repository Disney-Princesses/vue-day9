import Find from '@/views/Find.vue'
import My from '@/views/My.vue'
import Part from '@/views/Part.vue'
import Test from '@/views/test.vue'
import Test2 from '@/views/test2.vue'
import Test3 from '@/views/test3.vue'
import NotFound from '@/views/NotFound.vue'

export const routes = [
    { path: '/', redirect: '/find' },
    { path: '/find', component: Find },
    { path: '/my', component: My },
    {
        path: '/part', component: Part, children: [
            { path: 'test', component: Test },
            { path: 'Test2', component: Test2 },
            { path: 'Test3', component: Test3 },

        ]
    },
    { path: '*', component: NotFound },
]
