<template>
    <!-- <div class="wrapper" :style="{ backgroundImage: 'url(' + require('~/assets/bg/apply-bg.png?webp') + ')' }"> -->
    <div class="wrapper">
        <img src="/bg/apply-bg.png" style="position: absolute; z-index: -1;"/>
        <div class="container mx-auto px-4 flex" @click="closeAll()">
            <article class="apply">
                <div class="padded">
                    <h1>Как поступить?</h1>
                    <h2>Минимальные требования:</h2>
                    <ul class="req">
                        <li>Законченный бакалавриат или специалитет</li>
                        <li>Знание основ программирования</li>
                        <li>Знание английского языка на уровне чтения технической литературы</li>
                        <li>Интерес к играм и тому как они устроены</li>
                    </ul>
                </div>
                <div class="apply-variants">
                    <h3 class="padded">Варианты поступления:</h3>
                    <div class="apply__variant" @click.stop>
                        <div>
                            <div class="exam-name">
                                <div> 
                                    <span class="exam-dates">27, 28 июля, 3,4,10,11 августа</span>
                                    <span>Вступительный экзамен <br></span>
                                </div>
                                <img src="/icons/icon_exam.png" alt="">
                            </div>
                            <p>Классический экзамен, при котором вы готовитесь <br> по профильному предмету</p>
                            <div class="apply-details-buttons">
                                <button v-bind:class="{ disabled: isVarOpen(0) }" @click.stop="openVar(0)">Подробнее</button>
                                <a class="apply-details-buttons__arrow" v-if="isVarOpen(0)" @click="openVar(0)">
                                    <svg enable-background="new 0 0 306 306" height="306" viewBox="0 0 306 306" width="306" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m94.35 0-35.7 35.7 117.3 117.3-117.3 117.3 35.7 35.7 153-153z"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="apply-details" v-if="isVarOpen(0)">
                                <span>Для поступления:</span>
                                <ol>
                                    <li>Зарегистрируйтесь <a target="_blank" href="http://abit.ifmo.ru/ums/system/login/">в личном кабинете</a> и выберите
                                        удобную
                                        дату сдачи экзамена: 8 и 9 июля, 3 и 4 августа
                                    </li>
                                    <li>Подготовьтесь к экзамену по <a target="_blank" href="https://abit.ifmo.ru/file/eduprog/voprosy_11714.pdf">списку
                                        экзаменационных вопросов</a></li>
                                    <li>До экзамена подайте документы лично или отправьте по почте в приемную комиссию Университета ИТМО (197101,
                                        Санкт-Петербург, Кронверкский пр., 49)
                                    </li>
                                    <li>Через 2 дня после экзамена <a target="_blank" href="http://abit.ifmo.ru/ums/system/login/">в личном кабинете</a> узнайте
                                        результаты
                                    </li>
                                    <li>Если вы рекомендованы к зачислению, то до 10 августа подайте подлинники документов лично или отправьте по почте в
                                        приемную комиссию Университета ИТМО.
                                        <br> <a target="_blank" href="https://abit.ifmo.ru/page/91/">Список документов и подробная информация</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="apply__variant" @click.stop>
                        <div>
                            <div class="exam-name">
                                <div>
                                    <span class="exam-dates">C 20 июня по 31 июля</span>
                                    <span>Олимпиада «Я - профессионал» <br></span>
                                </div>
                                <img src="/icons/icon_uni.png" alt="">
                            </div>
                            <p>«Я — профессионал» — это масштабная образовательная олимпиада нового формата для студентов</p>
                            <div class="apply-details-buttons">
                                <button v-bind:class="{ disabled: isVarOpen(1) }" @click.stop="openVar(1)">Подробнее</button>
                                <a class="apply-details-buttons__arrow" v-if="isVarOpen(1)" @click="openVar(1)">
                                    <svg enable-background="new 0 0 306 306" height="306" viewBox="0 0 306 306" width="306" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m94.35 0-35.7 35.7 117.3 117.3-117.3 117.3 35.7 35.7 153-153z"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="apply-details" v-if="isVarOpen(1)">
                                <p>Медалисты и победители по направлениям «Большие данные» и «Программирование и информационные технологии», «Искусственный
                                    интеллект, «Программирование и информационные, технологии», «Программная инженерия», «Математика», «Информационная и
                                    кибербезопасность», «Бизнес-информатика» получают максимальный результат по вступительным испытаниям (100 баллов).</p>
                                <span>Для поступления:</span>
                                <ol>
                                    <li>Зарегистрируйтесь <a target="_blank" href="http://abit.ifmo.ru/ums/system/login/">в личном кабинете</a> и выберите вид
                                        вступительного испытания Медалист / победитель «Я профессионал»
                                    </li>
                                    <li>До 31 июля подайте подлинники документов лично или отправьте по почте в приемную комиссию Университета ИТМО (197101,
                                        Санкт-Петербург, Кронверкский пр., 49)
                                    </li>
                                    <li>1 августа выйдет приказ о зачислении <br> <a target="_blank" href="https://abit.ifmo.ru/page/91/">Список документов и
                                        подробная информация</a>
                                        <br>
                                        Подробнее об олимпиаде<a target="_blank" href="https://yandex.ru/profi/"> на сайте</a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div class="apply__variant" @click.stop>
                        <div>
                            <div class="exam-name">
                                <div>
                                    <span class="exam-dates">с 11 марта по 09 июня</span>
                                    <span>Конкурс портфолио <br></span>
                                </div>
                                <img src="/icons/icon_portfolio.png" alt="">
                            </div>
                            <p>Конкурс портфолио позволяет поступить <br>
                                в магистратуру Университета ИТМО без экзаменов
                            </p>
                            <div class="apply-details-buttons">
                                <button v-bind:class="{ disabled: isVarOpen(2) }" @click.stop="openVar(2)">Подробнее</button>
                                <a class="apply-details-buttons__arrow" v-if="isVarOpen(2)" @click="openVar(2)">
                                    <svg enable-background="new 0 0 306 306" height="306" viewBox="0 0 306 306" width="306" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m94.35 0-35.7 35.7 117.3 117.3-117.3 117.3 35.7 35.7 153-153z"/>
                                    </svg>
                                </a>
                            </div>
                            <div class="apply-details" v-if="isVarOpen(2)">
                                <span>Для поступления:</span>
                                <ol>
                                    <li>Зарегистрируйтесь <a target="_blank" href="http://abit.ifmo.ru/ums/system/login/">в личном кабинете</a>
                                    </li>
                                    <li>Скачайте и заполните <a target="_blank" href="https://abit.ifmo.ru/file/pages/84/Zayavka_portf_2019.doc">форму заявки и
                                        портфолио</a></li>
                                    <li>Сохраните одним PDF-файлом заявку, портфолио и все подтверждающие документы (копии дипломов и иных наград, публикаций,
                                        материалов конференций и др., для поступления требуется не менее одной публикации)
                                    </li>
                                    <li>До 9 июня загрузите все перечисленные документы в <a target="_blank" href="http://abit.ifmo.ru/ums/system/login/">в
                                        личный кабинет</a></li>
                                    <li>20 июня узнайте результаты конкурса</li>
                                    <li>Если вы рекомендованы к зачислению, то до 31 июля пойте подлинники документов лично или отправьте по почте в приемную комиссию Университета ИТМО (197101, Санкт-Петербург, Кронверкский пр., 49).
                                        <br>
                                        <a target="_blank" href="https://abit.ifmo.ru/page/91/">Список документов и подробная информация</a>
                                    </li>
                                </ol>
                                <br>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <div class="numbers">
                <div class="number">
                    <div class="num">2</div>
                    года <br>
                    обучения
                </div>
                <div class="number">
                    <div class="num">25</div>
                    бюджетных <br>
                    мест
                </div>
                <div class="number">
                    <div class="num">10</div>
                    коммерческих <br>
                    мест
                </div>
                <div class="number">
                    <div class="num">253к</div>
                    стоимость <br>
                    обучения в год
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                isOpen: [],
            }
        },
        methods: {
            isVarOpen: function (variant) {
                return this.isOpen.includes(variant);
            },
            openVar: function (variant) {
                if (this.isOpen.includes(variant)) {
                    this.isOpen = [];
                    return true;
                }
                this.isOpen = [];
                this.isOpen.push(variant);
            },
            closeAll: function () {
                console.log('tgtt');
                if (this.isOpen.length > 0) {
                    this.isOpen = [];
                    return true;
                }
            }
        }
    }
