<template>
    <div class="wrapper">
        <div class="container mx-auto px-4 flex">
            <article class="partners">
                <no-ssr>
                    <div class="partners-slider">
                        <swiper :options="swiperOptions" ref="teachersSwiper">

                            <!--<swiper-slide>
                                <div class="block">
                                    <img src="partners/unigine_logo_black.png">
                                </div>
                            </swiper-slide>-->
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/AcademicParnter.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/wargaming.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/nival.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/bytex.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/trace.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/banana.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/indikator_full.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/tau_tracker.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/cerevrum.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/antilatency.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/modum_lab.png?webp')">
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="block">
                                    <img :src="require('~/assets/partners/logo_sperasoft.png?webp')">
                                </div>
                            </swiper-slide>
                        </swiper>
                    </div>
                </no-ssr>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['mobile'],
        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.arrow-right',
                        prevEl: '.arrow-left',
                    },
                    slidesPerView: this.mobile ? 1 : 3,
                    loop: true,
                    autoplay: {
                        delay: 2000,
                        disableOnInteraction: false
                    },
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .partners {
        width: 100%;
        padding: 0 80px;

        h1 {
            text-align: center;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
        }
    }

    .partners-slider {
        position: relative;
        margin: 0 auto;
    }

    .partners-blocks {
        display: flex;

        border-top: 1px solid #5c5a66;
        border-bottom: 1px solid #5c5a66;

        font-family: MullerMedium, 'sans-serif';
    }

    .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 290px;
        height: 180px;

        // padding: 0 50px;

        // border-left: 1px solid #5c5a66;

        // &:first-child {
        //     border-left: none;
        // }
    }

    .arrow {
        position: absolute;
        top: 50px;
        background-image: url("/arrow.png");
        width: 57px;
        height: 69px;

        cursor: pointer;
        outline: none;
    }

    .arrow-left {
        left: -140px;
        transform: rotate(180deg);

        &:hover {
            background-image: url("/arrow-hover.png");
            transform: rotate(0deg);
        }
    }


    .arrow-right {
        right: -140px;

        &:hover {
            background-image: url("/arrow-hover.png");
            transform: rotate(180deg);
        }
    }

    .teacher {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .photo {
        border: 1px dotted white;
        border-radius: 50%;
        padding: 16px;
    }

    .info {
        width: 272px;
        p {
            font-family: "Open Sans", sans-serif;
            font-size: 14px;
            line-height: 30px;
        }
    }

    .name {
        display: inline-block;

        padding: 12px;
        margin-bottom: 20px;
        background-color: white;
        color: #171328;

        font-family: MullerBold, sans-serif;
        font-size: 20px;
    }
    @media (max-width: 512px) {
        .block{
            width: auto;
            padding: 0 2px;
        }
    }

</style>