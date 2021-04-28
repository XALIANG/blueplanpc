<template>
<div class="navbar-container">
    <hamburger id="hamburger-container" class="hamburger-container" :is-active="sidebar.sidebarSwitch" @isActive="cllapsed" />
    <div class="navbar-right-menu">
        <a-dropdown :trigger="['click']">
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
                <span class="navbar-head">
                    <a-avatar src="https://m.aicealiang.cn/images/61f2d7c69e211819d95204dd9dc955a5.gif" alt="网络错误" shape="square" :size="40" icon="user" />
                </span>
                <!-- <a-icon type="down" /> -->
            </a>
            <a-menu slot="overlay">
                <a-menu-item>
                    <router-link to="/mypage/index">我的主页</router-link>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">注销账号</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">关于我们</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import {
    mapGetters
} from "vuex";
export default {
    components: {
        Hamburger,
    },
    computed: {
        ...mapGetters(["sidebar"]),
    },
    methods: {
        cllapsed() {
            this.$store.dispatch("app/toggleSideBar");
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar-container {
    width: 100%;
    height: 54px;
    padding: 0 15px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

    .hamburger-container {
        line-height: 50px;
        height: 100%;
        float: left;
        cursor: pointer;
    }

    .navbar-right-menu {
        float: right;
        margin-right: 10px;
        height: 100%;
        line-height: 50px;
        color: #5a5e66;
        vertical-align: text-bottom;

        &:focus {
            outline: none;
        }

        .navbar-head {
            margin-right: 10px;
        }
    }
}
</style>
