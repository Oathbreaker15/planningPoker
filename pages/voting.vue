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

    <VotingTitle
      v-if="tasknameToggle"
      :title="$store.state.taskname"
      class="ui-title"
    >
      <template v-slot:icon>
        <a class="icon" href="" @click.prevent="changeTasknameToggle"
          ><UiIcon :src="iconEdit"></UiIcon
        ></a>
      </template>
    </VotingTitle>

    <template v-else>
      <UiField class="ui-field">
        <template v-slot:ui-input>
          <UiInput
            :value="editableTasknameValue"
            placeholder="Редактировать"
            class="ui-hidden-input"
            @input="setEditableTasknameValue($event)"
          >
            <template v-slot:ui-icon>
              <a href="" @click.prevent="restoreTaskname"
                ><UiIcon class="icon-close-hidden" :src="iconClose"></UiIcon
              ></a>
              <a href="" class="icon-ok-hidden" @click.prevent="setNewTaskname"
                ><UiIcon :src="iconOk"></UiIcon
              ></a>
            </template>
          </UiInput>
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
        <UiIcon :src="userIconToggle(user.vote)" slot="icon"></UiIcon>
      </template>

      <template v-slot:username>
        <div>{{ user.username }}</div>
      </template>
    </VotingUser>

    <UiButton state="solid" class="ui-button" @click.native="toResults()"
      >Завершить</UiButton
    >
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
import iconThink from "~/assets/img/thinking.svg";
import iconReady from "~/assets/img/done.svg";
import iconCopy from "~/assets/img/copy.svg";
import iconEdit from "~/assets/img/edit.svg";
import iconOk from "~/assets/img/ok.svg";
import iconClose from "~/assets/img/close.svg";

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
      editableTasknameValue: "",
      values: [1, 2, 3, 5, 8, 13],
      iconThink,
      iconReady,
      iconCopy,
      iconEdit,
      iconOk,
      iconClose
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser;
    }
  },
  methods: {
    // могут возвращать и работать с аргументами
    toResults() {
      this.$router.push("/results");
    },
    setEditableTasknameValue(e) {
      this.editableTasknameValue = e;
    },
    changeTasknameToggle() {
      this.editableTasknameValue = this.$store.state.taskname;
      this.tasknameToggle = !this.tasknameToggle;
    },
    // eslint-disable-next-line no-unused-vars
    updateEditableTaskname(value) {
      value = this.editableTasknameValue;
    },
    setNewTaskname() {
      if (this.tasknameToggle === false) {
        this.setTaskname(this.editableTasknameValue);
      }
      this.tasknameToggle = !this.tasknameToggle;
    },
    restoreTaskname() {
      this.tasknameToggle = !this.tasknameToggle;
    },
    setTaskname(value) {
      this.$store.commit("setTaskname", value);
    },
    changeCurrentUserVote(value) {
      this.$store.commit("changeCurrentUserVote", value);
    },
    userIconToggle(value) {
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
@media (min-width: 767px) {
  .app {
    width: 768px;
    margin: 0 auto;
  }
}

@media (max-width: 767px) and (min-width: 320px) {
  .button {
    width: 290px;
  }
}

.app {
  display: block;
  padding: 20px 15px;
}

.icon-close-hidden {
  width: 32px;
}

.ui-title {
  margin-top: 20px;
}

.voting-user,
.helping-text {
  margin-bottom: 10px;
}

.ui-button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
}

.vote-field {
  width: 100%;
  padding-top: 20px;
}
</style>
