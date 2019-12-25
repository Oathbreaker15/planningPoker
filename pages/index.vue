<template>
  <div class="app">
    <UiField>
      <template v-slot:label>
        <UiLabel class="ui-label">Как зовут?</UiLabel>
      </template>

      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="Лаврентий"
          class="ui-input"
          @input="
            setUsername($event);
            usernameValidationHandler();
          "
        ></UiInput>
      </template>

      <template v-slot:ui-icon>
        <transition name="slide-fade">
          <UiIcon
            v-if="checkUsername"
            class="ui-icon"
            :src="errorIcon()"
          ></UiIcon>
        </transition>
      </template>
    </UiField>

    <UiField>
      <template v-slot:label>
        <UiLabel class="ui-label">Что оцениваем?</UiLabel>
      </template>

      <template v-slot:ui-input>
        <UiInput
          state="regular"
          placeholder="Сложная задачка"
          class="ui-input"
          @input="
            setTaskname($event);
            tasknameValidationHandler();
          "
        >
        </UiInput>
      </template>

      <template v-slot:ui-icon>
        <transition name="slide-fade">
          <UiIcon
            v-if="checkTaskname"
            class="ui-icon"
            :src="errorIcon()"
          ></UiIcon>
        </transition>
      </template>
    </UiField>

    <nuxt-link to="/voting">
      <UiButton state="solid" class="ui-button" @click.native="addUser"
        >Начать голосование</UiButton
      >
    </nuxt-link>
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
      checkTaskname: false
    };
  },
  computed: {
    ...mapState(["users", "username", "taskname"])
  },
  methods: {
    setUsername(value) {
      this.$store.commit("setUsername", value);
    },
    setTaskname(value) {
      this.$store.commit("setTaskname", value);
    },
    addUser() {
      if (
        this.$store.state.username === "" ||
        this.$store.state.taskname === ""
      ) {
        this.usernameValidationHandler();
        this.tasknameValidationHandler();
        return event.preventDefault();
      } else {
        this.$store.commit("addUserFromForm");
      }
    },
    usernameValidationHandler() {
      if (this.$store.state.username === "") {
        return (this.checkUsername = true);
      } else {
        return (this.checkUsername = false);
      }
    },
    tasknameValidationHandler() {
      if (this.$store.state.taskname === "") {
        return (this.checkTaskname = true);
      } else {
        return (this.checkTaskname = false);
      }
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
  margin: 0 auto;
  padding: 0;
}

.ui-label {
  padding: 20px 15px 5px 15px;
}

.ui-input {
  padding: 0px 15px;
}

.button {
  margin: 20px 15px;
}

.ui-icon {
  position: absolute;
  top: -92px;
  left: 0px;
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
