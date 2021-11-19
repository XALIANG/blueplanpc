<template>
  <div class="hamburger">
    <a-icon style="font-size: 17px; color: #000" :type="isActive ? 'menu-fold' : 'menu-unfold'" @click="toggleCollapsed" />
  </div>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    toggleCollapsed() {
      this.$emit("isActive");
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
}

</style>
