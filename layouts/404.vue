<template>
    <div class="wrapper">
        <div class="container">
            <div class="logo">
                <a href="https://www.ifmo.ru"><img class="itmo-logo" src="/itmo_logo_horiz_transp_rus.png" alt=""></a>
            </div>

            <div class="text">
                <h1>
                    Упс!
                    <br>
                    Кажется что-то пошло не так!
                    <br>
                    Вы можете перейти на страницу:
                </h1>
                <ul>
                    <li><a href="/">Магистратуры</a></li>
                    <li><a href="/lab">Лаборатории</a></li>
                </ul>
            </div>
        </div>
        <span class="code">404</span>
    </div>
</template>
<script>
    export default {
        head: {
            bodyAttrs: {
                class: 'error-page'
            }
        },
    }
</script>

<style lang="scss">
    .error-page {
        padding: 80px 160px;
        background-color: #171328;
        background-image: url("/bg404.svg");
        color: white;
        max-height: 100vh;
        overflow: hidden;

        .container {
            position: relative;
            width: 1160px;
            min-width: 1160px;
            min-height: calc(100vh - 160px);
            margin: 0 auto;

            display: flex;
            align-items: center;

            background: rgba(31, 15, 61, 0.80);
        }

        ul {
            display: flex;
            list-style: none;
            margin: 0;
            padding: 0;

            li {
                &:nth-child(2) {
                    margin-left: 32px;
                }

                a {
                    color: #EC0B43;
                    font-family: MullerMedium, 'sans-serif';
                    font-size: 20px;

                    text-transform: uppercase;
                }
            }
        }

        .logo {
            position: absolute;
            width: 100%;
            display: flex;
            justify-content: flex-end;
            padding: 68px;
            align-self: flex-start;
        }

        .text {
            padding-left: 180px;
            font-size: 16px;
            font-family: MullerMedium, 'sans-serif';
            line-height: 48px;
        }

        .itmo-logo {
            width: 300px;
        }

        .code {
            position: absolute;
            bottom: -100px;
            left: 0;
            line-height: 500px;
            font-size: 500px;
            font-family: MullerExtraBold, sans-serif;
            color: #110623;
            z-index: -1;
        }
    }
</style>
