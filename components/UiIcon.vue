<script>
export default {
  props: {
    imgPath: {
      type: Function
    }
  }
};
</script>

<template>
  <img class="link" :src="imgPath" />
</template>

<style scoped></style>
