<template>
<div class="app-wrapper">
    <sidebar class="sideber-container" />
    <div class="blueplan-container">
        <navbar></navbar>
    <!-- <yagsview></yagsview> -->
    </div>
    <app-main />
</div>
</template>

<script>
import AppMain from "@/layout/component/AppMain";
import Sidebar from '@/layout/component/Sidebar';
import Navbar from '@/layout/component/Navbar';
// import Tagsview from '@/layout/component/Tagsview'
export default {
    components: {
        AppMain,
        Sidebar,
        Navbar
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
</style>
