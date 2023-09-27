import Vue from "vue";
import { ValidationObserver, ValidationProvider, extend } from "vee-validate";
import {
  required,
  email,
  min,
  max,
  confirmed,
  between,
  min_value,
} from "vee-validate/dist/rules";

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

extend("min_value", {
  ...min_value,
  message: "Минимальная цена от 500",
});

extend("required", {
  ...required,
  message: "Данные не заполнены",
});

extend("email", {
  ...email,
  message: "Укажите валидный email",
});
extend("between", {
  ...between,
  message: "Цена не может быть от 500 до 5000",
});
extend("min", {
  ...min,
  message: "Минимальная длина символа 9",
});
extend("max", {
  ...max,
  message: "Максимальная длина символа 9",
});
extend("confirmed", {
  ...confirmed,
  message: "Оба поля должны совпадать",
});
extend("alpha_spaces", {
  validate: (value) => /^[\p{L}\s]+$/u.test(value),
  message: "Введите только буквы",
});

extend("eighteen_years_old", {
  validate: (value) => {
    if (!value) {
      return false;
    }
    // calculate 18 years ago from today
    let eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    let inputDate = new Date(value);
    return inputDate <= eighteenYearsAgo;
  },
  message: "Вы дожны быть больше 18 лет",
});
