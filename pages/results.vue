<template>
  <div class="app">
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="https://www.figma.com/etertrretreetrerteret"
        >
          <template v-slot:ui-icon>
            <a href="" class="copy-icon" @click.prevent=""
              ><UiIcon :src="iconCopy"></UiIcon
            ></a>
          </template>
        </UiInput>
      </template>
    </UiField>

    <VotingTitle class="voting-title" :title="$store.state.taskname">
    </VotingTitle>

    <VotingResults class="vote-field">
      <template v-slot:summary-vote-value>
        {{ totalVoteValue }}
      </template>
    </VotingResults>

    <p class="helping-text">Участники голосуют</p>

    <VotingUser
      class="voting-user"
      v-for="user in $store.state.users"
      :key="user.username"
    >
      <template v-if="user.vote > 0" v-slot:vote>
        <div class="_type-vote" state="vote">
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
    return {
      tasknameToggle: true,
      editableTasknameValue: "",
      values: [1, 2, 3, 5, 8, 13],
      iconThink: require(`assets/img/thinking.svg`),
      iconReady: require(`assets/img/done.svg`),
      iconCopy: require(`assets/img/copy.svg`),
      iconEdit: require(`assets/img/edit.svg`),
      iconOk: require(`assets/img/ok.svg`),
      iconClose: require(`assets/img/close.svg`),
      voteEllipse: require(`assets/img/voteEllipse.svg`)
    };
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
    },
    totalVoteValue() {
      if (this.usersWhoVote.length === 0) {
        return 0;
      }
      return (this.averageVoteValue.vote / this.usersWhoVote.length).toFixed(0);
    }
  }
};
</script>

<style scoped>
.app {
  display: block;
  width: 320px;
  padding: 20px 15px;
}

.ui-field {
  padding-bottom: 20px;
}

/* .ui-input {
  padding: 5px 15px;
  margin-left: 40px;
} */

.voting-title,
.voting-user,
.helping-text,
.button {
  margin: 5px 0;
}

.vote-field {
  margin: 20px 15px;
}
</style>
