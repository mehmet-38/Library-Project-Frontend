export default {
  state: {
    userRole: null,
  },
  getters: {
    roleGetters: (state) => {
      return state.userRole;
    },
  },
  mutations: {
    roleStatus(state, status) {
      state.userRole = status;
      //console.log(status);
    },
  },
  actions: {
    roleControl(context, role) {
      context.commit("roleStatus", role);
    },
  },
  namespaced: true,
};
