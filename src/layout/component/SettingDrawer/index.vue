<template>
  <div class="setting-drawer">
    <!-- setting icon -->
    <div :class="[visible === true ? 'setting-enter-active' : 'setting-drawer-index-handle']" @click="showDrawer">
      <a-icon type="setting" v-if="!visible" />
      <a-icon type="close" v-else />
    </div>

    <a-Drawer width="300" @close="onClose" :visible="visible" placement="right" title="主题" :after-visible-change="afterVisibleChange">
      <div class="setting-drawer-index-content">
        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">整体风格设置</h3>

          <div class="setting-drawer-index-blockChecbox">
            <a-tooltip>
              <template slot="title"> 暗色菜单风格 </template>
              <div class="setting-drawer-index-item" @click="handleMenuTheme('dark')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="dark" />
                <div class="setting-drawer-index-selectIcon" v-if="navTheme === 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>

            <a-tooltip>
              <template slot="title"> 亮色菜单风格 </template>
              <div class="setting-drawer-index-item" @click="handleMenuTheme('light')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="light" />
                <div class="setting-drawer-index-selectIcon" v-if="navTheme !== 'dark'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
        </div>

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">主题色</h3>

          <div style="height: 20px">
            <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList" :key="index">
              <template slot="title">
                {{ item.key }}
              </template>
              <a-tag :color="item.color" @click="changeColor(item.color)">
                <a-icon type="check" v-if="item.color === primaryColor"></a-icon>
              </a-tag>
            </a-tooltip>
          </div>
        </div>
        <a-divider />

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">导航模式</h3>

          <div class="setting-drawer-index-blockChecbox">
            <a-tooltip>
              <template slot="title"> 侧边栏导航 </template>
              <div class="setting-drawer-index-item" @click="handleLayout('sidemenu')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="sidemenu" />
                <div class="setting-drawer-index-selectIcon" v-if="layoutMode === 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>

            <a-tooltip>
              <template slot="title"> 顶部栏导航 </template>
              <div class="setting-drawer-index-item" @click="handleLayout('topmenu')">
                <img src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="topmenu" />
                <div class="setting-drawer-index-selectIcon" v-if="layoutMode !== 'sidemenu'">
                  <a-icon type="check" />
                </div>
              </div>
            </a-tooltip>
          </div>
          <div :style="{ marginTop: '24px' }">
            <a-list :split="false">
              <a-list-item>
                <a-tooltip slot="actions">
                  <template slot="title">
                    该设定仅 [顶部栏导航] 时有效
                  </template>
                  <a-select size="small" style="width: 80px" :defaultValue="contentWidth" @change="handleContentWidthChange">
                    <a-select-option value="Fixed">固定</a-select-option>
                    <a-select-option value="Fluid" v-if="layoutMode !== 'sidemenu'">流式</a-select-option>
                  </a-select>
                </a-tooltip>
                <a-list-item-meta>
                  <div slot="title">内容区域宽度</div>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :defaultChecked="fixedHeader" @change="handleFixedHeader" />
                <a-list-item-meta>
                  <div slot="title">固定 Header</div>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :disabled="!fixedHeader" :defaultChecked="autoHideHeader" @change="handleFixedHeaderHidden" />
                <a-list-item-meta>
                  <a-tooltip slot="title" placement="left">
                    <template slot="title">固定 Header 时可配置</template>
                    <div :style="{ opacity: !fixedHeader ? '0.5' : '1' }">
                      下滑时隐藏 Header
                    </div>
                  </a-tooltip>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :disabled="layoutMode === 'topmenu'" :defaultChecked="fixSiderbar" @change="handleFixSiderbar" />
                <a-list-item-meta>
                  <div
                    slot="title"
                    :style="{
                      textDecoration: layoutMode === 'topmenu' ? 'line-through' : 'unset'
                    }"
                  >
                    固定侧边菜单
                  </div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </div>
        <a-divider />

        <div :style="{ marginBottom: '24px' }">
          <h3 class="setting-drawer-index-title">其他设置</h3>
          <div>
            <a-list :split="false">
              <a-list-item>
                <a-switch slot="actions" size="small" :defaultChecked="colorWeak" @change="onColorWeak" />
                <a-list-item-meta>
                  <div slot="title">色弱模式</div>
                </a-list-item-meta>
              </a-list-item>
              <a-list-item>
                <a-switch slot="actions" size="small" :defaultChecked="multiTab" @change="onMultiTab" />
                <a-list-item-meta>
                  <div slot="title">多页签模式</div>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </div>
        <a-divider />
      </div>
    </a-Drawer>
  </div>
