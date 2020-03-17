<template>
    <div>
        <img v-if="!video" class="full" :src="full"/>
        <youtube v-else :player-width="720" :player-height="406" :video-id="game.video"/>

        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-if="game.video">
                <!--<img @click="openVideo()" class="small"/>-->
            </swiper-slide>
            <swiper-slide v-for="s in game.screens" :key="s">
                <img :src="s" class="small" @click="fullScreen(s)"/>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default{
    props: ['game'],
    data(){
        return {
            full: null,
            video: true,
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
        }
    },
    methods: {
        fullScreen(url){
            this.video = false;
            this.full = url.slice(0, url.length - 4)+'full.png';
        }
    },
    mounted(){
        if(!this.game.video){
            this.fullScreen(this.game.screens[0])
        };
    }
}
</script>
<style scoped lang="scss">
    img.full{
        width: 720px !important;
        height: 406px !important;
        max-width: inherit;
    }
    img.small{
        width: 227px !important;
        height: 140px !important;
        max-width: inherit;
    }
</style>