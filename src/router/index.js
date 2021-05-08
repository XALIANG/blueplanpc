import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout';
Vue.use(VueRouter)

/**
 * @hidden 控制菜单显隐
 */
// export const asyncRoutes = [];
export const constatRoutes = [
  {
    path:'/register',
    component: ()=> import('@/views/userRegister/index'),
    hidden:true
  },
  {
    path:'/login',
    component: ()=> import('@/views/userLogin/index'),
    hidden:true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '主页应用',
    children: [{
      path: 'index',
      name:'HomeApp',
      component: () => import('@/views/desktop/index'),
      meta: { title: '主页应用', type: 'home' }
    }]

  },
  {
    path: '/permission',
    component: Layout,
    name: '系统管理',
    meta: { title: '系统管理', type: 'setting' },
    redirect: 'permission/role',
    children: [{
      path: 'role',
      name: '角色管理',
      component: () => import('@/views/system/role'),
      meta: {
        title: '角色管理',type: 'usergroup-add'
      }
    },{
      path: 'account',
      name: '账号管理',
      component: () => import('@/views/system/account'),
      meta: {
        title: '账号管理',type: 'usergroup-add'
      }
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
        title: 'redirect',
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
      name: '个人主页',
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