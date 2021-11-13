import { SET_ONE_USER_RECORD, SET_USER_STATUS } from '../mutation-types';
const state = {
    onLineTotalUserNum: 0,
    oneUserTextRecord: []

};
const mutations = {
    SET_ONE_USER_RECORD: (state, user) => {
        state.oneUserTextRecord = user;
    },
    SET_USER_STATUS: (state, userNum) => {
        state.onLineTotalUserNum = userNum;
    }
};
const actions = {
    setOneUserRecord({ commit }, user) {
        commit('SET_ONE_USER_RECORD', user);
    },
    setUserStatus({ commit }, num) {
        commit('SET_USER_STATUS', num);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}