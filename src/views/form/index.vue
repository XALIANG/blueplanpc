<template>
  <div id="form-container">
    <a-layout theme="light">
      <a-layout-sider theme="light">
        <div class="left_mode">
          <!-- 左侧组件类型面板 -->
          <Draggable v-model="formModel.formList" chosenClass="chosen" forceFallback="true" :options="{ group: { name: 'site', pull: 'clone', put: false }, sort: false }" animation="1000" @add="addCommand" :move="moveCommand" @start="onStart" @end="onEnd">
            <div class="dr-model-item" v-for="(item, i) in formModel.formList" :key="i">{{ item.name }}</div>
          </Draggable>
        </div>
      </a-layout-sider>
      <!-- 中间视图面板 -->
      <a-layout-content class="dr-viewer">
        <div class="content">
          <a-form-model :label-col="{ span: 2 }" :wrapper-col="{ span: 14 }">
            <!-- 数据模型 -->
            <Container :selector.sync="selector" root :list="list" :map="viewer" style="height: calc(100% - 5px);" />
            <!-- 样式布局 -->
          </a-form-model>
        </div>
      </a-layout-content>
      <!-- 右侧配置项 -->
      <a-layout-sider width="300" theme="light">
        <ConfigItem :list="list" @onHandCodeTenplate="openPreviewBox" @onHandViewComponent="openPreview" :selector.sync="selector" />
      </a-layout-sider>
      <!-- 预览代码 -->
      <Previewbox :showType="type" ref="Previewbox" :title="'代码展示'" />
      <!-- 预览组件 -->
      <a-modal width="1000px" id="preview_dialog" class="preview_dialog" title="预览展示" :visible="previewVisible">
        <div id="preview"></div>
        <div slot="footer" class="dialog-footer">
          <a-button size="small" @click="previewVisible = false">关闭</a-button>
          <a-button size="small" type="primary" @click="metadata">获取数据</a-button>
        </div>
      </a-modal>
    </a-layout>
  </div>
</template>

<script>
import Vue from 'vue';
import Draggable from 'vuedraggable';
import { Previewbox } from '../../components/index';
import Container from './components/container/index';
import FormConmponents from './components/config';
import ConfigItem from './components/ConfigurationItem/index';
import table from './table';
export default {
  name: 'form',
  components: {
    Draggable,
    Container,
    ConfigItem,
    Previewbox
  },
  data() {
    return {
      formModel: '',
      selector: undefined,
      previewVisible: false,
      list: [],
      viewer: table.viewer,
      type: '',
      html: ''
    };
  },
  filters: {
    unescape: function(html) {
      return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'");
    }
  },
  watch: {
    selector(val) {
      console.log('val', val);
    }
  },
  created() {
    this.formModel = new FormConmponents(table.button, table.build);
  },
  methods: {
    openPreviewBox(template) {
      this.type = 'view_code';
      this.$refs.Previewbox.openSetPreview(template);
    },
    openPreview(res) {
      return;
      this.previewVisible = true;
      const { template: templateJson } = res;
      const self = this;
      Vue.nextTick(function() {
        const body = document.querySelector('.ant-modal-body');
        const children = body.querySelector('#preview');
        if (!children) {
          children.innerHTML = templateJson;
        }
        const _Vue_ = Vue.extend(self.formModel.build(res));
        new _Vue_().$mount('.ant-modal-body');
      });
    },
    addCommand(e) {
      console.log('拖拽e哦', e);
    },
    moveCommand(e) {
      console.log(e);
    },
    //开始拖拽事件
    onStart(e) {
      console.log(e, '开始拖拽');
    },
    //拖拽结束事件
    onEnd(e) {
      console.log(e, '结束拖拽');
    },
    //获取数据
    metadata() {}
  }
};
</script>

<style lang="scss" scoped>
#form-container {
  height: 100%;
  font-size: 12px;

  .content,
  .left_mode {
    height: 750px;
    overflow: auto;
  }
  .dr-model-item {
    width: 90px;
    line-height: 25px;
    text-align: center;
    display: inline-block;
    border: 1px solid grey;
    cursor: move;
    margin: 4px;
  }
}
</style>
