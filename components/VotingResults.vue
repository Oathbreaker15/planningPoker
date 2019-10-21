<script>
export default {

}
</script>

<template>
    <div class="summary__outer">
        <div class="summary">
            <div class="summary__inner">
                <div class="vote-value">11</div>
                <div class="average">Средняя</div>
            </div>
        </div>
    </div> 
</template>

<style scoped>
    .summary__outer{
        display: inline-block;
        width: 290px;
        text-align: center;
    }

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

    .summary__inner {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .vote-value {
        font-size: 64px;
        line-height: 64px;
    }

    .average {
        font-size: 14px;
        line-height: 14px;
    }
</style>