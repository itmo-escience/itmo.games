<template>
    <div>
        <div class="wrapper">
            <div class="container mx-auto px-4 flex">
                <article class="labs">
                    <h1>Работы студентов</h1>
                    <div class="msg">В каждом семестре студенты создают свою игру самостоятельно или в команде. Посмотрите примеры работ от наших студентов</div>
                    <div class="labs-slider">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide  v-for="g in games" :key="g.name">
                            <div class="lab" @click="openGame(g.name)">
                                <img class="slider-img" :src="`${g.img}`"/>
                                <div class="lab-title">{{g.name}}</div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-scrollbar" slot="scrollbar"></div>
                    </swiper>
                    </div>
                </article>
            </div>
        </div>
        <Overlay v-if="overlay" :name="game" :mobile="this.mobile" @back="closeGame"/>
    </div>
</template>

<script>
import Overlay from '~/components/index/Overlay.vue'
  export default {
    props: ['mobile'],
    components: { Overlay },
    data() {
      return {
        overlay: false,
        game: '',
        swiperOption: {
          slidesPerView: this.mobile ? 1 : 4,
        //   spaceBetween: 30,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
          }
        },
        games:[
            {
                name: 'SUPERMASSIVE BLACK HOLE',
                img: '/labs/prew_main_page/SUPERMASSIVE-BLACK-HOLE.png'
            },
            {
                name: 'Alchemica',
                img: '/labs/prew_main_page/Alchemica.png'
            },
            {
                name: 'Greedy Gramps',
                img: '/labs/prew_main_page/Greedy-Gramps.png'
            },
            {
                name: 'Smart Ass',
                img: '/labs/prew_main_page/Smart-Ass.png'
            },
            {
                name: 'Race-Trace',
                img: '/labs/prew_main_page/Race-Trace.png'
            },
            {
                name: 'The Gate',
                img: '/labs/prew_main_page/The-Gate.png'
            },
            {
                name: 'Equilibrium',
                img: '/labs/prew_main_page/Equilibrium.png'
            }
        ]
      }
    },
    methods:{
        openGame(name){
            this.overlay = true;
            this.game = name;
        },
        closeGame(){
            this.overlay = false;
        }
    }
  }
</script>
<style scoped lang="scss">
    .labs {
        width: 100%;
        margin-top: 130px;

        h1 {
            text-align: center;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
        }
    }
    .msg{
        text-align: center;
        margin: 50px 100px 0px 100px;

        font-family: OpenSansRegular, sans-serif;
        font-size: 20px;
        line-height: 30px;
    }
    .lab{
        cursor: pointer;
    }
    .lab:hover > .lab-title{
        color: #C82040;
    }
    .labs-slider {
        position: relative;
        width: 100%;
        margin: 50px auto 0px auto;
    }
    .lab-title{
        margin: 20px 0px 40px 0px;
    }
    .swiper-scrollbar{
        background: #323947;
    }
    .slider-img{
        max-width: inherit;
    }
    @media (max-width: 512px) {
        .msg{
            margin: 50px 25px 0px 25px;
        }
        .lab{
            text-align: center;
        }
    }
</style>