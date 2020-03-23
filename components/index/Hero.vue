<template>
    <div class="hero">
        <div class="videoContainer">
            <video autoplay muted loop class="bg" src="/bg.mp4"></video>
            <div class="gradient" :style="{ background: 'url(' + require('~/assets/bg/bg_gradient.png?webp') + ')' }"></div>
        </div>
        
        <div class="container mx-auto px-4">
            <div class="hero-lead">
                <!--<h1>Магистерская программа</h1>-->
                <h2><span>Магистратура</span> <br>
                <span>«Технологии разработки</span> <br>
                    <span>компьютерных игр»</span>
                </h2>
                <h3>09.04.03 ПРИКЛАДНАЯ ИНФОРМАТИКА</h3>
            </div>
        </div>
        <div class="desc">
            <div>Создание Selfloss</div>
            <a href="https://vk.com/alexgoodwinart" target="_blank">https://vk.com/alexgoodwinart</a>
        </div>
        <div class="hero-blocks-wrapper">
            <div class="container mx-auto px-4">
                <div class="hero-blocks">
                    <div class="hero-block">
                        <div>
                            <img src="icons/1.svg">
                            <p>Проектный подход <br>к обучению</p>
                        </div>
                    </div>
                    <div class="hero-block">
                        <div>
                            <img src="icons/2.svg">
                            <p>Преподаватели-<br>практики</p>
                        </div>
                    </div>
                    <div class="hero-block">
                        <div>
                            <img src="icons/3.svg">
                            <p>Unreal Engine 4 <br> как основная платформа <br>изучения</p>
                        </div>
                    </div>
                    <div class="hero-block">
                        <div>
                            <img src="icons/4.svg">
                            <p>Научные исследования,<br>
                                применимые к компьютерным <br>
                                играм</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container mx-auto px-4 flex justify-center">
            <div class="hero-text">
                <p>Игровая индустрия является одной из самых быстрорастущих и передовых индустрий в сфере цифровых технологий. Сегодня, разработка игр — это
                    уникальная междисциплинарная профессия, которая сочетает в себе техническую и творческую деятельность и не ограничивает специалиста
                    в формате работы — игровая компания, инди–разработка, фриланс — всё это доступно для создателя игр.</p>
                <p>Образовательная программа сфокусирована на изучении самых современных технологий, применяющихся в разработке компьютерных игр, а также
                    покрывает все ключевые теоретические и практические аспекты индустрии —
                    от психологических сторон восприятия игры, до принципов управления командой разработки и выпуска собственной игры.</p>

                <div class="hero-spacer"></div>

                <a class="hero-button" href="https://abit.itmo.ru/program/13309/" target="_blank">подробнее на abit.itmo.ru</a>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
    .videoContainer{
        position: absolute;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    video.bg{
        min-width: 100%;
        min-height: 100%;
        position: relative;
        z-index: -2;
    }
    .gradient{
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
        // background: url('/bg_gradient.png');
    }
    // .bg{
    //     position: absolute;
    //     right: 0;
    //     top: 0;
    //     min-width: 100%; 
    //     min-height: 100%;
    // }
    // video.bg{
    //     z-index: -2;
    // }
    // img.bg{
    //     z-index: -1;
    // }
    .desc{
        position: relative;
        left: 125px;
        bottom: 47px;

        font-size: 20px;

        div {
            margin-bottom: 15px;
        }

        a {
            color: white;
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
        }
    }

    .hero {
        //background-image: url("/index-bg.png");
        background-repeat: no-repeat;
        background-position: top center;
        background-size: contain;
    }

    .hero-lead {
        padding-top: 306px;
        padding-bottom: 264px;
    }

    h1 {
        font-family: 'MullerRegular', 'sans-serif';
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: calc(1em / 1000 * 30 );

        margin-left: 20px;
        margin-bottom: 28px;
    }

    h2 {
        font-family: 'MullerExtraBold', 'sans-serif';
        font-size: 40px;
        text-transform: uppercase;
        line-height: 56px;
        letter-spacing: 0.02em;

        display: inline-block;
    }

    h3{
        font-family: 'MullerRegular', 'sans-serif';
        letter-spacing: 0.05em;
        margin-top: 25px;
        margin-left: 20px;
    }

    h2 span {
        background-color: #EC0B43;
        padding: 18px 18px 10px 18px;
    }

    .hero-blocks-wrapper {
        border-top: 1px solid #5c5a66;
        border-bottom: 1px solid #5c5a66;
    }

    .hero-blocks {
        @apply flex justify-between;

        font-family: MullerMedium, 'sans-serif';
    }

    .hero-block {
        display: flex;
        flex-direction: column;
        padding-top: 30px;

        text-align: center;
        width: 290px;
        height: 180px;

        border-left: 1px solid #5c5a66;
    }

    .hero-blocks :first-child {
        border-left: none;
    }

    .hero-block img {
        height: 55px;
        width: 45px;
    }

    .hero-text {
        width: 828px;

        font-family: OpenSansRegular, sans-serif;
        text-align: center;
        margin-top: 130px;
    }

    .hero-text p {
        margin-bottom: 15px;
        line-height: 26px;
    }

    .hero-spacer {
        width: 1px;
        height: 70px;
        border-left: 1px solid #5c5a66;
        margin: 25px auto 25px auto;
    }

    .hero-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        width: 260px;
        height: 50px;

        color: white;
        background-color: #EC0B43;

        font-family: MullerMedium, 'sans-serif';
        font-size: 14px;
        text-transform: uppercase;

        &:hover {
            background: white;
            color: #EC0B43;
        }
    }

    @media (max-width: 512px) {
        .desc{ left: 30px; }

        .hero {
            background-position: -300px top;
            background-size: auto;
        }

        .hero-lead {
            padding: 180px 0 116px 0;

            h1 {
                font-size: 18px;
            }

            h2 {
                font-size: 22px;
                line-height: 36px;

                span {
                    padding: 8px;
                }
            }
        }
        .hero-blocks-wrapper {
            border: none;
            .container {
                padding: 0;
            }
        }
        .hero-blocks {
            flex-direction: column;
            justify-content: flex-start;
            border: none;
        }

        .hero-block {
            width: 100%;
            border: none;
            border-top: 1px solid #5c5a66;

            &:last-child {
                border-bottom: 1px solid #5c5a66;
            }
        }
    }
</style>