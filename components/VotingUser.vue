<script>
export default {
  props: {
    state: {
      type: String,
      default: "icon",
      validator(value) {
        return ["icon", "vote"].includes(value);
      }
    }
  }
};
</script>

<template>
  <div class="ui-voting-user-field">
    <div class="icon" :class="'_type-' + state">
      <slot name="icon"></slot>
    </div>
    <div class="vote" :class="'_type-' + state">
      <slot name="vote"></slot>
    </div>
    <div class="username">
      <slot name="username"></slot>
    </div>
  </div>
</template>

<style scoped>
.ui-voting-user-field {
  font-family: Roboto;
  font-size: 18px;
  display: flex;
  position: relative;
  align-items: center;
}

.username {
  margin-left: 10px;
  word-break: break-word;
}

._type-vote {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  background-color: #6ac259;
  color: #fff;
  border-radius: 100%;
}
</style>
