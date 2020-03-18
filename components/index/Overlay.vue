<template>
    <div class="overlay">
        <div class="container mx-auto px-4 flex wrapper">
            <div class="games-slider">
                <swiper :options="swiperOptions" ref="swiper">
                    <swiper-slide v-for="g in games" :key="g.name">
                        <div class="overview">
                            <div class="exit" @click="back"></div>
                            <h1 class="name">{{g.name}}</h1>
                            <div class="flex">
                                <!-- <youtube :player-width="720" :player-height="406" :video-id="g.video"/> -->
                                <div class="screens">
                                    <Scroller :game="g"/>
                                </div>
                                <div class="desc">
                                    <div class="desc-head">{{g.project}}</div>
                                    <div class="desc-body">{{ g.semestr }}</div>
                                    <div class="desc-head">Авторы</div>
                                    <div class="desc-body">{{ g.authors.join() }}</div>
                                    <div class="desc-head">Описание</div>
                                    <div class="desc-body">{{ g.description_ru }}</div>
                                    <a v-if="g.addition" class="addition" :href="g.addition" target="_blank">Подробнее об игре</a>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
                <div class="arrow-wrapper">
                    <div class="arrow arrow-left2">
                        <div class="arrow-left2-img arrow-img"></div>
                    </div>
                    <div class="arrow arrow-right2">
                        <div class="arrow-right2-img arrow-img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Scroller from '~/components/index/Scroller.vue'
