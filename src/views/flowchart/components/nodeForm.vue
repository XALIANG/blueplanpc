<template>
  <div>
    <div class="ef-node-form">
      <div class="ef-node-form-header">
        编辑
      </div>
      <div class="ef-node-form-body">
        <a-form-model :model="node" ref="dataForm" label-width="80px" v-show="type === 'node'">
          <a-form-model-item label="类型">
            <a-input v-model="node.type" :disabled="true"></a-input>
          </a-form-model-item>
          <a-form-model-item label="名称">
            <a-input v-model="node.name"></a-input>
          </a-form-model-item>

          <a-form-model-item label="left坐标">
            <a-input v-model="node.left" :disabled="true"></a-input>
          </a-form-model-item>
          <a-form-model-item label="top坐标">
            <a-input v-model="node.top" :disabled="true"></a-input>
          </a-form-model-item>
          <a-form-model-item label="ico图标">
            <a-input v-model="node.ico"></a-input>
          </a-form-model-item>
          <a-form-model-item label="状态">
            <a-select v-model="node.state" placeholder="请选择">
              <a-select-option v-for="item in stateList" :key="item.state" :value="item.state">{{ item.label }} </a-select-option>
            </a-select>
          </a-form-model-item>
          <a-form-model-item>
            <a-button class="m-r-10" icon="close">重置</a-button>
            <a-button type="primary" icon="check" @click="save">保存</a-button>
          </a-form-model-item>
        </a-form-model>

        <a-form-model :model="line" ref="dataForm" label-width="80px" v-show="type === 'line'">
          <a-form-model-item label="条件">
            <a-input v-model="line.label"></a-input>
          </a-form-model-item>
          <a-form-model-item>
            <a-button class="m-r-10" icon="close">重置</a-button>
            <a-button type="primary" icon="check" @click="saveLine">保存</a-button>
          </a-form-model-item>
        </a-form-model>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from 'lodash';

export default {
  data() {
    return {
      visible: true,
      // node 或 line
      type: 'node',
      node: {},
      line: {},
      data: {},
      stateList: [
        {
          state: 'success',
          label: '成功'
        },
        {
          state: 'warning',
          label: '警告'
        },
        {
          state: 'error',
          label: '错误'
        },
        {
          state: 'running',
          label: '运行中'
        }
      ]
    };
  },
  methods: {
    /**
     * 表单修改，这里可以根据传入的ID进行业务信息获取
     * @param data
     * @param id
     */
    nodeInit(data, id) {
      this.type = 'node';
      this.data = data;
      data.nodeList.filter((node) => {
        if (node.id === id) {
          this.node = cloneDeep(node);
        }
      });
    },
    lineInit(line) {
      this.type = 'line';
      this.line = line;
    },
    // 修改连线
    saveLine() {
      this.$emit('setLineLabel', this.line.from, this.line.to, this.line.label);
    },
    save() {
      this.data.nodeList.filter((node) => {
        if (node.id === this.node.id) {
          node.name = this.node.name;
          node.left = this.node.left;
          node.top = this.node.top;
          node.ico = this.node.ico;
          node.state = this.node.state;
          this.$emit('repaintEverything');
        }
      });
    }
  }
};
</script>

<style>
.el-node-form-tag {
  position: absolute;
  top: 50%;
  margin-left: -15px;
  height: 40px;
  width: 15px;
  background-color: #fbfbfb;
  border: 1px solid rgb(220, 227, 232);
  border-right: none;
  z-index: 0;
}
</style>
