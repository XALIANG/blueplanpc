import store from './store';
import router from './router';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const currentRoles = ['admin'];

NProgress.configure({ showSpinner: false });


router.beforeEach(async (to, from, next) => {
    NProgress.start()
    const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
    NProgress.done()
    next()
})