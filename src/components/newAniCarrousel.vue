<template>
    <div class="carrouselDiv">
        <br>
        <b-carousel class="carrousel"
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
        >

            <b-carousel-slide v-for="banner in banners" v-bind:key="banner.id"
                :caption = "banner.name"
                :text = "banner.synopsis"
                :img-src="banner.image">
            </b-carousel-slide>
        
        </b-carousel>
        <br>
    </div>
</template>

<style>
.carrouselDiv{
    width: 100%;
    background-color: rgb(223, 223, 223);
}

.carrousel{
    width: 70%;
    margin-left: auto;
    margin-right: auto;
}
</style>

<script>
    import animeBanners from '../assets/banners.json'


    export default{
        data() {
            return {
                slide: 0,
                sliding: null,
                banners: animeBanners
            }
        },
        methods: {
            onSlideStart() {
                this.sliding = true
            },
            onSlideEnd() {
                this.sliding = false
            }
        }

    }
</script>