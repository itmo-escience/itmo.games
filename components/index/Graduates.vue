<template>
    <div class="gradues">
        <h1>Интервью с выпускниками</h1>
        <youtube :player-width="1280" :player-height="600" :video-id="video"/>
    </div>
</template>
<script>
export default{
    data(){
        return {
            video: '-WxpsigfGKk'
        }
    }
}
</script>
<style  scoped lang="scss">
.gradues{
    margin: 130px auto;
    width: 1140px;

    h1{
        text-align: center;
        font-family: MullerBold, sans-serif;
        font-size: 40px;
        margin-bottom: 50px;
    }
}
</style>