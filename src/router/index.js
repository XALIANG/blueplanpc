import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:Layout,
    name: 'index',
    redirect:'/index',
    children:[{
      path:'index',
      component:()=> import('@/views/redirect/index.vue'),
      meta:{title:'首页',icon:''}
    }]

  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
