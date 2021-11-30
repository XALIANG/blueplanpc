import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';
Vue.use(VueRouter);

/**
 * @hidden 控制菜单显隐
 *
 */

/**
 * @path 路由格式
 * @redirect 重定向路径
 * @children index
 * @meta 描述
 *
 */

// export const asyncRoutes = [];
export const constatRoutes = [
  {
    path: '*',
    component: () => import('@/views/404/index'),
    hidden: true,
    meta: {
      title: '没有资源'
    }
  },
  {
    path: '/register',
    component: () => import('@/views/userRegister/index'),
    hidden: true,
    meta: {
      title: '注册'
    }
  },
  {
    path: '/login',
    component: () => import('@/views/userLogin/index'),
    hidden: true,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: '主页应用',
    children: [
      {
        path: 'index',
        name: 'HomeApp',
        component: () => import('@/views/desktop/index'),
        meta: { title: '主页应用', type: 'home' }
      }
    ]
  },
  {
    path: '/work',
    component: Layout,
    name: '工作',
    meta: { title: '工作', type: 'settings' },
    redirect: '/work/workplace',
    children: [
      {
        path: 'workplace',
        name: '工作计划',
        component: () => import('@/views/workplace/index'),
        meta: {
          title: '工作计划',
          type: 'laptop'
        }
      }
    ]
  },
  {
    path: '/flowchart',
    component: Layout,
    name: '想象空间',
    meta: { title: '想象空间', type: 'settings' },
    redirect: '/process/flowchart',
    children: [
      {
        path: 'flowchart',
        name: '想象空间',
        component: () => import('@/views/flowchart/index'),
        meta: {
          title: '想象空间',
          type: 'sketch'
        }
      }
    ]
  },
  {
    path: '/form',
    component: Layout,
    name: '表单面板',
    meta: { title: '表单面板', type: 'container' },
    redirect: '/form/formpanel',
    children: [
      {
        path: 'formpanel',
        name: '表单设计',
        component: () => import('@/views/form/index'),
        meta: {
          title: '表单设计',
          type: 'container'
        }
      },
      {
        path: 'layoutsetting',
        name: '布局设计',
        // component: () => import('@/views/form/index'),
        meta: {
          title: '布局设计',
          type: 'layoutsetting'
        }
      },
      {
        path: 'baseform',
        name: '基础表单',
        // component: () => import('@/views/form/index'),
        meta: {
          title: '基础表单',
          type: 'baseform'
        }
      },
      {
        path: 'template',
        name: '模板列表',
        // component: () => import('@/views/form/index'),
        meta: {
          title: '模板列表',
          type: 'templatelist'
        }
      },
      {
        path: '/test',
        component: () => import('@/views/test/index'),
        hidden: true,
        meta: {
          title: '表单测试'
        }
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    name: '系统管理',
    meta: { title: '系统管理', type: 'setting' },
    redirect: 'permission/role',
    children: [
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/system/role'),
        meta: {
          title: '角色管理',
          type: 'usergroup-add'
        }
      },
      {
        path: 'node',
        name: '权限管理',
        component: () => import('@/views/system/node'),
        meta: {
          title: '权限管理',
          type: 'usergroup-add'
        }
      },
      {
        path: 'account',
        name: '账号管理',
        component: () => import('@/views/system/account'),
        meta: {
          title: '账号管理',
          type: 'usergroup-add'
        }
      }
    ]
  },
  {
    path: '/redirect',
    component: Layout,
    name: 'redirect',
    hidden: true,
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'redirect',
        component: () => import('@/views/redirect/index'),
        meta: {
          title: 'redirect'
        }
      }
    ]
  },
  {
    path: '/mypage',
    component: Layout,
    hidden: true,
    redirect: '/index',
    name: '我的主页',
    children: [
      {
        path: 'index',
        name: '个人主页',
        component: () => import('@/views/mypage/index'),
        meta: {
          title: '我的主页',
          icon: ''
        }
      },
      {
        path: 'communication',
        name: 'LAN微聊',
        component: () => import('@/views/communication/index'),
        meta: {
          title: 'Lan微聊',
          icon: ''
        }
      }
    ]
  },
  {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback/index',
    name: '反馈中心',
    children: [
      {
        path: 'index',
        name: '反馈中心',
        component: () => import('@/views/feedback/index'),
        meta: { title: '反馈中心', type: 'usergroup-add' }
      }
    ]
  }
];

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constatRoutes
  });

const router = createRouter();

export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
