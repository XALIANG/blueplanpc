<template>
  <div class="navbar-container" :style="{ background: color === 'dark' ? '#001529' : '#fff' }">
    <div class="navbar-right-menu">
      <a-dropdown :trigger="['click']">
        <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
          <span class="navbar-head">
            <a-badge count="99">
              <a-avatar
                :src="userForm.headPortrait ? userForm.headPortrait : '../../../assets/image/626.png'"
                alt="网络错误"
                shape="square"
                :size="40"
                icon="user"
              />
            </a-badge>
          </span>
          <!-- <a-icon type="down" /> -->
        </a>
        <a-menu slot="overlay">
          <a-menu-item>
            <a href="/mypage/communication">我的消息</a>
          </a-menu-item>
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
    <span class="m-r-30 fz-13 person-num">
      在线人数：
      <a-badge status="success" />
      {{ onlineNum }}
    </span>
    <a-icon class="fz-20 m-r-20" type="search" />
    <a-icon class="fz-20 m-r-20" type="bell" />
    <a-icon class="fz-20 m-r-20" type="fullscreen" />

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
import { mixinUser } from "../../../utils/mixin";
export default {
  mixins: [mixinUser],
  props: {
    color: {
      type: String,
      default: "",
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
    ...mapGetters(["userForm"]),
  },
  mounted() {
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
  .person-num {
    font-weight: 600;
  }
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
