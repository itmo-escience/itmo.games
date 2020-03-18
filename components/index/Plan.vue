<template>
    <div class="container mx-auto px-4 flex justify-center">
        <article class="plan">
            <h1>Учебный план</h1>
            <div class="specializations">
                <span class="specializations__text">Специализации:</span>
                <div class="specializations__buttons">
                    <button :class="{ buttonActive: spec === 'gd' }" @click="setSpec('gd')">Геймдизайн</button>
                    <button :class="{ buttonActive: spec === 'gt' }" @click="setSpec('gt')">Внутриигровые технологии</button>
                </div>
            </div>
            <div class="plan-details-wrapper">
                <div class="plan-details" v-if="this.spec === 'gd'">
                    <div class="plan-details__info">
                        <p>Специализация «Проектирование видеоигр» ориентируется на углубленное изучение геймдизайна
                            и различные методы генерации контента.</p>
                        <p>Данная специализация ориентирована на следующие профессии: Game designer, Producer, Project Manager, Level designer.</p>
                    </div>

                    <div class="plan-details__modules">
                        <h3>Профессиональный модуль</h3>
                        <ul class="modules-list">
                            <li>Основы разработки компьютерных игр</li>
                            <li>Инструментальные средства разработки видеоигр</li>
                            <li>Основы дизайна компьютерных игр</li>
                            <li>Архитектура игровых движков и систем VR</li>
                            <li>Имитационное моделирование</li>
                            <li>Анализ и разработка алгоритмов</li>
                            <li class="module-highlighted"><span>Компьютерная графика реального времени</span></li>
                            <li class="module-highlighted"><span>Геймдизайн и проектирование игр</span></li>
                            <li class="module-highlighted"><span>Технологии интеллектуальной генерации контента</span></li>
                        </ul>
                    </div>

                    <a class="plan-link" target="_blank" href="http://edu.ifmo.ru/file/subspec/3346/09.04.03_tehnologii_razrabotki_kompyuternyh_igr.pdf">подробный учебный план
                        . . .</a>
                </div>

                <div class="plan-details" v-else>
                    <div class="plan-details__info">
                        <p>Специализация <br> «Внутриигровые технологии» акцентируется на технологических темах игровой индустрии: низкоуровневому
                            программировании, разработке собственных игровых движков, программированию игрового ИИ.</p>
                        <p>Данная специализация ориентирована на следующие профессии: Gameplay programmer, Programmer, Technical Artist.</p>

                        <div class="partner">
                            <div>Корпоративный партнер</div>
                            <img src="/logo_sperasoft.png"/>
                        </div>
                    </div>

                    <div class="plan-details__modules">
                        <h3>Профессиональный модуль</h3>
                        <ul class="modules-list">
                            <li>Основы разработки компьютерных игр</li>
                            <li>Инструментальные средства разработки видеоигр</li>
                            <li>Основы дизайна компьютерных игр</li>
                            <li>Архитектура игровых движков и систем VR</li>
                            <li>Имитационное моделирование</li>
                            <li>Анализ и разработка алгоритмов</li>
                            <li class="module-highlighted"><span>Компьютерная графика реального времени</span></li>
                            <li class="module-highlighted"><span>Разработка игровых движков</span></li>
                            <li class="module-highlighted"><span>Игровой искусственный интеллект</span></li>
                        </ul>
                    </div>

                    <a class="plan-link" target="_blank" href="http://edu.ifmo.ru/file/subspec/3346/09.04.03_tehnologii_razrabotki_kompyuternyh_igr.pdf">подробный учебный план
                        . . .</a>
                </div>
            </div>
        </article>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                spec: 'gd'
            }
        },
        methods: {
            setSpec: function (spec) {
                this.spec = spec;
            }
        }
    }
</script>

