<template>
    <div>
        <div class="wrapper">
            <div class="container mx-auto px-4 flex">
                <article class="labs">
                    <h1>Работы студентов</h1>
                    <div class="labs-slider">
                        <swiper class="swiper" :options="swiperOption">
                            <swiper-slide>
                                <div class="lab" @click="openGame('SUPERMASSIVE BLACK HOLE')">
                                    <img src="/labs/prew_main_page/SUPERMASSIVE-BLACK-HOLE.png"/>
                                    <div class="lab-title">SUPERMASSIVE BLACK HOLE</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('Alchemica')">
                                    <img src="/labs/prew_main_page/Alchemica.gif"/>
                                    <div class="lab-title">Alchemica</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('Greedy Gramps')">
                                    <img src="/labs/prew_main_page/Greedy-Gramps.png"/>
                                    <div class="lab-title">Greedy Gramps</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('Smart Ass')">
                                    <img src="/labs/prew_main_page/Smart-Ass.png"/>
                                    <div class="lab-title">Smart Ass</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('Race-Trace')">
                                    <img src="/labs/prew_main_page/Race-Trace.png"/>
                                    <div class="lab-title">Race Trace</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('The Gate')">
                                    <img src="/labs/prew_main_page/The-Gate.png"/>
                                    <div class="lab-title">The Gate</div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="lab" @click="openGame('Equilibrium')">
                                    <img src="/labs/prew_main_page/Equilibrium.png"/>
                                    <div class="lab-title">Equilibrium</div>
                                </div>
                            </swiper-slide>
                            <div class="swiper-scrollbar" slot="scrollbar"></div>
                        </swiper>
                    </div>
                </article>
            </div>
        </div>
        <Overlay v-if="overlay" :name="game" @back="closeGame"/>
    </div>
</template>

<script>
import Overlay from '~/components/index/Overlay.vue'
  export default {
    components: { Overlay },
    data() {
      return {
        overlay: false,
        game: '',
        swiperOption: {
          slidesPerView: 4,
          spaceBetween: 30,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }
        }
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
        margin-top: 200px;
        padding: 0 80px;

        h1 {
            text-align: center;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
        }
    }
    .lab{
        cursor: pointer;
    }
    .lab:hover > .lab-title{
        color: #C82040;
    }
    .labs-slider {
        position: relative;
        width: 670px;
        margin: 90px auto 160px auto;
    }
    .lab-title{
        margin: 20px 0px 40px 0px;
    }
    .swiper-scrollbar{
        background: #323947;
    }
</style>