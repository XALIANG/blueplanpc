<template>
  <div v-if="easyFlowVisible" style="height: calc(100vh);">
    <!-- 顶部工具菜单 -->
    <a-row>
      <!--顶部工具菜单-->
      <a-col :span="24">
        <div class="ef-tooltar flex-between">
          <div class="flex" style="width:170px;line-height: 25px;">
            <a type="primary" :underline="false">{{ data.name }}</a>
            <a-button type="text" icon="delete" size="small" @click="deleteElement" :disabled="!this.activeElement.type"></a-button>
            <a-button type="text" icon="download" size="small" @click="downloadData"></a-button>
            <a-button type="text" icon="plus" size="small" @click="zoomAdd"></a-button>
            <a-button type="text" icon="minus" size="small" @click="zoomSub"></a-button>
          </div>
          <div class="flex" style="width:700px;">
            <a-button type="info" icon="file-text" @click="dataInfo" size="small">流程信息</a-button>
            <a-button type="primary" @click="dataReloadA" icon="loading-3-quarters" size="small">切换流程 1</a-button>
            <a-button type="primary" @click="dataReloadB" icon="loading-3-quarters" size="small">切换流程 2</a-button>
            <a-button type="primary" @click="dataReloadC" icon="loading-3-quarters" size="small">切换流程 3</a-button>
            <a-button type="primary" @click="dataReloadD" icon="loading-3-quarters" size="small">自定义样式</a-button>
            <a-button type="primary" @click="dataReloadE" icon="loading-3-quarters" size="small">力导图</a-button>
            <!-- <a-button type="info" icon="document" @click="openHelp" size="small">帮助</a-button> -->
          </div>
        </div>
      </a-col>
    </a-row>
    <!-- 左侧元素列表 -->
    <div style="display: flex;height: calc(100% - 47px);">
      <div style="width: 230px;border-right: 1px solid #dce3e8;">
        <!-- 左侧元素列表 -->
        <NodeMenu @addNode="addNode" ref="nodeMenu"></NodeMenu>
      </div>
      <div id="efContainer" ref="efContainer" class="container" v-flowDrag>
        <template v-for="node in data.nodeList">
          <ViewNode :id="node.id" :key="node.id" :node="node" :activeElement="activeElement" @changeNodeSite="changeNodeSite" @nodeRightMenu="nodeRightMenu" @clickNode="clickNode"> </ViewNode>
        </template>
        <!-- 给画布一个默认的宽度和高度 -->
        <div style="position:absolute;top: 2000px;left: 2000px;">&nbsp;</div>
      </div>
      <!-- 右侧表单 -->
      <div style="width: 300px;border-left: 1px solid #dce3e8;background-color: #FBFBFB">
        <NodeForm ref="nodeForm" @setLineLabel="setLineLabel" @repaintEverything="repaintEverything"></NodeForm>
      </div>
    </div>
    <!-- 流程数据详情 -->
    <NodeInfo v-if="flowInfoVisible" ref="flowInfo" :data="data"></NodeInfo>
    <!-- <flow-help v-if="flowHelpVisible" ref="flowHelp"></flow-help> -->
  </div>
</template>
<script>
import './style/index.css';
import draggable from 'vuedraggable';
import './core/jsplumb';
import { easyFlowMixin } from './core/mixins';
import NodeMenu from './components/nodeMenu'; // 左侧元素列表
import ViewNode from './components/viewNode'; // 视图流程
import NodeInfo from './components/info'; // 流程信息
import NodeForm from './components/nodeForm'; // 右侧配置项
import { getDataA } from './components/processJson/data_A';
import { getDataB } from './components/processJson/data_B';
import { getDataC } from './components/processJson/data_C';
import { getDataD } from './components/processJson/data_D';
import { getDataE } from './components/processJson/data_E';
import lodash from 'lodash'; // 原生操作插件
import { ForceDirected } from './core/force-directed';
import { Modal } from 'ant-design-vue';
// import FlowHelp from '@/components/ef/help'; //帮助

