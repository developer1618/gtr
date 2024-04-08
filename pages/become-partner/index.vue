<template>
  <div class="become-partner mob-cont">
    <HeaderDefault :headerInfo="headerInfo" class="bg-transparent" />
    <div
      class="xl:container md:container sm:container ls 2xl:container mx-auto pt-4 sm:pt-10 sm:pb-32"
    >
      <div
        class="become-partner-form mx-auto py-8 px-5 sm:px-8 bg-white rounded-xl"
      >
        <h2 class="font-medium text-base-5.5 xl:text-base-5 pb-8">
          {{ partnerFormInfo.title }}
        </h2>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form
            @submit.prevent="handleSubmit(onSubmit)"
            class="flex flex-col gap-4"
          >
            <div class="flex flex-col sm:grid grid-cols-2 gap-4">
              <div class="w-full">
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  class="w-full"
                >
                  <Input
                    v-model="partner.company_name"
                    type="text"
                    :error="errors[0]"
                    class="mt-0 mob-inp"
                    :label="partnerFormInfo.labels.nameCompany"
                    labelStyle="text-secondary-2"
                    sw
                  />
                </ValidationProvider>
              </div>
              <ValidationProvider
                rules="required|alpha_spaces"
                v-slot="{ errors }"
                class="w-full"
              >
                <div>
                  <Input
                    :onlyLetter="true"
                    :error="errors[0]"
                    labelStyle="text-secondary-2"
                    v-model="partner.responsible_person"
                    type="text"
                    :label="partnerFormInfo.labels.name"
                    class="mt-0 mob-inp"
                  />
                </div>
              </ValidationProvider>
            </div>
            <div class="flex flex-col sm:grid gap-4 grid-cols-2">
              <ValidationProvider
                rules="required"
                v-slot="{ errors }"
                class="w-full"
              >
                <div>
                  <Input
                    labelStyle="text-secondary-2"
                    v-model="partner.phone"
                    type="number"
                    :label="partnerFormInfo.labels.phone"
                    class="mt-0 mob-inp"
                    :error="errors[0]"
                  />
                </div>
              </ValidationProvider>
              <ValidationProvider
                rules="required|email"
                v-slot="{ errors }"
                class="w-full"
              >
                <div>
                  <Input
                    v-model="partner.email"
                    type="email"
                    labelStyle="text-secondary-2"
                    :label="partnerFormInfo.labels.email"
                    class="mt-0 mob-inp"
                    :error="errors[0]"
                  />
                </div>
              </ValidationProvider>
            </div>
            <div class="flex gap-4.5 pb-6 mob-g">
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
                <div
                  class="w-full col-start-1 col-end-2 sm:col-start-auto sm:col-end-auto"
                >
                  <Select
                    class="mt-0"
                    v-if="countries"
                    val="country"
                    :list="countries"
                    :label="partnerFormInfo.labels.country"
                    labelStyle="text-secondary-2"
                    secondClass="bg-stand h-13 w-full"
                    :active="countryActive.value.country"
                    @changeicon="countryActive.value = $event"
                  />
                </div>
                <div
                  class="w-full col-start-2 col-end-4 sm:col-start-auto sm:col-end-auto"
                >
                  <!--  <Input required class="mt-0" type="text" /> -->
                  <Select
                    val="city"
                    class="mt-0 whitespace-nowrap"
                    secondClass="bg-stand h-13 w-full"
                    :list="cities"
                    :label="partnerFormInfo.labels.city"
                    labelStyle="text-secondary-2"
                    @changeicon="cityActive.value = $event"
                    :active="cityActive.value.city"
                  />
                </div>
                <ValidationProvider
                  rules="required"
                  v-slot="{ errors }"
                  class="mt-6 sm:mt-0 col-start-1 col-end-4 sm:col-start-auto sm:col-end-auto"
                >
                  <div>
                    <Input
                      v-model="partner.street"
                      :error="errors[0]"
                      type="text"
                      labelStyle=" text-secondary-2"
                      :label="partnerFormInfo.labels.street"
                    />
                  </div>
                </ValidationProvider>
              </div>
            </div>
            <div class="flex justify-between items-baseline">
              <div
                class="inline-flex items-center mob-cont gap-2.5 cursor-pointer bg-gray-800 hover:bg-secondary p-4 rounded"
                @click="goMainPage"
              >
                <div>
                  <img src="/images/icons/arrowLeft.svg" alt="Arrow Left" />
                </div>
                <div>
                  <p class="text-base-1">
                    {{ back }}
                  </p>
                </div>
              </div>
              <Button
                class="text-right"
                type="secondary"
                className="search"
                secondClass="px-6"
              >
                {{ partnerFormInfo.button }}
              </Button>
            </div>
          </form>
          <p class="pb-3 text-red">
            {{ error ? Object.values(error)[0] : "" }}
          </p>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  layout: "partner",
  head: {
    title: "Стать партнером",
  },
  computed: {
    // ...mapState({
    //   cities: (state) => state.api.cities,
    //   countries: (state) => state.api.countries,
    // }),
  },
  data() {
    return {
      back: "На главную",
      cities: [],
      countries: [],
      countryActive: {
        value: "",
      },
      cityActive: {
        value: "",
      },
      countryId: null,
      cityId: null,
      partner: {
        email: "",
        company_name: "",
        responsible_person: "",
        street: "",
        city: "",
        country: "",
        phone: null,
      },
      headerInfo: {
        search: "Страны, города, отели",
        help: "Помощь",
        languages: {
          activeLang: "/images/icons/languages/en.svg",
          variants: [
            {
              id: 1,
              img: "/images/icons/languages/en.svg",
            },
            {
              id: 2,
              img: "/images/icons/languages/rus.svg",
            },
            {
              id: 3,
              img: "/images/icons/languages/tj.svg",
            },
          ],
        },
        currencies: {
          activeCurrencies: "USD",
          variants: [
            {
              id: 1,
              value: "USD",
            },
            {
              id: 2,
              value: "TJS",
            },
          ],
        },
        becomePartnerButton: "Стать партнером",
        registrationButton: "Регистрация",
        helpButton: "Помощь",
      },
      partnerFormInfo: {
        title: "Для получения статуса партнёра заполните заявку",
        labels: {
          nameCompany: "Название компании: *",
          phone: "Мобильный номер: *",
          name: "Ф.И.О *",
          country: "Страна",
          city: "Город",
          email: "Адрес электронной почты *",
          street: "Улица/Дом",
        },
        button: "Отправить",
        listCountry: [
          {
            value: "Страна 1",
          },
          {
            value: "Страна 2",
          },
          {
            value: "Страна 3",
          },
          {
            value: "Страна 4",
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      error: (state) => state.api.error,
    }),
  },
  methods: {
    ...mapMutations({
      loading_alert: "alert/LOADING_ALERT",
      change_state: "CHANGE_STATE",
    }),
    ...mapActions({
      get_page: "api/get_page",
      store: "api/store",
      change_success: "api/change_success",
      success_alert: "alert/success_alert",
      error_alert: "alert/error_alert",
    }),
    async getCountries() {
      let payload = {
        request: `/Countries/`,
        body: [],
      };
      await this.get_page(payload);
      this.countries = payload.body;
    },
    async getCities() {
      let payload = {
        request: `/Cities/?limit=5000`,
        body: [],
      };
      await this.get_page(payload);
      this.cities = payload.body;
    },
    async onSubmit() {
      try {
        this.loading_alert(); /* Запуск загрузечного модального окна */
        this.partner.country = this.countryActive.value.id;
        this.partner.city = this.cityActive.value.id;
        let payload = {
          request: "/BePartners/",
          form: this.partner,
        };
        await this.store(payload);
        this.change_success();
        this.success_alert(); /* Запуск успешного модального окна */
        this.$router.push("/"); /* Направляем на главную страницу */
      } catch (err) {
        this.error_alert(
          err.response.data.message
        ); /* Запуск ошибочного модального окна */
        console.log(err);
      }
    },
    isLetter(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[A-Za-zА-Яа-я\s]+$/.test(char)) return true;
      else e.preventDefault();
    },
    goMainPage() {
      setTimeout(() => {
        this.$router.back();
      });
    },
  },
  mounted() {
    this.getCountries();
    this.getCities();
  },
};
</script>
<style scoped>
.become-partner {
  background: rgb(64, 89, 111);
  background: linear-gradient(
    180deg,
    rgba(64, 89, 111, 1) 0%,
    rgba(155, 180, 182, 1) 100%
  );
}
.become-partner-form {
  max-width: 800px;
}
@media screen and (min-width: 250px) and (max-width: 680px) {
  .ad {
    grid-column-start: 1;
    grid-column-end: 3;
  }
  .zer {
    width: 100%;
  }
}
@media screen and (max-width: 570px) {
  .mob-g {
    flex-wrap: wrap;
  }
  .mob-inp {
    width: 100%;
  }
}
</style>
