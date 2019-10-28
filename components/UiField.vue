<script>
export default {
  props: {
    label: {
      type: String
    }
  }
};
</script>

<template>
  <div class="ui-field">
    <label class="label">
      <slot name="label"></slot>
    </label>
    <div class="ui-input">
      <slot name="ui-input"></slot>
    </div>
  </div>
</template>

<style scoped>
.label {
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
