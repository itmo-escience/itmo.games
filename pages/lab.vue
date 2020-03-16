<template>
    <main>
        <Hero></Hero>
    </main>
</template>

<script>
    import Hero from '~/components/lab/Hero.vue'

    export default {
        head: {
            bodyAttrs: {
                class: 'lab-page'
            }
        },
        components: {Hero},
        data() {
            return {

            }
        },
        methods: {},
    }
</script>

<style lang="scss">
    a {
        &:hover {
            color: #EC0B43 !important;
        }
    }
</style>