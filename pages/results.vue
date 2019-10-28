<template>
  <div>
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput value="1" placeholder="https://www.figma.com/etertrretreetrerteret">
          <template  v-slot:icon>
            <a href=""><UiIcon :src="require(`assets/img/copy.svg`)"></UiIcon></a>
          </template>     
        </UiInput>
      </template>
    </UiField>
    
    <VotingTitle>
      <template v-slot:icon>
        <a href=""><UiIcon :src="require(`assets/img/edit.svg`)"></UiIcon></a>
      </template>
    </VotingTitle>

    <VotingResults class="vote-field"></VotingResults>

    <p class="helping-text">Участники голосуют</p>
    
    <VotingUser class="voting-user">
      <UiIcon :src="require(`assets/img/thinking.svg`)" slot="icon"></UiIcon>
      <div slot="username">Константин</div> 
    </VotingUser>

    <VotingUser class="voting-user">
      <UiIcon :src="require(`assets/img/done.svg`)" slot="icon"></UiIcon>
       <div slot="username">Ilon Maks</div> 
    </VotingUser>

    <VotingUser class="voting-user">
      <UiIcon :src="require(`assets/img/done.svg`)" slot="icon"></UiIcon>
      <div slot="username">Данил</div> 
    </VotingUser>


    <nuxt-link to="/voting">
      <UiButton state="bordered">Переоценить эту</UiButton>
    </nuxt-link><br>

    <nuxt-link to="/">
      <UiButton state="solid">Оценить другую</UiButton> 
    </nuxt-link>
    
    
  </div>
</template>

<script>
import UiField from '~/components/UiField.vue'
import UiButton from '~/components/UiButton.vue'
import UiInput from '~/components/UiInput.vue'
import UiIcon from '~/components/UiIcon.vue'
import VotingResults from '~/components/VotingResults.vue'
import VotingUser from '~/components/VotingUser.vue'
import VotingTitle from '~/components/VotingTitle.vue'

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiIcon,
    VotingResults,
    VotingUser,
    VotingTitle
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>
  .ui-field{
    padding: 20px 15px;
  }

  .voting-user,
  .helping-text,
  .button{
    margin: 5px 15px;
  }

  .vote-field{
    margin: 20px 15px;
  }

</style>