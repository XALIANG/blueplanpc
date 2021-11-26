import store from './store';
import router from './router';

const currentRoles = ['admin'];

router.beforeEach(async (to, from, next) => {
    document.title = `${to.meta.title}`;
    if (to.path === '/login') {
        next()
    } else {
        const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
        //     //待 action 接口完成使用
        if (store.getters.userForm.token) {
            next()
            // const hasRoles = store.getters.routes.length > 0;
            // if (hasRoles) {
            //     next();
            // } else {
            //     try {
            //         const { roles } = await store.dispatch("getUserRightList");
            //         const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
            //         router.addRoutes(addRoutes)
            //         next({
            //             ...to,
            //             replace: true
            //         });

            //     } catch (error) {
            //         console.log(error)
            //     }
            // }

        } else {
            next({
                path: '/login',
                query: {
                    redirect: '/'
                }
            });
        }
        if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/login') {
            alert('不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {});
        } else {
            next();
        }
    }
})