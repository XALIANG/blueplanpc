<template>
<div>
    <a-menu :selected-keys="currentSelectMenu" :default-open-keys="['sub1']" mode="inline" theme="light" :inline-collapsed="sidebar.sidebarSwidth">
        <!-- 一级菜单 -->
        
            <template v-for="item in permission_routes">
              <template v-if="!item.hidden && item.children">
                <a-menu-item v-if="item.children.length === 1" :key="
              item.path === '/'
                ? `${item.path}${item.children[0].path}`
                : `${item.path}/${item.children[0].path}`
            ">
                    <a-icon class="svg-icon" :type="item.type ? item.type : item.children[0].meta.type" />
                    <router-link style="display: inline-block" :to="{
                path:
                  item.path === '/'
                    ? `${item.path}${item.children[0].path}`
                    : `${item.path}/${item.children[0].path}`,
              }">
                        <span class="title">{{ item.name }}</span>
                    </router-link>
                </a-menu-item>
                <a-sub-menu v-else :key="item.key" v-on="$listeners">
                    <span slot="title">
                        <span v-if="item.meta">{{ item.meta.name }}</span>
                    </span>
                    <!-- 二级菜单 -->
                    <template v-for="childItem in item.children">
                        <a-menu-item v-if="!childItem.children" :key="item.path + '/' + childItem.path">
                            <a-icon :type="childItem.meta && childItem.meta.icon" />
                            <router-link style="display: inline-block" :to="item.path + '/' + childItem.path">
                                {{ childItem.meta.title }}
                            </router-link>
                            <span>{{ childItem.name }}</span>
                        </a-menu-item>
                        <sub-menu v-else :key="childItem.key" :menu-info="item" />
                    </template>
                </a-sub-menu>
            </template>
        </template>
    </a-menu>
</div>
</template>

<script>
import {
    mapGetters
} from "vuex";
import {
    isExternal
} from "@/utils/validate";
export default {
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(["sidebar", "permission_routes"]),
        isCollapse() {
            return this.sidebar.sidebarSwitch;
        },
        item() {
            return this.permission_routes;
        },
        currentSelectMenu() {
            return [this.$route.path];
        },
    },
    methods: {
   
    },
};
</script>

<style lang="scss" scoped>
</style>
