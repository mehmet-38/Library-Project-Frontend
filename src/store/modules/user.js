import appAxios from "@/utils/appAxios";
export default {
  state: {
    user: null,
  },
  getters: {},
  mutations: {
    user(state, item) {
      state.user = item;
      console.log(state.user);
    },
  },
  actions: {
    getUser(context) {
      appAxios({
        url: "/user",
        method: "GET",
      }).then((user_response) => {
        context.commit("user", user_response.data);
      });
    },
  },
  namespaced: true,
};
