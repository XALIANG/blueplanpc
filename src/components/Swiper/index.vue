<template>
    <div class="swiper-container">
        <swiper
            :autoplay="true"
            :slides-per-view="3"
            :space-between="50"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="(item,i) in list" :key="i">
                <img :src="item.src" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {

    components: {
    },
    props: {
        list: {
            type: Array,
            require: true
        }
    },
    data() {
        return {
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                speed: 800,
                autoplay: {
                    delay: 100,

                    stopOnLastSlide: false,

                    disableOnInteraction: false

                },
            }
        }
    },
    mounted() {
    },
    methods: {
        onSwiper(swiper) {
            console.log(swiper)
        }, onSlideChange() {

        }
    }
}
</script>
<style  lang="scss" scoped>
.swiper-container {
    width: 100%;

    img {
        width: 100%;
        height: 700px;
    }
}
</style>