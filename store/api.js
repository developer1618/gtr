export const state = () => ({
  data: [],
  news: [],
  error: [],
  cities: [],
  countries: [],
  promotion: [],
  hotels: [],
  tickets: [],
  partners: [],
  inTours: [],
  recomend: [],
  user: {},
  loading: {
    news: false,
    promotion: false,
    partners: false,
    recomend: false,
    tickets: false,
  },
  loaded: true,
  currency: null,
  loadedTickets: true,
  isSuccess: false,
});
export const mutations = {
  GET_PAGEDATA(state, payload) {
    state[payload.key] = payload.body.results
      ? payload.body.results
      : payload.body;
    if (payload.body.data) state.loadedTickets = false;
    state.loaded = false;
  },
  RELOAD(state) {
    state.data = [];
  },

  DEFAULT_SUCCESS(state, payload) {
    state.isSuccess = payload;
  },
  SET_SUCCESS(state, payload) {
    state.isSuccess = payload;
  },

  SET_COUNT_PAGE(state) {
    state.counPage = payload;
  },
  SET_LOADING(state, payload) {
    state.loading[payload.key] = payload.active;
  },
  SET_LOADED(state, payload) {
    state.loaded = payload;
    state.loadedTickets = payload;
  },
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
};
export const getters = {
  filtNews(state) {
    return state.news;
  },
};
export const actions = {
  change_success({ commit }) {
    commit("SET_SUCCESS", true);
    setTimeout(() => {
      commit("DEFAULT_SUCCESS", false);
    }, 3000);
  },
  async get_page({ commit }, payload) {
    commit("RELOAD");

    try {
      commit("SET_LOADING", {
        key: payload.key,
        active: true,
      });
      let res = await this.$axios.get(
        `${
          !payload.isTrue
            ? this.$axios.defaults.baseURL
            : "https://85.92.110.99:7496"
        }${payload.request}`
      );
      payload.body = res.data;
      commit("SET_LOADING", {
        key: payload.key,
        active: false,
      });
      commit("GET_PAGEDATA", payload);
    } catch (err) {
      console.log(err);
    }
  },

  async store({ dispatch, commit }, payload) {
    try {
      await this.$axios.post(payload.request, payload.form).then((resp) => {
        commit("SET_ERROR", null);
      });
      // dispatch("get_pagedata", payload.refreshData);
    } catch (err) {
      commit("SET_ERROR", err.response.data);
    }
  },
};
