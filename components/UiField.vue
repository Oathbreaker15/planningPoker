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
    <label class="ui-label">
      <slot name="ui-label"></slot>
    </label>
    <div class="ui-error-block">
      <slot name="ui-error-block"></slot>
    </div>
    <div class="ui-input">
      <slot name="ui-input"></slot>
    </div>
    <div class="ui-icon">
      <slot name="ui-icon"></slot>
    </div>
  </div>
</template>

<style scoped>
.ui-field {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  /* align-content: center;
  align-items: center; */
}

.ui-label {
  align-self: flex-start;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: #000000;
}

.ui-error-block {
  font-size: 16px;
  color: red;
  flex: 0 0 auto;
  align-self: baseline;
}

.ui-input {
  flex: 1 1 auto;
  align-self: auto;
}

.ui-icon {
  flex: 0 1 auto;
  align-self: auto;
}
</style>
