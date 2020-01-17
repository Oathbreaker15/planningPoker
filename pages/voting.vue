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
              ><UiIcon :src="setIcon(iconCopy)"></UiIcon
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
          ><UiIcon :src="setIcon(iconEdit)"></UiIcon
        ></a>
      </template>
    </VotingTitle>

    <template v-else>
      <UiField class="ui-field">
        <template v-slot:ui-input>
          <UiInput
            :value="editableTasknameValue"
            state="regular"
            placeholder="Редактировать"
            class="ui-hidden-input"
            :class="{ mini: !tasknameToggle }"
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
        <UiIcon state="icon" :src="userIcon(user.vote)" slot="icon"></UiIcon>
      </template>

      <template v-slot:username>
        <div>{{ user.username }}</div>
      </template>
    </VotingUser>

    <nuxt-link to="/results">
      <UiButton state="solid" class="ui-button">Завершить</UiButton>
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
      editableTasknameValue: "",
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
    // eslint-disable-next-line no-unused-vars
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
.app {
  display: block;
  width: 320px;
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

/* .ui-hidden-input {
} */

.ui-button {
  margin-top: 10px;
}

.vote-field {
  padding-top: 20px;
  margin: 20px 0px;
}
</style>
