import { createStore } from "vuex";
import roleState from "./modules/role-state";
const user = localStorage.getItem("userToken");
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
    roleState,
  },
});
