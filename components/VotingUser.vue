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

.icon._type-icon {
  position: absolute;
  top: 5px;
  left: 0px;
}

.vote._type-vote {
  position: absolute;
  top: 5px;
  left: 0px;
  width: 38px;
  height: 38px;
  background-color: #6ac259;
  color: #fff;
  border-radius: 100%;
}
</style>
