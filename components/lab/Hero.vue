<template>
    <no-ssr>
        <div class="hero" >
            <div class="container mx-auto px-4">
                <div class="hero-lead">
                    <h1>Let`s make science Visible!</h1>
                    <h2><span>Лаборатория интерактивной</span> <br>
                        <span>Визуализации</span>
                    </h2>
                </div>

                <div class="hero-info">
                    <div class="text">
                        <p>Мы – команда из 11 молодых специалистов, увлеченных интерактивными технологиями, научными исследованиями и разработкой игр.
                            Занимаемся визуализацией данных, AR/VR-технологиями, искусственным интеллектом, цифровыми двойниками и беремся за большие и
                            маленькие проекты. Помогаем коллегам наглядно представить результаты их исследований и учим студентов магистратуры технологиям
                            разработки компьютерных игр.
                        </p>
                        <div class="telega">
                            <svg enable-background="new 0 0 300 300" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                                <path d="m5.299 144.645 69.126 25.8 26.756 86.047c1.712 5.511 8.451 7.548 12.924 3.891l38.532-31.412c4.039-3.291 9.792-3.455 14.013-.391l69.498 50.457c4.785 3.478 11.564.856 12.764-4.926l50.911-244.891c1.31-6.316-4.896-11.585-10.91-9.259l-283.695 109.441c-7.001 2.7-6.94 12.612.081 15.243zm91.57 12.066 135.098-83.207c2.428-1.491 4.926 1.792 2.841 3.726l-111.495 103.64c-3.919 3.648-6.447 8.53-7.163 13.829l-3.798 28.146c-.503 3.758-5.782 4.131-6.819.494l-14.607-51.325c-1.673-5.854.765-12.107 5.943-15.303z"/>
                            </svg>
                            <p>Наши новости и интересные материалы <br> мы публикуем в нашем <a href="https://t.me/ivlsidenotes">telegram-канале</a></p>
                        </div>
                    </div>
                    <div class="video">
                        <img @click="showVideo" src="/video.png" alt="">
                    </div>
                </div>

                <div class="hero-contacts">
                    <div class="about">
                        <h3>хотите сотрудничать с нами <br>
                            или работать в лаборатории?</h3>
                        <div class="info-simple">
                            <p><em>Контактное лицо:</em></p>
                            <p>Карсаков Андрей Сергеевич</p>
                        </div>
                        <div class="info-line"><img src="/icons/mail.png" alt="">
                            <p><a href="mailto:karsakov@corp.ifmo.ru">karsakov@corp.ifmo.ru</a></p>
                        </div>
                    </div>
                    <div class="form">
                        <form ref="form" @submit.prevent="sendMessage()">
                            <input name="subject" v-model="subject" style="display:none">
                            <div>
                                <input type="text" placeholder="Имя" name="name" v-model="name" required>
                                <input type="email" placeholder="E-mail" name="email" v-model="email" required>
                            </div>
                            <div>
                                <input class="fullInput" type="text" placeholder="Комментарий" name="message" v-model="message">
                            </div>
                            <button type="submit">Напишите мне</button>
                        </form>
                    </div>
                </div>
                <div class="popup-wrapper" v-if="showPopup">
                    <div class="hero-popup">
                        <div class="close" @click="showPopup = false">✖</div>
                        <iframe width="720px" height="428px" src="https://www.youtube.com/embed/TGNGhyIZJHE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    </no-ssr>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                name: '',
                email: '',
                message: '',
                subject: '',
                showPopup: false
            }
        },
        methods: {
            sendMessage: function () {

                const params = new URLSearchParams();
                params.append('name', this.name);
                params.append('email', this.email);
                params.append('message', this.message);
                params.append('subject', this.subject);

                let v = this;

                axios.post('http://itmo.games/index2.php', params)
                    .then(function (response) {
                        alert('Спасибо, ваше сообщение отправлено!');
                        v.name    = '';
                        v.email   = '';
                        v.phone   = '';
                        v.message = '';
                    })
                    .catch(function (error) {
                        alert('Произошла ошибка при отправке сообщения. Напишите нам по электронной почте.');
                    });
            },
            showVideo: function () {
                this.showPopup = true;
            },
        },
        mounted: function () {
            this.$nextTick(function () {

                //END
            })
        }
    }
</script>

<style scoped lang="scss">
    .hero {
        position: relative;
        background-image: url("/lab-bg.png");
        background-repeat: no-repeat;
        background-position: center -100px;
        background-size: contain;
        margin-bottom: 170px;
    }

    .hero-lead {
        padding-top: 306px;
        padding-bottom: 80px;
    }

    h1 {
        font-family: 'MullerRegular', 'sans-serif';
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: calc(1em / 1000 * 30);

        margin-left: 20px;
        margin-bottom: 28px;
    }

    h2 {
        font-family: 'MullerExtraBold', 'sans-serif';
        font-size: 40px;
        text-transform: uppercase;
        line-height: 60px;

        display: inline-block;
    }

    h2 span {
        background-color: #EC0B43;
        padding: 16px;
    }

    .hero-info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 180px;

        .text {
            width: 545px;
            font-family: OpenSansRegular, sans-serif;
            font-size: 16px;
            line-height: 30px;
        }

        .video {
            img {
                cursor: pointer;
            }
        }

        .telega {
            margin-top: 32px;
            display: flex;
            font-family: OpenSansRegular, sans-serif;
            font-size: 16px;
            color: rgba(255, 255, 255, 0.80);

            a {
                color: rgba(255, 255, 255, 0.80);
            }

            svg {
                display: block;
                height: 26px;
                width: 20px;
                fill: #EC0B43;

                margin-right: 30px;
            }
        }
    }

    .hero-contacts {
        display: flex;

        .about {
            margin-right: auto;

            h3 {
                margin-bottom: 50px;

                font-family: MullerBold, sans-serif;
                font-size: 25px;
                text-transform: uppercase;
            }

            p {
                color: rgba(255, 255, 255, 0.80);
            }
        }
    }

    .info-line {
        display: flex;

        margin-bottom: 16px;
        height: 18px;
        align-items: center;

        img {
            display: block;
        }

        p {
            padding-left: 28px;
        }

        a {
            color: white;
        }

        &:first-child {
            margin-bottom: 32px;
        }
    }

    .info-simple {
        margin-bottom: 28px;

        p {
            &:first-child {
                margin-bottom: 28px;
            }
        }
    }

    .form {
        width: 508px;

        h1 {
            font-family: MullerBold, sans-serif;
            font-size: 20px;
            text-transform: uppercase;
            margin-bottom: 50px;
        }
    }

    form {
        display: flex;
        flex-wrap: wrap;
        font-size: 14px;

        div {
            width: 100%;
            display: flex;

            margin-bottom: 50px;

            input, select {
                width: 256px;
            }

            .fullInput {
                width: 540px;
                margin-right: 0;
            }

            input {
                margin-right: 28px;

                &:nth-child(2) {
                    margin-right: 0;
                }
            }
        }

        button {
            background-color: #EC0B43;
            color: white;

            padding: 20px 55px;
            text-transform: uppercase;

            font-family: MullerMedium, 'sans-serif';
            font-size: 14px;

            &:hover {
                background: white;
                color: #EC0B43;
            }

        }

        input {
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.30);
            color: white;
        }

        select {
            background: transparent;
            border: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.30);
            color: white;

            option {
                color: white;
                background-color: #171427;
            }
        }

        ::placeholder {
            color: white;
            opacity: 1;
        }
    }

    .popup-wrapper {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

       // background: rgba(0, 0, 0, 0.3);
    }

    .hero-popup {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);

        .close {
            position: absolute;
            right: 0;
            top: -24px;
            cursor: pointer;

            font-size: 18px;
        }
    }

    @media (max-width: 512px) {
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
    }
</style>