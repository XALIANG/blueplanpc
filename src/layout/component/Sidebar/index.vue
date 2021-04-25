<template>
  <div>
    <a-menu
      :inlineCollapsed="isCollapse"
      :default-selected-keys="['1']"
      mode="inline"
    >
      <a-menu-item>菜单项</a-menu-item>
      <a-sub-menu title="子菜单">
        <a-menu-item>子菜单项</a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
import { Menu } from 'ant-design-vue';
const SubMenu = {
  template: `
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <a-icon type="mail" /><span>{{ menuInfo.title }}</span>
        </span>
        <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="item.key">
            <a-icon type="pie-chart" />
            <span>{{ item.title }}</span>
          </a-menu-item>
          <sub-menu v-else :key="item.key" :menu-info="item" />
        </template>
      </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
import { mapGetters } from "vuex";
export default {
  components: {'sub-menu': SubMenu,},
  
  data() {
    return {
      current: ["mail"],
      openKeys: ["sub1"],
    };
  },
  computed: {
    ...mapGetters(["sidebar", "permission_routes"]),
    isCollapse() {
      return this.sidebar.sidebarSwitch;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
