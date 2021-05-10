<template>
  <a-config-provider :locale="locale" >
    <div id="app">
    <router-view/>
  </div>
  </a-config-provider>
</template>

<script>
   import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
  export default {
    data() {
      return {
        locale: zhCN,
      };
    },
  };
</script>
<style lang="scss">
#nprogress .bar {
  background: #1890ff !important;
}
</style>
