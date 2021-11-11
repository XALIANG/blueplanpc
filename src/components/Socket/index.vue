<template>
    <div>
        <!-- <a-button>进入单聊</a-button>
        <a-button @click="clickButton">进入群里</a-button>
        <ul>
            <li>2131</li>
            <li>21312132</li>
        </ul> -->
    </div>
</template>
<script>
import { uuid } from "@/utils/index";
export default {
    name: "WebSocket",
    data() {
        return {
            id: '',
            message: []
        }
    },
    created() {
    },
    mounted() {
    },
    sockets: {
        connect: function () {
            Notification['success']({
                message: '服务器连接成功',
                description: '测试环境'
            })
            this.$socket.id = uuid(16, 8);
            this.$socket.emit('public_text_message', JSON.stringify({ status: "进入群聊" }))

        },
        customEmit: function (val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
        // 监听断开连接，函数
        disconnect() {
            Notification['error']({
                message: '服务器断开',
                description: '测试环境'
            })
        },
        //在线人数
        currentPersonList(res) {
            console.log("在线人数", res)
            this.$store.dispatch('communication/setUserStatus', res);
        },
        text1(data) {
            console.log("msg", data)
        },
        quntui(data) {
            console.log(data)
        }
    },
    methods: {
        clickButton(val) {

        }
    }
}
</script>