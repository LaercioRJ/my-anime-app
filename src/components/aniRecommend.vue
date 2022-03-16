<template>
    <div class="contentAlign">
        <div class="scrollButton">
            <b-icon-arrow-left class="arrowIcon h1"></b-icon-arrow-left>
        </div>

        <div class="cardSlot">
            <div class="sectionTitle">
                <span>Romance</span>
            </div>
            <div class="divider"></div>
            <div class="cardsPosition"></div>
        </div>

        <div class="scrollButton">
            <b-icon-arrow-right class="arrowIcon h1"></b-icon-arrow-right>
        </div>
    </div>
</template>

<script>

</script>

<style>
    .contentAlign{
        flex-direction: row;
        display: flex;
    }
    
    .positionHelper{
        height: 1px;
    }
    
    .sessionTitle{
        font-size: x-large;
    }
    
    .scrollButton{
        width: 50px;
        height: 75px;
        margin-top: 211px;
        margin-bottom: auto;
    }
    
    .arrowIcon{
        margin-left: auto;
        margin-right: auto;
        margin-top: 30%;
        color: rgb(0, 0, 0, 0.15);
        transition: 1.5s;
    }
    
    .arrowIcon:hover{
        transition: 1s;
        color: rgb(0, 0, 0, 1);
        cursor: pointer;
    }

    .cardSlot{
        width: 100%;
        height: 500px;
        background-color: whitesmoke;
    }

    .sectionTitle{
        font-size: xx-large;
        margin-left: 10px;
    }

    .divider{
        width: 100%;
        background-color: darkblue;
        height: 5px;
    }

    .cardsPosition{
        background-color: red;
        width: 100%;
        height: 435px;
        margin-top: 20px;
    }
</style>