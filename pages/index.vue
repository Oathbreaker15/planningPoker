<template>
  <div>
    <UiButton state="solid">Начать голосование</UiButton><br>
    <UiButton state="solid">Проголосовать</UiButton><br>
    <UiButton state="solid">Завершить</UiButton><br>
    <UiButton state="solid">Оценить другую</UiButton><br>
    <UiButton state="bordered">Переоценить эту</UiButton><br>
    
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
        <UiIcon :src="require(`assets/img/copy.svg`)"></UiIcon>
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

    <p>Участники голосуют</p>
    
    <VotingUser>
      <UiIcon :src="require(`assets/img/thinking.svg`)" slot="icon"></UiIcon>
      <div slot="username">Константин</div> 
    </VotingUser>

    <VotingUser>
      <UiIcon :src="require(`assets/img/done.svg`)" slot="icon"></UiIcon>
       <div slot="username">Ilon Maks</div> 
    </VotingUser>

    <VotingUser>
      <UiIcon :src="require(`assets/img/done.svg`)" slot="icon"></UiIcon>
      <div slot="username">Данил</div> 
    </VotingUser>

    <VotingResults></VotingResults>

  </div>
</template>

<script>
import UiField from '~/components/UiField.vue'
import UiButton from '~/components/UiButton.vue'
import UiInput from '~/components/UiInput.vue'
import UiLabel from '~/components/UiLabel.vue'
import UiIcon from '~/components/UiIcon.vue'
import VoteField from '~/components/VoteField.vue'
import VotingUser from '~/components/VotingUser.vue'
import VotingResults from '~/components/VotingResults.vue'

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiLabel,
    UiIcon,
    VoteField,
    VotingUser,
    VotingResults
  },
  data() {
    return {
      inputNameValue:'',
      inputTaskValue:'',
      vectorSvg: '../imgs/Vector.svg',
      thinkingSvg: '../imgs/thinking.svg', 
    };
  },
}
</script>

