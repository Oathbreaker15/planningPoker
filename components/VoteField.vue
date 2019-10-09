<script>
export default {
    props: {
        type: String,
    }
}
</script>

<template>
    <div class="ui-numbers-field">
       <slot></slot>   
    </div>
</template>

<style scoped>
    .ui-numbers-field {
        padding: 0;
        margin: 0;
        width: 290px;
        height: 190px;
        border: 1px solid black;
    }
</style>