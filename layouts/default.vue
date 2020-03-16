<template>
    <div class="wrapper">
        <Header></Header>
        <nuxt/>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from '~/components/Header.vue'
    import Footer from '~/components/Footer.vue'

    export default {
        components: {Header, Footer}
    }
</script>

<style>
    /* Sample `apply` at-rules with Tailwind CSS
    .container {
      @apply min-h-screen flex justify-center items-center text-center mx-auto;
    }
    */
    body {
        background-color: #171328;
        color: white;
    }

    .lab-page {
        background-color: #18132b;
    }
</style>
