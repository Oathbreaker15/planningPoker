<script>
export default {
  props: {
    values: {
      type: Array
    },
    activeValue: {
      type: Number
    }
  },
  methods: {
    emitInput(payload) {
      this.$emit("input", payload);
    }
  }
};
</script>

<template>
  <div class="ui-numbers-field">
    <div
      class="ui-numbers-field-inner"
      v-for="value in values"
      :key="value"
      :class="{ active: activeValue === value }"
      @click="emitInput(value)"
    >
      <div class="vote-value">{{ value }}</div>
    </div>
  </div>
</template>

<style scoped>
.ui-numbers-field {
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: stretch;
  text-align: center;
  vertical-align: middle;
}

.ui-numbers-field-inner {
  width: 85px;
  height: 85px;
  margin-bottom: 10px;
  background-color: #ffffff;
  border: 2px solid #6ac259;
  box-sizing: border-box;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
  flex: 0 1 auto;
}

.ui-numbers-field-inner:nth-child(3n) {
  margin-right: 0;
}

.vote-value {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  line-height: 78px;
  vertical-align: top;
}
.ui-numbers-field-inner:hover,
.active {
  background-color: #6ac259;
  color: #fff;
}
</style>
