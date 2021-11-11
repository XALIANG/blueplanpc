
const state = {
    token: sessionStorage.getItem("token") || "",
    userForm: JSON.parse(sessionStorage.getItem("userForm")) || {},


};
const mutations = {
   
};
const actions = {
   
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}