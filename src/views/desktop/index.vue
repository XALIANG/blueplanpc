<template>
  <div class="desktop">
    <a-row class="title p-25" :gutter="24">
      <a-col>
        <div>
          <h2 style="color: #fff">
            <span>{{ timeFix() }}</span>，YOUNAME，
            <span>{{ welcome() }}</span>
          </h2>
          <p>天气变冷，添加衣物</p>
        </div>
      </a-col>
    </a-row>
    <!-- 状态 -->
    <a-row type="flex" class="desktop-card m-t-30 p-t-40" justify="space-around" :gutter="24">
      <a-col>
        <div class="card">
          <span class="fz-15">在线人数</span>
          <p>{{ 222 }}</p>
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
    <!-- 展示图 -->
    <a-row class="swiper bg m-t-30" :gutter="20">
      <a-col>
        <Swiper :list="photo" />
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
import { mapState } from 'vuex'
import { Swiper } from "@/components/index";
export default {
  components: { Swiper },
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
      photo: [
        { src: require("../../assets/image/src=http___i0.hdslb.com_bfs_article_60103b3542f8f222da436f846935c2c7717c5ee8.jpg&refer=http___i0.hdslb.jpg") },
        { src: require("../../assets/image/src=http___i0.hdslb.com_bfs_article_b771ec465f252bfc51eed7f1925b6a66c9831960.jpg&refer=http___i0.hdslb.jpg") },
        { src: require("../../assets/image/src=http___up.deskcity.org_pic_source_04_48_3d_04483d828da2bf20abca86086d256f84.jpg&refer=http___up.deskcity.jpg") }]
    };
  },
  computed: {
    ...mapState({
      userNum: state => state.user.onLineTotalUser
    })
  }
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
.swiper {
  height: 700px;
}
</style>
