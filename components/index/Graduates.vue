<template>
    <div class="gradues">
        <h1>Интервью с выпускниками</h1>
        <div class="video">
            <iframe src="https://www.youtube.com/embed/-WxpsigfGKk" frameborder="0" allowfullscreen></iframe>
        </div>    
    </div>
</template>
<script>
export default{
    data(){
        return {
            video: '-WxpsigfGKk',
            width: 1280,
            height: 600
        }
    }
}
</script>
<style  scoped lang="scss">
    .gradues{
        margin: 130px auto;
        width: 1280px;

        h1{
            text-align: center;
            font-family: MullerBold, sans-serif;
            font-size: 40px;
            margin-bottom: 50px;
        }
    }
    .video {
        height: 0px;
        padding-top: 25px;
        padding-bottom: 45%;
        position: relative;
    }
    .video iframe {
        width: 100%;
        height: 100%;
        position: absolute;
    }
    
    @media (max-width: 1024px) {
        .gradues{ width: 1024px; }
    }
    @media (max-width: 512px) {
        .gradues{ width: 320px; }
        .video{ padding-bottom: 39%; }
    }
    
</style>