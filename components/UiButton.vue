<script>
    export default {
     
    props: {
        condition: {
            type: String,
            default: 'solid',
            validator(value){
                return ['solid', 'bordered'].includes(value);
            }
        }
    }
};
    
</script>

<template>
    <button class="button" :class="'_type-' + condition">
        <slot></slot>
    </button>
</template>

<style scoped>
    .button {
        width: 290px;
        height: 50px;
        margin: 5px 0;
        border-radius: 5px;
        font-family: Roboto;
        font-style: Regular;
        font-size: 18px;
        line-height: 21px;
        line-height: 100%;
        text-align: сenter;
        vertical-align: center;
        box-sizing: border-box;
    }

    .button._type-solid {
        background-color: #6AC259;
        color: #fff;
        border: 0;
    }
    .button._type-bordered {
        color: #6AC259;
        background-color: #fff;
        border: 2px solid #6AC259;
    }
</style>