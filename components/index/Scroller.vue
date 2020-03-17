<template>
    <div>
        <div class="view">
            <youtube v-if="video && game.video" :player-width="720" :player-height="406" :video-id="game.video"/>
            <img v-else class="full" :src="full"/>
        </div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-if="game.video">
                <img @click="openVideo" class="small" :src="videoUrl"/>
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
                slidesPerView: 5,
            }
        }
    },
    methods: {
        fullScreen(url){
            this.video = false;
            this.full = url.slice(0, url.length - 4)+'full.png';
        },
        openVideo(){
            this.video = true;
        }
    },
    computed:{
        videoUrl(){
            let s = this.game.screens[0];
            return s.slice(0, s.length - 5)+'video.png'
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
    .view{
        width: 720px !important;
        height: 406px !important;
        margin-bottom: 20px;
    }
    img.full{
        width: 720px !important;
        height: 406px !important;
        max-width: inherit;
    }
    img.small{
        width: 113px !important;
        height: 70px !important;
        max-width: inherit;
    }
</style>