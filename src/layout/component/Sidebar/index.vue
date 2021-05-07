<template>
<div>
    <a-menu mode="inline" theme="light" :selected-keys="currentSelectMenu" :inline-collapsed="isCollapse">
        <template v-for="item in permission_routes">
            <template v-if="!item.hidden && item.children">

                <a-menu-item v-if="hasOneChildren(item.children)" :key="item.redirect">
                    <a-icon class="svg-icon"  :type="item.children[0] &&  item.children[0].meta &&  item.children[0].meta.type" /> <span class="menu-title">
                        <router-link style="display: inline-block" :to="{path:
                    item.path === '/'
                      ? `${item.path}${item.children[0].path}`
                      : `${item.path}/${item.children[0].path}`,
                }">
                            {{ generateTitle(item.children[0].meta.title) }}
                        </router-link>
                    </span>
                </a-menu-item>

                <sub-menu v-else :key="item.path" :menu-info="item" :base-route="item.path" />
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
        generateTitle
    } from "@/utils/getTitle";
   
    import {
        Menu
    } from "ant-design-vue";
    import path from 'path'
    const SubMenu = {
            template: `
    <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
        <span slot="title" >
          <a-icon class="svg-icon" :type="menuInfo.meta && menuInfo.meta.type" />
          <span v-if="menuInfo.meta">{{ menuInfo.meta.title }}</span>
        </span>
    <template v-for="item in menuInfo.children">
          <a-menu-item v-if="!item.children" :key="resovePath(item.path)">
            <router-link style="display: inline-block;" :to="resovePath(item.path)">
             <span> {{ item.meta.title }}</span>
            </router-link>
          </a-menu-item>
        <sub-menu v-else :key="item.path" :menu-info="item"  :base-route="resovePath(item.path)" />
        
</template>

     </a-sub-menu>
    `,
  name: "SubMenu",
  // must add isSubMenu: true
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
     menuInfo: {
      type: Object,
      default: () => ({})
    },
    baseRoute: {
      type: String,
      default: ''
    }
  },
  methods:{
      resovePath(item) {
      return path.resolve(this.baseRoute, item)
    }
  }
};

export default {
  components: {
    "sub-menu": SubMenu,
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
    generateTitle,
    hasOneChildren(item) {
      return !item.some((menu) => menu.children) && item.length === 1;
    },
  },
};
</script>

<style lang="scss" scoped>

.menu-title {
    a {
        display: inline-block;
        color: #595959;

        &:hover {
            color: #2196f3;
        }
    }
}
</style>
