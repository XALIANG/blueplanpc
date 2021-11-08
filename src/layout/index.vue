<template>
  <a-layout
    :style="{ background: navTheme === 'dark' ? '#001529' : '#fff' }"
    id="components-layout-demo-custom-trigger"
  >
    <a-layout-sider
      :style="{ display: layoutHeader ? 'none' : 'block' }"
      :class="navTheme === 'dark' ? 'active-layout-sider' : 'layout-sider'"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="logo">{{ collapsed ? "" : logo }}</div>
      <Sidebar class="sidebar-container" />
    </a-layout-sider>
    <a-layout :class="[layoutMode, `content-width-${contentWidth}`]">
      <!-- center header -->
      <a-layout-header
        v-if="layoutHeader"
        :style="{ background: navTheme === 'dark' ? '#001529' : '#fff' }"
        class="header"
      >
        <div class="layout-headerTop">
          <Amenu :route="permission_routes" :theme="navTheme" />
          <Navbar :color="navTheme" />
        </div>

        <Tagsview class="layout-tagsview" v-if="multiTab" />
        <SettingDrawer />
      </a-layout-header>

      <a-layout-header
        v-else
        class="layout-header-navber"
        style="background: #fff; padding: 0"
      >
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
        <Breadcrumb />
        <Navbar />
        <Tagsview class="layout-tagsview" v-if="multiTab" />
        <SettingDrawer />
      </a-layout-header>
      <a-layout-content
        :style="{
          height: '100%',
          margin: '45px 3px',
          padding: '8px',
          minHeight: layoutHeader ? '280px' : '0px',
        }"
      >
        <div class="blueplan-container">
          <App-main />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import { mapGetters } from "vuex";
import Breadcrumb from "@/components/Breadcrumb";
import { mixin, mixinDevice } from "@/utils/mixin";
import AppMain from "@/layout/component/AppMain";
import Sidebar from "@/layout/component/Sidebar";
import Navbar from "@/layout/component/Navbar";
import Tagsview from "@/layout/component/Tagsview";
import SettingDrawer from "@/layout/component/SettingDrawer";
import Amenu from "@/components/tools/Amenu";

export default {
  mixins: [mixin, mixinDevice],
  name: "Layout",
  components: {
    AppMain,
    Sidebar,
    Navbar,
    Amenu,
    Breadcrumb,
    Tagsview,
    SettingDrawer,
  },
  data() {
    return {
      logo: "BLUE LEARN",
      collapsed: false,
    };
  },
  computed: {
    ...mapGetters(["sidebarSwitch", "isDark"]),
    classObj() {
      return {
        hideSidebar: this.sidebarSwitch,
        DarkTheme: this.isDark,
      };
    },
  },
  mounted() {
    console.log(this.fixSiderbar);
  },
  methods: {
    drawerClose() {
      this.collapsed = false;
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
  width: calc(100% - 54px);
}

#components-layout-demo-custom-trigger {
  background-color: #fff;
  overflow: hidden;
}

#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  font-size: 18px;
  text-align: center;
  line-height: 32px;
  font-weight: 800;
}

.layout-sider {
  height: 100%;
  color: rgb(206, 203, 203);
  background: #f7f7f7;
}
.active-layout-sider {
  height: 100%;
  color: rgb(206, 203, 203);
  background: #001529;
}
.layout-headerTop {
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  margin: auto;
}

.ant-menu {
  height: 100%;
}

</style>
