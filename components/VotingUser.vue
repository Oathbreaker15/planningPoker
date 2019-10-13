<script>
export default {
   
}
</script>

<template>
    <div class="ui-voting-user-field">
        <div class="username"></div>
        <div class="icon">
            <slot name="icon"></slot>
        </div>   
    </div>    
</template>

<style scoped>
    .ui-voting-user-field {
        width: 290px;
        height: 50px;
        padding-left: 15px;
        padding-right: 45px;
        border-radius: 5px;
        border: 2px solid #E5E5E5;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-overflow: ellipsis;
        position: relative;
        padding-left: 35px;
        box-sizing: border-box;
    }

    .icon {
        position: absolute;
        top: 12px;
        left: 10px;
    }
</style>