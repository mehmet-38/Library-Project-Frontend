import { createStore } from "vuex";
import user from "./modules/user";
export default createStore({
  state: {
    loggedUser: null,
  },
  getters: {},
  mutations: {
    loggedStatus(state, status) {
      state.loggedUser = status;
      console.log(status);
    },
  },
  actions: {
    loggedControl(context) {
      user
        ? context.commit("loggedStatus", true)
        : context.commit("loggedStatus", false);
    },
  },
  modules: {
    user,
  },
});
