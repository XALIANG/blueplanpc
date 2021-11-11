<template>
    <ul id="content-views">
        <li
            v-for="(userMsg,i) in message"
            class="text-contaiter left-text m-b-10"
            :key="i"
            :class="{ 'right-text': userMsg.position === 'right' }"
        >
            <span class="text-msg">{{ userMsg.msg }}</span>
        </li>
    </ul>
</template>
<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            message: [
                {
                    msg: "在？",
                    position: "left"
                },
                {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "right"
                },
                {
                    msg: "好的",
                    position: "right"
                },
                {
                    msg: "好的",
                    position: "right"
                }, {
                    msg: "好的",
                    position: "left"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "right"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "left"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "left"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "left"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "left"
                }, {
                    msg: "上号？",
                    position: "left"
                },
                {
                    msg: "好的",
                    position: "left"
                },

            ]
        }
    },
    computed: {
        ...mapState({
            userMessageData: state => state.communication.oneUserTextRecord
        })
    },
    mounted() {

    }
}
</script>
<style lang="scss">
#content-views {
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    .text-contaiter {
        width: 100%;
    }
    .text-msg {
        background-color: #1890ff;
        border-bottom-color: green; /*为了给after伪元素自动继承*/
        color: #fff;
        font-size: 12px;
        font-family: Arial;
        line-height: 18px;
        padding: 5px 12px 5px 12px;
        box-sizing: border-box;
        border-radius: 6px;
        word-break: break-all;
        position: relative;
    }

    .left-text {
        display: flex;
        flex-flow: row;
    }
    .right-text {
        display: flex;
        flex-flow: row-reverse;
        padding-right: 10px;
    }
}

/*修改滚动条样式*/
#content-views::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 7px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}

#content-views::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 7px;
    background-color: skyblue;
    background-image: -webkit-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.2) 25%,
        transparent 25%,
        transparent 50%,
        rgba(255, 255, 255, 0.2) 50%,
        rgba(255, 255, 255, 0.2) 75%,
        transparent 75%,
        transparent
    );
}

#content-views::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #f8f4f4;
    border-radius: 10px;
}
</style>