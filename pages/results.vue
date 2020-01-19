<template>
  <div class="app">
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput
          placeholder="https://www.figma.com/file/86sSkC58o9bFTbhyvs7kHR/Agile-Storypoints?node-id=1%3A25"
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
        <UiIcon state="icon" :src="iconThink"></UiIcon>
      </template>

      <div slot="username">{{ user.username }}</div>
    </VotingUser>

    <UiButton state="bordered" @click.native="toVoting()"
      >Переоценить эту</UiButton
    >

    <UiButton state="solid" @click.native="toStart()">Оценить другую</UiButton>
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
import iconThink from "~/assets/img/thinking.svg";
import iconReady from "~/assets/img/done.svg";
import iconCopy from "~/assets/img/copy.svg";
import iconEdit from "~/assets/img/edit.svg";
import iconOk from "~/assets/img/ok.svg";
import iconClose from "~/assets/img/close.svg";
import voteEllipse from "~/assets/img/voteEllipse.svg";

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
      iconThink,
      iconReady,
      iconCopy,
      iconEdit,
      iconOk,
      iconClose,
      voteEllipse
    };
  },
  computed: {
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
  },
  methods: {
    toStart() {
      this.$router.push("/");
    },
    toVoting() {
      this.$router.push("/voting");
    }
  }
};
</script>

<style scoped>
@media (min-width: 767px) {
  .app {
    width: 768px;
    margin: 0 auto;
  }

  .button {
    width: 290px;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .button {
    width: 290px;
  }

  .vote-field .summary {
    width: 85px;
    height: 85px;
  }
}

.app {
  display: block;
  padding: 20px 15px;
}

.ui-field {
  padding-bottom: 20px;
}

.voting-title,
.voting-user,
.helping-text {
  margin: 5px 0;
}

.button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}

.vote-field {
  width: 185px;
  height: 185px;
  display: block;
  margin: 0 auto;
}
</style>
