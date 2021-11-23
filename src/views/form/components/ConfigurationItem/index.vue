<template>
  <div class="config-item">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="数据结构">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="配置项" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="代码生成">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: "configItem",
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style lang="scss" scoped>
.config-item{
    padding: 10px;
}
</style>