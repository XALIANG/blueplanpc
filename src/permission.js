import store from './store';
import router from './router';

const currentRoles = ['admin'];

router.beforeEach(async (to, from, next) => {

    const token = store.state.user.userForm.token;
    if (to.path === '/login') {
        next();
    }
    else {
        // 测试阶段
        if (token) {
            const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
            next();
        } else {
            const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
            next();
            // next({ path: '/login' });
        }
    }

})