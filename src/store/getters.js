const getters = {
    sidebar:state => state.app.sidebar,
    isDark:state=> state.app.isDark,
    permission_routes:state => state.permission.routes,
    userForm:state=> state.user.userForm

}


export default getters