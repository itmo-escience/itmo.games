<template>
    <div class="wrapper"  :style="{ backgroundImage: 'url(' + require('~/assets/bg/teachers-bg.png?webp') + ')' }">
        <div class="container mx-auto px-4 flex">
            <article class="teachers">
                <h1>Преподаватели</h1>
                <!-- swiper -->
                <no-ssr>
                    <div class="teachers-slider">
                        <swiper :options="swiperOptions" ref="teachersSwiper">
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/karsakov.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Андрей Карсаков</div>
                                        <p>Руководитель магистерской программы</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/zagarskih.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Александр Загарских</div>
                                        <p>к.т.н., преподаватель курса Компьютерная графика реального времени</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/horoshavin.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Александр Хорошавин</div>
                                        <p>Куратор программы, преподаватель курса "Основы разработки компьютерных игр", инди-разработчик</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/gimel.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Сергей Гимельрейх</div>
                                        <p>Гейм-дизайнер, сооснователь проекта Манжеты ГД, основатель творческого пространства Индикатор</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/aleksandrov.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Эдуард Александров</div>
                                        <p>преподаватель, игровой и энтерпрайз-разработчик с 15 летним стажем</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/myasishev.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Александр Мясищев</div>
                                        <p>Исполнительный директор Nival</p>
                                    </div>
                                </div>
                            </swiper-slide>
                            <swiper-slide>
                                <div class="teacher">
                                    <div class="photo">
                                        <img :src="require('~/assets/photos/ivanov.png?webp')" alt="">
                                    </div>
                                    <div class="info">
                                        <div class="name">Сергей Иванов</div>
                                        <p>к.т.н., преподаватель курса Имитационное моделирование</p>
                                    </div>
                                </div>
                            </swiper-slide>
                        </swiper>
                        <div class="arrow-wrapper">
                            <div class="arrow arrow-left1"></div>
                            <div class="arrow arrow-right1"></div>
                        </div>
                    </div>
                </no-ssr>
            </article>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    navigation: {
                        nextEl: '.arrow-right1',
                        prevEl: '.arrow-left1',
                    },
                    loop: true,
                }
            }
        },
    }
</script>

<style scoped lang="scss">
    .wrapper {
        // background-image: url("/teachers-bg.png");
        background-repeat: no-repeat;
        background-position-y: -300px;
    }

    .teachers {
        width: 100%;
        margin-top: 200px;
        padding: 0 80px;

        h1 {
            text-align: center;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
        }
    }

    .teachers-slider {
        position: relative;
        width: 670px;
        margin: 90px auto 0 auto;
    }

    .tr {
        position: absolute;
        bottom: 28px;
        left: 0;
        background: url("/icons/tr.svg");
        background-repeat: no-repeat;
        background-position: 10px 10px;
        z-index: 2;

        transform: rotate(-105deg);
        width: 90px;
        height: 90px;
    }

    .tr-white {
        background: url("/icons/dr2.svg");
    }

    .arrow {
        position: absolute;
        top: 40%;
        background-image: url("/arrow.png");
        width: 57px;
        height: 69px;

        cursor: pointer;
        outline: none;
    }

    .arrow-left1 {
        left: -140px;
        transform: rotate(180deg);

        &:hover {
            background-image: url("/arrow-hover.png");
            transform: rotate(0deg);
        }
    }


    .arrow-right1 {
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
        position: relative;
        border: 2px dotted white;
        border-radius: 50%;
        padding: 16px;

        img {
            display: block;
        }
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

        padding: 10px 10px 8px 10px;
        margin-bottom: 20px;
        background-color: white;
        color: #171328;

        font-family: MullerBold, sans-serif;
        font-size: 20px;
    }

    @media (max-width: 512px) {
        .teachers {
            margin-top: 80px;
            padding: 0;
        }


        .teachers-slider {
            position: relative;
            width: 100%;
            margin: 72px 0 72px 0;
        }

        .arrow-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 0 128px;
        }

        .arrow {
            position: static;
        }

        .teacher {
            flex-direction: column;
            justify-content: center;
        }

        .photo {
            margin-bottom: 64px;
        }

        .info {
            width: 266px;
            text-align: center;
        }
        .tr {
            bottom: 30px;
            left: -10px;
        }
        .tr-white {
            bottom: 30px;
            left: -10px;
        }
    }
</style>