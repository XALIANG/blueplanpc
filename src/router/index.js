import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';
Vue.use(VueRouter)

/**
 * @hidden 控制菜单显隐
 */
// export const asyncRoutes = [];
export const constatRoutes = [{
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '主页应用',
    type: 'home',
    children: [{
      path: 'index',
      component: () => import('@/views/desktop/index'),

    }]

  }, {
    path: '/redirect',
    component: Layout,
    name: 'redirect',
    hidden: true,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'redirect',
      component: () => import('@/views/redirect/index'),
      meta: {
        title: 'null',
        icon: '',
      }
    }]

  },
  {
    path: '/mypage',
    component: Layout,
    hidden: true,
    redirect: '/index',
    name: '我的主页',
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