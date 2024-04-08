<template>
  <div
    id="reg"
    class="registration fixed top-0 left-0 w-full h-full z-20 visible opacity-100"
  >
    <div
      class="absolute w-full h-full top-0 left-0 z-20"
      @click="$emit('click')"
    ></div>
    <div
      id="reg"
      class="rounded-md fixed z-30 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition opacity-100 visible w-full sm:w"
    >
      <div
        class="registration-form m-auto px-5 pt-4 pb- bg-white rounded relative"
      >
        <div class="flex justify-between items-center mb-3">
          <p class="font-bold text-base-4">
            {{ registrationFormInfo.title }}
          </p>
          <svg
            @click="$emit('click')"
            viewBox="0 0 24 24"
            class="w-6 h-6 text-secondary-2 text-base-4 cursor-pointer"
          >
            <path
              d="M17.655 6.333a.9.9 0 01.002 1.273l-4.104 4.108a.4.4 0 000 .566l4.104 4.109a.9.9 0 01.08 1.18l-.081.092a.9.9 0 01-1.273 0l-4.1-4.107a.4.4 0 00-.567 0l-4.1 4.106a.9.9 0 11-1.273-1.271l4.103-4.11a.4.4 0 000-.565L6.343 7.606a.9.9 0 01-.08-1.18l.081-.093a.9.9 0 011.273.001l4.099 4.106a.4.4 0 00.566 0l4.1-4.106a.9.9 0 011.273 0z"
            ></path>
          </svg>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)" class="text-base-1">
            <div v-if="isForm === 'form'">
              <ValidationProvider
                name="name"
                v-slot="{ errors }"
                rules="required"
              >
                <Input
                  labelStyle="mb-1"
                  :label="registrationFormInfo.name"
                  class="my-4"
                  type="text"
                  :error="errors[0]"
                  :value="data.name"
                  v-model="data.username"
                />
              </ValidationProvider>
              <ValidationProvider
                name="phone"
                v-slot="{ errors }"
                rules="required"
              >
                <Input
                  labelStyle="mb-1"
                  :label="registrationFormInfo.phone"
                  type="number"
                  :error="errors[0]"
                  class="my-4"
                  :value="data.phone"
                  v-model="data.phone"
                />
              </ValidationProvider>
              <div class="grid grid-cols-2 gap-3">
                <div>
                  <Select
                    :label="registrationFormInfo.country_id"
                    val="country"
                    @changeicon="countryActive.value = $event"
                    secondClass="mt-1 bg-stand h-13"
                    :list="countryList"
                    :active="countryActive.value.country"
                  />
                </div>
                <ValidationProvider
                  name="email"
                  v-slot="{ errors }"
                  rules="required|email"
                >
                  <Input
                    labelStyle="mb-1"
                    type="email"
                    :value="data.email"
                    :error="errors[0]"
                    :label="registrationFormInfo.address"
                    v-model="data.email"
                  />
                </ValidationProvider>
              </div>
              <ValidationProvider
                name="password"
                v-slot="{ errors }"
                rules="required"
              >
                <div class="relative mt-6 mb-4">
                  <input
                    :type="typePassword ? 'password' : 'text'"
                    labelStyle="mb-1"
                    id="password"
                    name="password"
                    minlength="6"
                    :error="errors[0]"
                    :label="registrationFormInfo.password"
                    :value="data.password"
                    v-model="data.password"
                    placeholder="••••••••"
                    class="bg-secondary px-5 rounded outline-none w-full h-13 mt-2"
                  />
                  <div
                    class="absolute inset-y-0 right-0 pr-3 pt-3 flex items-center text-sm"
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

              <Checkbox
                :registrationFormInfo="registrationFormInfo"
                class="bg-white"
              />
              <div class="flex justify-between items-center">
                <div>
                  <p class="font-medium">
                    {{ registrationFormInfo.account.text }}
                  </p>
                  <p
                    class="font-semibold cursor-pointer text-blue-1"
                    @click="$emit('showFormEnter')"
                  >
                    {{ registrationFormInfo.account.button }}
                  </p>
                </div>
                <Button
                  type="secondary"
                  secondClass="px-9"
                  class="mb-3"
                  @click="onAdd"
                >
                  {{ registrationFormInfo.firstButton }}
                </Button>
              </div>
              <p class="pb-3 text-red">
                {{ error && error["non_field_errors"] }}
              </p>
            </div>
            <div v-if="isForm === 'form2'" class="pb-4">
              <p>
                Код подверждения отправлен на ваш адрес электронной почты:
                Sadri@gmail.com
              </p>
              <div class="my-4">
                <h2 class="mb-1">Код подверждения</h2>
                <Input type="text" />
              </div>
              <div class="flex justify-between items-center">
                <p class="text-blue-1">Отправить повторно</p>
                <Button type="secondary" secondClass="text-red px-9"
                  >Войти</Button
                >
              </div>
            </div>
            <div v-if="isForm === 'form3'" class="pb-4">
              <p>Код подверждения отправлен на ваш номер телефона</p>
              <div class="my-4">
                <h2 class="mb-1">Код подверждения</h2>
                <Input type="text" />
              </div>
              <div class="flex justify-between items-center">
                <p class="text-blue-1 cursor-pointer">Отправить повторно</p>
                <Button type="secondary" secondClass="px-9">Войти</Button>
              </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { ValidationObserver } from "vee-validate";
import { mapState, mapActions } from "vuex";
export default {
  components: { ValidationObserver },
  data() {
    return {
      typePassword: true,
      mySel: "",
      isForm: "form",
      data: {
        email: "",
        password: "",
        username: "",
        phone: "",
        country_id: null,
      },
      countryActive: {
        value: "",
      },

      countryList: [],
    };
  },
  computed: {
    ...mapState({
      error: (state) => state.api.error,
    }),
  },
  props: ["registrationFormInfo"],
  methods: {
    onAdd() {},
    ...mapActions({
      get_page: "api/get_page",
      store: "api/store",
    }),
    onSubmit() {
      // this.isForm ? (this.isForm = "form2") :
      return this.postUser();
    },
    inputName(event) {
      this.data.name = event;
    },
    inputPhone(event) {
      this.data.phone = event;
    },
    async getCountries() {
      let payload = {
        request: `/Countries/`,
        body: [],
      };
      await this.get_page(payload);
      this.countryList = payload.body;
    },
    async postUser() {
      this.data.country = this.mySel || null;
      let payload = {
        request: "/UserRegistration/",
        form: this.data,
      };
      await this.store(payload);
      this.error === null ? this.$emit("click") : "";
    },
  },
  mounted() {
    this.getCountries();
  },
  watch: {
    "countryActive.value"(val) {
      this.data.country_id = val.country;
    },
  },
};
</script>
<style scoped>
.registration {
  background-color: rgba(0, 0, 0, 0.5);
}
.registration-form {
  box-shadow: 0 5px 15px rgb(0 0 0 / 50%);
  width: 456px;
}
.close-registration {
  width: 20px;
  height: 20px;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .registration-form {
    width: auto;
    top: 36px;
  }
  .registration {
    background: none;
  }
}
</style>
