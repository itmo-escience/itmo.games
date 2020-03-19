<template>
    <footer>
        <a href="https://www.ifmo.ru"><img class="itmo-logo" src="/itmo_logo_horiz_transp_rus.png" alt=""></a>
        <div><img src="https://mc.yandex.ru/watch/53594170" style="position:absolute; left:-9999px;" alt="" /></div>
    </footer>
</template>

<style scoped>
    footer {
        @apply px-16 flex;

        align-items: center;
        justify-content: space-around;
        height: 70px;
    }
    a {
        margin: 0 auto;
        opacity: 0.5;
    }
    .itmo-logo {
        width: 300px;
    }
</style>
