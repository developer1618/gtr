export const state = () => ({
  currency: {
    activeCurrency: "USD",
    variants: [
      {
        value: "USD",
      },
      {
        value: "TJS",
      },
    ],
  },
  language: {
    activeLanguage: "en",
    variants: [
      {
        id: 1,
        lang: "rus",
        text: "Русский",
        img: "/images/icons/languages/rus.svg",
      },
      {
        id: 2,
        lang: "tj",
        text: "Таджикский",

        img: "/images/icons/languages/tj.svg",
      },
      {
        id: 3,
        lang: "en",
        text: "Английский",
        img: "/images/icons/languages/en.svg",
      },
      {
        id: 4,
        text: "Китайский",
        lang: "cn",
        img: "/images/icons/languages/cn.svg",
      },
    ],
  },
});
export const mutations = {
  SET_LANG(state, language) {
    state.language.activeLanguage = language;
  },
  SET_CUR(state, curr) {
    state.currency.activeCurrency = curr;
  },
};
export const getters = {};
export const actions = {};
