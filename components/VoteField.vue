<script>
export default {
  props: {
    type: String
  }
};
</script>

<template>
  <div class="ui-numbers-field">
    <div class="ui-numbers-field-inner">
      <div class="vote-value">1</div>
    </div>
    <div class="ui-numbers-field-inner">
      <div class="vote-value">2</div>
    </div>
    <div class="ui-numbers-field-inner">
      <div class="vote-value">3</div>
    </div>
    <div class="ui-numbers-field-inner">
      <div class="vote-value">5</div>
    </div>
    <div class="ui-numbers-field-inner active">
      <div class="vote-value">8</div>
    </div>
    <div class="ui-numbers-field-inner">
      <div class="vote-value">13</div>
    </div>
  </div>
</template>

<style scoped>
.ui-numbers-field {
  margin: 0;
  width: 290px;
  height: 190px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  align-content: stretch;
  text-align: center;
}

.ui-numbers-field-inner {
  width: 85px;
  height: 85px;
  background-color: #ffffff;
  border: 2px solid #6ac259;
  box-sizing: border-box;
  border-radius: 100%;
  position: relative;
  cursor: pointer;
}

.ui-numbers-field-inner:nth-child(3n) {
  margin-right: 0;
}

.vote-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 32px;
  line-height: 32px;
  vertical-align: top;
}
.ui-numbers-field-inner:hover {
  background-color: #6ac259;
  color: #fff;
}
</style>
