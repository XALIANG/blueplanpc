<template>
<div class="navbar-container">
    <hamburger id="hamburger-container" class="hamburger-container" :is-active="sidebar.sidebarSwitch" @isActive="cllapsed" />

    <breadcrumb class="breadcrumb-container" />
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
                    <a @click="showDrawer" href="javascript:;">留言</a>
                </a-menu-item>
                <a-menu-item>
                    <a href="javascript:;">设置</a>
                </a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
    <a-drawer width="500" title="Basic Drawer" :placement="placement" :closable="false" :visible="visible" @close="onClose">
        <p>哇...</p>
        <p>辛苦啦...</p>
        <p>加油...</p>
    </a-drawer>
</div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from '@/components/Breadcrumb';
import {
    mapGetters
} from "vuex";
export default {
    data() {
        return {
            visible: false,
            placement: 'right',
        }
    },
    components: {
        Hamburger,
        Breadcrumb
    },
    computed: {
        ...mapGetters(["sidebar"]),
    },
    methods: {
        cllapsed() {
            this.$store.dispatch("app/toggleSideBar");
        },
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
        onChange(e) {
            this.placement = e.target.value;
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

    .breadcrumb-container {
        float: left;
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
