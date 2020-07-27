import pkg from './package'

export default {
    mode: 'universal',

    head: {
        title: 'Магистратура Технологии разработки компьютерных игр - Университет ИТМО',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Подготовка специалистов для игровой индустрии'},
            {hid: 'og:title', property: 'og:title', content: 'Магистратура Технологии разработки компьютерных игр - Университет ИТМО'},
            {hid: 'og:description', property: 'og:description', content: 'Подготовка специалистов для игровой индустрии'},
            {hid: 'og:image', property: 'og:image', content: 'https://itmo.games/logo_gd2.png'},
        ],
        // script: [
        //     {src: '/three.js'}
        // ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ],
    },

    loading: {color: '#fff'},

    css: [
        '~/assets/css/tailwind.css',
        '~/assets/css/main.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~plugins/dragscroll',
        '~plugins/swiper',
        { src: '@/plugins/youtube.js', ssr: false },
        {src: '~plugins/analytics.js', ssr: false}
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@bazzite/nuxt-optimized-images',
        '@nuxtjs/axios',
        '@nuxtjs/pwa',
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    render: {
        static: {
            setHeaders(res) {
                res.setHeader('X-Frame-Options', 'ALLOWALL')
                res.setHeader('Access-Control-Allow-Origin', '*')
                res.setHeader('Access-Control-Allow-Methods', 'GET')
                res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
            }
        }
    },
    generate: {
        fallback: "404.html"
    }
}
