<template>
  <div>
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput
          value="1"
          placeholder="https://www.figma.com/etertrretreetrerteret"
        >
          <template v-slot:icon>
            <a href=""
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

    <VoteField
      class="vote-field"
      :values="values"
      :activeValue="showVote"
      @click.native="
        setVote(takeValue());
        changeCurrentUserVote();
      "
    ></VoteField>

    <p class="helping-text">Участники голосуют</p>

    <VotingUser
      class="voting-user"
      v-for="user in $store.state.users"
      :key="user.username"
    >
      <UiIcon :src="require(`assets/img/thinking.svg`)" slot="icon"></UiIcon>
      <template v-slot:username>
        <div>{{ user.username }}</div>
      </template>
    </VotingUser>

    <nuxt-link to="/results">
      <UiButton state="solid">Завершить</UiButton>
    </nuxt-link>

    <div>{{ showUsers }}</div>
    <div>{{ showUsername }}</div>
    <div>{{ showVote }}</div>
    <div :bind="takeValue">{{ currentValue }}</div>
    <div>{{ showTempVote }}</div>
  </div>
</template>

<script>
import UiField from "~/components/UiField.vue";
import UiButton from "~/components/UiButton.vue";
import UiInput from "~/components/UiInput.vue";
import UiIcon from "~/components/UiIcon.vue";
import VoteField from "~/components/VoteField.vue";
import VotingUser from "~/components/VotingUser.vue";
import VotingTitle from "~/components/VotingTitle.vue";

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiIcon,
    VoteField,
    VotingUser,
    VotingTitle
  },
  data() {
    return {
      values: [1, 2, 3, 5, 8, 13],
      currentValue: 0
    };
  },
  computed: {
    showUsers() {
      return this.$store.getters.showUsers(0);
    },
    showUsername() {
      return this.$store.state.username;
    },
    showVote() {
      return this.$store.getters.showVote.vote;
    },
    showTempVote() {
      return this.$store.vote;
    }
  },
  methods: {
    setVote(vote) {
      this.$store.commit("setVote", vote);
    },
    takeValue() {
      if (
        isNaN(parseInt(event.target.innerHTML)) ||
        parseInt(event.target.innerHTML) === this.showVote
      ) {
        this.currentValue = 0;
      } else {
        this.currentValue = parseInt(event.target.innerHTML);
      }
      return this.currentValue;
    },
    changeCurrentUserVote() {
      this.$store.dispatch("changeCurrentUserVote");
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
</style>
