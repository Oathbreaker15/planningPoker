<script>
export default {
  props: {
    title: {
      type: String
    }
  }
};
</script>

<template>
  <div class="voting-title">
    <div class="voting-name">
      <slot name="voting-name">{{ title }}</slot>
    </div>

    <div class="icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<style scoped>
.voting-title {
  display: flex;
  position: relative;
  align-items: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
}

.voting-name {
  word-break: break-word;
}

.icon {
  height: 15px;
  margin-left: 5px;
}
</style>
