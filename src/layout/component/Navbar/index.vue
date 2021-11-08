<template>
  <div
    class="navbar-container"
    :style="{ background: color === 'dark' ? '#001529' : '#fff' }"
  >
    <div class="navbar-right-menu">
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <span class="navbar-head">
            <a-avatar
              :src="userForm.headPortrait ?userForm.headPortrait  :'../../../assets/image/626.png'"
              alt="网络错误"
              shape="square"
              :size="40"
              icon="user"
            />
          </span>
          <!-- <a-icon type="down" /> -->
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <router-link to="/mypage/index">我的主页</router-link>
          </a-menu-item>
          <a-menu-item>
            <a @click="loginOut" href="javascript:;">注销账号</a>
          </a-menu-item>
          <a-menu-item>
            <a @click="showDrawer" href="javascript:;">留言</a>
          </a-menu-item>
          <a-menu-item>
            <a @click="showSetUp" href="javascript:;">设置</a>
          </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
    <a-drawer
      width="500"
      title="Basic Drawer"
      :placement="placement"
      :closable="false"
      :visible="visible"
      @close="onClose"
    >
      <p>哇...</p>
      <p>辛苦啦...</p>
      <p>加油...</p>
    </a-drawer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: {
    color: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      visible: false,
      placement: "right",
      setUp: false,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["sidebarSwitch", "userForm"]),
  },
  mounted () {
    console.log("color",this.color)
  },
  methods: {
    loginOut() {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("userForm");
      this.$router.push("/login");
    },
    cllapsed() {
      this.$store.dispatch("app/toggleSideBar");
    },
    showDrawer() {
      this.visible = true;
    },
    showSetUp() {
      this.setUp = true;
    },
    onClose() {
      this.visible = false;
      this.setUp = false;
    },
    onChange(e) {
      this.placement = e.target.value;
    },
    onchangeSetUpDrak(checked) {
      this.$store.dispatch("app/openDark", checked);
      console.log(checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar-container {
  height: 100%;
  line-height: 54px;
  float: right;
  padding: 5px 15px;
  overflow: hidden;

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
