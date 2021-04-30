import store from './store';
import router from './router';
const currentRoles = ['admin'];




router.beforeEach(async (to, from, next) => {
    const addRoutes = store.dispatch('permission/generateRoutes', currentRoles);
    console.log(addRoutes)
    next()
})