<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
export default {
  data() {
    return {
      locale: zhCN
    };
  },
  mounted() {},
  errorCaptured: (err, vm, info) => {
    console.info('Vue error', err, vm, info);
    return false;
  }
};
</script>
<style lang="scss">
#nprogress .bar {
  background: #1890ff !important;
}
</style>
