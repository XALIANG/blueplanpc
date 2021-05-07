<template>
<div class="appMain">
    <div class="bluePlan-container">
        <transition name="fade-transform" mode="out-in" >
            <router-view />
        </transition>
    </div>
</div>
</template>

<script>
export default {
    name: "AppMain",
};
</script>

<style lang="scss" scoped>

.appMain {
  /* 50= navbar  50  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
}
.fixed-header+.appMain {
    padding-top: 50px;
}
.hasTagsView {
  .appMain {
    /* 84 = navbar + tags-view = 50 + 34 */
    min-height: calc(100vh - 84px);
  }

  .fixed-header+.appMain {
    padding-top: 84px;
  }
}
</style>
