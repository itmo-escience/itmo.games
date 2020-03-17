<template>
    <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="s in game.screens" :key="s">
            <img :src="s" @click="fullScreen(s)"/>
        </swiper-slide>
  </swiper>
</template>
<script>
export default{
    props: ['game'],
    data(){
        return {
            swiperOption: {
                slidesPerView: 4,
                spaceBetween: 10,
            }
        }
    },
    methods: {
        fullScreen(url){
            this.$emit('full', url.slice(0, url.length - 4)+'full.png')
        }
    }
}
</script>