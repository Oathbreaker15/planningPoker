<template>
  <div class="app">
    <UiField class="ui-field">
      <template v-slot:ui-input>
        <UiInput
          value="1"
          placeholder="https://www.figma.com/etertrretreetrerteret"
        >
        </UiInput>
      </template>
      <template v-slot:ui-icon>
        <a href="" class="copy-icon" @click.prevent=""
          ><UiIcon :src="setIcon(iconCopy)"></UiIcon
        ></a>
      </template>
    </UiField>

    <VotingTitle v-if="tasknameToggle" :title="$store.state.taskname">
      <template v-slot:icon>
        <a href="" @click="changeTasknameToggle"
          ><UiIcon :src="setIcon(iconEdit)"></UiIcon
        ></a>
      </template>
    </VotingTitle>

    <UiInput
      v-else
      :value="taskname"
      placeholder="Сложная задачка"
      class="ui-input"
      @input="setTaskname($event)"
    >
    </UiInput>

    <VoteField
      class="vote-field"
      :values="values"
      :activeValue="currentUser.vote"
      @input="changeCurrentUserVote"
    ></VoteField>

    <p class="helping-text">Участники голосуют</p>

    <VotingUser
      class="voting-user"
      v-for="user in $store.state.users"
      :key="user.username"
    >
      <template v-slot:icon>
        <UiIcon state="icon" :src="userIcon(user.vote)" slot="icon"></UiIcon>
      </template>

      <template v-slot:username>
        <div>{{ user.username }}</div>
      </template>
    </VotingUser>

    <nuxt-link to="/results">
      <UiButton state="solid">Завершить</UiButton>
    </nuxt-link>
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
      tasknameToggle: true,
      values: [1, 2, 3, 5, 8, 13],
      iconThink: require(`assets/img/thinking.svg`),
      iconReady: require(`assets/img/done.svg`),
      iconCopy: require(`assets/img/copy.svg`),
      iconEdit: require(`assets/img/edit.svg`)
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    // могут возвращать и работать с аргументами
    changeTasknameToggle() {
      this.tasknameToggle = !this.tasknameToggle;
    },
    setTaskname(value) {
      this.$store.commit("setTaskname", value);
    },
    changeCurrentUserVote(value) {
      this.$store.commit("changeCurrentUserVote", value);
    },
    userIcon(value) {
      if (value === 0) {
        return this.iconThink;
      } else {
        return this.iconReady;
      }
    },
    setIcon(value) {
      return value;
    }
  }
};
</script>

<style scoped>
.ui-field {
  padding: 20px 15px;
}

.copy-icon {
  position: absolute;
  top: -89px;
  left: 0px;
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
