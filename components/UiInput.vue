<script>
export default {
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    state: {
      type: String
    }
  },
  methods: {
    emitInput(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<template>
  <div class="ui-input">
    <input
      type="text"
      :value="value"
      @input="emitInput"
      @keyup.enter="emitInput"
      :placeholder="placeholder"
      :class="'_type-' + state"
    />
    <div class="ui-icon">
      <slot name="ui-icon"></slot>
    </div>
  </div>
</template>

<style scoped>
.ui-input {
  display: flex;
  position: relative;
  justify-content: space-between;
  height: 50px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
}

._type-regular,
._type-mini {
  width: 100%;
  /* height: 50px; */
  padding: 0 15px;
  /* border-radius: 5px; */
  border: 0px solid #e5e5e5;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  /* line-height: 21px; */
  text-overflow: ellipsis;
  outline: none;
}

.ui-input:focus-within {
  border-color: #4d90fe;
}

.ui-icon {
  align-self: center;
  flex: 0 0 auto;
  margin-top: 2px;
  margin-right: 5px;
  background-size: cover;
}
._type-mini {
  padding-right: 85px;
}
._type-error {
  border: 1px solid red;
}
</style>
