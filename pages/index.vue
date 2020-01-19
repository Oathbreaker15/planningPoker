<template>
  <div class="app">
    <UiField class="ui-field">
      <template v-slot:ui-label>
        <UiLabel class="ui-label">Как зовут?</UiLabel>
      </template>

      <template v-if="formHasBeenSubmited" v-slot:ui-error-block>
        <transition name="slide-fade">
          <div class="ui-error-block" v-if="isUsernameEmpty || isTasknameEmpty">
            <p>Заполните все поля!</p>
          </div>
          <div class="ui-error-block" v-if="isUserExist">
            <p>Такой пользователь уже существует!</p>
          </div>
        </transition>
      </template>

      <template v-slot:ui-input>
        <UiInput
          placeholder="Лаврентий"
          class="ui-input"
          :value="editableUsernameValue"
          @input="setUsername($event)"
        >
          <template v-slot:ui-icon>
            <transition name="slide-fade">
              <UiIcon
                v-if="isUsernameEmpty && formHasBeenSubmited"
                class="ui-icon"
                :src="iconError"
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
          placeholder="Сложная задачка"
          class="ui-input"
          :value="editableTasknameValue"
          @input="setTaskname($event)"
        >
          <template v-slot:ui-icon>
            <transition name="slide-fade">
              <UiIcon
                v-if="isTasknameEmpty && formHasBeenSubmited"
                class="ui-icon"
                :src="iconError"
              ></UiIcon>
            </transition>
          </template>
        </UiInput>
      </template>
    </UiField>

    <UiButton state="solid" class="ui-button" @click.native="submitForm"
      >Начать голосование</UiButton
    >
  </div>
</template>

<script>
import UiField from "~/components/UiField.vue";
import UiButton from "~/components/UiButton.vue";
import UiInput from "~/components/UiInput.vue";
import UiLabel from "~/components/UiLabel.vue";
import UiIcon from "~/components/UiIcon.vue";
import { mapState } from "vuex";
import iconError from "~/assets/img/error.svg";

export default {
  components: {
    UiField,
    UiButton,
    UiInput,
    UiLabel,
    UiIcon,
    iconError
  },
  data() {
    return {
      iconError,
      editableUsernameValue: "",
      editableTasknameValue: "",
      formHasBeenSubmited: false,
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
    ...mapState(["users", "username", "taskname"])
  },
  methods: {
    setUsername(value) {
      this.editableUsernameValue = value;
      this.$store.commit("setUsername", this.editableUsernameValue);
    },
    setTaskname(value) {
      this.editableTasknameValue = value;
      this.$store.commit("setTaskname", this.editableTasknameValue);
    },
    submitForm() {
      const usernameExists = this.usernameExists();
      this.isUserExist = usernameExists;
      this.formHasBeenSubmited = true;
      if (this.isUsernameEmpty || this.isTasknameEmpty || usernameExists) {
        return;
      }
      this.editableUsernameValue = "";
      this.$store.commit("addUserFromForm");
      this.formHasBeenSubmited = false;
      this.$router.push("/voting");
    },
    usernameExists() {
      const allUsers = this.$store.state.users;
      const user = allUsers.find(
        obj => obj.username === this.editableUsernameValue
      );
      return Boolean(user);
    }
  }
};
</script>

<style scoped>
@media screen and (min-width: 767px) {
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
  text-align: center;
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
