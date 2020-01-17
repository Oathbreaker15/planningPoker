<template>
  <div class="app">
    <UiField class="ui-field">
      <template v-slot:ui-label>
        <UiLabel class="ui-label">Как зовут?</UiLabel>
      </template>

      <template v-slot:ui-error-block>
        <transition name="slide-fade">
          <div
            class="ui-error-block"
            v-if="isErrorsVisible && (isUsernameEmpty || isTasknameEmpty)"
          >
            <p>Заполните все поля!</p>
          </div>
          <div class="ui-error-block" v-if="isUserExist">
            <p>Такой пользователь уже существует!</p>
          </div>
        </transition>
      </template>

      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="Лаврентий"
          class="ui-input"
          v-model="editableUsernameValue"
          @input="setUsername($event)"
        >
          <template v-slot:ui-icon>
            <transition name="slide-fade">
              <UiIcon
                v-if="isUsernameEmpty && isErrorsVisible"
                class="ui-icon"
                :src="errorIcon()"
              ></UiIcon>
            </transition>
          </template>
        </UiInput>
      </template>
    </UiField>

    <UiField>
      <template v-slot:ui-label>
        <UiLabel class="ui-label">Что оцениваем?</UiLabel>
      </template>

      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="Сложная задачка"
          class="ui-input"
          v-model="editableTasknameValue"
          @input="setTaskname($event)"
        >
          <template v-slot:ui-icon>
            <transition name="slide-fade">
              <UiIcon
                v-if="isTasknameEmpty && isErrorsVisible"
                class="ui-icon"
                :src="errorIcon()"
              ></UiIcon>
            </transition>
          </template>
        </UiInput>
      </template>
    </UiField>

    <nuxt-link to="">
      <UiButton
        state="solid"
        class="ui-button"
        @click.native="
          isUserExistToggle();
          submitForm();
        "
        >Начать голосование</UiButton
      >
    </nuxt-link>
    <!-- <div v-for="user in $store.state.users" :key="user.username">
      {{ user.username }}
    </div> -->
    <!-- <div>{{ isUserExist }}</div> -->
    <!-- <div>{{ usernameDublicateCheck() }}</div> -->
    <div>{{ allUsers() }}</div>
    <div>{{ isUsernameExist }}</div>
  </div>
</template>

<script>
import UiField from "~/components/UiField.vue";
import UiButton from "~/components/UiButton.vue";
import UiInput from "~/components/UiInput.vue";
import UiLabel from "~/components/UiLabel.vue";
import UiIcon from "~/components/UiIcon.vue";
import { mapState } from "vuex";
import Vue from "vue";
import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiLabel,
    UiIcon
  },
  data() {
    return {
      iconError: require(`assets/img/error.svg`),
      checkUsername: false,
      checkTaskname: false,
      editableUsernameValue: "",
      editableTasknameValue: "",
      isErrorsVisible: false,
      isUserExist: false
    };
  },
  computed: {
    isUsernameEmpty() {
      return Boolean(!this.editableUsernameValue);
    },
    isTasknameEmpty() {
      return Boolean(!this.editableTasknameValue);
    },
    // isUsernameExist() {
    //   return Boolean(this.usernameDublicateCheck());
    // },
    ...mapState(["users", "username", "taskname"])
  },
  methods: {
    allUsers() {
      return this.$store.getters.allUsers;
    },
    setUsername(value) {
      this.editableUsernameValue = value;
      this.$store.commit("setUsername", this.editableUsernameValue);
    },
    setTaskname(value) {
      this.editableTasknameValue = value;
      this.$store.commit("setTaskname", this.editableTasknameValue);
    },
    submitForm() {
      if (this.isUsernameEmpty || this.isTasknameEmpty || this.isUserExist) {
        this.isErrorsVisible = true;
        event.preventDefault();
        if (this.usernameDublicateCheck()) {
          this.isUserExist = true;
          event.preventDefault();
        }
      } else {
        this.isErrorsVisible = false;

        this.editableUsernameValue = "";
        this.$store.commit("addUserFromForm");
      }
    },
    isUserExistToggle() {
      if (this.usernameDublicateCheck()) {
        this.isUserExist = true;
        event.preventDefault();
      } else {
        this.isUserExist = false;
      }
    },
    usernameDublicateCheck() {
      const allUsernames = this.$store.getters.allUsers;
      let exist = allUsernames.find(
        obj => obj.username === this.editableUsernameValue
      );
      // eslint-disable-next-line no-console
      return Boolean(exist);
    },
    errorIcon() {
      return this.iconError;
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

.ui-input {
  margin: 5px 0px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
