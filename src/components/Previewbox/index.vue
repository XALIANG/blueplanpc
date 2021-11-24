<template>
  <div class="preview">
    <a-modal width="1000px" :title="title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="closePreview">
      <div style="width: 100%; border: 1px solid gainsboro; overflow: auto; max-height: 400px" v-highlight>
        <pre style="font-size: 12px; margin: 2px"><code class="html" style="font-family: 'Courier New', serif" v-text="template" /></pre>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: 'preview',
  props: {
    title: String
  },
  data() {
    return {
      content: '默认值',
      visible: false,
      template: '',
      confirmLoading: false
    };
  },
  methods: {
    closePreview() {
      this.visible = !this.visible;
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    openSetPreview(params) {
      this.template = params;
      this.visible = !this.visible;
    },
    handleOk() {}
  }
};
</script>

<style lang="scss" scoped></style>
