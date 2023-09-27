export const state = () => ({
  flights: {
    activeGrade: "Премиум",
    flightsSearchActive: "Туда обратно",
    flightsSearch: {
      variant: "Туда и обратно",
      passengers: "1 взрослый",
      grade: "Эконом",
      dateFrom: "",
      dateIn: "",
    },
    grade: [
      {
        value: "Эконом",
      },
      {
        value: "Бизнес",
      },
      {
        value: "Первый класс",
      },
    ],

    variants: [
      {
        value: "Туда обратно",
      },
      {
        value: "В одну сторону",
      },
      // {
      //   value: "Сложный маршрут",
      // },
    ],
    active: {
      activeVariant: "Направление",
      activePassengers: "Пассажиры",
      activeGrade: "Класс",
    },
    placeholder: {
      from: "Откуда",
      in: "Куда",
    },
    button: "Найти",
  },
  hotels: {
    programActive: "Без питания",
    activeClass: "5 звёздочный",
    activeCurrencies: "USD",
    button: "Найти",

    number: [
      {
        value: "1 номер, 1 взрослый",
      },
      {
        value: "1 номер, 2 взрослых",
      },
      {
        value: "2 номера, 2 взрослых",
      },
      {
        value: "1 номер, 1 взрослый",
      },
    ],
    currencies: [
      {
        value: "USD",
      },
      {
        value: "TJS",
      },
    ],
    class: [
      {
        value: "1 звёздочный",
      },
      {
        value: "2 звёздочный",
      },
      {
        value: "3 звёздочный",
      },
      {
        value: "4 звёздочный",
      },
      {
        value: "5 звёздочный",
      },
    ],
    nutrition: [
      {
        value: "Без питания",
      },
      {
        value: "Завтрак",
      },
      {
        value: "Полупансион",
      },
      {
        value: "Полный пансион",
      },
      {
        value: "Всё включено",
      },
    ],
  },
  fieldTours: {
    button: "Найти",

    activeProgram: "Групповой",
    activeTour: "Инвидуальный тур 1",
    listTour: [
      {
        value: "Инвидуальный тур 1",
      },
      {
        value: "Инвидуальный тур 2",
      },
      {
        value: "Инвидуальный тур 3",
      },
      {
        value: "Инвидуальный тур 4",
      },
    ],
    activeCur: "USD",
    listCur: [
      {
        value: "USD",
      },
      {
        value: "TJS",
      },
    ],
    activeClass: "5 звёздочный",

    tourClass: [
      {
        value: "1 звёздочный",
      },
      {
        value: "2 звёздочный",
      },
      {
        value: "3 звёздочный",
      },
      {
        value: "4 звёздочный",
      },
      {
        value: "5 звёздочный",
      },
    ],
  },
  domesticTours: {
    button: "Найти",
    activeTour: "Индивидуальный тур 1",
    activeCur: "USD",
    activeTourist: "",
    activeProgram: "Групповой",
    listProgram: [
      {
        value: "Инвидуальный",
      },
      {
        value: "Групповой",
      },
      {
        value: "Абсолютный",
      },
      {
        value: "Супер эксклюзив",
      },
    ],
    listTour: [
      {
        value: "Индивидуальный тур 1",
      },
      {
        value: "Индивидуальный тур 2",
      },
      {
        value: "Индивидуальный тур 3",
      },
      {
        value: "Индивидуальный тур 4",
      },
    ],
    listCur: [
      {
        value: "USD",
      },
      {
        value: "TJS",
      },
    ],
  },
});
export const mutations = {
  SET_UPDATE(state, payload) {
    state[payload.url][payload.key] = payload.body;
  },
};
