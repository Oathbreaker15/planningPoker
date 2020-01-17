<script>
export default {
  props: {
    value: {
      type: String
    }
  }
};
</script>

<template>
  <label class="label">
    <slot></slot>
  </label>
</template>

<style scoped></style>
