<script>
export default {

}
</script>

<template>
    <div class="summary">
        <div class="vote-value">11</div>
        <div class="average">Средняя</div>
    </div>
</template>

<style scoped>
    .summary{
        width: 185px;
        height: 185px;
        display: inline-block;
        background-color: #6AC259;
        color: #fff;
        box-sizing: border-box;
        border-radius: 100%;
        position: relative;
    }

    .vote-value {
        margin: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        font-size: 64px;
    }

    .average {
        margin-top: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        font-size: 14px;
    }
</style>