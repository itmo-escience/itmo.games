import Vue from 'vue';
// require styles
import 'swiper/dist/css/swiper.css';

if (process.client) {
    const VueAwesomeSwiper = require('vue-awesome-swiper');
    Vue.use(VueAwesomeSwiper, /* { default global options } */)
}