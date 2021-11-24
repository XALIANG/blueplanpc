<template>
  <a-layout :class="{ 'dr-container': true, 'dr-empty': root && list.length === 0 }">
    <Draggable v-model="list" tag="div" ghostClass="dr-placeholder" handle=".dr-mover" :list="list" @add="addCommand" group="site" animation="300">
      <template class="t" v-for="(item, index) in list">
        <!-- 栅格布局 -->
        <a-layout v-if="item.type === 'layout'" :key="item.key">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
          >
            <a-row class="row" :gutter="item.gutter" type="flex" style="margin: 2px">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-col v-for="(drg, i) in item.drag" :key="i" :span="drg.span" :order="item.order">
                <!-- <container :map="map" :data="drg.list" /> -->
              </a-col>
            </a-row>
          </div>
        </a-layout>

        <!-- 输入框 -->
        <div v-else-if="item.type === 'input'" :key="item.key" style="margin: 2px">
          <div
            @click.stop="selectCommand(index)"
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth + 'px'" :size="item.size" :label="item.name">
                <a-input :size="item.size" :style="{ width: item.width + 'px' }" :disabled="item.disabled" :placeholder="item.placeholder" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 开关 -->
        <div v-else-if="item.type === 'switch'" :key="(item, key)" style="margin: 2px">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
            class="dr-area"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-switch :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 选择框 -->
        <div v-else-if="item.type === 'select'" :key="item.key" style="margin: 2px">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
            class="dr-area"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-select :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-select-option :disabled="item.disabled" v-for="(item, optionIndex) in item.option" :key="optionIndex" :value="item.value">{{ item.label }}</a-select-option>
                </a-select>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 单选 -->
        <div v-else-if="item.type === 'radio'" :key="item.key" style="margin: 2px">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
            class="dr-area"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-radio-group :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-radio v-for="(item, i) in item.option" :key="i" :disabled="item.disabled" :value="item.value">{{ item.label }}</a-radio>
                </a-radio-group>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 多选 -->
        <div v-else-if="item.type === 'checkbox'" :key="item.key" style="margin: 2px">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
            class="dr-area"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-checkbox-group :style="{ width: item.width }" :disabled="item.disabled" :placeholder="item.placeholder" value>
                  <a-checkbox name="type" v-for="(item, i) in item.option" :key="i" :disabled="item.disabled" :value="item.value">{{ item.label }}</a-checkbox>
                </a-checkbox-group>
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 文本域 -->
        <div v-else-if="item.type === 'textarea'" style="margin: 2px" :key="item.key">
          <div
            :class="{
              'dr-area': true,
              'dr-active': localSelector && localSelector.key === item.key
            }"
            @click.stop="selectCommand(index)"
            class="dr-area"
            style="height: 100%"
          >
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
              <a-form-model-item :label-width="item.labelWidth" :size="item.size" :label="item.name">
                <a-input :placeholder="item.placeholder" :style="{ width: item.width }" type="textarea" />
              </a-form-model-item>
            </div>
          </div>
        </div>

        <!-- 日期 -->
        <div
          :class="{
            'dr-area': true,
            'dr-active': localSelector && localSelector.key === item.key
          }"
          v-else-if="item.type === 'date'"
          :key="index"
          style="margin: 2px"
        >
          <div @click.stop="selectCommand(index)" class="dr-area" style="height: 100%">
            <div style="overflow: auto">
              <a-icon @click.stop="closeCommand(index)" class="delete-icon" type="delete" />
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
import { OUtil } from '../../../../utils/index';
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
    map: {
      // 文字  表格
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      data: [],
      outil: new OUtil(),
      localSelector: this.selector
    };
  },
  created() {
    this.outil = new OUtil((key, source) => {
      // 重新分配key
      if (key === 'key') {
        return `${source.split('_')[0]}_${new Date().getTime()}`;
      }
    });
  },
  watch: {
    selector(val) {
      this.localSelector = val;
    },
    localSelector: {
      handler(val) {
        this.$emit('update:selector', val);
      },
      deep: true
    }
  },
  components: {
    Draggable
  },
  methods: {
    addCommand(e) {
      const newIndex = e.newIndex;
      const local = this.list[newIndex];
      this.$set(this.list, newIndex, { ...local, key: `${local.type}_${new Date().getTime()}` });
      if (e.pullMode === 'clone') {
        this.$set(this.list, newIndex, { ...this.outil.agn(this.list[newIndex]) });
      }
      this.localSelector = this.list[newIndex];
    },
    closeCommand(index) {
      this.list.splice(index, 1);
    },
    selectCommand(index) {
      this.localSelector = this.list[index];
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
