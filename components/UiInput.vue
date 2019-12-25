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
  </div>
</template>

<style scoped>
._type-regular,
._type-mini {
  width: 290px;
  height: 50px;
  padding-left: 15px;
  padding-right: 45px;
  border-radius: 5px;
  border: 2px solid #e5e5e5;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
}

.ui-input {
  display: inline-block;
  position: relative;
}

._type-mini {
  padding-right: 85px;
}
._type-error {
  border: 1px solid red;
}
</style>
