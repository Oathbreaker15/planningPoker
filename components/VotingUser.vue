<script>
export default {
   
}
</script>

<template>
    <div class="ui-voting-user-field">
        <div class="icon">
            <slot name="icon"></slot>
        </div>
        <div class="username">
            <slot name="username"></slot> 
        </div>       
    </div>    
</template>

<style scoped>
    .ui-voting-user-field {
        padding: 5px;
        width: 290px;
        height: 50px;
        border-radius: 5px;
        font-family: Roboto;
        font-size: 18px;
        line-height: 50px;
        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
    }

    .username {
        position: absolute;
        top: 0px;
        left: 45px;
    }

    .icon {
        position: absolute;
        top: 5px;
        left: 0px;
    }
</style>