export default {
  name: 'flowchart',
  data() {
    return {
      // jsPlumb 实例
      jsPlumb: null,
      // 控制画布销毁
      easyFlowVisible: true,
      // 控制流程数据显示与隐藏
      flowInfoVisible: false,
      // 是否加载完毕标志位
      loadEasyFlowFinish: false,
      flowHelpVisible: false,
      // 数据
      data: {},
      // 激活的元素、可能是节点、可能是连线
      activeElement: {
        // 可选值 node 、line
        type: undefined,
        // 节点ID
        nodeId: undefined,
        // 连线ID
        sourceId: undefined,
        targetId: undefined
      },
      zoom: 0.5
    };
  },
  // 一些基础配置移动该文件中
  mixins: [easyFlowMixin],
  components: {
    draggable,
    ViewNode,
    NodeMenu,
    NodeInfo,
    NodeForm
    //   FlowHelp
  },
  directives: {
    flowDrag: {
      bind(el, binding, vnode, oldNode) {
        if (!binding) {
          return;
        }
        el.onmousedown = (e) => {
          if (e.button == 2) {
            // 右键不管
            return;
          }
          //  鼠标按下，计算当前原始距离可视区的高度
          let disX = e.clientX;
          let disY = e.clientY;
          el.style.cursor = 'move';

          document.onmousemove = function(e) {
            // 移动时禁止默认事件
            e.preventDefault();
            const left = e.clientX - disX;
            disX = e.clientX;
            el.scrollLeft += -left;

            const top = e.clientY - disY;
            disY = e.clientY;
            el.scrollTop += -top;
          };

          document.onmouseup = function(e) {
            el.style.cursor = 'auto';
            document.onmousemove = null;
            document.onmouseup = null;
          };
        };
      }
    }
  },
  mounted() {
    this.jsPlumb = jsPlumb.getInstance();
    this.$nextTick(() => {
      // 默认加载流程A的数据、在这里可以根据具体的业务返回符合流程数据格式的数据即可
      this.dataReload(getDataA());
    });
  },
  methods: {
    // 返回唯一标识
    getUUID() {
      return Math.random()
        .toString(36)
        .substr(3, 10);
    },
    jsPlumbInit() {
      this.jsPlumb.ready(() => {
        // 导入默认配置
        this.jsPlumb.importDefaults(this.jsplumbSetting);
        // 会使整个jsPlumb立即重绘。
        this.jsPlumb.setSuspendDrawing(false, true);
        // 初始化节点
        this.loadEasyFlow();
        // 单点击了连接线, https://www.cnblogs.com/ysx215/p/7615677.html
        this.jsPlumb.bind('click', (conn, originalEvent) => {
          this.activeElement.type = 'line';
          this.activeElement.sourceId = conn.sourceId;
          this.activeElement.targetId = conn.targetId;
          this.$refs.nodeForm.lineInit({
            from: conn.sourceId,
            to: conn.targetId,
            label: conn.getLabel()
          });
        });
        // 连线
        this.jsPlumb.bind('connection', (evt) => {
          let from = evt.source.id;
          let to = evt.target.id;
          if (this.loadEasyFlowFinish) {
            this.data.lineList.push({ from: from, to: to });
          }
        });

        // 删除连线回调
        this.jsPlumb.bind('connectionDetached', (evt) => {
          this.deleteLine(evt.sourceId, evt.targetId);
        });

        // 改变线的连接节点
        this.jsPlumb.bind('connectionMoved', (evt) => {
          this.changeLine(evt.originalSourceId, evt.originalTargetId);
        });

        // 连线右击
        this.jsPlumb.bind('contextmenu', (evt) => {
          console.log('contextmenu', evt);
        });

        // 连线
        this.jsPlumb.bind('beforeDrop', (evt) => {
          let from = evt.sourceId;
          let to = evt.targetId;
          if (from === to) {
            this.$message.error('节点不支持连接自己');
            return false;
          }
          if (this.hasLine(from, to)) {
            this.$message.error('该关系已存在,不允许重复创建');
            return false;
          }
          if (this.hashOppositeLine(from, to)) {
            this.$message.error('不支持两个节点之间连线回环');
            return false;
          }
          this.$message.success('连接成功');
          return true;
        });

        // beforeDetach
        this.jsPlumb.bind('beforeDetach', (evt) => {
          console.log('beforeDetach', evt);
        });
        this.jsPlumb.setContainer(this.$refs.efContainer);
      });
    },
    // 加载流程图
    loadEasyFlow() {
      // 初始化节点
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i];
        // 设置源点，可以拖出线连接其他节点
        this.jsPlumb.makeSource(node.id, lodash.merge(this.jsplumbSourceOptions, {}));
        // // 设置目标点，其他源点拖出的线可以连接该节点
        this.jsPlumb.makeTarget(node.id, this.jsplumbTargetOptions);
        if (!node.viewOnly) {
          this.jsPlumb.draggable(node.id, {
            containment: 'parent',
            stop: function(el) {
              // 拖拽节点结束后的对调
              console.log('拖拽结束: ', el);
            }
          });
        }
      }
      // 初始化连线
      for (var i = 0; i < this.data.lineList.length; i++) {
        let line = this.data.lineList[i];
        var connParam = {
          source: line.from,
          target: line.to,
          label: line.label ? line.label : '',
          connector: line.connector ? line.connector : '',
          anchors: line.anchors ? line.anchors : undefined,
          paintStyle: line.paintStyle ? line.paintStyle : undefined
        };
        this.jsPlumb.connect(connParam, this.jsplumbConnectOptions);
      }
      this.$nextTick(function() {
        this.loadEasyFlowFinish = true;
      });
    },
    // 设置连线条件
    setLineLabel(from, to, label) {
      var conn = this.jsPlumb.getConnections({
        source: from,
        target: to
      })[0];
      if (!label || label === '') {
        conn.removeClass('flowLabel');
        conn.addClass('emptyFlowLabel');
      } else {
        conn.addClass('flowLabel');
      }
      conn.setLabel({
        label: label
      });
      this.data.lineList.forEach(function(line) {
        if (line.from == from && line.to == to) {
          line.label = label;
        }
      });
    },
    // 删除激活的元素
    deleteElement() {
      if (this.activeElement.type === 'node') {
        this.deleteNode(this.activeElement.nodeId);
      } else if (this.activeElement.type === 'line') {
        Modal.confirm({
          title: '确定要删除线吗 ？',
          cancelButtonText: '取消',
          type: 'warning',
          onOk: () => {
            var conn = this.jsPlumb.getConnections({
              source: this.activeElement.sourceId,
              target: this.activeElement.targetId
            })[0];
            this.jsPlumb.deleteConnection(conn);
          }
        });
      }
    },
    // 删除线
    deleteLine(from, to) {
      this.data.lineList = this.data.lineList.filter(function(line) {
        if (line.from == from && line.to == to) {
          return false;
        }
        return true;
      });
    },
    // 改变连线
    changeLine(oldFrom, oldTo) {
      this.deleteLine(oldFrom, oldTo);
    },
    // 改变节点的位置
    changeNodeSite(data) {
      for (var i = 0; i < this.data.nodeList.length; i++) {
        let node = this.data.nodeList[i];
        if (node.id === data.nodeId) {
          node.left = data.left;
          node.top = data.top;
        }
      }
    },
    /**
     * 拖拽结束后添加新的节点
     * @param evt
     * @param nodeMenu 被添加的节点对象
     * @param mousePosition 鼠标拖拽结束的坐标
     */
    addNode(evt, nodeMenu, mousePosition) {
      var screenX = evt.originalEvent.clientX,
        screenY = evt.originalEvent.clientY;
      let efContainer = this.$refs.efContainer;
      var containerRect = efContainer.getBoundingClientRect();
      var left = screenX,
        top = screenY;
      // 计算是否拖入到容器中
      if (left < containerRect.x || left > containerRect.width + containerRect.x || top < containerRect.y || containerRect.y > containerRect.y + containerRect.height) {
        this.$message.error('请把节点拖入到画布中');
        return;
      }
      left = left - containerRect.x + efContainer.scrollLeft;
      top = top - containerRect.y + efContainer.scrollTop;
      // 居中
      left -= 85;
      top -= 16;
      var nodeId = this.getUUID();
      // 动态生成名字
      var origName = nodeMenu.name;
      var nodeName = origName;
      var index = 1;
      while (index < 10000) {
        var repeat = false;
        for (var i = 0; i < this.data.nodeList.length; i++) {
          let node = this.data.nodeList[i];
          if (node.name === nodeName) {
            nodeName = origName + index;
            repeat = true;
          }
        }
        if (repeat) {
          index++;
          continue;
        }
        break;
      }
      var node = {
        id: nodeId,
        name: nodeName,
        type: nodeMenu.type,
        left: left + 'px',
        top: top + 'px',
        ico: nodeMenu.ico,
        state: 'success'
      };
      /**
       * 这里可以进行业务判断、是否能够添加该节点
       */
      this.data.nodeList.push(node);
      this.$nextTick(function() {
        this.jsPlumb.makeSource(nodeId, this.jsplumbSourceOptions);
        this.jsPlumb.makeTarget(nodeId, this.jsplumbTargetOptions);
        this.jsPlumb.draggable(nodeId, {
          containment: 'parent',
          stop: function(el) {
            // 拖拽节点结束后的对调
            console.log('拖拽结束: ', el);
          }
        });
      });
    },
    /**
     * 删除节点
     * @param nodeId 被删除节点的ID
     */
    deleteNode(nodeId) {
      Modal.confirm({
        title: '确定要删除节点' + nodeId + '?',
        onOk: () => {
          /**
           * 这里需要进行业务判断，是否可以删除
           */
          this.data.nodeList = this.data.nodeList.filter(function(node) {
            if (node.id === nodeId) {
              // 伪删除，将节点隐藏，否则会导致位置错位
              // node.show = false
              return false;
            }
            return true;
          });
          this.$nextTick(function() {
            this.jsPlumb.removeAllEndpoints(nodeId);
          });
        }
      });
      return true;
    },
    clickNode(nodeId) {
      this.activeElement.type = 'node';
      this.activeElement.nodeId = nodeId;
      this.$refs.nodeForm.nodeInit(this.data, nodeId);
    },
    // 是否具有该线
    hasLine(from, to) {
      for (var i = 0; i < this.data.lineList.length; i++) {
        var line = this.data.lineList[i];
        if (line.from === from && line.to === to) {
          return true;
        }
      }
      return false;
    },
    // 是否含有相反的线
    hashOppositeLine(from, to) {
      return this.hasLine(to, from);
    },
    nodeRightMenu(nodeId, evt) {
      this.menu.show = true;
      this.menu.curNodeId = nodeId;
      this.menu.left = evt.x + 'px';
      this.menu.top = evt.y + 'px';
    },
    repaintEverything() {
      this.jsPlumb.repaint();
    },
    // 流程数据信息
    dataInfo() {
      this.flowInfoVisible = true;
      this.$nextTick(function() {
        this.$refs.flowInfo.init();
      });
    },
    // 加载流程图
    dataReload(data) {
      this.easyFlowVisible = false;
      this.data.nodeList = [];
      this.data.lineList = [];
      this.$nextTick(() => {
        data = lodash.cloneDeep(data);
        this.easyFlowVisible = true;
        this.data = data;
        this.$nextTick(() => {
          this.jsPlumb = jsPlumb.getInstance();
          this.$nextTick(() => {
            this.jsPlumbInit();
          });
        });
      });
    },
    // 模拟载入数据dataA
    dataReloadA() {
      this.dataReload(getDataA());
    },
    // 模拟载入数据dataB
    dataReloadB() {
      this.dataReload(getDataB());
    },
    // 模拟载入数据dataC
    dataReloadC() {
      this.dataReload(getDataC());
    },
    // 模拟载入数据dataD
    dataReloadD() {
      this.dataReload(getDataD());
    },
    // 模拟加载数据dataE，自适应创建坐标
    dataReloadE() {
      let dataE = getDataE();
      let tempData = lodash.cloneDeep(dataE);
      let data = ForceDirected(tempData);
      this.dataReload(data);
      //   this.$message({
      //     message: '力导图每次产生的布局是不一样的',
      //     type: 'warning'
      //   });
    },
    zoomAdd() {
      if (this.zoom >= 1) {
        return;
      }
      this.zoom = this.zoom + 0.1;
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      this.jsPlumb.setZoom(this.zoom);
    },
    zoomSub() {
      if (this.zoom <= 0) {
        return;
      }
      this.zoom = this.zoom - 0.1;
      this.$refs.efContainer.style.transform = `scale(${this.zoom})`;
      this.jsPlumb.setZoom(this.zoom);
    },
    // 下载数据
    downloadData() {
      Modal.confirm({
        title: '确定要下载该流程数据吗？',
        type: 'warning',
        closeOnClickModal: false,
        onOk: () => {
          var datastr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.data, null, '\t'));
          var downloadAnchorNode = document.createElement('a');
          downloadAnchorNode.setAttribute('href', datastr);
          downloadAnchorNode.setAttribute('download', 'data.json');
          downloadAnchorNode.click();
          downloadAnchorNode.remove();
          Message.success('正在下载中,请稍后...');
        }
      });
    },
    openHelp() {
      this.flowHelpVisible = true;
      this.$nextTick(function() {
        this.$refs.flowHelp.init();
      });
    }
  }
};
</script>
