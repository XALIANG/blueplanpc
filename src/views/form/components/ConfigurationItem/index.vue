<template>
  <div class="config-item">
    <a-tabs class="tabs" default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="数据结构">
        <a-layout>
          <div style="overflow: auto; width: 100%">
            <pre class="fz-13" style="font-family: 'Courier New', serif; padding: 5px">
                  {{ json }}
              </pre
            >
          </div>
        </a-layout>
      </a-tab-pane>
      <a-tab-pane key="2" tab="配置项" force-render>
        <Property v-if="selector" :data.sync="selector" />
      </a-tab-pane>
      <a-tab-pane key="3" tab="代码生成">
        <div class="flex">
          <a-button @click="generator">生成代码</a-button>
          <a-button @click="previewer">预览</a-button>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
import Property from '../property/index';
import formatter from 'vue-beautify';
import FormConmponents from '../config';
import table from '../../table';

export default {
  name: 'configItem',
  components: { Property, formatter },
  props: {
    list: Array,
    selector: Object
  },
  data() {
    return {
      template: undefined,
      modeler: {}
    };
  },
  watch: {
    selector(val) {
      this.$emit('activeChange', val);
    }
  },
  created() {
    this.modeler = new FormConmponents(table.button, table.build);
  },
  computed: {
    json() {
      return JSON.stringify(this.list, null, 2);
    }
  },
  methods: {
    callback(key) {
      console.log(key);
    },
    handleCode() {
      const buildMap = this.modeler.build(this.list);
      console.log(this.modeler);
      const dataStr = JSON.stringify(buildMap.data()).replace(/"([^"]+)":/g, '$1:');
      const code = `<template>${buildMap.template}</template><script>export default { data() { return ${dataStr} }}${'</'}script><style></style>`;
      return formatter(code);
    },
    generator() {
      this.template = this.handleCode();
      this.$emit('onHandCodeTenplate', this.template);
    },
    previewer() {
      this.$emit('onHandViewComponent', this.list);
    }
  }
};
</script>

<style lang="scss" scoped>
.config-item {
  width: 100%;
  padding: 5px;
  height: 750px;
  overflow: auto;
}
</style>
