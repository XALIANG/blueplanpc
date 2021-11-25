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
          <a-form-model :label-col="{ span: 1 }" :wrapper-col="{ span: 14 }">
            <Container :selector.sync="selector" root :list="list" :map="viewer" />
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
      <Previewbox :showType="type" ref="viewComponents" :title="'预览组件'" />
    </a-layout>
  </div>
</template>

<script>
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
      list: [],
      viewer: table.viewer,
      type: ''
    };
  },
  watch: {
    selector(val) {
      console.log('val', val);
     
    }
  },
  created() {
    this.formModel = new FormConmponents(table.button, table.build);
    console.log(this.formModel);
  },
  methods: {
    openPreviewBox(template) {
      this.type = 'view_code';
      this.$refs.Previewbox.openSetPreview(template);
    },
    openPreview(res) {
      this.type = 'view_component';
      this.$refs.viewComponents.obtainComponentTemplate(res);
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
    }
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
