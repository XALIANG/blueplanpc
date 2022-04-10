const state = {
  token: '',
  userForm: JSON.parse(sessionStorage.getItem('userForm')) || {}
};
const mutations = {
  SET_USER_INFO: (state, user) => {
    state.userForm = user;
  },
  REMOVE_USER_INFO: (state, user) => {
    state.token = '';
    state.userForm = {};
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userForm');
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
};
