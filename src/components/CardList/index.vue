<template>
  <div>
    <a-card :title="title">
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">在线资源</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            <a href="/film">有时候，往往不尽人意，却也要尽人如意</a>
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">1个小时前</p>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">京东</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            有时候，往往不尽人意，却也要尽人如意
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">13个小时前</p>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">京东</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            有时候，往往不尽人意，却也要尽人如意
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">13个小时前</p>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">京东</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            有时候，往往不尽人意，却也要尽人如意
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">13个小时前</p>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">京东</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            有时候，往往不尽人意，却也要尽人如意
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">13个小时前</p>
          </div>
        </div>
      </a-card-grid>
      <a-card-grid>
        <div class="probject-item">
          <div class="item-image-title m-b-5">
            <span class="m-r-10 fz-20"><a-icon type="qq" /></span>
            <span class="fz-12">京东</span>
          </div>
          <div class="item-describe fz-14 m-b-20">
            有时候，往往不尽人意，却也要尽人如意
          </div>
          <div class="item-text">
            <p class="fz-12">站长独打</p>
            <p class="fz-12">13个小时前</p>
          </div>
        </div>
      </a-card-grid>
    </a-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "标题",
    },
    cardList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="scss"  scoped>
.probject-item {
  .item-image-title {
    font-weight: 820;
  }
  .item-describe {
    color: $public-text-color;
  }
  .item-text {
    display: flex;
    justify-content: space-between;
    & p:nth-child(2) {
      color: $public-text-color;
    }
  }
}
</style>
