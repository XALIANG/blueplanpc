<template>
  <div class="hamburger">
    <a-icon
      style="font-size: 17px; color: #000"
      :type="isActive ? 'menu-fold' : 'menu-unfold'"
      @click="toggleCollapsed"
    />
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
      this.$emit("isActive", this.isActive);
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
  padding: 15px;
}

.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
