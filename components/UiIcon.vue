<script>
export default {
  props: {
    imgPath: {
      type: String
    }
  }
};
</script>

<template>
  <img class="link" :src="imgPath" />
</template>

<style scoped>
/* .link {
  width: 38px;
  height: 38px;
} */
</style>
