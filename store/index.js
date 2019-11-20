import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      users: [],
      username: "",
      taskname: "",
      userVote: ""
    },
    mutations: {
      setUsername(state, value) {
        state.username = value;
      },
      setTaskname(state, value) {
        state.taskname = value;
      },
      setVote(state, vote) {
        state.userVote = vote;
      },
      addUser(state, name) {
        state.users.push({ username: name, vote: 1 });
        // Vue.set(state.users, 0, name);
      },
      addUserFromForm(state) {
        const name = state.username;
        state.users.push({ username: name, vote: 1 });
      },
      changeCurrentUserVote(state) {
        const name = state.username;
        const vote = state.userVote;
        Vue.set(state.users, 0, { username: name, vote: vote });
      }
    },
    getters: {
      showUsers: state => index => {
        return state.users[index];
      },
      showVote: state => {
        const result = state.users[0];
        return result;
      }
    },
    actions: {
      changeCurrentUserVote(context) {
        context.commit("changeCurrentUserVote");
      }
    }
  });

// 1. Иметь возможность достать объект юзера из массива users
// (создать геттер в store, который возвращает объект моего юзера)
// 2. Обновление голосования (использовать голос из объекта)
// 3. Изменять значение (создать экшн changeCurrentUserVote, через vue.set обновить поле vote и пользователя)

export default store;
