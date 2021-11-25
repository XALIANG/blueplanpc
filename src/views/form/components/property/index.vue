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
          <a-input type="number" class="dr-param_item_col" v-model.number="item.span" />
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

      <!-- ===== 其他配置 ===== -->
      <div v-if="data.type === 'table'">
        <a-divider orientation="left">表格</a-divider>
        <a-form-model-item label="选择列">
          <a-select style="width:200px;" v-model="index" placeholder="size" @change="change(data.column)">
            <a-select-option v-for="(table, index) in data.column" :key="index" :value="index">{{ table.label }}</a-select-option>
          </a-select>
          <a-button @click="reset">清除</a-button>
        </a-form-model-item>

        <div class="table_item_param">
          <a-form-model-item label="固定">
            <a-select :allowClear="true" style="width:200px;" v-model="column.fixed" placeholder="请选择">
              <a-select-option value="left">Left</a-select-option>
              <a-select-option value="right">Right</a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item label="列名">
            <a-input style="width:200px;" v-model="column.label" />
          </a-form-model-item>
          <a-form-model-item label="宽度">
            <a-input style="width:200px;" v-model="column.width" />
          </a-form-model-item>
          <a-form-model-item label="字段名">
            <a-input style="width: 200px" v-model="column.prop" />
            <a-button v-if="index !== ''" type="info" @click="del(data.column)">删除</a-button>
          </a-form-model-item>
        </div>
        <a-form-model-item style="float: right" v-if="index === ''">
          <a-button type="primary" @click="add(data.column)">添加</a-button>
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
  },
  data() {
    return {
      index: '',
      column: {}
    };
  },
  methods: {
    activeChange() {
      this.index = '';
      this.column = {};
    },
    reset() {
      this.index = '';
      this.column = {};
    },
    change(val) {
      if (this.index === '') {
        this.column = {};
      } else {
        this.column = val[this.index];
      }
    },
    del(val) {
      if (this.index !== '') {
        val.splice(this.index, 1);
        this.index = '';
      }
    },
    add(val) {
      console.log(this.column, val[val.length - 1]);
      const data = {
        fixed: this.column.field || '',
        label: this.column.label || '',
        width: this.column.width || '',
        prop: this.column.prop || ''
      };
      val.splice(val.length, 0, data);
      this.column = {};
    }
  }
};
</script>
<style lang="scss" scoped>
.property {
  height: 100%;
}
.table_item_param {
  width: 100%;
  border: 1px solid silver;
  margin-bottom: 5px;
  padding: 10px;
}
</style>
