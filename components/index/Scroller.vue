<template>
    <div>
        <div class="view">
            <youtube v-if="video && game.video" :player-width="width" :player-height="height" :video-id="game.video"/>
            <img v-else class="full" :src="`${full}`"/>
            <!-- <img v-else class="full" :src="require(`~/assets${full}?webp`)"/> -->
        </div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-if="game.video">
                <img @click="openVideo" class="small" :src="`${videoUrl}`" :class="{focus: focus === 'video'}"/>
                <!-- <img @click="openVideo" class="small" :src="require(`~/assets${videoUrl}?webp`)" :class="{focus: focus === 'video'}"/> -->
            </swiper-slide>
            <swiper-slide v-for="s in game.screens" :key="s">
                <img :src="`${s}`" class="small" @click="fullScreen(s)" :class="{focus: focus === s}"/>
                <!-- <img :src="require(`~/assets${s}?webp`)" class="small" @click="fullScreen(s)" :class="{focus: focus === s}"/> -->
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default{
    props: ['game', 'mobile'],
    data(){
        return {
            full: null,
            focus: 'video',
            width: null,
            height: null,
            video: true,
            swiperOption: {
                slidesPerView: 5,
                slidesPerView: this.mobile ? 3 : 4,
            }
        }
    },
    methods: {
        fullScreen(url){
            this.focus = url;
            this.video = false;
            this.full = url.slice(0, url.length - 4)+'full.png';
        },
        openVideo(){
            this.focus = 'video';
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

        this.swiperOption.slidesPerView = window.innerWidth > 512 ? 5 : 2;
        this.width = window.innerWidth > 512 ? 720 : 280;
        this.height = window.innerWidth > 512 ? 406 : 172;
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
    .focus{
        border: 3px solid #ED1846;
    }
    @media (max-width: 512px) {
        .view{
            width: 280px !important;
            height: 172px !important;
        }
        img.full{
            width: 280px !important;
            height: 172px !important;
        }
        img.small{
            width: 88px !important;
            height: 54px !important;
        }
    }
</style>