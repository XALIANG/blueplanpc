const state = {
    isDark:false,
    sidebar: {
        sidebarSwitch:false,
        withoutAnimation:false,
       
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
    },
    SWITCH_DARK:(state,callbackDARk)=>{
        state.isDark = callbackDARk;
        console.log('callbackDARk',state.isDark)
    }
}
const actions = {
    toggleSideBar({commit}){
        commit('SET_SIDEBAR');
    },
    closeSideBar({commit,withoutAnimation}){
        commit('CLOSE_SIDEBAR',withoutAnimation);
    },
    openDark({commit},val){
        console.log('val',val)
        commit('SWITCH_DARK',val);
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}