export default{
    props: ['name'],
    components: { Scroller },
    data(){
        return{
            swiperOptions: {
                navigation: {
                    nextEl: '.arrow-right2',
                    prevEl: '.arrow-left2',
                },
                //spaceBetween: 580,
                allowTouchMove: false
            },
            game: null,
            games: {
                'SUPERMASSIVE BLACK HOLE': {
                    name: 'SUPERMASSIVE BLACK HOLE',
                    description: '',
                    description_ru: 'Содержать бар на собственном астероиде — это далеко не сказка. То залетают кучи космического мусора, то орды злобных роботов пытаются украсть ваш честный заработок.',
                    video: 'vkd-wUrAHck',
                    project: 'Курсовой проект',
                    semestr: '2 семестр "Инструментальные средства разработки видеоигр"',
                    authors: ['Симонов Андрей', 'Александр Гутриц', 'Перепелова Анастасия', 'Роман Соловьев'],
                    addition: '',
                    screens: [
                        '/labs/games_page/MassiveBlackHole/1.png',
                        '/labs/games_page/MassiveBlackHole/2.png',
                        '/labs/games_page/MassiveBlackHole/3.png',
                    ]
                },
                'Alchemica': {
                    name: 'Alchemica',
                    description: 'A potion-throwing wingsuit-flying adventure game',
                    description_ru: 'Адвенчура про варку зелий и полёты на фентезийном вингсьюте',
                    video: 'eddgu9prVO0',
                    project: 'Курсовой проект',
                    semestr: '2 семестр "Инструментальные средства разработки видеоигр"',
                    authors: ['Волкова Наталья Алексеевна', 'Дудаков Леонид Сергеевич', 'Тихоненко Никита Александрович', 'Тихоненко Никита Александрович'],
                    addition: 'https://twitter.com/Alchemica_Game',
                    screens: [
                        '/labs/games_page/Alchemica/1.png',
                        '/labs/games_page/Alchemica/2.png',
                        '/labs/games_page/Alchemica/3.png',
                    ]
                },
                'Greedy Gramps': {
                    name: 'Greedy Gramps',
                    description: 'Greedy Gramps is action role-playing game with competitive elements. The game combines snares building stage inside gramp’s house and dungeon crawling mechanics. Each player places traps to defend their own house from other players and then attack enemy house to find the bequest and earn most points on current map.',
                    description_ru: 'Greedy Gramps -соревновательная ролевая игра. Игра сочетает в себе механики строительства ловушек в доме Грэмпа и исследования подземелий. Каждый из игроков ставит ловушки, чтобы защитить свой дом от других игроков, а затем атакует вражеский дом, чтобы найти наследство и заработать очки.',
                    video: 'V0gtwicfIrA',
                    project: 'Курсовой проект',
                    semestr: '2 семестр "Инструментальные средства разработки видеоигр"',
                    authors: ['Горшков Владислав Вадимович', 'Леонов Владислав Романович', 'Муратов Тимур Ринатович', 'Нурлыгаянов Никита Рамильевич'],
                    addition: '',
                    screens: [
                        '/labs/games_page/GreedyGramps/1.png',
                        '/labs/games_page/GreedyGramps/2.png'
                    ]
                },
                'Smart Ass': {
                    name: 'Smart Ass',
                    description: "You play as a small and brave vacuum cleaner robot who wants to clean the whole house before its owners' arrival. But of course the stinky pets hate the newcomer and get in its way all the time. Use the help of other electrical devices connected via Internet of Things to distract these noisy animals. Don't let them catch you!",
                    description_ru: "Вы играете за маленького и храброго робота-пылесоса, который хочет убрать дом до прихода его хозяев. Но это не нравится домашним животным и они постоянно пытаются вам помешать. Отвлеките животных с помощью устройств, подключенных через Интернет вещей, не дайте им поймать вас!",
                    video: 'S7JNxA1PgKk',
                    project: 'Личный независимый проект',
                    semestr: 'Третий семестр',
                    authors: ['Чеботков Даниил'],
                    addition: 'https://stockyspark.itch.io/smart-ass?fbclid=IwAR1_fRcPcK1rNWP65usHzywaaSC_0KQ3Xi0O6HTDVTtvoP-0wbCmWxeYKOE',
                    screens: [
                        '/labs/games_page/SmartAss/1.png',
                        '/labs/games_page/SmartAss/2.png'
                    ]
                },
                'Race-Trace': {
                    name: 'Race-Trace',
                    description: "Race Trace is a humorous chair race game prototype where you play as one of office workers. It is friday night and everyone dreams to finally get to the bar and drink a few bottles of beer. Hurry up! The first one at the bar gets a six-pack for free!",
                    description_ru: "Race-Trace — это гонки на офисных стульях, где вы играете за одного из сотрудников. В пятницу вечером все мечтают наконец-то добраться до бара и выпить пару бутылок пива. Поторопись, первый получает шесть бутылок бесплатно!",
                    video: 'LL67854Y1yY',
                    project: 'Личный независимый проект',
                    semestr: 'Третий семестр',
                    authors: ['Чеботков Даниил'],
                    addition: 'https://stockyspark.itch.io/race-trace?fbclid=IwAR1KIJ47iOvCJumwF-ZHPXkyiUSHyQwkeAbexcUhZ-f1KNvAzWp0avvXf3Y',
                    screens: [
                        '/labs/games_page/Race_trace/1.png',
                        '/labs/games_page/Race_trace/2.png',
                        '/labs/games_page/Race_trace/3.png',
                    ]
                },
                'The Gate': {
                    name: 'The Gate',
                    description: "After an accident your soul was broken and you was closed inside your head.Open all gates to leave this place.Use special abilities to pass the obstacles.New ability for every level.",
                    description_ru: "После несчастного случая ваша душа разбита, и вы оказались заперты в своей голове. Откройте все ворота, чтобы выбраться.Используйте свои особые способности, чтобы преодолевать препятствия. Новые способности для каждого уровня.",
                    video: '6_fbjVN307E',
                    project: 'Курсовой проект',
                    semestr: '1 семестр "Введение в игровую разработку"',
                    authors: ['Тимур Сайфуллин'],
                    addition: '',
                    screens: [
                        '/labs/games_page/TheGate/1.png',
                        '/labs/games_page/TheGate/2.png',
                        '/labs/games_page/TheGate/3.png',
                        '/labs/games_page/TheGate/4.png',
                        '/labs/games_page/TheGate/5.png',
                        '/labs/games_page/TheGate/6.png',
                        '/labs/games_page/TheGate/7.png',
                        '/labs/games_page/TheGate/8.png',
                    ]
                },
                'Equilibrium': {
                    name: 'Equilibrium',
                    description: "Арена-шутер в стилистике retrowave, в котором игроку предстоит защищать свой кристалл от врагов и уничтожать их кристаллы",
                    description_ru: "Арена-шутер в стилистике retrowave, в котором игроку предстоит защищать свой кристалл от врагов и уничтожать их кристаллы",
                    video: '2uhJ-396fBI',
                    project: 'Курсовой проект',
                    semestr: '1 семестр "Введение в игровую разработку"',
                    authors: ['Черняков Никита'],
                    addition: '',
                    screens: [
                        '/labs/games_page/Equilibrium/1.png'
                    ]
                },
                
            }
        }
    },
    methods:{
        back(){
            this.$emit('back');
        }
    },
    created(){
        this.game = this.games[this.name];
    },
    mounted(){
        let swiper = this.$refs.swiper.swiper;
        swiper.slideTo( Object.keys(this.games).indexOf(this.name), 0, true);
    }
}
</script>
<style scoped lang="scss">
    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background: #ACACAC; 
    }
    ::-webkit-scrollbar-thumb {
        background: #666;
        border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }
    .overlay{
        position: fixed;
        top: 0px; left: 0px;
        width: 100%; height: 100vh;
        z-index: 10000;

        background-color: rgba(48,54,60,.8);
        -webkit-backdrop-filter: blur(5px);
        backdrop-filter: blur(5px);
    }
    .exit{
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
    }
    .exit:after{
        content: url('/exit.svg');
    }

    .wrapper{
        margin-top: 100px;
    }
    .screens{
        width: 720px;
    }
    .desc{
        margin-left: 60px;
        font-size: 14px;
        max-height: 506px;
        overflow-y: auto;
        margin-right: 10px;
    }
    .desc-head{
        font-family: MullerBold, sans-serif;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .desc-body{
        font-family: OpenSansRegular, sans-serif;
        margin-bottom: 35px;
        line-height: 22px;
    }
    a{
        color: #C82040;
    }
    h1{
        margin: 0px auto 50px auto;
        text-align: center;
        font-family: MullerBold, sans-serif;
        font-size: 40px;
    }
    .overview{
        width: 1000px;
        //margin: 20px auto 20px auto;
        padding: 70px 100px;
        background: rgba(14, 10, 32, 0.40);
        backdrop-filter: blur(40px);
    }

    .games-slider{
        position: relative;
        width: 1200px;
    }
    .arrow {
        position: absolute;
        top: 0;
        //background-image: url("/arrow.png");
        width: 149px;
        height: 100%;

        cursor: pointer;
        outline: none;

        &:hover{
            background: rgba(172, 172, 172, 0.02);
        }
    }
    .arrow-img{
        width: 57px;
        height: 69px;
        background-image: url("/arrow.png");
        position: absolute;
        top: 45%;
        left: 30%;

    }
    .arrow-left2 {
        left: -150px;
    }
    .arrow-left2-img{
        transform: rotate(180deg);

        &:hover {
            background-image: url("/arrow-hover.png");
            transform: rotate(0deg);
        }
    }
    .arrow-right2 {
        right: -150px;
    }
    .arrow-right2-img{

        &:hover {
            background-image: url("/arrow-hover.png");
            transform: rotate(180deg);
        }
    }
    @media (max-width: 512px) {
        .teachers {
            margin-top: 80px;
            padding: 0;
        }


        .games-slider {
            position: relative;
            width: 100%;
            margin: 72px 0 72px 0;
        }

        .arrow-wrapper {
            display: flex;
            justify-content: space-between;
            padding: 0 128px;
        }
    }
</style>