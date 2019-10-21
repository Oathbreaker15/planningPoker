<script>
export default {

}
</script>

<template>
    <div class="voting-title"> Сложная задачка
    <slot class="icon" name="icon"></slot>  
    </div>
</template>

<style scoped>
    .voting-title{
        padding-left: 15px;
        padding-right: 45px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 18px;
        position: relative;
    }

    .icon {
        position: absolute;
        top: 12px;
        right: 18px;
    }
</style>