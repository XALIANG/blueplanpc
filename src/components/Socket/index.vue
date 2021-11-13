<template>
    <div>
        <!-- <a-button>进入单聊</a-button>
        <a-button @click="clickButton">进入群里</a-button>
        <ul>
            <li>2131</li>
            <li>21312132</li>
        </ul>-->
    </div>
</template>
<script>
import { uuid } from "@/utils/index";
export default {
    name: "WebSocket",
    props: ["params"],
    data() {
        return {
            uid: "",
            message: [],
            mainUser: []
        }
    },
    created() {
    },
    mounted() {
    },
    sockets: {
        connect() {
            Notification['success']({
                message: '服务器连接成功',
                description: '测试环境'
            })
            this.$socket.id = uuid(16, 8);
            this.$socket.emit("public_text_message");
        },
        customEmit(val) {
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
        //群聊
        currentTextMsg(res) {
            const currentResMesInfo = JSON.parse(res);
            
            // console.log(this.uid, currentResMesInfo.id);
            if (this.uid !== currentResMesInfo.id) {
                this.message.push({ position: "left", msg: currentResMesInfo.msg, id: currentResMesInfo.id });
            }
            this.message.push({ position: "right", msg: currentResMesInfo.msg, id: currentResMesInfo.id })
            this.$store.dispatch('communication/setOneUserRecord', this.message);
        },
    },
    methods: {
        groupChat() {
            this.uid = uuid(15, 16);
            this.$socket.emit("public_message", JSON.stringify({ msg: this.params, position: "right", id: this.uid }));
            this.$emit("onGroupChat", this.message);
        }
    }
}
</script>