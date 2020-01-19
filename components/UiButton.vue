<script>
export default {
  props: {
    state: {
      type: String,
      default: "solid",
      validator(value) {
        return ["solid", "bordered"].includes(value);
      }
    }
  }
};
</script>

<template>
  <button class="button" :class="'_type-' + state">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  height: 50px;
  border-radius: 5px;
  font-family: Roboto;
  font-size: 18px;
  line-height: 100%;
  box-sizing: border-box;
}

.button._type-solid {
  background-color: #6ac259;
  color: #fff;
  border: 0;
}
.button._type-bordered {
  color: #6ac259;
  background-color: #fff;
  border: 2px solid #6ac259;
}
</style>
