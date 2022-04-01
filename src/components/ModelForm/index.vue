<template>
  <div id="modelForm">
    <div v-if="type === 'add'"></div>
    <div v-if="type === 'edit'"></div>
    <div v-if="type === 'del'"></div>
    <div v-if="type === 'search'"></div>
  </div>
</template>
<script>
export default {
  // 增 删 改  查 （类型定义）  基础模板 逻辑 (children)  模板 （parent）
  props: {
    type: String
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    insert() {},
    delete() {},
    search() {},
    edit() {}
  }
};
</script>
<style lang="scss"></style>
