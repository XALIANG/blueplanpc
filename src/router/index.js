import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';
Vue.use(VueRouter)

/**
 * @hidden 控制菜单显隐
 */
// export const asyncRoutes = [];
export const constatRoutes = [{
    path: '/redirect',
    component: Layout,
    name: 'redirect',
    hidden: true,
    redirect: '/index',
    children: [{
      path: 'index',
      component: () => import('@/views/redirect/index'),
      meta: {
        title: 'null',
        icon: '',
      }
    }]

  },
  {
    path: '/',
    component: Layout,
    name: 'desktop',
    redirect: '/index',
    children: [{
      path: 'index',
      component: () => import('@/views/desktop/index'),
      meta: {
        title: '桌面',
        icon: ''
      }
    }]

  },
  {
    path: '/mypage',
    component: Layout,
    hidden: true,
    name: 'mypage',
    redirect: '/index',
    children: [{
      path: 'index',
      component: () => import('@/views/mypage/index'),
      meta: {
        title: '我的主页',
        icon: '',
      }
    }]

  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: constatRoutes
})

export default router