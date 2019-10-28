<template>
  <div class="app">
    <UiField>
      <template v-slot:label>
        <UiLabel class="ui-label">Как зовут?</UiLabel>
      </template>
      <template v-slot:ui-input>
        <UiInput value="" placeholder="Лаврентий" class="ui-input"></UiInput>
      </template>
    </UiField>

    <UiField>
      <template v-slot:label>
        <UiLabel class="ui-label">Что оцениваем?</UiLabel>
      </template>
      <template v-slot:ui-input>
        <UiInput
          value=""
          placeholder="Сложная задачка"
          class="ui-input"
        ></UiInput>
      </template>
    </UiField>

    <nuxt-link to="/voting">
      <UiButton state="solid" class="ui-button">Начать голосование</UiButton>
    </nuxt-link>
  </div>
</template>

<script>
import UiField from "~/components/UiField.vue";
import UiButton from "~/components/UiButton.vue";
import UiInput from "~/components/UiInput.vue";
import UiLabel from "~/components/UiLabel.vue";

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiLabel
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.app {
  display: block;
  margin: 0 auto;
  padding: 0;
}

.ui-label {
  padding: 20px 15px 5px 15px;
}

.ui-input {
  padding: 0px 15px;
}

.button {
  margin: 20px 15px;
}
</style>
