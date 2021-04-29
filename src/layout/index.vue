<template>
<div :class="classObj" class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="blueplan-container">
        <div class="fixed-header">
            <navbar></navbar>
            <tagsview />
        </div>
        <app-main />
    </div>
</div>
</template>

<script>
import AppMain from "@/layout/component/AppMain";
import Sidebar from "@/layout/component/Sidebar";
import Navbar from "@/layout/component/Navbar";
import Tagsview from '@/layout/component/Tagsview'
import {
    mapGetters
} from "vuex";

export default {
    name: "Layout",
    components: {
        AppMain,
        Sidebar,
        Navbar,
        Tagsview,
    },
    computed: {
        ...mapGetters(["sidebar"]),
        classObj() {
            return {
                hideSidebar: this.sidebar.sidebarSwitch,
            };
        },
    },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/imixin.scss";

.app-wrapper {
    @include clearfix;
    position: relative;
    width: 100%;
    height: 100%;
}

.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
}

.hideSidebar .fixed-header {
    width: calc(100% - 54px)
}
</style>
