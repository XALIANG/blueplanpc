<template>
  <div class="layout-menu">
    <a-menu :theme="theme" mode="horizontal" :default-selected-keys="['1']" :style="{ lineHeight: '64px' }">
      <a-menu-item v-for="(item, i) in route" :key="i">
        <span v-if="!item.hidden">{{ item.name }}</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  props: {
    route: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      required: true
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.layout-menu {
  width: 100%;
}
</style>
