<script>
export default {
    props: {
        imgPath: {
            type: String,
        }
    }

}
</script>

<template>
    <img class="link" :src="imgPath">
</template>

<style scoped>

</style>