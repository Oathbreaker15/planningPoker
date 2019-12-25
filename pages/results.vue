<template>
  <div>
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="https://www.figma.com/etertrretreetrerteret"
        >
          <template v-slot:icon>
            <a href="" @click.prevent=""
              ><UiIcon :src="require(`assets/img/copy.svg`)"></UiIcon
            ></a>
          </template>
        </UiInput>
      </template>
    </UiField>

    <VotingTitle :title="$store.state.taskname">
      <template v-slot:icon>
        <a href="" @click.prevent=""
          ><UiIcon :src="require(`assets/img/edit.svg`)"></UiIcon
        ></a>
      </template>
    </VotingTitle>

    <VotingResults class="vote-field">
      <template v-slot:summary-vote-value>
        {{ (averageVoteValue.vote / usersWhoVote.length).toFixed(0) }}
      </template>
    </VotingResults>

    <p class="helping-text">Участники голосуют</p>

    <VotingUser
      class="voting-user"
      v-for="user in $store.state.users"
      :key="user.username"
    >
      <template v-if="user.vote > 0" v-slot:vote>
        <div class="vote-block" state="vote">
          <span class="vote-value">{{ user.vote }}</span>
        </div>
      </template>
      <template v-else v-slot:icon>
        <UiIcon state="icon" :src="require(`assets/img/thinking.svg`)"></UiIcon>
      </template>

      <div slot="username">{{ user.username }}</div>
    </VotingUser>

    <nuxt-link to="/voting">
      <UiButton state="bordered">Переоценить эту</UiButton> </nuxt-link
    ><br />

    <nuxt-link to="/">
      <UiButton state="solid">Оценить другую</UiButton>
    </nuxt-link>
  </div>
</template>

<script>
import UiField from "~/components/UiField.vue";
import UiButton from "~/components/UiButton.vue";
import UiInput from "~/components/UiInput.vue";
import UiIcon from "~/components/UiIcon.vue";
import VotingResults from "~/components/VotingResults.vue";
import VotingUser from "~/components/VotingUser.vue";
import VotingTitle from "~/components/VotingTitle.vue";

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
    return {};
  },
  computed: {
    allUsers() {
      return this.$store.getters.allUsers;
    },
    averageVoteValue() {
      return this.$store.getters.averageVoteValue;
    },
    usersWhoVote() {
      return this.$store.getters.usersWhoVote;
    }
  }
};
</script>

<style scoped>
.ui-field {
  padding: 20px 15px;
}

.voting-user,
.helping-text,
.button {
  margin: 5px 15px;
}

.vote-field {
  margin: 20px 15px;
}

.vote-block {
  position: absolute;
  top: 5px;
  left: 0px;
  width: 38px;
  height: 38px;
  background-color: #6ac259;
  color: #fff;
  border-radius: 100%;
}

.vote-value {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
