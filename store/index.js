import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      users: [],
      username: "",
      taskname: ""
    },
    mutations: {
      setUsername(state, value) {
        state.username = value;
      },
      setTaskname(state, value) {
        state.taskname = value;
      },
      addUser(state, name) {
        state.users.push({ username: name, vote: 0 });
        // Vue.set(state.users, 0, name);
      },
      addUserFromForm(state) {
        const name = state.username;
        state.users.push({ username: name, vote: 0 });
      },
      changeCurrentUserVote(state, value) {
        const currentUserIndex = state.users.findIndex(
          user => user.username == state.username
        );

        if (
          state.users[currentUserIndex].vote === 0 ||
          state.users[currentUserIndex].vote !== value
        ) {
          Vue.set(state.users[currentUserIndex], "vote", value);
        } else {
          Vue.set(state.users[currentUserIndex], "vote", 0);
        }
      }
    },
    getters: {
      currentUser: state => {
        const currentUser = state.users.find(
          user => user.username == state.username
        );
        return currentUser;
      },
      usersWhoVote: state => {
        const usersWhoVote = state.users.filter(user => user.vote > 0);
        return usersWhoVote;
      },
      averageVoteValue: state => {
        const users = state.users;
        return users.reduce((a, b) => ({ vote: a.vote + b.vote }));
      },
      allUsers: state => {
        return state.users;
      }
    },
    actions: {
      changeCurrentUserVote(context) {
        context.commit("changeCurrentUserVote");
      }
    }
  });

// 3. Сделать среднее значение

export default store;