</template>

<script>
import { DetailList } from '@/components';
import { mixin, mixinDevice } from '@/utils/mixin';
import config from '../../../config/defaultSettings';
import { colorList, updateColorWeak, updateTheme } from './settingConfig';
import SettingItem from './SettingItem';

export default {
  mixins: [mixin, mixinDevice],
  components: {
    DetailList,
    SettingItem
  },
  name: 'SttingDrawer',
  data() {
    return {
      visible: false,
      headerControl: false,
      colorList,
      handle: <div />
    };
  },
  mounted() {
    updateTheme(this.primaryColor);
    if (this.colorWeak !== config.colorWeak) {
      updateColorWeak(this.colorWeak);
    }
  },
  methods: {
    afterVisibleChange(val) {},
    showDrawer() {
      this.visible = !this.visible;
    },
    onClose() {
      this.visible = false;
    },
    onColorWeak(checked) {
      this.$store.dispatch('app/ToggleWeak', checked);
      //重置为暗色
      this.$store.dispatch('app/ToggleTheme', checked ? 'light' : 'dark');
      updateColorWeak(checked);
    },
    onMultiTab(checked) {
      this.$store.dispatch('app/ToggleMultiTab', checked);
    },
    //菜单主题
    handleMenuTheme(theme) {
      this.$store.dispatch('app/ToggleTheme', theme);
    },
    handleLayout(mode) {
      this.$store.dispatch('app/ToggleLayoutMode', mode);
      // 因为顶部菜单不能固定左侧菜单栏，所以强制关闭
      this.handleFixSiderbar(false);
    },
    handleContentWidthChange(type) {
      this.$store.dispatch('app/ToggleContentWidth', type);
    },
    changeColor(color) {
      if (this.primaryColor !== color) {
        this.$store.dispatch('app/ToggleColor', color);
        updateTheme(color);
      }
    },
    handleFixedHeader(fixed) {
      this.$store.dispatch('app/ToggleFixedHeader', fixed);
    },
    handleFixedHeaderHidden(autoHidden) {
      this.$store.dispatch('app/ToggleFixedHeaderHidden', autoHidden);
    },
    handleFixSiderbar(fixed) {
      if (this.layoutMode === 'topmenu') {
        console.log('topmenu');
        this.$store.dispatch('app/toggleSetSidbarHeader', true);
        this.$store.dispatch('app/ToggleFixSiderbar', false);
        return;
      }
      this.$store.dispatch('app/ToggleFixSiderbar', fixed);
      this.$store.dispatch('app/toggleSetSidbarHeader', false);
    }
  }
};
</script>

<style lang="less">
.setting-drawer-index-content {
  .setting-drawer-index-blockChecbox {
    display: flex;

    .setting-drawer-index-item {
      margin-right: 16px;
      position: relative;
      border-radius: 4px;
      cursor: pointer;

      img {
        width: 48px;
      }

      .setting-drawer-index-selectIcon {
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        padding-top: 15px;
        padding-left: 24px;
        height: 100%;
        color: #1890ff;
        font-size: 14px;
        font-weight: 700;
      }
    }
  }

  .setting-drawer-theme-color-colorBlock {
    width: 20px;
    height: 20px;
    border-radius: 2px;
    float: left;
    cursor: pointer;
    margin-right: 8px;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    color: #fff;
    font-weight: 700;

    i {
      font-size: 14px;
    }
  }
}

.setting-enter-active {
  position: absolute;
  top: 240px;
  background: #1890ff;
  width: 48px;
  height: 48px;
  right: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  transition: 0.3s;
  z-index: 1001;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;

  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}

.setting-drawer-index-handle {
  position: absolute;
  top: 240px;
  background: #1890ff;
  width: 48px;
  height: 48px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1001;
  transition: 0.3s;
  text-align: center;
  font-size: 16px;
  border-radius: 4px 0 0 4px;

  i {
    color: rgb(255, 255, 255);
    font-size: 20px;
  }
}
</style>
