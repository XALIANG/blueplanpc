import store from './store';
import router from './router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const currentRoles = ['admin'];

NProgress.configure({ showSpinner: false });


router.beforeEach(async (to, from, next) => {
    NProgress.start()


    const token = store.state.user.userForm.token;
    if (to.path === '/login') {
        next();
    } else {
        if (token) {
            const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
            console.log(1)
            next();
        } else {
            console.log(1)
            next({ path: '/login' });
        }
    }

    NProgress.done()
})