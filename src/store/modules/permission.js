import {
    constatRoutes,
} from '@/router';

// 生成当前路由
// 异步请求数据模型路由
// 判断super admin 与普通用户的路由
// 创建 有允许方法 核心是判断服务端路由与当前路由是否成立条件 
// 异步筛选通过的路由 将异步路由深拷贝 递归遍历判断 服务端路由与深拷贝路由进行判断，判断是否有children 有的话就递归添加路由


//允许方法
function hasPermission(roles, route) {
    if (roles.meta && route.meta.roles) {
        return roles.some(role => route.meta.rloes.includes(role));
    } else {
        return true;
    }

}
//权限验证路由 
const asyncRoutes = [];

//筛选路由
function filterAsyncRouotes(routes, roles) {
    const res = [];
    routes.forEach(route => {
        const temp = {
            ...route
        };
        if (hasPermission(roles, temp)) {
            if (temp.children) {
                temp.children = filterAsyncRouotes(temp.children, roles);
            }
            res.push(temp);
        }

    })
    return res;
}

const state = {
    routes: [],
    addRoutes: []
}
const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes;
        state.routes = constatRoutes.concat(routes);
    }
}
const actions = {
    generateRoutes({
        commit
    }, roles) {
        console.log(roles)
        return new Promise(resolve => {
            let currentRoutes = [];
            if (roles.includes('admin')) {
                currentRoutes = asyncRoutes|| [];
            } else {
                currentRoutes = filterAsyncRouotes(asyncRoutes, roles);
            }
            resolve(currentRoutes);
            commit('SET_ROUTES', currentRoutes)
        })
    }
}



export default {
    namespaced: true,
    state,
    mutations,
    actions
}