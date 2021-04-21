<template>
  <div class="navbar-container">
    <hamburger :is-active="sidebar.sidebarSwitch" @isActive="cllapsed" />
  </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import { mapGetters } from "vuex";
export default {
  components: {
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    cllapsed() {
        this.$store.dispatch('app/toggleSideBar');
    },
  },
};
</script>

<style  lang="scss" scoped>
.navbar-container {
  width: 100%;
  height: 54px;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
