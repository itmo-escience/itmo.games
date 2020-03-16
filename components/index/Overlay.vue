<template>
    <!--<iframe width="420" height="315" :src="game.video"></iframe>-->
    
    <youtube :player-width="500" :player-height="500" :video-id="game.video" />

</template>
<script>
    //import VueYouTubeEmbed from 'vue-youtube-embed';
    export default{
        props: ['name'],
        //components: {VueYouTubeEmbed},
        data(){
            return{
                game: null,
                games: {
                    'SUPERMASSIVE BLACK HOLE': {
                        description: '',
                        description_ru: 'Содержать бар на собственном астероиде — это далеко не сказка. То залетают кучи космического мусора, то орды злобных роботов пытаются украсть ваш честный заработок.',
                        video: 'vkd-wUrAHck',
                        authors: ['Симонов Андрей', 'Александр Гутриц'],
                        addition: ''
                    },
                    'Alchemica': {
                        description: 'A potion-throwing wingsuit-flying adventure game',
                        description_ru: 'Адвенчура про варку зелий и полёты на фентезийном вингсьюте',
                        video: 'eddgu9prVO0',
                        authors: [],
                        addition: 'https://twitter.com/Alchemica_Game'
                    },
                    'Greedy Gramps': {
                        description: 'Greedy Gramps is action role-playing game with competitive elements. The game combines snares building stage inside gramp’s house and dungeon crawling mechanics. Each player places traps to defend their own house from other players and then attack enemy house to find the bequest and earn most points on current map.',
                        description_ru: 'Greedy Gramps -соревновательная ролевая игра. Игра сочетает в себе механики строительства ловушек в доме Грэмпа и исследования подземелий. Каждый из игроков ставит ловушки, чтобы защитить свой дом от других игроков, а затем атакует вражеский дом, чтобы найти наследство и заработать очки.',
                        video: 'V0gtwicfIrA',
                        authors: [],
                        addition: ''
                    },
                    'Smart Ass': {
                        description: "You play as a small and brave vacuum cleaner robot who wants to clean the whole house before its owners' arrival. But of course the stinky pets hate the newcomer and get in its way all the time. Use the help of other electrical devices connected via Internet of Things to distract these noisy animals. Don't let them catch you!",
                        description_ru: "Вы играете за маленького и храброго робота-пылесоса, который хочет убрать дом до прихода его хозяев. Но это не нравится домашним животным и они постоянно пытаются вам помешать. Отвлеките животных с помощью устройств, подключенных через Интернет вещей, не дайте им поймать вас!",
                        video: 'S7JNxA1PgKk',
                        authors: ['Чеботков Даниил'],
                        addition: 'https://stockyspark.itch.io/smart-ass?fbclid=IwAR1_fRcPcK1rNWP65usHzywaaSC_0KQ3Xi0O6HTDVTtvoP-0wbCmWxeYKOE'
                    },
                    'Race-Trace': {
                        description: "Race Trace is a humorous chair race game prototype where you play as one of office workers. It is friday night and everyone dreams to finally get to the bar and drink a few bottles of beer. Hurry up! The first one at the bar gets a six-pack for free!",
                        description_ru: "Race-Trace — это гонки на офисных стульях, где вы играете за одного из сотрудников. В пятницу вечером все мечтают наконец-то добраться до бара и выпить пару бутылок пива. Поторопись, первый получает шесть бутылок бесплатно!",
                        video: 'LL67854Y1yY',
                        authors: ['Чеботков Даниил'],
                        addition: 'https://stockyspark.itch.io/race-trace?fbclid=IwAR1KIJ47iOvCJumwF-ZHPXkyiUSHyQwkeAbexcUhZ-f1KNvAzWp0avvXf3Y'
                    },
                    'Equilibrium': {
                        description: "Арена-шутер в стилистике retrowave, в котором игроку предстоит защищать свой кристалл от врагов и уничтожать их кристаллы",
                        description_ru: "Арена-шутер в стилистике retrowave, в котором игроку предстоит защищать свой кристалл от врагов и уничтожать их кристаллы",
                        video: '',
                        authors: [],
                        addition: ''
                    },
                    'The Gate': {
                        description: "After an accident your soul was broken and you was closed inside your head.Open all gates to leave this place.Use special abilities to pass the obstacles.New ability for every level.",
                        description_ru: "После несчастного случая ваша душа разбита, и вы оказались заперты в своей голове. Откройте все ворота, чтобы выбраться.Используйте свои особые способности, чтобы преодолевать препятствия. Новые способности для каждого уровня.",
                        video: '6_fbjVN307E',
                        authors: ['Тимур Сайфуллин'],
                        addition: ''
                    },
                }
            }
        },
        created(){
            console.log(this.name)
            this.game = this.games[this.name];
        }
    }
</script>
<style>
</style>