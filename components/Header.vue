<template>
    <header>
        <div class="content">
            <a href="https://www.ifmo.ru"><img class="itmo-logo" src="/itmo_logo_horiz_transp_rus.png" alt=""></a>
            <img class="lab-logo" src="/logo_lab.svg" alt="" v-if="lab === 1">
            <img class="game-logo" src="/logo_gd.svg" alt="" v-else>
            <div class="menu">
                <ul>
                    <li><a href="/">Магистратура</a></li>
                    <li><a href="/lab">Лаборатория</a></li>
                </ul>
            </div>
            <!--            <button><img src="/icons/menu.png" alt=""></button>-->
        </div>
    </header>
</template>

<script>
    export default {
        data: function () {
            return {
                page: this.$nuxt.$route.name,
                lab: 0,
            }
        },
        mounted() {
            if (document.URL.indexOf('lab') !== -1) {
                this.lab = 1;
            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        @apply flex;
        height: 90px;
        width: 100%;
        padding: 0 8%;
        position: absolute;
        z-index: 2;
    }

    .content {
        @apply flex;
        height: 90px;
        width: 100%;
        align-items: center;
        margin: 0 auto;
    }


    .itmo-logo {
        width: 300px;
    }

    .game-logo {
        width: 185px;
        display: block;
        border-left: 1px solid rgba(255, 255, 255, 0.50);
        margin-left: 35px;
        padding-left: 15px;
    }

    .lab-logo {
        width: 185px;
        display: block;
        border-left: 1px solid rgba(255, 255, 255, 0.50);
        margin-left: 35px;
        padding-left: 15px;
        padding-bottom: 12px;
    }

    .menu {
        margin-left: auto;

        ul {
            display: flex;
            list-style-type: none;

            font-family: 'MullerRegular', 'sans-serif';
            font-size: 16px;

            li {
                margin-right: 40px;

                &:last-child {
                    margin-right: 0;
                }
            }

            a {
                color: white;
                text-decoration: none;
            }
        }
    }

    @media (max-width: 512px) {
        header {
            padding: 0 16px;
        }

        .lab-logo, .menu {
            display: none;
        }

        .content {
            width: 100%;
            margin: 0;

            justify-content: space-between;
        }
    }
</style>
