export const state = () => ({
  loggedIn: false,
  user: null,
});

export const getters = () => ({
  isAuth: (state) => {
    return state.loggedIn;
  },
  user: (state) => {
    return state.user;
  },
});

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
};

export const actions = {
  async get_user({ commit }) {
    if (localStorage.getItem("token")) {
      await this.$axios
        .get(`/UserProfile/${localStorage.getItem("id")}/`)
        .then((res) => {
          localStorage.setItem("user", JSON.stringify(res.data));
        });
    }
  },
};
