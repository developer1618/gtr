<template>
  <div class="pt-5 pb-5 mob-cont">
    <Cost :isCost="isCost" @onCost="onCost" />

    <div class="flex gap-2.5 items-center my-6">
      <NuxtLink to="/" class="text-base-1"> Главная </NuxtLink>
      <p class="text-base-1">></p>
      <NuxtLink class="text-base-1" to="/IndoorTours"> Отели </NuxtLink>
      <p class="text-base-1">></p>
      <p class="text-base-1">Porto Fira Suites</p>
    </div>
    <div class="main m-auto mt-16 px-4 py-10 xl:p-10 shadow-3xl">
      <h2 class="font-bold text-base-4 pb-4">Заполнения данных</h2>
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(onForm)">
          <div class="border-t-1 border-b-1 py-4" style="border-color: #dedede">
            <div class="flex flex-col gap-6">
              <div class="grid grid-cols-2 gap-6 w-full">
                <div v-for="to in dates" class="mb-2">
                  <ValidationProvider
                    rules="required|alpha_spaces"
                    v-slot="{ errors }"
                  >
                    <Input
                      type="text"
                      :label="to.title"
                      labelStyle="font-medium text-xs"
                      :error="errors[0]"
                      :placeholder="to.placeholder"
                      v-model="to.text"
                    />
                  </ValidationProvider>
                </div>
              </div>

              <div class="w-full gap-6 grid grid-cols-3">
                <div class="w-full">
                  <Select
                    label="Пол"
                    labelStyle="font-medium text-xs"
                    secondClass="w-full bg-stand h-13"
                    :active="polActive"
                    :list="pol"
                    @changeicon="polActive = $event"
                  />
                </div>
                <ValidationProvider
                  v-slot="{ errors }"
                  rules="required|eighteen_years_old"
                >
                  <div class="w-full">
                    <Input
                      :max="new Date('2005-01-01').toISOString().split('T')[0]"
                      :error="errors[0]"
                      secondClass="w-full"
                      label="Дата рождения"
                      type="date"
                      v-model="date"
                      placeholder="ДД/MM/ГГГГ"
                      labelStyle="font-medium text-xs"
                    />
                  </div>
                </ValidationProvider>
                <div class="w-full">
                  <Select
                    class="mt-0"
                    v-if="countries"
                    val="country"
                    :list="countries"
                    label="Гражданство"
                    labelStyle="text-secondary-2"
                    secondClass="bg-stand h-13 w-full"
                    :active="countryActive.value.country"
                    @changeicon="countryActive.value = $event"
                  />
                </div>
              </div>
              <div class="tmp mb-2 grid grid-cols-2">
                <div v-for="(to, id) in contact">
                  <ValidationProvider
                    :rules="`required|${to.rule ? to.rule : ''}`"
                    v-slot="{ errors }"
                  >
                    <Input
                      :error="errors[0]"
                      :label="to.title"
                      :type="to.type || 'email'"
                      labelStyle="font-medium text-xs"
                      v-model="to.text"
                      :placeholder="to.placeholder"
                    />
                  </ValidationProvider>
                </div>
              </div>
            </div>
          </div>
          <div class="block sm:flex justify-end mt-4">
            <Button type="secondary" secondClass="px-9">Оплатить </Button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ValidationErrors from "~/components/validationErrors.vue";
export default {
  head: {
    title: "Форм тур",
  },
  data() {
    return {
      isCost: false,
      date: "",
      countries: [],
      countryActive: {
        value: "",
      },
      countryId: null,
      dates: [
        {
          title: "Имя",
          text: "",
          placeholder: "Например: Sadri",
        },
        {
          text: "",
          title: "Фамилия",
          placeholder: "Например: Mamadziyoev",
        },
      ],
      polActive: "Мужской",
      pol: [
        {
          value: "Мужской",
        },
        {
          value: "Женский",
        },
      ],
      contact: [
        {
          text: "",
          title: "Номер пасспорта",
          placeholder: "Например: AF00010310",
        },
        {
          text: "",
          title: "Серия паспорта",
          placeholder: "Например: AF00010310",
        },
        {
          type: "number",
          text: "",
          title: "Номер телефона",
          placeholder: "Например: +992 933 33 33 33",
        },
        {
          rule: "email",
          text: "",
          title: "Электронная почта",
          placeholder: "Например: yourmail@gmail.com",
        },
      ],
    };
  },
  methods: {
    ...mapActions({
      store: "api/store",
      get_page: "api/get_page",
    }),
    onForm() {
      this.isCost = true;
    },
    async getCountries() {
      let payload = {
        request: `/Countries/`,
        body: [],
      };
      await this.get_page(payload);
      this.countries = payload.body;
    },
    changeFloor(val) {
      this.form.selects.floor.active = val.value;
    },
    changeCitizwnship(val) {
      this.form.selects.citizenship.active = val.value;
    },
    changeDocument(val) {
      this.form.selects.document.active = val.value;
    },
    async onCost() {
      let payload = {
        request: "/HotelTickets/",
        form: {
          name: this.dates[0].text,
          surname: this.dates[1].text,
          date_of_birth: this.date,
          gender: 1,
          passport_numnber: this.contact[0].text,
          phone: this.contact[2].text,
          email: this.contact[3].text,
          citizenship: 0,
        },
      };
      await this.store(payload);
      this.isCost = false;
      window.location.href = "/";
    },
  },
  mounted() {
    this.getCountries();
  },
  components: { ValidationErrors },
};
</script>
<style scoped>
.tmp {
  grid-column: 1 / 3;
  gap: 25px;
}
label {
  color: #999;
}
.main {
  width: 80%;
}
@media screen and (max-width: 1280px) {
  .main {
    width: 100%;
  }
}
@media screen and (min-width: 320px) and (max-width: 680px) {
  .tmp > div:nth-child(3),
  .tmp > div:nth-child(4) {
    grid-column: 1 / 3;
  }
  .main > div {
    margin-bottom: 5px;
  }
}
</style>
