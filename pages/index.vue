<template>
  <div>
    <UiButton condition="solid">Начать голосование</UiButton><br>
    <UiButton condition="solid">Проголосовать</UiButton><br>
    <UiButton condition="solid">Завершить</UiButton><br>
    <UiButton condition="solid">Оценить другую</UiButton><br>
    <UiButton condition="bordered">Переоценить эту</UiButton><br>
    
    <UiField v-slot:ui-input>
      <UiLabel>Как зовут?</UiLabel>
      <UiInput v-model="inputNameValue" placeholder="Лаврентий" v-slot:label></UiInput>
    </UiField>
    
    <UiField v-slot:ui-input>
      <UiLabel>Что оцениваем?</UiLabel>
      <UiInput v-model="inputTaskValue" placeholder="Сложная задачка" v-slot:label></UiInput>
    </UiField><br>
    
    <UiField v-slot:ui-input>
      <UiInput value="1" placeholder="https://www.figma.com/etertrretreetrerteret" v-slot:icon>
        <UiIcon></UiIcon>
      </UiInput>
    </UiField>
    <br>
    
    <div>
      Значение инпута Имя: {{ inputNameValue }}
    </div> 
    
    <div>
      Значение инпута Задачи: {{ inputTaskValue }}
    </div> 
    
    <VoteField></VoteField>

  </div>
</template>

<script>
import UiField from '~/components/UiField.vue'
import UiButton from '~/components/UiButton.vue'
import UiInput from '~/components/UiInput.vue'
import UiLabel from '~/components/UiLabel.vue'
import UiIcon from '~/components/UiIcon.vue'
import VoteField from '~/components/VoteField.vue'

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiLabel,
    UiIcon,
    VoteField,
  },
  data() {
    return {
      inputNameValue:'',
      inputTaskValue:'',
    };
  },
}
</script>

