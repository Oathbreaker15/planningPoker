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
  width: 290px;
  padding-left: 15px;
  padding-right: 45px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 18px;
  position: relative;
  word-wrap: break-word;
}

.voting-title {
  width: 290px;
  word-wrap: break-word;
}

.icon {
  width: 15px;
  height: 15px;
  margin-left: 10px;
}
</style>
