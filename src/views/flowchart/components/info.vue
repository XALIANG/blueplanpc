<template>
  <a-modal @cancel="handleCancel" :footer="false" title="流程数据信息" :visible.sync="dialogVisible" width="70%">
    <a-alert title="使用说明" type="success" description="以下流程信息可以被存储起来，方便下一次流程加载" banner close-text="知道了"> </a-alert>
    <br />
    <!--一个高亮显示的插件-->
    <codemirror :value="flowJsonData" :options="options" class="code"></codemirror>
  </a-modal>
</template>

<script>
import 'codemirror/lib/codemirror.css';
import { codemirror } from 'vue-codemirror';

require('codemirror/mode/javascript/javascript.js');

export default {
  props: {
    data: Object
  },
  data() {
    return {
      dialogVisible: false,
      flowJsonData: {},
      options: {
        mode: { name: 'javascript', json: true },
        lineNumbers: true
      }
    };
  },
  components: {
    codemirror
  },
  methods: {
    init() {
      this.dialogVisible = true;
      this.flowJsonData = JSON.stringify(this.data, null, 4).toString();
    },
    handleCancel() {
      this.dialogVisible = false;
    }
  }
};
</script>
