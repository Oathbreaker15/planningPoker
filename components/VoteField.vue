<script>
export default {
    props: {
        type: String,
    }
}
</script>

<template>
    <div class="ui-numbers-field">
        <div class="vote-value-wrapper">
            <div class="vote-value">1</div>
        </div>
        <div class="vote-value-wrapper">
            <div class="vote-value">2</div>
        </div> 
        <div class="vote-value-wrapper">
            <div class="vote-value">3</div>
        </div>
        <div class="vote-value-wrapper">
            <div class="vote-value">5</div>
        </div> 
        <div class="vote-value-wrapper active">
            <div class="vote-value">8</div>
        </div> 
        <div class="vote-value-wrapper">
            <div class="vote-value">13</div>
        </div>     
    </div>
</template>

<style scoped>
    .ui-numbers-field {
        padding: 5px 10px;
        margin: 0;
        width: 290px;
        height: 190px;
    }

    .vote-value-wrapper {
        display: inline-block;
        width: 85px;
        height: 85px;
        background-color: #FFFFFF;
        border: 2px solid #6AC259;
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
        font-size: 32px;
    }
    .active {
        background-color: #6AC259;
        color: #fff;
    }
</style>