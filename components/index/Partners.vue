<template>
    <div class="wrapper">
        <article class="partners" v-dragscroll>
            <div class="partners-blocks">
                <div class="block">
                    <img src="partners/unigine_logo_black.png">
                </div>
                <div class="block">
                    <img src="partners/AcademicParnter.png">
                </div>
                <div class="block">
                    <img src="partners/wargaming.png">
                </div>
                <div class="block">
                    <img src="partners/nival.png">
                </div>
                <div class="block">
                    <img src="partners/bytex.png">
                </div>
                <div class="block">
                    <img src="partners/trace.png">
                </div>
                <div class="block">
                    <img src="partners/banana.png">
                </div>
                <div class="block">
                    <img src="partners/indikator_full.png">
                </div>
                <div class="block">
                    <img src="partners/tau_tracker.png">
                </div>
                <div class="block">
                    <img src="partners/cerevrum.png">
                </div>
                <div class="block">
                    <img src="partners/antilatency.png">
                </div>
                <div class="block">
                    <img src="partners/modum_lab.png">
                </div>
            </div>
        </article>
    </div>
</template>

<style scoped lang="scss">
    .partners {
        flex: 1;
        display: flex;
        overflow: auto;
        overflow-x: hidden;

        cursor: grabbing;
    }

    .partners-blocks {
        display: flex;

        border-top: 1px solid #5c5a66;
        border-bottom: 1px solid #5c5a66;

        font-family: MullerMedium, 'sans-serif';
    }

    .block {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 290px;
        height: 180px;

        padding: 0 50px;

        &:first-child {
            border-left: none;
        }
    }
</style>