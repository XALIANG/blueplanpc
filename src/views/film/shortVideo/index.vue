<template>
  <div class="shortVideo">
    <div class="hand">
      <div class="search">
        <input v-model="searchValue" class="search-input" placeholder="请输入你要搜索的视频" />
        <button @click="search" class="search-button">搜索</button>
      </div>
    </div>
    <!-- 视频区域 -->
    <div class="content m-t-30">
      <div @click="openVideo" class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/30d45282-bd15-6ffc-99fd-be1e9e0ad8ee?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/81655d42-4b36-00a9-af3f-03e82510ead2?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/1f73a159-0c22-a552-522a-5e4b6773ddfd?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/4ee314c3-1744-762c-3593-200a96d67ff6?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/30d45282-bd15-6ffc-99fd-be1e9e0ad8ee?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>

      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>
      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>
      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>
      <div class="video-block">
        <div class="note-info">
          <div class="note-image">
            <img src="https://ci.xiaohongshu.com/76dc3c3c-44e0-6b19-430e-602895e57a48?imageView2/2/w/540/format/jpg" style="width: 220px; height: 293.219px;" alt="" />
          </div>
          <p class="a-text" to="">💰65万买一辆跑车，帅气操控都要该选哪个</p>
        </div>
        <div class="note-text">描述描述</div>
      </div>
    </div>
    <!-- 视频播放器 -->
    <div v-show="flagVideo" class="video-content">
      <div @click="onQuit" class="returns">返回</div>
      <!-- 播放区 -->
      <div class="left-video">
        <video
          width="700"
          controls="true"
          loop
          poster
          preload
          height="860"
          crossorigin="anonymous"
          class="my-videos"
          src="https://v2.kwaicdn.com/upic/2022/02/11/16/BMjAyMjAyMTExNjUxNDdfNzMzNDEyMTFfNjcyNzQxMTUyMzZfMV8z_b_B8a943fae6007e2a4b39b6f3272b47dd9.mp4?pkey=AAVBsSP4xc0BDxiwlf67bh75cVZrwmQgWVGnnldP7oqHVaNfhhcKDXuFDiiojG1mEvs_wyY_MjDvzzFeFv-y_eca9oplOT4q52158PKJ9kGbeFBWDE4kXQ5amsCZzteyDLQ&tag=1-1644816761-xpcwebhome-0-aro0migrds-89bffa8920bea297&clientCacheKey=3xzymidu9ah8g7g_b.mp4&tt=b&di=6e1201a7&bp=14944"
        ></video>
      </div>
      <!-- 评论区 -->
      <div class="right-text"></div>
    </div>
    <div class="footer"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      flagVideo: false,
      searchValue: ''
    };
  },
  methods: {
    search() {
      console.log(this.searchValue);
    },
    openVideo() {
      this.flagVideo = true;
    },
    onQuit() {
      this.flagVideo = false;
      const myVideo = document.querySelector('my-videos');
    }
  }
};
</script>

<style lang="scss" scoped>
.shortVideo {
  .hand {
    width: 100%;
    height: 106px;
    background: #ff416c; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ff4b2b, #ff416c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search {
    width: 45%;
    display: flex;
    color: #fff;
    height: 44px;

    .search-input {
      width: 45%;
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
      cursor: pointer;
      border: none;
      background-color: #6495ed;
      border-top-right-radius: 999px;
      border-bottom-right-radius: 999px;
    }
  }
  .content {
    width: 100%;
    height: 850px;
    padding: 30px 150px 0 255px;
    overflow: auto;
    .video-block {
      position: relative;
      width: 220px;
      height: 403px;
      display: flex;
      float: left;
      margin: 0 20px 20px 0;
      flex-direction: column;
      justify-content: flex-start;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
      border-radius: 8px;
    }
    .note-info {
      .note-image {
        position: relative;
        margin-bottom: 10px;
      }
      .a-text {
        padding: 0;
        margin: 10px 15px;
        color: #000;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }
}
.video-block:hover :after {
  width: 100%;
  height: 100%;
  background-color: rgba(89, 91, 92, 0.2);
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px;
  content: '';
}
.note-text {
  padding: 0 15px 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.video-content {
  width: 100%;
  height: 100%;
  opacity: 0.9;
  position: fixed;
  top: 0;
  z-index: 999;
  background: #000;
  display: flex;
  overflow: hidden;
  .left-video {
    width: 300px;
    margin-left: 500px;
    flex: 1;
  }
}
.video-content .returns {
  position: absolute;
  width: 40px;
  height: 40px;
  top: 30px;
  left: 30px;
  border-radius: 100%;
  cursor: pointer;
  background: red;
  opacity: 0.7;
  text-align: center;
  line-height: 40px;
  content: '返回';
}
</style>
