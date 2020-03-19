<template>
    <main>
        <div class="game">
            <div><a href="https://abit.itmo.ru/ums/system/login/" target="_blank">Подать заявку <img src="/icons/game.png" alt=""></a></div>
        </div>
        <Hero></Hero>
        <Plan></Plan>
        <StudentsWorks />
        <Apply></Apply>
        <Teachers></Teachers>
        <Graduates />
        <no-ssr>
            <PartnersMobile v-if="isMobile()"></PartnersMobile>
            <PartnersScroll v-else></PartnersScroll>
        </no-ssr>
        <Contacts></Contacts>
    </main>
</template>

<script>
    import Hero from '~/components/index/Hero.vue'
    import Plan from '~/components/index/Plan.vue'
    import StudentsWorks from '~/components/index/StudentsWorks.vue'
    import Apply from '~/components/index/Apply.vue'
    import Teachers from '~/components/index/Teachers.vue'
    import Graduates from '~/components/index/Graduates.vue'
    import PartnersScroll from '~/components/index/PartnersScroll.vue'
    import PartnersMobile from '~/components/index/PartnersMobile.vue'
    import Contacts from '~/components/index/Contacts.vue'

    export default {
        components: {
            Hero, Plan,
            StudentsWorks,
            Apply, Teachers,
            Graduates,
            PartnersScroll, PartnersMobile,
            Contacts},
        data() {
            return {
                // isMobile: true
            }
        },
        methods: {
            isMobile: function () {
                if (typeof window === 'undefined') return;
                let width = window.innerWidth
                    || document.documentElement.clientWidth
                    || document.body.clientWidth;
                if (width <= 512) {
                    return true;
                } else {
                    return false;
                }
            }
        },
    }
</script>

<style lang="scss">
    a {
        &:hover {
            color: #EC0B43 !important;
        }
    }

    .game {
        position: fixed;
        right: 8%;
        bottom: 8%;
        border: 8px solid rgba(236, 11, 67, 0.3);
        border-radius: 100%;

        z-index: 9999;

        div {
            width: 60px;
            height: 60px;
            background-color: #EC0B43;

            display: flex;
            align-items: center;
            justify-content: center;
            border: 12px solid #EC0B43;
            border-radius: 100%;

            img {
                display: block;
            }
        }

        a {
            font-size: 0;
        }

        &:hover {
            border-radius: 44px;

            div {
                width: 216px;
                border-radius: 30px;
                padding: 8px;
            }

            a {
                display: flex;
                justify-content: space-between;
                width: 100%;
                color: white !important;
                font-family: MullerBold, sans-serif;
                font-size: 18px;
                text-decoration: none;
            }
        }
    }

    @media (max-width: 512px) {
        .game {
            display: none;
        }
    }
</style>