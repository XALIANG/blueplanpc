const state = {
    sidebar: {
        sidebarSwitch:true,
        withoutAnimation:false
    }
}
const mutations = {
    SET_SIDEBAR:state=>{
        state.sidebar.sidebarSwitch = !state.sidebar.sidebarSwitch;
        state.sidebar.withoutAnimation = false;
    },
    CLOSE_SIDEBAR:(state,withoutAnimation)=>{
        state.sidebar.sidebarSwitch = false;
        state.sidebar.withoutAnimation = withoutAnimation;
    }
}
const actions = {
    toggleSideBar({commit}){
        commit('SET_SIDEBAR');
    },
    closeSideBar({commit,withoutAnimation}){
        commit('CLOSE_SIDEBAR',withoutAnimation);
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}