<template>
    <div>
        <newAniCarrouselVue/>
        <div class="categoriesPosition">
            <aniRecommend/>
        </div>
        <br>
    </div>
</template>

<script>
    import aniRecommend from "@/components/aniRecommend.vue"
    import newAniCarrouselVue from "@/components/newAniCarrousel.vue"

    export default{
        components: {
            aniRecommend,
            newAniCarrouselVue
        }
    }
</script>

<style>
    .categoriesPosition{
        margin-top: 5vh;
        width: 75%;
        margin-left: auto;
        margin-right: auto;
        height: 500px;
    }
</style>