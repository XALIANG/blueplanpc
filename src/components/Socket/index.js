import WebSocket from './index.vue'

const Loading = {
    install: function (Vue) {
        Vue.component('WebSocket', WebSocket)
    }
}


export default Loading