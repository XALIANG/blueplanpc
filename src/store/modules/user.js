
const state = {
    token: sessionStorage.getItem("token") || "",
    userForm: JSON.parse(sessionStorage.getItem("userForm")) || {},


};
const mutations = {

    SET_USER_INFO: (state, user) => {
        state.userForm = user;
    }

};
const actions = {
    setUserInfo({ commit }, user) {
        commit('SET_USER_INFO', user);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}