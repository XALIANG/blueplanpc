<template>
  <div class="appMain">
    <div class="bluePlan-container">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppMain",
};
</script>
<style lang="scss" scoped>

.fixed-header + .appMain {
  padding-top: 50px;
}
</style>