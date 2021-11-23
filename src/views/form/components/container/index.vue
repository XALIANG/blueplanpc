<template>
  <a-layout :class="{ 'dr-container': true, 'dr-empty': root && list.length === 0 }">
    <Draggable v-model="list" tag="div" ghostClass="dr-placeholder" handle=".dr-mover" :list="list" @add="addCommand" group="site" animation="300">
      <template class="t" v-for="(item, index) in list">
        <!-- 栅格布局 -->
        <a-layout v-if="item.type === 'layout'" :key="index">
          <a-row class="row" :gutter="item.gutter" type="flex" style="margin: 2px">
            <a-icon class="delete-icon" type="delete" />
            <a-col v-for="(drg, i) in item.drag" :key="i" :span="drg.span" :order="item.order">
              <container :map="map" :data="drg.list"  />
            </a-col>
          </a-row>
        </a-layout>

        <!-- 输入框 -->
        <div v-if="item.type === 'input'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-input v-model="item.defaultValue" :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 开关 -->
        <div v-if="item.type === 'switch'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-switch v-model="item.defaultValue" :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 选择框 -->
        <div v-if="item.type === 'select'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-select v-model="item.defaultValue" :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-select-option v-for="(item, optionIndex) in item.option" :key="optionIndex" :value="item.value">{{item.label}}</a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 单选 -->
        <div v-if="item.type === 'radio'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-radio-group :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-radio v-for="(item, i) in item.option" :key="i" :disabled="item.disabled" :value="item.value">{{item.label}}</a-radio>
                </a-radio-group>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 多选 -->
        <div v-if="item.type === 'checkbox'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-checkbox-group :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-checkbox name="type" v-for="(item, i) in item.option" :key="i" :disabled="item.disabled" :value="item.value">{{item.label}}</a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 文本域 -->
        <div v-if="item.type === 'textarea'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-input :style="{ width: item.width }" type="textarea" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 日期 -->
        <div v-if="item.type === 'date'" :key="index" style="margin: 2px">
          <div class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-date-picker :style="{ width: item.width }" show-time :disabled="item.disabled" :type="item.dateType" />
              </a-form-model-item>
            </div>
          </div>
        </div>
      </template>
    </Draggable>
  </a-layout>
</template>
<script>
import Draggable from 'vuedraggable';
export default {
  name: 'container',
  props: {
    selector: Object,
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    root: Boolean,
    map: { // 文字  表格
      type: Object,
      default: () => { }
    }
  },
  data() {
    return {
      data: []
    };
  },
  watch: {},
  components: {
    Draggable
  },
  methods: {
    addCommand(e) {
      console.log('fanssssssssssssg', e);

    }
  }
};
</script>

<style lang="scss" scoped>
.dr-container {
  padding: 10px;
  outline: 2px dashed #95a3b7;
  position: relative;
  min-height: 200px;
  > div,
  .t {
    min-width: 100%;
  }
}
.delete-icon {
  position: absolute;
  right: 0;
}

/*空白时显示拖拽提示*/
.dr-empty::before {
  content: '请拖入组件';
  position: absolute;
  top: 50%;
  width: 100%;
  text-align: center;
  font-size: 25px;
  color: #e5e5e5;
  z-index: -1;
}

/*拖拽域*/
.row {
  > .ant-col {
    border: 1px solid #95a3b7;
    min-height: 25px;
    outline: 1px dashed #95a3b7;
  }
}
</style>
