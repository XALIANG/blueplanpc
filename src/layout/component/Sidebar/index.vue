<template>
<div>
    <a-menu :selected-keys="currentSelectMenu" :default-open-keys="['sub1']" mode="inline" theme="light" :inline-collapsed="sidebar.sidebarSwidth">
        <template v-for="item in permission_routes">
            <template v-if="!item.hidden && item.children">
                <!-- menu -->
                <a-menu-item v-if="hasOneChildren(item.children)" :key="item.redirect">
                    <a-icon :type="item.children[0] && item.children[0].meta && item.children[0].meta.type" />
                    <span class="menu-title">
                        <router-link style="display: inline-block;" :to="{path: item.path === '/' ? `${item.path}${item.children[0].path}` : `${item.path}/${item.children[0].path}`}">
                            {{ item.children[0].meta.title }}
                        </router-link>
                    </span>
                </a-menu-item>
                <!-- submenu -->
                <sub-menu v-else :key="item.path" :menu-info="item" :base-route="item.path" />
                <!-- <a-sub-menu v-else :key="item.key" v-on="$listeners">
                    <span slot="title">
                        <span v-if="item.meta">{{ item.meta.name }}</span>
                    </span>
                    <template v-for="childItem in item.children">
                        <a-menu-item v-if="!childItem.children" :key="item.path + '/' + childItem.path">
                            <a-icon :type="childItem.meta && childItem.meta.type" />
                            <router-link style="display: inline-block" :to="item.path + '/' + childItem.path">
                                {{ childItem.meta.name }}
                            </router-link>
                            <span>{{ childItem.name }}</span>
                        </a-menu-item>
                        <sub-menu v-else :key="childItem.key" :menu-info="item" />
                    </template>
                </a-sub-menu> -->
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
        SubMenu
    } from './subMenu';
    import {
        Menu
    } from 'ant-design-vue'
    import path from 'path'

    // 函数式组件
    const subMenu = {
            template: `
      <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title" class="menu-title">
          <a-icon :type="menuInfo.meta && menuInfo.meta.type" />
          <span v-if="menuInfo.meta">{{ menuInfo.meta.name }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="resovePath(item.path)">
            <router-link style="display: inline-block;" :to="resovePath(item.path)">
              {{ item.meta.name }}
            </router-link>
          </a-menu-item>
          <sub-menu v-else :key="item.path" :menu-info="item"  :base-route="resovePath(item.path)" />
    
</template>

      </a-sub-menu>
    `,
  name: 'SubMenu',
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({})
    },
    baseRoute: {
      type: String,
      default: ''
    }
  },
  methods: {
    resovePath(item) {
      return path.resolve(this.baseRoute, item)
    }
  }
}
export default {
    components: {
        "sub-menu":SubMenu,
    },
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
        hasOneChildren(item) {
            return !item.some((menu) => menu.children) && item.length === 1;
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
