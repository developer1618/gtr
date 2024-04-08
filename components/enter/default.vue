<template>
  <div
    class="registration fixed top-0 left-0 w-full h-full z-20 visible opacity-100"
  >
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="$emit('click')"
    ></div>
    <div
      class="w-full sm:w rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible"
    >
      <div class="enter-form m-auto p-6 bg-white rounded relative">
        <div class="flex justify-between">
          <p class="font-bold text-base-4">
            {{ isEntry === "entry" ? formEnterInfo.title : "Сменить пароль" }}
          </p>
          <svg
            @click="$emit('click')"
            viewBox="0 0 24 24"
            class="close-registration text-secondary-2 text-base-4 cursor-pointer"
          >
            <path
              d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
            ></path>
          </svg>
        </div>
        <div v-if="isEntry === 'entry'">
          <form action="#" class="text-base-1" @submit.prevent="postUser">
            <ValidationProvider
              name="name"
              v-slot="{ errors }"
              rules="required|email"
            >
              <div class="my-6">
                <label for="text" class="font-semibold">{{
                  formEnterInfo.login
                }}</label>
                <input
                  type="email"
                  v-model="data.email"
                  id="text"
                  placeholder="Введите Логин"
                  class="bg-secondary px-5 rounded outline-none w-full h-13 mt-2"
                />
                <span class="text-red">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>
            <ValidationProvider
              name="name"
              v-slot="{ errors }"
              rules="required|email"
            >
              <div class="relative mt-6 mb-4">
                <label for="password" class="font-semibold">{{
                  formEnterInfo.password
                }}</label>
                <input
                  :type="typePassword ? 'password' : 'text'"
                  id="password"
                  name="password"
                  v-model="data.password"
                  placeholder="••••••••"
                  class="bg-secondary px-5 rounded outline-none w-full h-13 mt-2"
                />
                <div
                  class="absolute inset-y-0 right-0 pr-3 pt-6 flex items-center text-sm"
                >
                  <img
                    src="@/assets/icons/eye-pass-on.svg"
                    v-if="typePassword"
                    @click="typePassword = !typePassword"
                    alt="on"
                    class="cursor-pointer"
                  />
                  <img
                    src="@/assets/icons/eye-pass-off.svg"
                    v-else
                    alt="off"
                    @click="typePassword = !typePassword"
                    class="cursor-pointer"
                  />
                </div>
                <span class="text-red">{{ errors[0] }}</span>
              </div>
            </ValidationProvider>

            <div class="flex justify-between items-center mb-9">
              <div class="agreement flex gap-3">
                <input
                  type="checkbox"
                  class="checkbox"
                  id="agreement"
                  name="agreement"
                />
                <label for="agreement" class="font-normal">
                  <div class="font-medium mt-0.5">
                    {{ formEnterInfo.rememberMe }}
                  </div>
                </label>
              </div>
              <div class="forgot__password">
                <a
                  href="#"
                  class="link font-semibold cursor-pointer"
                  @click="isEntry = 'forgot'"
                  >{{ formEnterInfo.forgotPassowrd }}</a
                >
              </div>
            </div>
            <p v-if="error" style="color: red">{{ error }}</p>
            <div class="flex justify-between items-center">
              <div>
                <p class="font-medium mb-1">
                  {{ formEnterInfo.account.text }}
                </p>
                <p
                  class="inline-block font-semibold cursor-pointer text-blue-1 hover:underline"
                  @click="$emit('openRegistationForm')"
                >
                  {{ formEnterInfo.account.button }}
                </p>
              </div>
              <Button type="secondary" secondClass="px-9">Войти</Button>
            </div>
          </form>
        </div>
        <div v-if="isEntry === 'forgot'">
          <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(forgotPass)">
              <p class="text-zero mt-5 mb-2">Укажите адрес электронной почты</p>
              <ValidationProvider v-slot="{ errors }" rules="require|email">
                <div>
                  <Input
                    type="text"
                    :error="errors[0]"
                    label="Адрес электронной почты"
                  />
                </div>
              </ValidationProvider>
              <div class="flex justify-end">
                <Button type="secondary" action="submit" secondClass="px-9 my-4"
                  >Далее</Button
                >
              </div>
            </form>
          </ValidationObserver>
        </div>
        <div v-if="isEntry === 'forgot2'">
          <form>
            <p class="text-zero mt-5 mb-2">
              Код подверждения отправлен на адрес электронной почты:
              Sadri@gmail.com
            </p>
            <div>
              <p>Код подверждения</p>
              <Input type="text" />
            </div>
            <div class="flex justify-end">
              <Button type="secondary" secondClass="px-9 my-4">Далее</Button>
            </div>
          </form>
        </div>
        <div v-if="isEntry === 'forgot3'">
          <form>
            <div>
              <p>Новый пароль</p>
              <Input type="text" />
            </div>
            <div class="flex justify-end">
              <Button type="secondary" secondClass="px-9 my-4">Далее</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  props: ["isValidate"],
  data() {
    return {
      typePassword: true,
      isEntry: "entry",
      isForm: true,
      users: [],
      error: "",
      isActive: true,
      data: {
        email: "",
        password: "",
        // checkbox: false,
        // name: "",
        // phone: "",
        // country: "",
      },
      formEnterInfo: {
        title: "Войти",
        login: "Логин",
        password: "Пароль",
        rememberMe: "Запомнить меня",
        forgotPassowrd: "Забыли пароль?",
        account: {
          text: "У вас нет аккаунта?",
          button: "Зарегистрироваться",
        },
      },
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.api.user,
    }),
  },
  methods: {
    ...mapActions({
      get_page: "api/get_page",
    }),
    ...mapMutations({
      get_user: "api/SET_USER",
    }),
    async getUsers() {
      let payload = {
        request: `/UserProfile/${localStorage.getItem("id")}`,
        body: [],
        key: "user",
      };
      await this.get_page(payload);
    },
    async getUserProfile() {
      let payload = {
        request: "/UserRegistration/?page=3",
        body: [],
      };
      await this.get_page(payload);
      this.users = payload.body.results;
    },
    async postUser() {
      await this.$axios
        .post(`http://85.92.110.99:7496/api/login/`, this.data)
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response.data.access);
          localStorage.setItem("id", response.data.id);
          window.location.href = "profile";
        })
        .catch((err) => {
          this.error = "Неправильный логин или пароль";
        });
    },

    async goToProfilePage() {},
    forgotPass() {
      this.isEntry = "forgot2";
    },
  },
};
</script>
<style scoped>
.registration {
  background-color: rgba(0, 0, 0, 0.5);
}
.enter-form {
  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  width: 400px;
}
.agreement span a {
  border-bottom: 1px solid #222;
}
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.checkbox + label {
  display: inline-flex;
  user-select: none;
}
.checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 0.25em;
  margin-right: 0.75em;
  margin-top: 0.125rem;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
}
.checkbox:checked + label::before {
  border-color: #ffba0f;
  background-color: #ffba0f;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
.close-registration {
  width: 20px;
  height: 20px;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .registration {
    background: none;
  }
  .enter-form {
    width: 100%;
    top: 36px;
  }
}
</style>
