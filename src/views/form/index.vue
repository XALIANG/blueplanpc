<template>
  <div id="form-container">
    <a-layout theme="light">
      <a-layout-sider class="left_mode" theme="light">
        <!-- 左侧组件类型面板 -->
        <Draggable :formModel="formModel.formList" chosenClass="chosen" forceFallback="true" group="people" animation="1000" :move="moveCommand" @start="onStart" @end="onEnd">
          <div class="dr-model-item" v-for="(item, i) in formModel.formList" :key="i">{{ item.name }}</div>
        </Draggable>
      </a-layout-sider>
      <!-- 中间视图面板 -->
      <a-layout-content>
        <Container />
      </a-layout-content>
      <!-- 右侧配置项 -->
      <a-layout-sider theme="light">Sider</a-layout-sider>
    </a-layout>
  </div>
</template>

<script>
import Draggable from 'vuedraggable';
import Container from './components/container/index';
import FormConmponents from './components/config';
export default {
  components: {
    Draggable,
    Container
  },
  data() {
    return {
      formModel: ''
    };
  },
  created() {
    this.formModel = new FormConmponents();
  },
  methods: {
    moveCommand(e) {
      console.log(e);
    },
    //开始拖拽事件
    onStart(e) {
     console.log(e,"开始拖拽")
    },
    //拖拽结束事件
    onEnd(e) {
     console.log(e,"结束拖拽")
    }
  }
};
</script>

<style lang="scss" scoped>
#form-container {
  height: 100%;
  overflow: hidden;
  .left_mode {
    height: 100%;
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
