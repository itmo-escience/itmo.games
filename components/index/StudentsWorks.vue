<template>
    <div class="wrapper">
        <div class="container mx-auto px-4 flex">
            <article class="labs">
                <h1>Работы студентов</h1>
                <div class="labs-slider">
                    <swiper class="swiper" :options="swiperOption">
                        <swiper-slide>
                            <div class="lab">
                                <img src="/labs/1.jpg"/>
                                <div class="lab-title">SUPERMASSIVE BLACK HOLE</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="lab">
                                <img src="/labs/2.jpg"/>
                                <div class="lab-title">Alchemica</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="lab">
                                <img src="/labs/3.jpg"/>
                                <div class="lab-title">Greedy Gramps</div>
                            </div>
                        </swiper-slide>
                        <swiper-slide>
                            <div class="lab">
                                <img src="/labs/4.jpg"/>
                                <div class="lab-title">Smart Ass</div>
                            </div>
                        </swiper-slide>
                        <div class="swiper-scrollbar" slot="scrollbar"></div>
                    </swiper>
                </div>
            </article>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 30,
          scrollbar: {
            el: '.swiper-scrollbar',
            hide: false
          }
        }
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