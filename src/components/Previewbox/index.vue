<template>
  <div class="preview">
    <a-modal v-if="showType === enums.PERVIEW_CODE_ENUM" width="1000px" :title="title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="closePreview">
      <div style="width: 100%; border: 1px solid gainsboro; overflow: auto; max-height: 400px" v-highlight>
        <pre style="font-size: 12px; margin: 2px"><code class="html" style="font-family: 'Courier New', serif" v-text="template" /></pre>
      </div>
      <template slot="footer">
        <a-button key="copy" ref="copy" @click="copyCode"> 复制 </a-button>
        <a-button key="submit" @cancel="closePreview"> 取消 </a-button>
        <a-button key="export" @click="exportTemplate"> 导出 </a-button>
      </template>
    </a-modal>
    <!-- 预览组件 -->
    <a-modal id="preview_modal" v-if="showType === enums.PREVIEW_CODE_VIEW" width="1000px" :title="title" :visible="visible" :confirm-loading="confirmLoading" @ok="handleOk" @cancel="closePreview">
      <div id="component-view"></div>
    </a-modal>
  </div>
</template>

<script>
import ShowEnum from '@/components/Previewbox/enum';
import ClipboardJS from 'clipboard';
import Vue from 'vue';
import { exportFile } from '../../utils/index';
export default {
  name: 'preview',
  props: {
    title: String,
    showType: String
  },
  data() {
    return {
      content: '默认值',
      visible: false,
      template: '',
      html: '',
      enums: new ShowEnum(),
      confirmLoading: false
    };
  },
  mounted() {},
  created() {},
  destroy() {},
  methods: {
    closePreview() {
      this.visible = !this.visible;
      this.visible = false;
    },
    openSetPreview(params) {
      this.template = params;
      this.visible = true;
    },
    //深拷贝
    copyCode() {
      this.$nextTick(() => {
        const clipboard = new ClipboardJS(this.$refs.copy.$el, {
          text: (trigger) => {
            return this.template;
          }
        });
        clipboard.on('success', (e) => {
          Message.success('复制成功');
        });
        clipboard.on('error', (e) => {
          Message.error('复制失败');
        });
      });
    },
    exportTemplate() {
      exportFile('Changeyourself.vue', this.template);
    },
    obtainComponentTemplate(params) {
      this.visible = true;
      const self = this;
      //ant-modal-body
      Vue.nextTick(function() {
        const children = self.$el.querySelector('#component-view');
        if (!children) {
          self.$el.innerHTML = '<div id="component-view"/>';
        }
        console.log(params);
        // const _Vue_ = Vue.extend(params);
        // new _Vue_().$mount('.ant-modal-body');
      });
    },
    handleOk() {}
  }
};
</script>

<style lang="scss" scoped></style>
