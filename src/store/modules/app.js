import Vue from 'vue'
import {
    SIDEBAR_TYPE,
    DEFAULT_THEME,
    DEFAULT_LAYOUT_MODE,
    DEFAULT_COLOR,
    DEFAULT_COLOR_WEAK,
    DEFAULT_FIXED_HEADER,
    DEFAULT_FIXED_SIDEMENU,
    DEFAULT_FIXED_HEADER_HIDDEN,
    DEFAULT_CONTENT_WIDTH_TYPE,
    TOGGLE_SET_SIDBAR_HEADER,
    DEFAULT_MULTI_TAB
} from '@/store/mutation-types'


const state = {
    isDark: false,
    device: 'desktop',
    theme: '',
    layout: '',
    contentWidth: '',
    fixedHeader: false,
    headerSidebar: false,
    fixSiderbar: false,
    autoHideHeader: false,
    color: null,
    weak: false,
    multiTab: true,
    sidebarSwitch: false,
    withoutAnimation: false,


}
const mutations = {
    SET_SIDEBAR: state => {
        state.sidebarSwitch = !state.sidebarSwitch;
        state.withoutAnimation = false;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
        state.sidebarSwitch = false;
        state.withoutAnimation = withoutAnimation;
    },
    SWITCH_DARK: (state, callbackDARk) => {
        state.isDark = callbackDARk;
        console.log('callbackDARk', state.isDark)
    },
    SET_SIDEBAR_TYPE: (state, type) => {
        state.sidebar = type
        Vue.ls.set(SIDEBAR_TYPE, type)
    },
    // eslint-disable-next-line no-dupe-keys
    CLOSE_SIDEBAR: (state) => {
        Vue.ls.set(SIDEBAR_TYPE, true)
        state.sidebar = false
    },
    TOGGLE_DEVICE: (state, device) => {
        state.device = device
    },
    TOGGLE_THEME: (state, theme) => {
        Vue.ls.set(DEFAULT_THEME, theme)
        state.theme = theme
    },
    TOGGLE_LAYOUT_MODE: (state, layout) => {
        Vue.ls.set(DEFAULT_LAYOUT_MODE, layout)
        state.layout = layout
    },
    TOGGLE_FIXED_HEADER: (state, fixed) => {
        Vue.ls.set(DEFAULT_FIXED_HEADER, fixed)
        state.fixedHeader = fixed
    },
    TOGGLE_FIXED_SIDERBAR: (state, fixed) => {
        Vue.ls.set(DEFAULT_FIXED_SIDEMENU, fixed)
        state.fixSiderbar = fixed
    },
    TOGGLE_FIXED_HEADER_HIDDEN: (state, show) => {
        Vue.ls.set(DEFAULT_FIXED_HEADER_HIDDEN, show)
        state.autoHideHeader = show
    },
    TOGGLE_CONTENT_WIDTH: (state, type) => {
        Vue.ls.set(DEFAULT_CONTENT_WIDTH_TYPE, type)
        state.contentWidth = type
    },
    TOGGLE_COLOR: (state, color) => {
        Vue.ls.set(DEFAULT_COLOR, color)
        state.color = color
    },
    TOGGLE_WEAK: (state, flag) => {
        Vue.ls.set(DEFAULT_COLOR_WEAK, flag)
        state.weak = flag
    },
    TOGGLE_MULTI_TAB: (state, bool) => {
        Vue.ls.set(DEFAULT_MULTI_TAB, bool)
        state.multiTab = bool
    },
    TOGGLE_SET_HEADER: (state, flag) => {
        Vue.ls.set(TOGGLE_SET_SIDBAR_HEADER, flag)
        state.headerSidebar = flag;
    }
}
const actions = {
    toggleSideBar({ commit }) {
        commit('SET_SIDEBAR');
    },
    closeSideBar({ commit, withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation);
    },
    openDark({ commit }, val) {
        console.log('val', val)
        commit('SWITCH_DARK', val);
    },
    setSidebar({ commit }, type) {
        commit('SET_SIDEBAR_TYPE', type)
    },
    CloseSidebar({ commit }) {
        commit('CLOSE_SIDEBAR')
    },
    ToggleDevice({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    },
    ToggleTheme({ commit }, theme) {
        commit('TOGGLE_THEME', theme)
    },
    ToggleLayoutMode({ commit }, mode) {
        commit('TOGGLE_LAYOUT_MODE', mode)
    },
    ToggleFixedHeader({ commit }, fixedHeader) {
        if (!fixedHeader) {
            commit('TOGGLE_FIXED_HEADER_HIDDEN', false)
        }
        commit('TOGGLE_FIXED_HEADER', fixedHeader)
    },
    ToggleFixSiderbar({ commit }, fixSiderbar) {
        commit('TOGGLE_FIXED_SIDERBAR', fixSiderbar)
    },
    ToggleFixedHeaderHidden({ commit }, show) {
        commit('TOGGLE_FIXED_HEADER_HIDDEN', show)
    },
    ToggleContentWidth({ commit }, type) {
        commit('TOGGLE_CONTENT_WIDTH', type)
    },
    ToggleColor({ commit }, color) {
        commit('TOGGLE_COLOR', color)
    },
    ToggleWeak({ commit }, weakFlag) {
        commit('TOGGLE_WEAK', weakFlag)
    },
    ToggleMultiTab({ commit }, bool) {
        commit('TOGGLE_MULTI_TAB', bool)
    },
    toggleSetSidbarHeader({ commit }, bool) {
        commit('TOGGLE_SET_HEADER', bool)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}