</script>


<style scoped lang="scss">
    .wrapper {
        position: relative;
        //background-image: url("/apply-bg.png");
        background-size: cover;
        background-repeat: no-repeat;
        //  background-position-y: -90px;
    }

    .container {
        flex-wrap: wrap;
    }

    .padded {
        padding-left: 102px;
        margin-bottom: 52px !important;
    }

    .apply {
        padding-right: 80px;
        width: 60%;
        margin-left: auto;
        margin-bottom: 120px;
        padding-top: 130px;

        h1 {
            color: #EC0B43;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
        }

        h2 {
            margin-top: 40px;
            margin-bottom: 20px;
            font-family: MullerBold, sans-serif;
            font-size: 20px;
        }

        h3 {
            margin-bottom: 20px;
            font-family: MullerBold, sans-serif;
            font-size: 20px;
        }
    }

    .req {
        padding: 0;
        list-style-type: none;
        font-family: OpenSansRegular, sans-serif;
        font-size: 14px;
        line-height: 20px;
    }

    .apply-variants {
        margin-top: 50px;
        position: relative;
    }

    .apply__variant {
        margin: -50px -50px -50px -18px;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        padding: 50px 50px 50px 18px;

        &:hover {
            background: rgba(0, 0, 0, 0.20);
        }

        .exam-name {
            padding: 0;
            display: flex;

            div {
                padding: 0;
            }

            img {
                display: block;
                margin-left: auto;
            }
        }

        img {
            width: 70px;
            height: 70px;
        }

        span {
            display: block;
            margin-bottom: 16px;
            font-family: 'MullerRegular', 'sans-serif';
            font-size: 20px;
        }

        .exam-dates {
            font-family: 'MullerRegular', 'sans-serif';
            font-size: 14px;
            color: #EC0B43;
            margin-bottom: 8px;
            text-transform: uppercase;
        }

        button {
            height: 32px;
            line-height: 32px;
            padding: 0 24px;
            border: 1px solid white;
            border-radius: 32px;
            font-family: 'MullerRegular', 'sans-serif';
            font-size: 10px;
            color: white;
            outline: none;
            text-transform: uppercase;
        }

        .disabled {
            color: rgba(255, 255, 255, 0.50);
            border: 1px solid rgba(255, 255, 255, 0.50);
        }

        div {
            padding-left: 102px;
            width: 100%;
        }

        p {
            margin-bottom: 16px;
            font-family: OpenSansRegular, sans-serif;
            font-size: 14px;
        }

        a {
            color: rgba(255, 255, 255, 0.502);
            font-family: MullerLight, 'sans-serif';
            font-size: 14px;
        }
    }
    
    p {
        line-height: 24px;
    }
    
    .apply-details {
        padding-left: 0 !important;
        margin-top: 40px;
        line-height: 24px;

        span {
            font-family: 'MullerMedium', 'sans-serif';
            font-size: 12px;
            text-transform: uppercase;
        }

        ol {
            padding-left: 14px;
            font-family: OpenSansRegular, sans-serif;
            font-size: 14px;

            li {
                a {
                    color: #EC0B43;
                }
            }
        }
    }

    .apply-details-buttons {
        padding: 0 !important;
        display: flex;
        align-items: center;
    }

    .apply-details-buttons__arrow {
        display: block;
        margin-left: auto;
        transform: rotate(-90deg);
        cursor: pointer;

        svg {
            width: 16px;
            height: 16px;
            fill: white;
        }
    }

    .numbers {
        position: absolute;
        bottom: -90px;
        width: 1168px;
        display: flex;
        justify-content: space-between;
        background-color: #EC0B43;
        padding: 38px 60px;
        /*margin-top: 42px;*/
    }

    .number {
        text-align: center;
        font-family: OpenSansBold, sans-serif;
        font-size: 20px;
    }

    .num {
        font-family: MullerExtraBold, sans-serif;
        font-size: 50px;
    }

    @media (max-width: 1024px) {
        .numbers{
            width: 1024px;
            left: 0;
        }
    }
    @media (max-width: 512px) {
        .wrapper {
            margin-bottom: 770px;
        }
        .container {
            display: block;
        }
        .apply {
            margin: 0;
            width: auto;
            padding: 0 12px;
            padding-bottom: 32px;
            padding-top: 130px;
        }
        .apply__variant {
            div {
                padding-left: 0;
            }
        }
        .padded {
            padding: 0;
        }

        .numbers {
            width: calc(100% + 12px);
            bottom: -758px;
            left: -12px;

            flex-direction: column;
        }

        .number {
            margin-bottom: 80px;

            &:last-child {
                margin-bottom: 42px;
            }
        }
    }
</style>