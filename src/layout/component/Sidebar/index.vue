<template>
<div>
    <a-menu :inlineCollapsed="isCollapse" :default-selected-keys="['1']" mode="inline" @click="handleClick">
        <a-sub-menu key="sub1" @titleClick="titleClick">
            <span slot="title">
                <a-icon class="svg-icon" type="mail" /><span>Navigation One</span></span>
            <a-menu-item-group key="g1">
                <a-menu-item key="1"> Option 1 </a-menu-item>
                <a-menu-item key="2"> Option 2 </a-menu-item>
            </a-menu-item-group>
        
        </a-sub-menu>
    </a-menu>
</div>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    data() {
        return {
            current: ["mail"],
            openKeys: ["sub1"],
        };
    },
    computed: {
        ...mapGetters(['sidebar']),
        isCollapse() {
            return this.sidebar.sidebarSwitch;
        }
    },
    watch: {
        openKeys(val) {
            console.log("openKeys", val);
        },
    },
    methods: {
        handleClick(e) {
            console.log("click", e);
        },
        titleClick(e) {
            console.log("titleClick", e);
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