<style scoped lang="scss">
    .plan {
        width: 960px;
        margin-top: 128px;
    }

    h1 {
        text-align: center;
        font-family: 'MullerExtraBold', 'sans-serif';
        font-size: 40px;
    }

    .specializations {
        display: flex;
        align-items: center;

        width: 810px;
        margin: 42px auto 0 auto;
    }

    .specializations__buttons {
        margin-left: 90px;
    }

    .specializations__text {
        font-family: 'MullerExtraBold', 'sans-serif';
        font-size: 20px;
        text-transform: uppercase;
    }

    button {
        height: 42px;
        line-height: 42px;
        padding: 0 24px;

        border: 1px solid white;
        border-radius: 32px;

        font-family: 'MullerRegular', 'sans-serif';
        font-size: 20px;
        color: white;
        outline: none;

        &:first-child {
            margin-right: 38px;
        }

        &:hover {
            background: white;
            color: #EC0B43;
        }
    }

    .buttonActive {
        background-color: #EC0B43;
        border: none;
    }

    .plan-details-wrapper {
        background-color: #0e0a20;
        margin-top: 50px;
    }

    .plan-details {
        width: 810px;
        margin: 0 auto;
        padding: 60px 0 80px 0;

        display: flex;
        flex: 1;
        position: relative;
    }

    .partner{
        left: 0;
        bottom: 35px;
        position: absolute;
        font-family: OpenSansRegular, sans-serif;
        color: rgba(255, 255, 255, .5);
        margin-top: 60px;
        margin-bottom: 10px;

        div{
            margin-bottom: 15px;
        }
    }

    .plan-details__info {
        width: 33.3333%;
        margin-right: 40px;
        margin-bottom: 20px;

        p {
                margin-bottom: 15px;
                font-family: OpenSansRegular, sans-serif;
                font-size: 14px;
                line-height: 26px;
        }
    }

    .plan-details__modules {
        width: 66.6666%;

        h3 {
            padding-left: 32px;
            font-family: MullerMedium, 'sans-serif';
            font-size: 20px;
            background: url("/icons/triangle.png");
            background-repeat: no-repeat;
        }
    }

    .modules-list {
        margin-top: 32px;
        padding-left: 48px;

        li {
            position: relative;
            margin-bottom: 8px;
            padding: 8px 0 8px 30px;

            list-style-type: none;
            text-align: left;

            font-family: OpenSansRegular, sans-serif;
            font-size: 14px;

            &:before {
                content: '';
                width: .5rem;
                height: .5rem;
                border-radius: 50%;
                border: 1px solid #EC0B43;
                position: absolute;
                left: -10px;
                top: 12px;
                color: #EC0B43;
            }

            &:after {
                content: '';
                width: .0625rem;
                height: 32px;
                background: #EC0B43;
                left: -6px;
                position: absolute;
                top: calc(50% + 4px);
            }

            &:last-child {
                &:after {
                    content: none;
                }
            }
        }
    }

    .modules-list > .module-highlighted {
        background-color: #EC0B43;
        display: inline-block;
        margin-left: 14px;
        padding-left: 16px;

        &:before {
            left: -24px;
        }

        &:after {
            left: -20px;
        }

        span {
            margin-right: 16px;
        }
    }

    .plan-link {
        position: absolute;
        right: 0;
        bottom: 40px;

        font-family: MullerLight, 'sans-serif';
        color: rgba(255, 255, 255, 0.50);
    }

    @media (max-width: 512px) {
        .specializations {
            width: auto;
        }
        .specializations__buttons {
            display: flex;
            justify-content: center;
            margin: 0;
            width: 100%;

            button {
                margin: 0;
                font-size: 16px;

                &:first-child {
                    padding: 0 6px;
                    border-right: none;
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;
                }

                &:nth-child(2) {
                    padding: 0 6px;

                    border-left: none;
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;
                }
            }
        }
        .specializations__text {
            display: none;
        }

        .plan-details {
            width: auto;
            display: block;
            padding: 0 12px;
        }

        .plan-details__info {
            width: 100%;
        }

        .plan-details__modules {
            width: 100%;
        }

        .modules-list {
            li {
                height: 42px;
                margin-bottom: 0;

                &:before {
                    left: -10px;
                    top: 15px;
                }

                &:after {
                    left: -6px;
                    position: absolute;
                    top: calc(50% + 3px);
                }

                &:nth-child(7), &:nth-child(8), &:nth-child(9) {
                    margin-bottom: 8px;

                    &:after {
                        height: 42px;
                    }
                }

                &:last-child {
                    margin-bottom: 90px;
                }
            }
        }
    }
</style>