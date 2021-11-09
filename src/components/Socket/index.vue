<template>
    <div></div>
</template>
<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    created() {
    },
    mounted() {
        console.log(this.$socket.subscribe)
    },
    sockets: {
        connect: function () {
            console.log("服务器连接成功")
            console.log(this.$socket)
            this.id = this.$socket.id;
            this.$socket.emit('text', JSON.stringify({ userName: "aliang", passWord: "我是你大爷" }));



        },
        customEmit: function (val) {
            console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
        },
        // 监听断开连接，函数
        disconnect() {
            console.log('断开服务器连接');
        },
        text1(data) {
            console.log(1)
            console.log("msg", data)
        }
    },
    methods: {
        clickButton(val) {
            // $socket is socket.io-client instance
            this.$socket.on('text1', (data) => {
                //输出服务端响应了数据
                console.log(data);
            });
        }
    }
}
</script>