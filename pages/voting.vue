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

    <VotingTitle
      v-if="tasknameToggle"
      :title="$store.state.taskname"
      class="ui-title"
    >
      <template v-slot:icon>
        <a href="" @click.prevent="changeTasknameToggle"
          ><UiIcon :src="setIcon(iconEdit)"></UiIcon
        ></a>
      </template>
    </VotingTitle>

    <template v-else>
      <UiField class="ui-field">
        <template v-slot:ui-input>
          <UiInput
            :value="taskname"
            placeholder="Редактировать"
            class="ui-hidden-input"
            @input="setTaskname($event)"
          >
          </UiInput>
        </template>
        <template v-slot:ui-second-icon>
          <a href="" @click.prevent="restoreTaskname"
            ><UiIcon
              class="icon-close-hidden"
              :src="setIcon(iconClose)"
            ></UiIcon
          ></a>
        </template>
        <template v-slot:ui-icon>
          <a
            href=""
            class="icon-ok-hidden"
            @click.prevent="changeTasknameToggle"
            ><UiIcon :src="setIcon(iconOk)"></UiIcon
          ></a>
        </template>
      </UiField>
    </template>

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
      tasknameValue: [],
      values: [1, 2, 3, 5, 8, 13],
      iconThink: require(`assets/img/thinking.svg`),
      iconReady: require(`assets/img/done.svg`),
      iconCopy: require(`assets/img/copy.svg`),
      iconEdit: require(`assets/img/edit.svg`),
      iconOk: require(`assets/img/ok.svg`),
      iconClose: require(`assets/img/close.svg`)
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
      if (this.tasknameToggle === false) {
        this.tasknameValue.push(this.$store.state.taskname);
      } else {
        this.tasknameValue.pop();
      }
    },
    restoreTaskname() {
      this.setTaskname(this.tasknameValue[0]);
      this.tasknameValue.pop();
      this.tasknameToggle = !this.tasknameToggle;
    },
    setTaskname(value) {
      this.$store.commit("setTaskname", value);
    },
    tasknameHandler() {
      if (this.tasknameToggle === true) {
        this.tasknameValue = this.$store.state.taskname;
      } else {
        event.preventDefault();
      }
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

.ui-title {
  padding: 0 15px;
}
.ui-hidden-input {
  width: 290px;
  padding: 0 15px;
  position: absolute;
  top: 68px;
  left: 0;
}

.copy-icon {
  position: absolute;
  top: -89px;
  left: 0px;
}

.icon-ok-hidden {
  position: absolute;
  top: -84px;
  left: 0px;
}

.icon-close-hidden {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 78px;
  left: 228px;
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
