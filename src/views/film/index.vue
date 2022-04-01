<template>
  <div id="film">
    <div class="video-bg">
      <video
        muted="muted"
        loop="loop"
        src="https://v1.kwaicdn.com/upic/2022/03/21/03/BMjAyMjAzMjEwMzQxMjVfMjg0OTA1MDY2XzcwMTE2Mzg2MDgzXzBfMw==_b_B921a7e24c5f8f46eb6f48a2c8e88ac55.mp4?pkey=AAUGYM0uPJ8glJgfxGfEtR055GILVD2FxO9TISNeYybWj9HeOA7l_8Fsc4DEBydEbLk9qr-0BMIr98CEZ3Et-nToAF2wNpy5d-aAOTuYDEE0LTPVT4oyKNz0EGzglV8RUC4&tag=1-1648721259-xpcwebbrilliant-0-alnebb17el-8bb5f5a8afa3a72c&clientCacheKey=3x23t384xaeirtm_b.mp4&tt=b&di=dddad306&bp=14944"
        preload="auto"
        class="my-video"
      ></video>
    </div>
    <!-- 导航 -->
    <div class="blue-nav flex p-20">
      <div class="logo fz-30">资源网</div>
      <ul class="nav fz-19">
        <li @click="onLink(i)" v-for="(item, i) in fontList" :key="i" :class="{ active: fontIndex === i }">
          <router-link style="color:#fff" :to="item.a">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
    <!-- 中间区域 -->
    <div v-show="fontIndex === 0" class="content">
      <div class="search">
        <input class="search-input" placeholder="请输入你要搜索的内容" />
        <button class="search-button">搜索</button>
      </div>
    </div>
    <!--  -->
    <div class="footer">
      <div class="font">
        <p>用户协议</p>
        <p>隐私政策</p>
        <p>侵权投诉指引</p>
        <p>社区规范</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Iphone',
  computed: {},
  data() {
    return {
      ifMuted: true,
      fontIndex: 0,
      fontList: [
        { title: '搜索', a: '/film' },
        { title: '首页', a: '/film' },
        { title: '电影中心', a: '/Movie' },
        { title: '短视频', a: '/shortVideo' },
        { title: '热点中心', a: '/film' },
        { title: '关于我们', a: '/film' },
        { title: '加入我们', a: '/film' }
      ]
    };
  },
  methods: {
    loadPhoneVideo() {
      const phoneVideo = document.querySelector('.video-bg .my-video');
      phoneVideo.addEventListener('loadeddata', () => {
        if (phoneVideo.readyState >= 2) {
          phoneVideo.play();
        }
      });
    },
    onLink(index) {
      this.fontIndex = index;
    }
  },
  mounted() {
    this.loadPhoneVideo();
  }
};
</script>
<style lang="scss" scoped>
#film {
  position: relative;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .middle {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }
}
.my-video {
  width: 100%;
  overflow: hidden;
}
.logo {
  color: #fff;
}
.video-bg {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.blue-nav {
  width: 100%;
  justify-content: space-between;
  position: absolute;

  .nav {
    display: flex;
    color: #fff;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;
    min-width: 1080px;
    cursor: pointer;
  }
}
.active::after {
  width: 100%;
  height: 3px;
  display: block;
  background: $public-film-background;
  content: '';
}
.content {
  width: 580px;
  position: absolute;
  left: 0;
  right: 0;
  top: 300px;
  bottom: 0;
  margin: auto;
  .search {
    display: flex;
    color: #fff;
    height: 44px;

    .search-input {
      width: 100%;
      height: 100%;
      line-height: 42px;
      text-indent: 10px;
      border-top-left-radius: 999px;
      border-bottom-left-radius: 999px;
      background: hsla(0, 0%, 100%, 0.3);
      border: none;
      color: #fff;
      overflow: visible;
      outline: none;
    }
    input::-webkit-input-placeholder {
      /* WebKit browsers */
      color: #ccc;
    }

    .search-button {
      width: 88px;
      min-width: 88px;
      height: 100%;
      color: #fff;
      background-color: $public-film-background;
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
      border: none;
    }
  }
}
.title {
  position: absolute;
  top: 30px;
  display: flex;
  justify-content: center;

  color: #fff;
}
.footer {
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 0;
  color: #fff;
  .font {
    display: flex;
    width: 40%;
    justify-content: space-around;
  }
}
</style>
