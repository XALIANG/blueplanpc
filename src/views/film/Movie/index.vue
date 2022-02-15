<template>
  <div class="movie">
    <div class="header m-b-20">
      <div class="auto-picture">
        <!-- 广告轮播 -->
        <div class="thumb-example">
          <!-- swiper1 -->
          <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
            <swiper-slide class="slide-1"> </swiper-slide>
            <swiper-slide class="slide-2"> </swiper-slide>
            <swiper-slide class="slide-3"> </swiper-slide>
            <swiper-slide class="slide-4"> </swiper-slide>
            <swiper-slide class="slide-5"> </swiper-slide>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>
          <!-- swiper2 Thumbs -->
          <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
            <swiper-slide class="slide-1"> </swiper-slide>
            <swiper-slide class="slide-2"> </swiper-slide>
            <swiper-slide class="slide-3"> </swiper-slide>
            <swiper-slide class="slide-4"> </swiper-slide>
            <swiper-slide class="slide-5"> </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <div class="content m-b-20"></div>
    <div class="footer"></div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: 'swiper-example-thumbs-gallery',
  title: 'Thumbs gallery with Two-way control',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptionTop: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 5, // looped slides should be the same
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 'auto',
        touchRatio: 0.2,
        slideToClickedSlide: true
      }
    };
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  }
};
</script>
>
<style lang="scss" scoped>
.movie {
  width: 100%;
  display: flex;
  flex-direction: column;
  .header {
    background: #3494e6; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ec6ead, #3494e6); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #ec6ead, #3494e6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .auto-picture {
    width: 900px;
    height: 500px;
    margin: 20px auto;
  }
}
.thumb-example {
  width: 900px;
  height: 480px;
  background-color: #000;
}

.swiper {
  .swiper-slide {
    background-size: cover;
    background-position: center;

    &.slide-1 {
      background-image: url('https://img1.baidu.com/it/u=2712376730,1298810041&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333');
    }
    &.slide-2 {
      background-image: url('https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fyouimg1.c-ctrip.com%2Ftarget%2F100k0b0000005g9iy1EB5.jpg&refer=http%3A%2F%2Fyouimg1.c-ctrip.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1647497507&t=50f5051ff3781aeffbea466b6000a66d');
    }
    &.slide-3 {
      background-image: url('https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/d0c8a786c9177f3eebd2ea527dcf3bc79e3d568e.jpg');
    }
    &.slide-4 {
      background-image: url('https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/d0c8a786c9177f3eebd2ea527dcf3bc79e3d568e.jpg');
    }
    &.slide-5 {
      background-image: url('https://gss0.baidu.com/70cFfyinKgQFm2e88IuM_a/baike/pic/item/d0c8a786c9177f3eebd2ea527dcf3bc79e3d568e.jpg');
    }
  }

  &.gallery-top {
    height: 80%;
    width: 100%;
  }
  &.gallery-thumbs {
    height: 20%;
    box-sizing: border-box;
    padding: 20px 0;
  }
  &.gallery-thumbs .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.4;
  }
  &.gallery-thumbs .swiper-slide-active {
    opacity: 1;
  }
}

.content {
  height: 500px;
  background: #9cecfb; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0052d4, #65c7f7, #9cecfb); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0052d4, #65c7f7, #9cecfb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.footer {
  height: 500px;
  background: #9cecfb; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0052d4, #65c7f7, #9cecfb); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0052d4, #65c7f7, #9cecfb); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
