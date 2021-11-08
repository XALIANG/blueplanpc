<template>
  <div class="desktop">
    <a-row class="title p-25" :gutter="24">
      <a-col>
        <div>
          <h1 style="color: #fff">
            <span>{{ timeFix() }}</span
            >，YOUNAME，<span>{{ welcome() }}</span>
          </h1>
          <p>天气变冷，添加衣物</p>
        </div>
      </a-col>
    </a-row>
    <!-- 状态 -->
    <a-row
      type="flex"
      class="desktop-card m-t-30 p-t-40"
      justify="space-around"
      :gutter="24"
    >
      <a-col>
        <div class="card">
          <span class="fz-15">在线人数</span>
          <p>6</p>
          <div class="match"></div>
        </div>
      </a-col>
      <a-col>
        <div class="card">
          <span class="fz-15">消息</span>
          <p>6</p>
          <div class="match"></div>
        </div>
      </a-col>
      <a-col>
        <div class="card">
          <span class="fz-15">总注册人数</span>
          <p>0</p>
          <div class="match"></div>
        </div>
      </a-col>
      <a-col>
        <div class="card">
          <span class="fz-15">在线时间</span>
          <p>24 小时</p>
          <div class="match"></div>
        </div>
      </a-col>
      <a-col>
        <div class="card">
          <span class="fz-15">我的待办</span>
          <p>999 个BUG</p>
        </div>
      </a-col>
    </a-row>

    <!-- 动态列表 -->
    <a-row class="desktop-list m-t-30" :gutter="20">
      <a-col>
        <h3 class="m-t-10 m-l-10">动态</h3>
        <a-divider />
        <a-list item-layout="horizontal" :data-source="data">
          <a-list-item slot="renderItem" slot-scope="item">
            <a-list-item-meta
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            >
              <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
              <a-avatar
                slot="avatar"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </a-list-item-meta>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { welcome, timeFix } from "@/utils/index";
export default {
  data() {
    return {
      welcome,
      timeFix,
      data: [
        {
          title: "Ant Design Title 1",
        },
        {
          title: "Ant Design Title 2",
        },
        {
          title: "Ant Design Title 3",
        },
        {
          title: "Ant Design Title 4",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 133px;
  color: #fff;
  background: #27a6fe;
}
.desktop-card {
  width: 100%;
  height: 133px;
  background: #fff;
  .card {
    position: relative;
    width: 300px;
    height: 80px;
    text-align: center;
    span {
      color: rgba(0, 0, 0, 0.45);
    }
    p {
      font-size: 25px;
      font-weight: 500;
    }
  }
}
.desktop-list {
  width: 100%;
  background: #fff;
}
</style>
