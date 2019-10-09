<script>
export default {
    props: {
        value: {
            type: String,
        }
    }
}
</script>
    
<template>
    <label class="label">
        <slot></slot>
    </label>
</template>

<style scoped>
    .label{
        margin-bottom: 5px;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        color: #000000;
    }
</style>