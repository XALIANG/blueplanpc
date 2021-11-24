<template>
  <div class="property">
    <a-layout class="a-param_item">
      <!-- ==== 通用模板 ==== -->
      <a-form-model :label-col="{ span: 7 }" :wrapper-col="{ span: 14 }">
        <div>
          <a-divider orientation="left">通用</a-divider>
          <a-form-model-item label="类型">
            <a-input v-model="data.type" disabled />
          </a-form-model-item>
          <a-form-model-item label="ID">
            <a-input v-model="data.key" />
          </a-form-model-item>
          <a-form-model-item label="名称">
            <a-input v-model="data.name" />
          </a-form-model-item>
          <a-form-model-item label="数据键">
            <a-input v-model="data.value" />
          </a-form-model-item>
          <a-form-model-item v-if="Object.keys(data).includes('size')" label="选择尺寸">
            <a-select v-model="data.size" placeholder="size">
              <a-select-option value="default">默认</a-select-option>
              <a-select-option value="large">大</a-select-option>
              <a-select-option value="small">小</a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item v-if="Object.keys(data).includes('placeholder')" label="提示">
            <a-input v-model="data.placeholder" />
          </a-form-model-item>
          <a-form-model-item v-if="Object.keys(data).includes('width')" label="宽度">
            <a-input v-model="data.width" />
          </a-form-model-item>
          <a-form-model-item v-if="Object.keys(data).includes('labelWidth')" label="标签宽度">
            <a-input v-model="data.labelWidth" />
          </a-form-model-item>
          <a-form-model-item v-if="Object.keys(data).includes('disabled')" label="禁用">
            <a-switch v-model="data.disabled" />
          </a-form-model-item>
        </div>
      </a-form-model>

      <!-- === start 布局配置项 === -->
      <div v-if="data.type === 'layout'">
        <a-divider orientation="left">布局</a-divider>
        <a-form-model-item label="间隔">
          <a-input type="number" class="" v-model.number="data.gutter" />
          <a-button type="primary" @click="data.drag.splice(data.drag.length - 1, 0, { span: 8, list: [] })">添加列</a-button>
        </a-form-model-item>
        <a-form-model-item v-for="(item, index) in data.drag" :label="'列' + (index + 1)" :key="index">
          <a-input type="number" class="" v-model.number="item.span" />
          <a-button @click="data.drag.splice(index, 1)">删除</a-button>
        </a-form-model-item>
      </div>

      <!-- === start 组件复数配置项 === -->
      <div v-if="Object.keys(data).includes('option')">
        <a-divider orientation="left">选项</a-divider>
        <a-form-model-item style="border: 1px solid #bcbbbb" v-for="(item, index) in data.option" :label="'选项' + (index + 1)" :key="index">
          <a-input v-model="item.label" class="dr-param_option-key" />
          <a-input v-model="item.value" class="dr-param_option-value" />
          <a-form-model-item style="padding-left: 8px">
            <a-button @click="data.option.splice(index, 1)">删除</a-button>
            <span style="color: #606266;padding: 0 8px 0 20px">禁用</span>
            <a-switch v-model="item.disabled" />
          </a-form-model-item>
        </a-form-model-item>
        <a-form-model-item>
          <a-button type="primary" @click="data.option.splice(data.option.length + 1, 0, { label: '选项' + (data.option.length + 1), value: `${data.option.length + 1}` })">添加元素</a-button>
        </a-form-model-item>
      </div>
    </a-layout>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      validator() {
        return true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.property {
  height: 100%;
}
</style>
