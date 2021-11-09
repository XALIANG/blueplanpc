import WebSocket from './index.vue'
// 这里是重点
const Loading = {
    install: function (Vue) {
        Vue.component('WebSocket', WebSocket)
    }
}

// 导出组件
export default Loading