import store from './store';
const currentRoles = ['admin'];
store.dispatch('permission/generateRoutes', currentRoles);