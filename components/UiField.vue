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
    <div class="ui-icon">
      <slot name="ui-icon"></slot>
    </div>
    <div class="ui-second-icon">
      <slot name="ui-second-icon"></slot>
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

.ui-icon {
  /* width: 0;
  height: 0; */
  position: relative;
  top: 50px;
  left: 250px;
}

.ui-icon,
.ui-second-icon {
  width: 38px;
  height: auto;
}
</style>
